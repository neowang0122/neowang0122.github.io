---
{}
---
# Newsletter 邮件订阅推送至 rss

英语互联网有很多博客、网站提供 Newsletter 订阅的方式。对应的平台发布的文章会第一时间发到注册时后填写的邮箱。

常见的一些有 [Morning Brew](https://www.morningbrew.com/daily), [- Get the latest from Ray Dalio](https://www.economicprinciples.org/subscribe) 等。

我们可以通过 github 上免费的服务 [GitHub - leafac/kill-the-newsletter: Convert email newsletters into Atom feeds](https://github.com/leafac/kill-the-newsletter) 来实现推送的邮件转 rss 订阅，并使用 rss 阅读器统一收集。点击这边就能马上注册 [Kill the Newsletter!](https://kill-the-newsletter.com/)。

订阅完成后在对应的网站订阅区填写你获得的邮箱 xxx@kill-the-newsletter.com , 然后在 rss 阅读器的地方添加获得的 rss 订阅地址 [kill-the-newsletter.com/feeds/xxx.xml](https://kill-the-newsletter.com/feeds/xxx.xml) 即可实现 Newsletter 邮件订阅推送至 rss 阅读器。

## 关于 rss，请访问这篇文章 👉 [[rss]]

## 可能会遇到的问题 

因为很多网站会有邮箱域名检测机制，可能不支持 github 项目所提供的邮箱地址 xxx@kill-the-newsletter.com 。

### Gmail for Newsletter Subscription

这个时候我们可以免费申请一个免费的邮箱如 Gmail 等，在 email settings 里面**开启 auto forwarding** 并填写对应的 xxx@kill-the-newsletter.com 邮箱。在首次接受到 rss 推送后点击确认即可实现自动转发。

![[20240322-1845-04_Pasted image 20240322183913.png]]