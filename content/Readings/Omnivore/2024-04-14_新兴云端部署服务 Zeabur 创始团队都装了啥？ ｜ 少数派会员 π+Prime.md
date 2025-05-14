---
id: e4c1c752-038d-40e8-b3b3-acb30882ad87
title: |
  新兴云端部署服务 Zeabur 创始团队都装了啥？ ｜ 少数派会员 π+Prime
author: |
  火箭君CC
date_saved: 2024-04-14 13:39:07
draft: true
---

# 新兴云端部署服务 Zeabur 创始团队都装了啥？ ｜ 少数派会员 π+Prime
#Omnivore

[Read on Omnivore](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04)

[Read Original](https://sspai.com/prime/story/zhuanglesha-230412)

date_saved: 2024-04-14 13:39:07


--- 

# Full Content: 

面对从「开发者」到「创业者」的身份切换，必须抛下以前那个程序员的思维，学着关掉代码编辑器，走出去和各个不同领域的人交流，从中学习。

---

**按：**[Zeabur](https://sspai.com/link?target=https%3A%2F%2Fzeabur.com%2F) 是近两年新涌现的一款 PaaS 服务，主打快速部署和灵活定价，在中文开发者群体中获得了一定关注度。如今，社交网络和技术社区不时能见到相关讨论，不少 GitHub 上的开源项目也加上了一键部署到 Zeabur 的标志。本期《装了啥》中，我们邀请到 Zeabur 的创始人[沅霖](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Fyuaanlin)和[宇航](https://sspai.com/link?target=https%3A%2F%2Ftwitter.com%2FCoooolXyh)，除了分享常用的软硬件工具外，他们还分享了自己毕业即创业的背景故事、Zeabur 的技术架构，以及对于 Web 开发框架和部署平台服务的观察和思考。

---

==Zeabur 是一个帮助开发者能够一键部署任何服务的 PaaS 平台，无论你的项目用什么编程语言或框架开发了前端、后端，无论你用了什么数据库，在 Zeabur 上都仅需一个按钮就能部署上线生产环境，方便的同时还降低了成本。==

## 你们日常主力使用的硬件产品都有哪些？请展示一下你们的桌面吧。

**沅霖**

* 笔记本电脑：MacBook Pro 16" (2021)
* 配件：Hyper Drive USB C 扩展坞
* 键盘：Nuphy Halo 65、MX Keys Mini、Keychron K3
* 鼠标：Magic Trackpad
* 耳机：Beyerdynamic DT770 Pro (250 ohm)、AirPods Pro 2
* 显示器：Dell U2723QX + Brateck E350 悬臂支架
* 桌椅：乐歌 E2 升降桌，西昊人体工学椅

**宇航**

* 笔记本电脑：MacBook Pro 14" (2021)
* 键盘：Nuphy Halo 65 & Nuphy Air 75
* 鼠标：Logi Master 3
* 耳机：AirPods Pro 2
* 显示器：Dell U2723QX
* 桌椅：乐歌 E2 升降桌，西昊人体工学椅
* ==配件：小米屏幕挂灯==

![](https://proxy-prod.omnivore-image-cache.app/0x0,sNetmw7YDqSvB18XGfFzHoXaUrAspPRzUtbTdJkVAkSk/https://cdn.sspai.com/2024/04/11/c88084783e2687fd304815145d28876b.jpg?imageView2/2/format/webp)

## 会用哪些软件工具或技术来提高工作效率？请展示一下你们的手机或电脑主屏幕吧。

* ==团队协作：Linear、Discord==
* IDE：VS Code（宇航）、IntelliJ IDEA Ultimate（沅霖）
* ==设计工具：Figma==
* 终端：Warp（宇航）、iTerm2（沅霖）
* 日历：Amie

![](https://proxy-prod.omnivore-image-cache.app/0x0,sUPSkBgjWVlFThcsqPX0BoeP5ENpkC90PRxONSKlfyGI/https://cdn.sspai.com/2024/04/11/93f5da581b7be86d1ad61daa0e162f50.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sAnQibY-noqVUVDNB2KrjnJUavP2uMD1VhvMQ9HGjpCc/https://cdn.sspai.com/2024/04/11/236123d3dd3ff1d6b34a521570823882.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYeolsGRzv0ooM3uk5EEHvSZfU9hhvgylkAytpjAFqYE/https://cdn.sspai.com/2024/04/11/a64055310a41b325dfec0651e9d07acf.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,shUBYiIwi25XoMAu4guJbxyUCYd6hNf12yNNx2UYxxoE/https://cdn.sspai.com/2024/04/11/f36dafd45de25743e98125ada5551116.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp) 

## 你们平时的工作习惯是怎样的？团队怎么协作？如何管理自己的时间？

工作时间大概是 10-6-5 ，在这个基础上可以自己灵活调节时间。

==团队协作使用的是 Discord 来进行交流，GitHub 和 Linear 负责工程上的协作。==

==之所以选择 Discord，是因为用户社区就在 Discord 上，统一个软件根据不同频道分出内部和外部的交流。另外，Discord 更轻量好用，感觉 Slack 太重太丑了，哈哈==。

## ==为什么选择大学毕业就创业这条路？对于希望尝试类似道路的后来人有什么建议？==

==对比起去大厂打工做螺丝钉，更希望能够打造独立的产品，参与产品的全链路流程。可以做自己更想做的事情，能力上也能够得到更充分的锻炼，也能结识许多志同道合的朋友。==

==我开始得比较晚，大三才开始学习编程，大四做项目和创业。大学的时间很宝贵也很自由，如果有想法的朋友最好是大一大二就能开始做事情，这样在校期间就成功的可能性大很多，也更有底气和把握毕业后创业==。

## ==在开发和创业过程中主要遇到过哪些挑战？==

==（沅霖）最大的挑战是作为技术背景的创业者，我们没有足够的经验和技巧去开展市场推广。甚至可以说这是「开发者」及「创业者」两个身份之间最关键性的区别==。而克服的方法就是必须抛下以前那个程序员的思维，学着关掉代码编辑器，走出去和各个不同领域的人交流，从中学习，面对面和客户访谈，不断改进自己的策略。

==（沅霖）本科阶段开始学了一些 Web 前后端开发的技术，所以开始接一些外包开发的案子。那个时候我都用 Vercel 部署开发好的前端项目，觉得体验实在是太丝滑了！但作为一个全栈开发者，在用 Vercel 部署完前端以后，终究还是得去 AWS 和 GCP 这样的公有云租用服务器，完成配置 Docker 和环境等等麻烦的流程。==

==当时就想，要是能有一个平台可以让我像在 Vercel 上面部署前端一样优雅，但却可以部署任何不同编程语言、任何框架甚至是任何服务，那应该会是很酷的事情！然后就选择这个 PaaS 平台作为我的毕业设计题目了，这就成了 Zeabur 的雏形。==

## Zeabur 在功能和特性方面有哪些独特之处，特别是与 Vercel、Heroku 等更成熟平台相比？

==Zeabur 的特性是部署简单无脑，不用自己运维和配置服务器；基本方案价格便宜，小团队和独立开发没有负担；自动扩容，当业务扩张需要更多资源时也不用担心资源问题。==

==对比 Heroku，我们估计 Zeabur 在一定条件下能有百分之六十的成本优势；体验也更好，UI、UX 更加现代。而与 Vercel 相比，Zeabur 更像是一个「全栈版」 ，除了静态网站和云函数，也支持一键部署有状态的服务以及数据库等等。==

定价模式上也有一些自己的思考。大的方向上，基于部署平台本身的性质以及参考竞品的定价模式，采用了功能订阅和按用量收费结合的方式，并且把用量费尽量调低，主要通过订阅费来盈收。除了免费试用外，个人开发者方案 $5 每月起；团队方案原来是每人每月 $20，后来改成了同一的每团队每月 $80，因为发现我们的用户群基本没有超过 5 个用户的需求。

## ==Zeabur 主要希望服务于怎样的群体？能否==介绍一个目前为止最有成就感的成功案例？

（==沅霖）我们主要希望服务于独立开发者以及小型、初创公司。我们认为，在 AI 时代，会出现更多「超级」个体和小团队，做出很好的产品。随着独立开发者越来越多，大家必然一个更简单更快速的部署方式。我们希望能服务这类群体，加速他们的迭代和开发。==

最有成就感的案例是[台湾大学海外教育博览会 3D 网站](https://sspai.com/link?target=https%3A%2F%2Fstudyabroadexpo.ntu.edu.tw%2F)。这个项目的委托方[磨人设计](https://sspai.com/link?target=https%3A%2F%2Fpolish-design.com.tw%2F)和我们互为老客户，在我此次创业前就已经多次开展外包合作；Zeabur 的 LOGO 和初版仪表盘都是他们帮忙设计的。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sTiBaQIYTA33iDaGEiqmKTmshd2LN-WTFN9NzQPs2DHs/https://cdn.sspai.com/2024/04/12/27768eb07b2c366c6d1d34bff0de2bcb.png?imageView2/2/format/webp)

这也是为什么我们会如此有成就感的原因：当初作为他们的外包工程师，就从内部切身体会到这类从事设计及外包开发的乙方公司对于服务部署的需求有多大。而现在，我从外包伙伴变成了他们的部署服务提供商，用自己打造的产品为他们解决了长久以来的痛点，甚至帮助了更多与他们类似的团队，感到很有意义。

## 能否简要介绍一下 Zeabur 的技术架构？

* ==架构：主要基于 Kubernetes 做服务的部署及调度。==
* ==网络：采用 Google Cloud CDN 来确保全球的高速访问，以及 Cloud Armor 的 DDoS 防御。==
* ==前端：使用 Vite、React、TypeScript、TailwindCSS 和 Next.js。就是选择了自己最熟悉的，也比较现代的解决方案，开发体验好，生态好。==
* ==后端：主要用 Go 开发基于 gRPC 的微服务系统，然后用 GraphQL 作为后端网关==。选择用 GraphQL 主要是因为我们推崇 schema-driven 的开发模式，也就是在开始写代码前先把接口都定义清楚了，然后再开始把自己定义好的接口一个个实现。这个顺序虽然在过去传统的 RESTful 也应该这样做，但 GraphQL 则是从协议的设计理念上实现了这件事情。

## ==对 Web 开发框架和部署平台服务的现状和发展有何观察和预测？对日后发展有什么规划或期望？==

==（宇航）Web 框架目前最流行的应该就是 Next.js ，但是 Next.js 被 Vercel 收入麾下后，更多是在往有利于商业化的方向发展；构建的产物也比较复杂，只有 Vercel 自己能最好地适配。==

==新兴框架中比较看好的有 Remix 和 Astro，好用且简洁，虽然目前生态较为缺失，但社区的力量很强大，就我所知很多开发者被 Next.js 折腾后就转去了 Remix。==

==（沅霖）也可以顺便提一嘴 Vercel。最近 Vercel== ==[大幅调整](https://sspai.com/link?target=https%3A%2F%2Fvercel.com%2Fblog%2Fimproved-infrastructure-pricing)====了付费模式，将边缘请求流量和增量静态资源的读写从现有的流量和功能中剥离出来，作为新的计费维度。这除了导致一些开发者成本增加，也引发了供应商锁定的担忧，因为 Vercel 对于 React 的发展有深度参与和很大影响力，很多开发者习惯了基于 Vercel 的 React 部署体验。Vercel 的做法有等开发者习惯且被绑定以后，再用涨价来收割利益之嫌，我认为这种行为确实很不好。==

至于 Zeabur，我们目前正在着手加强推广工作，希望能继续扩张用户规模、提高转化率，尽快做到盈利状态。提升 DX（开发体验），希望开发者也能基于 Zeabur 的能力和 API 构建更多的好产品。

© 本文内容为少数派独家版权，仅限少数派会员在本平台阅读体验，不得转载或复制，否则即为侵权。

---

阅读信息

全文字数 2687字

阅读本文共需 4分钟

字号选择 

小

中

大

作者

[火箭君CC](https://sspai.com/u/u9vvthsl) 生产力工具产品顾问，出海创业者， 公众号：效率火箭

* 请用几句话简单介绍一下 Zeabur 吧。
* 你们日常主力使用的硬件产品都有哪些？请展示一下你们的桌面吧。
* 会用哪些软件工具或技术来提高工作效率？请展示一下你们的手机或电脑主屏幕吧。
* 你们平时的工作习惯是怎样的？团队怎么协作？如何管理自己的时间？
* 为什么选择大学毕业就创业这条路？对于希望尝试类似道路的后来人有什么建议？
* 在开发和创业过程中主要遇到过哪些挑战？
* 请问 Zeabur 的初衷和灵感来源是什么？
* Zeabur 在功能和特性方面有哪些独特之处，特别是与 Vercel、Heroku 等更成熟平台相比？
* Zeabur 主要希望服务于怎样的群体？能否介绍一个目前为止最有成就感的成功案例？
* 能否简要介绍一下 Zeabur 的技术架构？
* 对 Web 开发框架和部署平台服务的现状和发展有何观察和预测？对日后发展有什么规划或期望？

---

## Highlights

> Zeabur 是一个帮助开发者能够一键部署任何服务的 PaaS 平台，无论你的项目用什么编程语言或框架开发了前端、后端，无论你用了什么数据库，在 Zeabur 上都仅需一个按钮就能部署上线生产环境，方便的同时还降低了成本。 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#8d70a039-309a-4197-8e77-41e6d908dfa9)  ^8d70a039

> 配件：小米屏幕挂灯 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#b128a5d1-0278-4121-ac63-b9fa965400bd)  ^b128a5d1

> 团队协作：Linear、Discord [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#10dc38b0-df67-4184-a7ec-0bbaa64a0be9)  ^10dc38b0

> 设计工具：Figma [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#27c503b2-c88d-4814-852d-938c23abeb90)  ^27c503b2

> 团队协作使用的是 Discord 来进行交流，GitHub 和 Linear 负责工程上的协作。
> 
> 之所以选择 Discord，是因为用户社区就在 Discord 上，统一个软件根据不同频道分出内部和外部的交流。另外，Discord 更轻量好用，感觉 Slack 太重太丑了，哈哈 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#3871dd7e-793d-4942-ac1c-98821b98b876)  ^3871dd7e

> ## 为什么选择大学毕业就创业这条路？对于希望尝试类似道路的后来人有什么建议？
> 
> 对比起去大厂打工做螺丝钉，更希望能够打造独立的产品，参与产品的全链路流程。可以做自己更想做的事情，能力上也能够得到更充分的锻炼，也能结识许多志同道合的朋友。
> 
> 我开始得比较晚，大三才开始学习编程，大四做项目和创业。大学的时间很宝贵也很自由，如果有想法的朋友最好是大一大二就能开始做事情，这样在校期间就成功的可能性大很多，也更有底气和把握毕业后创业 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#375aa6cd-0286-45c7-9797-49af0aa7ab43)  ^375aa6cd

> ## 在开发和创业过程中主要遇到过哪些挑战？
> 
> （沅霖）最大的挑战是作为技术背景的创业者，我们没有足够的经验和技巧去开展市场推广。甚至可以说这是「开发者」及「创业者」两个身份之间最关键性的区别 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#9524470d-3aaa-44cf-943e-551d8b23d893)  ^9524470d

> 策略。
> 
> （沅霖）本科阶段开始学了一些 Web 前后端开发的技术，所以开始接一些外包开发的案子。那个时候我都用 Vercel 部署开发好的前端项目，觉得体验实在是太丝滑了！但作为一个全栈开发者，在用 Vercel 部署完前端以后，终究还是得去 AWS 和 GCP 这样的公有云租用服务器，完成配置 Docker 和环境等等麻烦的流程。
> 
> 当时就想，要是能有一个平台可以让我像在 Vercel 上面部署前端一样优雅，但却可以部署任何不同编程语言、任何框架甚至是任何服务，那应该会是很酷的事情！然后就选择这个 PaaS 平台作为我的毕业设计题目了，这就成了 Zeabur 的雏形。 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#bcac5189-a644-4651-91bb-42aab3df8e07)  ^bcac5189

> Zeabur 的特性是部署简单无脑，不用自己运维和配置服务器；基本方案价格便宜，小团队和独立开发没有负担；自动扩容，当业务扩张需要更多资源时也不用担心资源问题。
> 
> 对比 Heroku，我们估计 Zeabur 在一定条件下能有百分之六十的成本优势；体验也更好，UI、UX 更加现代。而与 Vercel 相比，Zeabur 更像是一个「全栈版」 ，除了静态网站和云函数，也支持一键部署有状态的服务以及数据库等等。 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#d4a75ea3-ebd2-45fd-9b98-3f67e8881ee2)  ^d4a75ea3

> Zeabur 主要希望服务于怎样的群体？能否 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#162ed4c3-3fa2-4e15-a906-ac607863cef8)  ^162ed4c3

> 沅霖）我们主要希望服务于独立开发者以及小型、初创公司。我们认为，在 AI 时代，会出现更多「超级」个体和小团队，做出很好的产品。随着独立开发者越来越多，大家必然一个更简单更快速的部署方式。我们希望能服务这类群体，加速他们的迭代和开发。 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#b7456b9e-2d82-44c7-86e8-0fd3b1a15b56)  ^b7456b9e

> * 架构：主要基于 Kubernetes 做服务的部署及调度。
> * 网络：采用 Google Cloud CDN 来确保全球的高速访问，以及 Cloud Armor 的 DDoS 防御。
> * 前端：使用 Vite、React、TypeScript、TailwindCSS 和 Next.js。就是选择了自己最熟悉的，也比较现代的解决方案，开发体验好，生态好。
> * 后端：主要用 Go 开发基于 gRPC 的微服务系统，然后用 GraphQL 作为后端网关 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#6da00358-9d99-4a1c-b279-3eaa7711992e)  ^6da00358

> 选择用 GraphQL 主要是因为我们推崇 schema-driven 的开发模式，也就是在开始写代码前先把接口都定义清楚了，然后再开始把自己定义好的接口一个个实现。这个顺序虽然在过去传统的 RESTful 也应该这样做，但 GraphQL 则是从协议的设计理念上实现了这件事情。 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#0bd8e9d0-5187-4b77-9056-cb93f0f0f169)  ^0bd8e9d0

> ## 对 Web 开发框架和部署平台服务的现状和发展有何观察和预测？对日后发展有什么规划或期望？
> 
> （宇航）Web 框架目前最流行的应该就是 Next.js ，但是 Next.js 被 Vercel 收入麾下后，更多是在往有利于商业化的方向发展；构建的产物也比较复杂，只有 Vercel 自己能最好地适配。
> 
> 新兴框架中比较看好的有 Remix 和 Astro，好用且简洁，虽然目前生态较为缺失，但社区的力量很强大，就我所知很多开发者被 Next.js 折腾后就转去了 Remix。
> 
> （沅霖）也可以顺便提一嘴 Vercel。最近 Vercel [大幅调整](https://sspai.com/link?target=https%3A%2F%2Fvercel.com%2Fblog%2Fimproved-infrastructure-pricing)了付费模式，将边缘请求流量和增量静态资源的读写从现有的流量和功能中剥离出来，作为新的计费维度。这除了导致一些开发者成本增加，也引发了供应商锁定的担忧，因为 Vercel 对于 React 的发展有深度参与和很大影响力，很多开发者习惯了基于 Vercel 的 React 部署体验。Vercel 的做法有等开发者习惯且被绑定以后，再用涨价来收割利益之嫌，我认为这种行为确实很不好。 [⤴️](https://omnivore.app/me/zeabur-p-prime-18eddb0fb04#f1ddb2bb-d391-4e23-a0bd-6937b6677447)  ^f1ddb2bb

