---
id: 948a45b0-9e29-4a5e-ab48-213eb789a05c
title: |
  pip安装包成功后无法import_显示success installed却找无法import-CSDN博客
author: |
  成就一亿技术人!
date_saved: 2024-10-16 11:29:46
date_published: 2024-03-18 20:00:00
draft: true
---

# pip安装包成功后无法import_显示success installed却找无法import-CSDN博客
#Omnivore

[Read on Omnivore](https://omnivore.app/me/pip-import-success-installed-import-csdn-19295f30b25)

[Read Original](https://blog.csdn.net/longshaonihaoa/article/details/120672061)

date_saved: 2024-10-16 11:29:46

date_published: 2024-03-18 20:00:00

--- 

# Full Content: 

## pip安装包成功后无法import

![](https://proxy-prod.omnivore-image-cache.app/0x0,sb9FtdCb_T4b1O697eqoXY9k3NVVgRsw8SlTyVuCA3pc/https://csdnimg.cn/release/blogv2/dist/pc/img/original.png)

 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。

**一般是安装的地址和python所在地址不同导致的。**

说一下我遇到的几种情况，有些我也搞不懂原因，希望抛砖引玉，各位可以一起分析。

#### 1、使用了sudo pip

这是我刚遇到的，我zz的把[虚拟环境](https://so.csdn.net/so/search?q=%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83&spm=1001.2101.3001.7020)放在/usr/bin 下，导致安装需要添加sudo，但是sudo pip 默认安装在系统自带的python下。

举个例子，假如我虚拟环境是python3.6，系统自带的是python2.7。即使此时已经进入了虚拟环境，我使用sudo python 依旧是python2.7

#### 2、[conda](https://so.csdn.net/so/search?q=conda&spm=1001.2101.3001.7020)进入其他python

这种我不懂为什么，有时候conda进入虚拟环境不是自己创建虚拟环境时创建的python版本。这种情况下我只能通过 source deactivate 退出虚拟环境，然后再进入。通过python确认进入了正确的环境。

#### 3、python -m pip install XXX

当时装turboJPEG很奇怪啊，老是不在conda环境下安装，后来使用上述命令才安装成功。

python -m 用来指定当前编译环境，避免调用错误。

比如我想在conda环境下安装，此时python确定是conda的python，使用python -m pip install XXX就会安装在conda的虚拟环境中。

#### 4、pip 和pip3 不同

这种没好好总结，有时候相同，有时候又感觉不同

文章知识点与官方知识档案匹配，可进一步学习相关知识

---

