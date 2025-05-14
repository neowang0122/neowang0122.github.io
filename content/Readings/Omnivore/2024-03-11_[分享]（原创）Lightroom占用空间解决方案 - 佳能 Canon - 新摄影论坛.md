---
id: d900ed92-c9bb-4938-a4e8-cd2d57135c6d
title: |
  [分享]（原创）Lightroom占用空间解决方案 - 佳能 Canon - 新摄影论坛
author: |
  unknown
date_saved: 2024-03-11 14:03:21
date_published: 2008-03-23 20:00:00
draft: true
---

# [分享]（原创）Lightroom占用空间解决方案 - 佳能 Canon - 新摄影论坛
#Omnivore

[Read on Omnivore](https://omnivore.app/me/http-forums-nphoto-net-thread-2008-03-24-ff-80808118-d-2-d-95101-18e2eaedb5a)

[Read Original](http://forums.nphoto.net/thread/2008-03/24/ff80808118d2d9510118df540c6b0a7b.shtml)

date_saved: 2024-03-11 14:03:21

date_published: 2008-03-23 20:00:00

--- 

# Full Content: 

 会员  
[![ardkat](https://proxy-prod.omnivore-image-cache.app/0x0,s3nDa7B-DX8zY63zD4rFoAwbBP9gRCnMdzh4dIsJsc40/https://img.nphoto.net/my/icon/nopic.jpg)](http://my.nphoto.net/ardkat/)

 级别: 小学二年级  
 积分: 62  
 发帖数: 58  
 注册日期: 2008-02  
 来自: [中国](http://my.nphoto.net/users/search?country=CN), [上海](http://my.nphoto.net/users/search?country=CN&province=%E4%B8%8A%E6%B5%B7), [上海](http://my.nphoto.net/users/search?country=CN&province=%E4%B8%8A%E6%B5%B7&city=%E4%B8%8A%E6%B5%B7)  
![](https://proxy-prod.omnivore-image-cache.app/160x1,ssmMF26WoPASoGCNP8CO1U9Tk-Jl279gqdPlaM2NNw_s/https://s.nphoto.net/forums/images/blank.gif)

**\[分享\]（原创）Lightroom占用空间解决方案** 

---

RAW转JPG的工具用了好多，抛开苹果上的不谈，只说Windows，从Capture One到SILKYPIX，还有Picasa和光影这样的非专业工具，最后终于下定决心，用到了Lightroom。 

Capture One（简称C1）是个好东东，但是不知道为什么，对400D的RAW格式的锐化似乎没有起到一点作用，看到预览的那种锐化带来的惊喜，一保存就觉得特别的失望，而且对40D的RAW格式的不支持，也让人有点不爽，虽然看到各大论坛上面有人用C1调出了蔡司味，不过还是觉得仅仅靠这些是不够的。   
SILKYPIX这个东东，本来是听说不错的，但是实际用起来过于麻烦了，就让他暂存在本人的电脑吧，想到了就打开。。只是不知道要做什么。   
至于Picasa和光影，Picasa可以用于后期的有些特效，蛮有趣的，补光方面也比较简单，光影功能很足，可以当作PS的简化代替品。 不过这些相信大家都知道了。还有一些针对RAW的锐化，还是见仁见智了，不用多说。

于是，还是回到了Lightroom，现在说说LightRoom的占用空间问题。 

最近打开Picasa，突然提示说磁盘空间不够，发觉C盘怎么只剩下了200多M，Picasa没办法修改其图像预览缓存到别的盘。虽然很无奈，但是Picasa并没有占用太多空间，可是我自己发现以下两个目录多出来很多。   
Documents and Settings\\用户名\\Local Settings\\Application Data\\Adobe\\CameraRaw\\Cache   
Documents and Settings\\用户名\\My Documents\\My Pictures\\Lightroom\\Lightroom Catalog Previews.lrdata   
前面目录是打开RAW的时候，会默认保存在此位置，后面一个目录则是打开LightRoom 默认catalog导入collection的时候保存的。   
随着RAW的图片越来越多，这两个文件夹会越来越大。最后可以大到超出你的想象。 用过Lightroom的可以看看现在占用了多少了。。

当然，你可以选择直接删除，可是这样毕竟没什么好的，因为在CameraRaw的图片索引，都是通过   
Documents and Settings\\用户名\\Application Data\\Adobe\\CameraRaw\\Defaults下面的Preferences.xmp设置，强行删除就像不经过注册表强行删除一些程序一样，对以后还是有不好的影响， 并且以后还是会累积的。

那么如何防止Camera RAW的cache越来越大，Lightroom启动越来越慢呢？

说来解法有两个。   
1\. 假如有安装Adobe Bridge CS3的人，在Camera RAW的设置里面就可以选择不保留Raw文件的Cache。   
2\. 假如没有安装Bridge CS3的，Camera RAW的设置里面就不会出现不保留RAW文件cache的选项，那么先在   
Documents and Settings\\用户名\\Local Settings\\Application Data\\Adobe\\CameraRaw\\Cache下面删除掉除开index.dat的全部文件，然后设置index.dat属性为只读即可。 

第二个问题其实很简单，移动My Pictures下面的Lightroom文件夹到想要保存的地方，然后在Lightroom里面open catalog就好了。 

这样。。Lightroom预览的速度也会加快，处理的嘛。。自然也会好一点。  
不过说一点，以上方法是针对那些不怎么用Photoshop处理RAW格式的人们，那些大侠高手。。还是放过本文吧。

（俺就只发在新摄影了。。）

参考链接

<http://adobeforums.com/webx?14@@.3c055fdb/87>

<http://blog.silence.idv.tw/2007/09/18/lightroom-catalog/>

---

