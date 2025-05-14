---
id: ac4795fe-f776-4817-9076-65cb09d8f460
title: |
  群晖 Active Backup for Business 套件新增 macOS 整机备份功能，目前已支持个人电脑、物理服务器、文件服务器、虚拟机、NAS 备份 - 大家的板块 / 群晖 - 小众软件官方论坛
author: |
  unknown
date_saved: 2024-03-08 23:29:02
date_published: 2022-12-31 19:00:00
draft: true
---

# 群晖 Active Backup for Business 套件新增 macOS 整机备份功能，目前已支持个人电脑、物理服务器、文件服务器、虚拟机、NAS 备份 - 大家的板块 / 群晖 - 小众软件官方论坛
#Omnivore

[Read on Omnivore](https://omnivore.app/me/active-backup-for-business-mac-os-nas-18e2178b338)

[Read Original](https://meta.appinn.net/t/topic/39432)

date_saved: 2024-03-08 23:29:02

date_published: 2022-12-31 19:00:00

--- 

# Full Content: 

原始链接在： [群晖 Active Backup for Business 套件新增 macOS 整机备份功能，目前已支持个人电脑、物理服务器、文件服务器、虚拟机、NAS 备份 - 小众软件](https://www.appinn.com/active-backup-for-business-2-5-0-12631/)  
  
**==Active Backup for Business==** ==是著名的 NAS 提供商====[群晖](https://www.appinn.com/tag/%E7%BE%A4%E6%99%96/)====自带的免费系统套件，它可以针对个人电脑（Windows、Linux、macOS）进行整机备份，还可以对==**==物理服务器==**==、==**==文件服务器==**==、==**==虚拟机==**==、==**==NAS==** ==进行备份，支持多版本、计划任务、增量备份、数据压缩、数据加密等功能。==@[Appinn](https://www.appinn.com/active-backup-for-business-2-5-0-12631/)

前几日更新 2.5.0-12631 后，增加了对 macOS 的支持（macOS Catalina 10.15.7 以后），以及对 Windows Server 2022 Hyper-V 的支持，DSM 6/7 均适用。

[![](https://proxy-prod.omnivore-image-cache.app/690x300,sWkQO4_HuHe_ykkh9mBdaN1KR06mgF2kXrYVsMi1u96s/https://meta-cdn1.appinn.com/uploads/default/optimized/3X/3/d/3db5b2e456bda53a9ad5a10040e42b68fccc236c_2_690x300.jpeg)](https://meta-cdn1.appinn.com/uploads/default/original/3X/3/d/3db5b2e456bda53a9ad5a10040e42b68fccc236c.jpeg "active-backup-for-business.jpg")

这并不是一个独占性的解决方案，用户依旧可以通过 macOS 自带的备份工具**时间机器**（TimeMachine）将系统备份至群晖 NAS 之中。

## Active Backup for Business 2.5.0-12631更新日志

在[更新日志](https://www.synology.cn/zh-cn/releaseNote/ActiveBackup)中，Active Backup for Business 新增了以下功能：

1. 新增支持下列 macOS 版本：  
   * macOS Catalina 10.15.7  
   * macOS Big Sur 11  
   * macOS Monterey 12  
   * macOS Ventura 13
2. 新增支持 Windows Server 2022 Hyper-V。
3. 新增支持自动发现新虚拟机，并将其加入备份任务。
4. 新增支持 Linux 核心 5.15 与以下版本：  
   * Ubuntu: 22.04

所有功能针对 DSM 7 与 DSM 6，老版本的 DSM 也可以使用，还是非常不错的。

Active Backup for Business 针对不同设备有着不同的要求，比如个人计算机，需要在电脑中安装一个代理程序，就可以随时开启备份任务了：

| 个人计算机      | 物理服务器               | 文件服务器             | 虚拟机      |                                 |
| ---------- | ------------------- | ----------------- | -------- | ------------------------------- |
| 支持的备份来源    | 整台设备系统存储空间自定义存储空间   | 整台设备系统存储空间自定义存储空间 | 文件和/或文件夹 | 整台设备                            |
| 支持的平台/协议   | Windows、Linux、macOS | Windows Linux     | rsyncSMB | VMware vSphereMicrosoft Hyper-V |
| 备份来源安装代理程序 | 必需                  | 必需                | 不需要      | 不需要                             |

具体功能（[表格来源](https://kb.synology.cn/zh-cn/DSM/tutorial/What%5Fare%5Fthe%5Fdifferences%5Fof%5Feach%5Fdevice%5Ftype%5Fin%5FActive%5FBackup%5Ffor%5FBusiness#xcDKgdvl44)）：

### 备份

| 个人计算机    | 物理服务器        | 文件服务器    | 虚拟机                   |          |
| -------- | ------------ | -------- | --------------------- | -------- |
| 备份版本     | 多版本          | 多版本      | 多版本镜像增量               | 多版本      |
| 备份计划     | 手动以时间为单位事件触发 | 手动以时间为单位 | 手动以时间为单位              | 手动以时间为单位 |
| 备份窗口     | 是            | 是        | 否                     | 是        |
| 应用程序感知备份 | 否            | 是        | 是                     | 是        |
| 重复数据删除   | 全局重复数据删除     | 全局重复数据删除 | SMB：块级重复数据删除rsync：不支持 | 全局重复数据删除 |
| 增量备份     | 是            | 是        | SMB：不支持rsync：块级增量备份   | 是        |
| 数据传输压缩   | 是            | 是        | SMB：否rsync：是          | 是        |
| 数据传输加密   | 是            | 是        | SMB：否rsync：是          | 是        |
| 备份目的地加密  | 是            | 是        | 备份到加密共享文件夹            | 是        |
| 备份验证     | 否            | 是        | 否                     | 是        |

### 还原

| 个人计算机                                  | 物理服务器 | 文件服务器 | 虚拟机 |   |
| -------------------------------------- | ----- | ----- | --- | - |
| 整台设备                                   | 是     | 是     | 否   | 是 |
| 存储空间                                   | 是     | 是     | 否   | 否 |
| 文件/文件夹                                 | 是     | 是     | 是   | 是 |
| 即时还原到 Microsoft Hyper-V/VMware vSphere | 否     | 是     | 否   | 是 |
| 即时还原到 Synology Virtual Machine Manager | 否     | 是     | 否   | 是 |

相对于系统备份，使用 Active Backup for Business 的最大优势在于「管理员可以通过集中化管理控制台单独部署所需保护」。

即远程控制一切，比如家里有好多台电脑，你的、父母的、孩子的，甚至办公室的，只需要通过 Active Backup for Business 就能在一处管理所有备份与恢复了，非常方便。

## 获取

目前已经可以在 DSM 的**套件中心**自动更新 Active Backup for Business 套件，而不同操作系统所需的代理程序 Active Backup Business Agent 也会在添加个人计算机设备的时候出现下载链接，当然也有一个群晖官网提供的[下载页面链接 2](https://archive.synology.cn/download/Utility/ActiveBackupBusinessAgent/2.5.0-2631)。

---

原文：https://www.appinn.com/active-backup-for-business-2-5-0-12631/

### 另外，暂不支持排除文件

Active Backup for Business 不支持排除指定文件、文件夹功能，计算机，物理服务器和虚拟机备份任务当前仅支持备份整个设备。

* #### created
* [ last reply ](https://meta.appinn.net/t/topic/39432/3)
* 1.0k  
#### views
* 2  
#### users

我之前一直用来备份搬瓦工的机器，因为上门放了个网站，但是后来发现，小鸡经常要 CPU 超负荷，就删了，而且，搬瓦工访问家宽经常被阻断。

---

## Highlights

> **Active Backup for Business** 是著名的 NAS 提供商[群晖](https://www.appinn.com/tag/%E7%BE%A4%E6%99%96/)自带的免费系统套件，它可以针对个人电脑（Windows、Linux、macOS）进行整机备份，还可以对**物理服务器**、**文件服务器**、**虚拟机**、**NAS** 进行备份，支持多版本、计划任务、增量备份、数据压缩、数据加密等功能。 [⤴️](https://omnivore.app/me/active-backup-for-business-mac-os-nas-18e2178b338#b6d94895-7db8-402a-83c5-dfb9a91ca040)  ^b6d94895

