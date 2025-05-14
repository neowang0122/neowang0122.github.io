---
id: b7f60e1a-3e5f-4f33-ae5f-69f9a8c732c7
title: |
  Windows+Ubuntu20.04双系统安装教程 - 知乎
author: |
  随风少一点包容
date_saved: 2024-02-12 13:13:34
date_published: 2021-04-11 03:50:00
draft: true
---

# Windows+Ubuntu20.04双系统安装教程 - 知乎
#Omnivore

[Read on Omnivore](https://omnivore.app/me/windows-ubuntu-20-04-18d9e863f45)

[Read Original](https://zhuanlan.zhihu.com/p/363640824)

date_saved: 2024-02-12 13:13:34

date_published: 2021-04-11 03:50:00

--- 

# Full Content: 

由于需要在Linux下写代码，之前虚拟机安装过centos，但运行速度不理想，使用颇为受限，故安装双系统，这篇教程没有繁琐赘述，重要之处以及我所遇到的一些BUG都会详细说明。

之前使用centos，但是centos8.x已经不再维护，综合其他一些原因选择Ubuntu，而且这个发行版本会维护5年（具体到哪一年忘记了），很多需要用到的软件也会一直支持。

## 2\. 我的电脑配置

* 惠普战99 工作站
* Windows10 家庭版 64
* 16GRAM
* 固态硬盘256，2T机械

## 3\. 安装方式

上面说到了，我的固态硬盘其实所剩无几，于是选择安装在机械硬盘（需要几百兆SSD容量），我压缩了500G的机械硬盘空间来给·Ubuntu，有条件的全部在分在固态硬盘就行。

**另外重要两点**

* Ubuntu的/SWAP（虚拟内存）分区最好在固态硬盘这样读写速度会快一点（建议），具体大小根据RAM决定，后面会说明。
* Ubuntu的/boot分区要分在Windows系统盘，这样才能Ubuntu启动下读取到Windows，在开机的时候可以选择加载哪个系统。

## 一、制作启动硬盘

## 1\. 下载Ubuntu20.04 ISO

[官网入口](https://link.zhihu.com/?target=https%3A//ubuntu.com/%23download)下载LTS版本，我是直接下载的，搭配迅雷下载器还是很快的几分钟吧，如果速度很慢可以从华为或者[清华大学镜像网站](https://link.zhihu.com/?target=https%3A//mirrors.tuna.tsinghua.edu.cn/%23)下载。

## 2.下载 UltraISO并制作启动U盘

[UltraISO官网入口](https://link.zhihu.com/?target=https%3A//cn.ultraiso.net/xiazai.html)点免费下载试用，安装好后打开点击免费试用。

**准备一个4G以上大小的U盘，制作过程中会格式化U盘，记得备份文件**

选择好下载的UbuntuISO文件打开，点击【启动】→【写入硬盘映像】如图：

![](https://proxy-prod.omnivore-image-cache.app/961x712,smx7dfRo7f1HBZWJ9Tp_-wxMuij3NiDUr4dLguZu-Mdc/https://pic1.zhimg.com/v2-a7582ef91bab7b459ada9b1ad7ac76a0_b.jpg)

写入方式选择【USB-HDD+】 

![](https://proxy-prod.omnivore-image-cache.app/680x630,s2blCXQrtO_FSj7cSdKpmU9IS37lRy-UWQWEpZsCDKHk/https://pic3.zhimg.com/v2-998a12e393050e4b79e082d5872efede_b.jpg)

点击【写入】会弹出格式化U盘提示点击确定等待写入完成即可。

## 二、为Ubuntu分配磁盘空间

我们需要在固态硬盘（也就是系统盘）分出300M-500M的空间用于Ubuntu的/boot分区来作为启动引导文件（否则无法启动Ubuntu，具体原因百度），另外如果固态硬盘充足可以预留处/SWAP分区的空间。

swap,电脑内存8G大小就分配内存两倍的空间,8G以上跟内存一样大或者稍大1、2个G,交换空间,虚拟内存，这个建议分固态硬盘的区，不然会影响运行速度，机械硬盘也是可以用的.

右键点击【此电脑】，选择【管理】→【磁盘管理】，选择想压缩的盘右键单击可以看到压缩卷，点进去就能看到可压缩大小，单位是MB，我在机械硬盘分了500G大小，固态硬盘分了20G大小。

![](https://proxy-prod.omnivore-image-cache.app/1028x739,sE6IWj4Cij_Eo1KgUMvK5Wyj7dGXB_4zvB7zHiTIZJLs/https://pic1.zhimg.com/v2-a7b3b17c831d141d7c371e2bf69688cc_b.jpg)

![](https://proxy-prod.omnivore-image-cache.app/1232x885,sWvU9bkgEBnJ4tD-jXmNnFJmruy28_p1-F24lzyk_zDc/https://pic1.zhimg.com/v2-9d643a569316c7e7ceba52c14146b880_b.jpg)

这是我压缩好后的样子：

![](https://proxy-prod.omnivore-image-cache.app/1232x885,siHGLw0al-Hta-b6ehoiIE1NC79RvOANkakqWYmAngqM/https://pic3.zhimg.com/v2-81eb00993ff47329a64f190f4cd684ce_b.jpg)

**由于电脑存储文件并非连续的，比如前面20G使用了，之间空了10G，后面的又占用了，那么这10G也就无法压缩。所以会出现可压缩空间远远小于剩余空间**

**解决方法参考：**

[进行磁盘分区时，“可用压缩空间”远小于真实的空间大小时的设置方法](https://link.zhihu.com/?target=https%3A//blog.csdn.net/yturhd87b%5Fgdvy/article/details/87933467%3Futm%5Fmedium%3Ddistribute.pc%5Frelevant.none-task-blog-2%257Edefault%257EBlogCommendFromMachineLearnPai2%257Edefault-4.control%26dist%5Frequest%5Fid%3D%26depth%5F1-utm%5Fsource%3Ddistribute.pc%5Frelevant.none-task-blog-2%257Edefault%257EBlogCommendFromMachineLearnPai2%257Edefault-4.control)

[Windows系统压缩卷时可压缩空间远小于实际剩余空间解决方法](https://link.zhihu.com/?target=https%3A//blog.csdn.net/Rained%5F99/article/details/54023914%3Fops%5Frequest%5Fmisc%3D%25257B%252522request%25255Fid%252522%25253A%252522161781081216780264038570%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D%26request%5Fid%3D161781081216780264038570%26biz%5Fid%3D0%26utm%5Fmedium%3Ddistribute.pc%5Fsearch%5Fresult.none-task-blog-2~all~baidu%5Flanding%5Fv2~default-1-54023914.first%5Frank%5Fv2%5Fpc%5Frank%5Fv29%26utm%5Fterm%3Dc%25E7%259B%2598%25E5%258E%258B%25E7%25BC%25A9%25E5%258D%25B7%25E5%258E%258B%25E7%25BC%25A9%25E7%25A9%25BA%25E9%2597%25B4%25E9%259D%259E%25E5%25B8%25B8%25E5%25B0%258F%25E6%2580%258E%25E4%25B9%2588%25E5%258A%259E%26spm%3D1018.2226.3001.4187)

## 三、安装Ubuntu

## 1\. 查看电脑BIOS模式

WIN+R输入msinfo32，回车确认

![](https://proxy-prod.omnivore-image-cache.app/1035x705,suhqKpwaHsGfFpy3Q6vSiLdXoIT9_YdBuBXiHhVCRbYI/https://pic1.zhimg.com/v2-7f496b1b55827200e22c656c2e6c2ebc_b.jpg)

**BIOS模式，传统代表MBR，另外就是UEFI，Ubuntu是UFFI模式**

## 2\. BiOS安装准备

插入我们制作好的启动硬盘，开机按F10进入BiOS模式（不同的电脑进入方式可能不同，另外建议把英文改为中文，方法自行百度）

不会操作先看说明，我的是按F1，选择【系统设置】→【启动选项】

![](https://proxy-prod.omnivore-image-cache.app/1207x745,skn2QxEkIUsFBI28fFDfKZdq74UO5v8yAmHwu_R6vcRk/https://pic1.zhimg.com/v2-9cf9f2a77e9d27444360e3eb09840230_b.jpg)

将【U盘/USB硬盘】更改为首选项，我的电脑是按F5/F6移动，F10保存。

保存退出后，电脑会自动重启进入Ubuntu的安装。

## 3\. 开始安装

①. 将语言改为中文或者英文，点击安装Ubuntu

![](https://proxy-prod.omnivore-image-cache.app/1109x754,sZKK7SzFpOhX3e92JJugEXnuPkt5dgWMCNYSSFMjge8I/https://pic3.zhimg.com/v2-9da46c5c372bea8efcaa0526502d9572_b.jpg)

②. 键盘布局选择【Chinese】，后面的连接网络我就跳过了，如果要选择【正常安装】要联网。

![](https://proxy-prod.omnivore-image-cache.app/1003x713,sv71JxOKt7edPjd3emOJu9iWLviJxl0PNgDOeiZsAP-I/https://pic2.zhimg.com/v2-bd7878b3d797ae7e13bb21378e5140d5_b.jpg)

③. 由于我准备的硬盘大小充足，所以我选择【正常安装】，也可以选择【最小安装】不影响使用。其他的在图中。

![](https://proxy-prod.omnivore-image-cache.app/1106x757,sRfB1GTd7Mo_Y7T2yddniU-49-QAL3Ufi7aOz0SR-C1I/https://pic3.zhimg.com/v2-6e985f05038a1659dba87319f00ce9ea_b.jpg)

④. 安装类型选择其他选择其他选项。

![](https://proxy-prod.omnivore-image-cache.app/1138x801,sJCgm8du0-sryyAsNqHBsgkyT3b1LV6gHpw7eS0wrWWs/https://pic4.zhimg.com/v2-80415169d39eafc47d7bd734c4280daf_b.jpg)

**⑤. 创建分区，这是最重要的一步，我的分区如下：**

**\- 注意：先分逻辑区，再分主分区**

* 1./swap交换分区（虚拟内存），逻辑分区，我分了16GB（8G及以下RAM选择两倍大小，以上跟RAM大小一样就行）
* 2./boot分区 ，逻辑分区，默认ext4。 我分了将近300M，放置Ubuntu的启动引导文件，
* 3./ 根分区（root分区），逻辑分区，我选择100G就可以，默认ext4，
* 4./home分区，主分区，默认ext4，我选择400G，用户的所有文件都在这里。

**说明：交换分区和/boot分区容量我都是在c盘压缩的，/和/home分区总共500G是在机械硬盘分的，另外根据自己的实际情况合理分配就行了，按照我的比例。**

不清楚Linux分区的自行百度或者查看这篇文章：[Linux下硬盘分区：根分区（/）交换分区（/swap）和/boot分区](https://zhuanlan.zhihu.com/p/122335496)

分区按照我上面的说明来就行，我就不一一展示了，位置选择压缩好的空闲分区（或者用分区助手创建的分区，看大小和使用量就知道，创建的分区不是空闲分区，不能点加号，更改为可用就行），点左下角加号创建。

![](https://proxy-prod.omnivore-image-cache.app/1103x756,sORHyLqVNddX-8ZSrAEf_QYqA_363n3ZHKJMx3UM7UlE/https://pic3.zhimg.com/v2-bd361fb1ce1e6c8f1abafbb146c3dec2_b.jpg)

**安装启动引导器的设备选择/boot分区那个路径，然后点击【现在安装】**

![](https://proxy-prod.omnivore-image-cache.app/1124x806,s0mk7RSfAt6QXWjBxRGoj8Gv3q620Qy-se7Eu5r9rF6Y/https://pic4.zhimg.com/v2-c74b8274a6c903632a9619ab7144090f_b.jpg)

⑥. 开始安装，我只用了20分钟不到就安装好了，没有几个小时，一次成功。

![](https://proxy-prod.omnivore-image-cache.app/1039x647,s9FjmR8o1rMNKqoulI-H1rrU0WfPpADNsiQaMqt8yWpI/https://pic2.zhimg.com/v2-8fdb63519abad7388c511a6cf07511dd_b.jpg)

## 4\. 更改BIOS启动选项

安装好Ubuntu之后，**拔下U盘（不拔等会开机还会进入Ubuntu安装）**，右上角关机，彻底关机后开机F10进入BIOS，跟之前的步骤一样，**选择【系统设置】→【启动选项】，将【操作系统的启动管理员】上移**

![](https://proxy-prod.omnivore-image-cache.app/1184x793,sLEpyziV2EIjo1jg95PampfeEKAyggCjnEc_oXm5bOcU/https://pic1.zhimg.com/v2-9a01398f2c9ffbb690b97a0243d9fec4_b.jpg)

按ENTER将Ubuntu启动移到第一位，保存退出，开机进入启动界面就可以看到选项了，第一位是Ubuntu，第三个是Windows.

![](https://proxy-prod.omnivore-image-cache.app/1195x772,sG_fbvxqLjm8EMhQc2omT4tA2x8w77_HGqLJqYqD4ie8/https://pic1.zhimg.com/v2-590a928c37fe067ae3cfd4e46130d694_b.jpg)

![](https://proxy-prod.omnivore-image-cache.app/1132x832,sm8YS8t0pjd5LGZJdcBB_GKbs_F9nwZX_LyVCBpqvdDk/https://pic3.zhimg.com/v2-c75430f0a3deaa05ba46b6a81bb7d95e_b.jpg)

## 四. 安装完成

至此Ubuntu安装全部完成，接下来就可以愉快的使用Linux了，遇到不会的建议先查看官方文档。如果教程有什么不足之处欢迎指正评论。学无止境，希望这篇文章对你有所帮助！

---

