---
id: f9e4a5f0-b9d1-11ee-8f47-139642d70d73
title: |
  一日一技｜巧用 Keyboard Maestro，快速在备忘录中记录窗口的选中内容 - 少数派
author: |
  MarvinCui
tags:
  - RSS
date_saved: 2024-01-22 22:30:44
date_published: 2024-01-22 22:30:44
draft: true
---

# 一日一技｜巧用 Keyboard Maestro，快速在备忘录中记录窗口的选中内容 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/keyboard-maestro-18d35a7ab9b)

[Read Original](https://sspai.com/post/85816)

date_saved: 2024-01-22 22:30:44

date_published: 2024-01-22 22:30:44

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSNuZLxfp8o7RI3lDkqsOqoo2JVByWR4hKLiM8IJLEQQ/https://cdn.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png)

一日一技｜巧用 Keyboard Maestro，快速在备忘录中记录窗口的选中内容

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

在日常生活中，经常需要去记录一些在不同软件中的，未来可能会用到的重要信息。一般来讲，我需要的内容应该包含以下几个部分：软件名称、时间、我选中的重要信息。

而我最初关于存储内容的软件考虑就是「备忘录」App，主要是因为其在 Apple 生态中原生的体验、优秀的多端同步机制。

于是我就在想，有没有一个自动化的流程可以去记录这些。最终我选用了 Keyboard Maestro 这款万能的工具。可以一键导入的 kmmacros 文件放在文章最底部，方便大家下载。

## 实现功能

![](https://proxy-prod.omnivore-image-cache.app/0x0,scHClHLvWGnuKBEo7mG3Gt0ak1rWA9JdvRWA0xED-gQk/https://cdn.sspai.com/2024/01/14/86dfee9eb4fff486f476b1084d789727.gif)

过程演示

1. 在窗口中选中一段内容
2. 点击特定快捷键（这里我设置的是 ⌘ + ⌥ + ⇧ + C）
3. 自动打开备忘录，并记录如下内容：  
标题为窗口名称+应用名称+保存时间  
正文为图片+选中文字+应用名称的 Tag 以方便搜索

## 所需工具

为了实现这个功能，你需要使用如下软件：

* **Keyboard Maestro**

更多关于 Keyboard Maestro 的使用方法，可以参考以下栏目：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6g5rh2EYT-E01y0U0J_EqE5JLl2je-2F4wZwr5MpIDk/https://cdn.sspai.com/2023/9/11/article/a80b9f1c-aec6-7440-7b13-af3df439f5de.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!200x268r/gravity/Center/crop/200x268/interlace/1) 

生产力超频：Keyboard Maestro 拯救效率

完全上手顶级 Mac 自动化工具

## 实现思路

为了实现这个功能，我们首先需要明确我们应该获得哪些信息：

* 窗口及其 App 的名称
* 窗口的截图
* 选中的内容

然而 Keyboard Maestro 并不方便去获取这些内容，于是我用到了集成在 Keyboard Maestro 中的「大杀器」：Apple Script。

Apple Script 是苹果公司开发的一种脚本语言，可以用来控制运行于 macOS 上的程序，也可以写成独立运行的 Applet。它与 macOS 深度集成，可以进行很多操作。恰好，作为一个编程语言，ChatGPT 也学习了其大量的资料，因此可以很方便的让 ChatGPT 来帮我们补全程序，而我们只需要提供思路即可。

### 选中的内容

我们可以直接通过复制（选中的内容）指令，将选中的内容存在剪切板中。而为了不破坏系统剪切板的内容，我们将其放在 Keyboard Maestro 的自定义剪切板中。如图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sFly8Ozc9xr2kvcvKgZCUWp2qF4crZvLcDcAO1dnL2ko/https://cdn.sspai.com/2024/01/14/fd0382b1e66effbe73da00de83ba1aa8.png)

### 获取窗口的截图

我们可以直接调用 Keyboard Maestro 中的指令 「Screen Capture Front Window」即可。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syTegd5j9EkuI09mBXRZwENrUl9IiZb4UXZ1HWjs2bT4/https://cdn.sspai.com/2024/01/14/ce45a0672809e8615a3caf20df70d87c.png)

### 获取窗口的名称及其对应软件的名称

这两个名称用 Keyboard Maestro 获取不是很方便，因此我选用了 Apple Script。

获取窗口名称的程序是：

```applescript
tell application "System Events"
	set frontApp to first application process whose frontmost is true
	set frontAppName to name of frontApp
	tell process frontAppName
		set windowTitle to name of front window
	end tell
end tell

return windowTitle
```

获取对应软件名称的程序是：

```applescript
tell application "System Events"
	set frontAppName to name of first application process whose frontmost is true
end tell

set oldDelimiters to AppleScript's text item delimiters
set AppleScript's text item delimiters to " "
set textItemList to text items of frontAppName
set AppleScript's text item delimiters to ""
set frontAppNameNoSpaces to textItemList as string
set AppleScript's text item delimiters to oldDelimiters

return frontAppNameNoSpaces
```

随后，两个返回的变量保存在 Macros 的变量中：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sL45rypyP5X_3mxqVOBk10d47aA4AuyogA3K6fRgPGpE/https://cdn.sspai.com/2024/01/14/8934aca08842e0d1e62cd74e0f6696ad.png)

### 产生的一些问题

在写接下来的指令时，我就按照：「新建备忘录 —— 一点一点粘贴对应的东西」这个流程来操作，就如图所示：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s__nxQ_c3RCRqof4O9fysEbvR9ocnqwG-gWIujvNOAlg/https://cdn.sspai.com/2024/01/14/ff7a619c60bb1c2cc99f5a64d6d0f15a.png)

但当实际操作时，我发现它会在一种情况下报错：当备忘录已经打开一个新建的备忘录，但没有任何输入的内容时，就无法选中 文件——新建备忘录 ，如图所示：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9FPDwlcuygRxcvHyD-KAyL6lGJ--jbfkrzjrRPJ-owE/https://cdn.sspai.com/2024/01/14/c84e5d5af4b0453c368a9942af1bc317.png)

这种情况就会导致程序的报错。而为了解决这个问题，我使用了 "Try … Catch …" 指令，先默认没有新建的备忘录进行操作。如果发现有新建的备忘录，那么就直接粘贴内容。解决了这个问题。

## 下载链接

GitHub 链接：[Link](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FMarvinCui%2FKeyboard-Maestro-Macros-by-Marvin%2Fblob%2Fmain%2FSave%2520to%2520Notes%2FSave%2520to%2520Notes.kmmacros)

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现🚀

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

[![MarvinCui](https://proxy-prod.omnivore-image-cache.app/0x0,s7gxHz90hr9YzNGa_JvfVezFTWHaulPABXv3uMWYv7WQ/https://cdn.sspai.com/2024/01/08/4effa81b8a2ccbb74957321e503a3e85.JPG?imageMogr2/auto-orient/quality/95/thumbnail/!84x84r/gravity/Center/crop/84x84/interlace/1)](https://sspai.com/u/marvin%5Fcui/updates)

 😴 Human-shaped Slacker /  Hardcore Apple Enthusiast / 🧠 Neuroscience&Psychology / 🌈 Gay

---

