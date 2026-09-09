# Lighthouse Canton：信息架构与内容模板研究

研究日期：2026-09-09。范围：官方站点的页面层级、链接关系、标题与正文组织、章节导航、返回路径。使用官网公开 HTML、锚点、链接和内联脚本；未在本轮操作视觉浏览器，也未提交表单。桌面/移动视觉、动画和实际展开状态由主任务另行观察。

本文的“观察”指直接读取到的页面结构或链接；“推导”指由结构归纳出的设计方法；“建议”专指 FIDERE 适配，不代表 Lighthouse 原有功能。网页隐藏的导航、弹窗、响应式副本也在 HTML 内，不能把源码里的所有重复标题当作用户可见章节。

## 1. 核心结论

**观察：参考站采用两条同时存在的导航路线。** 一条从“我是谁”进入专门客户入口；另一条从机构导航直接进入业务、机构介绍、内容或联系。首页不是把所有业务往下排列的唯一长页面。

**推导：可以借鉴的是“入口判断—业务总览—能力解释—具体服务—联系”的递进。** 顶级页面承担定位，二级页面负责范围与选择，详情页负责解释与行动。页面深度并不等于重复一套 Hero 和卡片。

FIDERE 应保持原业务内容来源，不能转用 Lighthouse 的基金、业务规模、团队、监管覆盖或交易案例。

## 2. 一级与二级页面树

以下为实际菜单、页面内链接与路由读取结果。`Our Businesses` 是导航分组；未发现必须先经过统一 `/our-businesses` 总览页。

```text
首页 / 及 /cn-s
├─ 客户身份入口
│  ├─ Corporate / Family Office / Individual
│  │  ├─ /corporates-familyoffices-individuals
│  │  └─ /cn-s/homepage-families-individuals
│  ├─ /insitutional-investor
│  └─ /startupfounder-entrepreneur
├─ About /about 或 /cn-s/about
│  └─ 页内：简介 / History / Purpose / Philosophy / Founder / Team
├─ Our Businesses（菜单分组）
│  ├─ Wealth Management
│  │  ├─ persona tabs + 能力锚点
│  │  ├─ Advisory and Capital Solutions
│  │  └─ Global Indian
│  ├─ Asset Management
│  │  ├─ 策略章节与基金链接
│  │  ├─ Private Market Funds → 各基金详情
│  │  └─ Public Market Funds → 各基金详情
│  ├─ Founders’ Ecosystem
│  └─ Technology and Innovation
├─ Our Impact
├─ Insights
│  ├─ Wealth & Markets
│  ├─ News & Updates
│  ├─ IDEAs: Views & Insights
│  ├─ IDEAs: Simplified
│  ├─ Podcasts
│  ├─ Events & Webinars
│  └─ Outlook 2026
│     └─ 文章 / 新闻 / 活动 / 播客 / 报告详情
├─ Careers
│  └─ 页内：Life / Employees / Values
└─ Contact
   └─ 页内：Get in Touch / Locations
```

### 首页及客户入口

[简体入口](https://www.lighthouse-canton.com/cn-s) 与 [英文入口](https://www.lighthouse-canton.com/)：一个主要机构标题、三类身份入口、语言与地区选择。源码含视频元素。简体首页的业务深层链接多数进入英文站，并具备“该内容仅提供英文”的提示文案。

[客户首页](https://www.lighthouse-canton.com/cn-s/homepage-families-individuals)：客户定位标题 → 利益一致性说明 → 机构证明信息 → 三组服务方式说明 → 企业与家办/个人的业务入口 → 最新内容 → 订阅 → 联系 → 大型导航页脚。[英文同类入口](https://www.lighthouse-canton.com/corporates-familyoffices-individuals) 采用同一内容序列。

[机构投资者入口](https://www.lighthouse-canton.com/insitutional-investor)：投资策略定位 → 机构说明 → 三个原则/能力主题 → 私募/公募两条下钻入口 → 资讯/订阅/联系。[创始人入口](https://www.lighthouse-canton.com/startupfounder-entrepreneur) 则以企业生命周期为组织主线，导向 Early Stage 与 Growth。三个客户入口共用框架，但中段任务与下一级业务选择不同。

**建议：** FIDERE 的 Private Client / Family Office / Corporate Client 至少应导向相关内容锚点或对应服务状态，并显示明确的后续服务；不能只是切换一句泛泛介绍。

## 3. About 是章节型机构介绍

[简体 About](https://www.lighthouse-canton.com/cn-s/about) 与 [英文 About](https://www.lighthouse-canton.com/about) 的顺序：机构标题 → 较大的定位陈述 → 简介 → 年度历程 → 愿景/使命 → 投资理念 → 创始人寄语 → 团队。

真实页内 ID：`about-us`、`history`、`purpose`、`philosophy`、`s-founder`、`s-team`。团队以姓名、角色、地区、职能和较长履历组织；读取到的详情在本页 HTML 中，不必推断为独立人物页。历程有年份选择内容。

页面内容不是只有一句标题加一段概括：定位陈述非常简短，理念/寄语则允许较长正文；正文有展开/收起文案。短与长由内容职责决定。

**建议：** FIDERE 可借鉴“页内章节导航 + 机构陈述 + 职责 + 原则 + 治理”，但不能为了填满模板而补写创始人、历史年份或团队成员。

## 4. Wealth Management：身份和需求双重索引

[业务总览](https://www.lighthouse-canton.com/our-businesses/wealth-management) 依次提供：业务归属标签 → H1 业务名称 → 简短价值陈述 → 企业、家办/个人、Global Indians 选择 → 业务说明 → 需求类别索引 → 细项服务。

家办/个人链接实际为 `/our-businesses/wealth-management?tab=tab_link--2#hero`；第三身份使用 `tab_link--3`。此处身份是可深链接的页面状态。

企业需求类别包括 Investment Advisory、Portfolio Management、Business & Family Solutions、Financing Solutions；个人类别较少。每个类别先有简短陈述和解释，再进入若干能力名称、说明和联系动作。源码有桌面 `s-1-1` 等与移动 `mob-s-1-1` 等两套锚点，证明不同终端至少采用了不同内容容器，具体交互仍须视觉检查。

### 两种专门服务页面

[Advisory and Capital Solutions](https://www.lighthouse-canton.com/our-businesses/wealth-management/advisory-and-capital-solutions)：归属标签、双行主张、短导语、联系和跳至服务；随后是 Approach、四项编号差异、两项能力、支持理由、交易案例、地区、专家、联系。它比旧业务页更像独立专题，不能用此页的案例/人数/规模为 FIDERE 填充。

[Global Indian](https://www.lighthouse-canton.com/our-businesses/wealth-management/global-indian-business-practice)：客户问题 → 机构应对 → 四个服务支柱 → 两个资金方向 → 团队 → 联系。每个支柱采用编号、服务名、较短陈述、解释段，信息层级明确。

**推导：** 服务正文的可借鉴骨架为“客户情境 → 服务职责 → 实际安排 → 下一步”。标题承担意思，类别标签承担导航，正文负责边界和细节。

## 5. Asset Management：从策略到集合再到详情

[资产管理总览](https://www.lighthouse-canton.com/our-businesses/asset-management)：业务名、定位陈述、策略入口、机构说明；之后按策略逐段解释，每段连接对应基金。另有机构定制安排主题。策略有独立 hash，例如 `#indian-equities`、`#global-macro`。

[私募集合](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds) 与 [公募集合](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds)：集合 H1 → 产品索引/锚点 → 策略标签 → 产品标题 → 一段介绍 → View Fund → 关联内容。集合页的策略标签反链资产管理总览的具体策略，不只是单向深挖。

实际私募列表连接七个详情：Venture Debt、Nueva Momentum、Nueva、Luminere Credit、Supply Chain Credit、Special Credit Opportunities、Life Sciences Real Estate。公募连接 SageOne India Growth 与 LC Beacon Global。

### 抽样详情模板

[Venture Debt 详情](https://www.lighthouse-canton.com/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund)：集合归属标签 → 基金 H1 → 一句定位 → About → 证明信息 → 可按行业筛选的组合 → 投资理由 → 市场机会 → 相关洞察 → 专家 → 报告下载。

[Beacon Global 详情](https://www.lighthouse-canton.com/our-businesses/asset-management/public-market-funds/lc-beacon-global)：集合归属 → 基金 H1 → 一句策略说明 → About → Approach → Features → Team → 具体基金咨询 CTA。

**观察：** 这两个详情顶部集合名称是普通文本标签，并非完整可点击 breadcrumb；未读取到标准“首页 / 业务 / 集合 / 当前项”的面包屑。父级仍可从全局导航和页脚进入。不能把 URL 的深度误报成已存在的面包屑 UI。

**建议：** FIDERE 可采用服务集合 → 服务详情的内容深度，但其详情应解释受托职责、适用情况、安排步骤和限制，不应制造基金、投资理由、客户组合或收益指标。建议补充明确可点击的返回 Solutions 链接，优于仅依赖浏览器历史。

## 6. Insights：三层出版结构

[Insights 首页](https://www.lighthouse-canton.com/insights)：顶部精选内容 → 类目导航 → 最新投资洞察 → 报告入口和订阅 → 新闻 → 观点 → 播客。卡片信息具有类别、标题、日期，播客还提供摘要。标题可较长，因为该页面的任务是选择阅读内容。

七个类目均实际访问：

- [Wealth & Markets](https://www.lighthouse-canton.com/insights-category/wealth-and-markets)
- [News & Updates](https://www.lighthouse-canton.com/insights-category/news)
- [Views & Insights](https://www.lighthouse-canton.com/insights-category/ideas)
- [IDEAs: Simplified](https://www.lighthouse-canton.com/insights-category/ideas-simplified)
- [Podcasts](https://www.lighthouse-canton.com/insights-category/podcasts)
- [Events & Webinars](https://www.lighthouse-canton.com/insights-category/webinars-events)
- [Outlook 2026](https://www.lighthouse-canton.com/insights-category/outlook-2026)

多数类目复用相同精选内容头部与分类条，再显示对应列表。Events 类目另按 upcoming、past events、past/on-demand webinars 分组。没有证据支持把每个类别理解成完全独立的视觉系统。

[投资洞察详情](https://www.lighthouse-canton.com/insights/what-do-fcnr-and-us-debt-have-in-common-cio-insights)：Back → 类别 → 日期 → H1 → 作者与角色 → 摘要 → 分段正文/H2/H3 → 来源 → 订阅 → 关联文章/View All。

[新闻详情](https://www.lighthouse-canton.com/insights/lc-luminere-credit-fund-launch) 使用相同出版外壳，但正文是发布导语和主题小节；[投资指南详情](https://www.lighthouse-canton.com/insights/investment-guide) 在同一外壳内组织报告主题和章节。

**确认的返回实现：** 文章 Back 链接 href 为 `#`，内联脚本绑定 `parent.history.back()`，无历史时隐藏。它不是固定返回 `/insights` 的链接；关联区的 View All 才提供内容中心路径。这是源码确认，未声称浏览器回退已实点。

**建议：** FIDERE 现有来源没有可持续文章库时，不能虚构 Insights。合规内容适合用类似“库首页 → 主题 → 详细章节”的组织方式，类别、日期与版本应来自真实政策。

## 7. 其他一级页面与联系路径

[Founders’ Ecosystem](https://www.lighthouse-canton.com/our-businesses/founders-ecosystem) 按生命周期组织能力，内容标签、业务问题标题和说明相互配合。[Technology and Innovation](https://www.lighthouse-canton.com/our-businesses/technology-and-innovation) 以服务体验和运营能力分段；它不意味着 FIDERE 需要科技业务栏目。

[Our Impact](https://www.lighthouse-canton.com/our-impact) 是责任投资及机构影响的解释页，接内容入口。[Careers](https://www.lighthouse-canton.com/careers) 是文化介绍 → 员工内容 → 系列内容 → 价值观 → 人才行动，与客户服务页面的任务明显不同。

[英文 Contact](https://www.lighthouse-canton.com/contact)：H1 → Get in Touch / Locations 两个页内入口 → 联系目的说明 → 询问类别 → 个人和公司资料 → 信息 → 隐私说明 → 地区办公室。类别直接帮助分流。字段包含 first/last name、email、phone、job title、company、message。

[简体 Contact](https://www.lighthouse-canton.com/cn-s/contact) 内容较简：联系标题、说明、询问分类、表单；footer 的办公室链接仍指英文 `/contact#our-locations`。这是实读差异，不应假设所有语言内容完全一致。

表单提交未测试，隐含成功/错误文案仅来自 HTML。办公室、人员、电话等参考站事实与 FIDERE 无关，均不得迁移。

## 8. 全站返回、连接与页脚

观察到的连接方式包括：全局机构菜单、客户身份菜单、页内锚点、persona query 参数、详情父级归属文本、集合到策略的反链、文章历史返回、相关内容、联系 CTA、顶部返回以及大型目录页脚。

页脚是一份精简站点目录：About 的章节、业务及基金集合、Careers 章节、Impact、Insights、Contact/Offices，再附隐私、免责声明、版权和监管说明。它承担再次导航，不只是版权附录。

**推导：** 页面底部存在实用的下一步，比每页放相同口号更重要。业务页联系，文章页继续阅读，机构页去相关章节，集合页去详情。

## 9. 不应复制的参考站问题

以下仅记录源码和 HTTP 证据，避免照搬其缺陷：

- 财富页链接的 `/our-businesses/wealth-management/lc-global-select-sp` 本次返回 HTTP 404。
- 多个 footer 的 Technology & Innovation 链接实际指向 Founders’ Ecosystem；主菜单则指向正确科技页。
- About footer 的 Founder’s Note 指 `#s-note`，本轮读取到的实际章节 ID 是 `s-founder`；主菜单采用后者。
- 同一中文 About 中多个 `philosophy` ID 重复；另有大量桌面/移动副本。FIDERE 应保持唯一 ID 和合理 heading 层级。
- 部分集合与详情的相关内容链接 href 为 `#`；并非每个看起来像入口的元素都有可用目标。
- 文章类目页面沿用相同精选标题作为 H1；不能据此把所有页的主标题做成一条固定促销文案。
- 源码包含长免责声明和状态弹窗；它们不是普通正文节奏，不应混入设计版式分析。

## 10. 研究覆盖与证据边界

本文链接的所有页面均直接读取官方响应，除明确标注的 Global Select SP 404 外均为 HTTP 200。另实际读取 [官方 sitemap](https://www.lighthouse-canton.com/sitemap.xml)，其当前含 643 个 URL，含语言、地区和大量历史文章；本文覆盖主要导航树、全部七个洞察类目、两种基金详情及三种内容详情，不声称逐篇读完所有历史文章。

页面实际可见顺序、固定位置、布局宽度、字体、摄影比例、hover/scroll 动画、移动全屏菜单、键盘和触屏行为需要浏览器验收，不能仅由源码断言。页面文案在本文只用于识别结构，FIDERE 实现必须重新撰写并受 `content-sources.md` 的事实边界约束。
