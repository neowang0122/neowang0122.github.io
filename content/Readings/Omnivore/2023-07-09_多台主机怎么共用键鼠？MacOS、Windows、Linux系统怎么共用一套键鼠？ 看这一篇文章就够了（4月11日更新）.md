---
id: 8c0f061e-8226-47a9-a30f-4cbed38ffe75
title: |
  多台主机怎么共用键鼠？MacOS、Windows、Linux系统怎么共用一套键鼠？ 看这一篇文章就够了（4月11日更新）
author: |
  unknown
date_saved: 2023-07-09 23:54:06
date_published: 2022-10-29 20:00:00
draft: true
---

# 多台主机怎么共用键鼠？MacOS、Windows、Linux系统怎么共用一套键鼠？ 看这一篇文章就够了（4月11日更新）
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mac-os-windows-linux-4-11-1893def63b4)

[Read Original](https://www.zhihu.com/tardis/bd/art/344109023?source_id=1001)

date_saved: 2023-07-09 23:54:06

date_published: 2022-10-29 20:00:00

--- 

# Full Content: 

## **0x00 前言**

当你有两台电脑的时候，要切换电脑，是希望用着当前的键鼠无缝切换呢？ 还是准备两套键鼠，切换电脑使用的时候换键鼠？

如果不止两台电脑了呢？三台？四台？如果这时候还是每台主机用一套键鼠，那换起来也是很麻烦的，而且会占用很大的空间。 

最近，因为工作需要，在两台主机、三种操作系统Win10，Mac OS，ubuntu18.04 来回切换，体验过kvm切换器的不方便后，我开始寻找起了其他解决方案，于是乎，经过一段时间的总结和体验，写下了这篇文章。

在网上冲浪过程中，花了不少时间收集和整理了下表，可以说是**全网最全**的共用键鼠方案对比了。

![](https://proxy-prod.omnivore-image-cache.app/1118x0,s7ybCnswMdJTrIlFRN1Yc_RK1sxo0OCA6DEP3w7kmKWw/https://pic2.zhimg.com/v2-c45b68a049d54b144e5d950fc803abc9_b.jpg?consumer=ZHI_MENG)

可以通过左边目录列表快速找到自己感兴趣的章节\~

## **0x01 各方案如何选择-懒人版本**

主机跨内外网，需要**稳定**、**方便**（不折腾软件）选**对拷线**；多主机单屏幕选**KVM切换器**；已有罗技键鼠，且都支持Logitech Flow，可以优先尝试 **Logitech Options** ；

不想额外购入硬件，且有多系统使用场景选 **Synergy**；不想额外购入硬件，主机系统都是Windows，选 **Mouse Without Borders** （无界鼠标）。

有需要**硬件方案：对拷线或者KVM切换器**的同学可以参考以下购买。

![](https://proxy-prod.omnivore-image-cache.app/0x0,saFiw5rO3_YycAgVOrhxAqFczWMAr6QrlZkNWr9lmw18/https://pic1.zhimg.com/v2-281bfb6958895defb888f9e1b0e2b7a9_720w.jpg?source=b555e01d)

绿联kvm切换器hdmi打印机共享自动两台主机共用显示器

天猫

¥199.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,saFiw5rO3_YycAgVOrhxAqFczWMAr6QrlZkNWr9lmw18/https://pic1.zhimg.com/v2-281bfb6958895defb888f9e1b0e2b7a9_720w.jpg?source=b555e01d)

绿联kvm切换器hdmi打印机共享自动两台主机共用显示器

天猫

¥199.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

不想额外花钱购买硬件，想使用纯软件实现共享键鼠的同学可以打包下载我从官方网站下载收集的软件。

![](https://proxy-prod.omnivore-image-cache.app/534x0,sac85gUR5AIN6XYBQwKm0L_AWIRZ5bP28bSDVOY2xfEw/https://pic3.zhimg.com/v2-fbdf58e312c5c00a18e5dbe2d531cfb2_b.jpg?consumer=ZHI_MENG)

链接:[https://pan.baidu.com/s/1BFHTUytOe\_jIDGGlnZc0fw](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1BFHTUytOe%5FjIDGGlnZc0fw) 提取码:5qpu 复制这段内容后打开百度网盘手机App，操作更方便哦

## **0x02 各方案的特点、优缺点及部分个人使用感受**

![](https://proxy-prod.omnivore-image-cache.app/792x0,swfIorMfa4v2-0b_PxBtO38GleBreTXhEhuD2T0dgQF0/https://pic4.zhimg.com/v2-8aaa9b1e25d17203ebd957bcfa0cc3a3_b.jpg?consumer=ZHI_MENG)

### **「 对拷线 」**

一套键鼠无缝控制两台电脑，传输走USB线路，不像纯软件方案走局域网会因为网络波动等原因偶尔卡顿，理论上更加**稳定**。可以应对两台主机**内外网隔离**的情景（比如一台主机能够连接WiFi访问外网，一台主机只能访问公司内网，如果工作需要同时操作两台主机，可以考虑这种方案）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,styuXnv4rfw6_pab148hV1pe7kOc6Xzee5geCc2aHo5s/https://pica.zhimg.com/v2-fd77a7bf596e50a383e9e79120fd7c0e_720w.jpg?source=b555e01d)

优越者(UNITEK)USB对拷线电脑数据互传线Type-C转USB对

京东

¥179.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,styuXnv4rfw6_pab148hV1pe7kOc6Xzee5geCc2aHo5s/https://pica.zhimg.com/v2-fd77a7bf596e50a383e9e79120fd7c0e_720w.jpg?source=b555e01d)

优越者(UNITEK)USB对拷线电脑数据互传线Type-C转USB对

京东

¥179.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

正常的使用场景下USB2.0的接口也够用了，能有10-20多MB的传输速度。如果想要更快的传输速度，购买时注意选择**USB3.0**的。因为对拷线的传输速度一般取决于USB传输速度。

该方案的缺点就是需要额外的硬件开销，且不支持Linux（我在各平台和客服咨询后给到的答复）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJaCxO-VnGEWoqfOr_VYbr4INsk0jjdnwrDTNNFqxB_g/https://picx.zhimg.com/v2-4c6654be45b614f78a7ecc2d8b644ef4_720w.jpg?source=b555e01d)

优越者(UNITEK)usb对拷线3.0 电脑数据互传线 type c

京东

¥249.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJaCxO-VnGEWoqfOr_VYbr4INsk0jjdnwrDTNNFqxB_g/https://picx.zhimg.com/v2-4c6654be45b614f78a7ecc2d8b644ef4_720w.jpg?source=b555e01d)

优越者(UNITEK)usb对拷线3.0 电脑数据互传线 type c

京东

¥249.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,shRo5GII49eaqJciJTYQo9blbYoEiJXVtg3c4BGMxllA/https://picx.zhimg.com/v2-ab8ee36d49b7856c48aad00adbfea8aa_720w.jpg?source=b555e01d)

绿联USB对拷线电脑数据线传输线互传共享键盘鼠标USB数

天猫

¥149.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,shRo5GII49eaqJciJTYQo9blbYoEiJXVtg3c4BGMxllA/https://picx.zhimg.com/v2-ab8ee36d49b7856c48aad00adbfea8aa_720w.jpg?source=b555e01d)

绿联USB对拷线电脑数据线传输线互传共享键盘鼠标USB数

天猫

¥149.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/746x0,s-6_uVZXLizDLLJkG3zhSTuGRthQjeeQwLUckp_SMFrk/https://pic3.zhimg.com/v2-5979a7053015545470c70a1fa58a49ce_b.jpg?consumer=ZHI_MENG)

### **「 KVM切换器 」**

使用KVM切换器不仅能实现两台电脑共用一套键鼠，还能共用一个显示器，而且无需驱动，兼容Windows、Mac OS、Linux等系统。

但缺点也很明显，一是也需要硬件开销，二是使用KVM切换器共用键鼠不能两台电脑无缝切换，我觉得更加适合单显示器配主机+switch/监控主机/机顶盒 这种使用场景。

实际使用下来按键切换使用电脑大概需要1s，是一个能明显感知的过程，且系统开机后有时候会不识别键鼠（window10和ubuntu18.0都遇到过），需要重新拔插USB，不确定是个人使用问题还是系统问题。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2WhFcD3MAZ18R11TM3SCr85X-ySU0gKrJ7sY36upTac/https://picx.zhimg.com/v2-e4db4207ae03cfbd60a4f818e65a23b7_720w.jpg?source=b555e01d)

绿联 KVM切换器 HDMI切屏器2进1出4K高清 USB打印机共

京东

¥199.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2WhFcD3MAZ18R11TM3SCr85X-ySU0gKrJ7sY36upTac/https://picx.zhimg.com/v2-e4db4207ae03cfbd60a4f818e65a23b7_720w.jpg?source=b555e01d)

绿联 KVM切换器 HDMI切屏器2进1出4K高清 USB打印机共

京东

¥199.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,saFiw5rO3_YycAgVOrhxAqFczWMAr6QrlZkNWr9lmw18/https://pic1.zhimg.com/v2-281bfb6958895defb888f9e1b0e2b7a9_720w.jpg?source=b555e01d)

绿联kvm切换器hdmi打印机共享自动两台主机共用显示器

天猫

¥199.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,saFiw5rO3_YycAgVOrhxAqFczWMAr6QrlZkNWr9lmw18/https://pic1.zhimg.com/v2-281bfb6958895defb888f9e1b0e2b7a9_720w.jpg?source=b555e01d)

绿联kvm切换器hdmi打印机共享自动两台主机共用显示器

天猫

¥199.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/737x0,sd8MkNGMSnUulCbY9HXnSdPfTOXdxaA-QyLDGXAtebYg/https://pic3.zhimg.com/v2-caef832aed2b6fe9682b0a325c9410e2_b.jpg?consumer=ZHI_MENG)

###   **「 罗技Logitech Flow 」**

不同计算机之间切换支持Windows和Mac OS，需要配合官方的 Logitech Options 使用，对于已经有罗技家支持 Logitech Flow 的键鼠用户来说，应该是个比较不错的方案。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjw7OyzTVhIuWUYHyFcT0mdUwwcQTEXx9dqPAeUTRJ1U/https://picx.zhimg.com/v2-55075ec8732ff0546f28dc280789e5de_720w.jpg?source=b555e01d)

罗技（Logitech）MX Master 2S 鼠标 无线蓝牙鼠标 办

京东

¥459.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjw7OyzTVhIuWUYHyFcT0mdUwwcQTEXx9dqPAeUTRJ1U/https://picx.zhimg.com/v2-55075ec8732ff0546f28dc280789e5de_720w.jpg?source=b555e01d)

罗技（Logitech）MX Master 2S 鼠标 无线蓝牙鼠标 办

京东

¥459.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sXnPzOC_9pxsp-SBQkhej0ROlqfzymLKHSpCgIaQUe1Y/https://picx.zhimg.com/v2-862090d58759ccbc393221cf1234d1ad_720w.jpg?source=b555e01d)

顺丰罗技MX Master3大师无线蓝牙充电鼠标优联双模拆包

淘宝

¥509.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sXnPzOC_9pxsp-SBQkhej0ROlqfzymLKHSpCgIaQUe1Y/https://picx.zhimg.com/v2-862090d58759ccbc393221cf1234d1ad_720w.jpg?source=b555e01d)

顺丰罗技MX Master3大师无线蓝牙充电鼠标优联双模拆包

淘宝

¥509.00 

去购买

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ctgADzrzlhEzo7U_XlDPxqCXDaznseLmlo37aAXnfo/https://pic1.zhimg.com/v2-9f3d8b0bc503cc760c01c440c84fceba.png)

**下面开始为纯软件的方案。**

![](https://proxy-prod.omnivore-image-cache.app/833x0,sufXL1pQrYgg9l835i1i9svmK4p_kOxa8PJ7v_7-5XN4/https://pic3.zhimg.com/v2-3dbbbf9bf655225745542ef0437daa62_b.jpg?consumer=ZHI_MENG)

###   **「 Synergy 」**

[Synergy - Share One Mouse & Keyboard Across Computers | Keyboard Mouse Monitor Switch](https://link.zhihu.com/?target=https%3A//symless.com/synergy)

在几年前，还是一款开源、免费的高效软件。现如今在官网提供的是收费版本，基础版目前价格是$29 ，专业版是$39 ，两者功能差异如下。

![](https://proxy-prod.omnivore-image-cache.app/604x0,skwtVJRunlqwfZRecPWg3e1rlQMOdvTN3Dxmg9MIRgDo/https://pic4.zhimg.com/v2-470f6445bc33ee4b615b9c6e341bbc0b_b.jpg?consumer=ZHI_MENG)

目前还是可以在**sourceforge**上下载到 **v1.8.8** 版本的**免费版**。

支持Windows、Linux、Mac OS系统，最大支持15台电脑无缝切换，但是并不支持文件和文件夹复制粘贴。实际使用中稳定性和局域网网络质量有很大关系，大部分情况下都是很稳定的。

PS：有同学反馈在 19 的 mac pro 上，系统版本是11.4，v1.8.8 版本无法正常使用，会报没有权限的错误。需要下载 **v1.11.0-rc2** 版本才能正常使用。（**实测在MacOS 12.3 版本，windows 11 上使用v1.10.0版本正常工作，1.10.0版本下载链接见下方）**

链接: [https://pan.baidu.com/s/1emOuRCBz9DEe63rMHyDncA?pwd=cjts](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1emOuRCBz9DEe63rMHyDncA%3Fpwd%3Dcjts) 提取码: cjts 复制这段内容后打开百度网盘手机App，操作更方便哦

相关参考文章见：

[Synergy在MAC Catalia下不能用的几个问题的解决](https://link.zhihu.com/?target=https%3A//www.codeleading.com/article/92703863221/)[Synergy v1.11.0 Released - Synergy & Symless Blog](https://link.zhihu.com/?target=https%3A//symless.com/blog/v1-11-0-released)

![](https://proxy-prod.omnivore-image-cache.app/513x0,s5cSCugvNBBefGa7bkX9Qu3lDa3PNC8_0DS6WVD0JtKw/https://pic4.zhimg.com/v2-dcf2f857ef53754074b8f30855e0733f_b.jpg?consumer=ZHI_MENG)

**这里十分感谢 @wanna 反馈信息！**

![](https://proxy-prod.omnivore-image-cache.app/726x0,sSFbl3NTyG46Ghklabxnx9zUvLNV-vz7SxXmVfLfACGk/https://pic2.zhimg.com/v2-ac1f66f4651ced020597f606ee567abd_b.jpg?consumer=ZHI_MENG)

### **「 Mouse Without Borders 」**

[官网下载](https://link.zhihu.com/?target=https%3A//www.microsoft.com/en-us/download/details.aspx%3Fid%3D35460)

又名无界鼠标，微软官方出品，只支持Windows，最大支持4台电脑。

安装完软件后，两台主机是不区分服务端和客户端的，**两台主机的键鼠都能控制另一台主机**，能够共享粘贴板，文件能跨机复制粘贴，支持直接拖拉复制（会再桌面上新建名为 MouseWithoutBorders 的文件夹），但是文件夹不支持跨机复制粘贴。

如果共用键鼠的主机都是Windows，那么，纯软件方案选 Mouse Without Borders 就可以了，一是因为官方出品，二是因为体验真的不错。

![](https://proxy-prod.omnivore-image-cache.app/771x0,sbzfunLybB0AGN7dL7e-XQ24-nSWCpttVxZeAFUW7HcM/https://pic2.zhimg.com/v2-4ec672b0cd7c18b0e862c9d4424ba109_b.jpg?consumer=ZHI_MENG)

### **「 Stardock Multiplicity 」**

[官网链接](https://link.zhihu.com/?target=https%3A//www.stardock.com/products/multiplicity/)

只支持Windows，正版能试用30天，付费之后才能支持共享粘贴板，复制文件等功能，最大支持9台电脑。有兴趣的可以安装体验下。

![](https://proxy-prod.omnivore-image-cache.app/636x0,spC5Vfc6L8YQXT3u5X6SW2AIOoofWfMeO0UHuHDE-a4c/https://pic3.zhimg.com/v2-f365c94c666a8031f4ce6be5230586a2_b.jpg?consumer=ZHI_MENG)

### **「 Input Director 」**

[Software KVM to Control Multiple Computers](https://link.zhihu.com/?target=http%3A//inputdirector.com/downloads.html)

同样只支持Windows，安装完软件后区分服务端和客户端，服务端键鼠能再客户端中共用，反之不行，即没有 Mouse Without Borders 类似的功能。

支持共享粘贴板，但需要手动配置后才支持复制粘贴文件。实际使用过程中，卸载时候遇到了个问题，关闭了客户端上软件，导致服务端这边键鼠将近一分钟都不可用，没有任何反应，直至程序报错弹出客户端已断连后才恢复正常。 

![](https://proxy-prod.omnivore-image-cache.app/616x0,sXrwsIVMBUvtEQa_ELn4StlaYvEh-z4sCrZv08z3r3-o/https://pic3.zhimg.com/v2-cb2e06411aa9181045fee3c8e08bf36a_b.jpg?consumer=ZHI_MENG)

### **「 Share Mouse 」**

[https://www.sharemouse.com/](https://link.zhihu.com/?target=https%3A//www.sharemouse.com/)

有免费版本可以使用，但大部分方便的功能都需要付费后使用，标准版$49.95/year， 专业版 $139.95/year， 支持Windows、Mac OS。支持功能和上述的几款都大同小异。

![](https://proxy-prod.omnivore-image-cache.app/707x0,snqIrTsLMcFeLN3tjvraeN4xDO82X62BGxqp2d5GDsq0/https://pic3.zhimg.com/v2-f3e9f8f7e3ea49e7a420441560b46852_b.jpg?consumer=ZHI_MENG)

### **「 macOS Monterey 」**

[macOS Monterey Preview](https://link.zhihu.com/?target=https%3A//www.apple.com/macos/monterey-preview/)

在2021年6月8日凌晨的WWDC 苹果全球开发者大会中，发布 macOS Monterey ，其中支持”全平台控制“，对于习惯把 iPad 当作外屏的用户来说，直接打通了 macOS 和 iPadOS 。甚至，对于使用三台设备的用户，也可以通过一套键盘鼠标控制。

![](https://proxy-prod.omnivore-image-cache.app/1392x0,sqzQjT5kDiX1qfKKsNZEQEbYrbrcHK0vqWkD_UVq-xH4/https://pic3.zhimg.com/v2-0bc8c8157ecc119cf4edd1414ebba03a_b.jpg?consumer=ZHI_MENG)

### 「 Barrier 」

[https://github.com/debauchee/barrier](https://link.zhihu.com/?target=https%3A//github.com/debauchee/barrier)

Barrier是从Symless的Synergy 1.9代码库分叉出来的。Synergy是Chris Schoeneman编写的原始CosmoSynergy的一个商业化的重新实现。

目前，Barrier与Synergy不兼容。Barrier需要安装在所有将共享键盘和鼠标的机器上。

所以Barrier的设置和差不多。

![](https://proxy-prod.omnivore-image-cache.app/2388x0,suQkvrXX_ZZKFS3TsNedkUO_qB9CFotrJN4Tsqgozpq8/https://pic4.zhimg.com/v2-57b56d123cbba22b281a89dc51874587_b.jpg?consumer=ZHI_MENG)

实际使用中，若同时开启Barrier和Synergy会导致无法使用， 所以最好只使用Barrier，因为他开源，并且持续维护中。

btw，若在使用发现无法使用，需要点击显示日志来查看原因。

![](https://proxy-prod.omnivore-image-cache.app/464x0,stMYozKor_AmRz56hXOwhKyelEq8OXEBcnc1coJ1kz9c/https://pic4.zhimg.com/v2-02eb7ebddfc05e443c72d014a91c8b4b_b.jpg?consumer=ZHI_MENG)

若是因为SSL证书问题，请到设置中关闭SSL加密。

![](https://proxy-prod.omnivore-image-cache.app/796x0,sxNCAVDuiADYpaadRZQhKZgSnm7QPrLkF--_243OOwOI/https://pic4.zhimg.com/v2-8718995ee8ce50b79cbe0a57882e3f83_b.jpg?consumer=ZHI_MENG)

根据我最近的使用情况来看，Barrier的稳定性更好，暂时还没有出现电脑休眠后再唤醒时的卡顿感。并且在Mac OS 12.3.1 和 Windows 11 专业版 22000.593 使用Barrier v2.4.0版本正常。

## **0x03 软件下载**

上述提到的使用纯软件实现共用键鼠的软件，都能直接根据到对应的官网中下载。

如果下载太慢或者想打包下载所有的软件，可以在以下链接中获取我在选择方案时下载的软件版本，文件结构如下图。

![](https://proxy-prod.omnivore-image-cache.app/534x0,sac85gUR5AIN6XYBQwKm0L_AWIRZ5bP28bSDVOY2xfEw/https://pic3.zhimg.com/v2-fbdf58e312c5c00a18e5dbe2d531cfb2_b.jpg?consumer=ZHI_MENG)

链接:[https://pan.baidu.com/s/1BFHTUytOe\_jIDGGlnZc0fw](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1BFHTUytOe%5FjIDGGlnZc0fw) 提取码:5qpu 复制这段内容后打开百度网盘手机App，操作更方便哦

Barrier 的下载链接见

[Releases · debauchee/barrier](https://link.zhihu.com/?target=https%3A//github.com/debauchee/barrier/releases)

## **附 Ubuntu18.04 下安装 Synergy 常见问题解决方法**

### **问题：使用下载的deb包安装软件运行有问题**

解决方法：不使用 sourceforge 下载的deb软件包，直接在命令行中使用 \`sudo apt install synergy\` 命令安装

注意：服务端的版本一定要高于或等于客户端的版本！

### **问题：提示 Failed to load module "canberra-gtk-module"**

解决方法：命令行输入 \`sudo apt-get install libcanberra-gtk-module\` 安装模块

### **问题：出现 system tray is unavailable, don't close your window 警示窗口**

解决方法：命令行输入 \`sudo apt-get install sni-qt\` 安装依赖包，重启后生效

### **问题：启动程序后，控制台输出提示错误 failed to connect secure socket**

解决方法：在软件的 “编辑-设置” 页面中取消勾选 use ssl encryption 选项

### **问题：遇到 server refused client with name WARNING: unrecognised client name , check server config**

解决方法：在服务端添加对应客户端配置

---

## 文章更新说明

优化文章结构，补充文章大致目录，方便阅读；补充部分方案使用感受说明；

WWDC21 中 更新 macOS 支持一套键鼠全平台控制

更新说明： Synergy v1.8.8 不支持 macOS 10.15 Catalina， 需要 v1.11.0 以上

补充 Synergy 1.10.0 个系统版本的下载链接

链接: [https://pan.baidu.com/s/1emOuRCBz9DEe63rMHyDncA?pwd=cjts](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1emOuRCBz9DEe63rMHyDncA%3Fpwd%3Dcjts) 提取码: cjts 复制这段内容后打开百度网盘手机App，操作更方便哦

补充软件 Barrier 及相关说明。

**如果你觉得本篇文章对你有所帮助，欢迎点赞、收藏、分享，谢谢～**

---

