# 浏览器补充覆盖与未到达边界

2026-09-09。本轮复用一个独立 Chrome 标签页，对清单中尚无归档尝试证据的地址逐项进行真实导航。路径全部来自既有79条范围内清单，没有猜URL，没有访问 Insights、新闻、播客、webinar、PDF或登录门户，没有提交表单或操作身份 / 投资者资格确认。

## 独立统计

| 证据层与统计范围 | 结果 |
| --- | --- |
| 既有范围内 HTTP 最终状态，79地址 | 200：74；404：5 |
| 全部范围内地址的最新浏览器记录 | 到达目标：32；跳转后目标未到达：47；实际渲染404：0；未尝试：0 |
| 保留所有历史记录的浏览器口径 | 曾到达目标：33；始终只有跳转记录：46；未尝试：0 |
| 本轮补充批次 | 43个独立请求地址，均自动跳到 `/cn-s`；目标到达0。根路径为补强重复，净补42个地址。 |

根路径曾在前轮到达英文首页，本轮自动返回简体首页；历史成功和本次失败均保留，不能互相覆盖。原HTTP404的5条是 `/cn/about`、`/cn/contact`、`/cn/homepage-families-individuals`、`/our-businesses/wealth-management/lc-global-select-sp`、`/team`；本次浏览器均返回简体首页，不能把此前HTTP404写成这次已看到404页面。

集合差分：`79条范围内URL − 所有已有到达URL − 所有请求尝试URL = 空集`。**仍未尝试名单：空（0条）**。逐项状态、HTTP字段、实际浏览器URL和历史证据见 [coverage.json](../artifacts/reference/browser-completion/coverage.json)。这里完成的是访问尝试覆盖，不是79个目标页面均已完整渲染或视觉验收。

## 采集方法与实际页面

自然视口1846×1031，DPR1，全程没有改viewport。每个目标先调用浏览器导航，再在下一次工具调用中独立读取 `domSnapshot`，通过当前页面的 `location.href` / 标题确认最终位置；随后保存完整可访问DOM快照、当前渲染正文、标题顺序、正文节点顺序及首屏截图。截图clip使用实际scrollY；本轮均在顶部。

43个请求的最终页面均为 [简体首页](https://www.lighthouse-canton.com/cn-s)，标题均为 **Lighthouse Canton | China**。实际正文顺序为：工具/主导航 → 机构主标题 → 三类客户入口（企业 / 家族 / 个人、机构、初创公司创始人 / 企业家）→ 视频fallback。DOM中入口标题的重复节点按原顺序保留。各记录的 `bodyText`、`headingOrder`、`readingOrder` 只属于该实际首页，**不是请求目标的正文**。

本轮没有出现需新处理的普通条款或资格对话框，没有改地区偏好、浏览器存储或绕过跳转。一次印度Wealth采集出现临时DOM求值超时，读取当前URL与DOM恢复后重新保存该次证据；未对相同地区跳转反复重试。自动跳转的具体实现原因没有在本轮推断为已证实。

## 43条请求的证据

下表所有最终URL为 `/cn-s`、结果为“跳转，目标未到达”，视口均1846×1031。每个JSON包含实际URL、标题、时间与完整实际正文；对应DOM和首屏文件独立保存。

| 请求目标 | 原HTTP最终状态 | 浏览器记录 | DOM | 首屏 |
| --- | --- | --- | --- | --- |
| [/](https://www.lighthouse-canton.com/) | 200 | [JSON](../artifacts/reference/browser-completion/52b8b2557574f85e.json) | [DOM](../artifacts/reference/browser-completion/52b8b2557574f85e-dom.txt) | [图像](../artifacts/reference/browser-completion/52b8b2557574f85e-top.jpg) |
| [/10x](https://www.lighthouse-canton.com/10x) | 200 | [JSON](../artifacts/reference/browser-completion/4bc7a5f9c7b70545.json) | [DOM](../artifacts/reference/browser-completion/4bc7a5f9c7b70545-dom.txt) | [图像](../artifacts/reference/browser-completion/4bc7a5f9c7b70545-top.jpg) |
| [/cn](https://www.lighthouse-canton.com/cn) | 200 | [JSON](../artifacts/reference/browser-completion/b598cd61ed23a0e8.json) | [DOM](../artifacts/reference/browser-completion/b598cd61ed23a0e8-dom.txt) | [图像](../artifacts/reference/browser-completion/b598cd61ed23a0e8-top.jpg) |
| [/cn-s/about](https://www.lighthouse-canton.com/cn-s/about) | 200 | [JSON](../artifacts/reference/browser-completion/d1e6a8df30552dd8.json) | [DOM](../artifacts/reference/browser-completion/d1e6a8df30552dd8-dom.txt) | [图像](../artifacts/reference/browser-completion/d1e6a8df30552dd8-top.jpg) |
| [/cn-s/contact](https://www.lighthouse-canton.com/cn-s/contact) | 200 | [JSON](../artifacts/reference/browser-completion/14d50c7e58adc11e.json) | [DOM](../artifacts/reference/browser-completion/14d50c7e58adc11e-dom.txt) | [图像](../artifacts/reference/browser-completion/14d50c7e58adc11e-top.jpg) |
| [/cn-s/homepage-families-individuals](https://www.lighthouse-canton.com/cn-s/homepage-families-individuals) | 200 | [JSON](../artifacts/reference/browser-completion/3156abd607b92ba9.json) | [DOM](../artifacts/reference/browser-completion/3156abd607b92ba9-dom.txt) | [图像](../artifacts/reference/browser-completion/3156abd607b92ba9-top.jpg) |
| [/cn-t](https://www.lighthouse-canton.com/cn-t) | 200 | [JSON](../artifacts/reference/browser-completion/0e979a0d57d5ec26.json) | [DOM](../artifacts/reference/browser-completion/0e979a0d57d5ec26-dom.txt) | [图像](../artifacts/reference/browser-completion/0e979a0d57d5ec26-top.jpg) |
| [/cn-t/contact](https://www.lighthouse-canton.com/cn-t/contact) | 200 | [JSON](../artifacts/reference/browser-completion/b514ee390c8dcee3.json) | [DOM](../artifacts/reference/browser-completion/b514ee390c8dcee3-dom.txt) | [图像](../artifacts/reference/browser-completion/b514ee390c8dcee3-top.jpg) |
| [/cn-t/homepage-families-individuals](https://www.lighthouse-canton.com/cn-t/homepage-families-individuals) | 200 | [JSON](../artifacts/reference/browser-completion/431813279ab02b2a.json) | [DOM](../artifacts/reference/browser-completion/431813279ab02b2a-dom.txt) | [图像](../artifacts/reference/browser-completion/431813279ab02b2a-top.jpg) |
| [/cn/about](https://www.lighthouse-canton.com/cn/about) | 404 | [JSON](../artifacts/reference/browser-completion/6dea140dde80fe27.json) | [DOM](../artifacts/reference/browser-completion/6dea140dde80fe27-dom.txt) | [图像](../artifacts/reference/browser-completion/6dea140dde80fe27-top.jpg) |
| [/cn/contact](https://www.lighthouse-canton.com/cn/contact) | 404 | [JSON](../artifacts/reference/browser-completion/2983aff50046caf7.json) | [DOM](../artifacts/reference/browser-completion/2983aff50046caf7-dom.txt) | [图像](../artifacts/reference/browser-completion/2983aff50046caf7-top.jpg) |
| [/cn/homepage-families-individuals](https://www.lighthouse-canton.com/cn/homepage-families-individuals) | 404 | [JSON](../artifacts/reference/browser-completion/4c428feee2aa79b7.json) | [DOM](../artifacts/reference/browser-completion/4c428feee2aa79b7-dom.txt) | [图像](../artifacts/reference/browser-completion/4c428feee2aa79b7-top.jpg) |
| [/corporates-familyoffices-individuals](https://www.lighthouse-canton.com/corporates-familyoffices-individuals) | 200 | [JSON](../artifacts/reference/browser-completion/c208b34459063f43.json) | [DOM](../artifacts/reference/browser-completion/c208b34459063f43-dom.txt) | [图像](../artifacts/reference/browser-completion/c208b34459063f43-top.jpg) |
| [/in/about](https://www.lighthouse-canton.com/in/about) | 200 | [JSON](../artifacts/reference/browser-completion/ed386377eb3e2850.json) | [DOM](../artifacts/reference/browser-completion/ed386377eb3e2850-dom.txt) | [图像](../artifacts/reference/browser-completion/ed386377eb3e2850-top.jpg) |
| [/in/careers](https://www.lighthouse-canton.com/in/careers) | 200 | [JSON](../artifacts/reference/browser-completion/bc6e36a8432c18fd.json) | [DOM](../artifacts/reference/browser-completion/bc6e36a8432c18fd-dom.txt) | [图像](../artifacts/reference/browser-completion/bc6e36a8432c18fd-top.jpg) |
| [/in/contact](https://www.lighthouse-canton.com/in/contact) | 200 | [JSON](../artifacts/reference/browser-completion/d07894a00e01dfa4.json) | [DOM](../artifacts/reference/browser-completion/d07894a00e01dfa4-dom.txt) | [图像](../artifacts/reference/browser-completion/d07894a00e01dfa4-top.jpg) |
| [/in/corporates-familyoffices-individuals](https://www.lighthouse-canton.com/in/corporates-familyoffices-individuals) | 200 | [JSON](../artifacts/reference/browser-completion/4f0f61c4db8c3c5a.json) | [DOM](../artifacts/reference/browser-completion/4f0f61c4db8c3c5a-dom.txt) | [图像](../artifacts/reference/browser-completion/4f0f61c4db8c3c5a-top.jpg) |
| [/in/disclaimer](https://www.lighthouse-canton.com/in/disclaimer) | 200 | [JSON](../artifacts/reference/browser-completion/1df5506df7d7fe37.json) | [DOM](../artifacts/reference/browser-completion/1df5506df7d7fe37-dom.txt) | [图像](../artifacts/reference/browser-completion/1df5506df7d7fe37-top.jpg) |
| [/in/insitutional-investor](https://www.lighthouse-canton.com/in/insitutional-investor) | 200 | [JSON](../artifacts/reference/browser-completion/b5ac55f18ba65f4c.json) | [DOM](../artifacts/reference/browser-completion/b5ac55f18ba65f4c-dom.txt) | [图像](../artifacts/reference/browser-completion/b5ac55f18ba65f4c-top.jpg) |
| [/in/lc-nueva-momentum-fund-in](https://www.lighthouse-canton.com/in/lc-nueva-momentum-fund-in) | 200 | [JSON](../artifacts/reference/browser-completion/fffe802221170d15.json) | [DOM](../artifacts/reference/browser-completion/fffe802221170d15-dom.txt) | [图像](../artifacts/reference/browser-completion/fffe802221170d15-top.jpg) |
| [/in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund](https://www.lighthouse-canton.com/in/our-businesses-asset-management-private-market-funds-lc-nueva-momentum-fund) | 200 | [JSON](../artifacts/reference/browser-completion/2923c5498569b9b0.json) | [DOM](../artifacts/reference/browser-completion/2923c5498569b9b0-dom.txt) | [图像](../artifacts/reference/browser-completion/2923c5498569b9b0-top.jpg) |
| [/in/our-businesses/asset-management](https://www.lighthouse-canton.com/in/our-businesses/asset-management) | 200 | [JSON](../artifacts/reference/browser-completion/67177f07fc01f14f.json) | [DOM](../artifacts/reference/browser-completion/67177f07fc01f14f-dom.txt) | [图像](../artifacts/reference/browser-completion/67177f07fc01f14f-top.jpg) |
| [/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-luminere-credit-fund) | 200 | [JSON](../artifacts/reference/browser-completion/16aaeec1386c8f46.json) | [DOM](../artifacts/reference/browser-completion/16aaeec1386c8f46-dom.txt) | [图像](../artifacts/reference/browser-completion/16aaeec1386c8f46-top.jpg) |
| [/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-nueva-momentum-fund) | 200 | [JSON](../artifacts/reference/browser-completion/3da899c07c670299.json) | [DOM](../artifacts/reference/browser-completion/3da899c07c670299-dom.txt) | [图像](../artifacts/reference/browser-completion/3da899c07c670299-top.jpg) |
| [/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-special-credit-opportunities-fund) | 200 | [JSON](../artifacts/reference/browser-completion/5fefcb5571ae5686.json) | [DOM](../artifacts/reference/browser-completion/5fefcb5571ae5686-dom.txt) | [图像](../artifacts/reference/browser-completion/5fefcb5571ae5686-top.jpg) |
| [/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-supply-chain-credit) | 200 | [JSON](../artifacts/reference/browser-completion/8718cae85a499b4a.json) | [DOM](../artifacts/reference/browser-completion/8718cae85a499b4a-dom.txt) | [图像](../artifacts/reference/browser-completion/8718cae85a499b4a-top.jpg) |
| [/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/lc-venture-debt-fund) | 200 | [JSON](../artifacts/reference/browser-completion/6ca28e50844d346e.json) | [DOM](../artifacts/reference/browser-completion/6ca28e50844d346e-dom.txt) | [图像](../artifacts/reference/browser-completion/6ca28e50844d346e-top.jpg) |
| [/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate](https://www.lighthouse-canton.com/in/our-businesses/asset-management/private-market-funds/life-sciences-real-estate) | 200 | [JSON](../artifacts/reference/browser-completion/db5dd36a29d5e9c8.json) | [DOM](../artifacts/reference/browser-completion/db5dd36a29d5e9c8-dom.txt) | [图像](../artifacts/reference/browser-completion/db5dd36a29d5e9c8-top.jpg) |
| [/in/our-businesses/asset-management/public-market-funds/lc-beacon-global](https://www.lighthouse-canton.com/in/our-businesses/asset-management/public-market-funds/lc-beacon-global) | 200 | [JSON](../artifacts/reference/browser-completion/1f84b3957061ed3b.json) | [DOM](../artifacts/reference/browser-completion/1f84b3957061ed3b-dom.txt) | [图像](../artifacts/reference/browser-completion/1f84b3957061ed3b-top.jpg) |
| [/in/our-businesses/founders-ecosystem](https://www.lighthouse-canton.com/in/our-businesses/founders-ecosystem) | 200 | [JSON](../artifacts/reference/browser-completion/49941d9109aa37f8.json) | [DOM](../artifacts/reference/browser-completion/49941d9109aa37f8-dom.txt) | [图像](../artifacts/reference/browser-completion/49941d9109aa37f8-top.jpg) |
| [/in/our-businesses/technology-and-innovation](https://www.lighthouse-canton.com/in/our-businesses/technology-and-innovation) | 200 | [JSON](../artifacts/reference/browser-completion/dc86ac151c6f4104.json) | [DOM](../artifacts/reference/browser-completion/dc86ac151c6f4104-dom.txt) | [图像](../artifacts/reference/browser-completion/dc86ac151c6f4104-top.jpg) |
| [/in/our-businesses/wealth-management](https://www.lighthouse-canton.com/in/our-businesses/wealth-management) | 200 | [JSON](../artifacts/reference/browser-completion/7ee5d0de2a362dc3.json) | [DOM](../artifacts/reference/browser-completion/7ee5d0de2a362dc3-dom.txt) | [图像](../artifacts/reference/browser-completion/7ee5d0de2a362dc3-top.jpg) |
| [/in/our-businesses/wealth-management/advisory-and-capital-solutions](https://www.lighthouse-canton.com/in/our-businesses/wealth-management/advisory-and-capital-solutions) | 200 | [JSON](../artifacts/reference/browser-completion/f7d953d136a279db.json) | [DOM](../artifacts/reference/browser-completion/f7d953d136a279db-dom.txt) | [图像](../artifacts/reference/browser-completion/f7d953d136a279db-top.jpg) |
| [/in/our-businesses/wealth-management/global-indian-business-practice](https://www.lighthouse-canton.com/in/our-businesses/wealth-management/global-indian-business-practice) | 200 | [JSON](../artifacts/reference/browser-completion/dcc39962b48814a2.json) | [DOM](../artifacts/reference/browser-completion/dcc39962b48814a2-dom.txt) | [图像](../artifacts/reference/browser-completion/dcc39962b48814a2-top.jpg) |
| [/in/our-impact](https://www.lighthouse-canton.com/in/our-impact) | 200 | [JSON](../artifacts/reference/browser-completion/a37a41db0c117eca.json) | [DOM](../artifacts/reference/browser-completion/a37a41db0c117eca-dom.txt) | [图像](../artifacts/reference/browser-completion/a37a41db0c117eca-top.jpg) |
| [/in/privacy-policy](https://www.lighthouse-canton.com/in/privacy-policy) | 200 | [JSON](../artifacts/reference/browser-completion/aaad3d2652e46fa4.json) | [DOM](../artifacts/reference/browser-completion/aaad3d2652e46fa4-dom.txt) | [图像](../artifacts/reference/browser-completion/aaad3d2652e46fa4-top.jpg) |
| [/in/startupfounder-entrepreneur](https://www.lighthouse-canton.com/in/startupfounder-entrepreneur) | 200 | [JSON](../artifacts/reference/browser-completion/6a9b5dc89ded7377.json) | [DOM](../artifacts/reference/browser-completion/6a9b5dc89ded7377-dom.txt) | [图像](../artifacts/reference/browser-completion/6a9b5dc89ded7377-top.jpg) |
| [/in/thank-you](https://www.lighthouse-canton.com/in/thank-you) | 200 | [JSON](../artifacts/reference/browser-completion/99c452c6dabff0d1.json) | [DOM](../artifacts/reference/browser-completion/99c452c6dabff0d1-dom.txt) | [图像](../artifacts/reference/browser-completion/99c452c6dabff0d1-top.jpg) |
| [/insitutional-investor](https://www.lighthouse-canton.com/insitutional-investor) | 200 | [JSON](../artifacts/reference/browser-completion/df2b4abe0d39fbe8.json) | [DOM](../artifacts/reference/browser-completion/df2b4abe0d39fbe8-dom.txt) | [图像](../artifacts/reference/browser-completion/df2b4abe0d39fbe8-top.jpg) |
| [/our-businesses/wealth-management/lc-global-select-sp](https://www.lighthouse-canton.com/our-businesses/wealth-management/lc-global-select-sp) | 404 | [JSON](../artifacts/reference/browser-completion/70e0b921c83d252f.json) | [DOM](../artifacts/reference/browser-completion/70e0b921c83d252f-dom.txt) | [图像](../artifacts/reference/browser-completion/70e0b921c83d252f-top.jpg) |
| [/startupfounder-entrepreneur](https://www.lighthouse-canton.com/startupfounder-entrepreneur) | 200 | [JSON](../artifacts/reference/browser-completion/198263eb35409094.json) | [DOM](../artifacts/reference/browser-completion/198263eb35409094-dom.txt) | [图像](../artifacts/reference/browser-completion/198263eb35409094-top.jpg) |
| [/team](https://www.lighthouse-canton.com/team) | 404 | [JSON](../artifacts/reference/browser-completion/d8bc4704cf8b6232.json) | [DOM](../artifacts/reference/browser-completion/d8bc4704cf8b6232-dom.txt) | [图像](../artifacts/reference/browser-completion/d8bc4704cf8b6232-top.jpg) |
| [/whistleblower-policy](https://www.lighthouse-canton.com/whistleblower-policy) | 200 | [JSON](../artifacts/reference/browser-completion/8b04dbbb427ad189.json) | [DOM](../artifacts/reference/browser-completion/8b04dbbb427ad189-dom.txt) | [图像](../artifacts/reference/browser-completion/8b04dbbb427ad189-top.jpg) |

## 文件与验收限制

- `results.json`：本轮43条逐请求记录；`queue.json`：从旧证据差分得到的请求清单；`coverage.json`：79条范围的最终集合差分和分层统计。
- 每个请求以URL的SHA-256前16位为文件名，保存 `.json`、`-dom.txt`、`-top.jpg`；`SHA256SUMS` 保存这些证据的完整文件校验。
- 已有 primary / supplement / regional 和 About、Wealth、Advisory 记录仍保留；本轮首页跳转图片不会替代它们。新访问状态已写入 [公开页面清单](reference-public-inventory.md) 和原证据索引。
- 没有复制原站内容进入FIDERE，也没有修改产品代码。请求目标未到达时，其HTML静态结构研究仍可单独引用，但不能冒充本轮浏览器正文已读。FIDERE的新构建、功能和视觉验收由本地独立报告负责。

实际跳转后的首屏示例（根路径请求）：

![根路径请求后实际返回简体首页](../artifacts/reference/browser-completion/52b8b2557574f85e-top.jpg)
