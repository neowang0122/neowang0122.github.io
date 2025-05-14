---
id: 0a142c68-9824-11ee-a7c6-ffea3d2319bb
title: |
  阿里云 99 元活动服务器有点坑。namespace 和 cgroup 来限制编译进程使用不超过 4%的 cpu 使用率，有大佬能指点一下吗？ - V2EX
author: |
  unknown
date_saved: 2023-12-11 05:58:56
date_published: 2023-12-11 05:58:56
draft: true
---

# 阿里云 99 元活动服务器有点坑。namespace 和 cgroup 来限制编译进程使用不超过 4%的 cpu 使用率，有大佬能指点一下吗？ - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/99-namespace-cgroup-4-cpu-v-2-ex-18c58eef4ca)

[Read Original](https://www.v2ex.com/t/999473)

date_saved: 2023-12-11 05:58:56

date_published: 2023-12-11 05:58:56

--- 

# Full Content: 

阿里云 99 元活动服务器有点坑，编译 lamp 的时候，之前用的 [lamp.sh](http://lamp.sh/) ，没出过问题，但这次是在阿里云 99 元的活动服务器上购买的，编译过程总是出错、反复重试还是出错，检查错误，发现是收到了一个杀死进程的信号。经过检索，可能原因是 cpu 性能受到限制，超过限制时，会发送停止经常的信号。

晕啊，过去以为的限制性能，是 cpu 长时间达到 5%后会变慢，没想到是直接把进程杀了。。。

准备用 namespace 和 cgroup 来限制编译进程使用不超过 4%的 cpu 使用率，有大佬能指点一下吗？ 我尝试的方法：

1. 创建一个新的 cgroup

首先，按照之前的步骤创建一个新的 cgroup ，并设置 CPU 限制。例如，创建一个名为 limited\_cpu 的 cgroup ，并设置 CPU shares：

```routeros
sudo cgcreate -g cpu:/limited_cpu
sudo cgset -r cpu.cfs_quota_us=50000 limited_cpu
sudo cgset -r cpu.cfs_period_us=100000 limited_cpu

```

1. 使用 unshare 运行编译环境

```brainfuck
sudo unshare --fork --pid --mount-proc bash

```

1. 在新的 namespace 中添加进程到 cgroup

在新的 bash 会话中，您可以启动编译过程。但首先，您需要将这个 bash 会话的 PID 添加到之前创建的 cgroup 中。由于您使用了独立的 PID namespace ，您需要找到这个 bash 会话在全局 PID namespace 中的对应 PID 。

这可以通过查看新 bash 会话中 $$ 变量的值来实现，然后在主会话中找到对应的子进程。例如，在新的 bash 会话中：

```gams
echo $$

```

然后在主会话中，使用如下命令将其添加到 cgroup：

```css
sudo cgclassify -g cpu:limited_cpu [Global PID]

```

将 \[Global PID\] 替换为您刚才找到的 PID 。 但这步遇到了问题，因为`echo $$`得到的 pid 无法使用。

## 大佬能指点一下吗？这步应该如何操作？

1. 最后一个步骤是在新的 namespace 中进行编译，第三步卡住了，还没到这一步

| ![mason961125](https://proxy-prod.omnivore-image-cache.app/0x0,s37JXsq4tbKHNKQ0lQh-xCBUerxPSPXxd_MQKw2Wqx2E/https://cdn.v2ex.com/gravatar/2a768b40265890b002bdb37fc6b358f8?s=48&d=retro) | 1 **[mason961125](https://www.v2ex.com/member/mason961125)** 1 小时 46 分钟前 ？这真的是阿里的问题吗，host 杀你 guest 的进程呗 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |

| ![mason961125](https://proxy-prod.omnivore-image-cache.app/0x0,s37JXsq4tbKHNKQ0lQh-xCBUerxPSPXxd_MQKw2Wqx2E/https://cdn.v2ex.com/gravatar/2a768b40265890b002bdb37fc6b358f8?s=48&d=retro) | 2 **[mason961125](https://www.v2ex.com/member/mason961125)** 1 小时 44 分钟前 你这个脑回来我真的不知道怎么说了，一般进程被 kill 的最大原因是 OOM ，云服务器一般都默认不配 swap ，并行编译这种非常吃内存的行为 OOMKilled 不是很正常么。 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

---

