---
id: 46fa0ff6-c981-11ee-984f-77851fc23b6f
title: |
  RSSWorker - 为B站动态、TG频道、微博用户、小红书用户生成 RSS[CF Worker] - 小众软件
author: |
  青小蛙
tags:
  - RSS
date_saved: 2024-02-12 00:23:19
date_published: 2024-02-12 00:23:19
draft: true
---

# RSSWorker - 为B站动态、TG频道、微博用户、小红书用户生成 RSS[CF Worker] - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/rss-worker-b-tg-rss-cf-worker-18d9c725db3)

[Read Original](https://www.appinn.com/rssworker/)

date_saved: 2024-02-12 00:23:19

date_published: 2024-02-12 00:23:19

--- 

# Full Content: 

**RSSWorker** 是一个开源项目，它可以为B站动态、TG频道、微博用户、小红书用户生成 RSS 地址，部署在 Cloudflare Worker。@[Appinn](https://www.appinn.com/rssworker/)

![RSSWorker - 为B站动态、TG频道、微博用户、小红书用户生成 RSS[CF Worker]](https://proxy-prod.omnivore-image-cache.app/1608x700,s0uJc8kiuSmd3du5NxupIxAWpKOnVv93ZTUY3w7wpRxQ/https://www.appinn.com/wp-content/uploads/2024/02/Appinn-feature-images-85.jpg "RSSWorker - 为B站动态、TG频道、微博用户、小红书用户生成 RSS[CF Worker] 1")

最早在 Newlearnerの自留地 看到 RSSWorker，最近用它创建了一些 RSS 地址自己用，还挺不错的，就推荐给大家。

RSSWorker 基于 Cloudflare Worker，无需服务器，只需要你有一个 Cloudflare 账号（需要你拥有一个域名），就可以通过 **Deploy with Workers** 按钮一键部署。

### 使用

部署成功之后，就能得到 RSS 地址了：

* bilibili 动态 (/rss/bilibili/user/dynamic/:uid)
* telegram 频道 (/rss/telegram/channel/:username)
* weibo 用户 (/rss/weibo/user/:uid)
* 小红书用户 (/rss/xiaohongshu/user/:uid)

比如你的部署域名是 https://xxx.workers.dev，那么：

* 微博：https://xxx.workers.dev/rss/weibo/user/1684197391
* B 站：https://xxx.workers.dev/rss/bilibili/user/dynamic/10979326
* 小红书：https://xxx.workers.dev/rss/xiaohongshu/user/61459ee9000000000201fae3
* telegram 频道：https://xxx.workers.dev/rss/telegram/channel/appinnfeed

青小蛙为小众软件在 TG 的频道生成了一个地址：

* <https://feeds.feedburner.com/apipnntgfeed>

### 获取

* [GitHub](https://github.com/yllhwa/RSSWorker)

当然，依旧可以使用 [RSSHub](https://www.appinn.com/rsshub/) 项目，也具有同样的效果。

---

原文：https://www.appinn.com/rssworker/

---

