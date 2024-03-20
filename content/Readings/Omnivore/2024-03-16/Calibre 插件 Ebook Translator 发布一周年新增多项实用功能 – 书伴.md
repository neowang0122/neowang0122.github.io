---
id: 7538d8e0-e3b0-11ee-9faa-5febd252726d
title: |
  Calibre 插件 Ebook Translator 发布一周年新增多项实用功能 – 书伴
author: |
  书伴
tags:
  - RSS
date_saved: 2024-03-16 09:11:33
date_published: 2024-03-16 09:11:33
---

# Calibre 插件 Ebook Translator 发布一周年新增多项实用功能 – 书伴
#Omnivore

[Read on Omnivore](https://omnivore.app/me/calibre-ebook-translator-18e480c54a1)

[Read Original](https://bookfere.com/post/1096.html)

## Highlights

> Ebook Translator 是书伴开发的一款 Calibre 插件，可以利用 Google Translate、DeepL 等翻译服务或 ChatGPT、Gemini Pro 等生成式 AI，将不同格式、不同语言的电子书翻译并转制成不同格式的原文与译文对照版本。这不仅方便阅读外语书籍拓展知识面，更是学习外语的好帮手。 [⤴️](https://omnivore.app/me/calibre-ebook-translator-18e480c54a1#1a43bb23-4cf6-4239-97f4-d14d2812e749)  ^1a43bb23

> ## 1、提升翻译速度
> 
> 相比初次发布的插件版本，借助异步协程和多线程技术，新版插件的翻译速度得到了显著提升。以内置的翻译引擎 Google (Free) 为例，在一般网络条件及一般计算机性能条件下，翻译内含 **5000** 个段落的电子书仅需不到 **4.5** 分钟的时间。如果你启用了下面将要提到的“**合并翻译**”功能，在设置最长合并字符数为 **1800** 的情况下，翻译同一本书则仅需短短 **0.3** 分钟左右的时间。 [⤴️](https://omnivore.app/me/calibre-ebook-translator-18e480c54a1#5683a698-c26b-41ee-867b-3af40646dbbb)  ^5683a698

> ## 更多翻译引擎
> 
> 相比初次发布的版本，新版插件提供了更多内置翻译引擎，包括免费的 Google (Free)、DeepL (Free)、Microsoft Edge (Free)（归功于 [@wanghaosjtu](https://github.com/wanghaosjtu)），以及需填写密钥才能使用的 Google (Basic)、Google (Advanced)、ChatGPT (Azure)、Genimi Pro 有道翻译以及百度翻译。 [⤴️](https://omnivore.app/me/calibre-ebook-translator-18e480c54a1#eb3a8d57-d2c4-4aac-b2c3-8d19191e7a45)  ^eb3a8d57

> ## 更多对照布局
> 
> 自插件发布以来，除了仅保留译文外，只有上下两种原文译文对照方式。新版插件添加了左右对照方式（归功于 [@tiropictor](https://github.com/tiropictor)）。不过这两种方式尚处于测试阶段，仅支持有限电子书格式。 [⤴️](https://omnivore.app/me/calibre-ebook-translator-18e480c54a1#d79ddb2d-a153-42cb-b7e6-d3c505da3e86)  ^d79ddb2d

> ## 快捷安装方式
> 
> 插件最初发布时，你需要手动下载插件文件并通过 Calibre 的插件管理器加载安装。现在 Calibre 官方插件列表收录了此插件，你可直接在 Calibre 的插件管理器中搜索安装 Ebook Translator。 [⤴️](https://omnivore.app/me/calibre-ebook-translator-18e480c54a1#53faf262-4953-4c28-8a00-45e625291236)  ^53faf262


--- 

Full Content: 

![Calibre 插件 Ebook Translator 发布一周年新增多项实用功能](https://proxy-prod.omnivore-image-cache.app/780x0,siz68arPLRuh6DZDutuvqC9n-LC-JlQA5706Lnbi3ZfQ/https://bookfere.com/wp-content/uploads/2024/03/calibre-ebook-translator.png)

Ebook Translator 是书伴开发的一款 Calibre 插件，可以利用 Google Translate、DeepL 等翻译服务或 ChatGPT、Gemini Pro 等生成式 AI，将不同格式、不同语言的电子书翻译并转制成不同格式的原文与译文对照版本。这不仅方便阅读外语书籍拓展知识面，更是学习外语的好帮手。

插件自推出以来，在国内外用户的大量反馈和建议下，功能和性能都得到了显著提升。此次发布的 2.3.2 版本相比[一年前发布的版本](https://bookfere.com/post/1057.html)，不仅提升了翻译效率，也给予了用户更多控制权。

关于 2.3.2 版本插件的更新详情，可参考文章《[Ebook Translator：用 Calibre 翻译多语言多格式的电子书](https://bookfere.com/post/1057.html)》中的更新日志部分。本文会简要介绍主要改进，希望能帮你快速了解新版的改进。

## ==1、提升翻译速度==

==相比初次发布的插件版本，借助异步协程和多线程技术，新版插件的翻译速度得到了显著提升。以内置的翻译引擎 Google (Free) 为例，在一般网络条件及一般计算机性能条件下，翻译内含== **==5000==** ==个段落的电子书仅需不到== **==4.5==** ==分钟的时间。如果你启用了下面将要提到的“==**==合并翻译==**==”功能，在设置最长合并字符数为== **==1800==** ==的情况下，翻译同一本书则仅需短短== **==0.3==** ==分钟左右的时间。==

但值得注意的是，由于翻译速度受限于网络速度和翻译服务的响应速度，当网络条件较差或翻译服务响应速度较慢的情况下，耗时将会产生较大的差异。比如，你选择让 ChatGPT 等生成式 AI 充当翻译服务，其产生内容的速度显然要比 Google Translate 等翻译专用服务慢得多。

## 2、合并翻译功能

如前所述，虽然翻译 5000 个段落耗时不到 4.5 分钟不算太难熬，但谁会拒绝更快的速度呢？合并翻译功能会根据你设置的字符数将段落合并成相较之下数量更少的翻译单元，以减少请求次数从而加快翻译速度。在 1800 个合并字符数的情况下，原本 **5000** 个左右的翻译单元会压缩到不到 **380** 个翻译单元，从而让整本书的请求减少了近 **14** 倍，大幅提升了整本书的翻译速度。

虽然合并翻译功能的可用性和稳定性在用户的不断反馈下得到了显著的提升，但目前仍处于测试状态，仍可能出现不可预料的问题。如果你在使用合并翻译功能时遇到了问题，除了切换到非合并翻译模式，也可以随时向插件项目提交错误报告和建议，以帮助进一步改进此功能。

## 3、添加高级模式

最初发布的插件版本，翻译过程是全自动的，用户无法干预，更无法对翻译结果进行精细的控制。为解决此问题，插件新增了“**高级模式**”，并同时将原来的方式重命名为“**批量模式**”。

![Calibre Ebook Translator高级模式](https://proxy-prod.omnivore-image-cache.app/780x455,sDlFMsI0P4X5HCbbnr4KQ6hyz5o2fBKPH6TBew1dMWVA/https://bookfere.com/wp-content/uploads/2024/03/calibre-book-translator-advanced-mode.png)

在“高级模式”中，你可以在左侧的列表中预览所有待翻译的段落或合并单元。列表支持连续和非连续多选。在这里，除了翻译全部项目外，还可以只翻译所选择的项目。如果想要忽略某一或某些项不翻译，可将其删除。如果对某项的翻译结果不满意，可在界面上方切换翻译引擎，尝试不同翻译服务的翻译结果。如果想要手动修改某项的翻译结果，可利用界面右侧的“**校对**”功能。

此外，你还可以通过右侧的“日志”查看插件的翻译过程，以及通过右侧的“错误”功能查看由于各种原因出现错误。这些信息可以帮助你了解插件的工作状态，以及提供修复错误的线索。

如果插件开启了缓存功能（默认开启），你可以随时关闭高级模式窗口，下次打开同一本电子书时，所有之前翻译的内容都会从缓存中读取，而不必重新翻译。但需要注意的是，如果插件的缓存目录是操作系统的临时目录（默认设置），则缓存文件可能会因为操作系统自动清理缓存而消失，如果想要缓存持久保存，需要使用接下来要介绍的缓存管理功能将其更换为非临时目录。

## 4、缓存管理功能

虽然初次发布的版本已经引入缓存机制，但较为简陋。新版的缓存功能得到了一定的增强，并且提供了管理界面。在这里，除了查看缓存的基本信息外，还可以清除所有缓存或删除所选缓存。

![Calibre Ebook Translator缓存管理器](https://proxy-prod.omnivore-image-cache.app/780x632,sz72R9NgFk3iQUDGXNqqqbS9HIDc9pYh6dGHb1Rw2vps/https://bookfere.com/wp-content/uploads/2024/03/calibre-ebook-translator-cache-management.png)

默认情况下缓存会存放在操作系统的临时目录中，这对翻译时间较短的情况并无大碍，但如果翻译耗时较长，插件的缓存文件可能会被操作系统的自动清理机制删除，导致无法正常输出文件。你可以通过更改缓存路径的功能，为插件的缓存指定一个普通目录，以防止这种情况发生。

## 5、==更多翻译引擎==

==相比初次发布的版本，新版插件提供了更多内置翻译引擎，包括免费的 Google (Free)、DeepL (Free)、Microsoft Edge (Free)（归功于== ==[@wanghaosjtu](https://github.com/wanghaosjtu)====），以及需填写密钥才能使用的 Google (Basic)、Google (Advanced)、ChatGPT (Azure)、Genimi Pro 有道翻译以及百度翻译。==

由于内置翻译引擎数量有限，很难满足所有用户需求，因此插件添加了自定义翻译引擎功能。只要你打算使用的翻译服务提供了支持 HTTP 协议的网络 API（如 REST API），就可以通过简单的配置实现自定义翻译引擎。具体配置方式可参考[项目 WiKi 页面相关内容](https://github.com/bookfere/Ebook-Translator-Calibre-Plugin/wiki/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87#%E5%BC%95%E6%93%8E)。

## 6、==更多对照布局==

==自插件发布以来，除了仅保留译文外，只有上下两种原文译文对照方式。新版插件添加了左右对照方式（归功于== ==[@tiropictor](https://github.com/tiropictor)====）。不过这两种方式尚处于测试阶段，仅支持有限电子书格式。==

![原文译文左右对照布局](https://proxy-prod.omnivore-image-cache.app/780x607,sAESAO3lEyJJPi9KfnmAgoPAn-Ar8x1b4sdJJW_KHuBA/https://bookfere.com/wp-content/uploads/2024/03/calibre-ebook-translator-right-position.png)

## 7、忽略特定内容

电子书中存在很多不需要翻译的内容，比如图片、代码片段、某些段落或表格等。你可以通过在设置中的“**忽略段落**”和“**忽略元素**”编写规则，让插件忽略翻译这些特定的内容。

## 8、==快捷安装方式==

==插件最初发布时，你需要手动下载插件文件并通过 Calibre 的插件管理器加载安装。现在 Calibre 官方插件列表收录了此插件，你可直接在 Calibre 的插件管理器中搜索安装 Ebook Translator。==

![Calibre Ebook Translator安装](https://proxy-prod.omnivore-image-cache.app/780x529,sbXTnfeGQHpAW-LV-dK-Xcdao6VH3OMmg2anZ9qgENkg/https://bookfere.com/wp-content/uploads/2024/03/calibre-ebook-translator-installation.png)

## 9、其他更多功能

除了所有 Calibre 所支持的输入输出格式外，插件还额外支持对 SubRip Text 格式（.srt）和 Portable Game Notation 格式（.pgn）文件的翻译。你还可以设置原文和译文的颜色，以便文本的对照更加符合你的视觉感受。除了翻译电子书主体内容外，还支持翻译电子书的元数据和导航文件内容。插件还提供了简单的词汇表功能，在翻译的过程中优先使用指定的词汇翻译。

插件还增加了三种界面语言，包括繁体中文（归功于 [@Kaitul](https://github.com/Kaitul)）、法语（归功于 [@miiPoP](https://github.com/miiPoP)）和葡萄牙语（归功于 Marcelo Duarte）。这为相应语种的用户带去了便利。

以上便是 Ebook Translator 过去一年中新增和改进的主要功能，希望新的版本能带给你更好的使用体验，也期待能对你的学习和工作有所帮助。如果你在使用中遇到了问题或有好的建议，欢迎来[项目主页](https://github.com/bookfere/Ebook-Translator-Calibre-Plugin)提交。最后，感谢所有反馈错误、提交功能请求和贡献代码的热心网友。

© 「[书伴](https://bookfere.com/)」原创文章，转载请注明出处及原文链接：<https://bookfere.com/post/1096.html>
