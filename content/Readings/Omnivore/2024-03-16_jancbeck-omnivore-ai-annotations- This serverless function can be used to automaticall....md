---
id: 6fde1756-a07e-4bf9-96b0-830710edaa2b
title: |
  jancbeck/omnivore-ai-annotations: This serverless function can be used to automatically add annotations to Omnivore articles when a specific label (say, "summarize") is added to them.
date_saved: 2024-03-16 04:42:59
---

# jancbeck/omnivore-ai-annotations: This serverless function can be used to automatically add annotations to Omnivore articles when a specific label (say, "summarize") is added to them.
#Omnivore

[Read on Omnivore](https://omnivore.app/me/jancbeck-omnivore-ai-annotations-this-serverless-function-can-be-18e466db8dd)

[Read Original](https://github.com/jancbeck/omnivore-ai-annotations)

date_saved: 2024-03-16 04:42:59


## Highlights

> jancbeck/omnivore-ai-annotations: [⤴️](https://omnivore.app/me/jancbeck-omnivore-ai-annotations-this-serverless-function-can-be-18e466db8dd#9bf8037b-fe2f-4bd1-a277-d24290f557a7)  ^9bf8037b

> jancbeck/omnivore-ai-annotations: This serverless function can be used to automatically add annotations to Omnivore articles when a specific label (say, "summarize") is added to them. [⤴️](https://omnivore.app/me/jancbeck-omnivore-ai-annotations-this-serverless-function-can-be-18e466db8dd#93df2ca4-a433-4400-8107-197af5033a3d)  ^93df2ca4

标题：Let ChatGPT annotate Omnivore articles for you
作者：Unknown
标签：API, webhooks, serverless function, Omnivore, OpenAI

一句话总结：该文介绍了如何使用ChatGPT自动为Omnivore文章添加注释。

摘要：本文介绍了一个使用ChatGPT自动为Omnivore文章添加注释的serverless函数。它利用了Omnivore的API和webhooks以及OpenAI的chat completions API。文章详细介绍了如何使用该函数，推荐使用Vercel进行部署，并提供了Vercel的设置步骤。同时，文章还提供了开发和本地测试的指导，并列举了API的端点。最后，作者给出了一些建议，如使用文章中的高亮部分进行对话或让模型为文章添加高亮等。

大纲：
- 概述
- 如何使用
- Vercel设置
- Omnivore Webhook设置
- 开发
- API端点
- 本地测试
- 许可证
- 点子

---

第一步，请详细叙述大纲中每一部分的内容：

- 概述：介绍了该文的目的和内容，以及使用ChatGPT自动为Omnivore文章添加注释的方法。
- 如何使用：介绍了使用Vercel进行部署和设置步骤，并说明了需要的环境变量。
- Vercel设置：具体说明了如何在Vercel中添加repo以及设置环境变量。
- Omnivore Webhook设置：介绍了在Omnivore中设置webhook的步骤，包括设置URL和事件类型。
- 开发：说明了如何克隆和部署应用，并提供了运行应用的命令。
- API端点：列出了可用的API端点，包括\\"/api/annotate\\"。
- 本地测试：提供了使用Postman进行本地测试的方法。
- 许可证：说明文中所使用的许可证类型。
- 点子：给出了一些扩展的点子，如利用文章中的高亮部分进行对话等。

第二步，总结文章的结论：本文介绍了如何使用ChatGPT自动为Omnivore文章添加注释的方法，通过使用Omnivore的API和webhooks以及OpenAI的chat completions API，使得自动添加注释变得更加便利。

第三步，列举读这篇文章，我可以学到哪些知识？
- 学习如何使用ChatGPT自动为Omnivore文章添加注释
- 了解如何使用Omnivore的API和webhooks以及OpenAI的chat completions API
- 掌握使用Vercel进行部署和设置的方法
- 学习如何在Omnivore中设置webhook
- 掌握开发和本地测试的方法
- 了解API的端点和如何进行本地测试
- 了解文中所使用的许可证类型
- 获得一些扩展的点子，如利用文章中的高亮部分进行对话等。

第四步，针对文章的内容，提出三个用户在阅读的过程中可能会有的疑问：
1. 使用Vercel进行部署是否有其他替代方案？
2. 如何正确设置环境变量以确保API能够正常工作？
3. 在Omnivore中设置webhook时，如何选择正确的事件类型？


--- 

# Full Content: 

## Let ChatGPT annotate Omnivore articles for you

[](#let-chatgpt-annotate-omnivore-articles-for-you)

## Overview

[](#overview)

This serverless function can be used to automatically add annotations to Omnivore articles when a specific label (say, "summarize") is added to them. It uses Omnivore's [API](https://docs.omnivore.app/integrations/api.html) and [webhooks](https://docs.omnivore.app/integrations/webhooks.html) as well as [OpenAI's chat completions API](https://platform.openai.com/docs/guides/text-generation).

## How to Use

[](#how-to-use)

For most convenience, deployment using [Vercel](https://vercel.com/) is recommended. Theoretically it could work on other serverless functions providers but I have only tested it with Vercel. Vercel offers a free hobby plan that should cover basic usage of this function.

Deploy the example using Vercel:

[![Deploy with Vercel](https://proxy-prod.omnivore-image-cache.app/0x0,sSnyGZ2HV6ocXJMT5qZeSj4kNby0gw7HuqwoaNw1Ny1s/https://camo.githubusercontent.com/0d115430c1db17132964386282927e5e313543c7d868fc06bc9a7c65d7ec974e/68747470733a2f2f76657263656c2e636f6d2f627574746f6e)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjancbeck%2Fomnivore-ai-annotations%2Ftree%2Fmain&env=OMNIVORE%5FAPI%5FKEY,OPENAI%5FAPI%5FKEY,OMNIVORE%5FANNOTATE%5FLABEL,OPENAI%5FPROMPT&envDescription=API%20keys%20are%20required.%20OMNIVORE%5FANNOTATE%5FLABEL%20is%20the%20name%20label%20that%20should%20trigger%20the%20workflow.%20OPENAI%5FPROMPT%20contains%20instructions%20for%20the%20AI%20model.&envLink=https%3A%2F%2Fgithub.com%2Fjancbeck%2Fomnivore-ai-annotations%2Ftree%2Fmain%23vercel-setup)

## Vercel Setup

[](#vercel-setup)

When adding the repo to Vercel, set the [environment variables](https://vercel.com/docs/projects/environment-variables) to make the APIs work and allow customization.

* `OMNIVORE_API_KEY` (required): omnivore.app --> [API Key](https://omnivore.app/settings/api)
* `OPENAI_API_KEY` (required): platform.openai.com --> [API Keys](https://platform.openai.com/api-keys)
* `OMNIVORE_ANNOTATE_LABEL` (optional): set this to the name of label you want to use to trigger processing. Example: "Summarize" (without quotes). Not required if you use the `PAGE_CREATED` Omnivore webhook event type which process every article added to Omnivore.
* `OPENAI_PROMPT` (required): the instruction that's send to OpenAI's GPT model in addition to the article content.
* `OPENAI_MODEL` (optional): the [model name](https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo) to use. Defaults to "gpt-3.5-turbo-16k" (without quotes).
* `OPENAI_SETTINGS` (optional, advanced): additional [request parameters](https://platform.openai.com/docs/api-reference/chat/create) send when generating the chat completion. Use JSON. Example: `{"temperature": 0, "seed": 1234}`.

Deploy and copy the URL of your deployment.

### Omnivore Webhook Setup

[](#omnivore-webhook-setup)

In Omnivore add a new [webhook](https://omnivore.app/settings/webhooks) and set the URL to the deployed Vercel function URL from the step above and add the path `/api/annotate` to it. Example: `https://projectname.vercel.app/api/annotate`

If you have defined a label name to listen for in the step above, then select `LABEL_ADDED` as event type. If you want the function to process every article you add to Omnivore, then instead select `PAGE_CREATED`.

Now either add a new article to Omnivore or your label to an existing article. Within less than a minute, the response of the model's completion should appear in the notebook of the article.

Check the [runtime logs](https://vercel.com/docs/observability/runtime-logs) if you encounter issues. Check your API keys and never share them publicly.

## Development

[](#development)

### Clone and Deploy

[](#clone-and-deploy)

git clone https://github.com/jancbeck/omnivore-ai-annotations

Install the Vercel CLI and dependencies:

Then run the app at the root of the repository:

## API Endpoints

[](#api-endpoints)

* **POST /api/annotate**: Annotates an article with an AI generated response.

### Local testing with Postman

[](#local-testing-with-postman)

1. **Local Testing**: Vercel offers a local development environment using the `vercel dev` command. Run this command in your project directory.
2. **Postman Setup**: Open Postman and create a new request. Set the request type to whatever your function expects (likely POST or GET).
3. **Request URL**: Use `http://localhost:3000/api/annotate` as the URL, replacing `3000` with whatever port `vercel dev` is using.
4. **Send Request**: Click "Send" in Postman to trigger the function.

Observe the response and terminal output for logging information.

## License

[](#license)

MIT License.

## Ideas

[](#ideas)

* use individual article highlights to allow "chatting" within Omnivore (e.g. highlight text, add note "explain" and GPT will generate the highlight with a reply based on the prompt and context.
* instruct the model to highlight the article for you via [function calls](https://platform.openai.com/docs/guides/function-calling). Perhaps using the article notebook as an instruction input.
