---
id: e6e3cd7c-a7d5-11ee-9960-275fc8df67cd
title: |
  STRapp - 单机版极简 TXT 小说阅读器｜基于易笺（SimpleTextReader）[Windows] - 小众软件
author: |
  青小蛙
tags:
  - RSS
date_saved: 2023-12-31 07:07:46
date_published: 2023-12-31 07:07:46
---

# STRapp - 单机版极简 TXT 小说阅读器｜基于易笺（SimpleTextReader）[Windows] - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/st-rapp-txt-simple-text-reader-windows-18cbfca6b4f)

[Read Original](https://www.appinn.com/strapp/)

date_saved: 2023-12-31 07:07:46

date_published: 2023-12-31 07:07:46

## Highlights

> [易笺](https://www.appinn.com/txt-xrl-app/)是一款简单的在线、开源 TXT 小说阅读器，只需要打开网页，将 TXT 文件拖进去就可以进行阅读。最近新增了 Chrome、Firefox 扩展，还拥有一个无界面版本，用来看小说太方便了。
> 
> ## STRapp 是什么？
> 
> STRapp 是**易笺 txt 小说阅读器** 的 exe 外壳，让**易笺**变成一个单机版的 txt 小说阅读器。 [⤴️](https://omnivore.app/me/st-rapp-txt-simple-text-reader-windows-18cbfca6b4f#e3c97279-475c-45ba-9d0c-f82745dd200b)  ^e3c97279


--- 

# Full Content: 

**STRapp** 是一款将在线、开源 TXT 小说阅读器**易笺**变为单机版程序的小工具，使其无需网络也可以使用。@[Appinn](https://www.appinn.com/strapp/)

![STRapp - 单机版极简 TXT 小说阅读器｜基于易笺（SimpleTextReader）[Windows]](https://proxy-prod.omnivore-image-cache.app/1608x700,sir_apY4owB4BmPzyEQML_VXGDxkM_OS0ANbFtAt__uQ/https://www.appinn.com/wp-content/uploads/2023/12/Appinn-feature-images-15.jpg "STRapp - 单机版极简 TXT 小说阅读器｜基于易笺（SimpleTextReader）[Windows] 1")

来自[**发现频道**](https://meta.appinn.net/c/faxian/10)，开发者 @**CataeroGong** 自荐：<https://meta.appinn.net/t/topic/50710>

## 易笺是什么？

==[易笺](https://www.appinn.com/txt-xrl-app/)====是一款简单的在线、开源 TXT 小说阅读器，只需要打开网页，将 TXT 文件拖进去就可以进行阅读。最近新增了 Chrome、Firefox 扩展，还拥有一个无界面版本，用来看小说太方便了。==

## ==STRapp 是什么？==

==STRapp 是==**==易笺 txt 小说阅读器==** ==的 exe 外壳，让==**==易笺==**==变成一个单机版的 txt 小说阅读器。==

### 缘起

@[henryxrl](https://meta.appinn.net/t/topic/45732) 开发的**易笺 txt 小说阅读器**很好用，不过就是要联网使用，要么就是自建一个 Web 服务器然后部署易笺来用。对于我这种爱捣鼓的，当然是自己搭咯，装好 web 服务，部署好易笺，打开浏览器，用得飞起。

后来看到有人问有没有单机版的，我就想，做个小程序，自带 web 服务，然后把浏览器也封装进来，这样就可以用本机 exe 看本机的 txt ，就像其他那些电子书阅读器一样。

Electron 应该挺合适来干这件事，但打包后的程序会比较大，不适合分享，而且最重要的是，Electron 我也不会啊 …… 于是也就只能瞎想想 

前段时间在小众上看到了有人介绍 [Webui](https://meta.appinn.net/t/topic/49727)，自带web服务，用浏览器当界面，不正好能用来干这个吗？

说干就干，于是就有了 STRapp 

### 特点

* 不封装/绑定易笺版本，直接使用本机的 易笺 网页，可灵活更换 易笺 版本，甚至自行修改
* 使用你系统上已有的浏览器（支持大多数现代浏览器）
* 单 exe，小尺寸（<10M），双击直接运行

### 使用

使用简单，下载 **STRapp** 到**易笺**程序所在文件夹，然后运行 **strapp.exe** 就行了。

还可以[修改参数](https://meta.appinn.net/t/topic/50710)指定端口、易笺路径，以及指定浏览器。

## 彩蛋

其实，**STRapp** 是一个通用的网页单机外壳。对于单页面的网页应用，都可以用 STRapp 来运行。只要把网页改名 `index.html`，把 `strapp.exe` 放到网页目录下，然后用恰当的参数运行就可以了。

## 获取

* [GitHub](https://github.com/cataerogong/STRapp/)
* [搬运](https://d.appinn.com/strapp/)

---

原文：https://www.appinn.com/strapp/
