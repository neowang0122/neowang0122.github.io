---
id: fd4c65d3-ccce-446e-b65d-d52919fd522d
author: |
  Lu Adam爱玩的安哥​关注他
date_saved: 2024-03-17 00:21:33
date_published: 2021-06-21 19:50:00
---

# 自家群晖开启永久免费图床，开启typora, picgo,markdown的美好夜生活 - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967)

[Read Original](https://zhuanlan.zhihu.com/p/382702959)

date_saved: 2024-03-17 00:21:33

date_published: 2021-06-21 19:50:00

--- 

# Full Content: 

你想要什么样的永久免费图床？不管是阿里还是腾讯、七牛、又拍等等对象存储都是需要收费的，随着你流量的提高费用会越来越高，想要上传到其它博客系统就需要公开你的图片网址，又是更多的不可控费用。

==自己家的群晖能不能弄成网络图库呢？经过一番搜索研究，成功地让群晖又多了一项功能：永久免费的巨量图库，从此写博客成了非常酸爽的享受==。

==自家宽带已经付过费了，固定带宽，速度比网络上的所谓云服务器快多了。您家的宽带哪怕是入门级套餐50M，上传也会有20M，而入门级的云服务器下载带宽只有1M（实际下载速度只有100kbps, 根本不够用，图片又大，随便一个也有几百kb）==，实在是又贵又慢。

==移动、联通上传速率和电信差不多，不过不同地区政策不同，需要你自己去检测（我单位的移动上下都是50M）。这二家缺点也明显，很多地方没有公网IP，在设置外网访问时有点儿小困难。电信光纤一般都会有公网IP，虽然会经常变。（随便找了个宽带速率图）==

![](https://proxy-prod.omnivore-image-cache.app/1128x772,sbC3OnGIcMNLm7pj6syn4yXOihUKjjo09ZDevjn4P82Q/https://pic3.zhimg.com/v2-6508722312bb2194f5065a590dd995a2_b.jpg)

==先说下这种免费图床的优缺点吧！==

## ==优点==

==1、容量不受限制（你真准备写博客把自家nas硬盘撑爆么），想要什么样子的图片url完全可以自己决定（用picgo来配置）。==

==2、备份起来也会非常的方便，本来nas一般都会有备份。以后想要转到其它网络图床也可以批量上传。==

3、 使用typora外加picgo就能完美解决写博客时自动上传图片的问题！markdown编辑器不少，哪怕是vs code也可以，但图库功能一直是个痛点。尤其是喜欢自己写博客又爱上传的玩家。

==4、写博客时再也不用先保存图片到本地或某个图库，再把图片的url写进markdown了！都已经上传到你自家的免费图库中去喽==！

## 缺点

==用的是自家的nas服务器， 自然会增加电量、带宽消耗，如果外部访问太过频繁有点儿伤硬盘（解决办法嘛就是把经常用的图片放到固态硬盘中）、影响你家网速。不过呢，一般你这种图床访问量不会太大，影响并不显著，尤其是你家带宽非常宽的情况下（比如上传能达到100mb/s）==

本文介绍的是通过配置picgo, typora来完成自动上传图片到自用群晖服务器、并返回公网可用图片url的办法，如果你有linux主机或拥有自己的云服务器，方法也是类似的。

## 群晖机设置

希望你已经设置好了公网域名，如果没有，联系你的电信、移动、联通人工服务，看能不能给提供公网IP。实在没有就得想其它办法了。

我家里是电信，有公网IP，不过地址经常变，所以就买了个tp-link路由器，用其提供的ddns服务非常方便的就拥有了自己的公网域名。

## 设置共享文件夹

通过控制面板新增一个www的共享文件夹

![](https://proxy-prod.omnivore-image-cache.app/712x746,s8f8Z5J2R9JPk3rXpRFLXs7_WPRKw7r3q8n0yiRyuqFA/https://pic4.zhimg.com/v2-65b7346d14e7aedf6288b233c45b1d0b_b.jpg)

通过File Station创建好目录结构，即www/wwwroot/blog

![](https://proxy-prod.omnivore-image-cache.app/1054x1044,s3Y7rwtGMkJWrZU4kZTOciWHQFnt1DBQBPqylKlgstnE/https://pic2.zhimg.com/v2-27c24f7da3657fb3292c3388ab4f8075_b.jpg)

## 安装web staiton

打开群晖的套件中心，搜索web station进行安装，一直下一步即可。

![](https://proxy-prod.omnivore-image-cache.app/754x392,svp8_VPq9qIO2ymKz2M9wQFKNJO7DfJ03NSD0heqfr1g/https://pic4.zhimg.com/v2-8b940a5849db834a3043e1505804eba3_b.jpg)

## 添加ftp用户

主要是为了安全，如果你懒，直接用自己的超级用户账号也行。比如我添加了一个hsztu，设置好对www的权限

![](https://proxy-prod.omnivore-image-cache.app/911x767,sTa5avNGVKdG8mUzqeczOzScnaM9KQh9Cpq6PCz9TvxM/https://pic3.zhimg.com/v2-fc33479772aac8dd7210262f0963a5aa_b.jpg)

或者通过共享文件夹来设置也行，确保hszstu对www目录可读写！

![](https://proxy-prod.omnivore-image-cache.app/1218x566,sn0wh9Sp1JMdNlTc8mxESObu9R0Uw4ROYBmyw9RSAXGo/https://pic1.zhimg.com/v2-d80c42ec9e7c19dc3ba70fc53082b104_b.jpg)

### **开启ftp服务设置端口号**

ftp服务所使用的端口编号我改成了5542, 这个要与你picgo中的配置一致，注意这个端口号与web staiton中的5543要区别开。

![](https://proxy-prod.omnivore-image-cache.app/560x586,sNWm-Xo_KqF_YEv__pPtwa4CUSLcdX03CGbLXphs2uFA/https://pic4.zhimg.com/v2-573189c1a30e8c3ea45dd766fa9d0327_b.jpg)

## 设置web staiton

点击虚拟主机，新增，选择基于端口，因为我是http所以选的是这个，指定一个端口号，要大一点儿，不然可能会和其它服务端口冲突。

文档根目录要设置好，直接抄我的即可。这样能通过5543端口访问到自己的图片了（其实就是把nas当成了静态网页服务器）。

![](https://proxy-prod.omnivore-image-cache.app/958x707,smugxSjEu8aUG2vR5RQMMwRg-gtDRlHWbtaZA9GIdUy4/https://pic1.zhimg.com/v2-f81414d74765a523bac7ef2587ba37f0_b.jpg)

可以先上传个图片到blog/uploads目录中，然后在浏览器中输入http://主域名：5543/uploads.2.jpg，测试下能否通过公网访问自家群晖中的图库。

![](https://proxy-prod.omnivore-image-cache.app/1190x1108,stbyMyj3MvXGK3106ljUgksf9DblDVhW6rdpCCVkBQzs/https://pic4.zhimg.com/v2-5764b9745bb622c3146fa5d699db87cf_b.jpg)

如果没有，返回看看自己的设置哪里不对，或者是错误地输入了地址？能够像下面一样显示就说明你配置是对的。

![](https://proxy-prod.omnivore-image-cache.app/1058x968,sawTbWSy4wo9_aPPMvvetzS_ziF35S39zJJwhRF0l-h8/https://pic2.zhimg.com/v2-85edc6f42ec56e5e71467bfbd86dacc1_b.jpg)

## 开发机设置

在自己的主力机里需要以下步骤：

## 安装picgo-core

## 安装ftp上传插件

运行下面的命令，没意外就会显示安装成功！

```sql
picgo install picgo-plugin-ftp-uploader

# added 8 packages in 1s
# [PicGo SUCCESS]: 插件安装成功
```

## 设置picgo

安装好后可以先看下帮助，或者运行下（这样才会新建默认的配置文件）：

进入picgo默认目录

```taggerscript
cd c:\Users\(你的用户名称)\.picgo
```

会发现已经新建了三个文件。

```css
config.json
package.json
picgo.log
```

其中config.json是主配置文件，package.json表明其就是个node项目，picgo.log是日志文件，非常重要，如果有错误发生且不知道什么情况的时候，可以查看此文件，里面有详细的解释！我就是通过这个东东发现了插件的错误以及配置上的解决办法！

打开config.json, 填入如下内容：

```json
{
  "picBed": {
    "uploader": "ftp-uploader",
    "current": "ftp-uploader",
    "ftp-uploader": {
      "host": "test.tpddns.cn",
      "password": "123456",
      "path": "/uploads/{year}/{month}/{fullName}",
      "port": "5542",
      "uploadPath": "/www/wwwroot/blog/uploads/{year}/{month}/{fullName}",
      "url": "http://test.tpddns.cn:5543",
      "username": "ftpuser"
    }
  },
  "picgoPlugins": {
    "picgo-plugin-ftp-uploader": true
  }
}
```

其中host参数要填写你自己的主域名，像我用的就是tp-link提供的ddns服务，直接就可以访问到我家的nas服务器。

url参数要注意，**一定要添加http头或者https头**，另外，自己的web station访问地址及端口号一定要填写正确！

username要用你自己设定好的ftp用户名，偷懒就直接超级用户！

不然就可能出现下面这种错误，fail to parse result image path from: \[PicGo INFO\]

![](https://proxy-prod.omnivore-image-cache.app/1002x370,szKUi7GBGvsC2jkbD4agdirXI3h5-9XaTGTkZgrpXeqc/https://pic3.zhimg.com/v2-874acab3e7415a18a6dcabf2e1387596_b.jpg)

错误是告诉你上传是成功了，但在获取图片url时失败，就是因为没加http头的原因！（吐槽下，这picgo对于头部处理不够完美）

## typora设置

主要是图像的配置，插入图片选择上传图片。上传服务要选择custom command, 命令中输入picgo upload。

![](https://proxy-prod.omnivore-image-cache.app/1416x631,s5cDBL-6jgdI-zPN4yXae52El3eUo0b0zXF7k4tbW720/https://pic2.zhimg.com/v2-89dfc3ab705b2065eb4443757f97e729_b.jpg)

## 测试

在typora里面直接粘贴你的截图，稍等片刻，图片就跑到自己的nas服务器里面了

本地服务器已经保存好截图！

![](https://proxy-prod.omnivore-image-cache.app/944x611,s3ZD5H6CIAlHJsI6Zp6JqzvOWAw5X3IjqDDtPDua1pcg/https://pic1.zhimg.com/v2-efa2e165b1b714029b5b501dcf891a70_b.jpg)

typora的markdown文件中返回图片的公网可用url(在typora里面点击图片就可以看到此url)

![](https://proxy-prod.omnivore-image-cache.app/1258x190,s9IWHT-hu9yT_govApWZIaQd6mD05BUHuJRh22pgTb5I/https://pic4.zhimg.com/v2-303bcd4bf7e062420bbd5f137d9afebf_b.png)

## 一切都是自动化

既然你有nas, 自动化同步要用上，弄好drive配置，把自己的博客目录也放进去吧！只要写好了博客就自动备份到nas中去了，爽！

![](https://proxy-prod.omnivore-image-cache.app/1149x759,sEhO-UzWmMihaZtXDsl0kjvTq7CCXnsUNsqygbQ-gnG0/https://pic3.zhimg.com/v2-d8402bd4eb15e9b5cac1b5183fffd236_b.jpg)

博客自动化备份、图片自动化上传，单位、家庭自动同步！还要什么网络笔记本？咱程序员就要用最香的全自动化markdown！

感慨下这个免费的白嫖时代！typora免费，picgo免费，学我的分享知识，还是免费！

---

## Highlights

> 自己家的群晖能不能弄成网络图库呢？经过一番搜索研究，成功地让群晖又多了一项功能：永久免费的巨量图库，从此写博客成了非常酸爽的享受 [⤴️](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967#238bde3b-d2de-47fb-9c7d-2349be1df44c)  ^238bde3b

> 自家宽带已经付过费了，固定带宽，速度比网络上的所谓云服务器快多了。您家的宽带哪怕是入门级套餐50M，上传也会有20M，而入门级的云服务器下载带宽只有1M（实际下载速度只有100kbps, 根本不够用，图片又大，随便一个也有几百kb） [⤴️](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967#0e389842-586e-41f3-bb59-6ea3b0c2fce2)  ^0e389842

> 移动、联通上传速率和电信差不多，不过不同地区政策不同，需要你自己去检测（我单位的移动上下都是50M）。这二家缺点也明显，很多地方没有公网IP，在设置外网访问时有点儿小困难。电信光纤一般都会有公网IP，虽然会经常变。（随便找了个宽带速率图） [⤴️](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967#e63662b6-0504-4ea7-bcdf-944038143a6c)  ^e63662b6

> 先说下这种免费图床的优缺点吧！
> 
> ## 优点
> 
> 1、容量不受限制（你真准备写博客把自家nas硬盘撑爆么），想要什么样子的图片url完全可以自己决定（用picgo来配置）。
> 
> 2、备份起来也会非常的方便，本来nas一般都会有备份。以后想要转到其它网络图床也可以批量上传。 [⤴️](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967#477a1641-e121-4688-a752-60720cee2d7d)  ^477a1641

> 4、写博客时再也不用先保存图片到本地或某个图库，再把图片的url写进markdown了！都已经上传到你自家的免费图库中去喽 [⤴️](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967#77fa9d04-183d-445b-9b3f-cb48289859ee)  ^77fa9d04

> 用的是自家的nas服务器， 自然会增加电量、带宽消耗，如果外部访问太过频繁有点儿伤硬盘（解决办法嘛就是把经常用的图片放到固态硬盘中）、影响你家网速。不过呢，一般你这种图床访问量不会太大，影响并不显著，尤其是你家带宽非常宽的情况下（比如上传能达到100mb/s） [⤴️](https://omnivore.app/me/typora-picgo-markdown-18e4aa4b967#d3a3aa88-1f23-44f0-bd19-b56af603633d)  ^d3a3aa88

