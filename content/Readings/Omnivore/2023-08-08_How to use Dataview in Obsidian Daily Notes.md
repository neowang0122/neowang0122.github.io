---
id: f97998af-16ae-4c51-bd1f-f31bfa82f85b
title: |
  How to use Dataview in Obsidian Daily Notes
author: |
  Ric Raftis
date_saved: 2023-08-08 00:08:02
date_published: 2022-12-11 19:39:26
draft: true
---

# How to use Dataview in Obsidian Daily Notes
#Omnivore

[Read on Omnivore](https://omnivore.app/me/how-to-use-dataview-in-obsidian-daily-notes-189d354946c)

[Read Original](https://medium.com/@ricraftis/how-to-use-dataview-in-obsidian-daily-notes-e3a2c9939c0c)

date_saved: 2023-08-08 00:08:02

date_published: 2022-12-11 19:39:26

--- 

# Full Content: 

![Example of computer code to represent dataview in Obsidian](https://proxy-prod.omnivore-image-cache.app/700x394,sBtazXYMqx4oL03Q0XcC2vxepv43Rzk65vtjpJyZGABk/https://miro.medium.com/v2/resize:fit:1400/0*IcE9q06m22iF-t29)

Photo by [Krishna Pandey](https://unsplash.com/@krishna2803?utm%5Fsource=medium&utm%5Fmedium=referral) on [Unsplash](https://unsplash.com/?utm%5Fsource=medium&utm%5Fmedium=referral)

Daily notes are an ideal way of keeping records of your day. It can frustrate though when you are keeping your journal in specific journaling software. Just one problem is that most of them are not platform agnostic and you cannot transfer from one program to another.

Recently, I had this problem with Diarium which provides a simple facility for importing from other journaling software, but export is limited. Because I have switched to Obsidian for all my note making, I wanted to keep my journal in there as well. It was difficult to do but Diarium lets you export to Word. It was a long-winded process involving conversion to plain text and then using a text editor, Atom, to insert tags etc. in every entry. Lots of content there for a separate article.

But, back to the topic at hand!

I find the best method for doing my Daily Notes is to have a template. You embed the location of the template in the Daily Notes plugin and then every Daily Note will open with that template ready to go.

![Daily notes in Obsidian options setup](https://proxy-prod.omnivore-image-cache.app/700x265,s_LQqppirU8J6oa2RdT5sls3Wzkn90kmfnB0cH9CDgJ0/https://miro.medium.com/v2/resize:fit:1400/1*8BU_pWeNGEZjW2bfIUFytA.png)

Image of authors Daily Notes options in Obsidian

There are several Daily Note templates floating around online and you can get some ideas by searching for that term. But, one thing I find really handy is including in my Daily Note the notes that I have created today and also the notes that I have worked on. I can achieve these lists with a couple of dataview queries which are shown below.

First, it can generate the Notes created today in a callout with dataview code included. An image of my Creation list is below.

![Image of Dataview callout showing notes taken in Obsidian today](https://proxy-prod.omnivore-image-cache.app/700x203,sdx9hoKcJyTRvCYE5LaPMp-hA8egu8XNcExilo5heiFA/https://miro.medium.com/v2/resize:fit:1400/1*jjoc2JHus5XoFPXArdqP2A.png)

Image created by author

and here is the code….

  
>[!EXAMPLE]- New Today  
>```dataview  
>LIST  
>WHERE file.cday = this.file.day  
>SORT file.name asc  
>```

I use the \[!EXAMPLE\] callout as the icon displays a list. You can change the icon in the callout code, but it is easier this way. You can find examples of all the different callouts on the [_Obsidian help site_](https://help.obsidian.md/How+to/Use+callouts)_._

Placing a — or a + immediately following the closing bracket allows the list to be folded and as you can see in the image above, there is a down arrow just after Today.

The Notes Last Touched Today or Last Modified Today is similar in its code structure, but looks for the date a file is modified and can also exclude directories. The image of mine appears below.

![](https://proxy-prod.omnivore-image-cache.app/700x196,sntbK7yS5awFT9csJd390U3NGwrm2OHmuC3Ia8FfgxTg/https://miro.medium.com/v2/resize:fit:1400/1*tWjh07n3pAdNL9LvloIjYA.png)

and here is the code:-

>[!EXAMPLE]- Modified Today  
>```dataview  
>LIST  
>WHERE file.mday = this.file.day  
>WHERE !contains(file.path, “Extras/”)  
>WHERE !contains(file.path, “Cards/Calendar/01 Daily Notes”)  
>SORT file.name asc  
>```

When looking at my modified files, I have no interest in the Daily Notes I modified or any Templates I may have adjusted. So you can exclude particular folders using the WHERE query and specifying the folder that you wish excluded. The syntax !contains means to ignore the file path shown in the brackets. If you use the top-level folder, it will exclude all the folders underneath. Note the difference with the Cards/Calendar/01 Daily Notes directory, where I am being far more specific about the folder to exclude.

## Summary

Dataview is a powerful plugin in Obsidian and has many uses. It can be a little technical, though I certainly don’t profess to be any expert. For help with Dataview queries, you can have a look at the [_Dataview sub channel on the Discord_](https://discord.com/channels/686053708261228577/1014259487445622855) server. Just a tip though, have a go at the code first and post what you have tried. It simply shows you are having a go yourself. A great place to start for simple queries is the [_Basic Dataview Query Builder_](https://s-blu.github.io/basic-dataview-query-builder/), that helps you structure your queries as you answer the questions.

> **Thanks! I really appreciate you reading my work. If you enjoyed this article and found it useful, you can clap (up to 50 times) and follow me for more articles. If you spotted something that wasn’t clear or wish to add to the content, please leave a comment below**.

---

