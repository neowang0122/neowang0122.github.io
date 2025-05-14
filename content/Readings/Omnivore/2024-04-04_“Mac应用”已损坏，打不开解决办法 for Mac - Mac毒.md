---
id: faf95d48-1f82-4bba-b40c-6726e62e5862
author: |
  sillyboy
date_saved: 2024-04-04 12:19:06
date_published: 2020-03-14 21:45:07
draft: false
---

# “Mac应用”已损坏，打不开解决办法 for Mac - Mac毒
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mac-for-mac-mac-18ea9e82051)

[Read Original](https://www.macdo.cn/925.html)

date_saved: 2024-04-04 12:19:06

date_published: 2020-03-14 21:45:07

--- 

# Full Content: 

[ ](https://www.macdo.cn/author/sillyboy "sillyboy") [Mac教程](https://www.macdo.cn/article/mac-tutorials)  97.7K 

![“Mac应用”已损坏，打不开解决办法 Mac教程 第1张](https://proxy-prod.omnivore-image-cache.app/483x261,speBXIkSJ2SKr_Z8kD1AzYrUa4kEJzrCHRyQGy9zO2IE/https://image.iicheese.com/20180110151559463515768.jpg "“Mac应用”已损坏，打不开解决办法 Mac教程 第1张-Mac毒")

## 问题说明：

通常在非 Mac App Store下载的软件都会提示“xxx已损坏，打不开。您应将它移到废纸篓”或者“[打不开 xxx，因为它来自身份不明的开发者”](https://www.macdo.cn/16552.html)。  
![](https://proxy-prod.omnivore-image-cache.app/0x0,s2Cd2RDeDHAhiLr1O_TMr531A54ZqFRB2ox7Eiql5OOY/https://image.iicheese.com/kxulb.jpg "“Mac应用”已损坏，打不开解决办法 Mac教程 第2张-Mac毒")

## 原因：

Mac电脑启用了安全机制，默认只信任Mac App Store下载的软件以及拥有开发者 ID 签名的软件，但是同时也阻止了没有开发者签名的 “老实软件”

## 解决方法：

### 1\. 打开任何来源选项

a.打开「终端.app」，输入以下命令并回车，输入开机密码回车

此行代码可以让 Mac 允许安装第三方来源的应用  
![](https://proxy-prod.omnivore-image-cache.app/0x0,shFMKxcg6D5bzkmS02uAYmfk5aNPF9mdUf3m4Esw-7Uk/https://image.iicheese.com/2fnt4.jpg "“Mac应用”已损坏，打不开解决办法 Mac教程 第3张-Mac毒")

b. 按照上述步骤操作完成后，打开「系统偏好设置」-「安全与隐私」-「通用」，确保已经修改为「任何来源」。

![“Mac应用”已损坏，打不开解决办法 Mac教程 第4张](https://proxy-prod.omnivore-image-cache.app/463x415,sj4UaHLR-XxQYlX_cMxXdygLRz3SPsK-Oz0CwTP1Itjg/https://img.icheese.net/swod4.png "“Mac应用”已损坏，打不开解决办法 Mac教程 第4张-Mac毒")

### 2\. 如果还是提示损坏请在第一步的基础上再执行这一步：

打开「终端.app」，输入以下命令并回车，输入开机密码回车

`sudo xattr -rd com.apple.quarantine 空格 软件的路径`

如Sketch.app

`sudo xattr -rd com.apple.quarantine /Applications/Sketch.app`

如CleanMyMac X.app

`sudo xattr -rd com.apple.quarantine /Applications/CleanMyMac X.app`

附1：

/Applications/Sketch.app

与

/Applications/CleanMyMac X.app

就是

软件的路径

附2：

软件路径快速获取方法：

将软件拖入「终端app」即可获得路径  
![](https://proxy-prod.omnivore-image-cache.app/0x0,s780O_5bPxZR9sXcL1KBkPRYHrGvkzLnOYYYSbCL1P10/https://image.iicheese.com/z0pz5.gif "“Mac应用”已损坏，打不开解决办法 Mac教程 第5张-Mac毒")

### 3\. 意外退出问题（如果执行后不能解决，M芯片用户请检查是否勾选Rosetta）：

更新系统后软件出现意外退出，可按照下面的方法给软件签名

**1.**打开「终端app」输入如下命令：

`xcode-select --install`

**==2.给软件签名==**

==打开终端工具输入并执行如下命令：==

`==sudo== ==codesign== ==--====force== ==--====deep== ==--====sign== ==-== ==(应用路径==)`

![“Mac应用”已损坏，打不开解决办法 Mac教程 第6张](https://proxy-prod.omnivore-image-cache.app/537x376,sLFjhCIHSKiSgc718rTaQQK_t_9BSeZFK6GKAHBjC6oc/https://image.iicheese.com/vb4wo.jpg "“Mac应用”已损坏，打不开解决办法 Mac教程 第6张-Mac毒")

注意：空格不能漏![“Mac应用”已损坏，打不开解决办法 Mac教程 第7张](https://proxy-prod.omnivore-image-cache.app/523x366,sAGUNZQNBHfBGwXKr6RqrrW2dWB5rVZXM8cx6iwYiT8s/https://image.iicheese.com/de6yg.jpg "“Mac应用”已损坏，打不开解决办法 Mac教程 第7张-Mac毒")

**3.错误解决**

如出现以下错误提示：

`/文件位置 : replacing existing signature`

`/文件位置 : resource fork,Finder information,or similar detritus not allowed`

那么，先在终端执行：

`xattr -cr /文件位置（直接将应用拖进去即可）`

然后再次执行如下指令即可：

`codesign --force --deep --sign - /文件位置（直接将应用拖进去即可）`

## 4.以上执行后都不能解决，可能是软件与系统不兼容。

## 相关阅读

[macOS Catalina 下「已损坏无法打开」解决办法](https://macdo.cn/24377.html)

[无法打开“×××”，因为无法确认开发者的身份——解决办法](https://www.macdo.cn/16552.html)

[Mac 软件出现「意外退出」及「打不开」解决方法](https://macdo.cn/23289.html)

 👍🏻 33  👎🏻 1 

**声明：**本站所有文章，如无特殊说明或标注，均为本站原创发布。任何个人或组织，在未征得本站同意时，禁止复制、盗用、采集、发布本站内容到任何网站、书籍等各类媒体平台。如若本站内容侵犯了原著者的合法权益，可联系我们进行处理。

---

## Highlights

> **2.给软件签名**
> 
> 打开终端工具输入并执行如下命令：
> 
> `sudo codesign --force --deep --sign - (应用路径` [⤴️](https://omnivore.app/me/mac-for-mac-mac-18ea9e82051#345b9be1-1313-40a2-939b-f9e7ab817c77)  ^345b9be1

