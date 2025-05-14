---
id: ad7e3314-35e7-4688-9f08-d741a7d22026
title: |
  Mac 安装wireshark_if you installed wireshark using the package from -CSDN博客
author: |
  成就一亿技术人!
date_saved: 2024-10-11 22:07:56
date_published: 2024-07-23 20:00:00
draft: true
---

# Mac 安装wireshark_if you installed wireshark using the package from -CSDN博客
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mac-wireshark-if-you-installed-wireshark-using-the-package-from--1927e7b80a9)

[Read Original](https://blog.csdn.net/qq_38376348/article/details/121419684)

date_saved: 2024-10-11 22:07:56

date_published: 2024-07-23 20:00:00

--- 

# Full Content: 

## Mac 安装wireshark

![](https://proxy-prod.omnivore-image-cache.app/0x0,sb9FtdCb_T4b1O697eqoXY9k3NVVgRsw8SlTyVuCA3pc/https://csdnimg.cn/release/blogv2/dist/pc/img/original.png)

[Adsatrtgo](https://blog.csdn.net/qq%5F38376348 "Adsatrtgo") ![](https://proxy-prod.omnivore-image-cache.app/0x0,sv93Di0YTQvsiuZIrsnxo_vNBTG6J7rCk5Wt0R-LSwQ4/https://csdnimg.cn/release/blogv2/dist/pc/img/newCurrentTime2.png) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sa_g4f4iPSpH4s5_TXf5A9Zsyv3VwrZqM9FpAd5TIIJU/https://csdnimg.cn/release/blogv2/dist/pc/img/articleReadEyes2.png) 阅读量3.3k ![](https://proxy-prod.omnivore-image-cache.app/0x0,slBdydMcih-8ylYVpMDc3nVV-KXIQ1upHUQ2OquaZtc4/https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollect2.png) 收藏  2 

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7vX5ojbRKuTSA1LOxz1a-t4_PUmB2puwkPum3eTQwaY/https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png) 点赞数 5 

分类专栏： [web漏洞复现](https://blog.csdn.net/qq%5F38376348/category%5F9371723.html) 文章标签： [wireshark](https://so.csdn.net/so/search/s.do?q=wireshark&t=all&o=vip&s=&l=&f=&viparticle=&from%5Ftracking%5Fcode=tag%5Fword&from%5Fcode=app%5Fblog%5Fart) 

 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。

 本文链接：<https://blog.csdn.net/qq%5F38376348/article/details/121419684> 

版权 

[ ![](https://proxy-prod.omnivore-image-cache.app/0x0,s9sB-9QWS51xVXgufJ-c9vbZ9dStrq0byZoG4LQxU8Zw/https://img-blog.csdnimg.cn/20190918140129601.png?x-oss-process=image/resize,m_fixed,h_224,w_224) web漏洞复现 专栏收录该内容 ](https://blog.csdn.net/qq%5F38376348/category%5F9371723.html "web漏洞复现") 

21 篇文章 2 订阅 

订阅专栏 

遇到报错

 If you installed Wireshark using the package from wireshark.org, close this dialog and click on the "installing ChmodBPF" link in "You can fix this by installing ChmodBPF." on the main screen, and then complete the installation procedure.

没有给bpf权限

解决办法

```angelscript
sudo chmod 777 /dev/bpf*
```

重新打开软件后：

可以看到en0网卡流量有变化了 

![](https://proxy-prod.omnivore-image-cache.app/1200x430,spc_Djwy6zrRZnMunZ2I2xCEmwmSQWpFwh46uLEQwcwg/https://i-blog.csdnimg.cn/blog_migrate/642e1f90bd3a84bd5e8a018f8c6d29df.png)

参考：

[【问题笔记】Mac无法使用wireshark进行抓包，报错\_自律带来自由-CSDN博客](https://blog.csdn.net/yohjob/article/details/88322720 "【问题笔记】Mac无法使用wireshark进行抓包，报错_自律带来自由-CSDN博客")

[![](https://proxy-prod.omnivore-image-cache.app/0x0,s9Qy7akVLPv645dGK7HzyLZtZO-eENZdQgxCQMwd56-Y/https://profile-avatar.csdnimg.cn/38de64982d744008b549a32454184ef2_qq_38376348.jpg!1)  Adsatrtgo ](https://blog.csdn.net/qq%5F38376348) 

关注

* ![](https://proxy-prod.omnivore-image-cache.app/0x0,sPfMRq8xYHk9eeb5nkz6UK8sNUe_zJSSFaCDMh671hi4/https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2021Black.png)  5  
点赞
* ![](https://proxy-prod.omnivore-image-cache.app/0x0,sAKGmfkw0hR1uXQiSljt6Mtyzk9s6AmCB6JHj_kB0Htw/https://csdnimg.cn/release/blogv2/dist/pc/img/newUnHeart2021Black.png)  
踩
* ![](https://proxy-prod.omnivore-image-cache.app/0x0,s-GuGPpW1JQ0bCKAMkDxZktwYJV8Hlc49UoxTK3r_xqw/https://csdnimg.cn/release/blogv2/dist/pc/img/newCollectBlack.png)  2  
 收藏  
 觉得还不错? 一键收藏 ![](https://proxy-prod.omnivore-image-cache.app/0x0,s17hZ2XJAx-yh2vIPh9OnCIwd8bqpHzY5CbxSzezEDUU/https://csdnimg.cn/release/blogv2/dist/pc/img/collectionCloseWhite.png)
* [ ![](https://proxy-prod.omnivore-image-cache.app/0x0,sDCPTxfgecStxEQAWwbRFk1_oS4cXEFIFQlfM617M3lg/https://csdnimg.cn/release/blogv2/dist/pc/img/newComment2021Black.png)  2 ](#commentBox)  
评论

专栏目录 

![](https://proxy-prod.omnivore-image-cache.app/0x0,slYd-qHLBCV-zTj9ePJ0zQ-5rrFOZ1_3Lpb4bECHrNxk/https://kunyu.csdn.net/1.png?p=58&adBlockFlag=0&adId=1060981&a=1060981&c=1791019&k=Mac%20%E5%AE%89%E8%A3%85wireshark&spm=1001.2101.3001.5002&articleId=121419684&d=1&t=3&u=393f3ec3f79041e29a2992f4f6121444)

[ 【问题笔记】_Mac_无法使用_wireshark_进行抓包,报错\_please check to m... ](https://blog.csdn.net/yohjob/article/details/88322720) 

10-12 

[ 今天打开_wireshark_想抓个包,发现打开混杂模式失败,抓不了,报错如下: “The capture session could not be initiated on interface ‘en0’ (You don’t have permission to capture on that device). Pleasecheckto make sure you have sufficient permissions. If you _installed_ _Wireshark_ _using_ the_package_fromwir... ](https://blog.csdn.net/yohjob/article/details/88322720) 

[ _wireshark_抓包无法选取网口问题的处理\_the capture session could not... ](https://blog.csdn.net/julius%5Flee/article/details/120019624) 

9-28 

[ 报错如下: “The capturesessioncould not be initiated on interface ‘en0’ (You don’t have permission to capture on that device). Pleasecheckto make sure you have sufficient permissions. If you _installed_ _Wireshark_ _using_ the _package_ from _wireshark_._org_, Try re-installing it and checking the box ... ](https://blog.csdn.net/julius%5Flee/article/details/120019624) 

[ linux _wireshark_ _安装_包,linux下_安装_ _wireshark_ ](https://blog.csdn.net/weixin%5F34957720/article/details/116869929) 

[weixin\_34957720的博客](https://blog.csdn.net/weixin%5F34957720) 

05-12 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 5244 

[ _安装_Windows下使用网络截包软件,一般使用都是使用图形化的软件,如Sniffer Pro /Ethereal/EtherPeek,Linux 下字符界面的TCPDump 操作实现太难记了,而且演示,分析,培训效果都不好，所以尝试在CentOS5.4中_安装_Linux下的gnome界面的图形化抓包工具_WireShark_。_WireShark_官方主页上可以下载到widows和_MAC_OS下的_安装_包，而l... ](https://blog.csdn.net/weixin%5F34957720/article/details/116869929) 

[ 《熬夜整理》保姆级系列教程-玩转_Wireshark_抓包神器教程(3)-_Wireshark_在_Mac_OS系统上_安装_部署 最新发布 ](https://blog.csdn.net/qq%5F23827149/article/details/140652331) 

[北京-宏哥的博客](https://blog.csdn.net/qq%5F23827149) 

07-24 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1236 

[ 上一篇中介绍和讲解、分享了_Wireshark_在Windows系统上_安装_部署，今天就介绍和讲解、分享_Wireshark_在_Mac_OS系统上_安装_部署。_Wireshark_不仅是Windows系统网络协议分析软件也是一款_mac_网络协议分析软件，任何负责的网络分析人员都对这个软件情有独钟。如今，几乎没有哪种产品像它这样拥有如此持久的魅力，很容易看出其中的原因。网管员如果想知道自己的网络上到底在发生着什么，不妨用这款软件来捕获数据包，然后用一种易于使管理员跟踪计算机之间的会话和数据流的方式显示这些数据包。 ](https://blog.csdn.net/qq%5F23827149/article/details/140652331) 

[ 【_wireshark_】fedora 或者ubuntu 源码编译_安装_ _wireshark_1.70\_neither... ](https://blog.csdn.net/xxxxxx91116/article/details/7418924) 

9-21 

[ configure: error: Header file pcap.h not found; if you _installed_ libpcap from source, did you also do "make install-incl", and if you _installed_ a binary _package_ of libpcap, is there also a developer's _package_ of libpcap,and did you also install that _package_? ](https://blog.csdn.net/xxxxxx91116/article/details/7418924) 

[ _Wireshark_数据抓包教程之_安装_ _Wireshark_\_ _wireshark_ 3.0.2 ](https://blog.csdn.net/u014621518/article/details/46878065) 

9-19 

[ (1)从_Wireshark_官网下载_Wireshark_测试版的源码包,其软件名为_wireshark_\-1.99.7.tar.bz2。这里把下载的包放在/root/。执行命令查看如下所示: root@1:\~# ls Desktop New Graph (1).mtgx _wireshark_\-1.99.7.tar.bz2 从输出信息中可以看到源码包_wireshark_\-1.99.7.tar.bz2。 ](https://blog.csdn.net/u014621518/article/details/46878065) 

[ _mac_ _安装_ _wireshark_ ](https://blog.csdn.net/iamfreedom2011/article/details/50560481) 

[iamfreedom2011的专栏](https://blog.csdn.net/iamfreedom2011) 

01-22 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1889 

[ 前言介绍_wireshark_是一个很好的网络数据包抓取和分析软件。是一个跨平台的软件。可以在windows，_mac_，linux多种操作系统下_安装_使用。本篇博文主要是介绍如何在_mac_操作系统下_安装_。_安装_环境 软件版本：_wireshark_ Stable Release (1.12.2) 操作系统：_mac_ OS X Yosemite,版本 10.10。_安装_步骤 ](https://blog.csdn.net/iamfreedom2011/article/details/50560481) 

[ _Mac_ _wireshark_ 工具下载_安装_ ](https://blog.csdn.net/wxb880114/article/details/124774771) 

[隔壁老瓦的专栏](https://blog.csdn.net/wxb880114) 

05-14 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 2346 

[ Download _Wireshark_ 3.6.5_Wireshark_ · Go Deep._wireshark_是世界上最重要和广泛使用的网络协议分析仪。它可以让您在微观层面上查看网络上发生的事情，并且是许多商业和非营利企业、政府机构和教育机构的事实上（通常是法律上的）标准。由于全球网络专家的自愿贡献，_Wireshark_ 的发展蓬勃发展，并且是 Gerald Combs 于 1998 年启动的项目的延续。_Wireshark_具有丰富的功能集，其中包括： 深入检查数百种协议，并不断添加更多协议 . ](https://blog.csdn.net/wxb880114/article/details/124774771) 

[ ubuntu下的_wireshark_编译_安装_\_ubuntu _安装_ rpc.h ](https://blog.csdn.net/zhang%5Fdanf/article/details/24317473) 

9-21 

[ and did you also install that _package_? configure: error: Header file pcap.h not found; if you _installed_ libpcap from source, did you also do "make install-incl", and if you _installed_ a binary _package_ of libpcap, is there also a developer's _package_ of libpcap, ... ](https://blog.csdn.net/zhang%5Fdanf/article/details/24317473) 

[ ubuntu 下_wireshark_ 软件_安装_与使用\_ubuntu 20 tshark 3.6.14-CSD... ](https://blog.csdn.net/ygm%5Flinux/article/details/24641749) 

9-23 

[ configure:error:Headerfilepcap.hnotfound;ifyou_installed_libpcapfromsource,didyoualsodo"makeinstall-incl",andifyou_installed_abinary_package_oflibpcap,istherealsoadeveloper's_package_oflibpcap, anddidyoualsoinstallthat_package_? 问题原因是ubuntu下缺少pcap.h等文件。 ](https://blog.csdn.net/ygm%5Flinux/article/details/24641749) 

[ _mac_ _安装_并使用_wireshark_ 热门推荐 ](https://devpress.csdn.net/v1/article/detail/134064883) 

[weixin\_45565886的博客](https://blog.csdn.net/weixin%5F45565886) 

10-26 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1万+ 

[ _mac_ _安装_并使用_wireshark_ ](https://devpress.csdn.net/v1/article/detail/134064883) 

[ _Mac_ _安装_ _wireshark_ ](https://wenku.csdn.net/answer/2j7cugww0t) 

08-13 

[ 要在_Mac_上_安装_ _Wireshark_，可以按照以下步骤进行操作： 1\. 首先，确保你的_Mac_已经连接到互联网。 2\. 打开一个浏览器，访问_Wireshark_官方网站：https://www._wireshark_._org_/ 3\. 在官方网站上的导航栏中，点击"Download... ](https://wenku.csdn.net/answer/2j7cugww0t) 

[ _Wireshark_ 4.0.6 arm64 for _Mac_ 苹果M1/M2芯片专用版本 ](https://download.csdn.net/download/weixin%5F43846408/87944078) 

06-24 

[ 立即下载_Wireshark_ 4.0.6 Arm 64.dmg_安装_文件，让您轻松捕获和分析苹果 M1/M2 arm64位架构 设备上的网络流量。_Wireshark_是一款功能强大的开源网络协议分析工具，提供实时监测、流量分析和协议解析等功能。通过使用... ](https://download.csdn.net/download/weixin%5F43846408/87944078) 

[ _MAC_版免_安装_ _Wireshark_ ](https://download.csdn.net/download/wlm0813/10621532) 

08-23 

[ 总之，_MAC_版的绿色免_安装_ _Wireshark_中文版提供了高效、直观的网络封包分析能力，配合简单的终端权限设定，使得用户能够在_MAC_环境下轻松地进行网络诊断和问题排查。其丰富的功能和友好的界面设计，使它成为网络管理员... ](https://download.csdn.net/download/wlm0813/10621532) 

[ _Mac_Book上Wi-Fi抓包权限 ](https://suxiang198.blog.csdn.net/article/details/123368347) 

[suxiang198的博客](https://blog.csdn.net/suxiang198) 

03-09 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 2447 

[ _Mac_Book的Wi-Fi网卡性能是非常强的，许多Wi-Fi空口与数据流的抓包都可以基于_Mac_Book以及工具软件来实现，本文主要介绍_Mac_Book上的Wi-Fi抓包权限以及可能遇到的问题 ](https://suxiang198.blog.csdn.net/article/details/123368347) 

[ 【_wireshark_ _mac_ 无权限抓包】 ](https://blog.csdn.net/JS%5FXiaoBaiShu/article/details/127937496) 

[JS\_XiaoBaiShu的博客](https://blog.csdn.net/JS%5FXiaoBaiShu) 

11-19 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1196 

[ _wireshark_无权限打开 ](https://blog.csdn.net/JS%5FXiaoBaiShu/article/details/127937496) 

[ 解决 _Wireshark_: You don‘t have permission to capture on local interfaces 的问题 ](https://blog.csdn.net/weixin%5F42426841/article/details/131205088) 

[Hoper-J的博客](https://blog.csdn.net/weixin%5F42426841) 

06-14 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 819 

[ 解决 _Wireshark_: You don‘t have permission to capture on local interfaces. 的问题，重启后依然生效。 ](https://blog.csdn.net/weixin%5F42426841/article/details/131205088) 

[ _Wireshark_ 在_Mac_OS10.15.3 系统无法显示网卡的解决方法 ](https://blog.csdn.net/xiejun188/article/details/104635917) 

[爱因斯坦福的博客](https://blog.csdn.net/xiejun188) 

03-03 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 941 

[ 这问题困扰了我好几个月，为什么的我_Mac_bookPro最新系统运行不了_Wireshark_，运行后只会显示如下的页面 en0网卡呢？去了stackoverflow和软件的官网都没法真的找到解决办法，总的来说就要我修改 /dev/bpf\* 的权限来解决这个问题。 其实在_安装_软件时，正常_安装_了 ChmodBPF.pkg 后，所有bpf接口都是属于access\_bpf用户的，这是正确的，不需要修改了。 ... ](https://blog.csdn.net/xiejun188/article/details/104635917) 

[ _wireshark_ for _mac_ ](https://blog.csdn.net/narutohuo/article/details/5818933) 

[narutohuo的专栏](https://blog.csdn.net/narutohuo) 

08-17 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 6396 

[ <br /><br />权限管理是个让人既爱又恨的东西...<br />Windows Vista因为加了个UAC就让无数小白骂得狗血淋头,相对而言OS X处理得好得多.但在跑一些从Unix/Linux移植过来的程序的时候,还是要纠结一下...<br />比如_Wireshark_...<br />下面讲讲我是怎样纠结地把它折腾好的...Step by step:<br />1)首先肯定是下载...就不多说了,按照系统版本...我的是_Mac_ OS X 10.6 Snow Leopard,但我码这篇字的时候还没有 ](https://blog.csdn.net/narutohuo/article/details/5818933) 

[ 【_Mac_】M1芯片_WireShark_使用 ](https://codingce.blog.csdn.net/article/details/124119979) 

[微信公众号: 后端码匠](https://blog.csdn.net/weixin%5F43874301) 

04-12 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 6702 

[ 连接配置 我们一般常规的监听是来自手机上的。所以我们要把iPhone通过usb连接到_mac_。 但是当我们连接之后，还是会一脸蒙蔽，并不知道选哪一个。首先，如果是第一次_安装_ _Wireshark_,并不会显示手机的网卡的，需要做一个设置： 打开终端输入：rvictl -s 设备udid 新版本_mac_设备udid可以用访达获取，m1以下可以用iTunes获取。 成功 ➜ \~ rvictl -s 00008030-00fefafefsefsfsefs Starting device 00008030-00fe ](https://codingce.blog.csdn.net/article/details/124119979) 

[ _Mac_ OS搭建HTTP协议 ](https://blog.csdn.net/weixin%5F44895477/article/details/118600722) 

[weixin\_44895477的博客](https://blog.csdn.net/weixin%5F44895477) 

07-09 ![](https://proxy-prod.omnivore-image-cache.app/0x0,shH-gyVjU4txu6lR2kTm32Gxfjlg9iVcVG1m9KZPOG0M/https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 452 

[ _安装_相关软件： 1\. _wireshark_:著名的网络抓包工具 打开_wireshark_的官网, 进入到下载页面, 传送门: https://www._wireshark_._org_/download.html 点击_mac_OS Intel 64-bit .dmg 开始下载 打开下载好的软件包, 将_Wireshark_.app 拖动到Applications 中 并双击Install ChmodBPF.pkg, 只有_安装_了这个, 才能捕获数据包 2\. chrome/firefox 3\. telnet - ](https://blog.csdn.net/weixin%5F44895477/article/details/118600722) 

* [关于我们](https://www.csdn.net/company/index.html#about)
* [招贤纳士](https://www.csdn.net/company/index.html#recruit)
* [商务合作](https://fsc-p05.txscrm.com/T8PN8SFII7W)
* [寻求报道](https://marketing.csdn.net/questions/Q2202181748074189855)
* ![](https://proxy-prod.omnivore-image-cache.app/0x0,svrgvJzytQgB_e8rhGXRNMWEi-5yUjh4oIo0TJpk4WHk/https://g.csdnimg.cn/common/csdn-footer/images/tel.png) 400-660-0108
* ![](https://proxy-prod.omnivore-image-cache.app/0x0,s3yrW1TqmY_ZJntle5Me7oytPfXAxbDDdZRZtTePmYKY/https://g.csdnimg.cn/common/csdn-footer/images/email.png) [kefu@csdn.net](mailto:webmaster@csdn.net)
* ![](https://proxy-prod.omnivore-image-cache.app/0x0,srniMGby0JDb9iKfdXKGdzandoi3McJ1KuM1k_ANVvNU/https://g.csdnimg.cn/common/csdn-footer/images/cs.png) [在线客服](https://csdn.s2.udesk.cn/im%5Fclient/?web%5Fplugin%5Fid=29181)
* 工作时间 8:30-22:00
* [京ICP备19004658号](http://beian.miit.gov.cn/publish/query/indexFirst.action)
* [京网文〔2020〕1039-165号](https://csdnimg.cn/release/live%5Ffe/culture%5Flicense.png)
* [经营性网站备案信息](https://csdnimg.cn/cdn/content-toolbar/csdn-ICP.png)
* [北京互联网违法和不良信息举报中心](http://www.bjjubao.org/)
* [家长监护](https://download.csdn.net/tutelage/home)
* [网络110报警服务](http://www.cyberpolice.cn/)
* [中国互联网举报中心](http://www.12377.cn/)
* [Chrome商店下载](https://chrome.google.com/webstore/detail/csdn%E5%BC%80%E5%8F%91%E8%80%85%E5%8A%A9%E6%89%8B/kfkdboecolemdjodhmhmcibjocfopejo?hl=zh-CN)
* [账号管理规范](https://blog.csdn.net/blogdevteam/article/details/126135357)
* [版权与免责声明](https://www.csdn.net/company/index.html#statement)
* [版权申诉](https://blog.csdn.net/blogdevteam/article/details/90369522)
* [出版物许可证](https://img-home.csdnimg.cn/images/20220705052819.png)
* [营业执照](https://img-home.csdnimg.cn/images/20210414021142.jpg)
* ©1999-2024北京创新乐知网络技术有限公司

---

## Highlights

> 遇到报错
> 
>  If you installed Wireshark using the package from wireshark.org, close this dialog and click on the "installing ChmodBPF" link in "You can fix this by installing ChmodBPF." on the main screen, and then complete the installation procedure.
> 
> 没有给bpf权限
> 
> 解决办法
> 
> ```angelscript
> sudo chmod 777 /dev/bpf*
> ``` [⤴️](https://omnivore.app/me/mac-wireshark-if-you-installed-wireshark-using-the-package-from--1927e7b80a9#0916317c-3a39-43d9-9822-373d46df2d05)  ^0916317c

