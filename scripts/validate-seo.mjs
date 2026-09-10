import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const origin = "https://www.fideretrust.com";
const googleAnalyticsId = "G-DXNG1F7QFP";
const localeConfig = {
  en: { prefix: "", html: "en", href: "en", og: "en_HK" },
  "zh-hant": { prefix: "/zh-hant", html: "zh-Hant", href: "zh-Hant", og: "zh_HK" },
  ja: { prefix: "/ja", html: "ja", href: "ja", og: "ja_JP" },
  ar: { prefix: "/ar", html: "ar", href: "ar", og: "ar_HK" },
};
const failures = [];
const pageResults = [];

function fail(scope, message, detail) {
  failures.push({ scope, message, ...(detail === undefined ? {} : { detail }) });
}

function assert(condition, scope, message, detail) {
  if (!condition) fail(scope, message, detail);
}

function decode(value = "") {
  return value
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, code) => String.fromCodePoint(code[0].toLowerCase() === "x" ? Number.parseInt(code.slice(1), 16) : Number(code)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
    .map(([, key, doubleQuoted, singleQuoted, bare]) => [key.toLowerCase(), decode(doubleQuoted ?? singleQuoted ?? bare)]));
}

function text(html = "") {
  return decode(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

function normalizedUrl(value) {
  try { return new URL(value).href; } catch { return null; }
}

function localeOf(route) {
  if (route === "/zh-hant" || route.startsWith("/zh-hant/")) return "zh-hant";
  if (route === "/ja" || route.startsWith("/ja/")) return "ja";
  if (route === "/ar" || route.startsWith("/ar/")) return "ar";
  return "en";
}

function slugOf(route) {
  const locale = localeOf(route);
  const prefix = localeConfig[locale].prefix;
  return route.slice(prefix.length).replace(/^\//, "");
}

function routeFor(locale, slug) {
  const prefix = localeConfig[locale].prefix;
  return `${prefix}${slug ? `/${slug}` : ""}` || "/";
}

function pageFile(route) {
  return route === "/" ? path.join(out, "index.html") : path.join(out, `${route.slice(1)}.html`);
}

function metaValue(meta, selector, value) {
  return meta.find((item) => item[selector] === value)?.content ?? "";
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, ".next/prerender-manifest.json"), "utf8"));
const routes = Object.entries(manifest.routes)
  .filter(([route, info]) => info.routeType === "page" && !route.startsWith("/_"))
  .map(([route]) => route)
  .sort();

assert(routes.length === 156, "route inventory", "Expected 156 content and assistance pages", routes.length);
assert(!routes.some((route) => route === "/zh-hans" || route.startsWith("/zh-hans/")), "route inventory", "Simplified Chinese routes are still prerendered");

const localeCounts = { en: 0, "zh-hant": 0, ja: 0, ar: 0 };
const titles = new Map();
const descriptions = new Map();
let organizationSchemas = 0;
let websiteSchemas = 0;
let breadcrumbSchemas = 0;

for (const route of routes) {
  const file = pageFile(route);
  assert(fs.existsSync(file), route, "Missing exported HTML", path.relative(root, file));
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const locale = localeOf(route);
  const localeInfo = localeConfig[locale];
  const slug = slugOf(route);
  localeCounts[locale]++;

  const htmlAttributes = attributes(html.match(/<html\b[^>]*>/i)?.[0] ?? "");
  const titleMatches = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((match) => text(match[1]));
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => text(match[1])).filter(Boolean);
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0]));
  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
  const anchors = [...html.matchAll(/<a\b[^>]*>/gi)].map((match) => attributes(match[0]));
  const scripts = [...html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)];
  const canonical = links.find((link) => link.rel === "canonical")?.href;
  const expectedCanonical = normalizedUrl(`${origin}${route}`);
  const alternates = Object.fromEntries(links.filter((link) => link.rel === "alternate" && link.hreflang).map((link) => [link.hreflang, link.href]));
  const description = metaValue(meta, "name", "description");
  const robots = metaValue(meta, "name", "robots");
  const googlebot = metaValue(meta, "name", "googlebot");
  const login = slug === "login";
  const insightArticle = slug.startsWith("insights/");

  assert(htmlAttributes.lang === localeInfo.html, route, "Wrong html lang", htmlAttributes.lang);
  assert(htmlAttributes.dir === (locale === "ar" ? "rtl" : "ltr"), route, "Wrong html direction", htmlAttributes.dir);
  assert(titleMatches.length === 1 && titleMatches[0].startsWith("FIDERE TRUST | "), route, "Expected one branded title", titleMatches);
  assert(titleMatches[0] && !/[\r\n]/.test(titleMatches[0]), route, "Title contains a line break", titleMatches[0]);
  assert(description.trim().length > 0 && !/[\r\n]/.test(description), route, "Description is empty or multiline", description);
  assert(headings.length === 1, route, "Expected exactly one nonempty H1", headings);
  assert(normalizedUrl(canonical) === expectedCanonical, route, "Self-canonical mismatch", canonical);

  for (const [alternateLocale, alternateInfo] of Object.entries(localeConfig)) {
    const expected = normalizedUrl(`${origin}${routeFor(alternateLocale, slug)}`);
    assert(normalizedUrl(alternates[alternateInfo.href]) === expected, route, `Wrong ${alternateInfo.href} alternate`, alternates[alternateInfo.href]);
  }
  assert(normalizedUrl(alternates["x-default"]) === normalizedUrl(`${origin}${routeFor("en", slug)}`), route, "Wrong x-default alternate", alternates["x-default"]);
  assert(!Object.keys(alternates).some((key) => key.toLowerCase() === "zh-hans"), route, "Retired Simplified Chinese hreflang found");

  if (login) {
    assert(robots.includes("noindex") && robots.includes("follow"), route, "Login assistance page must be noindex, follow", robots);
    assert(googlebot.includes("noindex") && googlebot.includes("follow"), route, "Googlebot login directive mismatch", googlebot);
  } else {
    assert(/(?:^|,\s*)index(?:,|$)/.test(robots) && robots.includes("follow") && !robots.includes("noindex"), route, "Indexable page robots mismatch", robots);
    assert(/(?:^|,\s*)index(?:,|$)/.test(googlebot) && googlebot.includes("follow"), route, "Googlebot index directive mismatch", googlebot);
  }
  for (const directive of ["max-video-preview:-1", "max-image-preview:large", "max-snippet:-1"]) {
    assert(googlebot.includes(directive), route, `Googlebot missing ${directive}`, googlebot);
  }

  const og = {
    title: metaValue(meta, "property", "og:title"),
    description: metaValue(meta, "property", "og:description"),
    url: metaValue(meta, "property", "og:url"),
    siteName: metaValue(meta, "property", "og:site_name"),
    locale: metaValue(meta, "property", "og:locale"),
    type: metaValue(meta, "property", "og:type"),
    image: metaValue(meta, "property", "og:image"),
    imageWidth: metaValue(meta, "property", "og:image:width"),
    imageHeight: metaValue(meta, "property", "og:image:height"),
    imageAlt: metaValue(meta, "property", "og:image:alt"),
  };
  const ogAlternateLocales = meta.filter((item) => item.property === "og:locale:alternate").map((item) => item.content).sort();
  const expectedOgAlternates = Object.values(localeConfig).map((item) => item.og).filter((item) => item !== localeInfo.og).sort();
  assert(og.title === titleMatches[0] && og.description === description, route, "Open Graph copy mismatch", og);
  assert(normalizedUrl(og.url) === expectedCanonical, route, "Open Graph URL mismatch", og.url);
  assert(og.siteName === "FIDERE TRUST" && og.locale === localeInfo.og, route, "Open Graph site or locale mismatch", { siteName: og.siteName, locale: og.locale });
  assert(JSON.stringify(ogAlternateLocales) === JSON.stringify(expectedOgAlternates), route, "Open Graph alternate locales mismatch", ogAlternateLocales);
  assert(og.type === (insightArticle ? "article" : "website"), route, "Open Graph type mismatch", og.type);
  assert(Boolean(og.image && og.imageAlt && Number(og.imageWidth) > 0 && Number(og.imageHeight) > 0), route, "Incomplete Open Graph image metadata", og);
  if (og.image) {
    const imageUrl = new URL(og.image);
    const imageFile = path.join(out, imageUrl.pathname.slice(1));
    assert(imageUrl.origin === origin && fs.existsSync(imageFile), route, "Open Graph image is not an exported canonical asset", og.image);
  }

  const twitter = {
    card: metaValue(meta, "name", "twitter:card"),
    title: metaValue(meta, "name", "twitter:title"),
    description: metaValue(meta, "name", "twitter:description"),
    image: metaValue(meta, "name", "twitter:image"),
    imageAlt: metaValue(meta, "name", "twitter:image:alt"),
  };
  assert(twitter.card === "summary_large_image" && twitter.title === titleMatches[0] && twitter.description === description, route, "Twitter card copy mismatch", twitter);
  assert(twitter.image === og.image && twitter.imageAlt === og.imageAlt, route, "Twitter image metadata mismatch", twitter);

  const portalLinks = anchors.filter((anchor) => anchor.href === "https://portal.fideretrust.com");
  assert(portalLinks.length === 0, route, "Retired customer-login portal link found", portalLinks.length);
  assert(html.includes(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`), route, "Google Analytics loader is missing");
  assert(html.includes(googleAnalyticsId), route, "Google Analytics measurement ID is missing");

  const schemas = [];
  for (const script of scripts) {
    try { schemas.push(JSON.parse(script[1])); } catch (error) { fail(route, "Invalid JSON-LD", String(error)); }
  }
  const schemaNodes = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
  const organizations = schemaNodes.filter((node) => node["@type"] === "Organization");
  const websites = schemaNodes.filter((node) => node["@type"] === "WebSite");
  const breadcrumbs = schemaNodes.filter((node) => node["@type"] === "BreadcrumbList");
  organizationSchemas += organizations.length;
  websiteSchemas += websites.length;
  breadcrumbSchemas += breadcrumbs.length;
  if (route === "/") {
    assert(organizations.length === 1 && websites.length === 1, route, "English root must contain one Organization and one WebSite schema", { organizations: organizations.length, websites: websites.length });
  } else {
    assert(organizations.length === 0 && websites.length === 0, route, "Organization or WebSite schema repeated outside English root");
  }
  const detailBreadcrumb = /^(about|solutions|wealth-management|compliance|insights)\/.+/.test(slug);
  assert(breadcrumbs.length === (detailBreadcrumb ? 1 : 0), route, "Breadcrumb schema presence mismatch", breadcrumbs.length);
  if (breadcrumbs[0]) {
    const items = breadcrumbs[0].itemListElement ?? [];
    assert(items.length === 3 && items.every((item, index) => item.position === index + 1 && item.name && item.item), route, "Breadcrumb items are incomplete", items);
    assert(normalizedUrl(items.at(-1)?.item) === expectedCanonical, route, "Breadcrumb current item URL mismatch", items.at(-1)?.item);
  }

  if (titleMatches[0]) {
    if (titles.has(titleMatches[0])) fail(route, "Duplicate title", titles.get(titleMatches[0]));
    else titles.set(titleMatches[0], route);
  }
  if (description) {
    if (descriptions.has(description)) fail(route, "Duplicate description", descriptions.get(description));
    else descriptions.set(description, route);
  }
  assert(!html.includes("/zh-hans"), route, "Retired Simplified Chinese URL found in HTML");
  pageResults.push({ route, locale, title: titleMatches[0], canonical, indexable: !login, ogType: og.type, schemas: schemaNodes.map((node) => node["@type"]) });
}

assert(JSON.stringify(localeCounts) === JSON.stringify({ en: 39, "zh-hant": 39, ja: 39, ar: 39 }), "route inventory", "Wrong page count by locale", localeCounts);
assert(organizationSchemas === 1 && websiteSchemas === 1, "structured data", "Organization and WebSite schemas must occur exactly once", { organizationSchemas, websiteSchemas });
assert(breadcrumbSchemas === 100, "structured data", "Expected BreadcrumbList on 100 localized detail pages", breadcrumbSchemas);

const sitemapXml = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
const sitemapEntries = [...sitemapXml.matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/gi)].map((match) => {
  const location = decode(match[1].match(/<loc>([\s\S]*?)<\/loc>/i)?.[1] ?? "").trim();
  const alternates = Object.fromEntries([...match[1].matchAll(/<(?:xhtml:)?link\b[^>]*>/gi)]
    .map((link) => attributes(link[0])).filter((link) => link.hreflang).map((link) => [link.hreflang, link.href]));
  return { location, alternates };
});
const expectedSitemapRoutes = routes.filter((route) => slugOf(route) !== "login");
const expectedSitemapUrls = new Set(expectedSitemapRoutes.map((route) => normalizedUrl(`${origin}${route}`)));
const actualSitemapUrls = new Set(sitemapEntries.map((entry) => normalizedUrl(entry.location)));
assert(sitemapEntries.length === 152 && actualSitemapUrls.size === 152, "sitemap", "Expected 152 unique Sitemap URLs", { entries: sitemapEntries.length, unique: actualSitemapUrls.size });
assert([...expectedSitemapUrls].every((url) => actualSitemapUrls.has(url)) && [...actualSitemapUrls].every((url) => expectedSitemapUrls.has(url)), "sitemap", "Sitemap URL inventory mismatch");
for (const entry of sitemapEntries) {
  const route = new URL(entry.location).pathname;
  const slug = slugOf(route);
  for (const [locale, localeInfo] of Object.entries(localeConfig)) {
    assert(normalizedUrl(entry.alternates[localeInfo.href]) === normalizedUrl(`${origin}${routeFor(locale, slug)}`), entry.location, `Sitemap ${localeInfo.href} alternate mismatch`, entry.alternates[localeInfo.href]);
  }
  assert(normalizedUrl(entry.alternates["x-default"]) === normalizedUrl(`${origin}${routeFor("en", slug)}`), entry.location, "Sitemap x-default mismatch", entry.alternates["x-default"]);
}
assert(!sitemapXml.includes("/zh-hans") && !sitemapXml.includes("/login"), "sitemap", "Sitemap contains a retired or noindex route");

const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
assert(robots.includes("User-Agent: *") && robots.includes("Allow: /") && robots.includes("Disallow: /api/") && robots.includes(`Sitemap: ${origin}/sitemap.xml`), "robots.txt", "robots.txt directives mismatch", robots);

const webManifest = JSON.parse(fs.readFileSync(path.join(out, "site.webmanifest"), "utf8"));
for (const key of ["name", "short_name", "description", "start_url", "id", "scope", "lang", "icons"]) assert(Boolean(webManifest[key]), "site.webmanifest", `Missing ${key}`);
assert(webManifest.start_url === "/" && webManifest.id === "/" && webManifest.scope === "/" && webManifest.lang === "en", "site.webmanifest", "Manifest root or language mismatch", webManifest);

const headers = fs.readFileSync(path.join(out, "_headers"), "utf8");
assert(headers.includes("https://fideretrust.pages.dev/*") && headers.includes("https://:version.fideretrust.pages.dev/*") && (headers.match(/X-Robots-Tag: noindex, nofollow/g) ?? []).length === 2, "_headers", "Pages noindex header rules mismatch");
const redirects = fs.readFileSync(path.join(out, "_redirects"), "utf8").split(/\r?\n/).filter(Boolean);
const requiredRedirects = [
  "/personal-trust /solutions/private-trust 308",
  "/family-office /solutions/family-office 308",
  "/corporate-clients /solutions/corporate-trust 308",
  "/en/personal-trust /solutions/private-trust 308",
  "/en/family-office /solutions/family-office 308",
  "/en/corporate-clients /solutions/corporate-trust 308",
];
for (const redirect of requiredRedirects) assert(redirects.includes(redirect), "_redirects", `Missing ${redirect}`);
assert(requiredRedirects.every((redirect) => redirects.indexOf(redirect) < redirects.indexOf("/en/* /:splat 308")), "_redirects", "Explicit service redirects must precede the generic English redirect");

const report = {
  checkedAt: new Date().toISOString(),
  passed: failures.length === 0,
  buildId: fs.readFileSync(path.join(root, ".next/BUILD_ID"), "utf8").trim(),
  pages: { total: routes.length, byLocale: localeCounts, uniqueTitles: titles.size, uniqueDescriptions: descriptions.size },
  sitemap: { entries: sitemapEntries.length, unique: actualSitemapUrls.size },
  structuredData: { organizationSchemas, websiteSchemas, breadcrumbSchemas },
  failures,
  pageResults,
};
const reportPath = path.join(root, "artifacts/seo/validation.json");
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({
  passed: report.passed,
  buildId: report.buildId,
  pages: report.pages,
  sitemap: report.sitemap,
  structuredData: report.structuredData,
  failures: failures.length,
  firstFailures: failures.slice(0, 10),
  report: path.relative(root, reportPath),
}, null, 2));
if (failures.length) process.exitCode = 1;
