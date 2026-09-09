# Lighthouse Canton：公开页面发现与读取清单

本轮生成：2026-09-08T18:27:34.606352+00:00。初始发现阶段仅公开 GET 与 HTML 静态解析。随后补充实际浏览器证据：下表逐 URL 的浏览器列仅依据亲测及 `browser-primary` / `browser-supplement` / `browser-regional` / `browser-completion` 及 `visual-validation` 保存 JSON 的实际 URL 更新。最新集合差分确认79条范围内地址都有浏览器到达或实际尝试记录，未尝试0；地区 / 语言同族不自动视为已到达。证据状态索引见 `artifacts/reference/full-audit/browser-evidence-index.json`；区域研究详见 `reference-browser-regional.md`，收尾证据与失败边界见 [reference-browser-completion.md](reference-browser-completion.md)。

## 浏览器覆盖收尾（2026-09-09）

范围内79个地址：原始 HTTP 最终状态为74个200、5个404；最新浏览器结果为32个到达、47个跳转后目标未到达、0个已渲染404、0个未尝试。历史曾到达33个，其中根路径本轮跳回 `/cn-s`；仅有跳转记录46个。最新与历史口径不同，不能相加。43条收尾请求均分别导航后，在下一次 DOM 读取中确认实际 URL，并保存实际页面正文与首屏；它们全部跳回 `/cn-s`，不作为请求目标正文已读的证据。完整逐URL集合差分见 `artifacts/reference/browser-completion/coverage.json`。

## 发现与范围

- 来源为实际获取的官方 sitemap、已验证参考文档，以及逐页 HTML 的导航、页脚、内部 a[href]。没有猜 URL、提交表单、执行下载的 JavaScript、登录或使用凭据。
- 官方 sitemap 实际含 643 条：排除 485 条 Insights 路径，以及 93 条属于同一编辑栏目的 events / webinars / podcasts 内容，剩余 65 条。既有真实 cn-s / 专题链接补充为71个种子，链接发现再增加10个。
- 两轮收敛后实际 GET 81 个 URL，全部保存并解析 HTML；HTTP200为76、404为5，没有超时、没有待抓取的范围内URL。
- `/global-outlook` 与业务目录中的播客专题，不含 insights 路径；读取后才识别为报告/节目内容，现标为“识别后排除”。其已经发生的GET如实保留，后续不纳入浏览器研究。
- 因此范围内共79个已访问地址，含74个成功响应和5个无效旧链接；成功内容归为 38 个模板族。语言、地区和旧别名各自列行，不因为标题类似就跳过。
- 限制：20秒请求超时、并发6、单响应8MiB、上限250页/8轮；均未触及数量限制。跳转到外部或排除区域会停止跟随。query / fragment 仅作为真实页面状态记录，不当作新模板。
- 已发现 10 个去重PDF链接，只记来源，不下载正文；外部登录/投资者门户只记录链接。公开 search / thank-you / 登记表单仅GET，没有执行查询或提交。

## 模板族与优先实际渲染清单

此表为最初的模板研究任务分组，不能代表同族所有语言均完成；**实际逐页状态以下方响应表和 browser-evidence-index.json 为准**。

以下“模板族”依据规范地址、地区/语言关系和HTML结构归纳，不宣称同族像素完全相同。每个代表页仍需实际浏览首屏、中段、末段、菜单与交互；地区变体有独立内容，应补充差异验证。

| 类型 | 代表 URL | 其他已读地区/语言/别名 URL | 浏览器状态 |
| --- | --- | --- | --- |
| gateway | [/](https://www.lighthouse-canton.com/) | [/cn](https://www.lighthouse-canton.com/cn)<br>[/cn-s](https://www.lighthouse-canton.com/cn-s)<br>[/cn-t](https://www.lighthouse-canton.com/cn-t)<br>[/in](https://www.lighthouse-canton.com/in) | 列示范围内 5/5 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| institution specialty | [/10x](https://www.lighthouse-canton.com/10x) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| institution chapters | [/about](https://www.lighthouse-canton.com/about) | [/cn-s/about](https://www.lighthouse-canton.com/cn-s/about)<br>[/in/about](https://www.lighthouse-canton.com/in/about) | 列示范围内 3/3 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| institution specialty | [/careers](https://www.lighthouse-canton.com/careers) | [/in/careers](https://www.lighthouse-canton.com/in/careers) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| contact | [/contact](https://www.lighthouse-canton.com/contact) | [/cn-s/contact](https://www.lighthouse-canton.com/cn-s/contact)<br>[/cn-t/contact](https://www.lighthouse-canton.com/cn-t/contact)<br>[/in/contact](https://www.lighthouse-canton.com/in/contact) | 列示范围内 4/4 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| persona landing | [/corporates-familyoffices-individuals](https://www.lighthouse-canton.com/corporates-familyoffices-individuals) | [/cn-s/homepage-families-individuals](https://www.lighthouse-canton.com/cn-s/homepage-families-individuals)<br>[/cn-t/homepage-families-individuals](https://www.lighthouse-canton.com/cn-t/homepage-families-individuals)<br>[/in/corporates-familyoffices-individuals](https://www.lighthouse-canton.com/in/corporates-familyoffices-individuals) | 列示范围内 4/4 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/disclaimer](https://www.lighthouse-canton.com/disclaimer) | [/in/disclaimer](https://www.lighthouse-canton.com/in/disclaimer) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| persona landing | [/insitutional-investor](https://www.lighthouse-canton.com/insitutional-investor) | [/in/insitutional-investor](https://www.lighthouse-canton.com/in/insitutional-investor) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/in/lighthouse-canton---regulatory-information---gift-city](https://www.lighthouse-canton.com/in/lighthouse-canton---regulatory-information---gift-city) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/in/lighthouse-canton---regulatory-information--pms](https://www.lighthouse-canton.com/in/lighthouse-canton---regulatory-information--pms) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/lighthouse-canton-india-disclosures](https://www.lighthouse-canton.com/lighthouse-canton-india-disclosures) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| business overview | [/our-businesses/asset-management](https://www.lighthouse-canton.com/our-businesses/asset-management) | [/in/our-businesses/asset-management](https://www.lighthouse-canton.com/in/our-businesses/asset-management) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund collection | [/our-businesses/asset-management/private-market-funds](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds) | [/in/our-businesses/asset-management/private-market-funds](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund) | [/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/in/our-businesses/asset-management/private-market-funds/lc-nueva-aif](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-aif) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/lc-nueva-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-fund) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund) | [/in/lc-nueva-momentum-fund-in](https://www.lighthouse-canton.com/in/lc-nueva-momentum-fund-in)<br>[/in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund](https://www.lighthouse-canton.com/in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund)<br>[/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund) | 列示范围内 4/4 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund) | [/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit) | [/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund) | [/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/private-market-funds/life-sciences-real-estate](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/life-sciences-real-estate) | [/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund collection | [/our-businesses/asset-management/public-market-funds](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds) | [/in/our-businesses/asset-management/public-market-funds](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/public-market-funds/lc-beacon-global](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global) | [/in/our-businesses/asset-management/public-market-funds/lc-beacon-global](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-beacon-global) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| fund detail | [/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| business overview | [/our-businesses/founders-ecosystem](https://www.lighthouse-canton.com/our-businesses/founders-ecosystem) | [/in/our-businesses/founders-ecosystem](https://www.lighthouse-canton.com/in/our-businesses/founders-ecosystem) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| business overview | [/our-businesses/technology-and-innovation](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation) | [/in/our-businesses/technology-and-innovation](https://www.lighthouse-canton.com/in/our-businesses/technology-and-innovation) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| business overview | [/our-businesses/wealth-management](https://www.lighthouse-canton.com/our-businesses/wealth-management) | [/in/our-businesses/wealth-management](https://www.lighthouse-canton.com/in/our-businesses/wealth-management) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| business specialist | [/our-businesses/wealth-management/advisory-and-capital-solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions) | [/in/our-businesses/wealth-management/advisory-and-capital-solutions](https://www.lighthouse-canton.com/in/our-businesses/wealth-management/advisory-and-capital-solutions) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| business specialist | [/our-businesses/wealth-management/global-indian-business-practice](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice) | [/in/our-businesses/wealth-management/global-indian-business-practice](https://www.lighthouse-canton.com/in/our-businesses/wealth-management/global-indian-business-practice) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| institution specialty | [/our-impact](https://www.lighthouse-canton.com/our-impact) | [/in/our-impact](https://www.lighthouse-canton.com/in/our-impact) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/privacy-policy](https://www.lighthouse-canton.com/privacy-policy) | [/in/privacy-policy](https://www.lighthouse-canton.com/in/privacy-policy) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/in/regulatory-information-aif](https://www.lighthouse-canton.com/in/regulatory-information-aif) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| utility | [/search](https://www.lighthouse-canton.com/search) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| persona landing | [/startupfounder-entrepreneur](https://www.lighthouse-canton.com/startupfounder-entrepreneur) | [/in/startupfounder-entrepreneur](https://www.lighthouse-canton.com/in/startupfounder-entrepreneur) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| utility | [/thank-you](https://www.lighthouse-canton.com/thank-you) | [/in/thank-you](https://www.lighthouse-canton.com/in/thank-you) | 列示范围内 2/2 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| public interest registration | [/in/vd-aifcoinvest](https://www.lighthouse-canton.com/in/vd-aifcoinvest) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |
| legal / disclosure | [/whistleblower-policy](https://www.lighthouse-canton.com/whistleblower-policy) | — | 列示范围内 1/1 地址已有访问或尝试；到达 / 跳转分别见逐 URL 表 |

## 每一个已访问 URL

来源单元格列类型；每条完整来源URL、响应时间、重定向链及SHA-256都保留在 `manifest.json`，精确的导航/页脚/正文 href 在 `discovery-links.json`。

| URL | HTTP / redirect | 发现来源 | 类型 / 范围 | canonical | HTML读取 | 浏览器验证 |
| --- | --- | --- | --- | --- | --- | --- |
| [/](https://www.lighthouse-canton.com/) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | gateway / in-scope | https://www.lighthouse-canton.com | 是 | 历史已到达；本轮自动跳转 /cn-s，当前目标未到达；两次记录均保留 |
| [/10x](https://www.lighthouse-canton.com/10x) | 200 | sitemap.xml | institution specialty / in-scope | https://www.lighthouse-canton.com/10x | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/about](https://www.lighthouse-canton.com/about) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | institution chapters / in-scope | https://www.lighthouse-canton.com/about | 是 | 已到达：协作 JSON 2 状态；filtered |
| [/careers](https://www.lighthouse-canton.com/careers) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | institution specialty / in-scope | https://www.lighthouse-canton.com/careers | 是 | 已到达：协作 JSON 5 状态；bottom, carousel-next, middle, top |
| [/cn](https://www.lighthouse-canton.com/cn) | 301 → 200 | sitemap.xml | gateway / in-scope | https://www.lighthouse-canton.com/cn-t | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn-s](https://www.lighthouse-canton.com/cn-s) | 200 | docs/design-system.md, docs/reference-architecture.md, nav, user reference / docs/reference-page-map.md | gateway / in-scope | https://www.lighthouse-canton.com/cn-s | 是 | 部分：已实际导航并读 DOM；未完成独立首中尾 |
| [/cn-s/about](https://www.lighthouse-canton.com/cn-s/about) | 200 | docs/design-system.md, docs/reference-architecture.md, footer, nav | institution chapters / in-scope | https://www.lighthouse-canton.com/cn-s/about | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn-s/contact](https://www.lighthouse-canton.com/cn-s/contact) | 200 | docs/reference-architecture.md, footer, internal, nav | contact / in-scope | https://www.lighthouse-canton.com/cn-s/contact | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn-s/homepage-families-individuals](https://www.lighthouse-canton.com/cn-s/homepage-families-individuals) | 200 | docs/reference-architecture.md, internal, nav | persona landing / in-scope | https://www.lighthouse-canton.com/cn-s/homepage-families-individuals | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn-t](https://www.lighthouse-canton.com/cn-t) | 200 | nav | gateway / in-scope | https://www.lighthouse-canton.com/cn-t | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn-t/contact](https://www.lighthouse-canton.com/cn-t/contact) | 200 | nav | contact / in-scope | https://www.lighthouse-canton.com/cn-t/contact | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn-t/homepage-families-individuals](https://www.lighthouse-canton.com/cn-t/homepage-families-individuals) | 200 | internal | persona landing / in-scope | https://www.lighthouse-canton.com/cn-t/homepage-families-individuals | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn/about](https://www.lighthouse-canton.com/cn/about) | 404 | footer, sitemap.xml | invalid linked URL / in-scope | https://www.lighthouse-canton.com/404 | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn/contact](https://www.lighthouse-canton.com/cn/contact) | 404 | footer, sitemap.xml | invalid linked URL / in-scope | https://www.lighthouse-canton.com/404 | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/cn/homepage-families-individuals](https://www.lighthouse-canton.com/cn/homepage-families-individuals) | 404 | sitemap.xml | invalid linked URL / in-scope | https://www.lighthouse-canton.com/404 | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/contact](https://www.lighthouse-canton.com/contact) | 200 | docs/design-system.md, docs/reference-architecture.md, footer, internal, nav, sitemap.xml | contact / in-scope | https://www.lighthouse-canton.com/contact | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/corporates-familyoffices-individuals](https://www.lighthouse-canton.com/corporates-familyoffices-individuals) | 200 | docs/reference-architecture.md, internal, nav, sitemap.xml | persona landing / in-scope | https://www.lighthouse-canton.com/corporates-familyoffices-individuals | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/disclaimer](https://www.lighthouse-canton.com/disclaimer) | 200 | footer, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/disclaimer | 是 | 已到达：协作 JSON 4 状态；bottom, middle, top |
| [/global-outlook](https://www.lighthouse-canton.com/global-outlook) | 200 | nav | identified editorial; excluded after read / identified-editorial-excluded-after-read | https://www.lighthouse-canton.com/global-outlook | 是 | not performed in this audit |
| [/in](https://www.lighthouse-canton.com/in) | 200 | footer, internal, nav, sitemap.xml | gateway / in-scope | https://www.lighthouse-canton.com/in | 是 | 部分：已实际导航并读 DOM；未完成独立首中尾 |
| [/in/about](https://www.lighthouse-canton.com/in/about) | 200 | footer, internal, nav, sitemap.xml | institution chapters / in-scope | https://www.lighthouse-canton.com/in/about | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/careers](https://www.lighthouse-canton.com/in/careers) | 200 | footer, nav, sitemap.xml | institution specialty / in-scope | https://www.lighthouse-canton.com/in/careers | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/contact](https://www.lighthouse-canton.com/in/contact) | 200 | footer, internal, nav, sitemap.xml | contact / in-scope | https://www.lighthouse-canton.com/in/contact | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/corporates-familyoffices-individuals](https://www.lighthouse-canton.com/in/corporates-familyoffices-individuals) | 200 | internal, nav, sitemap.xml | persona landing / in-scope | https://www.lighthouse-canton.com/in/corporates-familyoffices-individuals | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/disclaimer](https://www.lighthouse-canton.com/in/disclaimer) | 200 | footer, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/in/disclaimer | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/insitutional-investor](https://www.lighthouse-canton.com/in/insitutional-investor) | 200 | internal, nav, sitemap.xml | persona landing / in-scope | https://www.lighthouse-canton.com/in/insitutional-investor | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/lc-nueva-momentum-fund-in](https://www.lighthouse-canton.com/in/lc-nueva-momentum-fund-in) | 301 → 301 → 200 | internal | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/lighthouse-canton---regulatory-information---gift-city](https://www.lighthouse-canton.com/in/lighthouse-canton---regulatory-information---gift-city) | 200 | footer, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/in/lighthouse-canton---regulatory-information---gift-city | 是 | 已尝试：重定向 /cn-s，目标未到达；HTML 已读 |
| [/in/lighthouse-canton---regulatory-information--pms](https://www.lighthouse-canton.com/in/lighthouse-canton---regulatory-information--pms) | 200 | footer, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/in/lighthouse-canton---regulatory-information--pms | 是 | 已到达：完整 DOM、首中尾、计算样式 |
| [/in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund](https://www.lighthouse-canton.com/in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund) | 301 → 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management](https://www.lighthouse-canton.com/in/our-businesses/asset-management) | 200 | footer, internal, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/private-market-funds](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds) | 200 | footer, internal, nav, sitemap.xml | fund collection / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds | 是 | 部分：已实际导航并读 DOM；未完成独立首中尾 |
| [/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund) | 200 | internal | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/private-market-funds/lc-nueva-aif](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-aif) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-aif | 是 | 已到达：完整 DOM、首中尾、菜单/折叠/图表、计算样式 |
| [/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/public-market-funds](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds) | 200 | footer, internal, nav, sitemap.xml | fund collection / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds | 是 | 部分：已实际导航并读 DOM；未完成独立首中尾 |
| [/in/our-businesses/asset-management/public-market-funds/lc-beacon-global](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-beacon-global) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-beacon-global | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio | 是 | 已到达：完整 DOM、首中尾、折叠、计算样式 |
| [/in/our-businesses/founders-ecosystem](https://www.lighthouse-canton.com/in/our-businesses/founders-ecosystem) | 200 | footer, internal, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/in/our-businesses/founders-ecosystem | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/technology-and-innovation](https://www.lighthouse-canton.com/in/our-businesses/technology-and-innovation) | 200 | nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/in/our-businesses/technology-and-innovation | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/wealth-management](https://www.lighthouse-canton.com/in/our-businesses/wealth-management) | 200 | footer, internal, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/in/our-businesses/wealth-management | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/wealth-management/advisory-and-capital-solutions](https://www.lighthouse-canton.com/in/our-businesses/wealth-management/advisory-and-capital-solutions) | 200 | nav | business specialist / in-scope | https://www.lighthouse-canton.com/in/our-businesses/wealth-management/advisory-and-capital-solutions | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-businesses/wealth-management/global-indian-business-practice](https://www.lighthouse-canton.com/in/our-businesses/wealth-management/global-indian-business-practice) | 200 | nav | business specialist / in-scope | https://www.lighthouse-canton.com/in/our-businesses/wealth-management/global-indian-business-practice | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/our-impact](https://www.lighthouse-canton.com/in/our-impact) | 200 | footer, nav, sitemap.xml | institution specialty / in-scope | https://www.lighthouse-canton.com/in/our-impact | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/privacy-policy](https://www.lighthouse-canton.com/in/privacy-policy) | 200 | footer, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/in/privacy-policy | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/regulatory-information-aif](https://www.lighthouse-canton.com/in/regulatory-information-aif) | 200 | footer, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/in/regulatory-information-aif | 是 | 已到达：完整 DOM、首中尾、计算样式 |
| [/in/startupfounder-entrepreneur](https://www.lighthouse-canton.com/in/startupfounder-entrepreneur) | 200 | internal, nav, sitemap.xml | persona landing / in-scope | https://www.lighthouse-canton.com/in/startupfounder-entrepreneur | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/thank-you](https://www.lighthouse-canton.com/in/thank-you) | 200 | sitemap.xml | utility / in-scope | https://www.lighthouse-canton.com/in/thank-you | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/in/vd-aifcoinvest](https://www.lighthouse-canton.com/in/vd-aifcoinvest) | 200 | sitemap.xml | public interest registration / in-scope | https://www.lighthouse-canton.com/in/vd-aifcoinvest | 是 | 已尝试：重定向 /cn-s，目标未到达；HTML 已读 |
| [/insitutional-investor](https://www.lighthouse-canton.com/insitutional-investor) | 200 | docs/reference-architecture.md, internal, nav, sitemap.xml | persona landing / in-scope | https://www.lighthouse-canton.com/insitutional-investor | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/lighthouse-canton-india-disclosures](https://www.lighthouse-canton.com/lighthouse-canton-india-disclosures) | 200 | sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/lighthouse-canton-india-disclosures | 是 | 已尝试：重定向 /cn-s，目标未到达；HTML 已读 |
| [/our-businesses/asset-management](https://www.lighthouse-canton.com/our-businesses/asset-management) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management | 是 | 已到达：协作 JSON 2 状态；private-credit, top |
| [/our-businesses/asset-management/alternatives-in-focus-asian-private-credit-podcast](https://www.lighthouse-canton.com/our-businesses/asset-management/alternatives-in-focus-asian-private-credit-podcast) | 200 | sitemap.xml | identified editorial; excluded after read / identified-editorial-excluded-after-read | https://www.lighthouse-canton.com/our-businesses/asset-management/alternatives-in-focus-asian-private-credit-podcast | 是 | not performed in this audit |
| [/our-businesses/asset-management/private-market-funds](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | fund collection / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds | 是 | 已到达：协作 JSON 3 状态；middle, section, top |
| [/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund) | 200 | internal | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund | 是 | 已到达：协作 JSON 4 状态；accordion, footer, middle, top |
| [/our-businesses/asset-management/private-market-funds/lc-nueva-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-fund | 是 | 已到达：协作 JSON 3 状态；footer, tabs, top |
| [/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund) | 200 | docs/reference-architecture.md, internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund | 是 | 已到达：协作 JSON 3 状态；filter, footer, top |
| [/our-businesses/asset-management/private-market-funds/life-sciences-real-estate](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/life-sciences-real-estate) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/life-sciences-real-estate | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/our-businesses/asset-management/public-market-funds](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | fund collection / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds | 是 | 已到达：协作 JSON 2 状态；section, top |
| [/our-businesses/asset-management/public-market-funds/lc-beacon-global](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global) | 200 | docs/reference-architecture.md, internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund) | 200 | internal, sitemap.xml | fund detail / in-scope | https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund | 是 | 已到达：协作 JSON 3 状态；footer, middle, top |
| [/our-businesses/founders-ecosystem](https://www.lighthouse-canton.com/our-businesses/founders-ecosystem) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/our-businesses/founders-ecosystem | 是 | 已到达：协作 JSON 9 状态；footer-verified, growth-tab, intermediate-bottom-attempt, middle, top |
| [/our-businesses/technology-and-innovation](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation) | 200 | docs/reference-architecture.md, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/our-businesses/technology-and-innovation | 是 | 已到达：协作 JSON 5 状态；bottom, middle, public-markets-tab, top |
| [/our-businesses/wealth-management](https://www.lighthouse-canton.com/our-businesses/wealth-management) | 200 | docs/design-system.md, docs/reference-architecture.md, footer, internal, nav, sitemap.xml | business overview / in-scope | https://www.lighthouse-canton.com/our-businesses/wealth-management | 是 | 已到达：实际 URL / 计算样式 / 视口记录已存；详见浏览器证据索引 |
| [/our-businesses/wealth-management/advisory-and-capital-solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions) | 200 | docs/design-system.md, docs/reference-architecture.md, nav | business specialist / in-scope | https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions | 是 | 已到达：实际 URL / 计算样式 / 视口记录已存；详见浏览器证据索引 |
| [/our-businesses/wealth-management/global-indian-business-practice](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice) | 200 | docs/reference-architecture.md, nav | business specialist / in-scope | https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice | 是 | 已到达：协作 JSON 4 状态；bottom, middle, top |
| [/our-businesses/wealth-management/lc-global-select-sp](https://www.lighthouse-canton.com/our-businesses/wealth-management/lc-global-select-sp) | 404 | internal | invalid linked URL / in-scope | https://www.lighthouse-canton.com/404 | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/our-impact](https://www.lighthouse-canton.com/our-impact) | 200 | docs/reference-architecture.md, footer, internal, nav, sitemap.xml | institution specialty / in-scope | https://www.lighthouse-canton.com/our-impact | 是 | 已到达：协作 JSON 5 状态；bottom, middle, sme-tab, top |
| [/privacy-policy](https://www.lighthouse-canton.com/privacy-policy) | 200 | footer, internal, sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/privacy-policy | 是 | 已到达：协作 JSON 4 状态；bottom, middle, top |
| [/search](https://www.lighthouse-canton.com/search) | 200 | nav, sitemap.xml | utility / in-scope | https://www.lighthouse-canton.com/search | 是 | 已到达：空查询首尾、完整 DOM、计算样式；未提交 |
| [/startupfounder-entrepreneur](https://www.lighthouse-canton.com/startupfounder-entrepreneur) | 200 | docs/reference-architecture.md, internal, nav, sitemap.xml | persona landing / in-scope | https://www.lighthouse-canton.com/startupfounder-entrepreneur | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/team](https://www.lighthouse-canton.com/team) | 404 | sitemap.xml | invalid linked URL / in-scope | https://www.lighthouse-canton.com/404 | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |
| [/thank-you](https://www.lighthouse-canton.com/thank-you) | 200 | sitemap.xml | utility / in-scope | https://www.lighthouse-canton.com/thank-you | 是 | 已尝试：重定向 /cn-s，目标未到达；HTML 已读 |
| [/whistleblower-policy](https://www.lighthouse-canton.com/whistleblower-policy) | 200 | sitemap.xml | legal / disclosure / in-scope | https://www.lighthouse-canton.com/whistleblower-policy | 是 | 已尝试：自动跳转 /cn-s，目标未到达；独立 DOM / 正文 / 首屏已存 |

## 各页 section 顺序与阅读任务

以下为依据实际读取HTML作出的中文结构摘要；不复制网页主文。HTML中可能包含隐藏菜单、响应式副本或法律弹窗，因此这是待浏览器确认的DOM顺序。原始 heading/section 标识保存在manifest，用于复核；不把它们冒充可见状态。

### /

- 页面标题：Lighthouse Canton / Wealth & Asset Management。
- 模板族：`/`；地区/语言：global / en。
- 结构顺序：机构定位主画面 → 三类访问者身份入口 → 语言/地域选择 → 准入和法律提示状态。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /10x

- 页面标题：LightHouse Canton – 10X Years Strong Ahead。
- 模板族：`/10x`；地区/语言：global / en。
- 结构顺序：周年机构成绩 → 年度历程 → 人物 → 活动和媒体区（内容排除） → 机构介绍延伸。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /about

- 页面标题：About / Lighthouse Canton。
- 模板族：`/about`；地区/语言：global / en。
- 结构顺序：图片主画面 → 机构声明与说明 → 年度历程选择 → 使命与愿景 → 理念长文 → 团队人物与履历 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /careers

- 页面标题：Careers at Lighthouse Canton / Grow With Us。
- 模板族：`/careers`；地区/语言：global / en。
- 结构顺序：招聘定位 → 工作文化介绍 → 员工叙述 → 系列内容入口 → 价值观 → 人才联系。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /cn

- 页面标题：Lighthouse Canton / Taiwan。
- 模板族：`/`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：机构定位主画面 → 三类访问者身份入口 → 语言/地域选择 → 准入和法律提示状态。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-s

- 页面标题：Lighthouse Canton / China。
- 模板族：`/`；地区/语言：Simplified Chinese / zh-Hans。
- 结构顺序：机构定位主画面 → 三类访问者身份入口 → 语言/地域选择 → 准入和法律提示状态。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-s/about

- 页面标题：About Lighthouse Canton。
- 模板族：`/about`；地区/语言：Simplified Chinese / zh-Hans。
- 结构顺序：图片主画面 → 机构声明与说明 → 年度历程选择 → 使命与愿景 → 理念长文 → 团队人物与履历 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-s/contact

- 页面标题：Contact Us / Lighthouse Canton China。
- 模板族：`/contact`；地区/语言：Simplified Chinese / zh-Hans。
- 结构顺序：联系页图片与标题 → 联系目的/表单 → 地区办公室信息 → 法律与全局页脚。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-s/homepage-families-individuals

- 页面标题：Families & Individuals / Lighthouse Canton China。
- 模板族：`/corporates-familyoffices-individuals`；地区/语言：Simplified Chinese / zh-Hans。
- 结构顺序：客户定位 → 新闻提示横幅（内容排除） → 利益一致性说明 → 机构证明信息 → 服务方式阐述 → 企业/家族需求分流 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-t

- 页面标题：Lighthouse Canton / Taiwan。
- 模板族：`/`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：机构定位主画面 → 三类访问者身份入口 → 语言/地域选择 → 准入和法律提示状态。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-t/contact

- 页面标题：Contact Us / Lighthouse Canton Taiwan。
- 模板族：`/contact`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：联系页图片与标题 → 联系目的/表单 → 地区办公室信息 → 法律与全局页脚。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /cn-t/homepage-families-individuals

- 页面标题：Families & Individuals / Lighthouse Canton Taiwan。
- 模板族：`/corporates-familyoffices-individuals`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：客户定位 → 新闻提示横幅（内容排除） → 利益一致性说明 → 机构证明信息 → 服务方式阐述 → 企业/家族需求分流 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /cn/about

- 页面标题：Not Found。
- 模板族：`/404`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：错误页主体 → 返回/全局导航。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /cn/contact

- 页面标题：Not Found。
- 模板族：`/404`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：错误页主体 → 返回/全局导航。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /cn/homepage-families-individuals

- 页面标题：Not Found。
- 模板族：`/404`；地区/语言：Traditional Chinese / zh-Hant。
- 结构顺序：错误页主体 → 返回/全局导航。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /contact

- 页面标题：Connect with Lighthouse Canton / Singapore / Dubai / India。
- 模板族：`/contact`；地区/语言：global / en。
- 结构顺序：联系页图片与标题 → 联系目的/表单 → 地区办公室信息 → 法律与全局页脚。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /corporates-familyoffices-individuals

- 页面标题：Lighthouse Canton / Family Office & Individual Solutions。
- 模板族：`/corporates-familyoffices-individuals`；地区/语言：global / en。
- 结构顺序：客户定位 → 新闻提示横幅（内容排除） → 利益一致性说明 → 机构证明信息 → 服务方式阐述 → 企业/家族需求分流 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /disclaimer

- 页面标题：Disclaimer: Important Information on Lighthouse Canton's Website。
- 模板族：`/disclaimer`；地区/语言：global / en。
- 结构顺序：免责声明标题 → 编号使用/地域/资格条款 → 风险与责任限制 → 通讯和隐私相关条款。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /global-outlook

- 页面标题：An Impossible Trinity / Lighthouse Canton's Global Outlook Report 2026。
- 模板族：`/global-outlook`；地区/语言：global / en。
- 结构顺序：识别为报告/播客内容后排除后续研究。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in

- 页面标题：Lighthouse Canton / India。
- 模板族：`/`；地区/语言：India / en-IN。
- 结构顺序：机构定位主画面 → 三类访问者身份入口 → 语言/地域选择 → 准入和法律提示状态。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/about

- 页面标题：About / Lighthouse Canton India。
- 模板族：`/about`；地区/语言：India / en-IN。
- 结构顺序：图片主画面 → 机构声明与说明 → 年度历程选择 → 使命与愿景 → 理念长文 → 团队人物与履历 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/careers

- 页面标题：Empower Your Career at Lighthouse Canton。
- 模板族：`/careers`；地区/语言：India / en-IN。
- 结构顺序：招聘定位 → 工作文化介绍 → 员工叙述 → 系列内容入口 → 价值观 → 人才联系。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/contact

- 页面标题：Contact Lighthouse Canton / India。
- 模板族：`/contact`；地区/语言：India / en-IN。
- 结构顺序：联系页图片与标题 → 联系目的/表单 → 地区办公室信息 → 法律与全局页脚。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/corporates-familyoffices-individuals

- 页面标题：Lighthouse Canton's Commitment to Your Financial Success。
- 模板族：`/corporates-familyoffices-individuals`；地区/语言：India / en-IN。
- 结构顺序：客户定位 → 新闻提示横幅（内容排除） → 利益一致性说明 → 机构证明信息 → 服务方式阐述 → 企业/家族需求分流 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/disclaimer

- 页面标题：Website Disclaimer / Lighthouse Canton India。
- 模板族：`/disclaimer`；地区/语言：India / en-IN。
- 结构顺序：免责声明标题 → 编号使用/地域/资格条款 → 风险与责任限制 → 通讯和隐私相关条款。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/insitutional-investor

- 页面标题：Institutional Investor Solutions by Lighthouse Canton。
- 模板族：`/insitutional-investor`；地区/语言：India / en-IN。
- 结构顺序：机构投资者定位 → 证明信息 → 投资方法阐述 → 策略集合入口 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/lc-nueva-momentum-fund-in

- 页面标题：LC Nueva Momentum Fund / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 投资理由 → 市场背景阐述 → 团队与投资者信息 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/lighthouse-canton---regulatory-information---gift-city

- 页面标题：GIFT City Regulatory Information / Lighthouse Canton India。
- 模板族：`/lighthouse-canton---regulatory-information---gift-city`；地区/语言：India / en-IN。
- 结构顺序：监管披露标题 → 实体/业务信息 → 相关文件链接 → 投资者说明/申诉渠道。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/lighthouse-canton---regulatory-information--pms

- 页面标题：PMS Regulatory Information / Lighthouse Canton India。
- 模板族：`/lighthouse-canton---regulatory-information--pms`；地区/语言：India / en-IN。
- 结构顺序：监管披露标题 → 实体/业务信息 → 相关文件链接 → 投资者说明/申诉渠道。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund

- 页面标题：LC Nueva Momentum Fund / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 投资理由 → 市场背景阐述 → 团队与投资者信息 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management

- 页面标题：Asset Management Services in India / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management`；地区/语言：India / en-IN。
- 结构顺序：业务定位 → 策略索引 → 逐项策略/基金集合入口 → 机构定制安排 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds

- 页面标题：Private Market Funds in India / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds`；地区/语言：India / en-IN。
- 结构顺序：基金集合归属 → 策略分类与产品索引 → 逐项基金简述和详情入口 → 关联资讯模块（内容排除） → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund

- 页面标题：LC Luminere Credit Fund / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 策略准则 → 投资情境分类 → 融资用途和类别 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/lc-nueva-aif

- 页面标题：LC Nueva AIF / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-nueva-aif`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 证明信息 → 组合企业 → 投资理由 → 区域投资背景 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund

- 页面标题：LC Nueva Momentum Fund / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 投资理由 → 市场背景阐述 → 团队与投资者信息 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund

- 页面标题：LC Special Credit Opportunities Fund 2。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 信贷市场机会 → 策略类型分组 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit

- 页面标题：LC Supply Chain Credit Fund / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 关键特征 → 融资结构 → 投资理由 → 市场需求背景 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund

- 页面标题：LC Venture Debt Fund / Growth Opportunities in Private Markets。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 证明信息 → 组合企业 → 投资理由 → 市场机会 → 团队 → 资料/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate

- 页面标题：Life Sciences Real Estate / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/private-market-funds/life-sciences-real-estate`；地区/语言：India / en-IN。
- 结构顺序：策略标题与简介 → 资产证明信息 → 项目介绍 → 投资领域理由 → 增长因素 → 资料/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/public-market-funds

- 页面标题：Public Market Funds in India / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/public-market-funds`；地区/语言：India / en-IN。
- 结构顺序：基金集合归属 → 策略分类与产品索引 → 逐项基金简述和详情入口 → 关联资讯模块（内容排除） → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/public-market-funds/lc-beacon-global

- 页面标题：LC Beacon Global Fund / Lighthouse Canton India。
- 模板族：`/our-businesses/asset-management/public-market-funds/lc-beacon-global`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 投资方法 → 投资理由/市场背景 → 团队或顾问 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio

- 页面标题：LC SageOne Select Stock Portfolio Fund。
- 模板族：`/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio`；地区/语言：India / en-IN。
- 结构顺序：基金标题与简介 → 投资方法 → 投资理由/市场背景 → 团队或顾问 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/founders-ecosystem

- 页面标题：Founders' Ecosystem / Lighthouse Canton India。
- 模板族：`/our-businesses/founders-ecosystem`；地区/语言：India / en-IN。
- 结构顺序：创始人业务定位 → 生命周期分段 → 股权/融资/流动性能力 → 个人与业务传承 → 投资管理延伸 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/technology-and-innovation

- 页面标题：Technology & Innovation / Lighthouse Canton India。
- 模板族：`/our-businesses/technology-and-innovation`；地区/语言：India / en-IN。
- 结构顺序：业务标题 → 设计与机构框架说明 → 技术系统说明 → 数字服务 → 组合管理 → 综合报告 → 业务延伸入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/wealth-management

- 页面标题：Tailored Wealth Management Solutions by Lighthouse Canton。
- 模板族：`/our-businesses/wealth-management`；地区/语言：India / en-IN。
- 结构顺序：双区业务主画面 → 身份选择 → 业务方法说明 → 第二层需求索引 → 按需求分组的能力详解 → 移动折叠副本 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/wealth-management/advisory-and-capital-solutions

- 页面标题：Advisory and Capital Solutions in India / Lighthouse Canton。
- 模板族：`/our-businesses/wealth-management/advisory-and-capital-solutions`；地区/语言：India / en-IN。
- 结构顺序：浅幅专题主画面 → 定位说明 → 编号能力差异 → 两组服务 → 机构优势 → 案例模块 → 地区与专家 → 咨询入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-businesses/wealth-management/global-indian-business-practice

- 页面标题：Global Indian Business Practice / Lighthouse Canton India。
- 模板族：`/our-businesses/wealth-management/global-indian-business-practice`；地区/语言：India / en-IN。
- 结构顺序：跨境客户定位 → 服务背景和特征 → 四个服务支柱 → 资金方向 → 团队 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/our-impact

- 页面标题：Responsible & Purposeful Investments in India / Lighthouse Canton。
- 模板族：`/our-impact`；地区/语言：India / en-IN。
- 结构顺序：责任主题定位 → 责任投资 → 目的与实践 → 政策下载入口 → 订阅和关联资讯（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/privacy-policy

- 页面标题：Privacy Policy / Lighthouse Canton India。
- 模板族：`/privacy-policy`；地区/语言：India / en-IN。
- 结构顺序：隐私声明标题 → 数据类型与处理基础 → 收集/使用/披露条款 → 权利和保留说明 → 联系与其他条款。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/regulatory-information-aif

- 页面标题：Investor Charters & Disclosures / Lighthouse Canton India。
- 模板族：`/regulatory-information-aif`；地区/语言：India / en-IN。
- 结构顺序：监管披露标题 → 实体/业务信息 → 相关文件链接 → 投资者说明/申诉渠道。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /in/startupfounder-entrepreneur

- 页面标题：Startup Founders & Entrepreneurs / Lighthouse Canton India。
- 模板族：`/startupfounder-entrepreneur`；地区/语言：India / en-IN。
- 结构顺序：创始人定位 → 新闻提示横幅（内容排除） → 生命周期说明 → 机构证明信息 → 服务原则 → 早期/成长阶段入口 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/thank-you

- 页面标题：Thank You / Lighthouse Canton India。
- 模板族：`/thank-you`；地区/语言：India / en-IN。
- 结构顺序：提交完成提示（仅GET读取，未提交）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /in/vd-aifcoinvest

- 页面标题：Invest in LC Venture Debt Fund / Lighthouse Canton India。
- 模板族：`/vd-aifcoinvest`；地区/语言：India / en-IN。
- 结构顺序：共同投资意向标题 → 公开登记表单（未提交）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /insitutional-investor

- 页面标题：Institutional Investor Solutions / Lighthouse Canton。
- 模板族：`/insitutional-investor`；地区/语言：global / en。
- 结构顺序：机构投资者定位 → 证明信息 → 投资方法阐述 → 策略集合入口 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /lighthouse-canton-india-disclosures

- 页面标题：Lighthouse Canton India Disclosures。
- 模板族：`/lighthouse-canton-india-disclosures`；地区/语言：global / en。
- 结构顺序：政策标题 → 政策文件/披露链接。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management

- 页面标题：Asset Management Services / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management`；地区/语言：global / en。
- 结构顺序：业务定位 → 策略索引 → 逐项策略/基金集合入口 → 机构定制安排 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/alternatives-in-focus-asian-private-credit-podcast

- 页面标题：Alternatives in Focus: Asian Private Credit Podcast。
- 模板族：`/our-businesses/asset-management/alternatives-in-focus-asian-private-credit-podcast`；地区/语言：global / en。
- 结构顺序：识别为报告/播客内容后排除后续研究。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds

- 页面标题：Lighthouse Canton's Private Market Funds。
- 模板族：`/our-businesses/asset-management/private-market-funds`；地区/语言：global / en。
- 结构顺序：基金集合归属 → 策略分类与产品索引 → 逐项基金简述和详情入口 → 关联资讯模块（内容排除） → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund

- 页面标题：LC Luminere Credit Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 策略准则 → 投资情境分类 → 融资用途和类别 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/lc-nueva-fund

- 页面标题：LC Nueva Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-nueva-fund`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 证明信息 → 组合企业 → 投资理由 → 区域投资背景 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund

- 页面标题：LC Nueva Momentum Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 投资理由 → 市场背景阐述 → 团队与投资者信息 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund

- 页面标题：LC Special Credit Opportunities Fund 2 / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 信贷市场机会 → 策略类型分组 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/lc-supply-chain-credit

- 页面标题：LC Supply Chain Credit Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 关键特征 → 融资结构 → 投资理由 → 市场需求背景 → 团队/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/lc-venture-debt-fund

- 页面标题：LC Venture Debt Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 证明信息 → 组合企业 → 投资理由 → 市场机会 → 团队 → 资料/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/private-market-funds/life-sciences-real-estate

- 页面标题：Life Sciences Real Estate Strategy / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/private-market-funds/life-sciences-real-estate`；地区/语言：global / en。
- 结构顺序：策略标题与简介 → 资产证明信息 → 项目介绍 → 投资领域理由 → 增长因素 → 资料/联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/public-market-funds

- 页面标题：Lighthouse Canton's Public Market Funds。
- 模板族：`/our-businesses/asset-management/public-market-funds`；地区/语言：global / en。
- 结构顺序：基金集合归属 → 策略分类与产品索引 → 逐项基金简述和详情入口 → 关联资讯模块（内容排除） → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/public-market-funds/lc-beacon-global

- 页面标题：LC Beacon Global Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/public-market-funds/lc-beacon-global`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 投资方法 → 投资理由/市场背景 → 团队或顾问 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/asset-management/public-market-funds/sageone-india-growth-fund

- 页面标题：SageOne India Growth Fund / Lighthouse Canton。
- 模板族：`/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund`；地区/语言：global / en。
- 结构顺序：基金标题与简介 → 投资方法 → 投资理由/市场背景 → 团队或顾问 → 联系入口 → 关联资讯模块（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/founders-ecosystem

- 页面标题：Founder's Ecosystem / Lighthouse Canton。
- 模板族：`/our-businesses/founders-ecosystem`；地区/语言：global / en。
- 结构顺序：创始人业务定位 → 生命周期分段 → 股权/融资/流动性能力 → 个人与业务传承 → 投资管理延伸 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/technology-and-innovation

- 页面标题：Technology & Innovation / Lighthouse Canton。
- 模板族：`/our-businesses/technology-and-innovation`；地区/语言：global / en。
- 结构顺序：业务标题 → 设计与机构框架说明 → 技术系统说明 → 数字服务 → 组合管理 → 综合报告 → 业务延伸入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/wealth-management

- 页面标题：Wealth Management Services / Lighthouse Canton。
- 模板族：`/our-businesses/wealth-management`；地区/语言：global / en。
- 结构顺序：双区业务主画面 → 身份选择 → 业务方法说明 → 第二层需求索引 → 按需求分组的能力详解 → 移动折叠副本 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/wealth-management/advisory-and-capital-solutions

- 页面标题：Advisory and Capital Solutions / Lighthouse Canton。
- 模板族：`/our-businesses/wealth-management/advisory-and-capital-solutions`；地区/语言：global / en。
- 结构顺序：浅幅专题主画面 → 定位说明 → 编号能力差异 → 两组服务 → 机构优势 → 案例模块 → 地区与专家 → 咨询入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/wealth-management/global-indian-business-practice

- 页面标题：Global Indian Business Practice / Lighthouse Canton。
- 模板族：`/our-businesses/wealth-management/global-indian-business-practice`；地区/语言：global / en。
- 结构顺序：跨境客户定位 → 服务背景和特征 → 四个服务支柱 → 资金方向 → 团队 → 联系入口。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-businesses/wealth-management/lc-global-select-sp

- 页面标题：Not Found。
- 模板族：`/404`；地区/语言：global / en。
- 结构顺序：错误页主体 → 返回/全局导航。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /our-impact

- 页面标题：Responsible & Purposeful Investments / Lighthouse Canton。
- 模板族：`/our-impact`；地区/语言：global / en。
- 结构顺序：责任主题定位 → 责任投资 → 目的与实践 → 政策下载入口 → 订阅和关联资讯（内容排除）。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /privacy-policy

- 页面标题：Privacy Policy / Lighthouse Canton。
- 模板族：`/privacy-policy`；地区/语言：global / en。
- 结构顺序：隐私声明标题 → 数据类型与处理基础 → 收集/使用/披露条款 → 权利和保留说明 → 联系与其他条款。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /search

- 页面标题：Search Results。
- 模板族：`/search`；地区/语言：global / en。
- 结构顺序：公开搜索页标题 → 检索输入/结果容器（未提交查询）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /startupfounder-entrepreneur

- 页面标题：Empowering Startup Founders & Entrepreneurs。
- 模板族：`/startupfounder-entrepreneur`；地区/语言：global / en。
- 结构顺序：创始人定位 → 新闻提示横幅（内容排除） → 生命周期说明 → 机构证明信息 → 服务原则 → 早期/成长阶段入口 → 关联内容与订阅 → 联系入口。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /team

- 页面标题：Not Found。
- 模板族：`/404`；地区/语言：global / en。
- 结构顺序：错误页主体 → 返回/全局导航。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

### /thank-you

- 页面标题：Thank You / Lighthouse Canton。
- 模板族：`/thank-you`；地区/语言：global / en。
- 结构顺序：提交完成提示（仅GET读取，未提交）。
- 表单证据：1 个 form 元素（含可能隐藏订阅）；未提交。

### /whistleblower-policy

- 页面标题：Lighthouse Canton Whistleblower Policy。
- 模板族：`/whistleblower-policy`；地区/语言：global / en。
- 结构顺序：政策标题 → 政策文件/披露链接。
- 表单证据：0 个 form 元素（含可能隐藏订阅）；未提交。

## 已确认失效与别名

- 404：`/cn/about`、`/cn/contact`、`/cn/homepage-families-individuals`、`/team`、`/our-businesses/wealth-management/lc-global-select-sp`。前三项仍在本次实际sitemap中，不能当作可用中文模板。
- `/cn` 跳转或声明至 `/cn-t`；印度Nueva Momentum两个旧别名归到同一规范详情。规范化组在 `canonical-groups.json`，错误页的共同 `/404` canonical 不代表内容重复。

## 排除资源记录

| 资源类别 | 发现的不同URL数量 | 本轮行为 |
| --- | ---: | --- |
| excluded-editorial-derived | 93 | 仅记录，未GET |
| excluded-insights | 494 | 仅记录，未GET |
| external | 58 | 仅记录，未GET |
| external-login-or-portal-not-fetched | 1 | 仅记录，未GET |
| public-pdf-resource-not-fetched | 10 | 仅记录，未GET |
| resource | 1 | 仅记录，未GET |

公开PDF（精确URL去重，不复制内容）：

- [668bdd345542ac899a5db0a8_Whistleblowing_v4%20-%2012.06.2024%20(Final).pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/668bdd345542ac899a5db0a8_Whistleblowing_v4%20-%2012.06.2024%20(Final).pdf)
- [66bb307b5bbe02ee060f6914_Investor_Charter_PMS%20LC.pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/66bb307b5bbe02ee060f6914_Investor_Charter_PMS%20LC.pdf)
- [66bb33884ce9f07a986772c7_Investor_Charter_for_AIF%20LC%20Venture%20(1).pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/66bb33884ce9f07a986772c7_Investor_Charter_for_AIF%20LC%20Venture%20(1).pdf)
- [689c81d4d328eeb2fe8c6c5e_Responsible%20Investment%20Policy%20Combined.pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/689c81d4d328eeb2fe8c6c5e_Responsible%20Investment%20Policy%20Combined.pdf)
- [68ff095da3b994823c5f2958_Grievance%20Redressal%20Mechanism.pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/68ff095da3b994823c5f2958_Grievance%20Redressal%20Mechanism.pdf)
- [6a425b2613130f5d442b9eb7_LC_Capital_Disclosure_Document_19_06_2026%20signed.pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/6a425b2613130f5d442b9eb7_LC_Capital_Disclosure_Document_19_06_2026%20signed.pdf)
- [6a7b023861367753545fce5b_July_26_Investor_Grievances_PMS.pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/6a7b023861367753545fce5b_July_26_Investor_Grievances_PMS.pdf)
- [6a7b02834c4c59e9c54b3011_July_26_Investor_Grievances_LCN%20(2).pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/6a7b02834c4c59e9c54b3011_July_26_Investor_Grievances_LCN%20(2).pdf)
- [6a7b02c43a5425387a4df383_July_26_Investor_Grievances_LCV%20(2).pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/6a7b02c43a5425387a4df383_July_26_Investor_Grievances_LCV%20(2).pdf)
- [6a7b0ca77f112b037c86fefd_July%2026_Investor%20Grievances_LC%20Luminere%20(1).pdf](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/6a7b0ca77f112b037c86fefd_July%2026_Investor%20Grievances_LC%20Luminere%20(1).pdf)

## 原始证据

全部位于 `artifacts/reference/full-audit/`，研究artifacts受Git忽略：

- `sitemap.xml`：本轮实际sitemap响应。
- `manifest.json`：逐URL状态、完整发现来源、canonical、原始HTML文件、SHA-256、标题、DOM section/heading、表单字段和中文结构摘要。
- `browser-targets.json` / `browser-targets.txt`：待实际渲染的模板代表与变体。
- `discovery-links.json`：nav / footer / internal完整href关系。
- `page-states.json`：真实query、fragment链接状态。
- `excluded-discovered-urls.json`：Insights、编辑衍生栏目、PDF、外链及门户排除记录。
- `summary.json`、`canonical-groups.json`、`SHA256SUMS`：覆盖、规范组和校验。

没有修改产品代码，没有复制参考站品牌、摄影或主文到FIDERE网站。
