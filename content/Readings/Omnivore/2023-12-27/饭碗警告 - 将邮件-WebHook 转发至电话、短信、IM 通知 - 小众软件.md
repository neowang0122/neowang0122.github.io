---
id: 5fc19d6a-a492-11ee-8244-17ee991434a4
title: |
  饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 - 小众软件
author: |
  青小蛙
date_saved: 2023-12-27 01:57:54
date_published: 2023-12-27 01:57:54
---

# 饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/web-hook-im-18caa66b690)

[Read Original](https://www.appinn.com/fwalert/)

## Highlights

> **饭碗警告**是一个非常实用的信息转发工具，它能够将你收到的邮件、WebHook 推送转发至电话、短信、Telegram 通知、App 通知，甚至再转发到邮件，或者 WebHook。 [⤴️](https://omnivore.app/me/web-hook-im-18caa66b690#a8d9706b-a5e7-4d6e-ad8f-02576cb7a216)  ^a8d9706b


--- 

Full Content: 

**饭碗警告**是一个非常实用的信息转发工具，它能够将你收到的邮件、WebHook 推送转发至电话、短信、Telegram 通知、App 通知，甚至再转发到邮件，或者 WebHook。@[Appinn](https://www.appinn.com/fwalert/)

![饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知](https://proxy-prod.omnivore-image-cache.app/1608x700,soIVUoERx8BFGgqpcorZzPlEIzVUSzj8kNeNBSQyiz54/https://www.appinn.com/wp-content/uploads/2023/12/Appinn-feature-images-11.jpg "饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 1")

说来话长，早在 2021 年，开发者在[**发现频道**](https://meta.appinn.net/c/faxian/10)推荐了自己：<https://meta.appinn.net/t/topic/24471>

当时的青小蛙吐槽他们排版[太烂](https://meta.appinn.net/t/topic/24471/2?u=qingwa)，但没有获得反馈后，就忘记这个事情了。直到…今年初（2023年），青小蛙准备开 MJ 车了。

开 Midjourney 的车有个问题，就是登录的时候需要邮件验证，那太麻烦了，家庭成员每次都找我要链接吃不消的。于是**我自己**找到了这个工具 😂 

已经忘记从哪找到的了，但最终实现的效果就是：

1. 当有人登录 Midjourney 的时候，会发邮件给我
2. 我在邮箱中设置自动转发给饭碗警告
3. 饭碗警告发送消息给 Telegram 群组

实现了每个人都可以收到验证邮件：

![饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 1](https://proxy-prod.omnivore-image-cache.app/748x248,s0FPysF7zVhVdXUD-4SGg_X9HCR9rtS7YOqP2ioqHz1c/https://www.appinn.com/wp-content/uploads/2023/12/Appinn-2023-12-27-14.26.48@2x.jpg "饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 2")

当时搞完自己都觉得很赞。但是，一直忘记介绍这个工具了。

也不知道现在介绍是不是有点晚了，看起来，他们的 App 已经快两年没有更新，不过其它推送渠道一直正常。

## 接收 2 种消息

1. 邮件（饭碗警告提供一个特殊的邮箱地址，将邮件转发过去即可
2. WebHook（饭碗警告提供一个特殊的 WebHook 地址，将信息 POST 过去即可）

## 转发到 6 个渠道

1. 邮箱
2. 短信
3. 电话
4. Telegram
5. 饭碗警告 App
6. Webhook

注意，邮箱、短信和电话渠道需要付费使用，其它三个免费：

| 类型       | 价格      | 适用于       |
| -------- | ------- | --------- |
| 邮箱       | 0.02元/次 | 提醒及时性要求一般 |
| 短信       | 0.1元/次  | 提醒及时性要求较高 |
| 电话       | 0.2元/次  | 提醒及时性要求极高 |
| Telegram | 免费      | 提醒及时性要求较高 |
| 「饭碗警告」应用 | 免费      | 提醒及时性要求较高 |
| Webhook  | 免费      | 提醒及时性要求极高 |

## 提取消息内容

这是整个过程中的关键，通过[正则表达式](https://www.appinn.com/tag/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/)、CSS 选择器等工具来获取到邮件中的具体内容：

![饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 2](https://proxy-prod.omnivore-image-cache.app/802x716,srB0AUrDvRvbZX-l1pdoH_h8xqS808l0cICCb6tFkETc/https://www.appinn.com/wp-content/uploads/2023/12/Appinn-2023-12-27-14.35.16@2x.jpg "饭碗警告 - 将邮件/WebHook 转发至电话、短信、IM 通知 3")

在以前写规则比较麻烦，不懂正则简直想打人。但现在把你想要的给 [AI](https://www.appinn.com/chatgpt-guides/) 说一下就行了，就什么都有了。

## 获取

* [官网](https://fwalert.com/435224)（饭碗警告自带的邀请新用户链接）

---

原文：https://www.appinn.com/fwalert/

饭碗，应该是 forward 的意思 😂

那个，你有转发消息的需求嘛？
