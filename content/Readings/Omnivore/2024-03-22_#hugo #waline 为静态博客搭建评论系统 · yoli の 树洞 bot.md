---
id: 6979a7b9-0165-4c21-8546-4ff03965a942
author: |
  Authorkoirepairing...
date_saved: 2024-03-22 02:01:30
date_published: 2023-08-04 02:11:00
---

# #hugo #waline 为静态博客搭建评论系统 · yoli の 树洞 bot
#Omnivore

[Read on Omnivore](https://omnivore.app/me/hugo-waline-yoli-bot-18e64c004ab)

[Read Original](https://www.yolichan.fun/en/2023/08/04/2023-08-04-add-comment-system-waline/)

date_saved: 2024-03-22 02:01:30

date_published: 2023-08-04 02:11:00

--- 

# Full Content: 

由于静态博客没有自带的数据库, 不能在后台进行数据存储和管理, 所以往往都没有用户评论功能, 这样为了实现评论功能, 常见的解决方案是在网站加入第三方评论插件, 比如`disqus` \\ `valine`等, 或者是引入一些平台的用户评论系统, 比如`GitHub`平台(评论者需要注册`GitHub`账号), 据说`valine`有用户数据泄漏的风险, 所以最终选择了使用`valine`的衍生版[waline](https://waline.js.org/guide/get-started/client.html)评论系统, 搭建时接入的是由使用者自主注册管理的云数据库, 比较安全. 主要参考`waline`官方的[guidebook](https://waline.js.org/guide/get-started/), 实现一共有以下3个步骤:

* 注册一个云数据库`LeanCloud`用于存储数据;
* 将`waline`应用部署到`Vercel`云平台, 并接入`LeanCloud`数据库, 部署到`Vercel`的`waline`支持绑定自定义域名, 以防由于`Vercel`服务器被墙而无法正常启用;
* 在本地`hugo`博客文件系统中配置`waline`的客户端, 通过配置令它接入`vercel`服务端, 这样子静态博客也能实现评论功能啦.  
![image-20230804191012157](https://proxy-prod.omnivore-image-cache.app/0x0,scFe9G1HmhgutgFm5z4m6e8Qt8VxNLiIFLzpkpyy5JPo/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/waline-client-view.png)

### 数据库部署-LeanCloud

* 注册[LeanCloud](https://console.leancloud.app/apps)  
最好选择国际版, 这样子之后绑定的自定义域名可以是没有经过备案的, 注册后创建应用:  
![image-20230804185902257](https://proxy-prod.omnivore-image-cache.app/0x0,s4EuS_QwLpPDvSEp4wl44BNqKnucwKo2xeon9e9cNCpY/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/leancloud-create-app.png)  
![image-20230804190103113](https://proxy-prod.omnivore-image-cache.app/0x0,sbYsiCa2m_7ZAJtN7BCaXlnQ2A8x1vPSLiDsEDecMA2w/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/leancloud-app-credentials.png)进入控制台, 复制`设置-应用凭证`中的前三项, 作为之后部署到`Vercel`时的环境变量.  
> 图中仅示例, 凭证无效
* 部署到服务端-`Vercel`  
拥有`GitHub`账号可以直接登陆[Vercel基于waline模板创建GitHub仓库repository](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample), 并且跳过创建团队(并非是协作项目). 满屏的烟花意味着部署成功🎉.  
![image-20230804190451011](https://proxy-prod.omnivore-image-cache.app/0x0,sBaKyNFFLZmyfqrACg2PGVHOd92SuLlDn4gkzI2t2WOc/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/vercel-create-git-repository.png)  
![image-20230804190623844](https://proxy-prod.omnivore-image-cache.app/0x0,sMQ1mxPRj_2thEI19_oL9vk6rt4n5soQaqPkLtc2huEc/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/vercel-establish-environment-variables.png)  
在`Settings`中找到`Environment Variables`, 新建`LEAN_ID` \\ `LEAN_KEY` \\ `LEAN_MASTER_KEY` 变量并填入在`LeanCloud`中获得的值:  
| LEAN\_ID | LEAN\_ID | LEAN\_MASTER\_KEY |  
| -------- | -------- | ----------------- |  
| APP ID   | APP KEY  | Master Key        |
* 进行部署  
环境变量配置完后点击顶部的`Deployments`, 点击顶部最新的一次部署右侧的`Redeploy`进行重新部署, 使刚才设置的环境变量生效.  
![image-20230804191216195](https://proxy-prod.omnivore-image-cache.app/0x0,ssT--kVxQ0WNZwTLEmKxSlFjtjIy3osg6qVsrBclZqZ0/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/vercel-waline-redeploy.png)  
此时会跳转到 `Overview` 界面开始部署, 等待片刻后 `STATUS` 会变成 `Ready`. 此时请点击 `Visit`, 即可跳转到部署好的网站地址, 此地址即为你的服务端地址.
* 绑定域名  
点击顶部的 `Settings` \- `Domains` 进入域名配置页, 输入需要绑定的域名并点击 `Add`:  
![image-20230804192258976](https://proxy-prod.omnivore-image-cache.app/0x0,s89cPy-ngDo4wk_eaLDkPCoijCigHJarMo2aHt7RhPkI/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/vercel-waline-settings-domains-new.png)  
在域名服务器商处(用的`cloudflare`)管理`DNS解析`, 按以下值添加新的 `CNAME` 解析记录:  
| 类型    | 名称       | 内容                   |  
| ----- | -------- | -------------------- |  
| CNAME | comments | cname.vercel-dns.com |  
其他保持默认就好, 等待生效, 就可以通过在浏览器输入自定义域名`comments.yolichan.fun`来访问`waline`服务端啦.自定义域名之后添加`/ui`可以进入应用后台管理界面, 第一个注册的用户自动成为管理员账号, 所以应用生成后尽早进行账号注册以免管理员账号被访客注册.

### 通过html脚本在博客中引入waline客户端

* 先在主题配置文件`config.toml`中配置waline服务端参数, 在`[params]`变量之后插入:  
```basic  
1[params]  
2# 中间是原有的一些配置,如:  
3	defaultContentLanguage = "zh"  
4	# ...  
5	# 然后插入以下说明:  
6	[params.waline]  
7    	enable = true  
8    	serverURL = "https://comments.yolichan.fun/"  #已绑定域名 					# 换成你的serverURL  
9    	# 参考：https://waline.js.org/  
```  
填入的serverURL等参数将在引入waline的功能实现脚本comment.html中进行调用.
* 引入第三方应用的功能实现脚本主要在`blog-yoli/layouts/partials/`目录下, 在该目录下新建一个`comment.html`文件:  
```xml  
 1<head>  
 2  <!-- Waline -->  
 3  <!-- ... -->  
 4  <link  
 5    rel="stylesheet"  
 6    href="https://unpkg.com/@waline/client@v2/dist/waline.css"  
 7  />  
 8  <link  
 9    rel="stylesheet"  
10    href="https://unpkg.com/@waline/client@v2/dist/waline-meta.css"  
11  />  
12  <!-- ... -->  
13</head>  
14<body>  
15  <!-- ... -->  
16  <div id="waline"></div>  
17  <script type="module">  
18    import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';  
19    const locale = {  
20      nick : '昵称',  
21      placeholder: '欢迎留爪',  
22      sofa: '空空空~',  
23      comment: 'thoughts or moods',  
24      more: '还有~',  
25      emoji: 'emoji',  
26      admin: '爱摸鱼的修理工',  
27      level0: '潜水',  
28      level1: '冒泡',  
29      level2: '吐槽',  
30      level3: '活跃',  
31      level4: '话唠',  
32      level5: '传说',  
33    };  
34  
35    init({  
36      el: '#waline',  
37      serverURL: '{{ .Site.Params.Waline.serverURL }}',  
38      locale,  
39      emoji: 'https://unpkg.com/@waline/emojis@1.1.0/weibo',  
40      texRenderer: false,  
41    });  
42  </script>  
43</body>  
```  
> 自定义语言变量`locale`的使用参考`waline`官方教程, 有的设置还需要在vercel服务端添加一些环境变量, 这里就不细讲啦, 也可以不进行配置直接使用默认参数.
* 博客页面布局主要在`blog-yoli/layouts/post/single.html`中进行设计, 打开该文件, 在合适的位置插入代码, 表示引入`waline`评论区:  
```basic  
1<div class="container comment-waline">  
2  {{ partial "comments.html" . }}  
3</div>  
```  
> 一般是在结尾处最后一个`{{ end }}`标记之前插入, 表示在文章页末加载评论区
* 关于`waline`评论区的样式可以在`blog-yoli/static/css/den.css`中进行设计:  
```scss  
 1/* Comments */  
 2/* waline 全局变量*/  
 3:root{  
 4  /* 主题色 */  
 5  --waline-font-size: 14px !important;  
 6  --waline-theme-color: #f0485388 !important;  
 7  --waline-active-color: #f04853c4 !important;  
 8  --waline-bgcolor-light: #FAF9F7 !important;  
 9  --waline-border-color: rgba(5, 140, 150, 0.278) !important;  
10  --waline-disable-bgcolor: #FAF9F7;  
11  --waline-avatar-size:5rem !important;  
12  --waline-m-avatar-size:calc(var(--waline-avatar-size)*9/13) !important;  
13  --waline-badge-color:rgba(5, 150, 148, 0.425) !important;  
14  --waline-badge-font-size: 0.45em !important;  
15  --waline-info-bgcolor:#f8f8f8 !important;  
16  --waline-info-color:#999999ca !important;  
17  --waline-info-font-size:0.625rem !important;  
18  --waline-border: 1px solid var(--waline-border-color) !important;  
19  --waline-avatar-radius: 50% !important;  
20}  
21.comment-waline{  
22  /*  
23  margin-top: 10px;  
24  position:relative;  
25  float: none;  
26  display: inline;  
27  padding: 10px;  
28  */  
29  background-color: #fff;  
30  margin-top: 18px;  
31  padding-top: 25px;  
32  padding-bottom: 40px;  
33  padding-left: 40px;  
34  padding-right: 40px;  
35  font-weight: 300;  
36  line-height: 1.8;  
37  
38  /*  
39  border-left: 1px solid rgba(0,0,0,0.1);  
40  border-right: 1px solid rgba(0,0,0,0.1);  
41  */  
42}  
43.comment-underline {  
44  display: inline-block;  
45  margin-top: 10px;  
46  margin-bottom: 0px;  
47  width: 50px;  
48  border-bottom: 3px solid #f0485388;  
49}  
```  
> `!important`表示强制启用, 避免被其他配置覆盖.

### 后记

来一张辛苦劳作后的成果快照吧🎉🎉🎉:

![image-20230804185016412](https://proxy-prod.omnivore-image-cache.app/0x0,swpQGUgw6-hjA1djwp4cTwQjCSN69SY1IEcHyP1QH7RY/https://cdn.jsdelivr.net/gh/mewoooew/picGO@main/images/show-waline-area.png)

---

## Highlights

> waline 为静态博客搭建评论系统 [⤴️](https://omnivore.app/me/hugo-waline-yoli-bot-18e64c004ab#087fd90f-6e3f-4fe5-b598-a13ef2e48cc2)  ^087fd90f

