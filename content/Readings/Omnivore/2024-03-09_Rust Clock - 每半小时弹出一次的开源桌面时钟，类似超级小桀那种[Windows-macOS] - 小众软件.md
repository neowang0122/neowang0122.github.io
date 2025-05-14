---
id: e9d02e72-18ed-474c-bfa5-dd19c04aed24
title: |
  Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] - 小众软件
author: |
  青小蛙
date_saved: 2024-03-09 00:19:03
date_published: 2023-06-02 23:25:23
draft: true
---

# Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/rust-clock-windows-mac-os-18e21a67d5c)

[Read Original](https://www.appinn.com/rust-clock/)

date_saved: 2024-03-09 00:19:03

date_published: 2023-06-02 23:25:23

--- 

# Full Content: 

**Rust Clock** 是一款小巧的桌面时钟，它可以每半个小时弹出一次，还有一个倒计时功能。@[Appinn](https://www.appinn.com/rust-clock/)

![Rust Clock - 每半小时弹出一次的开源桌面时钟[Windows]](https://proxy-prod.omnivore-image-cache.app/1608x700,sDp1bQflec-OWWVtN_lDWbcdjQIxt4viRNuVnHHFcLA0/https://static1.appinn.com/images/202306/rust-clock.jpg!o "Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] 1")

来自[**发现频道**](https://meta.appinn.net/c/faxian/10)，手搓大佬 @Hoothin 作品。

最早，这个题目来自[论坛](https://meta.appinn.net/)的热门问题：[Windows有简洁美观的整点报时/提醒软件推荐吗？ ](https://meta.appinn.net/t/topic/43842)[](https://meta.appinn.net/t/topic/43842)[](https://meta.appinn.net/c/wen-ti-qiu-zhu/7)

@Y\_z 同学想找一款：「类似超级小桀这样的，好像是他自己写的」

![Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] 1](https://proxy-prod.omnivore-image-cache.app/423x123,saRwZJDQ2car9gU9pbb6SBXSxfkm1uP1hmo7LN3CqB_E/https://meta-cdn1.appinn.com/uploads/default/original/3X/6/6/66b8df8d179b81940c29abd6494606bed859e219.gif "Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] 2")

然后就有很多人推荐了应用。其中有几位自己写了，比如：

就是一个每隔一段时间在左上角弹出的时钟，其实挺无用的，突然弹出来就……很烦人。

配置说明在 Github，可以改成每一个 **45 分**弹出，或者每一个 **20 秒**弹出，或者多个固定时间点弹出，或者干脆禁用弹出，就单纯当个桌面时钟。

把配置文件里的 sound 注释前的#号取消掉就能增加提示音，可以自己找个提示音换上。

单击叉叉是关闭面板，右键点击托盘图标退出。

![Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] 2](https://proxy-prod.omnivore-image-cache.app/493x243,sWoC4ZBFNltaUoAxpeM-1Fz9hpsH0aeaPc5-lVl63R2w/https://meta-cdn1.appinn.com/uploads/default/original/3X/1/9/19ab633ad085c50cf0564aaaebfbd6751950ba99.gif "Rust Clock - 每半小时弹出一次的开源桌面时钟，类似超级小桀那种[Windows/macOS] 3")

看到 [Windows有简洁美观的整点报时/提醒软件推荐吗？](https://meta.appinn.net/t/topic/43842/) 这个话题，正好需要一个 egui 的练手目标。就拿帖子里的需求来祭旗了。实现了托盘/提示音/鼠标穿透/任务栏隐藏。

写起来挺别扭，winit 啥都没有，缓动还需要自己写，不能直接操作窗体 api，不得已魔改了 egui 库，托盘还是去 tauri 里找的库。虽然支持跨平台，但没兴趣花时间写 mac 或者 linux 端的了。源码以 MIT 协议开源，需要的话可以自己 build，但其他平台一些特性可能不兼容。

## 获取

* [发现频道](https://meta.appinn.net/t/topic/43963)
* [GitHub](https://github.com/hoothin/RustClock/)

@Hoothin 开发频繁，昨天才更新 0.1.3 版本，有功能需求的可以去发现频道提。

---

原文：https://www.appinn.com/rust-clock/

---

