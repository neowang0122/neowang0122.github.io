---
id: c405ca21-451b-4931-a096-7d72f2fe16f9
title: |
  项目命令 | vuepress-theme-hope
author: |
  Mr.Hope
date_saved: 2024-03-20 21:01:16
date_published: 2024-02-05 19:00:03
draft: true
---

# 项目命令 | vuepress-theme-hope
#Omnivore

[Read on Omnivore](https://omnivore.app/me/vuepress-theme-hope-18e5e86cd5f)

[Read Original](https://theme-hope.vuejs.press/zh/get-started/command.html)

date_saved: 2024-03-20 21:01:16

date_published: 2024-02-05 19:00:03

--- 

# Full Content: 

本教程介绍 VuePress 项目命令。

## [常用命令](#常用命令)

* `vuepress dev [dir]` 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。
* `vuepress build [dir]` 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。

使用模板

如果你在使用 VuePress Theme Hope 模板，你可以在 `package.json` 中发现下列三个命令:

```json
{
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  }
}

```

这意味着你可以使用:

* `pnpm docs:dev` 启动开发服务器
* `pnpm docs:build` 构建项目并输出
* `pnpm docs:clean-dev` 清除缓存并启动开发服务器

终止开发服务器

如果你需要终止开发服务器，请点击终端，并连续两次按下 `Ctrl + C`。

## [升级版本](#升级版本)

如果你需要升级主题和 VuePress 版本，请执行以下命令:

[上一页创建项目](https://theme-hope.vuejs.press/zh/get-started/create)[下一页项目内容](https://theme-hope.vuejs.press/zh/get-started/content)

---

