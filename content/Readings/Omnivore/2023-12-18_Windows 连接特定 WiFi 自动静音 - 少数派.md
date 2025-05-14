---
id: 587bc3cc-9e49-11ee-9b75-4391406f4942
title: |
  Windows 连接特定 WiFi 自动静音 - 少数派
author: |
  艾佛利山的杨博士
date_saved: 2023-12-18 22:32:19
date_published: 2023-12-18 22:32:19
draft: true
---

# Windows 连接特定 WiFi 自动静音 - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/windows-wi-fi-18c8135c8b8)

[Read Original](https://sspai.com/post/84576)

date_saved: 2023-12-18 22:32:19

date_published: 2023-12-18 22:32:19

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSNuZLxfp8o7RI3lDkqsOqoo2JVByWR4hKLiM8IJLEQQ/https://cdn.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png)

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

不知道你有没有这样的尴尬，笔记本周末带回家，周一拿到办公室，打开 PotPlayer 刚想摸摸鱼，小电影的声音就自动播放出来😂，利用 Windows 计划任务和 NirCmd 命令行小程序帮你连接办公室 WiFi 时自动静音，不再让悲剧重演！

参考链接：[How to run a program when connecting to a specific network in Windows 7 - superuser](https://sspai.com/link?target=https%3A%2F%2Fsuperuser.com%2Fquestions%2F92414%2Fhow-to-run-a-program-when-connecting-to-a-specific-network-in-windows-7)

## 工具准备：NirCmd

官网与命令说明：[NirCmd - Windows command line tool (nirsoft.net)](https://sspai.com/link?target=https%3A%2F%2Fwww.nirsoft.net%2Futils%2Fnircmd.html)

NirCmd 是一个免费的命令行小工具，可以在不使用 UI 的条件下进行一些 Windows 系统控制，如读写注册表、重启系统、创建快捷方式、更改显示设置、关闭显示器等等等等，感兴趣的具体可以看官网介绍。

结合任务计划程序，就可以完成不少自动化功能，可以说是 Windows 系统下的简易 Tasker 了。

## 任务计划程序

任务栏搜索：**任务计划。**

![](https://proxy-prod.omnivore-image-cache.app/0x0,saPAAcycCoZx7Jd-2flRBerKiGroQVvsDlz5Orv3DeYo/https://cdn.sspai.com/2023/11/23/1b5c51b34e967b9a1442d5aa5cb30844.png)

右侧点击：**创建任务。**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sdc1Cum-pxn3ujIPxBikp8hVKKgSjkk9zvvQQmteT_n4/https://cdn.sspai.com/2023/11/23/6af513b5aa8402814591d1e709039c93.png)

起个名字。

![](https://proxy-prod.omnivore-image-cache.app/0x0,svkkL8tJCcKRVK7GcJDZ2Xmz3JbzWzbe8AhRApF94PhQ/https://cdn.sspai.com/2023/11/23/98e1a07ea16fe00fac5c0b17ee2be89c.png)

切换到**触发器**选项卡，新建-**发生事件时**：

![](https://proxy-prod.omnivore-image-cache.app/0x0,ss1VVL0EMIwR0r-Rucpfka3zwDlvbTRImJ3bhD_VMltU/https://cdn.sspai.com/2023/11/23/9d11c8f2b86cb334fce0a567737ced7e.png)

选择自定义单选框，单击**新建时间筛选器。**

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3od7SZq5q2RrnZSvgMX9u_py-IEcECwG8JtI3cgWomE/https://cdn.sspai.com/2023/11/23/c5270e2fe5568807718cd551667f7d0e.png)

在**筛选器**选项卡下，选择事件级别：信息——这里实际是利用 Windows 事件日志来触发自动化，感兴趣的可以在任务栏搜索事件查看器试试，也可以利用其他事件触发自动化。

事件日志下拉菜单依次选择：**应用程序和服务日志 - Microsoft - Windows - WLAN - AutoConfig/Operational**；

事件来源选择 **WLAN - AutoConfig**；

<所有事件-ID> 改为 **8001**；

任务类别选择 **AcmConnection**。

![](https://proxy-prod.omnivore-image-cache.app/0x0,synM_x5JatiMcjaepeSCBFttQY0zO7TmtNwDppFYuCLw/https://cdn.sspai.com/2023/11/23/f6547fc96c0dcd09e7f9821f2a9fdf2a.png)

如果就在这里打住的话，那么连接任何 WiFi 都会触发后面的任务，因此还需要根据 SSID 做更改。

切换到 XML 选项卡，再对应查看 **Windows 事件查看器**，左侧选择 **应用程序和服务日志 - Microsoft - Windows - WLAN - AutoConfig/Operational**，找到右侧 **8001** 对应的日志。 通过对比可以看出，刚才的选项对应了日志 XML 文件记录的条目信息，因此只要将 SSID 条目添加进去，就可以在连接指定 WiFi 时再触发对应任务了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,socLsLAVcJOwGNu4zc3sg0eWSEvryRsj_4t6otwRftZk/https://cdn.sspai.com/2023/11/23/9c125857607ec0c98af54a19f7d5fe77.png)

点选**手动编辑查询**，只要在 `</Select> `前添加`and *[EventData[Data[@Name='SSID']='你的WiFi ssid']]` 即可，**最终 XML 如下：**

```pgsql
<QueryList>
 <Query Id="0" Path="Microsoft-Windows-WLAN-AutoConfig/Operational">
   <Select Path="Microsoft-Windows-WLAN-AutoConfig/Operational">*[System[Provider[@Name='Microsoft-Windows-WLAN-AutoConfig'] and Task = 24010 and (EventID=8001)]]and *[EventData[Data[@Name='SSID']='你的WiFi ssid']] </Select>
 </Query>
</QueryList>
```

## 成果演示

最后，确定保存，返回到操作选项卡，新建，选择**启动程序**，浏览到 **NirCmd** 存放位置，添加**参数**填入 **mutesysvolume 1**，确定保存，输入密码，大功告成。 

![](https://proxy-prod.omnivore-image-cache.app/0x0,so8oWifUmvivn6kTKwFMrUACI46NYjSH-QV7Najeu2ZI/https://cdn.sspai.com/2023/11/23/c6f53f99299bc6bee6ce4ce6f3e6c422.gif)

利用同样的方法，你也可以选择连接家庭 WiFi 或断开公司 WiFi 时，自动恢复音量等等，举一反三，这里就不详细说明啦。 

\> 关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，找到数字时代更好的生活方式 🎊

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

---

