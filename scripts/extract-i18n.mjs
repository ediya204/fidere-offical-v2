import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const messages = new Map();
const dynamic = [];
const constants = {};
const site = ts.createSourceFile('site.ts', fs.readFileSync('src/lib/site.ts', 'utf8'), ts.ScriptTarget.Latest, true);
function readConstants(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(site) === 'company' && ts.isObjectLiteralExpression(node.initializer)) {
    for (const prop of node.initializer.properties) if (ts.isPropertyAssignment(prop) && ts.isStringLiteral(prop.initializer)) constants[`company.${prop.name.getText(site)}`] = prop.initializer.text;
  }
  ts.forEachChild(node, readConstants);
}
readConstants(site);
const cjk = /[\u3400-\u9fff]/;
const arabic = /\p{Script=Arabic}/u;
function stringValue(node, source) {
  if (!node) return null;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
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
function add(value, file) {
  if (!value || !/[A-Za-z]/.test(value)) return;
  if (!messages.has(value)) messages.set(value, new Set());
  messages.get(value).add(file);
}
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'i18n') walk(file); continue; }
    if (!/\.tsx?$/.test(file) || file.endsWith('legal-documents.ts')) continue;
    const rel = path.relative(root, file), source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
    function visit(node) {
      if (ts.isCallExpression(node) && node.expression.getText(source) === 'text' && node.arguments.length === 4) {
        const en = stringValue(node.arguments[1], source);
        if (en !== null) add(en, rel);
        else dynamic.push({ file: rel, expression: node.getText(source) });
      }
      if (ts.isArrayLiteralExpression(node)) {
        const values = node.elements.map(element => stringValue(element, source));
        const explicitLocalizedTuple = values.length === 4 && values.every(value => value !== null)
          && !cjk.test(values[0]) && cjk.test(values[1]) && cjk.test(values[2]) && arabic.test(values[3]);
        if (!explicitLocalizedTuple) {
          for (let i = 0; i + 2 < node.elements.length; i++) {
            const [en, tc, sc] = node.elements.slice(i, i + 3).map(n => stringValue(n, source));
            if (en !== null && tc !== null && sc !== null && cjk.test(tc) && cjk.test(sc) && !cjk.test(en)) add(en, rel);
          }
        }
      }
      if (ts.isObjectLiteralExpression(node)) {
        const properties = Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(property => [property.name.getText(source), property]));
        if (properties.en && properties.tc && properties.sc) add(stringValue(properties.en.initializer, source), rel);
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
}
walk(path.join(root, 'src'));
const entries = [...messages].map(([en, files]) => ({ en, files: [...files] })).sort((a, b) => a.en.localeCompare(b.en));
const out = 'artifacts/arabic-i18n'; fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(`${out}/source-messages.json`, JSON.stringify(entries, null, 2));
fs.writeFileSync(`${out}/dynamic-messages.json`, JSON.stringify(dynamic, null, 2));
// Stable ownership by page domain keeps translation work independent.
const groups = { interface: [], services: [], institution: [] };
for (const entry of entries) {
  const sources = entry.files.join(' ');
  const group = /solutions\.ts|solution-bodies|solution-detail|wealth-topics/.test(sources) ? 'services' : /about-topics|compliance-topics|insights\.ts|insights-pages|legal-page|metadata/.test(sources) ? 'institution' : 'interface';
  groups[group].push(entry);
}
for (const [name, group] of Object.entries(groups)) fs.writeFileSync(`${out}/${name}-source.json`, JSON.stringify(group, null, 2));
console.log(JSON.stringify({ messages: entries.length, groups: Object.fromEntries(Object.entries(groups).map(([k,v]) => [k,{ messages:v.length,words:v.reduce((n,e)=>n+e.en.split(/\s+/).length,0) }])), dynamic: dynamic.length }, null, 2));
