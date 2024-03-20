---
id: 5f831370-a7f7-11ee-b0c0-6fefbb115ccc
title: |
  不只为了省钱：开源密码管理器可用性报告 ｜ 少数派会员 π+Prime
author: |
  PlatyHsu
tags:
  - RSS
date_saved: 2023-12-31 08:24:22
date_published: 2023-12-31 08:24:22
---

# 不只为了省钱：开源密码管理器可用性报告 ｜ 少数派会员 π+Prime
#Omnivore

[Read on Omnivore](https://omnivore.app/me/p-prime-18cc0a5c12c)

[Read Original](https://sspai.com/prime/story/opensource-password-managers-compared)

## Highlights

> 开源和闭源并没有必然的高下，免费和收费也都只是综合成本的一个考量因素 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#d103879c-a115-41bf-85e8-adc06c88443f)  ^d103879c

> 1Password 对于大多数用户仍然是最省心的选择，定价相对于提供的服务水平也是合理的。如果你纯粹因为价格因素而想逃离 1Password，那么你最好的选择可能是继续使用 1Password。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#da09215c-a0ba-4214-9a7f-df24cd44c758)  ^da09215c

> 对于有一定动手能力的用户，用 Bitwarden 或 KeePass 等开源方案替代 1Password 是可行的，并且使用体验相比前几年已经有所改善。相对而言，KeePass 的初始配置门槛更低，Bitwarden 则在功能上更为完善。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#dfb9ac31-3294-4552-912c-3a33db546e12)  ^dfb9ac31

> ### Bitwarden
> 
> [Bitwarden](https://bitwarden.com/) 是一个相对年轻的项目，2016 年才问世，但凭借着不错的功能集和活跃的更新，已经积攒了一定的口碑。
> 
> ![](https://proxy-prod.omnivore-image-cache.app/0x0,s9w5s8ol2WCcAqCZXmgIOScpYhbAGKHOePC4ACx68P5s/https://cdn.sspai.com/2023/12/31/786a23e872f708d59ead4f653468b652.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)
> 
> 和当前的 1Password 类似，Bitwarden 采用的是中心化的 SaaS 架构：密码数据存储在服务端，客户端只负责读取。但 Bitwarden 服务端和客户端代码（绝大部分）都是开源的，并且官方还提供了服务端的 [Docker 镜像](https://bitwarden.com/help/install-on-premise-linux/)，允许和鼓励用户自行托管。
> 
> 问题在于，这个官方版本包含组件众多、非常笨重，要求预留至少 2GB 内存和 12GB 硬盘空间，对于很多个人服务器来说负担过大。
> 
> **因此，当我们说「自建 Bitwarden」时，一般指的都是自托管一个社区开发、兼容原版 API 的轻量版本服务端** [**Vaultwarden**](https://github.com/dani-garcia/vaultwarden)1**，然后再与各平台的官方客户端搭配使用。**Vaultwarden 在初代树莓派上也能跑得起来，对于当下大多数 NAS、VPS 自然是不成问题的。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#03dc7377-9334-4b00-a878-0974ab3db92d)  ^03dc7377

> ### KeePass
> 
> [KeePass](https://keepass.info/) 的历史则悠久得多，从 2003 年底就一直存在。其架构也更为传统，类似于旧版的 1Password：没有服务端，所有数据存储在一个 [KDBX 格式](https://keepass.info/help/kb/kdbx%5F4.html)（其主体是经加密的 XML）的密码库文件中。2只要是能读写这个格式的工具，都可以充当 KeePass 的「兼容客户端」。事实上，由于原版 KeePass 只支持 Windows，界面和操作设计又极其古旧，兼容客户端才是更常见的选择。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#54138bd2-68c7-4354-8d46-aa2732c4b9e8)  ^54138bd2

> **因此，如果选用 KeePass，主要需要考虑的问题是 (1) 选什么客户端和 (2) 怎么同步密码库。**具体选项推荐将在稍后介绍。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#a61691d0-f7d3-459d-9118-c13c5ee9fdc8)  ^a61691d0

> 1Password、Bitwarden 和 KeePass 都支持 256 位 AES 加密，在设计结构和密钥长度上都能满足[保护机密信息的需求](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development)。就算量子计算机明天就会普及，这也不是种一时半会能「撞开」的算法 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#b4d3c2ca-8c4d-45ed-8dc9-b760f8ee3134)  ^b4d3c2ca

> **1Password:** 作为商业化产品，1Password 从服务端到客户端都是由开发商提供的，密码库也存储在开发商的服务器上，并且代码都是闭源的。这就是最典型的「中心化」模式，对普通用户最省事，但重度依赖于对开发商的信任。一个加分项是，自 2015 年开始提供云端服务以来，1Password 没有出现过重大的安全和宕机事事故。当然，这只是一种资历，不能成为全盘信任的理由。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#f9cd18e6-bae6-4f65-9363-8f17e8bca007)  ^f9cd18e6

> **Bitwarden:** 与 1Password 的一条龙模式相比，（自建版）Bitwarden 最大的不同之处在于有多个提供方：客户端由 Bitwarden 提供，服务端和密码库存储（代码来自 Vaultwarden 项目）则由用户自行托管。换句话说，这个系统中的「信任」是非常分散的。用户除了要信任 Bitwarden 和 Vaultwarden 的代码，还要信任自己用来托管这些代码的服务器——而受技术能力、消费级自建服务器的质量所限，其可靠程度实际上未必高过 1Password 那样经过市场考验的闭源服务。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#78cd78f2-c224-4402-a21d-d0561a8d5b94)  ^78cd78f2

> **KeePass:** 这是最为「去中心化」的方案。其优点在于没有服务端需要信任，密码库存储和客户端都有丰富选择，可以同时使用、互为备份。缺点则也在于信任的分散：每引入一个存储方案和客户端，就意味着要多信任一个第三方的安全和稳定，而经验表明很多小型开源作品并不足以支撑这样的信任。
> 
> 可见，开源并不意味着更安全。相反，如果配置不当，使用开源密码管理器反而会让自己暴露于更大风险之下。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#309e0f65-6f64-45a0-a8ee-0e224c973e54)  ^309e0f65

> ## 易用性
> 
> 分析完了安全稳定这个前提，还要关注的是密码管理器本身是否「好用」。实际上，在很多观点看来，使用密码管理器之所以更「安全」，很大程度上是因为它通过减少用户的记忆负担，鼓励用户设置复杂（[高熵](https://en.wikipedia.org/wiki/Password%5Fstrength#Entropy%5Fas%5Fa%5Fmeasure%5Fof%5Fpassword%5Fstrength)）、不重复的密码。如果一个密码管理器复杂到让用户提不起使用意愿，以至于重新回到手动输入和重复使用弱密码的老路上，这种好处也就荡然无存了。 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#3c9d81f1-8c03-4d23-91c7-c44a1a656b4c)  ^3c9d81f1

> ### 跨平台支持
> 
> 可能很少有什么类型的软件比密码管理器更需要跨平台支持了。在[宣布](https://blog.1password.com/1password-8-the-story-so-far/) 1Password 8 桌面版转向 Electron 这一受争议的决定时，开发团队的主要理由就是提高跨平台开发效率、减少平台间功能差异。
> 
> 从结果来看，尽管还是有些 macOS 老用户对于被剥夺了原生界面版本比较介意，这么做确实让 1Password 支持的平台更多、设计的整体性更强了。从桌面系统到移动系统，从浏览器到命令行，你基本上不用担心 1Password 是否支持自己使用的平台，而且对于各平台原生功能的支持也是非常及时的 [⤴️](https://omnivore.app/me/p-prime-18cc0a5c12c#7d915c2d-ca3e-489a-bb13-3cf42014e4c0)  ^7d915c2d


--- 

Full Content: 

开源和闭源并没有必然的高下，免费和收费也都只是综合成本的一个考量因素。

---

**TL;DR**

* 尽管面临一些合理质疑，==1Password 对于大多数用户仍然是最省心的选择，定价相对于提供的服务水平也是合理的。如果你纯粹因为价格因素而想逃离 1Password，那么你最好的选择可能是继续使用 1Password。==
* ==对于有一定动手能力的用户，用 Bitwarden 或 KeePass 等开源方案替代 1Password 是可行的，并且使用体验相比前几年已经有所改善。相对而言，KeePass 的初始配置门槛更低，Bitwarden 则在功能上更为完善。==

---

在密码管理领域，1Password 的领导地位是毋庸置疑的。但随着时间推移，对它的[质疑和顾虑](https://sspai.com/post/83060)也逐渐积累：决绝地转向订阅制、云端存储和 Electron「套壳」开发，惹恼了不少老用户；两次接受风投融资、大力拓展商用业务，也引发了对其偏离「群众路线」的担忧。

于是，「有什么好的 1Password 替代品」自然成了很多用户关心的问题。在众多选项中，以 KeePass 和 Bitwarden 为代表的开源方案尤其受极客用户青睐。

然而，如果你真的听从一些推荐，准备从 1Password 迁移到这些开源方案，就会发现这并不是件容易的事；开源的「自主」也意味着需要「自助」。即使愿意花这个功夫，能否完整迁移现有数据、能否延续之前习惯的操作，也是令人犹豫的因素。

更何况，在密码管理这件事上，可以说任何纯粹以省钱为导向的决策都是错误的，而开源光环本身并不足以为安全性提供担保。

因此，本文的目的就是从安全性、便利性等角度出发，研究从 1Password 迁移到 Bitwarden 或 KeePass 的可行性究竟如何，并为有意尝试的用户提供一些提示和技巧。

## 开源选项知多少

开源的密码管理工具数量不少，但 Bitwarden 和 KeePass 可能是为数不多能在口碑、功能、跨平台支持等多方面与 1Password 对标的。它们的密码存储机制正好分别类似于 1Password 转向云端前后的两种模式。

### ==Bitwarden==

==[Bitwarden](https://bitwarden.com/)== ==是一个相对年轻的项目，2016 年才问世，但凭借着不错的功能集和活跃的更新，已经积攒了一定的口碑。==

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9w5s8ol2WCcAqCZXmgIOScpYhbAGKHOePC4ACx68P5s/https://cdn.sspai.com/2023/12/31/786a23e872f708d59ead4f653468b652.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

==和当前的 1Password 类似，Bitwarden 采用的是中心化的 SaaS 架构：密码数据存储在服务端，客户端只负责读取。但 Bitwarden 服务端和客户端代码（绝大部分）都是开源的，并且官方还提供了服务端的== ==[Docker 镜像](https://bitwarden.com/help/install-on-premise-linux/)====，允许和鼓励用户自行托管。==

==问题在于，这个官方版本包含组件众多、非常笨重，要求预留至少 2GB 内存和 12GB 硬盘空间，对于很多个人服务器来说负担过大。==

**==因此，当我们说「自建 Bitwarden」时，一般指的都是自托管一个社区开发、兼容原版 API 的轻量版本服务端==** [**Vaultwarden**](https://github.com/dani-garcia/vaultwarden)==1==**==，然后再与各平台的官方客户端搭配使用。==**==Vaultwarden 在初代树莓派上也能跑得起来，对于当下大多数 NAS、VPS 自然是不成问题的。==

### ==KeePass==

==[KeePass](https://keepass.info/)== ==的历史则悠久得多，从 2003 年底就一直存在。其架构也更为传统，类似于旧版的 1Password：没有服务端，所有数据存储在一个== ==[KDBX 格式](https://keepass.info/help/kb/kdbx%5F4.html)====（其主体是经加密的 XML）的密码库文件中。====2====只要是能读写这个格式的工具，都可以充当 KeePass 的「兼容客户端」。事实上，由于原版 KeePass 只支持 Windows，界面和操作设计又极其古旧，兼容客户端才是更常见的选择。==

![](https://proxy-prod.omnivore-image-cache.app/0x0,sFS51QWA3Y3wfO2WtCMcC19Q7HKoW-ILz0lbrY3vi9GE/https://cdn.sspai.com/2023/12/31/03217dfa6662c7f3d752d76bb9328767.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**==因此，如果选用 KeePass，主要需要考虑的问题是 (1) 选什么客户端和 (2) 怎么同步密码库。==**==具体选项推荐将在稍后介绍。==

顺带一提，KeePass 生态的开源文化可以说是模范级的。你可以看到两个竞品客户端的开发者在 Reddit 用户「选谁好」的提问下「[商业互吹](https://old.reddit.com/r/KeePass/comments/e1g2xp/keepassium%5For%5Fstrongbox%5Ffor%5Fios/f8qord6/)」，或者为了一个拟议扩展格式[共同探讨](https://github.com/keepassxreboot/keepassxc/issues/863)。在如今戾气渐长的开源社区，这样的氛围是不多见的。

## 安全与稳定性

安全稳定是密码管理软件的生命线。然而，这也是最令用户摸不着头脑、无从判断优劣的因素。如果只看各个产品的官方网站，给人的印象好像个个都是固若金汤、无懈可击。

我的建议是……忽略这些宣传。的确，如果仅从抵御暴力破解的能力看，只要用上足够长度的加密算法，效果基本都是过关的。例如，本文讨论的 ==1Password、Bitwarden 和 KeePass 都支持 256 位 AES 加密，在设计结构和密钥长度上都能满足====[保护机密信息的需求](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development)====。就算量子计算机明天就会普及，这也不是种一时半会能「撞开」的算法==。

**但对密码管理器而言，暴力破解仅仅是诸多可能面对的威胁中的一部分。**密码管理器是由多个密码库、服务端和客户端等多个组件构成的系统，其中的每个组件都可能遭到攻击或出现故障，成为影响整个「木桶」的安全和稳定的「短板」。

不过，要列举各种潜在威胁并比较各个产品的防御能力，是比较困难的，本文的篇幅也不允许这么做。但我们可以换种思路：**在信息系统中，「信任」——对他方行为的假设和依赖——是漏洞的根源，过度或错位的信任都会成为风险。**因此，通过比较不同密码管理器都需要哪些「信任」，就可以比较方便地看出风险所在，以及判断自己是否可以接受。

下表就是基于这种思路的（高度简化的）比较，部分借鉴了以太坊创始人 Vitalik Buterin 的[方法](https://vitalik.eth.limo/general/2020/08/20/trust.html)。每格中的分母表示该组件总共涉及多少提供方，分子表示仅当其中多少个提供方按期望方式运行时，系统才能无故障且安全地使用。例如，「1/1」表示「该组件只有一个提供方，且仅当该方按期望运行时，才能正常使用」。

| 组件    | 1Password | Bitwarden | KeePass |
| ----- | --------- | --------- | ------- |
| 密码库存储 | 1/1       | 2/2       | 1/N     |
| 服务端   | 1/1       | 2/2       | 0       |
| 客户端   | 1/1       | 1/1       | N/N     |

说明和分析如下：

**==1Password:==** ==作为商业化产品，1Password 从服务端到客户端都是由开发商提供的，密码库也存储在开发商的服务器上，并且代码都是闭源的。这就是最典型的「中心化」模式，对普通用户最省事，但重度依赖于对开发商的信任。一个加分项是，自 2015 年开始提供云端服务以来，1Password 没有出现过重大的安全和宕机事事故。当然，这只是一种资历，不能成为全盘信任的理由。==

**==Bitwarden:==** ==与 1Password 的一条龙模式相比，（自建版）Bitwarden 最大的不同之处在于有多个提供方：客户端由 Bitwarden 提供，服务端和密码库存储（代码来自 Vaultwarden 项目）则由用户自行托管。换句话说，这个系统中的「信任」是非常分散的。用户除了要信任 Bitwarden 和 Vaultwarden 的代码，还要信任自己用来托管这些代码的服务器——而受技术能力、消费级自建服务器的质量所限，其可靠程度实际上未必高过 1Password 那样经过市场考验的闭源服务。==

**==KeePass:==** ==这是最为「去中心化」的方案。其优点在于没有服务端需要信任，密码库存储和客户端都有丰富选择，可以同时使用、互为备份。缺点则也在于信任的分散：每引入一个存储方案和客户端，就意味着要多信任一个第三方的安全和稳定，而经验表明很多小型开源作品并不足以支撑这样的信任。==

==可见，开源并不意味着更安全。相反，如果配置不当，使用开源密码管理器反而会让自己暴露于更大风险之下。==

当然，指出这点的目的也不是劝退，只是提示读者在选择时注意权衡利弊，并且做好相应的「功课」：如果选择 Bitwarden 方案，需要准备好尽量靠谱的自托管环境（例如运行稳定、性能充裕的 NAS 或云主机）；如果选择 KeePass 方案，则要尽量选择稳定的云存储和靠谱的客户端。

## ==易用性==

==分析完了安全稳定这个前提，还要关注的是密码管理器本身是否「好用」。实际上，在很多观点看来，使用密码管理器之所以更「安全」，很大程度上是因为它通过减少用户的记忆负担，鼓励用户设置复杂（====[高熵](https://en.wikipedia.org/wiki/Password%5Fstrength#Entropy%5Fas%5Fa%5Fmeasure%5Fof%5Fpassword%5Fstrength)====）、不重复的密码。如果一个密码管理器复杂到让用户提不起使用意愿，以至于重新回到手动输入和重复使用弱密码的老路上，这种好处也就荡然无存了。==

为此，下文会从多个角度比较 1Password、Bitwarden 和 KeePass 的易用性，并穿插一些配置使用方面的提示和建议，以方便读者的选择和探索。

### ==跨平台支持==

==可能很少有什么类型的软件比密码管理器更需要跨平台支持了。在====[宣布](https://blog.1password.com/1password-8-the-story-so-far/)== ==1Password 8 桌面版转向 Electron 这一受争议的决定时，开发团队的主要理由就是提高跨平台开发效率、减少平台间功能差异。==

==从结果来看，尽管还是有些 macOS 老用户对于被剥夺了原生界面版本比较介意，这么做确实让 1Password 支持的平台更多、设计的整体性更强了。从桌面系统到移动系统，从浏览器到命令行，你基本上不用担心 1Password 是否支持自己使用的平台，而且对于各平台原生功能的支持也是非常及时的==。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSaRoFAo7RRRvDVDYp_YM50_uu9oHrHmSBe-qzQVT65Q/https://cdn.sspai.com/2023/12/31/05862cbf6a3f2efa62c116987adf1ea4.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### **Bitwarden**

**与之相比，Bitwarden 总体上做得也不错，在平台覆盖面、原生功能支持等方面与 1Password 是完全看齐的。**但如果考虑上设计水平和用户体验，Bitwarden 的出品就要粗糙得多了。

例如，同样是基于 web 技术打包，1Password 8 的桌面版经过几轮迭代，在采用 Electron 的软件中已经算是水准很高。而 Bitwarden 无论是控件风格、动画质感还是操作手感，都仿佛停留在多年以前：设置界面没有独立窗口，而列表视图竟然连 Shift 多选这样基本的惯例交互都不支持，几乎泯灭了专门做个客户端的意义。移动版基于完全相同的设计和框架，体验也是类似。总之，最高的评价就是「捏着鼻子能用」。（好在密码管理器的交互频率不高，确实属于「捏着鼻子能用就行」的一类产品。）

![](https://proxy-prod.omnivore-image-cache.app/0x0,sVoSgtIas-OXqqJ8ViZSSSzvcbk7KY1s3dg2E4zES7uY/https://cdn.sspai.com/2023/12/31/7b5bcead3218fbe682cd406a66a2a205.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

实物比证件照还要丑.jpg

#### **KeePass**

**KeePass 方面的情况就更乱了。**如上文介绍，原版 KeePass 只支持 Windows，而且并不值得推荐；其他平台则更是都靠第三方兼容客户端来覆盖。

此外，KeePass 官方页面虽然提供了一个兼容客户端[列表](https://keepass.info/download.html)，但其中大部分信息都已经过时。经笔者测试，以下是截至本文写作时在各平台推荐选用的客户端，供读者参考。如果列举了多个选项，排序方式是按推荐程度递减。

| 平台            | 推荐客户端                                                                                                                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows/Linux | [KeePassXC](https://keepassxc.org/) (开源免费，Qt 框架)                                                                                                                                                                                                         |
| macOS         | [Strongbox](https://github.com/strongbox-password-safe/Strongbox) (开源，高级功能 €15/年或 €60 买断) KeePassXC [KeePassium](https://github.com/keepassium/KeePassium) (开源，高级功能 $20/年或 $80 买断)                                                                       |
| iOS           | Strongbox KeePassium                                                                                                                                                                                                                                     |
| Android       | [Keepass2Android](https://github.com/PhilippC/keepass2android) (开源免费) [KeePassDX](https://github.com/Kunzisoft/KeePassDX) (开源免费，有[捐赠版](https://play.google.com/store/apps/datasafety?id=com.kunzisoft.keepass.pro)，$10 买断)                               |
| 浏览器           | [Strongbox 自带](https://strongbox.reamaze.com/kb/autofill/are-there-any-browser-plugins-for-strongbox) (Chromium、Firefox 和 Safari) [KeePassXC-Browser](https://github.com/keepassxreboot/keepassxc-browser) (Chromium 和 Firefox) KeePassium 自带 (仅 Safari) |
| 命令行           | [KeePass XC 自带](https://keepassxc.org/docs/KeePassXC%5FUserGuide#%5Fcommand%5Fline%5Ftool)                                                                                                                                                               |

（其实试过的远不止这些，没有列出的基本都是存在重大功能不足或者停止维护。虽然可能勉强能用，但体验实在过差，就不一一列举浪费大家时间了。有兴趣的读者可以自行尝试。）

顺便一提，如果你是因为对 1Password 改用「套壳」框架不满而考虑其他选项，那么特别值得推荐的是 macOS/iOS 上的 Strongbox。虽然定价有点门槛，但它绝对是你见过最符合 Apple 设计规范的软件之一，「原生感」甚至超越以此闻名的旧版 1Password；而且以一己之力在 KeePass 的简陋地基上做出了获得了不输 1Password 的使用体验，可见功力了得。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s4bp1aEzwkwm03SexDYk8dgyteUkQ5LlUSFHL-J6icYE/https://cdn.sspai.com/2023/12/31/134aa2c9b3a19ff29e110c7207bab1e3.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

Strongbox

### 初始配置难度

对于 1Password 这样的「全管理型」服务而言，其价格的一部分就是服务成本。而既然考虑 DIY 方案，动手环节自然是免不了的。但至于到底哪些方面要动手、动手到什么程度，Bitwarden 和 KeePass 确实存在不少差异。

阅读信息

全文字数 10786字

阅读本文共需 18分钟

字号选择 

小

中

大
