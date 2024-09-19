---
created: 2024-03-17T12:58
updated: 2024-03-21T18:16
---
^ [[软件]] 

#status/todo

---

# Omnivore

免费开源的稍后读软件，支持多端同步，可以 highlight 

2024-01-27T 23:00:26- 05:00

根据我目前的测试，通过邮件的方式来保存想看的文章正文和视频转文字的结果，效果非常好。

## 特殊的用法

### 双语翻译 

用[沉浸式翻译](https://immersivetranslate.com/?force=1)翻译完成后再保存到 omnivore，原文中就会把中文也一并收藏进去。

## 在 obsidian 中的配置 

[[20240316|20240316]] 之前的

```
1 Organize/3 Resources/Omnivore/{{{dateSaved}}} 
1 Organize/3 Resources/Omnivore/{{{dateSaved}}}/{{{title}}}
```

[[2024-03-18|2024-03-18]] 目前把笔记迁移到 quartz 之后的

```
3 Express/Readings/Omnivore
3 Express/Readings/Omnivore/{{{title}}}_assets
```

### Template 

```
# {{{title}}}
#Omnivore

[Read on Omnivore]({{{omnivoreUrl}}})

[Read Original]({{{originalUrl}}})

date_saved: {{{dateSaved}}}

{{#datePublished}}
date_published: {{{datePublished}}}
{{/datePublished}}

--- 

# Full Content: 

{{{ content }}}

---

{{#highlights.length}}
## Highlights

{{#highlights}}
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}} ^{{{highlightID}}}
{{#note}}

{{{note}}}
{{/note}}

{{/highlights}}
{{/highlights.length}}

```

## Front matter template 

```
id: {{{id}} }
title: >
  {{{title}} }
{{#author}}
author: >
  {{{author}} }
{{/author}}
{{#labels.length}}
tags:
{{#labels}} - {{{name}} }
{{/labels}}
{{/labels.length}}
date_saved: {{{dateSaved}} }
{{#datePublished}}
date_published: {{{datePublished}} }
{{/datePublished}}
draft: true

```


## 利用ai 对加入的文章自动生成总结

omnivore-ai-annotations 
[[2024-03-16_jancbeck-omnivore-ai-annotations- This serverless function can be used to automaticall...]]

### 总结的prompt

参考以下的模版
```
让我们一步一步思考，阅读我提供的内容，并做出以下操作：
第一步，提取文章的元数据
- 标题：
- 作者：
- 标签：（阅读文章内容后给文章打上标签，标签通常是领域、学科或专有名词）
第二步、一句话总结这篇文文章；
第三步，总结文章内容并写成摘要；
第四步，越详细地列举文章的大纲，越详细越好；
插入markdown分割行 ---
并继续完成以下步骤：
第一步，请详细叙述大纲中每一部分的内容， 第二步，总结文章的结论； 第三步，列举读这篇文章，我可以学到哪些知识？ 第四步，针对文章的内容，提出三个用户在阅读的过程中可能会有的疑问。 请用 markdown 格式返回所有内容；
```

参考 [[2024-04-18_我用AI写出了10万＋的文章，信不信？看我是怎么用提示词的 - 知乎]]
改了一版适合我自己的
```
让我们一步一步思考，阅读我提供的内容，并做出以下操作：

# 第一阶段：总结文章内容

1. **一句话总结**：用简短的一句话总结这篇文章的主要内容。
2. **摘要**：对文章进行简要的概括，总结其主要信息，此处150字左右。
3. **大纲**：提供文章的大纲，越详细越好，分层级。

--- 插入markdown分割行

# 第二阶段：详细分析

1. **详细叙述**：请详细描述大纲中的每个部分的内容，确保提供关键的细节和证据。
2. **文章结论**：总结文章的结论，提供作者所传达的主要观点。
3. **学习收获**：列出读者通过阅读这篇文章可以学到的知识。
4. **疑问**：针对文章内容，提出三个用户在阅读过程中可能会有的疑问。 

所有你的输出都以markdown形式呈现，中文输出。
```


```
请使用 300 字以内，以简体中文总结文章。
重要提示：请不要超过 300 字。每句话应该简洁易读。
另外，在文章总结下方换行后，基于本文重点，请创建 3 个有关问题及其答案。每个问题应能帮助深入理解文章的关键概念，并加强对重点的印象。请注意，在问题的这一行上，使用粗体的 markdown 格式来更让文字显眼。

{#- 创建问答 -#} 

**问题 1：{# 基于重点内容构建的问题 #}**

答案：{# 对应问题 1 的答案，应该包含对应的重点内容 #} 

**问题 2：{# 同上 #}** 

答案：{# 对应问题 2 的答案，应该包含对应的重点内容 #} 

**问题 3：{# 同上 #}** 

答案：{# 对应问题 3 的答案，应该包含对应的重点内容 #}
```
