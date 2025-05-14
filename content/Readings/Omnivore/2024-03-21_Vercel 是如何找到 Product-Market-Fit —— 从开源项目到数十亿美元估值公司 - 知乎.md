---
id: 9999aa4c-b696-461b-be99-1213877b7263
title: |
  Vercel 是如何找到 Product-Market-Fit —— 从开源项目到数十亿美元估值公司 - 知乎
author: |
  申砾目前在做分布式数据库 TiDB
date_saved: 2024-03-21 01:32:47
date_published: 2024-03-10 20:00:00
draft: true
---

# Vercel 是如何找到 Product-Market-Fit —— 从开源项目到数十亿美元估值公司 - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658)

[Read Original](https://zhuanlan.zhihu.com/p/686484613)

date_saved: 2024-03-21 01:32:47

date_published: 2024-03-10 20:00:00

--- 

# Full Content: 

> Vercel 这个 AI 爆发的时代获得了非常好的业务增长。虽然前端看似和 AI 没关系，但是现在 LLM 省掉了很多后端工作，诸多 AI app 在寻找 PMF 的过程中最需要的就是快速 launch 产品，产品总是需要前端工作，Vercel 作为最流行的 web hosting 服务，自然获得了大量的用户。目前 Vercel 也推出了 AI SDK（[https://vercel.com/blog/introducing-the-vercel-ai-sdk](https://link.zhihu.com/?target=https%3A//vercel.com/blog/introducing-the-vercel-ai-sdk)），帮助用户快速构建 AI app。
> 
> 去年我和 Vercel 的 CEO Guillermo Rauch 喝过几次咖啡，聊了不少关于 Vercel 的愿景，他有挺大的野心，对 developer 的理解非常深入。我非常看好 Vercel 的未来发展。最近读到了一篇 Rauch 的访谈文章 （[英文原文](https://link.zhihu.com/?target=https%3A//review.firstround.com/vercels-path-to-product-market-fit/)），==他谈了 Vercel 在找到 PMF 道路上的一些经验和教训，很有 Insight，几点 takeaways：==  
> ==1. Vercel 成功的一个关键策略是简化其产品和服务，专注于前端云服务而不是尝试提供所有类型的云服务，这使得公司能够更好地满足目标市场的需求==  
> 2\. PMF 的一个强烈信号：很多人表明他们要么正在构建这样的版本，要么正准备组建一个团队开始构建这样的版本，或者请我分享想法和最佳实践。”  
> ==3. 速度不如加速度重要==  
> ==4. 不要低估集成（Integration）的力量==  
> ==5. 对于一个新产品，应该确保传递的 messaging 是和听众相关的 — 而不是在一开始就尝试去定义一个新的 category==

原文标题：**Vercel’s Path to Product-Market Fit — From Open-Source Project to Billion-Dollar Business**Guillermo Rauch，出生于布宜诺斯艾利斯，自 7 岁起对计算机着迷，自学成才并在 18 岁时搬到旧金山。他的公司 Vercel —— 支撑开源开发框架 Next.js 的前端云服务 —— 最近的估值达到了 25 亿美元。在 90 年代的布宜诺斯艾利斯郊区长大的 Guillermo Rauch 并不认识很多拥有计算机的人。因此，当他 7 岁时在父亲带回家的 PC 上启动 Windows 95 时，Rauch 被这项新技术深深吸引。“我爸爸挑战我和我的兄弟去探索我们能用它做什么，”他回忆道。“我们能安装软件吗？我们能黑进它吗？他对此有一种非常实验性的心态。”接受挑战，Rauch 开始自学编程。那是互联网的早期，线上信息不多，而且通常不是西班牙语。因此，Rauch 不受阻碍，也自学了英语。他的首个目标是用 Linux 替换 Windows，这是一个困难的任务，让他在线上遇到了一群热情的陌生人，他们免费分享自己的编程专长：开源社区。通过他早年的青少年时期，Rauch 对于学习 Linux、JavaScript 和 web 开发的一切都有着无尽的渴望，并建立了作为一个开源贡献者和前端开发者的声誉。“我会创建这些 demo，它们会出现在 Digg 和 Reddit 的首页。每当我使用这些前端技术创建一个真正酷的 demo 时，我就会变成一个五分钟的互联网名人，”他说。“我最热情的事情，也就是让 UI 更快、更动态、更实时，也开始获得更多的重视。”当他只有 16 岁时，Rauch 成为了开源项目 MooTools 的核心开发者，后来，Facebook 表示对这位年轻现象级人物的兴趣。那时，他意识到这个爱好可以成为一份职业。他辍学，并最终搬到旧金山开始他的第一份全职工作 —— 作为一名软件工程师，那时他只有 18 岁。“开源真的是我最终离开阿根廷的路径，”Rauch 说。当时他不知道，开源也是他通往十亿美元企业的路径。他的公司 Vercel —— 支撑开源开发框架 Next.js 的前端云服务 —— 最近的估值达到了 25 亿美元。如果你曾经访问过 eBay、Zapier 或 The Washington Post 的网站，你已经见识过 Vercel 的实力。至于 ==Next.js，超过 850,000 的开发者使用它来构建拥有数十亿全球用户的网站，如 ChatGPT、TikTok 和 Notion==。虽然以任何形式实现产品市场契合都值得庆祝，但 Rauch 已经达到了我们在 First Round 称之为“极致产品市场契合”的最高水平。这意味着他的产品获得了深刻、广泛的客户爱戴和需求，并通过可扩展、盈利的市场进入方式交付。在这次独家采访中，我们深入探讨了 Rauch 构建如此受欢迎的开发者工具的过程，他对于货币化开源项目的新颖方法，他检测到的早期 PMF 信号，以及如果他能重新来过，他会怎样做得不同。

## **Vercel 早期灵感**

当 Rauch 在 2006 年收拾行李从布宜诺斯艾利斯搬到旧金山时，那是云计算的关键一年。亚马逊网络服务刚刚向大众推出了其第一个产品，Rauch 是其首批用户之一。有了 AWS，全球的开发者现在可以不必管理自己的服务器和硬件资源，比以往任何时候都能更快、更容易地构建和部署 web 应用 —— 至少，这是所承诺的。“计算机现在在云中。这是魔法，”Rauch 回忆说。“硬件变成了软件。这是如此抽象，想象有机器人在某处的机架上移动硬件，而我却看不见它。所以我们有了这种魔法的基础，理论上。但然后，当你实际使用它时，做任何事情都是如此地困难。”即使作为一个技术巫师，云的缺陷也让 Rauch 感到沮丧 —— 但他把这个小小的想法存了几年，同时他作为一名前端工程师工作。==他的创业之旅，以及后来成为 Vercel 的基础，正式开始于 2010 年他的第一家创业公司 Cloudup。“Cloudup 在许多方面是 Vercel 的早期灵感，”他说，“因为它的一个杀手级特性是，你会得到一个坐落在你菜单栏的应用，你可以拖放任何文件甚至一整个文件夹，它会立即给你一个超链接。这是在互联网上分享任何东西并与他人协作的最简单方式。而且你实际上可以拖放一整个文件夹，如果这些文件是 HTML，你会得到一个非常高性能的静态托管。”当 Cloudup 还处于私人测试阶段时，Rauch 将它展示给了 WordPress 的创始人，他之所以能与之建立联系，多亏了他在开源社区的参与。“当我向他展示 Cloudup 时，他认为这在 WordPress 的上下文中非常有意义，因为他们已经在现代化前端层投入了大量精力。他们非常感兴趣于实时技术的协作，以便你可以去 WordPress 编辑帖子，这后来成为了他们为 WordPress 5.0 建立的基于区块的编辑器的基础。”WordPress 的母公司 Automattic 实际上在 Cloudup 对公众开放之前就收购了 Rauch 的公司。==

![](https://proxy-prod.omnivore-image-cache.app/1080x1080,smNpbxnmD1HL6STKu-dZm1xTZvFaAh74Hy4eQV33qHCU/https://pic1.zhimg.com/v2-666bf630658257b03ffdc1e05bc60eb8_b.jpg)

Guillermo Rauch，Vercel 的创始人兼 CEO

**一个熟悉的问题再次浮现**

交易完成后，Rauch 开始在 WordPress 工作。但在他的新角色中，Rauch 再次遇到了那个棘手的问题：==为什么云对开发者来说这么难用？“在 WordPress，他们投入了数百万美元成为== [http://Wordpress.com](https://link.zhihu.com/?target=http%3A//Wordpress.com) ==的托管专家。但增加任何增量新应用、产品或功能都极其繁琐，”Rauch 说。当一切都在一个代码库中（一个“大块”）时，数据库和代码是如此紧密地绑定在一起，以至于它限制了开发者可以做什么。==

> **_==It was hard to get that freedom as a developer. I wanted to try new frameworks, new frontend solutions, but I was constrained within the confines of a monolithic solution.==_**

“这不仅仅是 WordPress 的问题 —— 当时，整个行业主要是这些大型架构，”Rauch 说。“但世界慢慢开始朝着微服务和可组合性的方向移动，打破这些大型构建方式。而做到这一点的承诺是，开发者会获得很多灵活性。这就是云给我的承诺 —— 我将能够移动得非常快。”Rauch 的脑海中转动着齿轮。2014 年 11 月，他在一篇博客文章中概述了他对于 web 应用更好用户体验的七个原则，这篇文章后来成为了 Next.js 和 Vercel 的蓝图。“当时，我还没有一个框架。我没有技术将这些原则付诸行动，但那篇博客文章有点成了后来成为 Next.js 的总体计划，”他解释说。“我已经逆向工程了 Google 搜索、Facebook 和 Amazon 的构建方式，==我意识到我将来构建的任何框架都应该没有妥协。它应该能够构建从小网站到可以扩展的任何东西==。我想要能够把它放在构建下一个 [http://Amazon.com](https://link.zhihu.com/?target=http%3A//Amazon.com) 或下一个 [http://Google.com](https://link.zhihu.com/?target=http%3A//Google.com) 的人手中。设定这个非常高的标准给了我方向，能够建造。”

> **_==Everything around me had failed to fulfill the cloud’s promise of making development faster. So I decided I was going to make deploying software completely instantaneous and give that power back to the developer.==_**

2015 年 11 月，Rauch 离开了 WordPress 来构建他的解决方案，他称之为 ZEIT（后来，名称变为 Vercel）。当他开始为他的新公司构建一个网站时，他遇到了进一步巩固他对云需要大修的信念的摩擦。当然，有 SaaS 解决方案可以启动简单的网站（如 Squarespace），但 Rauch 想要构建一个具有 AWS 复杂性的生产级堆栈和任何顶级企业营销网站相媲美的营销网站。“就那前三四周尝试搭建一个网站确认了我所有之前的假设，‘天哪，我们怎么让云这么难以使用？我们怎么让提出一个新想法、一个新网站的简单行为变得如此困难？”他回忆说。==如果 Rauch，一个独立开发者，在为他的一人公司构建一个高度动态的网站时都在挣扎，那么想象一下接下来的 100,000 家企业在数字化转型时会遇到的困难，因为他们所构建的技术正在落后。因此，他的解决方案将是一个特别针对前端（他的专长和用户实际看到的部分）的部署平台，它会使开发者更容易、更快、更可靠地将他们的项目推向世界。==

![](https://proxy-prod.omnivore-image-cache.app/1080x876,sgi29uPbi1EtfnixiWToSO4thpHd3wwnTifNzqKqbSCk/https://pic1.zhimg.com/v2-02201eee437c3809935e51739a535460_b.jpg)

## **构建原型**

当他还在寻找两名共同创始工程师的过程中，Rauch 为自己设定了一个雄心勃勃的目标：他将在短短三个月内推出他的部署平台的原型。“在三个月内创建这样的基础设施非常、非常困难，但我想为自己设定一个截止日期来开始获得反馈。在构建过程中，我们意识到部署平台需要一个动态 web 应用来能够做诸如编排和查看日志之类的事情。对于这样的平台来说，需要很多。”他正在使用的 JavaScript 库 React，非常适合开发应用，但当到了将成品展示给最终用户的时候，React 令人沮丧地慢。Rauch 想要一个框架来加速这个过程。“我这样描述它：React 是一个很好的引擎，但我需要一辆车从 A 点到 B 点。这就是为什么我开始在这个框架上工作，Next.js，那时候它还是内部的。我们开始在这个工具上试验，那时我们称它为 N4，每天，我们都在说，‘嗯，这工作得很好，我们移动得非常快，它给了我们想要的结果。’”六个月后，N4 太好了不能只保留给他们自己。Rauch 在 2016 年 10 月将其作为一个开源项目发布了 Next.js。它立即成为开发者的热门选择。“对外人来说，它看起来像一个一夜成名的成功，因为 Next.js 从第一天开始就获得了大量的关注和采用。但他们没看到所有这些之前的开发。他们没看到所有这些内部的争斗和压力测试。我已经在两年前，甚至更早之前，就在考虑框架将要达到的原则。所以一夜成名的故事有点是个神话。”

> **_When your product solves a huge pain, you should see pretty fast growth almost right out of the gate. It's obviously hard to get the product ready, but at the point you release it to customers, you should see rapid growth._**

## **开源项目的商业化**

你可以称之为一个幸运的意外：Rauch 最初是为了帮助工程师部署他们的项目而着手构建一个平台，但途中，构建了一个成为即刻开源热门的 React 框架。==但编写一个成功的开源项目和构建一个成功的商业往往在一个关键方面相互冲突：钱。大多数开源软件都是免费提供的，并不打算永远盈利。那些确实这样做的，面临的选择很有限。“当你尝试从开源转向商业时，那里并没有太多创意。你要么走开放核心，即你基本上限制了免费功能，或者你使用某种许可证，允许你提供功能但限制它们的使用和部署。”作为开源社区的成员，这让 Rauch 感到不舒服，他不想限制他的 Next.js 客户。所以，他采取了一种新鲜的方法。==

> **_==You have to align the value creation of open source with the value creation of the business that supports that open source project.==_**

“==在我们的案例中，我们开发了一个全球范围内的基础设施业务 Vercel，旨在不仅仅是托管产品，而是完全外包那些使用我们系统的公司的团队所值得的责任，”他说。这是它的工作原理：直到今天，任何人都可以免费使用 Next.js 框架的全部内容。如果他们想要他们的项目托管在一个专为 Next.js 构建的平台上，一个可以增强他们所构建内容的平台，他们支付 Vercel 以获得升级。而且因为 Next.js 仍然是开源的，如果客户决定他们想要将他们的工作负载从 Vercel 上移除并自行托管，他们可以自由地这样做。他们不会被锁定在单一供应商那里。“所以这对公司来说在基础设施方面是一个非常简单的等式：‘我是否建立一个大约 20 名软件工程师的团队？或者我把这交给 Vercel 让他们来处理==？’我最近在日本的一个客户给我做了一个演示，展示了他们能够将多少工程资源从平台工程转移到产品工程和数据科学上，因为 Vercel 释放了那家公司的基础设施资源，使得能够创造客户价值和客户洞察，”Rauch 说。“所以这是你可以用开源构建的另一种类型的业务。随着公司在发展其自身的基础设施方面变得更加出色，竞争变得非常困难。”他提到了 MongoDB 的例子，一个从开源项目转变为业务的项目，产生了 15 亿美元的年收入。它通过对其完全托管的 MongoDB Atlas 数据库进行托管以及提供支持和咨询服务来赚钱。“如果我使用 MongoDB，我会首先告诉我的团队，‘让我们把 Mongo 交给托管 Mongo 的专家。让我们把它交给那些在大规模上加固这个系统的人。’但知道我在赌注一个开放平台给了我信心，所以如果我决定不这样做，我有自由带着工作负载走。这就是为什么我认为开源是，我认为，最好的选择。因为如果有一家公司在支持它，我可以自动化掉很多我的工作。而且，无论出于什么原因，如果我需要在本地完成，我也有那个选项。”

> **_==If I were to do it over again, I would do it the same way: using open source. And I would continue to invest in making the product as free and available as possible.==_**

==Rauch 设法在他的产品之间创造了出色的协同效应：广受欢迎的 Next.js，仍然是开源的，为 Vercel 成为一个收入产生的互补产品做好了铺垫，因为 Next.js 的用户自然会倾向于为该框架构建的平台。反过来，Vercel 的收入资助了 Next.js 的维护。这对软件及其客户来说是双赢的。==

![](https://proxy-prod.omnivore-image-cache.app/1080x602,spWb30iDeLKwW6i3EvOKEI-oCD1kYrSKATSBuItichW0/https://pic2.zhimg.com/v2-487895168cb9179283db97327c11d009_b.jpg)

对于任何创始人来说，确定你找到了产品市场契合的确切时刻可能会很棘手。对 Rauch 来说尤其如此，因为他在开源世界中已经很受欢迎了。“在我发布 Next.js 的时候，我因为我在 MooTools、[http://Socket.IO](https://link.zhihu.com/?target=http%3A//Socket.IO) 和 Mongoose 上的工作已经在开发者社区中有了相当多的关注，所以我可以轻松地让人们至少看看我将要发布的东西。”因此，其他开发者急切地想要使用他的最新软件这一事实对 Rauch 来说还不足以让他相信他已经实现了产品市场契合。人们是因为解决方案而争先恐后地想要 Next.js，还是因为他自己的名声？相反，他构建了一个解决了真正问题的产品的最强指标是，他有一些竞争对手。大的那种。“我们发布 Next.js 后不久，来自 Redfin 的某人联系我说他们正在构建同样的东西。然后一周后，来自 Trulia 的某人联系我说他们正在构建同样的东西。这些不仅仅是做小实验的人。我有所有这些在大规模运营业务的人告诉我，他们要么正在构建这样的版本，要么正准备组建一个团队开始构建这样的版本，或者请我分享想法和最佳实践。”

> **_==One signal of product-market fit that I recommend you pay attention to: When something is really needed, you’ll find there are lots of very intelligent people at other organizations trying to build a version of it.==_**

尽管 Rauch 所构建的东西受到了客户的热爱，但这并不意味着它没有批评者。“并不是所有开发者社区中的人都对 Next.js 感到兴奋，当时有一些竞争性的替代品有着完全不同的哲学，”Rauch 说。“所以我们并没有立即胜出。我们不得不为了市场和竞争导航好几年。”==Next.js 的一个方面让一些人感到不安？它使用服务器端渲染，与更受欢迎的客户端渲染背道而驰==。但由于他进行了彻底的市场研究，Rauch 确信他做出了正确的决定。“几年前，当我逆向工程了亚马逊、谷歌和 Facebook 时，就像，‘等等，这些人不是那样做的。必须有一个好的理由，出于性能和规模和隐私以及许多其他事情。’所以这很有趣，因为几年来，我们有这些几乎是竞争的信号，有些个别开发者不喜欢它，但更大的组织对它非常兴奋。”

## **构建客户喜爱的软件的 4 个教训**

从 Cloudup 被 Automattic 收购到 Vercel 拥有 Adobe、Loom 和 Meta 等令人印象深刻的客户列表，Rauch 显然已经找到了构建解决真正问题的软件的公式。他从他长达十年的创业旅程中学到的最有意义的教训进行了解包。

### **==相比堆更多的功能，不如在更少的功能上最大到极致==**

Rauch 的第一家创业公司 Cloudup 实际上是作为一个特定行业垂直领域的产品开始的：作为一个拥有广泛产品的教育技术平台。但当 Rauch 注意到老师们正在使用一个特定功能，文件分享，来发送课程计划时，他决定将产品供应缩减到那个最受欢迎的功能，并将教育技术创业公司转变为 Cloudup。Rauch 认为这一举措帮助他实现了成功的退出。后来，他将这一关键教训应用于构建 Vercel。“寻找 Next.js 和 Vercel 的联合产品市场契合的催化剂之一是我们简化了产品供应。一开始，部署平台的第一个原型专注于部署绝对的一切。然后我们意识到，我们正在改善网站的前端面向部分。我们给人们最好的 React 体验。那么我们为什么要试图让每个人都满意呢？我们为什么不简化产品供应呢？在那之后，我们决定构建前端云，而在开始时，我们试图构建云。”

> **_“The last thing an enterprise wants to hear is, “Oh, here's a thing that does everything and promises it can solve every single one of your problems.” Buyers are just so tuned out of that narrative._**

### **速度不如加速度重要**

“快速行动并打破事物”已经成为硅谷创业文化的象征，但 Rauch 警告不要为了速度而追求速度。

> **_Focus on iteration velocity, rather than speed. Velocity is speed with direction — you know where you're headed. Or even if you don't know where you're headed, you're seeking direction. That doesn't mean you're just writing code 20 hours a day and churning out features left and right._**

==Rauch 坦白说自己对速度着迷，所以这对他来说是一个特别重要的工具。“这在我的职业生涯中表现的方式是，有时候解决方案是构建更少，更加专注==。有时，真正关注客户试图告诉我们的。对于一个比任何事情都喜欢快速行动的人来说，我认为那是我需要添加到我的框架中的正确补充，以便以一种持久的方式真正成功。在早期，找到那个方向是你能做的最重要的事情。”

### **==不要低估集成（Integration）的力量==**

“在早期，我低估了拥有异常好的整合可以积累多少价值，”Rauch 说。“这是创始人可以陷入的一个陷阱：而不是整合，他们试图煮沸整个海洋。”“==更好的说法是，‘我们不解决那套问题，但我们整合进你已经购买的解决方案中。’你的优势可以在于你不构建的东西，而是你与之整合的东西。如果你想逆向工程 Vercel 的产品市场契合，这尤其如此，”Rauch 说。“这是我们增长的关键解锁。而不是说，‘顺便说一下，我们也有一个 Git 托管服务。请使用我们的。’我们可以说，‘Vercel 有 Git 集成，所以你可以部署你的 GitHub 或 GitLab 项目与我们一起。==”

### **==对于一个新产品，应该确保传递的 messaging 是和听众相关的 — 而不是尝试去定义一个新的 category==**

如今，Vercel 被认为是定义类别的前端云。但在早期，这并不是产品的定位，Rauch 警告创始人在市场上闯入时不要试图启动全新的信息传达。

> **_==In the early days, your priority should be to make your product relatable. If you’ve got a small team, only three landing pages and you're kicking the tires on an earlier version of the product, giving yourself some very lofty tagline ends up playing against you because no one knows what you do yet, so they don’t understand.==_**

“今天，我认为 Vercel 已经赢得了试图定义一个类别并采用那个崇高位置作为‘前端云’的权利，但在早期，我们必须在我们的语言中非常具体和谦虚。我和团队前几天笑了，因为我们看了 Vercel 网站的早期版本，我们有点尴尬，因为我们在英雄图像中过于简化了产品的标语。我记不清确切是什么了，但想象一下说，像‘更快的网站，更容易制作。’这是一件非常简单的事情，但它在当时对我们来说是相关的，所以它在那时起作用了。”

## **展望未来**

今天，Vercel 是一家 D 轮创业公司，总融资额达到 3.13 亿美元。随着公司的增长，它已经扩展到两个产品类别的产品供应：托管基础设施和开发者体验（DX）平台。并且在 2023 年，Vercel 在人工智能上下了重注，发布了 v0。“有了 v0，我们正在开创我们称之为‘生成式 UI’的概念。你用纯英文输入文本提示，我们给你真实的 React 和 Tailwind 代码，完全按照你所描述的执行。AI 是我们将如何改进开发者体验、使开发者更加生产力和帮助公司更快迭代的下一个前沿。”对于有抱负的创业者，Rauch 看到了利用 AI 和向前端服务转移的巨大机会来抢占市场份额。正如我们在这个系列中一次又一次地覆盖的那样，产品市场契合是一个移动的目标，Rauch 希望将他的 PMF 课程应用于构建和规模这个新的迭代。“关于‘AI 将取代 A、B 和 C’的讨论太多了。我认为 AI 将作为人类潜力的加速器。作为一个程序员，我的很多任务都非常乏味、非常手动。AI 把那些事情从我的盘子上拿走，还生成了灵感的想法，让我可以更有创造力，”Rauch 说。“显然，作为一个平台，我们是偏见的，因为我们看到了在构建 AI 产品上的如此多的兴奋。但即使作为一个企业家，我也对所有这些因为 AI 而上市的新产品感到非常兴奋，如果你愿意超越关注过去产品是如何构建的。”

---

## Highlights

> Vercel 这个 AI 爆发的时代获得了非常好的业务增长。虽然前端看似和 AI 没关系，但是现在 LLM 省掉了很多后端工作，诸多 AI app 在寻找 PMF 的过程中最需要的就是快速 launch 产品，产品总是需要前端工作，Vercel 作为最流行的 web hosting 服务，自然获得了大量的用户 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#14ff207c-c7d3-41f3-9b7b-eb671ff93467)  ^14ff207c

> 他谈了 Vercel 在找到 PMF 道路上的一些经验和教训，很有 Insight，几点 takeaways：  
> 1\. Vercel 成功的一个关键策略是简化其产品和服务，专注于前端云服务而不是尝试提供所有类型的云服务，这使得公司能够更好地满足目标市场的需求 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#582f49fe-f2ac-47ac-bf82-15f32d36da19)  ^582f49fe

> 3\. 速度不如加速度重要 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#e40d16ad-9d8a-469a-b691-0f77fe605d70)  ^e40d16ad

> 4\. 不要低估集成（Integration）的力量 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#1e79c35e-1266-4a6b-94f7-07f9fc4dccbc)  ^1e79c35e

> 5\. 对于一个新产品，应该确保传递的 messaging 是和听众相关的 — 而不是在一开始就尝试去定义一个新的 category [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#64c7f468-f2b6-43e8-94e7-14a4df74720f)  ^64c7f468

> Next.js，超过 850,000 的开发者使用它来构建拥有数十亿全球用户的网站，如 ChatGPT、TikTok 和 Notion [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#a8740292-6306-47eb-93de-0c90467c36f2)  ^a8740292

> 他的创业之旅，以及后来成为 Vercel 的基础，正式开始于 2010 年他的第一家创业公司 Cloudup。“Cloudup 在许多方面是 Vercel 的早期灵感，”他说，“因为它的一个杀手级特性是，你会得到一个坐落在你菜单栏的应用，你可以拖放任何文件甚至一整个文件夹，它会立即给你一个超链接。这是在互联网上分享任何东西并与他人协作的最简单方式。而且你实际上可以拖放一整个文件夹，如果这些文件是 HTML，你会得到一个非常高性能的静态托管。”当 Cloudup 还处于私人测试阶段时，Rauch 将它展示给了 WordPress 的创始人，他之所以能与之建立联系，多亏了他在开源社区的参与。“当我向他展示 Cloudup 时，他认为这在 WordPress 的上下文中非常有意义，因为他们已经在现代化前端层投入了大量精力。他们非常感兴趣于实时技术的协作，以便你可以去 WordPress 编辑帖子，这后来成为了他们为 WordPress 5.0 建立的基于区块的编辑器的基础。”WordPress 的母公司 Automattic 实际上在 Cloudup 对公众开放之前就收购了 Rauch 的公司。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#a9bf8c55-3c74-4089-9866-c8b2b64ed2dd)  ^a9bf8c55

> 为什么云对开发者来说这么难用？“在 WordPress，他们投入了数百万美元成为 [http://Wordpress.com](https://link.zhihu.com/?target=http%3A//Wordpress.com) 的托管专家。但增加任何增量新应用、产品或功能都极其繁琐，”Rauch 说。当一切都在一个代码库中（一个“大块”）时，数据库和代码是如此紧密地绑定在一起，以至于它限制了开发者可以做什么。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#2ef014e3-c368-4ab6-9588-09c1816fd266)  ^2ef014e3

> It was hard to get that freedom as a developer. I wanted to try new frameworks, new frontend solutions, but I was constrained within the confines of a monolithic solution. [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#1cb8af17-6a83-4b05-ac60-89d665f15126)  ^1cb8af17

> 我意识到我将来构建的任何框架都应该没有妥协。它应该能够构建从小网站到可以扩展的任何东西 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#b4b83112-5249-4183-8be9-e61375e5dab3)  ^b4b83112

> Everything around me had failed to fulfill the cloud’s promise of making development faster. So I decided I was going to make deploying software completely instantaneous and give that power back to the developer. [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#586ffaae-5969-4911-a0ef-55c03e3a43ac)  ^586ffaae

> 如果 Rauch，一个独立开发者，在为他的一人公司构建一个高度动态的网站时都在挣扎，那么想象一下接下来的 100,000 家企业在数字化转型时会遇到的困难，因为他们所构建的技术正在落后。因此，他的解决方案将是一个特别针对前端（他的专长和用户实际看到的部分）的部署平台，它会使开发者更容易、更快、更可靠地将他们的项目推向世界。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#92aa8dab-acf7-429c-b307-200c3eb7cd90)  ^92aa8dab

> 但编写一个成功的开源项目和构建一个成功的商业往往在一个关键方面相互冲突：钱。大多数开源软件都是免费提供的，并不打算永远盈利。那些确实这样做的，面临的选择很有限。“当你尝试从开源转向商业时，那里并没有太多创意。你要么走开放核心，即你基本上限制了免费功能，或者你使用某种许可证，允许你提供功能但限制它们的使用和部署。”作为开源社区的成员，这让 Rauch 感到不舒服，他不想限制他的 Next.js 客户。所以，他采取了一种新鲜的方法。
> 
> > **_You have to align the value creation of open source with the value creation of the business that supports that open source project._** [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#47957ee6-b4c1-4200-8ed6-6fd09840b742)  ^47957ee6

> 在我们的案例中，我们开发了一个全球范围内的基础设施业务 Vercel，旨在不仅仅是托管产品，而是完全外包那些使用我们系统的公司的团队所值得的责任，”他说。这是它的工作原理：直到今天，任何人都可以免费使用 Next.js 框架的全部内容。如果他们想要他们的项目托管在一个专为 Next.js 构建的平台上，一个可以增强他们所构建内容的平台，他们支付 Vercel 以获得升级。而且因为 Next.js 仍然是开源的，如果客户决定他们想要将他们的工作负载从 Vercel 上移除并自行托管，他们可以自由地这样做。他们不会被锁定在单一供应商那里。“所以这对公司来说在基础设施方面是一个非常简单的等式：‘我是否建立一个大约 20 名软件工程师的团队？或者我把这交给 Vercel 让他们来处理 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#3bd6bdfb-b566-490e-94f9-f086922bce67)  ^3bd6bdfb

> > **_If I were to do it over again, I would do it the same way: using open source. And I would continue to invest in making the product as free and available as possible._**
> 
> Rauch 设法在他的产品之间创造了出色的协同效应：广受欢迎的 Next.js，仍然是开源的，为 Vercel 成为一个收入产生的互补产品做好了铺垫，因为 Next.js 的用户自然会倾向于为该框架构建的平台。反过来，Vercel 的收入资助了 Next.js 的维护。这对软件及其客户来说是双赢的。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#7654e328-417f-4549-832b-2a2a1088d793)  ^7654e328

> One signal of product-market fit that I recommend you pay attention to: When something is really needed, you’ll find there are lots of very intelligent people at other organizations trying to build a version of it. [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#20b70789-b147-48a3-a9d7-455c83418bc0)  ^20b70789

> Next.js 的一个方面让一些人感到不安？它使用服务器端渲染，与更受欢迎的客户端渲染背道而驰 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#583cccdd-1038-45ae-a698-5ebfc26011d1)  ^583cccdd

> 相比堆更多的功能，不如在更少的功能上最大到极致 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#9fd58dcc-1c27-4c51-b719-b59020833c2b)  ^9fd58dcc

> Rauch 坦白说自己对速度着迷，所以这对他来说是一个特别重要的工具。“这在我的职业生涯中表现的方式是，有时候解决方案是构建更少，更加专注 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#6f3ee310-9965-40cb-9707-1c36176521e8)  ^6f3ee310

> 不要低估集成（Integration）的力量 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#e42c07a5-3b87-4519-9875-da1d9f037c07)  ^e42c07a5

> 更好的说法是，‘我们不解决那套问题，但我们整合进你已经购买的解决方案中。’你的优势可以在于你不构建的东西，而是你与之整合的东西。如果你想逆向工程 Vercel 的产品市场契合，这尤其如此，”Rauch 说。“这是我们增长的关键解锁。而不是说，‘顺便说一下，我们也有一个 Git 托管服务。请使用我们的。’我们可以说，‘Vercel 有 Git 集成，所以你可以部署你的 GitHub 或 GitLab 项目与我们一起。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#5a82bb7e-4a09-4c93-9d03-5750210067fb)  ^5a82bb7e

> 对于一个新产品，应该确保传递的 messaging 是和听众相关的 — 而不是尝试去定义一个新的 category [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#1954fa6f-8cc4-4603-9bdd-c5feed3144db)  ^1954fa6f

> In the early days, your priority should be to make your product relatable. If you’ve got a small team, only three landing pages and you're kicking the tires on an earlier version of the product, giving yourself some very lofty tagline ends up playing against you because no one knows what you do yet, so they don’t understand. [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#69f48599-6cb7-4815-a1cf-9913eb092518)  ^69f48599

> 关于‘AI 将取代 A、B 和 C’的讨论太多了。我认为 AI 将作为人类潜力的加速器。作为一个程序员，我的很多任务都非常乏味、非常手动。AI 把那些事情从我的盘子上拿走，还生成了灵感的想法，让我可以更有创造力， [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-686484613-18e5f7b5658#ce4bc579-10af-47ac-a64c-e3fa5416d488)  ^ce4bc579

