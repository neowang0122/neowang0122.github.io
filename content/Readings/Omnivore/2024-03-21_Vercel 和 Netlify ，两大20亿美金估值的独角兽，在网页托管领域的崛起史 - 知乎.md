---
id: 21b91990-f6c5-42e4-ab79-d42adcb9b197
author: |
  成希企服创业者
date_saved: 2024-03-21 01:35:58
date_published: 2022-06-08 03:52:00
---

# Vercel 和 Netlify ，两大20亿美金估值的独角兽，在网页托管领域的崛起史 - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903)

[Read Original](https://zhuanlan.zhihu.com/p/525979886)

date_saved: 2024-03-21 01:35:58

date_published: 2022-06-08 03:52:00

--- 

# Full Content: 

Hi，老铁们，我是一个企服行业创业者，产品\\开发\\设计三系天赋树全修，偶尔写点区块链项目代码，却依旧在搬砖的硬核男人。

不少朋友知道我自己公司的项目，底层也是做页面托管服务的，所以Vercel和Netlify的故事，其实很早就想跟大家分享了，最近抽空内容整理了出来。  

便于大家了解Vercel 和 Netlify的业务，我先以简单的篇幅，讲一下这两个公司的业务到底是什么，为什么现在这么多Web开发者都喜欢用他们的服务，我尽量用通俗易懂的语言来表述。

---

便于浅显易懂，我先用个简单的比喻：

* 阿里云 = 大户型毛坯房
* Vercel 或 Netlify = 小户型精装公寓

==我们熟知的阿里云，是提供的比较大而全的云服务业务，当企业购买云服务器后，需要让运维同事来管理和配置环境、版本、数据、运维、调度、负载均衡等计算资源和服务器配置==。就好比我们买了个毛坯房，需要请装修公司屋子装修好，从而再入住。

==Vercel  和 Netlify 这种页面托管服务，无需复杂的配置，一键即可部署和构建你的网页，立即可让你的客户浏览你的网站==。就像是小的精装公寓，可以立即拎包入住。

==Vercel  和 Netlify  主要面向的是web端的开发者，用于帮助他们快速搭建自己的Web端业务，可以完全实现前端业务的独立运维。==

==因为大部分区块链项目都没有后端服务，只有智能合约和web前端界面，这也是为什么区块链的开发者都喜欢Vercel 和 Netlify。==

==Vercel 和 Netlify 都属于目前比较提倡的Serverless 理念的一种==

* ==免运维：不需要管理服务器主机或者服务器进程。==
* ==弹性伸缩：根据负载进行自动规模伸缩与自动配置。==
* ==按需付费：根据使用情况决定实际成本。==
* ==高可用：具备隐含的高可用性==。

==相对于github的pages 或其他提供静态页面托管的服务，Vercel和Netlify 无论从访问速度，还是构建逻辑、和其他配套服务，都是更加全面且专业化的。更直白点说，传统的静态页面托管，基本都是为了单纯的演示业务而兴起，但Vercel和Netlify 从底层的架构设计，就是为了企业级web项目而服务的==。

---

## **Vercel 的故事**

![](https://proxy-prod.omnivore-image-cache.app/2000x1399,sV4bSBlySrFsrPjRs3unmWtPE0CYLnoIPIfuxMLTF_y4/https://pic1.zhimg.com/v2-ecff2353e912cd0870d4cbb29a966f90_b.jpg)

Vercel 总部位于旧金山，在2021.11.23 完成了D轮 1.5亿美金的融资，估值达到25亿美金，由 GGV Capital 领投。

Vercel 的创始人Guillermo Rauch 也是Next.js、 [http://socket.io](https://link.zhihu.com/?target=http%3A//socket.io)等开源项目的发起人。Next.js和[http://socket.io](https://link.zhihu.com/?target=http%3A//socket.io) 都是明星级别的开源项目，我就先不展开聊了。

总之Guillermo Rauch 是Node.js 大神级别的人物，他在web圈的影响力巨大，这些项目都为Vercel的一飞冲天打下了牢靠的开发者群体基础。

在2015年，Guillermo Rauch 创立了名为 Zeit 的公司，2020年改名成了Vercel。

==Guillermo 过往丰富的 web 应用开发经验，让他更了解web开发者平常面临的一系列非业务侧的问题。他将域名的配置、DNS解析、SSL证书、CDN、自动化部署等业务都集成到了Vercel产品内，让小型团队或个人开发者能做到一键部署应用，一切业务都以Serverless的逻辑运转。==

我自己就是Vercel的使用者，我用VUE.js写的很多前端项目都托管在Vercel上，并且网站在全球的访问速度都很快。作为开发者的我，仅需关联一下github的仓库，点击部署，其他任何事情都不用管。

---

## **Netlify 的故事**

![](https://proxy-prod.omnivore-image-cache.app/1227x880,shtUTjsO1vFDSnFyMAh8HJvF5AUklAy3Io6Uc5xUEfNw/https://pic1.zhimg.com/v2-20c45eafbe45b0c62928c87f276195a0_b.jpg)

Netlify 总部也是位于旧金山， 在2021.11.17日 完成了D轮 1.05亿美元的融资，估值达到20亿美金，由Bessemer Venture Partners领投，融资时间段几乎和Vercel一致，并且两家目前都到了D轮。

Netlify的创始人是 Mathias Biilmann Christensen ，我最早知道Netlify 应该是在2016年，那时候我刚刚创业，开始做自己的静态页面托管的产品，做竞品调研的时候发现了Netlify。那时候Netlify 拿到了210万美金的投资，投资人==是GitHub的联合创始人 Tom Preston-Werner==。

而 Tom 在2014年的时候，因为性别歧视被调查，导致他被迫离开了GitHub，于2016年8月投资了Netlify。==离开GitHub后，他就投资了很多项目，近期的项目里我比较了解的项目有Ready player me 和 Supabase。==

==Supabase 是开源数据处理平台，你可以用它的云服务快速搭建一个数据库，用来存储和访问数据，可以看成是Firebase的开源替代品。前端还可以实时订阅数据库的更新，可用来搭建小项目。==

==Ready player me 是个在Web浏览器上展示 3D人物模型的一家公司，你可以进行3D的人物捏脸，我在2020年看到这个产品的时候，对他们做出来的效果感觉挺震撼的，毕竟是在浏览器上，一切实现难度都会放大。==

好了言归正题，==因为 Tom Preston-Werner 是GitHub的联合创始人，当时投资Netlify的逻辑，应该是比较看好 Netlify 可以更加进一步的改进 GitHub 的page 服务的一些问题。其实从现在来看，github的page 和  Netlify 的服务差距已经越来越大了，即便当时的产品逻辑差别不大，都是进行页面托管，但是背后要面对的业务形态完全不一样。page更多的是Demo演示，而 Netlify 则可以承担实际的企业级的web访问业务。==

==其实Mathias Biilmann Christensen 在做Netlify之前，还有一个创业项目叫BitBall，这个产品也是做静态页面托管的，业务形态和我创业在做的产品很像，为静态页面托管服务，不过要面对的客户对象和业务类型完全不一样，BitBall 也是偏Demo演示的业务为主。==

==这也是Mathias 在想清楚Netlify的未来业务思考后，关闭了BitBall的所有业务。你甚至现在都查不到任何BitBall的新闻和报道。不过现在看来BitBall 为创建Netlify打下了牢靠的技术基础和积累了种子用户。==

---

Vercel和Netlify 两个产品的业务形态都很像，但是相对来说，Vercel在全球的访问速度要优于Netlify。当然Vercel 和 Netlify 还有很多边缘函数EdgeFunction的功能，就不展开讲了，主要是害怕内容太干，导致很多不是从事开发工作的同学看的云里雾里。如果你是web前端的开发者，可以去试试他们的产品，真的很不错。

---

## Highlights

> 我们熟知的阿里云，是提供的比较大而全的云服务业务，当企业购买云服务器后，需要让运维同事来管理和配置环境、版本、数据、运维、调度、负载均衡等计算资源和服务器配置 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#88f22183-1528-45f0-b20c-8a4c1a101c05)  ^88f22183

> Vercel 和 Netlify 这种页面托管服务，无需复杂的配置，一键即可部署和构建你的网页，立即可让你的客户浏览你的网站 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#736aafe9-594d-4a89-81d5-bdf62b5f2542)  ^736aafe9

> Vercel 和 Netlify 主要面向的是web端的开发者，用于帮助他们快速搭建自己的Web端业务，可以完全实现前端业务的独立运维。
> 
> 因为大部分区块链项目都没有后端服务，只有智能合约和web前端界面，这也是为什么区块链的开发者都喜欢Vercel 和 Netlify。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#b7ad220a-ebac-4933-b6fa-71c6aaf86db9)  ^b7ad220a

> Vercel 和 Netlify 都属于目前比较提倡的Serverless 理念的一种
> 
> * 免运维：不需要管理服务器主机或者服务器进程。
> * 弹性伸缩：根据负载进行自动规模伸缩与自动配置。
> * 按需付费：根据使用情况决定实际成本。
> * 高可用：具备隐含的高可用性 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#6f8435f4-6c04-42d2-8889-82119ffd9a1b)  ^6f8435f4

> 相对于github的pages 或其他提供静态页面托管的服务，Vercel和Netlify 无论从访问速度，还是构建逻辑、和其他配套服务，都是更加全面且专业化的。更直白点说，传统的静态页面托管，基本都是为了单纯的演示业务而兴起，但Vercel和Netlify 从底层的架构设计，就是为了企业级web项目而服务的 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#89152216-9357-4b1d-ae94-cf563d0d3aec)  ^89152216

> Guillermo 过往丰富的 web 应用开发经验，让他更了解web开发者平常面临的一系列非业务侧的问题。他将域名的配置、DNS解析、SSL证书、CDN、自动化部署等业务都集成到了Vercel产品内，让小型团队或个人开发者能做到一键部署应用，一切业务都以Serverless的逻辑运转。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#7e902761-f002-4a70-8cfe-44a4acff2442)  ^7e902761

> 是GitHub的联合创始人 Tom Preston-Werner [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#2181b50a-20dc-4735-8259-e20449486803)  ^2181b50a

> 离开GitHub后，他就投资了很多项目，近期的项目里我比较了解的项目有Ready player me 和 Supabase。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#48cf4807-cc0a-4458-b1f2-5a8559a66923)  ^48cf4807

> Supabase 是开源数据处理平台，你可以用它的云服务快速搭建一个数据库，用来存储和访问数据，可以看成是Firebase的开源替代品。前端还可以实时订阅数据库的更新，可用来搭建小项目。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#964df011-d0d7-4218-af75-d21f4952eea5)  ^964df011

> Ready player me 是个在Web浏览器上展示 3D人物模型的一家公司，你可以进行3D的人物捏脸，我在2020年看到这个产品的时候，对他们做出来的效果感觉挺震撼的，毕竟是在浏览器上，一切实现难度都会放大。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#227cde79-c201-42cb-b8cb-a8bf534f5a8f)  ^227cde79

> 因为 Tom Preston-Werner 是GitHub的联合创始人，当时投资Netlify的逻辑，应该是比较看好 Netlify 可以更加进一步的改进 GitHub 的page 服务的一些问题。其实从现在来看，github的page 和 Netlify 的服务差距已经越来越大了，即便当时的产品逻辑差别不大，都是进行页面托管，但是背后要面对的业务形态完全不一样。page更多的是Demo演示，而 Netlify 则可以承担实际的企业级的web访问业务。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#5d2db47d-2ba3-4c12-a55d-89e20cd65969)  ^5d2db47d

> 其实Mathias Biilmann Christensen 在做Netlify之前，还有一个创业项目叫BitBall，这个产品也是做静态页面托管的，业务形态和我创业在做的产品很像，为静态页面托管服务，不过要面对的客户对象和业务类型完全不一样，BitBall 也是偏Demo演示的业务为主。
> 
> 这也是Mathias 在想清楚Netlify的未来业务思考后，关闭了BitBall的所有业务。你甚至现在都查不到任何BitBall的新闻和报道。不过现在看来BitBall 为创建Netlify打下了牢靠的技术基础和积累了种子用户。 [⤴️](https://omnivore.app/me/https-zhuanlan-zhihu-com-p-525979886-18e5f823903#393d8d27-08e3-474a-a733-a502b04ca89e)  ^393d8d27

