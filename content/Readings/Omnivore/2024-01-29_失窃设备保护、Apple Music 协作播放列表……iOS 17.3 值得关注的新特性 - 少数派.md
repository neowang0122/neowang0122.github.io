---
id: b8bef4a6-bf29-11ee-a41a-0389b6c650ff
title: |
  失窃设备保护、Apple Music 协作播放列表……iOS 17.3 值得关注的新特性 - 少数派
author: |
  Voyager_1
tags:
  - RSS
date_saved: 2024-01-29 22:31:59
date_published: 2024-01-29 22:31:59
draft: true
---

# 失窃设备保护、Apple Music 协作播放列表……iOS 17.3 值得关注的新特性 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/apple-music-i-os-17-3-18d58ab50a6)

[Read Original](https://sspai.com/post/86155)

date_saved: 2024-01-29 22:31:59

date_published: 2024-01-29 22:31:59

--- 

# Full Content: 

失窃设备保护、Apple Music 协作播放列表……iOS 17.3 值得关注的新特性

距离上次更新已经过去了快一个半月，早该到来的 17.3 正式版在经历了 beta2 撤回风波后，最终还是来到了我们面前。本次更新中，苹果新增了失窃设备保护功能、WWDC 提到的 Apple Music 协作播放列表也终于上线（国区暂时没有），此外还有一些系统的小优化值得注意。

本文发出时，iOS 17.4 的开发者预览版也已发布，其中最重要的更新是包含了将于 3 月起提供给欧盟国家用户的一系列更改，如第三方应用商店、外部支付渠道、自定义浏览器内核等。该版本还将加入新的 emoji 表情符号、播客自动字幕、秒表的灵动岛支持等。我们将通过后续文章陆续介绍，敬请关注。

## 失窃设备保护

当我们的手机失窃后，很可能会遭遇被篡改密码或面容 ID 的情况，一旦成功小偷就完全掌握了手机的控制权。如果只是丢失一部手机尚不严重，更严重的是小偷可以随意地访问 iCloud 钥匙串、照片和备忘录等，若被盗取银行账户和密码等隐私信息，则有可能进一步造成严重的财产损失。

美国《华尔街时报》于 2023 年 4 月 19 日发布了一篇 [文章](https://sspai.com/link?target=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fthe-iphone-setting-thieves-use-to-lock-you-out-of-your-apple-account-716d350d)，文中提到：

> 小偷只需要在公共场合偷看到，用户解锁手机屏幕时的密码……然后偷走用户的手机，接着他们就可以通过锁屏密码绕过手机绝大多数的安全措施，看到、修改用户的账户密码。最后可以完全将用户隔离在账户保护系统之外，让用户完全无法访问到自己的账户系统。

美国《华尔街时报》后续也发布了一个 [视频](https://sspai.com/link?target=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dgi96HKr2vo8)，从小偷的视角讲述了整个故事。

换句话来说，在小偷知道锁屏密码以后，不止会丢失手机、让所有可以通过的短信认证登陆的账户处于风险之下；还会让整个基于账户服务的找回措施失效，甚至把真正的用户锁在账户服务之外。看似牢不可破的保护机制，只需要线下被别人看到一次锁屏密码就被完全攻破了。

过往的「查找」功能仅限于用户无法获得 iPhone 设备密码的情形，一旦手机密码被对方知晓将完全无法应对，所有信息将直接暴露在用户面前。

[失窃设备保护](https://support.apple.com/zh-cn/HT212510) 这一额外安全措施就是加在「查找」破防前的一道屏障。小偷如果拿到了 iPhone 的密码，只要设备之前启用了被盗设备保护后，无论是更改密码或面容 ID，还是访问 iCloud 钥匙串中的密码、关闭丢失模式、恢复出厂设置等高危操作都必须使用面容 ID 或触控 ID 进行生物识别身份验证。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sU_FFCUWkiFg1hYByKzlfsokOFJyPGIGtbdirLmOjNw0/https://cdn.sspai.com/2024/01/29/78bc19a1b57d711a1e81584ab2e56f11.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJHGHeZe-wr0MrgkvUVgcmCNVRTreA1fX00c3rV6-uRE/https://cdn.sspai.com/2024/01/29/b223479e4a1960f5b3913c94ca2cef89.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

如果要进行以下密码相关的操作，除了通过生物识别还需要有 1 小时的安全延迟后才能操作：

* 更改 iPhone 密码
* 添加或删除面容 ID 或触控 ID
* 更改 Apple ID 密码
* 更新选定的 Apple ID 帐户安全设置，包括添加或删除受信任的设备、受信任的电话号码、恢复密钥或恢复联系人
* 关闭查找功能
* 关闭失窃设备保护

这段安全延迟期间，我们依然有时间找回丢失的设备，或对数据进行保护和删除。

不必担心失窃模式造成日常使用的困扰，当我们处于受信任的地点（例如家中或工作场所）时，正常修改密码不需要等待。只有我们不在 iPhone 熟悉的地点时，才必须使用面容 ID 或触控 ID 进行认证，进行某些操作：

* 使用钥匙串中存储的密码
* 使用 Safari 浏览器中存储的付款方式（自动填充）
* 关闭丢失模式
* 抹掉所有内容和设置
* 申请新的 Apple Card
* 查看 Apple Card 虚拟卡号
* 在钱包中进行某些 Apple Cash 和 Savings 操作（例如，Apple Cash 或 Savings 转账）
* 使用你的 iPhone 设置新设备（例如快速开始）

值得一提的是，对于逢年过节走亲戚手机交给小辈临时玩游戏的场景，失窃模式也能避免他们操作不当引起后果。

失窃设备保护提高了 iPhone 和 Apple ID 的安全性，用户可以在设置 > 面容 ID 与密码中找到「失窃设备保护」并开启，建议升级 17.3 后第一时间打开。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sACQD_H5NTSgiV-YedFf6vXtt6WGMwxteUaVjUNY76Xo/https://cdn.sspai.com/2024/01/29/article/1fbddbe100725a5f947c051d0af56951?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

不过有一点需要注意，在打开「失窃设备保护」后，打算去 Apple 直营店换新 iPhone 的朋友，一定要提前在家（或者公司）提前关闭这个功能。因为：当你不在熟悉的地点时，如果你尝试关闭「失窃设备保护」，系统会启动为期一个小时的安全延迟，过后你才能关闭「失窃设备保护」。所以在出售、赠送或折抵 iPhone 之前，你应该在熟悉的地点关闭「失窃设备保护」。

最后，分享一些公共场合下解锁 iPhone 的经验，供大家参考：

佩戴口罩、帽子时完整地露出眼睛，让「戴口罩使用面容 ID」这个功能在绝大多数的情况下都能正常工作。由于太阳镜会遮挡眼睛，所以佩戴太阳镜的情况下无法使用「戴口罩使用面容 ID」。

* 在佩戴 Apple Watch 的情况下，打开「[使用 Apple Watch 解锁](https://support.apple.com/zh-cn/102438)」功能，在面容 ID 不能正常识别的情况下立刻会退到 Apple Watch 解锁。这个功能即可以保证 iPhone 解锁的流程性，也可以规避在公共场合输入锁屏密码的风险。
* 用更复杂的「[字母数字密码](https://support.apple.com/zh-cn/guide/iphone/iph14a867ae/ios)」替代「数字密码」。
* 手机用完以后及时锁屏，也尽量不要把手机放在公共场合的桌上。
* 可能的话，打开 `屏幕使用时间」> 内容与隐私限制 > 允许更改其他设置和功能` 添加另一个和锁屏密码完全无关的密码。

_注：此功能暂未登陆国区 Apple Music_

一直以来，Apple Music 都充当着纯粹的听歌工具，直到 iOS 17.3 新增协作播放列表后，Apple Music 用户有了第一个在应用内的协作和交互功能。

无论是已有的还是新建的播放列表，右上角都会出现一个新的人形图标代表编辑协作人员。用户可以邀请有共同喜好的家人和朋友，加入播放列表的协同人员以收听播放列表，每个人都可以对当前播放列表的歌曲进行添加、重新排序和移除歌曲操作。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHcp62LBaPPpXeuUTwu3-A66GymuhuYqvF7Hjwex5ZZk/https://cdn.sspai.com/2024/01/29/article/8bee6801a0baa50a7d3578b02970cf48?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

图源：macrumors

用户可以对协作播放列表中音乐的喜好做出回应。如果你喜欢或者不喜欢在听的一首歌，可以用简洁的表情符号直接表达。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s1KfsoPaJDi48bat3GEkqs_Wb5xBOHyO3HCVT7C3MoVQ/https://cdn.sspai.com/2024/01/29/article/ac1f058d5713fdd83bc8e5a8008ac572?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

图源：macrumors

## 其他值得一提的更新

在 `设置 > 通用 > AppleCare 与保修` 中，可以看到所有 Apple ID 关联的设备和所选蓝牙配对设备的 AppleCare 保修状态。

![](https://proxy-prod.omnivore-image-cache.app/0x0,snh6AeuGC0gybRUugy-mLkHkOtaDKSbQqQadiZDqgDPk/https://cdn.sspai.com/2024/01/29/article/8f8a0bc9f534745b67c16a9e6ad99333?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

此前 Apple 的系统壁纸就有团结系列，由 Apple 黑人创意群体和志同道合的伙伴设计而成，向黑人历史和文化致敬。17.3 新增的团结之花壁纸值得一试，每次解锁后会花的布局形态都不一样，且有不错的视觉效果。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sVpMG2m9LdoBs3fOHrmH8Wxdk4eZzbuWGcsLdXgE8BSo/https://cdn.sspai.com/2024/01/29/823a305dd3e40a0a94f2f1d9b64d7c60.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sznqFoZyH3ovYmAe6ZQPUKa8Z1PBut9o-yuolXjjBc94/https://cdn.sspai.com/2024/01/29/26f86c7a624bc2aa0fde94aca6de77d9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

最后，作为 iOS 16 重点的碰撞检测功能也有更新， 本次 Apple 进一步优化了 iPhone 14 和 iPhone 15 机型上提供的碰撞检测功能，以防止它在导致类似于车祸的运动的活动期间激活。

关联阅读：[手记 app 上线、操作按钮新功能…… iOS 17.2 值得关注的新特性](https://sspai.com/post/85032)

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

