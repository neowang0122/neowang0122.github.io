---
id: d0b12c4e-cfca-11ee-afa5-a7beefbbd76e
title: |
  用浏览器思路，为 iPad 带来桌面级体验：Lok Board - 少数派
author: |
  化学心情下2
tags:
  - RSS
date_saved: 2024-02-19 23:19:38
date_published: 2024-02-19 23:19:38
draft: true
---

# 用浏览器思路，为 iPad 带来桌面级体验：Lok Board - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/i-pad-lok-board-18dc5a6a23f)

[Read Original](https://sspai.com/post/86288)

date_saved: 2024-02-19 23:19:38

date_published: 2024-02-19 23:19:38

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sQ4rd31j0y0BDysXAH3Bb5MAp9-GuqEYh2PCdShlvcgQ/https://cdn.sspai.com/2/20/2024/article/7fd43e6d-9340-9aca-15e0-1e7fee6f7c69.png?imageMogr2/auto-orient/quality/95/thumbnail/!750x750r/gravity/Center/crop/750x750/interlace/1)

用浏览器思路，为 iPad 带来桌面级体验：Lok Board

**tl;dr**

**优点（The good）**

* iPad 平台多任务处理的新尝试
* 在限制之外，交互设计做了相当成熟的设计
* 一定程度上突破了 iPadOS 平台本身的限制

**缺点（The bad）**

* 受限于 iPad 平台，键盘快捷键无法充分利用
* 受限于 API，无法实现更高级的桌面级操作功能
* 受限于 WebKit，部分网页有兼容性方面的问题

---

## 引言

经过近五年的发展，iPadOS 真的成为适应生产力环境的桌面级操作系统了么？

自 2019 年 iPadOS 从 iOS 独立出来以来，其发展紧密围绕着 iPad 的未来定位展开。iPad 系列产品线的多样化，从性能强大的 iPad Pro 到轻薄的 iPad Air，再到入门级的 iPad 和便携的 iPad Mini，都显示出了对一个更适合平板设备的操作系统的需求。

iPadOS 在向生产力方向演进方面也表现出积极态度，不管是对 Apple Pencil 的增强优化、启动器设计更接近 macOS、支持鼠标使用以及 iPad Safari 默认以桌面模式打开网页。iPadOS 都在一定程度上回应了市场对于能够提高生产力的平板电脑的需求，来进一步对抗类似微软 Surface Pro 这样的二合一平板电脑。

然而，尽管经过多年的发展 iPadOS 到目前为止，我们还不会将它完全视为一个桌面级操作系统，更像是一个移动操作系统的衍生版本。受制于大小不一的屏幕，iPadOS 在绝大多数的 iPad 系列上依然不支持多窗口平铺显示；虽然 Apple 试图通过复杂的分屏功能来解决这一问题，但分屏操作的复杂性和对应用的要求，使得它在实用性上仍然无法与传统的桌面操作系统相媲美。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2linB-XrG8dfMkGTi6_PB9ooeBRRAHWVQHP-9jfm1fc/https://cdn.sspai.com/2024/02/03/article/bcceea2c550916b21de45856b013bf59?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

虽然新推出的台前调度功能让多应用切换更直观、允许用户平铺窗口，缓解了 iPad 上多任务处理时应用切换不够便捷的问题，但并非所有 iPad 型号都支持此功能。因此，出现了这样一种情况：尺寸超过 10 英寸、定位为入门级的 iPad，在功能上与小于 10 英寸的型号并无本质差异，仅显示应用的面积更大。显然，借助分屏功能将 iPadOS 当作真正的桌面操作系统使用还不切实际。

![](https://proxy-prod.omnivore-image-cache.app/0x0,squOQ_DEw62DNfm_xIYLJLHC6Z69KAc8U6kqU8-HlQd8/https://cdn.sspai.com/2024/02/03/article/e08e26bdbc0db910a1be639a6b643b1e?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

在我看来，iPad 的桌面系统应根据屏幕大小提供不同的使用场景。对于屏幕尺寸超过 10 英寸的设备，应提供类似桌面系统的多应用窗口体验，支持应用窗口的平铺或堆叠。桌面不仅是图标和小组件的简单排列，而是能够实际放置应用窗口的容器。至于屏幕小于 10 英寸的设备，不应提供分屏等多应用窗口功能，而是更专注于便携性，而非面向桌面系统级别的生产力。

问题的关键在于如何更有效利用接近桌面级的屏幕，Apple 可能因为各种原因，未能在系统上实现类似于自由的窗口调整。那么是否可以在 iPad 软件方面下功夫，例如尝试把 Web 应用化，就像是 ChromeOS 一样。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sH_3T80t4x0IV2Z6nfRUFHSF9HWD4SYrv8id6WLrY1rE/https://cdn.sspai.com/2024/02/03/0860b32ca7b38e2c6bca73a6399a89f5.png)

ChromeOS 是一个基于网页浏览器的桌面操作系统。我们可以把它看作是一个 Chrome 浏览器，每个网页就是一个应用。ChromeOS 在国外大火的背后，**也意味着浏览器有潜力成为未来的操作系统**。

加之 ChromeOS 对硬件要求低，即便是较旧的设备也能流畅运行，这对硬件接近桌面级别的 iPad 来说提供了一定的启示——或许一个浏览器就能带来类似 ChromeOS 的桌面化体验。

而愿意对此进行尝试的，则是这款名为 [Lok Board](https://apps.apple.com/us/app/lok-board/id1621242252) 的 iPad App。

使用 Lok Board 一段时间后，我开始思考它究竟是什么。本质上，Lok Board 是一款在 App Store 上架的 iPad 应用。但体验上让人不得不承认，它的创新思维非常独特——它基于浏览器技术打造了一个「Web OS」。与十多年前 Palm 推出的 Web OS 不同，这个「Web OS」完全运行在网页浏览器内，允许用户在浏览器中管理、使用应用并完成工作任务，类似于在 ChromeOS 上运行的基于 web 的软件。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sddlnC1jMpeqDfSl40nRrGN3HVtDdHlW-QOk0xDLiKtA/https://cdn.sspai.com/2024/02/03/d17cf2077bf0b767a22cc85aa11456cb.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

这种设计巧妙地解决了不支持「台前调度」iPad 当前的生产力痛点。至少在 Lok Board 中，我们可以同时打开多个应用，并将它们以窗口形式平铺在「桌面」上——在这一刻，iPad 有了接近于普通笔记本电脑的多任务处理体验。

### 基于浏览器技术实现的「系统桌面/工作台」

Lok Board 本质上是一个深度定制的 Safari 浏览器壳，但基于浏览器技术设计了一套相当完整的桌面操作系统组件。

使用 Lok Board 时，首先呈现的是系统任务栏和桌面。点击任务栏最左端的启动台，可以看到所有应用列表，整个逻辑和 ChromeOS 或其他 Linux 发行版非常相似。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s_a2O9LMvSkCchj3j1VllZVjE3UrFvMuK1ribF69Sg-M/https://cdn.sspai.com/2024/02/03/9515ac286c5b534baa8f64fd75bce2e6.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

任务栏右侧是一些常用的管理功能。其中，以 🔍 图标表示的功能类似于 macOS 上的 Spotlight，支持使用鼠标或内置键盘快捷键`Command-K`进行操作1

避免与 iPadOS 的系统级键盘快捷键冲突，快捷键有所变化。

。

![](https://proxy-prod.omnivore-image-cache.app/0x0,scpnprUcP_kD7mYgvhkmCx3NOv43CvsY48w9ySlN4P5c/https://cdn.sspai.com/2024/02/03/246933ef06d0ea2cc6c4365b8a8bfe19.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

第二个按钮的图标和功能类似于 macOS 的调度中心，可以查看当前的桌面空间和已开启的应用。不过，与 macOS 的调度中心不同，Lok Board 的调度中心目前无法新增桌面，也缺乏相应的手势或快捷键快速唤起。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJf5Ht_OB__1Vj8uAejdsTNMet7MbTTjvOmZJ4yEeAcw/https://cdn.sspai.com/2024/02/03/741c5f3fedf6f3b00c38211073688f1e.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

最右侧的功能是一个截屏工具，允许用户用鼠标进行区域截图，包括选择特定区域或自定义形状的截图，并选择保存方式。不过和前面的调度中心一样，Lok Board 的截图工具也不能通过快捷键直接唤起。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCnMKdpzNo9doJ-u-ELxRA6hDMawDHJzG-PXPCTJ9w6k/https://cdn.sspai.com/2024/02/03/42eb585591b53c2a33cba8cebe0beb28.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

右键点击桌面会弹出菜单项，包括排序、创建新文件和更换壁纸等选项。原本以为 iPadOS 类似，右键点击桌面不会有什么功能，而能弹出菜单实属意外。尤其是直接在桌面上新建文件的功能，赋予了它更多桌面操作系统的特性。

![](https://proxy-prod.omnivore-image-cache.app/0x0,szQacsj97Pz59yVJpBKJy6S_gFww-NO_2Mwtusk2nues/https://cdn.sspai.com/2024/02/03/a1fb26fce8bc1153d464ce9e39192cb2.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## 应用窗口和应用管理

Lok Board 在 iPadOS 之外也创新性地加入了应用管理和应用窗口机制。

通过左下角的「启动台」，可以看到所有程序列表，其中包括 Lok Board 自带的「原生组件」和第三方 Web App。「原生组件」默认包括设置、天气、CPU/内存占用、便签、计算器、浏览器等，可以达成开箱即用。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYvfLBiJbv3iSawsL34StnYH2XKddQTB4j-EzMHF9xE0/https://cdn.sspai.com/2024/02/03/b69b9985307399bdbbc86f8810c2eb63.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

Web App 则可以通过两种方式添加，一来是通过 Web Directory 应用商店添加，类似于通过 Chrome Web Store 直接给 Chrome 安装插件。

**关联阅读：**

* [iOS 终于支持了 PWA，一起来认识一下这个强化版「小程序」 | 科普](https://sspai.com/post/44027)
* [PWA、原生应用傻傻分不清，它们的差距可以有多小？](https://sspai.com/post/60928)
* [桌面端上的「小程序」，这些 PWA 应用带来更好的使用体验](https://sspai.com/post/53885)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s103rlTaO6JIqkmkddiMIxtAHtDY4JxN0488jTbEl0zY/https://cdn.sspai.com/2024/02/03/4b42451bca36a3022399174bf788562b.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

另一种则是直接安装，类似于在 Chrome 上安装 PWA 应用。打开 Lok Board 的浏览器打开想要添加成 Web App 的网站，然后点击浏览器右上角的汉堡菜单，选择「Add as Web App」将其作为一个独立 App 打开，这时候这个网页就会和 web App 一样以独立窗口的形式打开。

这时候鼠标右击这个应用在任务栏的图标，选择「Pin」将其固定在任务栏中从而实现第三方 Web App 的安装，你也可以打开应用启动台，在 Web App 这一栏中也可以看到你自己创建的 Web App。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s66z0qHuD8iDGpvMzCENx_QT6IzyLBzZWVGgRoQY9YhE/https://cdn.sspai.com/2024/02/03/f3a8ae0c8e971943986d1637324d6318.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

尽管以窗口形式开启的应用接近桌面系统的体验，但仍存在许多的限制，比如：窗口控制栏默认隐藏，需通过鼠标操作显示2，且只有出现了窗口控制栏才能移动、调整、缩放应用窗口。通过窗口控制，也支持类似于 Windows 的拖动窗口到系统边缘实现分屏效果。

![](https://proxy-prod.omnivore-image-cache.app/0x0,ssN5YDGQSaLg9SOw2tnjLULgnBRK6B4gky5sGN73axtc/https://cdn.sspai.com/2024/02/03/dd129a3e9caf0ce0df064bd501483749.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

不同于常见的操作系统，Lok Board 的应用窗口控制栏缺少最小化和最大化按钮，仅有关闭按钮。最大化3和最小化4窗口的操作需要通过其他方式实现，我猜测是为了 App Store 审核政策合规。

![](https://proxy-prod.omnivore-image-cache.app/0x0,swLVNnxOxSbsUkH3jHBjBBBKA68mdxtT28jF50cG7seY/https://cdn.sspai.com/2024/02/03/7ad7a641ffe5da6b77b13608182a3d97.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

但可能同样受限于 App Store 审核政策，任务栏中的应用图标状态也有限制，无法从状态栏判断哪些应用被隐藏或已打开。

虽然可以看得出 Lok Board 同时采用类似 macOS 和 Windows 的逻辑，比如：在任务栏选择应用图标然后右键鼠标，可以看到应用窗口缩略图以及相对应的快捷控制菜单（固定、最小化、重置窗口、关闭）。

开启的应用会在任务栏显示应用图标和一个蓝点，关闭应用则更像是 Windows 属于完全关闭5

macOS 中关闭仅仅是关闭窗口，应用程序仍处于运行状态。

，没有固定到任务栏的应用图标都不会显示，而固定到任务栏的应用则是蓝点消失图标保留。整体操作逻辑上就和浏览器中打开、关闭、固定标签页一样。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbWZ54Q2uBpSohXnrSukY6dEN4QLRqHaaYKfAovzCuYM/https://cdn.sspai.com/2024/02/03/a52d03514a997ccd4aa96af8fa27e19a.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

但这也导致的一个问题：无法从状态栏判断开启的应用中哪些是被隐藏了窗口（最小化），哪些是窗口已经被打开并放在桌面上。

在 macOS 上，窗口最小化的应用都会停靠在 Dock 栏右侧；在 Windows 上可以通过悬停在应用图标的窗口浏览上做进一步确定。此外考虑到 iPad 上的 Safari 支持标签页悬停浏览，Lok Board 不支持只能是 API 层面上的限制了。

在使用过程中，我注意到 Lok Board 非常注重细节，如窗口阴影效果和选中窗口的高亮效果，既不突兀又能有效区分窗口，侧面反映出了 Lok Board 完成度之高和对用户体验的关注。

## 键盘快捷键与逻辑冲突

显而易见，旨在提供桌面级体验的 Lok Board 必不可少地会支持键盘快捷键。支持键盘快捷键有利有弊。

好的一方面是，Lok Board 提供了众多快捷键，例如，使用 `Command-K` 可唤起搜索工具。配合 iPadOS 的功能，按住 Command 键可显示快捷键提示的功能，可以极大程度上的提升使用体验。

不好的一方面则是，Lok Board 应用本身快捷键和浏览器的快捷键相似，如果一款 Web App 有特定快捷键，且这些快捷键已经被 Lok Board 占用了，那么就会出现逻辑冲突的情况。比如，使用在线设计或开发服务时，有很大一批的快捷键都会失效，只能依靠鼠标解决。

![](https://proxy-prod.omnivore-image-cache.app/0x0,smeXS_ldaipcUZHTRnbraHoVZ49LsU6I79aZy-ycWw1M/https://cdn.sspai.com/2024/02/03/214be266876737d76a6e4af339948a33.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

还有一批快捷键又被 iPadOS 默认占用，想要进一步实现「系统级」更是难上加难。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sb8v1PdfX0cy3k9EGR27WbSYBbgW5Soa_fXqY-e1fKL0/https://cdn.sspai.com/2024/02/03/e5f9fa80ae0786b15ce3f3e554121073.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

Apple 对 iPad 设定了明确的产品等级，其中外接显示器功能的支持程度不同。比如：M 芯片的 iPad 型号支持全屏的「扩展」显示，而中低端型号外接显示器时只能以有黑边为代价「镜像」输出 iPad 屏幕上的内容。

Lok Board 能够突破这一限制，实现无论是投屏还是外接显示器，都能在外接显示器上扩展它的「应用桌面」。

![](https://proxy-prod.omnivore-image-cache.app/0x0,shyS3bZucj1-4k-s7nnnh25LQ_Wjm-huMlw4GI8WA1lI/https://cdn.sspai.com/2024/02/03/3fb0c5b4b49717065aadac1b4e1c3982.jpg)

这种全屏显示虽然在视觉上更接近完整的桌面系统，但实际使用中存在不便。首先，这种外接显示并非 iPadOS 的屏幕镜像功能，而是 Lok Board 应用在外接显示器上的全屏显示。这会导致显示内容的错位。

例如，当鼠标移至显示器顶端，其实际位置恰好处于 iPad 系统状态栏下方时，按下并拖动鼠标左键会触发 iPad 的下拉菜单。如果用户只关注外接显示器而忽略了 iPad 屏幕，就难以意识到这一操作。结果是，经过一段时间操作后，用户才可能会因为没有任何响应而意识到发生了误触。

另一个问题则是显示内容不同步。与 iPad 屏幕镜像功能不同，这种外接显示器的全屏显示不会同步显示信息。例如，按住 `Command` 键的快捷键提示仅在 iPad 屏幕上显示，外接显示器上不会显示任何提示信息。这就需要用户视线反复在两个屏幕上跳转，时间长了也会怀疑值不值得这样用。

## Web App 足够好用了吗？

那么在 Lok Board 运行这些 Web App 到底是否好用呢？而就我的体验来说，只能说依旧存在不少限制。

![](https://proxy-prod.omnivore-image-cache.app/0x0,siQt3h1yu6Acu7MzqOP58dtL1TP6on8GWgMpFV7a6Ivg/https://cdn.sspai.com/2024/02/03/83cf166735f79601bb8a9976f2290a97.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

对于上架 Web Directory 的应用，则基本上可以相当完美的运行。个人尝试了 Notion、Apple Music、Trello 这些在线工具，可以说是操作上相当流畅不卡顿，尤其是我在 Notion 上撰写旅行行李清单的同时还打开 Apple Music 听歌，真有点在 macOS 上工作的感觉。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sghKaiyWJ7pkP-1yi67Jnb8-VGx77nEXjpeULg5efwrk/https://cdn.sspai.com/2024/02/03/6a342214a1bfaeef3b2edc300e98e422.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

但在自己安装的 Web App 上操作就会发现有很多不方便的地方，比如这个在线设计工具 Master Go 就出现了里面的所有键盘快捷键都无法正常唤起，也就没办法放大画布，创建编组。尤其是当连接外屏时还会触发输入法 Bug——输入中文时无法选择候选词。

## 总结

总体而言，Lok Board 展现了 iPad 桌面化的潜力——至少对于非 iPad Mini 的设备而言，实现多应用窗口并行运行并不是遥不可及。这种设计更贴近平板电脑的原始设计定位，提高了窗口控制栏的可操作性，不仅是鼠标和触摸板，手指操作应用窗口也能很便捷。

Lok Board 基于浏览器构建了一个相当完善的 Web App 生态。尽管受到种种的限制，但依旧向我们展示了 Web OS 当前的发展潜力。

我们必须认识到，不能用传统桌面系统的标准来衡量 Lok Board。让 iPad 运行完整的桌面系统本身就充满挑战。如果曾尝试将 iPad 作为 macOS 的扩展屏幕，就会发现如何界定鼠标和触控操作、应用切换等功能存在不少挑战，更不用说系统管理、文件管理等更复杂的模块和功能。

因此，Lok Board 为我们提供了一种在 iPad 上运行桌面操作系统的可能性探索。虽然它不是完美的，但谁又能说这种尝试必须达到完美呢？

\> 关注 [少数派公众号](https://sspai.com/s/J71e)，解锁全新阅读体验 📰

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

* 1避免与 iPadOS 的系统级键盘快捷键冲突，快捷键有所变化。
* 2要鼠标稍微向上拖一下
* 3鼠标双击窗口控制栏
* 4位于窗口控制栏最右侧的汉堡菜单中
* 5macOS 中关闭仅仅是关闭窗口，应用程序仍处于运行状态。

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

