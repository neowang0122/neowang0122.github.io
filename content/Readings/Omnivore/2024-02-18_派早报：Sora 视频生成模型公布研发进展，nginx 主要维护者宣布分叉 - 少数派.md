---
id: f315f428-cede-11ee-9ce9-331b5b5d550d
title: |
  派早报：Sora 视频生成模型公布研发进展，nginx 主要维护者宣布分叉 - 少数派
author: |
  少数派编辑部
tags:
  - RSS
date_saved: 2024-02-18 19:54:59
date_published: 2024-02-18 19:54:59
draft: true
---

# 派早报：Sora 视频生成模型公布研发进展，nginx 主要维护者宣布分叉 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/sora-nginx-18dbf9cdd06)

[Read Original](https://sspai.com/post/86497)

date_saved: 2024-02-18 19:54:59

date_published: 2024-02-18 19:54:59

--- 

# Full Content: 

## 你可能错过的新鲜事

### 01Sora 视频生成模型公布研发进展

2 月 15 日，OpenAI [公布](https://sspai.com/link?target=https%3A%2F%2Fopenai.com%2Fsora)了视频生成模型 Sora 的研发进展，并向少量研究人员和设计、影视从业者开放以获取反馈。

OpenAI 称，Sora 能够生成细节准确的复杂场景，理解用户要求的同时反映真实物理效果。Sora 生成的视频可长达一分钟，且可以包含多个镜头。除了从文本指令生成视频，Sora 也能从静态图像生成视频，以及在现有视频基础上做延伸和补帧。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7vBzpWwp3G0CNEYUVskF95e6oWePh8pNN1lURD1uvT4/https://cdn.sspai.com/2024/02/18/4317aa6ecbe57cca9f25fbae1bd2d0cf.gif)

在介绍页面上，OpenAI 展示了一系列通过 Sora 模型从文本描述生成的视频片段，包括城市人文、历史复现、自然风光、野生动物以及艺术科幻等广泛题材，总体上表现出清晰逼真、细节丰富的特点。OpenAI CEO Sam Altman 还在 X 上发帖[邀请](https://sspai.com/link?target=https%3A%2F%2Fx.com%2Fsama%2Fstatus%2F1758193792778404192)用户提交想要测试的文本描述，并回复了生成结果。OpenAI 没有透露生成视频所需时间，仅表示更接近于外出就餐的等待时间，而非传统特效渲染以天计的耗时。

在随附的[研究报告](https://sspai.com/link?target=https%3A%2F%2Fopenai.com%2Fresearch%2Fvideo-generation-models-as-world-simulators)中，OpenAI 称 Sora 是扩散模型和变换器模型的结合。在训练 Sora 时，素材视频先被统一处理为称为「贴片」（patch）的小单元，从而让时长、尺寸各异的视频都能用作素材。但是，与其近年的一贯做法类似，OpenAI 拒绝公布 Sora 的训练方法和模型参数等技术细节，仅对媒体表示训练素材来自「获得授权或公开的视频」。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sKuocFEAPGdPiiIdW0vGbPUvRO-zpV-N-myPsiZcQzuk/https://cdn.sspai.com/2024/02/18/8585bf882b0b81ee8607f54f843a15a0.png)

OpenAI 承认，Sora 目前可能难以模拟复杂的物理效果，混淆因果关系和空间位置，也可能被利用来制造虚假信息和仇恨内容。为此，OpenAI 表示将在 Sora 上线前采取一系列「安全措施」，包括邀请专家开展对抗性测试、开发检测工具、过滤不当内容，以及向政策制定者、教育工作者和艺术家开展调研等。

### 02nginx 主要维护者因理念不合宣布分叉

2 月 15 日，重要开源软件 nginx 的核心开发人员 Maxim Dounin 通过邮件组发布[公开信](https://sspai.com/link?target=https%3A%2F%2Fmailman.nginx.org%2Fpipermail%2Fnginx-devel%2F2024-February%2FK5IC6VYO2PB7N4HRP2FUQIBIBCGP4WAU.html)，宣布因与负责 nginx 开发和维护的公司 F5 理念不合，已自行创建一个分叉 [freenginx](https://sspai.com/link?target=http%3A%2F%2Ffreenginx.org%2F)，以便让 nginx 的开发「免受武断行为的影响」。

Dounin 在信中说，「一些非技术出身的新管理层自以为更了解如何运行开源项目」，「决定干扰 nginx 沿用多年的安全策略，无视开发人员的立场」。在接受[采访](https://sspai.com/link?target=https%3A%2F%2Fwww.theregister.com%2F2024%2F02%2F16%2Ffreenginx%5Ffork%2F)时，Dounin 表示其不满于 F5 最近故意为 QUIC 相关实验功能的安全漏洞分配了 [CVE 编号](https://sspai.com/link?target=https%3A%2F%2Fwww.cve.org%2FResourcesSupport%2FAllResources%2FCNARules%23section%5F7%5Fassignment%5Frules)，迫使开发者为本应定性为普通 bug 的问题制作安全补丁。（在安全社区中，随意分配 CVE 编号有时被认为是一种旨在装点门面的滥用行为。）但 F5 的技术负责人则[认为](https://sspai.com/link?target=https%3A%2F%2Fnews.ycombinator.com%2Fitem%3Fid%3D39378523)，其遵循一贯披露政策，功能的测试性质与披露资格无关。

nginx 是最流行的 web 服务器软件之一，在多项统计中使用率超过或齐平于历史更久的 Apache，常被用于反向代理和负载均衡等用途。nginx 最初于 2004 年由俄罗斯人 Igor Sysoev 发布，从 2011 年起以同名公司的名义继续开发，并开始销售付费版本。2019 年 3 月，该公司被 F5 收购。

### 03TikTok 推出 visionOS 专版

2 月 15 日，TikTok [宣布](https://sspai.com/link?target=https%3A%2F%2Ftwitter.com%2FTikTokComms%2Fstatus%2F1758129101800382905)在 App Store 上架专为 visionOS 设计的应用，成为较早专门适配 visionOS 的主要社交平台和视频平台。与手机版本相比，visionOS 版本默认使用双窗格布局，在视频的右侧展示评论和用户首页。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSdV80ao-ZHRmtND7aDEF1wZBpd9qbqheMADkwPU6Yz8/https://cdn.sspai.com/2024/02/18/2888e868b2883cda287c85631e700e73.png)

目前，其他视频平台中，迪士尼已经首发推出了 visionOS 专版，YouTube、Amazon Prime Video 等也已宣布将支持 visionOS，Netflix 则明确表示不会适配。国内方面，芒果 TV 近日推出了一款名为《芒果 TV-Vision》的应用。

### 04SpaceX 将清理 100 颗老旧星链卫星

近日，SpaceX 在网站上发布[通知](https://sspai.com/link?target=https%3A%2F%2Fapi.starlink.com%2Fpublic-files%2FCommitment%2520to%2520Space%2520Sustainability.pdf)称，计划从未来几周开始清理约 100 颗早期版本的星链（Starlink）卫星。SpaceX 表示，所有星链卫星目前都运转正常，但发现了常见于早期版本卫星的一个特定问题，可能导致故障率提高，因此决定提前采取预防措施。SpaceX 没有具体说明问题所在。

清理过程将通过「受控降落」实现，卫星将从 550 千米的近地轨道进入大气层，花费大约六个月时间自行烧毁，但在此过程中将保持可操控，防撞传感器也将继续工作。SpaceX 表示，由于其将持续补充新的卫星，报废这批卫星不会影响服务。根据公开信息，自 2019 年以来，星链共发射了超过五千颗卫星，其中四百多颗受控脱轨，另有 17 颗卫星失去操控。

### 05美国商标局拒绝 GPT 商标注册申请

根据美国专利商标局（USPTO）网站上近日公布的[文件](https://sspai.com/link?target=https%3A%2F%2Ftsdr.uspto.gov%2Fdocumentviewer%3FcaseId%3Dsn97733259%26docId%3DFREF20240206125856%26linkId%3D1%23docIndex%3D0%26page%3D1)，该局已就 OpenAI 提交的 GPT 商标注册申请作出最终决定，维持了此前拒绝注册该商标的决定。

决定文件表示，GPT 作为 Generative Pre-trained Transformer 的缩写，仅是对同类服务的通用描述，不具有商标所必需的显著性，不能用做 OpenAI 的专属商标。文件还指出，GPT 已经被很多其他公司在各类语境中使用，并举出了亚马逊 AWS 上关于 GPT 含义和用途的解释页面。

尚不清楚 OpenAI 是否会对此项决定提出上诉。无法注册 GPT 商标，可能意味着 OpenAI 不能对此行使商标专用权，更难阻止第三方服务在名称中使用 GPT 一词。尽管如此，OpenAI 已经成功注册了 GPT-3、GPT-4 等包含具体型号的商标，并且还在继续申请多个未来版本 GPT 的商标。

### 06iOS 将限制欧盟用户使用 PWA 功能

2 月 15 日，苹果更新了其官方网站上关于欧盟《数字市场法》的[说明](https://developer.apple.com/support/dma-and-apps-in-the-eu#dev-qa)，在其中确认，作为合规举措的一部分，欧盟用户将无法在 iPhone 主屏幕上保存和运行网页版应用。

此前，用户和媒体已经注意到最近发布的 iOS 17.4 测试版反映了这一变化：通过 Safari 的「保存到主屏幕」功能安装的网页应用无法以类似于独立应用的方式全屏运行，而只会像普通书签一样跳转到浏览器打开。

苹果将这一变化归因于《数字市场法》关于支持第三方浏览器引擎的要求。根据其说法，允许网页应用使用其他浏览器引擎，将导致「复杂的安全和隐私问题」；又因为「保存到主屏幕」功能的使用率非常低，专门为了应对这些新问题而构建一个「新的集成架构」，同时符合《数字市场法》的其他规定，是「不切实际」的。因此，唯一的选择就是在欧盟取消该功能，并对由此产生的影响「表示遗憾」。

## 看看就行的小道消息

* 据 _Video Games Chronicle_ [报道](https://sspai.com/link?target=https%3A%2F%2Fwww.videogameschronicle.com%2Fnews%2Fnintendo-switch-2-could-now-launch-in-2025-its-claimed%2F)，任天堂已通知游戏发行商，Switch 2 将从原定的 2024 年末推迟到 2025 年第一季度发布，原因是需要更多时间准备第一方游戏。
* 据彭博社[报道](https://sspai.com/link?target=https%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2024-02-15%2Fapple-s-ai-plans-github-copilot-rival-for-developers-tool-for-testing-apps)，苹果已经扩大了对适用于 Xcode 的 AI 编程辅助工具的测试，类似于 GitHub Copilot；还在探索用于 Apple Music 和 Keynote 的 AI 功能，以及在 Spotlight 搜索中支持大语言模型。
* 据 John Gruber 援引知情人士[说法](https://sspai.com/link?target=https%3A%2F%2Fdaringfireball.net%2F2024%2F02%2Feu%5Frcs%5Fimessage)，苹果此前改变立场，宣布支持通用的 RCS 短信标准，是为了提前符合中国国内的 5G 设备新规。根据报道援引的工信部官网[征求意见稿](https://www.miit.gov.cn/gzcy/yjzj/art/2023/art%5F2d5a7969581b4b12a78cd2c455649a8c.html)，国内拟要求在一定的过渡期后，「新申请进网许可的 5G 手机需支持 5G 消息，并随附提供相关进网检测报告」。
* 据《礼记》[月令篇](https://sspai.com/link?target=https%3A%2F%2Fzh.wikisource.org%2Fwiki%2F%25E7%25A6%25AE%25E8%25A8%2598%2F%25E6%259C%2588%25E4%25BB%25A4%23%25E5%25AD%259F%25E6%2598%25A5%25E4%25B9%258B%25E6%259C%2588)及《[月令七十二候集解](https://sspai.com/link?target=https%3A%2F%2Fzh.wikisource.org%2Fwiki%2F%25E6%259C%2588%25E4%25BB%25A4%25E4%25B8%2583%25E5%258D%2581%25E4%25BA%258C%25E5%2580%2599%25E9%259B%2586%25E8%25A7%25A3)》等报道，逢今日[雨水](https://www.cma.gov.cn/ztbd/2023zt/24jq/yushui/index.html)节气，「鱼上冰，獭祭鱼」；「祭鱼，取鱼以祭天也。所谓豺獭知报本，岁始而鱼上游，则獭初取以祭」。即水獭会将捕到的鱼整齐排列在岸上，仿如陈列供品。但在就此向[少数派商店](https://shop549593764.taobao.com/)的水獭求证其今天吃不吃鱼时，水獭正忙于将春节积累的订单整齐排列在地上，「什么时候发完什么时候吃」。

## 少数派的近期动态

* **少数派 2023 年度征文正在接受投稿。**3 月 8 日前，你可以在少数派的关键词「热爱」「独立」「跨界」「平衡」中选择一个，结合自己在过去一年的思考作出诠释；也可以自选其他关键词，言之有物即可。投稿需添加 `#keyword23` 标签、在文首说明参加征文，并以「社区文章」类型发布。发布于 1 月 15 日或之后、且未在首页展示过的文章，也可在修改后重新提交为本次征文。本次征文将设置一至三等奖共十名，最高可获得万元创作激励，及特制徽章和权益奖励。[**进一步了解**](https://sspai.com/post/86409)

## 你可能错过的好文章

* [用最低限度的开始，给自己最大的养成空间](https://sspai.com/post/78434)
* [演示大考：全新家具、个性化试戴，Vision Pro 发布对零售店的一次大考](https://sspai.com/post/86439)
* [整理假期拍摄的照片之前，不妨读读这些关于摄影的技巧和理论](https://sspai.com/post/75837)
* [新年新开始：从为什么到写什么，带你重新认识日记](https://sspai.com/post/86356)
* [这 5 个数码产品，是我们 2023 买过最不后悔的「新玩意」](https://sspai.com/post/86457)
* [城市漫步指南：去墨尔本躲避北半球的冬天](https://sspai.com/post/85649)
* [城市漫步指南：非典型的福州之旅，看见这座城市的 B 面](https://sspai.com/post/86245)
* [仰卧起坐脖子疼？聊聊如何找对健身发力感](https://sspai.com/post/86361)
* [做好新年计划，你可以先从制定年度预算开始](https://sspai.com/post/86327)
* [真情侣，不记账：用支付宝荷包 + 飞书多维表格建立消费记录与分析系统](https://sspai.com/post/86274)

03\. TikTok 推出 visionOS 专版

04\. SpaceX 将清理 100 颗老旧星链卫星

---

