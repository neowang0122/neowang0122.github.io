---
id: 463976d8-9844-11ee-b2fb-bbdc20470aa0
title: |
  处理器简史｜PowerPC 10：烽火连天 颓势初显（下） ｜ 少数派会员 π+Prime
author: |
  MIG
date_saved: 2023-12-11 06:46:46
date_published: 2023-12-11 06:46:46
draft: true
---

# 处理器简史｜PowerPC 10：烽火连天 颓势初显（下） ｜ 少数派会员 π+Prime
#Omnivore

[Read on Omnivore](https://omnivore.app/me/power-pc-10-p-prime-18c59c237e2)

[Read Original](https://sspai.com/prime/story/ppc-history-10)

date_saved: 2023-12-11 06:46:46

date_published: 2023-12-11 06:46:46

--- 

# Full Content: 

PowerPC 在嵌入式、超算等领域再次崭露头角，面对英特尔的多媒体指令集 SSE 也力压一筹。只可惜，这大概是 PowerPC 阵营的最后一次大胜了，随着 500MHz G4 的交付事故，属于它的黄金时代已然快走到尽头。

---

**前文提要：**乔布斯鼓吹的 G3 受到了英特尔的奋起直追，摩托罗拉自身的财务困局则为 PowerPC 阵营增添了变数。局势紧张之际，IBM 取得铜互联工艺突破，让苹果扳回一局，更让 PowerPC 成功「破圈」飞向太空。

## 以小见大

除了在工艺和航天领域大有长进，PowerPC 还相继推出了随着专用于嵌入式、支持 64 位且更易定制化的 Book E 标准，以及 PowerPC 405 和 440 系列。高低搭配，PowerPC 在嵌入式、超算等领域再次崭露头角。

不同于此前 PowerPC 项目由驻扎在萨默塞特的 IBM、Motorola 工程师合力领导完成，新的嵌入式项目一直由 Thomas Sartorius 一人在 IBM 统筹安排。这位杰出的芯片架构师将带领 PowerPC 400 系列走向辉煌。

![](https://proxy-prod.omnivore-image-cache.app/0x0,smodJ6vVr1TK_NKlSLw2R3-oa8F3UN2HxDY1TF9V-FD4/https://cdn.sspai.com/2023/10/31/1fc5903acc09b24af96f2439ae76fd2e.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

Thomas Sartorius，曾任 PowerPC 400 系列的首席架构师，后又为高通骁龙系列的首席架构师

先看 PowerPC 405 核心，其代表芯片 PowerPC 405GP 于 1999 年发布，在架构设计上有了大幅改进，首次加入了 CoreConnect 总线，其由处理器本地总线、片上外设总线构成，从此奠定了未来嵌入式 PowerPC 内外总线的基础架构。为了扩大影响力，IBM 将 CoreConnect 免费、免版税提供给工具供应商、核心 IP 公司和芯片开发公司。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sRZYEitZaUlSs0uqRLAvMD-AczvTmY02Qv-aNsZMsRPA/https://cdn.sspai.com/2023/10/31/03f56f11d34db2873e70d6776c45749c.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

405GP 的架构图，其最大的改进是加入了一系列外设控制器以及 64bit 的 CoreConnect 总线

而在性能层面，405GP 也大幅改进，相比前代 403 仅为 50MHz 的频率，其能在 200MHz 下运行。IBM 宣称其运行速度比前代快了 3 倍，并且在 250nm 工艺生产时，Die 面积仅为 49mm²，整体功耗只有 1.1W。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYHF9wwTwdA_FafwjEJvAzMEQuk_wdufl9noqkaBMgsg/https://cdn.sspai.com/2023/10/31/7a52dea538aafb9b1b3f2c3191a365fd.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

PowerPC 405GP（左）及其 Die shot（右）

这样一款单颗芯片售价仅 41 美元的高性价比芯片带来了新一轮采购热潮。小到 Dilog、Dreambox 等各种品牌的机顶盒、大到用于服务器的磁带库控制卡，甚至 PlayStation 2 slim 中的 I/O 控制器上，到处都有 PowerPC 405GP 的身影。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9DTMnMmk88OJ6qmG6ojIVus2cJaWgvxTNvtFpCPaSa4/https://cdn.sspai.com/2023/10/31/156aa4fd64897b2d5db48d514f83cedf.jpeg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

使用 PowerPC 405GP 的 Dilog DT 550 机顶盒（左）以及 SUN 的 StorageTek SL8500（右）

PowerPC 405 已经足够惊艳，其后于 1999 年推出的 PowerPC 440 核心则更上一层楼，其代表产品 PowerPC 440GP 最初就能在 400 MHz 下运行（后来最高可达 800MHz），已与新 G3 不相上下，性能相比 405GP 更是有了三倍提升。

440 的内部也有了大升级。不仅支持 DDR 内存、处理器本地总线由 64bit 升至 128bit，带宽翻倍，微架构流水线级数提升至七级，使之更容易在高频下运行，64KB 的 L1 缓存容量甚至等同于 G3， 是一个不折不扣的超标量、乱序的桌面级核心。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s4CrKOBAZKUNp4z2lCbeEX6A_b2Tg-jtPA8PZCZYEQ2I/https://cdn.sspai.com/2023/10/31/85f0593caeaa127077c59d38188baebb.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

PowerPC 440GP 的内部结构（右）及其 440 内核（左）

而在功耗、成本方面，得益于 180nm 铜互联工艺，在 400MHz 运行时功耗只有 1.4W，Die 面积由于去除了浮点单元仅为 59mm²，单芯片售价低于 100 美元。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sY4ba9mU3BVwbjS6gYjAWz-cyu8GG42pYXfyTgV6tBtM/https://cdn.sspai.com/2023/10/31/de737e94f8ec6b05bb9864706985bd4e.jpeg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

用于苹果 Xserve 的 PowerPC 440SPe（左）及 440GP 的 Die shot（右）

如此强大的芯片让各界为之疯狂，PowerPC 440 系列成为了 IBM 最受欢迎的嵌入式芯片之一，并赢得「微处理器报告」杂志的「1999 年进步最大的嵌入式架构奖」，采用它的设备不计其数。

整个 1999 年，IBM 与 Motorola 分别卖出 500 万、共 1000 万枚嵌入式芯片，是 1998 年 490 万的两倍多，1997 年 350 万的近三倍。

但显然 IBM 的野心并不止于此——一大批超级计算机正席卷而来。

最有代表性的就是 IBM 自家的蓝色基因系列。在首款 L 系列产品中，IBM 别出心裁的将两块 700MHz 的 PowerPC 440 放在同一主板上。超宽的总线让对称多处理成为可能，一台 16 层蓝色基因 L 机架就囊括了整整 1024 个计算节点。

![](https://proxy-prod.omnivore-image-cache.app/0x0,soC6WNwQqwz3fQe7YrxvCyIRd4vX0O-XwdKtLT0nTAGE/https://cdn.sspai.com/2023/10/31/b7eaaa1b093d53fe94c553e2888c1c34.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

包含两个计算节点的计算卡（左）及其机架一层所容纳的 16 张计算卡（右）

2004 年 11 月，一个包含 16 台机架的蓝色基因击败 NEC 的地球模拟器，成功摘得「世界上最快计算机」这一桂冠，并保持了三年多，直至 2008 年 6 月才屈居第二。此时，其机架数量已为 104 台，峰值算力已达 596 Tflops 之巨。

![](https://proxy-prod.omnivore-image-cache.app/0x0,spSAFUB0LXn7jNwiWbz5lp0WYekfLML4z-t1YqfuiE5Y/https://cdn.sspai.com/2023/10/31/e10810f571d34aa52040736bd6821a43.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

蓝色基因 P 对算力的暴力堆砌

而第二代蓝色基因 P 系列则如法炮制，一个计算节点包含了 4 颗 PowerPC 450（经过稍微修改的 PowerPC 440），峰值性能高达 13.6 Gflops，甚至被用于模拟大约 1% 的人类大脑皮层。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sEhA-QNem84Y3apa6Vh1jV6DEJqLuTTM7c4L65nPgf4Y/https://cdn.sspai.com/2023/10/31/f75aae95d9571031af585835a4ec4113.jpeg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

蓝色基因 P 超级计算机

在赢得举世瞩目性能的同时，IBM 表示这款超算达到了 371 Mflops/W 的惊人能效，在能效榜中排名第一。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqq5O_nwmuznmCZ4Sx26Ak0aqLoJd6iTi5IJ7eas92oM/https://cdn.sspai.com/2023/10/31/5667507de66485f560a23724c04ea3b0.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

2007 年 11 月的超算能耗比榜单，可见蓝色基因 P 系列包揽了前五名

## 超算的性能，尽在手中

1999 年 8 月，在 Seybold [研讨会上](https://www.youtube.com/watch?v=1gWg%5FGo79jc&t=2954s)，乔布斯意气风发。在回顾了近 8 个月来 PowerMac G3 所取得的辉煌成绩后，用一句 What’s next 预示新产品即将到来——而接下来的幻灯片却引得众人哄堂大笑。

![](https://proxy-prod.omnivore-image-cache.app/0x0,suI5z7U1BvmE1A7OIOoYEJn5zWyy0bydOc117SALSC3I/https://cdn.sspai.com/2023/10/31/02755ebe8481723f1400d25be76488d9.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

给你超算的性能

只见一个巨型超级计算机展现在众人眼前。乔布斯表示，随着多媒体的盛行，图片编辑、视频编码等任务对性能的需求已经动辄数十亿的运算量，与航天局、中情局等国家机关以前的需求相比肩：以前单纯的整数、浮点单元已经难以应付如此庞大的数据流，急需一套全新的解决方案。

### 先发制人

只不过，更早意识到了这一点的，是对面的英特尔。在大家都还在比较纯粹的整数、浮点性能时，英特尔率先于 1996 年宣布了 MMX 拓展指令以及 MMX 单元，又于 1999 年 2 月发布了全新的奔腾 III 芯片。与此同时，营销机器全面启动，砸下了近 3 亿美元来说服开发者重写软件以利用 SIMD 单元。在其不遗余力的宣传下，奔腾 III 在发售时已经有 300 个软件适配完成，让拓展指令对多媒体加速的必要性家喻户晓，在这场多媒体战争中已先下一城。

![](https://proxy-prod.omnivore-image-cache.app/0x0,se59Rsm4B50TdsjtRjvFQLjUaY4vOjjzr1PNC0xok2Xg/https://cdn.sspai.com/2023/10/31/ace1335cb9ff1bad98b5a4943d867930.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

使用 Slot 1 插槽的奔腾 III

### 分道扬镳

反观 PowerPC 阵营，在多媒体的拓展指令方面的发展却坎坷不堪。为了应对英特尔 MMX 指令的强大优势，萨默塞特研发中心的工程师们也早早地开始研发专属于 PowerPC 的 SIMD 指令，Motorola 称之为 Altivec，IBM 称为 VMX，苹果称为 Velocity Engine。

不过，在 AIM 联盟中，IBM 对此却并未像其他两家那样上心。毕竟，其 POWER 系列产品主要面对的是服务器等大型机市场，对能够加速多媒体的拓展指令兴趣不大。然而，过去几年 IBM 大量精力又都被用在了 PowerPC 研发上，POWER 项目屡次拖延：POWER3 等了整整五年才于 1998 年发布，且频率欠佳、性能堪忧，难以与 21264 等竞品相提并论。对 Velocity Engine 这种 IBM 不感兴趣的领域，他们实在不想再浪费时间和精力了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sLWArKqfIrurbvTMI63TFTaoSixH_OeuJ2lFRxYzOQpI/https://cdn.sspai.com/2023/10/31/5ec3d4bd922f709a683bed9d7ff17e76.jpeg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

POWER3 及其 Die shot，初代频率只有 200MHz

![](https://proxy-prod.omnivore-image-cache.app/0x0,sMzmhHqCfJMD2a65Vd0wz52xzpQzjbkJcijLpMQXlfSo/https://cdn.sspai.com/2023/10/31/0fd47f573d4e0cfdda7150377c2e2ec0.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

击败棋王的「Deep Blue」超级计算机，配备有 30 个 200MHz 的 PowerPC 604e

随着双方在这方面的分歧越来越大，1998 年 5 月 17 日，即乔布斯否认 AIM 内部有矛盾的两个月后，Motorola 把 IBM 撇在一边，单方面宣布了 PowerPC 新芯片的计划，一个月后，IBM 与 Motorola [正式分道扬镳](https://techmonitor.ai/technology/powerpc%5Falliance%5Ffractured%5Fas%5Fibm%5Fsells%5Fsomerset)：IBM 将萨默塞特的股份全数售给了 Motorola，自身则退出新芯片的研发，全力以赴设计 POWER4，只负责继续给苹果提供各种工艺下的 PowerPC G3。

IBM 的退出标志着一个时代的结束，在被 Motorola 全资拥有后，象征 AIM 联盟的萨默塞特研发中心淡出历史长河，再不被媒体关注、不被人提起，最终在 Motorola 重组、拆分的风风雨雨中逐渐停止运营。至此，能推进 PowerPC 向前的只有苹果与 Motorola 了。

讽刺的是，面对巨变，双方在新闻稿中都表现得极为冷静，声称将继续支持 PowerPC 的发展，市场也认为这一做法三全其美：消息放出后，苹果、IBM、Motorola 的股价均有上涨。

画面切回乔布斯的幻灯片。IBM 的中途退出影响了新芯片的研发进程，而今，一年多之后，萨默塞特研发中心遗作的 PowerPC G4 虽迟但到，与英特尔奔腾 III 的恶战即将到来。

### 多媒体之争

英特尔奔腾 III 虽然依旧采用从奔腾 Pro 一脉相承来的 P6，但为了加强其在多媒体领域的话语权，加入了全新的 SSE 指令集（为了赶时髦称为「Internet SSE」），相比 MMX 有了极大增强。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sTkKnHDzdXmAbkS3c9GvqaQtS1gigyPp8YIi7SC9TmvU/https://cdn.sspai.com/2023/10/31/0b88b14049d0c644deeb505e65e4e5d5.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

奔腾 III、II 与 Pro 的对比，可见微架构几乎没变，主要变化在于增加多媒体扩展指令

之前英特尔的 MMX 指令虽然已经「技惊四座」，但仍存在诸多缺陷：不能加速浮点运算，只能进行整数运算，且宽度只有 64bit，并且运行时要占用 8 个 80bit 的浮点寄存器，即 MMX 指令与浮点指令无法同时执行，效率低下。

阅读信息

全文字数 5931字

阅读本文共需 10分钟

字号选择 

小

中

大

---

