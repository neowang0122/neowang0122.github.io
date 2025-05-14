---
id: 952a7c3c-0a6d-452c-a58c-e7537c522a71
title: |
  将假设嵌入网站和平台：假设 --- Embedding Hypothesis in Websites and Platforms : Hypothesis
author: |
  unknown
date_saved: 2024-03-20 05:25:32
draft: true
---

# 将假设嵌入网站和平台：假设 --- Embedding Hypothesis in Websites and Platforms : Hypothesis
#Omnivore

[Read on Omnivore](https://omnivore.app/me/embedding-hypothesis-in-websites-and-platforms-hypothesis-18e5b2e1d2e)

[Read Original](https://web.hypothes.is/help/embedding-hypothesis-in-websites-and-platforms/)

date_saved: 2024-03-20 05:25:32


--- 

# Full Content: 

While individuals can annotate and discuss any page on the Web by equipping their browsers with [extensions or bookmarklets](https://web.hypothes.is/start/), or by using our proxy ([via.hypothes.is](https://via.hypothes.is/)), publishers can make annotation easier for readers by embedding the Hypothesis client in their websites or platforms.  
虽然个人可以通过为浏览器配备扩展程序或小书签或使用我们的代理 (via.hypothes.is) 来注释和讨论网络上的任何页面，但出版商可以通过在其网站或平台中嵌入 Hypothesis 客户端来使读者更轻松地进行注释。

==To add Hypothesis to your website or platform, simply add the following line to the HTML source of your page:==  
==要将 Hypothesis 添加到您的网站或平台，只需将以下行添加到页面的 HTML 源代码中：==

==&lt;====script src="https://hypothes.is/embed.js" async====&gt;====&lt;====/script====&gt;==

## Configuration 配置

You can configure Hypothesis by including a config tag **before** the the script tag.  
您可以通过在脚本标记之前添加配置标记来配置假设。

For example, the following arrangement will ensure that our yellow highlights are hidden by default:  
例如，以下安排将确保默认情况下隐藏我们的黄色高光：

<script type="application/json" class="js-hypothesis-config">
{
"showHighlights": false
}
</script>
<script async src="https://hypothes.is/embed.js"></script>

You can find the [full list of configuration options in our documentation](https://h.readthedocs.io/projects/client/en/latest/publishers/config.html).  
您可以在我们的文档中找到配置选项的完整列表。

## Best practices to optimize your content for annotation  
优化注释内容的最佳实践

When publishing annotation-friendly documents, be sure to:  
发布适合注释的文档时，请务必：

* For pages that may be available at different URLs (and for which you want to share annotations), please see our [guidance on document equivalence](https://web.hypothes.is/help/how-to-establish-or-avoid-document-equivalence-in-the-hypothesis-system/).  
对于可能在不同 URL 上提供的页面（以及您想要共享注释的页面），请参阅我们的文档等效指南。
* Include [Open Graph Protocol](http://ogp.me/) content in your metadata  
在元数据中包含开放图谱协议内容

## Tools, plug-ins and integrations  
工具、插件和集成

The Hypothesis community has developed different tools to integrate annotation on websites and explore other functionality using the Hypothesis code and API. Explore [all the different ways to include Hypothesis](https://web.hypothes.is/tools-plug-ins-and-integrations/) in websites that use WordPress, Drupal, and other platforms. If you’re working with a Content Management System or web site building software and would like to discuss integrating Hypothesis, [we’d love to hear about it](https://web.hypothes.is/contact/)!  
Hypothesis 社区开发了不同的工具来集成网站上的注释，并使用 Hypothesis 代码和 API 探索其他功能。探索在使用 WordPress、Drupal 和其他平台的网站中包含假设的所有不同方法。如果您正在使用内容管理系统或网站构建软件，并且想讨论集成假设，我们很乐意听到！

Was this article helpful?  
本文是否有帮助？

### Related Articles 相关文章

---

## Highlights

> To add Hypothesis to your website or platform, simply add the following line to the HTML source of your page:  
> 要将 Hypothesis 添加到您的网站或平台，只需将以下行添加到页面的 HTML 源代码中：
> 
>  [⤴️](https://omnivore.app/me/embedding-hypothesis-in-websites-and-platforms-hypothesis-18e5b2e1d2e#c16d179d-a719-4f85-a24c-45905041353b)  ^c16d179d

