---
id: 450aa326-bd11-11ee-b738-23d3e8f4f2c4
title: |
  GPTs、中间层、Chatbot 虚拟社交、AI Agent，大模型应用最新方向解析 - 少数派
author: |
  Bay的设计奥德赛
tags:
  - RSS
date_saved: 2024-01-27 02:53:02
date_published: 2024-01-27 02:53:02
draft: true
---

# GPTs、中间层、Chatbot 虚拟社交、AI Agent，大模型应用最新方向解析 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/gp-ts-chatbot-ai-agent-18d4aef9f94)

[Read Original](https://sspai.com/post/86005)

date_saved: 2024-01-27 02:53:02

date_published: 2024-01-27 02:53:02

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSlgksn5xxfFyVy6tuszbMlWMhfiySZWwLu6dozmhU-U/https://cdn-static.sspai.com/ui/img-placeholder.png)

GPTs、中间层、Chatbot 虚拟社交、AI Agent，大模型应用最新方向解析

## 前言

距离上次写大模型应用的文章已经过去了大半年：​

这期间 AI 如火如荼，虽然我个人感知大模型应用生态并没有太多变化，但还是想记录下近期在大模型应用现象上的观察和浅显见解。

这篇文章会从 GPTs、大模型中间层（Dify、Coze)、大火的虚拟社交（Character.AI 等）聊到 AI Agent、大模型的多模态能力、产品推荐，涵盖了 23 年下半年至今大模型应用领域的最新进展。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syAEksdA7uLvDUjpg4T2xq1fBuJ2YoR5s2djhHwKA9GM/https://cdn.sspai.com/2024/01/23/dcd7ba9e0f515b7c1c8c2b022bac816c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

全文 8500 字，enjoy～

## Chatbot 是自然衍生的产品形态

### 1.1 GPTs

2023 年 11 月的 OpenAI 开发者大会上，OpenAI 推出了 GPTs，其本质是鼓励用户对 ChatGPT 进行 Prompt、数据深度定制并分享给社区中的其他用户使用（有些 Notion 社区创作者分享、售卖模板的意思），也减轻其他用户定制成本。此外，GPTs 配置过程十分简单，用户无需拥有代码能力，只需要定义好需求场景、定义好 Prompt 就可以完成初步定制。而想要 GPTs 更好用，则可以上传一些知识库数据，调用其他产品的 API。总体来说开发成本远低于 APP 和网页。

分享一个详细的 GPTs 配置教程：[GPTs从入门、进阶、实践到防护的万字教程](https://zhuanlan.zhihu.com/p/679323697/edit)

开放以来，GPTs 的创建和使用一直受到 GPT Plus 账户限制，近期开放的 GPT Store 和市场上的排行网站没有太大区别。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sN8Nf-6GcjN-_WC07OAEu5LWiyUnCuhdfSJf68bS2EpI/https://cdn.sspai.com/2024/01/23/aacb6e2ccbec10315863ec2320c1b788.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### GPTs 类型

结合了 GPTs 收录网站的信息，目前的 GPTs 大概有如下几类。在这些方面，某些 GPTs 确实被定制成了好用的小工具。

![](https://proxy-prod.omnivore-image-cache.app/0x0,scie1hczHkacWb1myWikuWXlfq-SYiWfLRqjncXHtIC0/https://cdn.sspai.com/2024/01/23/05a15d66eb40b46c01672cf0d8ac7eb8.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

不过，下面才是我想表达的核心观点：

### 面临的挑战

#### 没有创造新的场景，多是在做原有场景的改造

上述网站收录了 8 万多个 GPTs，很多需求小众、场景低频的，用户使用可能只是一时图个新鲜，缺乏持续使用动力。而真正有需求的场景（如数据分析、语言学习、图像生成、PDF 阅读等）则同质化严重（大家很容易想到一块去）、竞争激烈。

此外，大多数 GPTs 解决的诉求离大众消费场景较远、天花板低，难以形成规模效应。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sp_RmPbe_OPTX409bXTpDbVqt4H5EMB0PhTWwtjSUNp0/https://cdn.sspai.com/2024/01/23/ad933b3e9fd6473b3b3df152914eb0cf.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### GPTs 的产品形态并不占据绝对优势

GPTs 解决的问题和市面上已经在做的各类应用中 AI 助理形态有一定重合，而 GPTs 给用户的心理预期则更像是 ChatGPT 中即用即走的「小程序」。若面向大众消费端，创作者需要将能力进一层封装，产品形态上无法和 App Store 中已经积累了更多用户的应用、更易触达用户的应用去竞争。

打个比方，同样是周报生成器，用户是更愿意使用钉钉、飞书中集成的虚拟助手还是去 GPTs Store 中找到 GPTs 进行使用呢？而应用集成 GPTs 能力只是时间问题。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sZ0sf2Bfj8EuIOl7wy597AFdQvJlCNavNROfG5EDabpo/https://cdn.sspai.com/2024/01/23/d6d5e93f293eca63132ccc7f72c6414c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

图片引用自 Appso

#### 很多创作者是去薅流量的

很难想象有多少会持续优化知识库提供优质服务。

#### GPTs被复制抄袭的门槛太低

不知道这个问题官方何时会出来解决。

#### OpenAI 不是唯一一家开放 API 的大模型厂商

除非拥有垂直领域的专业知识库和独家数据，否则 Bot 的制作并没有门槛。真要说体验上会有多大差异，普通大众感知不会特别强烈，也就是说大部分用户不会追求产品一定要模型达到 GPT-4 的能力。这就延伸出下面要说的中间层了。

### 1.2 大模型中间层

目前国内比较明星的产品有两个：[Dify](https://dify.ai/zh) 于 23 年 5 月推出，字节 12 月上线了类似的产品 [Coze](https://www.coze.com/)。这类产品能够接入多个大模型能力，并通过可视化编排，基于任何 LLM 部署自己版本的 Assistants API 和 GPT。这些产品提供的定制能力是远远强于 ChatGPT 的 GPTs 的，目前还有可免费白嫖的 GPT-4 推荐使用。

![](https://proxy-prod.omnivore-image-cache.app/0x0,shm5pDtXYFe3W7AD-VAAdukF7TNLR4GlPeZONsl3SvQk/https://cdn.sspai.com/2024/01/23/b933a90ae7f7827c6185d8ca40d7b042.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 中间层产品价值

**降低集成难度。**

中间层提供了简单的 API 接口，开发者可以通过这些接口轻松地将大模型能力集成到自己的产品中，不需要自己训练搭建大模型，也不需要处理与大模型交互的复杂度。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbUw9INfP0CefdPkuHexlIDDRRmedH6l326T4ODT94_A/https://cdn.sspai.com/2024/01/23/article/d8c9ca2fa8c6544a9230d93d37b77a72?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Coze 还支持发布到多个平台作为 Bot 能力使用，这在开发者看来是非常有吸引力的一项功能

**接入多个大模型，隔离大模型更新风险。**

中间层可以对下游客户屏蔽大模型版本更新带来的影响，确保产品稳定性。

![](https://proxy-prod.omnivore-image-cache.app/0x0,seLsNepDpYWGciFKwRVKDAAeDoe1T3I94yX_Nu5EQZWI/https://cdn.sspai.com/2024/01/23/article/35243bb6c73c091529e5bf39aff05227?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**提供更多辅助功能。**

中间层还可以提供日志、监控、数据标注等辅助功能，为开发者提供更多价值。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sMAkYk9sqxZfLg7BMrrTUhyTbkr7Bjo0PsrYPvgHaTCo/https://cdn.sspai.com/2024/01/23/article/f62cc25592f04e04d201ecdc48628d9d?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### Coze

在 Coze 中可以看到公开的 Bots 及 Bots 的详细设置：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s4ACqQtLxEXq_alsRSTj2LFUDcWVYpHp8HuTx9g19e1w/https://cdn.sspai.com/2024/01/23/article/f51ecac033bd10ba2abc904dd473ba99?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2gM5Irl3OfC5vsMmS-Ev_w057e3wPPVMiFQgC6DkWGI/https://cdn.sspai.com/2024/01/23/article/8a8fc19b6a690c6d78b4ad658c7b6a6c?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

图为一个仅靠 Prompt 和 Plugins 定制的推荐 B 站视频的 Bot

### 定制案例：AI 趋势总结 Bot

参考 Bilibili Assistant，我想尝试定制一个能为我总结 AI 领域最新趋势的 Bot。构建前可以先阅读 [Coze 产品文档](https://www.coze.com/docs/prompt.html)，比如官方给出了 Prompt 的写法建议：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s303ZrcplRDi2zELwzsgAu94layfogChKKs428bv5voE/https://cdn.sspai.com/2024/01/23/article/4032c8b1265caf4555bb2e1108f0dd53?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

首先，填写创建 Bot 的简单信息，头像可以使用 Coze 内置的 AI 能力生成：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sM2ktgR4N5pA45BPEslZ9sJRmXb0AXZO3pAAiDdRvCYY/https://cdn.sspai.com/2024/01/23/article/76a2e6c5d21b3ccd37b5a28f1ce953be?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Coze 中有许多已经内置好的 Plugins，我在此选择 Google 和 X 两个 Plugins：

![](https://proxy-prod.omnivore-image-cache.app/0x0,szj1yeyXmb7_BGd3mhbBYYSPqkdjTjfEYsPatLYTRMrs/https://cdn.sspai.com/2024/01/23/article/9ee5a8518b2e7d19b25df068f51ef9a5?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

按照官方建议撰写 Prompt，并且在右侧对话框进行测试，我的 Prompt 经过了大概 4-5 版的迭代：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sII6I-4SQHMMJ9dTvRCwTuAhyo91noImwWfykYCGBe0g/https://cdn.sspai.com/2024/01/23/article/0d641b5ac587bb4c2b1e7cba186e9794?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

 迭代记录：

![](https://proxy-prod.omnivore-image-cache.app/0x0,seoxb2awTYjKFoqfDaK6QjlR_f5mtXOS3u2GBJBkYnRY/https://cdn.sspai.com/2024/01/23/article/d8ba9f71ef59de0c2922cbdc34792930?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

设置开场白、定时任务的功能：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sZC2vuv2oOnyixPvXc7yecWGvxw4M4gMMD85mJcLCF6E/https://cdn.sspai.com/2024/01/23/article/ca1c12f8c3312536756f9a0bcb6f44e3?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 测试效果

经过我的测试，用 Coze 简单定制的 Bot 回复效果已经**比 Perplexity 的效果好**，特别是在调用 Google 搜索的结果上给了我很大的惊喜：

**测试一：询问 24 年的 AI 产品更新**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sxG4zF-7tNNgqDsUWf-9qFzP9CEWNLny4Z13oyO8mKFA/https://cdn.sspai.com/2024/01/23/0a963446a77db018186d61c6f74872fb.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**测试二：询问 MJV6 版本更新的具体内容**

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3kifsvKnrd-nCX23soqmRlNXeonlF2cN8AhfFYWCQAI/https://cdn.sspai.com/2024/01/23/85959288f8932d876e7a5e7a9c759a43.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**测试三：检索 X 推文**

在 X 内容的总结上，回复时好时坏，只能达到 5 成可用状态。出现了一些啼笑皆非的状况，比如分不清 Adobe AI 和人工智能 AI，同样的问题过几天问返回的结果也一模一样等。我猜测这些问题是由于 Coze 中没法接入我的 X API Key 导致的，Prompt 的方式也让我无法更准确的定义接口调用方式。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sW7ifm3a3R2S_8M3mjqFnA9lRWeNKLxKcw5DmTB8rD1Y/https://cdn.sspai.com/2024/01/23/d59744d504aede729ef0a9d2a645480d.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

定制这个 Bot 的初衷是当作 X 趋势生成器使用的，结果无心插柳柳成荫，做成了可以白嫖无限 GPT-4 额度的且比 Perplexity 更好用的 AI 搜索引擎，我已经在频繁使用了。

总的来说，Coze 的能力很复杂也很强大，但在深度定制 Bot 的能力上缺乏详细的指引，字节官方的文档虽然详细但对于多任务处理、Prompt 调试等没有给出更多建议，Plugin 部分的文档非技术人员看着还挺头晕的。帮助用户定制真正好用 Bot，大模型和中间层都还有挺长的路要走。

### 1.3 Character.AI 为首的虚拟社交

Chatbot 聊天机器人的赛道卷了多年，这一次在 LLM 的加持下再次爆发，Character.AI 为代表的虚拟陪伴 Chatbot 产品成为了热门赛道之一。许多团队在 GPT 出现之前就已经在筹备相关模型和产品了：Character.AI、Replika、国内团队 Minimax 的 Talkie、星野，都是头部选手，目前众多大厂也已经下场推出竞争产品。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sDJ9uX9FqFJKdSEw0DX3RJ8ogcX2fV6kbguZQ2Iqutyc/https://cdn.sspai.com/2024/01/23/article/f9d70edcce308bfc07caf919924d7d79?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

该方向本质上也是「GPTs」，但是在立绘、对话沉浸感上都经过更多打磨。

![](https://proxy-prod.omnivore-image-cache.app/0x0,seKE23QXdF1-05OcRh8jb9_1nuzHpLkyTJ0rkzzFP_P0/https://cdn.sspai.com/2024/01/23/article/03775712add4a10824a36fa04c5551d8?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 用户诉求

观察头部产品，大部分用户的诉求围绕在下图这几个方向。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sADa_oX6F1mjNsPe3T7YHinTPvFbBM2jHP9K-yoOuMnc/https://cdn.sspai.com/2024/01/23/article/616eab0182e90c594ea1e913276e932f?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

但当我翻看了小红书、贴吧，又蹲了几个国内内测产品的群后，基本上用户主动晒的内容都和荷尔蒙诉求有关。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s-6F5WJh5zvhzTC8HgBeso7cCk1HSDQE6Dt091kvLmo0/https://cdn.sspai.com/2024/01/23/article/6c476fb379085032b9b3791746fd3308?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

内容来自 36kr，可辅助参考

#### 数据

目前虚拟陪伴产品的活跃和留存都很惊艳，但付费能力大多处于有待挖掘的状态。结合各方公布的数据，基本上目前粗略估计的情况是：头部产品日活在 100 万+，C.AI 做到了500 万+；次留基本可以做到 50% 以上，7 留在 30% 上下，是非常可观的。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJnYADH5xRbmecYWgimktspo_u17axbwyvpqf3BCd5OM/https://cdn.sspai.com/2024/01/23/article/e69e91e38cb53c5bf16121ecc8fb0959?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

图片出自白鲸出海，点点数据

但目前在商业化方面，Chatbot 类产品没有做得特别好。星野、Talkie 模仿了乙女游戏的抽卡付费，但其付费数据的不理想可能是内容过薄导致的。和 Dating 产品相比，Chatbot 产品刚需付费的场景少了很多，更多深度玩法还有待探索。

#### 产品形态

Replika 做重虚拟角色定制过程，强调角色唯一性。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s-hdBfgDPY7SSkjmqiiyEN-WBlriDP60aJjM2tZhB-oc/https://cdn.sspai.com/2024/01/23/article/acbb929e733d7de1521f8db529624876?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Replika 的定制过程

而 Cai、Talike、星野、筑梦岛等一众产品则是提供众多 Bot 供用户选择，并支持 UGC 创建Bot并分发。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3QsG-RqHsdjuvGa94lx4Ty7Qkk9yLHR5dZbsDnZYonM/https://cdn.sspai.com/2024/01/23/article/55fb560abb019a3010be24619a0e3737?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Aura 进入后虽然只有单个角色，但支持开启多个剧本的角色扮演，并且剧本由 AI 生成（降低了重复性）可以体验和较长文本的对话。唯一遗憾的是剧本中的人设、名称上都没有做到统一，让用户产生割裂感，在整体体验上不如乙女游戏中的剧情解锁丰富。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s4aFbB68kgFiTYa1J3x1YAQuhTFbXDOd19kWSdxNouXM/https://cdn.sspai.com/2024/01/23/article/17d421cc8336ee850e5c4a798c3e85ae?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Aura 的角色扮演

#### 多模态开始卷起来了

长期来看，模型能力是 Chatbot 类产品的核心，但图片、语音等多模态内容的丰富可以在一定程度上弥补模型能力的不足。

**形象**

产品表现层上，除了 Replika 使用了 3D 捏人，其他产品还处在快速大批量AI图片生产的阶段。（不过就过去一年元宇宙的观察，注重 3D 不一定是一个好方向，迭代速度慢、开发成本高，用户手捏的效率不必切换一个 Bo t低，另外国外的 3D 人物画风总让我觉得怪怪的😂）毕竟是竞争激烈的 2C 赛道，用户非常「看脸」。

值得一提的是，爱塔的部分 Bot 率先使用了动图，让用户在刷 feeds 时的场景沉浸感更强。在 Pika、SVD 产品控制能力加强的趋势下，未来 Chatbot 立绘的动态化应该很快会被广泛采用。

**语音**

从表格中可以看到，最新推出的产品基本都配备了 TTS 能力，从数据和体验上看，语音能力能强化有助于用户留存。爱塔、星野在列表停留在某个人物时就会播放开场白，完全不需要看详细的人设就可以对人物有一定带入，美中不足的是对话时无法自动播放语音，否则体验还会更上一层楼。

以下纯属个人浅薄观点记录，不一定严谨准确，欢迎后台留言拍砖交流。

#### 长期使用趋势

在保证模型记忆力的情况下，我认为情感陪伴类用户会在长期的筛选中选择 1-3 个心仪的 Agent 进行长期高频的沟通对话，同时会存在阶段性的替换需求（新鲜感过去了换个更好的聊）。但目前这类产品擦的倾向实在太高，未来国内监管的力度带来的影响不可知。

#### 方向分析和预测

**市场情况**

总的来说，因为国内监管（对 NSFW 内容的限制）、国内外 2C 用户付费能力的差异（与其他互联网产品不同的是，大模型是有成本的，且短期内不会迅速降下来），大部分从业者应该都不太看好该方向在国内的发展。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sBzj7dPC7VGV9nxuUJ6UHD0DFh3-14-jLtRWsOj2fsv4/https://cdn.sspai.com/2024/01/23/article/e575db9f9b162cac2ae0143431a520ba?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

海外 App Store 中这样的虚拟 18+ 产品已经一大把了，而国内毕竟拥有巨大的人口基数，且国内市场乙女向有《恋与制作人》《光与夜之恋》《橙光》等成功案例，加上情感陪伴底层诉求，Chatbot 的国内市场还是存在的。

此外，C.AI 形态的产品崛起让一部分用户涌向成本更低的 AI 虚拟人，极有可能会抢走一部分 IM、Dating APP 的活跃和时长（至于抢走多少可能还要看该赛道产品的未来发展）但倘若 IM、Dating 产品做这件事，又像是搬起石头砸了自己的脚，降低了平台上真实用户的连接机会，也会对已有的产品调性社区文化产生反噬，这里我持长期观望状态。

不过也许未来有天当 AI 内容不再稀缺，用户反而想要回归和真人的社交关系也并非不可能。

**产品规模**

单纯从国内市场而言，我认为这部分产品吃的是小众垂直强诉求的用户市场，用户量天花板不会特别高（具公开资料显示，Soul、探探巅峰期日活均在大百万级别、恋与日活 18 年 200 万，独立 Chatbot 产品应该不会超过这个上限了），因此其不会是大公司眼里 Top 级别的好生意。

**为什么我们会看到大厂全都往这个方向挤？**

我猜想还是看中了 CharacterAI 为首的产品拥有可观的留存与时长。今天的 2C 互联网早已变成注意力的生意，除了抖音以外的头部产品无不面临数据下跌带来的焦虑感，而 Chatbot 可能就是一剂短期止痛药。另外一个原因就是竞争对手都在做，无论如何都要入局做主动性防御。不过大公司基本都看重已有用户盘，因此比起做独立 APP，内嵌在已有产品中是更合适的形态。不过说不好未来会不会面临和 OS 系统厂商争抢市场的局面（这些年 OS 厂商在语音助手上的功夫也不是白下的，以及 OS 发布会也需要新的AI故事），因此如果真的想做这个方向的产品，更早出发较好。

### 1.4 大厂在 Chatbot 方向上的优势是?

#### 资源整合，辅助已有需求场景

前面提到过，对于已经拥有一定用户量级的产品来说，可以将 Chatbot 能力融合到具体场景，用户的使用会比较顺滑自然。像钉钉这类办公产品接入虚拟助手对话能力、GPTs 去为打工人提效是很有必要的。对于抖音这样的平台，Bot 定制能力适合开放给中小商家、视频直播达人等。比如培训机构、商家可以在 Coze 平台上定制虚拟客服，通过上传知识库让模型了解自家产品概况，在短视频、直播评论区、群聊场景辅助创作者进行问答、评论区互动、私域引流等，提升用户下单转换，能进一步增强抖音电商和群聊的能力。

之前也 YY 过，头部 KOL 适合用自己的 IP 做 ChatbotIP 定制，比如用户可以对李佳琦的 Bot 咨询护肤技巧、购买建议。至于陪伴类虚拟社交方向，估计乙女游戏已经看到了陪伴类虚拟社交产品的兴起，作为防御应该会在游戏中加入对话能力，进一步保证留存和用户时长。

#### 更天然的交互场景还有待挖掘

在 PC 端，Raycast、Arc 均提供了快速向 ChatGPT 提问的能力。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSU0hiBqhHOkAL5StVZoL16mBaSd0oyOjgQPJCd_Smmg/https://cdn.sspai.com/2024/01/23/bab8fb5e894fcf2489784677d9a2839d.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

同样的，在移动端如果能做到用户在不用点击加载应用就快速唤起大模型进行对话会更好，当然这个方向我目前想到的解法都更适合 OS 厂商去做。

拿 iOS 现有的交互简单发散几个可能的方案：

**方案一激进派：用户可以将桌面某一屏设置成智能助理，并可以直接对话。**锁屏页面解锁，智能助理已经将新信息归纳总结，也可以进入和智能助理对话的桌面查看并快捷处理信息。

![](https://proxy-prod.omnivore-image-cache.app/0x0,swOhp0HkrYnksxqNsFRLActr5J7MU_NNV0u67Od2vdUM/https://cdn.sspai.com/2024/01/23/a2f3aeeb5f1175957afbd7191a4dcbc8.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**方案二保守派：桌面下滑搜索改成和智能助理对话的功能，需要了解什么直接询问智能助理即可。**相比于方案一没有那么激进，更适合智能助理能力有突破但还没那么接近 AGI 时的方案。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sNr3j6U-Bg3PTlIswfRwtizfuBobI8MAi7UmZ5SUav84/https://cdn.sspai.com/2024/01/23/aa768cab107954e8b282aadb133b165c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

如果有 OS 厂商看中了 idea 记得给我打钱 hhh

当然，这些都是理想情况的 YY 罢了，想要调动自身生态外的应用回传数据，实现难度可想而知。另外，如果过于强调效率，移动设备繁荣的应用生态失去了用户时长、广告收益，带来的种种的问题对 OS 厂商来说也是非常难解的。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sUEwnIUBKqskjazrFU_1D9A8x89cGw1dwde7r8PKaNdY/https://cdn.sspai.com/2024/01/23/article/6596b9ac433d7aa4ac6e55847a3b3279?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

这也是我没那么看好近期发布的集成了 LLM 的智能硬件 Rabbittech 的原因，此类产品大概率噱头大于实际效果

![](https://proxy-prod.omnivore-image-cache.app/0x0,scOwKe3LsJwimr7zWD2RBPue6tjTxDqpygB6w_-rptFQ/https://cdn.sspai.com/2024/01/23/fbb0ba682763c624f1b9ae45cfb5c2bf.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 2.1 AI Agent 定义

准确的来说，AIAgent 指的是一种智能代理系统，它接近人类的大脑，可形成记忆、达成行动规划、自动交互、主动预测。

目前 AI Agent 的概念在市场上并没有达成共识，存在被广泛滥用的现象（很多 Chatbot 应用给 Bot 冠以「智能体」的名称，准确地说也是对 Agent 的误用）

#### AI Agent 应用的特点

**个性化：随着用户的使用越来越了解用户习惯和想法，从而作出喜好预测。**

![](https://proxy-prod.omnivore-image-cache.app/0x0,scXFcR1mtvcn3r0Vv6H0TQKeN8smeoF5MrYSHCcWTq6o/https://cdn.sspai.com/2024/01/23/94535b5fbe1a4d5f5919aafc5e5c8051.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**可自主完成任务：**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sfxpqc6HfUqRToOG1Y8r_y_xAZSMXlGmcytJafYodWwE/https://cdn.sspai.com/2024/01/23/45c15c257ed9122f12e8cf03f9082a38.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

AutoGPT：用户输入一个目标后，可自主执行任务、递归地开发和调试代码

**多 Agent 协作：**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sudrHq0uG4l9Xl0wJuTJhotbI1EpC9xJLCsRTpCAuPcY/https://cdn.sspai.com/2024/01/23/f7c275c4ac8928fb9fba10a2760e5645.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Fixie AI 在收到用户请求后启动多个负责不同模块的 Agent 进行数据查询和传递，最终生成邮件内容给客户回复

博主 @林亦LYi 的《AI 炒股？我开了一家员工全是 AI 的公司，自动帮我炒股》就在某种程度上实现了多 Agent 协作的能力

目前，AI Agent 应用大多集中在2B场景，面向个人消费者的产品少之又少。一方面是高度智能化的 Agent 能力需要打磨，概念落地还有较长一段距离；一方面是 AI 和娱乐消费诉求的结合还几乎没有，其主要带来的是生产方式变革和效率变革。个人消费者方向，目前只看到「私人助理」场景。

### 2.2 惊艳的 Dot APP

[Dot](https://new.computer/about) 是目前看到的最接近理想 AI Agent 形态的 C 端私人助理。手机厂商、智能音箱炒了那么多年私人助手的概念，终于有像样的产品出现。在公开的案例中，Dot 支持用户发送文本和图像、音频信息并理解内容，它能够为用户制定计划、进行文件管理、推荐咖啡店，帮助用户访问互联网中的最新工具和服务，Dot 希望成为用户个体意识的延伸。其设计师是前 Apple 设计师 Jason Yuan。

虽然 Dot 看起来和 ChatGPT 一样也是将不同任务的对话进行分类，但在信息展示和动画设计上，Dot 的确更加亮眼。目前该产品需要排队较久的 waitlist，[官方](https://twitter.com/newcomputer)也较少更新动态。

## 大模型能力逐步向多模态扩展

23 年下半年，GPT、Gemini Pro 在发力多模态识别、多模态输出上发力，不管是移动版 ChatGPT 的语音功能、Dall·E3 的使用体验还是 Gemini Pro 的宣传片都相当亮眼。此外语义理解能力极大增强未来会逐步影响到应用层，相信未来只要通过 Prompt 控制生成的视频、音乐效果都会逐步得到改善。

### 3.1 Dall·E3

此前模型的训练数据通常是由人类描写的图像文本和图像训练而成，而人类描写的文本内容倾向于简单描述，容易忽略图像背景中的大量细节：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sw7PEUPD192bgO7qe9BHsVFryx3J4KwDm5bcgBvl_KQk/https://cdn.sspai.com/2024/01/23/93893000d4e268febce7fe4b6a63ba41.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

于是 OpenAI 建立了一个图像标题生成器，通过建立拥有详尽图像文本描述的数据集进行模型训练来强化模型对图像的理解能力，下图中可以看出，训练的数据包含了从互联网上抓取的选定图像标题、SSC（合成的简短标题）、DSC（合成的长标题），长标题中不仅描述了图像的主题，还描述了它的周围环境，背景，图像中的文字，风格，颜色等。而这样的数据将大量用于 Dall·E3 的图像生成模型训练。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sIaBFN9G17Z4mURlvaYBrRMNIxqeAiE9Zdh6GYj1yPL4/https://cdn.sspai.com/2024/01/23/0ffbf99c50b99713f806278a97b9dd7b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

相信大家或多或少看过 Dall·E3 的使用案例，其在图片生成时对语义和上下文理解达到了令人吃惊的程度。在这里分享好友瑶酱使用 Dall·E3、MJV5.2、SD 对《小鸭子》童话故事进行的测试，可以看出相同提示词的情况下，Dall·E3 到底有多强：

### 3.2 GPT-5

据 Sam Altman 透露，GPT-5 将在推理能力、可靠性等方面远超 GPT-4，X 上部分用户透露的图片可以看出 GPT-5 将在多模态方面会增加视频、3D、GF capabilities 的支持1。

![](https://proxy-prod.omnivore-image-cache.app/0x0,szfxzvy2HPtku38SbHXBDLy2Ua8oIN7vCjNu1rVsrrX0/https://cdn.sspai.com/2024/01/23/58c932d4817ec7e95ed9b2481af5fb82.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 3.3 Gemini AI

Google 前段时间公布了 [Gemini](https://ai.google.dev/) AI 模型，虽然官方承认宣传片存在后期剪辑，视频中的效果还是着实惊艳到了大家。从 Google 披露的视频情况看，模型从对话到图像、视频理解、生成能力都有非常全面的提升，能够像人一样猜出地步藏着纸团的杯子是哪一个，和人类进行简单的游戏模拟，还能根据看到的两团毛线团生成针织品成品图。

甚至，可以根据视频内容写出代码：

目前，Google 披露 Gemini 将提供三种版本，Ultra、Pro 和 Nano，分别适应复杂任务、广泛场景和不同设备。

Ultra 版本是功能最强大的模型，能够在各种复杂任务中提供最先进的性能，包括推理和多模态任务（应该就是上述视频中展示的版本）；Pro 版本在成本和延迟方面进行了性能优化，提供了广泛的任务上的显著性能；Nano 版本是最高效的模型，设计用于在设备上运行。训练了两个版本的 Nano，分别具有 1.8B（Nano-1）和 3.25B（Nano-2）参数，针对低内存和高内存设备。通过从更大的 Gemini 模型中蒸馏来训练，并且是 4 位量化以便于部署。

目前 Pro 版本开放了 API 供开发者集成。

## 大模型应用推荐

目前市场上的大模型产品比较普遍的形态是插件和网页，这里选取这段时间我个人在使用同时在市场表现比较出众的几款产品分享。

### 4.1 沉浸式翻译

[该产品](https://immersivetranslate.com/)主打在所有网页双语翻译、PDF 文档对照阅读。因此前我用 OpenAITranslate 和浏览器自带的翻译能力比较多，沉浸式翻译作为一个备选工具在使用。不过最近新发现的一个能力非常打动我，可以一键开启网页中 YouTube 视频的双语字幕，因为 YouTube 自带的字幕翻译能力点击路径实在是太长了（得先开启字幕 -> 再在设置中找到字幕翻译 -> 滚动到最下方选择中文），这个功能会是今后我在 YouTube 视频观看场景的刚需（如果能接入 X 的视频就更好了）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9s-sbUWexas_J5ON1b28Lk3JCdCYQ3vVFkWQU4mG2TI/https://cdn.sspai.com/2024/01/23/8007992c5c0dbee841a0ace92f29b54c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 4.2 Kimi

KimiAI 是由月之暗面科技有限公司开发的一款产品，其最大的特点在于超长文本（支持最多 20 万字的输入和输出）的处理和基于文件、链接内容对话的能力**。**用户可以上传 TXT、PDF、Word 文档、PPT 幻灯片、Excel 电子表格等格式的文件，KimiAI 能够阅读并理解相关内容，为用户提供基于文件内容的回复。该团队从超长文本处理的角度，精准切入其他大模型产品都不具备的特征和使用场景。目前我最主要的使用场景是阅读 AI 论文，偶尔会拿来提取信息量比较大的播客信息（不过这个场景被下方的通义听悟给替代了）：

![](https://proxy-prod.omnivore-image-cache.app/0x0,suTJduMesrhhclx44Om1JCUwv7v8aDolr9N-xUiQXw40/https://cdn.sspai.com/2024/01/23/article/a6113d5d709954216728af5d1ffaeab4?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,scYrGWPnbzGO6clJ38xoqFKzVHJQBIu3YD-qRT9zIbss/https://cdn.sspai.com/2024/01/23/article/0f5be6ec6856036cd7e4d410b43be7bd?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 4.3 Monica

[该工具](https://monica.im/)集成了非常多的功能，包括聊天对话、PDF 翻译问答、YouTube 摘要、文生图等能力。很像是 ChatGPT、沉浸式翻译、Kimi 等多个产品能力集成到一起的工具箱。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHaTV3eClxEY_D6OvMn7pNOoqvNRyyLzX4hSS-FkPXfg/https://cdn.sspai.com/2024/01/23/article/6bdad80b19231af8bdf99c4590353b08?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

甚至还集成了一些办公场景的实用工具：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s33K_pnwMvrzNPHp4M4EO4tktCmhP0vMDKqcNpPsrCvs/https://cdn.sspai.com/2024/01/23/article/3f4e523b54858e690eefc4b974376579?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

值得一提的是，备忘功能（Memo）支持记录用户看过（总结过）的文章、视频，支持剪藏图片，作为个人知识库进行沉淀，这部分的内容也可以在聊天模块进行进行提问。

因功能全面，浏览器插件的形态使用方便，Monica 受到很多用户喜欢，Chrome 插件商店数据显示该插件一共有 100 万安装量。但由于我是在不太喜欢浏览器侧边常驻悬浮窗，在试用后就没再继续使用 Monica 了。

### 4.4 通义听悟

在对比了多个播客转文字的产品（飞书妙计、BiliGPT、memoAI）后，阿里出品的通义听悟无疑是体验最好的一个。其首页就突出了转录播客的功能，注册赠送 10 小时免费转录。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sOqNyBriphfC13Z5i4Bf6CCQpaLcrsbNwyWKezcfmLMs/https://cdn.sspai.com/2024/01/23/article/8a2904352ab2f4d1ff162de9bbd2e96d?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

支持播客链接直接转录，准确率非常高。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sH29PuIK1c8TIZHKF4rn19ZhgFKS7mTY5shnomiiYCpc/https://cdn.sspai.com/2024/01/23/article/1078938a817a498c13e908a6bf9acf00?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

此外，还能够在转录后自动生成问答回顾（很刚需，其实都免去了打开 Kimi 总结提问的那一步了）。选中文本，音频内容会自动定位到对应位置，基本上满足了我对播客内容转文字的所有诉求。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sGaJdmK3bXHSYFVRJ8KZL03KKvOQ-vWvy2MYUMjPEX14/https://cdn.sspai.com/2024/01/23/article/5eb9c238f3f7093aaea4ed5c2dfc5b17?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 4.5 心光

这是一款心情笔记 APP，是目前大模型应用中能够较精准面向 2C 需求的产品。在已有笔记产品基础之上，心光最大的特色在于记录笔记之余提供了一系列 AI 能力。比如会通过 AI 为用户的心情笔记进行主题聚类。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sfIlXWGFi9Nv_bYuv1rCzkUPSXTOOr_OSKGrAmwdydVU/https://cdn.sspai.com/2024/01/23/article/72eea4c80e128ceb15cda71c8a0fe696?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

首次使用心光时，用户会自定义心光中一个非常重要的水晶球 AI 的角色（伴侣、朋友等）。在记录日记的同时用户可以通过个性化的水晶球AI抽取塔罗牌、求夸夸，获得AI的反馈，不过实际体验感觉部分回复还有些机械和模版化。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sxLIGBNg3Eljhlw2lvXfK-dkU3yKupmhcXVuaCEkUX8k/https://cdn.sspai.com/2024/01/23/article/d3356071b758941103133185768fe6dd?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

另外，每周来信是个我非常喜欢的功能，在持续的记录后，能有一个异步的总结反馈让用户感觉非常惊喜，也能激励用户持续使用下去。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sGRm74bgwUiVDPyx_oPlQ7tf00_5x0RfwrmsDqsNEzNI/https://cdn.sspai.com/2024/01/23/article/82248d17e190d10dc5fb173eec0faf40?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

心光搭载了部分本地化 AI 模型，为打消用户对隐私问题的疑虑，采取了数据上传 iCloud 的方式进行信息存储。目前该产品在仅有两人全职的情况下发布，功能完成度非常高，但 APP 在表现层 UI 层级上处理的没有那么好，加上功能较多，有时会找不到功能、看起来装饰性的图标其实是可点击的按钮等等，使用时会一点点心理负担。

## 小结

虽说大模型诞生后没有带来新的需求场景，而是在原有场景中做改造，还是诞生了许多好用的产品，为内容生产、消费节约大量时间。24年，模型能力的进步应该会更快的渗透到具体应用中去，期待接下来的更多大模型能力的释放。

**相关推荐**

**GPTs：**

1. [GPTs 分类查看](https://www.gpts.fan/)
2. [GPTs Top 100](https://www.gptshunter.com/)

**AI Agent：**[AI Agent 的千亿美金问题：如何重构 10 亿知识工作职业，掀起软件生产革命？](https://zhuanlan.zhihu.com/p/679323697/edit)

**Chatbot 虚拟社交：**

博主 @马丁的面包房 关于大模型应用赛道的多篇硬核文章，是目前看过最深度且全面的思考。

1. 23.08.15\_[大模型赛道的技术和应用分析](https://whjlnspmd6.feishu.cn/wiki/DBnWwik1piTB6Iki02CcXoVQn3S)（残缺）
2. [23.05.16\_大模型创业公司的成功理由](https://whjlnspmd6.feishu.cn/wiki/DhLzw7IqjiXNWukcsAbcAsVynUg)

**关联阅读**

**AI 视频系列：**

* [AI 视频生成(上)|技术发展概况和应用场景思考](https://zhuanlan.zhihu.com/p/679323697/edit)
* [AI 视频生成（中）— 20 个产品推荐及实践教学](https://zhuanlan.zhihu.com/p/679323697/edit)
* [AI 视频生成(下)｜20 个产品推荐及实践教学](https://zhuanlan.zhihu.com/p/679323697/edit)

**语言大模型系列：**[搞懂语言大模型（番外）：40+ 应用案例精选](https://zhuanlan.zhihu.com/p/679323697/edit)

**商业创业：**[看完 Open AI 创始人的斯坦福创业课，我学到了什么？](https://zhuanlan.zhihu.com/p/679323697/edit)

**产品趋势：**

* [产品趋势 02 期(上)｜挑战 Chrome 的最强浏览器？Arc 究竟牛在哪里？](https://zhuanlan.zhihu.com/p/679323697/edit)
* [产品趋势 02期 (下)｜盘点 Arc 中的设计细节、槽点和后续规划](https://zhuanlan.zhihu.com/p/679323697/edit)

\> 关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现🚀

---

