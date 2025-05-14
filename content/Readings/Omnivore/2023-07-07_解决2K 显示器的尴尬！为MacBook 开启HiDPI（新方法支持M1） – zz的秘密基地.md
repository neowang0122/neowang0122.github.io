---
id: 7863ec4e-cc16-4537-95fe-d06fa3ac5be4
title: |
  解决2K 显示器的尴尬！为MacBook 开启HiDPI（新方法支持M1） – zz的秘密基地
author: |
  NormanZhu
date_saved: 2023-07-07 00:26:07
date_published: 2020-11-14 19:00:00
draft: true
---

# 解决2K 显示器的尴尬！为MacBook 开启HiDPI（新方法支持M1） – zz的秘密基地
#Omnivore

[Read on Omnivore](https://omnivore.app/me/2-k-mac-book-hi-dpi-m-1-zz-1892e99a022)

[Read Original](https://zzbloc.top/archives/turn-on-hidpi-for-macbook)

date_saved: 2023-07-07 00:26:07

date_published: 2020-11-14 19:00:00

--- 

# Full Content: 

 本文最后更新于 2022-06-14，若内容或图片失效，请留言反馈。部分素材来自网络，若不小心影响到您的利益，请联系我们删除。

## 2022.6.14更新！终极解决方案！！

**稍后我再以教程的形式补充文字说明**

请先参考BetterDummy开发者的介绍：  
<https://github.com/waydabber/BetterDummy/releases/tag/v1.2.5-beta>

这个是国人的简单介绍：  
<https://github.com/xzhih/one-key-hidpi/issues/213#issuecomment-1154664414>

该app已经更名为BetterDisplay，**真正通过修改配置的方式打开原生的HiDPI**，一旦通过该app开启之后，**不再**需要依赖任何软件，直接体验原生高分辨率支持！！！  
该功能是免费功能，不需购买pro，感谢开发者的巨大贡献！

## 以下是旧的方法

！！！新方法推荐！！！  
来自一位大神的作品：BetterDummy，轻松解决任何显示器的HiDPI显示问题，包括M1处理器设备。  
GitHub地址：[BetterDummy - GitHub](https://github.com/waydabber/BetterDummy/releases/tag/v1.0.13)

这款软件的原理应该是创建一个虚拟的屏幕，这个屏幕本身就支持HiDPI，然后只需要将你的显示器设置为这个虚拟屏幕的镜像，你的显示器也就清晰了。

第一步：开启软件后首先创建一个新的Dummy，只要符合你的屏幕比例就可以。  
然后会自动连接这个Dummy

![menu.png](https://proxy-prod.omnivore-image-cache.app/0x0,sSK0ZEXAvMfvRKsvFruzSO0Cvx7J_hNk-NDCwnc8wczc/https://zzbloc.top/upload/2022/03/menu-3ae6f5de63514c24bdfb04bf5b35cb59.png)

第二步：设置你的显示器为Dummy的镜像  
![iShot20220314 16.25.29.png](https://proxy-prod.omnivore-image-cache.app/0x0,s9W80vXZ9MUhq6ZhweY25dPRzRAe21gS9EvOiyGJWlP8/https://zzbloc.top/upload/2022/03/iShot2022-03-14%2016.25.29-2fdaba6bef99462e9ba80b1452588216.png)

第三步：我们修改他的分辨率，一般需要小于你的显示器物理分辨率才能达到高清的效果，我的2K显示器一般开启1920\*1080就很清晰了：  
![image.png](https://proxy-prod.omnivore-image-cache.app/0x0,se7s4iLefWPJZvRHMCLb2rX-SssN4H_NJ4FDk6TGK1oY/https://zzbloc.top/upload/2022/03/image-12287bedf68f4a86a93403d66a85733e.png)

注意⚠️：如果此时发现部分分辨率开启之后依然模糊（例如2K显示器打开1080p时仍然很模糊，但是打开1280\*720时却是清晰的），那么请执行下面【旧方法】中的1、2步（即使用one-key-hidpi）。

已知BetterDummy会引发一些奇怪的问题，比如偶尔中文输入法会有非常大的延迟，需要重启卡顿的app就能够暂时解决，还有些人遇到了鼠标延迟的问题，issue里面也有很多人反馈过，静静等待开发者解决吧！

以上方法是目前发现最为省心的方法了！

---

**以下是原文旧的方法，不适用于M1系列：**  
**以下是原文旧的方法，不适用于M1系列：**  
**以下是原文旧的方法，不适用于M1系列：**  
**以下是原文旧的方法，不适用于M1系列：**  
**以下是原文旧的方法，不适用于M1系列：**  
**以下是原文旧的方法，不适用于M1系列：**

Mac 在使用2K 显示器的时候蛮尴尬的，用2K 显示吧，字太小，用1080P 显示吧，字又模糊，如果开启HiDPI之后用1080P 显示的话效果就会好很多。

1. 首先关闭SIP，如果已关闭则可跳过：  
   1. 重启Mac，在启动的时候按住Command + R，出现苹果标志后松开  
   2. 启动后，进入实用工具找到终端，输入csrutil disable  
   3. 正常重启Mac
2. 按照这个开源项目的教程强制开启HiDPI：<https://github.com/xzhih/one-key-hidpi> （如果开启完后直接能够在设置中开启HiDPI的话，后续步骤就不用看了）
3. 如果现在仍然是模糊的或者不能开启，那么下载并安装[SwitchResX](http://www.pc6.com/mac/145024.html)如果下载不了请自行搜索～有条件的可以支持正版
4. 进入该软件的设置，选择你的显示器，如果能够在列表中找到带有HiDPI的选项，则可以直接打开，如果没有，则在`Custom Resolutions`里面点击左下角加号，选择`Scaled resolution`，在`Scale to`里面填写一个4K 分辨率的例如3840 \* 2160，保存，记得Active一下，重启电脑。  
![2kp1](https://proxy-prod.omnivore-image-cache.app/0x0,smwakiUSRQQwi70yeT1xj4hLmCtWdyDE-jpBTaf8kx7Q/https://zzbloc.top/upload/2020/11/2kp1-56d178dd48934fdfa6d4398fb0032c65.jpeg)
5. 在`Current Resolutions`里选择一个写上了“HiDPI”的1920\*1080选项，显示器黑一下之后，一切都清晰了！  
![2kp2](https://proxy-prod.omnivore-image-cache.app/0x0,seyd8gHqSo6abrjS3BcyxzqGXeddHPYxgu1nsHigHqGs/https://zzbloc.top/upload/2020/11/2kp2-82c04338a9884e15ad7ac077249176da.jpeg)

补充一点可以不合盖配合显示器使用MacBook的技巧：Macbook Pro 用外接显示器时，如何关闭笔记本屏幕，同时开盖使用？ - 于丁丁的回答 - 知乎  
<https://www.zhihu.com/question/22993457/answer/141122746>

---

