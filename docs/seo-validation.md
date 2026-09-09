# 三语技术 SEO 实现与验证

记录日期：2026-09-09（Asia/Hong_Kong）。**本轮状态：已发布，构建、静态 SEO、本地 HTTP 和生产验收通过；Search Console 所有权已验证，Sitemap 已成功提交。** 部署时间约12:19 HKT，部署 ID `addf2556-d2c7-4b43-be21-f758ff6f7d9d`，不可变地址为 [addf2556.fideretrust.pages.dev](https://addf2556.fideretrust.pages.dev)，Build ID 为 `zLQ8bKHMdxlnHmLtLcCQO`。这些结果证明本轮发布、技术检查及 Sitemap 提交完成，不表示页面已经被搜索引擎收录。

## 当前范围

| 项目 | 当前已发布实现 |
| --- | --- |
| 语言与路径 | English `/`，繁体中文 `/zh-hant`，阿拉伯语 `/ar`；HTML/hreflang 使用 `en`、`zh-Hant`、`ar`，阿语 `dir="rtl"`。 |
| 页面数量 | 每语种39页，共117个内容及客户协助页；排除三个 Login 后，Sitemap 为114个唯一 URL，每语种38个。 |
| 暂停语言 | 不导出 `/zh-hans` 页面，不在导航、hreflang、Sitemap 中发布该语言；历史地址临时转到对应繁体路径。Pages 使用302，Next 配置的 `permanent: false` 使用307。 |
| 规范地址 | `https://www.fideretrust.com`；页面自身 canonical，三语相互 hreflang，英文 `x-default`；Sitemap 使用同一映射。 |
| 页面文案 | 共享 title/description 逻辑，标题以 `FIDERE TRUST |` 开头，元数据清除排版换行和重复空白；重点首页、栏目与指南标题描述实际内容。 |
| 抓取规则 | 内容页明确 `index, follow`；三个本地 Login 为 `noindex, follow`，不在 Sitemap；robots.txt 允许公开内容并公布 Sitemap。 |
| 社交预览 | 三语 Open Graph locale、其他语言 locale、页面相关图片和替代文字、Twitter 大图；指南详情使用 `og:type=article`。 |
| 结构化数据 | 英文根首页的 `Organization`、`WebSite`、`WebPage` 共用稳定标识及已核实公司资料；75个三语详情页具有 `BreadcrumbList`。全站 Organization 和 WebSite 各1份。不虚构评价、人物、资质、作者、发布日期或业务成绩。Open Graph 的 article 类型不等同于已实现 Article JSON-LD。 |
| 历史地址 | 无前缀及 `/en/` 下的 `personal-trust`、`family-office`、`corporate-clients` 直接308至对应服务详情；显式规则在通用 `/en/*` 之前。既有其他别名继续保留。 |
| Pages 域名 | `fideretrust.pages.dev` 及其版本/分支子域配置 `X-Robots-Tag: noindex, nofollow`，不匹配 `www.fideretrust.com` 或 `fideretrust.com`。 |
| Web App Manifest | 已有图标之外，增加真实业务 description、`start_url="/"`、`id="/"`、`scope="/"`、`lang="en"`。 |
| 客户门户 | 桌面、移动导航链接到用户批准的 `https://portal.fideretrust.com`，新窗口/标签页打开并使用 `noopener noreferrer`；官网 `/login` 仍为协助说明页。 |

SEO 数据来自 `src/lib/metadata.ts`、`src/lib/site.ts`、`src/app/sitemap.ts`、`src/app/robots.ts`、`src/components/structured-data.tsx`。Cloudflare 静态部署实际使用 `public/_redirects`、`public/_headers`；单独修改 Next 服务端配置不会更新 Pages 的边缘规则。

## 当前证据与历史边界

| 阶段 | 实际检查结果 |
| --- | --- |
| 本轮修复前的本地三语产物 | 117个页面、114个 Sitemap URL；468个三语及 x-default 链接检查通过，无站内失效链接，3034次静态资源引用均有文件。这是修复前基线，不覆盖后来改动的最终构建。 |
| 本轮修复前的公网抽查（2026-09-09 12:01–12:04 HKT） | 117个现行三语 URL 均200；但公网 Sitemap 仍为152项，`zh-hans` 仍200、hreflang 仍含简体，证明当时发布的是历史四语版本。 |
| 历史地址修复 | 六条新增映射在 Next 与 Pages 配置一致、无重复、先于通用英文规则；生产六个旧入口均直接308到正确规范详情页。`zh-hans` 根及深层路径均302至繁体，未知路径返回404。 |
| Pages 域名规则 | 15组静态域名/路径匹配通过；生产 Pages 主域及本轮版本域均含 `X-Robots-Tag: noindex, nofollow`，`www`/apex 没有该响应头。 |
| 主域规范跳转 | Cloudflare 活动 Single Redirect `Canonical apex to www`（ID `931ca02666e746ea88977bccb963517d`）已部署；HTTPS apex 相同路径/查询参数301至 `www`，目标200。HTTP apex 先301至 HTTPS apex，完整跟随最终 `www` 200。 |
| Manifest 与配置检查 | JSON、语言和根路径有效；两张图标实际尺寸为192×192、512×512，MIME 与声明相符；`eslint next.config.ts` 通过。 |
| 本轮最终构建 | `npm run cf:build` 成功，121个静态路由（含框架及搜索引擎入口），其中117个业务/协助页；Build ID 为 `zLQ8bKHMdxlnHmLtLcCQO`。 |
| 静态 SEO | `npm run seo:validate` PASS：117页，三语各39页，117个唯一 title 与117个唯一 description，114个 Sitemap URL；Organization 1、WebSite 1、BreadcrumbList 75，零失败。结果：`artifacts/seo/validation.json`，检查时间12:22:57 HKT。 |
| 本地 HTTP 与阿语 | `scripts/validate-arabic.mjs` PASS：117/117页面、114个 Sitemap URL、759个字典键，零失败。结果：`artifacts/arabic-i18n/validation.json`，检查时间12:17:28 HKT；同一 Build ID。 |
| 本轮生产页面与浏览器 | `www` 的117/117页面均 HTTP200，117/117元数据检查通过，Sitemap 114项且唯一；门户链接地址、target/rel正确，生产浏览器无错误。 |
| 静态品牌资源 | 远程 favicon 和首页 hero 的 SHA-256 均与本地一致，完整值见部署记录。 |
| 本轮生产部署 | `addf2556-d2c7-4b43-be21-f758ff6f7d9d`，约12:19 HKT；详见 [cloudflare-deployment.md](cloudflare-deployment.md)。 |

旧的四语言156页面/152 Sitemap 记录保留于历史文档，不用于证明当前三语版本通过。原始未前缀根 canonical 有无末尾 `/` 应按 URL 语义归一化；`zh-Hant` 的大小写标准化也不应误报为不同语言。

## Search Console 所有权与 Sitemap — 已验证、已提交

| 项目 | 已观察到的结果 |
| --- | --- |
| Domain property | `sc-domain:fideretrust.com` |
| 验证账号 | `ediyanghk@gmail.com` |
| 所有权验证 | 通过 Cloudflare Domain Connect 一次性授权完成 DNS provider 验证。 |
| DNS 记录 | Cloudflare 已在 apex 添加 `google-site-verification` TXT 记录；此处不保存具体 token。 |
| 提交地址 | `https://www.fideretrust.com/sitemap.xml` |
| 提交确认 | `Sitemap submitted successfully` |
| Status | `Success` |
| Submitted | `9 Sept 2026` |
| Last read | `9 Sept 2026` |
| Discovered pages | `114` |
| Discovered videos | `0` |

这些结果确认域名所有权及 Sitemap 成功提交、读取。`Discovered pages 114` 是发现页面数量，不能写成114页已收录。实际 Google 页面收录、Google 选定的 canonical、排名以及后续页面抓取数据仍需等待并逐项验证。

## 可复现检查

先确认没有其他任务正在构建同一工作区，再运行：

```bash
npm run lint
npm run typecheck
npm run cf:build
npm run seo:validate
```

`cf:build` 生成 `out/`。这一步不发布；普通 `next start` 需要普通 `npm run build` 的产物，不能据静态导出推断 Next 服务器已经重启。

推荐使用仓库维护的 `npm run seo:validate`。它直接读取导出 HTML、Sitemap 和配置，不运行浏览器、不登录门户、不提交表单；结果写入 `artifacts/seo/validation.json`，失败时返回非零退出码。报告包含 Build ID、逐页结果、语言数量、唯一标题/描述数量及结构化数据计数。`artifacts/` 是本地证据目录，不纳入 Git。

以下仅保留为简化的独立抽查方法；完整验收以维护中的验证脚本为准：

```bash
node --input-type=module <<'NODE'
import fs from 'node:fs';
import assert from 'node:assert/strict';
const files = fs.readdirSync('out', { recursive: true })
  .filter(file => file.endsWith('.html') && !['404.html', '_not-found.html'].includes(file));
const origin = 'https://www.fideretrust.com';
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)]
  .map(([, key, value]) => [key.toLowerCase(), value]));
const normalize = value => new URL(value).href;
assert.equal(files.length, 117);
const counts = { en: 0, 'zh-Hant': 0, ar: 0 };
const titles = new Set();
for (const file of files) {
  const html = fs.readFileSync(`out/${file}`, 'utf8');
  const route = '/' + file.replace(/index\.html$/, '').replace(/\.html$/, '');
  const locale = route === '/ar' || route.startsWith('/ar/') ? 'ar'
    : route === '/zh-hant' || route.startsWith('/zh-hant/') ? 'zh-Hant' : 'en';
  const root = attrs(html.match(/<html\b[^>]*>/)[0]);
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attrs(tag));
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attrs(tag));
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const alternates = links.filter(link => link.rel === 'alternate');
  assert.equal(root.lang, locale, route);
  assert.equal(root.dir, locale === 'ar' ? 'rtl' : 'ltr', route);
  assert(title?.startsWith('FIDERE TRUST |'), route);
  assert(!titles.has(title), `Duplicate title: ${route}`);
  titles.add(title);
  assert(meta.find(item => item.name === 'description')?.content.trim(), route);
  assert.equal(normalize(links.find(link => link.rel === 'canonical').href), normalize(origin + route), route);
  assert.deepEqual(alternates.map(link => link.hreflang).sort(), ['ar', 'en', 'x-default', 'zh-Hant'], route);
  const login = route.endsWith('/login');
  const robots = meta.find(item => item.name === 'robots')?.content ?? '';
  assert(login ? robots.includes('noindex') : /(?:^|,\s*)index(?:,|$)/.test(robots), route);
  const portalLinks = [...html.matchAll(/<a\b[^>]*>/g)].map(([tag]) => attrs(tag))
    .filter(link => link.href === 'https://portal.fideretrust.com');
  assert(portalLinks.length >= 2, `Desktop/mobile portal links: ${route}`);
  for (const link of portalLinks) {
    assert.equal(link.target, '_blank');
    assert(link.rel.includes('noopener') && link.rel.includes('noreferrer'));
  }
  counts[locale]++;
}
assert.deepEqual(counts, { en: 39, 'zh-Hant': 39, ar: 39 });
const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
assert.equal(urls.length, 114);
assert.equal(new Set(urls).size, 114);
assert(!sitemap.includes('/zh-hans') && !urls.some(url => url.endsWith('/login')));
console.log({ pages: files.length, counts, sitemapUrls: urls.length, result: 'PASS' });
NODE
```

继续逐页核对 alternate 的目标及返回关系、Sitemap 对应文件、OG 图片尺寸和资源响应，并解析英文首页的 `application/ld+json` 检查稳定 ID、真实公司信息及重复图谱。上面的摘要命令不声称覆盖这些所有细节。

`scripts/validate-arabic.mjs` 已同步本轮 `zh-Hant`、`ar_HK` 和三语预期，并完成上述本地 HTTP 回归。保持相同 Build ID 的本地服务运行后，可执行 `node scripts/validate-arabic.mjs --base-url=http://127.0.0.1:3000`；结果写入 `artifacts/arabic-i18n/validation.json`。其字典核对依赖未纳入 Git 的 `artifacts/arabic-i18n/*-source.json`，不可假设每个新 checkout 都有这些快照。

## 已执行的生产验收与后续复查方法

本轮已对不可变部署地址、Pages 主域及两个正式域完成前述检查。后续发布应重新记录各域结果。检查命令示例使用 GET；`curl -D - -o /dev/null` 显示真实响应头且不跟随跳转：

```bash
curl -sS -D - -o /dev/null https://www.fideretrust.com/zh-hans/about
curl -sS -D - -o /dev/null https://www.fideretrust.com/en/personal-trust
curl -sS -D - -o /dev/null https://www.fideretrust.com/en/family-office
curl -sS -D - -o /dev/null https://www.fideretrust.com/en/corporate-clients
curl -sS -D - -o /dev/null https://fideretrust.pages.dev/ar
curl -sS -D - -o /dev/null https://addf2556.fideretrust.pages.dev/ar
curl -sS -D - -o /dev/null https://www.fideretrust.com/ar
curl -sS -D - -o /dev/null https://fideretrust.com/ar
curl -sS -D - -o /dev/null 'https://fideretrust.com/zh-hant/solutions?source=seo'
curl -sS -L -o /dev/null -w '%{url_effective} %{http_code}\n' 'http://fideretrust.com/ar?source=seo'
curl -sS -D - -o /dev/null https://www.fideretrust.com/ar/seo-missing-page-check
curl -sS https://www.fideretrust.com/robots.txt
curl -sS https://www.fideretrust.com/sitemap.xml
```

复查范围：

1. 117个正式内容/协助页直接200；114个 Sitemap URL 无重复、无失效、无简体或 Login；各页 canonical/hreflang 与三语输出一致。
2. 六个新增旧入口直接308至规范详情页，目标200；`/zh-hans` 及子路径临时跳转并保留目标路径与查询参数；常规 `/en`、其他旧别名、`.html` 和尾斜杠规范化不产生循环。
3. 三个 Login 返回200和 meta `noindex`；Pages 主域与版本域有 `noindex, nofollow`，正式域响应不能继承此限制。
4. 未知页面返回真实404。当前本地静态导出会生成三语品牌404，并按路径同步 HTML `lang`/`dir`；五秒客户端回首页不改变初始HTTP 404。该改动尚未重新发布，线上验收仍须复查不可变 Pages 地址与 `www`。
5. 桌面/移动浏览器确认客户登录入口打开指定外部地址的新窗口/标签页，保留当前官网页面；不输入账户资料、不把门户加载等同于认证通过。
6. HTML 中正文、内页链接及翻译无需登录即可读取；图片、字体、favicon、manifest MIME 与缓存正常，hashed 静态文件仍使用 immutable 缓存。
7. **主域规范跳转已完成：** 活动 Single Redirect `Canonical apex to www` 匹配 `https://fideretrust.com/*`，301到 `https://www.fideretrust.com/${1}`，保留 query。规则 ID 为 `931ca02666e746ea88977bccb963517d`。已验证 `/zh-hant/solutions?source=seo` 和 `/ar?source=seo` 的 HTTPS apex 请求均301至 `www` 同路径、同查询参数，目标200；HTTP apex 先301至 HTTPS apex，完整跟随最终 `www` 200。此前 apex 直接200的重复入口边界已关闭。此规则在 Cloudflare 层执行，独立于源码 canonical 和 Pages 部署产物。

## 本轮不能据此证明的结果

- Search Console 站点所有权已验证，Sitemap 提交及读取成功；尚未证明逐页 URL Inspection 结果、实际页面收录、Google 选定 canonical、索引覆盖、排名或后续页面抓取数据。
- HTTP 200、允许抓取、规范标记和结构化数据不等于已收录，不保证搜索排名、摘要样式、富媒体结果或流量提升。
- 使用 Googlebot User-Agent 发出一次请求不等于真实 Googlebot 已经抓取。
- 门户入口已获批准，不代表本轮验证了客户身份认证、账户授权或交易功能。
- 原始英文法律文件继续作为原文展示；翻译后的页面概要及语言标记不代表提供了完整法律译本。

相关规则依据：[Google 多语言页面](https://developers.google.com/search/docs/specialty/international/localized-versions)、[Cloudflare Pages 响应头](https://developers.cloudflare.com/pages/configuration/headers/)、[Pages 路由与404](https://developers.cloudflare.com/pages/configuration/serving-pages/)。
