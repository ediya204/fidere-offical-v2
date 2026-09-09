# FIDERE 全站本地生产构建路由验收

> 历史记录：本页描述 2026-09-08 的英文、繁体中文、简体中文构建。当前本地配置已停用简体中文并启用阿拉伯语；以下数量和语言切换结果不代表当前源码验收。

验证时间：2026-09-08T19:04:15.816590+00:00（UTC）。对象：`http://127.0.0.1:3000`，Next.js production Build ID：`3lXoDtn4MPjfmyzzODKul`。

本记录覆盖并取代之前 66 页、旧 `/en` 为主路径的验收结果，以及中间版本的页面统计。仅进行本地 HTTP GET 与服务端 HTML 检查；没有操作浏览器、提交表单、发送邮件或请求外部链接。**HTTP 200 不等于菜单、滚动、表单或视觉交互通过。**

## 覆盖与结果

| 检查项 | 本轮结果 |
| --- | --- |
| 构建路由清单 | `prerender-manifest.json` 共 121 项：117 个内容/客户入口页 + `/_global-error`、`/_not-found`、`/robots.txt`、`/sitemap.xml`。 |
| Sitemap | 114 个唯一正式 URL；三语 alternate 全部对应，排除 3 个 Login。 |
| 内容页 | 117/117 HTTP 200，无跳转；英文、繁体、简体各 39 页。根 `/` 直接 200。 |
| 每页语义与元数据 | 恰好一个非空 H1、一个非空文档 title、一个非空 description；canonical、html lang、三语 hreflang 与 x-default 正确。 |
| 语言切换 | 三处语言控件共 1053 个链接；均保留当前完整内容路径，当前语言标识正确，目标均在本轮有效路由内。 |
| 站内链接 | 14667 次出现、147 个不同目标全部 200；其中 30 个含查询参数的 Contact 目标。 |
| 页内定位 | 567 次 hash 链接、429 个唯一目标锚点全部存在；117 页无重复 ID，ARIA 引用目标均存在。 |
| 菜单与页脚下钻 | 每页桌面 mega menu、手机菜单、Footer 都包含该语言全部 22 个业务/机构子页真实 URL；主菜单顺序为 About、Solutions、Wealth Management、Compliance、Insights、Contact。 |
| 图片 | `<img src/srcset>` 涉及的 7 个 public 原图文件均存在；原图与 66 个 Next Image 参数组合共 73 个响应全部 200 且为 image MIME。 |
| 兼容路径 | 48 例全部按预期永久 308 跳转到正常 200 的新路径，包括 `/en`、组合旧别名与查询参数保留。 |
| 无效路径 | 16 例最终均为 404，见下表。 |
| 发现问题 | **0**。 |

根 canonical/hreflang 的 `https://www.fideretrust.com` 与 Sitemap 的 `https://www.fideretrust.com/` 是同一根 URL，校验按 URL 语义归一化；不把序列化的尾斜杠区别记作错误。Footer 的 `#top` 为合法返回页首，不属于用 `/solutions#…` 代替服务详情。菜单与页脚没有后者。

## 117 页覆盖清单

表中路径列为英文正式路径；每行同时验证对应 `/zh-hant`、`/zh-hans` 路径（首页分别为 `/zh-hant`、`/zh-hans`）。英文不再使用 `/en` 前缀。全部页面均以直接 HTTP 请求访问，因而覆盖内页深链接/刷新时的服务端可用性；不是浏览器刷新行为的交互断言。

| 英文路径 | EN / 繁 / 简 HTTP | H1、元数据、语言、ID、链接 |
| --- | --- | --- |
| `/` | 200 / 200 / 200 | 通过 |
| `/about` | 200 / 200 / 200 | 通过 |
| `/about/governance` | 200 / 200 / 200 | 通过 |
| `/about/our-approach` | 200 / 200 / 200 | 通过 |
| `/about/who-we-are` | 200 / 200 / 200 | 通过 |
| `/compliance` | 200 / 200 / 200 | 通过 |
| `/compliance-kyc` | 200 / 200 / 200 | 通过 |
| `/compliance/aml-ctf` | 200 / 200 / 200 | 通过 |
| `/compliance/client-due-diligence` | 200 / 200 / 200 | 通过 |
| `/compliance/ongoing-monitoring` | 200 / 200 / 200 | 通过 |
| `/compliance/sanctions-screening` | 200 / 200 / 200 | 通过 |
| `/compliance/source-of-funds` | 200 / 200 / 200 | 通过 |
| `/contact` | 200 / 200 / 200 | 通过 |
| `/disclaimer` | 200 / 200 / 200 | 通过 |
| `/insights` | 200 / 200 / 200 | 通过 |
| `/insights/cross-border-administration` | 200 / 200 / 200 | 通过 |
| `/insights/preparing-for-due-diligence` | 200 / 200 / 200 | 通过 |
| `/insights/trust-governance-over-time` | 200 / 200 / 200 | 通过 |
| `/login` | 200 / 200 / 200 | 通过 |
| `/privacy` | 200 / 200 / 200 | 通过 |
| `/regulatory-status` | 200 / 200 / 200 | 通过 |
| `/risk-fees` | 200 / 200 / 200 | 通过 |
| `/solutions` | 200 / 200 / 200 | 通过 |
| `/solutions/company-formation` | 200 / 200 / 200 | 通过 |
| `/solutions/corporate-trust` | 200 / 200 / 200 | 通过 |
| `/solutions/equity-asset-custody` | 200 / 200 / 200 | 通过 |
| `/solutions/family-office` | 200 / 200 / 200 | 通过 |
| `/solutions/private-trust` | 200 / 200 / 200 | 通过 |
| `/solutions/regulatory-compliance` | 200 / 200 / 200 | 通过 |
| `/solutions/succession-planning` | 200 / 200 / 200 | 通过 |
| `/solutions/tax-compliance` | 200 / 200 / 200 | 通过 |
| `/solutions/transaction-support` | 200 / 200 / 200 | 通过 |
| `/solutions/trustee-directors` | 200 / 200 / 200 | 通过 |
| `/terms` | 200 / 200 / 200 | 通过 |
| `/wealth-management` | 200 / 200 / 200 | 通过 |
| `/wealth-management/cash-management` | 200 / 200 / 200 | 通过 |
| `/wealth-management/fixed-income` | 200 / 200 / 200 | 通过 |
| `/wealth-management/funds` | 200 / 200 / 200 | 通过 |
| `/wealth-management/global-markets` | 200 / 200 / 200 | 通过 |

每语 39 页由：首页 1、一级栏目 6、法律 6、About 子页 3、Solutions 子页 10、Wealth 子页 4、Compliance 子页 5、原创指南 3、Login 1 构成。相同繁简用词可能产生相同 title，校验要求的是每页唯一 title 标签与正确页面对应，不人为改写同义标题。

## 兼容重定向

全部 39 个 `/en` 对应路径均验证为 308 → 无语言前缀的同页 → 200，其中 `/en` → `/`。另外验证：

| 原路径 | 首次状态与 Location | 最终路径与状态 |
| --- | --- | --- |
| `/services` | 308 → `/solutions` | `/solutions` · 200 |
| `/asset-management` | 308 → `/wealth-management` | `/wealth-management` · 200 |
| `/solutions/equity-custody` | 308 → `/solutions/equity-asset-custody` | `/solutions/equity-asset-custody` · 200 |
| `/zh-hant/solutions/equity-custody` | 308 → `/zh-hant/solutions/equity-asset-custody` | `/zh-hant/solutions/equity-asset-custody` · 200 |
| `/zh-hans/solutions/equity-custody` | 308 → `/zh-hans/solutions/equity-asset-custody` | `/zh-hans/solutions/equity-asset-custody` · 200 |
| `/en/services` | 308 → `/services` | `/solutions` · 200 |
| `/en/asset-management` | 308 → `/asset-management` | `/wealth-management` · 200 |
| `/en/solutions/equity-custody` | 308 → `/solutions/equity-custody` | `/solutions/equity-asset-custody` · 200 |
| `/en/contact?interest=private-trust` | 308 → `/contact?interest=private-trust` | `/contact?interest=private-trust` · 200 |

`/en/services`、`/en/asset-management`、`/en/solutions/equity-custody` 经过两个明确的 308，最后进入相应正式页面。直接 `/solutions/equity-custody` 及繁简旧拼写也保留兼容；导航与 Sitemap 使用新拼写 `equity-asset-custody`。

## 无效路径

| 请求路径 | 最终 HTTP | 说明 |
| --- | --- | --- |
| `/fr` | 404 | 直接 404 |
| `/fr/about` | 404 | 直接 404 |
| `/fr/solutions/private-trust` | 404 | 直接 404 |
| `/unknown` | 404 | 直接 404 |
| `/about/unknown` | 404 | 直接 404 |
| `/wealth-management/unknown` | 404 | 直接 404 |
| `/compliance/unknown` | 404 | 直接 404 |
| `/insights/unknown` | 404 | 直接 404 |
| `/solutions/private-trust/extra` | 404 | 直接 404 |
| `/does-not-exist` | 404 | 直接 404 |
| `/solutions/does-not-exist` | 404 | 直接 404 |
| `/zh-hant/does-not-exist` | 404 | 直接 404 |
| `/zh-hant/solutions/does-not-exist` | 404 | 直接 404 |
| `/zh-hans/does-not-exist` | 404 | 直接 404 |
| `/zh-hans/solutions/does-not-exist` | 404 | 直接 404 |
| `/en/does-not-exist` | 404 | 先 308 移除旧英文前缀，再 404 |

## 证据与边界

可复跑：`python3 artifacts/validation/validate-routes.py`，默认仅访问 `http://127.0.0.1:3000`。结构化证据保存于：

- `artifacts/validation/route-summary.json`：时间、Build ID、计数、问题及排除范围。
- `route-pages.json`：117 页响应 SHA-256、H1/title/description、canonical/lang/alternate、语言控件、导航、ID、链接和图片。
- `route-links.json`：站内目标状态、引用页与全部锚点。
- `route-images.json`：原图/优化图响应、MIME、大小及 SHA-256。
- `route-redirects.json`、`route-unknown.json`、`sitemap.xml`：兼容链、404 与 Sitemap 原响应。

未请求 18 次绝对外链、123 次 mailto 和 123 次 tel。没有对页面输入个人资料，也没有发送任何业务动作。隐藏菜单内的服务链接由 SSR HTML 核对；真实展开、焦点、Escape、hover、触屏、语言切换后的画面、定位精度、轮换照片、邮件草稿与尺寸/像素比对由主任务另行浏览器验收。

此结果只对应上述本地 Build ID，不证明公网部署、外部门户登入、邮件送达、独立监管核验或真实客户业务完成。正式域名的 canonical/hreflang 仅为页面元数据。
