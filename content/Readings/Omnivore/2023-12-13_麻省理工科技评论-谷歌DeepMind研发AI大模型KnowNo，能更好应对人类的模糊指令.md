---
id: a62c5608-99b3-11ee-846e-0fc4b6f6b33b
title: |
  麻省理工科技评论-谷歌DeepMind研发AI大模型KnowNo，能更好应对人类的模糊指令
author: |
  unknown
date_saved: 2023-12-13 04:54:00
date_published: 2023-12-13 04:54:00
draft: true
---

# 麻省理工科技评论-谷歌DeepMind研发AI大模型KnowNo，能更好应对人类的模糊指令
#Omnivore

[Read on Omnivore](https://omnivore.app/me/deep-mind-ai-know-no-18c6329d8d6)

[Read Original](https://www.mittrchina.com/news/detail/12743)

date_saved: 2023-12-13 04:54:00

date_published: 2023-12-13 04:54:00

--- 

# Full Content: 

[![](https://proxy-prod.omnivore-image-cache.app/0x0,sMQVtcTRXZ0D_hHjoPN3tQYT9qj1oRxrChIi68ZPXytY/https://www.mittrchina.com/static/media/logo.61d59098.svg)](https://www.mittrchina.com/news)

评选

TR35 Asia Pacific

TR35 China

TR50

活动

EmTech China 2021

EmTech China 2020

EmTech China 2019

EmTech China 2018

EmTech China 2017

![](https://proxy-prod.omnivore-image-cache.app/0x0,snD_r5jXn78dddjXDE8499yD2UCBbb-qpGqsWwMG67yk/https://www.mittrchina.com/static/media/search.dcc84b00.svg)

登录![](https://proxy-prod.omnivore-image-cache.app/0x0,sBzrL_9fKpUUv3xxFMTkimY-EEtiliJMvwLCfkX2Gljo/https://www.mittrchina.com/static/media/arrows.4498368a.svg)

AI

谷歌DeepMind研发AI大模型KnowNo，能更好应对人类的模糊指令

有一种被称为“KnowNo”的新训练模型，旨在通过教机器人在命令不明确时寻求人类的帮助来解决这个问题。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sMcl_zEgN3JPZf50-0HovN0GhbdrBnqsFb_OFWKYYQe0/https://image.deeptechchina.com/article/2023120921540551526.png?imageView2/2/w/504/h/280)

一张桌子放着两个碗：一个是塑料的，另一个是金属的。你让机器人拿起其中一个，然后把它放进微波炉里。你觉得它会选择哪一个？

面对这类要求，人类可能会再确认一遍，但如果是机器人，得到这样模糊的指令，它可能会将金属碗放入微波炉中引起爆炸。

现在，有一种被称为“KnowNo”的新训练模型，旨在通过教机器人在命令不明确时寻求人类的帮助来解决这个问题。描述这项研究的论文发表在 2023 年 11 月机器人学习会议上。

该模型会确保机器人只在必要时寻求二次确认，最大限度地减少不必要的来回询问。

这样就得到了一个聪明的机器人助手，它会努力理解你究竟想要什么，而不会过多地打扰你。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sNi14bw8lL9cn8UP2H1-ss-m5Xxxfk8fsEscpjV5mXn0/https://p26-sign.toutiaoimg.com/tos-cn-i-6w9my0ksvp/5da82c73adb04cabb9cc3861a3836573~tplv-obj.image?lk3s=3de049d8&traceid=202312092153126694C927554A21EED4EC&x-expires=2147483647&x-signature=eyHEKE44LA4JK749bPBBm6EXRho%3D)（来源：arXiv）

谷歌 DeepMind 的研究科学家 Andy Zeng 帮助开发了这项新技术，他说虽然机器人在许多特定场景中都很强大，但它们往往不擅长需要常识的通用任务。

例如，当被要求给你拿一瓶可乐时，机器人需要首先明白它需要走进厨房，找打冰箱，然后打开冰箱门取出可乐。

按照惯例，这些较小的子步骤必须提前编好，因为否则机器人不会知道人们通常把饮料放在厨房里。

Zeng 说，这是大型语言模型（LLM，large language model）可以帮助解决的问题，因为它们有很多常识。

现在，当机器人被要求拿一瓶可乐时，对世界有着广泛了解的大语言模型可以为机器人生成一套循序渐进的指令。

然而，大模型的问题在于，它无法保证机器人能够执行给出的指令。也许这个人的厨房里没有冰箱，或者冰箱门把手坏了。在这种情况下，机器人需要向人类求助。

KnowNo 通过将大型语言模型与量化置信水平的统计工具相结合，实现了这一点。

当有人给出一个模棱两可的指令，比如“把碗放进微波炉”时，KnowNo 首先使用语言模型生成多个可能的下一个动作，然后它会创建一个置信度得分，预测每个选择成为最佳选择的可能性。

这些置信度估值是根据预定的确定性阈值来确定的，该阈值规定了用户希望机器人在其动作中有多自信或保守。例如，一个成功率为 80% 的机器人至少在 80% 的情况下都应该做出正确的决定。

美国普林斯顿大学机械和航空航天工程助理教授、该研究的高级作者阿尼鲁达·马宗达（Anirudha Majumdar）说，这在不同风险程度的任务中是有用的。

你可能希望你的扫地机器人更独立一些，尽管会犯一些错误，但你不必过于密切地监督它。但对于医疗应用，机器人必须极其谨慎，尽可能保证任务成功。

当有不止一个选项可供选择时，机器人会停下来要求澄清，而不是盲目地继续：“我应该拿起哪个碗，金属的还是塑料的？”

Knowno 在三个机器人上进行了 150 多种不同场景的测试。结果显示，与那些没有进行过相同统计计算训练的机器人相比，经过 KnowNo 训练的机器人在需要更少人力帮助的情况下，成功率更高。

由于人类语言往往模棱两可，教机器人识别和应对不确定性可以提高它们的表现。

美国弗吉尼亚理工大学专门研究人机交互的助理教授迪伦·洛西（Dylan Losey）表示，研究表明，人们更喜欢会提问的机器人，他没有参与这项研究。

他说，当机器人寻求帮助时，会增加他们如何决定做什么的透明度，从而带来更好的互动。

美国普林斯顿大学博士生、该研究的主要作者 Allen Ren 表示，有几种方法可以改善 KnowNo。现在，它假设机器人的视觉总是可靠的，而现实里传感器可能出现故障。此外，模型也可以进一步优化，以考虑人们在提供帮助时可能带来的错误。

马宗达说，人工智能表达不确定性的能力将使我们更加信任机器人。“量化不确定性是我们许多系统中缺失的一部分。”他说，“这让我们对机器人的安全性和完善度更有信心。”

作者简介：我是一名报道气候、能源和技术交叉点的研究员。我热衷于使用数据和图形来讲述引人入胜的人类故事。此前，我曾在美国和韩国的多家媒体机构制作广播和多媒体新闻，涵盖从移民到音乐再到公共卫生等主题。

支持：Ren

2小时前

---

