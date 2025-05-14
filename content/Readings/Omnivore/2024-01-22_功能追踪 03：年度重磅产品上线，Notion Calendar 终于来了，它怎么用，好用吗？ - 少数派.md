---
id: 6db1b2a2-b928-11ee-9ccd-3721028e67e2
title: |
  功能追踪 03：年度重磅产品上线，Notion Calendar 终于来了，它怎么用，好用吗？ - 少数派
author: |
  二一的笔记
tags:
  - RSS
date_saved: 2024-01-22 02:17:58
date_published: 2024-01-22 02:17:58
draft: true
---

# 功能追踪 03：年度重磅产品上线，Notion Calendar 终于来了，它怎么用，好用吗？ - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/03-notion-calendar-18d31508675)

[Read Original](https://sspai.com/post/85941)

date_saved: 2024-01-22 02:17:58

date_published: 2024-01-22 02:17:58

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSlgksn5xxfFyVy6tuszbMlWMhfiySZWwLu6dozmhU-U/https://cdn-static.sspai.com/ui/img-placeholder.png)

功能追踪 03：年度重磅产品上线，Notion Calendar 终于来了，它怎么用，好用吗？

**付费栏目试读**

本期试读选自《[Notion All in One：搭建高能效率系统](https://sspai.com/page/Notion21)》。本栏目是一份给知识工作者的 Notion 终极指南，包含三重干货，从入门到进阶，把 Notion 一次性讲清楚。

---

![](https://proxy-prod.omnivore-image-cache.app/0x0,skQ2h99WpU6x0KerjhTlftED8Aj6N_a2PCqy-y9sFCjY/https://cdn.sspai.com/2024/01/19/article/358832ae0b8cb0a2c62b914a3ef86438?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

早在 2022 年 Notion 就收购了日历应用 Cron，从那时起我就在等待，Notion 将如何把 Cron 的诸多特性移植到 Notion 自己的 Calendar 视图中，毕竟这个视图的槽点和局限性实在有不少。

不过本月的更新并没有等来这项移植，因为 Notion 直接将 Cron 这款收购来的应用改名成了 Notion Calendar，并且进一步打通了 Notion 本体与 Notion Calendar 的连接性。所以本文将向各位读者介绍，我们能够如何让 Notion 本体与 Notion Calendar 更好地进行协作。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sg86pwgQjsP5ClrJbVpFzGza3n_YZ4F9hwdNPwo-lQBg/https://cdn.sspai.com/2024/01/19/article/f56c01bb5b5706cdefb30071f5627ee4?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

关于 Cron 的介绍，推荐阅读少数派作者 [@Micoxx](https://sspai.com/u/micoxx) 撰写的这篇文章：[《被 Notion 收购的下一代日历 Cron 到底什么来头？》](https://sspai.com/post/79831)

## 基础介绍

* 支持平台：[网页](https://calendar.notion.so/)、Mac、Windows、iPhone，暂时不支持安卓和 iPad
* Notion Calendar 下载  
   * 官方下载地址：[点我](https://www.notion.so/product/calendar)  
   * 我的 Notion 博客：[点我](https://leon21.notion.site/Notion-1524d221d32443f9aa14bbabd1fef9cd?pvs=4)
* 语言界面：不支持中文
* 价格：免费，且 Notion 本体也无需付费即可联动使用

目前 Notion Calendar **仅支持用谷歌账号进行登录**，暂时还不支持直接通过 Notion 账号进行登录，所以如果你不便访问谷歌，那么就暂时无法登录 Notion Calendar 了。不过来自 Notion 社区中的消息是，Notion 团队正在着手开发 Notion 原生账号的登录功能。

![](https://proxy-prod.omnivore-image-cache.app/0x0,smlmFW0RdWH8Lmtg5KSIfClXIz5BcfheJpLOXAbj9UZY/https://cdn.sspai.com/2024/01/19/article/6c8b31bfb5b3210ed887d6f12585ca4c?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 关联 Notion

安装并使用谷歌账号登录 Notion Calendar 之后，你可以点击左下角的 「Add Calendar account」，然后在 Integrations - Notion 中，登录你的 Notion 账号：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sLb9ZJ_rPYNY2-Ti2YfBFzOzxoruE2vPhH_KB0q7HDuU/https://cdn.sspai.com/2024/01/19/article/5caa5d77d9b3423e91f78c6471e86368?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

登录 Notion 账号后，点击左下角的「Add Notion database」，就能够将**包含了日历视图（Calendar）或者时间线视图（Timeline）的数据库**添加到 Notion Calendar 之中，成功添加后，Notion 的数据库就能够与 Notion Calendar 进行**双向同步**。

请注意，上面这段话的意思是，如果你创建的是一个仅包含表格视图的数据库，那么这个数据库将无法被 Notion Calendar 检索到。

![](https://proxy-prod.omnivore-image-cache.app/0x0,st8yMV51ciqQCwjJ_0XoGRLxl6nsTooDHOYcdOBW6lXs/https://cdn.sspai.com/2024/01/19/article/f60517fcbee56b7abc24ad5efa6fed4f?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

你也可以在 Notion 中，直接点击新增的 「Open in Calendar」按钮，如此一来这个日历视图或者时间线视图就会被自动添加到 Notion Calendar 之中：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sr3TE3DuOl0cPGxqY3YEMdcFsqxa-HN8P-A0EB2YNCCo/https://cdn.sspai.com/2024/01/19/article/d47a812755aa9787aa4f69925831fb5e?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 基本特性

1\. 在 Notion 日历数据库中添加的条目都会自动同步到 Notion Calendar 中。

![](https://proxy-prod.omnivore-image-cache.app/0x0,stBvG3jkP7tJCMWU6uwCxllpT_cp9CEzm0XbvtuRELTQ/https://cdn.sspai.com/2024/01/19/article/07a492d2c62d2d2ce495fcb1b4c8bd0f?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

2\. 在 Notion Calendar 中创建的日程，会自动同步回 Notion 数据库中。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6UJxw9h11HzZsH9qXqCG-CJRONJeMgLZfz06vBFXKFw/https://cdn.sspai.com/2024/01/19/article/46f1515e5599e3bcba3aa4eb34a4219e?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

3\. 可以在 Notion Calendar 中直接打开对应的 Notion 页面（page）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,smrYfUwznh5lsBe1Oo7LOwl_22BI6Dz1r4QNNB7wfLZg/https://cdn.sspai.com/2024/01/19/article/2034200e9bae1bdffdeea04a6fc99c52?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

但点击这个按钮后，你可能会发现自动跳转到了网页版的 Notion 中，所以如果你希望让 Notion Calendar 能够自动跳转到 Notion 的客户端上，则需要在网页版的 Notion 设置中，打开「Open links in desktop app」 这个选项：

![](https://proxy-prod.omnivore-image-cache.app/0x0,slCttU-2E3xbLNZG28SAGq2GD9lHMVlnHZyRHPZt9hFo/https://cdn.sspai.com/2024/01/19/article/35d424674814b2cc637d201fb916cf01?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 重要特性

**1\. Notion Calendar 能订阅多个数据库的日历**

在过去，Notion 日历视图的问题之一就是，它基于数据库的特性，只能显示本数据库的日程，而不能将其他数据库的日程收录到一起。例如，如果我们有工作、生活、学习这三个数据库，则他们的日程事件只能分散在各自数据库的日历视图中，唯一的解法就是将他们都放在同一个数据库之中，然后再用 Select、Filter 等功能进行筛选分组。

但现在 Notion Calendar 将支持我们同时订阅多个 Notion 数据库，并将所有的日程事件同时显示在一个界面中。

![](https://proxy-prod.omnivore-image-cache.app/0x0,saWQXoaqBkLmCoeeZVuIieDa3aKc4D5sOYlNvhj6WOXU/https://cdn.sspai.com/2024/01/19/article/bc5c386feee5b7637c2f9581a74a3e3a?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**2\. Notion Calendar 能订阅同一个数据库的不同视图**

我们可以在同一个数据库中，基于不同的筛选条件来创建不同的日历视图（View），而 Notion Calendar 将能够同时订阅这些日历视图。例如在下面的数据库中拥有三种不同的日程类型：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s0vJPPQ2QfUAz3h51RV8w6OOIdAomUe1g8U6HcbpDVcc/https://cdn.sspai.com/2024/01/19/article/fc6968dde6a04f06dce5285a426bcf16?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

同时我用**筛选功能**为每种日程类型各自创建了一个日历视图：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJCbq8dVZLD1aFqI3Tt40Ph0TLI4KA8DLq-do3X9xY4k/https://cdn.sspai.com/2024/01/19/article/96afd46c730ab3df57adf1a3a93079cb?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

接下来我就可以依次点击各个日历视图的 「Open in Calendar」按钮：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYiSlLFRhus2_ptzD0xiR5VjImbjCdqBVItzHI_XsBhs/https://cdn.sspai.com/2024/01/19/article/3f94f1d4723c03aa694546818e2ae1d6?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

然后就能够将这三个视图的日程各自同步到 Notion Calendar 之中了：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sy-IMk-cY_RFJTesa9Gp_oarS24zDammzj5pq66LNuug/https://cdn.sspai.com/2024/01/19/b7fb844e57b58037fb5d296bde2e6da1.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

同时这也意味着，你可以在 Notion 数据库本体中，进一步用 Filter 功能将那些已完成的日程隐藏掉，然后这些被隐藏的日程也将同步消失在 Notion Calendar 之中。

**3\. 在 Notion Calendar 创建日程的时候，能够激活调用 Notion 数据库中的模板**

在下面的这个「会议记录」数据库中，我创建了一个会议记录模板，并将其设置为创建页面时的默认选项：

![](https://proxy-prod.omnivore-image-cache.app/0x0,smXUVqFuaEJoBszDnSPXa6FOzdB0KtGJnkgxx0VRy8Tw/https://cdn.sspai.com/2024/01/19/article/d14d3f466bf9dcdb6e5090691e78961b?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,stUgtTWZ4LJnbAu1qgafboek5LGbgRaQMN7qsrgXv9T8/https://cdn.sspai.com/2024/01/19/article/1d760a03b0a9f2ac3790daeaf6064aaa?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

接下来当我在 Notion Calendar 中创建日程时，Notion 数据库就能够自动调用这个模板：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s0v4Vr6rYQAWW9qDDV-LNwakz8XVgl_EDgXmex2S16yA/https://cdn.sspai.com/2024/01/19/391deda644d443c35c3526f2d19b3595.gif)

**4\. 最多只能添加 10 个来自 Notion 数据库的日历源**

你将不能无限制地添加来自 Notion 的数据库，目前可添加的个数被限制为 10 个：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sB80J4rG5K9x-QVDHuhjt_5r7veRk65DGREnBuXAmvmA/https://cdn.sspai.com/2024/01/19/article/856c5b5c00c35a0107e7a0acd20c9568?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**5\. 在 Notion Calendar 中创建的谷歌日历日程，能够在侧边栏直接关联特定的 Notion 页面**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSdUneK9tKwNu9F-0dN9zpB82bm0xdt_bMiiZMNNcRhY/https://cdn.sspai.com/2024/01/19/5e512f4d6a2d649a2da6aca3a515e5c6.PNG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 一些小技巧

**1\. 记忆以下常用快捷键，能极大提高操作效率**

* M：切换到月视图
* W：切换到周视图
* D：切换到日视图
* T：定位到今天

你也可以使用快捷键 Ctrl+K 来唤出更丰富的快捷操作窗口：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2Y_oLsQ-fWmAGKzNg30bhc8vJskQfMw1iCBs5SPUMjg/https://cdn.sspai.com/2024/01/19/article/eb99518cda22d054fad12365f59d5fc1?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**2\. 右上角的选项卡中，可以输入自定义的日历天数范围**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sOHG-qpSsnAj3fZA8KfRdSsne8POZjei2SNztZQ_cqL0/https://cdn.sspai.com/2024/01/19/article/b0115bb2d8ffe049fb6fa634339c55ff?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

你也可以使用键盘上的数字按键，来快速切换到指定的天数范围：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7IUl0k7vG8zzdSa-36yR1al2vXTrV2h11hoQBWzNSP8/https://cdn.sspai.com/2024/01/19/4e7b722a2dccc7172d6916a5679a7b88.gif)

**3\. 使用 shift+鼠标滚轮，可以横向移动日期范围**

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6tPF2Y94iyydHuWZj3kUPpnPYC8jqCfeIVsgp7NNkGs/https://cdn.sspai.com/2024/01/19/e5f2d39b6e7475d2f346be72200205df.gif)

**4\. 可以将 Notion Calendar 嵌入到网页端的 Notion Page 之中**

首先你需要在网页端登录你的 Notion 本体账号，然后在任意页面使用 `/embed`命令，并复制粘贴 `https://calendar.notion.so/` 这个网址

接着点击 Embed link 按钮 ，并登录 Notion Calendar 的谷歌账号：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sMp58rAbj2ExjdLYIy0bHREhvX1LYdN4mtfz5GcH96TA/https://cdn.sspai.com/2024/01/19/4163489e8cdffb155b5483a481beb7d5.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

就可以在网页端的 Notion 账号中，嵌入 Notion Calendar 本体了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYGOI5QXl_Ep7_uU_e8JmJ43uDJ6tNqig52cHxt3cWJ0/https://cdn.sspai.com/2024/01/19/68d8123b4033b6b877eb013e0f299cda.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

需要注意的是，嵌入效果在 Notion 客户端中将无法生效，如下图所示：

![](https://proxy-prod.omnivore-image-cache.app/0x0,scmW18A8zrqBOtIkCQDj9hR2Cd19D8LtES-PX10g9t_c/https://cdn.sspai.com/2024/01/19/22e2b3097b0d80082b6f672c4b22546f.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**5\. 时间预约**

使用快捷键 S 可以在你的日历中分配空闲的时间段：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sr7xtvLiUitoz0WdJ4YJIYXUcHFw9X61WrhNXko5X818/https://cdn.sspai.com/2024/01/19/f66f8623c3607aca6faab26d73c1a619.gif)

然后点击右上角的 Create 按钮，即可创建预约链接：

![](https://proxy-prod.omnivore-image-cache.app/0x0,siZv6qkmkv822xziX7XXxBObO6pgHIdDIoNpDorBu7yM/https://cdn.sspai.com/2024/01/19/715247e214c9d35fec329cebd109af9b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

将生成的链接发送给对方，对方点击链接后，就能查看你所设置的空闲时间段，然后进行预约：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYC40iCC_Xm5CdHCdcQ7LKVSMoiVoUpaZBh1UMBIQQA0/https://cdn.sspai.com/2024/01/19/2e3d9699c0c6361aedb065f3f23b9410.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 问题与槽点

在 Notion Calendar 上线之前，Notion 进行了超过 2 周的密集宣传。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sYQhaeopWPzZ2tPVMAyNfDPv9D_3HxUzujE8nMUkbhAU/https://cdn.sspai.com/2024/01/19/e467b7a8a735b0ff04a4a5c2d0d72bf8.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

然而高调的宣传方式，以及较长的宣传周期，极度拔高了用户对本次更新的期待。对不少用户来说，增加一个独立的日历应用是意料之外，因为轻度用户更希望看到的是对 Notion 本体的优化，于是很多小问题在此刻就变得不太能接受了：

* 只支持谷歌账号登录，然而却不支持安卓系统；
* 要求谷歌日历授予过多不必要的权限，如编辑和删除联系人等；
* 只能同步谷歌日历的事件（Events），却不能同步谷歌日历的任务（Tasks）；
* 订阅数据库后，Notion Calendar 只能显示数据库本体的名称，不能显示数据库**视图**的名称；
* Notion 数据库的日程必须先设置好时间，然后才能在 Notion Calendar 中显示。所以我们无法在 Notion Calendar 中通过拖拽的方式快速安排那些没有设置时间的日程，就像滴答清单这样：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHelYJxJXTRKtH8Q-5rLnaRSCj8lxoNemYHck6Ad2UUg/https://cdn.sspai.com/2024/01/19/a0b8cc038df289e2185e20b1d22ac2c8.gif)

* 无法设置重复循环事项，例如每天下午六点填写周报、每周六健身等；
* 无法直接与苹果日历双向同步；
* 无法在 Notion Calendar 中直接查看 Notion 页面的详细信息，更无法直接编辑 Page 中的字段，例如勾选 Checkbox 等，必须跳转回 Notion 本体；
* 偶尔会出现同步速度过慢的情况，这个时候就需要手动刷新以下（`Ctrl+R`）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,srCuSHls6husCnFTqWLwJEyjeKm0pcfhoVs9yzyt2qXU/https://cdn.sspai.com/2024/01/19/ae18dc3f99db19360498d0005d3ccc88.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 结语

如果你本身是 Notion 的重度用户，并且经常使用「日历」这类工具来管理自己的工作和生活，那么我会推荐你下载试用 Notion Calendar 这款产品，它虽然还有不少需要优化的地方，但功能已经足够使用，至少现在已经能同时订阅多个数据库的日程，这就已经是解决了一个巨大的痛点。

并且 Notion Calendar 还有足够优雅好看的界面，以及足够丝滑高效的快捷操作方式，这点是其他日历应用很难比拟的。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqo1xgw1dGBtyktIzLvY0EJJc2KjnLc8gTffnBPrfiqc/https://cdn.sspai.com/2024/01/19/060b2ad7ae2646bda09619b52564d3d9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

但如果你本身就没有用日历管理日程和任务的习惯，真的用不来这类工具的话也不必勉强。因为我们也还需要再给 Notion Calendar 更多的时间去做优化，在这之前就先用好手头上的工具吧。

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

