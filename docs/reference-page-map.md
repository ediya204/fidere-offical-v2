# 参考模块与 FIDERE 业务页面映射

更新于 2026-09-09。本轮只根据已保存的参考 HTML / CSS、既有测量记录与当前 FIDERE 源码更新映射；没有新增参考浏览，也没有访问参考 Insights。以下“参考测量”“源样式声明”“当前实现”是不同证据层，新构建后的视觉比对尚须独立记录。

用户最新要求为**全站白底**。当前实现字体、宽度和共享组件见 [design-system.md](design-system.md)；选择结构的具体原因、三语业务边界及各详情的不同内容顺序见 [content-layout-rationale.md](content-layout-rationale.md)。页面不是按名称一一套用模板：先确定客户要理解什么，再选择能支持该任务的模块。

## 业务用途与模块选择

| FIDERE 页面 / 阅读任务 | 已读取参考与可借模块 | 当前白底实现与必须保留的差异 |
| --- | --- | --- |
| **Home：识别机构并找到入口** | [客户入口](https://www.lighthouse-canton.com/cn-s)的身份选择；[Wealth](https://www.lighthouse-canton.com/our-businesses/wealth-management)的需求目录和有节奏的图文段落。 | 左侧白底标题、右侧独立 FIDERE 照片，再接三类客户入口。保留服务行、司法管辖区切换及治理披露；不使用参考站 AUM、奖项或办公网络填充版面。 |
| **About：理解机构与职责** | [About](https://www.lighthouse-canton.com/cn-s/about)的机构照片、非对称声明/正文、章节导航、独立图文段落。 | 完整摄影 Hero 内底部标题，章节条为白色细线；身份、方法、原则、治理与相关入口按真实信息密度组织。没有核实的人物、年度历史或创始人寄语不出现。 |
| **Solutions：比较范围后下钻** | [Private Market Funds](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds)与[Public Market Funds](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds)的逐项解释、非对称集合和详情入口；业务 Hero 可借 Wealth 的目录关系。 | 三个真实服务分组采用 39% / 61% 左说明右内容，独立照片与服务行构成集合。十项服务都有真实详情路由，不替换为 `/solutions#…`。这里借的是选择服务的阅读方式，不是基金产品目录。 |
| **Wealth：理解市场、工具与安排的关系** | [Wealth](https://www.lighthouse-canton.com/our-businesses/wealth-management)的能力入口；[Global Indian](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice)的跨境情境与关系解释。 | 白底业务入口、四主题目录加独立照片，再解释已披露工具和条件。Global Markets、Funds、Fixed Income、Cash 是阅读主题，不代表自营产品、办公室、持牌管理策略或印度专项资格。 |
| **Compliance：理解为什么需要资料** | About 的机构章节和小目录；已保存正文阅读模块。参考站没有直接对应的合规营销模板。 | 白底政策摘要、完整政策入口、七项框架与五个教育主题。资料目录、来源比较、筛查范围、触发事项各自编排。明确是相邻模块组合，不称为对应页面逐像素复制。 |
| **Contact：联系机构并准备询问** | [Contact](https://www.lighthouse-canton.com/contact)中 enquiry / locations 两个明确用途、细线表单及地址信息。 | 直接联系方式与短表单优先，只有一个已核实香港地址。保留本地邮件草稿及用户自行发送的流程，不复制大型照片 Hero、多个办公室、提交成功或 CRM 送达承诺。 |
| **机构子页：身份、方法、治理** | About 的长短声明关系；[Technology and Innovation](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation)的论点/连续步骤；机构披露阅读段落。 | Who We Are 保留机构关系，Our Approach 保留纵向步骤，Governance 保留身份与 TCSP 披露。步骤线不代表已建成的数字系统；监管资料不转为装饰徽章。 |
| **服务详情：理解职责及下一步** | [Advisory and Capital Solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions)的标题/说明并置、具体服务与明确操作；Global Indian 的复杂情境及编号支柱。 | 完整摄影 Hero 内并置两栏标题与说明，正文转入白底。Private Trust 用角色关系；Family Office 用家族情境与协调；Corporate Trust / Trustee / Company Formation 用实体、委任及职责。传承、交易和托管保留不同时间与责任顺序。 |
| **财富详情：理解四种不同问题** | [Venture Debt](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund)与[Beacon Global](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global)说明详情需按证据拆章；科技页展示连续步骤。 | Funds 比较共同基金 / ETF 及三个阅读问题；Global Markets 解释市场、机构、信托关系；Fixed Income 比较发行人、期限及流动性；Cash 保留连续步骤。没有具名基金、净值图、组合、募集、团队或报告下载占位。 |
| **Insights：阅读原创指南** | 仅沿用前轮已保存的编辑层级记录，本轮不重新访问参考编辑栏目。 | 三篇原创指南，白底精选图文、两条继续阅读入口；详情封面、确定性返回、正文/目录与相关阅读。没有迁移参考作者、日期、观点或原文，不增加虚构历史文章。 |

Fund 目录适合 Solutions 的选择任务，**并不意味着 FIDERE 的 Funds 主题必须变成基金目录**；基金详情的章节组合也不能机械用于所有服务。Global Indian 提供复杂情境的解释方式，科技页提供连续步骤的节奏，它们的地区资格、平台功能、团队和投资主张不在可移植范围内。完整判断见 [content-layout-rationale.md](content-layout-rationale.md#详情页必须因内容而异)。

## 白底转译规则

1. 结构性背景统一白色；原参考的黑色、红色或浅灰区域用留白、细线、编号及文字层级区分。Header、mega menu、移动菜单、章节条、强调段、相关服务、CTA、Footer 均遵循此规则。
2. 摄影构图按页面用途区分。Home 和 Insights 保留图文双区；About、业务入口、服务详情恢复完整图片与图内标题，目录通过透明背景模糊区分。白底用于正文与导航，不再遮断 Hero 图片。见 [比例修正验收](proportion-validation.md)。
3. 保留非对称声明、39/61 集合、主题目录、2×2 支柱、连续步骤、政策阅读栏和资料定义列表的差异；白底不意味着统一为三张等宽卡片。
4. Public Sans / Frank Ruhl Libre、共享容器与细线建立一致性。不同页面 H1、正文宽度、章节间距按阅读任务变化；手机保持内容顺序、资格说明与真实详情入口，不以固定高度裁掉文字。
5. 使用 FIDERE 原 Logo、已核实业务和独立摄影；不移植参考站公司事实、金融承诺、专家、AUM、全球办公室或牌照。保留服务条件、政策来源与 Contact 草稿机制等必要差异。

## 既有测量记录的适用范围

下表是前轮参考浏览器记录，桌面视口 1440×1000、手机 390×844；不是当前 FIDERE 白底页面的新测量。实际 URL、视口、滚动位置与误标记录另见 [reference-browser-primary.md](reference-browser-primary.md)；更多源声明与条件见 [reference-resource-analysis.md](reference-resource-analysis.md)。字体相同不代表内容长度、照片和最终几何相同。

| 参考对象 | 前轮记录 | 对当前实现的作用 |
| --- | --- | --- |
| Header | 桌面高约 97px，工具行约 40px、主行约 57px；Logo 约 160×33px；主导航 12px / 600、字距 2px。 | 提供两行结构与尺度；FIDERE 保留六项自有导航、三语和 hover/click 双入口。 |
| 根字号及常规容器 | 桌面 Public Sans 16px / 24px；常规正文宽 1120px、x=160。手机根字号约 15.2621px。 | 本地使用流式 rem 体系，并区分 70rem 阅读容器与 80rem 专题容器。 |
| About | Hero 顶部 97px、高 800px；H1 64px / 73.6px。介绍列宽约 477 + 60 gap + 583px，H2 48px / 52.8px，正文 18px / 30.06px。 | 保留机构章节与非对称文本关系；英文最新参考 H1 为 70px / 80.5px，已按完整摄影 Hero 重新验证。 |
| Wealth | 桌面 Hero 800px，H1 50px / 57.5px；手机 Hero 约 577.28px，H1 约 34.34px / 39.49px、正文约 13.354px / 22.302px。 | 保留业务名与目录关系，不把此页字号直接套在 Home、Contact 或全部详情。 |
| Advisory | 桌面入口约 452px、padding 192px / 80px；正文宽 1280px，H1 48px / 60px，说明 20px / 30px；正文标题 40px / 50px。 | 服务标题与说明的几何依据；当前照片条、白底与三语正文长度会改变实际高度。 |
| 集合 / 科技 / Footer | 公开 CSS 声明集合左右 39vw / 61vw，科技列表有纵线和连续段；Footer 四列、小号大写导航、桌面上下 5rem。 | 这些是静态声明，不是本轮 computed style。Footer 的有效手机末段截图可作版式参考，当前白色 Footer 与参考底色有明确差异。 |

前轮部分文件名为 `*-desktop-middle.png`、`*-desktop-footer.png` 的截图使用了 `clip.y = 0`，实际重新截到文档顶部，**已排除为中段/页尾证据**。`reference-wealth-mobile-footer.png` 是有效手机页尾参考。之后截图应使用真实文档坐标，例如 `clip.y = window.scrollY`，并验证图像确实包含目标段落；不能仅靠文件名宣布全页已对比。

## 交互、资源与验收边界

前轮实际操作记录覆盖参考桌面菜单、Wealth 客户身份及手机目录/能力展开。原站 dropdown 配置主要为 click；FIDERE 按用户要求增加 hover。已读取脚本配置中的 Wealth accordion 为 300ms、单开，Header 上下滚动为 300ms；这些记录不等于 FIDERE 当前交互已验收。本地不执行下载的原站 JavaScript，移动二级入口保留最小 48px 点击高度。

参考资源覆盖需分别解释：初轮 [resource-audit](reference-resource-analysis.md) 选择的 29 个原始响应全部成功；后续 [公开页面清单](reference-public-inventory.md) 共 GET 81 个地址，其中 76 个 HTTP 200、5 个 404。识别后排除报告/节目内容后，范围内为 79 个地址、38 个成功模板族。静态读取记录不等于各模板已完成浏览器首屏、中段与末段检验，不能笼统写“全部参考资源无失败、全部页面已视觉通过”。

当前页面检查应依次区分：业务事实与内容顺序、HTML / 路由 / 锚点、实际键盘与表单行为、同视口计算样式与截图。已有 [route-validation.md](route-validation.md) 只记录指定本地构建的 HTTP / HTML 结果；本轮 CSS 层顺序与白底修改之后，仍需主流程完成新构建和真实视口复核。没有直接对应参考模板的合规页，以及更换品牌、照片、内容和白底的页面，不应称为完整位图相同。
