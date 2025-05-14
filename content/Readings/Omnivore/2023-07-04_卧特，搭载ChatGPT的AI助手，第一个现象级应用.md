---
id: 114f7647-070f-4bbe-a7f4-973608a80f00
title: |
  卧特，搭载ChatGPT的AI助手，第一个现象级应用
author: |
  悟乙己野生工程师，要说不务正业，还真是不务正业！​关注他
date_saved: 2023-07-04 07:46:54
date_published: 2023-03-09 19:00:00
draft: true
---

# 卧特，搭载ChatGPT的AI助手，第一个现象级应用
#Omnivore

[Read on Omnivore](https://omnivore.app/me/chat-gpt-ai-18920ba186a)

[Read Original](https://zhuanlan.zhihu.com/p/612651871)

date_saved: 2023-07-04 07:46:54

date_published: 2023-03-09 19:00:00

--- 

# Full Content: 

1.1 Bilibili x OpenAI x Notion x Python

2.4 AI 生词本 - AI Vocabulary Builder

4.3 飞书 ×（GPT-3.5 + DALL·E + Whisper）

5.1 卷到了，直接文件翻译：ChatGPT for Translation | ChatGPT用于翻译

5.2 翻译chrome插件：OpenAI Translator Bob Plugin

这几天关于ChatGPT的信息吃个饱，个人感觉搭载ChatGPT的AI助手会是第一个现象级应用点，来个信息串烧。

## 1 B站快被偷家了！

### 1.1 Bilibili x OpenAI x Notion x Python

偷家第一篇，完整的自动化工作流案例，输入一个 B 站视频的 BV 号后，自动抓取其基本信息和 CC 字幕，并通过 OpenAI API 的 GPT-3.5 接口将视频的主要内容进行摘要，并将视频信息和摘要内容保存到相应的 Notion 页面中。

![](https://proxy-prod.omnivore-image-cache.app/1440x621,swqID8V0VuPg1w4KeYWoH4EpN13Tv3q9kCNW0KWYAKV4/https://pic1.zhimg.com/v2-a8fdc35987f7abf1f6f2a798818172a0_b.jpg)

### 1.2 [BibiGPT](https://link.zhihu.com/?target=https%3A//github.com/JimmyLv/BibiGPT)

更大的大招，输入链接，输出大纲：

![](https://proxy-prod.omnivore-image-cache.app/2992x1934,s8a_zco3hMEKEDFBY7WqCyivLJl4y3MyqmyQADI1SgGw/https://pic3.zhimg.com/v2-fb63cfc7437f09d93cc7a617ac0becd2_b.jpg)

输出示例：

![](https://proxy-prod.omnivore-image-cache.app/1768x1006,swGDaSDtMvKM8eKf7bet6imqwolVqs3tOTfY2kQmn-PY/https://pic1.zhimg.com/v2-168ba8d2aa2c14c3fd2130805b5a5e8c_b.jpg)

## 2 AI助手在路上

### 2.1 YouTube 视频内容一键总结

还是biliGPT的开发者在做youtubu的总结

### 2.2 微信读文章小助手

私人的AI助理，可以总结微信转发的各类文章、引用大段文字进行总结、续写和翻译。

![](https://proxy-prod.omnivore-image-cache.app/1440x1558,s-FR6UAqVa7htZZsL_4gwe7algVvJAgrhD4Rbe3sGZWc/https://pic3.zhimg.com/v2-45143d1d972dc698fda62d22c5da9336_b.jpg)

### 2.3 群聊机器人，ChatGPT Bot

![](https://proxy-prod.omnivore-image-cache.app/2000x1106,s8neNFDHhRo0bNvZq4TW7cTuqgtzRYFo9O5qnrsRBGGg/https://pic2.zhimg.com/v2-094dc8ab48bbe0a7f6fe33156327c6dd_b.jpg)

使用Cloudflare Workers，单文件，直接复制粘贴一把梭，无需任何依赖，无需配置本地开发环境，不用域名，免服务器。 可以自定义系统初始化信息，让你调试好的性格永远不消失。

功能覆盖：

* 群聊模式，新建多个群聊，每个群内只有自己个机器人，每个群的机器人由不同的
* 翻译专家，文案专家，代码专家

配置文件：

操作视频：

![](https://proxy-prod.omnivore-image-cache.app/1280x1038,s0WyB7gPypCP0eYCQDSrhj-m2JvvAmataD-cALNpHAUc/https://pic3.zhimg.com/v2-70c0f50423a376d4f209f616aa45ac96_b.jpg)

### 2.4 AI 生词本 - AI Vocabulary Builder

> 一个使用了 AI 技术的智能生词本工具，特色功能：自动添加生词、读故事助记单词。

![](https://proxy-prod.omnivore-image-cache.app/1528x1272,s7vZiGg31Yp9UhdvQ-xUL9O93EL-VVMvJC52YhfGH5yw/https://pic1.zhimg.com/v2-0a43960d376bcac65d7378a034671cf4_b.jpg)

AI 生词本（“AI Vocabulary Builder” 简称 aivoc）是一个利用了 AI 技术的智能生词本工具，它能帮你快速构建起自己的生词库，学习起来事半功倍。

核心功能：

* 提供高质量的整句翻译能力
* 由 AI 自动提取生词及释义
* 独创的故事模式助记生词
* 支持 CSV 等格式导出生词本

---

## 3 伸手党福音：读PDF即时读写、解答问题

### 3.1 ChatPDF

![](https://proxy-prod.omnivore-image-cache.app/640x658,sJCQeD3wvYvLhKeGkpqt3mKmod6jRsyHCz8Ms3D5reDg/https://pic3.zhimg.com/v2-c5058ea9a4639daadd1f077c4b29a6fa_b.jpg)

几秒钟解读专业论文ChatPDF

的操作很简单，把自己的PDF上传到页面上，它就会开始加载分析，然后切换到提问界面。

![](https://proxy-prod.omnivore-image-cache.app/640x472,sr7bJQAo2njPjEubdCjTWC1c_sQVtfRlDVTPK7ggT1n4/https://pic2.zhimg.com/v2-28017c91b95ef2c36552a5f4160c4e59_b.jpg)

### 3.2 ResearchGPT

要使用ResearchGPT，首先得拥有一个**OpenAI API的密钥**。

![](https://proxy-prod.omnivore-image-cache.app/884x378,seFTCZobZJhXqNhxWo6_YY0Mai8HDBBsow6RSnIj4ELA/https://pic3.zhimg.com/v2-ff09181043d4577a77822b47e741c73e_b.jpg)

输入密钥之后，就可以直接上传你要看的论文PDF或者链接了，在左侧，它会显示论文原文，右侧可以直接问它问题。

![动图封面](https://proxy-prod.omnivore-image-cache.app/500x0,sFx0jX-1df_sN1-3N47dx5i4yzb2qpcl5MLgZn_cptZY/https://pic2.zhimg.com/v2-c3aafabd0c8ab9ace8d468875083894d_b.jpg)

那给出的答案到底怎么样？直接上演示：

![动图封面](https://proxy-prod.omnivore-image-cache.app/480x0,sASbDsTL8GPUVCnCCZTkvR6PYQJOvjL0CjGIXcAd8PcQ/https://pic3.zhimg.com/v2-5cafb02a01a129bd12073962fc5cf576_b.jpg)

### 3.3 **DocsGPT**

测试地址：

DocsGPT是一个前沿的开源解决方案，它简化了在项目文档中查找信息的过程。通过集成强大的GPT模型，开发人员可以轻松地提出关于项目的问题并得到准确的答案。

![](https://proxy-prod.omnivore-image-cache.app/1107x790,s9WsMfEgx_z8rkJmULP6EFpRwFPw9G2E1Kg1Vy1WZAm8/https://pic3.zhimg.com/v2-26d806e56252e81493fd54fc2631bfb2_b.jpg)

界面化的流程：

### 3.4 Paul Graham GPT

搜索和提问 Paul Graham 的所有文章。这个项目很好地展示了如何通过[OpenAI Embeddings](https://link.zhihu.com/?target=https%3A//platform.openai.com/docs/guides/embeddings)技术将大规模文本压缩成 ChatGPT API token 限制范围内（4096 个）的 prompt。

---

## 4 语音助手的升级

### 4.1 xiaogpt - 小米的小爱音响

![](https://proxy-prod.omnivore-image-cache.app/1711x278,s3lVu2hiieHF9dKUKiliUjY9mp3i0XVeZixbfyQMuWHs/https://pic4.zhimg.com/v2-0f5799f6bd8334345e4ae6c9c2f055ab_b.jpg)

唤起小爱同学后，以「帮我」开头询问的问题会自动以文本形式发送一份给 ChatGPT，同时会屏蔽小爱同学原本的回答，替换成「正在问 GPT，请耐心等待」，而 ChatGPT 生成的文本则会被小爱同学通过 TTS（语音合成技术）进行语音回答。

一些过程：

1. ChatGPT 的回复截包，读出来。
* 遇到最大的困难是小爱怎么破解，搜了一圈发现，小爱是有办法通过串口来 hook 再刷固件的。
* 但串口是啥？我学习了串口通信，用自己树莓派做实验，去淘宝买 usb2ttl 学会了。但是需要焊接，我又去 B 站刷视频学习，问同事硬件大神如何焊接，学会了焊接。但，他妈的，新的小爱同学把串口通信给封了。
* 翻到了一个国外破解小爱同学的，[能用拆机后的 USB 来烧固件](https://link.zhihu.com/?target=https%3A//github.com/duhow/xiaoai-patch/blob/master/research/lx06/install.md)，但我没有 windows，-> 学习老的 macbookpro 2015 刷双系统，尝试给小爱刷机 -> 小米把这个也封了
* 有趣的是每天用发现确实还挺好用的，让他放歌，给我儿子放小猪佩奇。于是又给丈母娘买了一个，给她配置好，可以放歌。
1. 第一个方式不太行，尝试去用路由 openwrt 截包再发送，依然失败，我折腾了一下发现 https 获取 payload 还是有些困难的
2. 转向了 Siri 那么我能不能用 Siri 实现呢？是能的，可以用 Siri -> 捷径 -> 获取你说的话 -> 发送 ChatGPT -> 小爱 or 直接 Siri 自己来
3. 网友[象牙山刘能](https://link.zhihu.com/?target=https%3A//twitter.com/disksing)有一天发他儿子小爱同学的聊天记录，突然灵感来了，我可以用最蠢的轮询，来不断获取最新的聊天记录，如果有新的符合要求我就发送给 ChatGPT --> 再用 tts 让小爱同学朗读，但因为朗读需要时间，所以轮询也没那么笨了。

从开发者的[演示](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3DK4YA8YwzOOA)显示，整个过程足够流畅，实际回答也远超小爱同学原本的「智力」。（具备条件可搜索 GitHub 项目「xiaogpt」）

### 4.2 ChatGPT Siri

Siri接入ChatGPT指南。目前仅限iPhone端及其他支持快捷指令的Apple产品，后续会更新Android版本。

### 4.3 飞书 ×（GPT-3.5 + DALL·E + Whisper）

![](https://proxy-prod.omnivore-image-cache.app/1064x765,sy1GW5hEv5O7C1WPt6p7JrhQRX6Wx269EJEgqtqqpXaE/https://pic2.zhimg.com/v2-1875c114c7fcd3418518169bc89ee2bd_b.jpg)

机器人功能

* 语音交流：直接与机器人畅所欲言
* 多话题对话：支持私人和群聊多话题讨论，高效连贯
* 文本成图：支持文本成图和以图搜图
* 角色扮演：支持场景模式，增添讨论乐趣和创意
* 上下文保留：回复对话框即可继续同一话题讨论
* ⏰ 自动结束：超时自动结束对话，支持清除讨论历史
* 富文本卡片：支持富文本卡片回复，信息更丰富多彩
* 交互式反馈：即时获取机器人处理结果
* 场景预设：内置丰富场景预设，方便用户管理场景
* 历史回档：轻松回档历史对话，继续话题讨论
* 管理员模式：内置管理员模式，使用更安全可靠

项目特点

* 基于 OpenAI-[gpt-3.5-turbo](https://link.zhihu.com/?target=https%3A//platform.openai.com/account/api-keys) 接口
* 通过 lark，将 ChatGPT 接入[飞书](https://link.zhihu.com/?target=https%3A//open.feishu.cn/app)
* 支持[Serverless 云函数](https://link.zhihu.com/?target=https%3A//github.com/serverless-devs/serverless-devs)、[本地环境](https://link.zhihu.com/?target=https%3A//dashboard.cpolar.com/login)、[Docker](https://link.zhihu.com/?target=https%3A//www.docker.com/)、[二进制安装包](https://link.zhihu.com/?target=https%3A//github.com/Leizhenpeng/feishu-chatgpt/releases/)多种渠道部署
* 基于[goCache](https://link.zhihu.com/?target=https%3A//github.com/patrickmn/go-cache)内存键值对缓存

---

## 5 万物可译

让你将任何语言翻译成你喜欢的语言。

使用ChatGPT将文本以**忠于原文的方式**翻译成指定的目标语言。该工具接受一个文本文件（`.txt`,`.md`,`html`或`.rtf`）或者一个包含文本的文件夹，并生成一个**直接翻译**后的文本或一个**双语的**(并列显示原始文本和翻译文本)文本。这个工具默认自动设置了多线程(加速你的翻译过程)、自动考虑了ChatGPT给用户设置的频率限制、可以设置是否翻译人名(默认为翻译)。

### 5.2 翻译chrome插件：OpenAI Translator Bob Plugin

常规版本：

mac版本：

性能：

* 支持三种翻译模式：翻译、润色、总结
* 支持 55 种语言的相互翻译、润色和总结功能
* 支持实时翻译、润色和总结，以最快的速度响应用户，让翻译、润色和总结的过程达到前所未有的流畅和顺滑
* 支持自定义翻译文本
* 支持一键复制
* 支持 TTS
* 有桌面端应用，全平台（Windows + macOS + Linux）支持！

![](https://proxy-prod.omnivore-image-cache.app/1344x1424,s8xX5w7H676cdhT8yNFu_-E38Rcxa1wrCnNqAT0hIrr0/https://pic1.zhimg.com/v2-bc9c6b495c28b045ce2a9bbe211523bc_b.jpg)

---

## 参考资料

---

