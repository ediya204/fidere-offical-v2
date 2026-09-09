# FIDERE：按阅读任务选择内页结构

2026-09-09。本文是只读内容与结构分析，不代表页面已按建议修改或通过浏览器验收。优先级为：用户最新的**全站白底**要求 → FIDERE 已核实内容 → 参考站的阅读方式与模块。不能用同名页面建立一对一模板映射。

本轮核对了 `src/lib/{site,solutions,wealth-topics,about-topics,compliance-topics,insights}.ts` 及相应正文组件，并直接复核下表十份公开 HTML。较广页面关系取自 [reference-architecture.md](reference-architecture.md)；业务事实边界取自 [content-sources.md](content-sources.md)。`design-system.md` 中首稿字体、深色底及“没有 Insights”记录已被当前字体、白底要求及三篇原创指南取代，不作为本轮实施依据。

## 结构证据与可以迁移的部分

新抓取原文位于 `artifacts/reference/full-audit/`，URL、HTTP 状态、原文文件与 SHA-256 对照在其 `manifest.json`。旧原文位于 `artifacts/reference/resource-audit/`。以下是 DOM/公开 CSS 证据，不是计算样式或已验证的可见状态。

| 参考页 | 实际结构证据 | 对 FIDERE 有用的阅读方法 |
| --- | --- | --- |
| [Wealth Management](https://www.lighthouse-canton.com/our-businesses/wealth-management)；旧 `wealth-management.html` | 身份选择后再按需求进入能力；有桌面/移动副本、服务解释与展开内容。 | 先帮助客户找到需求，再决定深入哪项服务；不把身份、页内章节和独立页面混为一种导航。 |
| [Private Market Funds](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds)；`42a80c6763bf2c05.html` | 产品索引、逐项解释、详情入口和关联内容；`.product-info_left-wrap` / `.product-info_right-wrap` 为非对称两区。 | 适合 **Solutions 总览的服务集合**：分组标签、服务名、简述、真实详情链接。 |
| [Public Market Funds](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds)；`42fd493196099f2c.html` | 较少产品仍采用逐项内容段，而非自动填满等宽卡片；策略与集合有反向链接。 | 条目数量决定篇幅；详情可以返回父级及相邻主题，不必制造筛选器或更多项目。 |
| [Venture Debt](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund)；`3be78393439f0409.html` | About、组合公司、投资理由、机会、团队、报告各自承担不同内容职责；部分统计容器带 `hide`。 | 详情应根据证据拆分章节。FIDERE 可用职责、实际安排、限制替代这些章节，不能改名复制业绩/组合/报告模块。 |
| [Beacon Global](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global)；`29530419aa94cb45.html` | About 后解释双策略运作，再说明投资理由、团队和基金咨询。 | 先解释“如何工作”再提供下一步；它的策略说明不是通用三张能力卡。 |
| [Global Indian](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice)；`bf3e5a89055702c0.html` | 跨境情境、机构应对、2×2 编号支柱、两个资金方向、团队、三个客群、联系。 | **Family Office / Global Markets** 可借情境和相互关系的解释方式。双向资金业务、NRI/OCI、GIFT City 和相关资格属于参考站事实，不迁移。 |
| [Technology and Innovation](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation)；`425b9e8c7e633e9b.html` | 长论点与说明分栏；`.tech-list_wrap` 为三段纵向图文与连线，随后另起投资机会论述。 | **Our Approach / Cash Management** 可借“主张旁的连续步骤”，将图标换为步骤编号。数字平台、自动组合、实时银行信息不属于可借内容。 |
| [About](https://www.lighthouse-canton.com/cn-s/about)；旧 `about.html` | 机构陈述、章节索引、年度历程、理念、寄语和人物详情；长短文本密度不同。 | 机构说明、工作方法、治理分别组织；缺少事实的时间线、创始人寄语和团队部分应省略。 |
| [Contact](https://www.lighthouse-canton.com/contact)；`99e98cb8a977df75.html` | `get-in-touch` 与 `our-locations` 两个明确目的，询问分类、表单及办公室资料。 | 把“我要询问”和“我要找联系方式”做成直接路径；FIDERE 只有一个已核实香港办公室。 |
| [Advisory and Capital Solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions)；旧同名 HTML | 简短专题入口、方法、差异、服务、交易案例、地区、专家及联系。 | 可借专题标题/说明并置及具体服务的行动入口；不能让所有详情的正文都复用它的证明链条。 |

主 CSS `lighthouse-canton.webflow.shared.081a2ff20.min.css` 的特殊模块进一步说明：集合页左/右区声明为 **39vw/61vw**，左区存在 sticky；`service-pillars_grid` 是无间隙的 **2×2 细线网格**；科技列表有 **1px 纵线、3rem 图形、1.75rem 标题**。这些是源样式声明，不能取代对应视口的渲染验收。源码中的 `section-home-what-we-do hide`、重复 ID、弹窗和响应式副本均不能当成需要复制的可见章节。

## 五类一级页面的内容顺序

下列为结构建议；中文描述不增加业务承诺，实际文案继续使用现有三语数据。

| FIDERE 页面与读者任务 | 内容顺序 | 模块选择及需要保留的差异 |
| --- | --- | --- |
| **Solutions：哪项服务与我的需要有关？** | 简短业务说明 → 三个真实服务分组 → 各项服务的名称/范围/详情 → 资格与服务条件 → 带服务意向的联系。 | 以基金集合的“逐项解释与下钻”组织十项服务；分组说明可在左、服务正文在右。保持三个分组及真实详情路由，不复刻基金产品、收益或机构客户筛选。 |
| **Wealth：有哪些渠道，如何纳入安排？** | 资产/账户/信托的关系 → Global Markets、Funds、Fixed Income、Cash 四个入口 → 已披露工具与条件 → 风险/费用 → 咨询。 | 采用能力目录和不同内容长度的行式入口。四项是解释主题，并非四个已获授权的管理策略或自营产品。不能把同名 LC Wealth 的每个服务都搬入。 |
| **Compliance：为什么需要这些资料，我应了解什么？** | 政策摘要及完整政策入口 → 七项框架目录 → 简短解释及五个教育主题下钻 → 监管身份与披露。 | 长文阅读区+小目录最合适；政策版本与来源必须可见。没有直接对应的 LC 合规营销模板，采用机构章节与文章阅读规律组合，明确是适配设计。 |
| **Contact：如何联系、如何准备询问？** | 直接邮箱/电话与香港地址 → 简短询问表单 → 隐私说明 → 邮件草稿/用户自行发送 → 地址补充或独立照片。 | 联系方式和表单是主内容，不让大型口号或照片推迟实际操作。保留当前草稿机制，不虚构送达、CRM 接入、多个办公室或处理时限。 |
| **About：FIDERE 是谁，承担什么角色？** | 香港机构身份 → 服务对象与受托/管理角色 → 工作方法 → 原则 → 治理与监管披露 → 三个机构子页/相关服务。 | 借 About 的机构章节与非对称陈述，保留真实信息密度。没有核实历史或人物时，保持更短页面，不用虚构证明填满参考版式。 |

主菜单仍为 About → Solutions → Wealth Management → Compliance → Insights → Contact。一级菜单负责去向、mega menu 负责主题选择、页内目录负责当前页定位；移动端保留这三种不同层级。英文路径无语言前缀，繁体中文与阿拉伯语路径保留对应语言；简体中文当前停用，历史路径临时转到繁体中文同页。

## 详情页必须因内容而异

当前 `solution-bodies.tsx`、`wealth-topics.tsx`、`compliance-topics.tsx`、`about-topics.tsx` 已有以下差异，应在白底改版中保留。共用字体、间距、面包屑和操作样式，不意味着统一正文骨架。

| 内容 | 应保留的顺序与形态 | 原因 |
| --- | --- | --- |
| Private Trust | 目的 → 委托人/受托人/受益人关系 → 具体管理职责 → 适用讨论与限制。 | 读者需要先区分角色；关系图不等于基金组合图，受益人与信托目的不能混同。 |
| Family Office | 家族情境 → 管理、治理、世代延续的分栏/编号支柱 → 跨地域协调 → 范围与相关服务。 | 类似 Global Indian 的复杂情境，但只保留 FIDERE 已披露的家族服务与司法管辖区考虑。 |
| Corporate Trust / Trustee / Company Formation | 所有权及实体背景 → 委任和职责 → 持续管理/所需资料 → CDD 与范围。 | 公司、职位和责任是核心，不替换为证券发行、融资交易案例或资本市场受托业务。 |
| Succession / Transaction / Equity & Asset Custody | 传承保留意愿与延续章节；交易/托管保留资料、授权、执行条件及记录次序。 | 时间与责任不同：传承不是付款步骤，托管不是已完成交易确认。 |
| Funds | 共同基金与 ETF 两栏 → 投资范围、进入退出、费用记录三个阅读问题 → 信托管理角色 → 资格及风险。 | 当前没有具名基金目录。**本页必须与 LC 基金集合及基金详情明显不同**，不出现基金筛选、净值图、投资组合、募集或报告下载占位。 |
| Global Markets / Fixed Income | 前者保留市场、机构、信托三个相连层面；后者保留发行人、期限、流动性比较及持有记录。 | 一个解释关系，一个解释不同考量；不能都变成“优势”卡片，也不能将市场名称变成办公室或牌照。 |
| Cash Management / Our Approach | 左侧目的/背景，右侧纵向编号步骤；条件和持续记录收尾。 | 可借科技页的连续图文节奏，不能将步骤连线画成自动化系统、即时支付能力或承诺办理时限。 |
| CDD / Source of Funds / Screening / Monitoring | CDD 用个人/企业资料目录；资金与财富来源并列比较；筛查用范围+风险接纳侧注；持续监察用变化触发事项列表。 | 文档、概念、判断和事件是四种任务；全部改成相同折叠卡会损失读者需要的区分。 |
| Who We Are / Governance | 身份页以机构与客户关系为主；治理页以公司身份、TCSP 披露和持续职责为主。 | 监管信息是可追溯披露，不是装饰性的资格徽章，也不应被所有页面的相同大图取代。 |

详情末尾应连接读者的下一步：服务页保留意向参数联系；政策主题链接完整政策；相关主题给出确定的父级返回；原创指南继续阅读。不必每页重复同一个大型联系口号。

## 白底转译与验收重点

1. **结构性底色统一白色。** Header、mega menu、章节条、正文、强调段、CTA 和 Footer 都以白色为底、深色文字与细线区分。原红色/黑色块的分组作用由留白、边界、编号及排版承担，不替换成大面积海军蓝或浅灰色块。
2. **保留完整摄影构图。** 使用已有来源的 FIDERE 照片和原标志。About、业务入口、服务详情将标题保留在完整 Hero 图内，恢复摄影、标题、目录的空间关系；白底用于导航、正文与页尾。此前独立白色标题板和详情窄图条改变了比例，已撤回，见 [比例修正验收](proportion-validation.md)。
3. **保留有意义的几何差异。** 机构陈述的非对称双栏、目录的窄解释/宽内容、2×2 支柱、纵向步骤、政策阅读宽度及资料定义列表，各自保留。全白不应把它们都压成同一宽度的三卡网格。
4. **统一当前字体，分别控制层级。** Public Sans 负责正文、目录和标签，Frank Ruhl Libre 负责展示标题，中文采用现有回退字体。主标题、专题标题和正文标题不使用同一字号；不以无来源的团队/数字/引言制造视觉层级。
5. **手机按阅读任务重排。** 左说明先于右细节；比较项、步骤、资料目录保持顺序。只在信息确实可选读时折叠，资格/风险/政策入口不能藏在默认关闭区域。长内容不能被固定高度裁掉。
6. **事实与功能差异必须保留。** 不移植 LC 团队、AUM、组合、收益、平台功能、全球牌照或基金资格；不把 FIDERE TCSP 披露扩为证券/银行权限。当前 Contact 草稿不是送达；原创 Insights 不是历史研究稿。参考错误链接、重复锚点及 history-only 返回不需要复刻。

因此，验收应同时检查“相同阅读模块的字体/比例/间距”与“FIDERE 必须不同的事实、功能及内容顺序”。本轮只形成上述依据；没有创建浏览器、修改产品代码或宣称新参考页面已经完成视口对比。
