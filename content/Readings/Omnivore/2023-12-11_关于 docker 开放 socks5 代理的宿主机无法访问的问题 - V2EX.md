---
id: 3e53c620-97eb-11ee-8a0d-bb4753ebab4d
title: |
  关于 docker 开放 socks5 代理的宿主机无法访问的问题 - V2EX
author: |
  unknown
date_saved: 2023-12-11 00:39:46
date_published: 2023-12-11 00:39:46
draft: true
---

# 关于 docker 开放 socks5 代理的宿主机无法访问的问题 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/docker-socks-5-v-2-ex-18c577abf46)

[Read Original](https://www.v2ex.com/t/999354)

date_saved: 2023-12-11 00:39:46

date_published: 2023-12-11 00:39:46

--- 

# Full Content: 

**V2EX = way to explore**

V2EX 是一个关于分享和探索的地方 

[现在注册](https://www.v2ex.com/signup)

已注册用户请 [登录](https://www.v2ex.com/signin)

[![TradingView](https://proxy-prod.omnivore-image-cache.app/0x0,ssWyys_Z70L4F-QVBzgPOJWhbr2ThTvqRxrWxtzwdn1w/https://cdn.v2ex.com/assets/good-content/tradingview.png)](https://www.tradingview.com/?aff%5Fid=126273&aff%5Fsub=bitcoin&source=v2ex) 

[广告](https://www.v2ex.com/advertise)

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sQZCiJD8Gza9iH1vnhhGOUjfAviUjgukZ37oPJNYWIGI/https://cdn.wwads.cn/creatives/TJiqU9LJrfPyyBbauAna1Lptzb4pf9CYdWn8FTCs.jpg)](https://wwads.cn/click/bundle?code=jcqTkX47jdDoS989yPa6dCKkJ8lGKb)

[**【天翼云 翼企领先数智升级】**S3通用型云主机**低至¥9.5元/月💰️ 热门数据库1️⃣元加购！**](https://wwads.cn/click/bundle?code=jcqTkX47jdDoS989yPa6dCKkJ8lGKb)[![](https://proxy-prod.omnivore-image-cache.app/0x0,sh-F8HZE9hhpmRpUXEon0DZfRcIHysUL48lb8cz30ess/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 210' fill='%23a6b7bf'%3E%3Cpath d='M24.25 211.46L0 197.46l57-98.73a74.004 74.004 0 11128.18 74l-7 12.12-24.25-14 7-12.12a46.002 46.002 0 00-79.68-46z'/%3E%3Cpath d='M121.21 209.73a74.07 74.07 0 01-64.21-37l-7-12.12 24.25-14 7 12.12a46.002 46.002 0 1079.68-46l-57-98.73 24.25-14 57 98.73a74 74 0 01-64 111z'/%3E%3Cpath d='M235.09 209.73h-114a74 74 0 010-148h14v28h-14a46 46 0 000 92h114z'/%3E%3C/svg%3E)广告](https://wwads.cn/?utm%5Fsource=property-124&utm%5Fmedium=footer "点击了解万维广告联盟")

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

[![bianhui](https://proxy-prod.omnivore-image-cache.app/0x0,s_xLNXa7MzJy7-i3FbzHB7obwYNvdiFjSUMeZit8DdQs/https://cdn.v2ex.com/gravatar/3673ba3a9392231a608f18ffc2a1863d?s=73&d=retro)](https://www.v2ex.com/member/bianhui)

[V2EX](https://www.v2ex.com/)  › [程序员](https://www.v2ex.com/go/programmer)

[bianhui](https://www.v2ex.com/member/bianhui) · 21 分钟前 · 48 次点击 

在容器中起了一个 gost （ golang 的一个正向代理）开放了一个 socks5 代理。提供给宿主机使用。 遇到一个现象，当我创建容器的时候，使用指定创建好的 network A （ bridge ）的时候，宿主机的 clash 怎么都访问不上。 当我删除指定外部网络，docker 会使用默认创建的 bridge 网络。这时候宿主机的 clash 边可以访问。 我在 A 网段中 nc 过，端口都是正常的。宿主机扫描了端口也是打开的，只是无法通过 socks5 代理。 请问有对 docker 比较熟悉的大佬可以提供一下排查的思路吗，我已经失去排查的方向了。

目前尚无回复

[socks5](https://www.v2ex.com/tag/socks5)[Docker](https://www.v2ex.com/tag/Docker)[宿主机](https://www.v2ex.com/tag/%E5%AE%BF%E4%B8%BB%E6%9C%BA)[Clash](https://www.v2ex.com/tag/Clash)

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sQZCiJD8Gza9iH1vnhhGOUjfAviUjgukZ37oPJNYWIGI/https://cdn.wwads.cn/creatives/TJiqU9LJrfPyyBbauAna1Lptzb4pf9CYdWn8FTCs.jpg)](https://wwads.cn/click/bundle?code=jcqTkX47jdDoS989yPa6dCKkJ8lGKb)

[**【天翼云 翼企领先数智升级】**S3通用型云主机**低至¥9.5元/月💰️ 热门数据库1️⃣元加购！**](https://wwads.cn/click/bundle?code=jcqTkX47jdDoS989yPa6dCKkJ8lGKb)[![](https://proxy-prod.omnivore-image-cache.app/0x0,sh-F8HZE9hhpmRpUXEon0DZfRcIHysUL48lb8cz30ess/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 210' fill='%23a6b7bf'%3E%3Cpath d='M24.25 211.46L0 197.46l57-98.73a74.004 74.004 0 11128.18 74l-7 12.12-24.25-14 7-12.12a46.002 46.002 0 00-79.68-46z'/%3E%3Cpath d='M121.21 209.73a74.07 74.07 0 01-64.21-37l-7-12.12 24.25-14 7 12.12a46.002 46.002 0 1079.68-46l-57-98.73 24.25-14 57 98.73a74 74 0 01-64 111z'/%3E%3Cpath d='M235.09 209.73h-114a74 74 0 010-148h14v28h-14a46 46 0 000 92h114z'/%3E%3C/svg%3E)广告](https://wwads.cn/?utm%5Fsource=property-124&utm%5Fmedium=footer "点击了解万维广告联盟")

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

---

