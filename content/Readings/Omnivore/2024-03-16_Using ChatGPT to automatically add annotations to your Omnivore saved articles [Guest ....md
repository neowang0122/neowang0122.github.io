---
id: 5e84eaee-fab7-4ba2-819d-1b2f397d0733
title: |
  Using ChatGPT to automatically add annotations to your Omnivore saved articles [Guest Post]
author: |
  Daniel Prindii, Omnivore
date_saved: 2024-03-16 04:13:02
date_published: 2024-02-01 07:02:14
draft: true
---

# Using ChatGPT to automatically add annotations to your Omnivore saved articles [Guest Post]
#Omnivore

[Read on Omnivore](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d)

[Read Original](https://blog.omnivore.app/p/using-chatgpt-to-automatically-add)

date_saved: 2024-03-16 04:13:02

date_published: 2024-02-01 07:02:14

--- 

# Full Content: 

### Today’s article is a guest post from our community member and developer Jan Beck about his project ==using ChatGPT to add annotations automatically in Omnivore.==

With the launch of OpenAI’s generative language model, ChatGPT, the possibility of using it to interact with your notes, documents, and searches, became available. We often have discussions within our community about how we can use generative AIs, in a helpful and secure way.

We asked Jan Beck, a developer and an Omnivore community member, about his side project using ChatGPT to add annotations automatically to saved items in Omnivore. Jan Beck is a passionate solopreneur and freelance web developer with 15+ years of experience in building user-friendly products and services for the web. His latest project is [WealthAssistant.app](https://www.wealthassistant.app/), a GPT-4-powered financial simulator built with privacy in mind to help anyone plan and realize their financial life goals.

 Here’s what Jan told us.

==His== ==[solution](https://github.com/jancbeck/omnivore-ai-annotations#readme)== ==is a serverless function that uses Omnivore’s API, Omnivore’s webhooks, and OpenAI’s chat completions API. It can be used to automatically add annotations when a specific label is added to items saved in Omnivore.== For example, you can use the _summarize_ tag to get the key insights from an article. The repository can be deployed using Vercel. It could work with other providers but hasn’t yet been tested with them.

Jan recorded a short demo video that walks us through the setup:

## A few things to keep in mind

We discussed with Jan and clarified a few pieces of information, to be sure everyone knows all the details.

### Bugs and technical support

The solution is not complicated to set up, but it may not be particularly user-friendly for those who aren't familiar with development. Jan, understandably, can’t offer support beyond bug fixes: “ I’d like to manage expectations from the start and also say I can't offer support beyond bug fixes if people have issues working with it. Vercel, OpenAI, and Omnivore all offer excellent documentation, however.”

### Costs

It was mentioned in the video that everything is free, but there are a few expenses regarding ==OpenAI and Vercel plans.== OpenAI pricing is based on tokens, and it can fluctuate depending on the LLM. Jan tested the system using GPT-3.5: “I tested this in the last few days, made about 100 API requests that used 450K tokens and it cost me $1.49\. Still, I’d add a disclaimer here and encourage people to use this sparingly in the beginning to understand how much usage is going to cost. 

==By default, the GPT-3.5 Turbo model with a 16K token window is used.== This can be changed to the more costly but smarter GPT-4 Turbo, with 128K tokens, via environment variables. For reference, [this article](https://blog.omnivore.app/p/mastering-the-reading-to-knowledge) used about 4K tokens to generate a one-paragraph summary, so the default model could handle an article 4 times larger.

Speaking of environment variables, an extra step is needed every time you change those. You will need to promote the last deployment to production (see screenshot). So, better to set those environment variables right at the initial setup of the project to avoid jumping through that hoop every time.”

[![image1.png](https://proxy-prod.omnivore-image-cache.app/1456x821,sQO0WJDWTXUPa7vtGicUz2Ekc6vBiJsnC1G9XvzNlESM/https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe841e5e6-b1c1-4e90-bcd4-5037cea8b2a1_1600x902.png "image1.png")](https://substackcdn.com/image/fetch/f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe841e5e6-b1c1-4e90-bcd4-5037cea8b2a1%5F1600x902.png)

  
==Vercel offers a free== ==[plan](https://vercel.com/pricing)====, called== **==Hobby,==** ==which supports 35 frameworks, Edge Network, Automatic CI/CD (Git Integration), and Functions (Serverless, Edge).== It should be enough for every user.

Jan’s testing used about 164 execution units out of the 500,000 quota and the function uses 0.04 /128 MB memory. “[Edge functions](https://vercel.com/docs/functions/edge-functions/limitations) must return a response after 25 seconds which could be an issue for **very long** AI generations and when OpenAI is slow. For 16K token models, this should not be an issue. Worst case, the function is stopped and the user receives an email about it.”

### Viewing the article notes

If you are using the iPad app, in the list view, Omnivore shows the article notes under each article.

[![image2.png](https://proxy-prod.omnivore-image-cache.app/960x1280,sH6mHj9R6OvQAyqGN-TozSGXiIcBkZUPgQAq6YNi2aHI/https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdf4143ae-58ed-414b-97f2-4f9c78f8c9e8_960x1280.png "image2.png")](https://substackcdn.com/image/fetch/f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdf4143ae-58ed-414b-97f2-4f9c78f8c9e8%5F960x1280.png)

## Conclusion

There are multiple possibilities for integrating AI, and Jan says this can be considered a “proof-of-concept for a native integration of AI into Omnivore. For example, you could highlight an article passage and write _fact check this_ or _explain_ and that could trigger GPT. Or give GPT access to [tools](https://platform.openai.com/docs/guides/function-calling) and render commands to it such as _highlighting every person that’s mentioned in the article and adding a note of their bio_. The whole UI could eventually become conversational and become the main way to interact with text.”

_Thanks, Jan, for the development work and for sharing it with us. We always love to see how the community is expanding the use of Omnivore. If any of you have other tools or workflows, let us know!_

_Editing and proofreading by [Steen Comer](https://mediapathic.net/)._

---

## Highlights

> using ChatGPT to add annotations automatically in Omnivore. [⤴️](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d#1f4949f7-0fbb-472e-9649-e40c97c890f0)  ^1f4949f7

> His [solution](https://github.com/jancbeck/omnivore-ai-annotations#readme) is a serverless function that uses Omnivore’s API, Omnivore’s webhooks, and OpenAI’s chat completions API. It can be used to automatically add annotations when a specific label is added to items saved in Omnivore. [⤴️](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d#6fd34c18-0706-4ff2-82c7-5c1c77f7af97)  ^6fd34c18

> OpenAI and Vercel plans. [⤴️](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d#b287daae-6d7a-426a-b364-1030a690a65e)  ^b287daae

> OpenAI pricing is based on tokens, and it can fluctuate depending on the LLM. Jan tested the system using GPT-3.5: [⤴️](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d#10d8bd21-ee93-442b-b027-dd7a58449934)  ^10d8bd21

> By default, the GPT-3.5 Turbo model with a 16K token window is used. [⤴️](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d#45cc9b3b-bd0e-49bd-9c7d-4a87886be7bc)  ^45cc9b3b

> Vercel offers a free [plan](https://vercel.com/pricing), called **Hobby,** which supports 35 frameworks, Edge Network, Automatic CI/CD (Git Integration), and Functions (Serverless, Edge). [⤴️](https://omnivore.app/me/using-chat-gpt-to-automatically-add-annotations-to-your-omnivore-18e46524d1d#6cd95801-ece6-4337-bc98-0df446c80a74)  ^6cd95801

