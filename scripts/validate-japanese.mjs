import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const failures = [];
const japanese = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u;
const permittedUntranslated = new Set(["FIDERE", "FIDERE TRUST"]);
const dictionaries = ["interface", "services", "institution"];
const owners = new Map();
let dictionaryKeys = 0;

function assert(ok, scope, message, detail) {
  if (!ok) failures.push({ scope, message, ...(detail === undefined ? {} : { detail }) });
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(([, key, a, b, c]) => [key.toLowerCase(), a ?? b ?? c]));
}
function plainText(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16))).replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code))).replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

for (const group of dictionaries) {
  const file = `src/lib/i18n/ja-${group}.json`;
  const entries = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  for (const [key, value] of Object.entries(entries)) {
    dictionaryKeys++;
    assert(!owners.has(key), file, "Translation key is duplicated across dictionaries", key);
    owners.set(key, file);
    assert(typeof value === "string" && value.trim().length > 0, file, "Translation is empty", key);
    assert(permittedUntranslated.has(key) || japanese.test(value), file, "Translation contains no Japanese text", { key, value });
    assert(key.split("\n").length === value.split("\n").length, file, "Intentional line-break count changed", key);
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, ".next/prerender-manifest.json"), "utf8"));
const routes = Object.entries(manifest.routes).filter(([route, info]) => info.routeType === "page" && (route === "/ja" || route.startsWith("/ja/"))).map(([route]) => route).sort();
assert(routes.length === 39, "route inventory", "Expected 39 Japanese pages", routes.length);
for (const route of routes) {
  const file = path.join(out, `${route.slice(1)}.html`);
  assert(fs.existsSync(file), route, "Missing exported Japanese HTML");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const htmlAttributes = attributes(html.match(/<html\b[^>]*>/i)?.[0] ?? "");
  const title = plainText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
  const descriptionTag = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0])).find((meta) => meta.name === "description");
  const description = descriptionTag?.content ?? "";
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => plainText(match[1])).filter(Boolean);
  assert(htmlAttributes.lang === "ja" && htmlAttributes.dir === "ltr", route, "Wrong Japanese html language or direction", htmlAttributes);
  assert(title.startsWith("FIDERE TRUST | ") && japanese.test(title), route, "Japanese branded title is missing", title);
  assert(japanese.test(description), route, "Japanese meta description is missing", description);
  assert(headings.length === 1 && (japanese.test(headings[0]) || headings[0] === "FIDERE TRUST"), route, "Expected one Japanese H1", headings);
  assert(html.includes('hrefLang="ja"') && html.includes(`href="https://www.fideretrust.com${route}"`), route, "Japanese hreflang or canonical route is missing");
}

const report = { checkedAt: new Date().toISOString(), passed: failures.length === 0, dictionaryKeys, pages: routes.length, failures };
const reportPath = path.join(root, "artifacts/japanese-i18n/validation.json");
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ passed: report.passed, dictionaryKeys, pages: routes.length, failures: failures.length, firstFailures: failures.slice(0, 10), report: path.relative(root, reportPath) }, null, 2));
if (failures.length) process.exitCode = 1;
