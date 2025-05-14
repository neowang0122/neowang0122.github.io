---
id: 3056a5c2-9847-11ee-9525-d37e4e0e5c31
title: |
  为什么 Android 插 USB 仅充电要实现一个空的 MTP 设备 - V2EX
author: |
  unknown
date_saved: 2023-12-11 09:16:40
date_published: 2023-12-11 09:16:40
draft: true
---

# 为什么 Android 插 USB 仅充电要实现一个空的 MTP 设备 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/android-usb-mtp-v-2-ex-18c59d551b4)

[Read Original](https://www.v2ex.com/t/999520)

date_saved: 2023-12-11 09:16:40

date_published: 2023-12-11 09:16:40

--- 

# Full Content: 

**V2EX = way to explore**

V2EX 是一个关于分享和探索的地方 

[现在注册](https://www.v2ex.com/signup)

已注册用户请 [登录](https://www.v2ex.com/signin)

› [Android Studio](https://developer.android.com/sdk/index.html) 

[广告](https://www.v2ex.com/advertise)

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sQZCiJD8Gza9iH1vnhhGOUjfAviUjgukZ37oPJNYWIGI/https://cdn.wwads.cn/creatives/TJiqU9LJrfPyyBbauAna1Lptzb4pf9CYdWn8FTCs.jpg)](https://wwads.cn/click/bundle?code=haO6ppLGuZZOBN7EznLTQv1kfIGFGm)

[**【天翼云 翼企领先数智升级】**S3通用型云主机**低至¥9.5元/月💰️ 热门数据库1️⃣元加购！**](https://wwads.cn/click/bundle?code=haO6ppLGuZZOBN7EznLTQv1kfIGFGm)[![](https://proxy-prod.omnivore-image-cache.app/0x0,sh-F8HZE9hhpmRpUXEon0DZfRcIHysUL48lb8cz30ess/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 210' fill='%23a6b7bf'%3E%3Cpath d='M24.25 211.46L0 197.46l57-98.73a74.004 74.004 0 11128.18 74l-7 12.12-24.25-14 7-12.12a46.002 46.002 0 00-79.68-46z'/%3E%3Cpath d='M121.21 209.73a74.07 74.07 0 01-64.21-37l-7-12.12 24.25-14 7 12.12a46.002 46.002 0 1079.68-46l-57-98.73 24.25-14 57 98.73a74 74 0 01-64 111z'/%3E%3Cpath d='M235.09 209.73h-114a74 74 0 010-148h14v28h-14a46 46 0 000 92h114z'/%3E%3C/svg%3E)广告](https://wwads.cn/?utm%5Fsource=property-124&utm%5Fmedium=footer "点击了解万维广告联盟")

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

[![liyafe1997](https://proxy-prod.omnivore-image-cache.app/0x0,sPAWaE-7hAYATov-LNAzeC2VXiH8jOd0cqI7DiSO4UM4/https://cdn.v2ex.com/avatar/524e/7d08/32249_large.png?m=1685622295)](https://www.v2ex.com/member/liyafe1997)

[V2EX](https://www.v2ex.com/)  › [Android](https://www.v2ex.com/go/android)

[liyafe1997](https://www.v2ex.com/member/liyafe1997) · 2 小时 44 分钟前 · 77 次点击 

从安全的角度讲，直接禁用掉整个 USB slave system ，禁止任何数据传输不是更安全吗？

目前尚无回复

[USB](https://www.v2ex.com/tag/USB)[slave](https://www.v2ex.com/tag/slave)[mtp](https://www.v2ex.com/tag/mtp)[禁用](https://www.v2ex.com/tag/%E7%A6%81%E7%94%A8)

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sQZCiJD8Gza9iH1vnhhGOUjfAviUjgukZ37oPJNYWIGI/https://cdn.wwads.cn/creatives/TJiqU9LJrfPyyBbauAna1Lptzb4pf9CYdWn8FTCs.jpg)](https://wwads.cn/click/bundle?code=haO6ppLGuZZOBN7EznLTQv1kfIGFGm)

[**【天翼云 翼企领先数智升级】**S3通用型云主机**低至¥9.5元/月💰️ 热门数据库1️⃣元加购！**](https://wwads.cn/click/bundle?code=haO6ppLGuZZOBN7EznLTQv1kfIGFGm)[![](https://proxy-prod.omnivore-image-cache.app/0x0,sh-F8HZE9hhpmRpUXEon0DZfRcIHysUL48lb8cz30ess/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 210' fill='%23a6b7bf'%3E%3Cpath d='M24.25 211.46L0 197.46l57-98.73a74.004 74.004 0 11128.18 74l-7 12.12-24.25-14 7-12.12a46.002 46.002 0 00-79.68-46z'/%3E%3Cpath d='M121.21 209.73a74.07 74.07 0 01-64.21-37l-7-12.12 24.25-14 7 12.12a46.002 46.002 0 1079.68-46l-57-98.73 24.25-14 57 98.73a74 74 0 01-64 111z'/%3E%3Cpath d='M235.09 209.73h-114a74 74 0 010-148h14v28h-14a46 46 0 000 92h114z'/%3E%3C/svg%3E)广告](https://wwads.cn/?utm%5Fsource=property-124&utm%5Fmedium=footer "点击了解万维广告联盟")

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

---

