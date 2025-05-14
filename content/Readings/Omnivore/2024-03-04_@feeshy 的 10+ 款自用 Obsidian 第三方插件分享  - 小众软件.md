---
id: 2f50ad4c-da02-11ee-9170-1300d71eb56f
title: |
  @feeshy 的 10+ 款自用 Obsidian 第三方插件分享  - 小众软件
author: |
  青小蛙
tags:
  - RSS
date_saved: 2024-03-04 02:42:03
date_published: 2024-03-04 02:42:03
draft: true
---

# @feeshy 的 10+ 款自用 Obsidian 第三方插件分享  - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9)

[Read Original](https://www.appinn.com/feeshy-obsidian-community-plugins/)

date_saved: 2024-03-04 02:42:03

date_published: 2024-03-04 02:42:03

--- 

# Full Content: 

@**feeshy** 同学在论坛分享了自己正在使用的 Obsidian 第三方插件，包括了第三方同步、不好归类、大纲笔记、任务管理、Zotero 整合、主题几大类，一起来看看。@[Appinn](https://www.appinn.com/feeshy-obsidian-community-plugins/)

![@feeshy 的 10+ 款自用 Obsidian 第三方插件分享 ](https://proxy-prod.omnivore-image-cache.app/1608x700,sov16GHV1DBogrgs3GHumbDsyAVyynr61jgGPErH86WM/https://www.appinn.com/wp-content/uploads/2024/03/Appinn-feature-images-2024-03-04T151918.312.jpg "@feeshy 的 10+ 款自用 Obsidian 第三方插件分享  1")

也欢迎前往分享你自己的插件。

## 自用Obsidian第三方插件分享 by @feesky

原文链接：<https://meta.appinn.net/t/topic/53296>

之前算是轻度的 Obsidian（#[Obsidian](https://www.appinn.com/tag/obsidian/)） 用户，最近把幕布上的笔记都迁移过来了，准备把 [Obsidian](https://obsidian.md/) 当成主力笔记。折腾了一下插件，目前的方案是这样的：

## 同步

虽然直接把本地库放在网盘中就能同步，但移动端由于续航问题，很难找到支持后台同步的网盘客户端——纯苹果生态可以用 iCloud，只要有 Windows/iOS/Android 三系统混用的需求，就很难找到合适的网盘了。

更适合移动端的同步方案是直接在前台的 Obsidian 软件内同步，Obsidian官方的内置同步服务要每月花费8美金，这使得许多用户会选择以下两个==第三方的内置同步方案：==

1. ==[remotely-save](https://obsidian.md/plugins?id=remotely-save)==
2. ==[remotely-sync](https://obsidian.md/plugins?id=remotely-secure)==

==一些说明：==

* ==两插件同源。remotely-save 原作者 fyears 在2022年~2023年有一年半没更新，于是 sboesen fork 了一个新的分支 remotely-sync 进行维护，2024年初 fyears 归来，目前两个项目平行更新==
* ==支持OneDrive / Dropbox / S3 / WebDAV。WebDAV 不建议用免费版坚果云，这两个插件目前的同步方式不是很科学，会消耗大量请求次数。==
* ==首次安装后需要进入插件授权云端存储，以及配置自动同步间隔。==
* ==默认仅同步笔记库，建议勾选“同步配置文件夹”以同步插件和主题。目前配置文件夹只支持增量同步，不支持删除，如果想要卸载插件或者主题，需要在云端和每一台设备分别删除插件文件夹。==

## 不好归类

* [Advanced Tables](https://obsidian.md/plugins?id=table-editor-obsidian) – 所见即所得的表格编辑器
* [Auto Link Title](https://obsidian.md/plugins?id=obsidian-auto-link-title) – 粘贴URL，自动获取网页标题
* ==[Clear Unused Images](https://obsidian.md/plugins?id=oz-clear-unused-images)== ==– 清除库中未被任何md文件内部引用的图片==

## 大纲笔记

* ==[Heading Shifter](https://obsidian.md/plugins?id=obsidian-heading-shifter)== ==– 用==`==Ctrl+====1====~====6==`==，或者==`==Tab==`==、==`==Shift+====Tab==`==调整标题等级，安装后可以获得接近幕布的编辑体验==

==以下两个第三方插件需要修改文件头，建议配合核心插件“模板”使用==

* ==[Enhancing Mindmap](https://obsidian.md/plugins?id=obsidian-enhancing-mindmap)== ==– 为大纲笔记启用树形视图==
* ==[Kanban](https://obsidian.md/plugins?id=obsidian-kanban)== ==– 为大纲笔记启用看板视图==

## 任务管理

* [Tasks](https://obsidian.md/plugins?id=obsidian-tasks-plugin) – 轻松为待办事项添加日期
* [Tasks Calendar Wrapper](https://obsidian.md/plugins?id=tasks-calendar-wrapper) – 在侧面板标签页按日期集中显示库中的全部待办事项

## Zotero 整合

zotero 与 obsidian 的联动有许多实现方式，试用了一圈，==个人最推荐方案3或者方案5==

==方案3将笔记存放在 Obsidian 库，更适合将 Zotero 当作一个单纯的引用工具，以 Obsidian 作为笔记管理核心的使用思路；==

==方案5支持真正的双向同步，可以脱离 Obsidian 运行，Obsidian 只是扮演一个更好用的笔记键入器，更适合想以 Zotero 作为文献管理核心的使用思路。==

| 方案 | Zot插件                                                                       | Ob插件                                                                                                               | 插入引注     | 笔记      | PDF标注   |
| -- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | ------- |
| 1  | [Zotero Better Bibtex](https://github.com/retorquere/zotero-better-bibtex)  | [Zotero Intergration](https://github.com/mgmeyers/obsidian-zotero-integration)                                     | Obsidian | Z→O单向导入 | Z→O单向导入 |
| 2  | [Zotero Better Bibtex](https://github.com/retorquere/zotero-better-bibtex)  | [Citations](https://github.com/hans/obsidian-citation-plugin)                                                      | Obsidian | Z→O单向导入 | ×       |
| 3  | [Zotlit](https://zotlit.aidenlx.top/getting-started/install/zotero)         | [Zotlit](https://zotlit.aidenlx.top/getting-started/install/obsidian)                                              | Obsidian | Z→O单向导入 | Z→O单向导出 |
| 4  | [ZotServer](https://github.com/MunGell/ZotServer)                           | [Zotero Bridge](https://github.com/vanakat/zotero-bridge) \+ [Zotero Link](https://github.com/vanakat/zotero-link) | Obsidian | ×       | ×       |
| 5  | [Zotero Better Notes 4](https://github.com/windingwind/zotero-better-notes) | 不需要                                                                                                                | Zotero   | Z↔O双向同步 | ×       |

P.S. 以上所有 Zotero 插件都是仅限桌面端使用的，暂不支持移动端。

## 主题

最后推荐几个依赖 [Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings) 插件的增强主题：

* 内置了多种配色方案，支持彩虹文件列表与彩虹标题，以及较清晰的表格隔行配色  
   * [Bluemoondragon07/chime-theme](https://github.com/Bluemoondragon07/chime-theme)  
   * [PKM-er/Blue-Topaz](https://github.com/PKM-er/Blue-Topaz%5FObsidian-css)
* 动效比较好看  
   * [subframe7536/obsidian-theme-maple](https://github.com/subframe7536/obsidian-theme-maple)

---

如果你也有想要分享的插件，欢迎前往[分享频道](https://meta.appinn.net/c/discuss-and-share/6)。

原文：https://www.appinn.com/feeshy-obsidian-community-plugins/

---

## Highlights

> 第三方的内置同步方案：
> 
> 1. [remotely-save](https://obsidian.md/plugins?id=remotely-save)
> 2. [remotely-sync](https://obsidian.md/plugins?id=remotely-secure)
> 
> 一些说明：
> 
> * 两插件同源。remotely-save 原作者 fyears 在2022年\~2023年有一年半没更新，于是 sboesen fork 了一个新的分支 remotely-sync 进行维护，2024年初 fyears 归来，目前两个项目平行更新
> * 支持OneDrive / Dropbox / S3 / WebDAV。WebDAV 不建议用免费版坚果云，这两个插件目前的同步方式不是很科学，会消耗大量请求次数。
> * 首次安装后需要进入插件授权云端存储，以及配置自动同步间隔。
> * 默认仅同步笔记库，建议勾选“同步配置文件夹”以同步插件和主题。目前配置文件夹只支持增量同步，不支持删除，如果想要卸载插件或者主题，需要在云端和每一台设备分别删除插件文件夹。 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#b8b7fb56-52fd-42f0-9db4-049a7b564a9e)  ^b8b7fb56

> [Clear Unused Images](https://obsidian.md/plugins?id=oz-clear-unused-images) – 清除库中未被任何md文件内部引用的图片 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#4dbba0fa-337d-4c6f-868e-fae233bb4207)  ^4dbba0fa

> [Heading Shifter](https://obsidian.md/plugins?id=obsidian-heading-shifter) – 用`Ctrl+1~6`，或者`Tab`、`Shift+Tab`调整标题等级，安装后可以获得接近幕布的编辑体验 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#6ba20dd7-b430-42ac-baa1-2aeb1dec78c5)  ^6ba20dd7

> 以下两个第三方插件需要修改文件头，建议配合核心插件“模板”使用
> 
> * [Enhancing Mindmap](https://obsidian.md/plugins?id=obsidian-enhancing-mindmap) – 为大纲笔记启用树形视图
> * [Kanban](https://obsidian.md/plugins?id=obsidian-kanban) – 为大纲笔记启用看板视图 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#58c14b06-1873-420b-a556-6306d7df338d)  ^58c14b06

> ## 任务管理
> 
> * [Tasks](https://obsidian.md/plugins?id=obsidian-tasks-plugin) – 轻松为待办事项添加日期
> * [Tasks Calendar Wrapper](https://obsidian.md/plugins?id=tasks-calendar-wrapper) – 在侧面板标签页按日期集中显示库中的全部待办事项 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#f23a882b-b6a0-47eb-9df8-fc4cfbf0c191)  ^f23a882b

> 个人最推荐方案3或者方案5 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#e447ffff-99c5-4617-950b-7b6b88d26e64)  ^e447ffff

> 方案3将笔记存放在 Obsidian 库，更适合将 Zotero 当作一个单纯的引用工具，以 Obsidian 作为笔记管理核心的使用思路；
> 
> 方案5支持真正的双向同步，可以脱离 Obsidian 运行，Obsidian 只是扮演一个更好用的笔记键入器，更适合想以 Zotero 作为文献管理核心的使用思路。 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#d97b7265-e0c5-4ad8-9c3f-785e8df05fbb)  ^d97b7265

> 3
> 
> [Zotlit](https://zotlit.aidenlx.top/getting-started/install/zotero)
> 
> [Zotlit](https://zotlit.aidenlx.top/getting-started/install/obsidian)
> 
> Obsidian
> 
> Z→O单向导入
> 
> Z→O单向导出 [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#b927fc1c-9436-47c7-9179-7c9e56785eb2)  ^b927fc1c

> 5
> 
> [Zotero Better Notes 4](https://github.com/windingwind/zotero-better-notes)
> 
> 不需要
> 
> Zotero
> 
> Z↔O双向同步
> 
> × [⤴️](https://omnivore.app/me/feeshy-10-obsidian-18e089ab7d9#95c00d46-66df-494d-8088-c258ff57655b)  ^95c00d46

