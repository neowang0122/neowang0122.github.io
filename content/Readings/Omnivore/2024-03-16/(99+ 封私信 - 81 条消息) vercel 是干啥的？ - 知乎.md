---
id: a2b835bb-1b49-487c-a2b7-9a7f09fec1ae
title: |
  (99+ 封私信 / 81 条消息) vercel 是干啥的？ - 知乎
date_saved: 2024-03-16 12:00:20
---

# (99+ 封私信 / 81 条消息) vercel 是干啥的？ - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/99-81-vercel-18e47fe1e2e)

[Read Original](https://www.zhihu.com/question/529047706)

## Highlights

> Vercel 是一个用来部署前端应用的[云平台](https://www.zhihu.com/search?q=%E4%BA%91%E5%B9%B3%E5%8F%B0&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)，但也可以用来构建轻量级的[事件驱动](https://www.zhihu.com/search?q=%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D) API，并部署到它们的全球边缘网络。 [⤴️](https://omnivore.app/me/99-81-vercel-18e47fe1e2e#74dad5e0-ce5e-474c-8b9a-5461f348cbfb)  ^74dad5e0

> 传统 API 托管在运行着的服务器上。当应用需要扩展时，希望更低成本、更灵活、更安全、资源快速分配并启动等等，使用传统服务器很难做到。但是用 Serverless 就比较容易，因为仅仅是一些后端代码片段在无状态环境中运行着，它们由事件（比如 [http 请求](https://www.zhihu.com/search?q=http%20%E8%AF%B7%E6%B1%82&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)）触发并只在一次调用中存活。这可以全部自动化并且在毫秒级扩展。更好的是，不用再维护服务器了。开发者只需要关注业务逻辑——返回值的函数。 [⤴️](https://omnivore.app/me/99-81-vercel-18e47fe1e2e#a279bd9d-9d59-4836-953b-a6905355aa06)  ^a279bd9d


--- 

Full Content: 

关注者

**32**

被浏览

**242,494**

[![Jeff Tian](https://proxy-prod.omnivore-image-cache.app/0x0,sPEu3e3_GcLAzs1MgU-9C6CvcBShZ8IxnTEbxeVDs6Mk/https://picx.zhimg.com/v2-68b19d20996cd73e68000efd5d238d0f_l.jpg?source=1def8aca)](https://www.zhihu.com/people/jefftian)

[Jeff Tian](https://www.zhihu.com/people/jefftian)

[​](https://www.zhihu.com/question/48510028)​![](https://proxy-prod.omnivore-image-cache.app/0x0,sRpP1H2oa_TfsDLpATwsIt6ipVLRN7HlUZGTch2Ee4JQ/https://picx.zhimg.com/v2-4812630bc27d642f7cafcd6cdeca3d7a.jpg?source=88ceefae)

复旦大学 工程硕士

​ 关注

32 人赞同了该回答

多年前写的 Koa Js 服务，本来跑在服务器上，要一点花销。后来决定薅各大云厂商的羊毛，就将它容器化了，跑在免费的 Okteto 提供的 K8S 环境里。但是最近 Okteto 提供的 url 访问不了了，虽然发了邮件请 Okteto 帮忙协助，但是本着[狡兔三窟](https://www.zhihu.com/search?q=%E7%8B%A1%E5%85%94%E4%B8%89%E7%AA%9F&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)的原则，决定再部署一个实例到其他的服务上。

于是将目光瞄准到 Vercel，Vercel 提供免费的 Serverless Function，虽然类似 AWS Lambda，但又不太一样，所以记录一下。如果只是将 koa 服务部署到 AWS lambda，那么只需要使用一个 serverless-http 的框架转化一下就好。关于薅 AWS Lambda 羊毛的文章已经写过多篇，参见：

<https://zhuanlan.zhihu.com/p/415577362>

<https://zhuanlan.zhihu.com/p/351889768>

## Koa Js

Koa Js 是由 Express Js 的原班人马设计的 Web 框架，更小巧但是不再捆绑任何中间件，这一点也是我在将它部署到 Vercel 时碰到坑的原因。尽管它比 Express 新，但 [Express.js](https://www.zhihu.com/search?q=Express.js&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D) 仍然更加流行，也许这也是 Vercel 内置对 Express.js 的支持的原因吧。

Express Js 目前的[星标数](https://www.zhihu.com/search?q=%E6%98%9F%E6%A0%87%E6%95%B0&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)在 57.6 K，而 koa 的星标数大约是它的一半多一点：

![](https://proxy-prod.omnivore-image-cache.app/1962x608,sY8cXiC5JEejnZZz10NjR1jNO5KPki5p55ZHNbd3Jw68/https://pic1.zhimg.com/50/v2-ebfa1f0a6621da75e26a8decc93052ec_720w.jpg?source=1def8aca)

image.png

![](https://proxy-prod.omnivore-image-cache.app/1946x578,s55OtPZFln6AONu8Z9jXUACFu2KS9cKkj021fs20TZh4/https://pica.zhimg.com/50/v2-43b5df7dc047094ce6ab53c43fdf47b9_720w.jpg?source=1def8aca)

image.png

看了一下 koa 的贡献者列表，我居然也名列其中呢：

![](https://proxy-prod.omnivore-image-cache.app/1376x1396,sYx82yS_YLPCNjZadXRGf5CRUtrmYZvqEvqDqM2R-jQQ/https://picx.zhimg.com/50/v2-8323025c2155539dbb6b7d050fa96b04_720w.jpg?source=1def8aca)

image.png

## Vercel

==Vercel 是一个用来部署前端应用的====[云平台](https://www.zhihu.com/search?q=%E4%BA%91%E5%B9%B3%E5%8F%B0&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)====，但也可以用来构建轻量级的====[事件驱动](https://www.zhihu.com/search?q=%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)== ==API，并部署到它们的全球边缘网络。== 

## Vercel 的 Serverless Function 有些特别

==传统 API 托管在运行着的服务器上。当应用需要扩展时，希望更低成本、更灵活、更安全、资源快速分配并启动等等，使用传统服务器很难做到。但是用 Serverless 就比较容易，因为仅仅是一些后端代码片段在无状态环境中运行着，它们由事件（比如== ==[http 请求](https://www.zhihu.com/search?q=http%20%E8%AF%B7%E6%B1%82&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)====）触发并只在一次调用中存活。这可以全部自动化并且在毫秒级扩展。更好的是，不用再维护服务器了。开发者只需要关注业务逻辑——返回值的函数。==

如果我们部署一个服务器程序到 Serverless Function，我们就为每个请求执行了一个完整的服务器实现，这是一个反模式，因为 Serverless 函数仍然是函数，只应服务于一个目的。将服务器程序部署在 Serverless Function 上，相当于强行将庞大的逻辑混杂在一个函数里。虽然这是一个反模式，但是羊毛在那里，不得不薅。对于有钱的企业级服务器程序，还是建议绕道。

Vercel 的 Serverless Function 和 AWS Lambda 很像，比如都是一个对外暴露 handler 函数的模块，但是特别之处在于其 handler 签名不一样。AWS Lambda 的 handler：

```routeros
export default const handler = (event, context) => 'Hello World'

```

但是 Vercel 的 handler 接收一个 req 和 res 参数（[https://github.com/Jeff-Tian/v/blob/master/api/test.js](https://link.zhihu.com/?target=https%3A//github.com/Jeff-Tian/v/blob/master/api/test.js)）：

```routeros
export default function handler(req, res) {
    const { name = 'World' } = req.query;
    return res.send(`Hello ${name}!`);
}

```

[https://v.pa-pa.me/api/test?name=Jeff](https://link.zhihu.com/?target=https%3A//v.pa-pa.me/api/test%3Fname%3DJeff)：  

![](https://proxy-prod.omnivore-image-cache.app/870x268,s0vDsO9-JU5JMPXMWpCk9BReXs2ikYdX9Jj0q_BdSe1I/https://picx.zhimg.com/50/v2-2fa16265df351c3ff8cd5aa7f871f3ac_720w.jpg?source=1def8aca)

image.png

这签名看起来很像是 Express.js 中间件，有意思的是，它真的支持完整的 Express.js 应用，只需要将入口文件放在 /api/index.js 里即可。

## Vercel Serverless Function 对 Koa 的支持

经过实验，Vercel Serverless Function 是不支持 Koa.js 应用的。因为它的签名和 (ctx, next) => ctx.body = 'Hello' 这种 Koa.js 风格就不相容。

## koa-to-express

想将 Koa 应用搬到 Vercel Serverless Function，但是不希望改已有的 Koa 代码，最自然的方式莫过于增加一个 [adapter](https://www.zhihu.com/search?q=adapter&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)，将 koa 风格的[中间件函数](https://www.zhihu.com/search?q=%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%87%BD%E6%95%B0&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)适配成 express.js 的中间件函数。于是找到了 koa-to-express 这个库。

### 增加 /api/index.js 文件

该 index.js 引用 Koa 应用的入口文件，并将它的[中间件](https://www.zhihu.com/search?q=%E4%B8%AD%E9%97%B4%E4%BB%B6&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)做个转换，伪装成一个 Express.js 应用。这样，原来的 Koa 应用在服务器环境中仍然照常运行，同时又可以在 Vercel Serverless Function 环境里运行。如果再使用 serverless-http，再在 AWS Lambda 里部署一个适配，那么就是名副其实的“狡兔三窟”了。

![](https://proxy-prod.omnivore-image-cache.app/932x1568,sH3XTdt2ryipy_T3Zv8OQBa1pwxXRE-HH-4uDR8n4TUA/https://picx.zhimg.com/50/v2-e229d8fb70235bcf704c0ec6f59c6f9b_720w.jpg?source=1def8aca)

image.png

### 修复 koa-to-express 的一个 BUG

其实没有那么顺利，由于原 Koa 应用使用了 [koa-router](https://www.zhihu.com/search?q=koa-router&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D) 这个中间件，触发了 koa-to-express 的一个 BUG。于是只能 Fork 了 koa-to-express ，在自己的版本中做了修复。虽然给原作者提交了 PR，但在他合并并发新版之前，我得临时使用自己的版本，于是要对 package.json 做个修改，在安装 koa-to-express 时，从自己的仓库里下载代码：

[https://github.com/Jeff-Tian/v/commit/cd11bf4f7100fd61ef9dda98397eb255b764a396#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519](https://link.zhihu.com/?target=https%3A//github.com/Jeff-Tian/v/commit/cd11bf4f7100fd61ef9dda98397eb255b764a396%23diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)

package.json:

```1c
-    "koa-to-express": "^3.1.4",
+    "koa-to-express": "git+https://github.com/jeff-tian/koa-to-express.git",

```

给它们的 PR 链接：[https://github.com/xingxingted/koa-to-express/pull/10/files](https://link.zhihu.com/?target=https%3A//github.com/xingxingted/koa-to-express/pull/10/files)

### 完成 /api/index.js

最终的 /api/index.js 文件如下：  
[https://github.com/Jeff-Tian/v/blob/cd11bf4f7100fd61ef9dda98397eb255b764a396/api/index.js](https://link.zhihu.com/?target=https%3A//github.com/Jeff-Tian/v/blob/cd11bf4f7100fd61ef9dda98397eb255b764a396/api/index.js)

```javascript
const k2e = require('koa-to-express');

process.env.ROUTER_PREFIX = '/api';

const app = require('../app');

const expressApp = require('express')();

app.middleware.map(m => {
    expressApp.use(k2e(m));
})

module.exports = expressApp;

```

### [重定向](https://www.zhihu.com/search?q=%E9%87%8D%E5%AE%9A%E5%90%91&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2576302166%7D)

Vercel Serverless Function 默认将 /api/xxx 路由到 /api/xxx.js，所以 /api/xy/z，就不会被 /api/index 处理，所以需要增加一个 vercel.json 文件，将所有 /api/ 下的请求，重定向到 index.js：

```json
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}
```

## 完成

效果和在服务器上运行 koa 一模一样：

![](https://proxy-prod.omnivore-image-cache.app/1330x672,sGgZckiiNNR4dfoofXcfaXENT3Yshm1ZUcr7e38QUh68/https://pic1.zhimg.com/50/v2-0b603064173664cb8008923520620fa0_720w.jpg?source=1def8aca)

image.png

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbmeUZ55KQ99Xo02RaeNLaQIQ1RnnPSHXCdFChzXU0bY/https://picx.zhimg.com/v2-68b19d20996cd73e68000efd5d238d0f_l.jpg?source=f2fdee93)

Jeff Tian

74 次咨询

5.0

零售业 后端工程师

4885 次赞同

去咨询

[编辑于 2022-07-24 06:19](https://www.zhihu.com/question/529047706/answer/2576302166)

真诚赞赏，手留余香

赞赏

还没有人赞赏，快来当第一个赞赏的人吧！

​赞同 32​​3 条评论​收藏​喜欢

​

收起​

[![yeekal](https://proxy-prod.omnivore-image-cache.app/0x0,sS579HIq3qCaDWhPO0SPDZsDoLdLJHqLikyLe4ToQu-w/https://picx.zhimg.com/v2-65d8a0e36f4f4949747f8c9875b5d196_l.jpg?source=1def8aca)](https://www.zhihu.com/people/yeekal)

[yeekal](https://www.zhihu.com/people/yeekal)

关于Robotics, AI, Technology

​ 关注

11 人赞同了该回答

![](https://proxy-prod.omnivore-image-cache.app/2314x408,sQxDdRHTp7OO60rGP0r12f8pRCeIl2dGu0zW1JTuh3vQ/https://picx.zhimg.com/50/v2-e2982dcc7db7c6721a5d02fffe2d2d15_720w.jpg?source=1def8aca)

## Vercel: 搭建[个人独立博客](https://www.zhihu.com/search?q=%E4%B8%AA%E4%BA%BA%E7%8B%AC%E7%AB%8B%E5%8D%9A%E5%AE%A2&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)

[Vercel](https://link.zhihu.com/?target=https%3A//vercel.com/) 是知名的网站托管平台，可以高效创建和部署 Web [应用程序](https://www.zhihu.com/search?q=%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)，类似于Github pages 和 Netlify. 但[远为](https://www.zhihu.com/search?q=%E8%BF%9C%E4%B8%BA&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)更加强大，速度也很快。与Github账号连接可以无缝衔接对网站进行构建和部署，并且每次提交commit之后会自动更新网站。

![](https://proxy-prod.omnivore-image-cache.app/2340x1195,scdMy_wAl4EXt19XMr9YU3lq8ZMPyPs9mIKiHaiSg5JI/https://picx.zhimg.com/50/v2-370b9f52f8cb72332c74fac184c12ac2_720w.jpg?source=1def8aca)

Vercel [免费版](https://www.zhihu.com/search?q=%E5%85%8D%E8%B4%B9%E7%89%88&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)提供每月100G的带宽服务，这对于个人简单的博客来说完全够用了。基于其丰富的模板和简捷的部署流程，Vercel成了很多人构建[个人博客](https://www.zhihu.com/search?q=%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)的首选白嫖方案。

Vercel 支持几乎所有流行的前端框架，在模板库里提供了对应的上手实操小项目。比如我其实对前端不怎么熟悉，在模板库里只认识python.

![](https://proxy-prod.omnivore-image-cache.app/1953x1120,s7rQnEr6_4Z92tGm_rbxxmANdYm3sDdU55NxZQpS8zCQ/https://pic1.zhimg.com/50/v2-5829d2eb8cdeb118fbe33eb5af5b1fb6_720w.jpg?source=1def8aca)

点进去之后，点击 `Deploy` 就会跳转到部署界面。

![](https://proxy-prod.omnivore-image-cache.app/2070x1129,s8wmcBYvn5MgjQyXrECRTbjXYPHzDlh3YqrUKZ693P3o/https://pic1.zhimg.com/50/v2-fb830738a9c5c5f63f5a65ee51e97ae2_720w.jpg?source=1def8aca)

在该界面会提示用户在个人的Github空间创建一个新的仓库存放代码，之后点击 `Create` 就会真正开始部署。

![](https://proxy-prod.omnivore-image-cache.app/2036x1050,sVxFlcmke73YtRy696fyDHuG6AVSbE2-RmnWyE8nIQi4/https://pica.zhimg.com/50/v2-66fdad08f1106dd75a6db54d1390a720_720w.jpg?source=1def8aca)

完成之后点击网址会看到如下的界面，说明部署完成。虽然页面很简单，但是稍微丰富一下，你就拥有了自己的博客网站，任何人可以随时随地访问。

![](https://proxy-prod.omnivore-image-cache.app/1287x297,sdXCRNY4DAouLz4P-DYi5xBeIwT-tJIVVk6gJTXPmcdw/https://picx.zhimg.com/50/v2-afb5af890e9f4f41ca666ed56373fb0d_720w.jpg?source=1def8aca)

但是，很不幸， Vercel 平台在2021年开始国内断断续续出现无法访问的情况。

然而，幸运的是，互联网是万能的，接下来我们可以通过另一种方式达到[曲线救国](https://www.zhihu.com/search?q=%E6%9B%B2%E7%BA%BF%E6%95%91%E5%9B%BD&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)的目的。

## CloudFlare: 给博客网址开一扇门

CloudFlare 的主流服务是[域名解析](https://www.zhihu.com/search?q=%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)，简单来说就是当你输入`baidu.com`的时候告诉计算机它所指向的ip地址是什么。这也是一个可以白嫖的网站，因为基础版的域名解析也是免费的。虽然免费，功能却一样不少，甚至更安全更丰富。CloudFare对域名解析的同时提供[代理服务](https://www.zhihu.com/search?q=%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3141665419%7D)，隐藏真实的ip，保护站点免受不法攻击。

Vercel 部署之后会自动生成一个以`vercel.app`为后缀的域名，也支持自定义域名。自定义域名可以通过CloudFare进行域名解析并利用代理服务达到访问Vercel的目的。

之前在阿里云买了一个域名，在阿里云买的域名默认在阿里云设置域名解析。如果要在Cloudflare进行解析，需要在阿里云设置使用Cloudflare的域名解析服务器，之后才可以在Cloudflare设置域名解析。类似于把改名字的权限先移交，再进行改名操作。

![](https://proxy-prod.omnivore-image-cache.app/1820x364,sNnUqp8DeVMgRyd0NqS8Av9CpDYBYDywxxP5l2ZkwyXY/https://picx.zhimg.com/50/v2-24e70027f77c310ba756203328e5a7f6_720w.jpg?source=1def8aca)

以之前部署的 Astro 博客模板为例。右侧域名 `yee-blog.vercel.app` 是默认生成的. 点击上述图片的`Domains`按钮，可以进行修改操作。其中`Edit`只是修改三级域名`yee-blog`的，类似`....vercel.app`的域名依然无法正常访问。这里就需要输入自己的域名并点击`Add`来添加。不过此时自己的域名还没有被解析到，需要先在CloudFare里面添加记录。

![](https://proxy-prod.omnivore-image-cache.app/2362x1035,sOag22tNTmBsppkjmV3ZSzgJOeaMfDAUEu6z2Cko4m9I/https://picx.zhimg.com/50/v2-9f623b4cc33b9c5d4e89dc47a0fe01b9_720w.jpg?source=1def8aca)

在 Cloudflare 添加一条`CNAME`类型的解析，比如这个博客模板就是把`vercel.yeekal.store`重定向到`yee-blog.vercel.app`，并打开 proxy 服务。

![](https://proxy-prod.omnivore-image-cache.app/2457x670,sCr7FLWnREkReaarRqLKIJADrQRPlNck1vkLhxtNfplE/https://pica.zhimg.com/50/v2-e26b1a7cae3ba1f74fae5262276d16e9_720w.jpg?source=1def8aca)

此时可以在Vercel里面添加自己的域名，添加之后会进行校验，校验完成就可以通过`vercel.yeekal.store`进行访问了。

把之前的几篇内容也添加进去了，github同步提交就会更新，非常方便，大家可以访问试一下 [https://vercel.yeekal.store/blog](https://link.zhihu.com/?target=https%3A//vercel.yeekal.store/blog) (仅作样例，博客还未完善).

![](https://proxy-prod.omnivore-image-cache.app/2261x1233,srgGWo5TIS8DjD8-6UbwLWL7GglHomiiXDK9QbyqM4Ts/https://picx.zhimg.com/50/v2-0e7a9c98a68a11f2b088550c5223a7ed_720w.jpg?source=1def8aca)

![](https://proxy-prod.omnivore-image-cache.app/1710x624,szRuZQGda1HbZs8jXoElE6b_UkfyyfxMUJgia6fyWqv0/https://picx.zhimg.com/50/v2-c6aaffb78a65ee2d365d1d022f36054e_720w.jpg?source=1def8aca)

[发布于 2023-07-29 22:04](https://www.zhihu.com/question/529047706/answer/3141665419)

​赞同 11​​添加评论​收藏​喜欢

​

收起​

[![OSRC](https://proxy-prod.omnivore-image-cache.app/0x0,sYPOst_vEAudSx_wTU8sqAW1P6hYvsnvtGO6ogPfY6n0/https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=1def8aca)](https://www.zhihu.com/people/osrc)

[OSRC](https://www.zhihu.com/people/osrc)

​ 关注

7 人赞同了该回答

Vercel 是一个网站托管服务平台，开发者可以将自己的网络应用部署、托管在平台上运行，最近非常火爆，国内也有类似的平台，是开源运行时社区（[http://osrc.com](https://link.zhihu.com/?target=http%3A//osrc.com)）

## **\# OSRC-开源运行时社区简介**

**\# OSRC-开源运行时社区简介**  
 Code is code,when it's running, [warm the world](https://www.zhihu.com/search?q=warm%20the%20world&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D)!

 OSRC ( Open Source Runtime Community, 开源运行时社区) 是基于云原生技术，让开源爱好者以运行时形态分享开源作品的社区服务。

**\## 开源运行时社区是啥？**

开源运行时社区是一个能力型社区，社区基于“云原生能力 + 社区分享“ 为[开源社区](https://www.zhihu.com/search?q=%E5%BC%80%E6%BA%90%E7%A4%BE%E5%8C%BA&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D)和团队服务，让开源项目可以在社区云原生平台运行起来，并分享给对项目感兴趣的人。

![](https://proxy-prod.omnivore-image-cache.app/680x493,syZ0QdHrCuY-s97zFzEQ4hmXkBeidnI8mZU4OySxpIhc/https://picx.zhimg.com/50/v2-685d2f739ff85b08ab3edb27bbc763cd_720w.jpg?source=1def8aca)

 软件代码运行起来是每一个软件作者的需求，运行起来的代码可以提供鲜活的使用体验，便于作者推广自己的作品，更容易找到欣赏者和用户。 

![](https://proxy-prod.omnivore-image-cache.app/635x435,s9XcKiM9Qy_Bb3L2zqu4VZkt0Skvbnyqw1h0jb6d0pa0/https://pic1.zhimg.com/50/v2-6abe0c9b1978c6536b07d753c5dc2d47_720w.jpg?source=1def8aca)

 OSRC提供的云原生能力像一个操作系统，希望能给用户提供极致的Serverless体验，目标是让用户开发、部署、管理在云端的应用与在个人电脑上管理各种软件实现一致的体验。 在开源运行时社区， 作者可以管理、配置自己的软件作品（开源项目），把代码运行起来给予目标用户鲜活的使用体验，针对作品和系统进行针对性的互动、沟通，发表出不同的声音，提供不同的想法；作品、作者、用户、团队各种要素发生化学反应... 

![](https://proxy-prod.omnivore-image-cache.app/964x777,sXply9xUihkGr8dBu75juZOmC6P3PsZEv9Dx3wW3Yxds/https://picx.zhimg.com/50/v2-6e3d520db7854ac0ad10782ae08c306a_720w.jpg?source=1def8aca)

  
**\## 开源运行时社区顺应开源大趋势**

开源是软件的未来、中国开源未来更好。据GitHub统计，中国开发者的贡献增长速度为全球最快，为GitHub贡献了550万个项目。据GitHub预测，到2030年中国开发者贡献将会超过美国成为全球最大贡献群体。

OSRC团队立志为推动开源社区向更成熟方向发展作出贡献的同时，帮助优秀的软件开发团队打造 由个人、团队和产品的IP影响力。

**\# 在开源运行时社区里能干啥？**

大体来说，围绕着[开源软件](https://www.zhihu.com/search?q=%E5%BC%80%E6%BA%90%E8%BD%AF%E4%BB%B6&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D)有两类人群， 第一群人是软件开发者和开源软件技术爱好者，对技术方面更感兴趣；第二群人是软件的使用者、软件项目建设者，围绕软件的功能特点或者性能要求等，目的是寻找合适的标的物；

和GitHub和Gitee主要提供代码版本管理不同，OSRC 提供的是软件运行起来的环境，从OSRC当前的官网看，在这里：  
1\. 开源作者可以把自己的软件作品部署到社区，把软件运行起来；  
2\. 社区里运行的软件给访问的用户真实的体验；  
3\. 软件作者可以和自己的粉丝在社区就软件就具体问题进行沟通交流，因为有了实际运行的系统，沟通交流更具体。

OSRC 社区将对接成熟的APaaS平台, 集成优秀第三方 APaaS 服务能力，与各种应用程序集成，让软件进行连接，轻松构建应用； 打造可连接的软件生态，让软件开发变的更容易。

OSRC团队定义云原生为一套基础软件开发设施（IPaaS），让用户可以高效部署自己的软件应用到云端 OSRC 为开发团队提供的IPaaS 服务，包括研效、质量、SLA等服务

OSRC团队立志为推动开源社区向更成熟方向发展作出贡献的同时，帮助优秀的软件开发团队打造 由个人、团队和产品的IP影响力。

OSRC 新的版本正在紧锣密鼓的推进，他们长期的目标是“ 帮助开源作品和作品团队扩大影响力，打造作品或团队IP，助力中国开源社区发展”，期待新版本尽快发布。

**\# 案例介绍** 下面给大家介绍一下几个比较开源社区优秀的项目在 OSRC 的部署过程： 

1\. Hertzbeat赫兹跳动： HertzBeat赫兹跳动支持网站，API，PING，端口，数据库，操作系统等监控类型，拥有易用友好的可视化操作界面的开源监控告警。 

 Hertzbeat 赫兹跳动部署过程 [呜呜](https://link.zhihu.com/?target=https%3A//osrc.com/user/articles/wiki%5F771691733172670464)Hertzbeat 赫兹跳动 OSRC 部署过程\]([Hertzbeat 赫兹跳动部署过程](https://link.zhihu.com/?target=https%3A//osrc.com/user/articles/wiki%5F771691733172670464) 

2\. 华夏ERP 华夏ERP基于SpringBoot框架和SaaS模式，立志为中小企业提供开源好用的ERP软件，目前专注进销存+财务+生产功能。同时对角色和权限进行了细致全面控制，精确到每个按钮和菜单。 

[华夏ERP 部署过程](https://link.zhihu.com/?target=https%3A//osrc.com/user/articles/wiki%5F774656942090801152) 

**\# OSRC - 开源运行时社区 - 核心概念说明**  Code is code,when it's running, warm the world!   
**\# 基本概念**

在使用 OSRC 前，可以先简单了解一下几个概念：云原生、应用、运行时、运行时实例、Pages。

**\## 1\. 云原生**

 业界领先的CNCF（Cloud-Native Compute Foundation，云原生计算基金会）成立于2015年， 其目的是在容器、微服务及devops领域里、通过一系列的规范和标准帮助企业和组织、在现代的[云化](https://www.zhihu.com/search?q=%E4%BA%91%E5%8C%96&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D)环境中构建架构一致的应用。 

![](https://proxy-prod.omnivore-image-cache.app/1357x848,sIM4fxOCLxxTkfgi0k-3CaJBJDvnMhKBmLsGYeaFm-ew/https://pic1.zhimg.com/50/v2-c324c9433430ee026592e3f973807b51_720w.jpg?source=1def8aca)

  
 CNCF定义的云原生三大特征：容器化封装、动态和自动化管理、面向微服务。此外，云原生强调自动化以提升能够开发效率和运维效率。

 OSRC 团队定义云原生为一套基础软件开发设施 （IPaaS），让用户可以**\*\*高效\*\***部署自己的软件应用到云端，并实现 **\*\*南北&东西向\*\*** 的网络访问。极致的 DevOps 和 CI/CD 是云原生的核心。

_\> 南北向网络访问：用户通过互联网访问基于云原生部署的应用_

_\> 东西向网络访问：云原生服务之间通过内部网络互相访问_

在此基础上，[云原生](https://www.zhihu.com/search?q=%E4%BA%91%E5%8E%9F%E7%94%9F&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D)还提供丰富的特性：

\- 1.1\. 安全

云原生系统应用行业领先的安全技术，帮助用户保护数据和应用。

\- 1.2\. 效率  
 \- Serverless 

服务器无感知化，OSRC提供的云原生能力像一个操作系统，希望能给用户提供极致的 Serverless 体验，目标是让用户开发、部署、管理在云端的应用与在个人电脑上管理各种软件实现一致的体验。

\- 1.3\. DevOps&CI/CD 

OSRC提供的CI/CD工具，让用户可以分钟级发布和更新应用，目前提供了Java 应用和 [nodejs](https://www.zhihu.com/search?q=nodejs&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D) SPA 应用相关工具。关于 OSRC 构建 DevOps&CI/CD 的细节，大家可以期待**\*\*进一步的分享\*\***！

\- 1.4\. 可靠性

AIOps、自动化运维、专业团队部署在云原生系统上的软件具备AIOps特性，使用先进的自动化运维工具，并且由专业的团队提供服务和技术支持，无论在软件特性和团队能力上，都应该提供一流的服务。

\- 1.5\. 可观测性

云原生提供丰富的工具，让用户可以方便的观测自身应用，包括先进的 APM 工具、日志管理&分析工具等等。

**\## 2\. 应用** 

OSRC 应用是基于云原生系统可运行的 **\*\*无状态\*\*** 应用，通过 OSRC 发布的 CI 工具，可以快速发布应用，相关案例分享见： \[OSRC 实战案例 - 赫兹跳动部署过程 \]([https://osrc.com/user/articles/wiki\_771691733172670464](https://link.zhihu.com/?target=https%3A//osrc.com/user/articles/wiki%5F771691733172670464))，并可以在 OSRC 社区分享给其他人。 

_\> 应用归属于发布应用的人_ 

![](https://proxy-prod.omnivore-image-cache.app/975x562,sTbr0oKkRivI4rPsZYVd-kD0gK0Zl1e46wEaxsK3HtKg/https://picx.zhimg.com/50/v2-0cc91316b8fb84bd1910e3811a9ed9d9_720w.jpg?source=1def8aca)

在OSRC设计中，一个应用可以具备**\*\*多个程序入口\*\***，以实现不同的功能和服务。  
**\*\*无状态\*\***应用程序入口分两种：

\- 2.1\. Service 

Service 是一种持续运行（LongTerm）的应用，用户不主动停止，Service应用将一直提供服务。比如我们常见的各种[Web服务](https://www.zhihu.com/search?q=Web%E6%9C%8D%E5%8A%A1&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D)。

_\> 一个OSRC应用Service入口是唯一的_

\- 2.2\. Task

 Task 是一个程序作业，他运行完成即退出（ShortTerm），比如我们在终端输入的 'ls' 命令，或者熟悉大数据的朋友，各种数据处理 Spark 或 MR 程序都是 Task 应用，OSRC 开发的云原生系统，天然支持各种大数据作业的，相关内容，请期待进一步的分享。

_\> 一个OSRC应用的 task 入口可以是多个_

**\## 3\. 运行时&运行实例&域**

在OSRC社区，每个应用程序的入口，执行后，就对应一个运行时，并生成一个运行实例，重复执行某个应用程序的入口，会在此运行时下生成多个实例。运行时具备唯一的**\*\*域\*\***，通过该域，实现用户对此应用的南北向访问。社区用户可以把一个运行时分享出来，让大家直接体验。  
_\> 运行时 归属于提交执行应用的人，即便该应用是其他朋友发布并分享的。_

\- 3.1\. 运行时域

**\*\*运行时域\*\***是根据应用信息和执行此应用的用户信息以MD5算法计算而成，同一个人启动同一个应用，**\*\*运行时域\*\***是唯一的、不变的。同时 OSRC 正在评估让用户自定义**\*\*运行时域\*\***的需求，期待大家的意见和反馈。

\- 3.2\. 运行实例&实例域

运行实例归属于某个运行时，并且具备一个随机域，通过该域，实现用户对该实例的直接访问，这样很方便调试。在可观测性上，目前 OSRC 提供运行实例的日志浏览。  
_\> 运行时域到运行实例之间的访问，OSRC采用的是LB策略。_

**\## 4\. Pages**

前端的应用,我们称之为 Pages，Pages 是无需服务器资源，无需运行，发布后通过浏览器可以直接访问的应用，常见的 SPA 应用：react、[vue](https://www.zhihu.com/search?q=vue&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2448775250%7D) 等都可以发布成 OSRC Pages 应用，大家如果使用过GitHub Pages 和其他前端托管服务，可以更容易理解 OSRC Pages。下面介绍下 OSRC Pages 的特点：

 \- 用户可以发布多个Pages，每个Pages都具备独立且唯一的域，可以通过域直接访问，并且每个应用都具备一个主页，让浏览者可以很好的理解应用。  
 \- OSRC Pages可以通过代理设置与OSRC 应用集成，实现动态应用。

**\# 联系 OSRC**  微信联系 OSRC 产品体验官

[发布于 2022-04-20 03:18](https://www.zhihu.com/question/529047706/answer/2448775250)

​赞同 7​​添加评论​收藏​喜欢

​

收起​

[![乐闻](https://proxy-prod.omnivore-image-cache.app/0x0,sRwBMsiEZPU9ekHNQU3G6J42frSiNmTu-4JSoVg-m7Ro/https://pic1.zhimg.com/v2-89865c9ff9fad460f9b3948e6af5d6be_l.jpg?source=1def8aca)](https://www.zhihu.com/people/le-wen-69-57)

[乐闻](https://www.zhihu.com/people/le-wen-69-57)

一个不安分的前端

​ 关注

3 人赞同了该回答

### 背景

当我们学习[nestjs框架](https://www.zhihu.com/search?q=nestjs%E6%A1%86%E6%9E%B6&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3326009362%7D)想跟朋友分享自己的接口，当我们开发了自己的应用想对外开放给其他人使用，我们需要一台有公网IP的电脑设备。

在各大云厂商平台掏钱购买云服务器是一个不错的选择（目前云厂商都有拉新的活动，想尝鲜的同学还是低成本的尝试一下的。这是我之前写的相关教程：[就这样，我拥有了一台属于自己的云服务器](https://link.zhihu.com/?target=https%3A//blog.csdn.net/m0%5F37890289/article/details/109709131)

但是，在我们学习或者业务体量较小的阶段，能够**白嫖服务器资源**肯定是一件让人快乐的事。Vercel平台就是这样的平台，它支持免费部署各种服务。

本文会详细记录Vercel 部署Nestjs项目的步骤。

### 实现步骤

### 一、Nestjs 项目添加 vercel [配置文件](https://www.zhihu.com/search?q=%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3326009362%7D)

在nest项目的根目录下创建 vercel.json 文件，并且设置 nestjs 服务相关的配置。

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH"
      ]
    }
  ]
}

```

### 二、Nestjs 项目上传到github

1. 创建新的 github 仓库

![](https://proxy-prod.omnivore-image-cache.app/3836x1990,sjXODqch1loKD9fUjrIj9pdXppiajvIO1HFXmnk1P9W4/https://picx.zhimg.com/50/v2-79efcf8492506f4b10494f9432cfb275_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

![](https://proxy-prod.omnivore-image-cache.app/3838x1990,snhpl553k74aFop0YljeM_OlBYQ5Oo7M5WeEZuW6_wxY/https://pic1.zhimg.com/50/v2-c55046da952e6946f630bddf60194790_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 2\. 本地项目关联 github 新建的仓库

`git remote add origin https://github.com/levenx/customer-service-server.git` 

3\. 本地代码推送到 github

`git push --set-upstream origin main`

> 代码成功推送到 github 

![](https://proxy-prod.omnivore-image-cache.app/3838x1988,sDSs2IzhQtGhpKEoti6Xkp7-5wvBFIAUD_6tix-4JkCA/https://pic1.zhimg.com/50/v2-6813bb8b61d1e14c8fccc556ed9ad49c_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 4\. 将项目授权给 vercel

> 访问地址：[https://github.com/settings/installations](https://link.zhihu.com/?target=https%3A//github.com/settings/installations) 

![](https://proxy-prod.omnivore-image-cache.app/3838x1990,ssBpOCYiaRYxSzZiW9CvRD5YcNY5yLu17oyvPXs1BlXM/https://picx.zhimg.com/50/v2-e46a78becb4bee908f34e442bebb40b9_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

搜索对应的项目，关联后记得save

![](https://proxy-prod.omnivore-image-cache.app/3840x1992,s6a2RO8pViepxJDUSOu-q3-QMindfBj4oiFP6Q1hzSVw/https://pic1.zhimg.com/50/v2-cbfc7835978dde379f090f71c8a342e6_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

### 三、Vercel 平台新建项目

> ⛱️ 如果还没有 vercel 账号的同学，需要首先注册 vercel 账号（直接使用github授权登录即可）  
> 登录**地址** [https://vercel.com/login](https://link.zhihu.com/?target=https%3A//vercel.com/login)

1. 新建 vercel 项目

![](https://proxy-prod.omnivore-image-cache.app/3838x1990,sRqCJo3Ynz-V5etfE8r5TdgNdTQ_id6tPlXwVbRkFWTE/https://picx.zhimg.com/50/v2-a41c88cd00807ef47043debc7b70b9f1_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 2\. 搜索项目，接着执行 import

![](https://proxy-prod.omnivore-image-cache.app/3838x1990,sFNQhqGkZ95g6j4fss2Eb-vU4_bswOElh_QCI7WRUH2U/https://picx.zhimg.com/50/v2-01ab3842b731512d6545ba457c9ae01f_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 3\. 修改打包命令，并且执行 deploy

![](https://proxy-prod.omnivore-image-cache.app/3836x1988,sOx5T-HAp9THIhK4Q5dnw2bKvXNYR1Udl1lqWA9ovA5A/https://picx.zhimg.com/50/v2-41a58adfef5ada158fee378d442c8442_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 4\. 部署成功

![](https://proxy-prod.omnivore-image-cache.app/3838x1986,s0lXA0-XRxHnKIliPE-l7p9pG_kM2doLMygapMca0uNw/https://picx.zhimg.com/50/v2-0ca4a56d18087684baad8aa49ca85c40_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

![](https://proxy-prod.omnivore-image-cache.app/1534x604,sS7nBWqctjRDaQMffCYyZhgXR-37go-viZdx9ubl8jn8/https://picx.zhimg.com/50/v2-4f83c099ae32c9a306378fa2cbbcf8c5_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

感兴趣的同学可以访问我部署的服务地址：

[https://customer-service-server-ng1d-kl84dacvy-levenx.vercel.app/](https://link.zhihu.com/?target=https%3A//customer-service-server-ng1d-kl84dacvy-levenx.vercel.app/)

至此，我们已经完成了nestjs在vercel平台的部署。

### 四、自定义个人域名（非必需）

> Vercel 默认给服务分配了临时的域名，同时支持用户配置个人域名（首先要确认自己已经拥有了[个人域名](https://www.zhihu.com/search?q=%E4%B8%AA%E4%BA%BA%E5%9F%9F%E5%90%8D&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3326009362%7D)，并且国内还需要完成备案）

![](https://proxy-prod.omnivore-image-cache.app/3838x1994,sYGdU9vsGW7aXjYo3bWzsoLviT7E2ovohtdsslztIHPE/https://pic1.zhimg.com/50/v2-cf3450b52853b3c7a40769ea80a4bf2d_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

1. 配置个人域名

![](https://proxy-prod.omnivore-image-cache.app/3836x1988,sf8ab9Lz0WEKoFa5KzIjA4DQL2HfTZFfotanG8JmbfyU/https://pica.zhimg.com/50/v2-dea55d1cf673c1404bab278d6e9ed099_720w.jpg?source=1def8aca)

Untitled.png

1. 修改域名DNS解析

![](https://proxy-prod.omnivore-image-cache.app/3574x2056,sQhZIrcYFOUb9FWekiAtysa7hXa07emra5anobOGovLk/https://pica.zhimg.com/50/v2-cddef402ad4770b8e01f3c5de7cf370f_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 2\. Vercel 检测解析成功

![](https://proxy-prod.omnivore-image-cache.app/3838x1988,s7QjKtbybwJKzGu7dzC5bGu_F1BHdkOZ3DGSmJMcQGAQ/https://picx.zhimg.com/50/v2-0f14786f02c581479ff826d3229434e3_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

 3\. 用自己的域名访问服务

> [https://customer-service.levenx.com](https://link.zhihu.com/?target=https%3A//customer-service.levenx.com/)

![](https://proxy-prod.omnivore-image-cache.app/1340x736,solyZ9_kpsU3rLJ3qfvvPiwfuMjkdX0IBO09FwteO04Q/https://picx.zhimg.com/50/v2-3ecb4beb15db921709bfe8bc1e9da1aa_720w.jpg?source=1def8aca)

Vercel部署Nestjs应用

### 总结

在学习Nestjs的过程中，将代码部署到公网上让其他人能够访问，是真的很有成就感，Vercel 是一个非常值得白嫖的平台。

如果这篇文章对你有多启发和帮助，请点一下赞表示对笔者的支持，感恩～

[发布于 2023-12-14 10:27](https://www.zhihu.com/question/529047706/answer/3326009362)

​赞同 3​​添加评论​收藏​喜欢

​

收起​

[![远见阁](https://proxy-prod.omnivore-image-cache.app/0x0,syTQimrGw3RhdWNvaJqf08EnSCe-ZnJKRA0bojmK62oQ/https://picx.zhimg.com/v2-b91ef80a8422b3ea29844354c04b14ae_l.jpg?source=1def8aca)](https://www.zhihu.com/people/aisyflm)

[远见阁](https://www.zhihu.com/people/aisyflm)

[​](https://www.zhihu.com/question/48510028)

软件开发行业 从业人员

2 人赞同了该回答

## 1 简介

 Vercel 是一个云平台，专注于前端[开发者](https://www.zhihu.com/search?q=%E5%BC%80%E5%8F%91%E8%80%85&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)和网站的自动化部署。

 它最初以 Zeit 的名字启动，后来更名为 Vercel，Vercel 提供了一个简单快捷的方式来部署和托管网站和[前端应用程序](https://www.zhihu.com/search?q=%E5%89%8D%E7%AB%AF%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)。

### 2 特点

**（1）易用性**

 Vercel 旨在为开发者提供简单直观的使用体验。通过简单的几步设置，用户可以快速将他们的项目部署到[云端](https://www.zhihu.com/search?q=%E4%BA%91%E7%AB%AF&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)。

**（2）自动部署**

 Vercel 支持从 GitHub、GitLab 或 Bitbucket 等代码仓库直接部署，当你推送代码到仓库时，Vercel 会自动进行构建和部署。

**（3）服务器端渲染和静态网站生成**

 Vercel 支持 Next.js 等流行的前端框架，可以轻松实现服务器端渲染（SSR）和静态网站生成（SSG）。

**（4）[性能优化](https://www.zhihu.com/search?q=%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)**

 Vercel 为部署的应用程序提供了全球 CDN 和自动优化服务，以保证快速的内容交付。

**（5）[可扩展性](https://www.zhihu.com/search?q=%E5%8F%AF%E6%89%A9%E5%B1%95%E6%80%A7&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)**

 无论项目规模大小，Vercel 都能提供良好的扩展性，对于小型项目，它甚至提供了免费的托管服务。

**（6）集成和插件**

 Vercel 提供了多种集成选项，可以与不同的服务和工具进行连接，以满足不同的开发需求。

 由于其简单性和高效性，Vercel 在前端开发者和 Web 开发团队中非常受欢迎，尤其是那些使用现代 JavaScript 框架（如 React、Vue.js、Angular）的团队。

## 3 官网

[](https://link.zhihu.com/?target=https%3A//vercel.com/dashboard)

## 4 部署过程

 我会把关键的配置信息罗列出来供大家参考

### 4.1 首先注册 Vercel

 访问 Vercel 官网，使用你的 GitHub、GitLab 或 Bitbucket 账号注册或登录。

 这里我是使用GitHub登录的，如果没有GitHub账号的小伙伴需要先注册一个哦\~

### 4.2 [新建项目](https://www.zhihu.com/search?q=%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)

![](https://proxy-prod.omnivore-image-cache.app/1920x945,sFoYxIv9LvwDEU3HHrH06SjjBqWkeRv2lACNz8NiFw1k/https://pica.zhimg.com/50/v2-74e2db8490b31ffc7e9e99b49578f79e_720w.jpg?source=1def8aca)

示意图

### 4.3 导入GitHub中的项目

 这里默认你已经将前端项目提前上传到GitHub了，点击Import 

![](https://proxy-prod.omnivore-image-cache.app/1920x945,sjac1CiYYGbb0MEz8xZekqh3CyAA5Tjq-RIl84SGVZF0/https://pica.zhimg.com/50/v2-1a3e8da4cfce1c2b2aad8209490bd201_720w.jpg?source=1def8aca)

示意图

 如果没有还没有配置GitHub连接的话，需要先在下面这个位置配置一下

![](https://proxy-prod.omnivore-image-cache.app/1920x945,sylveXKQSCpT6TTbLpupqjgxGjWJgAf_M49QgPwHWiTA/https://picx.zhimg.com/50/v2-83917fc1f95c9a825e7764c526eca7f8_720w.jpg?source=1def8aca)

示意图

### 4.4 [域名](https://www.zhihu.com/search?q=%E5%9F%9F%E5%90%8D&search%5Fsource=Entity&hybrid%5Fsearch%5Fsource=Entity&hybrid%5Fsearch%5Fextra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3352747877%7D)配置

![](https://proxy-prod.omnivore-image-cache.app/1920x945,s4454AalMjYlai1GxF0mYGbZ5uUubf1Rp7VL2fbp3JWM/https://pica.zhimg.com/50/v2-eb86194958c56e3927d87cf8c97ff947_720w.jpg?source=1def8aca)

示意图

### 4.5 项目配置

![](https://proxy-prod.omnivore-image-cache.app/1920x945,sEgXLSIp30Vc3U5_U8NqDl_QgPo89zQqtK6trGknhhoQ/https://picx.zhimg.com/50/v2-1684cb014b833b8072fddb78a31aacbc_720w.jpg?source=1def8aca)

示意图

### 4.6 最终配置完成的效果

![](https://proxy-prod.omnivore-image-cache.app/1920x945,sVyLP1j0pZup6wRPqaJF262XT8lQI7bVnBCYe_UGlPOc/https://pic1.zhimg.com/50/v2-450c577b3d61bdc7df67522902d910ff_720w.jpg?source=1def8aca)

示意图

 写到这里，关于vercel使用和配置的关键步骤就基本上罗列出来了，相信对大家能有一定的启发、学习和参考价值，这样在使用过程中，我们只需要维护GitHub中的代码就可以了，提交代码后，Vercel会针对我们提交的内容进行自动化部署。

[发布于 2024-01-06 19:45](https://www.zhihu.com/question/529047706/answer/3352747877)

​赞同 2​​添加评论​收藏​喜欢

​

收起​
