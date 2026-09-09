# 阿拉伯语国际化

2026-09-09，本地预览：<http://127.0.0.1:3000/ar>。

## 实现范围

- 增加 `ar` 语言路由及 `العربية` 切换入口。当前启用 English、繁体中文和阿拉伯语；简体中文已停用，历史 `/zh-hans` 地址临时转到对应繁体中文页面。
- 39 个阿拉伯语页面：主页、About 及子页、Solutions 及 10 个详情页、Wealth Management 及子页、Compliance 及子页、Insights 及 3 篇指南、Contact、Login、6 个法律页面。
- 759 条共享文案翻译，另有动态导航/表单与图片说明的显式阿拉伯语文案；无中文或英文静默回退。
- `lang="ar"`、`dir="rtl"`，共享 RTL 样式位于 `src/app/rtl.css`。保留原有白色页面背景、图片及品牌；调整方向性边框/间距、导航、页内目录、图文顺序及箭头。
- 字体：自托管 Noto Sans Arabic、Noto Naskh Arabic WOFF2。原始文件来自 Google Fonts 官方仓库，OFL 许可保存在 `src/fonts/`；原始来源和摘要见 `artifacts/arabic-i18n/font-sources.json`。其他语言不应用阿拉伯语字体。
- 语言切换保留 pathname 的业务路径、query 和 hash。页面 canonical、hreflang、Open Graph locale 和 sitemap 增加阿拉伯语。
- 查询表单翻译标签、选项、提示和草稿正文/主题，保持“用户自行发信”的原有流程。RTL 标签键盘操作已镜像，邮箱、电话和英文地址采用 LTR 混排。

## 文案边界

法律页导航、标题、内容概览和来源说明已翻译。原站归档的英文法律文件继续作为 `lang="en" dir="ltr"` 原文展示；这是与现有中英文站一致的处理，不能将阿拉伯语概览视作归档法律文本的完整译本。品牌、注册地址、牌照编号和坐标保留原值。未新增业务承诺、资质或数据。

字典使用现有英文源文案作为键。修改任何源文案或插入其中的公司资料后，需要同步更新翻译并运行覆盖验证；缺失翻译将导致构建失败，避免发布混合语言页面。可用 `text(locale, en, tc, sc, ar)` 处理动态或新增文案。

## 验证证据

- `npm run build`、`npm run lint` 通过；构建包含 TypeScript 校验。
- 当前三语构建结果：`node scripts/validate-arabic.mjs` 验证 759 条阿拉伯语词条、117/117 页面，其中 Arabic 39 页；sitemap 为 114 个 URL，每语言 38（排除登录页）。校验同时拒绝任何残留的 `/zh-hans` 预渲染页面或 hreflang/sitemap 入口。报告：`artifacts/arabic-i18n/validation.json`。
- 真实 Chrome 渲染检查：1440×1000 桌面、390×844 手机视口；对首页、方案目录、私人信托详情、合规、联系页额外检查 320/390/768/1440 宽度，共 20 个组合，无横向溢出。记录：`artifacts/arabic-i18n/responsive.json`。
- 桌面下拉菜单、手机二级目录、详情页目录锚点、RTL 标签 ArrowLeft 切换及焦点、语言往返保留查询参数和锚点通过。
- 查询草稿实测为阿拉伯语主题和正文，保留输入的测试邮箱；未发送邮件。手机空表单会阻止提交，4 个必填项处于无效状态，无草稿产生。
- 截图位于 `artifacts/arabic-i18n/screenshots/`，包含首页、目录、详情、正文、桌面/手机菜单、手机全页、页尾及表单。截图是浏览器渲染结果；视口模拟不等于真实手机设备测试。
- 浏览器记录出现扩展消息通道关闭错误；已验证页面和业务交互中未观察到 React 渲染错误。

## 当前边界

未知地址现由 `npm run cf:build` 在静态导出后生成统一品牌 404。页面按首段路径显示英文、繁中或阿拉伯语，保留真实 HTTP 404 与 `noindex, nofollow`，并在五秒后返回对应语言首页；用户可立即返回或取消。项目仍未启用实验性 `global-not-found`，因为它曾在本项目的多根布局下对不存在的 Insights slug 触发 NoFallbackError / 500。此项变更已在本地 Wrangler 及浏览器验证，尚未据此重新发布线上版本。

## 预览

- 首页：<http://127.0.0.1:3000/ar>
- 方案目录：<http://127.0.0.1:3000/ar/solutions>
- 私人信托：<http://127.0.0.1:3000/ar/solutions/private-trust>
- 联系：<http://127.0.0.1:3000/ar/contact>

此轮为本地实现和验证，未部署到线上。
