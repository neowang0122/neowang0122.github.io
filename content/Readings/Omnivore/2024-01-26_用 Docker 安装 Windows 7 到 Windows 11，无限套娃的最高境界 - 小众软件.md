---
id: b93a2212-bc49-11ee-93e0-ff3dbfcef076
title: |
  用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 - 小众软件
author: |
  青小蛙
tags:
  - RSS
date_saved: 2024-01-26 05:01:05
date_published: 2024-01-26 05:01:05
draft: true
---

# 用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/docker-windows-7-windows-11-18d45d3e18f)

[Read Original](https://www.appinn.com/install-windows-in-docker/)

date_saved: 2024-01-26 05:01:05

date_published: 2024-01-26 05:01:05

--- 

# Full Content: 

**dockur/windows** 是一个可以在 Docker 中运行从 Windows 7 到 Windows 10、11 系统的开源项目，然后通过浏览器访问这台套娃 Windows 系统。需要大内存、KVM 支持。@[Appinn](https://www.appinn.com/install-windows-in-docker/)

![用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界](https://proxy-prod.omnivore-image-cache.app/1608x700,sHEmuUQWAfzQjI_RVmaHya9faKpMBuMuDOU6NgPd8UWs/https://www.appinn.com/wp-content/uploads/2024/01/Appinn-feature-images-66.jpg "用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 1")

## 万物皆可 Docker

三大操作系统：Windows、macOS、Linux。用 Docker 运行 Linux 是它的老本行，大多数 Docker 镜像都基于 Linux。

在 Docker 运行 macOS 也不是不行，比如：<https://meta.appinn.net/t/topic/47790>

现在，在 Docker 运行 Windows 也来了。

## dockur/windows

**dockur/windows** 项目运行起来非常简单，一句话：

docker run -it --rm -p 8006:8006 --device=/dev/kvm --cap-add NET_ADMIN --stop-timeout 120 dockurr/windows

默认情况下，会安装 Windows 11，并且会分配 2 个 CPU 核心和 4 GB 内存，以及 64GB 硬盘大小。

如果你要安装其他系统，只需要在命令中添加 `-e win10` 即可：

* `win11` \= Windows 11
* `win10` \= Windows 10
* `win81` \= Windows 8.1
* `win22` \= Windows Server 2022
* `win19` \= Windows Server 2019
* `win16` \= Windows Server 2016
* `tiny11` \= Tiny 11 (下载很慢)
* `win7` \= Windows 7 (下载也很慢)

上述系统，下载很慢的来自 Archive 网站，其他的从微软官网下载镜像。

或者，你可使用自己的系统镜像：

` -e VERSION: "https://example.com/win.iso"`

也可以使用本地镜像：重命名 custom.iso 并将其放入空的 `/storage` 文件夹中以跳过下载。

## 使用

安装之后，就可以在浏览器打开 IP:8006 进行使用了

### 实测

截止写到此时此刻，青小蛙尝试安装 Windows 11 和 10 失败，因为内存不够，尝试安装 Win 7 失败，因为下载失败了：

![用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 1](https://proxy-prod.omnivore-image-cache.app/508x130,sdqnzJWKfDNmWCu1EOv-nDCbiwtUiND1nQSzfeaLnHBY/https://www.appinn.com/wp-content/uploads/2024/01/Appinn-2024-01-26-17.45.38@2x.jpg "用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 2")

测试 Win 8.1，成功了：

![用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 2](https://proxy-prod.omnivore-image-cache.app/1258x952,sq-eZ8rGGaMy4mJoh_HPwPQnMiq19zXHDlzphQoQ0P-0/https://www.appinn.com/wp-content/uploads/2024/01/Appinn-2024-01-26-17.52.59@2x.jpg "用 Docker 安装 Windows 7 到 Windows 11，无限套娃的最高境界 3")

虽然，我也不知道这个时候装一个 Windows 8.1 有什么用…

## 法律问题

> 是的，该项目仅包含开源代码，不分发任何受版权保护的材料。它也不试图规避任何版权保护措施。因此，根据所有适用的法律，该项目将被视为合法。

## 获取

* [GitHub](https://github.com/dockur/windows)

---

原文：https://www.appinn.com/install-windows-in-docker/

## [](https://github.com/dockur/windows#disclaimer)

---

