---
id: b4e37380-de95-11ee-badb-df6bb3b59fed
title: |
  ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… - 小众软件
author: |
  青小蛙
tags:
  - RSS
date_saved: 2024-03-09 21:22:00
date_published: 2024-03-09 21:22:00
draft: true
---

# ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… - 小众软件
#Omnivore

[Read on Omnivore](https://omnivore.app/me/shell-gpt-chat-gpt-docker-18e269867c1)

[Read Original](https://www.appinn.com/shellgpt/)

date_saved: 2024-03-09 21:22:00

date_published: 2024-03-09 21:22:00

--- 

# Full Content: 

**ShellGPT** 是一款整合了 ChatGPT 的终端工具，它能够实现用自然语言执行命令，比如输入更新我的系统，会帮你输入 apt update && apt upgrade，输入从大到小列出文件则帮你输入 ls -lS。对于记不住命令行的同学来说，太方便了。

支持 Linux, macOS, Windows，兼容 PowerShell、CMD、Bash、Zsh 等等。@[Appinn](https://www.appinn.com/shellgpt/)

![ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… 1](https://proxy-prod.omnivore-image-cache.app/1608x700,sEd_Vdg0vZm6mXFyx-aQPy8boMHbVypStkXSrMWuoNVU/https://www.appinn.com/wp-content/uploads/2024/03/Appinn-feature-images-2024-03-09T210952.489.jpg "ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… 1")

来自[**发现频道**](https://meta.appinn.net/c/faxian/10)，@DBin\_K 同学的推荐：<https://meta.appinn.net/t/topic/53654/>

## ShellGPT: 用自然语言操作命令行 | 开源CLI软件

今天发现一个有趣的项目 [ShellGPT 4](https://github.com/TheR1D/shell%5Fgpt) | [中文介绍](https://github.com/DBinK/shell%5Fgpt/blob/README-zh.md/README.md)

简单说可以让你在 [命令行](https://meta.appinn.net/tag/%E5%91%BD%E4%BB%A4%E8%A1%8C) 里面使用 [chatgpt](https://meta.appinn.net/tag/chatgpt) , 需要自己提供 API key 或者自己搭建的本地 LLM 模型

体验下来, 我觉得它能实现的最好用的功能是 **自然语言操作命令行** , 很适合我这种又菜又爱玩又经常记不住命令用法的人。提问完得到的命令可以一键执行, 免去了在 浏览器, 终端软件的 **窗口来回切换**、**复制粘贴**、**切换中英文输入法** 等过程, 体验非常丝滑

![ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… 2](https://proxy-prod.omnivore-image-cache.app/700x426,sULgf_PiJGrzxjlj_NA_d1fiWF8MQn50FAoTs9YVx17Q/https://www.appinn.com/wp-content/uploads/2024/03/a721f621c3ca46c657bd01c9f60416b8530621.jpg "ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… 2")

![ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… 3](https://proxy-prod.omnivore-image-cache.app/600x470,sRxIjBFD1ZJ1c3b-wDKkGLLhjHjLHEkROGT-9vuoh9A0/https://www.appinn.com/wp-content/uploads/2024/03/a721f621c3ca46c657bd01c9f-1.jpg "ShellGPT - 在终端里使用 ChatGPT（用自然语言执行命令）：更新我的系统、从大到小列出文件、帮我安装 Docker… 3")

## 安装使用

用起来也很简单, 有 Python 环境的话, 使用 pip 即可安装

装好后先在 shell 输入 sgpt 回车, 然后输入 key 就能用了。

在 \~/.config/shell\_gpt/.sgptrc 有更具体的配置项目, 可以指定gpt模型或者更换api服务器域名什么的, 个人觉得 GPT3.5 的模型完全够用 (项目默认用 GPT4)

我用的最多的命令：

sgpt 你的提问语句 #直接提问, 如果提问语句有空格记得用'引号'包起来
sgpt -s 需要生成的命令 #我最喜欢的功能 -s 是 --shell 的缩写
直接写需要生成的命令 #然后按Ctrl+L键 可以直接生成命令，需要安装 Shell integration, 这是 bash, zsh 限定的功能。

## 获取

* [GitHub](https://github.com/TheR1D/shell%5Fgpt)

另外，@DBin\_K 同学提供了[中文介绍页面](https://github.com/DBinK/shell%5Fgpt/blob/README-zh.md/README.md)。

---

原文：https://www.appinn.com/shellgpt/

---

