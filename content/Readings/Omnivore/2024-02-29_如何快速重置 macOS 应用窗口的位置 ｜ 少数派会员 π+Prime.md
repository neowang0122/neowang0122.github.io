---
id: f95227bc-d721-11ee-9690-2f08a3981bb3
title: |
  如何快速重置 macOS 应用窗口的位置 ｜ 少数派会员 π+Prime
author: |
  广陵止息
tags:
  - RSS
date_saved: 2024-02-29 07:03:36
date_published: 2024-02-29 07:03:36
draft: true
---

# 如何快速重置 macOS 应用窗口的位置 ｜ 少数派会员 π+Prime
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mac-os-p-prime-18df5c1e33a)

[Read Original](https://sspai.com/prime/story/reset-macos-window-position)

date_saved: 2024-02-29 07:03:36

date_published: 2024-02-29 07:03:36

--- 

# Full Content: 

macOS 的应用能记住并自动恢复上次打开的尺寸和位置，但「好记性」有时也会变成麻烦。如何快速让窗口回到原始的默认位置呢？

---

## 背景

「记忆应用的使用状态」一直是 macOS 追求的交互设计目标。从 Macintosh 时代开始，应用窗口就「学会」了记住自己每次打开时所处的位置，并在下次打开时自动恢复。Finder、Keynote 这类多窗口应用中，每个窗口还会分别记住自己的位置。

这种设计背后其实是一种隐藏的「拟物」思想：通过让窗口与其空间位置关联起来，提高熟悉感和效率。

但「好记性」有时也会变成麻烦。设想以下几种不算少见的情景：

1. 在插拔外接显示器时，由于分辨率和桌面数量的变化，很多窗口可能被自动调整到一个难用的尺寸和位置，甚至落到显示区域之外；
2. 在拖拽调整窗口尺寸时，可能因为手滑或不慎双击到边框，让窗口变成一个很别扭的比例；
3. 颜色选择、字体选择等小尺寸工具窗口留在上一次调用时的位置，离之后方便的位置相距甚远；
4. 有的场景本身要求保持应用的固定位置，例如 Spotlight 搜索、Alfred 等启动器类工具最适合的就是居中偏上的位置，如果不慎走偏，很容易让人「强迫症」发作。

对此，只有少数应用会在设置中包含重置窗口位置的选项，更多的应用则似乎就「铁了心」要回归自己现有的地盘。对于这种情况，如何快速让窗口回到原始的默认位置呢？

## 快速使用

我们首先提供两种成品解决方案供尝试，具体的原理和编写方法将在后文说明。

### 快捷指令

这是对大多数用户最友好的方法。通过下面的链接下载我们做好的快捷指令：[Reset Window Position](https://www.icloud.com/shortcuts/9f39ba9ca9c34ac39753066d60803fae)

运行时，转到侧边栏的「应用程序」（Applications）文件夹选择需要重置窗口状态的应用即可。（初次运行可能弹出权限求询问框，选择「总是允许」。）

### Shell 脚本

如果你是更喜欢泡在终端里的用户，或者想与其他自动化工具结合使用，这里也提供一个等效的 shell 脚本版本。通过下面的链接下载：[reset-window-position.sh](https://gist.githubusercontent.com/lincolnguang/f95efdef1b76e9c03ef975a0b2307fdd/raw/49211e795adbe313bba03d216c47b76887b3e1a8/reset.sh)

依照 Unix 惯例，这种自制脚本一般可以放在`~/bin` 目录。然后，在在终端执行 `chmod +x ~/bin/reset-window-position.sh` 命令，为其增加执行权限 。

以后运行这个脚本，根据提示即可重置窗口位置。

## 原理

一般情况下，macOS 上应用的窗口大小和位置都会保存在特定的 `plist` 文件里。

`plist` 文件，有时也被称为 property list 文件，是 Apple 在大部分系统中常用的一种文件格式，常用于存储用户的设置和配置信息。在 macOS 应用开发中，`plist` 文件经常用于保存应用程序的配置信息和用户偏好设置，比如前面提到的「窗口大小和位置」这一信息就会保存在软件自己的 `plist` 文件里。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9bxfBlfbpRnwMW62jXG7EFr7y3q0Cp2QBGU4b8D2p9A/https://cdn.sspai.com/2024/02/27/365bc27318d1ea79f91bd7492987a620.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1) 

其中会包含和「窗口大小和位置」有关的信息

所以，很多时候只需要把这段信息从对应的 `plist` 中拿掉就可以还原应用的窗口大小和位置到默认。

阅读信息

全文字数 2394字

阅读本文共需 4分钟

字号选择 

小

中

大

---

