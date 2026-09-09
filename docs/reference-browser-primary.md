# 参考站实际浏览记录：主要页面

更新于 2026-09-09。本文件只读已落盘的浏览器 JSON、DOM 快照与配对图像，按 **实际 URL、视口、滚动位置** 整理证据；本次没有新建或操作浏览器，没有访问参考 Insights，也没有修改产品代码。它是访问状态清单，不是 FIDERE 视觉验收完成报告。

## 证据口径

- `artifacts/reference/browser-primary/` 当前有 38 份 JSON，按实际地址去掉 fragment 后对应 13 个页面；均记录浏览器视口 `w=1440, h=1000`。每份有同名图像文件。字段 `y` 是记录时的 scrollY，`height` 是当时文档高度。
- `artifacts/visual-validation/reference-advisory*.json` 有 9 份，记录桌面 1440×1000 与手机 390×844；该组用 `scroll` 保存 scrollY。`clientWidth` 分别为 1425 与 375，存在 15px 滚动条占位，不能把截图宽度直接当正文布局宽度。
- 本报告以 JSON 的 `url` / 标题 / H1 识别页面，不以文件名认定目的地。`top`、`middle`、`footer`、`filter`、`tabs`、`accordion` 仅是采集标签；缺少操作前后状态时，不能由文件名认定交互通过。
- JSON 有元素计算样式，不代表列出的所有 DOM 节点当时都在视口内。不同记录的页面高度也会随动态内容、布局与状态变化；各次高度分别保留。
- 同名 `.png` 是现有文件命名；抽查真实文件头为 JPEG，因此本文称“图像文件”，不把扩展名当媒体类型或尺寸证据。JSON 本身不总包含截图 clip，已知错误截图需另外排除。

## 桌面主要页面：实际 URL 与状态

全部视口为 **1440×1000**。下表 `y` 是滚动位置、`H` 是文档高度，单位 px；链接直接指向保存的 JSON，同目录有配对图像。按原记录列数值，不将未采集段落补写为已访问。

| 实际页面 | 已保存状态 |
| --- | --- |
| [Asset Management](https://www.lighthouse-canton.com/our-businesses/asset-management) | [private-credit](../artifacts/reference/browser-primary/asset-management-desktop-private-credit.json)：y=1965，H=9193，URL #private-credit<br>[top](../artifacts/reference/browser-primary/asset-management-desktop-top.json)：y=0，H=9193 |
| [LC Beacon Global Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global) | [footer](../artifacts/reference/browser-primary/beacon-desktop-footer.json)：y=2704，H=3704<br>[middle](../artifacts/reference/browser-primary/beacon-desktop-middle.json)：y=1000，H=3704<br>[top](../artifacts/reference/browser-primary/beacon-desktop-top.json)：y=0，H=3704 |
| [Contact](https://www.lighthouse-canton.com/contact) | [footer](../artifacts/reference/browser-primary/contact-desktop-footer.json)：y=2431，H=3431<br>[middle](../artifacts/reference/browser-primary/contact-desktop-middle.json)：y=2341，H=3431<br>[top](../artifacts/reference/browser-primary/contact-desktop-top.json)：y=0，H=3431 |
| [LC Luminere Credit Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund) | [accordion](../artifacts/reference/browser-primary/lc-luminere-credit-fund-desktop-accordion.json)：y=2131，H=4576<br>[footer](../artifacts/reference/browser-primary/lc-luminere-credit-fund-desktop-footer.json)：y=3576，H=4576<br>[middle](../artifacts/reference/browser-primary/lc-luminere-credit-fund-desktop-middle.json)：y=1000，H=4576<br>[top](../artifacts/reference/browser-primary/lc-luminere-credit-fund-desktop-top.json)：y=0，H=4576 |
| [LC Nueva Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-fund) | [footer](../artifacts/reference/browser-primary/lc-nueva-fund-desktop-footer.json)：y=3860，H=4860<br>[tabs](../artifacts/reference/browser-primary/lc-nueva-fund-desktop-tabs.json)：y=2925，H=5806<br>[top](../artifacts/reference/browser-primary/lc-nueva-fund-desktop-top.json)：y=7，H=4860 |
| [Private Market Funds](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds) | [middle](../artifacts/reference/browser-primary/lc-nueva-fund-desktop-middle.json)：y=3385，H=6287（旧文件名误标）<br>[section](../artifacts/reference/browser-primary/private-funds-desktop-section.json)：y=3552，H=6287，URL #section-lc-supply<br>[top](../artifacts/reference/browser-primary/private-funds-desktop-top.json)：y=0，H=6287，URL #section-lc-supply |
| [LC Nueva Momentum Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund) | [footer](../artifacts/reference/browser-primary/lc-nueva-momentum-fund-desktop-footer.json)：y=3091，H=4091<br>[middle](../artifacts/reference/browser-primary/lc-nueva-momentum-fund-desktop-middle.json)：y=1000，H=4022<br>[top](../artifacts/reference/browser-primary/lc-nueva-momentum-fund-desktop-top.json)：y=0，H=6299 |
| [LC Special Credit Opportunities Fund 2](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund) | [footer](../artifacts/reference/browser-primary/lc-special-credit-opportunities-fund-desktop-footer.json)：y=4074，H=5074<br>[middle](../artifacts/reference/browser-primary/lc-special-credit-opportunities-fund-desktop-middle.json)：y=1000，H=5074<br>[top](../artifacts/reference/browser-primary/lc-special-credit-opportunities-fund-desktop-top.json)：y=0，H=5074 |
| [LC Supply Chain Credit Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit) | [footer](../artifacts/reference/browser-primary/lc-supply-chain-credit-desktop-footer.json)：y=2976，H=3976<br>[middle](../artifacts/reference/browser-primary/lc-supply-chain-credit-desktop-middle.json)：y=1000，H=3976<br>[top](../artifacts/reference/browser-primary/lc-supply-chain-credit-desktop-top.json)：y=0，H=3940 |
| [Life Sciences Real Estate](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/life-sciences-real-estate) | [footer](../artifacts/reference/browser-primary/life-sciences-real-estate-desktop-footer.json)：y=2582，H=3582<br>[middle](../artifacts/reference/browser-primary/life-sciences-real-estate-desktop-middle.json)：y=1000，H=3537<br>[top](../artifacts/reference/browser-primary/life-sciences-real-estate-desktop-top.json)：y=0，H=5201 |
| [Public Market Funds](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds) | [section](../artifacts/reference/browser-primary/public-funds-desktop-section.json)：y=1477，H=2622，URL #section-lcbeacon<br>[top](../artifacts/reference/browser-primary/public-funds-desktop-top.json)：y=0，H=2622 |
| [SageOne India Growth Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/sageone-india-growth-fund) | [footer](../artifacts/reference/browser-primary/sageone-desktop-footer.json)：y=2879，H=3879<br>[middle](../artifacts/reference/browser-primary/sageone-desktop-middle.json)：y=1000，H=3879<br>[top](../artifacts/reference/browser-primary/sageone-desktop-top.json)：y=0，H=3842 |
| [LC Venture Debt Fund](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund) | [filter](../artifacts/reference/browser-primary/venture-debt-desktop-filter.json)：y=1000，H=4629<br>[footer](../artifacts/reference/browser-primary/venture-debt-desktop-footer.json)：y=2817，H=3817<br>[top](../artifacts/reference/browser-primary/venture-debt-desktop-top.json)：y=0，H=4629 |

以上基金详情中部分页面把团队人物也写为 H1；这是参考站原始结构，不是 FIDERE 应复制的语义规则。LC Nueva Momentum、Supply Chain、Life Sciences 等记录的 H 会变化，不能混合不同状态推导固定整页高度。

## Advisory：桌面与手机真实记录

9 份记录的实际 URL 均为 [Advisory and Capital Solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions)，H1 为 “Strategic adviceReal capital”。没有用基金集合或其他页面替代此专题。

| 视口 / 文档可用宽 | 已保存状态 | 记录中的文档高度 |
| --- | --- | --- |
| 1440×1000 / clientWidth 1425px | [footer](../artifacts/visual-validation/reference-advisory-desktop-footer.json)：scrollY=7440<br>[full](../artifacts/visual-validation/reference-advisory-desktop-full.json)：scrollY=0<br>[lower](../artifacts/visual-validation/reference-advisory-desktop-lower.json)：scrollY=4000<br>[middle](../artifacts/visual-validation/reference-advisory-desktop-middle.json)：scrollY=1000<br>[top](../artifacts/visual-validation/reference-advisory-desktop-top.json)：scrollY=0 | 8440px |
| 390×844 / clientWidth 375px | [footer](../artifacts/visual-validation/reference-advisory-mobile-footer.json)：scrollY=13712<br>[full](../artifacts/visual-validation/reference-advisory-mobile-full.json)：scrollY=0<br>[middle](../artifacts/visual-validation/reference-advisory-mobile-middle.json)：scrollY=844<br>[top](../artifacts/visual-validation/reference-advisory-mobile-top.json)：scrollY=0 | 14556px |

桌面 JSON 的主标题为 Frank Ruhl Libre 48px / 60px；Hero 高 452px、文档 y=97。手机主标题为约 45.7862px / 57.2327px，Hero 高 633.78125px、y=95.140625。`full` 记录在 scrollY=0；抽查手机 full 图像的实际尺寸为 390×14556，整页图像仍不能替代可交互状态或 FIDERE 同视口对比。

## About / Wealth 补充采集状态

该组使用 `viewport`、`scroll.y`、`document.height` 及可选 `capture.clip`，不与上面另一种 JSON 字段格式混淆。下列仅列本文件写入时已经存在的记录，无需等候后续采集：

| 实际 URL / 视口 | 已落盘记录 |
| --- | --- |
| [about](https://www.lighthouse-canton.com/about) / 1440×1000 | [end](../artifacts/visual-validation/reference-about-desktop-end.json)：y=10789，H=11839，clip.y=10789<br>[full](../artifacts/visual-validation/reference-about-desktop-full.json)：y=0，H=11789，clip.y=0<br>[middle](../artifacts/visual-validation/reference-about-desktop-middle.json)：y=3890，H=11839，clip.y=3890<br>[top](../artifacts/visual-validation/reference-about-desktop-top.json)：y=0，H=11789，clip.y=0 |
| [about](https://www.lighthouse-canton.com/about) / 390×844 | [end](../artifacts/visual-validation/reference-about-mobile-end.json)：y=7685，H=8529，clip.y=7685<br>[full](../artifacts/visual-validation/reference-about-mobile-full.json)：y=0，H=8469，clip.y=0<br>[middle](../artifacts/visual-validation/reference-about-mobile-middle.json)：y=4080，H=8529，clip.y=4080<br>[top](../artifacts/visual-validation/reference-about-mobile-top.json)：y=0，H=8469，clip.y=0 |
| [wealth-management](https://www.lighthouse-canton.com/our-businesses/wealth-management) / 1440×1000 | [end](../artifacts/visual-validation/reference-wealth-desktop-end.json)：y=6168，H=7168，clip.y=6168<br>[full](../artifacts/visual-validation/reference-wealth-desktop-full.json)：y=0，H=7168，clip.y=0<br>[middle](../artifacts/visual-validation/reference-wealth-desktop-middle.json)：y=2880，H=7168，clip.y=2880<br>[top](../artifacts/visual-validation/reference-wealth-desktop-top.json)：y=0，H=7168，clip.y=0 |
| [wealth-management](https://www.lighthouse-canton.com/our-businesses/wealth-management) / 390×844 | [end](../artifacts/visual-validation/reference-wealth-mobile-end.json)：y=6475，H=7319，clip.y=6475<br>[middle](../artifacts/visual-validation/reference-wealth-mobile-middle.json)：y=3216，H=7319，clip.y=3216<br>[top](../artifacts/visual-validation/reference-wealth-mobile-top.json)：y=0，H=7319，clip.y=0 |

补充采集仍可能继续；本表仅反映写入时已落盘的文件，未列出的手机状态不提前认定为已访问。

新增英文 `/about` 的桌面 H1 为 70px / 80.5px，手机为约 34.3396px / 39.4906px；它与前轮 `/cn-s/about` 的 64px 标题记录属于不同 URL。不能把两者合并为一个已测得的通用 About 标题规格。设计对应关系见 [reference-page-map.md](reference-page-map.md)。

## 错误命名与不应引用的证据

1. [lc-nueva-fund-desktop-middle.json](../artifacts/reference/browser-primary/lc-nueva-fund-desktop-middle.json) 的真实 URL 是 `/our-businesses/asset-management/private-market-funds`，H1 为 Private Market Funds，scrollY=3385。它是**集合页记录，不能当 LC Nueva Fund 详情中段**。本报告按实际 URL 归入集合页。Nueva 的 top / tabs / footer 三份才记录真实详情 URL；top 的 scrollY=7，也不能改写为严格零点。
2. `private-funds-desktop-top.json` 虽然 scrollY=0，但 URL 保留 `#section-lc-supply`；只说明记录当时位于顶部，不能称为该锚点已经正确到达。对应 `section` 记录为 scrollY=3552；两者需分别保留。
3. 更早一轮部分 `*-desktop-middle.png` / `*-desktop-footer.png` 使用 `clip.y=0`，实际拍回文档顶部，不能作为对应中段或页尾的视觉证据。不能因为新文件采用相似名称而自动沿用旧验收，也不能反过来把新 JSON 中真实滚动状态视为旧图像正确的证明。
4. 旧文件不得改名后伪装成新的真实详情访问。更新记录应核对 URL、页面标题、视口、scrollY、截图文档坐标与实际可见内容；全页截图在 y=0 是正常整页采集，需要明确区分 `full-document` 和滚动视口截图。

## 当前可支持的结论与剩余边界

现有记录支持“这些具体 URL 在列明视口和滚动位置被采集，并保存部分计算样式与图像”。不能据此宣称 38 个参考模板族全部完成桌面/手机浏览，不能宣称表单提交、菜单键盘路径或基金筛选均通过，更不能把参考站证据当成 FIDERE 已实现结果。Contact 记录不是表单发送授权或送达证明。

FIDERE 最新源码已统一 ≤1100px Header 占位为95px、相关服务白底，并将 SectionNav 改为按 scroll / resize 经 rAF 更新高亮；主流程已启动包含这些修复的新本地构建，浏览器复验由对应验收记录说明。本报告不新增通过结论。业务用途与必须保留的差异见 [content-layout-rationale.md](content-layout-rationale.md)，设计实现见 [design-system.md](design-system.md)，静态页面范围见 [reference-public-inventory.md](reference-public-inventory.md)。
