# 白底内页改版：视觉与功能验收

> 本文记录上一版。用户指出的 Hero 比例偏差已在后续修正；最新实现、构建与截图以 [比例修正验收](proportion-validation.md) 为准。本文“独立白底标题／照片条”及原正文起点已被替换。

2026-09-09，最终本地生产构建 `3lXoDtn4MPjfmyzzODKul`，预览 [繁体首页](http://127.0.0.1:3000/zh-hant)、[方案目录](http://127.0.0.1:3000/zh-hant/solutions)、[私人信托详情](http://127.0.0.1:3000/zh-hant/solutions/private-trust)。未部署到公开域名。

本次以真实 HTML / CSS / Webflow JS、静态资源及浏览器计算样式为依据，完成页面匹配、白底实现、逐屏检查与修正。**这是经过尺寸核对的 FIDERE 品牌适配，不是全站位图或逐帧动画完全相同的复刻。**

## 可查看的对比

- [桌面同视口首屏：1440 × 1000](../artifacts/visual-validation/comparison-sheets/comparison-desktop.png)
- [手机同视口首屏：390 × 844](../artifacts/visual-validation/comparison-sheets/comparison-mobile.png)
- [三类完整页面对照，保持相同缩放比例](../artifacts/visual-validation/comparison-sheets/comparison-full-pages.png)
- [Advisory / Private Trust 50% 叠加与版心、Hero 边界辅助线](../artifacts/visual-validation/comparison-sheets/advisory-geometry-overlay.png)
- [八类 FIDERE 内页完整布局](../artifacts/visual-validation/comparison-sheets/fidere-page-types.png)

左右分别为 Lighthouse 与 FIDERE。合成图只用于展示；原始尺寸截图、计算样式、实际 URL 与滚动坐标保存在 [visual-validation](../artifacts/visual-validation/) 中。[生成脚本](../scripts/create-visual-comparisons.py) 可重建对比图。CUA 返回的部分截图实际编码为 JPEG，保留原始字节于 `source-captures/` 后转为真实 PNG；没有通过图片处理修改页面内容。

## 覆盖与方法

正式参考基线为 About、Wealth、Advisory 三类页面，两种视口均保存首屏、正文、页尾和整页。About / Wealth 的 [参考截图清单](../artifacts/visual-validation/reference-baseline-manifest.json) 与 [本地截图清单](../artifacts/visual-validation/fidere-baseline-manifest.json) 附有原始 URL、视口及几何数据；本地清单另含 Solutions。

首屏均为 `scrollY=0`。Advisory 与 Private Trust 的桌面正文截图均为 `scrollY=1000`，手机正文均为 `844`。About / Wealth 的 middle 文件记录各自语义中段，因内容不同，滚动值不同，**不能把这组 middle 图称作相同绝对坐标的像素差分**。页尾采用各自文档末端状态。整页在逐屏查看、触发内容显现后回到顶部截图，避免将固定导航留在页面中间。About / Solutions / Wealth 六组逐屏记录均确认未显现的 reveal 元素为 0。

额外完成 Home（繁体）、Compliance、Contact、Corporate Trust、Transaction Support、Tax Compliance、Funds、Governance、Client Due Diligence 的桌面与手机完整页面检查；Family Office 保存桌面完整页，繁体 Private Trust 检查手机首屏。不同详情结构使用各自内容，没有用一个正文模板套全部服务。

## 尺寸复核

以下是浏览器计算值，不是从截图估算。视口宽 1440 / 390 时，带系统滚动条的 DOM 可用宽度分别为 1425 / 375；比较双方保持一致，不把这 15px 当作布局错误。

| 对象 | Lighthouse | FIDERE | 结果 |
|---|---:|---:|---|
| 桌面 About H1 | 70px / 80.5px | 70px / 80.5px | 相同字体、字号及行高 |
| 手机 About H1 | 34.3396px / 39.4906px | 34.3396px / 39.4906px | 相同；不同文案使 FIDERE 多一行 |
| About Hero 桌面 / 手机 | 800px / 360px | 800px / 360px | 高度一致；文字改为独立白底 |
| Wealth H1 桌面 | 50px / 57.5px | 50px / 57.5px | 一致 |
| Wealth H1 手机 | 34.3396px / 39.4906px | 34.3396px / 39.4906px | 一致 |
| Wealth Hero 桌面 / 手机 | 800px / 577.28125px | 800px / 577.484375px | 手机约 +0.20px，来自内容/像素取整 |
| Advisory / Private Trust H1 桌面 | 48px / 60px | 48px / 60px | 一致 |
| Advisory / Private Trust H1 手机 | 45.7862px / 57.2327px | 45.7862px / 57.2327px | 一致 |
| Advisory / Private Trust Hero 桌面 | 452px | 452px | 一致 |
| Advisory 正文宽 / 两列 | 1280px / 608 + 64 + 608px | 1280px / 608 + 64 + 608px | 一致 |
| 常规正文宽 | 1120px | 1120px | 一致 |
| 桌面 Header | 97px，两行 | 97px，两行 | 高度一致；品牌与菜单内容不同 |
| 手机 Header | 95.140625px | 95px | 约 −0.14px，原站 rem 与本地 px 取整差 |

## 对照中实际修复的问题

1. Next 生产 CSS 分包时，组件先声明 `reference` 层，导致旧米色和大字号优先。各 CSS 入口现在均先声明相同层顺序；浏览器复验 body 为 `rgb(255,255,255)`，详情标题恢复 48px。
2. About 最新英文基线为 70px，而前期中文页面为 64px。英文样式已按新基线调整；手机 Hero 从过高的 70vh 改为实际 360px。
3. 手机服务详情按钮已改为全宽上下排列，并重拍相关详情；Business 手机图片带由 16rem 缩为 12.75rem，使 Wealth Hero 接近参考实际高度；Solutions 因双行标题保留内容需要的额外高度。
4. 相关服务与手机菜单残留底色改白；1100px 导航断点的占位高度与实际 95px Header 一致。
5. 菜单 Escape 后切换栏目出现二次点击才展开的问题已修复；章节高亮改用稳定的 Header 高度判断，消除隐藏 Header 后的阈值漂移。两项均经相同操作顺序复验。

## 功能检查

- `npm run build` 与 `npm run lint` 通过。
- 最终构建再跑 HTTP / SSR 检查：117 页全部 200，114 个 sitemap URL，147 个站内目标、429 个唯一锚点、73 个图片响应、48 例兼容重定向、16 例无效路径均通过。见 [路由验收](route-validation.md)。
- 四组桌面菜单、Escape / 焦点回归、手机嵌套导航、三级页面语言切换、两组单开折叠项、章节跳转及回到顶部高亮、站内返回均通过。
- Contact 必填校验、生成本地邮件草稿、带入服务意向、编辑后清除过期草稿通过。未激活邮件客户端、发送邮件或操作剪贴板。
- 390、768、991、1100、1440 五种宽度 × 五类页面共 25 次检查，无正文横向溢出。见 [交互与响应式验收](interaction-validation.md)。

## 有意适配与仍有差异

**有意适配：**所有结构性表面为白色；参考的深色照片蒙层、黑色章节区及红色 Footer 改为独立照片、白底文字与细线。使用原 FIDERE Logo、独立来源照片、真实业务内容和香港联系信息。没有搬入 Lighthouse 的人物、团队、AUM、投资案例、基金业绩或多地办公室。FIDERE 新增的约 52px / 62px 章节条使部分正文起点后移；Contact 采用较短白底入口，让联系表单更早出现。

**仍有可见差异：**不同文案和模块数量导致整页高度不同；Private Trust 手机 Hero 约 612px，参考 Advisory 约 634px，约 22px 差主要来自导语和面包屑的行数；操作按钮已按参考改为全宽上下排列。桌面 H1 顶部约相差 2.5px，宽度取决于各自文本。小字号标签、部分正文间距、Footer 内容高度未逐元素证明像素一致。中文使用系统宋体与无衬线回退，跨系统字形/折行可能不同。

**交互边界：**Header 300ms、图片 hover 600ms 与内容进入的时长已参照资源统一；原生 details 单开行为已验证，但没有逐帧复刻 Webflow 折叠动画和所有页面转场。原生浏览器 Back 未自动验收，站内返回已实际验证。不以整图差异百分比作为完成标准，因为白底、品牌和摄影变化会主导该数值。

参考访问和资源限制另见 [访问总清单](reference-public-inventory.md)、[HTML/CSS/JS资源记录](reference-resource-analysis.md)、[区域访问记录](reference-browser-regional.md) 和 [补全访问记录](reference-browser-completion.md)。HTTP 404、地区脚本重定向和未实际到达的目标均分别记录，没有将替代页面截图计作目标成功。

最终访问统计：79 个范围内地址全部有访问尝试记录；HTTP 为 74 个 200、5 个 404。最新浏览器结果为 32 个目标到达、47 个重定向后目标未到达。历史曾到达为 33 个，不与最新状态混算。完整差分见 [coverage.json](../artifacts/reference/browser-completion/coverage.json)。
