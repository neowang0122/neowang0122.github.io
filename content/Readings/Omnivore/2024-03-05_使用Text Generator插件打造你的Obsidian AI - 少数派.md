---
id: 366cb120-db6f-11ee-9394-8715be95516d
title: |
  使用Text Generator插件打造你的Obsidian AI - 少数派
author: |
  海拉鲁
tags:
  - RSS
date_saved: 2024-03-05 03:26:28
date_published: 2024-03-05 03:26:28
draft: true
---

# 使用Text Generator插件打造你的Obsidian AI - 少数派
#Omnivore

[Read on Omnivore](https://omnivore.app/me/text-generator-obsidian-ai-18e11f2f4b5)

[Read Original](https://sspai.com/post/86682)

date_saved: 2024-03-05 03:26:28

date_published: 2024-03-05 03:26:28

--- 

# Full Content: 

使用Text Generator插件打造你的Obsidian AI

作为一个的Obsidian用户，我一直对Notion AI那样将大语言模型能力与笔记软件结合的功能充满羡慕。这种整合不仅可以极大地提高知识管理的效率，还可以在创作和整理信息时提供巨大的帮助。Text Generator插件的出现，为我长期以来想在Obsidian中实现的功能提供了可能性，允许我直接在熟悉的环境中利用大语言模型的强大力量。但让我感到惊讶的是，在Obsidian社区，关于这个插件的讨论并不多。因此，我决定写下这篇文章，希望能够能够抛砖引玉，看到更多在obsidian应用大模型的用法。

### **1\. 安装插件**

首先，用户需要在Obsidian的插件市场中找到Text Generator插件，并完成安装。

#### **步骤：**

1. 打开Obsidian
2. 进入设置
3. 选择“插件市场”
4. 搜索并选择Text Generator插件
5. 点击“安装”

![](https://proxy-prod.omnivore-image-cache.app/0x0,s-HFzvz_23lvfb4tbT7ADsVdKBHbzvK2Mg5C4O85Ky_Q/https://cdn.sspai.com/2024/03/04/f24ef0c90eeb45b7dc47a51746049b95.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

安装插件

### **2\. 配置插件**

安装完成后，需要对插件进行必要的配置后才能继续使用。

#### **选择LLM模型**

text generator 插件可以选择不同的大模型，但此处

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6PtiR4SwAo5bI5iP3_Lpbe5KQfg-YQdUm3-5bbDcxDk/https://cdn.sspai.com/2024/03/04/96162664a1f4a4a7f80f2670abba53ed.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)![](https://proxy-prod.omnivore-image-cache.app/0x0,s-xoeLpeZnogbjhsliDVXH6bLgQUcsRTayoaf21N7MRI/https://cdn.sspai.com/2024/03/04/7d77a1ccdfb85fee95a7a4b8cf66ca28.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

配置模版保存路径。所谓的模版可以一整套处理逻辑，包括：怎么获取输入、提示词（Prompt）、怎么输出。默认模版保存路径为`textgenerator/prompts`下，可以根据自己的习惯修改。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHiSYPXPEGUmCN4F3xMFNUx6JZu14ING5ywdSsnXZj3k/https://cdn.sspai.com/2024/03/04/e16b55ed4e2daf68518e020290748617.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

#### **配置模版**

text generator提供了一个模板管理工具，可以通过它安装预定义的一系列插件。我建议初次尝试的时候都安装官方默认的模板库。

通过command + p（windows下为crtl + p）打开控制面板，输入text generator，在跳出来的选项中选择“Text Generator: Template Packages Manager”。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sU-Z38L3JhZY6k5lVCUdKxGAtSCPaWnDast0ECJozfp4/https://cdn.sspai.com/2024/03/04/0a9b6e5a08c8461eca2e44ffad735c6f.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

模板管理

这里提供了多个示例模板库，我建议安装“Deafult Prompts”和“Experimental Package”作为我们参考的范例。

![](https://proxy-prod.omnivore-image-cache.app/0x0,syl1uxj3ShdKPoEiboGKmLM6Tj0kEYpv-X5UP6HW0W2g/https://cdn.sspai.com/2024/03/04/d5877f9b402f3c61ca56e3edaa0fe557.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

模板文件会安装在之前配置的“模版保存路径”下，我之前配置了路径为“Extras/textgenerator/prompts”，因此模板文件夹就放在该文件夹下。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjBI-e8sSfyyqjCO_wJv8jA0skiVT-vmq1bTY5r8FSYw/https://cdn.sspai.com/2024/03/04/a81ea6b099970462a635093859c1f784.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

### **3\. 使用示范**

我提供2个我常使用的场景，抛砖引玉，希望能够看到更多在obsidian中集成大模型的用法。

#### **用法1：改写文本**

改写或润色文本是我最常使用的场景之一。我会利用大模型的能力来帮助我改进自己的文字，修正不恰当的表述和重复的表述。

在官方提供的默认库中，有一个`rewrite`模板提供了类似的功能。但默认是英文，我们可以直接修改该模板的内容。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s652mf-Uceos0W_eMZwObBpeGncK2AcfCDYKjmu4joRM/https://cdn.sspai.com/2024/03/04/d123621dc53d486ef9c2e06e1efbf0db.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

将正文内容修改为以下信息：

```crystal
作为一名中文写作改进助理，你的任务是改进所提供文本的拼写、语法、清晰、简洁和整体可读性，同时分解长句，减少重复，并提供改进建议。请只提供文本的更正版本，避免包括解释。

===

{{tg_selection}}

***

{{output}}
```

![](https://proxy-prod.omnivore-image-cache.app/0x0,svxZhbfFAX2CVHbW8Y2lHvr69QFUDRUYMBogidYPtzuE/https://cdn.sspai.com/2024/03/04/8b22971bebed3148283d1bba4d9dfc61.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

接下来选中需要重写的文字，调出控制面板，输入“Text Generator”，找到“Text Generator: Templates: Generate & Insert”，再找到名为“rewrite”的模板，就可以让大模型重写文本了。

#### **用法2：总结多个文件生成周报**

除了常规用法之外，如果写一点java script代码，还能够实现更多功能，这里我提供一个总结每日笔记中运动记录并生成markdown表格的例子。

首先我们需要在text generator设置中允许执行java script脚本。

进入Text Generator设置，在"Template Settings"下，将“Allow scripts”选项打开。

![](https://proxy-prod.omnivore-image-cache.app/0x0,smCcevaFZZ4Zo3C6RNUZG1gROfanROnSag4vVkse03hI/https://cdn.sspai.com/2024/03/04/7f7c4cb8185abd4e510ee08df672feb7.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1)

我会在`weekly`文件夹下创建多个名字为日期的笔记，每一则笔记都由“运动记录”和“工作日记”两部分组成，当一周结束的时候，我希望汇总当周运动时间并输出在表格里。

这里会用到两个模板，一个模板（weeklySummary）用来预处理，也就是读取符合条件的记录，另一个模板（summaizeWeeklyRecords）用来调用大语言模型的能力处理文本。

我们可以在模板文件中增加以下内容，读取符合格式的文件，提取标题为“运动记录”下的内容，然后将所有符合条件的内容都拼接在一起并请求处理。

```typescript
{{#script}}
  let activeFile = app.workspace.getActiveFile();
  let currentDirPath = activeFile.parent.path;
  let filesInDir = app.vault.getFiles();
  let regex = /^\d{4}-\d{2}-\d{2}.md$/; // 读取符合 4个数字-2个数字-2个数字.md 的文件
  let filteredMarkdownFiles = filesInDir.filter(file => 
        file.path.startsWith(currentDirPath) &&
        regex.test(file.name) // Test if the file name matches the pattern
    );

  const contentArray = [];
  let weeklySummary = '';

  for (const file of filteredMarkdownFiles){
    notice("read from " + file.path);
    const sectionCache = app.metadataCache.getFileCache(file);
    const headingCache = sectionCache.headings?.filter(h => {
        return h.heading === "运动记录"
    })    
    if(headingCache?.length > 0) {
        const headingRange = {
            start: headingCache[0].position.start.offset,
            end: headingCache[0].position.end.offset,
        };
        const heading = headingCache[0].heading;
        const content = await read(file.path);

        if(!content) continue;
        const headingInRange = content.slice(headingRange.start, headingRange.end);
        const contentInNextRange = content.slice(headingRange.end);

        const level = headingInRange.match(/#{1,6}/)[0].length;
        const nextHeadingRegex = new RegExp(`(^|\\n)#{1,${level}}\\s`);

        const position = contentInNextRange.match(nextHeadingRegex);

        let contentRange;
        let positionEnd;

        if(position) {
            positionEnd = headingRange.end + position?.index;
            contentRange = content.slice(headingRange.end, positionEnd);
        }else {
            contentRange = content.slice(headingRange.end);
        }
        weeklySummary += file.name + ': ' + '\n\n';
        weeklySummary += contentRange+ '\n\n';
    }    
  }

    this.weeklyRecords = await run("default/summaizeWeeklyRecords", {selection: weeklySummary })
{{/script}}
```

第二模板文件写prompt

```armasm
请帮我提取文本中的运动记录，并以"日期"，"运动项目"，"总计时间"的维度输出为markdown格式的表格

{{selection}}

***

{{output}}
```

使用效果见视频

## **总结**

**高度集成**：与Obsidian的紧密集成使得用户可以在熟悉的环境中使用AI辅助。

**定制化程度高**：用户可以根据自己的需求调整模型和模板，实现个性化的内容生成。

### **不足之处**

**配置繁琐**：对于一些用户来说，Text Generator插件的配置可能比较复杂，需要一定的学习和实践。

**学习成本**：用户需要花时间了解如何有效地使用这个工具，包括掌握其配置和使用技巧。

Text Generator插件为我们这些Obsidian用户提供了一个强大的工具，便于和市面上各种大语言模型结合。虽然它带来了一定的学习成本，但其提供的定制化解决方案和扩展能力，无疑使它成为一个值得尝试的选择。

[![海拉鲁](https://proxy-prod.omnivore-image-cache.app/0x0,sbXyULQ1Oop06W-Fj7bSs32bkvA6s_6-sx1dIzygWu1o/https://cdn-static.sspai.com/ui/otter_avatar_placeholder.png)](https://sspai.com/u/c2vngcyw/updates)

---

