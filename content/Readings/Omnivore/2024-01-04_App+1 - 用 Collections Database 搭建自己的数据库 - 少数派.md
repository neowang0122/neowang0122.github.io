---
id: 73de2d4e-ab91-11ee-810d-c7ab26077359
title: |
  App+1 | 用 Collections Database 搭建自己的数据库 - 少数派
author: |
  hAPPydOg
tags:
  - RSS
date_saved: 2024-01-04 22:25:35
date_published: 2024-01-04 22:25:35
draft: true
---

# App+1 | 用 Collections Database 搭建自己的数据库 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/app-1-collections-database-18cd840b2fe)

[Read Original](https://sspai.com/post/85464)

date_saved: 2024-01-04 22:25:35

date_published: 2024-01-04 22:25:35

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSNuZLxfp8o7RI3lDkqsOqoo2JVByWR4hKLiM8IJLEQQ/https://cdn.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png)

App+1 | 用 Collections Database 搭建自己的数据库

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

日常工作生活中，我们总会有一些小数据需要记录并统计，比如加班请假时间、里程油耗、咖啡因摄入量等。这些数据零零种种，类型很多，虽然有一些专用 app 可以分别记录这些数据，但未免显得小题大做，也不符合我个人的使用习惯——能精简则精简，更何况有些数据根本没有专门的 app 来记录。

所以，采用通用性更强的类表格自然是更好的方案，包括在线表格 Airtable、金数据、相对小众但可以本地使用的 Memento Database，又或者略显大材小用的 Numbers、Microsoft Excel、WPS。

但用这些应用记录数据，对我来说都有些痛点。最主要是：

* 录入数据需要打开对应的 app，不够方便快捷；
* Airtable 和金数据可以利用 API 结合快捷指令方便录入，但依赖网络，多少有点不稳定的感觉；
* 数据放在第三方服务器，总有点不太放心。

寻寻觅觅，偶然发现了今天要介绍的 app —— Collections。它的出现，一举解决了上述三个痛点。

* 对快捷指令支持比较完善，可以快速录入数据，同时也支持手动在 app 录入；
* 数据存储在本地，录入数据不依赖网络环境；
* 数据可以通过 iCloud 在多设备间同步，支持 iPad 和 Mac 平台。

当然，凡事都有两面性，解决痛点的同时，Collections 也有一些使用不便的地方。包括 **app** **没有中文版**，Formula （公式）功能1数据类型不能自动转换，比较死板等。

如果能克服上述两个痛点，Collections 是一个非常好用的可自定义的数据库，官方宣称有20+ 种类型字段可供使用，包括：公式运算、逻辑运算、文本、数字、图片、文件、定位、日期时间、即兴涂鸦等，非常丰富。正如官方 slogan：

> **Organize anything.**

下图是我个人在用的两个范例，其中订阅费用是开箱即用，软件已内置模版，不过各字段的名称是英文，可以自行修改为中文。China Daily 是结合快捷指令，把阅读过的文章记录一下字数，并保存原文链接，方便后续回看。

![](https://proxy-prod.omnivore-image-cache.app/0x0,suZSwISTX6zB7RG8VyfPDvaRPuOVc5vZhBQOQGmdlFDE/https://cdn.sspai.com/2023/12/30/dac74262bfc5913061ae258169dea47b.jpg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sdoliVFh9HweX2QVjskZTzBLERu61lPvB2zpjukOSG9k/https://cdn.sspai.com/2023/12/30/90e3943b3a35cfb42ba639e32c28b805.jpg) 

订阅费用和 China Daily 阅读统计

Collections 数据结构本质上就是一个 Excel 二维表格，它包括三个基本要素：Collections、Documents 和 Fields（因为 app 为英文版，本文对相关术语也用英文进行描述）。

**Collections**：可以理解为一个个 Excel 文件，不同的 Collections 用于收集不同的数据，比如上图的订阅费用和 China Daily 阅读统计就是两个 Collections。

**Documents**：就是每个 Excel 里面一行行的数据，上图中印象笔记和 Quicker 就是两条 Documents。

**Fields**：Excel 每一列的内容，比如每一条订阅费用的 Documents 包含 app 名称、价格、周期、到期日期这四个 Fields。

上述用图表示如下：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sxl3cV6sdLtpbE7m3Czyrr63nIsiRZpCEU72fJ4nus0k/https://cdn.sspai.com/2023/12/30/2bbfee503446cd5c3e21b2b8b0dbad69.jpg)

Collections 数据结构

还有两个功能需要了解，如果要统计汇总数据，需要添加一个 **Summary**；如果要过滤满足某些条件的数据，需要添加一个 **View**；如果要统计满足某些条件的数据，就是把 Summary 和对应的 View 关联起来。

## 新建 Collection 范例

现在我们一起来新建一个统计每日饮水量的 Collection，来理解 app 的相关功能。

打开 app 后点击右上角「+」，软件已经内置了很多 Template（模版），这里选择 Custom（自定义），对新的 Collection 命名为「每日饮水」，选择喜欢的图标。

完成后继续点击右上角「Next」，添加 Fields。这里按下图添加对应的数据类型并重命名。此处有个不人性化的地方，添加完 Fields 后必须先点击右上角「Save」，然后再重新进入编辑 Fields，才能重命名。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7SNGVPRGvokqy0LXLJNZuWP8frAi4NT6kIWNovEq6Mk/https://cdn.sspai.com/2023/12/30/162e015506c95521fb9fc14135df6df2.jpg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,shRTSfpnnKJST8_pjNWkHgxlV2twyny4aprM58LUsvMs/https://cdn.sspai.com/2023/12/30/149bd29592c335e26509f1683ea409ec.jpg) 

新建 Collection 并添加Fields

重新进入新建的「每日饮水」，点击右上角「...」，选择「Lists」，用于添加「饮用类型」，添加类型时可以开启「Enable color」，看着会比较美观。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sN2Mcurk7-f-KMoSEHjZv6MI1TPbeMjR9ZO0aSvc_IYw/https://cdn.sspai.com/2023/12/30/29c316b0bfb6d6ecf8caa09d48904ae8.jpg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sIB1JgtA5qDLH7ofcT2FIz9NVBWuWhhoxGFsjmoGNbWA/https://cdn.sspai.com/2023/12/30/ee58d750e0df827bbb585560b56f030f.jpg) 

添加饮水类型的 List

回到上面左图，这次选择「Fields」，进行编辑调整，各字段命名如下图。添加 Selection 字段时选择刚才新建的「饮用类型」列表。

![](https://proxy-prod.omnivore-image-cache.app/0x0,smY04iHpGykvCZ1uHKzfqrBv50wUgKTqOLDr7IahOw84/https://cdn.sspai.com/2024/01/01/51f6ea3673b7c832c6fda369419a6f88.jpg)

重命名各字段名词

点击上图中每个 Fields 右侧的「>」，参考下面图片设置，未显示的选项保持默认即可。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjWS5Ri2xz1_30FiqthgxtjrEnVR0rB3gyMXdrTzvQi8/https://cdn.sspai.com/2024/01/01/5ca553f0b297203260410177f02125a9.jpg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,s5h1UT-yYH0c7l3kvPPTj-V4bbLV5QkKguFN-5qorxIA/https://cdn.sspai.com/2024/01/01/485e9232ddeedc077e76f70359a9c8a5.jpg) 

另外，因为我们大部分时候喝的是水，所以为了减少每次录入的操作步骤，饮用类型默认选项设置为水。同时，为了显示时美观一些，把饮用类型的「Display caption」关闭。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sNuNPeATDTX1WB2QMYQhn4_ioh4H0nBzWmgb5JuY7VRc/https://cdn.sspai.com/2024/01/01/0acadf5fa78e4a1bf9138897a5f38e11.jpg) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sFMmlhdDKNrSRoAQEm4LPrE91c8iBIEjwidMTox-AMbQ/https://cdn.sspai.com/2024/01/01/4653835d03a2c80f2e234b442c137562.jpg) 

关闭「Display caption」和设置「Default value」

这里简单解释一下几个主要的选项作用，不同的 Fields 类型选项会有所差异。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sg4H5-a_ezE5as-WzY-m0LBBRIlmxR0Ot9-lKUHQZfY8/https://cdn.sspai.com/2024/01/01/fe69d55c3b4f49c81724b736865c6d57.jpg)

Collection 的 List 界面

* Display in list：开启后， Filed 才会在上图 List 页面显示，比如上图中日期、摄入量、饮用类型都开启了。
* Style：类型为 Title 时，字体会加粗且显示在首行，比如上图的日期。摄入量和饮用类型都属于 Detail，字体未加粗。
* Display caption：是否显示字段标题，上图中摄入量开启了此选项，如果关闭此选项，则只会显示 50，而不会显示「摄入量」三个字。
* Add divider：设置后，在录入新数据界面，会和其他字段之间有空行，效果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,ssw5njkZmy0wVq4aE2japuB2P4na1k2aiwh5HhISXPms/https://cdn.sspai.com/2024/01/01/c1179e1380a26d402833548790c692fc.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,skN5EdXBW0RZOQu06GGGAGBjQxuacfBtuhDBw9nHCIJ4/https://cdn.sspai.com/2024/01/01/411ca966123b39cf1aeda9bb2c44e10d.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

「Add divider」左图开启，有图关闭

一个简单的 Collection 已完成，现在我们来添加 Summary 和 View 功能，让其统计今日饮用总数。

## 添加 View 过滤数据

View 类似于 Excel 筛选功能，我们添加一个 View 用于过滤出日期为当天的数据。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sDeN9vhYq98TNTUQ9g8RxY7ITuQ24tHh06WA9sF7NceM/https://cdn.sspai.com/2024/01/01/74a5c658423b026321e47703d15db6e2.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

添加 New view

按下图步骤 1-10 添加新的 View。**注意，Formula 需要内购解锁。**

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3LOefl1Uf6DAGLj4TCtHMfSBRGxERuXCursgQwlMUm8/https://cdn.sspai.com/2024/01/01/1c6e3b3f409d08bd821aedd55aa976f9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

步骤1-4

![](https://proxy-prod.omnivore-image-cache.app/0x0,sxJEVPmt431k5zNo4GBFQ8tmtjJYDa25uHm6SgBabrE8/https://cdn.sspai.com/2024/01/01/ce5b8888bc5dcbd2683bb32bc7cec4c4.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

步骤5-8

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHXOck-bpwzn8Z8pHYPA2pGVI0Q6xZaU_j-EZP-9qw5E/https://cdn.sspai.com/2024/01/01/9a3eefd968653df67c6d9e60627cdc71.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

步骤9-10

解释下「Data in unit」：Day 表示按日筛选，1 表示今日，-1 表示昨日。同理，当选择Month 过滤时，1 表示当月，-1 表示上月。

## 添加 Summary

添加 Summary 用于统计数据。

![](https://proxy-prod.omnivore-image-cache.app/0x0,szfg_Clsyeba36yg1Jv1ewiicIAA2AtEYW0Bvhe9RO9I/https://cdn.sspai.com/2024/01/01/8ad162303177c5bbaf6f72c88620e8ca.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

选择 Summary

由于我们是要统计摄入量的数据，而摄入量在前面选择的 Field 类型为 Decimal number（十进制数），所以这里也要选择 Decimal number。其余按步骤 1-10 操作。

![](https://proxy-prod.omnivore-image-cache.app/0x0,skNcUwIgC-_WyBUOZGylJKs2Usq1TamWqau3qfTZ2M1Q/https://cdn.sspai.com/2024/01/01/8c74234264398071bc5e19405bf9853e.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

步骤1-3

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCJu4Nwz_8DsFCXM_oqE0XXjdtR97NSVGIJKUUo7_m4U/https://cdn.sspai.com/2024/01/01/41136ce2edecd4e49d4d34675d2b2e05.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

步骤4-10

![](https://proxy-prod.omnivore-image-cache.app/0x0,sVP2QVqAEQTiFhQqIRVBki0NobINZm0PxC8QvJx_5HJA/https://cdn.sspai.com/2024/01/01/d69e6c2952401f003e8701ca7b177ba0.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

步骤11和最终效果

至此，一个可以记录每日饮水量的 Collection 已完成，下面附上快捷指令，用于快速记录数据。我习惯一杯水喝完后就记录，而杯子容量是固定的，所以快捷指令只需要动态获取当前日期即可，摄入量属于固定数值。各位也可根据需求对摄入量和饮用类型进行设置。但是**不建议设置需要选择的步骤**，这样无法 Siri 语音一键记录。

利用快捷指令后玩法就很多了，比如 NFC 触碰，手机后背双击，iPhone 15 Pro 系列的 Action Button，都可以大大提高数据记录效率，各位自行尝试。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syKP_JdpLAsxXh3_V06TZ86gPYAq6olbcRb2gEeDDTlg/https://cdn.sspai.com/2024/01/01/21fbcc50737f0b403284f02098c5106c.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Siri 语音添加效果

## 关于 Formula 和数据类型

首先吐槽下 Formula 的数据转换功能，一旦 Field 字段类型选择好了，通过公式计算的结果一定也要符合该字段类型，否则会报错。比如 Field 字段类型是 Text（文本），那么通过公式计算的数字结果一定要用「String」把数字结果转换为字符串才行，如下图。

快捷指令传递给 Collection 的数据类型也要对应，不能把数字结果传递给文本型的 Field。

![](https://proxy-prod.omnivore-image-cache.app/0x0,swcHkmEiWRfwuNKV6H1r-UlUbFQx2LRw-esr6yaYTuuk/https://cdn.sspai.com/2024/01/01/4f5eecb3902b6a34b41164df2d39bd58.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sgVer8nbSr5PJjEasc5aTAPrhF9TVcTAQ257LWfhcPWU/https://cdn.sspai.com/2024/01/01/3f8fdd6df0b918b460f424b8cec12174.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

左图未进行类型转换报错，右图把数字结果转换为文本

另外，Collection 的公式组织方式是**先写结果**再一步步由后至前写过程，需要点逆向思维，而且一旦过程中有一步逻辑写错了，那大概率得重头开始写，不太人性化。

比如，上图中对 1 和 2 求和的结果转换为字符串，我们一般习惯于先写公式 Sum 1 2，然后再对 Sum 结果使用 String 转换字符串。但 Collection 里面需要先写 String，然后在 String 里面写 Sum，再在 Sum 里面写数字 1 和 2。也就是说，如果一个结果需要通过 123 步骤来实现，那么在写公式时必须按 321 步骤写。

## 总结

相信能看到这里的读者，对数据记录是有需求的，Collections 虽然是一个小众 app，也有一点不人性化的地方，但其功能的完善程度和对快捷指令的支持程度都是非常棒。同时，高级功能的内购，一次购买即可解锁 Mac、iPad、iPhone 端。

Collection 的功能还有很多，本文仅抛砖引玉，更多详细功能推荐阅读[官方文档](https://sspai.com/link?target=https%3A%2F%2Fcollectionsdb.com%2Fen%2Fhelp%2Fget-started)。

很多时候，我们不是不想记录一些数据，而是记录的过程不够方便快捷，每多一个步骤就会大大降低记录的欲望，能一步到位的绝对不要用两步。

用 Collections 去记录更多更多吧！

[![](https://proxy-prod.omnivore-image-cache.app/0x0,si0fzpv2EvUIuzAxy9VFm9UAm8tryiyQ0vDDXBx_tM2o/https://cdn.sspai.com/2024/01/01/5906f86a939dcd04b6b6303a166553fe.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100/interlace/1)](https://sspai.com/app/Collections%20Database)

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的[正版软件](https://sspai.com/mall)，少数派为你呈现🚀

* 1需要内购 48 元解锁。

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

