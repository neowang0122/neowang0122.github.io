---
id: 0fad8930-9824-11ee-8042-7b5749ff9fb6
title: |
  openwrt 管理页面被尝试爆破 - V2EX
author: |
  unknown
date_saved: 2023-12-11 04:32:19
date_published: 2023-12-11 04:32:19
draft: true
---

# openwrt 管理页面被尝试爆破 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/openwrt-v-2-ex-18c58ef1bac)

[Read Original](https://www.v2ex.com/t/999453)

date_saved: 2023-12-11 04:32:19

date_published: 2023-12-11 04:32:19

--- 

# Full Content: 

刚才突然收到一个消息推送，貌似我的 openwrt 管理页面被人尝试爆破

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6159kjq8Lmnv9l-XHbfOO-vr4pUyQNYmx1L3T43ixRM/https://i.imgur.com/jWj0ODw.jpg)

心里一惊，因为我记得我是没有开放外网访问端口的，只对公司的 ip 做了白名单

赶紧检查防火墙设置，发现是之前设置了一个临时的端口转发规则到 443 端口，立马删掉了

好在我密码还算是复杂，而且有配置提醒，不然问题就大了

回过神查了一下这个 ip 归属于 中国四川省眉山市 联通

然后 gg 了一下，发现了一个这样的网站

![](https://proxy-prod.omnivore-image-cache.app/0x0,suwoFNtpf0sMv17vksfqDpTPF2MfXuLb4JKVOC26AkWE/https://i.imgur.com/mRinV7N.png)

这是拿我机子做演示呐？

试着直接访问这个 ip ，提示这个：温馨提示：该网站因未备案或接入非法内容暂时无法进行访问，请联系接入商。

所以还是尽量不要暴露端口到公网啊，实在不能避免，也要强密码+做好消息提醒之类的

| ![xixiv5](https://proxy-prod.omnivore-image-cache.app/0x0,sqNLjvT6OI6ZWRxv3X-UkjAkQhF1hVed1KAeGViDAqKI/https://cdn.v2ex.com/gravatar/23746e65b4783ce09a00e6ad5530841e?s=48&d=retro) | 1 **[xixiv5](https://www.v2ex.com/member/xixiv5)** 3 小时 5 分钟前 我在一些地方看到过一种白嫖节点的教程，在 zoomeye 筛选 openwrt ，然后测试弱密码，白嫖里面保存的节点所以这个人应该是拿脚本批量扫批量爆破嫖节点的，然后 openwrt 还可以在装一些跑 pcdn 的插件什么的 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

| ![NewYear](https://proxy-prod.omnivore-image-cache.app/0x0,sji0uTFAUrwV7cFFQ8a3HUurCp4RN97vPo0_hKdhcO7o/https://cdn.v2ex.com/avatar/e58f/8741/89411_normal.png?m=1641637802) | 3 **[NewYear](https://www.v2ex.com/member/NewYear)** 2 小时 38 分钟前 弱密码+映射外网，妥妥的好习惯。最近 V2EX 总是有这样的例子，只能说感谢分享了 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |

| ![moefishtang](https://proxy-prod.omnivore-image-cache.app/0x0,sW3D74MDeWvjcn9dmUBiNoUWU7Y0AsN1EEPA_LzW7yjM/https://cdn.v2ex.com/gravatar/938e8fdf307775a55065bd974354604a?s=48&d=retro) | 4 **[moefishtang](https://www.v2ex.com/member/moefishtang)** 1 小时 23 分钟前 《可能会被恶意攻击，假如演示不好使请联系客服》演示不好使是因为这个卖机器的找不到肉鸡了吗（ doge ） |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |

| ![ThinkMan](https://proxy-prod.omnivore-image-cache.app/0x0,saHy5fkLDicBqyy-ZfEl5iRsLIIiBJbbWCLr5dW8yp-A/https://cdn.v2ex.com/avatar/31f2/1504/251971_normal.png?m=1689217253) | 5 **[ThinkMan](https://www.v2ex.com/member/ThinkMan)** 1 小时 13 分钟前 之前我也这样，后面安装了 fail2ban 插件 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |

---

