# Hero 比例修正验收

2026-09-09。生产构建 `21OERW8tf0hXHMcTClPm_`，本地预览：<http://127.0.0.1:3000/zh-hant/solutions>。

本轮针对用户对上一版对比图提出的“比例不对”进行修正。此前 About / Business 白色标题板遮掉了照片底部，Advisory 的完整照片被压成 144px 窄条；这些是构图错误，不能因为 Hero 外框高度相同就判定通过。

## 实际修改

- `src/app/white-system.css`：去掉三类 Hero 的图片截断和独立白色标题板。正文、菜单、章节导航、CTA、Footer 继续白底。消化章节导航额外占用的首段留白，桌面正文不再下移52px。
- `src/app/reference-system.css`：恢复完整摄影内标题与目录的关系；Wealth 描述上距归零，目录四行采用40px间距及40px底内距、10vh底距、90px背景模糊。≤991px 转为纵向布局。手机摄影裁切到75%以保留主要建筑，遮罩35%。
- Advisory 左眉12px/18px、桌面12px间距、手机预留两行眉标题高度；按钮恢复10px垂直内距、18px/1.33、20px图标及8px内部间距。
- 修改共享样式，作用于 About、Solutions、Wealth、10个信托服务详情及4个财富主题详情的三个语言版本。未改变业务文案、照片文件、导航目标、表单或章节脚本。

## 同视口实测

首屏均为 `scrollY=0`。截图输出桌面1440×1000、手机390×844；原始截图及对应 DOM 计算值在 `artifacts/proportion-correction/after/`。DOM 可用宽度是否包括系统滚动条单独记在JSON，不将截图尺寸与可用宽度混为一谈。

| 项目 | 参考 | 修正后 FIDERE |
| --- | ---: | ---: |
| About 桌面 Hero / H1 顶部 | 800px / y688 | 800px / y688 |
| Wealth 桌面 Hero / H1 顶部 | 800px / y745.5 | 800px / y745.5 |
| Advisory 桌面 Hero / H1 顶部 | 452px / y319 | 452px / y319 |
| Advisory 桌面首节内容顶部 | y669 | y669 |
| About 手机 Hero | 360px | 360px |
| Wealth 手机 H1 顶部 | y202.73 | y202.59（原约y346） |
| Wealth 手机 Hero | 577.28px | 580.28px |
| Advisory 手机 H1 顶部 | y289.72 | y289.56 |
| Advisory 手机 Hero | 633.78px | 621.95px |

以上三类 Hero 的摄影均实测覆盖整个 Hero，高度不再被白板或固定图片条改变。About 桌面保持70px/80.5px，Wealth 50px/57.5px，Advisory 48px/60px；不是通过缩小整页截图制造接近效果。

## 对比证据

- [桌面：参考与修正后](../artifacts/proportion-correction/comparison-desktop.png)
- [手机：参考与修正后](../artifacts/proportion-correction/comparison-mobile.png)
- [桌面：修正前与修正后](../artifacts/proportion-correction/before-after-desktop.png)
- [完整页面同尺度对照](../artifacts/proportion-correction/comparison-full-pages.png)
- [详情页50%叠加与尺寸辅助线](../artifacts/proportion-correction/advisory-geometry-overlay.png)
- [原始截图、尺寸和状态](../artifacts/proportion-correction/after/)

此轮保存31张浏览器截图：About、Wealth、Private Trust、繁体Solutions均有桌面/手机首屏与完整页；桌面含正文/页尾；手机含页尾及菜单/章节状态。长图拍摄前逐屏滚动触发图片与内容显现。对比合成等比例缩放，原始截图没有修改页面内容。不同页面正文长度和页尾坐标不同，整页对照不等同于同坐标位图差分。

参考采用同日已归档的真实 HTML、CSS、浏览器截图与计算尺寸。此次另外尝试打开 Wealth 英文页时被地区规则转到 `/cn-s`，因此没有把这次请求记为英文目标重新到达。参考源与逐项规则见 [比例复核](proportion-audit.md)；完整历史访问清单仍见 [公开页面清单](reference-public-inventory.md) 和 [访问结果](reference-browser-completion.md)。没有新增访问 Insights。

## 验证

- `npm run build`通过，包含TypeScript及121个静态生成项；`npm run lint`通过。
- [路由检查](../artifacts/proportion-correction/route-validation.json)：117页面、147本地目标、73图片、48兼容跳转、16未知路径断言，问题数0；执行前后构建ID相同。
- 手机主菜单可打开/关闭；Hero目录进入真实私人信托详情。章节选择跳到`#scope`，菜单关闭、当前章节同步、固定章节栏不挡住标题。见 [章节状态](../artifacts/proportion-correction/chapter-interaction.json)。
- 320、390、768、1024、1440视口抽样未发现水平溢出；768px业务入口为单列、1024px为双列。见 [额外断点记录](../artifacts/proportion-correction/responsive-widths.json)。
- 构建初期发现云盘将依赖及Next缓存卸载为占位文件；按原锁文件恢复依赖并清理可再生成缓存后完成构建。没有更换依赖版本。

## 仍存在的差异

1. 摄影主题、品牌颜色、Logo、业务文案与参考不同；夜景的明暗分布也不同。保留FIDERE信息，不复制参考人物、数据、客户案例或办公室。
2. 手机About英文标题因原文长度为三行，参考两行；手机Wealth Hero约高3px，Private Trust约短11.83px。后者标题基线已经对齐，整体高度差来自后续内容和操作区。
3. FIDERE保留额外章节导航。桌面首段已吸收其52px高度；手机至少保留2rem正文留白，因此局部正文起点仍与没有章节条的参考不同。
4. 正文依据真实业务分组，内容数量和总页长不同；此次没有将所有内页做逐像素或逐帧动画一致的声明。
