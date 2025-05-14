---
id: b9fa0b9e-9800-11ee-94ab-a32a73a52c5f
title: |
  MTK 798X openwrt 的硬件加速对流量用量统计和限速支持相当不错 - V2EX
author: |
  unknown
date_saved: 2023-12-11 02:55:25
date_published: 2023-12-11 02:55:25
draft: true
---

# MTK 798X openwrt 的硬件加速对流量用量统计和限速支持相当不错 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mtk-798-x-openwrt-v-2-ex-18c580789c6)

[Read Original](https://www.v2ex.com/t/999405)

date_saved: 2023-12-11 02:55:25

date_published: 2023-12-11 02:55:25

--- 

# Full Content: 

前提：硬件 798x+MTK SDK 的有线驱动，尚未研究主线 OP 主方面的支持程度。 国内 798x+MTK SDK 的组合最火的仓库就是 hanwckf 的仓库了 <https://github.com/hanwckf/immortalwrt-mt798x>

MTK 798x 这代的硬件加速模块 PPE 支持定期向 linux 内核的 conntrack 更新数据，解决了之前开启硬件加速后无法检测流量的问题。

[![piRsJBD.png](https://proxy-prod.omnivore-image-cache.app/0x0,sjeGGgJHZMPtuyu9buYA7E4hw6p-dFPSb1cOq8jN7NM8/https://z1.ax1x.com/2023/12/10/piRsJBD.png)](https://imgse.com/i/piRsJBD)

按照图中命令开启功能后，基于 conntrack 的流量监控工具可以在启用硬件加速后使用[![piRsYHe.png](https://proxy-prod.omnivore-image-cache.app/0x0,s2RYXY8DNkgVqOHqldCKZRg0w4-pKjR3sKNtNiwMqVAU/https://z1.ax1x.com/2023/12/10/piRsYHe.png)](https://imgse.com/i/piRsYHe)

PPE 连接 64 个队列，每个队列可以设置最大速度，因而可以通过 iptables 设置特定主机的走限速队列实现硬件限速。[![piRs6Hg.png](https://proxy-prod.omnivore-image-cache.app/0x0,suO9ZRJtiOank9J0hO1UCmMY6lJBEOulqBC3EeCNRGus/https://z1.ax1x.com/2023/12/10/piRs6Hg.png)](https://imgse.com/i/piRs6Hg)

个人在之前的 luci-eqos 基础上修改了下脚本，用这个 luci 的壳去实现硬件限速。可以看到无论限速多少 M,CPU 都几乎没有占用

[![piRyF5d.png](https://proxy-prod.omnivore-image-cache.app/0x0,sCr2Qb9GeWZpkrSMUfUit9ExaJFwHQPB-hyB7vE4TPs0/https://z1.ax1x.com/2023/12/10/piRyF5d.png)](https://imgse.com/i/piRyF5d)

相关源码已经传至仓库 <https://github.com/padavanonly/immortalwrt-mt798x> 需要的可以自行编译测试。已经将 QOS 默认作为标记依据的 mark 改为了 dscp ，避免和 mwan3 冲突。

---

