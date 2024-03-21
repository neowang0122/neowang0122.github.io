---
id: aa26d8f5-fb4b-4b99-b8cd-36aba1d2aba5
title: |
  使用 Z-Library+Calibre+静读天下+坚果云，构建自由可控的数字图书馆和云同步阅读方案
author: |
  路人甲的世界WP Editor.md作者，博客untitled.pw。​关注他
date_saved: 2023-07-16 11:04:01
date_published: 2023-03-25 20:00:00
---

# 使用 Z-Library+Calibre+静读天下+坚果云，构建自由可控的数字图书馆和云同步阅读方案
#Omnivore

[Read on Omnivore](https://omnivore.app/me/z-library-calibre-1895f3ae063)

[Read Original](https://zhuanlan.zhihu.com/p/617103688)

date_saved: 2023-07-16 11:04:01

date_published: 2023-03-25 20:00:00

--- 

# Full Content: 

> 在放缓文章更新速度的这两年内，笔者不少的时间都花在了阅读和学习上，尤其是对社科、心理学、哲学、历史等学科的学习。==起初为了方便获取书籍资源和方便的云同步，笔者选择了在用户体验和出版物数量上首屈一指的微信读书 APP，但随着学习的深入，微信读书内的书籍逐渐无法满足我的阅读需要（尤其是外文图书的缺失），更致命的是，微信读书会在部分书籍的版权到期后选择下架书籍，就算已下载到设备里的书，也会随之消失，包括所有的批注和笔记==……本文将为读者分享笔者最近半年来为实现阅读自由而构建的解决方案，希望能帮助书友们构建自己的数字图书馆。  
> 本文原载于[未命名小站](https://link.zhihu.com/?target=https%3A//untitled.pw/software/2897.html)，由作者本人同步至知乎，转载请注明原作者博客地址或本链接，谢谢！

### 0x01 分析需求

==本文的目的是构建自由可控数字图书馆和云阅读的解决方案，笔者按照自己的需求将这一方案拆解，可以得到如下的目标：==

* ==书籍获取来源自由，不受特定平台限制，不能有== ==[DRM](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Digital%5Frights%5Fmanagement)==
* ==书籍、元数据、笔记统一管理，以科学方法进行分类，以次构建自己的图书馆，笔记支持跨书籍查询==
* ==自由选择阅读平台，支持备份恢复，导入导出笔记，并能在不同的设备（手机、阅读器、平板电脑）上同步阅读进度和最新笔记==
* ==所有数据本地存储，云平台只作为同步和备份使用==
* ==尽量降低成本，或转为一次性开支，避免被订阅捆绑==

抱着这样的目标，笔者找到了不少方案。

### 0x02 寻找方案

==1. 满足以上目标的书籍获取来源有：==

   * ==[图灵社区](https://link.zhihu.com/?target=https%3A//www.ituring.com.cn/)====、====[异步社区](https://link.zhihu.com/?target=https%3A//m.epubit.com/)====：只有 IT 类书籍，且数量有限==
   * ==[古登堡项目](https://link.zhihu.com/?target=https%3A//www.gutenberg.org/)====：只有版权过期的图书，且大部分为英文图书==
   * ==[淘宝](https://link.zhihu.com/?target=https%3A//s.taobao.com/search%3Fq%3D%25E6%2589%25BE%25E4%25B9%25A6)====：大部分为 PDF 扫描版，来自图书馆流出，体积较大，无法摘录文字，且收费较高（2~5 元）==
   * ==[Libgen](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Library%5FGenesis)====：主要是论文，中文书籍较少==
   * ==[Internet Archive](https://link.zhihu.com/?target=https%3A//archive.org/)====：主要是英文书籍，未来尚不明确（====[互联网档案馆因开放 140 万册版权图书遭起诉，美国法院裁定该网站无权扫描图书 - IT 之家](https://link.zhihu.com/?target=https%3A//www.ithome.com/0/682/230.htm)====）==
   * ==[Z-Library](https://link.zhihu.com/?target=https%3A//singlelogin.me/)====：书籍和论文都有，有大量中文图书，但截至目前访问较为困难==

这样对比下来，Z-Library 是以上所有选择中最佳选项。且 Z-Library 还有 Z-Alert 功能，就算当前没有的书籍，也可以通过这一功能进行监视，一旦有志愿者上传了这本书籍，就会第一时间通知用户。当然它也不是万能的，如果有的书在 Z-Library 上找不到，也可以使用其他来源进行寻找，总而言之这些途径能让我们不受限于单一平台所提供的书库。

2\. 而满足以上目标的书籍管理软件有：

   * [Kindle for PC](https://link.zhihu.com/?target=https%3A//www.amazon.com/gp/help/customer/display.html%3FnodeId%3DGZSM7D8A85WKPYYD)：免费软件，支持导入本地图书，本地存储
   * ==[Calibre](https://link.zhihu.com/?target=https%3A//calibre-ebook.com/)====：开源软件，支持 Windows、macOS、Linux，支持自定义元数据、安装插件、编写脚本==
   * [BookFusion](https://link.zhihu.com/?target=https%3A//www.bookfusion.com/)：支持上传本地图书，跨设备同步，并能将本地 Calibre 书库同步到云端，有订阅费用

对比之后，Calibre 免费开源可扩展的特性最能满足笔者的需求，我们可以根据自己的阅读习惯来构建自己的图书馆，如果有一定开发能力甚至可以自己编写插件扩展其功能。

事实上这三款软件都有内置的书籍阅读功能，但笔者个人体验下来觉得三个都不够完美，有的 UI 简陋、有的操作复杂、有的不支持自定义字体、且以上所有阅读器都没有针对中文排版优化。因此我们还是需要选择一个独立阅读软件。

3\. 满足以上目标的阅读软件有：

   * [iBooks](https://link.zhihu.com/?target=https%3A//apps.apple.com/us/app/apple-books/id364709193)：操作简洁，和 iCloud 结合，无缝同步，但导出批注较为困难
   * [Kindle APP](https://link.zhihu.com/?target=https%3A//www.amazon.com/b%3Fie%3DUTF8%26node%3D16571048011)：[退出中国](https://link.zhihu.com/?target=https%3A//bookfere.com/post/985.html) 后，云同步功能不受保障
   * [微信读书](https://link.zhihu.com/?target=https%3A//weread.qq.com/)：可以导入本地图书，云同步非常快，但用户体验没有平台内书籍那么好
   * [FBReader](https://link.zhihu.com/?target=https%3A//fbreader.org/)：简洁但不够美观，对中文排版不友好，支持 Google Drive 同步
   * [静读天下](https://link.zhihu.com/?target=https%3A//www.moondownload.com/chinese.html)：对中文排版有特别优化，但选项太多，初次使用不友好，支持自定义 WebDav 同步

以上阅读软件各有优势，如果使用 iOS 设备，那么 iBooks 和微信读书（只拿来阅读本地图书）是较好的选择，但是笔者使用 Android 设备，因此笔者选择了静读天下 APP，因为它有自定义的 WebDav 同步，不用考虑 FBReader 在国内使用 Google Drive 的问题。

### 0x03 书籍获取

由于 Z-Library [被美国 FBI 查封](https://link.zhihu.com/?target=https%3A//www.zhichanli.com/p/1221879333)，其主要域名已不可用，但我们可以通过它的登录入口了解到最新域名：[singlelogin.me](https://link.zhihu.com/?target=https%3A//singlelogin.me/)。

如果读者掌握 Tor 网络的基础知识，尤其是在大陆以外地区，希望避免访问 Z-Library 导致的诉讼风险，也可以使用 [Qubes OS](https://link.zhihu.com/?target=https%3A//www.qubes-os.org/)、[Whonix](https://link.zhihu.com/?target=https%3A//www.whonix.org/)、[Tails](https://link.zhihu.com/?target=https%3A//tails.boum.org/)、[Tor Browser](https://link.zhihu.com/?target=https%3A//www.torproject.org/download/) 等工具匿名访问该网站：[http://zlibrary24tuxziyiyfr7zd46ytefdqbqd2axkmxm4o5374ptpc52fad.onion/](https://link.zhihu.com/?target=http%3A//zlibrary24tuxziyiyfr7zd46ytefdqbqd2axkmxm4o5374ptpc52fad.onion/)。

==为了方便下载书籍，建议注册一个帐号，这样可以使用 Z-Alert 功能求书，还可以直接将书籍发送到邮箱，另外还可以拥有专属域名，避免后续公开域名又被封禁。==

此外，Z-Library 每年会进行两次筹款活动，以保障其服务器运转，召募志愿者等操作，筹款一般都会支持国内支付途径，不支持的话也会有加密货币渠道，笔者不久前就使用 ETH 捐赠了 5 美元。如果这一平台有助于正阅读本文的你获取更多知识，请考虑捐赠！捐赠后可以拥有一个月的高级帐户，可以下载更多图书。具体差别如下图所示：

![](https://proxy-prod.omnivore-image-cache.app/1015x811,sv4asyUPx69XXDqt-DO0tiyEb9T_MJhDwf2Vdzl__Fi4/https://pic2.zhimg.com/v2-c860af5399818c121e59a547cfc9db75_b.jpg)

如果你已经有了自己的本地图书收藏，也可以搜索一下这些书有没有在 Z-Library 上传过，没有的话可以点击右上角的菜单上传书籍。目前 Z-Library 里的中文书籍覆盖还不够全面，尤其是教材、参考资料等书籍较少，需要有条件的用户进一步贡献。

### 0x04 书籍收集

==下载书籍之后当然可以直接阅读，但如果读者需要管理自己的书库，尤其当书籍数量超过 1000 本后，对其进行分类和筛选便非常重要。==

==考虑到书籍收藏是终生事业，选择自由和开源软件是最优选择，而其中社区最庞大的则是 Calibre。==

==打开 Calibre 后，我们可以直接点击左上角的添加书籍，将本地下载好的书籍导入其中。如果书籍是从 Z-Library 下载的，那么其元数据应该基本齐全，但笔者建议修改标签，以满足自己对图书归类的需求。==

以笔者个人为例，我的常用标签组织如下所示： - 已归档 - 已读 - 未读 - 阅读中 - 科学技术 - 计算机技术 - 中国历史 - 西方历史 - 古典哲学 - 现代哲学 - 社会科学 - 心理学 - 中国政治 - 西方政治 - ...

通常一本书的标签示例为：`已归档，阅读中，心理学`。

对书打好标签后，我们可以在左侧边栏的标签选项中对书籍按标签进行筛选，点一下是筛选，点两下是反选，点三下是取消选择。例如笔者需要知道目前哪些书籍导入了，但还没有归档，就可以点两下 “已归档” 的标签，将这些未标记 “已归档” 的书籍筛选出来。

此外，我们还可以标记阅读完成的日期。这需要新增一个自定义字段，点击首选项-添加栏目，按照如下格式添加一个名为 “结束阅读日期” 的字段，就可以在书籍列表中看到这个字段，单击后再单击一次，即可方便标记阅读完成的日期：

![](https://proxy-prod.omnivore-image-cache.app/733x261,sMf3npiB-fsy5oIRp-s8ZlMUA8aY6R1ofkhH9UtOAe40/https://pic4.zhimg.com/v2-d73b0bff4b12f926e81de05c58d0f96b_b.jpg)

### 0x05 书籍阅读

由于笔者的设备都是 Android 系统，因此这里主要分享 Android 下静读天下 APP 的使用方法。

这个 APP 的官方网站为：[Moon+ Reader for Android](https://link.zhihu.com/?target=https%3A//www.moondownload.com/chinese.html) ，可以从介绍内容中看到其对中文的优化已经超过了不少中文阅读软件。付费版本专属的功能如下所示：

> 无广告  
> 摇晃手机即可朗读（支持 TTS 引擎）  
> 支持 PDF 多重注释，快速且支持语音  
> 更美观的背景、字体和阅读主题  
> 支持多点触控  
> 启动时可选密码保护  
> 支持耳机和蓝牙按键控制  
> 书籍到主屏幕的快捷方式  
> 自定义阅读器工具栏功能  
> 小部件支持，将您喜爱的书籍分组，将它们放置在桌面上作为小部件  
> 客户电子邮件支持

笔者个人实际体验下来，免费版已经足够使用，但如果读者希望去掉广告，或者和笔者一样希望支持软件作者，也可以去 Google Play 购买 Moon Reader+ Pro：[Moon+ Reader Pro - Apps on Google Play](https://link.zhihu.com/?target=https%3A//play.google.com/store/apps/details%3Fid%3Dcom.flyersoft.moonreaderp%26hl%3Den)。

> 不得不说，静读天下这个译名极为信达雅，甚至让笔者一度猜测是先有的中文名，再翻译成英文，考虑到作者似乎是国人，这一猜测也许并不假。

静读天下有着所有阅读器软件中最完善的选项，其字体搜索功能还可以直接在内置浏览器下载字体、封面下载功能也是通过打开内置浏览器，长按图片完成选择。如下截图，可以看到其选项的丰富程度，建议用户初次使用时将所有选项尝试一遍，打造最舒适的阅读体验：

![](https://proxy-prod.omnivore-image-cache.app/527x1141,s_e7NqmYfpgN3EbGGnNchJLjy51Xrt4VNg8BHFH5I2aA/https://pic3.zhimg.com/v2-2ebb8977ea8a4fc7530afd7542aa309e_b.jpg)

### 0x06 同步阅读进度

尽管手机是最方便的阅读工具，但在手机上阅读，最大的问题在于如何抵御源源不断的推送消息、工作信息，以及来自视频和新闻的诱惑，另外现在手机常用的 OLED 显示屏相比 LCD 屏幕更容易对视力造成影响，也不能久看。==倘若是在公司等电梯时，排队时，带薪如厕时，拿起手机尚可利用一下闲暇时间，回到家中则最好使用平板电脑、电纸书等设备继续阅读更好。==

==这样随时随地阅读的需求，导致了我们需要一个同步书籍和阅读进度的方案。==好在静读天下提供了这样的能力，我们可以在阅读界面右上角点击其它选项，滚动到最下面，勾选 “通过 WebDav 在手机平板间同步阅读进度”，并设置 WebDav 服务器的地址、账号密码。

考虑到需要同步的书籍数据并不大，但要求同步速度够快，我们可以使用坚果云实现这一目标。坚果云是目前对 WebDav 支持最好的在线网盘，尽管容量不大，但口碑较好，访问速度也很快，使用坚果云 WebDav 功能的教程可参考：[坚果云第三方应用授权 WebDAV 开启方法 | 坚果云帮助中心](https://link.zhihu.com/?target=https%3A//help.jianguoyun.com/%3Fp%3D2064)。

配置好阅读进度后，只需要将静读天下 APP 置于后台，或点击返回按钮退出阅读状态，就会上传阅读进度到云端，没有冲突处理，默认覆盖阅读进度。

此外，我们还需要在不同的设备同步书库。在静读天下首页点击设置-备份，选择备份到 WebDav，勾选包含书籍封面和书籍文件，则会将整个书库（包括设置）打包上传。上传完成后，在其它设备点击恢复，输入帐号密码，选择备份，即可同步书库。这一操作需要在新增图书后进行一次，但操作并不麻烦。

在所有设备的书库保持同步后，我们在其中一个设备退出阅读，自动上传阅读进度，在其他设备打开这本书，就会提示是否同步最新阅读进度，我们点击是，就可以跳转到之前的阅读状态，并且批注、笔记均会保持同步。

> 需要注意的是，静读天下的备份选项只支持备份最近阅读的 20 本图书，因此我们需要在阅读完成后尽快归档并删除已阅读的图书，避免降低备份恢复的速度，或导致其它问题。

### 0x07 ==阅读笔记归档==

==在阅读完一本书籍后，我们希望将书籍里的批注、划线、笔记整理出来，以便集中查阅。==这样的操作需要我们结合静读天下和 Calibre：

首先在静读天下的阅读界面点击左下角的书签按钮，点击分享按钮，选择分享高亮与备注，将其分享到任何你喜欢的文本编辑器，笔者这里选择了点击复制，粘贴到腾讯文档小程序。

在电脑上打开这篇文档，复制文本，然后打开 Calibre，编辑这本书的元数据，将其粘贴到右侧的注释中，保存后即可对阅读笔记进行归档：

![](https://proxy-prod.omnivore-image-cache.app/2180x1354,sJm1Flnd3lY5Hr5BQDyMFRBcUkvcLMZhqDRpWJnQEy-4/https://pic2.zhimg.com/v2-c7d474e890a73149c1cd3bacc6401851_b.jpg)

归档后有什么用呢？举个例子，如果笔者在注释中写下 `CATCHMEIFYOUCAN` 这段文本，然后在 Calibre 上面的搜索框搜索该文本（笔者没有任何一本书里有这段文字，可以排除全文搜索到书籍内容的可能性），即可搜索到包含对应注释的书籍。

==用这种方法整理批注和笔记，有助于我们后续写作过程中需要相关素材时能快速找到对应书籍作为参考，让数字图书馆不仅仅作为松鼠党的癖好，而是能够伴随一生的知识库。==

### 0x08 书籍备份

Calibre 的数据目录结构主要由数据库和书籍目录组成，其中最重要的当属数据库，我们可以使用坚果云的 WebDav 功能来单独备份这个数据库文件，再使用百度网盘或本地介质来备份书籍文件。笔者采取的方案是使用 Linux 的定时任务，配合 [rclone](https://link.zhihu.com/?target=https%3A//rclone.org/) 工具和一些脚本，每日备份一次，备份最新的 10 个数据库到坚果云，并同步整个目录到 NAS 里。

读者也可以根据自己的需求采取其他方案，如使用 [Syncthing](https://link.zhihu.com/?target=https%3A//syncthing.net/) 将 Calibre 目录同步到多台电脑，或是直接将 Calibre 目录放在 OneDrive 等同步盘里均可。

### 0x09 这是否是一种“盗版”

> 以下内容为笔者个人想法，无意展开讨论，也并不对其内容的正确性背书，只是希望抛砖引玉，给读者一些新的思考角度。

当我们提到盗版与否时，我们往往会忽略一个事实：盗版本身其实是一个诬蔑性用语，在资产阶级法权下保障版权方的利益是一种法律行为，甚至商业行为，而非道德行为。如果只是因为看书不花钱就要遭到道德惩罚和人身攻击，那么首先受到惩罚的应该是图书馆，因为图书馆里看书不花钱的历史已经持续了上百年。

相对于下载盗版书籍，笔者更推荐使用 “无 DRM 书籍” 取代之。大胆承认吧，版权已经是过时的东西，只是因为太多利益纠葛，这群遗老遗少们在互联网时代依旧阴魂不散，只因为所谓的分享精神和公共知识阻碍了他们依靠知识完成资本增值和垄断出版市场的所谓 “战略”，就要对下载盗版电影、看盗版书，甚至只是翻唱一首版权歌曲的人发起讨伐，这是否是一种极大的不公正？

当然，很多人会持有这样的论点：如果人人都不花钱获取信息，那么创作者们就会失业。但事实情况是：只有少部分的创作者依靠版税实现自给自足，绝大多数的创作者收不到任何版税，或是只能收到很少的版税，而最致命的问题在于创作者根本不知道自己收不到版税的原因是没有人购买，还是大部分收入被版权商克扣。不合理的定价、复杂的退款政策、严苛的 DRM，版权商对于创作者和用户的双向压榨才是真正的问题所在，所谓盗版行为更多是一种无奈的无声抗议。

当我们提到盗版会毁灭创作者时，也要意识到 “免费获取” 可以让创作者得到更多的曝光和关注度。事实上互联网新闻、社交媒体、视频网站……这些都是免费获取的典型案例，难道它们都赚不到钱吗？甚至连软件行业也有类似的案例，比如微软对盗版 Windows 的纵容，使得微软在很多发展中国家形成了事实垄断，但这并不影响微软成为软件巨头，市值万亿美金，甚至可以说纵容盗版反而能让微软收入更多，开拓更大的市场。

开源软件行业也有类似的情况，例如早些时候 core-js 作者的遭遇（[core-js 作者快被缺钱“拖垮”了：全职做开源维护，月均收入从 2500 美元锐减到 400 美元 | Redian 新闻](https://link.zhihu.com/?target=https%3A//redian.news/wxnews/268117)，[core-js/2023-02-14-so-whats-next.md at master · zloirock/core-js](https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md)），全世界主流网站都在使用 core-js，而主流开源协议并未放弃版权，在版权客观存在的情况下，作者却只能收到主要来自个人开发者的捐赠，试问这时候那些将版权道德化的企业又去了哪里？这样的例子数不胜数，所谓版权，只是资本方最大化利益的包装罢了。

展开来说，实际上最近的 AI 潮，也深刻反映了这一点，那些曾将版权视为圭臬的财团，在意识到大模型能够混淆版权，让人找不到来源后，开始不断践踏知识产权。试问网站站长最初将自己的网站开放给搜索引擎爬虫爬取时，是否希望自己的作品被搜索引擎利用并二次创作？如果说 AI 是第四次工业革命，那么对于互联网信息的肆意采集、私有化、商业化，就是工业革命前血腥的原始积累。很多人说 AI 大模型学习互联网信息和人类学习互联网信息的模式类似，因此不能算作侵权，那么请问人类是创造利益的机器吗？人类学习的目的首先是为了完成生命的表达，其次才是创造利益和价值，最重要的是人不是谁的奴隶，也不是谁的赚钱机器。但目前来看，大模型只有超级企业才有能力拥有，这意味着生命的表达被工具化，智力劳动的意义正如当年第一次工业革命的体力劳动一样正被稀释。类似上世纪 50 年代的计算机革命导致大企业对数据和计算能力的垄断，互联网急需一场类似上世纪 70 年代的“人民计算机运动”（[People's Computer Company - Wikipedia](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/People%2527s%5FComputer%5FCompany)），解放算力和大模型，让大模型成为自由软件：[自由软件现在更加重要 - GNU 工程 - 自由软件基金会](https://link.zhihu.com/?target=https%3A//www.gnu.org/philosophy/free-software-even-more-important.zh-cn.html)。

互联网时代，信息的交换应当是点对点的，事实上早些年的互联网的确在这一方面做到了极致：拨号网络、BitTorrent、RSS……可惜这一切止步于移动互联网时代对效率和可用性的追求，以至于当移动支付兴起时，这一互联网精神却随着 Google 关闭 Google Reader 而被人遗弃。试想我们对某本书的支付，其款项可以 100% 给予作者本人，这样的世界该多么美好！只是这样一来，资本充当不了中间人，没有办法赚钱，自然也没有动力去推进，甚至会故意打压之。

当今荒谬的版权制度现实无法避免，那么我们应该如何在下载 “无 DRM 书籍” 时，尽可能保障作者的合理权益，并同时鼓励创作和知识分享呢？笔者提供一些思路，其中部分是笔者个人正在践行的： 1\. 如果是一本很好的书，不妨买回家收藏，好书多多翻阅也有益处。 2\. 如果家里放不下，可以将这本书送给贫困地区的乡村图书馆，扩展孩子们的阅读面。可以直接在线下单书籍，寄送到你所知道的学校/图书馆地址（提前打好招呼），也可以将自己买回家但不常看的书籍打包寄到这些地方。最好是一次寄送多本书籍，避免给对方造成麻烦。 3\. 如果知道作者的联系方式（如微信公众号、专栏、视频平台等），可以直接捐赠一笔资金，能尽可能避免被版权方克扣。 4\. 如果作者已去世，或是书籍已经停止出版，则应当将电子书分享给更多的人，因为既然作者已经无法获得收益，我们所付出的金钱都给了版税方，这并不能鼓励创作。 5\. 偶尔捐赠一笔资金给类似 Z-Library 这样鼓励知识自由获取的在线图书馆，让人们能够平等且无门槛地获取知识，实现自我成长。

希望以上技术分享和笔者的个人想法能给看到这里的读者一些启发和火花。

---

> 如果发现内容有谬误，请指正，笔者一定改正；如果觉得笔者的想法和您的想法不同，请尊重彼此的观念差异，并友善地提出您的观点，以让更多读者得到启发。

---

## Highlights

> 起初为了方便获取书籍资源和方便的云同步，笔者选择了在用户体验和出版物数量上首屈一指的微信读书 APP，但随着学习的深入，微信读书内的书籍逐渐无法满足我的阅读需要（尤其是外文图书的缺失），更致命的是，微信读书会在部分书籍的版权到期后选择下架书籍，就算已下载到设备里的书，也会随之消失，包括所有的批注和笔记 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#252704fe-0718-4168-9b6b-8f1e7b9dd87e)  ^252704fe

> 本文的目的是构建自由可控数字图书馆和云阅读的解决方案，笔者按照自己的需求将这一方案拆解，可以得到如下的目标：
> 
> * 书籍获取来源自由，不受特定平台限制，不能有 [DRM](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Digital%5Frights%5Fmanagement)
> * 书籍、元数据、笔记统一管理，以科学方法进行分类，以次构建自己的图书馆，笔记支持跨书籍查询
> * 自由选择阅读平台，支持备份恢复，导入导出笔记，并能在不同的设备（手机、阅读器、平板电脑）上同步阅读进度和最新笔记
> * 所有数据本地存储，云平台只作为同步和备份使用
> * 尽量降低成本，或转为一次性开支，避免被订阅捆绑 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#06a25c82-f6b0-424e-9a7c-ae70a878721a)  ^06a25c82

> 1\. 满足以上目标的书籍获取来源有：
> 
>    * [图灵社区](https://link.zhihu.com/?target=https%3A//www.ituring.com.cn/)、[异步社区](https://link.zhihu.com/?target=https%3A//m.epubit.com/)：只有 IT 类书籍，且数量有限
>    * [古登堡项目](https://link.zhihu.com/?target=https%3A//www.gutenberg.org/)：只有版权过期的图书，且大部分为英文图书
>    * [淘宝](https://link.zhihu.com/?target=https%3A//s.taobao.com/search%3Fq%3D%25E6%2589%25BE%25E4%25B9%25A6)：大部分为 PDF 扫描版，来自图书馆流出，体积较大，无法摘录文字，且收费较高（2\~5 元）
>    * [Libgen](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Library%5FGenesis)：主要是论文，中文书籍较少
>    * [Internet Archive](https://link.zhihu.com/?target=https%3A//archive.org/)：主要是英文书籍，未来尚不明确（[互联网档案馆因开放 140 万册版权图书遭起诉，美国法院裁定该网站无权扫描图书 - IT 之家](https://link.zhihu.com/?target=https%3A//www.ithome.com/0/682/230.htm)）
>    * [Z-Library](https://link.zhihu.com/?target=https%3A//singlelogin.me/)：书籍和论文都有，有大量中文图书，但截至目前访问较为困难 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#18d858c5-0bc1-4fb6-989c-c949534cb4f4)  ^18d858c5

> [Calibre](https://link.zhihu.com/?target=https%3A//calibre-ebook.com/)：开源软件，支持 Windows、macOS、Linux，支持自定义元数据、安装插件、编写脚本 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#f0283130-0352-4397-9bf6-068e88bcbfcc)  ^f0283130

> 为了方便下载书籍，建议注册一个帐号，这样可以使用 Z-Alert 功能求书，还可以直接将书籍发送到邮箱，另外还可以拥有专属域名，避免后续公开域名又被封禁。 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#7912cbb4-642e-4d70-ba1e-59bbe620b6d4)  ^7912cbb4

> 下载书籍之后当然可以直接阅读，但如果读者需要管理自己的书库，尤其当书籍数量超过 1000 本后，对其进行分类和筛选便非常重要。
> 
> 考虑到书籍收藏是终生事业，选择自由和开源软件是最优选择，而其中社区最庞大的则是 Calibre。
> 
> 打开 Calibre 后，我们可以直接点击左上角的添加书籍，将本地下载好的书籍导入其中。如果书籍是从 Z-Library 下载的，那么其元数据应该基本齐全，但笔者建议修改标签，以满足自己对图书归类的需求。 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#3a60807a-f126-473f-bf2f-4129a7304c9a)  ^3a60807a

> 倘若是在公司等电梯时，排队时，带薪如厕时，拿起手机尚可利用一下闲暇时间，回到家中则最好使用平板电脑、电纸书等设备继续阅读更好。
> 
> 这样随时随地阅读的需求，导致了我们需要一个同步书籍和阅读进度的方案。 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#b36da0e8-e0b9-4012-a74a-d0c80f900deb)  ^b36da0e8

> ### 阅读笔记归档
> 
> 在阅读完一本书籍后，我们希望将书籍里的批注、划线、笔记整理出来，以便集中查阅。 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#37e3475e-62cb-4443-9039-f7eba162d736)  ^37e3475e

> 用这种方法整理批注和笔记，有助于我们后续写作过程中需要相关素材时能快速找到对应书籍作为参考，让数字图书馆不仅仅作为松鼠党的癖好，而是能够伴随一生的知识库。 [⤴️](https://omnivore.app/me/z-library-calibre-1895f3ae063#bc8b0cd3-2854-4c6a-956a-4494464dcc1f)  ^bc8b0cd3

