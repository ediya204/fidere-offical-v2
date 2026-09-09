# FIDERE TRUST 官网

FIDERE TRUST LIMITED 的本地官网实现。业务内容依据现有 FIDERE 官网整理；Lighthouse Canton 仅用于研究版式、导航层级与交互方式。网站采用 Next.js App Router、TypeScript、React，以及本地字体和摄影资源。

## 本地运行

需要 Node.js **20.9.0 或以上**及 npm。依赖版本由 `package-lock.json` 锁定。

```bash
npm ci
npm run dev
```

打开 [英文首页](http://127.0.0.1:3000/)。开发服务默认仅监听 `127.0.0.1:3000`；英文使用无语言前缀的路径，旧 `/en` 路径会重定向到相应英文页面。

Cloudflare Pages 使用静态导出：`npm run cf:build` 生成 `out/`，并在导出后生成三语品牌 404；未知路径保留 HTTP 404，页面会倒计时返回对应语言的正式 `www` 首页。`npm run cf:deploy` 发布到既有 `fideretrust` Pages 项目。安全响应头和旧路径跳转分别由 `public/_headers`、`public/_redirects` 在边缘执行。

网站图标由 `npm run favicon:generate` 从 `public/brand/fidere-logo.png` 的独立品牌标志生成，包括多尺寸 `favicon.ico`、PNG、Apple Touch 图标和 Web App Manifest。

构建并启动本地生产模式：

```bash
npm run build
npm run start
```

`start` 同样使用端口 3000；先停止占用该端口的开发服务。这里的生产模式是本地运行方式，不代表网站已部署到公网。

可运行的代码检查命令：

```bash
npm run typecheck
npm run lint
```

以上为执行方法，不作为当前版本所有检查、浏览器验收或性能测试已通过的声明。

## 页面与语言

三种语言采用独立路由：

| 语言 | 首页 | 示例 |
| --- | --- | --- |
| English | `/` | `/about` |
| 繁體中文 | `/zh-hant` | `/zh-hant/about` |
| العربية（阿拉伯语，RTL） | `/ar` | `/ar/about` |

各语言均包含首页及六个一级栏目：About、Solutions、Wealth Management、Compliance、Insights、Contact。以下路径以英文为例，其他语言分别增加 `/zh-hant` 或 `/ar` 前缀；站内链接由 `src/lib/site.ts` 的 `pathFor` 统一生成。简体中文当前不生成页面、不出现在语言切换或搜索引擎语言替代链接中；历史 `/zh-hans` 地址临时转到对应繁体中文页面。

| 页面类型 | 数量 | 路径 |
| --- | ---: | --- |
| 首页 | 1 | `/` |
| 一级栏目 | 6 | `/about`、`/solutions`、`/wealth-management`、`/compliance`、`/insights`、`/contact` |
| 业务与主题二级页 | 22 | 10 个 Solutions、3 个 About、4 个 Wealth、5 个 Compliance |
| 原创指南详情 | 3 | `/insights/{slug}` |
| 法律与政策 | 6 | `/privacy` 等六个页脚入口 |
| 客户访问说明 | 1 | `/login` |

这份源码页面清单每种语言合计 39 页。该数量描述路由与内容结构，不代表最新构建、全部 URL 或浏览器验收已经通过。

Solutions 将十项服务分为信托与受托服务、企业服务、资产与交易管理三个体系。详情路径为 `/solutions/{service}`：

| 服务 | `{service}` |
| --- | --- |
| 私人信托 | `private-trust` |
| 企业信托 | `corporate-trust` |
| 传承规划 | `succession-planning` |
| 家族办公室 | `family-office` |
| 受托人与董事 | `trustee-directors` |
| 公司设立 | `company-formation` |
| 税务合规 | `tax-compliance` |
| 监管合规 | `regulatory-compliance` |
| 交易支持 | `transaction-support` |
| 股权及资产托管 | `equity-asset-custody` |

其他二级页面与指南详情：

| 栏目 | 子路径 |
| --- | --- |
| `/about` | `who-we-are`、`our-approach`、`governance` |
| `/wealth-management` | `global-markets`、`funds`、`fixed-income`、`cash-management` |
| `/compliance` | `aml-ctf`、`client-due-diligence`、`source-of-funds`、`sanctions-screening`、`ongoing-monitoring` |
| `/insights` | `trust-governance-over-time`、`preparing-for-due-diligence`、`cross-border-administration` |

旧路径映射在 `next.config.ts` 和 Pages 的 `public/_redirects` 中，包括 `/en/:path` 到 `/:path`、`/services` 到 `/solutions`、`/asset-management` 到 `/wealth-management`，以及旧 `equity-custody` 服务路径到 `equity-asset-custody`。历史 `personal-trust`、`family-office`、`corporate-clients`（含 `/en/` 前缀）分别永久跳转至对应的 `/solutions/private-trust`、`/solutions/family-office`、`/solutions/corporate-trust` 详情页。页面元数据、语言替代链接、OpenGraph、`/sitemap.xml` 和 `/robots.txt` 已有对应源码。

## 项目结构

```text
src/app/
  (english)/                无前缀英文布局、首页、栏目及详情路由
  [locale]/                 繁体中文、阿拉伯语镜像路由与布局
  .../solutions/            服务总览及十项服务详情
  .../about/                公司介绍及三个主题页
  .../wealth-management/    财富管理总览及四个主题页
  .../compliance/           合规总览及五个主题页
  .../insights/[slug]/      三篇原创指南的内容路由
  globals.css               全站版式、设计变量与响应式样式
  sitemap.ts / robots.ts    搜索引擎发现入口
src/components/
  editorial.tsx             标题、图片、文字链接、CTA 等共用组件
  header.tsx / footer.tsx    全站导航、语言切换及页脚
  home-page.tsx             首页
  inner-pages.tsx           About、Wealth、Compliance、Contact 等
  solution-detail.tsx       服务详情入口与共同上下文
  solution-bodies.tsx       各类服务的主体结构
  about-topics.tsx          公司介绍主题
  compliance-topics.tsx     合规主题及完整政策链接
  wealth-topics.tsx         四个财富主题及各自正文结构
  insights-pages.tsx        指南索引、详情、首页精选
  legal-page.tsx            政策目录、概要及完整英文原文
  contact-form.tsx          本地邮件草稿流程
  section-nav.tsx           页内章节导航
  motion.tsx                渐入及 reduced-motion 处理
src/lib/
  site.ts                   公司信息、语言、导航及路径函数
  solutions.ts              十项服务的三语内容
  about-topics.ts            公司介绍主题元数据
  compliance-topics.ts       合规主题元数据
  wealth-topics.ts           财富主题元数据
  insights.ts               原创指南的三语全文、相关链接与来源
  legal-documents.ts        六份英文法律文件的原文快照与来源
  metadata.ts               页面 SEO 元数据
src/fonts/                  本地字体及许可证
public/brand/               用户提供的 FIDERE Logo
public/images/              本地摄影资源
docs/                       内容来源、参考研究与素材记录
```

## 内容与资料维护

公司名称、地址、邮箱、电话、TCSP 编号及正式站点域名集中在 `src/lib/site.ts` 的 `company` 中。联系页、页脚和结构化数据复用这份记录；修改公司联系方式时从此处统一更新。英文法律文件中的历史文字属于原文快照，不随公司资料自动改写。

企业信托页面将原站已披露的受托人、董事、公司设立与企业管理服务组织为同一主题，不表示新增证券发行、债券受托或其他未证实的持牌业务。四个财富主题来自原站既有股票、共同基金／ETF、债券、固定存款及货币市场范围；内容保留资格、账户安排与司法管辖区限制，不是具体产品报价或投资推荐。

Insights 的三篇内容是为本次网站撰写的原创教育指南，主题分别为信托持续管治、尽职审查资料准备、跨境行政协调。事实背景来自 FIDERE 已公开的服务及政策披露；它们不是原站历史新闻或已发布研究，也没有虚构作者、发布日期或市场表现。`insights.ts` 内的来源 URL 说明事实依据，不表示这些指南曾在原站发表。

六个法律入口为 `privacy`、`disclaimer`、`terms`、`regulatory-status`、`compliance-kyc`、`risk-fees`。页面上方有三语概要，下方原生折叠区保留完整英文原文。中文概要不是完整法律译本，概要也不取代原文。

`src/lib/legal-documents.ts` 保存的是 **2026 年 9 月 9 日**从 FIDERE 官网读取的文本，包括原有标题、日期及条款编号；每份文件附来源 URL、读取日期和文本 SHA-256。全文已内置，阅读不依赖跳转回原站。原站 Disclaimer 对应文件的标题本来就是 **Terms of Use**，实现保留这一差异，并与 Terms & Conditions 分开。

原文不是自动同步数据源。后续政策有正式修订时，需要同时更新对应英文快照、出处信息及相关概要。公司官网的监管披露是本项目的来源，不应将其描述为本项目独立完成的监管查册结果。

相关记录：

- [FIDERE 内容来源与事实边界](docs/content-sources.md)：服务、联系方式、资格限制、监管及法律文件出处。
- [参考站信息架构研究](docs/reference-architecture.md)：页面层级、详情模板、章节和返回路径。
- [设计系统](docs/design-system.md)：浏览器观察、设计取舍及实现变量。
- [摄影来源](docs/image-sources.md)：图片作者、原始页面、许可与地域说明。
- [内页集成说明](docs/inner-pages-notes.md)：组件与业务内容关系。
- [技术 SEO 验证](docs/seo-validation.md)：当前三语范围、验证方法、已验证结果与上线边界。
- [Cloudflare 部署记录](docs/cloudflare-deployment.md)：当前三语生产部署及历史证据。

## 联系表单与客户访问的实际行为

联系表单在浏览器中生成邮件草稿，用户可查看、复制，或通过 `mailto:` 打开自己的邮件应用，再自行发送。页面修改字段后会重新准备草稿；从服务详情进入时，`interest` 参数可加入邮件主题。

**本项目没有表单接收、邮件发送、CRM 或客户账户后端。** 点击“准备咨询邮件”不发送消息，不表示 FIDERE 已收到咨询；打开邮件应用也不等于发送成功。草稿仅保存在当前页面的 React 状态中，复制操作由用户触发。

桌面和移动导航的客户登录入口使用已获用户批准的 [FIDERE 客户门户](https://portal.fideretrust.com)，在新窗口或标签页打开（`target="_blank"`、`rel="noopener noreferrer"`）。门户地址集中在 `company.portal` 中。本站提供外部入口，不在官网内处理门户登录认证。

`/login`（繁体中文为 `/zh-hant/login`，阿拉伯语为 `/ar/login`）仍保留为客户访问协助说明页，没有登录认证表单。该页设置 `noindex, follow`，并从 Sitemap 排除。门户链接的存在、打开方式与实际账户认证成功是不同的验收结果；本项目不据此外推门户后端或客户账户可用性。

## 当前交付边界

本轮三语技术 SEO 与客户门户入口已于 **2026-09-09 约12:19 HKT** 发布到 Cloudflare Pages，部署 ID 为 `addf2556-d2c7-4b43-be21-f758ff6f7d9d`。生产117个页面及元数据检查通过，Sitemap 为114个唯一 URL；构建、静态 SEO、本地 HTTP、重定向及响应头证据见 [部署记录](docs/cloudflare-deployment.md) 和 [SEO 验证](docs/seo-validation.md)。历史部署及 DNS 变更证据仍保留。

Cloudflare 已启用 `Canonical apex to www` 规则，HTTPS apex 以301跳转至 `https://www.fideretrust.com` 的相同路径并保留查询参数；HTTP apex 先升级到 HTTPS，再转至 `www`，最终目标200。规则 ID 和验收示例见 [部署记录](docs/cloudflare-deployment.md)。

Search Console 域名资源 `sc-domain:fideretrust.com` 已通过 Cloudflare Domain Connect 的 DNS provider 所有权验证，正式 Sitemap 已成功提交。Search Console 显示 Status Success，提交及最后读取日期均为2026-09-09，发现114页、0个视频。详情见 [SEO 验证](docs/seo-validation.md)；文档不记录 DNS 验证 token。发现页面不等于已收录，实际 Google 页面收录、选定 canonical、排名和后续抓取数据仍需等待并验证。构建产物、页面可访问、消息实际送达和客户认证是不同结果；官网门户入口验证不代表门户账户认证或业务验收。

页面结构和英文路径已扩展、调整。早期版本的构建或页面检查记录不能作为这一版的验收结果；最新源码应重新执行相应检查，并分别记录构建、链接、语言切换、响应式布局及交互结果。

服务文案保持客户资格、司法管辖区及适用监管要求的限制，不展示虚构收益率、AUM、账户余额、团队或合作银行。香港、美国、新加坡及巴林的视觉内容表示账户安排范围，不表示 FIDERE 在四地均设有办公室；巴林由用户于2026年9月9日明确加入，而非从早期公开网站内容推断。

## 本次白底内页改版验收

当前预览：http://127.0.0.1:3000/zh-hant 。

- [参考站访问清单](docs/reference-public-inventory.md)
- [页面映射与内容依据](docs/reference-page-map.md)
- [视觉对比、修正及剩余差异](docs/visual-validation.md)
- [交互与响应式验收](docs/interaction-validation.md)
- [历史117页路由验收](docs/route-validation.md)（早期英文、繁体、简体版本，不代表当前三语验收）

同尺寸截图与完整页面位于 `artifacts/visual-validation/`（本地证据，不纳入 Git）；`python3 scripts/create-visual-comparisons.py` 可重建并排及叠加图。

阿拉伯语接入、759 条共享翻译、历史156页四语言回归与截图见 [阿拉伯语国际化验证](docs/arabic-internationalization.md)。该四语数量属于历史阶段；当前源码为英文、繁体、阿拉伯语，共117页、114个 Sitemap URL，最新 SEO 状态以 [技术 SEO 验证](docs/seo-validation.md) 为准。
