---
id: c09c9caa-9800-11ee-a1a0-1f65a3358f37
title: |
  [在线工具] 基于 Html+腾讯云播 SDK 开发的 m3u8 播放器 - V2EX
author: |
  unknown
date_saved: 2023-12-11 01:41:11
date_published: 2023-12-11 01:41:11
draft: true
---

# [在线工具] 基于 Html+腾讯云播 SDK 开发的 m3u8 播放器 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/html-sdk-m-3-u-8-v-2-ex-18c5807b4e1)

[Read Original](https://www.v2ex.com/t/999377)

date_saved: 2023-12-11 01:41:11

date_published: 2023-12-11 01:41:11

--- 

# Full Content: 

周末业余时间在家无事，学习了一下腾讯的云播放 sdk ，并制作了一个小 demo （ m3u8 播放器），该在线工具是基于腾讯的云播 sdk 开发的，云播 sdk 非常牛，可以支持多种播放格式。

预览地址[m3u8player.org](https://m3u8player.org/?ref=v2)

源码地址<https://github.com/geeeeeeeek/m3u8player>

## 开发步骤

第一步：集成播放器 SDK： 播放器 SDK 支持 cdn 集成方式：

```xml
 <link href="https://web.sdk.qcloud.com/player/tcplayer/release/v5.1.0/tcplayer.min.css" rel="stylesheet"/>
 <!--播放器脚本文件-->
 <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v5.1.0/tcplayer.v5.1.0.min.js"></script>

```

第二步：设置容器 然后，设置播放器容器，在需要展示播放器的页面位置加入播放器容器。可以在 index.html 中加入如下代码（容器 ID 以及宽高都可以自定义）。

```arduino
<video id="player-container-id" width="414" height="270" preload="auto" playsinline webkit-playsinline>
</video>

```

第三步：初始化并播放

```scala
var player = TCPlayer('player-container-id', {
    sources: [{
      src: 'path/to/video',
    }],
    licenseUrl: 'https://license-url',
});  

// player.src(url); // url 播放地址

```

最终集成后的代码可以参考：<https://github.com/geeeeeeeek/m3u8player>

## 附：m3u8 知识

M3U8 是一种播放多媒体列表的文件格式，它的设计初衷是为了播放音频文件，比如 MP3 ，但是越来越多的软件现在用来播放视频文件列表，M3U8 也可以指定在线流媒体音频源。很多播放器和软件都支持 M3U8 文件格式。

| ![tool2d](https://proxy-prod.omnivore-image-cache.app/0x0,soBu9q39vBkTkY6A0fcPNUrRu_6oo9HfN34Tsq4gVbnc/https://cdn.v2ex.com/avatar/9e4b/c61b/561400_normal.png?m=1685524042) | 2 **[tool2d](https://www.v2ex.com/member/tool2d)** 1 小时 46 分钟前 我也写过一个，区别是开一大堆暴力线程后台急速下载的。要不然国内的 m3u8 速度那么慢，卡都卡死了，完全没办法看。 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |

---

