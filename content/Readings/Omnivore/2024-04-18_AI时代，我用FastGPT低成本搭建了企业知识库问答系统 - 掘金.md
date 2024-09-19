---
id: 0a8ddf52-134b-4320-8cf8-ef4f935f0699
title: |
  AI时代，我用FastGPT低成本搭建了企业知识库问答系统 - 掘金
author: |
  产品试金石
date_saved: 2024-04-18 10:58:51
date_published: 2024-01-24 19:39:57
draft: true
---

# AI时代，我用FastGPT低成本搭建了企业知识库问答系统 - 掘金
#Omnivore

[Read on Omnivore](https://omnivore.app/me/ai-fast-gpt-18ef1b7afda)

[Read Original](https://juejin.cn/post/7327724945761239050)

date_saved: 2024-04-18 10:58:51

date_published: 2024-01-24 19:39:57

--- 

# Full Content: 

当今环境，所有企业都有一个绕不开的问题：信息过载。面对大量的信息资源，一方面，人员流失导致企业知识资产的流失几乎是必然现象，项目也往往受制于关键信息的同频而产生很大的负面影响。另一方面，业务模式无论多么简单，新员工上手的学习曲线同样陡峭，往往在同一类问题的解决上反复浪费资源，重复制造车轮。

解决上述问题，企业知识库算是一个比较合适的方案：一个能够保存企业智慧、促进信息共享、提高工作效率、加速新员工培训、支持决策制定的知识协同系统。员工只需要按照企业制定的统一要求，把属于企业的知识放进去，经知识库加工后输出，逐渐在企业内外部共享使用。随着知识库内容和功能的完善，将为企业管理和协同带来巨大的帮助。

知识库有了雏形，我们就可以借助GPT为企业员工和用户更好的输出知识库内容，提升使用体验，从而提升效率。在本文中，我们将借助OpenAI的GPT和开源程序FastGPT的组合方案，低成本实现企业知识库问答系统的搭建，相比于以往服务商提供的动辄几万块的知识库解决方案，甚至让你不需要花钱就能达到同样甚至更好的效果。

![FastGPTLOGO](https://proxy-prod.omnivore-image-cache.app/0x0,sa1-YWpPqH-LwVTFt3Q_o7ZANXSsE-Qk4GJVWY-aiyfw/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd97f8192e5e4c2c8cd3b6dda44a5c39~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=93&h=127&s=2209&e=png&b=ffffff)

免费开源程序FastGPT 是一个基于 LLM 大语言模型的知识库问答系统，支持企业内部免费私有化部署，也支持付费商用多用户版本，目前Github9.2kStar，提供开箱即用的数据处理、模型调用等能力。同时可以通过 Flow 可视化进行工作流编排，从而实现复杂的问答场景！

[FastGPT项目地址>>](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Flabring%2FFastGPT%2Ftree%2Fmain "https://github.com/labring/FastGPT/tree/main")

**功能特点：**

* 项目开源  
FastGPT 遵循附加条件 Apache License 2.0 开源协议，你可以 Fork 之后进行二次开发和发布。FastGPT 社区版将保留核心功能，商业版仅在社区版基础上使用 API 的形式进行扩展，不影响学习使用。
* 独特的 QA 结构  
针对客服问答场景设计的 QA 结构，提高在大量数据场景中的问答准确性。
* 可视化工作流  
通过 Flow 模块展示了从问题输入到模型输出的完整流程，便于调试和设计复杂流程。
* 无限扩展  
基于 API 进行扩展，无需修改 FastGPT 源码，也可快速接入现有的程序中。
* 便于调试  
提供搜索测试、引用修改、完整对话预览等多种调试途径。
* 支持多种模型  
支持 GPT、Claude、文心一言等多种 LLM 模型，未来也将支持自定义的向量模型。

**工作原理：**

**[![工作原理](https://proxy-prod.omnivore-image-cache.app/0x0,snLWncSHSQucVicnzZEhYxMhwdaiKhUfMNcvL83oHBeg/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ed041f6f0e447ccb0d0e2776c6c3074~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1756&h=733&s=39460&e=webp&b=fbfafa)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.gptacg.com%2Fwp-content%2Fuploads%2F2024%2F01%2F%25E5%25B7%25A5%25E4%25BD%259C%25E5%258E%259F%25E7%2590%2586.webp "https://www.gptacg.com/wp-content/uploads/2024/01/%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.webp")**

## 搭建准备

* 服务器：2核2G3M20GB以上即可，推荐入手阿里云99元/年ECS云服务器，推荐购买链接：  
[www.aliyun.com/minisite/go…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.aliyun.com%2Fminisite%2Fgoods%3FuserCode%3Dl5o4wpuq "https://www.aliyun.com/minisite/goods?userCode=l5o4wpuq")
* 域名：阿里云购买域名并在上述购买服务器上进行企业备案（企业备案完成大概1\~2周左右时间）。
* API-Key：购买可以支持gpt-3.5和4系列、国内主流AI等多个大模型的聚合API，推荐购买链接：[one.meithink.com/](https://link.juejin.cn/?target=https%3A%2F%2Fone.meithink.com%2F "https://one.meithink.com/")

以上就是搭建所需全部条件，搭建费用总计成本200元以内，准备好后可继续往下阅读。

## 搭建步骤

* 在服务器完成宝塔安装（略）
* 服务器端口放行3000（或把默认设置3000修改为自定义的端口并放行）  
[![放行端口](https://proxy-prod.omnivore-image-cache.app/0x0,srL4Ya7vp-46gwEKWc26VDhk8kjCT3_9WjAcW0XeSWWg/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ff245067fb646689ed54c109b0f005e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=925&h=794&s=35206&e=webp&b=fefefe)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.gptacg.com%2Fwp-content%2Fuploads%2F2024%2F01%2F%25E6%2594%25BE%25E8%25A1%258C%25E7%25AB%25AF%25E5%258F%25A3.webp "https://www.gptacg.com/wp-content/uploads/2024/01/%E6%94%BE%E8%A1%8C%E7%AB%AF%E5%8F%A3.webp")
* Docker部署FastGPT  
   * 打开宝塔，安装Ngixn推荐环境，再在应用商店安装Docker管理器，进入SSH终端；  
   [![进入终端](https://proxy-prod.omnivore-image-cache.app/0x0,s9WvGqAud3p11ldvddTt3DfhJVYRqSkBZ9FPDmK5VYKA/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b03cd15848c34a9a8932ee0e7315e293~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=985&h=565&s=15776&e=webp&b=121212)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.gptacg.com%2Fwp-content%2Fuploads%2F2024%2F01%2F%25E8%25BF%259B%25E5%2585%25A5%25E7%25BB%2588%25E7%25AB%25AF.webp "https://www.gptacg.com/wp-content/uploads/2024/01/%E8%BF%9B%E5%85%A5%E7%BB%88%E7%AB%AF.webp")  
   * 命令创建文件夹并拉取配置文件：

```crystal
mkdir fastgpt
cd fastgpt
curl -O https://raw.githubusercontent.com/labring/FastGPT/main/files/deploy/fastgpt/docker-compose.yml
curl -O https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json

```

* url绑定程序

## FastGPT使用

搭建成功后，通过用户名和密码访问私有化部署的FastGPT即可展开使用，你可以基于企业特点选择怎样去使用它，这里我们来简要介绍几个核心功能：

## 知识库建设思路

目前看来，中国大部分中小企业还是没有知识库概念的，老板不重视，员工更不会重视，就像开篇说的那样，企业在人才流失的同时，也流失了太多本应该属于企业的知识沉淀。企业太缺乏这种资产保护意识了！

FastGPT的出现，从一定意义上来说更加具体了知识库的概念，降低了知识库的入门标准，拉低了成本，我在本文也重点介绍了知识库问答系统搭建的整个过程，总的来说还是非常简单的。如此以来也可以倒逼企业建设属于自己的知识库，降本增效就在眼前，无论企业大小，都可以开始着手尝试应用了！

如果还没有头绪着手开始这件事，以下方式可以参考：

1. 指定1名人员作为知识库管理员，并安排其完成基于FastGPT的知识库问答系统搭建，功能使用培训；
2. 各个部门指定1名人员并分配后台账号，负责录入并调校本部门知识档案的输出（包含但不限于规章制度、工作流程、优秀案例、企业文化、宣传资料、产品资料、技术文件等等），并定期维护和更新本部门资料；
3. 由知识库管理员基于知识库创建不同功能的应用，如新员工AI培训师、AI财务助理、AI客服等等，还可以通过知识库API继续深度开发知识库相关应用程序。

## 总结

虽然短期来看，搭建企业知识库比较费时费力，并有一定滞后性，甚至影响员工工作的积极性，尤其是在知识库内容不全面急需补充的阶段。但是长期来看，建设企业知识库不仅可以提高企业的运营效率，还可以促进企业的持续学习和发展，提高客户满意度，支持决策制定，降低风险，最终加强企业的竞争力。

本文收录于以下专栏

![cover](https://proxy-prod.omnivore-image-cache.app/0x0,steXRDN9vEsfXXkMPgIaP1wRhAFjyLrIy81kI_5TcMHA/https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95414745836549ce9143753e2a30facd~tplv-k3u1fbpfcp-jj:160:120:0:0:q75.avis)

 本专栏分享AI（人工智能）相关应用技巧，提升我们在日常工作、学习之中的效率，提升企业生产力。

上一篇

 GPT-4 / Midjourney / GPTs，普通人如何用一套程序全搞定

下一篇

 国内怎样使用gpt4，提供支持个人和企业使用gpt4的4种方法

---

## Highlights

> 低成本搭建了企业知识库问答系统 [⤴️](https://omnivore.app/me/ai-fast-gpt-18ef1b7afda#d8a3484e-3082-4694-9288-2e46fde8d2c7)  ^d8a3484e

