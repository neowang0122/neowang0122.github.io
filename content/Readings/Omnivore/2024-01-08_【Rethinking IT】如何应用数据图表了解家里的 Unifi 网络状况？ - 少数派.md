---
id: cacd2482-aecc-11ee-a5b2-db7bb54f5591
title: |
  【Rethinking IT】如何应用数据图表了解家里的 Unifi 网络状况？ - 少数派
author: |
  ryoma1836
tags:
  - RSS
date_saved: 2024-01-08 22:40:24
date_published: 2024-01-08 22:40:24
draft: true
---

# 【Rethinking IT】如何应用数据图表了解家里的 Unifi 网络状况？ - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/rethinking-it-unifi-18ced6ebd20)

[Read Original](https://sspai.com/post/85481)

date_saved: 2024-01-08 22:40:24

date_published: 2024-01-08 22:40:24

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSlgksn5xxfFyVy6tuszbMlWMhfiySZWwLu6dozmhU-U/https://cdn-static.sspai.com/ui/img-placeholder.png)

【Rethinking IT】如何应用数据图表了解家里的 Unifi 网络状况？

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

## 1\. 前言

自从之前写了[《【让 IT 更简单】使用 Ubiquiti 全家桶对朋友家进行网络改造》](https://www.chiphell.com/thread-2478211-1-1.html) [《【Rethinking IT】如何结合 Unifi 和 MikroTik 设备打造家庭网络》](https://sspai.com/post/81572)两篇文章后，相信给各位正在用 Unifi 或者打算使用 Unifi 的朋友应该有所帮助。

那么，今天我就换个方向，不再讨论规划和安装 Unifi 网络设备，来研究研究**如何了解家里的 Unifi 设备状况**？

这时候有朋友就会说，不是有 Unifi 官方的 Web 控制台，还有手机 App 嘛。没错，Unifi 在 UI 设计方面确实独树一帜，而且在其 Web 控制台和 App 中，每一个 Unifi 设备和客户端设备都有相应的 **概览** 页面和 **洞察** 页面，上面提供了 Unifi 设备和客户端设备的实时数据。

但是，如果我希望研究一下某一段时间这个 Unifi 设备的历史数据，想看看这段时间该 Unifi 设备的负载情况，稳定性如何，客户端设备何时离线，是不是就无从得知了？

![](https://proxy-prod.omnivore-image-cache.app/0x0,szW1ip_fd71OtgLq9IupGePMh6pEriI6nULJH41lCX3U/https://cdn.sspai.com/2023/12/31/68e9ea76c598a1b7d27830fe68920dd1.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

其实，这个需求看起来就是需要一套 **监控系统** 啦。那么今天，就由我来给大家 **解锁 Unifi 的新玩法**！

由于小弟我从未在互联网大厂 SRE 岗位工作过，只是一个小小乙方的服务器、存储设备上架搬运工，所以以下内容均为自己工作之余，在家利用 Homelab 环境瞎捣腾的，自然不是什么多高大上的东西。如果有什么写得不准确的地方，或者引用了错误的资料，还请各位大佬海涵！

## 2\. 组件介绍

### 2.1\. Prometheus & InfluxDB

#### 2.1.1\. 时序数据库

说 Prometheus 和 InfluxDB 之前，这里需要先提到一个概念：**时序数据库 (Time Series Database，TSDB)**。那么什么是时序数据库呢，此处引用 WiKi 百科的定义：

> A time series database is a software system that is optimized for storing and serving time series through associated pairs of time(s) and value(s). In some fields, time series may be called profiles, curves, traces or trends. Several early time series databases are associated with industrial applications which could efficiently store measured values from sensory equipment (also referred to as data historians), but now are used in support of a much wider range of applications.

什么意思呢？就是说时序数据库，它被优化成专门将一系列相关联的「**时间**」和「**数值**」，进行存储和提供服务的一套软件系统。在某些领域，时间序列可能被称为剖面、曲线、轨迹或者趋势。一些早期的时间序列数据库与工业应用相关联，这些应用可以有效地存储来自传感设备的测量值，但现在用于支持更广泛的应用。

所以，时序数据其实就是随着时间不断产生的连续测量数值或者事件，时序数据库就是用来保存这些数据的手段之一。

以下引用 TDengine 官方文章中描述时序数据库的特点：

> 时序数据库的特点
> 
> 1. **时间戳**： 每个数据点都带有时间戳，这个时间戳对于数据的计算和分析十分重要。
> 2. **结构化**： 与来自网络爬虫、微博、微信的海量数据不同，联网设备或监控系统生成的数据都是结构化的。这些数据都具有预定义的数据类型或固定长度，比如智能电表采集的电流、电压就可以用 4 字节的标准的浮点数来表示。
> 3. **流式**： 数据源以近似恒定速率生成数据，如音频或视频流。这些数据流彼此独立。
> 4. **流量平稳可预测**： 与电商平台或社交媒体网站的数据不同，时序数据的流量在一段时间内是稳定的，并且可以根据数据源的数量和采样周期来进行计算和预测。
> 5. **不变性**： 时序数据一般都是 append-only，类似于日志数据，一般不容许而且也没有修改的必要。很少有场景，需要对采集的原始数据进行修改。

这么听起来，这种数据库完美契合一种系统：**监控系统**。

那么说到监控系统，相信不少 IT 同行可能或多或少听过 **Cacti、Nagios、Zabbix** 包括上面提到的 **Prometheus**。这其中，Cacti、Nagios、Zabbix 这 3 者，我相信曾经部署过的朋友应该都会部署 MariaDB (即 MySQL 的修改版本) 数据库。那么使用这种关系型数据库的监控系统有什么问题呢？答案是当数据量足够庞大规模的时候，这种关系型数据库就会成为整套监控系统的瓶颈之一。当然，连我都知道的事情，厂商不可能不知道，所以 Zabbix 从 4.2 版本之后开始也支持了时序数据库中的 Timscaledb。更多内容可以查阅 Zabbix 官方博客[《Zabbix，时间序列数据和 TimescaleDB》](https://blog.zabbix.com/cn/zabbix-time-series-data-and-timescaledb-2/6959/)。

至于 Prometheus（普罗米修斯：你没听错，就是跟异形前传同名的那个普罗米修斯）就是一款本身就是基于时序数据库打造的监控系统。在我对 Unifi 设备和 Proxmox VE 虚拟化做监控方案之前，我其实是不知道 InfluxDB 的。因为平时工作接触较多都是 VMware vSphere，而在这种商业软件的加持下，VMware 天然有自己一套完美的监控运维平台，也就是 vRealize Operations，现在改名叫 Aria Operations。所以，我在研究 Proxmox VE 监控的时候发现，**数据中心 > 指标服务器** 页面下就支持 Graphite 和 InfluxDB。而这俩，也都是时序数据库。

![](https://proxy-prod.omnivore-image-cache.app/0x0,si1Pw8J2g-xgecvnTbDuoqfalSq7ffL-wyK-T06Putj4/https://cdn.sspai.com/2023/12/31/c44333a15dfdbd7bcd3e7c20d32c6a3b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

所以我就搜索了一下时序数据库发展历程，可以看到我上述提到的 Graphite、InfluxDB、Prometheus、TimeScale 都先后应运而生。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sU-qSL09PzET7hFw9Fwq6Ja_ukUK4FdKv6_gCU50QrOw/https://cdn.sspai.com/2023/12/31/a17a2a7f2d703159b40e46db18530081.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

并且我还搜索了一下相关排名，**DB-Engines** 网站上关于时序数据库的受欢迎程度排名中，InfluxDB 目前依然是遥遥领先。那就更让我觉得我可能是需要稍微了解了解这个 InfluxDB 了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sGM6xUb0W--lCcePMXPBQfqn2TE9emIAD5NVsZNdh858/https://cdn.sspai.com/2023/12/31/8b90967ea4e92c49afd8cdb90829692a.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 2.1.2\. Prometheus

**Prometheus** 受启发于 Google 的 Brogmon 监控系统 (相似的 Kubernetes 是从 Google 的 Brog 系统演变而来)，从2012年开始由前 Google 工程师在 **Soundcloud** 以开源软件的形式进行研发的系统监控和告警工具包，并且于 2015 年早期对外发布早期版本。自此以后，许多公司和组织都采用了 Prometheus 作为监控告警工具。Prometheus 的主要特性有：

* 一个多维数据模型，包含由 metric 和 key/value 标识的时间序列数据
* PromQL 是一种灵活的查询语言
* 不依赖分布式存储，单个服务器节点是自治的
* 基于 HTTP 协议通过 Pull 形式进行收集时间序列数据
* Push 形式的时间序列数据是通过一个中间网关来支持的
* Targets 可以通过服务发现或静态配置发现的
* 多种模式的图形和仪表盘支持

Prometheus 生态系统由多个组件组成，其中许多是可选的：

* **Prometheus Server**：Prometheus 主服务器，用于抓取和存储时间序列数据。
* **Client Libraries**：用于检测应用程序代码的库，主要用于客户端。
* **Push Gateway**：支持短期生命周期的作业。
* **Exporter**：为 HAProxy、StatsD、Graphite 等服务提供数据。
* **Alert Manager**：一个告警处理工具。
* 各种支持工具。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sD0kSU1RqcT_NDT-induhHHfj9P-k-CG1dnQOG9miwsg/https://cdn.sspai.com/2023/12/31/f7aeed49b98b6f75924d0a19ce962b5d.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 2.1.3\. InfluxDB

**InfluxDB** 是一套由 **InfluxData** 公司开发的时序数据库，它具备以下特性：

* 基于 Go 语言开发，只需要二进制文件即可运行
* 针对时序数据进行快速写入
* 简单高效的 HTTP API
* 类似 SQL 的查询语法
* 能够实时查询，数据在写入时被索引后就能够被立即查出
* 支持对 Tag 建索引，实现快速有效的查询
* 数据保留策略（Retention policies）能够有效地使旧数据自动失效

InfluxDB 本身只是一套数据库，那么监控数据如何写入呢？Prometheus 会拉取各种 Exporter 暴露出来的 metrics 数据，而 InfluxData 公司则开发了一套整体的 **TICK 堆栈**（类似 ELK：3 个字母分别代表 Elasticsearch、Kibana、Logstash）。其中：

* **Telegraf**：一个插件驱动的服务器代理，用于收集和报告指标。Telegraf 插件直接从其运行的系统获取各种指标，从第三方 API 中提取指标，甚至通过 StatsD 和 Kafka 消费者服务监听指标。
* **Chronograf**：是堆栈的管理用户界面和可视化引擎，它可以轻松设置和维护基础结构的监视和警报。
* **Kapacitor**：是一个数据处理引擎，它可以处理来自 InfluxDB 的流数据和批处理数据。

![](https://proxy-prod.omnivore-image-cache.app/0x0,scnshdEmqd6oyJVNtzKsTQbAx0SRX16IntvsotfPkx7Q/https://cdn.sspai.com/2023/12/31/4b802557de19cde167ad0380a6803f5e.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### **2.2\. Grafana**

**Grafana** 是一个开源可视化和分析软件。它允许您查询、可视化、提醒和浏览指标、日志和跟踪，无论它们存储在何处。它为您提供了将时序数据库（TSDB）数据转换为富有洞察力的图形和可视化的工具。

Grafana 目前内置支持的数据来源：

* Alertmanager
* AWS CloudWatch
* Azure Monitor
* Elasticsearch
* Google Cloud Monitoring
* Graphite
* InfluxDB
* Jaeger
* Loki
* Microsoft SQL Server (MSSQL)
* MySQL
* OpenTSDB
* PostgreSQL
* Prometheus
* Tempo
* Testdata
* Zipkin

### 2.3\. Unifi Poller

那么上面铺垫了那么多，跟监控 **Unifi** 又有什么关系呢？是这样的，由于 Prometheus 官网的 [Exporters](https://prometheus.io/docs/instrumenting/exporters/) 页面并无适配 Unifi 的 Exporter，同样的 Telegraf 官网的 [Input plugins](https://docs.influxdata.com/telegraf/v1/plugins/#input-plugins) 页面也无适配 Unifi 的相关 plugin。所以有国外网友开发了这个 Unifi Poller 项目来满足这个需求。

**Unifi Poller** 是一个开源的，支持收集 Unifi 控制器数据并导出到 InfluxDB 或者 Prometheus 的收集器。同时，提供了 12 个 Grafana 面板，6 个属于 InfluxDB，另外 6 个属于 Prometheus。

Unifi Poller 基于 Go 语言开发，可以运行在 Windows、macOS、FreeBSD、Linux 或 Docker 下。

* 在 Influx 模式下，Unifi Poller 每 30 秒轮询一次 Unifi 控制器数据并导出到 InfluxDB 数据库。**(相当于一个 Telegraf Unifi Input plugin)**
* 在 Prometheus 模式下，Unifi Poller 开放一个 Web 端口并接受 Prometheus 拉取，动态的转换 Unifi 控制器的 API 数据到 Prometheus。**(相当于一个 Unifi Exporter)**

![](https://proxy-prod.omnivore-image-cache.app/0x0,stUrVI1PvCCGUJdPinG6E3Xc_uQgJxXbWanVGYO3WYnY/https://cdn.sspai.com/2023/12/31/f807bb454d0a26f15e525f867227beed.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 3\. 项目部署

介绍完以上全部组件，那么今天我就要使用 **InfluxDB + Grafana + Unifi Poller** 来部署一整套 Unifi 设备的监控系统了。

为什么不是用 **Prometheus + Grafana + Unifi Poller** 呢？当然是官网建议入门用户使用 InfluxDB，因为部署 Prometheus 又要涉及相当广的内容了，所以有兴趣的朋友还请您自行研究。

### 3.1\. 准备工作

3.1.1\. 组件版本

根据 Unifi Poller 官网 [FAQs](https://unpoller.com/docs/poller/faq/) 说明：

* 推荐使用 Grafana 7.4.0+。需要 Grafana 7.x 或更高版本。
* 如果您选择使用 InfluxDB，则需要 InfluxDB 1.8.x。1.10 和 1.11 可能有效。
* InfluxDB 2.x 无法作用。
* Prometheus 2.x (如果您选择使用 Prometheus)。

所以，此次我们使用的环境如下：

| **名称**         | **版本**  | **类型**     | **备注**                     |
| -------------- | ------- | ---------- | -------------------------- |
| Unifi OS       | 3.1.16  | Unifi 控制台  | Unifi Cloud Key Gen 2 Plus |
| Unifi Network  | 8.0.24  | Unifi 网络应用 | Unifi Cloud Key Gen 2 Plus |
| CentOS         | 7.9     | 虚拟机系统      | 2C，4G，100G 或更多             |
| Docker         | 24.07   | 容器应用       |                            |
| Docker Compose | v2.21.0 | 多容器运行工具    |                            |
| InfluxDB       | 1.8.10  | 数据库容器      |                            |
| Grafana        | 10.1.0  | 数据展示容器     |                            |
| Unifi Poller   | v2.9.5  | 数据收集容器     |                            |

#### 3.1.2\. 准备工作

如果您的控制器是在运行 Unifi OS 的 UDM、UXG 或 UDM-Pro 或 UCK 上，那么建议创建一个 **受限制的用户**，对 UniFi 网络应用具有 **只读权限**。其他权限级别可能无法正常工作。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s1dyHN5nI1ZFjWihD3eYZmwPw79AbLHk0vLg15CpIUZY/https://cdn.sspai.com/2023/12/31/e404b7dd30225adeb1c882df6a5ecc43.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

例如，我这边创建的用户名为 **unifipoller**，密码设置一个自己熟悉的即可。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sA3XHAVnTa-gnV38mEATFJFyAXSVJC0N3ALYQvTp4J8Q/https://cdn.sspai.com/2023/12/31/9688a7c51c84027c24dc4d0e61aa091d.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCBiSdhKNF3qNeEky4sHtcf2cjyp2JDAEryx_OlDzABg/https://cdn.sspai.com/2023/12/31/3f8cd41adc640b0df113933787303c42.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 3.2\. 安装部署

#### 3.2.1\. 安装 CentOS

安装系统这个步骤我就略过了，实在是没有必要专门凑字数水一个章节。您也可以使用您所熟悉的操作系统，像是 Ubuntu、Debian、OpenSUSE 等等。

#### 3.2.2\. 安装 Docker

从 [https://get.docker.com](https://get.docker.com/) 下载 Docker 安装脚本。

```vim
curl -fsSL https://get.docker.com -o get-docker.sh
```

使用阿里云镜像站执行 Docker 安装脚本。

```dsconfig
sh get-docker.sh --mirror Aliyun
```

运行并设置 Docker 自启动。

```pgsql
systemctl enable --now docker
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,suMFJTBpmFvxAO6akJCy19V85kKhMK1BO1wJoXvvNWws/https://cdn.sspai.com/2023/12/31/da8f1ec438973d844766b4d40de8d7b5.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 3.2.3\. 安装 Docker Compose

下载 Docker Compose 二进制文件。若无特殊上网方式，此步骤下载会非常慢，但是我实测过，确实可以下载完成，下方截图内我总共用了 35 分钟下载完。

```awk
curl -SL https://github.com/docker/compose/releases/download/v2.23.3/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```

设置 Docker Compose 为可执行权限。

```awk
chmod +x /usr/local/bin/docker-compose
```

为 Docker Compose 命令设置软连接。

```awk
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

验证 Docker Compose 版本。

```applescript
docker compose version
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,svGXUw9NaXtSyne1BHZG3B_I8kSyrM7albKsdKfR2WlU/https://cdn.sspai.com/2023/12/31/85addfce162102563aa5a9b086d74641.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 3.2.4\. 配置 Docker 加速器

创建 daemon.json 文件。

```awk
vim /etc/docker/daemon.json
```

粘贴以下内容。

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://dockerproxy.com",
    "https://docker.nju.edu.cn",
    "https://docker.m.daocloud.io"
  ]
}
```

重启 Docker 服务。

```properties
systemctl daemon-reload
systemctl restart docker
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sT69aYPIj2TjypPP4yijKHF0L7PgbzGjFkgpNTBCuxps/https://cdn.sspai.com/2023/12/31/a47ce668be87d30ac5e30c1b9a0a17cb.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

当然，这里我更建议的是自己部署一套本地镜像仓库，比如使用 VMware 开源的 **Harbor**，我自己就在家庭内网部署了一套，这样还能避免某些镜像因为一些不可说原因删库导致无法拉取。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sS46dqWHldjOc8lemLAukIxTRvM5SRoOnx6Ck8WaYL5g/https://cdn.sspai.com/2023/12/31/3217605100eec054b16559e24f7f2c5d.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 3.2.5\. 部署 Unifi Poller 堆栈

由于这里 Grafana 需要安装 3 个插件，会涉及到权限问题，所以需要先创建 grafana 用户。

```ebnf
useradd -g root grafana
```

修改 Grafana 用户 ID。

```angelscript
usermod -u 472 grafana
```

创建 Grafana、InfluxDB、Unifi Poller 用来存储其配置文件的目录。

```arduino
mkdir -p /docker/{grafana,influxdb,unifi-poller}
```

修改 Grafana 目录拥有者。

```angelscript
chown 472:root -R /docker/grafana
```

验证 Grafana 目录权限。

```jboss-cli
ls -l /docker
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,simUwD_hA4Fsfb6zu2-XzpfgE4_MJt9JlCv_xBlT_sqo/https://cdn.sspai.com/2023/12/31/eaaf22d38f1ea37a6e8811b3d7759c67.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

创建 up.conf 配置文件。

```vim
vim /docker/unifi-poller/up.conf
```

粘贴并根据实际情况修改以下内容。

```routeros
#### INPUTS
[unifi.defaults]
  url = "https://10.0.3.250"  # 修改为您的 Unifi Console IP
  user = "unifipoller"
  pass = "CHANGE_ME"  # 3.1.2. 章节您设置的密码
  save_sites = true  # 保持不变
  save_dpi = true  # 保持不变

#### OUTPUTS
[influxdb]
  url = "http://CHANGE_ME:8086"  # 本虚拟机的 IP:8086
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sPO3x5OsBXCogBKwj-WdknrxAsxzeW9hu7UlAnGheNWs/https://cdn.sspai.com/2023/12/31/05d17460aba7db572725434520265926.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

创建 unifi-poller 的 Compose 目录。

```vim
mkdir up && cd up
```

创建 docker-compose.yaml 文件。

```css
vim docker-compose.yaml
```

粘贴并根据实际情况修改以下内容。

> 注意  
> 此处我对官网提供的 Docker Compose 模板进行了精简和纠错：
> 
> * 因为模板里面还部署了 Chronograf 容器，然而其实对于我们的需求而言，除了增加额外的性能开销以外，并没有什么用处。
> * 而且模板中 InfluxDB 容器的参数甚至用了 InfluxDB 2.x 版本的环境变量，我刚开始尝试部署的时候，一直部署失败。后面仔细研究了下 InfluxDB 的变量说明，才发现明明前面 FAQs 说 InfluxDB 2.x 无法使用，结果模板里面却又套用了 InfluxDB 2.x 的内容。

```elixir
version: "3"
services:
  influxdb:
    restart: always
    image: influxdb:1.8.10
    ports:
      - '8086:8086'
    volumes:
      - /etc/localtime:/etc/localtime:ro  # 我自己的习惯，只读挂载本机的时区，避免时区显示问题
      - /docker/influxdb:/var/lib/influxdb
    environment:
      - INFLUXDB_DB=unifi  # 请勿修改数据库名称，默认只识别 unifi
      - INFLUXDB_ADMIN_USER=CHANGE_ME  # 数据库管理员名称，可根据自己需求修改，与 Unifi OS 中设置用户无关
      - INFLUXDB_ADMIN_PASSWORD=CHANGE_ME  # 数据库管理员密码，可根据自己需求修改，与 Unifi OS 中设置用户无关

  grafana:
    image: grafana/grafana:10.2.3
    restart: always
    user: '472:root'
    ports:
      - '3000:3000'
    volumes:
      - /etc/localtime:/etc/localtime:ro  # 我自己的习惯，只读挂载本机的时区，避免时区显示问题
      - /docker/grafana:/var/lib/grafana
    depends_on:
      - influxdb
    environment:
      - GF_SECURITY_ADMIN_USER=CHANGE_ME  # Grafana 面板管理员名称，可根据自己需求修改，与 Unifi OS 中设置用户无关
      - GF_SECURITY_ADMIN_PASSWORD=CHANGE_ME  # Grafana 面板管理员密码，可根据自己需求修改，与 Unifi OS 中设置用户无关
      - GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel  # 3 个 Grafana 插件

  unifi-poller:
    restart: always
    image: golift/unifi-poller:v2.9.5
    depends_on:
      - influxdb
      - grafana
    volumes:
      - /etc/localtime:/etc/localtime:ro  # 我自己的习惯，只读挂载本机的时区，避免时区显示问题
      - /docker/unifi-poller:/etc/unpoller
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7iBraqwn6X-uhG11mBE7tDYKjT4I7thCWO1dDMF7pes/https://cdn.sspai.com/2023/12/31/25c4ee3b1847041c41bff5d8406309e7.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

使用 Docker Compose 拉起 Unifi Poller，由于此处我使用本地镜像仓库，所以拉取镜像几乎是以秒级计算的，如果您使用的是上面的镜像加速器，可能需要耐心等待一会儿。应该庆幸的是 ，Unifi Poller 镜像在今年重新上传 Docker Hub 了，前两年作者只上传到 Github 镜像仓库，对于大部分国内用户来说，基本上是拉不下来镜像的。

```ebnf
docker-compose up -d
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjzpGDzzctdFWUleZm-KUJN2nSwvDRg1R_Vzrf7Z6Mmg/https://cdn.sspai.com/2023/12/31/e17a531334ff0aa28932859c619d72cd.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

查看 Unifi Poller 容器运行日志，当发现间隔 30 秒生成一次数据条目，就证明容器运行正常了。

```angelscript
docker logs -f up-unifi-poller-1
```

运行结果如下图。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sW8BonwCucPW5Mani2xEshbbd4BzftC05dKbp4syr7gM/https://cdn.sspai.com/2023/12/31/f0a7fe7563ed1a541b81c9fbfd4f211d.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 3.3\. 面板设置

浏览器访问 [http://虚拟机IP:3000](http://xn--ip-tx5di3ni80c:3000/) ，输入上面 docker-compose.yaml 文件中设置的 Grafana 面板管理员名称及密码进行登录。

![](https://proxy-prod.omnivore-image-cache.app/0x0,srpuIsVnpvFw09rRigUl8QGKjG7ABX3syya2PG16ETf4/https://cdn.sspai.com/2023/12/31/cfc2c4444d155075919c21d19c9ea124.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sISextVoiXe6ZcE_8SKJ3X8l4Y9YAKZztb2DupoP474M/https://cdn.sspai.com/2023/12/31/1ed6ab587a2bf4931da79ff829c1a31a.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 3.3.1\. 设置语言

单击左侧导航栏，选择 **Administration > General**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syKiK0-WXXTR_PqEAdUkq29SaDS_b0MtOLxciRCjaFFg/https://cdn.sspai.com/2023/12/31/4bb7a530823e53191472aa28e8919887.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

单击 Default preferences，Language 选择 **中文 (简体)**，单击 Save。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHxcCfdEgA5TBAxl8pM-c_lx1DnyF_zxDdJkgSsyajSg/https://cdn.sspai.com/2023/12/31/7876f8753ea303d3e6cbb2c2c2e50712.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

虽然汉化依然不完全，但是还是稍微能让大众看懂一些了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s5FAFHbcdjgjwFiyU4oHkxIqRL1IueAzQlWwPYyxMAi0/https://cdn.sspai.com/2023/12/31/b76934fab8397a3ffce2e3e4734eb3b7.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 3.3.2\. 添加数据源

单击左侧导航栏，选择 **连接 > 数据源**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCR2JaO52Jrh-XAxsGZ8o01QqST8zOLviMvyhSIwF-bU/https://cdn.sspai.com/2023/12/31/9a76757729a107245ebd4e4f6bf4b4a1.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

单击 Add data source。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sXzjIbK6UwZjmKOndPu9R79c8FzY6Mdc5n2l0GEXNURk/https://cdn.sspai.com/2023/12/31/05963cfc7073c7d8191c4a438408fe38.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

选择 **InfluxDB**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9ouAps0HvDDaN9_uspqTxvt5y76QhUBFFKyAZM_fKX8/https://cdn.sspai.com/2023/12/31/474162eba5e09d2cd10310efdee945e9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Query language 保持默认选择 InfluxQL，URL 输入 [http://虚拟机IP:8086](http://xn--ip-tx5di3ni80c:8086/) ，其他选项如图设置。

![](https://proxy-prod.omnivore-image-cache.app/0x0,swWCejwoh-B5x3YE7uNHRpVvuZgNfeaRhknOghqZ_Hs0/https://cdn.sspai.com/2023/12/31/c91cb3ad27faf8b59a3bd7911bd88009.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Database 输入 **unifi**，User 输入 **数据库管理员名称**，Password 输入 **数据库管理员密码**，单击 Save & Test。

![](https://proxy-prod.omnivore-image-cache.app/0x0,svnuYVIzZYCgwljhUp5ByJaHTU1QSXUPXL0GthhDxqGQ/https://cdn.sspai.com/2023/12/31/a81bfc7612be30400e45c5cf61f73af1.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

显示绿色提示就是测试通过。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s0fYTkr_7ICFN_gyHlP7ozeI-Dn0lZHdmRVkIGD9CIz4/https://cdn.sspai.com/2023/12/31/caf9a4b8d66c9c2f3e072a0b04d692d5.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### 3.3.3\. 添加面板

单击左侧导航栏，选择 **仪表板**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sgsVlAqvR0Vz4KGsR18fsQOgV4AMBI1gdWuLDNazebx0/https://cdn.sspai.com/2023/12/31/390a1faa6f3ef061f10ee08a10e87756.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

单击 **导入**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3bVjHCBNDemBN8N3iq2BybCp02E9cCYKliw7sTHoq8E/https://cdn.sspai.com/2023/12/31/4e096325804fcf27e600740e1f2cb79c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

输入 **10414**，单击加载。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sunZliOiSNKdeM-iEAvPNIdRA-ArRv21Ht5YdlJMfP60/https://cdn.sspai.com/2023/12/31/2c31e639ce8ec7b513134246c4fb58b9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

下方数据源选择 **influxdb**，单击 Import。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sv907Tuw3JVP8LrN1hjO_c1JLR5wA3fxKYXpn27QZVSI/https://cdn.sspai.com/2023/12/31/b94681451becbb84cbf5e5632598a065.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

依次导入 **10414 - 10419**，总共 6 个面板，即可大功告成！

## 4\. 效果展示

由于上述环境是我自己家的环境，并没有全套的 Unifi 全家桶，所以我下面以我几个月前帮一位朋友搭建的 Unifi 全家桶环境进行 Grafana 截图展示（隐私内容均已马赛克处理）。

### 4.1\. USG Insights

![](https://proxy-prod.omnivore-image-cache.app/0x0,sw1IUaiezvPCe_6z6EmZw_0H5vOdbmHO88P0H_nuRQB4/https://cdn.sspai.com/2023/12/31/32d15fcabdfee0d50a14e8189e8d0474.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCvqObxG0h6P4_dRHSkl2v124JS19EuyeWBJFeC6dNZ4/https://cdn.sspai.com/2023/12/31/65c4f0af7e95efc016c75faa8048dfb0.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 4.2\. USW I**nsights**

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6cdHL9sJY6pWcPJJqn5ktlBAxGIYUDcSsUJll9sL-VQ/https://cdn.sspai.com/2023/12/31/33e5e11c01d5f24c52b4cadb0dfcc06f.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s-U7mwIgp8pmVpfbAGCfpoS3gXhuUNUQpi4GQdtyXHpA/https://cdn.sspai.com/2023/12/31/f708eb4bf98fe183a0a40d6e6b867996.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### **4.3\. UAP Ins**ight**s**

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3q3XtTw2Ksdq4ruqy6u5oJxoTKcWheOZnpGD7b5ikRM/https://cdn.sspai.com/2023/12/31/c7c18b20caf36e2c7cb02a93ee1d3e70.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2oEqRPaH0dvtpa3jnADLucmAFZmudoYfZY91Cj9S2OE/https://cdn.sspai.com/2023/12/31/ce77b0ef83e1fbf2ec87f06c684c76a3.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqVL7BWUrY8AeFfeRHQY3WojH-qMjQLXOCHVUR5Z_ExM/https://cdn.sspai.com/2023/12/31/995d2eb3b7b96728313b9320e0904556.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### **4.4\. Cl**ient Insights

![](https://proxy-prod.omnivore-image-cache.app/0x0,soVh06z72v6cufDzCpolEhULD-3iBJYHES8Qxz1ycveM/https://cdn.sspai.com/2023/12/31/30151145667639ce80a0614d44843bf2.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sUzEACcw98dtttL10LJkaPJZiBiBHUvrAZgjd782xeHk/https://cdn.sspai.com/2023/12/31/a16ae6151dcc815765ef350dcad588b6.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### **4.5\. Network** Site

![](https://proxy-prod.omnivore-image-cache.app/0x0,sQh3qlxbm13QV9ArPP0fFRS0TzNrXh7HrHrNHmE__TmM/https://cdn.sspai.com/2023/12/31/5fcebbf1f03916f869d75d63f63206a5.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 4.6\. Client DPI

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSkPDN5M-4KthB9FZv6SOlJrLq-BD29YxsPky9mhWQzc/https://cdn.sspai.com/2023/12/31/0cd176a2374b07a846fedcf48fd9c237.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s4EDokbkq4wMtDy4QTxIiAJiBojiyxw1XUzV0u8ousRU/https://cdn.sspai.com/2023/12/31/2aa3fab20dcbdd3ed1551701c21d371c.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

## 5\. 讨论分析

下面我就举 2 个例子来说明下数据图表对于了解家里的 Unifi 网络情况到底有什么作用。

### 5.1\. 交换机温度

对于 2 代 Pro 系列 & Enterprise 系列的 Unifi 交换机以及 RPS 设备，都是有温度传感器的。我相信绝大多数家用 Unifi 设备的朋友，即便购买了机架式设备，应该是不会在家里专门搞个恒温机房的。所以夏天时候对于设备的散热应该是会有一定顾虑的，不过就我这一年来对几位朋友家的交换机温度情况进行观察，即便是我们南方，应该问题也是不大的。

下图就是朋友家几台设备近 1 个月的温度变化。可以发现入冬之后，整体设备的温度降幅还是比较明显的。而且，即便是之前温度较高的时候，Unifi 设备也是相当稳定的。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s0jt4c89Vi6lmlXJr7m4ZhDKxdp6zQba3VHTxN5YvJh8/https://cdn.sspai.com/2023/12/31/5c790684e3a81ad12f8a50a000f07bd8.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### 5.2\. 客户端 Wi-Fi 信号强度

相信即使是 Wi-Fi 6 普及的现在，很多朋友依然会头疼一件事：明明有线网络下测速已经达到运营商给的网络速度上限了，为什么无线客户端信号依旧很弱，网速依然很慢？我的路由器发射功率设置是否合理？我的 Mesh 节点是否够多？我的 AP 摆放位置是否合理等等？

那么这里，我们还是要了解几个概念。

首先是 **dB**。日常中通常使用功率来衡量一个电器做功的快慢，如一个 10W 的电灯泡，10W 功率就是电灯泡消耗能量做功的快慢。在天线收发系统里，同样也需要消耗电能来转换为电磁波的能量进行传输。但是电磁波的能量衰减非常快，例如一个 100mW 的能量源，传输一段距离后很快就能衰减成 1mW、0.1mW、0.01mW 甚至更小。对于这种呈几何数量级的衰减，使用功率来衡量会给计数带来不便，因此引用新的概念：dB 和 dBm。

dB 是一个纯计数单位，它的计算公式为 **dB = 10lg(A/B)**。

当 A 和 B 表示两个功率时，dB 就表示两个功率的相对值，例如 A 的功率为 20mW，B 的功率为 10mW，则 10lg(20/10) = 3dB，表示 A 比 B 大 3dB。如果 A 的功率变为 100mW，则 10lg(100/10) = 10dB。所以有句口诀是 「**加 3 乘 2，加 10 乘 10；减 3 除 2，减 10 除 10**」。

**EIRP (Effective Isotropic Radiated Power)**：有效全向辐射功率，即天线端发射出去时的信号强度。它是天线在天线增益最高的方向上的最大功率输出。

EIRP 必须考虑与连接器相关的功率损耗以及传输线损耗。发射天线的确切辐射输出功率可以使用发射机功率电平、电缆长度和天线增益来计算。在大多数国家/地区，EIRP 由政府机构控制。因此，不允许系统发出高于指定 EIRP 的信号。

**EIRP = Tx Power (发射功率) + Tx Antenna (发射天线增益) – Tx Cable (发射电缆损耗)**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCBoTXOtNaGqh_hko5BzE1gMX_hZKGADbpIYTkfTXExE/https://cdn.sspai.com/2023/12/31/3142565cf9110df336080e5422ad7eeb.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

如果发射器的输入功率电平为 12 dBm，并且使用损耗为 10 dB 的电缆连接到增益为 4 dBi 的天线，则系统的 EIRP 为 18 dBm。

EIRP = 12 dBm + 10 dBi – 4 dB = 18 dBm

以上 EIRP 的计算仅仅是无线发射端的总和，如果要计算完整的路径的信号强度，还需要计算上 Free Space Loss (空气损耗)，以及无线接收端的天线增益和电缆损耗之和。

![](https://proxy-prod.omnivore-image-cache.app/0x0,swRTZu6ssa0Wz94T147wWkmuwJJk78asPC5zE9x8Ua8A/https://cdn.sspai.com/2023/12/31/7b871d4da29593f24db5b6365cf273f0.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

**Rx Signal = Tx Power (发射功率) – Tx Cable (发射电缆损耗) + Tx Antenna (发射天线增益) – Free Space (空气损耗) + Rx Antenna (接收天线增益) – Rx Cable (接收电缆损耗)**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbBacMaghRNZu6y0_1aHljM0SvrYCN7W1JuB5m2fVcJw/https://cdn.sspai.com/2023/12/31/69f95ef251f81b56acf317cf0297dd3e.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

所以，Rx Signal = 18 dBm – 5 dB + 8 dBi – 25 dB + 8 dBi – 5 dB = -1 dBm

那么 **Free Space Loss** 有没有一个标准呢，这也是有的，其数学公式如下：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7ZaPCmdf1i_ZYn3Vzhng-UqkSFx8ApJM9Ub-mEOXoJQ/https://cdn.sspai.com/2023/12/31/6e93ffdcfe1138e14ea3fd72810664b4.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

FSPL 公式准确地告诉我们遵循 **平方反比定律** 的程度。

平方反比定律告诉我们，随着与无线发射源的距离增加一倍，能量会分散在面积的 4 倍以上。这导致信号变成了原始幅度的 1/4。换句话说，每当与信号源的距离增加一倍时，Wi-Fi 信号就会损失 6dB (这在下图中以红色表示)。对比上述的口诀，即减 6 除 4。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s0SlUT0IJEw0nODzGsc81RFnjk2068e8q-hpAbAp2AAU/https://cdn.sspai.com/2023/12/31/7c6ff09689f503a73d24a3244f6bfab3.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

正如预期的那样，墙壁会衰减信号。如下图所示。衰减量将取决于墙壁的结构。

![](https://proxy-prod.omnivore-image-cache.app/0x0,siFPUVe_pEBTbVaZIQE-SLwasuJaau7_Gjj18HmeUgQA/https://cdn.sspai.com/2023/12/31/fb05a635ffd5ac19ad69d8bd2d1a985e.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

根据以上的相关理论知识，我们可以从 Client Insights 面板中的 Wireless Signal 模块去分析家中连接到 Unifi 设备的 Wi-Fi 客户端的无线信号状况了。这里我就抛砖引玉下，大家可以结合时间节点，去分析家中各个客户端的无线信号如何，特别是一些智能家居使用较多的朋友，是否有些客户端的无线信号始终维持在较差的水平，这样可能就要根据实际的情况去调整自己家 Unifi AP 的安装位置和安装密度了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syZRsu87ZaU6fim-zR0hM0oFR1fYjiAC9okMeMjvJUUE/https://cdn.sspai.com/2023/12/31/cd359f1ebf52f5f53e7fb13d8c617106.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

这里再附上 2 篇 Unifi 官网的帮助文档，和 2 个视频方便大家根据 Unifi 原厂的教程对自己的 Unifi 环境进行 Wi-Fi 调优。

1. [UniFi Network - 优化无线网络速度](https://help.ui.com.cn/articles/360012947634/)
2. [UniFi Network - 了解和使用最小 RSSI](https://help.ui.com.cn/articles/221321728/)

## 6\. 结语

谢谢您耐心的看到这里，希望这次的文章，还能像之前的两篇文章一样，能帮助到更多使用 Unifi 设备的朋友。虽然经过这两三年的使用和折腾，我也踩了一些坑，总得来说，我看到更多的是积极的一面，不管是这一年来 Unifi Network 软件功能的完善，还是 Unifi 作为一个全球化的品牌，有着全球那么多用户开发的第三方工具可以搭配使用。我也帮好多周围亲戚朋友从官方商城下单，更新了家庭网络设备，大家都表示比起以前，在家使用有线网络和 Wi-Fi 那是稳定多了。

#### 参考资料

* [什么是时序数据库？我们为什么需要时序数据库？](https://www.taosdata.com/tdengine/time-series-database/what-is-a-time-series-database)
* [Zabbix，时间序列数据和 TimescaleDB](https://blog.zabbix.com/cn/zabbix-time-series-data-and-timescaledb-2/6959/)
* [DB-Engines Ranking](https://db-engines.com/en/ranking/time+series+dbms)
* [Exporters and integrations](https://prometheus.io/docs/instrumenting/exporters/)
* [Plugin directory](https://docs.influxdata.com/telegraf/v1/plugins/#input-plugins)
* [Unpoller](https://unpoller.com/)
* [What is Effective Isotropic Radiated Power (EIRP)?](https://study-ccnp.com/what-is-effective-isotropic-radiated-power-eirp/)
* [Free Space Path Loss Diagrams](https://semfionetworks.com/blog/free-space-path-loss-diagrams/)

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的[正版软件](https://sspai.com/mall)，少数派为你呈现🚀

---

