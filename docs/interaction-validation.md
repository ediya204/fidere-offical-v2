# 本地真实交互验收

日期：2026-09-09。目标为 `http://127.0.0.1:3000` 的本地生产模式预览。使用独立 Chrome 标签页操作，未修改源码、未部署。所有结果来自实际点击、输入、原生表单状态、渲染 DOM 和截图，不以 HTTP 200 代替交互验收。

最终结论：指定表单、两组折叠项、三语详情路由、手机嵌套菜单、四组桌面菜单及章节高亮均完成实际操作；发现的菜单跨组点击与 Scope 高亮两项问题，经主代理修复后在最终预览重新通过。原生浏览器 Back 保留为未自动验证，站内返回链接已实际验证。

## 证据与版本边界

- 最终采用结果：[accepted-interaction-results.json](../artifacts/validation/accepted-interaction-results.json)。原始操作日志：[interaction-checks.json](../artifacts/validation/interaction-checks.json)。原始记录保留早期过快采样、构建切换和自动化尝试；不把其带有 Verified 字样的过程标签直接当成通过判定。
- 多宽度结果：[responsive-checks.json](../artifacts/validation/responsive-checks.json)。五个宽度各检查五页，共 25 次实际加载。
- 本轮开始时发现 Contact 继承 `rgb(248,247,243)` 背景。主代理修复 CSS layer 顺序并重建后，重新加载已确认 `rgb(255,255,255)`。`final-*` 截图为白底修复后的证据；早期截图保留作过程记录，不用于最终视觉结论。
- 25 次宽度检查发生在白底修复后的构建；随后追加的章节导航修复、关联服务白底与移动头部占位调整另行针对验收。不能把旧构建测试自动扩展成后续所有改动已通过。
- 默认桌面为 `1846 × 1031`。临时视口仅用于独立 QA 标签页，已恢复自然视口。390/768/991/1100/1440 的抽样统一高 `844px`，与主代理的其他截图高度可能不同。
- 菜单截图使用 `tab.screenshot()` 默认捕获。曾复现传入显式 clip 后菜单变为关闭，而默认截图能保留打开状态；这是记录到的工具行为，不能把受影响截图当作菜单未渲染的证据。

## 已完成操作

| 项目 | 实际操作与结果 | 证据 |
| --- | --- | --- |
| Contact 空提交 | 在 `/contact?interest=private-trust` 点击 Prepare enquiry；四个必填字段 `valueMissing=true`，焦点落在 name，原生提示要求填写，没有生成草稿 | 日志 `Final empty contact submission` |
| Contact 有效草稿 | 输入 `Design QA`、`design-qa@example.test`、Private Client，以及超过 10 字符的纯测试留言；点击生成后出现可审阅草稿 | [白底草稿截图](../artifacts/validation/final-contact-draft.png) |
| 草稿收件人与兴趣上下文 | 只读取 mailto：收件人为 `info@fideretrust.com`；subject 含 `Private Client — private trust`；页面 URL 保留 `?interest=private-trust`。interest 被转换为邮件主题上下文，不是往 mailto 添加一个错误的独立 interest 参数 | 日志 `Final prepared contact draft` |
| 修改后草稿失效 | 将 Name 改为 `Design QA revised` 后，状态区及带 subject/body 的 mailto 均移除 | 日志 `Final prepared draft clears on edit` |
| Funds 折叠项互斥 | `details[name="fund-reading"]` 初始 `[true,false,false]`，点第二项变 `[false,true,false]`，点第三项变 `[false,false,true]` | [新构建第三项展开](../artifacts/validation/final-funds-third-open.png)，完整状态在日志 |
| Tax Compliance 折叠项互斥 | `details[name="service-scope"]` 按初始第一项、第二项、第三项依次操作，同样每次只有一项 open。页面另有章节导航 details，不混入该组计数 | [新构建第三项展开](../artifacts/validation/final-tax-third-open.png) |
| 三级 URL 三语切换 | 在 Private Trust 详情逐步切换 EN → 繁 → 简 → EN；稳定结果分别为 `/solutions/private-trust`、`/zh-hant/solutions/private-trust`、`/zh-hans/solutions/private-trust`，同时核对 H1 与 html lang | 日志 `Verified language…` 与 `Confirmed Simplified to EN with visible pointer click` |
| 手机嵌套导航 | 390px 打开 modal 菜单 → 展开 Solutions → 点击 Tax Compliance；打开时 dialog=true 且 body overflow=hidden，跳转后 dialog=false、overflow 恢复空值 | [白底嵌套菜单](../artifacts/validation/final-mobile-nested.png)，日志 `Final mobile nested…` |
| 手机头部 | 最新附加构建中，390px 实测 header 高 `95px` | 日志 `Final mobile nested open` |
| 站内返回 | Private Trust 的 View all solutions 经实际指针点击后到达 `/solutions`，H1 变为 Trust & Fiduciary Solutions | 日志 `Final confirmed in-page return` |

测试没有激活 Open email draft，没有发送邮件，没有点击 Copy enquiry，没有写入用户剪贴板，也没有调用外部提交端点。草稿是本地页面生成；该结果不是邮件送达验收。

## 桌面菜单与章节导航：复核记录

四组桌面菜单均有实际到达的子页：About → Who We Are、Solutions → Private Trust、Wealth Management → Funds、Compliance → Client Due Diligence。已检查可见面板、真实链接、Escape 关闭及焦点回到对应按钮。白底修复后的正常展开示例见 [Solutions 菜单](../artifacts/validation/final-menu-natural.png)。

验收中发现了两项边界情况，已交主代理修复。以下保留修复前证据：

1. **Escape 后切另一组菜单**：About 打开 → Escape，焦点留在 About → 点击 Solutions 箭头，面板最后为 hidden；再点一次才打开。使用实际坐标也复现。只读源码显示旧菜单 onBlur 无条件清理共享 hover 标记，可能影响新菜单点击。日志 `Final pointer menu open and Escape` 保存该失败序列。
2. **Scope 落点与当前章节不一致**：Private Trust 点 Scope 后稳定 URL 为 `#scope`，`scrollY=1948`，scope 顶部为 `170.5625px`，但 aria-current 仍为 Overview。此时 header 已隐藏，`--header-offset=0px`，章节导航高 `52.09375px`，html scroll-padding-top=`74px`。实际滚回 `scrollY=0` 后，Overview 高亮正确。日志 `SectionNav offset diagnostic` 记录完整尺寸。

主代理完成修复后，在最终本地预览（运行 session `60252`）重新加载，采用相同顺序复验：

- **四组菜单修复通过**：About → Escape → Solutions → Escape → Wealth Management → Escape → Compliance → Escape。每组都一次打开，`hidden=false`；面板宽 `1831px`，高约 `307.36px`（Compliance 为 `328.95px`）。每次 Escape 后 `hidden=true`，焦点回到对应的 `topic-menu-*` 按钮。日志 `Repaired menu cross-topic after Escape`；截图：[About](../artifacts/validation/repaired-menu-about.png)、[Solutions](../artifacts/validation/repaired-menu-solutions.png)、[Wealth](../artifacts/validation/repaired-menu-wealth-management.png)、[Compliance](../artifacts/validation/repaired-menu-compliance.png)。
- **章节高亮修复通过**：同样点击 Scope，稳定后 `scrollY=1948`、scope 顶部 `170.5625px`，两处 aria-current 均为 `02Scope`；再实际滚到 `scrollY=0`，两处均恢复 `01Overview`。日志 `Repaired SectionNav Scope` 与 `Repaired SectionNav scroll top`；[Scope 已选截图](../artifacts/validation/repaired-scope-active.png)。

构建切换期间曾观察到一次正文回退 Times / H1 32px 的过渡页面；其点击与样式均排除，不据此提出最终产品缺陷。最终修复复验时，已再次确认白底及预期字号。

## 响应式抽样

页面：`/about`、`/solutions`、`/solutions/private-trust`、`/compliance`、`/contact`。宽度：390、768、991、1100、1440px；高度均为 844px。

25 次加载中，body 均为纯白；页面无横向滚动溢出；扫描 `main` 内 h1/h2/h3/p/a/summary，没有发现文字元素超出左右边界或内部横向溢出。H1 和前两段正文均具备非零尺寸，且 computed visibility 为 visible。桌面浏览器滚动条占 15px，因此部分 `documentWidth = innerWidth - 15`，不是布局缺列。

| 页面 | 390px H1 字号 / 行高 | 1440px H1 字号 / 行高 |
| --- | --- | --- |
| About | `34.3396 / 39.4906px` | `64 / 73.6px` |
| Solutions | `34.3396 / 39.4906px` | `50 / 57.5px` |
| Private Trust | `45.7862 / 57.2327px` | `48 / 60px` |
| Compliance | `34.3396 / 39.4906px` | `48 / 55.2px` |
| Contact | `34.3396 / 39.4906px` | `48 / 55.2px` |

代表截图：[390px Private Trust](../artifacts/validation/responsive-390-solutions-private-trust.png)、[1440px Private Trust](../artifacts/validation/responsive-1440-solutions-private-trust.png)、[390px Contact](../artifacts/validation/responsive-390-contact.png)、[1440px Contact](../artifacts/validation/responsive-1440-contact.png)。其他页面同目录按 `responsive-宽度-路由.png` 命名。

这些检查证明抽样页面的尺寸、可见性和横向边界；没有声称全站每个状态都完成逐像素比对或 WCAG 对比度认证。

## 未验证边界

- 原生浏览器 Back 没有完成自动验收。一次页面键盘快捷键尝试只改变滚动，没有路由返回，明确不算通过。主代理已确认可保留这一边界；已通过的站内返回链接与原生历史返回是不同功能。
- 未验证邮件客户端启动、发送、送达；没有后端提交验收。
- 没有重新运行 build 或 lint；该项由主代理负责。此文件的结论仅来自独立浏览器交互和渲染。
