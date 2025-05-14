---
id: 4aa1a770-e04e-11ee-82ad-5bf6f488b14e
title: |
  App+1 | 寻找最适合写小说的工具——novelWriter - 少数派
author: |
  Morick莫里克
tags:
  - RSS
date_saved: 2024-03-12 03:00:00
date_published: 2024-03-12 03:00:00
draft: true
---

# App+1 | 寻找最适合写小说的工具——novelWriter - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/app-1-novel-writer-18e31dfd16c)

[Read Original](https://sspai.com/post/86447)

date_saved: 2024-03-12 03:00:00

date_published: 2024-03-12 03:00:00

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSNuZLxfp8o7RI3lDkqsOqoo2JVByWR4hKLiM8IJLEQQ/https://cdn.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png)

App+1 | 寻找最适合写小说的工具——novelWriter

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。   
文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

我喜欢写小说，偶尔脑子里蹦出来那么一个灵感，在脑子里就把他构思了个七七八八。于是就想着，要不？写下来吧。于是，便开始选择称手的兵器。

写小说这件事，应该需要一件称手的兵器。

相对于笔记软件的百家争鸣，写作软件相对来说就比较稀缺。尝试了网上推荐较多的 Scrivener、Effie，以及相对用户较少的 Writeathon。

用起来最舒服的就是 Scrivener，但在 win 平台上的中文体验真的很差，并且对于非作家的我，写小说只是自己的爱好，目前为止，并无收入，所以在选择软件的时候尽可能的选择免费的软件。

经过了各种寻找，发现了 novelWriter。

[novelWriter](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Fvkbo%2FnovelWriter) 是一个开源软件，Github 上 1.6k Star。使用 Python 的 PyQt5 构建，可用于 Windows、Mac、Linux 系统。

它在 GitHub 上的介绍是这样的。

> novelWriter is an open source plain text editor designed for writing novels. It supports a minimal markdown-like syntax for formatting text. It is written with Python 3 (3.8+) and Qt 5 (5.10+) for cross-platform support.

novelWriter 是一个纯文本编辑器，并没有思维导图、卡片视图，也无法插入图片，但对于写故事，他是足够的。正如 novelWriter 的名字，它更适合写故事，或者说，它只适合写故事（小说和非虚构的故事）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sXYDZ1iL8tvL1lxznJSVmbNTE9_e2Y2FtWgnh0FZ8aug/https://cdn.sspai.com/2024/02/14/article/ac7999d4dfc4470d08fcac9cb7f97fdc?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## 文档结构

novelWriter 的根目录下可以创建**小说、归档、情节、角色、位置、时间线、物品、条目和自定义** 9 种类型，其中小说目录可创建多个。

文档类型可以分为两类，**小说文档**和**笔记文档**，小说文档写小说主体，笔记文档用于构建设定。小说文档只可以创建在小说目录下，笔记文档可以创建在包括小说文档的所有目录下。每个根目录下也可以创建文件夹进行组织和管理，且两种文档类型可以相互转换。

![](https://proxy-prod.omnivore-image-cache.app/0x0,swGlutjsPfAhUNuRfgiRAHqrXbtA-0cVK4GxliWlUPQs/https://cdn.sspai.com/2024/02/14/article/9017813766ab1ae99a89c8ef59c55d46?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

### 小说文档

novelWriter 采用最基本的 markdown 语法。每一个小说文档都基于标题进行构建：

* 一级标题用于小说**标题页或者中间章**；
* 二级标题构建**小说章节**；
* 三级标题构建**场景**；
* 四级标题构建**场景中的不同部分**。

小说编辑过程中可以每部分都新建一个文档，也可以整本小说都写在一个文档中，写完再根据标题进行拆分。

### 笔记文档

笔记文档可以创建在任何类型的目录下，进行小说的设定，备忘，大纲的撰写。

## 编辑器

### 文本格式

novelWriter 使用简单的 Markdown 语法及简单的 Shortcode 语法：

* 标题  
   * 一级标题`# ​`  
   * 二级标题`##`  
   * 三级标题`###`  
   * 四级标题`#### ​`
* 加粗  
   * `​**加粗文本**`  
   * `​[b]加粗文本[/b]`
* 斜体  
   * ​`_斜体文本_​`  
   * ​`[i]斜体文本[/i]`
* 删除线  
   * ​`~~删除~~​`  
   * `​[s]删除[/s]​`
* 下划线`[u]下划线[/u]​`
* `上标内容[sup]上标[/sup]​`
* `下标内容[sub]下标[/sub]`

### 对齐和缩进

在文档文件中，默认文本将采用左对齐或两端对齐。可以通过使用一组 >> 或 << 符号，来指定特定段落的对齐方式，使用 > 和 < 符号，使段落从左右两边进行缩进。

```ruby
这段文本是左对齐的。<<
>> 这段文本是右对齐的。
>> 这段文本是居中的。<<
> 这段段落从左边距和右边距都进行了缩进。这在您想要引用一大段文本时非常有用。<

```

### 评论与注释

概要评论可在表格试图中显示。

* 概要评论：`%Synopsis: ​`
* 短评论：`%Short: ​`

### 文本替换

在小说编辑过程中使用`<文本>​`进行占位，在转换到阅读视图以及导出和预览时可以根据项目设置中的替换规则进行替换。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syckIgpDNosXEU0SkA4dqQLkUsx8w7LzRlnSTZiINWKg/https://cdn.sspai.com/2024/02/14/article/8085c19c052d34920e09d30ddbe028e9?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## 小说组织

### 视图

项目视图为小说所有笔记与小说文档进行构建的视图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6TxASss2LugN7bPdXqgeCkIIDTeUhfVFXIrq7qHf1V4/https://cdn.sspai.com/2024/02/14/article/689d28a8295d890e67cf671070d312c7?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

大纲视图在侧边栏显示小说的大纲，只包含小说文档。根据标题级别进行识别，一个文档多个文档都可识别。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sf4Gex37gI2CvLR0ITB8nINi-4zCFyx8i-8AtxJWEiEU/https://cdn.sspai.com/2024/02/14/article/e02e247fed3e221db8df532d1eb6ab22?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

在项目视图和大纲视图中，选中文档在文档树底部的信息栏可以显示该文档的属性信息。

表格视图将小说大纲以及其标签属性通过表格的形式展现。显示的属性可以自定义。选中文档可在底部显示该文档的具体属性。

![](https://proxy-prod.omnivore-image-cache.app/0x0,supT8OuJToJlMUJNcojj8qlEi6ezZ-HBumdQW-9ZlVQo/https://cdn.sspai.com/2024/02/14/article/3755fa21367673760637fbb8cd75c1e1?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

### 标签和参考

每篇文档都可以使用`@tag:标签`​给文档添加标签。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sTUauHWqP0UgIDhrti92roJ9WLUMMXhDj-6eR_5nUF04/https://cdn.sspai.com/2024/02/14/article/ce7d559ea1ef63cc0dd267d43e2acbb8?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

也可以使用特定语法为文档添加参考属性：

* 情节：`@plot:​`
* 角色：  
   * 视角角色：`@pov:`  
   * 焦点角色：`@focus:`  
   * 次要角色：`@char:`
* 位置：`@location:​`
* 时间线：`@time:​`
* 物品：`@object:`
* 条目：`@entity:​`
* 自定义：`@custom:​`

在所有页面（小说文档中，每个标题都可以理解为一个文档）中都可以使用该种语法添加属性，且会针对属性类型进行建议。

注意，被关联的文档需要使用`@tag:标签内容`​进行标签定义。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sinQBmzINmW5ZZr6h7itQpPz1RQ2QRA4cfhaa_aZmkkE/https://cdn.sspai.com/2024/02/14/article/9bb07e023618a5fe540a06c659e593ee?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

在小说编辑过程中，鼠标放在属性链接上，点击跟随标签，可在侧边栏打开这篇文档，进行参考。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sca-AOvAQxcew7kZEecZGNXWRwazC4Ny6WF4vJjtgfKA/https://cdn.sspai.com/2024/02/14/article/6c720639c0f5b2354f376bea8b487e96?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 状态、活动状态、重要性

文档树中每一级名称后分别为**字数、活动状态、状态 \\ 重要性**。活动状态有两种，**活动**与**非活动**。分别以方框内的✔和❌显示：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sAjqlt2xiAays3TRXd5Lw8_aS5wOMPh8d71sY_RmD1fs/https://cdn.sspai.com/2024/02/14/article/f80c087ecf8a87b6bcc0b5b72517705b?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

小说文档可以设置状态，可在文档树内切换和自定义，也可在项目设置中自定义。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sXvmNwbinv4tQ5LSoVyN98NqU7iKqelwLcMAASlMuBQc/https://cdn.sspai.com/2024/02/14/article/1664f93b01706354e1b9a3f95bce635c?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

笔记文档可以设置重要性，类似于小说文档的状态设置。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sugqHR2wBXRVtQI6ZC9lk8fH5NffUXxWuwEI8rdfQWq0/https://cdn.sspai.com/2024/02/14/article/4d342a96d2e43eb3998f125117a44916?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 其他

#### 导出

在一本小说写完可以进行构建导出，可自定义进行文档过滤，进行预览，并导出多种格式。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sieRnGCpX_LoUBpmEe2eeRjUrANPGWl_a0Ew62DUtl2c/https://cdn.sspai.com/2024/02/14/article/9e78776d3d3b705e7069a6b0a6fc6838?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,stTMnhzwh3jKlAVJWPyFWlzgYHtJ0UlToe9QlvN2EKyM/https://cdn.sspai.com/2024/02/14/article/4e8a49a8b9e741005b70e3bbf4bba795?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 写作统计

![](https://proxy-prod.omnivore-image-cache.app/0x0,smynwUe-r9e-cm-X2eR8V6YzQjlp7mKizIh-Jt5eDuV0/https://cdn.sspai.com/2024/02/14/article/9df28804a5f4268bc3a5a1ee22c9d0ea?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 现存问题

由于汉字等 CJK 语言文字的特性，字数统计规则与英文等字母文字不同，汉字的字数统计并不是根据空格进行分割，所以在字数统计中，「字数」是汉字的字符数，「单词」对于汉字的统计并无意义，可以忽略，针对这个问题，我在 GitHub 上也已经与开发者进行了探讨，对于 CJK 文字的改进也纳入规划。

## 总结

写小说的重点永远在写，工具只是工具，本文章只是对于 novelWriter 的一个简单的推荐和上手介绍，或许介绍的并不全面。是否选择它，还需要看自己用着是否舒服，别被工具绑架，专心去创造故事。

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

