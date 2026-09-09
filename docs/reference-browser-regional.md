# Lighthouse Canton：印度监管与工具页浏览器核实

本轮仅研究公开网页，未改产品代码。实际浏览使用独立 Chrome 研究标签页，自然视口 **1846 × 1031 CSS px，DPR 1**；有纵向滚动条时页面内容宽 1831 px。没有使用 viewport capability，也没有改变窗口尺寸。所有下述尺寸都是这一自然视口的计算值，不应直接冒充 1440 px 视口的参数。

证据在 `artifacts/reference/browser-regional/`：每页 JSON 保存 requestedUrl、actualUrl、标题、canonical、视口、滚动位置、字体和容器矩形；`*-dom.txt` 是实际浏览器 DOM；PNG 是页面截图。静态 HTTP / HTML 的原始证据仍在 `artifacts/reference/full-audit/`，两个证据层分开记录。

## 路由与到达结果

| 目标路径 | 真实浏览路径 / 结果 | 浏览器覆盖 | 主要证据 |
| --- | --- | --- | --- |
| `/in/lighthouse-canton---regulatory-information---gift-city` | 直接访问跳 `/cn-s`；English → Global → India → 私募目录 → PMS 页尾的真实 IFSCA 链接也在新标签页跳 `/cn-s`；在已有印度研究页打开该已观察链接仍跳 `/cn-s` | **未到达目标页**；不可据此声称看过监管页版式 | `gift-city.json`、`gift-city-footer-new-tab.json` |
| `/in/lighthouse-canton---regulatory-information--pms` | 初次直达跳中文首页；随后从印度站真实页尾进入成功 | 完整 DOM、首屏 / 中段 / 页尾、计算样式 | `pms-visible.json` 与 `pms-visible-{middle,end}` |
| `/lighthouse-canton-india-disclosures` | 直接访问跳 `/cn-s`；在已读取的 81 个 HTML 中无入站 a[href]，来源为 sitemap | **未到达目标页**；静态 HTML 已读 | `india-disclosures.json` |
| `/in/regulatory-information-aif` | 初次直达跳中文首页；随后 India → Private Market Funds → 页尾 AIF 链接进入成功 | 完整 DOM、首屏 / 中段 / 页尾、计算样式 | `regulatory-aif-visible.json` 与 `regulatory-aif-visible-{middle,end}` |
| `/in/vd-aifcoinvest` | 直接访问跳 `/cn-s`；81 个 HTML 中无入站 a[href]，来源为 sitemap | **未到达目标页**；静态 HTML 已读，未填写登记表单 | `vd-aifcoinvest.json` |
| `/in/our-businesses/asset-management/private-market-funds/lc-nueva-aif` | India → Private Market Funds → 真实 View Fund 链接；另由 AIF 监管页基金链接再次到达 | 完整 DOM、首屏 / 中段 / 页尾、目录下拉、说明折叠、图表标签、计算样式 | `nueva-aif-visible.json`、`nueva-layout-computed.json` 与相关状态 |
| `/in/our-businesses/asset-management/public-market-funds/lc-sageone-select-stock-portfolio` | India → Public Market Funds → 真实 View Fund 链接 | 完整 DOM、首屏 / 中段 / 页尾、说明折叠、计算样式 | `sageone-visible.json` 与 `sageone-visible-{middle,end}` |
| `/search` | 英文站头部 Search 真实链接 | 空查询首屏和页尾、完整 DOM、计算样式；没有执行查询 | `search.json`、`search-end.json` |
| `/thank-you` | 仅直接 GET，最终跳 `/cn-s`；81 个 HTML 中无入站 a[href]，来源为 sitemap | **未到达目标页**；静态 HTML 已读，未提交表单 | `thank-you.json` |

9 个指定目标中，5 个实际到达并检查，4 个被源站导航行为阻挡。以上不是 HTTP 可用性统计：这 9 页的原始 HTML 均已在前一阶段读取。不能把直接导航最初返回的 HTML 当成延迟重定向后的实际浏览页。

## 印度地区入口与声明语义

英文站的 Global → India 链接为 `target="_blank"`，会打开新标签页；原英文标签页保留不动。首次将“原标签页不变”误判为未导航的可能性已通过标签页清单排除。

印度首页显示网站使用免责声明：介绍信息按现状提供、准确性和系统可用性的限制、使用网站的责任以及内容不构成投资邀请。该文本没有要求读者确认居民身份、专业投资者身份、产品资格或认购行为。完整实际文本见 `india-disclaimer-dom.txt`。阅读该普通网站声明后，通过界面点击 **Agree to terms and continue**，继续访问公开页。没有填写个人资料、确认投资资格、发起交易或登录外部 WealthSpectrum 门户。

Gift City 的实际页尾链接仍在新窗口落到中文首页。未修改 cookie / localStorage、页面脚本、链接 target 或源站路由来绕过该行为；因此保留到达失败结果。

## 模板与章节观察

### PMS：文档与联系人目录

顺序是浅色标题带 → 三条公开文档链接 → 相关联系人 → 两列表格 → 印度站页尾。这里没有背景照片、营销式特性网格或咨询 CTA。文档和联系人都用红色菱形标记，但表格用细灰边线和浅灰表头；阅读任务是找到资料与负责人员。

自然视口计算值：标题带从 y=101.22 开始，高 254.30；主容器 x=296.30、宽 1238.41。H1 是 Frank Ruhl Libre 61.92 / 77.40、400；主体 H2 为 35.38 / 42.46、400。实际主体白底。未打开 PDF、mailto 或 tel。

### AIF：实体披露、文档索引及登记信息

顺序是浅色标题带 → 投资实体与注册信息 → 分组文档 / 基金链接 → 投诉渠道链接 → 共同投资管理实体的标签值面板 → 印度站页尾。它与 PMS 共用法律披露标题带，但正文包含不同层次的信息，不是把同一组三卡改标题。

H1 与容器尺寸和 PMS 相同；共同投资面板有细红边、圆角，内部标签值分列。原站链接本身还存在文案和目的页不完全对应的情况，例如 AIF 页多条不同标题都指向 Nueva AIF；本轮只记录，不把链接文字当成独立文档已验证的证据。

### Nueva AIF：组合目录与多种展开内容

顺序是背景照片标题区 → 概述及三项历史数值 → 可按 Location / Industry / Stage 浏览的组合公司目录 → 投资特点 → 投资论点折叠及图表标签 → 团队 → 投资方 → 咨询条与页尾。数值属于源站，未移植为 FIDERE 的经营事实。

首屏照片区高 701.08，从 y=101.22 到 802.30；H1 为 Frank Ruhl Libre 55.29 / 63.58、400。后续左侧浅色章节标题、右侧白色正文形成连续不对称结构；正文列实际宽 831.52，左标题区域宽 442.28。正文主要为 Public Sans 20.35 / 33.98、400、`#6c6c6c`；章节标题约 39.81 / 50、300。当前计算值详见 `nueva-layout-computed.json`。

已展开 Location 菜单并读取选项，但没有选择条件或提交表单；已展开 Mobilizing capital 章节，并从策略区切换到 Stage split 图表。图表标签状态、菜单和折叠均有独立截图 / DOM。底部咨询条在阅读中保持可见，至页面末段进入其自然位置；没有打开其外部营销表单。

### SageOne：投资方法与论点

顺序是照片标题区 → 概述 → 投资方法与定性 / 定量考量 → 投资特点 → 印度市场论点折叠 → 团队 → 投资顾问 → 咨询条与页尾。与 Nueva 共用基金详情框架，但不含组合企业目录和三项历史数值，核心信息是投资方法。

照片区和 H1 比例与 Nueva 相同。已展开 Global competitiveness，确认正文与柱状图可见；首屏、中段和真实页尾都有截图。页面市场数字仅作为源站内容存在的证据，没有验证其投资判断，也不应作为 FIDERE 文案来源。

### Search：工具页面

顺序是 Back 链接 → 标题与横向搜索框 / Search 按钮 → 白色结果区 → 完整页尾。空输入时结果区显示无匹配结果，没有推荐卡片。标题区背景计算为 `rgb(247,244,240)`；H1 为 Frank Ruhl Libre 53.08 / 61.04、400，容器同为 1238.41 宽。整页高 1131，因此首屏与 y=100 的页尾截图覆盖完整页面；没有为制造“中段”而记录无意义状态。

## 证据边界与复用

- 部分折叠内容即使未展开也出现在浏览器 DOM；只有明确的交互截图才支持“该内容已可见”。计算样式可读取文档中不在视口的元素，不能单独证明视觉可见性。
- 不把 1846 px 的自然视口数值归一化后伪装成实际测量；与 `reference-page-map.md` 的其他视口比较时必须保留视口条件。
- 对 FIDERE 可复用的是阅读顺序、目录组织、章节比例及法律资料的可检索性。源站人物、基金数据、监管编号、投资判断、专有图表、logo 和图片没有复制到产品。
- 未到达的四页只有静态 HTML 结构证据，其具体浏览器布局与交互保持未验证。

`reference-public-inventory.md` 的浏览器列同步区分本轮亲测结果，以及其他协作研究保存的 actual URL JSON；未以文件名、预计路径或同族关系补全未访问状态。
