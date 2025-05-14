---
id: 3b207a0a-9847-11ee-aebb-b79f38690acc
title: |
  私有云和多云管理平台 | Cloudpods v3.10.8 正式发布 - V2EX
author: |
  unknown
date_saved: 2023-12-11 07:31:13
date_published: 2023-12-11 07:31:13
draft: true
---

# 私有云和多云管理平台 | Cloudpods v3.10.8 正式发布 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/cloudpods-v-3-10-8-v-2-ex-18c59d598b0)

[Read Original](https://www.v2ex.com/t/999491)

date_saved: 2023-12-11 07:31:13

date_published: 2023-12-11 07:31:13

--- 

# Full Content: 

[![Cloudpods](https://proxy-prod.omnivore-image-cache.app/0x0,sxpHRGfILyzFn3EHPFGfEJitwkmYSJ7DxqEnEY9cxOZ4/https://cdn.v2ex.com/avatar/0a50/ed55/550725_large.png?m=1681990172)](https://www.v2ex.com/member/Cloudpods)

[V2EX](https://www.v2ex.com/)  › [推广](https://www.v2ex.com/go/promotions)

[Cloudpods](https://www.v2ex.com/member/Cloudpods) · 4 小时 28 分钟前 · 42 次点击 

## 总结

本次发布为 v3.10 以来最重要小版本发布，包含三项重大更新：

一、虚拟机部署方式改为采用轻量虚拟机模式。本地私有云部署虚拟机时通过启动轻量虚拟机挂载虚拟机磁盘，实现对虚拟机磁盘操作系统识别和配置文件初始化。相比原来通过宿主机 nbd 内核模块挂载虚拟机磁盘进行部署的方式，摆脱了对宿主机内核的依赖，解决在宿主机环境上 LVM 资源冲突的问题，明显提高虚拟机部署的可靠性。

二、引入 VictoriaMetrics 作为监控存储，并提供手工切换方法替代 influxdb 作为默认监控存储。VirtoriaMetrics 在响应速度和存储空间等方面都有更优异的表现。

三、支持将纳管的 Cloudpods 虚拟机迁移到内置私有云平台，方便多个 Cloudpods 集群的合并整合。

同时，我们对文档的基础框架进行了升级，将文档迁移到更加现代化的 docusaurus 来构建。新版本的文档已经发布，可在 [v2.cloudpods.org](http://v2.cloudpods.org/) 预览。等新版文档内容完善后，将把 Cloudpods 文档站点 URL 切换到新版。

## 功能优化

\[主机\] 使用轻量虚机方式替换 nbd 挂载的部署方式

\[主机\] 优化虚拟机镜像排序及过滤

\[多云\] 云账号只读模式模式支持资源标签单向同步

\[多云\] ZStack 支持同步共享存储

\[多云\] PVE 平台虚拟机支持打开 VNC

## 问题修复

\[主机\] 修复主机列表导出失败问题

\[主机\] 修复主备机切换 host-agent panic 的问题

\[主机\] 修复 SR-IOV 网卡热插拔失败的问题

\[主机\] 修复 SR-IOV 网卡监控数据获取不准确的问题

## 新功能

\[主机\] 支持纳管 Cloudpods 主机迁移到本地

\[监控\] 支持使用 VictoriaMetrics 作为监控后端

## 注意

为了避免升级导致的服务中断，v3.10.8 只会默认部署 VictoriaMetrics ，但不默认启用。需要参考以下文档

<https://v2.cloudpods.org/docs/operations/monitoring/migrating-to-vm/>

实现从 Influxdb 手动迁移切换到 VictoriaMetrics 。从 v3.11 开始将默认启用 VictoriaMetrics 。

虚拟机部署方式默认采用轻量虚拟机方式，但原有采用 nbd 方式的虚拟机部署方式也依然保留，可以通过修改配置切换回去。

原文地址： <https://www.yunion.cn/article/html/20231211.html>

## 其他

[私有云和多云管理平台 | Cloudpods v3.10.7 发布](https://www.yunion.cn/article/html/20231110.html)

[新版发布 | Cloudpods v3.10.6 和 v3.9.14 正式发布](https://www.yunion.cn/article/html/20231013.html)

[新版发布 | Cloudpods v3.10.5 和 v3.9.13 正式发布](https://www.yunion.cn/article/html/20230915.html)

[新版发布 | Cloudpods v3.10.4 和 v3.9.12 正式发布](https://www.yunion.cn/article/html/20230804.html)

[新版发布 | Cloudpods v3.10.3 和 v3.9.11 正式发布](https://www.yunion.cn/article/html/20230707.html)

[新版发布 | Cloudpods v3.10.2 正式发布](https://www.yunion.cn/article/html/20230602.html)

[新品发布 | Cloudpods 3.10 版本上线！](https://www.yunion.cn/article/html/mU2wOJHf.html)

---

