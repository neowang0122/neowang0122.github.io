---
id: 2ed70300-ba6f-425f-ac5e-9320c0c71da7
author: |
  涔C
date_saved: 2024-04-07 02:01:50
date_published: 2019-03-09 19:00:00
draft: true
---

# 界面重新设计、中文支持更佳，DEVONthink 即将迎来 3.0 更新 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9)

[Read Original](https://sspai.com/post/54552)

date_saved: 2024-04-07 02:01:50

date_published: 2019-03-09 19:00:00

--- 

# Full Content: 

界面重新设计、中文支持更佳，DEVONthink 即将迎来 3.0 更新

说起 ==macOS 平台上的文档资料进阶管理==，无论如何都绕不开 DEVONthink 这款应用。强大的收集、管理、检索功能，识别近乎所有常见的文件格式，完善的自动化支持，再加上借助 ==[A.I.（人工智能）](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Fapps%2Ftechnology)== ==实现的文档关联与聚合分析，让它毫无疑问地成为 macOS 上文档管理方面的 No.1。==

但是，对于中文用户来说，DEVONthink 2.x 版本内中文搜索算是勉强可用，而作为招牌功能的关联与聚合基本不可用，内置 OCR 引擎更是完全不支持中文，这些都是阻碍正常使用的症结所在。即便如此，依旧有许多人使用 DEVONthink，甚至将其作为核心的文档资料管理应用，由此也可以看出 DEVONthink 整体功能的强大与优秀。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s96J3fJl9pA0UoA4a3bfwWpGTOV5uNy64CgQUfOJ_wPo/https://cdn.sspai.com/editor/u_742287/15570114959970.png?imageView2/2/format/webp)

￼

4 月 24 日，DEVONthink 3.0 公测第一版发布，不少老用户发出「真香」惊叹，让我们来一起看看究竟如何。

## 焕然一新的界面设计

全新设计后的界面，一改之前停留在 10 年前的老旧风格。界面布局与图标，使用了更为现代的设计语言，与 macOS 系统相对更加契合。整体上，也保持了资料管理应用应有的严谨气质。更为重要的改动，则是取消了参阅与归类（See Also & Classify，下同）侧边弹窗，增加右侧**检查器边栏**，之前用来执行高级搜索的「搜索窗口」整合进主窗口。Dark Mode 这种更新标配也自然没有落下。

![整体界面](https://proxy-prod.omnivore-image-cache.app/0x0,sx7kxOZ6CH4lY47iDvCAnTXSjv2I2QbFO5w8_a2_R5nI/https://cdn.sspai.com/editor/u_742287/15570114959980.jpg?imageView2/2/format/webp)

整体界面

￼

## 全面提升的中文支持

DEVONthink 对中文的支持一直被用户所诟病，自然也是本次更新中重点关注的地方。**经实际测试，新版本在中文等亚洲语言支持方面确实有了较大程度的改善**。我们具体来看看。

### 中文分词结果明显改善

众所周知，英文天然地使用空格来对语句中的单词进行分隔，但是中文等亚洲语言则完全不同，在搜索时需要对中文进行分词等预处理。此外，分词也是自然语言处理中语义理解等环节的前提。分词方面的改善，能够带来更好的搜索结果，也让能程序能更好地理解文档，从而才能让 DEVONthink 中的参阅与归类功能提供更为合理准确的建议。我们来看下图，左侧旧版本的数据库内文档的分词结果非常糟糕，存在很多短句。而右侧是用新版本应用重建数据库后，同一个文档的分词结果，对比非常明显。

![分词对比](https://proxy-prod.omnivore-image-cache.app/0x0,sZRjt815OUB2-xZJAVD5aTI3HSK1yJC4Gec0Snhh7opE/https://cdn.sspai.com/editor/u_742287/15570114959987.png?imageView2/2/format/webp)

分词对比

￼

分词改善后，在对中文文档的实际测试中，参阅与归类功能所提供的建议确实也更加合理，不再是 DEVONthink 2.x 版本中完全不知所云的状态。

为了让新版本应用对数据库中的文档重新分词、生成索引，进而改善搜索、参阅与归类等功能的结果，我们**需要在新版本中手动对每个数据库进行重建操作**。根据应用的帮助说明，重建数据库不会影响实际的文件以及相关的元数据。但是这种涉及整个数据库的操作，我们应该小心谨慎，**在手动做好备份后进行**。重建数据库可以这样做：

1. 选择左侧「Open Databases」列表中的某个数据库。
2. 点击菜单栏 「File」- 「Rebuild Database…」。
3. 对每个数据库重复以上两步。

### 搜索方面明显改善，但仍存在问题

在旧版本里进行中文搜索时，需要在每个中文关键词前添加 `~`（波浪号）才能正常进行，比较麻烦。新版本中数据库重建后，**不添加** `~` 也可以得到比较理想的搜索结果。将重建后的数据库用旧版本应用打开，不加 `~`进行中文搜索同样可以得到一致的结果。这说明新版本应用中的**重建操作**确实对于数据库文件有所优化。

但是可能由于目前尚处在公测版本，仍有一些 Bug 或不完善之处，在搜索少部分文档时，仍然只有在中文关键词前添加 `~` 才能搜索到。所以，为了保证搜索结果的完整性，目前依然建议在搜索中文时使用 `~` 前缀。

此外，对于搜索关键词的高亮也更加精准。下图为搜索「江月」时的高亮结果。

![高亮对比](https://proxy-prod.omnivore-image-cache.app/0x0,sLiWjrXERnwobvnUiu9ex7tx__uiSPbuLbCgrnGselgA/https://cdn.sspai.com/editor/u_742287/15570114959994.png?imageView2/2/format/webp)

高亮对比

￼

## ==中文可用的 OCR 引擎==

除了上一节的搜索等方面，旧版本中 OCR 引擎不支持中文也是一个让中文用户郁闷不已的地方。DEVONthink 使用的一直都是在 OCR 领域世界领先厂商 ABBYY 的离线引擎。新版本应用加入了对**中文语言（简繁）**的识别支持，OCR 引擎版本由之前 DEVONthink 2.11.3 所使用的 8.1.0 升级为 11.1.19（目前，ABBYY 在售引擎的最新版本是 12）。并且，全新的 64 位引擎，可以利用现在电脑中已经标配的多核 CPU 加快识别速度。输出格式由 PDF 和富文本，增加为 PDF、富文本、Word、Web archive 等四种输出格式。

为了检验识别效果，这里测试了两种清晰度的中文段落截图：

(1）网页段落截图

![截图（左）与识别结果（右）对比](https://proxy-prod.omnivore-image-cache.app/0x0,sP7GXRsy-SkGaSb-14YuIBamZGcyqqxHI4-fS23d_IYs/https://cdn.sspai.com/editor/u_742287/15570114960002.png?imageView2/2/format/webp)

截图（左）与识别结果（右）对比

￼

(2）扫描书籍截图

![截图（上）与识别结果（下）对比](https://proxy-prod.omnivore-image-cache.app/0x0,sAi6xSZtMZoGIND4MjugbAxchZOn8veZAFUvJZWLR5ok/https://cdn.sspai.com/editor/u_742287/15570114960010.png?imageView2/2/format/webp)

截图（上）与识别结果（下）对比

￼

由于我也不了解目前中文 OCR 的发展水平，并且不同的使用场景对于识别质量的要求也不一样，所以不做过多评价，读者可以自行评估是否满足使用需求。

使用 OCR 功能，需要下载额外的插件（约 500 M 大小），我们可以这样操作：

1. 点击菜单栏 「DEVONthink 3」-「Install Add-Ons…」。
2. 勾选 「ABBYY FineReader OCR」，并点击右下角的 「Install」 进行安装。然后，在主窗口左下角会出现下载进度条。
3. 打开应用偏好设置，选择 「OCR」 面板，然后根据需要进行配置，主要是选择识别的主要语言和次要语言。

![OCR 偏好设置](https://proxy-prod.omnivore-image-cache.app/0x0,saMJVdWuDyrKbrFbULG2PKhug96A4WNmZUIu6PBz0dE8/https://cdn.sspai.com/editor/u_742287/15570114960019.png?imageView2/2/format/webp)

OCR 偏好设置

￼

## ==令人惊喜的自动化：Smart Rule==

你能想像 macOS 必备自动化应用 [Hazel](https://sspai.com/post/35225) 被集成到 DEVONthink 中吗，这正是我看到 Smart Rule 功能后所想到的。旧版本应用中，对 AppleScript 等脚本工具的完善支持，确实让用户能够将许多工作自动化而提高效率。但是，一方面代码编写并非人人都会，对普通用户非常不友好；另一方面，仅支持文件附加脚本等区区两三种自动触发运行方法，难以实现许多想要自动运行的功能。

而 Smart Rule 可以轻松解决了这两个问题。我们先来看个用它实现自动化的例子：在所有数据库（作用范围）中，名字包含「题图」或尺寸为 1440\*480 的图片（筛选条件），在导入时（触发时机）自动移动到少数派文件夹中并加上标签（执行动作）。

![Smart Rule](https://proxy-prod.omnivore-image-cache.app/0x0,sqBhi0LO8UNwsiW4415NKe6I_i-4z1thR0v6wt0ksFxI/https://cdn.sspai.com/editor/u_742287/15570114960026.png?imageView2/2/format/webp)

Smart Rule

￼

Smart Rule 的使用入口在 DEVONthink 窗口左侧边栏中，点击左下角的 `+`（加号）按钮或者右键边栏空白处，可以看到「New Smart Rule」的菜单项。

可以看到，Smart Rule 设置界面采用了 macOS 平台标准的界面与控件风格，布局简单，容易上手。可选的条件或动作十分丰富，这里不完全列举一些：

* 作用范围：任意数据库、文件夹、标签
* 筛选条件：  
   * 文件名、扩展名、种类、内容、文件大小、日期（修改、创建等）  
   * 标签、关键词、元数据、图片的尺寸  
   * 国家、语言、邮编等
* 触发时机：应用启动、退出、同步、每天（年/月）、创建、打开、移动等
* 执行动作  
   * 通知、警告、移动、命名、删改标签、OCR等  
   * 如果已有的动作不满足需求，还可以编写脚本

此外，举出一些可实现的自动化例子：

* ==导入 PDF 自动 OCR==
* ==特定图片自动加水印==
* ==过期的某些种类文件自动删除==
* ==定期从网上更新资源==
* ==长期不访问的特定文件自动归档==

## 更加全面的 Sorter

旧版本中的 Sorter 界面黝黑过时、功能有限，仅可用于快速笔记，以及将文件快捷导入到少数几个文件夹中。新版本中，除了像之前那样吸附在屏幕边缘，还可以放置于任务栏中，并且功能也有了全面的提升：

* 快速笔记：除了之前的功能，还可以执行锁定、旗标、评级等。
* 录音 / 录像：录制后，可以像笔记一样设置标题、标签、保存位置等。
* 截图：可选窗口、屏幕、区域。
* 网页截取：可配合浏览器插件、使用剪贴板内 URL，或输入 URL。
* 快捷访问：可以快捷打开添加到收藏夹的 DEVONthink 文件夹，或者搜索文件夹并打开。还能够通过拖拽文件，快捷添加到这些文件夹中。

![Sorter 界面](https://proxy-prod.omnivore-image-cache.app/0x0,sflcLYavC06EK_2n6JqXkHE2Ehz5fj-cylUeIJNsAaz0/https://cdn.sspai.com/editor/u_742287/15570114960035.png?imageView2/2/format/webp)

Sorter 界面

￼

## 不限场景的自定义元数据

元数据是文件附带的各种信息，如音乐文件的歌手、专辑、年代等，图片的尺寸、光圈、拍摄设备、地理位置等，文献的 DOI 编号、作者、摘要等。我们通常借助元数据，来分类、搜索、管理文件。现在 DEVONthink 中可以自由添加各种元数据类型，并为其设置需要的数据类型（包括布尔量、数字、文本、ID、URL等）及格式。或者，也可将各项元数据转换为文件的标签以便搜索和管理。

![自定义元数据](https://proxy-prod.omnivore-image-cache.app/0x0,sn1A7b0s1FPSGsmoAEISE3JYAyHRAM9TyGnHkZ51sat8/https://cdn.sspai.com/editor/u_742287/15570114960044.png?imageView2/2/format/webp)

自定义元数据

￼

借助自定义的元数据，我们能够把 DEVONthink 变为提供可靠管理功能的音乐库、图片库、文献库，进行书籍与阅读管理，而且这些可以同时存在。再加上强大的自动化功能，让 DEVONthink 与这些方面的一些专门软件相媲美，也不是不可能。

此外，新版本添加了对于**图片地理位置信息**的支持，不仅可以从图片中提取位置信息，还能手动添加地理位置、将位置信息转换为文件标签、在地图中显示文档所属的地理位置，以及通过地理位置筛选文件等。我们可以点击 DEVONthink 窗口左下角的**大头钉📌️**打开地图视图。说到这里，可以想像 DEVONthink 又多了一个强大的使用场景：做游记相关的文档管理。

![地图视图](https://proxy-prod.omnivore-image-cache.app/0x0,sUr6pzFF0EMriGUQaekJk5WL79aaDsFsALt0uZwv6mgI/https://cdn.sspai.com/editor/u_742287/15570114960054.png?imageView2/2/format/webp)

地图视图

￼

## 全新整合的检查器（Inspectors）

右侧检查器边栏的加入，是此次更新中界面布局调整最大的部分。它的样式风格，与现在 Sketch、OmniGraffle 等众多专业软件的检查器边栏非常一致，让用户的使用体验更加连贯、顺畅。

![检查器布局](https://proxy-prod.omnivore-image-cache.app/0x0,s8wvoYwOppsLMJV6tqLBIGq5uNkc7dUn-HvVAAQlTk6Q/https://cdn.sspai.com/editor/u_742287/15570114960063.png?imageView2/2/format/webp)

检查器布局

￼

检查器边栏，可以切换为七种不同的面板：

* 信息：  
   * 一般信息：文件名、路径、日期、标签、从搜索中排除等  
   * 自定义元数据：显示什么自己定
* 标注及提醒：Finder 备注、标注、提醒设置
* 内容：目录、缩略图（适用于 PDF）
* 文档：属性、标注、所含链接
* 词语索引：词频列表、词云、曲线图
* 参阅及归类：人工智能所提供的相关文档和归类建议
* 文件内搜索

![检查器列举](https://proxy-prod.omnivore-image-cache.app/0x0,slP1ut7fOSptBHid3lDegIFTHljo0rIBd8vDtRgD-_Xk/https://cdn.sspai.com/editor/u_742287/15570114960071.png?imageView2/2/format/webp)

检查器列举

￼

## 更加完善的搜索功能和语法

在旧版本中，DEVONthink 的搜索语法仅支持 `? * [a-b]` 等通配符和 `AND OR NOT NEAR` 等操作符。如果要执行类似「标题开头是 abc 或内容中含有 def 」这样的高级搜索，就需要按下快捷键 `⌥Option-⌘Command-F` 打开高级搜索窗口，然后像在访达中进行高级搜索一样，通过鼠标点点点，设置一条条的搜索条件。

![旧版本应用高级搜索](https://proxy-prod.omnivore-image-cache.app/0x0,sMF4LBgiR5MseREOPh-r98RQ2RgdtO8zYVLKU22l9x60/https://cdn.sspai.com/editor/u_742287/15570114960078.png?imageView2/2/format/webp)

旧版本应用高级搜索

￼

新版本将高级搜索整合进主窗口，而且对搜索语法进行扩展，让我们能够通过直接输入搜索指令进行高级搜索。对于习惯于全键盘操作的极客用户，算是个可喜的改进。

![新版本应用高级搜索](https://proxy-prod.omnivore-image-cache.app/0x0,sF2OsaCUDVqHouKMRW5H6af_srOCfXOdtoCATsrwuoP4/https://cdn.sspai.com/editor/u_742287/15570114960086.png?imageView2/2/format/webp)

新版本应用高级搜索

￼

搜索语法的改进主要是，在之前的通配符和操作符的基础上，添加了 `tag`、`name` 等多达几十项的**搜索前缀**，以及相应的 `:`（匹配）、`==`（等于）、`:<`（开始于）等十余项**前缀操作符**，从而实现类似于 （当前选中文件里面添加日期晚于2019/03/10的文件）这样更为精准的搜索。这些搜索语法也支持在 AppleScript 等代码中使用。

更为详细的搜索语法说明，我们可以在 DEVONthink 菜单栏「Help」菜单搜索框中输入 `Search Prefixes` 或 `Search operators` 进行查看。

## 有趣也有用的自定义水印

出于保护文件资料的版权等目的，我们经常会需要在 PDF 或图片上添加水印。新版本在这方面提供了十分强大的功能，结合 Smart Rule 与脚本等自动化支持，我们可以非常高效省心地批量添加水印。

设置水印样式，需要打开应用偏好设置中的「Imprinter」面板。可以看到，这里支持设置多种水印。

![水印配置](https://proxy-prod.omnivore-image-cache.app/0x0,s4YKw1giHcVw08JMv0f0KIxk-AYP_J9ZLlZ5EflrHBXI/https://cdn.sspai.com/editor/u_742287/15570114960094.png?imageView2/2/format/webp)

水印配置

￼

对于每种水印，可以进行这些配置：

* 文字内容
* 字体、颜色、边框等外观样式
* 在图片或 PDF 页面中的位置、旋转角度
* PDF 每页 / 奇数页 / 偶数页 / 自定义等

最为有趣的是，我们可以在水印的文字内容中加入文件名、创建日期、所在文件夹、页码、自定义元数据等数十种**占位符（Placeholder）**。占位符，可以理解为一个变量，以**文件名**占位符为例，在文件 A.jpg 中加入的水印文字为「A.jpg」；在文件 B.pdf 中加入同种水印样式则是「B.pdf」。在上图中，右键点击「Title」输入框，可以看到「Insert Placeholder」插入占位符的选项。

设置水印样式后，在文件右键菜单中选择「Imprinter」就能够添加水印了。

## 安全可控的 Web 服务

向他人共享资料，是我们在工作中时常会遇到的情况。通常，我们需要和对方沟通一番，然后挑挑拣拣地收集、打包并发送。实际情况下，这个过程可能要来回重复好几次。另外，小组或团队内部的共享资料，也是一个常见的需求，一般情况下可能通过安装配置专门的服务器程序解决。

DEVONthink 为我们提供了一个新选项：开启 Web 服务功能后，局域网内或者互联网上的其他人可以在浏览器中打开 DEVONthink 提供的服务网页页面，输入帐号密码后就访问我们数据库中的文档资料。

但是，旧版本中只能设置一套帐号密码，而且无法控制允许访问的数据库。不够方便灵活，在很大程度上限制了使用场景。新版本中，这些问题都得到了解决：可以创建多套账户密码，并且为每个账户设置可访问的数据库，以及相应的权限（包括读取、下载、添加、写入、组织、删除等）。

![Web 服务账户设置](https://proxy-prod.omnivore-image-cache.app/0x0,sFFW554x_GsCn04Egf-r5pSOHbV_LFM4aNnb64jzsOJA/https://cdn.sspai.com/editor/u_742287/15570114960102.png?imageView2/2/format/webp)

Web 服务账户设置

￼

除此之外，新版本还可以为 Web 服务启用 HTTPS 加密，一定程度上保障了传输过程中的数据安全。Web 服务的网页界面也得到了全新的设计，更加符合现代审美。

![Web 服务网页页面](https://proxy-prod.omnivore-image-cache.app/0x0,smKXVHlckudFiQGGfgNpcCYxrCuf_BnDSOLBRnYpYIhQ/https://cdn.sspai.com/editor/u_742287/15570114960113.jpg?imageView2/2/format/webp)

Web 服务网页页面

￼

## 其它新特性

不得不说，DEVONthink 新版本真的是充满诚意，不过新特性与功能实在无法一一详细说明，这里列举剩余的一些相对重要的方面：

* 全新设计的左侧侧边栏，除了以前显示数据库和智能文件夹的**导航**面板，还增加了  
   * **阅读列表**面板：分为全部与未读。在 DEVONthink 中，通过文件右键菜单中的 「Add to」- 「Reading List」将其加入阅读列表。  
   * **导入**面板：  
         * 图片捕获：支持通过连接的 iOS 设备或扫描仪扫描图片或文档。  
         * 邮件导入：支持 Apple Mail 和 Outlook 两款邮件客户端。  
   * **额外**面板：显示使用技巧、应用购买优惠，以及官方博客更新等
* 提醒功能：我们可以为文件或文件夹，设定一次/每时/每周/每月/每年的定期通知提醒、发送邮件、执行脚本等操作。定期的资料回顾、日志记录，更方便了。选择文件或文件夹后，在检查器边栏的左侧第二个面板中可以设置。
* 利用机器学习自动为图片文件添加标签。选中图片文件后，在右键菜单中点击「Tags」-「Add Tags to Images」可以执行。不过，在我的测试中，自动添加标签的成功率和标签合理性并不高，期待后续的更新改进。
* 条码检测：包括条形码、二维码等。选中文件后，点击右键菜单中「Tags」-「Scan Barcodes」运行。扫描得到的数据显示在检查器边栏的信息面板中。
* 支持 HTML 与 MarkDown 文件的编辑 / 预览双栏界面。
* 支持 ePub 电子书文件的阅读、搜索。

关于新特性的详细介绍，可以查看 [ 官方的更新说明](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Fapps%2Fdevonthink%2Fnew)。

DEVONthink 3.0 公测虽然没有随之发布用户手册，但是应用内的帮助文档已经十分完善。遇到不明白的功能，或者找不到想要体验的功能，我们可以在菜单栏「Help」中进行搜索。如果功能界面上有帮助按钮 `?`，也可以点击查看。

## ==版本划分、价格与老用户==

==3.0 的版本划分有所调整，去除了不支持自动化和多数据库的 Personal 版本及 DEVONnote，改为 DEVONthink、DEVONthink Pro 与 DEVONthink Server 三版本。与之前不同，所有版本下载的都是同一个 App，根据输入的许可证区分版本、启用功能。==

![版本划分变更](https://proxy-prod.omnivore-image-cache.app/0x0,shD2OlkMl_6b-wncobbbntmzY6l7ajn_8wNx-iznOUlc/https://cdn.sspai.com/editor/u_742287/15570114960121.png?imageView2/2/format/webp)

版本划分变更

￼

==对比最基础的 DEVONthink 版本，DEVONthink Pro 还具备这些功能：==

* ==OCR（Making scans searchable）==
* ==PDF 与图片水印（Imprinting for PDFs and images）==
* ==邮件存档（Email archiving）==
* ==下载管理器（Download Manager）==
* ==图片捕获（Image Capture support）==
* ==扫描仪支持（Scanner integration）==
* ==词语索引（Concordance）==
* ==自定义元数据（Custom metadata）==
* ==表格视图（Form views）==
* ==[Bookends](https://sspai.com/link?target=https%3A%2F%2Fwww.sonnysoftware.com%2F)== ==应用支持（Bookends integration）==

==而 Server 版本在 Pro 版本之上，又添加了== **==Web 服务==**==功能。==

### 授权设备限额

之前的 DEVONthink 2.x 只要是同一个用户的电脑都可以激活使用，没有明确的设备限额。==从 3.0 开始，每个许可证允许两台电脑使用==，如果要在更多的电脑上使用，那就需要在已有的许可证基础上另行购买。由于激活使用时 DEVONthink 会连接官方服务器进行验证，所以我们可以在官网的 [个人账户](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Flogin) 中查看授权限额的数量和使用情况。

![许可证使用情况](https://proxy-prod.omnivore-image-cache.app/0x0,sOrUJGd6Cdt0xaTVsAmpzDOf8DVvIiIs0NqvCCZUkf9k/https://cdn.sspai.com/editor/u_742287/15570114960129.png?imageView2/2/format/webp)

许可证使用情况

￼

### 价格

DEVONthink、Pro、Server 版本的价格分别为 99 美元、199 美元、499 美元，购买额外授权的单台价格分别为 49 美元、99 美元、99 美元。学生、教育工作者和部分领域的 NPO（非营利组织），可获得额外的优惠，点击查看 [官方说明](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Fcustomers%2Fstudents)。已经以这些身份注册的用户，可以查看 [个人账户](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Flogin) 页面，否则就需要 [另行申请注册](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Fcustomers%2Fapply)

![账户身份状态](https://proxy-prod.omnivore-image-cache.app/0x0,soJTvo4gznUsKa8cKtegfxX6bb3HuAq90Ybqcd-eoFlA/https://cdn.sspai.com/editor/u_742287/15570114960137.png?imageView2/2/format/webp)

账户身份状态

￼

对于老用户，则是可以用之前购买的许可证的部分价格进行抵扣，付款升级为新版本的使用许可。2019年2月1日后购买 2.x 版本的用户，可以免费获取对应的新版本，或者以当时购买的价格全额抵扣。同样，我们可以在 [个人账户](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Flogin) 中查看具体的抵扣情况，并升级使用许可。

目前，公测版**不需要**购买许可证就可以使用包括 Pro、Server 版本在内的全部功能。预计到**今年夏季**，正式版会发布，到时就需要输入许可证才能使用了。

## 版本升级与数据迁移

新版本发布后，如何进行数据迁移是用户都非常关心的。DEVONthink 开发商在 3.0 版本选择使用了与 2.x 版本相同的数据库格式，这样的好处就是：我们可以直接用 3.0 版本应用打开之前的数据库文件，而且之后如果想用回旧版本，直接再用 2.x 版本打开数据库即可。不过，由 3.0 版本的新功能在数据库中所做的改动不会显示在 2.x 版本应用中。我们可以这样进行数据库迁移：

* DEVONthink Personal 用户，在升级为 3.0 版本后，数据库会自动被复制到 `~/Databases` 文件夹中，无需手动操作。
* DEVONthink Pro 与 Pro Office 用户，需要手动定位到数据库文件位置，然后使用新版本打开。具体地，我们可以这样做：  
   * 数据库文件位置：  
         * 在旧版本应用的左侧数据库列表中，右键点击某个数据库名称，选择 `Database Properties` 可以查看该数据库的存放位置。  
         * 或者，如果旧版本应用已经删除，那么可以在访达中搜索 `.dtBase2` （数据库文件的后缀名）来进行确定位置。  
   * 在新版本中打开数据库的方法：  
         * 打开新版本应用后，直接将数据库文件拖拽到程序坞（Dock）中新版本的图标上就可以打开。  
         * 或者，在新版本应用的菜单栏中，选择「File」-「Open Database」，然后选择数据库文件就可以了。

以上操作，不会将旧版本应用中的同步等偏好设置内容迁移到新版本中，需要手动重新设置。

**注意：**非常不建议在新版本与旧版本之间，来回打开同一个数据库。如果你想要临时试用新版本，可以将数据库文件复制一份，然后用新版本应用打开，作为专门测试使用。

## 总结

DEVONthink 3.0 版本，全新设计的界面风格和布局，整体的视觉效果与使用体验都更加优秀。分词、搜索、OCR 等方面对中文语言支持的改善，确实让中文用户相当惊喜，即使目前这些方面还有些不完善之处，相信之后的版本也会逐步改进。Smart Rule、整合统一的检查器、全新的 Sorter 与 Web 服务等等一系列提升和新功能，让 DEVONthink 确实对得起十年一次的大版本更新。即使面对数百刀的高昂价格，我也要说一声「真香！」。至于是否掏钱升级，那就看各位读者自己的需求了。

**目前尚处于公测的第一个版本，下载体验一下就好，不建议在日常及工作中直接使用，有可能出现文件资料丢失损坏的情况。如果想要试用，可以参照上文中的方法，复制一份数据库文件作为专门测试用途。**

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派公众号](http://sspai.com/s/KEPQ) ，了解更多有趣的应用 🚀

\> 特惠、好用的硬件产品，尽在 [少数派sspai官方店铺](https://shop549593764.taobao.com/?spm=a230r.7195193.1997079397.2.2ddc7e0bPqKQHc) 🛒  

---

## Highlights

>  macOS 平台上的文档资料进阶管理 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#7c2c4a0b-6fb7-4651-9061-dd4937f52627)  ^7c2c4a0b

> DEVONthink [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#b39b3ed1-4fca-4647-a8dd-429b3b9866f9)  ^b39b3ed1

> 强大的收集、管理、检索功能，识别近乎所有常见的文件格式，完善的自动化支持，再加上借助 [A.I.（人工智能）](https://sspai.com/link?target=https%3A%2F%2Fwww.devontechnologies.com%2Fapps%2Ftechnology) 实现的文档关联与聚合分析，让它毫无疑问地成为 macOS 上文档管理方面的 No.1。 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#eb1f0615-cd01-4389-b165-3aac48c5063d)  ^eb1f0615

> 中文可用的 OCR 引擎 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#402c711d-9bb4-439c-9cfd-b5e81cf51352)  ^402c711d

> 令人惊喜的自动化：Smart Rule [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#31937687-66e2-4e8b-bcb0-87bdcb082d5a)  ^31937687

> * 导入 PDF 自动 OCR
> * 特定图片自动加水印
> * 过期的某些种类文件自动删除
> * 定期从网上更新资源
> * 长期不访问的特定文件自动归档 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#319e1ddf-1548-44b9-8e13-d86056165480)  ^319e1ddf

> ## 版本划分、价格与老用户
> 
> 3.0 的版本划分有所调整，去除了不支持自动化和多数据库的 Personal 版本及 DEVONnote，改为 DEVONthink、DEVONthink Pro 与 DEVONthink Server 三版本。与之前不同，所有版本下载的都是同一个 App，根据输入的许可证区分版本、启用功能。 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#2b42f731-925a-4e9f-a3d1-554ca6c892ac)  ^2b42f731

> 对比最基础的 DEVONthink 版本，DEVONthink Pro 还具备这些功能：
> 
> * OCR（Making scans searchable）
> * PDF 与图片水印（Imprinting for PDFs and images）
> * 邮件存档（Email archiving）
> * 下载管理器（Download Manager）
> * 图片捕获（Image Capture support）
> * 扫描仪支持（Scanner integration）
> * 词语索引（Concordance）
> * 自定义元数据（Custom metadata）
> * 表格视图（Form views）
> * [Bookends](https://sspai.com/link?target=https%3A%2F%2Fwww.sonnysoftware.com%2F) 应用支持（Bookends integration） [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#06ba65c1-efc6-45a9-8e01-1250f1d568d5)  ^06ba65c1

> 而 Server 版本在 Pro 版本之上，又添加了 **Web 服务**功能。 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#32b7fee4-d667-4704-804f-c84190d0e198)  ^32b7fee4

> 从 3.0 开始，每个许可证允许两台电脑使用 [⤴️](https://omnivore.app/me/https-sspai-com-post-54552-18eb725f0e9#d5d4dea0-f928-43fc-9834-cc78817baef3)  ^d5d4dea0

