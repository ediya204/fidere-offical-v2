// Read-only source and localhost HTTP validation. The sole output is the JSON report.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'artifacts/arabic-i18n/validation.json');
const args = process.argv.slice(2);
const offline = args.includes('--offline');
const baseArgument = args.find(arg => arg.startsWith('--base-url='));
const base = new URL(baseArgument?.slice('--base-url='.length) ?? 'http://127.0.0.1:3000');
if (args.some(arg => arg !== '--offline' && !arg.startsWith('--base-url='))) {
  throw new Error('Usage: node scripts/validate-arabic.mjs [--offline] [--base-url=http://127.0.0.1:3000]');
}
if (base.protocol !== 'http:' || !['127.0.0.1', 'localhost', '[::1]'].includes(base.hostname) || base.username || base.password) {
  throw new Error('Only an unauthenticated localhost HTTP origin is permitted.');
}
const languages = ['en', 'zh-hant', 'ja', 'ar'];
const languageTags = { en: 'en', 'zh-hant': 'zh-Hant', ja: 'ja', ar: 'ar' };
const failures = [];
const report = {
  checkedAt: new Date().toISOString(),
  mode: offline ? 'offline' : 'localhost-http',
  baseUrl: base.origin,
  scope: 'Source dictionaries, prerendered page inventory, HTTP pages and sitemap. No browser automation, form submissions or external requests.',
  allowances: ['Original English policy-document contents', 'Brand names, original postal addresses, identifiers and coordinates'],
  failures,
};
const check = (ok, scope, message, detail) => { if (!ok) failures.push({ scope, message, ...(detail === undefined ? {} : { detail }) }); };
const read = relative => fs.readFile(path.join(root, relative), 'utf8');
const readJson = async relative => JSON.parse(await read(relative));
const arabic = /\p{Script=Arabic}/u;
const han = /\p{Script=Han}/u;

function decode(value) {
  return value.replace(/&#(x[0-9a-f]+|\d+);/gi, (_, code) => String.fromCodePoint(code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : Number(code)))
    .replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}
function attributes(tag) {
  const found = {};
  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    found[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4]);
  }
  return found;
}
const plainText = html => decode(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
const localeOf = route => languages.slice(1).find(locale => route === `/${locale}` || route.startsWith(`/${locale}/`)) ?? 'en';
const slugOf = route => localeOf(route) === 'en' ? route.slice(1) : route.slice(localeOf(route).length + 1).replace(/^\//, '');
const routeFor = (locale, slug) => locale === 'en' ? `/${slug}` : `/${locale}${slug ? `/${slug}` : ''}`;
const normalizedUrl = value => { try { return new URL(value).href; } catch { return null; } };

async function inspectSource() {
  const constants = {};
  const site = ts.createSourceFile('site.ts', await read('src/lib/site.ts'), ts.ScriptTarget.Latest, true);
  const visitConstants = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(site) === 'company' && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      for (const property of node.initializer.properties) {
        if (ts.isPropertyAssignment(property) && ts.isStringLiteralLike(property.initializer)) constants[`company.${property.name.getText(site)}`] = property.initializer.text;
      }
    }
    ts.forEachChild(node, visitConstants);
  };
  visitConstants(site);
  const dictionaries = {};
  const owners = new Map();
  const groups = [];
  for (const group of ['interface', 'services', 'institution']) {
    const file = `src/lib/i18n/ar-${group}.json`;
    const raw = await read(file);
    const entries = JSON.parse(raw);
    const source = await readJson(`artifacts/arabic-i18n/${group}-source.json`);
    const expected = new Set(source.map(entry => entry.en));
    const missing = [...expected].filter(key => !Object.hasOwn(entries, key));
    const extra = Object.keys(entries).filter(key => !expected.has(key));
    check(missing.length === 0, file, 'Missing source keys', missing);
    check(extra.length === 0, file, 'Unexpected keys outside the assigned source inventory', extra);
    for (const [key, value] of Object.entries(entries)) {
      check(!owners.has(key), file, 'Key is also defined in another dictionary', { key, other: owners.get(key) });
      owners.set(key, file);
      const isString = typeof value === 'string' && value.trim().length > 0;
      check(isString, file, 'Empty or non-string translation', key);
      if (!isString) continue;
      check(arabic.test(value) || key === 'FIDERE' && value === 'FIDERE', file, 'Translation has no Arabic text', key);
      check(!han.test(value), file, 'Translation contains Chinese characters', key);
      check(value !== key || key === 'FIDERE', file, 'English source used as translation', key);
      check((key.match(/\n/g) ?? []).length === (value.match(/\n/g) ?? []).length, file, 'Intentional line-break count changed', key);
      check(JSON.stringify(key.match(/\d+/g) ?? []) === JSON.stringify(value.match(/\d+/g) ?? []), file, 'Numeric source facts changed', key);
    }
    Object.assign(dictionaries, entries);
    groups.push({ group, sourceKeys: expected.size, translatedKeys: Object.keys(entries).length, missing, extra, sha256: createHash('sha256').update(raw).digest('hex') });
  }
  const archived = await readJson('artifacts/arabic-i18n/source-messages.json');
  const archivedMissing = archived.filter(entry => !Object.hasOwn(dictionaries, entry.en)).map(entry => entry.en);
  check(archivedMissing.length === 0, 'source inventory', 'Source messages lack translations', archivedMissing);

  // Verify current source as well as the extraction snapshot. Explicit fifth
  // arguments bypass the dictionary; dynamic labels are reported for review.
  const staticKeys = new Map();
  const dynamic = [];
  let explicitArabicCalls = 0;
  function valueOf(node, source) {
    if (!node) return null;
    if (ts.isStringLiteralLike(node)) return node.text;
    if (ts.isTemplateExpression(node)) {
      let value = node.head.text;
      for (const span of node.templateSpans) {
        const key = span.expression.getText(source);
        if (!(key in constants)) return null;
        value += constants[key] + span.literal.text;
      }
      return value;
    }
    return null;
  }
  async function walk(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) { if (entry.name !== 'i18n') await walk(file); continue; }
      if (!/\.tsx?$/.test(file) || entry.name === 'legal-documents.ts') continue;
      const relative = path.relative(root, file);
      const source = ts.createSourceFile(file, await fs.readFile(file, 'utf8'), ts.ScriptTarget.Latest, true, file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
      const add = (key, node) => {
        if (key === null) return;
        if (!staticKeys.has(key)) staticKeys.set(key, []);
        staticKeys.get(key).push({ file: relative, line: source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1 });
      };
      const visit = node => {
        if (ts.isCallExpression(node) && node.expression.getText(source) === 'text' && node.arguments.length >= 4) {
          if (node.arguments.length >= 5) explicitArabicCalls++;
          else {
            const key = valueOf(node.arguments[1], source);
            if (key !== null) add(key, node);
            else dynamic.push({ file: relative, line: source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1, expression: node.getText(source) });
          }
        }
        if (ts.isArrayLiteralExpression(node)) {
          const values = node.elements.map(element => valueOf(element, source));
          const explicitLocalizedTuple = values.length === 4 && values.every(value => value !== null)
            && !han.test(values[0]) && han.test(values[1]) && han.test(values[2]) && arabic.test(values[3]);
          if (explicitLocalizedTuple) {
            explicitArabicCalls++;
            ts.forEachChild(node, visit);
            return;
          }
          for (let i = 0; i + 2 < node.elements.length; i++) {
            const [en, tc, sc] = node.elements.slice(i, i + 3).map(element => valueOf(element, source));
            if (en !== null && tc !== null && sc !== null && han.test(tc) && han.test(sc) && !han.test(en)) add(en, node);
          }
        }
        if (ts.isObjectLiteralExpression(node)) {
          const properties = Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(property => [property.name.getText(source), property]));
          if (properties.en && properties.tc && properties.sc) add(valueOf(properties.en.initializer, source), node);
        }
        ts.forEachChild(node, visit);
      };
      visit(source);
    }
  }
  await walk(path.join(root, 'src'));
  const currentMissing = [...staticKeys].filter(([key]) => !Object.hasOwn(dictionaries, key)).map(([key, locations]) => ({ key, locations }));
  check(currentMissing.length === 0, 'current source', 'Current source keys lack translations', currentMissing);
  report.source = { groups, sourceInventoryKeys: archived.length, dictionaryKeys: Object.keys(dictionaries).length, currentStaticKeys: staticKeys.size, explicitArabicCalls, currentMissing, dynamicCallsRequiringData: dynamic };
  return constants['company.website'];
}

async function httpGet(route) {
  const url = new URL(route, base.origin);
  if (url.origin !== base.origin) throw new Error(`Refusing non-local request: ${url}`);
  try {
    const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000), headers: { Accept: route === '/sitemap.xml' ? 'application/xml' : 'text/html' } });
    return { status: response.status, type: response.headers.get('content-type'), body: await response.text() };
  } catch (error) { return { status: null, error: String(error), body: '' }; }
}
async function parallelMap(items, callback, concurrency = 6) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) { const index = cursor++; results[index] = await callback(items[index]); }
  }));
  return results;
}

async function inspectPages(routes, website) {
  const pages = await parallelMap(routes, async route => {
    const response = await httpGet(route);
    const locale = localeOf(route);
    const slug = slugOf(route);
    const errors = [];
    const assert = (ok, message, detail) => { if (!ok) errors.push({ message, ...(detail === undefined ? {} : { detail }) }); };
    assert(response.status === 200, 'Expected HTTP 200 without redirects', response.status ?? response.error);
    const html = response.body;
    const htmlAttributes = attributes(html.match(/<html\b[^>]*>/i)?.[0] ?? '');
    const title = plainText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
    const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(match => plainText(match[1]));
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]));
    const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attributes(match[0]));
    const canonical = links.find(link => link.rel === 'canonical')?.href;
    const alternates = Object.fromEntries(links.filter(link => link.rel === 'alternate' && link.hreflang).map(link => [link.hreflang, link.href]));
    const description = meta.find(item => item.name === 'description')?.content ?? '';
    assert(htmlAttributes.lang === languageTags[locale], 'Wrong html lang', htmlAttributes.lang);
    assert(htmlAttributes.dir === (locale === 'ar' ? 'rtl' : 'ltr'), 'Wrong html direction', htmlAttributes.dir);
    assert(title.length > 0, 'Missing title');
    assert(description.trim().length > 0, 'Missing description');
    assert(headings.length === 1 && headings[0].length > 0, 'Expected one nonempty H1', headings);
    if (locale === 'ar') {
      assert(headings.length === 1 && (arabic.test(headings[0]) || headings[0] === 'FIDERE TRUST'), 'Arabic H1 is neither Arabic nor the unchanged brand name', headings);
      assert(arabic.test(title) && arabic.test(description), 'Arabic title or description is not translated');
      assert(!headings.some(heading => han.test(heading)), 'Arabic H1 contains Chinese');
    }
    assert(normalizedUrl(canonical) === normalizedUrl(website + route), 'Canonical URL mismatch', canonical);
    for (const language of languages) assert(normalizedUrl(alternates[languageTags[language]]) === normalizedUrl(website + routeFor(language, slug)), `Missing or wrong ${languageTags[language]} alternate`, alternates[languageTags[language]]);
    assert(!Object.hasOwn(alternates, 'zh-hans'), 'Retired Simplified Chinese alternate is still exposed', alternates['zh-hans']);
    assert(normalizedUrl(alternates['x-default']) === normalizedUrl(website + routeFor('en', slug)), 'Missing or wrong x-default alternate', alternates['x-default']);
    const ogLocale = meta.find(item => item.property === 'og:locale')?.content;
    assert(ogLocale === ({ en: 'en_HK', 'zh-hant': 'zh_HK', ja: 'ja_JP', ar: 'ar_HK' })[locale], 'Open Graph locale mismatch', ogLocale);
    for (const error of errors) failures.push({ scope: route, ...error });
    return { route, locale, status: response.status, lang: htmlAttributes.lang, dir: htmlAttributes.dir, title, description, h1: headings, canonical, alternates, ogLocale, passed: errors.length === 0, errors };
  });
  report.pages = { checked: pages.length, passed: pages.filter(page => page.passed).length, arabicChecked: pages.filter(page => page.locale === 'ar').length, entries: pages };
}

async function inspectSitemap(routes, website) {
  const response = await httpGet('/sitemap.xml');
  check(response.status === 200, 'sitemap', 'Expected HTTP 200', response.status ?? response.error);
  const entries = [...response.body.matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/gi)].map(match => {
    const location = decode(match[1].match(/<loc>([\s\S]*?)<\/loc>/i)?.[1] ?? '').trim();
    const alternates = Object.fromEntries([...match[1].matchAll(/<(?:xhtml:)?link\b[^>]*>/gi)].map(link => attributes(link[0])).filter(link => link.hreflang).map(link => [link.hreflang, link.href]));
    return { location, alternates };
  });
  const expected = new Set(routes.filter(route => slugOf(route) !== 'login').map(route => normalizedUrl(website + route)));
  const actual = new Set(entries.map(entry => normalizedUrl(entry.location)));
  check(entries.length === 152 && actual.size === 152, 'sitemap', 'Expected 152 unique pages (38 per language)', { entries: entries.length, unique: actual.size });
  check([...expected].every(url => actual.has(url)) && [...actual].every(url => expected.has(url)), 'sitemap', 'Sitemap routes differ from the non-login page inventory', { missing: [...expected].filter(url => !actual.has(url)), extra: [...actual].filter(url => !expected.has(url)) });
  const counts = Object.fromEntries(languages.map(locale => [locale, 0]));
  for (const entry of entries) {
    const url = normalizedUrl(entry.location);
    if (!url) { check(false, 'sitemap', 'Invalid location', entry.location); continue; }
    const route = new URL(url).pathname;
    check(route !== '/zh-hans' && !route.startsWith('/zh-hans/'), 'sitemap', 'Retired Simplified Chinese route is still listed', route);
    counts[localeOf(route)]++;
    for (const locale of languages) check(normalizedUrl(entry.alternates[languageTags[locale]]) === normalizedUrl(website + routeFor(locale, slugOf(route))), 'sitemap', 'Missing or incorrect language alternate', { location: entry.location, locale: languageTags[locale], actual: entry.alternates[languageTags[locale]] });
    check(normalizedUrl(entry.alternates['x-default']) === normalizedUrl(website + routeFor('en', slugOf(route))), 'sitemap', 'Missing or incorrect x-default alternate', { location: entry.location, actual: entry.alternates['x-default'] });
    check(!Object.hasOwn(entry.alternates, 'zh-hans'), 'sitemap', 'Retired Simplified Chinese alternate is still exposed', entry.location);
  }
  for (const locale of languages) check(counts[locale] === 38, 'sitemap', `Expected 38 ${locale} entries`, counts[locale]);
  report.sitemap = { status: response.status, entries: entries.length, unique: actual.size, byLocale: counts };
}

try {
  const website = await inspectSource();
  if (!website) throw new Error('Could not read company.website from src/lib/site.ts');
  const manifest = await readJson('.next/prerender-manifest.json');
  const routes = Object.entries(manifest.routes).filter(([route, info]) => info.routeType === 'page' && !route.startsWith('/_')).map(([route]) => route).sort();
  const counts = Object.fromEntries(languages.map(locale => [locale, routes.filter(route => localeOf(route) === locale).length]));
  check(routes.length === 156, 'route inventory', 'Expected 156 business pages', routes.length);
  check(!routes.some(route => route === '/zh-hans' || route.startsWith('/zh-hans/')), 'route inventory', 'Retired Simplified Chinese pages are still prerendered', routes.filter(route => route === '/zh-hans' || route.startsWith('/zh-hans/')));
  for (const locale of languages) check(counts[locale] === 39, 'route inventory', `Expected 39 ${locale} pages`, counts[locale]);
  report.buildId = (await read('.next/BUILD_ID')).trim();
  report.routes = { source: '.next/prerender-manifest.json', total: routes.length, byLocale: counts };
  if (!offline) {
    await inspectPages(routes, website);
    await inspectSitemap(routes, website);
  } else report.online = 'Skipped by --offline; this is not an HTTP acceptance result.';
} catch (error) {
  failures.push({ scope: 'validator', message: String(error), stack: error.stack });
}
report.passed = failures.length === 0;
await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ passed: report.passed, mode: report.mode, dictionaryKeys: report.source?.dictionaryKeys, pages: report.pages && { checked: report.pages.checked, passed: report.pages.passed, arabic: report.pages.arabicChecked }, sitemap: report.sitemap, failures: failures.length, firstFailures: failures.slice(0, 8), report: output }, null, 2));
if (!report.passed) process.exitCode = 1;
