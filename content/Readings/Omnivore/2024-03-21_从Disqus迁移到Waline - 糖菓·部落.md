---
id: 2cabcbe5-65f6-4ec8-8b23-fb99e81b0445
title: |
  从Disqus迁移到Waline | 糖菓·部落
author: |
  Candinya
date_saved: 2024-03-21 21:57:35
date_published: 2021-02-07 07:07:24
draft: true
---

# 从Disqus迁移到Waline | 糖菓·部落
#Omnivore

[Read on Omnivore](https://omnivore.app/me/disqus-waline-18e63e0b747)

[Read Original](https://candinya.com/posts/migrate-from-disqus-to-waline/)

date_saved: 2024-03-21 21:57:35

date_published: 2021-02-07 07:07:24

--- 

# Full Content: 

1. [1. 相关介绍](#%E7%9B%B8%E5%85%B3%E4%BB%8B%E7%BB%8D)
2. [2. 迁移记录](#%E8%BF%81%E7%A7%BB%E8%AE%B0%E5%BD%95)
3. [3. 迁移教程](#%E8%BF%81%E7%A7%BB%E6%95%99%E7%A8%8B)  
   1. [3.1. 导出 Disqus 的评论数据](#%E5%AF%BC%E5%87%BA-Disqus-%E7%9A%84%E8%AF%84%E8%AE%BA%E6%95%B0%E6%8D%AE)  
   2. [3.2. 创建数据库](#%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93)  
   3. [3.3. 建立后端](#%E5%BB%BA%E7%AB%8B%E5%90%8E%E7%AB%AF)  
   4. [3.4. 测试后端](#%E6%B5%8B%E8%AF%95%E5%90%8E%E7%AB%AF)  
   5. [3.5. 导入旧评论数据](#%E5%AF%BC%E5%85%A5%E6%97%A7%E8%AF%84%E8%AE%BA%E6%95%B0%E6%8D%AE)

---

1202年了，Disqus还在用iframe加载，我除了露出 ~~震撼猫咪.jpg~~ 的表情之外，已经没有什么更能形容遭受的震惊感了。无奈Valine不支持邮件提醒新评论，虽然Disqus的提醒也日常无法收到，但至少比起手动检查还是要心理安慰很多了。直到前几天，机缘巧合之下我发现了[Waline](https://waline.js.org/)这款衍生自Valine却同时具有后端管理功能的评论框架，于是就萌生了迁移评论系统的新想法。

## [](#相关介绍 "相关介绍")相关介绍

> Waline - 一款从 Valine 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine.
> 
> —— Waline 官网的介绍

Waline同时具有Valine的轻量和后端管理的方便两大特性，并且提供了简单方便的Serverless部署方案，遵循轻量化、集约化设计思路的指导，可以方便地部署在各种FaaS平台上，包括著名的Vercel、腾讯云CloudBase以及使用Docker独立部署的方案，提供LeanCloud、MongoDB、MySQL、PostgreSQL和SQLite的数据库支持，支持邮件通知、Telegram通知、QQ通知及微信通知接口的接入，提供大量可自定义参数接口。强大的扩展组合能力让Waline成为了集几乎所有优点于一身的评论系统组合，只要配置适当，相信能成为静态站点的一大优秀评论服务合作伙伴。

## [](#迁移记录 "迁移记录")迁移记录

本次我使用了Vercel作为部署平台，连接MongoDB提供的免费512MB数据库平台作为评论存储系统，通知系统接入了Telegram和邮件。经过两天的测试，发现除了慢之外似乎没有什么问题。经过一般的测试，仅仅是在全站有60条评论的情况下，不少操作（包括更新文章阅读量统计、获取评论数、获取评论内容）几乎都需要花费1500\~3000ms的运行时间。当然，其中包含了不少连接数据库操作的延迟，并且本主题有非阻塞的评论加载模式，所以只要没有开访问量统计，使用懒加载的体验应该是还能过得去的…

而本以为将 Disqus 的评论数据迁移去Waline数据库会很麻烦，事实上却发现官方已经提供了[迁移使用的工具](https://waline.js.org/migration.html#%E8%BF%81%E7%A7%BB%E8%87%B3-cloudbase)，只需要选择 **从 `Disqus` 迁移至 `Waline MySQL/PostgreSQL/SQLite` 存储服务**，将从 Disqus 导出（可以在 //YOUR\_SITE.disqus.com/admin/discussions/export/ 导出，好像有些不太全）的评论压缩包，解压出XML内容粘贴在数据框内，单击`转换`即可下载转换完成的csv文件（后缀名居然是txt，坏耶）。使用 MongoDB Compass 连接到我们的 MongoDB 实例，批量导入csv文件就能将评论都恢复回去。只是由于Disqus的隐私设置，头像、邮箱等等无法导出的账户相关信息都已经丢失了。

然后就迁移过来了，预计会花上一段时间用于相关的调整与改进云云，升级了也不能坏了安全性和体验呀。过两天估计会能整理出完整的教程，有遇到什么问题随时来找我就可以。

Waline 配置时的鉴权方式只有Referer域名，频率限制方式只有IP请求频率，虽然可以连接Akismet反垃圾系统，也可以设置人工评论审查，但防止CC攻击/防止被作为邮件轰炸工具之类的安全性也许还有待进一步的提升吧。

## [](#迁移教程 "迁移教程")迁移教程

首先从 Disqus 请求导出旧的评论数据。 Disqus 会开始整理数据并归档成一个压缩包，并当数据准备完成时通知我们。

[![](https://proxy-prod.omnivore-image-cache.app/0x0,szpJTjp0KQKTw5HJmcEcWwTQMQQzlyznGgEDp9LW_jbE/https://candinya.com/posts/migrate-from-disqus-to-waline/disqus-export-comments-request.webp "请求导出")](https://candinya.com/posts/migrate-from-disqus-to-waline/disqus-export-comments-request.webp)

当数据准备完成时，我们会收到一封附带有下载地址的邮件，邮件里给出的下载地址就是评论数据的压缩包链接，直接点击即可开始下载。

[![](https://proxy-prod.omnivore-image-cache.app/0x0,sTrV8ToizV-yiWAiMHb8E_HYpwxv6kiAFdiaXCnhDYN8/https://candinya.com/posts/migrate-from-disqus-to-waline/disqus-export-comments-complete.webp "下载压缩包")](https://candinya.com/posts/migrate-from-disqus-to-waline/disqus-export-comments-complete.webp)

压缩包是 gzip 格式压缩的，我是用 7zip 就能轻松提取出里面的同名（少了 .gz ）文件。文件格式是 XML ，文件编码是 UTF-8 。使用文本编辑器打开，复制所有的内容备用。

打开[迁移使用的工具](https://waline.js.org/migration.html#%E8%BF%81%E7%A7%BB%E8%87%B3-cloudbase)，选择**从 `Disqus` 迁移至 `Waline MySQL/PostgreSQL/SQLite` 存储服务**，将刚才复制的数据粘贴到输入框内，单击`转换`按钮，我们会得到一个output.txt文件用于保存。

[![](https://proxy-prod.omnivore-image-cache.app/0x0,sCoVWHPgowEFA5Sged8BNcF65L5PQjvlQeCBYFQap4nE/https://candinya.com/posts/migrate-from-disqus-to-waline/disqus-export-comments-convert.webp "转换评论数据")](https://candinya.com/posts/migrate-from-disqus-to-waline/disqus-export-comments-convert.webp)

保存得到的文件，这个文件是使用 UTF-8 编码的 CSV （Comma-Separated Values，逗号分隔值） 文件，可以直接喂给 MongoDB Compass 用于导入数据。为了方便识别，我把后缀名 .txt 改成了 .csv 。

题外话：如果您有安装 Excel ，此时您会发现它的图标变成了 Excel 的文档，这是因为 Excel 也支持 csv 的编辑处理。但很可惜的是导出的文档没有 BOM 头，而 Excel 没有读到 BOM 头的时候就会用默认编码（简体中文系统中使用的是GB系列）进行处理，因而打开的时候将会呈现一大片的乱码。但这并不影响我们数据的导入—— MongoDB Compass 这种现代软件使用的是 UTF-8 默认编码，只要导出的文件的内容没有被动过，那么不会出现编码导致的问题。

### [](#创建数据库 "创建数据库")创建数据库

1. 新建集群  
最好是选择美国西部的服务器节点。 Vercel 个人账号的后端服务器在华盛顿，因而距离美国西部的服务器最近，延迟最小。我选择了咕咕噜云的台湾机房，导致每次请求的速度那可是相当之缓慢啊（猫咪摊手.jpg  
 我使用了 [MongoDB Atlas](https://cloud.mongodb.com/) 提供的免费额度，可以参照[官方文档](https://docs.atlas.mongodb.com/getting-started/)，创建完账号后新建一个 Cluster ， _Cloud Provider & Region_ 建议选择带有★标识的集群（我用的是 Google Cloud 的平台）， _Cluster Tier_ 选择 `M0 Sandbox` 免费级实例， _Cluster Name_ 按照要求填写（之后无法更改），创建完成后即可在控制台看到它：  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sfu2iQGA_-T2EGi028cyk_CwveWwYG2L2uomPibTRevc/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-new-cluster.webp "创建的Cluster")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-new-cluster.webp)  
（请注意初始创建的 Cluster 是几乎没有数据的，我是写入了一些数据之后截的图）
2. 授权连接方式  
 单击 `Connect` 进入连接方式提示界面。由于我们是新建的项目，在进行连接之前，系统会提示我们先配置可连接的IP地址域与管理用户账户。  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sWATmpvWMIwbMbpaXPN44fgbKZiWlNaV09vv6T8WvZwo/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-cluster-connect-button.webp "单击连接按钮")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-cluster-connect-button.webp)  
 根据 Vercel 的文档中[对于部署 IP 访问的说明](https://vercel.com/knowledge/how-to-allowlist-deployment-ip-address)，我们很无奈地授权所有 IP 段访问。选择第三项（没记错的话），保存。  
 主数据库用户倒是可以随意配置，请记得记录对应的账户名与密码（忘了也不怕，可以重新生成的），在导入数据时会使用到。而出于安全因素的考虑，建议新建一个专用于 Vercel 连接集群的用户，稍后的步骤中也会有提及。  
 以上两点配置完成后，就可以准备进行连接了。  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sp-cc1fsUzpqjwPbIlzrBYC8wfR0Wbjv1J-qfTxztNMs/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-ready-to-connect.webp "可以连接")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-ready-to-connect.webp)
3. 记录集群  
 选择第2项 `Connect your application` ，进入应用连接指导界面。由于waline目前的写法问题，我们无法使用新的连接方式，因而需要选择 `Node.js` 和 `2.2.12 or later` 选项，获得一长串的连接信息。  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sxKTFDcPE-e_ZOOyd1Eo0mazYXfYueg5PMcB40aGQDUw/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-connect-endpoints.webp "连接端点")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-connect-endpoints.webp)  
 例如我的链接：  
| 1 | mongodb://<username>:<password>@cluster-0-shard-00-00.dzwkk.mongodb.net:27017,cluster-0-shard-00-01.dzwkk.mongodb.net:27017,cluster-0-shard-00-02.dzwkk.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-sgse0y-shard-0&authSource=admin&retryWrites=true&w=majority |  
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |  
 复制  
 我们需要的信息有：  
   1. 集群端点  
         * cluster-0-shard-00-00.dzwkk.mongodb.net  
         * cluster-0-shard-00-01.dzwkk.mongodb.net  
         * cluster-0-shard-00-02.dzwkk.mongodb.net  
   2. 集群端口：全是27017，没什么好说的（  
   3. `ssl=true` 连接启用SSL  
   4. `replicaSet=atlas-sgse0y-shard-0` 集群信息为 _atlas-sgse0y-shard-0_  
   5. `authSource=admin` 认证源为 _admin_  
 根据 Waline 文档中 [MongoDB 相关的配置](https://waline.js.org/server/databases.html#mongodb)，整理成环境变量的格式：  
# 环境变量名      = 值  
    ## 备注  
MONGO_HOST       = ["cluster-0-shard-00-00.dzwkk.mongodb.net","cluster-0-shard-00-01.dzwkk.mongodb.net","cluster-0-shard-00-02.dzwkk.mongodb.net"]  
    ##根据上文的 1 ，依次列出  
MONGO_PORT       = [27017,27017,27017]  
    ##根据上文的 2 ，与端点依次对应  
MONGO_REPLICASET = atlas-sgse0y-shard-0  
    ##根据上文的 4 设置  
MONGO_AUTHSOURCE = admin  
    ##根据上文的 5 设置  
MONGO_OPT_SSL    = true  
    ##根据上文的 3 设置  
 复制
4. （可选）创建专用账户  
 为了提升系统的安全性，个人习惯创建一个专用的账户用来管理相关的数据。  
 返回 MongoDB Atlas 控制台，进入 Security 下的 Database Access 模块，新建一个用户：  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,s2aGoWQcP6wk3moqibDrWn23_QibTq-FKU14EeKBeIJo/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-add-new-user.webp "新建用户")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-add-new-user.webp)  
 根据提示配置：  
   * **Authentication Method** 认证模式选择默认的 _Password_ 密码验证，自行设置对应的用户名和密码；  
   * **Database User Privileges** 数据库用户权限选择 _Grant specific privileges_ 授权特定的权限，  
         * **Specific Privileges** 特定权限下选择 _readWrite_ 读写，  
         * 后方 Database 处填入您希望 Waline 使用的数据库名，  
         * Collection 留空（因为 Waline 需要不止一个集）；  
   * **Restrict Access to Specific Clusters/Data Lakes** 右边的开关设置为开启模式，  
         * 下方 **Grant Access To** 勾选之前创建的 Cluster ，并且单击右边的 `Done` 以确认；  
   * **Temporary User** 请务必保持关闭（因为这个选项的意思是该用户为临时用户，一定时间后会被自动删除）  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sRMm-GH99VbiI1lg1On9YmoRarU9j85553dS2qv8_2JA/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-grant-privileges-to-new-user.webp "为新用户授权特定的权限")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-grant-privileges-to-new-user.webp)

记录下此步骤中的用户名、密码和数据库名，在配置 Waline 后端时需要提供。

提示：我初始化连接时是没有数据库的，因而使用的是最高权限的管理员（也就是在 Connect 可用之前，和授权 IP 一起分配的那个管理员账户）；因而我不知道这样限制访问权限的管理员是否会导致无法创建数据库等问题，因而更推荐您先授权最高权限管理员账户，等初始化完成后再使用权限受限的管理员身份作为长期部署解决方案。

### [](#建立后端 "建立后端")建立后端

1. 创建 Vercel 账号，如果有就直接登录，此步骤不再赘述。
2. 参照 Waline 官方文档中 [Vercel 部署](https://waline.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2) 相关的部分进行部署。  
   * 需要注意的是，由于我们使用的是 MongoDB Atlas 的服务，因而无需申请也无需填写 LeanCloud 相关的配置参数。  
   * 在部署过程中配置的环境变量全部会被配置为机密参数，删除需要使用命令行工具手动删，比较麻烦，我是部署完成后再去设置里手动配置环境变量的。而且不知为何我这边生成了两个项目，也许在部署过程中修改项目名会导致生成一个新的？
3. 我开启的功能有：  
   * MongoDB 数据库存储  
   * 隐藏评论者 UA  
   * Akismet 反垃圾  
   * 邮件通知  
   * Telegram 通知  
   * 社交登录 （Github 授权登录）  
   * 评论数统计（前端）  
   * 阅读量统计（前端）  
 因而设置的环境变量有：  
| 环境变量               | 备注                     |  
| ------------------ | ---------------------- |  
| SITE\_NAME         | 站点名                    |  
| SITE\_URL          | 站点地址                   |  
| SECURE\_DOMAINS    | 授权域名                   |  
| DISABLE\_USERAGENT | 是否隐藏评论者 UA             |  
| AKISMET\_KEY       | Akismet 的反垃圾 Key       |  
| AUTHOR\_EMAIL      | 博主邮箱（区分是否通知）           |  
| SMTP\_SERVICE      | 支持的邮件发送服务提供商           |  
| SMTP\_USER         | SMTP 认证账户名             |  
| SMTP\_PASS         | SMTP 认证密码              |  
| SENDER\_NAME       | 发件用户名                  |  
| SENDER\_EMAIL      | 发件邮箱                   |  
| TG\_BOT\_TOKEN     | Telegram Bot API Token |  
| TG\_CHAT\_ID       | Telegram Chat ID       |  
| GITHUB\_ID         | Github OAuth Client ID |  
| GITHUB\_SECRET     | Github OAuth Secret    |  
| MongoDB 相关的参数      | 请参见上文                  |
4. 有必要的话，可以考虑重新生成后端的部署。  
 方法： 进入 项目 - Deployments，找到最新的部署，右边的三个点，选择 Redeploy 即可重新构建部署。  
 需要注意的是，虽然旧的项目不会占用计费资源，但出于对于云服务提供商的尊重，建议还是**及时删除不使用的项目**。

### [](#测试后端 "测试后端")测试后端

输入您部署后端的站点地址，您应当能看到一个评论区示例页面：

[![](https://proxy-prod.omnivore-image-cache.app/0x0,sJd11YEuB52jUEvmb02h8OeNUrXyUELWPieTH0F_o7ks/https://candinya.com/posts/migrate-from-disqus-to-waline/waline-backend-default-demo.webp "评论区示例")](https://candinya.com/posts/migrate-from-disqus-to-waline/waline-backend-default-demo.webp)

切换至 //your-project.vercel.app/ui ，您应当能加载出登录界面：

[![](https://proxy-prod.omnivore-image-cache.app/0x0,s1Yd3kNbmvPYyGfSIzVJR1rSSmz7Gmgg9LdcqHD2XjI8/https://candinya.com/posts/migrate-from-disqus-to-waline/waline-backend-login-page.webp "登录界面")](https://candinya.com/posts/migrate-from-disqus-to-waline/waline-backend-login-page.webp)

单击右下角的 `用户注册`，输入您的信息，注册成功且没有出现问题，并且您应当可以登录管理系统了，那么您的后端应当是已经配置完成了。

第一个注册的用户会自然成为管理员。

### [](#导入旧评论数据 "导入旧评论数据")导入旧评论数据

1. 连接数据库  
 我使用了 `MongoDB Compass` 作为连接工具。（主要是觉得有 GUI 方便操作）  
 回到 MongoDB Atlas 控制台，单击 `Connect` 进入连接方式提示界面，选择第3项，进入 MongoDB Compass 的连接指导界面。没有 MongoDB Compass 的话，就下载安装一个吧。  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sGU7G_cx0bFXDB0M6R4IO0k_Wuu8cpS8Btah4xf9durA/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-connect-using-compass.webp "使用 Compass 进行连接")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-connect-using-compass.webp)  
 复制连接串，粘贴到 Compass 的连接框内，调整用户名和密码为您在上一步中设置的值，单击 `Connect` 即可建立与 Cluster 的连接。  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,ssP3ydLIZYGTOWi4_HRkOsX4d1bkq2uSgK51GQYekWAQ/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-copy-compass-connect-string.webp "复制连接串")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-cloud-copy-compass-connect-string.webp) [![](https://proxy-prod.omnivore-image-cache.app/0x0,sw0Wbt4ayFsvENCx0bDRdCAsRN64b67Ho9KbWP21Zw1g/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-compass-connect-to-cluster.webp "准备连接")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-compass-connect-to-cluster.webp) [![](https://proxy-prod.omnivore-image-cache.app/0x0,sb_fO0_x_LMx_cbRvC_dWJywz4ik_L3nGkLjunaW7B5k/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-compass-connected.webp "连接成功")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-compass-connected.webp)
2. 导入数据  
 在导入之前，最好是能先去发送一条测试用的评论，以方便生成对应的数据表结构。  
 然后进入 站点数据库 - Comment 集，应当能看到那些已经提交上去的 ~~测试~~ 评论了：  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,s9GKARSeIKx7PyVyeaBwYfhJGdpMHtYTJrgO1EzGIqgA/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-comments.webp "评论数据")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-comments.webp)  
 单击 绿色的 `ADD DATA` （添加数据），选择 `Import File` （从文件导入）  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sVmDQntVa9KO0FJznPRchHq1adQ6TRq9v97hgOrGMNAs/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-import-file.webp "导入数据")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-import-file.webp)  
 选择需要导入的文件，记得修改右下角的文件后缀名筛选，默认是 JSON ，我们需要手动改成 CSV ：  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,sMnTmkgCqTssih5C2jwcr5rczcd8MTAk0fEKAz5jcFz0/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-import-data-file-csv.webp "导入数据")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-import-data-file-csv.webp)  
 Compass 会自动识别出 CSV 文件，并且展示 10 条样例数据方便检查是否正确：  
[![](https://proxy-prod.omnivore-image-cache.app/0x0,stxyJ86t903WnnPuPR7uZqKt1mrpSkcBipbPzI2mFTeU/https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-import-data-demo-show.webp "展示用的样例")](https://candinya.com/posts/migrate-from-disqus-to-waline/mongodb-table-import-data-demo-show.webp)  
 确认无误后，单击 `IMPORT` 即可将数据全部导入至数据库。  
请注意，由于Disqus备份与相关隐私的问题，数据会有部分的丢失：例如评论者头像、评论者身份等等。  
 而由于MongoDB使用的是`_id.$oid`索引，不是SQL的`id`字段，因而导入之后需要根据ID调整各条评论的pid和rid关系，以避免因为找不到父评论内容而无法显示的情况发生。

至此应该就全部完成啦。别忘了测试一下是否工作正常哦。

---

