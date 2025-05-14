---
id: 0c1b624c-9824-11ee-9673-871bac8077e8
title: |
  API Testing v0.0.15 为 29.6 K 的知名开源建站工具 Halo 提供 E2E - V2EX
author: |
  unknown
date_saved: 2023-12-11 05:33:28
date_published: 2023-12-11 05:33:28
draft: true
---

# API Testing v0.0.15 为 29.6 K 的知名开源建站工具 Halo 提供 E2E - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/api-testing-v-0-0-15-29-6-k-halo-e-2-e-v-2-ex-18c58ef044a)

[Read Original](https://www.v2ex.com/t/999469)

date_saved: 2023-12-11 05:33:28

date_published: 2023-12-11 05:33:28

--- 

# Full Content: 

`atest` 发布 `v0.0.15`

`atest` 是致力于帮助开发者持续保持高质量 API 的开源接口工具。

你可以在命令行终端或者容器中启动：

```angelscript
docker run -p 8080:8080 linuxsuren/api-testing:v0.0.15

```

## 亮点

在本次版本发布之前，成功地为以下开源项目实现了 API 的 E2E 测试：

* [halo-dev/halo](https://github.com/halo-dev/halo/pull/4892)，一款 Java 实现的开源建站工具
* [dromara/hertzbeat](https://github.com/dromara/hertzbeat/pull/1387)，一款监控系统

非常期待 `atest` 可以帮助更多的项目持续提升、保持 API 稳定性。

## 主要的新功能

* 支持复用 Cookies （简化了基于 Cookie 做会话认证） (#301) @LinuxSuRen
* 增加了基于 Docker 的应用性能监控 (#300) @LinuxSuRen
* 支持以 Comment 的方式发送测试报告到 GitHub PR (#298) @LinuxSuRen
* UI 布局重构 (#297) @LinuxSuRen
* 增加对 OAuth 认证的支持（包括 Device 模式） (#290) @LinuxSuRen
* 支持设置 gRPC 的元数据 (#282) @LinuxSuRen
* 增加了新的后端存储：Mongodb (#278) @LinuxSuRen

## 致谢

本次版本发布，包含了以下 2 位 contributor 的努力：

* [@im-jinxinwang](https://github.com/im-jinxinwang)
* [@LinuxSuRen](https://github.com/LinuxSuRen)

## 相关数据

下面是 `atest` 截止到 `v0.0.15` 的部分数据：

* watch 7
* fork 23
* star 123 (+19)
* contributor 13 (+1)
* 二进制文件下载量 1.3k (+0.2k)
* 部分镜像 2.2k
* 单元测试覆盖率 82% (-6%)

想了解完整信息的话，请访问 <https://github.com/LinuxSuRen/api-testing/releases/tag/v0.0.15>

---

