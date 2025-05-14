---
id: 7a2c76ba-ca4a-11ee-9074-bb8fb0b33c18
title: |
  用 Notion + Excel 来做新年预算 - 少数派
author: |
  ErMuss
tags:
  - RSS
date_saved: 2024-02-13 01:57:35
date_published: 2024-02-13 01:57:35
draft: true
---

# 用 Notion + Excel 来做新年预算 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/notion-excel-18da198f31f)

[Read Original](https://sspai.com/post/86327)

date_saved: 2024-02-13 01:57:35

date_published: 2024-02-13 01:57:35

--- 

# Full Content: 

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。   
文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

又到了年末，无论有没有年终奖、有没有调薪涨薪，但总该来看一看过去的这一年个人预算和实际花销，以及制定未来一年的个人预算（看看明年还能剁几次手，说走就走的旅程还能进行几次，裸辞还能撑几个月……）。记账我用的是 MoneyWiz，用法和记账的方法论已经有很多了，站内也有很多大佬做了很多的经验分享和教程，我这边就不赘述了。主要来讲用 Notion 和 Excel 来做年终的预算总结。

毕竟只是个人，所以主要从两个维度来看预算：

1. 收入端：过去一年的总收入情况，税收、社保等支出情况，以及结合年末自身收入的变化（调薪、年终奖等）来预测未来一年的预期收入；
2. 支出端：过去一年的总预算科目计划与实际完成情况，并对其中的异常情况作进一步的评估，并依次来做好未来一年的总预算。

## 收入端

收入端就比较好统计，如果是自由职业者或者是项目制的小伙伴，就按照自己平时的个人所得以及对未来一年行业的变化来做收入预估，可以稍微谨慎一点以防未来收入出现较大的变动影响到预算的执行。

我这边就给一个稳定拿工资，按照标准情况来缴纳社保和公积金的上海打工人小王来举例（假设小王 2021 年全年工资 20000 / 月，2022 年25000 / 月，2023 年 30000 / 月，2024 年涨薪到 35000 / 月，以下所有开支数字均是随机函数生成）

一般来说，在上海社保基数调整时间统一改到了每年的七月份，所以从每年的七月份开始一般公司和个人所交纳的社保和公积金的基数就会发生变化，一般来说都会按照上一年的平均工资来计算新的公积金基数。

所以我按照标准的规则，以及目前个人所得税的税档来做了以下 Excel 表格（如有需要的小伙伴，可以在文章末尾的链接自取）。如下可以看到：

如果小伙伴们想要自己简单的测算一下，可以更改左侧表中的税前工资、社保、公积金以及专项扣除四个栏目，就可以自动计算出税后薪金以及全年的收入。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sA8eU_95_rzIps0zl2Grde1n3qBzYD6nEKBvkWir8VH4/https://cdn.sspai.com/2024/02/05/57d3d7b82e858f41980f19c2722b0a37.png)

## 支出端

支出端统计以及总结的方法有很多种，像我的话是平时用 Moneywiz 集合它的预算系统来进行记账，这样每个月末以及每年末的时候我就可以很方便的通过 Moneywiz 的报表来看过去的一年的预算、支出情况，以及重点的科目的支出情况，最终汇总到 Notion。 如果不用 MoneyWiz 的小伙伴甚至是不记账的小伙伴也都可以用支付宝、微信的月度统计来做。

有些小伙伴可能会说，MoneyWiz 不都有报表和 review 了吗，为什么还要重复造轮子。因为是 Notion 的深度用户，所以想要在 Notion 总结以及记录月度的数据，以及可以和其他的计划综合在一起比较好和直观的管理个人的财务。

目前 Notion 关于预算管理的主要有两个核心的 Database： Budget Log 和 Bonus Log。

### Budget Log

这个database的主要功能就是记录月度的预算，以及月度的收支情况。如下所示（所有支出数据都是excel随机生成）：

* 我的个人预算一般分成 Daily，Food，Housing 和 Shopping，所以会在第一行有年初做的整体预算 `2023 Year Budget`，然后每个月根据实际的支出情况填上之后，就可以在表格最下方看到实时的预算统计，剩下多少预算等等。也可以在每一行的Balance中看到月度现金流的盈亏情况
* `Shopping Bunus` 是一个 Notion 的 Rollup，连接到另外一个 Bonus Log 的 Database，用来在月度的现金流中统计入额外的奖金、补助、报销等等。具体设置见后文
* `2023 Year Budget` 点开来就可以作为一个单独的 Page，每一年初的预算总结和新一年的预算配置，里面可以回顾过去一年为什么有些预算超支了，明年要如何调整等等

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjMGNkIMeN2-aKr9rBg6gUQ2rND0Dp_pG--HsoX51lhY/https://cdn.sspai.com/2024/02/05/281702de4e8d9c4e727f2a7f9a3bcb1e.png)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sLT0aJUC1FIo5givbNSYN4awmeBpF0vAgKVt68gqsIss/https://cdn.sspai.com/2024/02/05/fc5b7a793d8092d9248b8ef62f71cb7f.png)

### Bonus Log

这个 Database 就是用来记录额外的收入，包括年终奖、奖金、补助、报销等等。具体的类目可以在 Name 栏中填写，然后在 `Yearly Budget Log` 的 relation 中选择具体发生的月份，这样在上一个 Budget Log 的 database 中就会自动统计了

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2Ek8Ug6N1rQmqMprJLy_qBiDDHGhia5XYYYWS0byzQY/https://cdn.sspai.com/2024/02/05/67aa3a1e6c3da2a1f3db078218e9466c.png)

### 在制定年度的预算的时候

在后面附上的Excel中，也做了类似的模板，可以帮助进一步直观的看最终的总结（如下）。当然目前 Notion 和 Excel 的表格并不是联动的，但想进一步的同学们可以通过 Google Sheet 和 Notion 来进一步数据联动。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sEqkx7NhZnUk4h-aDjp-jKpTzfDtclZD2MqxEb4-g-hE/https://cdn.sspai.com/2024/02/05/c3433e59fda6f6732fe5e90320113b09.png)

## 写在最后

年度预算的目的其实是为了更好的知道自己过去一年赚了多少钱，花了多少钱，花在那些科目上，并且根据个人情况更好的为新的一年的计划留出预算和做好准备。

### Link

* **Excel模版**： [https://pan.baidu.com/s/1EQwf2mdqjgCTsWIRBySKEg?pwd=2666](https://sspai.com/link?target=https%3A%2F%2Fpan.baidu.com%2Fs%2F1EQwf2mdqjgCTsWIRBySKEg%3Fpwd%3D2666)，提取码: 2666
* **Notion模版**： [https://www.notion.so/Budget-Review-Example-2e05983d28db41b088cee5a71fb3c8b3?pvs=4](https://sspai.com/link?target=https%3A%2F%2Fwww.notion.so%2FBudget-Review-Example-2e05983d28db41b088cee5a71fb3c8b3%3Fpvs%3D4)

\> 关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现🚀

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

