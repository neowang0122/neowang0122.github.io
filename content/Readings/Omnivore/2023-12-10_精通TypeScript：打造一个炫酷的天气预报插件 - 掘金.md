---
id: e7ac7c66-97ec-11ee-95bf-338f138ba01c
title: |
  精通TypeScript：打造一个炫酷的天气预报插件 - 掘金
author: |
  葡萄城技术团队
date_saved: 2023-12-10 20:45:51
date_published: 2023-12-10 20:45:51
draft: true
---

# 精通TypeScript：打造一个炫酷的天气预报插件 - 掘金
#Omnivore

[Read on Omnivore](https://omnivore.app/me/type-script-18c5785a2bb)

[Read Original](https://juejin.cn/post/7310787455111168035)

date_saved: 2023-12-10 20:45:51

date_published: 2023-12-10 20:45:51

--- 

# Full Content: 

**前言**

​ 随着数字化和信息化的发展，数据大屏使用越来越广泛，我们不仅需要展示数据，更需要以一种更加美观的方式展示数据。这就必然需要使用到各种图表组件，比如柱状图、饼图、折线图等等。但是有一些效果不太适合通过这种常规图表实现，比如3D效果图表、组织结构、天气预报等这些特殊效果。那么这种特殊效果，我们就可以自己来开发实现。今天小编以葡萄城公司的嵌入式BI工具——[Wyn商业智能](https://link.juejin.cn/?target=https%3A%2F%2Fwww.grapecity.com.cn%2Fsolutions%2Fwyn "https://www.grapecity.com.cn/solutions/wyn")为例为大家介绍如何实现一个天气预报插件。

**插件开发**

​ Wyn提供了用户自定义可视化插件开发的功能，使用者可以根据自己的实际需求，自己开发符合自己使用场景的、漂亮的可视化组件，来丰富大屏的展示效果。

1. **获取代码**

​ 葡萄城公司官方公开了天气预报插件的源码，可以直接在github上获取：[github.com/GrapeCityXA…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FGrapeCityXA%2FWyn-Custom-Visual%2Ftree%2Fmain%2F%255B%25E5%25A4%25A9%25E6%25B0%2594%25E9%25A2%2584%25E6%258A%25A5%255D%28https%3A%2F%2Fgithub.com%2FGrapeCityXA%2FWyn-Custom-Visual%2Ftree%2Fmain%2F%25E5%25A4%25A9%25E6%25B0%2594%25E9%25A2%2584%25E6%258A%25A5%29 "https://github.com/GrapeCityXA/Wyn-Custom-Visual/tree/main/%5B%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5%5D(https://github.com/GrapeCityXA/Wyn-Custom-Visual/tree/main/%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5)") ![](https://proxy-prod.omnivore-image-cache.app/0x0,suJapCvdua8K-2-Z2alLOLcviw7SWvu1zswxu_By0O8Y/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96e8d86f37bf43359ed9deb7695afaae~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1916&h=927&s=131797&e=png&b=fefefe)

1. **代码打包**

获取代码之后，在本地的IDE中通过wyn-visual-tools package命令将程序打包生成对应的VIZ插件包。![](https://proxy-prod.omnivore-image-cache.app/0x0,suZA4CITysq1VBDp8jupF1JT6oyCLq-QBIlWqJK_cGeQ/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44f5eff83108448db7d5dc076b5f391a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1917&h=1034&s=183750&e=png&b=191919)

1. **上传组件**

最后将插件包上传到Wyn中进行使用。首先在门户页面上选择"天气预报.viz"组件包。![](https://proxy-prod.omnivore-image-cache.app/0x0,shURBPWSKJjNJY-fokCa87yJeMQcnN46qX1UQa1faNos/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16395f056be3414aa60374de1a9bc641~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1917&h=930&s=115233&e=png&b=fcfcfc)

选择组件之后，点击上传![](https://proxy-prod.omnivore-image-cache.app/0x0,si3q8pcj-JGWyX3uP3hZLG3HWjlce0DItdOlYjgeAK6A/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a58269838504356b93ec8b2b926fa67~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1846&h=932&s=62315&e=png&b=ecf1f5)

1. **组件使用**

组件上传之后就可以在仪表板中添加使用。![](https://proxy-prod.omnivore-image-cache.app/0x0,stbSWUq9TtG-HW0myUag2vOEqXSDxuTQbeyVNgq9pExo/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b753cf13c5d4c54ae6f583f5dfe80cf~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1920&h=932&s=222206&e=png&b=ebf0f4)

**开发说明**

1. **开源代码库**

​ 葡萄城将已经实现的可视化插件源码已经公开，可以直接在[github](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FGrapeCityXA%2FWyn-Custom-Visual%2Ftree%2Fmain "https://github.com/GrapeCityXA/Wyn-Custom-Visual/tree/main")中获取。比如上面的天气预报插件就是直接从官方的代码仓库中获取的，除此之外还有很多其他的插件供用户下载使用。下载源码、依赖之后就可以直接打包使用了。![](https://proxy-prod.omnivore-image-cache.app/0x0,s2wJzw58i0WseRHbEQDXna3OhAvg8gX5NnN3P0g6zY_w/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4cb890980bc4170bfb2ce559eb9200c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1849&h=929&s=130856&e=png&b=ffffff)

1. **从零开始做一个插件**

如果官方提供的插件没有需要的，就可以自己开始搭建项目工程，进一步开发插件。

**2.1 准备环境**

1. 安装10.0.0 以上的版本的node.js 。![](https://proxy-prod.omnivore-image-cache.app/0x0,sm7IUbqBO8ZnaH1qVsQexNcNB89jbtp7lQiLaO0XjlSY/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e82e7c4ade5a495abade2dfed36ae46b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=978&h=508&s=19575&e=png&b=0c0c0c)
2. 然后在IDE（如VS Code）中创建一个空白工程。![](https://proxy-prod.omnivore-image-cache.app/0x0,sBF7FWNiWmvpyIrrLw1qsXYwtg-eDKDE1atSJEymsiac/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31b3e2e7c98f44c7b7054e3f9445a072~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1919&h=1040&s=121493&e=png&b=1c1c1c)
3. 安装 wyn-visual-tools 命令集：npm i @grapecity/wyn-visual-tools -g![](https://proxy-prod.omnivore-image-cache.app/0x0,swyFsNu5Sv1ddH6yoysoX6EPSM8VjoG5p6B5ZICvFGTs/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdc028a3492b448c9de8876ac02ebbbe~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1913&h=1006&s=134293&e=png&b=1c1c1c)

**2.2 工程初始化**

​ 通过命令wyn-visual-tools init初始化项目环境，执行成功之后，可视化插件项目的基本工程框架就搭建出来了，后面继续按照框架结构进行开发即可。初始化后的项目结构如下：

* assets：存储图片资源。目前仅支持图片，定义中所使用的图片将被编码为base64字符串。
* i18nResources：此文件夹用于存放 i18n 文件。
* node\_modules: 该工程安装的依赖。
* src/visual.ts：自定义可视化插件的入口。
* capabilities.json：配置可视化插件的一些静态属性， 包括数据绑定，属性设置，操作栏的配置。
* package.json/package-lock.json: 该项目的npm配置， 具体可以参考[docs.npmjs.com/files/packa…](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.npmjs.com%2Ffiles%2Fpackage.json "https://docs.npmjs.com/files/package.json")
* tsconfig.json: 该项目有关typescript的一些配置， 具体可以参考[www.typescriptlang.org/docs/handbo…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Ftsconfig-json.html "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html")
* visual.d.ts: 可视化插件提供的一些接口定义。
* visual.json：有关自定义可视化插件的一些元信息。
* webpack.config.js: 该项目通过webpack进行打包，该文件是webpack的配置文件， 具体可参考[webpack.js.org/configurati…](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.js.org%2Fconfiguration%2F "https://webpack.js.org/configuration/") ![](https://proxy-prod.omnivore-image-cache.app/0x0,s8n7PeZyqoNvvLfMbmquL9115jZQjeZ-O2D0GxaZ0YDY/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0317f1b3f374983a7b86e7c6c1bc1c4~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1919&h=1033&s=154736&e=png&b=191919)

**2.3 开发调试**

我们在开发的过程中也不是一味的写代码，还需要根据当前的效果进行测试、修改、优化。在Wyn中也可以根据插件的情况进行调整。

1. 首先，在Wyn的管理系统中开启开发者模式：![](https://proxy-prod.omnivore-image-cache.app/0x0,svr_SZjE5Tlq-7IiLrWmqbNrNPKbkePkjzqsoKBSoF_M/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e49eadb92d94de489c34e64c22c2350~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1920&h=927&s=154033&e=png&b=14233a)
2. 然后启动项目。![](https://proxy-prod.omnivore-image-cache.app/0x0,sMq926ps6TvvEnjv5ALsd6gLaCFZwkrsNd7d4b4gcYJs/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42def5d8ed73477699deceb409321f30~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1908&h=1005&s=109959&e=png&b=1a1a1a)
3. 最后在仪表板设计器中就可以查看插件当前的效果。

​ 打开仪表板设计器，在可视化插件模块中找到开发工具组件，拖动到设计器中，点击插件的右上角的刷新按钮，就能看到组件的呈现效果，同时在代码开发的IDE中可以看到运行时的日志信息。![](https://proxy-prod.omnivore-image-cache.app/0x0,s7e7Dq9XA76VJ9IWJEzVqVG2yTB73rgyhc_DH4-0pDIo/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48786985c13e4f2b8ed6f4a31e6977a3~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1926&h=939&s=270330&e=png&b=ebf0f4)

1. **葡萄城市场**

开发完后的插件不仅可以自己使用，还可以将开发完成的插件上传到[葡萄城市场](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.grapecity.com.cn%2Fwyn%5Fhome "https://marketplace.grapecity.com.cn/wyn_home")。![](https://proxy-prod.omnivore-image-cache.app/0x0,sE5J6gNkXAeh3OxPUsI6OPI-UVdm4HWiMlc_Fre8KRPk/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4bbfca63bfc4ef4b58d2ef82c5f62a7~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1639&h=999&s=413641&e=png&b=ffffff)

**总结**

​ Wyn内置的图表组件非常丰富，可以满足大多数常见的使用场景，用户直接在[葡萄城市场](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.grapecity.com.cn%2Fwyn%5Fhome "https://marketplace.grapecity.com.cn/wyn_home")中下载并使用即可。除此之外，当遇到一些特殊的场景时，也可以根据自己的实际场景自己动手开发。希望每个读者在看完本文后，都可以设计出漂亮的仪表板大屏。

---

