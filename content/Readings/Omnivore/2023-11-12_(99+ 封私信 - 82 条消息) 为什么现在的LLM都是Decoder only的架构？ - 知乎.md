---
id: f0c6f591-c967-47f9-9432-7f35054ffad0
title: |
  (99+ 封私信 / 82 条消息) 为什么现在的LLM都是Decoder only的架构？ - 知乎
author: |
  unknown
date_saved: 2023-11-12 01:11:43
draft: true
---

# (99+ 封私信 / 82 条消息) 为什么现在的LLM都是Decoder only的架构？ - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/99-82-llm-decoder-only-18bc2284d67)

[Read Original](https://www.zhihu.com/question/588325646/answer/3002928687)

date_saved: 2023-11-12 01:11:43


--- 

# Full Content: 

相比encoder-decoder架构，只使用decoder有什么好处吗？显示全部 ​

关注者

**2,454**

被浏览

**1,207,618**

[![CastellanZhang](https://proxy-prod.omnivore-image-cache.app/0x0,s1k6P3vhItmfYpQfwZpE14dsekOoh81VHGWiw8CXzPG0/https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=2c26e567)](https://www.zhihu.com/people/castellanzhang)

[CastellanZhang](https://www.zhihu.com/people/castellanzhang)

​ 关注

谢邀[@Story](https://www.zhihu.com/people/zheng-zhou-guang-zhi)

跟风也答一波，大家胡乱看看一起讨论。摘自我最近文章的第4部分：

[CastellanZhang：【大模型慢学】GPT起源以及GPT系列采用Decoder-only架构的原因探讨265 赞同 · 4 评论文章![](https://proxy-prod.omnivore-image-cache.app/0x0,sh8cA0d4wb_0a--Iy0tM7r48qHRgEUAJWmaYKEmK_SOw/https://pic3.zhimg.com/equation_ipico.jpg)](https://zhuanlan.zhihu.com/p/625184011)

## 4\. 关于Decoder-only架构的思考

==GPT为什么从始至终选择Decoder-only架构？GPT-1，包括之后的2，3系列全都如此。我不知道答案，ChatGPT给出的回答也很泛泛，并不能说服我。==

### 4.1 各种架构能否训练语言模型

我们不妨先想想用Encoder-Decoder或者Encoder-only架构能不能训练语言模型？如果不是按照标准的语言模型目标训练，而只是利用大规模未标注预料无监督学习，肯定是可以的，比如BERT就是Encoder-only架构的代表，Google T5\[4\]是Encoder-Decoder架构的代表。BERT输入为句对，学习目标有两个：Masked LM(随机遮盖句子中若干token让模型恢复)和Next Sentence Prediction(让模型判断句对是否前后相邻关系)；T5借鉴了BERT的Masked LM(或者称作denoising目标)，只不过输入输出都是text的形式，如下图：

![](https://proxy-prod.omnivore-image-cache.app/1528x392,ssuHrxB4WWmVHC8yjQzOe_oDv8-sgKIz1g8Q7d9GVlRQ/https://pic1.zhimg.com/50/v2-00bcae9ca9ac32c436f9723aa5d454e7_720w.jpg?source=2c26e567)

BERT和T5通过这种完形填空式的学习目标加强模型在语义理解上的能力，但这个训练目标和文本生成并不直接对应。如果非要按照标准语言模型目标的训练方式，即将一个文本段从头到尾依次基于上文预测下一个token，则对于Encoder-Decoder和Encoder-only架构很别扭且无法并行。T5的对比实验部分给出了另一种替代方案：采样一段文本，然后选择一个随机点将其拆分为前缀和目标部分，前缀作为输入，目标作为输出。只不过为了防止信息泄露，Encoder-only架构要换成论文中的Prefix LM架构，三种架构的对比如下图，实现上也很容易，设置不同的掩码矩阵即可：

![](https://proxy-prod.omnivore-image-cache.app/1528x638,sS9wjzzWyi7UG12goK0UwVoSYMF0J2EJZHq681pTv7fg/https://picx.zhimg.com/50/v2-600eee193049c49346c0cbe8a0494ceb_720w.jpg?source=2c26e567)

因此我们首先可以肯定，理论上各种架构都是可以训练语言模型的。

### 4.2 不同架构推理对比

再看推理过程，即训练完毕后用于生成文本的过程，2L层的Encoder-Decoder架构和L层的Decoder-only架构的推理时间差不多，但前者参数多了一倍；同样参数规模的Decoder-only和Prefix LM对比，前者只有前向过程，推理应该能更快一些。因此假设2L层Encoder-Decoder、L层Decoder-only、L层Prefix LM三者模型效果差不多，则对比下来，Decoder-only是存储和计算上效率最高的。当然这只是假设，按照T5论文的结论，2L层Encoder-Decoder效果才是最好的，不过T5参数量才110亿，当参数规模达到GPT-3级别的千亿规模，不知道结果如何。

### 4.3 低秩问题是原因吗

在调研过程中，发现知乎上有相关讨论\[5\]：“为什么现在的LLM都是Decoder only的架构？相比encoder-decoder架构，只使用decoder有什么好处吗？”在苏剑林的最高赞回答中提到双向注意力会带来低秩问题，想通过理论视角给出答案。我顿感兴趣，但苏剑林的回答在理论分析上写得还是不够详尽，于是按图索骥，找来回答中提到的两篇论文。

先说第一篇\[6\] Attention is not all you need: pure attention loses rank doubly exponentially with depth，纯纯的理论分析，结论是如果没有残差连接和MLP兜着，self-attention网络的输出会随着网络深度迅速朝秩为1的矩阵收敛。self-attention网络的输出就是每个token表示在所有token上的权重分配矩阵，秩为1就是说attention矩阵每一列都相同了，即每个token最后的表示都一样了，网络就废了。但在Transformer实际使用中没有谁会这么干，所以我的总结是这篇论文很NB，但和这个问题并无关系，先留个坑，以后有时间单开一篇文章写它。

第二篇论文\[7\] Low-Rank Bottleneck in Multi-head Attention Models就有点意思了。理论分析表明了标准Multi-head Attention的一个固有缺陷：当head size小于输入序列长度时，会带来所谓低秩瓶颈，降低模型表达能力。这个分析有点复杂，我们需要详细描述一下。

设定Transformer的输入为 nn 个token序列，每个token用 dd 维向量表示，则可以用矩阵 X∈Rd×n\\mathbf X\\in\\mathbb R^{d\\times n} 统一表达输入序列。

回顾一下Transformer block架构（本论文只针对Encoder分析），每一个block包含一个Self-Attention子层和一个FFN子层。每个子层还包含一个残差连接和LN操作。Self-Attention子层可以是Single-Head Attention，也可以是Multi-head Attention，当然也可以把前者看作后者的特例。

**（1）Single-Head Attention情况**

先从简单的单头分析。Self-Attention的计算如下：

(1)Attenion(X)\=WvX⋅Softmax\[(WkX)⊤(WqX)dk\]\=WvX⋅P \\text{Attenion}(\\mathbf X)=\\mathbf W\_v\\mathbf X\\cdot\\text{Softmax}\\left\[\\frac{(\\mathbf W\_k\\mathbf X)^\\top(\\mathbf W\_q\\mathbf X)}{\\sqrt{d\_k}}\\right\]=\\mathbf W\_v\\mathbf X\\cdot\\mathbf P\\tag{1} 

其中三个分别对应query、key、value的投影矩阵形状为 Wq∈Rdq×d,Wk∈Rdk×d,Wv∈Rdv×d\\mathbf W\_q\\in\\mathbb R^{d\_q\\times d},\\mathbf W\_k\\in\\mathbb R^{d\_k\\times d},\\mathbf W\_v\\in\\mathbb R^{d\_v\\times d}，且对于单头情况有 dq\=dk\=dv\=dd\_q=d\_k=d\_v=d。矩阵 P∈Rn×n\\mathbf P\\in\\mathbb R^{n\\times n} 就是所谓的Attention矩阵，每一列是一个归一化的权重向量，对应一个token，表示该token的Attention向量可以通过n个输入的value向量加权求和获得，n个权重值就是这一列向量。

接下来Self-Attention子层的输出为

(2)LN(X+Wo⋅Attention(X)) \\text{LN}(\\mathbf X+\\mathbf W\_o\\cdot\\text{Attention}(\\mathbf X))\\tag{2} 

我们仔细想想公式(1)，真实的语料中self attention权重任意情况都可能存在，Attention矩阵 P\\mathbf P 可能的取值应该是任意的（只要满足非负性和列归一），但是通过这种softmax函数形式是否能保证取值范围足够大，从而覆盖任意的 P\\mathbf P 呢？更准确地说就是，给定任意的输入 X\\mathbf X 和 Attention矩阵 P\\mathbf P，是否一定存在 Wq\\mathbf W\_q 和 Wk\\mathbf W\_k，满足如下等式(3)呢？ 如果理论上都不成立，那么再怎么训练都无济于事，也就是说模型表达能力不足，无法拟合真实的Attention矩阵。

(3)Softmax\[(WkX)⊤(WqX)dk\]\=P \\text{Softmax}\\left\[\\frac{(\\mathbf W\_k\\mathbf X)^\\top(\\mathbf W\_q\\mathbf X)}{\\sqrt{d\_k}}\\right\]=\\mathbf P\\tag{3} 

论文中给出定理1回答这个问题。

定理1：

如果 dq\=dk\=d≥nd\_q=d\_k=d\\ge n，那么给定任意的列满秩矩阵 X∈Rd×n\\mathbf X\\in\\mathbb R^{d\\times n} 和任意的正列随机矩阵（positive column stochastic matrix，即每个元素为正，且每一列元素之和为1，都是一个概率分布）P∈Rn×n\\mathbf P\\in\\mathbb R^{n\\times n}，则总是存在 d×dd\\times d 的矩阵 Wq\\mathbf W\_q 和 Wk\\mathbf W\_k 满足如下等式（即有解）

(3)Softmax\[(WkX)⊤(WqX)dk\]\=P \\text{Softmax}\\left\[\\frac{(\\mathbf W\_k\\mathbf X)^\\top(\\mathbf W\_q\\mathbf X)}{\\sqrt{d\_k}}\\right\]=\\mathbf P\\tag{3} 

如果 dq\=dk\=d<nd\_q=d\_k=d\\lt n，则存在 X\\mathbf X 和 P\\mathbf P，对于所有的 Wq\\mathbf W\_q 和 Wk\\mathbf W\_k 都无法满足等式(3)，即无解。

证明有解是通过构造法，不在这里详述。证明无解是通过给出一个例子：

假设 d\=1d=1，n\=2n=2，则 X∈R1×2\\mathbf X\\in\\mathbb R^{1\\times 2}，Wq\\mathbf W\_q 和 Wk\\mathbf W\_k 退化成了 1×11\\times 1 的矩阵即标量。令 X\=\[1,0\]\\mathbf X=\[1,0\]，则有

Softmax\[(WkX)⊤(WqX)dk\]\=Softmax\[\[1,0\]⊤Wk⊤Wq\[1,0\]dk\]\=Softmax\[\[WkWq000\]\]\\text{Softmax}\\left\[\\frac{(\\mathbf W\_k\\mathbf X)^\\top(\\mathbf W\_q\\mathbf X)}{\\sqrt{d\_k}}\\right\]=\\text{Softmax}\\left\[\\frac{\[1,0\]^\\top\\mathbf W\_k^\\top\\mathbf W\_q\[1,0\]}{\\sqrt{d\_k}}\\right\]=\\text{Softmax}\\left\[\\begin{bmatrix}\\mathbf W\_k\\mathbf W\_q&0\\\\0&0\\end{bmatrix}\\right\]\\\\

注意Softmax是在列上操作，而上式Softmax内的矩阵第二列全0，经过Softmax后只能变成 \[0.5,0.5\]⊤\[0.5,0.5\]^\\top，必然无法生成第二列元素不相等的 P\\mathbf P，比如 P\=\[0.50.750.50.25\]\\mathbf P=\\begin{bmatrix}0.5&0.75\\\\0.5&0.25\\end{bmatrix}.

论文在这里说，当 d<nd\\lt n 时就造成了低秩瓶颈，但并没有解释为何叫低秩瓶颈，和“秩”这个概念有啥关系？我们不妨自己理解一下。令Softmax函数里的矩阵为 S\\mathbf S，当 d<nd\\lt n 时，有

rank(S)\=rank\[(WkX)⊤(WqX)\]≤min\[rank(WkX),rank(WqX)\]≤d<n\\text{rank}(\\mathbf S)=\\text{rank}\\left\[(\\mathbf W\_k\\mathbf X)^\\top(\\mathbf W\_q\\mathbf X)\\right\]\\le\\min\\left\[\\text{rank}(\\mathbf W\_k\\mathbf X),\\text{rank}(\\mathbf W\_q\\mathbf X)\\right\]\\le d\\lt n\\\\

即 S\\mathbf S 的秩的上限只能到 dd，低于 nn，而考虑到 P\\mathbf P 的任意性，秩的上限是 nn。即便经过Softmax函数后 S\\mathbf S 的秩可能会升高一些，但也无法保证能够到 nn。因此公式(3)左右两边的秩都无法保证相等，要保证矩阵相等自然更是妄想。秩相等是矩阵相等的必要条件，这便是低秩瓶颈的由来。定理1的 d≥nd\\ge n 部分无非是证明了当秩能保证相等时矩阵也一定能够保证相等，必要条件变成了充要条件。

**（2）Multi-Head Attention情况**

再看标准的Multi-Head Attention，假设一共 hh 个head，每个head都是一个Self-Attention：

(4)head(X)i\=WviX⋅Softmax\[(WkiX)⊤(WqiX)dh\]∈Rdh×n \\text{head}(\\mathbf X)\_i=\\mathbf W\_v^i\\mathbf X\\cdot\\text{Softmax}\\left\[\\frac{(\\mathbf W\_k^i\\mathbf X)^\\top(\\mathbf W\_q^i\\mathbf X)}{\\sqrt{\\frac{d}{h}}}\\right\]\\in\\mathbb R^{\\frac{d}{h}\\times n}\\tag{4} 

然后 hh 个head通过concat拼接起来：

MultiHead(X)\=Concat\[head(X)i,...,head(X)h\]∈Rd×n \\text{MultiHead}(\\mathbf X)=\\text{Concat}\[\\text{head}(\\mathbf X)\_i,...,\\text{head}(\\mathbf X)\_h\]\\in\\mathbb R^{d\\times n}\\\\

Multi-Head Attention层的输出如下，其中 Wo∈Rd×d\\mathbf W\_o\\in\\mathbb R^{d\\times d}：

Z\=LN(X+Wo⋅MultiHead(X)) \\mathbf Z=\\text{LN}(\\mathbf X+\\mathbf W\_o\\cdot\\text{MultiHead}(\\mathbf X))\\\\

标准的做法将每个头的投影矩阵 Wqi,Wki,Wvi\\mathbf W\_q^i,\\mathbf W\_k^i,\\mathbf W\_v^i 的维度都弄成了 dh×d\\frac{d}{h}\\times d，在论文中 d/hd/h 被称作head size，因为 head(X)i\\text{head}(\\mathbf X)\_i 输出的每个token向量维度就是 d/hd/h。一般认为增加head数量 hh 能够提升性能，但同时也导致了head size变小。对照公式(4)和定理1可以发现，当 hh 过大超过 d/nd/n 时，有 d/h<nd/h\\lt n，出现了低秩瓶颈问题，带来性能下降。论文实验也证明了这一点。hh 过大超过 d/nd/n 很常见，比如BERT-LARGE在pre-training阶段大部分情况 d\=1024,n\=128d=1024,n=128，当 hh 超过8时就会发生。因此为了增加head数又不出现低秩问题，就必须增大 dd，带来计算和存储的成本，得不偿失。

**（3）Fixed Multi-Head Attention**

论文给出了破解之法，修改标准的Multi-Head Attention，命名为Fixed Multi-Head Attention。其实分析清楚了原因，解法也比较好想，无非将head size和head数 hh 解耦。

令 dpd\_p 表示head size，新的投影矩阵 Vqi,Vki,Vvi\\mathbf V\_q^i,\\mathbf V\_k^i,\\mathbf V\_v^i 的尺寸改为 dp×dd\_p\\times d，有

fixedhead(X)i\=VviX⋅Softmax\[(VkiX)⊤(VqiX)dp\]∈Rdp×n \\text{fixedhead}(\\mathbf X)\_i=\\mathbf V\_v^i\\mathbf X\\cdot\\text{Softmax}\\left\[\\frac{(\\mathbf V\_k^i\\mathbf X)^\\top(\\mathbf V\_q^i\\mathbf X)}{\\sqrt{d\_p}}\\right\]\\in\\mathbb R^{d\_p\\times n}\\\\

FixedMultiHead(X)\=Concat\[fixedhead(X)i,...,fixedhead(X)h\]∈Rhdp×n \\text{FixedMultiHead}(\\mathbf X)=\\text{Concat}\[\\text{fixedhead}(\\mathbf X)\_i,...,\\text{fixedhead}(\\mathbf X)\_h\]\\in\\mathbb R^{hd\_p\\times n}\\\\

Fixed Multi-Head Attention层的输出如下，其中 Vo∈Rd×hdp\\mathbf V\_o\\in\\mathbb R^{d\\times hd\_p}：

Z\=LN(X+Vo⋅FixedMultiHead(X)) \\mathbf Z=\\text{LN}(\\mathbf X+\\mathbf V\_o\\cdot\\text{FixedMultiHead}(\\mathbf X))\\\\

我们只要让 dp≥nd\_p\\ge n，就可以消除低秩问题。缺点是投影矩阵的参数规模上去了，但相比需要增大 dd 的破解之法，这种方法可以保持较小的embedding size dd，最终能减少参数总量。

**（4）MultiHead vs. FixedMultiHead Attention**

如果 dp<nd\_p\\lt n 会怎么样？会比MultiHead更差还是更好？论文还贴心地对比了任意情况下二者的表现力，我们简述一下，不是本文重点。

当 dp≥d/hd\_p\\ge d/h 时，给定一个MultiHead层，一定可以用一个 FixedMultiHead层表达它。原因很简单，MultiHead中Softmax内两个相乘的矩阵维度为 n×d/hn\\times d/h 和 d/h×nd/h\\times n ，换成两个更大的矩阵 n×dpn\\times d\_p 和 dp×nd\_p\\times n 相乘，自然是可以完全表达的。但是否有更强的表达能力呢？这个并不是很直观的结论，需要证明。论文给出定理2证明在一定条件下确实如此，这就表明FixedMultiHead Attention的优越性，即便在低秩瓶颈的情况下，FixedMultiHead依然有更强的表现力。

**（5）总结思考**

回到Decoder-only的思考，前面说明了Encoder存在低秩问题，限制表达能力。Decoder-only情况如何？苏剑林认为因为是单向注意力，有mask矩阵的存在，softmax函数后就变成了一个三角阵，且对角线都是正数，所以是满秩的，意味着有更强的表达能力，改成双向反而会变弱。

我觉得这里如果当作理论分析的话，严谨性有待商榷，原因有两点：

* 首先，根据我们前面对等式(3)的分析，满秩只是等式成立的必要条件，不一定是充分条件，也就是说满秩不能天然得出可以完全表达Attention矩阵 P\\mathbf P，甚至不一定就比低秩矩阵表达能力强，如果认为是充分条件或者一定比低秩矩阵强都需要给出证明。
* 其次，即便证明满秩确实可以完全表达Attention矩阵 P\\mathbf P，但这里Decoder-only的 P\\mathbf P 也是一个三角矩阵，是我们人为构造的单向注意力限制而成。如果改成Encoder双向注意力的话， P\\mathbf P 也将发生变化，变成了任意的矩阵 P′\\mathbf P' （只要符合非负性和列归一），满秩三角阵必然无法完全表达 P′\\mathbf P' 。梳理一下逻辑：Decoder-only满秩三角阵可以完全表达单向的 P\\mathbf P ，无法完全表达双向的 P′\\mathbf P'；Encoder低秩矩阵同样无法完全表达双向的 P′\\mathbf P'；不能推导出Decoder-only满秩三角阵和Encoder低秩矩阵谁强谁弱。

绕了一圈依然没有答案，除非真实的世界就是单向注意力的天下，即虽然我们对 P′\\mathbf P' 不做限制，但它在真实语料上的分布大概率就是三角阵，也就是当语料大到一定规模根本不需要双向注意力，不然的话我感觉低秩问题并不是根本原因，而且Encoder低秩问题并非无解。

### 4.4 实验对比最靠谱

理论分析没有满意结果，那不妨实际对比一下，正好看到知乎上其他几位答主提到了这篇2022年的论文\[8\]：What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?

这篇论文真是大手笔，在50亿参数1700亿tokens预训练的模型上排列组合做了各种对比实验，有钱任性。论文背景是目前公认大模型（准确说为大型预训练Transformer语言模型）具有零样本（zero-shot）泛化能力，但是大模型各种各样，从模型架构到预训练目标差异很大，以及有没做adaptation，有没有fine-tuning，都不相同。门派众多到底哪家强，不妨对所有因素做个排列组合，公平PK一把。

**（1）zero-sho介绍**

先说一下什么是zero-shot，意思就是我们在大规模语料上训练出一个大模型之后，直接就可以通杀一切，在下游任务上不需要做任何微调。是不是有点“学好数理化，走遍天下都不怕”的味道了？说明模型已经具备了全部知识，不需要专项培训就可以直接上手干活，这不就是梦寐以求的通用人工智能（AGI）能力吗？当然在具体提问上需要告诉模型任务是什么，这一点在GPT-3的论文\[9\]里给出很形象的示例：

![](https://proxy-prod.omnivore-image-cache.app/1172x514,swhDNhI5l9JgqqpwRKBkNaXO5O4vaVoVf6Em1kAxu45w/https://picx.zhimg.com/50/v2-3c0ae2a2bfb1c27e9b412a39d9d4d3f5_720w.jpg?source=2c26e567)

**（2）四个变量的排列组合**

然后论文\[8\]做的事就是如下图的排列组合，考虑模型架构、预训练目标、Adaptation、Multitask Fine-tuning四个变量，最后在两种评测数据上对比。我们分别介绍一下这四个变量都是何方神圣，有些内容跟前文重复，就不再详述。

![](https://proxy-prod.omnivore-image-cache.app/1938x624,s1l5fpJ6R6JNVlO7gLH30ScSMqsp-uLhdJRzuVcu-7Go/https://picx.zhimg.com/50/v2-f489df201afcc736cc64aa6781edb031_720w.jpg?source=2c26e567)

**（3）模型架构**

* Causal decoder-only，简称CD，就是我们前文一直说的Decoder-only架构，只有前向注意力，最适合训练标准的语言模型。
* Non-causal decoder-only，简称ND，就是我们前文说的Prefix language model，当前输入的前一部分（给定的条件信息，比如问句部分）为双向注意力，后一部分为单向注意力。
* Encoder-decoder，简称ED，原始Transformer的架构。

三种架构跟前文4.1部分介绍的三种架构本质上一回事，同样依靠不同的掩码矩阵实现，对比如下图：

![](https://proxy-prod.omnivore-image-cache.app/1886x664,sx9BzRiQhOugNEASCMlsWhJn6JvZxL07I0CUG62POkRs/https://picx.zhimg.com/50/v2-c69fdc12d2f5d1128861825c508f9364_720w.jpg?source=2c26e567)

**（4）预训练目标**

* full language modeling，简称FLM，就是训练标准的语言模型，完整一段话从头到尾基于上文预测下一个token，如GPT系列。跟CD模型架构是绝配。
* prefix language modeling ，简称PLM，一段话分成两截，前一截作为输入，预测后一截。跟ND、ED架构配合都很自然。
* masked language modeling，简称MLM，就是训练BERT时候用的完形填空，遮盖住文本中的一部分token，让模型通过上下文猜测遮盖部分的token。可以像Google T5模型一样将任务改造成text-to-text形式，即input和target都是一段文本，就可以适配ND和ED。如果将input和target拼接起来，就可以适配CD。

**（5）adaptation**

简单来说就是对大模型做改造。比如T5模型的预训练目标是MLM，不是一个很好的生成模型，那就继续预训练，不过目标改成PLM或FLM，注意这里跟微调不一样，再次预训练用的数据不是下游的任务数据，而是额外的无监督文本数据。反过来也一样，FLM预训练好的CD模型，通过切换掩码变为ND模型，再使用MLM目标改造，就可以用于完成完形填空任务。论文将前者称为Language modeling adaptation (LM-A) ，后者称为non-causal MLM adaptation (NC-A)。

**（6）Multitask finetuning**

多任务微调multitask finetuning (MT-F) ，照搬了T0模型\[10\]的做法，在一百多个已知任务的prompt数据上做微调，能极大提升预训练模型在未知任务上的zero-shot泛化能力。这其实属于Instruction Tuning做法，后续讲到的时候再细聊。

**（7）实验结论**

通过排列组合后，总结出三个发现：

* 发现1：如果大模型只做无监督预训练，则CD架构+FLM目标的zero-shot泛化能力最佳。这和当前大模型的主流做法一致。
* 发现2：无监督预训练+Multitask finetuning后，则ED架构+MLM目标的zero-shot泛化能力最佳。
* 发现3：鉴于发现1和发现2，加上Multitask finetuning后，ED架构zero-shot泛化最佳，但可能不适合某些CD架构更擅长的开放式生成任务。当我们想获得两个不同模型：一个是利用Multitask finetuning后的最佳zero-shot性能模型，一个是用于生成任务的高质量语言模型，则可以利用adaptation方法更加快速的生成，减少计算成本。方案是：从CD架构模型开始，使用FLM预训练，获得最佳语言模型；然后经过non-causal MLM adaptation，最后通过Multitask finetuning，获得最佳zero-shot多任务模型。一箭双雕，完美。

**（8）总结**

让我们回到GPT为什么从始至终选择Decoder-only架构这个问题，发现1可以作为一个很好的旁证，说明这条道路的选择是正确的。但这篇论文是22年的工作，GPT-3都出来两年了。作为“外人”，我们可能永远无法获悉OpenAI当初决策的原因，或许做了很多未公开的对比实验，或许单纯就是一种信仰，认定了bigness is betterness，只要模型足够大，选择decoder-only还是其他都不是问题，那何不选择一个和语言模型目标最契合、参数存储和推理计算效率最高的呢？

[编辑于 2023-05-11 08:47](https://www.zhihu.com/question/588325646/answer/3002928687)・IP 属地北京

​赞同 313​​4 条评论​收藏​喜欢

​

收起​

[![苏剑林](https://proxy-prod.omnivore-image-cache.app/0x0,sGVEyLOw6gFYFLlRT-BoTVv_GMn2Hrr4ebMXC_Y2jyGo/https://pic1.zhimg.com/v2-66f6fe0483a9e7ac39392659c121a0db_l.jpg?source=1def8aca)](https://www.zhihu.com/people/su-jian-lin-22)

[苏剑林](https://www.zhihu.com/people/su-jian-lin-22)

数学、python、数据挖掘、天文

谢邀[@CW不要無聊的風格](https://www.zhihu.com/people/cw613)

从理论视角强答一波，大部分结论源自个人实验，可能会有偏差。

原文链接：

[](https://link.zhihu.com/?target=https%3A//kexue.fm/archives/9529)

---

结论：

LLM之所以主要都用Decoder-only架构，除了训练效率和工程实现上的优势外，在理论上是因为Encoder的双向注意力会存在低秩问题，这可能会削弱模型表达能力，就生成任务而言，引入双向注意力并无实质好处。而Encoder-Decoder架构之所以能够在某些场景下表现更好，大概只是因为它多了一倍参数。所以，在同等参数量、同等推理成本下，Decoder-only架构就是最优选择了。

---

## **统一视角**

需要指出的是，笔者目前训练过的模型，最大也就是10亿级别的，所以从LLM的一般概念来看是没资格回答这个问题的，下面的内容只是笔者根据一些研究经验，从偏理论的角度强行回答一波。

我们知道，一般的NLP任务都是根据给定的输入来预测输出，完全无条件的随机生成是很少的，换句话说，任何NLP任务都可以分解为“输入”跟“输出”两部分，我们可以把处理“输入”的模型叫做Encoder，生成“输出”的模型叫做Decoder，那么所有任务都可以从“Encoder-Decoder”的视角来理解，而不同模型之间的差距在于Encoder、Decoder的注意力模式以及是否共享参数：

\\begin{array}{c|ccc} \\hline & \\text{Encoder注意力} & \\text{Decoder注意力} & \\text{是否共享参数} \\\\ \\hline \\text{GPT} & \\text{单向} & \\text{单向} & \\text{是} \\\\ \\text{UniLM} & \\text{双向} & \\text{单向} & \\text{是} \\\\ \\text{T5} & \\text{双向} & \\text{单向} & \\text{否} \\\\ \\hline \\end{array}\\\\

这里的GPT就是Decoder-only的代表作；**[UniLM](https://link.zhihu.com/?target=https%3A//kexue.fm/archives/6933)**则是跟GPT相似的Decoder架构，但它是混合的注意力模式；**[T5](https://link.zhihu.com/?target=https%3A//kexue.fm/archives/7867)**则是Encoder-Decoder架构的代表作，主要是Google比较感兴趣。

Google在**[T5](https://link.zhihu.com/?target=https%3A//arxiv.org/abs/1910.10683)**和**[UL2](https://link.zhihu.com/?target=https%3A//arxiv.org/abs/2205.05131)**两篇论文中做了较为充分的对比实验，结果均体现出了Encoder-Decoder架构相比于Decoder-only的优势，但由于从LLM的角度看这两篇论文的模型尺度都还不算大，以及多数的LLM确实都是在做Decoder-only的，所以这个优势能否延续到更大尺度的LLM以及这个优势本身的缘由，依然都还没有答案。

## **对比实验**

从上表可以看出，其实GPT跟UniLM相比才算是严格控制变量的，如果GPT直接跟T5相比，那实际上产生了两个变量：输入部分的注意力改为双向以及参数翻了一倍。而之所以会将它们三个一起对比，是因为它们的推理成本大致是相同的。

相比GPT，既然T5有两个变量，那么我们就无法确定刚才说的Encoder-Decoder架构的优势，究竟是输入部分改为双向注意力导致的，还是参数翻倍导致的。为此，笔者在10亿参数规模的模型上做了GPT和UniLM的对比实验，结果显示对于同样输入输出进行从零训练（Loss都是只对输出部分算，唯一的区别就是输入部分的注意力模式不同），UniLM相比GPT并无任何优势，甚至某些任务更差。

假设这个结论具有代表性，那么我们就可以初步得到结论：

> 输入部分的注意力改为双向不会带来收益，Encoder-Decoder架构的优势很可能只是源于参数翻倍。

换句话说，在同等参数量、同等推理成本下，Decoder-only架构很可能是最优选择。当然，要充分验证这个猜测，还需要补做一些实验，比如Encoder和Decoder依然不共享参数，但Encoder也改为单向注意力，或者改为下一节介绍的正反向混合注意力，然后再对比常规的Encoder-Decoder架构。但笔者的算力有限，这些实验就留给有兴趣的读者了。

## **低秩问题**

为什么“输入部分的注意力改为双向不会带来收益”呢？明明输入部分不需要考虑自回归生成，直觉上应该完整的注意力矩阵更好呀？笔者猜测，这很可能是因为双向注意力的低秩问题带来的效果下降。

众所周知，Attention矩阵一般是由一个低秩分解的矩阵加softmax而来，具体来说是一个n\\times d的矩阵与d\\times n的矩阵相乘后再加softmax（n\\gg d），这种形式的Attention的矩阵因为低秩问题而带来表达能力的下降，具体分析可以参考**[《Attention is Not All You Need: Pure Attention Loses Rank Doubly Exponentially with Depth》](https://link.zhihu.com/?target=https%3A//arxiv.org/abs/2103.03404)**。而Decoder-only架构的Attention矩阵是一个下三角阵，注意三角阵的行列式等于它对角线元素之积，由于softmax的存在，对角线必然都是正数，所以它的行列式必然是正数，即Decoder-only架构的Attention矩阵一定是满秩的！满秩意味着理论上有更强的表达能力，也就是说，Decoder-only架构的Attention矩阵在理论上具有更强的表达能力，改为双向注意力反而会变得不足。

还有个间接支持这一观点的现象，那就是**[线性Attention](https://link.zhihu.com/?target=https%3A//kexue.fm/archives/7546)**在语言模型任务上（单向注意力）与标准Attention的差距，小于它在MLM任务上（双向注意力）与标准Attention的差距，也就是说，线性Attention在双向注意力任务上的效果相对更差。这是因为线性Attention在做语言模型任务时，它的Attention矩阵跟标准Attention一样都是满秩的下三角阵；在做MLM任务时，线性Attention矩阵的秩比标准Attention矩阵更低（线性Attention是n\\times d的矩阵与d\\times n的矩阵相乘，秩一定不超过d，标准Attention是n\\times d的矩阵与d\\times n的矩阵相乘后加softmax，softmax会有一定的升秩作用，参考**[《Transformer升级之路：3、从Performer到线性Attention》](https://link.zhihu.com/?target=https%3A//kexue.fm/archives/8338)**中的“低秩问题”一节及评论区）。

反过来，这个结论能不能用来改进像BERT这样的双向注意力模型呢？思路并不难想，比如在Multi-Head Attention中，一半Head的Attention矩阵截断为下三角阵（正向注意力），另一半Head的Attention矩阵截断为上三角阵（反向注意力）；又或者说奇数层的Attention矩阵截断为下三角阵（正向注意力），偶数层的Attention矩阵截断为上三角阵（反向注意力）。这两种设计都可以既保持模型整体交互的双向性（而不是像GPT一样，前一个token无法跟后一个token交互），又融合单向注意力的满秩优点。

笔者也简单做了对比实验，发现正反向混合的注意力在MLM任务上是比像BERT这样的全双向注意力模型效果稍微要好点的： 

![](https://proxy-prod.omnivore-image-cache.app/1362x0,s_Zp55JLoI_QzdnTOnCURG-kTUovH1du3rl5BMG_psNw/https://picx.zhimg.com/50/v2-3dc98698c436cf41b1f092038ee281f0_720w.jpg?source=1def8aca)

好消息是看得出略有优势，间接支持了前面的猜测；坏消息是这实验的只是一个base版本（1亿参数）的模型，更大模型的效果尚未清楚。

展开阅读全文​

​赞同 1456​​33 条评论​收藏​喜欢

​

[![王睿](https://proxy-prod.omnivore-image-cache.app/0x0,ssWalwTDAv6SeRz0bM0A71lpmB177hk3-rSVCx2cKWgU/https://pica.zhimg.com/v2-7165aaf1b55ba4d5d9cda7dbe6bdb70b_l.jpg?source=1def8aca)](https://www.zhihu.com/people/wang-rui-91-26)

[王睿](https://www.zhihu.com/people/wang-rui-91-26)

华盛顿大学计算机科学与工程博士新生

先问是不是：GLM130B和UPalm-540B不是decoder-only，但是确实大家都在做decoder-only

三个原因

1. 工程：模型10B的时候还好，各种骚操作都能上，scale效果也很好，但是再大以后，很多东西的scalability都会出问题。举个例子，如果你不是Google的话，基本上需要pipeline parallelism，如果你看过megatron的codebase，你就能看到t5的模型是不支持pipeline的，你自己写的话就很麻烦。而且现在所有的非Google系的都在用Megatron。现在再加上flashattention，t5的relative positional bias也有问题了，除非你花很大力气去解决，或者用rope。同样的原因现在训练GLM也不是throughput最优的，因为里面的attention mask不是causal的。总之scale一大，任何一个小问题都会被放大，非常的困难非常的吃工程。这个bigscience的人在reddit的ama里面提过。
2. zero-shot的表现：有篇paper专门讲这个，decoder-only的模型zero-shot的performance是最强的，而zero-shot是最秀的一个feature，不要这个还能干啥，这个也是bloom的paper里面提过的
3. 没有对应的scaling law：GPT-3当时敢scale到175B是因为之前有Kaplan做了scaling laws，大家知道如何scale能budget-efficient，再加上后面chinchilla，也对scaling law这件事情有了加强。相比之下其他架构的nlp模型没有scaling law，也没有人做过。

我自己是认为bi-directional的肯定是更强的，但是没人做啊，而且decoder-only参数上去了也够了。话又说回来，AlphaCode就是enc-dec，而且明说了enc很重要。

另外现在就只说gpt-like和t5-like的模型了，bert的模型因为做的东西是这俩的子集，确实没太多人用了，类似说法源于ul2。

[编辑于 2023-03-09 08:27](https://www.zhihu.com/question/588325646/answer/2929047413)

​赞同 579​​36 条评论​收藏​喜欢

​

---

## Highlights

> GPT为什么从始至终选择Decoder-only架构？GPT-1，包括之后的2，3系列全都如此。我不知道答案，ChatGPT给出的回答也很泛泛，并不能说服我。 [⤴️](https://omnivore.app/me/99-82-llm-decoder-only-18bc2284d67#6a3d6456-a508-4de9-85e1-ab2aa27eab85)  ^6a3d6456

