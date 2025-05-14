---
id: 9f047bcb-0641-43ee-89f0-39d68194307d
date_saved: 2024-05-01 13:33:02
draft: true
---

# Readwise Reader 定制总结提示词
#Omnivore

[Read on Omnivore](https://omnivore.app/me/readwise-reader-18f3537882d)

[Read Original](https://wise-pullover-00f.notion.site/Readwise-Reader-3087a37b9a3045e1ac933bd2740a584c)

date_saved: 2024-05-01 13:33:02


--- 

# Full Content: 

## Readwise Reader 定制总结提示词

我只是用 Claude 3 Opus 做了简体化：

{#\- 简体中文摘要与重点提取 \-#} {#\- 下面的 Prompt 会将文档缩减成一个 300 字内的摘要，并根据你的 highlight 进行重点摘要。\-#}请使用 300 字以内，以简体中文总结以下文本：""" 标题：{{ document.title }}作者：{{ document.author }}来源：{{ document.domain }}另外，在阅读此文章时，我对以下部分进行了高亮，认为这些是文章的重点，给你学习参考：{% for highlight in document.highlights %} \- {{ highlight.content }} {% endfor %} {#\- 下面的 if\-else 逻辑检查文档的长度。如果文档较长，它将使用关键句子以避免超出 GPT 提示窗口的限制。我们强烈建议除非您知道自己在做什么，否则不要更改此设置。\-#} {% if (document.content | count\_tokens) \> 2000 %} {{ document.content | central\_sentences | join('\\n\\n') }} {% else %} {{ document.content }} {% endif %} """ 重要提示：请不要超过 300 字。每句话应该简洁易读；关于中文的排版原则：在中文和英文或数字之间，要有一个半角空白，例如：Apple 手机；3 个 AI 工具。 另外，在文章总结下方换行后，基于本文重点，请创建 3 个有关问题及其答案。每个问题应能帮助深入理解文章的关键概念，并加强对重点的印象。请注意，在问题的这一行上，使用粗体的 markdown 格式，或者 <strong\> 的 html 标签来更让文字显眼。{#\- 创建问答 \-#}\*\*问题 1：{\# 基于重点内容构建的问题 #}\*\* 答案：{\# 对应问题 1 的答案，应该包含对应的重点内容 #}\*\*问题 2：{\# 同上 #}\*\* 答案：{\# 对应问题 2 的答案，应该包含对应的重点内容 #}\*\*问题 3：{\# 同上 #}\*\* 答案：{\# 对应问题 3 的答案，应该包含对应的重点内容 #} 

​

---

