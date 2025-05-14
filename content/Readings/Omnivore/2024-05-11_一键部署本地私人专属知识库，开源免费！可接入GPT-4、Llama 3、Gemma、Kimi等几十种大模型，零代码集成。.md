---
id: 40df96b4-1dc5-4673-94a7-ade15d667d46
title: |
  一键部署本地私人专属知识库，开源免费！可接入GPT-4、Llama 3、Gemma、Kimi等几十种大模型，零代码集成。
author: |
  无线理论
date_saved: 2024-05-11 11:01:23
date_published: 2024-05-07 00:30:00
draft: true
---

# 一键部署本地私人专属知识库，开源免费！可接入GPT-4、Llama 3、Gemma、Kimi等几十种大模型，零代码集成。
#Omnivore

[Read on Omnivore](https://omnivore.app/me/gpt-4-llama-3-gemma-kimi-18f682c460b)

[Read Original](https://mp.weixin.qq.com/s/AgBrZ1pIPBjrVgdfY_7jpQ)

date_saved: 2024-05-11 11:01:23

date_published: 2024-05-07 00:30:00

--- 

# Full Content: 

![cover_image](https://proxy-prod.omnivore-image-cache.app/0x0,s6ovRZ7UUO6ynJfOAO6N21jrf7mnNjrphs6Z1hjl6gD0/https://mmbiz.qpic.cn/sz_mmbiz_jpg/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKePUWrnjgicVU2SMMFk7ibAvG87icic1fp72hkNOmbWlLZfyHL5y5q0qp8YQ/0?wx_fmt=jpeg) 

原创 无线理论  无线理论 _2024-05-07 12:30_ _安徽_ 

**1、MarxKB知识共享系统简介**

今天跟大家分享的内容是，如何在本地**搭建自己的本地知识库问答系统** **MaxKB**，与其他问答知识库相比，他真正做到了开箱即用，零代码集成，支持ChatGPT、百度千帆、Lama2、Lama3，通义千问等几十种大语言模型，操作界面简介，小白也能快速上手。【**注意在正式搭建知识库问答系统之前，请确保你的Windows系统已经升级到了专业版本，同时拥有一张独立的显卡！！**】  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sgd8sYAfiBoDVSWhXMW1_iOfpCjLqgsujzRPqM3btFYw/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeZuIz2DyqJJojR8ZwiaeEERMGO6dEicawmRz87ShHUFwmHZmfL6aiaKlzA/640?wx_fmt=gif&from=appmsg)

**2、搭建本地知识库问答系统** **MarxKB的优势**

在部署好MarxKB后，**你可以添加个人笔记，工作文档，甚至在线网页到知识库里面，然后通过建立索引加上大语言模型对这些知识库的理解实现对文档内容的实时搜索与问答**。所有的程序和文档都不会离开你的电脑，完全运行在本地。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sc_aZu1YtW3MvH6N-_64EnJFymR2K6K-RyoyJX8F5UlA/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKe4LQzkVWP10huPym6HmqajYwSTRElC1tQTa6ibBAXQzeb48Gib5xVxMwg/640?wx_fmt=gif&from=appmsg)

**3、在电脑上安装Docker**

到目前为止，MarksKB目前在Windows系统上，只能通过Docker的镜像来部署，因此我们需要提前在电脑上安装Docker。打开下面的Docker应用程序下载地址：

```awk
https://www.docker.com/products/docker-desktop/
```

在下载Docker后，在本地电脑上完成安装，注意在安装过程中，我们需要确保"**Use WSL 2 instead of Hyper-V (recommended)**"这一功能被启用，docker的具体安装过程可以参看下图所示的教程，必要时可以重启电脑。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sKi-2xPcUaUGzLEir9t7vninjbewn-G1Et0WS9hdaoGE/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKe0YEYEfiagkkhqXLezcZ5dheEz9vo5SaxOyA1pJFGdnibCspqPkj2ia7xA/640?wx_fmt=gif&from=appmsg)

**4、使用docker安装MarxKB镜像**

在完成docker的安装后，我们先打开终端，然后在终端输入下面的指令

```angelscript
docker pull 1panel/maxkb
```

将docker镜像下载到本地电脑上，

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sVIL7RllqE6HhYEPsBR4BTT0IpELBmFf7T1Y6iUSVJyc/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKepIOlIibcxPPrgkAaSls3r91oofuGUEwrxyB6FGliaEqIwXXAdwE7xQbg/640?wx_fmt=gif&from=appmsg)

整个MaxKb的镜像大小为2GB左右。  

**5、为MaxKB镜像创建一个容器**  

打开Docker图形化界面，左侧菜单栏点击Images图标，然后你就会看到刚刚下载的docker镜像，点击右侧的三角图标就可以重新创建容器了，

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sLMdtO3r_NyjhNuxaARZa-ipdXYogRFUDAKOVHwjhaho/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeMCcI3NBUJTarxYEyrx3H0mZ0FlaNFnJe0GBqHiaP0TAtddWaDEiaEOOA/640?wx_fmt=png&from=appmsg)

弹出的界面点击向下的箭头，展开选项，容器名称选择MarskB，第一个端口默认是8080，第二个端口是在应用程序运行后需要访问的端口，这里我们也将其设置为8080，

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sidTi2sfIpk1pRsCZFOQJCMFPZBGyJpy3I1EjKXM6nrY/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKe4iaqfSjQXg6bXLolFPIWpDwKTSaCC2fP27GzwMcURW2YTV3StLCL1eQ/640?wx_fmt=png&from=appmsg)

下一步，在本地设备上，创建一个存放知识库数据的文件夹，并记住这个文件夹的路径，随后回到刚才的Docker界面，找到Volumes项，这这里填入刚才的知识库路径，随后在**Container path**这一栏中填入“**/var/lib/postgresql/data**”，最后点击RUN按钮，这样一个MarKB容器就算是搭建完毕了！

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s-QynBdKADrdQXgi-aTyXNDrA6fPVCmsqfoaqQd7Kenw/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeBYhC6eibwSicPXzKwn19T4ApYbn8Cq0VQicRx5D2AyJNiby7Rwt9flJe5A/640?wx_fmt=png&from=appmsg)

我们用浏览器打开下面的网址，

```dts
http://127.0.0.1:8080
```

就可以启动了MarKB应用界面了，不过这里需要提供登录账号和密码，

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sWX4455LhpLJfFTGxD7xuUmlBU4X3MH5OVhVuNFrQM-g/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeSOhnhDTBjQ4jqicGYk4HmkGV5viaY5yhD50rgh9VIUdibTrQ32KVq3NDg/640?wx_fmt=png&from=appmsg)

登录账号和密码可以关注下面的微信公众号，并回复关键词“**MarKB**”即可获取，

**6、在MarKB上创建知识库**

初次登录到MarKB后，需更改登录用户名和登录密码。完成修改后，导航到**创建知识库页面**，在这里，你需要为将创建的知识库命名，并输入几段简要内容进行描述，随后就是根据自己的需要创建自己的知识库系统，这里的知识库系统有两种，**一种是用某个网站上作为建设知识库的数据来源，另外一种则是直接使用本地文本**。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sqKJaZhVAUvDnRxe6DkxlQTHcw_xiyoOx23k1MlqMhsI/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKetsXBIwfQkic6OL38IJoQdUJX0Pkemu9aORUWFDcHUHcItL05VTH6Knw/640?wx_fmt=png&from=appmsg)

这里我们使用"**通用型**"，也就是通过使用本地文本的方式来搭建知识库，点击进入“**文档上传**”界面，这里上传你的知识库数据，这些**数据格式**既可以是**txt，也可以是word、pdf、ppt等**，在确定需要上传的文档后，点击右下角的**“创建并导入**”按钮。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s3a-ARqvdy85gTRicYHDwcWtHb8mWu6YciTz6FdQofoE/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKebmmNSLLKn29obbuIhl30RNW3JftxlHbx5P3dvIS694woE2kh9JXSGw/640?wx_fmt=gif&from=appmsg)

在导入文档后，在“**设置分段规则”**这里我们选择“**智能分段**”，随后点击**开始导入**按钮。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,stcOGhWmVP2Br4jk7-02N-yJ7AMwCjqnHyiSC_phZ_gI/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeiauZcgFR5qCO2DqWyf7EQuUzVVvBTlcSmolJuef9KEM8BHyLdypjjOQ/640?wx_fmt=png&from=appmsg)

文档导入过程的时间长短取决于文档内容的多少，文档内容阅读导入时间就越长。  

**7、配置本地大语言模型**  

在MarKB应用界面内，点击系统设置，然后再进入模型设置界面，在这里，你可以看到MarKB目前能够支持的大语言模型，如百度千帆、Azure OpenAI、ChatGPT、ollama等类型的模型。这里除了ollama可以本地使用外，其他平台的大语言模型均需要你提供对应的API密钥。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sCHWF5LKDl7sfz8HBlj2DusHINdMKukYwoioZ2nadlfg/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKer4ROWs0y8S1Wo2u9NzymG8mVlmYVNcTZyiaAgkFzCfbuB4JQXuJaT4Q/640?wx_fmt=png&from=appmsg)

由于本期演示的主要内容就是通过本地启用本地大语言模型来构建自己的知识库系统，所以接下来我们探讨**如何在本地部署并启用ollama上的大语言模型**，首先请确保你的设备上已经安装了ollma，如果还没有安装，那么**可以通过下面的地址来下载ollma本地安装包**，然后快速完成安装。

```dts
https://ollama.com/download
```

你可以在ollma的官方网站主页上查看可以在本地运行的大型语言模型的列表！

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,st-v73Ds_WxYOvz54m0-8AXWI1Jdtss7KzvApeCunKwo/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeiaYQe725fFLz9wRpPUFoYuctWRsXQRia8QqVXl7eY56FHrEChtJKkY4A/640?wx_fmt=gif&from=appmsg)

这里我们使用最近开源的大语言模型llama3来作为运行本地知识库的大语言模型，**到ollama模型列表界面，选中并打开llama3模型界面，在界面最底部找到下载llama3模型的命令，**

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sSOX-1ou8aZHDEX3f_h8yYuHGDIzr5FLllbvn9dH2_QE/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKet8FAn0qUEPlzROC0aTM8wJzGp3zvqYAhEZEzqPCSsxYh6PGU9AqJGw/640?wx_fmt=png&from=appmsg)

如果你的设备显存足够大，那么你可以使用指令：

```dockerfile
ollama run llama3:70b
```

来下载大语言模型llama3，反之，你就使用参数较低的8B模型，指令如下：

```dockerfile
ollama run llama3
```

在模型下载完毕后，你就可以在终端直接和本地部署的大语言模型llama3对话了，关闭界面后，下次使用只需再次运行命令即可！

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sYKFyDEDAJ3okbEL-HiKt8t3YMvcCKx0P9uLldZlFOBo/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeQHLknhIQ0gMMpkeDw2IsAL8FvOicqmiaVPYplPyEEJjKngwicic5Fkhkzg/640?wx_fmt=png&from=appmsg)

**8、将大语言模型和本地知识库相互关联**  

回到MarKB的**系统设置**界面内，点击**模型设置**，模型名称随便写，**模型类型写大语言模型**，模型列表这里，如果你使用ollama下载了大语言模型，那么么这里的列表中将会有相应的模型，

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,scipbZ55oS2GRuA0kpOfrWnVldr2n77hOnBk-9kk5Oeo/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeiammxZG4aHcbkcI63AvMiaiaCfIGJP8iacKMozrSCcYrdZWqQicuan6RicXQ/640?wx_fmt=png&from=appmsg)

下面的API密钥随便写，API域名则写入下面的内容：

```dts
http://host.docker.internal:11434
```

具体演示请见下图：  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sIYK4WrLzmUnSkIbIqTkJzsH_l02qoLYzzV19fu4H91M/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKevusFHMTlb3rR6zSzgNvk5ficudqibHjZS87FCJyHkMxMXjbwOZ2znS2Q/640?wx_fmt=png&from=appmsg)

完成内容填写后，点击提交。

**9、创建本地知识库应用**  

回到MarKB主界面，点击**应用**，然后**创建应用**，随后依次填写应用名称、应用描述，AI模型这里选中我们刚刚关联到MarKB上的大语言模型，如下所示：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sC4IC0OAoWx72fxXjlH-Pii9MZkzbBHXIivbLz0Zuf7g/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKe0UFlicmkcSJBO3FbHBXfOiaTmXRsfPBoZCX62TliaFBv5icql7CDPNAicsQ/640?wx_fmt=png&from=appmsg)

打开多轮对话，接下来需要将这个应用关联到前面我们创建的知识库，

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sjmPwUCgmMNQFMogCPofSHEz0M-9TLUU-9_dchtDD4T0/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKejLhChibOUeawvkfPicaDrjWeJK4esWqYVRLy9H9EuIz1W8tywC9YPl3g/640?wx_fmt=png&from=appmsg)

 在接下来的界面内，你就会看到我们先前创建本地问答系统知识库了，点击它使大语言模型和知识库相结合，  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,scIKAzC7Lm3U93jmvhcjFy2WFfb20Ha_XsBMuc-jHReg/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKey5YfUu96QJDtFy1rL5Qz8OTn0GbUd6Glp6USPKJfPibpFQ8bv8nyN9A/640?wx_fmt=png&from=appmsg)

完成后，点击创建按钮即可，如下所示：  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sKxF_M8j5ctXyd50gZQACl-YG7kpw94RCUAZY4DAD5bQ/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKeF4CfRQdkeYiaruoHAQbUhowdWILF50YD923D4ulWOdYvZ3S9Euhicyxg/640?wx_fmt=png&from=appmsg)

到这里，一个使用大语言模型理解本地文档的问答系统就算建好了，点击下图所示的按钮就打开对话页面，  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sxosgdJfIwL7w-ABU-KfRRy0xaNBNySolDD23YqSDh68/https://mmbiz.qpic.cn/sz_mmbiz_png/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKe4gkb6aHgqeHQGuuiaQ4MftuQPtZiamaDjX15IK4mU1ERqe0Ptnq9s9FQ/640?wx_fmt=png&from=appmsg)

MaxKB使用演示情况如下图所示：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s7dJsk3rLfTy3cStvDN8c_L8nLUTGKarZ8TtP7Es9iO4/https://mmbiz.qpic.cn/sz_mmbiz_gif/AKxJeQiasUW1EFpCTtkzPBqxvXeSdsVKePhqmKqcibh9zs1SialtDA3e8a57IubSERy4KQ4xXDuSicDWgjVaVibajmA/640?wx_fmt=gif&from=appmsg)

---

