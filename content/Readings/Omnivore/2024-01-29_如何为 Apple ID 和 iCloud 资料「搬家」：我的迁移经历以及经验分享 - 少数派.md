---
id: 6c302e6c-bb81-11ee-8b21-27cf35eb9fdb
title: |
  如何为 Apple ID 和 iCloud 资料「搬家」：我的迁移经历以及经验分享 - 少数派
author: |
  宴息
tags:
  - RSS
date_saved: 2024-01-29 00:00:56
date_published: 2024-01-25 02:20:39
draft: true
---

# 如何为 Apple ID 和 iCloud 资料「搬家」：我的迁移经历以及经验分享 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/apple-id-i-cloud-18d40b3373f)

[Read Original](https://sspai.com/post/85912)

date_saved: 2024-01-29 00:00:56

date_published: 2024-01-25 02:20:39

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sKY8x2pM_eiHSy5pc_sxH2ra0-ebl60XrMShNw5Dk3m4/https://cdn.sspai.com/2024/1/25/article/4ac36105-ce50-3c2b-407a-2821a3946147.png?imageMogr2/auto-orient/quality/95/thumbnail/!750x750r/gravity/Center/crop/750x750/interlace/1)

如何为 Apple ID 和 iCloud 资料「搬家」：我的迁移经历以及经验分享

近日，我更换了设备的 Apple ID，自中国大陆地区的账户更改为美国地区的账户，同时迁移了原账户的 iCloud 内容与数据。迁移过程中，我参考了少数派作者 ElijahLee 的[《更换 Apple ID 后的资料备份与迁移，我是这样做的》](https://sspai.com/post/77458)一文，也碰到了一些随时间推移、系统更新产生的新的问题，在此记录。

本文基于 iOS 17.2.1，iPadOS 17.2，macOS 14.2.1 系统下的设备。

注：如果仅是想要更改账户地区，在用完 Apple ID 上的所有余额后，参见[更改 Apple ID 国家或地区](https://support.apple.com/zh-cn/HT201389)进行更改，可以免去 iCloud 迁移之累、资料损失之虞。

Apple 支持将[不同的 Apple ID 分别用于 iCloud 与媒体订阅和购买项目](https://support.apple.com/zh-cn/108106) ，即在 iPhone 或 iPad 的「设置」> \[你的姓名\] 中登录第一个 Apple ID 用于 iCloud，在 App Store 中登录第二个 Apple ID 用于媒体订阅和购买项目。本文中出现的「更换 Apple ID」「更换 iCloud 账户」等描述一般为前者。

为了尽可能确保迁移数据的完整性，先了解一下 iCloud 保存了哪些内容。

* iCloud 保存内容的方式有两类：[同步和备份](https://support.apple.com/zh-cn/108770) 。
* 如果订阅了 iCloud+，则可能还使用了其提供的功能，如「[隐藏邮件地址](https://support.apple.com/zh-cn/guide/icloud/mme38e1602db/1.0/icloud/1.0)」。
* 「[通过 Apple 登录](https://support.apple.com/zh-cn/102379)」功能同样建立在使用相应 Apple ID 登录 iCloud 的基础上。
* [AirPods、AirTag 或「查找」网络中的其他配件或设备](https://support.apple.com/zh-cn/102620) ，须提前解除与 Apple ID 的配对。

分别描述如下。

### 同步

同步指的是信息自动同步云端，每次更改后在所有设备上保持最新状态，如：

* iCloud 照片（在照片设置中开启 iCloud 照片）
* iCloud 云盘
* 备忘录
* 密码和钥匙串（包含[通行密钥](https://support.apple.com/zh-sg/guide/iphone/iphf538ea8d0/ios) 、[无线局域网密码](https://support.apple.com/zh-cn/HT204085) ）
* iCloud 云端「信息」
* 查找
* 家庭
* Apple Books
* 使用 iCloud 的第三方 App，如 GoodLinks

使用同步功能的 App，可以在「[使用 iCloud 的 App](https://support.apple.com/zh-cn/guide/icloud/mm203ae070a2/icloud)」中查看，前往：

* iPhone 或 iPad：「设置」> \[你的姓名\] >「iCloud」>「使用 iCloud 的 App」
* Mac： >「系统设置」> \[你的姓名\] >「iCloud」>「使用 iCloud 的 App」

须注意的是，iPhone、iPad、Mac 所列出的 App 不尽相同，应分别检视。

iCloud 同步的内容，在退出 iCloud 账户后，仅有部分可以保留副本，因此这是迁移过程中应关注的重点。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s71p6MormY9x7kEhJIGRWORfaaTNJyw5iBF6BgEW_r-E/https://cdn.sspai.com/2024/01/21/fad144694915fa5994cfcc35c4f6456b.png)

使用 iCloud 的 App

### 备份

备份指的是 iPhone 和 iPad 上储存的尚未同步到 iCloud 的所有信息和设置，包括：

* 设备设置、主屏幕布局和 App 排列方式
* Apple Watch 备份
* 不使用 iCloud 同步功能的 App 数据，如微信的聊天记录

此外，如果未启用「iCloud 照片」、iCloud 云端「信息」等服务，即这些内容仅本地储存于当前设备，那么 iCloud 会对其进行备份。

iCloud 备份中的内容，在退出 iCloud 账号后，依然储存于设备上，只须等待上传至新的 Apple ID 中。为保护数据安全，建议在此之前先进行一次完整的本地备份。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sZAo_7WOD6xxyzO9OEcMfXSpcS6FzJfu9EIoiTgtX7fs/https://cdn.sspai.com/2024/01/18/d145b36c383c87090c6354b02133a487.jpeg)

自上而下依次为使用 iCloud 的 App，iCloud 备份

### iCloud+ 功能：隐藏邮件地址

「隐藏邮件地址」指的是创建随机且唯一的电子邮件地址并将其中的邮件转发到个人收件箱（与 Apple ID 关联的电子邮件地址）。

创建的电子邮件地址可以前往 iPhone 或 iPad 的「设置」、Mac 的「系统设置」：\[你的姓名\] >「iCloud」>「隐藏邮件地址」中检视。

根据 [Apple 的说明](https://support.apple.com/zh-cn/guide/icloud/mm9d9012c9e8/1.0/icloud/1.0)：

> 请确保你在每台设备上都使用相同的 Apple ID 登录。如果你的设备没有使用 Apple ID 登录，那么你将无法在这些设备上访问“隐藏邮件地址”。

「隐藏邮件地址」与 Apple ID 绑定，我没有找到迁移方法，只能逐项检查确认。

在退出所有设备的 Apple ID 后，iCloud+ 订阅生效期间，可以访问 iCloud.com（中国大陆地区为 iCloud.com.cn）[管理「隐藏邮件地址」](https://support.apple.com/zh-cn/guide/icloud/mm1a876f7aed/1.0/icloud/1.0)。注意：iCloud+ 订阅失效后，将无法在网站上访问「隐藏邮件地址」。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYiXEuC5db1t4PjbKVYK3qOZq4ow6h_K8T8KRRwia7Ks/https://cdn.sspai.com/2024/01/18/82ef7e47b87336a71a73a69926bd1e75.jpeg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjrDi4kUBlEX1c7YpdaYYaPx9sqQGB28cXRFNgvt7xFQ/https://cdn.sspai.com/2024/01/18/d56782623a3858360249f4aa001320ab.png) 

左图为 iCloud+ 订阅状态，右图为 iCloud+ 未订阅状态

### 通过 Apple 登录

「通过 Apple 登录」功能基于当前 Apple ID，常与「隐藏邮件地址」共用。目前我没有找到迁移方法，只能手动登录第三方 App 和网站进行换绑。

尽管 [网页以及安卓或 Windows 等平台也能接入「通过 Apple 登录」功能](https://support.apple.com/zh-cn/102379)，同个服务商的 iOS 平台 App 支持而其安卓平台 App 不支持该功能的情形亦时有发生（如 Duolingo、Pokemon Sleep），提请注意。

[查看配合「通过 Apple 登录」功能使用的 App](https://support.apple.com/zh-cn/102571) ，前往 iPhone 或 iPad 的「设置」、Mac 的「系统设置」：\[你的姓名\] >「登录与安全性」>「通过 Apple 登录」；或登录 [appleid.apple.com](https://appleid.apple.com/) 查看。

![iPhone 屏幕显示了查看你配合“通过 Apple 登录”功能使用的 App 的步骤](https://proxy-prod.omnivore-image-cache.app/0x0,sA3AupM4QtGp39W9UTj4CAQajCYFN7090qbTaCx7lyHQ/https://cdn.sspai.com/2024/01/18/article/59ac3953040c9b825ef13eec48c8ad4d?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

Apple：[查看你配合「通过 Apple 登录」功能使用的 App](https://support.apple.com/zh-cn/102571)

### AirPods、AirTag 等设备或物品

根据 [Apple 的说明](https://support.apple.com/zh-cn/102620)：

> 如果你在尝试设置 AirPods 等 Apple 设备、AirTag 等物品或“查找”网络中的另一个配件时看到一条信息，提示相应设备或物品已与另一个 Apple ID 配对，则这个设备或物品需要先从那个 Apple ID 中移除，然后才能与新的 Apple ID 配对。原拥有者可能必须按照相应步骤取消配对。

> 这些步骤是将设备或物品从 Apple ID 中移除及取消配对并移除“查找锁定”的唯一方法。这些操作可以在使用同一 Apple ID 登录的任一 iPhone、iPad、iPod touch 或 Mac 上完成。Apple 无法为你移除“查找锁定”。

> 重置设备或物品时，设备或物品不会将自身的位置信息提供给原拥有者。尽管如此，你仍无法将相应设备或物品与另一个 Apple ID 配对。

如果不预先移除 AirPods、AirTag 等物的配对，新的 Apple ID 将无法与之配对。移除步骤在「查找」App 中进行，详见 [如果某个物品或设备已关联到另一个 Apple ID](https://support.apple.com/zh-cn/102620) 。

## 备份设备

在迁移资料之前，先完整地本地备份一次所有设备。

### 备份 iPhone、iPad 和 iPod touch

[在电脑上进行的备份不包含已通过 iCloud 同步的数据](https://support.apple.com/zh-cn/HT204136) ，如 iCloud 照片、iCloud 云端「信息」。

* 为备份 iCloud 照片，须先[下载完整大小副本](https://support.apple.com/zh-cn/HT209454) ，并关闭 iCloud 同步。注意：操作前请确认 iCloud 照片已在所有设备上同步，以免遗漏（下同）。前往「设置」> \[你的姓名\] >「iCloud」>「照片」，选择「下载并保留原片」，待完成下载后，关闭「同步此 iPhone」。
* [备份 iCloud 云端「信息」的方式](https://help.apple.com/icloud/zh%5FCN.lproj/mm0de0d4528d.html) 相似。前往「设置」> \[你的姓名\] >「iCloud」> iCloud 云端「信息」，关闭「在此 iPhone 上使用」，信息将下载至设备。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sfFyULjYPiM2fHxqGOOPJ-qKRn8NAjyUCab-dYtqwGNc/https://cdn.sspai.com/2024/01/19/6f0e9bc9c14b3de5a1f4091379436866.jpeg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sVsEXlDs-q_rB94V-5hjd8K6G52LBUiIsTyFKMy_Z0dI/https://cdn.sspai.com/2024/01/19/2f0d89b9ecda64d736271d5016dba94f.jpeg) 

关闭 iCloud 照片，iCloud 云端「信息」

iPhone 备份包含了 Apple Watch 的备份，详见[备份你的 Apple Watch](https://support.apple.com/zh-cn/HT204518) 。

通过 Mac 或 PC 进行备份的具体步骤，详见[如何备份您的 iPhone、iPad 和 iPod touch](https://support.apple.com/zh-cn/HT203977) 。

备份时，选择「将 iPhone 上所有的数据备份到此 Mac」，并勾选「加密本地备份」以备份[「健身记录」「健康」和「钥匙串」数据](https://support.apple.com/zh-cn/HT204136) 。

![](https://proxy-prod.omnivore-image-cache.app/0x0,soGziExmgIvYZktxDaYQcq6tew9iYjxPNJ0knYQCdvMI/https://cdn.sspai.com/2024/01/19/ecabea2d26667d9954f6bbdcef0ec7f6.png)

通过「访达」进行备份

### 备份 Mac

经过上述操作后，iPhone 等设备的备份已储存于 Mac 上。

备份 Mac 的具体步骤，详见[使用「时间机器」备份你的 Mac](https://support.apple.com/zh-cn/104984) 。

## 可保留副本的数据

在退出 iCloud 账户前，部分使用 iCloud 的 App 数据可作为副本下载，保留至设备中。

### iCloud 照片、iCloud 云端「信息」

通过「下载并保留原片」，可以保留 iCloud 照片至设备。通过关闭 iCloud 云端「信息」，可以保留 iMessage、短信等至设备。具体步骤见前文「备份设备：备份 iPhone、iPad 和 iPod touch」。

或者访问 iCloud.com 下载图库，详见 [如何从 iCloud.com 下载照片和视频](https://support.apple.com/zh-cn/HT209454) 。

### 手记

iPhone：「设置」> \[你的姓名\] >「iCloud」，轻点「显示全部」，关闭「手记」，选择「保留于 iPhone」。

### 捷径

更换 iCloud 账号后，保留了添加的捷径、自动化。

### 天气

更换 iCloud 账号后，保留了添加的地区。

### 日历、股票、健康、通讯录、钥匙串、Safari

在退出 iCloud 账号时，系统会提示是否保留以上资料的副本。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sy7nhXo5i_aN_g4wVItWJKGADoP2a-pOw1WJ3Q4R3w9E/https://cdn.sspai.com/2024/01/19/dbbf3ed9d3d4bbbe826d66d5528722a9.jpeg)

退出 iCloud 时的提示

* 按照 [ElijahLee](https://sspai.com/u/914r3btn/updates) 的建议，为避免数据重复，保留除「日历」以外的项目，对于「日历」数据，单独进行导出，详见[其文「iCloud 日历」一段](https://sspai.com/post/77458) 。
* 更换 Apple ID 后，可能需要重新订阅指定地区的[节日日历](https://support.apple.com/zh-sg/guide/iphone/iph80d93ac49/ios) 。
* 如果保留了「通讯录」的副本，更换 Apple ID 后，设备上的通讯录可能未自动上传至 iCloud。前往「设置」> \[你的姓名\] >「iCloud」，关闭再开启一次「通讯录」。

## 手动下载的数据

### iCloud 云盘

iCloud 云盘上的所有数据，会在退出 iCloud 时从设备上移除，因此先将其拷贝至本地位置。

在 Mac 上，打开「访达」，点按窗口边栏的「iCloud 云盘」，选择全部文件（Command + A），拷贝并粘贴至本地位置，离线文件会在拷贝到新位置前先下载到设备。

在 iPhone、iPad 或 iCloud.com 拷贝文件的步骤见 [Apple 的说明](https://support.apple.com/zh-cn/HT204055) 。

### 备忘录

在 Mac 上，前往「备忘录」的「设置」，启用本地账户，将 iCloud 下的备忘录文件夹依次拖入本地账户。

* 默认的名为「备忘录」的文件夹无法直接拖动，点按该文件夹后，全选其中的备忘录（Command + A），拖入本地账户的新建文件夹中暂存。
* 待更换 Apple ID 后，取消「设置」中的本地账户，即可上传至新的 iCloud 中。
* 如「备忘录」设置了密码，须先关闭密码。
* 迁移后，「标签」会临时失效。重新添加一次标签后，所有带有该标签的备忘录会重新建立索引。建议迁移前，对原来的所有标签，截图记忆。

在 iPhone 或 iPad 上的操作类似。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSDOluSiGe93G35QCcZbukJSKDx7fbB1CXxtgBDu6rf8/https://cdn.sspai.com/2024/01/19/a38c0ce6830344fd85c6939b6eea82a3.png)

我的 Mac，即本地账户

### 语音备忘录

在 Mac 上，可直接拖放所有录音至本地位置。

在 iPhone 或 iPad 上，也可以复制或共享录音，详见 [Apple 的说明](https://support.apple.com/zh-cn/HT204055) 。

### 音乐备忘录

「音乐备忘录」App 中的内容储存于 iCloud 云盘的同名文件夹，在拷贝 iCloud 云盘文件的过程中已完成备份。「音乐备忘录」不再更新，也可以先将其中的录音[导出到「语音备忘录」](https://support.apple.com/zh-cn/102067)。

### 图书

在 Mac 上，打开「图书」，点按窗口侧栏「书库」>「全部」，全选（Command + A）拖放至本地文件夹。

#### 重点和备注

导出的书籍不包含「重点和备注」和「书签」。「重点和备注」可以手动导出。

* 在 Mac 上，点按书籍左上角的「显示高亮标记和笔记」，右键选择一项，全选（Command + A）后拖放至文本编辑器中。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sgtmaJ28bI_m59T2DJZCXhe7hw7MyCNgPuIYOPlDJDYw/https://cdn.sspai.com/2024/01/20/7ff396410003bee6369ff63ae6ec956c.gif)

在 Mac 上拖放

* 在 iPhone 或 iPad 上，轻点书籍右下角的标识，轻点「书签与重点」，长按「重点」中的项目，轻点「选取」，选择所有项目（或参考下图方式），拖放至文本编辑器中。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sEOlOJzoTJvB3T7hkfoFQwcPf4rZF5ttOOFp2aaGDa6c/https://cdn.sspai.com/2024/01/20/d0fbe842f258f442683fd970b6f61365.gif)

在 iPhone 上拖放

* 或者通过左下角的「共享」>「邮件」，分享给自己。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2EtEBlnd9IJmk1JOm1-Xks-GjhVR_os64gwHBPJhxm0/https://cdn.sspai.com/2024/01/20/817f15cd93509e29837593ae515f5804.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqXsqw2Yz8JXeS2S2mGVI2ea6Jgk4MFAWFxdJLky2rXQ/https://cdn.sspai.com/2024/01/20/1b6b0a593753037592d230e08e22169a.PNG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1) 

邮件共享

### 自定义短语

在 Mac 上，可以拖放导出、导入自定义短语，详见 [ElijahLee 文中「自定义短语」部分](https://sspai.com/post/77458) 。

## 其他数据

### iCloud 邮件

添加原先的 iCloud 账号以使用邮件功能：

* iPhone 或 iPad：「设置」>「邮件」>「账号」，添加 iCloud 账号。
* Mac： >「系统设置」>「互联网账户」，添加 iCloud 账号。

也可以从 iCloud.com 访问 iCloud 邮件。或者[将电子邮件从 iCloud 移动或拷贝到 Mac](https://support.apple.com/zh-cn/100627) 。

### 提醒事项

如上述，添加原先的 iCloud 账号后，也可以在相同位置启用「提醒事项」。

注意：如果原账号开启了「高级数据保护」功能，则无法通过该方式启用「提醒事项」，也无法在 iCloud.com 上直接查看（须 Apple 受信任设备授权）。

一个折衷的办法是，将提醒事项列表与新的 Apple ID 共享。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sexCTav-XMlEwjMp-TRpRMx0B1_wZFFj53NC81YIbRWI/https://cdn.sspai.com/2024/01/19/d9722fa5cf8621a9bfc8801e9553964d.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,s8rf-ij0FY_HMtO-7qMqyMHMqeSZscDZgVAZ1OdFFiu8/https://cdn.sspai.com/2024/01/19/ce598674d332a553d2e17983cc4153f9.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

左图为开启 iCloud 高级数据保护，右图未开启

### 钱包

「钱包」中的银行卡、交通卡、钥匙等都将被移除，自行添加的会员卡、票券等可以保留。

交通卡上的余额，可以通过发卡机构的 App 进行退款操作。在「钱包」中选择交通卡，轻点右上角符号，选择「卡片详细信息」，可以看到发卡机构的 App。

不同发卡机构的退款操作略有不同，如上海交通卡在同名 App 内申请退卡，余额退回至 App 中（可提现或充值使用）；宁波交通卡在「宁波市民卡」App 内申请退卡，余额退回至原支付账户或支付宝中。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sOwIv5-advJEVXYXXvNWfgxRFxJZbrSxGqwl6tH6BKdg/https://cdn.sspai.com/2024/01/20/3b4ff3de914ad5f03ab24dee990d66f2.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqXoQUSzBa2dcc4Ty3ffMFC0AmuDd-Ow0qFhfKTwXkH8/https://cdn.sspai.com/2024/01/20/9d66ec7244b11a9f7f4bc73104ff2e86.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

发卡机构的 App

### 音乐

在 Mac 上的「音乐」App 中，可以导出 XML 格式的播放列表，导入新的资料库中，详见 [在 Mac 上的「音乐」中存储播放列表的副本](https://support.apple.com/zh-cn/guide/music/mus27cd5060f/mac) 。

ElijahLee 介绍了通过关注 Apple Music 账户的方法迁移播放列表，详见[其文 Apple Music 部分](https://sspai.com/post/77458) 。中国大陆地区账户可能无法使用此功能。

### 无边记

根据[评论中网友「天空美膩」所述](https://sspai.com/post/77458) ，可以共享后由新的 Apple ID 复制到本地。

### 地图

如果想要迁移「地图」App 中的「指南」，参见 [ElijahLee 文中地图「指南」部分](https://sspai.com/post/77458) 。

### 健身

更换 Apple ID 后，「健身」App 保留了我的奖章、好友。

此处存疑，好友关系应该与添加时的 Apple ID 相关，我的好友也仅有不常联系的一位，不能确信。

### Game Center

更换 Apple ID 后，未保留 Game Center 的朋友关系、成就。

在 iPhone 或 iPad 的「设置」、Mac 的「系统设置」的「Game Center」处，可以退出登录账号。

### iMessage、FaceTime

更换 Apple ID 后，iMessage、FaceTime 使用的 Apple ID 可能仍为上一个。可以前往 iPhone 或 iPad 的「设置」，在「信息」「FaceTime」处登录新账号。

### 家庭

我没有找到「家庭」中的配件的转移方式，只能重新添加。

### 其他

以下内容见前文「iCloud 保存内容的方式」相应副标题处：

* 隐藏邮件地址
* 通过 Apple 登录
* AirPods、AirTag 等设备或物品

## 使用 iCloud 的第三方 App 数据

第三方 App 中，直接在 iCloud 云盘中储存数据的 App（如 [Taio](https://apps.apple.com/us/app/taio-markdown-text-actions/id1527036273)），在拷贝 iCloud 云盘文件的过程中，已完成了备份。待更换 iCloud 账号后，重新导入 iCloud 云盘即可。

另有一些 App 的数据，储存于 iCloud 内部，在退出 iCloud 账号时可能会清除，须在各个 App 内寻找导出的方式。在「使用 iCloud 的 App」中确认须转移资料的 App。前往：

* iPhone 或 iPad：「设置」> \[你的姓名\] >「iCloud」>「使用 iCloud 的 App」
* Mac： >「系统设置」> \[你的姓名\] >「iCloud」>「使用 iCloud 的 App」

须注意的是，iPhone、iPad、Mac 所列出的 App 不尽相同，应分别检视（该部分较为重要，故引用前文再注释一遍）。

迁移方式因 App 而异，以下列出两例。

### [GoodLinks](https://apps.apple.com/us/app/goodlinks/id1474335294)

* 在 iPhone 或 iPad 上，打开 GoodLinks，轻点左上角「设置」>「高级」>「导出资料」，选择一个本地文件夹，导出 JSON 格式的文件。登录新的 iCloud 账号后，重新导入。

### [1Password 7](https://apps.apple.com/us/app/1password-7-password-manager/id1333542190)

* 在 iPhone 或 iPad 上，打开 1Password 7，轻点「设置」>「高级」>「创建备份」。使用数据线连接 iPhone 至 Mac，打开「访达」，点按窗口边栏的 \[你的 iPhone 名称\] >「文件」，展开「1Password 7」，将「Backups」文件拖放至「访达」的本地文件夹中。登录新的 iCloud 账号后，拖放回原位置。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sgRbbe0jXRVc2UWeXHKpXjNjnQu1_7X0KS7UTwRtE6LE/https://cdn.sspai.com/2024/01/21/5f07b4c42412bdf6eed72ea4d3c5a98b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 迁移过程中出现的问题及解决方案

### 无法退出 Apple ID

如果「设置」> \[你的姓名\] >「登出」为灰色，提示「因为某些限制，无法登出」，可能是因为启用了「屏幕使用时间」。

![](https://proxy-prod.omnivore-image-cache.app/0x0,slLrRserrSJRq954nPvD2oop6YfmM9VplMlMtm3WERkk/https://cdn.sspai.com/2024/01/21/e1af805f92298a7a6889d9cb34f5f4fb.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

* 前往「设置」>「屏幕使用时间」，轻点底部的「关闭 App 与网站活动」；
* 轻点「更改屏幕使用时间密码」，选择「关闭屏幕使用时间密码」；
* 关闭「在设备之间共享」；
* 轻点「内容与隐私限制」，[确认「允许变更」部分「账户更改」设置为「允许」](https://support.apple.com/zh-cn/101973)。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sdFRxETUdhnngaHtsgzYr_7qeHuKIFSb1glEBiGjl6To/https://cdn.sspai.com/2024/01/21/b55dd38d886e9b76b510081829a8fff6.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 迁移后「照片」缺失

我在第一台设备上登录新的 Apple ID 后，发现本地以及随后上传至 iCloud 的照片、视频数量有失，其中八千余照片中缺失约两百张，两百余视频中缺失约二十张。

在退出 iCloud 账号时，系统应该会提示尚有「照片」数据在云端，但当时未提醒我。推测是我将 iPhone 放置一晚用于下载原图，有少量数据未下载成功。后来经过排查，发现大部分是体积较大的视频、照片。

我尝试用另一台设备下载原图，上传至新的 iCloud 账户，但仍有缺失。后来通过 Mac 多用户功能（见下文），登录原先的 Apple ID，在「照片」App 中排查补全（所幸数量不多）。

如果担心出现这类情况，可以[从 iCloud.com 下载所有照片和视频](https://support.apple.com/zh-cn/HT209454)，再导入「照片」App，上传至新的 iCloud 账户。

## 管理原先的 Apple ID

### 访问 iCloud.com 查看数据

在 [iCloud.com](https://sspai.com/link?target=https%3A%2F%2Fwww.icloud.com%2F)（中国大陆地区为 [iCloud.com.cn](https://sspai.com/link?target=https%3A%2F%2Fwww.icloud.com.cn%2F) ）查看原先的 iCloud 数据。

注意：如果此前开启了「高级数据保护」，且当前无[使用此 Apple ID 登录的受信任设备](https://support.apple.com/zh-cn/102651) ，将无法查看照片、备忘录、提醒事项、文件和文稿等数据。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sRivEKl0rc8XIZ8NP6TE9vcDGOSJSc6YybiWvNy7urZA/https://cdn.sspai.com/2024/01/21/0a815abc929f7f3e7358dad0cce850ec.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 使用闲置的 iPhone 或 iPad

在闲置的 iPhone 或 iPad 上查看原先的 iCloud 数据。

注意：如果此前开启了「高级数据保护」，不支持低于 iOS 16.2、iPadOS 16.2 和 macOS 13.1 的设备。兼容设备列表见 Apple 文章：[与 iOS 16 和 iPadOS 16 兼容的设备](https://support.apple.com/zh-cn/103267) ，[macOS Ventura 与以下电脑兼容](https://support.apple.com/zh-cn/102861) 。

### 使用 Mac 的多用户功能

在 Mac 上添加用户，使用原先的 Apple ID 登录以查看数据。

此方法可以查看到原先 Mac 上能访问的绝大部分 iCloud 数据，并能将符合要求的 Mac 用于「高级数据保护」的授信，切换用户也比较方便。操作详见[在 Mac 上添加用户或群组](https://support.apple.com/zh-cn/guide/mac-help/mchl3e281fc9/mac) 。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sxy_8zPONEXUqps8W8Z9lrGGI6a7C-7dCdq8zO8gNpSQ/https://cdn.sspai.com/2024/01/21/5cd5f9bd9c1a6a5d185703960d565dcc.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

「快速用户切换」窗口

### 访问 appleid.apple.com 管理账户信息

登录 [appleid.apple.com](https://appleid.apple.com/) ，[更新密码、更新 Apple ID 电子邮件地址等](https://support.apple.com/zh-cn/105023) ，查看配合「通过 Apple 登录」功能使用的 App。

根据 [评论中网友「liberatechina」所述](https://sspai.com/post/77458) ，删除的 Apple ID 使用的电子邮件地址将被占用，无法用于注册新的 Apple ID。如果后续准备删除原先的 Apple ID，可以先 [更改 Apple ID 电子邮件地址](https://support.apple.com/zh-cn/109353) 为不常用地址。

### 访问 privacy.apple.com 管理储存于 Apple 的个人信息

登录 [privacy.apple.com](https://privacy.apple.com/) ，[访问「数据和隐私」页面上的隐私管理工具](https://support.apple.com/zh-cn/102283) ，获取数据拷贝，暂时停用或永久删除 Apple ID 等。也可以在此获取 iCloud 照片、iCloud 云盘文件等的拷贝，Apple 的准备时间最多可能需要 7 天。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s1Fj26BlSOBn-kK4v-Ho_82ToYXm1JkG1ii5Qjhia-Eg/https://cdn.sspai.com/2024/01/21/a48f81676f05a2d7cc64b084f8ba5d3c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

---

以上为我于 2024 年 1 月迁移 iCloud 账户数据的经验，部分操作具有时效性，参阅文中引用的 Apple 支持的文章，获取最新信息。

#### 文中引用的部分文章：

* [少数派：更换 Apple ID 后的资料备份与迁移，我是这样做的](https://sspai.com/post/77458)

Apple 支持及相关网站：

* [iCloud 使用手册](https://support.apple.com/zh-cn/guide/icloud/welcome/1.0/icloud)
* [iCloud 备份哪些内容？](https://support.apple.com/zh-cn/108770)
* [iCloud 数据安全概览](https://support.apple.com/zh-cn/102651)
* [对储存在 iCloud 中的信息进行归档或制作拷贝](https://support.apple.com/zh-cn/HT204055)
* [下载 iCloud 照片和视频](https://support.apple.com/zh-cn/HT209454)
* [将信息储存在 iCloud 中](https://help.apple.com/icloud/zh%5FCN.lproj/mm0de0d4528d.html)
* [在 Mac 上的「音乐」中存储播放列表的副本](https://support.apple.com/zh-cn/guide/music/mus27cd5060f/mac)
* [使用 Mac 上的「邮件」App 移动、删除或拷贝 iCloud 电子邮件](https://support.apple.com/zh-cn/100627)
* [如何使用「通过 Apple 登录」功能](https://support.apple.com/zh-cn/102379)
* [管理使用「通过 Apple 登录」功能的 App](https://support.apple.com/zh-cn/102571)
* [如何备份您的 iPhone、iPad 和 iPod touch](https://support.apple.com/zh-cn/HT203977)
* [备份你的 Apple Watch](https://support.apple.com/zh-cn/HT204518)
* [使用「时间机器」备份你的 Mac](https://support.apple.com/zh-cn/104984)
* [如果某个物品或设备已关联到另一个 Apple ID](https://support.apple.com/zh-cn/102620)
* [在 iPhone 上使用节日日历](https://support.apple.com/zh-sg/guide/iphone/iph80d93ac49/ios)
* [如果「设置」中的 Apple ID 显示为灰色](https://support.apple.com/zh-cn/101973)
* [在 Mac 上添加用户或群组](https://support.apple.com/zh-cn/guide/mac-help/mchl3e281fc9/mac)
* [管理和使用你的 Apple ID](https://support.apple.com/zh-cn/105023)
* [了解和控制您在 Apple 储存的个人信息](https://support.apple.com/zh-cn/102283)
* [iCloud.com](https://sspai.com/link?target=https%3A%2F%2Fwww.icloud.com%2F) ( [iCloud.com.cn](https://sspai.com/link?target=https%3A%2F%2Fwww.icloud.com.cn%2F) )
* [appleid.apple.com](https://appleid.apple.com/)
* [privacy.apple.com](https://privacy.apple.com/)

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现🚀

备份 iPhone、iPad 和 iPod touch

访问 appleid.apple.com 管理账户信息

访问 privacy.apple.com 管理储存于 Apple 的个人信息

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

