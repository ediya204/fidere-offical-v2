# Lighthouse Canton 非 Insights 页面：浏览器补充实测

研究日期：2026-09-09。使用独立 Chrome 研究标签页，通过真实导航、完整 DOM 阅读、实际滚动和截图记录。没有修改参考站状态以外的任何数据，没有提交表单，没有访问 Insights 栏目或文章。Our Impact 内置的相关文章模块只作为该页版式出现，未继续访问。

本轮 10 个指定目标中，7 个到达精确 URL；`/team` 只能从菜单进入 `/about#s-team`；`/10x` 与 `/whistleblower-policy` 没有到达。不能把三个回退结果列为对应页面已验收。

## 环境与证据方法

- 自然桌面视口 `1846 × 1031`，未调用 viewport 设置。页面根字号 `17.6917px`；正文宽度通常为 `1831px`，另有浏览器滚动条。因此这里的像素不能直接当作 1440 宽设计稿数值。
- 公共容器 `.container-medium` 实测 `x=296.297, width=1238.406`，约 `70rem`；`.container-large` 实测 `x=207.828, width=1415.328`，约 `80rem`。rem 倍数是由实测值除以根字号所得，不等于本文件独立验证了全部原 CSS 定义。
- 页顶全局双层导航总高约 `101.2px`；滚动后有时只显示较短的主导航。各页截图保留真实滚动状态，未把所有截图固定为同一导航高度。
- 每个 `*-top.json` 存储完整 `body.innerText` 与所有可见布局元素的文档坐标、尺寸、字体、行高、padding、grid 列、背景色、图片尺寸及 `object-fit`。`*.dom.txt` 为完整可访问 DOM。完整法律正文仅作为本地研究证据保存，不用于 FIDERE 法律内容。
- 截图均使用 `{x:0, y:scrollY, width:innerWidth, height:innerHeight}`，图像对应实际滚动位置。`capture-manifest.json` 记录到达 URL、文档高度及滚动位置。
- `founders-ecosystem-bottom*` 是早期未到页脚的滚动尝试，不能作为页脚证据；最终使用 `founders-ecosystem-footer-verified.png`，其 `scrollY=5003` 正好等于 `documentHeight 6034 - viewportHeight 1031`。
- 这是桌面补充研究；本轮没有移动端实测，不把桌面数值推定为移动规则。

## 到达情况

| 请求页面 | 实际结果 | 进入方式与证据前缀 |
| --- | --- | --- |
| [Global Indian](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice) | 精确 URL 到达 | 初次直达回 `/cn-s`；点 English，再从 Our Businesses 菜单进入。`global-indian-*` |
| [Founders’ Ecosystem](https://www.lighthouse-canton.com/our-businesses/founders-ecosystem) | 精确 URL 到达 | English → Our Businesses → Founders；随后再次从同一菜单进入，补齐页脚。`founders-ecosystem-*` |
| [Technology & Innovation](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation) | 精确 URL 到达 | 从全局业务菜单进入。`technology-innovation-*` |
| [Our Impact](https://www.lighthouse-canton.com/our-impact) | 精确 URL 到达 | 全局一级导航。`our-impact-*` |
| [Careers](https://www.lighthouse-canton.com/careers) | 精确 URL 到达 | 全局一级导航。`careers-*` |
| [Team 请求](https://www.lighthouse-canton.com/team) | 未到达 `/team`；只到 [About 内团队区](https://www.lighthouse-canton.com/about#s-team) | 直达回 `/cn-s`；English → About → Meet the Team 的真实 href 为 `/about#s-team`。`team-navigation-fallback-filtered.*` |
| [10x 请求](https://www.lighthouse-canton.com/10x) | 未到达 | 直达回 `/cn-s`；返回英文首页后，已展开导航及页面链接中未见该入口。`10x-unreachable.dom.txt` 是回退后的英文首页，不是 10x 内容。 |
| [Whistleblower 请求](https://www.lighthouse-canton.com/whistleblower-policy) | 未到达 | 直达回 `/cn-s`；所检查英文全局导航、首页与页脚未见该入口。`whistleblower-policy-redirect.dom.txt` 是中文首页回退证据。 |
| [Privacy Policy](https://www.lighthouse-canton.com/privacy-policy) | 精确 URL 到达 | English → Careers → 页脚 privacy policy。`privacy-policy-*` |
| [Disclaimer](https://www.lighthouse-canton.com/disclaimer) | 精确 URL 到达 | Privacy 页脚 disclaimer。`disclaimer-*` |

以上跳转只证明此次浏览器会话的可达性；没有将 `/cn-s` 回退推断为服务器 404、页面永久下线或 URL 不存在。三个请求 URL 确实出现在发现清单，但“清单发现”与“实际浏览成功”分别记录。

## 共用字体与正文规则

| 用途 | 实测字体、字号 / 行高 | 说明 |
| --- | --- | --- |
| 标题 | Frank Ruhl Libre | 源站 computed fallback 为 sans-serif；实际字形为衬线字体 |
| 正文、导航、标签 | Public Sans | 标签多为大写、较大字距，正文常为灰色 |
| 常规业务 hero h1 | `55.2865 / 63.5794px` | Founders、Technology、Impact；约 `3.125rem / 1.15` |
| Global Indian hero h1 | `53.075 / 65.813px` | 约 `3rem / 1.24` |
| Careers hero h1 | `77.401 / 89.0112px` | 约 `4.375rem / 1.15`，显著大于普通业务页 |
| Technology、Impact 章节 h2 | `39.8063 / 50px` | 约 `2.25rem`，行高实测为固定 `50px` |
| Global Indian 章节 h2 | `44.2292 / 55.2865px` | 约 `2.5rem / 1.25` |
| Technology、Impact 主段落 | `20.3454 / 33.9768px` | 主段落宽约 `831.5px`，部分为两端对齐 |
| Global Indian 主段落 | `19.9031 / 29.8547px` | 约 `1.125rem / 1.5` |
| Founders 服务正文 | `17.6917 / 26.5375px` | 约 `1rem / 1.5`；主体更紧凑 |
| 法律正文 | `19.9031 / 33.2382px` | 宽 `981.875px`，约 `55.5rem` |

## Global Indian：独立的跨境业务长页

来源：[实际页面](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice)。完整 DOM 和初始 computed：[JSON](../artifacts/reference/browser-supplement/global-indian-top.json)。

信息顺序：道路景观 hero → 业务问题与定位的两栏介绍 → 四组图片/说明的理由段落 → 四项编号服务支柱 → 入境/出境两种业务方向 → 团队肖像 → 三类受众 → 报告下载 → 全局页脚。底部另有持续显示的顾问联系入口。

其主体使用 80rem 大容器，宽于共用头尾的 70rem。Hero 高 `663.4px`，图片 `1831 × 663.4`、cover，约 `2.76:1`；标题宽 `601.5px`，位于左下部。介绍的标题在左，长段落在右。理由段落中图片典型尺寸为 `618.2 × 240.5`，约 `2.57:1`。服务支柱是连续的 2 × 2 编号网格，以细分隔线组织。业务双向部分源站为近黑色背景、两栏图片与标签；团队采用人像名单；受众三列；最后以报告封面和下载文字完成转化。

未发现正文 tab 或 accordion。联系/下载入口仅核对真实链接，没有发送邮件或下载、提交资料。源站出现监管范围、专属平台、印度投资路径及真实人员，均属于 Lighthouse Canton 内容，不能由此推定 FIDERE 具备同样资质、人员或能力。

渲染证据：[顶部](../artifacts/reference/browser-supplement/global-indian-top.png)、[中部](../artifacts/reference/browser-supplement/global-indian-middle.png)、[底部](../artifacts/reference/browser-supplement/global-indian-bottom.png)。页高随资源加载由 `7943` 增至 `8250px`；最终底部 `scrollY=7219`。

## Founders：阶段 tab 与长服务段落

来源：[实际页面](https://www.lighthouse-canton.com/our-businesses/founders-ecosystem)。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/founders-ecosystem-top.json)。

信息顺序：摄影 hero 的标题/阶段入口 → 概述 → Early Stage / Growth 双 tab → 当前阶段服务目录 → 各服务的摘要、子项目、宽图、详细文字及联系按钮 → 页脚。Hero `824.8px`，相当于本次视口的 `80vh`；左为清晰照片，右为模糊半透明图像区域，阶段入口以横线分隔。H1 左边沿与公共容器对齐；概述 h2 为 `33.1719 / 39.8063px`，约 `1.875rem`。

默认 Early Stage 呈现三类服务：创投、股权结构管理、流动性支持。实际点击 Growth 后，`aria-selected` 从前者切换至后者，目录和正文同步成为创业债、流动性、财富规划、多元化四类。并非仅替换按钮样式。各阶段有黑色吸顶章节导航；主内容以左摘要、右大图和淡底正文组合，服务图约 `1007 × 300px`、cover，约 `3.36:1`。服务说明标题为无衬线 `26.5375 / 31.845px`，正文宽约 `654.6px`，CTA 是红色描边矩形。

源站段落之间存在较大空白；不应把这类长页全部压成等高卡片。Tab 改变页高，Growth 曾达 `7492px`，Early Stage 约 `6040px`。没有触发联系提交。

渲染证据：[顶部](../artifacts/reference/browser-supplement/founders-ecosystem-top.png)、[Growth 已选](../artifacts/reference/browser-supplement/founders-ecosystem-growth-tab.png)、[中部](../artifacts/reference/browser-supplement/founders-ecosystem-middle.png)、[已验证页脚](../artifacts/reference/browser-supplement/founders-ecosystem-footer-verified.png)。

## Technology：左右论述、技术功能、基金 tab

来源：[实际页面](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation)。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/technology-innovation-top.json)。

信息顺序：建筑摄影 hero → 左长标题/右论述和奖项图像 → 深色技术图像带中的三项功能 → 投资策略介绍及 Private/Public 分类 tab → 页脚。Hero `701.1px`，标题在左下，宽 `417.95px`、两行。正文标题列约 `389.2px`，段落列约 `831.5px`；h2 可以是较长的多行论述，而非每节只用短标签。技术区左长标题，右三行小图标、h3 与一两行文字。

实际从 Private Markets Funds 切到 Public Markets Funds，选中状态、面板和页面高度均改变：默认私募面板有四类策略；公募面板变为两个并列策略栏，下设名称和箭头链接。tab 是衬线文字配底部规则线，选中项文字/下划线红色。公募切换后页高由 `5249` 减至 `4704px`。公募的两个具体基金链接带 `/in/` 前缀；只读取了 href，没有访问基金详情。

渲染证据：[顶部](../artifacts/reference/browser-supplement/technology-innovation-top.png)、[中部](../artifacts/reference/browser-supplement/technology-innovation-middle.png)、[默认底部](../artifacts/reference/browser-supplement/technology-innovation-bottom.png)、[Public 已选](../artifacts/reference/browser-supplement/technology-innovation-public-markets-tab.png)。默认底部 `scrollY=4218`。

## Our Impact：承诺介绍、三 tab、编号原则

来源：[实际页面](https://www.lighthouse-canton.com/our-impact)。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/our-impact-top.json)。

信息顺序：绿色叶片 hero 与机构标志 → 责任投资介绍和政策 PDF 入口 → 三项行业 tab → 原则说明与六条编号内容 → 当前页面内的相关文章模块 → 页脚。Hero 高 `701.1px`；普通正文仍是左 h2、右宽论述。第一段右栏下有三个衬线 tab，默认生命科学地产。

实际点击 SMEs across Asia：选中状态从默认项移至第二项，正文与插图同步换成中小企业融资主题。其布局为右栏中再分文字/线描图两列，未跳转。后面的六条原则以 2 列 × 3 行、红色竖线与数字组织。源站责任投资宣称、机构标志和数字仅是研究对象页面内容，未作真实性外部审验，不能转化为 FIDERE 承诺。

相关文章模块没有被展开或访问，保留为页面信息顺序的观察。渲染证据：[顶部](../artifacts/reference/browser-supplement/our-impact-top.png)、[第二 tab](../artifacts/reference/browser-supplement/our-impact-sme-tab.png)、[中部](../artifacts/reference/browser-supplement/our-impact-middle.png)、[底部](../artifacts/reference/browser-supplement/our-impact-bottom.png)。默认页高 `4142px`，底部 `scrollY=3111`。

## Careers：文化叙事与视频横向浏览

来源：[实际页面](https://www.lighthouse-canton.com/careers)。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/careers-top.json)。

信息顺序：会议场景 hero/招聘标题/认证图 → 黑色章节锚点条 → 左拼图、右文化介绍 → 员工大幅摄影与半透明引语面板 → 视频横向序列 → 五项价值观 → 职位联系段落 → 页脚。Hero 高 `824.8px`；大 H1 为 `77.401px`，这是本组页面的特殊强调尺寸。正文 h2 常为 `53.075px`。员工摄影段高约 `645.6px`；视频缩略图约 `530 × 354px`，接近 `3:2`。价值观源站使用灰褐底、五列图标/文字；FIDERE 的白底要求优先于此色块。

视频行实际点击一次下一项：首个可见人物由 Fenglin 切换为 Angela，后方 Joshua 进入可见范围；左箭头从灰色不可前移状态变为可操作状态。没有播放 YouTube。最后招聘段只观察到简历联系入口，指向联系页，不是提交成功状态，也没有从这页观察到逐条招聘职位列表。

渲染证据：[顶部](../artifacts/reference/browser-supplement/careers-top.png)、[视频初始](../artifacts/reference/browser-supplement/careers-middle.png)、[视频向后](../artifacts/reference/browser-supplement/careers-carousel-next.png)、[底部](../artifacts/reference/browser-supplement/careers-bottom.png)。页高 `5491px`，底部 `scrollY=4460`。

## Team 回退：About 内的可筛选团队区

实际读取：[About 的团队锚点](https://www.lighthouse-canton.com/about#s-team)，不是 `/team` 独立页。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/team-navigation-fallback-filtered.json)。

团队区在 About 长页后段：独立 CEO 人像 → 领导层标题 → 六个业务筛选 → 四列肖像网格。头像大致方形，下方地点/姓名/职务，并带箭头操作入口。团队标题 `44.2292 / 55.2865px`，使用 80rem 大容器，左边沿 `207.828px`。实际点击 Asset Management 原生 radio，检查到该项 checked，原 Management 未选；成员列表随之变为六人。没有打开人物详情弹层。

本次只把团队区作为 `/team` 请求的导航回退来记录；没有将 About 全页所有交互重复验收。证据：[筛选后的实际渲染](../artifacts/reference/browser-supplement/team-navigation-fallback-filtered.png)，捕获时 `scrollY=9066`，文档高 `11262px`。

## Privacy：长法律文档模板

来源：[Privacy Policy](https://www.lighthouse-canton.com/privacy-policy)。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/privacy-policy-top.json)。

无摄影 hero。浅灰标题带高 `316.7px`，H1 `53.075 / 61.0363px`、宽 `597.094px`，两行。白底正文从同一容器左边开始，宽 `981.875px`，右侧留白，不是居中的窄卡片。正文主结构包括适用范围、个人数据与法律依据、收集与用途、自动化决策、准确性、Cookie、存储、跨境传输、保留、权利与撤回、安全、联系、政策更新，以及 Cookie 细则；长表格穿插于正文中。

编号章节标题 H2 为 Public Sans `17.6917 / 21.23px`；源站部分长条款却采用较大的 H3（约 `22.1146 / 30.9604px`），应区分观察到的视觉层次与理想语义层次。段落 `19.9031 / 33.2382px`。表格是深色表头、白单元格与细边线，末段仍有实体/基金数据表，再进入共用页脚。全文非常长，约 `30466px`，中部实拍 `scrollY=14950`，底部 `29435`。

只研究模板结构和阅读节奏，不把该公司的法律实体、数据处理关系、产品名称或条款迁移给 FIDERE。没有从页面虚构更新日期。

渲染证据：[顶部](../artifacts/reference/browser-supplement/privacy-policy-top.png)、[中段表格](../artifacts/reference/browser-supplement/privacy-policy-middle.png)、[末表及页脚](../artifacts/reference/browser-supplement/privacy-policy-bottom.png)。

## Disclaimer：二十一个编号段落

来源：[Disclaimer](https://www.lighthouse-canton.com/disclaimer)。完整 DOM 与 computed：[JSON](../artifacts/reference/browser-supplement/disclaimer-top.json)。

同样使用无摄影浅灰标题带和白底法律正文。Hero 高 `355.6px`；H1 字体与 Privacy 相同，但源站此 H1 额外含 `padding-top:100px`，因此其边界框 `height=161.031px` 不等于一行文字高度。应避免从元素矩形误判字体行高。正文宽仍为 `981.875px`。

开头是使用网站的说明，随后 21 个罗马数字章节：信息用途、专业建议、邀约/地区/资格限制、利益关系、前瞻陈述与风险、通信隐私、准确性、会计、恶意软件、第三方、知识产权、损失责任、社交媒体、Cookie 与修改权。标题用红色大写小号无衬线，段落行距较宽，中间一组无序列表。没有发现 accordion、tab 或提交表单。

渲染证据：[顶部](../artifacts/reference/browser-supplement/disclaimer-top.png)、[中部](../artifacts/reference/browser-supplement/disclaimer-middle.png)、[底部](../artifacts/reference/browser-supplement/disclaimer-bottom.png)。页高 `6929px`，中部 `scrollY=3093`，底部 `5898`。

## 原站导航问题与实现边界

1. 本轮多页页脚的 Technology & Innovation 文字 href 实际指向 `/our-businesses/founders-ecosystem`；顶部业务菜单才指向正确的科技页面。这是已观察到的源站链接不一致，不应照搬。
2. Team 的真实导航目标是 About 锚点；发现清单里同时有 `/team`，但此次未能到达该独立路径。不能为了凑齐研究覆盖率把两个地址混为同一成功页面。
3. `/10x`、`/whistleblower-policy` 的浏览失败仍是缺口。没有通过脚本绕过区域跳转、伪造语言状态或猜测新路由。
4. 参考站不是统一单模板：Global Indian 的 80rem 连续网格、Founders 的阶段 tab、Technology 的基金切换、Careers 的影像叙事、法律长文，都有各自的信息节奏。可迁移的是结构和实测排版关系。
5. 用户已要求 FIDERE 全站白色主背景。参考站本轮观察到的近黑、灰褐、红色背景，只作为事实入档，不能覆盖该用户约束；更不能迁移参考站的业务资质、收益语言、员工、奖项或法律事实。
6. 本轮仅产生研究文档和浏览器证据，没有修改实现代码、运行构建或声称 FIDERE 页面已通过新一轮验收。
