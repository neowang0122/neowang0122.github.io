---
id: 4f1908e8-9e90-11ee-876b-cf030c2ddcf8
title: |
  Android 玩机社区正在走向消亡 ｜ 少数派会员 π+Prime
author: |
  克莱德
date_saved: 2023-12-19 08:12:01
date_published: 2023-12-19 08:12:01
draft: true
---

# Android 玩机社区正在走向消亡 ｜ 少数派会员 π+Prime
#Omnivore

[Read on Omnivore](https://omnivore.app/me/android-p-prime-18c8306d6fa)

[Read Original](https://sspai.com/prime/story/play-integrity-and-the-demise-of-the-android-mod-community)

date_saved: 2023-12-19 08:12:01

date_published: 2023-12-19 08:12:01

--- 

# Full Content: 

你知道 Android 什么时候开始变得无聊吗？大家都开始接受「不合理」的时候。

---

> 你知道 Android 什么时候开始变得无聊吗？大家都开始接受「不合理」的时候。

很多读者或许和我一样，随着年龄增长，对「刷机」二字开始感到熟悉又陌生。看到 fastboot、bootloader 解锁等术语会觉得似是故人来，听说 Kernel SU 这样的新 root 方案时会想起以前和 [SuperSU](https://en.wikipedia.org/wiki/SuperSU)、Magisk 相处的种种——但已经未必像当年一样恨不得马上抓起数据线尝试了。

想当年，「刷机」曾经深深根植于 Android 用户社区的文化中，代表着 Android 用户的「不将就」：手机厂商的系统卡顿、广告多，可以换个干净、简洁的第三方 ROM；默认的内核调教太保守，可以刷个 Sultan 内核；眼馋的功能和体验迟迟等不到推送，可以安装 Magisk 模块……

事实上，或许正是因为知道 Android 典型用户的好恶，在早年，除了索尼、三星等少部分厂商，绝大多数 Android 厂商对刷机也持开放态度。但随着时间推移，越来越多的厂商开始选择关上设备的大门，为刷机设置各种政策上或流程上的限制，甚至彻底停止提供 bootloader 解锁——GitHub 上有用户专门整理了一个「[耻辱柱](https://github.com/melontini/bootloader-unlock-wall-of-shame)」。

好在，Android 的维护者 Google 一直还算坚持「群众路线」，旗下从 Nexus 到 Pixel 的历代手机都是刷机玩家的优选，无论是解锁 Bootloader，还是获取 root 权限，都几乎不会有任何不利后果。

但是，这些仅存的玩机绿洲可能也时日无多了。

## 一个坏功能倒下了，还有另一个坏功能

11 月 2 日，Chrome 团队在一篇[博文](https://android-developers.googleblog.com/2023/11/increasing-trust-for-embedded-media.html)中就此前遭到多方抵制的「网络环境完整性（[Web Environment Integrity](https://github.com/RupertBenWiser/Web-Environment-Integrity)）」API 做出声明，称在收到用户的反馈后，已决定不再考虑该方案。此前闹得沸沸扬扬、被 Vivaldi、Firefox、Brave 等多家浏览器官方公开抵制的 WEI API，终于也在一片欢呼声中被宣判「死刑」。

简单回顾一下，WEI API 的目的是让网站开发者验证用户浏览环境是否「可信」，比如电脑上是否有病毒、浏览器是不是套壳全家桶成员、用户本身是不是为流量所驱动的机器人……根据该 API 返回的结果，网站可以决定是否向用户提供对应的网页内容或功能服务。

![Fkflbns49oOeCDx58O1c6H0Hndf](https://proxy-prod.omnivore-image-cache.app/0x0,sS_4rAJEC6oi4H_nqZDWPjSuf4Y_D8jvSMRgWGkzfXqU/https://cdn.sspai.com/editor/u_/cm065gdb34t99qr7msag?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

WEI API 的工作流程

这本身无可厚非，毕竟机器水军、恶意软件都是真实存在的问题。问题在于这个 API 太容易被滥用，可以轻易地被用在本不需要严防死守的日常网页浏览场景、用来给用户完全合理的功能修改或隐私自卫行为设置障碍。

举个例子，做广告营生的 Google 向来和广告拦截扩展不对付，最近[更有爆出](https://www.404media.co/youtube-says-new-5-second-video-load-delay-is-supposed-to-punish-ad-blockers-not-firefox-users/)其人为设限、通过设置 YouTube 视频加载延迟的方式来惩罚广告拦截器用户、拉动 YouTube Premium 订阅的勾当。如果用户浏览环境的「可信度」验证方式掌握在 Google 手里，广告拦截器是不是更容易因此遭难呢？再举个例子，要是 Google 和微软 Edge 团队一个德行，谁又说得准 Arc 浏览器这种新秀何时才能拿到那张宝贵的「可信浏览器」认证门票呢？这种「既当运动员又当裁判」的提案，难以让人放心。

**阅读更多：**[被浏览器厂商公开反对，想让你少看验证码的 WEI API 哪里出了问题？](https://sspai.com/post/81970)

在一片骂声中，Google 只得限缩矛盾范围，宣布改为开发面向 Android 设备的 Webview 媒体完整性 API，作用的设备、面向的场景更有针对性。

![B8qFb2A12o4gBOxw6kJcvXyunxb](https://proxy-prod.omnivore-image-cache.app/0x0,si4OPIQdUELD-7t1bZHTVRlAXCU6NEYhS79LBb_SUOo4/https://cdn.sspai.com/editor/u_/cm065gdb34t99sabseb0?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

Android Webview Integrity API 工作原理，要解决的是 Webview 嵌入页面的运行环境可信度问题

看起来，这是一件群情倒逼 Google 悬崖勒马的成功案例。然而，一个影响更深远的「新功能」却在 WEI API 倾倒的欢呼声中逃过了一劫——Play Integrity API

Play Integrity API 的前身是 SafetyNet API，一个曾被欧洲议会报告员 Andreas Schwab 作为反面教材「[点名批评](https://www.euractiv.com/section/digital/opinion/time-to-restore-fairness-and-contestability-in-digital-markets/)」的玩意。

![NV66bm6SCow8R0xnB8kcX8zXnRf](https://proxy-prod.omnivore-image-cache.app/0x0,sXRnanKlEsf_wE2EG0DNb8nMoU1ASFNSz-kghwdYr86E/https://cdn.sspai.com/editor/u_/cm065glb34t99oqpvueg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

SafetyNet API 的运行流程，Play Integrity 同理

根据 Google 的官方介绍，Play Integrity API 也是一种「可信度」认证方式，它可以检测应用二进制文件是否为「正版」、应用的安装渠道是否为「正规」、应用所运行的 Android 设备是否为「正品」、应用所处环境中其他人是不是「正义」的小伙伴。是的，Play Integrity API 正是给上面提到 WEI API 提供启发的方案，实现方式也几乎没有区别，这也就意味着……

……它们可能作恶的方式也如出一辙。这里的正版、正规、正品、正义，指的无一例外都是 Google Play 商店安装的、经过 Google 服务认证的或 Google Play 服务器所能够识别的。Google 再一次充当了「裁判」，而在它可以「一言堂」的 Android 生态内，除了受到影响的 Android 用户叫苦不迭，很少有人站出来对这样的做法表达不满。

## 古有高中低端，今分三六九等

那逃过舆论审判的 Play Integrity API 对开头提到的玩机社区到底有什么影响？

就像浏览器厂商们面对 WEI API 时所联想的那个黑暗未来一样，在 Play Integrity API 的作用下，Google 以「安全」和「可信」为旗帜，将不同的设备分成了三六九等。在 Play 管理中心中，开发者可以根据 Play Integrity API 所返回的不同设备标签，执行分层的「反滥用策略」。

阅读信息

全文字数 3176字

阅读本文共需 5分钟

字号选择 

小

中

大

---

