---
id: d89fe90b-e405-46aa-b64b-00b72a66c8a3
title: |
  如何通过SSH远程连接到Windows系统指南_windows使用ssh连接远程服务器-CSDN博客
author: |
  成就一亿技术人!
date_saved: 2024-02-12 13:33:00
date_published: 2023-08-20 20:00:00
draft: true
---

# 如何通过SSH远程连接到Windows系统指南_windows使用ssh连接远程服务器-CSDN博客
#Omnivore

[Read on Omnivore](https://omnivore.app/me/ssh-windows-windows-ssh-csdn-18d9e98082a)

[Read Original](https://blog.csdn.net/weixin_72910567/article/details/132414264)

date_saved: 2024-02-12 13:33:00

date_published: 2023-08-20 20:00:00

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/0x0,sb9FtdCb_T4b1O697eqoXY9k3NVVgRsw8SlTyVuCA3pc/https://csdnimg.cn/release/blogv2/dist/pc/img/original.png)

 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。

## 介绍

 SSH (安全外壳协议) 是一个加密的网络协议，用于在不安全的网络上登录到远程计算机。尽管SSH最初是为Unix系统设计的，但现在Windows系统也支持SSH服务。在这篇文章中，我们将讨论如何在Windows系统上设置SSH服务器，并从另一台计算机上使用SSH客户端连接到它。

## 步骤1: 在Windows上安装OpenSSH Server

打开“设置”应用。点击“应用”。

![](https://proxy-prod.omnivore-image-cache.app/1200x1167,sBQojoSz3HFBSiTW_dGfgcZ1oksJbI_R9FmhhCu3gJDo/https://img-blog.csdnimg.cn/cf19716f9bc441b9b310cde301c69a30.png)

 在右侧点击“可选功能”。（或者直接在查找设置中搜索可选功能）

![](https://proxy-prod.omnivore-image-cache.app/1200x1163,sBGZlbgNC1CHWoEyuGgVrygkAiPs-NFGOwHzIMbl2PRs/https://img-blog.csdnimg.cn/663a195c9fa84b0aa648a47686e16a6a.png)

点击“添加功能”。

在列表中找到并选择“OpenSSH 服务器”，然后点击“安装”。可以顺手把OpenSSH客户端也安装上

![](https://proxy-prod.omnivore-image-cache.app/1200x1166,sx6D8QCM7bNbBZ6Yym3kQfU9WB6dkCP5Kq3gHZN5ACPE/https://img-blog.csdnimg.cn/a56e0f595863433580b3e5ae51974801.png)

![](https://proxy-prod.omnivore-image-cache.app/846x215,sN_KzLAcwHBmEyCvgQuCDJGOOX0JcNZZJVWRB-IHHIEU/https://img-blog.csdnimg.cn/4ae26b58d802405bbce3cb1fdabcb0f2.png)

安装完成后，OpenSSH服务器将自动运行，并每次启动Windows时自动启动。

![](https://proxy-prod.omnivore-image-cache.app/851x480,sYsO5Al370GvoTibcKIBx58VgSD8Sc3DFBao8erwtIWE/https://img-blog.csdnimg.cn/dc0fe00549f64d6daf49d3fa4649aa44.png)

输入命令在PowerShell(管理员）模式下操作

输入命令 Get-WindowsCapability -Online | ? Name -like 'OpenSSH\*' 来查看OpenSSH服务器与客户端是否安装完成，安装完成如图下所示

```pgsql
 Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
```

**![](https://proxy-prod.omnivore-image-cache.app/1049x210,sPL5tGkOvsPQL_crla256IA9JZtFhROglN1A6i-sx52s/https://img-blog.csdnimg.cn/e7c3147d5eec4890b7e6a265de78ffaa.png)**

##   **步骤2:开启SSH服务**

输入命令

```dos
net start sshd
```

![](https://proxy-prod.omnivore-image-cache.app/551x91,sCD5EiAJeCS6JPaRIEdBVg-ppXvGkVRMwQUJ9tMgYlR8/https://img-blog.csdnimg.cn/0c7eed1c585d4db8bcdc78a18c9d835f.png)

 输入命令ssh localhost检查连接状态，图下所示表示连接正常

```ebnf
ssh localhost
```

![](https://proxy-prod.omnivore-image-cache.app/929x257,syWnzWuCPdRNRwWcRpwsIPriHBEDXrLUF5WOH8bVEvZk/https://img-blog.csdnimg.cn/0e8855a603d545c486f24e5770bbe6af.png)

输入命令Set-Service -Name sshd -StartupType 'Automatic'使SSH服务开机自启动 

```delphi
Set-Service -Name sshd -StartupType 'Automatic'
```

 如果如图下所示，表示ssh服务可能未开启，输入net start sshd开启服务即可；也有可能防火墙堵塞了22端口

![](https://proxy-prod.omnivore-image-cache.app/709x56,sy8PQKDwYBeIMNc6uhodR1s4x2avDmK1Mvv-9Nm3Fxko/https://img-blog.csdnimg.cn/93196d4474c84274bd5eb38014b7c69b.png)

解决办法：

确保SSH服务器可以接收外部连接，你需要在Windows Defender防火墙或任何其他第三方防火墙软件中开放22端口。

1. 打开“控制面板”。
2. 选择“系统和安全”。
3. 点击“Windows Defender防火墙”。
4. 在左侧选择“允许应用通过Windows防火墙通信”。
5. 在列表中找到“OpenSSH Server”并确保它被允许通过防火墙。
1. 从另一台计算机上，打开SSH客户端。
2. 打开PowerShell使用以下命令连接到Windows SSH服务器：

```css
ssh 用户名@Windows计算机的IP地址
```

例如，如果你的Windows计算机的IP地址是192.168.1.100，你的用户名是`john`，那么你应该输入：

```angelscript
ssh john@192.168.1.100
```

然后输入密码。（第一次连接先输入yes,然后再输入密码即可）

![](https://proxy-prod.omnivore-image-cache.app/915x296,scUWobGgFVu80ckdnT__dMKBq29wn4R7HLl8ZMoZvh_g/https://img-blog.csdnimg.cn/08b211a127864a53a5827dbcd2ddf912.png)

 现在，你应该已经成功连接到了Windows计算机，并可以执行命令。

## 注意事项

* 默认情况下，非管理员用户也可以通过SSH连接到Windows。要禁止非管理员用户连接，你可能需要[对sshd\_config文件进行修改](https://blog.csdn.net/weixin%5F72910567/article/details/132416032?csdn%5Fshare%5Ftail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22132416032%22%2C%22source%22%3A%22weixin%5F72910567%22%7D "对sshd_config文件进行修改")。
* 确保你的Windows密码足够复杂，以防止未经授权的访问。
* 考虑更改默认的SSH端口（22）以增加安全性。

## 问题解决

常见问题一

出现 WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! 字样

![](https://proxy-prod.omnivore-image-cache.app/772x141,s5uWKerMbVLkoKX4L48E-LffM1m-p8PIi-iEnFsINl7A/https://img-blog.csdnimg.cn/da833636b99e4dfaa3c5ea30e8d20a91.png)

原因 ：

这是 SSH 的一个安全警告。这种警告通常发生在以下情况：

1. 目标服务器的公钥已更改。这可能是因为您重新安装了服务器、更换了服务器硬件或手动更改了服务器的 SSH 密钥。
2. 有人尝试对您的连接进行中间人攻击（Man-in-the-Middle attack）。这种情况比较少见，但不能完全排除。

解决方法：

为了解决这个问题，您应该首先确定原因。如果您确信服务器的公钥已经合法更改，那么可以按照以下步骤解决：

打开终端或命令提示符。

使用以下命令删除指定 IP 地址的旧密钥条目：

```angelscript
ssh-keygen -R 192.168.136.128       //你的ssh服务器IP

```

之后，您可以再次尝试连接到服务器。在首次连接时，系统会提示您接受新的公钥。确认后即可正常连接。

但是，如果您没有对服务器进行任何更改，并且对此警告感到不安，那么您应该进一步调查，以确保您的网络环境没有遭受攻击。

## 总结

通过以上步骤，你应该可以轻松地在Windows上设置SSH服务器并从远程连接到它。SSH为你提供了一个安全的方式来管理和控制Windows计算机。

文章知识点与官方知识档案匹配，可进一步学习相关知识

---

