---
id: 3c1890ee-79b8-422f-a5f0-854888dabda3
title: |
  如何在两台 Synology NAS（DSM 6.0 及更高版本）之间迁移数据？ - Synology 知识中心
author: |
  Synology Inc.
date_saved: 2024-03-13 09:59:26
draft: true
---

# 如何在两台 Synology NAS（DSM 6.0 及更高版本）之间迁移数据？ - Synology 知识中心
#Omnivore

[Read on Omnivore](https://omnivore.app/me/synology-nas-dsm-6-0-synology-18e381c5c39)

[Read Original](https://kb.synology.cn/zh-cn/DSM/tutorial/How_to_migrate_between_Synology_NAS_DSM_6_0_and_later)

date_saved: 2024-03-13 09:59:26


--- 

# Full Content: 

部分文章为机器自动翻译，文中可能有文法错误或语义模糊之处。若本文目前只有英文版，可能近期就会提供翻译。

## 目的

如果您想将数据、套件和系统设置从旧 NAS 迁移到新 NAS，基于产品型号与设置的不同，Synology 提供以下三种迁移方法：[1](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#PLYAi6gTC2) 

* [使用 Migration Assistant 迁移](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FMigration%5FAsst)
* [HDD 硬盘迁移](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHDD)
* [使用 Hyper Backup 迁移](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHyper%5FBackup)

本文介绍了三种迁移方法的差异及限制，以帮助您选择最合适的方法。本文将使用以下术语：

* **来源 Synology NAS 设备**：需要转出数据的 Synology NAS。
* **目的地 Synology NAS 设备**：被转入数据的 Synology NAS。

注意：

1. 不支持在 Synology NAS 与 IP SAN 之间进行迁移。
2. 如果您仅需将文件或文件夹复制到另一台 Synology NAS，直接使用[共享文件夹同步](https://kb.synology.cn/DSM/help/DSM/AdminCenter/application%5Fbackupserv%5Fsharedfoldersync)、[SMB](https://kb.synology.cn/DSM/help/DSM/AdminCenter/file%5Fwinmacnfs%5Fwin) 或 [FTP](https://kb.synology.cn/DSM/help/DSM/AdminCenter/file%5Fftp%5Fdesc)即可。

## 环境

* 本文适用于 **DSM 6.0 或以上版本**。如果您使用较旧版本的 DSM，请改为参阅[本文](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F5%5F0%5Fand%5Flater)。
* 执行迁移需要 **[Web Assistant](https://find.synology.com/)**（或最新版本的 **Synology Assistant**）。
* 建议迁移到硬件规格更高的 Synology NAS，以确保所有套件和服务在迁移后都能正常工作。请参阅目的地 NAS 的[产品数据表](https://www.synology.cn/support/download#docs)以了解 DSM 规格。  
   * 不建议将硬盘从较新型号迁移到较旧型号或[已停产的型号](https://www.synology.cn/products/status?status=Phase+Out)。如果执行此类迁移则很可能会在过程中丢失所有 DSM 配置和套件设置。存储空间中的用户数据将保持不变。但共享文件夹配额可能会永久禁用。  
   * 并非所有 Synology NAS 型号都支持相同功能。如果目的地 NAS 不支持下列服务，则无法使用这些服务：  
         * [RAID F1](https://kb.synology.cn/DSM/tutorial/Which%5FSynology%5FNAS%5Fmodels%5Fsupport%5FRAID%5FF1) / [SHR (SHR-2)](https://kb.synology.cn/DSM/tutorial/Which%5Fmodels%5Fhave%5Flimited%5Fsupport%5Ffor%5FSynology%5FHybrid%5FRAID%5FSHR)  
         * 存储空间上的[Btrfs](https://kb.synology.cn/DSM/tutorial/Which%5FSynology%5FNAS%5Fmodels%5Fsupport%5Fthe%5FBtrfs%5Ffile%5Fsystem)文件系统  
         * iSCSI LUN/virtualization  
         * [SSD缓存](https://kb.synology.cn/DSM/tutorial/Which%5FSynology%5FNAS%5Fmodels%5Fsupport%5FSSD%5Fcache)/TRIM  
         * [存储空间加密](https://kb.synology.cn/DSM/tutorial/Which%5Fmodels%5Fsupport%5Fencrypted%5Fvolumes)  
         * [WriteOnce和不可变快照](https://kb.synology.cn/DSM/tutorial/which%5Fsynology%5Fnas%5Fmodels%5Fsupport%5FWriteOnce%5Fand%5Fsecure%5Fsnapshots)  
         * 外接硬盘上的 HFS+ 读/写  
         * 专为特定Synology NAS设计的套件
* 本文提及的迁移方法可让您保留大部分的数据。但是，**强烈建议**在开始之前备份以下数据：

| 项目                                     | 备份方法                                                                                                                                                 |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 共享文件夹和所选套件                             | 从**套件中心**下载 **Hyper Backup**。启动 **Hyper Backup**，单击**创建**图标 > **数据备份任务**。按照向导的说明执行备份。                                                                |
| 系统配置                                   | 前往**控制面板** \> **更新和还原** \> **配置备份**，然后单击**立即备份**以备份以下配置： 用户和群组 工作群组、域和 LDAP 文件共享服务（即 SMB、AFP、NFS 和 FTP） 网络备份 其他（即共享文件夹、用户家目录、密码设置、密码过期、SNMP 和任务计划程序） |
| 许可证密钥                                  | [获许可的套件](https://www.synology.cn/products/licenses)可能具有不同的迁移策略。                                                                                      |
| Photo Station 博客文章（仅适用于 DSM 6.2 及更早版本） | 启动 **Photo Station** \> **设置** \> **博客** \> **备份**，单击**开始**。                                                                                         |

## 目录

## 解决方法

### 选择适合您的正确迁移方法

确定正确的迁移方法至关重要。按照以下诊断树确定最适合的迁移方法。然后，继续查看[迁移方法比较表](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid6)，以确保它是您的最佳选择。

![如何选择正确迁移方法的决策树](https://proxy-prod.omnivore-image-cache.app/0x0,sqqC5tfzho1zJz4N-DZq_bnbuOSH1Oxbron1oi8447qU/https://kb.synology.cn/_images/autogen/How_to_migrate_between_Synology_NAS_DSM_6_0_and_later/chs.jpg)

### 迁移方法比较表

下表比较了这三种方法。各篇文章中提供了其他详细信息。开始之前，请确保您完全了解每种迁移方法的限制。

#### 通用规格

| |  [Migration Assistant](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FMigration%5FAsst) | [HDD 迁移](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHDD)                                                                                                                                                                                                                                                                                                                                       | [Hyper Backup](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHyper%5FBackup)                                                                                                                                                                                 |                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 描述                                                                                                                                           | 通过将系统配置、套件和数据从来源 NAS 克隆到目的地 NAS 进行迁移                                                                                                                                                                                                                                                                                                                                                                                                                  | 从来源 NAS 手动取出硬盘并将其插入目的地 NAS                                                                                                                                                                                                                                                                                       | 在来源 NAS 上通过 Hyper Backup 备份数据并在目的地 NAS 上使用 Hyper Backup 还原数据，从而进行迁移 |
| 使用情形                                                                                                                                         | 如果您希望使用新硬盘和目的地 NAS                                                                                                                                                                                                                                                                                                                                                                                                                                    | 如果来源 NAS 损毁[2](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid50) 如果您希望继续使用相同硬盘 如果您希望迁移硬盘而不考虑型号限制                                                                                                                            | 如果您希望在目的地 NAS 上使用新文件系统 如果其他两种方法不合适                                  |
| 优点                                                                                                                                           | 迁移期间仍可使用服务 停机时间非常短                                                                                                                                                                                                                                                                                                                                                                                                                                    | 简单 停机时间较短 可通过使用旧硬盘来节省资金 全面的系统和数据迁移                                                                                                                                                                                                                                                                               | 更安全 可选的数据和设置迁移 允许更改文件系统                                             |
| 缺点                                                                                                                                           | [型号限制](https://kb.synology.cn/DSM/tutorial/Which%5FSynology%5FNAS%5Fmodels%5Fdoes%5FMigration%5FAssistant%5FSupport)。如果来源和目的地 NAS 的型号不受支持，则改为使用 [Hyper Backup](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHyper%5FBackup) DSM 版本限制 目的地 NAS 上需要更大的存储池[1](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid90) | [限制](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid7) [HDD/SSD 兼容性限制](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid80) 无法更改存储池和存储空间设置 | 无法迁移某些套件设置 迁移时间较长 需要更长的时间，并且需要备份数据大小两倍的空间                           |

#### 系统相关规格

| |  [Migration Assistant](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FMigration%5FAsst) | [HDD 迁移](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHDD) | [Hyper Backup](https://kb.synology.cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5FHyper%5FBackup)                                                                                                                                                                                                                     |                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| DSM 版本                                                                                                                                       | 目的地 NAS 上的 DSM 版本必须与来源 NAS 上的版本相同或更新。迁移之后，目的地 NAS 上的 DSM 版本会保持不变                                                | 迁移之后，目的地 NAS 会保留两台 NAS 之间较新的 DSM 版本。迁移之前，请确保目的地 NAS 支持所述的 DSM 版本[3](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid30) [4](https://kb.synology.cn/zh-cn/DSM/tutorial/How%5Fto%5Fmigrate%5Fbetween%5FSynology%5FNAS%5FDSM%5F6%5F0%5Fand%5Flater#x%5Fanchor%5Fid9) | 目的地 NAS 上的 DSM 版本必须与来源 NAS 上的版本相同或更新（例如，不允许从运行 DSM 7.0 的 DS920+ 迁移到运行 DSM 6.2 的 DS920+） |
| 文件系统                                                                                                                                         | 无法更改                                                                                                            | 目的地 NAS 必须支持所需文件系统。如果不支持，则无法装载存储空间，并且无法访问存储在存储空间上的数据                                                                                                                                                                                                                                                                                                 | 可以更改                                                                                    |
| 存储类型                                                                                                                                         | 可以根据目的地 NAS 上的可用硬盘配置存储池和 RAID 类型，但无法更改存储空间的文件系统                                                                 | 存储池和存储空间的设置将保持不变                                                                                                                                                                                                                                                                                                                                     | 可以重新配置存储池和存储空间                                                                          |
| 迁移的项目                                                                                                                                        | 数据（存储空间和块级 LUN）、所有套件和大多数系统配置                                                                                    | 数据、所有套件和大多数系统配置                                                                                                                                                                                                                                                                                                                                      | 所选数据、所选套件以及配置备份支持的系统配置                                                                  |

### HDD 迁移限制

#### 型号限制

#### 来源/目的地型号配对

#### HDD/SSD 兼容性

#### SSD 缓存

注意：

1. 如果符合以下任何一种情形，即使来源设备和目的地设备具有**相同的硬盘数量和容量**，您也可能**无法**迁移。请在目的地设备上改为使用**更多硬盘或容量更大的硬盘**来创建较大的存储池。  
   * 来源设备和目的地设备在**存储管理器**中具有不同的 **RAID 类型**和**支持多个存储空间**设置。  
   * 来源设备上的存储池是在 **DSM 7.0 或较早版本**中创建的，但目的地设备是全新安装的 **DSM 7.1 或以上版本**。  
   * 来源设备上的存储池是在 **DSM 7.0 或较早版本**中创建的，但目的地设备运行的是 **DSM 7.1 或以上版本**，且通过**控制面板** \> **更新和还原** \> **系统重置**执行了**恢复出厂设置**。
2. 当来源 NAS 已损毁时，如果您未根据建议先移除 SSD 缓存便强制执行迁移，则迁移之后将无法访问存储空间中的数据。
3. 例如，由于 DS1010+ 不支持 DSM 6.2，因此您无法将硬盘从运行 DSM 6.2 的 DS1513+ 迁移到以前安装了 DSM 5.2 的 DS1010+。
4. 始终将来源 NAS 上的套件和 DSM 版本更新为最新可用版本。
5. 建议迁移到硬件规格更高的 Synology NAS，以确保所有套件和服务在迁移后都能正常工作。请参阅目的地 NAS 的[产品数据表](https://www.synology.cn/support/download#docs)以了解 DSM 规格。
6. 如果来源 NAS 当前使用 RAID F1，请确保[目的地 NAS 支持 RAID F1](https://kb.synology.cn/DSM/tutorial/Which%5FSynology%5FNAS%5Fmodels%5Fsupport%5FRAID%5FF1)。
7. M.2 SATA 和 M.2 NVMe 是不同类型的 SSD。请参阅[本文](https://kb.synology.cn/DSM/tutorial/Which%5FSynology%5FNAS%5Fmodels%5Fsupport%5FSSD%5Fcache)以了解更多信息。

---

