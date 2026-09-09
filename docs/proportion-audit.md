# Hero 比例复核

2026-09-09。针对用户指出的 About、Wealth、Advisory 对比图重新核对归档 HTML、共享 CSS 和实际浏览器测量。以下“修改前 FIDERE”均指 `artifacts/visual-validation/` 的已有截图和 JSON，不代表修正后的验收结果。没有重新访问 Insights。

## 结论

主要问题是摄影覆盖范围被白色标题板或窄图条改变。Hero 外框、英文字号已接近或相同，不能仅以外框尺寸相等认定比例正确。白底应用于正文、导航和结构背景；完整摄影 Hero 与这一原则兼容。

### 桌面 1440 × 1000

此轮浏览器有 15px 滚动条，`innerWidth=1440`、正文 `clientWidth=1425`。1120px 内容区实测 x=152.5，1280px 内容区 x=72.5；不要把这些数值与无滚动条时的 x=160/80 混用。

| 项目 | Lighthouse 参考 | 修改前 FIDERE | 差异及修正依据 |
| --- | --- | --- | --- |
| About Hero | y97、高800，摄影全覆盖 | 相同外框，白标题板 y656、高241 | 白板截断了摄影，需恢复完整图面 |
| About 英文 H1 | 70px/80.5px，y688、高161 | 相同字号、行高及位置 | 此项无需缩放；早期中文页64px属于另一标题类 |
| Wealth Hero | y97、高800，摄影全覆盖 | 图片仅57%宽且底部被245.89px白板遮挡 | 恢复背景覆盖，目录在背景之上独立渲染 |
| Wealth H1 | 50px/57.5px、y745.5 | 同字号，y721.5 | 原描述没有额外上外距；本地 `margin-top:24px` 将上方标题推高24px |
| Wealth 目录 | 含 HOW WE HELP 共4个带底边行，组间距40px，内容底距10vh | 独立眉标题加3条80px链接，底距64px | 行数与间距构成不同，导致目录更矮、更靠下 |
| Advisory Hero | y97、高452，摄影全覆盖 | 外框相同，图片高144px | 删除 `height:9rem` 的窄图片条限制 |
| Advisory H1 | 48px/60px、y319 | 同字号，y316.5 | 原眉标题12px/18px、块间距12px；本地13px面包屑和8px间距改变了基线 |
| Advisory 首节正文 | section y549，正文上距120，内容y669 | chapter另占52px，section y601，内容y721 | 保留章节功能时应消化额外52px；首节上距68px可对齐正文起点 |

Advisory 当前1280px栅格依然得到464px右栏，右栏位置接近参考。左标题框512px对参考396px的差异来自参考 flex 内容自然宽度，不等于可见字面大小不同；不能机械限制所有服务标题为396px，造成额外断行。

Advisory 按钮真实规则为字体18px、500字重、行高1.33、内距10px 16px、内部间距8px、20px图标，单行高度约43.94px。修改前的18px/1.5、8px纵向内距、12×15px图标虽得到近似44px外高，但内部比例不同。

## Wealth 目录原始规则

共享 CSS 的 `.product_right-wrapper` **没有背景颜色声明，背景为透明**。其颜色观感来自整幅照片、Hero黑色遮罩及90px背景模糊，不能用固定灰绿色或白色面板替代并称为原比例。

| 范围 | 原始 CSS |
| --- | --- |
| 桌面右栏 | `position:absolute; inset:0 0 0 auto; width:43vw; padding-right:2.5rem; border-left:1px solid #fffc; backdrop-filter:blur(90px); -webkit-backdrop-filter:blur(90px)` |
| 内层对齐 | `.ser-hero_right-wrapper`: flex列、`justify-content:flex-end; height:100%; padding-left:3rem; margin-right:auto` |
| 目录内容 | `width:100%; max-width:26rem; padding-bottom:10vh` |
| 目录组 | 单列4行、`row-gap:2.5rem; margin-top:2.5rem` |
| 每行 | `padding-bottom:2.5rem; border-bottom:1px solid #ccc6be`，眉标题也属于其中一行 |
| 行内文字 | 继承16px字体、500字重、行高1.2、字距2px、uppercase |
| Hero 遮罩 | `.section-product-home.is--wm-hero` 为 `linear-gradient(#00000080,#00000080)`，照片 `background-size:cover` |

### 原始响应式断点

以下为同一共享 CSS 内相应 media query 的规则，按层叠顺序累加，已用 PostCSS 读取所属断点。

| 断点 | 精确变化 |
| --- | --- |
| ≤991px | Hero `padding-top:5.5rem; min-height:auto`；内容改为 flex列；左标题块 `margin-bottom:4.25rem; padding-inline:2.25rem`，标题内容 `padding-bottom:0` |
| ≤991px | 右栏 `position:relative; width:auto; margin-top:auto; padding-right:0; border-top:1px solid #fffc; border-left-style:none`；**90px blur继承保留** |
| ≤991px | 目录内层 `width:100%; padding-inline:0`；目录内容 `max-width:none; padding:2.25rem 2.5rem 4.5rem`；组 `margin-top:2.75rem` |
| ≤767px | 标题块、目录内容左右内距改为 `1.25rem`；眉标题 `.875rem/1.2`、下距 `.5rem`；目录每行 `.875rem`、底内距 `1.5rem`；组行间距 `1.5rem` |
| ≤767px | 描述字号暂为 `.875rem`；目录内层 `margin-right:0` |
| ≤479px | 目录内容 `padding-top:0; padding-bottom:3.5rem`；描述字号最终覆盖为 `1.25rem` |
| ≤479px | Hero 遮罩改为 `#00000059`（约35%黑），照片位置 `20% -60px`；摄影继续覆盖整体Hero |

### 手机 390 × 844 实测

根字号15.2621px，正文宽375px。

| 项目 | 参考 | 修改前 FIDERE |
| --- | --- | --- |
| About | Hero360px；H1两行、y345.66 | Hero360px；原英文文案三行、y306.03 |
| Wealth | Hero577.28px；左标题块y179.08；H1 y202.73 | Hero577.48px；H1 y346.03，被独立图片占位推低143.30px |
| Advisory | Hero633.78px；H1 y289.72 | Hero612.42px；H1 y280.03；章节再增加62px正文偏移 |

About 的三行英文文案为真实内容长度差异，应保留内容并进行自然排版。Wealth 的143px下移则来自独立图片、`margin-top:12.75rem`和错误垂直编排，不属于内容差异。

## 证据位置与范围

- 参考资源：`artifacts/reference/resource-audit/{about,wealth-management,advisory-and-capital-solutions}.html` 及 `lighthouse-canton.webflow.shared.081a2ff20.min.css`。共享 CSS SHA-256：`6c483698094bf6ca8a1aed116b6f7e03ac81425c3984d47349ca94b7e90bbe28`。
- 浏览器基线：`artifacts/visual-validation/reference-{about,wealth,advisory}-{desktop,mobile}-top.json` 与对应 PNG；FIDERE 使用同目录的 `fidere-{about,wealth,private-trust}-{desktop,mobile}-top.json`。
- 本文只记录归档参考和修改前差异。修正后的摄影覆盖、实际元素尺寸及正文位置须以本轮新截图和浏览器测量验收；本文本身不是“像素级完成”声明。
