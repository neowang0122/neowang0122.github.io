---
id: 6bad198a-a31e-11ee-b869-5bd6cef2cbd4
title: |
  我是如何使用自研软件归纳Workflowy、SimpleNote、Microsoft Todo、有道云上的存量笔记的 - 少数派
author: |
  少数派85742959
date_saved: 2023-12-24 17:46:44
date_published: 2023-12-24 17:46:44
draft: true
---

# 我是如何使用自研软件归纳Workflowy、SimpleNote、Microsoft Todo、有道云上的存量笔记的 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/workflowy-simple-note-microsoft-todo-18ca0e10d76)

[Read Original](https://sspai.com/post/85061)

date_saved: 2023-12-24 17:46:44

date_published: 2023-12-24 17:46:44

--- 

# Full Content: 

我是如何使用自研软件归纳Workflowy、SimpleNote、Microsoft Todo、有道云上的存量笔记的

利益相关声明： 作者与文中产品有直接的利益相关（开发者、自家产品等）

笔者是一名从业6年的互联网码农，和大多数人一样，从上学时候开始就在记笔记，而记笔记过程中的各种坑也都没少踩：

1\. 2015年上研究生之前，只知道在纸本上记课堂笔记、读书笔记、备考笔记，而纸本笔记最大的问题就是，难以检索，很容易就变成搬家时想扔又不舍得扔的箱底货。

2\. 2015～2018，在实验室师兄的影响下，开始学会用云笔记去记论文摘要、安装步骤、问题解决过程，正如[这篇文章](https://sspai.com/link?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F672028693)所说，商业化运营的笔记软件由于其经济基础的局限性，不可避免的重复一个过程，这一点在我当时所选择的为知笔记、蚂蚁笔记上都得到了应验。

> “先无害地传播，到了指定的用户规模再开始上商业模式，进行~~收割~~收费。谁都不会觉得一个可能写着写着就没水的笔是好的书写工具，哪怕它写字的时候再流畅。”

3\. 天无绝人一路，好在互联网还有一条免费使用、靠使用量去垄断流量入口，从而晋级为广告公司的特色道路。当初填写的用户信息和你的每一条笔记内容，在广告场景下摇身一变，成为广告精准投放的不二法器。在这一路线下，作者和企业各得所需，除了写作时需要肉眼屏蔽掉各种小推送、小横幅...我自己在这时选择了还算良心的有道云笔记。

4\. 日子本该平淡的过去，但好死不死，资本主义的糖衣炮弹还是打过来了。工作之后，同事相继安利了Notion和Workflowy，一个是写完即可分享，界面清新的笔记2.0，一个是超级适合记代码笔记的无限层级大纲笔记，很快都上手使用了。由于偏运维性质的工作，后面又不得不使用了能够记录海量QA内容的SimpleNote，这是一款有点像搜索引擎的笔记软件，你只管记录和搜索，它来负责同步和索引。

5\. 按理说发挥每个软件的优势去记录适合它的笔记是件好事，但笔记分散在各处的弊端，在外部因素的诱导下还是暴露了。公司的2015款MBP的电池平均半年鼓包一次，于是我旋转跳越不停歇地，一遍遍在新到的二手电脑上重新安装这几个软件，安到第四次的时候，我承认我累了。

于是2022年的某一天，我决定做一款属于自己的All-in-one笔记软件，按我心目中最理想的样子：

1. 必须支持无限层级大纲，没有它，靠脑子记hadoop、spark、flink源码架构和调用关系，然后再找代码，修bug会把我整死
2. 必须支持代码块，并且能够有效地管理调试过程，省的我每天下班的时候去纠结vscode的一长串未保存文件，是否放弃保存，不放弃的话又该放在什么地方...
3. 支持Todo和任务看板，这样就不用专门打开Microsoft Todo了
4. 支持双栏和搜索，像SimpleNote那样
5. 支持画流程图，不能即席修改流程图、示意图真的很影响工作效率啊
6. 支持Markdown导入导出，这样就能把有道云的笔记迁进来了

按这个标准，很快就在Github上找到了一款1.6K Star的WorkFlowy开源替代「[vimflowy](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FWuTheFWasThat%2Fvimflowy)」，非常适合作为项目的底子，原作者已经完成了自定义快捷键、自定义主题、自定义数据库这些非常了不起的功能

![](https://proxy-prod.omnivore-image-cache.app/0x0,s-ufmm8J07lDQx9ahsVNK0whYxbyUbYlWnhwN-objByQ/https://cdn.sspai.com/2023/12/14/b3dedf47f8ad0d11eda342896b935f2c.png)

vimflowy作者提供的演示网址截图  
https://www.wuthejeff.com/vimflowy/

而我要做的，就是“弄脏”原作者的代码，本着能抄就抄、能引就引的原则，陆续增加了一系列特殊类型的块

![](https://proxy-prod.omnivore-image-cache.app/0x0,sEgaDT8SEOAfF6GO5j8_DA7ZGN4bd-aESlhmj6RI0NxQ/https://cdn.sspai.com/2023/12/14/b4e5acab611b98dd4b29c650e704d375.png)

1\. 基于vditor渲染的markdown内容块

![](https://proxy-prod.omnivore-image-cache.app/0x0,sswPOlWo6wNZb6iNw5P2fHbWIooZvHoy6CHgGiGk9P8Q/https://cdn.sspai.com/2023/12/14/c84b688de0fd09fdbf5e153a34e4db9e.png)

markdown需要在模态框里编辑

![](https://proxy-prod.omnivore-image-cache.app/0x0,s0bL-zcvGvUBLpfyhjWG7xVof98D4Q_BtvK1Bc-AGjVc/https://cdn.sspai.com/2023/12/14/5bea1eb02e33dba61fdd0817a4ccd81f.png)

2\. 基于wangeditor的富文本编辑

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7QAt4euXZJN9pl69MgL-Xc5xLppjbP03gQMxP2I4THc/https://cdn.sspai.com/2023/12/14/476e0ee4419c099bcfae66e86664ec12.png)

3\. 基于百度脑图的思维导图展示

![](https://proxy-prod.omnivore-image-cache.app/0x0,s9LtxavHTk9TAhr65LFGaVShPXpO1X2cH5wogAVhDbk4/https://cdn.sspai.com/2023/12/14/7483b496a7553a1af21d460816776718.png)

基于百度脑图的思维导图编辑

![](https://proxy-prod.omnivore-image-cache.app/0x0,sXSghTMqdv-PVbsGv8UWDcDUR1b5DRSFkPqqz_okJvW8/https://cdn.sspai.com/2023/12/14/c4863f4b52c6f0baa6db30dbefec90c9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

4\. 基于monaco-editor的代码块

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSDYftEh7EwWdDfqvRRKsLLb6MEmsKC4iL50nHO1jrGQ/https://cdn.sspai.com/2023/12/14/cae86d75da56508b29987963bb9f9f1b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

5\. 基于drawio渲染的流程图

![](https://proxy-prod.omnivore-image-cache.app/0x0,sxqNPzxruBCcSKToCR12rm3acDeHJmcD9M5awVuGXli8/https://cdn.sspai.com/2023/12/14/7780ffafcd03ba8ddc7fff8d1f4e5207.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

基于drawio的流程图编辑

最后再把workflowy的看板视图、任务列表功能照搬过来

![](https://proxy-prod.omnivore-image-cache.app/0x0,sPf2MeubGqaDSfA4EcilIIkMkxN72GuINETNnnCT-wHI/https://cdn.sspai.com/2023/12/14/15d90983c7e983216c6692be42ef9ec7.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

看板视图和任务列表的展示效果

终于齐活了，这就是现在的EffectNote。为了验证是否真的具备All-in-one的能力，我已经把自己的Workflowy、SimpleNote笔记迁移进来了，有图有真相

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJ1QkV_xFJiIY7P0RKdNJ43xcseErnqOGBoQC64t7sVQ/https://cdn.sspai.com/2023/12/14/48f236fba36421f279b3f7d356867d49.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

workflowy导入效果（4824 items）

![](https://proxy-prod.omnivore-image-cache.app/0x0,sObWC4qxVBh1XKNryWhbPYSfVHzHRxgAiRuaMqcjqkKw/https://cdn.sspai.com/2023/12/14/3d99182c36497df6c24a18e5f2954f67.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

SimpleNote导入效果（220 notes）

项目开发到这一步，为了让整件事件变得更有意义，我决定把代码开源出来，让更多的人能够自由的记录自己的知识。项目地址：[https://github.com/WeiWenda/effect-note](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FWeiWenda%2Feffect-note)，从代码就可以看到，软件里没有任何埋点上传和信息上传，纯纯~~满足虚荣心~~为爱发电。

* 为了让软件能够长久的存在下去，EffectNote直接使用git进行笔记版本回溯，利用gitee或者github进行云端同步，某种意义上，只要git不凉，就总能找到合适的云存储。而EffectNote所依赖的第三方库也大多是非常稳定，基本公认好用的js组件。
* 为了彻底地摆脱笔记分散在过多软件的困扰，还借鉴了[logseq](https://sspai.com/link?target=https%3A%2F%2Flogseq.com%2F)的移动端方案，使用[capacitorjs](https://sspai.com/link?target=https%3A%2F%2Fcapacitorjs.com%2F)实现了EffectNote的移动版，这样手机上就不需要安装那么多笔记软件了。当然，移动版的代码也是开源的，项目地址：[https://github.com/WeiWenda/effect-note-mobile](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FWeiWenda%2Feffect-note-mobile)

项目历程讲完了，不知道是否引起了屏幕前你的共鸣和兴趣，快来试用一下吧！

全平台下载地址：[http://www.](https://sspai.com/link?target=http%3A%2F%2Fwww.effectnote.com%2F)[effectnote](https://sspai.com/link?target=http%3A%2F%2Fwww.effectnote.com%2F)[.com](https://sspai.com/link?target=http%3A%2F%2Fwww.effectnote.com%2F)

在线Demo： [http://demo.effectnote.com/note/-1](https://sspai.com/link?target=http%3A%2F%2Fdemo.effectnote.com%2Fnote%2F-1)

---

