# Lighthouse Canton：公开资源与样式声明分析

采集日期：2026-09-09。本轮仅对已在 `reference-architecture.md` 和 `design-system.md` 验证的页面执行公开 HTTP GET，并静态解析返回的 HTML、CSS 与 JavaScript 文本。**没有执行下载的 JavaScript；没有把 CSS 声明、脚本配置或推导尺寸冒充浏览器 computed style。** 同视口截图和最终计算样式由独立浏览器验收补充。

## 1. 来源、采集结果与可复核文件

| 样本 | 原始页面 | HTTP | HTML 字节数 |
| --- | --- | --- | ---: |
| 机构介绍 | [简体 About](https://www.lighthouse-canton.com/cn-s/about) | 200 | 455,696 |
| 业务总览 | [Wealth Management](https://www.lighthouse-canton.com/our-businesses/wealth-management) | 200 | 216,551 |
| 业务详情 | [Advisory and Capital Solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions) | 200 | 115,435 |
| 文章详情 | [FCNR and US Debt — CIO Insights](https://www.lighthouse-canton.com/insights/what-do-fcnr-and-us-debt-have-in-common-cio-insights) | 200 | 131,345 |

四页共同引用以下真实 URL，均从 HTML 的 `link[href]` / `script[src]` 提取：

- [主样式 lighthouse-canton.webflow.shared.081a2ff20.min.css](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/css/lighthouse-canton.webflow.shared.081a2ff20.min.css)：443,822 B，HTTP 200。
- [Webflow loader webflow.bf285120.d7bfa2591c4f0572.js](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/js/webflow.bf285120.d7bfa2591c4f0572.js)：5,048 B，HTTP 200。
- About 另引用 [fullPage 3.1.2 CSS](https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css)：5,523 B，HTTP 200。

Webflow 的 5 KB 文件是加载器。静态读取其 `r.u` 中的 22 项 chunk ID / hash 映射，以及 `r.p` 的 current-script 目录规则，得到 22 个实际 chunk URL，再执行 GET。没有猜文件名、hash、隐藏接口或未披露路径。全部 22 项 HTTP 200；其中 [webflow.achunk.b8a0682a04c64f73.js](https://cdn.prod.website-files.com/61a74a0b89162dfadb5acf21/js/webflow.achunk.b8a0682a04c64f73.js) 包含站点交互数据。

本轮选取 **29 个原始响应，下载失败 0 个**。四页共提取 126 条 CSS / script 引用，包含重复项。未选取的统计、cookie、无障碍插件、第三方库不是“下载失败”；没有声称审查完全部外部程序。字体网络请求亦未伪造为已下载。

证据位于已被 `.gitignore` 排除的 `artifacts/reference/resource-audit/`：

- [resource-manifest.md](../artifacts/reference/resource-audit/resource-manifest.md)：每个原始文件的 URL、HTTP、字节数与完整 SHA-256。
- [manifest.json](../artifacts/reference/resource-audit/manifest.json)：结构化下载记录，含 chunk 的来源与 URL 推导方式。
- [SHA256SUMS](../artifacts/reference/resource-audit/SHA256SUMS)：29 个原始响应的校验清单。
- [DERIVED-SHA256SUMS](../artifacts/reference/resource-audit/DERIVED-SHA256SUMS)：静态提取结果的校验清单。
- `*.html` 为原始响应；`*.inline.css` / `*.inline.js.txt` 是按原有顺序编号的内联文本；`*.classes.json` / `*.interaction-ids.json` 保存样本 DOM 中的类名与交互 ID。
- [css-analysis.json](../artifacts/reference/resource-audit/css-analysis.json)、[css-selector-evidence.txt](../artifacts/reference/resource-audit/css-selector-evidence.txt)、[page-typography-evidence.json](../artifacts/reference/resource-audit/page-typography-evidence.json) 保存可严格解析的声明和所在媒体条件。
- [webflow-ix2-data.json](../artifacts/reference/resource-audit/webflow-ix2-data.json)、[webflow-interaction-evidence.json](../artifacts/reference/resource-audit/webflow-interaction-evidence.json)、[webflow-page-bindings.json](../artifacts/reference/resource-audit/webflow-page-bindings.json) 保存交互数据及与四个样本实际页面 ID / 元素 ID 的对应关系。

主 CSS SHA-256：`6c483698094bf6ca8a1aed116b6f7e03ac81425c3984d47349ca94b7e90bbe28`。Loader SHA-256：`2eed6da83a526f4506d706ec79ba1b8166b07dbfa837f0a6cd72b43bfbe2f718`。

## 2. 断点与根字号

主 CSS 的主要响应式条件是 `max-width: 991px`、`767px`、`479px`，另有 `min-width: 768px`。Webflow IX2 数据的区间与之吻合：

| IX2 key | 最小宽度 | 最大宽度 |
| --- | ---: | ---: |
| main | 992 | 10000 |
| medium | 768 | 991 |
| small | 480 | 767 |
| tiny | 0 | 479 |

四页内联样式另有相同的根字号规则。它们决定 `rem` 的像素值，不能直接把 `1rem` 永久记为 `16px`：

| 条件，后声明覆盖先声明 | `html` 的字号声明 |
| --- | --- |
| 默认 | `1.125rem` |
| ≤1920px | `calc(0.625rem + 0.41666666666666674vw)` |
| ≤1440px | `calc(0.8128898128898129rem + 0.20790020790020788vw)` |
| ≤478px | `calc(0.749475890985325rem + 0.8385744234800838vw)` |

**推导，假设浏览器初始字号为 16px：** 1440px 视口根字号约 16px；390px 视口约 15.262px。根元素自身 `font-size` 中的 `rem` 按初始字号计算。这是根据声明计算的预期值，浏览器测量仍需检查用户字号设置、后续样式和实际元素。

四页还包含局部 1280/768、992、767、479px 媒体条件。Advisory 的专用内联块另声明 1080、900、560、520px 等断点；这些只描述该专题的能力、交易、专家等组件。被注释掉的 350px 片段不计为生效规则。完整文本声明清单见各页 `*.declared-media.json`，其中包含无法通过严格解析的源块，不应整体当成生效规则。

## 3. 字体、标题层级与容器

主 CSS 最后的基础正文规则是 `Public Sans, sans-serif`、`1rem`、行高 `1.5`。基础 H1 使用 `Frank Ruhl Libre, sans-serif`、`4.375rem`、400、行高 `1.15`。H2 基础为 `3rem`、500、行高 `1.2`；H3 基础为 `2rem`、700、行高 `1.2`。具体页面会用类覆盖基础标题值。

实际 HTML 中的 H1 类与对应共享 CSS：

| 页面 / 真实 H1 选择器 | 桌面声明 | 移动覆盖 |
| --- | --- | --- |
| About：`.about-hero_header.is-small` | `4rem` | ≤991：`3rem`；≤767：`2.25rem` |
| Wealth：`.ser_header` | `3.125rem` | ≤767：`2.25rem` |
| Advisory：`.heading-style-h2.is-48` | `3rem` | 此精确组合选择器未提取到独立媒体覆盖；不能仅据基础 `h1` 断言最终大小 |
| Insights：`.ntop_header-text` | `3rem`，max-width `66rem` | ≤767：`1.5rem` |

因此同为 H1，机构、业务和文章页并不共用一个大字号。例如 Wealth 手机 H1 的声明推导为 `2.25 × 15.262 ≈ 34.34px`。不要把首页大标题尺寸套给全部详情页。

共享容器 `.container-large`：width 100%、max-width `80rem`、居中。`.page-padding`：左右 `2.5rem`，≤767px 降到 `1.25rem`。1440px / 默认字体假设下约为 1280px 最大内容宽度与 40px 页边距；390px 时移动边距约 19.08px。实际布局还受外层宽度与页面特定容器影响。

**字体加载证据：** 四页内联 `WebFont.load` 明确请求 Google 的 Frank Ruhl Libre 300/400/500/600/700、Public Sans 300/400/500/600/700，以及 Open Sans 多字重含斜体。对应加载器 [webfont.js 1.6.26](https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js) 的 URL 直接出现在 HTML。共享 CSS 的 `@font-face` 只有内嵌 data URL 的 `webflow-icons` 400 normal；它不是正文字体。字体文件 URL 由字体加载器运行时生成，本轮没有执行加载器、推测 Google Fonts 请求或下载字体文件。字体真实成功加载与 fallback 需浏览器 FontFaceSet / computed style 检查。

## 4. 全局导航：源码事实

四个样本都使用 `.nav_component.w-nav`、`.nav_top-wrapper`、`.nav_bottom-wrapper` 与 `.nav_menu-grid`；不要把 Advisory 内联中未出现在实际 HTML 的 `.header` / `.nav` 原型规则当成当前全局导航。

| 选择器 / 属性 | 直接读取的声明 |
| --- | --- |
| `.nav_component` | sticky，top 0，z-index 10000，白色背景、column flex、轻投影 |
| `.nav_top-wrapper` | flex、space-between、上下 padding 4px |
| `.nav_menu-link` | 12px、600、字距 2px、uppercase、行高 1、左 margin 2.5rem、上下 padding 1.25rem |
| `.nav_menu-drop-toggle` | 12px、600、字距 2px、uppercase、行高 1；`.w--open` 变 crimson |
| `.nav_menu-drop-list.w--open` | min-width 10.625rem、margin-top 32px、padding 1rem 12px .5rem、白底、细微内投影 |
| `.nav_dropdown-link` | 12px、600、行高 1.66667、下边框 .5px silver、bottom padding 10px、transition all .2s |
| ≤991 `.nav_menu-grid` | column、height 100vh、overflow auto、背景 #f6f5f3、backdrop-filter blur(20px)、左右 padding 2.5rem |
| ≤767 `.nav_menu-grid` | 左右 padding 1.5rem |
| ≤479 主链接 / toggle / `.nav_dropdown-link` | 14px |

HTML 原始组件属性为 `data-collapse="medium"`、`data-duration="400"`、`data-easing="ease"`、`data-easing2="ease"`。取样 `.nav_menu-dropdown` 的 `data-hover="false"`、`data-delay="0"`：这说明组件配置没有启用原生 hover 展开。FIDERE 增加 hover 是用户指定的适配选择，不应回写成参考源码事实。其他脚本能否改变实际展开行为仍由浏览器验证。

页内章节栏独立于全局导航：`.nav-about_component` 为黑色、sticky、height 50px、top 96px；≤767px top 85px，服务变体 top 91px；≤479px height 60px。章节链接 12px、700、字距 2px、uppercase，当前项有红色底边。该系统可借鉴“页内章节索引”，不能由全局菜单替代。

## 5. 颜色变量与专题局部系统

主 CSS `:root` 包含：black/white、`--crimson: #d4001f`、`--dim-grey-2: #585858`、`--dim-grey: #6c6c6c`、`--silver: #ccc6be`、`--firebrand-red: #e41e28`、`--white-smoke: #f6f5f3`、`--brown: #150104`。这些是参考品牌值，不是 FIDERE 新 token。

Advisory 内联第 16 块额外定义另一套局部来源：`--container: 1280px`、`--container-wide: 1440px`、`--gutter: clamp(20px, 4vw, 56px)`；4/8/12/16/20/24/32/40/48/64/80/96/128px 的 spacing；eyebrow tracking `.18em`；`--dur: 240ms`；`--ease-out: cubic-bezier(.16,1,.3,1)`；`--ease-std: cubic-bezier(.2,0,.15,1)`。字体变量是 Frank Ruhl Libre / Public Sans。

该专题实际 HTML 存在 `.svc`、`.svc-img`、`.svc-body`，其内联规则包括：服务标题 32px/1.1，导语 15.5px/1.7，图片 object-fit cover，hover scale 1.04，图片变换 600ms，其他状态多使用 240ms token。相同块中的 `.header`、`.nav`、`.tweaks`、`.hero-bg` 在取样 HTML 没有对应 class；仅凭规则存在不能认定其可见或生效。此块末尾还有多余闭括号，见解析限制。

## 6. 动画与状态：声明、绑定、执行须分开

IX2 chunk 静态解析得到 **702 个事件、172 个 actionLists**，它是全站数据，不代表四页各自执行全部动画。使用 Acorn 解析 AST，只解码对象、数组、字面量和布尔/负数字面量运算；没有 `eval`、VM 或远程代码执行。

通过 `data-wf-page` / `data-w-id` 精确比对，四页分别匹配到 32、9、2、9 个事件。记录在 `webflow-page-bindings.json`。其中可明确指出：

- About 和 Wealth 的 `PAGE_SCROLL_UP` 绑定 `a-75`，把 `.nav_component` 移到 y=0；`PAGE_SCROLL_DOWN` 绑定 `a-76`，移到 y=-102px。两者 300ms、`inOutQuint`。action 的人为标题与事件方向描述相反，分析以真实 `eventTypeId` 和数值为准。
- 四个样本都匹配到 dropdown open/close 与 `a-72` / `a-73`。打开配置对图标旋转、列表高度使用 400ms / `easeIn`，filter 部分为 500ms；关闭为 400ms / `ease`。首次初始状态条目也含 500ms 字段，它不等于动画总时长。
- About 内联脚本以 `.section-about-us` 的 `top top` 为触发点，`scrub: 1`、`end: +=10px`，把 `#nav-about` 从隐藏/透明变为显示；配置条目含 0.3s。这是滚动绑定过程，不应简单称为固定 300ms 页面过渡。
- Wealth 的 `.js-accordion` 内联实现设 `speed: 300`、`oneOpen: true`，以 slideUp / slideToggle 展开。相邻的 `navAppear` GSAP 片段被整段注释，不能列为当前运行效果。
- Insights 内联有 `.outlook_fixed-bar` 的 0.3/0.4s ScrollTrigger 代码，但本次文章 HTML 没有该 class；不能宣称文章上存在对应浮动栏。

这些证据不支持“全站统一 600–1100ms 页面过渡”。FIDERE 若采用自己的进入/hover时长，应注明是实现选择。

## 7. 失败与限制

**HTTP 下载：0 失败。严格 CSS 解析：9 个内联块失败。** 源文件原样保存，未修改参考代码来制造“解析成功”。

- 四页共享的一段 ≤991px 样式缺闭括号，分别在 About block 12、Wealth block 11、Advisory block 9、Insights block 12。
- 四页 mask-image 样式含额外 `);`，分别在 About block 14、Wealth block 13、Advisory block 11、Insights block 14。
- Advisory block 16 尾部多余 `}`。该块中的变量、组件规则可直接读取，但整体不进入严格 PostCSS 成功结果。浏览器有 CSS 错误恢复机制，不能把解析失败等同于整块在浏览器无效。

详见 [css-parse-failures.json](../artifacts/reference/resource-audit/css-parse-failures.json)。本文对失败块内容采用“源码声明”措辞，最终生效范围要与浏览器 computed style 对照。

本轮没有测试表单、登录、真实业务行为，没有读取非公开资源，也没有将参考 CSS、JS、图片或品牌内容加入 FIDERE 生产源码。可迁移的是容器比例、标题层级、分组、章节导航、状态反馈与经过核实的响应式方法；FIDERE 的品牌、文案、服务事实和摄影仍独立。
