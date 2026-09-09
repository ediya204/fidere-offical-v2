# FIDERE 当前设计系统

更新于 2026-09-09。本文件依据当前布局、样式和共享组件记录实现，不是新构建后的计算样式或视觉验收报告。优先级为用户的**全站白底**要求、已核实 FIDERE 业务内容、参考模块的阅读方式。页面选择依据见 [content-layout-rationale.md](content-layout-rationale.md)，参考证据与用途见 [reference-page-map.md](reference-page-map.md)。

首稿的 Cormorant Garamond / Manrope、全站 1600px 容器、大面积深蓝底及“没有 Insights”描述已作废。当前有三篇原创实务指南；它们不是历史新闻或外部研究稿。

## 实现来源与样式层

- [layout.tsx](../src/app/[locale]/layout.tsx) 使用 `next/font/local` 加载本地展示、正文字体，并组合 Header、main、Footer 与渐入逻辑。
- [globals.css](../src/app/globals.css) 保留基础样式；[reference-system.css](../src/app/reference-system.css) 提供内页字体比例、容器、章节导航和专题布局；[white-system.css](../src/app/white-system.css) 将结构性底色改为白色并定义 Solutions 集合、Wealth 目录等具体布局。
- Home、Header、Footer 分别由 [home-white.css](../src/components/home-white.css)、[header-navigation.css](../src/components/header-navigation.css)、[footer-reference.css](../src/components/footer-reference.css) 作局部适配；[wealth-insights.css](../src/components/wealth-insights.css) 保留财富主题与原创指南的阅读差异。
- 样式文件声明 `@layer reset, base, components, responsive, reference;`。`reference` 是常规声明的最高层；同层仍由选择器优先级和加载顺序决定。基础文件中的旧颜色、1600px 或旧字号不等于当前各页面的最终规则。本轮生产构建已复核层顺序；计算样式与截图结果见 [visual-validation.md](visual-validation.md)。

## 颜色、字体和宽度

| 项目 | 当前声明与用途 |
| --- | --- |
| 结构性底色 | `--paper`、`--white` 为 `#fff`；Header、移动菜单、mega menu、章节条、正文、强调段、相关服务、CTA、Footer 使用白底。深色照片不属于结构底色。 |
| 正文与分隔 | `--ink: #172c3b`；`--muted: #6c6c6c`；`--line: #d9d7d3`。Footer 有局部深蓝文字 `#17334a` 与细线。 |
| 品牌强调 | `--navy: #091f30` 用于品牌与文字；`--red: #873d48` 用于选中态、编号、箭头和小范围操作。它们不承担整段背景。原 Logo 保留海军蓝，无反白滤镜。 |
| 正文与导航 | Public Sans，局部使用 400–600；由 `reference-body.woff2` 加载，声明可变字重 300–700。中文正文回退 PingFang TC / Microsoft JhengHei 等系统字体。 |
| 展示标题 | Frank Ruhl Libre，由 `reference-editorial.woff2` 加载，声明可变字重 300–700；中文展示标题回退 Songti TC / Songti SC / Noto Serif CJK。授权文本位于 `src/fonts/`。旧字体依赖仍存在，但当前 layout 不加载它们。 |
| 根字号 | 采用参考资源中已读取的流式公式，断点为 1920、1440、478px。假设浏览器初始字号 16px，公式推导 1440px 时根字号约 16px，390px 时约 15.262px；这不是本轮浏览器测量。 |
| Home / Header / Footer | 最大外宽 1200px，桌面左右各 40px，得到 1120px 正文宽。移动侧距 20px；Home 另按自身断点重排。 |
| 一般内页 | 正文上限 `70rem`；外容器 `70rem + 5rem`，两侧 `2.5rem`。在根字号 16px 时分别为 1120px 正文和 1200px 外宽；≤767px 侧距 `1.5rem`。 |
| Advisory 服务详情 | 正文上限 `80rem`，加两侧共 `5rem`；根字号 16px 时为 1280px 正文、1360px 外宽。集合页的 39% / 61% 区域可跨出一般正文容器。 |

像素与 rem 不应混写成统一的固定尺寸：Header、Home、Footer 的主要字号使用 px，内页多数使用 rem。中文回退字体、内容长度和系统字号也会改变折行。

## 页面层级与模块

| 模块 | 当前实现 |
| --- | --- |
| Home 入口 | 白底左文、右侧独立实景照片，桌面两列及 56px 间距；H1 64px / 1.1，导语 14px / 1.8。Hero 高度随内容增长，只有 `min(880px, 100svh − header)` 的最小高度，无固定最大高度。照片有独立地点说明。 |
| Home 后续段落 | 三个客户入口在照片/标题之后；角色图文、客户与服务行、司法管辖区切换、原则、治理披露、香港图文、精选指南和联系保持各自构图。常规 H2 48px，正文 14px / 1.8，主要段落上下 112px，手机降为约 72px。 |
| About | 完整机构摄影 Hero 与图内底部标题，保留非对称声明/说明双栏、独立章节条和图文段落。桌面英文机构 H1 `4.375rem / 1.15`（1440px 视口为 70px），中文保留 `4rem`；手机 Hero 高 360px，H1 `2.25rem / 1.15`，介绍 H2 `3rem / 1.1`，导语 `1.125rem / 1.67`。不添加人物或时间线占位。 |
| Solutions / Wealth 入口 | 业务摄影完整覆盖 Hero，左侧标题与右侧细线目录并置；桌面 H1 `3.125rem / 1.15`。目录背景模糊为 `90px`，≤991px 改为标题在前、目录在后的单列覆盖结构。正文继续白底。 |
| Solutions 集合 | 三个真实分组、十项服务；左说明 / 右内容为 39% / 61%，左侧可随滚动固定，右侧照片之后逐项列服务名、范围和详情链接。≤767px 重排单列，目录仍去独立详情页。 |
| Wealth 目录 | 窄主题目录与宽照片并置，约 `28.3fr / 68.9fr`，间距 `2rem`；Global Markets、Funds、Fixed Income、Cash 四个主题采用各自正文，而非四个虚构产品。 |
| 服务详情入口 | 摄影覆盖完整 Hero，标题与说明并置；桌面 Hero 基准 `452px`，标题 `3rem / 1.25`。共享的是面包屑、字体、边界与操作，不是全部正文骨架。 |
| 机构 / 合规阅读 | 身份、方法、治理分别使用机构说明、连续步骤或披露资料；合规使用政策摘要、章节目录及五个教育主题。关系图、定义比较、资料目录、触发事项与折叠内容各有用途。 |
| Contact | 白底短入口、已核实香港地址与直接联系方式、细线表单。手机优先显示表单；保留生成邮件草稿、由用户自行发送的流程，不显示未经证实的送达结果。 |
| Insights | 三篇原创指南。精选区为白底左文 / 右侧独立照片，≤767px 文字后接图片；其余两篇使用编号和图文行。文章保留封面、确定性返回、标题、正文/目录及相关阅读；没有虚构日期、作者、基金表现。 |

服务详情的具体内容顺序见 [content-layout-rationale.md](content-layout-rationale.md#详情页必须因内容而异)。例如 Private Trust 先说明角色，Funds 比较共同基金与 ETF，Cash Management 说明连续步骤，CDD 提供资料目录；这些差异不能被统一三卡模板替换。

## 导航与交互约定

Header 桌面高 97px，由约 40px 工具行和 57px 主行组成；Logo 宽 160px，按原始比例高约 33px。主菜单依次为 About、Solutions、Wealth Management、Compliance、Insights、Contact，字号 12px / 600、字距 2px。工具行保留登录及 EN / 繁 / 简。

前四项使用宽幅 editorial mega menu：左侧栏目标签、短陈述、说明与 View all，右侧为有标题的主题分组。主栏目链接与展开按钮分开；按钮设置 `aria-expanded` / `aria-controls`。源码包含 hover、点击、键盘进入，以及 Escape、焦点离开、外部点击和路由切换的关闭处理。移动端使用全屏 dialog，保留同一导航层次：一级 14px / 600，二级 14px / 400、最小 48px 点击高度及细分隔线。

Header 在 ≤1100px 切换到 95px 两行手机结构；`white-system.css` 已在同一断点将 `--header-height` / `--header-offset` 统一为 95px，初始占位与 Header 高度一致。滚动逻辑通过 rAF 和累计 8px 方向阈值更新 DOM，不在每次 scroll 调用 React setState；下滚位移 −102px，上滚显示，300ms `cubic-bezier(.86,0,.07,1)`。菜单或焦点在 Header 内时保持显示，运行时同步 `--header-offset`，章节条以该值确定 sticky top。

长内页的章节条是当前页定位；主菜单及目录链接是独立页面导航，不能互相代替。章节条桌面最小 50px，手机 60px；移动端使用原生 details 显示当前章节。`SectionNav` 通过 rAF 合并 scroll / resize，按稳定的 Header 高度、章节条高度与正文位置重新计算当前章节；回到顶部时恢复首项，修正原高亮滞留逻辑。此修复已在最终本地构建复验通过，见 [interaction-validation.md](interaction-validation.md)。英文路由无前缀，繁体中文与阿拉伯语分别为 `/zh-hant`、`/ar`；语言切换保留对应页面，`/en/*` 为兼容路径，历史 `/zh-hans/*` 暂时转到繁体中文同页。

Footer 为独立身份/香港联系方式区，加四列分组导航和下方完整法律、监管信息；不是六条单列链接。桌面上下 80px，≤991px 64px，≤767px 48px；导航从四列转两列，再在 ≤479px 转单列。提供原 Logo 与已核实披露，不借用参考机构的办公室或资格。

## 动效、照片与验收边界

`MotionEnhancements` 仅对位于首屏下方的指定内容使用 IntersectionObserver 渐入，并在路由切换时清理；内页照片 hover 为 1.00 → 1.04、600ms，Home 的基础图片规则保留自身时长。Header 的方向动画是 300ms，不存在已测得的全站统一页面转场。`prefers-reduced-motion` 关闭入场与位移动效；未增强内容保持可读。

摄影来自独立来源，授权和具体图片对应见 [image-sources.md](image-sources.md)。地点照片代表相关司法管辖区情境，不代表 FIDERE 在该地设有办公室。原始业务、资格和内容来源见 [content-sources.md](content-sources.md)。

最新调研排除参考 Insights。最终生产构建的真实尺寸、截图、响应式和交互证据见 [visual-validation.md](visual-validation.md)、[interaction-validation.md](interaction-validation.md) 与 [route-validation.md](route-validation.md)。本文仍以源码规则为主，不据此声称所有像素或动画完全一致。
