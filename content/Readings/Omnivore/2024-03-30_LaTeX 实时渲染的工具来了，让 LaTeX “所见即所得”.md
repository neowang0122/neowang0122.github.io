---
id: 29424833-93ab-408b-962f-10738585dd4c
title: |
  LaTeX 实时渲染的工具来了，让 LaTeX “所见即所得”
author: |
  texer
date_saved: 2024-03-30 02:30:38
date_published: 2024-03-26 03:45:00
---

# LaTeX 实时渲染的工具来了，让 LaTeX “所见即所得”
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-pk-y-ld-6-hoz-2-is-e-pw-pc-jk-e-3-q-18e8e0d7b5f)

[Read Original](https://mp.weixin.qq.com/s/pkYLd6HOZ2isEPwPcJkE3Q)

date_saved: 2024-03-30 02:30:38

date_published: 2024-03-26 03:45:00

--- 

# Full Content: 

![cover_image](https://proxy-prod.omnivore-image-cache.app/0x0,sOSH3_FtBqHhdcNv8AgxwFRXg7iggHSj0-E6Fenc7rZo/https://mmbiz.qpic.cn/mmbiz_jpg/iaSX7RicXX7kZQlCIeSD5NnqibAxJwc1VWdiaoausVvaIrqdZBfN8MSdO4micImVfDsdFF7D7zjryGf801wb4v8oEicA/0?wx_fmt=jpeg) 

原创  texer  LaTeX工作室 _2024-03-26 15:45_ _浙江_ 

大家诟病 LaTeX 最多的就是 LaTeX 不能所见即所得，需要等编译才能看到最后的结果，下面这个小工具的开发，可能会改变你的很多看法。

==TeXpresso 实时渲染工具， 提供了 LaTeX 的“实时渲染”体验：更改.tex文件中的某些内容，渲染窗口几乎会立即随着您的更改而更新。写一些无效的东西，你会立即收到一条错误消息。==

与我们通常使用，先编译代码然后等待查看编译结果的使用体验相比，这可以从根本上改善 LaTeX 的编辑体验，尤其是对于大型文档。

## 安装

TeXpresso 已经在 Linux 和 macOS 上进行了测试，应该可以同时使用 AMD64 和 Apple Silicon 架构。有关依赖项和生成说明。

## 工具设计

TeXpresso 系统由以下部分组成：

* 将 LaTeX 文档渲染为 PDF 的 TeX 引擎;
* 我们使用 Tectonic 引擎的修改版本，经过修改以与 TeXpresso 驱动程序交互。
* 这是在 tectonic/git-submodule 中，它生成辅助二进制文件texpresso-tonic
* 将 PDF 文档呈现为图像的 PDF 渲染器。我们使用 MuPDF。
* 显示渲染图像并允许使用简单用户命令（请参阅下面的查看器控件）的查看器，使用 libSDL 构建。

一个驱动程序，它与编辑器通信以接收 LaTeX 文档更改的通知，维护文档和渲染过程的增量视图（支持增量、回滚、错误恢复等），与 LaTeX 引擎通信以重新渲染文档的修改部分，并与查看器同步。

驱动程序在编辑器和渲染器之间双向发送信息。特别是，可以通过单击查看器窗口来要求编辑器跳转到 LaTeX 文档中的特定位置，或者相反，刷新查看器窗口以在编辑器位置显示文档。

## 文件获取：

* GitHub - **https://github.com/let-def/texpresso**
* 代码下载链接：**https://pan.quark.cn/s/1f45691db1d1**

**工具虽然还在初期阶段，但是使用效果还是非常不错的，有兴趣的你，可以学习下，下载研究，代码基本使用的是 C 语言编写完成：** 

视频加载失败，请刷新页面再试

 刷新 

视频加载失败，请刷新页面再试

 刷新 

视频加载失败，请刷新页面再试

 刷新 

视频加载失败，请刷新页面再试

 刷新 

视频加载失败，请刷新页面再试

 刷新 

视频加载失败，请刷新页面再试

 刷新 

视频加载失败，请刷新页面再试

 刷新 

关注我们公众号，学习 LaTeX 无烦恼！

**入门资料，免费知识代码：**

**https://flowus.cn/latex/share/66110e84-b24a-4cd5-b8a7-2ba2afb35a30**

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s8c0nFId38hFwSChR4E6M3r5d4sO9qxZQZokwaf2wfqQ/https://mmbiz.qpic.cn/mmbiz_png/iaSX7RicXX7kYFHn1oBkjMVKg1ag6iajK728cHpkxibZqqqUERC5yr031AL0LKbd4xFrnBmdGV6W0oCERt8w2mu2Bg/640?wx_fmt=png&from=appmsg)

**精心制作免费视频教程：**

https://space.bilibili.com/209746320

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sJvRsWuBZsoT6ksXD0BlWa_XEYntiVwg7NTVLOJVXGtA/https://mmbiz.qpic.cn/mmbiz_png/iaSX7RicXX7kYFHn1oBkjMVKg1ag6iajK72zNEPcUJPKiaXJERep1wXc3pwsflZPjoKvbOpazTGB8YP6rD0lTOIFRw/640?wx_fmt=png&from=appmsg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sQtCMa5jOzcbAzNg5jLV_srMQKtZRw9fbAaupW-jnPPM/https://mmbiz.qpic.cn/mmbiz_png/iaSX7RicXX7kb1bvE14gNmvM5jCGRv2YIuFlnxRsmKz4D4GS3JjLiboRuGq5ICGyU4Y0Dib34hS9m88WBcjKyY85EQ/640?wx_fmt=png)

---

## Highlights

> TeXpresso 实时渲染工具， 提供了 LaTeX 的“实时渲染”体验：更改.tex文件中的某些内容，渲染窗口几乎会立即随着您的更改而更新。写一些无效的东西，你会立即收到一条错误消息。 [⤴️](https://omnivore.app/me/https-mp-weixin-qq-com-s-pk-y-ld-6-hoz-2-is-e-pw-pc-jk-e-3-q-18e8e0d7b5f#2c406046-13f8-4666-a1b7-ee69173eb326)  ^2c406046

