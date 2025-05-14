---
id: fb01959d-c8af-479d-b6d9-58d364d74620
title: |
  我每天 7 天、24 小时录制自己的音频，并使用人工智能来处理信息。这就是未来吗？ --- I record myself on audio 24x7 and use an AI to process the information. Is this the future?
author: |
  unknown
date_saved: 2024-03-23 00:34:42
date_published: 2022-11-14 05:00:00
draft: true
---

# 我每天 7 天、24 小时录制自己的音频，并使用人工智能来处理信息。这就是未来吗？ --- I record myself on audio 24x7 and use an AI to process the information. Is this the future?
#Omnivore

[Read on Omnivore](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d)

[Read Original](https://roberdam.com/en/wisper.html)

date_saved: 2024-03-23 00:34:42

date_published: 2022-11-14 05:00:00

--- 

# Full Content: 

What will happen when our phones record everything we say 24x7 using AI to process that information?, before someone else does, I tried to do it myself, and this is the result.  
当我们的手机7天24小时记录我们所说的一切并使用人工智能处理这些信息时，会发生什么？在别人这样做之前，我尝试自己做，这就是结果。

#### First of all some clarifications.  
首先进行一些澄清。

* It’s not really 24x7 because I didn’t find it useful to leave it ON at night (maybe if I was a sleep talker it would be useful), but for now I leave it ON from when I wake up until I go to sleep, and I turn it off if I’m in a situation where I don’t think it’s appropriate.  
==它并不是真正的 24x7，因为我发现在晚上将其打开没有用（也许如果我是一个梦话者，它会很有用），但现在我从醒来到入睡都将其打开，如果我处于我认为不合适的情况，我就会将其关闭==。
* This is a “proof of concept” and not yet ready for production, everything described here works but probably “glued with tape”, several of the processes are probably not automated or polished.  
这是一个“概念验证”，尚未准备好进行生产，这里描述的所有内容都可以工作，但可能“用胶带粘合”，其中几个过程可能没有自动化或完善。

## MOTIVATION. 动机。

I was doing an analysis a few years ago that show that the trend of increasing storage and lowering costs would result in smartphones with 1tb of space (to date there are already 38 models with that capacity), with this in mind, the question was: What would be the practical implications?, One of them was precisely that the smartphones will be able to record audio 24x7.  
几年前我做了一个分析，表明增加存储和降低成本的趋势将导致智能手机拥有 1tb 的空间（迄今为止已经有 38 款具有该容量的型号），考虑到这一点，问题是：这会产生什么实际影响？其中之一就是智能手机将能够 24x7 录制音频。

With the release of OpenAi’s Whisper weeks ago, the stars are aligning to find the application of what could potentially be the future, and as the phrase “the best way to predict the future is to create it” says, this prototype is just an experiment to anticipate the future and have a window to what is possible  
随着几周前 OpenAi 的 Whisper 的发布，众星们正在齐心协力寻找未来可能的应用，正如“预测未来的最好方法就是创造未来”这句话所说，这个原型只是一个实验预测未来并了解可能性

## HOW DOES IT WORK.  
它是如何工作的。

I bought a couple of Chinese microphones, I wear them and turn them on all day recording everything I speak, at the end of the day the files are processed with OpenAi’s Whisper and transformed into text files from which the information is extracted.  
我买了几个中国麦克风，戴上它们，整天打开它们记录我所说的一切，最后，这些文件会用 OpenAi 的 Whisper 进行处理，并转换为文本文件，从中提取信息。

In that context I realized that you could create a rudimentary “Ok Google” style “Digital Assistant” to actively take advantage of the fact that it was recording everything anyway.  
在这种情况下，我意识到你可以创建一个基本的“Ok Google”风格的“数字助理”，以积极利用它记录一切的事实。

So I would have two types of information that I can generate and extract on a day-to-day basis:  
==因此，我每天可以生成和提取两种类型的信息：==  

* **==Active:==** ==I consciously tell the “Assistant” what to do==  
==主动：我有意识地告诉“助理”该做什么==
* **==Passive:==** ==is all the rest of the information that is extracted without requiring any action on my part.==  
==被动：是无需我执行任何操作即可提取的所有其余信息。==

### Active functions: 主动功能：

They are the ones that, by using a keyword I am going to indicate that they will be processed asynchronously (at the end of the day). For example if I decide that the keyword is   
通过使用关键字，我将表明它们将被异步处理（最终）。例如，如果我决定关键字是  

`"Robert"`   

Every time I speak that word I am indicating that everything I say after that will be taken as a command to my assistant until I say again  
每次我说这个词时，我都表明我之后所说的一切都将被视为对我的助手的命令，直到我再说一遍

`"End Robert"`

Once the audio of the day is processed and transformed into text, a program takes care of searching the text for the command and extracts everything between `"Robert"` and `"end Robert" `  
一旦当天的音频被处理并转换为文本，程序就会负责在文本中搜索命令并提取 `"Robert"` 和 `"end Robert" ` 之间的所有内容

For example to register my weight for the day I simply say out loud  
例如，要登记当天的体重，我只需大声说出来

`"Robert WEIGHT 60.1 end Robert"`

The format I define then is  
我定义的格式是

`"KEYWORD COMMAND data END KEYWORD"`

This way I generate commands for my assistant asynchronously.  
这样我就可以异步地为我的助手生成命令。

The immediate question that arises is:  
直接出现的问题是：

### Why not just use “OK GOOGLE”?  
为什么不直接使用“OK GOOGLE”呢？

  
Here are my main reasons  
 这是我的主要原因

* **Limited Commands:** My biggest problem with “OK Google” is that I don’t know by heart what it can do interactively and it wich commands will just return as a google search.  
有限的命令：我对“OK Google”最大的问题是，我不知道它可以交互地做什么，而且它的命令只会作为谷歌搜索返回。
* **Privacy:** “OK Google” commands are saved in google with the full audio file, try entering google order history and you will be able to hear your voice, and many times the music and conversations in the background when you order commands to Google.  
隐私：“OK Google”命令与完整的音频文件一起保存在谷歌中，尝试输入谷歌订单历史记录，您将能够听到您的声音，以及很多时候当您向谷歌订购命令时后台的音乐和对话。
* **Synchronous:** When you send a command to Google, there is a delay, sometimes several seconds to receive the command, and another to see if it correctly understood what you said, this in my experience cut the flow and distracts you from the activity you are doing and makes it slower than just using the keyboard.  
==同步：当您向 Google 发送命令时，会出现延迟，有时需要几秒钟的时间来接收命令，然后再用另一秒钟来查看它是否正确理解您所说的内容，根据我的经验，这会切断流程并分散您对当前活动的注意力这样做会比仅使用键盘慢。==

In this experiment all these points are solved:  
在这个实验中，所有这些问题都得到了解决：

* **Limited Commands:** Commands are defined by me so I know what to say.  
有限的命令：命令是由我定义的，所以我知道该说什么。
* **Privacy:** I own the entire process, 100% privacy  
隐私：全程我自己，100%隐私
* **Synchronous:** It’s asynchronous, I don’t have to wait for any response, I just say the command while I’m doing something else and trust that it will be executed at the end of the day.  
同步：它是异步的，我不必等待任何响应，我只需在做其他事情时说出命令并相信它会在一天结束时执行。

### DISADVANTAGES 缺点

This approach also has its drawbacks:  
这种方法也有其缺点：

* The commands that I send will not be executed until the end of the day, so it will not serve to remind me of something that I have to do that same day.  
我发送的命令要到当天结束时才会执行，因此它不会提醒我当天必须做的事情。
* Being asynchronous, I will not find out if what I requested was successfully processed until the end of the day.  
由于是异步的，直到一天结束时我才会知道我的请求是否已成功处理。

## SHOW ME THE RESULTS NOW.  
现在就给我看看结果。

### HOW IT WORKS IN ONE DAY.  
一天如何运作。

![title for image](https://proxy-prod.omnivore-image-cache.app/0x0,sVytDjarXHS04wAgqmWrfiQq8I9SG4M0W4Zk2NpDoTBE/https://roberdam.com/assets/images/balanza.jpg)

'Robert WEIGHT 62.8 end Robert'  
“罗伯特体重 62.8 结束罗伯特”

![title for image](https://proxy-prod.omnivore-image-cache.app/0x0,s07c1E4p9l7_NETapTUt6gOwjO6Oukno6TskMINTLGLw/https://roberdam.com/assets/images/reloj1.jpg)

'Robert SLEEP 7 hours 14 minutes end Robert'  
“罗伯特睡7小时14分钟结束罗伯特”

**ANALOG API:** Several electronic devices have connectivity only with my cell phone and have no way to export that information, now I use my assistant as an _“Analog API”_ to communicate and centralize information between several devices.  
模拟API：一些电子设备只能与我的手机连接，无法导出这些信息，现在我使用我的助手作为“模拟API”来在多个设备之间通信和集中信息。

![title for image](https://proxy-prod.omnivore-image-cache.app/0x0,suH_qKaR4skIr67Qf2CPFa9tkroxQ8UofbUnm5gGrCxc/https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60%20600w)

'Robert LUNCH two toasts with a fried egg end Robert'  
“罗伯特午餐两块烤面包加一个煎蛋结束罗伯特”

**CALORIES AND MEALS COUNT:** I indicate out loud all the meals of the day, at the end of the day I can have the list of meals consumed in the day and use an external API to calculate the calories consumed in each meal.  
卡路里和膳食计数：我大声指出一天中的所有膳食，在一天结束时，我可以获得当天消耗的膳食列表，并使用外部 API 来计算每顿饭消耗的卡路里。

Or I can just make a routine for the assistant to register the calories of the food by reading it from the package.  
或者我可以为助理制定一个例程，通过从包装上读取食物的卡路里来记录食物的卡路里。

![title for image](https://proxy-prod.omnivore-image-cache.app/0x0,sTr-tGCGGC_yjZPfBRpEUiSylUsq57_kBXQA427PQqiI/https://images.unsplash.com/photo-1618592863692-a4363448a8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpdmluZyUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60%20600w)

'Robert NOTE the podcast talks about Morgan Housel's book the psychology of money end Robert'  
“罗伯特注意播客谈论摩根豪塞尔的书《金钱终结罗伯特的心理学》”

**NOTES:** I take notes that are going to be centralized or I can summarize ideas without taking my hands off the wheel.  
笔记：我会集中做笔记，或者我可以在双手不离开方向盘的情况下总结想法。

![title for image](https://proxy-prod.omnivore-image-cache.app/0x0,sby3QfxiT5sNQgvQudg474DAMDnhJHtpHgNu0DijqO28/https://images.unsplash.com/photo-1579445668832-329a98bdff57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FzJTIwc3RhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60%20600w)

'Robert SPENT 250,000 on fuel end Robert'  
“罗伯特在燃油端花费了 250,000 美元，罗伯特”

**EXPENSES:** Every expense I make during the day I repeat it out loud to record it.  
开支：我白天花的每一笔开支我都会大声重复并记录下来。

It feels a little strange to be “talking to myself” but it also frees me from the cell phone screen or from having to wait for any return and just talk trusting that what you are asking for will be executed later.  
“自言自语”感觉有点奇怪，但它也让我从手机屏幕中解放出来，或者不必等待任何返回，只需交谈，相信你所要求的将在稍后执行。

## THE CONTROL PANEL. 控制面板。

The result of all the information that I explicitly indicate to my assistant can be centralized in a daily control panel:  
我向我的助手明确指示的所有信息的结果都可以集中在日常控制面板中：

![CONTROL PANEL](https://proxy-prod.omnivore-image-cache.app/0x0,sX4jWYyM_skSRNB5_HpWqC1S52y9k3WZpUhJAiZILANc/https://roberdam.com/en/assets/images/salud1-en.jpg) ![CONTROL PANEL 2](https://proxy-prod.omnivore-image-cache.app/0x0,suzqkTcmJkNK7MRutR_ZIiFhOgnJ2ZRNXey46p-0VsJs/https://roberdam.com/en/assets/images/expenses-notes.png)

The control panel is a basic example of what we can do with the information that we naturally feed our assistant with.  
控制面板是一个基本示例，说明我们可以如何利用我们自然提供给助手的信息。

---

Do our days all pass the same? We don’t know where the hours went? We can also create _“My Journal”_ so that it generates a summary of what we did that day.  
我们的日子过得都一样吗？我们不知道时间都去哪儿了？我们还可以创建“我的日记”，以便它生成我们当天所做的事情的摘要。

![DIARY](https://proxy-prod.omnivore-image-cache.app/0x0,snaU9vucG2WhmsZ7nYzv6btWEdxpTju-KCl7pFE9g7oQ/https://roberdam.com/en/assets/images/journal-es.png)

Initially I am implicitly saying out loud what I am doing, but ideally it would be possible to do it automatically according to the context of what was spoken and the clock time, at the end of the day it generates a _“Journal”_ of everything what i did in the day  
最初，我含蓄地大声说出我在做什么，但理想情况下，可以根据所说的内容和时钟时间自动执行，在一天结束时，它会生成一份包含所有内容的“日志”我白天做的

All **Active** features require conscious action on my part that will translate in results I expect from our assistant.  
所有主动功能都需要我有意识地采取行动，这将转化为我期望从我们的助手那里得到的结果。

But the interesting results will be in the **Passive** information that we get for the simple fact of recording our daily conversation, some of the ideas are:  
但有趣的结果将出现在我们通过记录日常对话这一简单事实而获得的被动信息中，其中一些想法是：

## PASSIVE INFORMATION - IN PROGRESS!  
被动信息 - 正在进行中！

---

#### RELATIONSHIP THERMOMETER  
关系温度计

According to studies on couple relationships, it is possible to predict with an accuracy of up to 90% if the couple is going to divorce by studying the interactions, specifically the relationship between positive and negative interactions between the couple:  
根据夫妻关系研究，通过研究夫妻之间的互动，特别是夫妻之间积极和消极互动之间的关系，可以高达 90% 的准确率预测夫妻是否会离婚：

<https://www.gottman.com/blog/the-magic-relationship-ratio-according-science/>

The magic ratio is 5 to 1 according to this study, for every negative interaction during the conflict a stable and happy couple has 5 positive interactions.  
根据这项研究，神奇的比例是 5 比 1，冲突期间每出现一次消极互动，一对稳定而幸福的夫妻就会有 5 次积极互动。

#### SENTIMENT ANALYSIS. 情绪分析。

I can try to do a sentiment analysis by hour and situation to be able to identify under which situations the greatest stress, relaxation, happiness and sadness are generated during the day.  
我可以尝试按小时和情况进行情绪分析，以便能够确定白天在哪些情况下会产生最大的压力、放松、快乐和悲伤。

Do I use positive or negative adjectives when referring to a topic or person?  
在提及某个话题或某个人时，我使用积极还是消极的形容词？

#### TOTAL RECALL. 全面召回。

Implement a search engine to show, for example, all the instances where I talk about X topic, or what my opinion was at some point about X topic.  
例如，实现一个搜索引擎来显示我谈论 X 主题的所有实例，或者我在某个时刻对 X 主题的看法。

---

## PRELIMINARY CONCLUSIONS.  
初步结论。

* **I’m a little less paranoid if everything I say is recorded:**  
**如果我所说的一切都被记录下来，我就不会那么偏执了：**  
In my tests, using the cell phone and letting it record audio at the distance where it would normally be, the accuracy with which it is transcribed is quite mediocre - according to the distance - I would say that it is around 50% or less accurate, that would still allow me to eventually capture if I am talking about a brand to advertise, but not enough to do something precise or complex, I do not leave aside that those who can have access to the audio of the phones already have AI models that improve quality but my tests give me a bit more peace of mind in that regard, it’s not as easy as it seemed to record 24x7 and get something out accurately enough to do something important.  
在我的测试中，使用手机并让它在正常的距离录制音频，转录的准确度相当平庸 - 根据距离 - 我想说它的准确度约为 50% 或更低，如果我正在谈论一个品牌进行广告，这仍然可以让我最终捕获，但不足以做一些精确或复杂的事情，我不会忽略那些可以访问手机音频的人已经拥有人工智能模型这可以提高质量，但我的测试让我在这方面更加安心，这并不像 24x7 记录并足够准确地得到一些东西来完成重要的事情那么容易。
* **In addition to the audio, the context is needed:**  
**除了音频之外，还需要上下文：**  
Reading the result of the transcripts, without the proper context (time, location, who I am talking to, the previous context of what was said) is very limiting  
在没有适当的上下文（时间、地点、我正在与谁交谈、之前所说内容的上下文）的情况下阅读笔录的结果是非常有限的
* **The potential to get this right is immense, both positive and negative:**  
**实现这一点的潜力是巨大的，无论是积极的还是消极的：**  
**==POSITIVE== ==积极的==**  
**==Perfect Memory==** ==: Something magical is basically being able to perfectly “relive” everything I did that day, from trivial conversations and knowing their context, something that is lost in the ether today can remain available now==.  
完美记忆：神奇的东西基本上是能够完美地“重​​温”我那天所做的一切，从琐碎的对话和了解他们的背景，今天在以太中丢失的东西现在仍然可用。  
**Personal Psychologist/Coach** : Recording everything that came out of our mouths, every interaction we had, and analyzing that can give us a vision perhaps impossible until now to have, a psychologist/coach in real time who accompanies us to everywhere.  
私人心理学家/教练：记录从我们嘴里说出的一切，我们进行的每一次互动，并进行分析，可以给我们一个迄今为止可能不可能拥有的愿景，一个实时陪伴我们到任何地方的心理学家/教练。  
**A virtual clone** : Imagine training a GPT3 with everything you said in the last year?, and making it, under certain parameters, answer your messages, or manage your agenda.  
虚拟克隆：想象一下用你去年所说的一切来训练 GPT3？并使​​其在某些参数下回答你的消息或管理你的议程。  
    
**NEGATIVES 负面因素**  
 Exactly the same points, but in the hands of someone other than us.  
完全相同的点，但在我们以外的人手中。

The difference between utopia or dystopia is who has access to that information  
乌托邦和反乌托邦之间的区别在于谁有权访问该信息

---

\* Header image generated with Stabledifussion

---

## Highlights

> 我每天 7 天、24 小时录制自己的音频，并使用人工智能来处理信息。这就是未来吗？ --- I record myself on audio 24x7 and use an AI to process the information. Is this the future? [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#1696dd08-e675-4c71-836d-34ea156def5a)  ^1696dd08

> 它并不是真正的 24x7，因为我发现在晚上将其打开没有用（也许如果我是一个梦话者，它会很有用），但现在我从醒来到入睡都将其打开，如果我处于我认为不合适的情况，我就会将其关闭 [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#220aee7a-42da-42ef-826d-a697e2d4b40f)  ^220aee7a

> 因此，我每天可以生成和提取两种类型的信息：  
> 
> * **Active:** I consciously tell the “Assistant” what to do  
> 主动：我有意识地告诉“助理”该做什么
> * **Passive:** is all the rest of the information that is extracted without requiring any action on my part.  
> 被动：是无需我执行任何操作即可提取的所有其余信息。 [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#b952f409-d53b-4c26-b923-1b326857d747)  ^b952f409

> 同步：当您向 Google 发送命令时，会出现延迟，有时需要几秒钟的时间来接收命令，然后再用另一秒钟来查看它是否正确理解您所说的内容，根据我的经验，这会切断流程并分散您对当前活动的注意力这样做会比仅使用键盘慢。 [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#571163cb-5361-458b-a70e-4d19ddebc6e8)  ^571163cb

> **In addition to the audio, the context is needed:** 
> **除了音频之外，还需要上下文：**   
> Reading the result of the transcripts, without the proper context (time, location, who I am talking to, the previous context of what was said) is very limiting  
> 在没有适当的上下文（时间、地点、我正在与谁交谈、之前所说内容的上下文）的情况下阅读笔录的结果是非常有限的 [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#a52d5829-cca1-4a67-9c96-50752287d873)  ^a52d5829

> **POSITIVE 积极的**  
> **Perfect Memory** : Something magical is basically being able to perfectly “relive” everything I did that day, from trivial conversations and knowing their context, something that is lost in the ether today can remain available now [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#d1bd0437-705e-4e8c-acc4-44be3e7fdc69)  ^d1bd0437

> **Personal Psychologist/Coach** : Recording everything that came out of our mouths, every interaction we had, and analyzing that can give us a vision perhaps impossible until now to have, a psychologist/coach in real time who accompanies us to everywhere. [⤴️](https://omnivore.app/me/7-24-i-record-myself-on-audio-24-x-7-and-use-an-ai-to-process-th-18e6996eb2d#169ef739-3480-447b-b97e-6cb029ae13ab)  ^169ef739

