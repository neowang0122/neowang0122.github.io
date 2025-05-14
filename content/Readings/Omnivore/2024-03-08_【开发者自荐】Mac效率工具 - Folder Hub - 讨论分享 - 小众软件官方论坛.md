---
id: c9fc9102-9b2e-49cb-a53f-ff6ae4888768
title: |
  【开发者自荐】Mac效率工具 - Folder Hub - 讨论分享 - 小众软件官方论坛
author: |
  unknown
date_saved: 2024-03-08 23:30:28
date_published: 2023-11-30 19:00:00
draft: true
---

# 【开发者自荐】Mac效率工具 - Folder Hub - 讨论分享 - 小众软件官方论坛
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mac-folder-hub-18e217a0426)

[Read Original](https://meta.appinn.net/t/topic/50312)

date_saved: 2024-03-08 23:30:28

date_published: 2023-11-30 19:00:00

--- 

# Full Content: 

## [](#h-1)软件名称

Folder Hub

## [](#h-2)应用平台

macOS

## [](#h-3)推荐类型

【开发者自荐】

## [](#h-4)一句简介

以最短路径访问工作目录中的文件和文件夹。

## [](#h-5)应用简介

Folder Hub 用于解决Mac交互上的几个痛点

分享我最新开发的软件 Folder Hub

**为什么你需要Folder Hub？**

![Folder Hub 预览功能](https://proxy-prod.omnivore-image-cache.app/690x446,sqcTZDnxdEHEtbRCjqPB7c9JxoeULvUwNObLOOp-u0us/https://meta-cdn1.appinn.com/uploads/default/original/3X/e/4/e4b3859d9818035b5954fddd1dd32a8e999b7c46.gif)

此图展现了Folder Hub的核心功能，以**最短路径**访问工作目录中的文件和文件夹。

macOS的系统设计和交互都很干净和整洁，但仍旧有一些交互上的痛点难以忍受，让我们先来一一列举出来。

## [](#macos-6)macOS的交互痛点：

### [](#h-7)痛点一：

假设我正在使用Word写PPT、浏览器写文章、开发工具写代码等等，这些正在工作的App我们暂时称它们为**工作窗口**，每当我需要访问桌面下的文件，我都需要将当前**工作窗口**移开，漏出桌面上的文件/文件夹，然后打开文件，如果遇到图片上传等场景，我们会将图片拖拽至**工作窗口**，然后再将工作窗口移动回来，这个操作在小屏的Mac上尤为常见，难道每次访问文件必须这样吗？

### [](#h-8)痛点二：

工作中我们一定会经历多个项目，为了便于区分和访问，每个项目我们都会创建一个文件夹，比如项目A文件夹，项目B文件夹，项目C文件夹，为了不让项目多了以至于桌面看起来很混乱，我一般都是在桌面先创建一个项目的文件夹，里面放了项目A文件夹，项目B文件夹，项目C文件夹等等；这样每次访问项目文件的时候我都需要这样：访问桌面项目文件夹 - 访问项目A - 在项目A文件夹或者其子文件夹下寻找我需要的文件，访问路径非常的长。

### [](#h-9)痛点三：

当我访问完文件夹后，由于这个Finder窗口会遮挡当前的工作窗口，因此，要么我会习惯性的将其关闭，但是这就带来一个问题：当我再次需要访问这个项目中的文件的时候，我必须再次像痛点二中描述的那样，以非常长的路径打开项目文件夹去寻找我需要的文件；要么我激活当前工作窗口，这带来另一个问题：此时Finder窗口会被工作窗口遮挡，当我需要再次访问的时候，我需要将当前窗口移开，漏出Finder窗口，或者点击Finder激活其窗口，或者使用快捷键切换到Finder窗口，才能继续。随着使用增多，这种访问方式无疑会非常痛苦。

### [](#h-10)痛点四：

我习惯在全屏下工作窗口工作，但是这就带了了显而易见的问题，我如何访问桌面等位置的文件呢？我必须将取消全屏，然后再访问文件，然后再恢复全屏，这个操作导致太多人根本不愿意使用全屏工作。

那么如何解决上面的问题呢？

## [](#h-11)解决方案

我希望可以有一个固定的窗口，放置各个项目的文件夹，需要的时候我可以进行切换访问不同的项目文件夹，但是如果它常驻显示，那么会遮挡当前的工作窗口，因此我希望需要的时候显示，不需要的时候隐藏，另外我希望它在全屏下也可以工作，这样我就不需要退出全屏去寻找文件。这就是Folder Hub的能力。

### [](#folder-hub-12)Folder Hub

Folder Hub默认是完全不显示的，因为这会遮挡工作窗口，因此我为其设计了非常巧妙的显示方式，当鼠标移至刘海，则Folder Hub显示，移出Folder Hub窗口则隐藏，如下图所示：

![Folder Hub 预览功能](https://proxy-prod.omnivore-image-cache.app/690x446,sqcTZDnxdEHEtbRCjqPB7c9JxoeULvUwNObLOOp-u0us/https://meta-cdn1.appinn.com/uploads/default/original/3X/e/4/e4b3859d9818035b5954fddd1dd32a8e999b7c46.gif)

Folder Hub可以创建**工作空间**，每个**工作空间**代表一个你要访问的项目，你可以在**工作空间**中放置项目的文件、文件夹。比如我创建了多个**工作空间**，有桌面、下载、ChatTab、I18n Studio等，当鼠标移动到桌面则会显示其中的文件和文件夹。如下图所示：

![Folder Hub 工作空间功能](https://proxy-prod.omnivore-image-cache.app/690x446,sZNblmzrJltYqJckzwshHyw_TqHjc3yLV9BFPmyxCAmk/https://meta-cdn1.appinn.com/uploads/default/original/3X/3/c/3cad5aa6a03872b057a786935c4e5e10d44104d6.gif)

当我需要寻找文件夹下的文件时，双击文件夹，工作方式类似Finder，通过下方的面包屑来在不同的文件夹之间跳转，如下图所示：

![navgate2](https://proxy-prod.omnivore-image-cache.app/550x356,sYysNY93ogl73KCZj-aGonVsf5utHWmMkOlRKGPmC54Q/https://meta-cdn1.appinn.com/uploads/default/original/3X/c/3/c342e3bc46bdab5ef49a11d1a6f98c8d2de5ea07.gif)

当我找到目标文件时，比如我想上传图片，我可以直接拖拽图片到工作窗口，如下图所示：  

![Folder Hub 文件拖拽功能](https://proxy-prod.omnivore-image-cache.app/690x446,s8oBrjXcht_Du70LT3gKESkfd72pY8rNLunh2nMg8SiE/https://meta-cdn1.appinn.com/uploads/default/original/3X/d/1/d1e6763b00229fe18464a79044a72309b4f09e01.gif)

我也可以选择其他的操作，比如在Finder中显示，使用指定的App打开等等。  

![Folder Hub指定App打开](https://proxy-prod.omnivore-image-cache.app/550x356,s4UABZV2_m6wyyH0kWc8XprEtKlhC9DC3I-bieq_NMGA/https://meta-cdn1.appinn.com/uploads/default/original/3X/0/1/013fa7169575612b884f91d669c49cfa9db415b2.gif)

当然最好的点是它在全屏下可以工作，此时请不要使用鼠标移至刘海显示，因为这与系统的事件冲突，你可以使用快捷键 command + option + ↓ 来触发Folder Hub 窗口的显示和隐藏。

更好的是当你使用多个显示屏的时候，鼠标位于哪个显示屏就可以在那个显示屏显示Folder Hub。

Folder Hub有着与Dock的实现方式相似的显示与隐藏功能，有着与Finder相似的文件夹/文件交互操作，因此它近乎没有任何的学习成本，所有的交互设计我都尽可能的让其简洁与实用。

### [](#h-13)总结

官网： [https://www.finderhub.app/ 25](https://www.finderhub.app/)

App Store：[App Store 27](https://apps.apple.com/us/app/folder-hub-files-manager/id6473019059)

Folder Hub发布当天就收到用户付费，非常感谢支持。

* #### created
* [ last reply ](https://meta.appinn.net/t/topic/50312/10)
* 623  
#### views
* 5  
#### users
* 2  
#### likes

---

