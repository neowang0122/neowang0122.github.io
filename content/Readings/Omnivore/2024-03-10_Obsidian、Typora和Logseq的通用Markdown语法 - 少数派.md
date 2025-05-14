---
id: 4b0fc59e-df5d-11ee-b12e-b757b210b9ec
author: |
  落花成泥
tags:
  - RSS
date_saved: 2024-03-10 20:48:05
date_published: 2024-03-10 20:48:05
---

# Obsidian、Typora和Logseq的通用Markdown语法 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/obsidian-typora-logseq-markdown-18e2bb469f9)

[Read Original](https://sspai.com/post/86895)

date_saved: 2024-03-10 20:48:05

date_published: 2024-03-10 20:48:05

--- 

# Full Content: 

Obsidian、Typora和Logseq的通用Markdown语法

## **==为什么要用通用语法==**

==Obsidian、Typora和Logseq各有各的优点。==

==Obsidian：有强大的==**==文件管理功能==**==，但是编辑体验差强人意，比如回车不能更换段落、插入图片必须回车才能继续写。==

==Typora：有非常好的==**==编辑体验==**==，但是文档多了就不好管理。==

==Logseq：主要侧重于==**==大纲==**==。==

==通用语法的好处就是可以==**==用不同的软件编辑==**==，结合各种优点，而且在不同软件上的显示、渲染几乎相同。==

比如我一般同时打开Obsidian和Typora，用Typora来编辑，然后用Obsidian整理，只要在Typora里设置启动选项，指定到Obsidian库的文件夹即可，如下图。Logseq则是用大纲来整理思路。

![](https://proxy-prod.omnivore-image-cache.app/0x0,seia4G6cnr73QMFSrsIlzSXPFjcHA5StnEKDkMJ4mqRM/https://cdn.sspai.com/2024/03/04/c7a96aaaae965880cccde3063decb575.png)

Typora启动设置

只使用通用语法的坏处就是显示效果不好，因为不能用软件的特殊语法，**有时候编辑起来比较麻烦**。

比如在Obsidian中，只需要输入前一半的字符，就能渲染，而在Typora中必须输入完整。还有Obsidian中的特殊语法可以用来显示文件的类型，而Typora中不行。

## **开始的一些介绍**

本文主要介绍一些“链接”的通用语法，其他Markdown语法在这里简单介绍。

标题：###+空格+标题内容

斜体：\*斜体内容\*

粗体：\*\*粗体内容\*\*

高亮：==高亮内容==

有序列表：1.+空格+内容

无序列表：-+空格+内容

分隔线：\*\*\*+回车，或者---+回车

任务列表：-+空格\[+空格\]+空格+待办

## 各种链接语法

**重点**：

1. 下面的所有语法，其中的符号，包括感叹号!、中括号\[\]、小括号()全部是**英文半角**。
2. 当链接、路径中有**空格**时，**Obsidan无法识别**，但是Typora、Logseq可以。

为了在Obsdian里也能识别，即为了达到各个软件显示效果一样，以下有两种方法：

1. 将链接、路径**重新编码**，比如“空格”的编码为“%20”，但**这种方法麻烦**。
2. 给链接、路径**加上“<>”**，软件读取时会自动编码，这样**方便**一些。下文的所有链接、路径**只要是有可能出现编码问题**的，我都会加**“<>”。**

### 网址的链接

语法：\[链接的文字\](链接的网址)

比如：\[百度\](https://www.baidu.com)

### 网页图片的链接

语法：!\[可选填的文字\](网址)

比如：!\[一张图片\](https://img2.baidu.com/it/u=1845469400,959040260&fm=253&fmt=auto&app=120&f=JPEG?w=608&h=246)

注：“网址的链接”和“网页图片的链接”**本身无空格**，所以不需要加**“<>”。**

### 本地图片的链接

#### 绝对链接（不太推荐）

语法：!\[可选填入的文字\](<图片在电脑中的具体位置>)

比如：!\[123456\](<E:\\Computer999\\PicPick\\hhhh.png>)，注意**图片名称一定要包括扩展名**。

#### 相对路径（推荐）

推荐相对路径是因为，当需要把md源码交给别人时，直接复制文件夹给别人，别人也能看到图片（图床也行）。

相对路径是指**图片相对于当前md文件，所处的位置**。

比如：./assets/hhhh.png，是指**与当前md同级的文件夹**，里面有hhhh.png图片，如下图所示。

注：./assets/hhhh.png和assets/hhhh.png**没区别**，都表示同级的文件夹。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2_8x8lY_zzYeP9GQVp8hzBrRt3TTrN7jTq_kFnWc-mc/https://cdn.sspai.com/2024/03/04/a6fe45e72458b92993c794fcd3f5869b.png)

同级文件夹

另如：../assets/001.png，是指**当前md文件的上一级文件夹里面**，有个assets文件夹，里面有一张hhhh.png图片，如下图所示。

![](https://proxy-prod.omnivore-image-cache.app/0x0,stu_gS-mEaIdL4QksYXo3w7Na4EZn8mDn7bGwfLU3UMM/https://cdn.sspai.com/2024/03/04/de2047dbe801aac62e418fcd5c945fc9.png)

上级文件夹

语法：!\[可选填入的文字\](<图片在电脑中的相对路径>)

比如：!\[这是图片\](<./assets/hhhh.png>)

关于图片的整理，我一般会给**每一个文件夹里面，都创建一个assets文件夹**，用来储存图片。

为了方便我们拽托图片，就直接复制图片到assets文件夹，同时插入相对路径，我们可以按下图设置Typora。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sDqMT7MKDre4tk_HmpvjXDIyJAgXo0BRHIf2tIvjfD3w/https://cdn.sspai.com/2024/03/04/de7d4e12775b3c93539f2fb0a58a9091.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Typora的图片设置

按下图设置Obsidian

![](https://proxy-prod.omnivore-image-cache.app/0x0,sVLT9dvGSiaxcXKgNgueD_77WzKK8AcluUESJ3HgnejI/https://cdn.sspai.com/2024/03/04/58aa2ac86c87153cb763c881bc697313.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Obsidian的图片设置

### 任意类型文件的链接

同样有相对路径和绝对路径之分，**以下我用绝对路径举例，相对路径同理即可**。

语法：\[可选填入的文字\](<文件的路径>)

比如：\[RSS阅读器比较\](<C:\\Users\\OneDrive\\Excalidraw\\RSS阅读器比较.excalidraw>)

若电脑上安装了相应软件能打开“.excalidraw”文件，则你点击Markdown里的链接就会打开这个文件。

需要说明的是，**上述链接也可以链接图片**，但是就只显示“可选填入的文字”，不会在Markdown里显示预览图。

**注意事项**：

1. 任意类型的文件也可直接拖到Markdown笔记中。若是往Typora中拖入不能识别的文件（非图片类），会创建一个链接（可在“偏好设置”-“文件”里设置）。且若Markdown文件和不能识别的文件在同一个磁盘，会创建相对路径；若是在不同磁盘，会创建绝对路径。
2. 若是往Obsidian中拖入不能识别的文件（应该也是非图片类，我没全部测试），按照我上面的Obsidian附件设置，会直接复制到assets文件夹中，并创建相对路径。

### 文件夹的链接

同样有相对路径和绝对路径之分，**以下我用绝对路径举例，相对路径同理即可**。

若我们需要在笔记中**打开电脑上的某个文件夹**，就需要使用这个链接。

语法：\[可选填入的文字\](<文件夹在电脑上的路径>)

比如：

\[Excalidraw文件夹\](<C:\\Users\\OneDrive\\Excalidraw>)

以及：

\[203Excalidraw文件夹\](<file://C:\\Users\\OneDrive\\Excalidraw>)

这两种方式，在三款笔记软件里都可以打开文件夹。

### 双链的链接

双链有两种形式

#### 一种是Markdown

语法：\[填入笔记名称\](要链接的笔记的位置)

如：\[模板文件\](通用的模板.md)

注：这里的“(要链接的笔记的位置)”没有加“<>”的原因是，我们**很少自己手动创建双链**，一般都是在Obsidan里按两下中括号“\[\[”创建双链。如果需要自己创建双链，**有需要也可以加上“<>”**。

#### 另一种是Wiki链接

语法：\[\[笔记的名称\]\]

如：\[\[../templates/前言模板|前言模板\]\]

这两种在Obsidian里都能识别，但是**Typora只能识别Markdown类型的**，因此我们可以在Obsidian的“文件与链接”设置里，**关闭“使用Wiki链接”**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s81CPnsUy8sTtG2T4Gfkn1jrW2esNZ7TzMxHU9r-0TNg/https://cdn.sspai.com/2024/03/05/d89e98e388f030c475c539dc3f886896.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

Obsidian关闭“使用Wiki链接”

虽然在Obsidian里关闭了Wiki链接，但任然可以在键盘上按两下中括号“\[\[”快速创建双链，创建出来的是带**相对路径**的，**Markdown形式**的双向链接。

#### 双向链接的两种延伸形式

Markdown形式和Wiki形式在用法是**没区别**，**都是按两下中括号“\[\[”创建，我下面以Wiki举例**。

**链接某篇文章的标题**

语法：\[\[输入文章的名称#选中相应的标题\]\]

**链接某篇文章的某个内容块**

语法：\[\[输入文章的名称^选择相应的内容块\]\]

需要注意的是，这**两种形式都需要在Obsidian里创建**，并且在Obsidian和Typora中可用，但是**在Logseq中不可用**。

其他更多语法就不介绍了，对于我来说，上面的这些语法已经够用了。

## 总结

1. 以上语法大致就两类，一类是图片，!\[可选填入的文字\](图片的链接)；一类是链接，\[可选填入的文字\](链接)。
2. 我列举了这些语法的各种应用，帮助大家理解。
3. 我在少数派看过一篇文章，大致意思是“**重器轻用**”，我非常赞同，没必要对什么东西都了如指掌，**按自己的需求用就行**。Obsidian是一款强大的笔记软件，但我只用基础功能，个人意见，仅供参考。

## 感谢观看！

---

## Highlights

> ## **为什么要用通用语法**
> 
> Obsidian、Typora和Logseq各有各的优点。
> 
> Obsidian：有强大的**文件管理功能**，但是编辑体验差强人意，比如回车不能更换段落、插入图片必须回车才能继续写。
> 
> Typora：有非常好的**编辑体验**，但是文档多了就不好管理。
> 
> Logseq：主要侧重于**大纲**。 [⤴️](https://omnivore.app/me/obsidian-typora-logseq-markdown-18e2bb469f9#b7f05418-ce71-48a9-ad28-0a393650732c)  ^b7f05418

> 通用语法的好处就是可以**用不同的软件编辑**，结合各种优点，而且在不同软件上的显示、渲染几乎相同。 [⤴️](https://omnivore.app/me/obsidian-typora-logseq-markdown-18e2bb469f9#39e3d2a3-f8cb-4130-99d6-15c0ab91a61d)  ^39e3d2a3

