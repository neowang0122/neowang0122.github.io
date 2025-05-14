---
id: 04050f86-ac92-11ee-9d31-375c6d64653b
title: |
  神操作：用 Everything 1.5 进行代码片段管理 - 小众软件
author: |
  青小蛙
tags:
  - RSS
date_saved: 2024-01-06 03:14:13
date_published: 2024-01-06 03:14:13
draft: true
---

# 神操作：用 Everything 1.5 进行代码片段管理 - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/everything-1-5-18cded21fbb)

[Read Original](https://www.appinn.com/everything-1-5a-code-snippet/)

date_saved: 2024-01-06 03:14:13

date_published: 2024-01-06 03:14:13

--- 

# Full Content: 

![神操作：用 Everything 1.5 进行代码片段管理](https://proxy-prod.omnivore-image-cache.app/1608x700,scNMDO_pT2BtV3UWlbVqY1M9foTe4G8eqD4mPQuw9FWI/https://www.appinn.com/wp-content/uploads/2024/01/Appinn-feature-images-23.jpg "神操作：用 Everything 1.5 进行代码片段管理 1")

Everything 是一款非常使用的文件名搜索工具，你可以用它在 Windows 上快速搜索到需要的文件。而 [Everything 1.5](https://www.voidtools.com/everything-1.5a/)（👈官网）是正在频繁开发中的测试版本，后台更新、搜索速度更快、自然排序、索引日志、内容索引等新功能，最近一次更新在 2024年1月5日。

@valuex 同学刚刚在[讨论分享频道](https://meta.appinn.net/c/discuss-and-share/6)发布了一个帖子，非常有意思：<https://meta.appinn.net/t/topic/51153>

## 目录

* [利用Everything 1.5 进行代码管理](https://www.appinn.com/everything-1-5a-code-snippet/#%25e5%2588%25a9%25e7%2594%25a8everything-15-%25e8%25bf%259b%25e8%25a1%258c%25e4%25bb%25a3%25e7%25a0%2581%25e7%25ae%25a1%25e7%2590%2586)  
   * [背景](https://www.appinn.com/everything-1-5a-code-snippet/#%25e8%2583%258c%25e6%2599%25af)  
   * [实现](https://www.appinn.com/everything-1-5a-code-snippet/#%25e5%25ae%259e%25e7%258e%25b0)  
         * [AHK 脚本](https://www.appinn.com/everything-1-5a-code-snippet/#ahk-%25e8%2584%259a%25e6%259c%25ac)  
         * [快捷键](https://www.appinn.com/everything-1-5a-code-snippet/#%25e5%25bf%25ab%25e6%258d%25b7%25e9%2594%25ae)

先秀一个界面：

![神操作：用 Everything 1.5 进行代码片段管理 1](https://proxy-prod.omnivore-image-cache.app/710x576,st9bfaQ2oytSnpoBP0DsqtR2S8PS3KI2pJG0rSf3390w/https://www.appinn.com/wp-content/uploads/2024/01/d19c3712-1600-433a-a524-e3203722723a.jpg "神操作：用 Everything 1.5 进行代码片段管理 2")

### 背景

代码片段管理软件/服务有很多，包括 cheerysnippet， masscode，gist等。个人体验下来，cheerysnippet 比较重，后端需要配置一个cheery note。

masscode 和 visual studio code 配合较好，用其他编辑器时需要来回切换，就比较影响工作流了。gist 网页分类功能比较差。

所以个人也在找一些更普世的代码片段管理方案。

最近试用了**Everything 1.5**，里面升级的几个功能就非常适合用于代码片段管理了。

### [](https://meta.appinn.net/t/topic/51153/3#h-2)实现

将Everything 1.5 以下的几大功能组合起来，就能很快的定位到特定代码片段文件：

1. 自定义过滤（Filter）
2. 标题检索+内容检索（content search)
3. 内容预览(preview)

#### AHK 脚本

配合下面的 Autohotkey 脚本，能够通过快捷键实现代码片段文件内容快速粘贴到正在工作的编辑器中

具体实现过程：

* AHK 脚本链接： [AutohotkeyScripts/Everything\_PasteTo.ahk](https://github.com/valuex/AutohotkeyScripts/blob/main/Everything%5FPasteTo.ahk)
* 将该脚本用ahk2exe转化为exe文件，放到某个目录下
* 在Everything 中定义 Custom Open Commands（`$exec("Your_Path_Here\PasteTo.exe" "%1")`）

![神操作：用 Everything 1.5 进行代码片段管理 2](https://proxy-prod.omnivore-image-cache.app/500x471,stcTGAlpYzutA-iP1MSCMe77LMcomHuNMVarlgZFDESk/https://www.appinn.com/wp-content/uploads/2024/01/294655128-2642d9e2-09f8-4800-859e-bd107c60e04c.jpg "神操作：用 Everything 1.5 进行代码片段管理 3")

#### 快捷键

在Everything 中给上述命令配置一个快捷键

然后，就可以愉快的使用 Everything 进行代码管理了。更多细节可以前往与开发者交流：

* <https://meta.appinn.net/t/topic/51153>

---

青小蛙觉得，任何电脑上的事情，都不需要纠结于软件本身，顺手最重要。每个人，都有属于自己的方案。

原文：https://www.appinn.com/everything-1-5a-code-snippet/

---

