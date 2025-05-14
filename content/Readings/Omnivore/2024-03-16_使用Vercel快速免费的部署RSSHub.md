---
id: 9d80d637-375d-46f4-8e77-1f0c5388f8e4
date_saved: 2024-03-16 16:51:05
date_published: 2021-05-22 20:00:00
---

# 使用Vercel快速免费的部署RSSHub
#Omnivore

[Read on Omnivore](https://omnivore.app/me/vercel-rss-hub-18e49085080)

[Read Original](https://blog.lcwhhh.top/Vercel-RSSHub)

date_saved: 2024-03-16 16:51:05

date_published: 2021-05-22 20:00:00

--- 

# Full Content: 

RSSHub虽然好用但是有些路由是[严格反爬](https://docs.rsshub.app/social-media.html#bilibili-up-zhu-pin-dao)或者[仅支持自建](https://docs.rsshub.app/social-media.html#bilibili-yong-hu-guan-zhu-shi-pin-dong-tai)，这时我们就可以使用Vercel来免费自建RSSHub

> ==RSSHub 是一个开源、简单易用、易于扩展的 RSS 生成器，可以给任何奇奇怪怪的内容生成RSS 订阅源。RSSHub 借助于开源社区的力量快速发展中，目前已适配数百家网站的上千项内容==

==RSSHub虽然好用但是有些路由是====[严格反爬](https://docs.rsshub.app/social-media.html#bilibili-up-zhu-pin-dao)====或者====[仅支持自建](https://docs.rsshub.app/social-media.html#bilibili-yong-hu-guan-zhu-shi-pin-dong-tai)====，这时我们就可以使用这篇文章的主角Vercel来自建RSSHub==

这篇文章会介绍如何从头开始使用Vercel来自建RSSHub，我们只需要准备：

---

* 创建RSSHub分支
   * 在RSSHub的[GitHub页面](https://github.com/DIYgod/RSSHub)点击**Frok**

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,spcxrb18GMdTUTKfc2XFU6vhZaQBADl7yf3eTMFQTluo/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F86abce5c-c045-403f-b3ad-63cc3081c68c%2F_2021-05-19_at_16.06.142x.png?table=block&id=13d421ca-59dc-41bf-abf0-e684841824bd&cache=v2)

* 登陆/注册[Vercel](https://vercel.com/signup)
   * 使用GitHub或邮箱登陆/注册Vercel

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,syPN8vBlgLpbyrPIglOtpcZ0t8eGW_H6TWDFl5Og1O3s/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F431258b1-5a8d-438f-ac46-d4feabf27814%2F_2021-05-19_at_18.06.262x.png?table=block&id=b592f7a1-e4f4-4c8f-95ee-1f2f1373da21&cache=v2)

* 绑定GitHub
   * 注册完成后会显示**导入仓库**的提示，点击**Continue with Github**

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,stimGcNsmTV4XOzHzpHEG5JyoqwXa2aR17bnDBOt9tWM/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd2cbb066-75e1-49af-8a20-9785b89ceed6%2F_2021-05-19_at_18.15.042x.png?table=block&id=335176ee-fbf0-419d-abc3-14bfad22735d&cache=v2)

   * 在完成授权之后会发现导入列表空空如也，这时需要添加Github仓库的访问权限

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,sAud6IjAXaF75vA948apQysaGo8GUbKLVL3JzfsPRUB0/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2579e0c1-8057-4e5b-827b-88ecb8305d30%2F_2021-05-19_at_18.29.482x.png?table=block&id=4d0509c9-a45a-4d5d-8bc8-86aced133615&cache=v2)

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,s45GV2uF2MdfptJCMjrPWZO5YIzqjEYxy8GhzYuoXN1k/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56bd41ac-6a46-453a-abac-57769fdc6c9c%2F_2021-05-19_at_18.28.362x.png?table=block&id=d21f8eba-c6b7-48e6-8eb7-4e6f27d6b200&cache=v2)

* 创建RSSHub项目
   * 选择先前创建的RSSHub分支

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,sE-qD4CwwTZUSZLH7IIuvr_9m2YM7Kpu_gGvL8ippB_E/https://www.notion.so/image/https%3A%2F%2F1.bp.blogspot.com%2F-rBlzFqyCSi8%2FYKW9nqIqPoI%2FAAAAAAAABek%2Fo-RHxGerspwRq1KzvxIynpWUFE_VV4PJwCLcBGAsYHQ%2Fs320%2F%2525E6%252588%2525AA%2525E5%25259B%2525BE%252B2021-05-19%252Bat%252B18.36.10%2525402x.png?table=block&id=9269ee88-3b2b-4a33-9b7c-55c7ab574f24&cache=v2)

   * 选择自己的账号

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,sMhdZSlxosFgRW91LA1TK_pDfrQPEhh52j1xiMxa3U18/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F95f1245c-8a5a-406c-9b3b-57d753936a5e%2F_2021-05-19_at_18.36.102x.png?table=block&id=9c4b18eb-6825-4bc0-8468-73b89bc83208&cache=v2)

   * 选择根目录并继续

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,seXHHZFlyLRTkE7ZBrHaVbrji9Rbj0VANfEs9nNBAdQk/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c9ec6c9-97bd-43de-bf35-c7894f7b54b2%2F_2021-05-19_at_18.46.432x.png?table=block&id=839c25cd-dd7d-4083-a3cc-d6f28069ed7c&cache=v2)

   * 选一个你喜欢的名字

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,sAioIKN4V8GlL1poUT2goj1jG8MbCiNaOjkzCZqT-SFc/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffbb4d58c-023c-4e08-8f3d-b0c007b58e44%2F_2021-05-19_at_18.48.462x.png?table=block&id=5ec4c882-160f-45eb-950e-052805945bda&cache=v2)

   * 等待部署

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,sNd1a0jPGdt3sObrc4kbo80_Dj5JC3-iWQWDSsCm2IA0/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb6bb613-fea1-4b17-94b8-7be69ebf6f40%2F_2021-05-19_at_18.50.342x.png?table=block&id=89c2852d-0950-4e83-9c73-4d1b146e4ce8&cache=v2)

* 随意使用
   * 回到Vercel主页，点击**Visit**即可访问访问你自己的RSSHub主页

![notion image](https://proxy-prod.omnivore-image-cache.app/0x0,sbm2thLdhyt9u1ylj7vFTkTNAX4gErfpn-xRpOFBl8p4/https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1f459c06-6157-4131-ba65-4756b0f0b5c2%2F_2021-05-19_at_18.54.102x.png?table=block&id=0f906e0d-5640-478f-82b9-0f60b86bc213&cache=v2)

   * 自建RSSHub使用方法和本体完全一致，可以前往[docs.rsshub.app](https://docs.rsshub.app/)查看详细路由配置，使用时只需把**rsshub.app**替换为Verce为你生成的网址即可
   * ==Verce与你GitHub仓库完全同步，所以完成修改只需等待几分钟即可完成更新以及部署==
* 设置自定义域名
   * 如果你有自己的域名的话，可以前往**Setting-Domains**中设置自定义域名
* 更多设置（如Cookie）可以前往[部分 RSS 模块配置](https://docs.rsshub.app/install/#pei-zhi-bu-fen-rss-mo-kuai-pei-zhi)查看

---

## Highlights

> RSSHub 是一个开源、简单易用、易于扩展的 RSS 生成器，可以给任何奇奇怪怪的内容生成RSS 订阅源。RSSHub 借助于开源社区的力量快速发展中，目前已适配数百家网站的上千项内容 [⤴️](https://omnivore.app/me/vercel-rss-hub-18e49085080#78e37e11-3abf-4b9a-b7d0-05e32d502545)  ^78e37e11

> RSSHub虽然好用但是有些路由是[严格反爬](https://docs.rsshub.app/social-media.html#bilibili-up-zhu-pin-dao)或者[仅支持自建](https://docs.rsshub.app/social-media.html#bilibili-yong-hu-guan-zhu-shi-pin-dong-tai)，这时我们就可以使用这篇文章的主角Vercel来自建RSSHub [⤴️](https://omnivore.app/me/vercel-rss-hub-18e49085080#aa1b768f-dd80-4269-8c2e-89fe64e14d5a)  ^aa1b768f

> Verce与你GitHub仓库完全同步，所以完成修改只需等待几分钟即可完成更新以及部署 [⤴️](https://omnivore.app/me/vercel-rss-hub-18e49085080#76bd5510-f992-44e6-b7c0-a2f8b6b7b138)  ^76bd5510

