---
id: 9fa9fe05-4141-4a47-b7c8-bc0231a0a8b0
title: |
  conda、anaconda、pip、torch、pytorch、tensorflow到底是什么东西？ - 知乎
author: |
  Whhtaafaak​ 关注
date_saved: 2023-08-05 09:25:27
date_published: 2023-04-11 20:00:00
draft: true
---

# conda、anaconda、pip、torch、pytorch、tensorflow到底是什么东西？ - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-www-zhihu-com-question-566592612-answer-2979601666-189c5dfb7db)

[Read Original](https://www.zhihu.com/question/566592612/answer/2979601666)

date_saved: 2023-08-05 09:25:27

date_published: 2023-04-11 20:00:00

--- 

# Full Content: 

如果你是一个大四的CS准研究生回去补基础课，假如是科班CS甚至科班EE的话那你基础也太差了。你这个基础如果是去做视觉的科研是肯定做不了的。

转载请注明出处。

 包括估计对教授这种做计算物理的，以及  这种做计算化学的会很好使。不过二位皆大佬肯定是会了。

我这次就一次把所有的东西全部讲完。

但是这个问题是个好问题。值得好好写一写。尤其是针对一些刚刚入门data science的同学。我觉得还有必要再加几个东西上去：docker，Nvidia-docker，VMware，vim/vi，服务器，以及如何靠MobaXterm/winscp去连接服务器。

首先，我们先说第一个东西。什么是anaconda。

1，anaconda

anaconda是一个软件，是一个“集成开发环境。”anaconda是一个非常适合写Python的软件，尤其是非常适合写Python的数据科学，data science。其实Python还有很多别的作用（甚至可以说除了生孩子，写操作系统以外基本都能干，包括很多半导体工程，其实也就是烧砖哥本人科研方向的研发也要用Python）。

当然，市面上最常见的用Python的除了机器学习/深度学习/数据科学/数据可视化这一套，用Python做网站，或者做应用软件开发也是一个比较主流的活。后者，我个人的经验是，用著名的软件Intellij-IDEA做开发会比较好。当然那是另外一回事了。

Python，在英语里是蟒蛇的意思。而anaconda，其实是一种南美洲的水蟒。考虑到读者的感受，图片我就不放了。

作为软件开发工具的anaconda是“集成，”也就是把所有能用的工具都给你堆在一起。我粗略的把他分为，写python的工具，比如最典型的就是spyder和jupyter。前者非常适合做开发。非常适合写，写给自己的程序；后者非常适合做汇报。比如写一个数据科学的报告，作为产品经理去写数据分析项目，或者大学生研究生写作业。

![](https://proxy-prod.omnivore-image-cache.app/1280x0,soIBB2J9XMyfmdPjtJjCWCtv5ki8-ecD5krpKafn8be8/https://pic1.zhimg.com/50/v2-8e4a131f69013124dd04d8336ea9380e_720w.jpg?source=1940ef5c)

Fig.1 anaconda-spyder打开，长这个样。图片来自网络

**另外一方面是支持这些开发工具的维护工具。比如安装一个新的开发环境，删除一个开发环境；安装一个新的库，对库进行升级，这类的工作。**

那么为什么Python要搞这么麻烦的东西呢？因为Python是一个向后兼容不向前兼容的语言。什么叫向后兼容不向前兼容？Python后面的开发，是不需要保证之前发布的语法还是对的。这样做的好处就是Python永远是一个非常简洁的语言。但是这样做的坏处也非常明显。就是Python，会产生很多很多的“历史遗留问题。”

在Python的开发中，这些活儿是可以说是非常讨厌的。初学者可以说无不头疼。最典型的就是，如果你真正去做深度学习，你经常会发现，github上下载的深度学习的源代码，你没有办法直接去执行。那是因为你电脑上或者服务器上的库的版本和他用的开发版本不一样。用anaconda是可以解决这个问题的（配环境，一个个去配，但是会很麻烦）。其实解决这个问题最好的方法是用docker（甚至大部分深度学习的github code都会给你配一个docker的source file，非常方便你去create一个新的镜像，极大的降低你做深度学习的难度）。docker这个后面我们再说。

相比之下docker才更适合干深度学习。anaconda，配环境，更适合处理一些你日常的，反复需要去干的工作。这种工作的话一般你不需要反复去调python的库，版本。这里面还有另一个问题，anaconda你装一个新环境，需要的硬盘空间是远大于docker新建一个镜像需要的硬盘空间的。

**如果你比如说是一个，简单做做data science，做做量化分析，计算物理/化学，生物信息，计量经济学的同学，用anaconda，知道怎么装环境，怎么装库，那其实就足够了。但是如果你的目标是做计算机视觉或者NLP等_深度学习_的研究，你是绝对很难用一个docker去handle所有问题的。**

这个工作，在Python里面，是由prompt（navigator的命令行版），navigator（promopt的点鼠标版）来完成。prompt支持conda，和pip两个软件。而conda和pip具体是什么？我们过会儿再来更详细的结合案例去说。

软件版的anaconda，在这儿下载。记得下载免费版就足够了：

[Free Download | Anaconda](https://link.zhihu.com/?target=https%3A//www.anaconda.com/download/)

也可以参考一篇旧文：

[Anaconda核心特征：环境管理，及其使用指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/379619865)

2，conda，pip

我们前面说到，anaconda除了让你用spyder和jupyter去写代码以外，更大的作用在于"维护(Maintenace)." 

比如，常用的包里，anaconda自带的包，包括numpy，pandas，matplotlib，sklearn等。但是著名的图像处理库（请注意这个是基于信号分析的不是深度学习）OpenCV anaconda里面就没有。你得自己去安装。tensorflow，pytorch你也得自己去安装。

要干这些活，你就要有工具。pip和conda，就是我们干这些事儿的工具。

从干活的角度，在anaconda里面的conda和pip是没有任何区别的。操作的指令几乎都完全一样。但是大家还是需要从理论的高度去知道他们的区别。conda是一个通用的，什么语言都可以管理的包。而pip（Pip install packages）实际上是一个专门针对python开发的包管理器。跟著名的virtualenv（Python后三大神器之一，以后有文章我们可以专门介绍）最早是在一块儿的。

不过他们还是有一些区别的。pip是从Pypi下载库，而conda则是从anaconda的官方库里去下载库的。

（Pypi是什么：PyPI（Python Package Index）是Python的官方软件包仓库，是一个用于共享、发布和安装Python软件包的中央存储库。它是由Python社区维护的一个公共资源，供开发者共享和获取Python包。

PyPI是一个集中的存储库，允许开发者将他们编写的Python库、框架和工具发布到一个统一的地方，供其他人使用。开发者可以将自己开发的软件包上传到PyPI，然后其他人可以使用pip等工具来从PyPI下载和安装这些软件包。

在PyPI上，你可以找到大量的开源Python软件包，涵盖了各种领域和用途，从数据科学到Web开发、机器学习、自然语言处理等等。PyPI提供了一个方便的方式来发现、共享和安装Python软件包，促进了Python社区的发展和合作。

要使用PyPI，你可以使用pip（Python的包管理工具）来从PyPI下载和安装软件包。pip会连接到PyPI服务器，查找指定的软件包并自动下载安装。这使得在Python项目中引入和使用第三方库变得非常简单和高效。）

![](https://proxy-prod.omnivore-image-cache.app/1702x0,sVYTNTXYYL8t7SnBKkiXHcItQjIrvrHoOTnboitmUSnU/https://pica.zhimg.com/50/v2-b74114b8090402936d1a58368c9b1343_720w.jpg?source=1940ef5c)

Fig. 2 Pypi的官方网站

我感觉Pypi的详细让我想起了NIST，或者普林斯顿化学化工指南。基本涵盖了你要的那个库的全部信息。详细，准确，靠谱，体贴。比如我的老师著名光伏电子工程专家Ned J. Daukes教授开发的著名的太阳能模拟工具solcore在pypi上也找得到。

更具体的conda和pip的区别可以参考这位大佬的文章：

[Anaconda与conda、pip与conda的区别 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/379321816)

我们在这儿，从实战的角度，给大家看一下怎么分别用pip和conda去安装包。

比如，我们要用python去画图。除了系统自带的matplotlib，还有几个非常著名的画图库：

pyecharts，一个百度开发的画图库。

plotly，号称史上最强可视化工具。

如果你是一个产品经理或者对数据可视化有要求的人，那么这种库可以帮助你解决问题。

你可以自己打开anaconda的prompt，分别pip install pyecharts, conda install plotly, 当然反过来也可以，看看他们的效果。其实他们是完全相同的。

有时候，你如果发现用conda下载不了，你就pip吧。pip下载不了，你就conda吧。我刚才试了一下solcore。就存在这个问题（我们的这个solcore，我建议你一般不要在windows下用，因为这个只能让你发挥出70%的功能。因为需要调用很多fortran的代码。你要实现在python里调用fortran是比较麻烦的。我试过，很难搞。不要把时间浪费在这种没有意义的工作上。我的建议是在linux下用solcore，根本不需要解决这个问题。包括在win自带的linux虚拟机上也可以直接实现这个功能）。

![](https://proxy-prod.omnivore-image-cache.app/1372x0,s361MS2LCDjxCUNxfgMXva5CHA613lutMAT25ITsfIqI/https://pic1.zhimg.com/50/v2-2f5d591f5aec5f96d85a091ac6d6a470_720w.jpg?source=1940ef5c)

Fig 3\. conda install无法安装solcore(这个是个bug)

![](https://proxy-prod.omnivore-image-cache.app/1597x0,sXi_Qrr0DaVUkO_fgY3E4Vus75qH8LyVwHhsfEt8j7T4/https://pic1.zhimg.com/50/v2-c43db1ef8bb6bbb70bc440c07d821ef1_720w.jpg?source=1940ef5c)

![](https://proxy-prod.omnivore-image-cache.app/1375x0,scDI6dl-e64wtxKW3nQyNdUqRCpJhDhMp0l-dL8baOEs/https://pica.zhimg.com/50/v2-e40a742512dc217abdfef6ba44bf6b29_720w.jpg?source=1940ef5c)

Fig 4\. 我们用pip install就可以成功安装solcore

三，docker/nvidia-docker

docker是一个非常强悍的工具。如果你正经干深度学习，用anaconda是解决不了你的问题的，你肯定要用docker甚至nVidia docker（在windows上用不成，你要用linux去跑）才能解决你的问题。

docker是个啥？简单的来说，docker采用了化学里的“沙箱反应思想。”其实也就是一种简化。docker理论上可以处理任何语言，包括C++，java，JavaScript，Python，等等。一切语言。把你执行一个小程序所用的全部语言都浓缩到一个小小的“镜像”里面。然后如果你要跑这个程序，就用一个小小的镜像就足够了。

[10本 Docker 入门学习书籍推荐 (zhihu.com)](https://www.zhihu.com/tardis/zm/art/370120484?source%5Fid=1005)

如果，你要用docker，那么我建议你最好懂一点vim的知识。因为在docker里面你要改代码，要用vim。

nvidia-docker就是docker对GPU的一个升级。你要玩深度学习，很多时候要用GPU。那么怎么办？你就要套一层nVidia docker。这方面的东西，你就得去看更详细的资料，网站和文献了。

四，tensorflow，pytorch都是写深度学习的框架。一般用Python去调用。但是Matlab和java也可以。

深度学习具体怎么干活，自己去看，自己去研究，自己去写代码。太多了，不讲。比如你做object detection就那几个网络：R-CNN, fast R-CNN, faster-RCNN以及yolo，从v1到现在的v7，不同的版本。代码你自己看。我如果有兴趣了可以讲讲这些代码和算法。

五，服务器

很多时候我们需要把活放在大型计算机上去跑。或者，我们需要能够用自己的电脑（小终端）去连接服务器跑代码。

服务器的本质就是一台大型计算机。一般，正经的做深度学习的组，都有服务器。要么是自己组里的，要么是学校的超级计算机（比如新南威尔士大学拥有南半球排名第一的超级计算机katana），再不济也是花科研经费租的AWS，阿里云，腾讯云，GCP或者华为云。

你要连服务器，我推荐俩软件。第一个是mobaxterm，第二个是winscp。但是这个地方，务必注意，必须（从官方网站）安装正版。**严禁安装任何来历不明的连服务器软件！！！否则非常容易被黑客入侵。盗走你的服务器资源用处很多，比如拿去挖矿。**

如果你们用的是组里的服务器的话，组里的老板肯定会告诉你非常详细的怎么去搞的。一般来说，学生用户要在学校的超算或者cluster上注册一个号。学校的服务器是最好的。一般有专门的工程师去维护。

我在这儿拿winscp举个例子。

![](https://proxy-prod.omnivore-image-cache.app/1248x0,sTLHSTYFG13ggEenV6Lj1u9FW97Erv4nAFtpm_JdDA0o/https://picx.zhimg.com/50/v2-f5ad86047af03a6287fcac85857c3a56_720w.jpg?source=1940ef5c)

Fig 5\. winscp的登陆页面

我划掉的地方（除了我这个地方因为是搞计算物理用SFTP协议就够了，传文件就行，速度快）都是你需要输入的地方。比如，你的学校的ip，端口号，你的用户名和密码等。只要连上这个，你就可以舒舒服服的躺在家里的床上给实验室工作，或者在五星级酒店的酒吧里喝着苏格兰威士忌听着美国的乡村音乐给实验室工作顺便给waiter小哥哥或者waitress小姐姐介绍一下你的工作，或者在南太平洋的船上连着wifi给实验室工作，或者在大堡礁玩潜水的时候，还不忘给学校的机子上提交一个小程序跑一跑。你烧砖哥怎么这么门清儿呢？因为你烧砖哥都干过。这样，你就可以不用去实验室了。

而且，干活我们还可以更卷一点：

![](https://proxy-prod.omnivore-image-cache.app/1125x0,sSHOflyqxrJan2uRLTWHD-wwpCRDP8qzlKUeR57Ml0Rs/https://picx.zhimg.com/50/v2-d4171e4b09a12c5e8d1c00bae830d0d7_720w.jpg?source=1940ef5c)

![](https://proxy-prod.omnivore-image-cache.app/1125x0,si8niCM8iyt_v-8sVk7qAYsdKsL5Z-hAKFz-c5N8pPGg/https://picx.zhimg.com/50/v2-72fba6d52aa9ecf3efe57b69b2c48e74_720w.jpg?source=1940ef5c)

打开这个app他是这个样子：

![](https://proxy-prod.omnivore-image-cache.app/1125x0,swzSNL41gNKqgb5oe7MB6xmCQ7i0RB2qUf5UhOE1eRq4/https://pic1.zhimg.com/50/v2-09d4e018799cc3d18c6d742ab6a7f60c_720w.jpg?source=1940ef5c)

然后是：

![](https://proxy-prod.omnivore-image-cache.app/1125x0,s5R6OIkbA1IE9CgpMbvjTofvw1B2wloFugJJPrFoJkKk/https://picx.zhimg.com/50/v2-be8d8ddabc48d4f4f591387cd58e1381_720w.jpg?source=1940ef5c)

基本上可以帮助解决所有问题。

---

