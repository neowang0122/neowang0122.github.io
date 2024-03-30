---
id: 8e552a8d-2404-463f-9804-ec9f05aca705
title: |
  群晖NAS保姆级Docker教程，小白也能轻松玩转 - 群晖 Synology NAS
author: |
  synology
date_saved: 2024-03-28 17:19:44
date_published: 2023-05-09 05:07:14
---

# 群晖NAS保姆级Docker教程，小白也能轻松玩转 - 群晖 Synology NAS
#Omnivore

[Read on Omnivore](https://omnivore.app/me/nas-docker-synology-nas-18e86eedbca)

[Read Original](https://www.suncan.com.cn/archives/8506)

date_saved: 2024-03-28 17:19:44

date_published: 2023-05-09 05:07:14

--- 

# Full Content: 

Docker是一种虚拟化技术， 它本质其实是一个开源的应用容器引擎，让开发者可以打包他们的应用到一个可移植的镜像中，翻译成人话就是在你的电脑/服务器上临时划出专属的硬件资源空间，可以安装一些第三方的实用应用，并且可以随时收回这些应用资源的一种技术。

![](https://proxy-prod.omnivore-image-cache.app/803x536,s8e4LVJum688fRlSUlGPdZ-tw2i0EGuaSTXB-WilmLnM/https://www.suncan.com.cn/wp-content/uploads/2023/05/%E9%BB%98%E8%AE%A4%E6%A0%87%E9%A2%98__2023-05-0916_42_24-1.jpeg)

在进入教程之前，我们先来对号入座一下机型，如果你的机型不支持Docker，那就可以转发收藏本篇文章，等以后有需要再用，机型适配的，咱们可以跟着教程往下走。

FS 系列： FS6400, FS3600, FS3400, FS3017, FS2017, FS1018, FS3410, FS2500  
HD 系列： HD6500  
SA 系列： SA3600, SA3400, SA6400, SA3610, SA3410, SA3400D, SA3200D  
23 系列： RS2423RP+, RS2423+, DS1823xs+, DS923+, DS723+, DS423+  
22 系列： RS822RP+, RS822+, RS422+, DS3622xs+, DS2422+, DS1522+  
21 系列： RS4021xs+, RS3621xs+, RS3621RPxs, RS2821RP+, RS2421RP+, RS2421+, RS1221RP+, RS1221+, DS1821+, DS1621xs+, DS1621+  
20 系列： RS820RP+, RS820+, DS1520+, DS920+, DS720+, DS620slim, DS420+, DS220+  
19 系列： RS1619xs+, RS1219+, DS2419+II, DS2419+, DS1819+, DS1019+, DVA3219  
18 系列： RS3618xs, RS2818RP+, RS2418RP+, RS2418+, RS818RP+, RS818+, DS3018xs, DS1618+, DS918+, DS718+, DS218+  
17 系列： RS18017xs+, RS4017xs+, RS3617xs+, RS3617RPxs, RS3617xs, DS3617xsII, DS3617xs, DS1817+, DS1517+  
16 系列： RS18016xs+, RS2416RP+, RS2416+, DS916+, DS716+II, DS716+, DS216+II, DS216+  
15 系列： RS815RP+, RS815+, RC18015xs+, DS3615xs, DS2415+, DS1815+, DS1515+, DS415+  
14 系列： RS3614xs+, RS3614RPxs, RS3614xs, RS2414RP+, RS2414+, RS814RP+, RS814+  
13 系列： RS10613xs+, RS3413xs+, DS2413+, DS1813+, DS1513+, DS713+

## Docker安装容器的使用教程

1.登录群晖，打开套件中心 ，搜索 Docker（如果不支持 Docker的型号，将搜索不到），安装 Docker，安装完成后在系统菜单中可以看到Docker的应用图标。

![](https://proxy-prod.omnivore-image-cache.app/833x479,syvSlTw_If8LjlrVFM147e5S7s-fDL5S1FE4y2e1bJ34/https://www.suncan.com.cn/wp-content/uploads/2023/05/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230509165529.png)

2.接下来我们打开Docker点击【注册表】>搜索就能寻找喜欢的应用，以【oldiy/rrshare64】为例，找到你需要的映像，右击【下载此映像（镜像）】

![](https://proxy-prod.omnivore-image-cache.app/813x437,sGbe679H-Ip8oD19yueU_MuQO1AAZP2PCRZPHmYcBYPs/https://www.suncan.com.cn/wp-content/uploads/2023/05/9992b7762bdd1d57909275aa359051b3-1.png)

3.随后就需要耐心等待了，下载进度可在【映像】中进行查看，整个映像大小为230MB，如果下载出现问题，可以尝试使用网络加速器进行下载

![](https://proxy-prod.omnivore-image-cache.app/800x430,sdrGYqp9jIMjdluigm4NhbN9vZoR7Jf5l6WOXvrLMTFg/https://www.suncan.com.cn/wp-content/uploads/2023/05/60b469098284561028491504cbfec928.png)

4.完成下载后点击【启动】，进入容器的设置页面，可以进行名称的修改（仅支持英文、数字），随后进入【高级设置】进行下一步操作

![](https://proxy-prod.omnivore-image-cache.app/702x501,s5e7ZoSoou0oGhMd3hhY_ucm7L1XDixtBkBA0r4Ul5ZY/https://www.suncan.com.cn/wp-content/uploads/2023/05/05b2a35301f46993006133736fefefed.png)

我们挨个选项卡进行设置  
①【高级设置】>勾选【创建桌面快捷方式】>【网页】，输入栏中如图所示末尾加上:3001即可

![](https://proxy-prod.omnivore-image-cache.app/704x597,saqMmFmxnLnsGqNYJlMkmqqqXiofPa4hVRD6CBLMmUl4/https://www.suncan.com.cn/wp-content/uploads/2023/05/4fe8e14e544ac20fbd0d9fd952841402.png)

②【卷】>【添加文件夹】>选择目标位置>填写装载路径，请务必记住写得装载路径，之后还需要用到这个地址

![](https://proxy-prod.omnivore-image-cache.app/707x598,s9F3ViU1MNCrF3ba1Q28-WOyoiR_dkIjuliMiO11bT_A/https://www.suncan.com.cn/wp-content/uploads/2023/05/e17e62a2c126ffa40d0b5f35447efe2f.png)

③【网络】>勾选【使用与Docker Host】,这样就不需要设置相应的端口，否则需要映射3001端口

![](https://proxy-prod.omnivore-image-cache.app/709x602,seOAXFFJruyxq2CQ2eTFGc3NFPkX6-PKv3D6mZoks8rA/https://www.suncan.com.cn/wp-content/uploads/2023/05/332b8b5d7b23ca028c0cc020858d5fed.png)

④【环境】>确认相关信息是否和下图所示的相同>【应用】

![](https://proxy-prod.omnivore-image-cache.app/709x600,safk-eAaosxGK-2KS_fcKf9ijtIsqEWoA7JA2md1ueOc/https://www.suncan.com.cn/wp-content/uploads/2023/05/b80e9e79e99e0a87fdc6dd02baae6d39.png)

⑤完成所有选项卡设置后，在摘要中检查一下容器的各项参数是否准确，勾选【向导完成后运行此容器】>【应用】即可

![](https://proxy-prod.omnivore-image-cache.app/702x501,sDUgPggW1k3AReJiScmmuUDBCp55LHPwsbV-JsGS--60/https://www.suncan.com.cn/wp-content/uploads/2023/05/d6cc8d8cc1322ec04faa0dc6f68a7611.png)

⑥此时在 Docker 的【容器】中，便能看到映像在运行了

![](https://proxy-prod.omnivore-image-cache.app/704x378,sGHFLekjzIKZt-OwznlJ9NziIie7UXwvb3gwwi1MN-s4/https://www.suncan.com.cn/wp-content/uploads/2023/05/b1e5c048d92b8a4b66320bc9b3b5f38d.png)

回到DSM桌面就会发现，多了一个快捷方式，这就是你安装的Docker应用了，打开之后进行一些应用内的设置，即可正常使用、愉快玩耍了。

## 相关文章

---

## Highlights

> 群晖NAS保姆级Docker教程 [⤴️](https://omnivore.app/me/nas-docker-synology-nas-18e86eedbca#9089f6f4-f256-433a-be8e-463a627cc05f)  ^9089f6f4

