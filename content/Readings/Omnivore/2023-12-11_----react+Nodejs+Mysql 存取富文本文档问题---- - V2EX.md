---
id: 10683398-9824-11ee-ab31-fb0894025b8b
title: |
  ****react+Nodejs+Mysql 存取富文本文档问题**** - V2EX
author: |
  unknown
date_saved: 2023-12-11 04:27:50
date_published: 2023-12-11 04:27:50
draft: true
---

# ****react+Nodejs+Mysql 存取富文本文档问题**** - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/react-nodejs-mysql-v-2-ex-18c58ef2068)

[Read Original](https://www.v2ex.com/t/999450)

date_saved: 2023-12-11 04:27:50

date_published: 2023-12-11 04:27:50

--- 

# Full Content: 

请问如下功能用啥算法或类库能比较容易实现, 谢谢

react+Nodejs+Mysql 开发一个 app, 部署在 AWS 上.   
需要用户在前端输入内嵌视频图片的富文本文档,   
然后保存到后端 Mysql,   
以后用户可以随时在前端请求后端读取该富文本文档

难点是内嵌富文本的视频和图片如何存储,谢谢

| ![Angela2022](https://proxy-prod.omnivore-image-cache.app/0x0,sLgf8jEsz5i7holbsBTKXOwP89g0ZArZtpMSGMJzuQ18/https://cdn.v2ex.com/avatar/c97e/b02e/595802_normal.png?m=1668824323) | 2 **[Angela2022](https://www.v2ex.com/member/Angela2022)** 3 小时 9 分钟前 难点是内嵌富文本的视频和图片如何存储, 如果要把图片和视频从富文本剥离出来, 单独存储请问如何实现 谢谢 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |

| ![DingJZ](https://proxy-prod.omnivore-image-cache.app/0x0,sy4A6q1uABzAAdtOy61pE55xq6tYoVioiqM_VG5tkTCU/https://cdn.v2ex.com/gravatar/2e2933a01e958ffd73e04b88e1c8e3c0?s=48&d=retro) | 3 **[DingJZ](https://www.v2ex.com/member/DingJZ)** 2 小时 55 分钟前 这应该都是富文本的基本功能，富文本里只放链接，富文本中放的附件直接上传转成链接 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |

| ![NerbraskaGuy](https://proxy-prod.omnivore-image-cache.app/0x0,siUNWrI2kBcSvzRLInE6FdjWEtetrkfTsjbEorlOC4k8/https://cdn.v2ex.com/avatar/688c/cf80/590428_normal.png?m=1700730652) | 4 **[NerbraskaGuy](https://www.v2ex.com/member/NerbraskaGuy)** 2 小时 47 分钟前 ![❤️](https://proxy-prod.omnivore-image-cache.app/14x0,saoR_MvJ3uJ2jLgEyiT6R-483tterapDmryp9rdXOHYc/https://www.v2ex.com/static/img/heart_neue_red.png?v=16ec2dd0a880be6edda1e4a2e35754b3) 1 媒体类肯定得走 CDN 吧，你不会意思是图片用 base64 格式存 mysql 那种吧，现在富文本编辑器不都是插入图片和视频先上传获取链接再保存文本么 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| ![kemistep](https://proxy-prod.omnivore-image-cache.app/0x0,sqDkcges4FpUVj7y0UqmVoIW6m-jc7m5BRqzKzmn4Tek/https://cdn.v2ex.com/gravatar/8b10396d3529d8354ec4bf33ef723353?s=48&d=retro) | 5 **[kemistep](https://www.v2ex.com/member/kemistep)** 2 小时 31 分钟前 href 链接地址，然后前端渲染即可 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sJj-m7-BqpMma4LNUakZQ3yglN4KMGITtmIbpSM52FfY/https://cdn.wwads.cn/creatives/BxggxkTpCskMakRFy6ULtw7ZRcqABN83j1KPAQrq.jpg)](https://wwads.cn/click/bundle?code=1OPuieBdY1YZfo7NHdSjn9HvNVk618)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

---

