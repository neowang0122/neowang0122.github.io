---
created: 2024-03-17T12:58
updated: 2024-03-18T23:45
---
^ [[2 Distill/1 Evergreen/工具/软件]] 

#status/todo

---

# Omnivore

免费开源的稍后读软件，支持多端同步，可以 highlight 

2024-01-27T23:00:26-05:00
根据我目前的测试，通过邮件的方式来保存想看的文章正文和视频转文字的结果，效果非常好。

## 在 obsidian 中的配置 

[[0 Capture/Daily Notes/20240316|20240316]]

之前的

```
1 Organize/3 Resources/Omnivore/{{{dateSaved}}} 
1 Organize/3 Resources/Omnivore/{{{dateSaved}}}/{{{title}}}
```

[[0 Capture/0 PeriodicNotes/2024/Daily/03/2024-03-18|2024-03-18]] 目前把笔记迁移到 quartz 之后的

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

{{#highlights.length}}
## Highlights

{{#highlights}}
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}} ^{{{highlightID}}}
{{#note}}

{{{note}}}
{{/note}}

{{/highlights}}
{{/highlights.length}}

--- 

# Full Content: 

{{{ content }}}


```



