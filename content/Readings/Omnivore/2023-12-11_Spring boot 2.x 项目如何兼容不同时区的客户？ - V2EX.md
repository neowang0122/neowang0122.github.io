---
id: 0fe8f18c-9824-11ee-8c96-f766a74a1b94
title: |
  Spring boot 2.x 项目如何兼容不同时区的客户？ - V2EX
author: |
  unknown
date_saved: 2023-12-11 04:37:00
date_published: 2023-12-11 04:37:00
draft: true
---

# Spring boot 2.x 项目如何兼容不同时区的客户？ - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/spring-boot-2-x-v-2-ex-18c58ef1d22)

[Read Original](https://www.v2ex.com/t/999455)

date_saved: 2023-12-11 04:37:00

date_published: 2023-12-11 04:37:00

--- 

# Full Content: 

目前有个 spring boot 2.7.15 的项目，已经开发了很多的功能。突然来了一个需求，存在美国的客户，如果是美国的客户打开的页面，时间数据都需要转换成美国客户的当地时区对应的时间，客户插入的数据对于在中国的客户而言，需要转换成 CST 时区的时间。

也就是一个系统兼容多个时区的客户，时间需要都需要基于客户的时区处理掉。

目前主要涉及的场景挺多的，比如 mysql 的数据查询和查询，查询的话用户给的时间筛选条件都得处理，查询结果中的时间类型的值需要处理，java 代码中的 LocalDate.now()之类的时间创建操作也要处理。表单提交的时间值都需要处理。。。

整理一下，大概有如下场景需要处理 1.各种接口请求参数 这个可以 AOP 拦截 全部处理掉 2.java 代码中的时间创建 3.数据库中的时间创建 比如使用了 insert values (now()) 这种函数 或者时间字段设置了默认值 4.数据库查询返回了时间值 5.调用外部接口返回的值中的时间 ....

需求目前只是大致的分析了一点，不知道各位大佬是否经历过这样的需求？给一点点经验吧

| ![psx2019](https://proxy-prod.omnivore-image-cache.app/0x0,sL0AKtgJC85mSTAKak5dHiE8K622CkYVtlxmQu35RaeI/https://cdn.v2ex.com/gravatar/ff65d68c7ae1ce898c526bf6634f2ce6?s=48&d=retro) | 2 **[psx2019](https://www.v2ex.com/member/psx2019)** 3 小时 6 分钟前 永远只存绝对时间戳,时区什么的是前端需要考虑的问题. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |

| ![Kyle18Tang](https://proxy-prod.omnivore-image-cache.app/0x0,shWXcGwNFQ0LsudCPnL6Xalrhtu18AZtFRWSAFPAZ44c/https://cdn.v2ex.com/gravatar/89e5552e494ac11b704d13a891cb7c36?s=48&d=retro) | 4 **[Kyle18Tang](https://www.v2ex.com/member/Kyle18Tang)** 2 小时 33 分钟前 如果代码中都是用的 LocalDateTime ，那么请求响应使用 ISO-8601 的时间格式。统一在序列化反序列化的时候转成数据库时区。 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |

| ![uselessVisitor](https://proxy-prod.omnivore-image-cache.app/0x0,s0YbuR_iq5kyv54Zij36IxKNRTf0CAi9TuoUFGuLZ3OA/https://cdn.v2ex.com/avatar/4bf7/3b80/502847_normal.png?m=1621923801) | 6 **[uselessVisitor](https://www.v2ex.com/member/uselessVisitor)** 43 分钟前 中间加这种破坏性的需求就很烦啊，最方便的就是改成时间戳，刷数据一劳永逸。不然为了这个需求会引入很多屎山 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sJj-m7-BqpMma4LNUakZQ3yglN4KMGITtmIbpSM52FfY/https://cdn.wwads.cn/creatives/BxggxkTpCskMakRFy6ULtw7ZRcqABN83j1KPAQrq.jpg)](https://wwads.cn/click/bundle?code=9pbCsuxfJsepo1tj3c472JOfWfoBKg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

---

