---
id: fa3728a6-b770-11ee-b64a-53f4d9c63d8a
title: |
  App+1 | 使用 Asciidoc 制作学术个人主页 - 少数派
author: |
  正弦定理
tags:
  - RSS
date_saved: 2024-01-20 02:00:00
date_published: 2024-01-20 02:00:00
draft: true
---

# App+1 | 使用 Asciidoc 制作学术个人主页 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/app-1-asciidoc-18d26108ce1)

[Read Original](https://sspai.com/post/85757)

date_saved: 2024-01-20 02:00:00

date_published: 2024-01-20 02:00:00

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSlgksn5xxfFyVy6tuszbMlWMhfiySZWwLu6dozmhU-U/https://cdn-static.sspai.com/ui/img-placeholder.png)

App+1 | 使用 Asciidoc 制作学术个人主页

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

编注：本文就使用 Asciidoc 制作网页给出其中一个方向，Asciidoc 可用于制作大多数的简单类别网页。

---

在科研圈沉浸得越久，你会有越来越多的积累，这时候你就需要一个个人主页来展示自己的成果，吸引学生，吸引合作和交流。大部分的科研工作者们都有自己的个人主页，学术个人主页还是以内容为主的网站，样式其实没有这么重要。所以很多学者更注重内容的填充，鲜少有精力去折腾一个美观漂亮的网站，这点在老教授的网站上风格尤为明显。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqTBvVCtkZJH-oB4iXqBDpFzY8d9o5_39B86HQalbMl4/https://cdn.sspai.com/2024/01/11/article/85a32216b9b964fe35d361b0caf6baad?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

MIT 学校任意找的一个老教授的个人主页

然而，这些学术风的网站往往使用一些旧工具来制作，其生成的网站往往缺少对现代设备和功能需求的支持，如「响应式布局」1，导致在手机平板等终端上阅读比较困难。

本文将介绍一个新的标记性语言 Asciidoc 用于制作学术个人主页，弥补上述的不足，且同时不需要太多的学习和更新负担。

![](https://proxy-prod.omnivore-image-cache.app/0x0,soACbssWmez0i2SxMVgY-ILmyur0YPKF0DTPq6UYrDWI/https://cdn.sspai.com/2024/01/11/article/dee3b4ff69c035e1638a005b015823c1?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

效果图展示，内容由 AI 生成

## 制作学术个人主页的方案

### Markdown 方案的优势与不足

学术个人主页也是一个内容为主的网站，因为它离不开内容网站最基本的一些内容要素：标题、段落、有序列表、无序列表、引用、图片、超链接等。同时，为了让读者更好地捕捉关键内容，一般需要增加文字基础样式，如加粗、斜体、下划线等。这些内容的编写和管理都非常适合使用标记性语言。

Markdown 是目前最广为人知的标记性语言，其简洁的语法深得大众的喜欢。Markdown 转化为 HTML 后浏览器默认的布局为全部左对齐和图片拉伸全屏幕宽度，这对于内容网站的内容部分是比较满足需求的，但对于制作网站整体来说是欠缺的。

比如，对于学术个人主页来说，一般来说会放上一张自己的照片以供认识，但无论是左对齐还是拉伸全屏幕都会显得不太合适。另一方面，Markdown 对于 HTML `<head>` 元素的支持也是不足的，但是这个元素对于网站被搜索引擎索引成功起关键的作用，而学术个人主页对搜索引擎的索引有着强烈的需求。

Markdown 的语言设计倾向于简洁，本身只会做 markdown 标记到 html 标签这一层语义转化，不会产生额外的 css 排版。至于最终渲染后的样式，完全取决于浏览器渲染的默认行为。因此如果想要使用 markdown 制作一个完备的网站，一般还需要借助静态网站生成器（如 Hugo、Hexo 等），配合一个主题（包含 css 样式表），才能完成。而这一般需要用户学习静态网站生成器的使用和 css 排版系统和样式语法等知识，对教授们来说是一个很大的挑战。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sQC4RyqqnvV5DK-V9W7d2lL0gn4kr87JiSeZvE6jwxws/https://cdn.sspai.com/2024/01/11/article/99d22cfb3c04620c08d50ed8ccc633fd?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

[来源](https://markdowntohtml.com/)

Asciidoc 同样是一门标记性语言。对比 Markdown，Asciidoc 的语法略有不同，但 Asciidoc 语法也是比较简洁的。下图节选了一些常用的 Markdown 语法作为对比，可以看到，AsciiDoc 对比 Markdown 在样式标记上有很大的相似性，在功能标记上增强了很多。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s_uQGDrtUMEwbUUULPBcO-scYLKvb8bWvBk6laExzPP0/https://cdn.sspai.com/2024/01/11/article/790866c00bac8edcdd0809903d0cf4ea?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

[来源](https://docs.asciidoctor.org/asciidoc/latest/asciidoc-vs-markdown/#comparison-by-example)

虽然 Asciidoc 相对小众，网络上的文章资源相对少一些。但实际使用主要对照官方参考文档来写，很快便能上手。尽管使用 [Asciidoctor](https://asciidoctor.org/) 作为生成器的时候可以[兼容 Markdown 语法](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/#markdown-compatibility)，从我个人的角度来说并不建议。使用优秀的编辑器也能提供良好的语法高亮，因此不必太担心刚上手的时候很困难。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbc_vhtCmfg-9SR1lJq1JMuw6RTHxPeLN_3O8-nC55j4/https://cdn.sspai.com/2024/01/11/article/998901716bf8446da45e90d9ee2b1e81?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

[来源](https://asciidoc.org/)

尽管学习 Asciidoc 会花费一点成本，但能获得最直接的回报便是 Asciidoc 生成的网站样式自带的「响应式布局」（如上图的示例图所示）。相比大部分的 Markdown 渲染器默认的占据全屏幕宽度的做法，Asciidoc 渲染的网站能够在大屏幕上保持内容合适宽度的居中布局。

除了原生的响应式布局优势外，Asciidoc 引入更多的语法标记，能够让用户仅使用简单易学的标记去主动控制 HTML 元素的样式。额外的标记包括但不限于基础的样式增强，文字的上下标，表格的标题，引用的出处等。

![](https://proxy-prod.omnivore-image-cache.app/0x0,snngm5DOJV74pHQTR81qV2rHGnWGFn9DPT8uXfjVAndM/https://cdn.sspai.com/2024/01/11/article/4fe2c97168ffa128f456babf2a96b797?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

部分代表性样式节选来自：https://asciidoclive.com

还有包括一些常用的高级语法，在需要的时候能够产生很大的帮助。比如注释，图片的大小参数，视频的支持，原生字体图标库， 折叠段落等。这里仅展示部分较为常用的语法示例供参考，更多的标记选项和详细的效果建议参考文末手册探索。

```asciidoc
// Comment is available in asciidoc.

[.text-center]
这段文字会居中

image:https://i.imgur.com/AEkqoRn.jpg[alt="not bad.",width=128,height=128]

video::th_H1gixMEE[youtube]

pass:[<i class="fa fa-github"></i>]

[%collapsible]
====
This content is only revealed when the user clicks the block title.
====
```

另一方面，Asciidoc 也能恰好满足制作学术个人主页相关的一些强烈需求，让学者仅需要关注编写标记性语言文档，不必花费学习生成网站的额外配置。

#### **左右分栏布局**

放置个人照片最理想的情况应该还是传统的左右分栏布局，Asciidoc 原生支持分栏布局。在上述的例子中，只需要在图片的标记中加入 `role=left` 即可生成左右布局。

```asciidoc
image:https://placehold.co/200x200[Placeholder,200,200,role=left]

== *San Zhang*

Title +
Institute +
Email (personal): abcedfg@gmail.com +
Email (work): hijklmn@your.university.edu.cn
```

#### **搜索引擎索引**

给搜索引擎做适配，在网站开发的术语里叫「SEO 优化」，对于静态网站来说，最简单直接的方法应该就是给 HTML 网页里的 `<head>` 字段加上相应的属性。Asciidoc 里有相应的标记去渲染成 `<head>` 标签里的对应元素。

```asciidoc
:title: Zhang San
:author: Zhang San
:description: This is a personal academic homepage.
```

最后将部署好的网站链接提交给搜索引擎，过一段时间，你将能在搜索引擎里搜到自己的主页并且带有相应的字段内容了。

#### **文件内容复用**

复用文件内容最主要的一个应用是制作一个导航栏，一个丰富的个人学术主页不会只有一个页面，但提供一个导航栏能方便读者在不同内容之间跳转。理想情况下，我们希望只制作一个导航栏，然后嵌入到不同的页面中去，每次修改导航栏的内容，都能在不同页面中产生变化。在 Asciidoc 中可以使用 include 标记嵌入另一份 adoc 文档。

```asciidoc
// header.adoc

[frame=none, grid=rows, cols="5,5,6,7,7,5,5"]

|===
|https://baidu.com[NEWS]
|https://baidu.com[ABOUT]
|https://baidu.com[RESEARCH]
|https://baidu.com[PUBLICATIONS]
|https://baidu.com[INVITEDTALK]
|https://baidu.com[SERVICES]
|https://baidu.com[AWARD]
|===

// index.adoc
include::header.adoc[]
```

如果还是对样式还是有更多的追求的话，也可以选择直接嵌入 HTML 格式的导航栏。而举一反三，表格也可以用来制作简单的分栏布局，在没有高级 css 排版系统之前，旧时网页都是无边框表格来进行分栏布局的。

#### **邮箱防爬虫**

很多学者们的主页上邮箱地址都会写成这样的格式 `email: their [at] institution [dot] com`，这个的目的主要是为了防止邮箱地址被网络爬虫抓取然后接收太多的垃圾邮件。现代的防御方法有一个很简单有效的方式就是使用 HTML 注释和 CSS 语法来保护地址不容易被普通爬虫直接识别邮箱地址格式。

对于标记性语言来说，这需要同时支持 HTML 和 CSS 混合使用才能应用这一小技巧，从而方便读者联系。Asciidoc 正好满足这一需求。

```xml
// refer: https://css-tricks.com/how-to-safely-share-your-email-address-on-a-website/
Email (personal): +++<span style="display: none" aria-hidden="true">PLEASE GO AWAY!</span> abcedfg@<!-- dasdfsdofjsajl -->gmail.com+++ +
Email (work): +++<span style="display: none" aria-hidden="true">PLEASE GO AWAY!</span> hijklmn@<!-- sdfjsdhfkjypcs -->your.university.edu.cn+++
```

渲染出来的效果如上面的示例图所示，对于人类阅读来说没有影响，但是对于爬虫来说增加了很多的困难。

#### **网站访问追踪**

很多学者都希望关注自己的研究被哪些地区的人们访问了，因此网站访问追踪是一个需求。追踪工具一般要求支持 Javascript 的注入。Asciidoc 支持 passthrough 的功能，可以轻而易举地使用 HTML 全部的标签。

```asciidoc
++++
<script src="https://gist.github.com/mojavelinux/5333524.js">
</script>
++++
```

举一反三，你也可以往里面填写 <video> 标签，这对于直观展示一些研究项目有极大的帮助。

```asciidoc
++++
<video poster="images/movie-reel.png">
  <source src="videos/writing-zen.webm" type="video/webm">
</video>
++++
```

由于 Asciidoc 也是标记性语言，很多轻量级的工具都能将其转换为 HTML 静态文档。这里简单列举几种常见的工具，大家可以根据自己的需求探索选择合适的。比如

* Vscode 插件：[AsciiDoc](https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode)：使用其内置的命令 `AsciiDoc: Save HTML document` 即可生成 HTML 文件
* 命令行工具：[Asciidoctor](https://asciidoctor.org/)：通过各大包管理器搜索都可下载使用，通过命令转换 adoc 文件为 HTML 文件
* 在线工具 [asciidocLive](https://asciidoclive.com/)：网页工具，无需配置，开箱即用，下载转换后的 HTML 文件
* 在线工具 [Asciidoctor.js Live Preview](https://chromewebstore.google.com/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia)：Chrome 插件，可以打开本地文件，即时预览，保存网页即可

得到 HTML 文件后，将其上传到学校或学院指定的目录后即可得到一个自己的个人学术主页。

如果更倾向于外部的静态文档平台，可以探索一下 [github action](https://github.com/manoelcampos/asciidoctor-ghpages-action) 的自动化部署。

## 总结

相信看到这里的读者对于制作网站是有需求的或者有痛点的，文章开头的示例效果图就是用文中的这些简单元素组合而来的。Asciidoc 虽然是一个小众的标记性语言，但其强大的能力和易用的属性应该能吸引到你。

如果遇到一些问题，也不用太担心，欢迎在评论区一起交流解决。

**关联阅读**

* [Asciidoc 官网](https://asciidoc.org/)
* [Asciidoc 文档](https://docs.asciidoctor.org/asciidoc/latest/)
* [Asciidoc 语法参考](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/)

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的[正版软件](https://sspai.com/mall)，少数派为你呈现🚀

---

