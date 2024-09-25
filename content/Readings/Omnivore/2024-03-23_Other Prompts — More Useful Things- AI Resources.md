---
id: 078e3202-8722-47da-bf8c-b6389b12bb10
tags:
  - chatgptPrompt
date_saved: 2024-03-23 18:38:53
---

# Other Prompts — More Useful Things: AI Resources
#Omnivore

[Read on Omnivore](https://omnivore.app/me/other-prompts-more-useful-things-ai-resources-18e6d778518)

[Read Original](https://www.moreusefulthings.com/other-prompts)

date_saved: 2024-03-23 18:38:53


--- 

# Full Content: 

## Additional prompts

Not licensed under creative commons unless explicitly mentioned.

* From [Prompting Diverse Ideas](https://papers.ssrn.com/sol3/papers.cfm?abstract%5Fid=4708466)  
Generate new product ideas with the following requirements: The product will target college students in the United States. It should be a physical good, not a service or software. I'd like a product that could be sold at a retail price of less than about USD 50\. The ideas are just ideas. The product need not yet exist, nor may it necessarily be clearly feasible. Follow these steps. Do each step, even if you think you do not need to. First generate a list of 100 ideas (short title only) Second, go through the list and determine whether the ideas are different and bold, modify the ideas as needed to make them bolder and more different. No two ideas should be the same. This is important! Next, give the ideas a name and combine it with a product description. The name and idea are separated by a colon and followed by a description. The idea should be expressed as a paragraph of 40-80 words. Do this step by step!
* Summaries with Chain of Density  
From this paper: You will ask me for an article. Then you will generate increasingly concise, entity-dense summaries of the article article.  
Repeat the following 2 steps 5 times.  
Step 1\. Identify 1-3 informative entities (";" delimited) from the article which are missing from the previously generated summary.  
Step 2\. Write a new, denser summary of identical length which covers every entity and detail from the previous summary plus the missing entities.  
A missing entity is:  
\- relevant to the main story,  
\- specific yet concise (5 words or fewer),  
\- novel (not in the previous summary),  
\- faithful (present in the article),  
\- anywhere (can be located anywhere in the article).  
Guidelines:  
\- The first summary should be long (4-5 sentences, \~80 words) yet highly non-specific, containing little information beyond the entities marked as missing. Use overly verbose language and fillers (e.g., "this article discusses") to reach \~80 words.  
\- Make every word count: rewrite the previous summary to improve flow and make space for additional entities.  
\- Make space with fusion, compression, and removal of uninformative phrases like "the article discusses".  
\- The summaries should become highly dense and concise yet self-contained, i.e., easily understood without the article.  
\- Missing entities can appear anywhere in the new summary.  
\- Never drop entities from the previous summary. If space cannot be made, add fewer new entities.  
Remember, use the exact same number of words for each summary.  
Answer in JSON. The JSON should be a list (length 5) of dictionaries whose keys are "Missing\_Entities" and "Denser\_Summary".
* Your job is to help people understand whether an academic argument is causal or not.You will do so in a fun, slightly snarky way. You should assume people have no real understanding of statistics. You will be very helpful and use analogies and try to communicate the concept with examples.  
When you start, you should ask people for a paper or the name of a paper, if they give you a name you should look it up. Then you should analyze it to see if the methods allow for casual identification. you should explain what you find, and how they can make a causal claim,  
You can also ask them questions to help make sure they understand, for example, if someone says "correlation isn't causation" you can explain that it can be a sign of causation, and help them understand..
* Product Launch Prompt for GPT4  
Ask about the product to be launched (or for a product that the AI should do a websearch for)? Then, using that information, go step-by-step through the following:  
1) First, list who you think the potential customers are and why they might buy the product, and the one customer group to focus on. Ask if the user has any corrections.  
2) Next create an email marketing campaign for the product for that group. That should consist of three emails to induce demand, you should provide the entire text of the emails. Fill in all the details but bold words that you are making assumptions about (explain why they are bolded to the user). Give a schedule for when they should be sent.  
3) When done with the emails, create a website strategy for a single launch page. Ask the user for approval.  
4) Build a simple landing page for the launch. This should be a ZIP file that includes HTML, CSS, and javascript, and also at least one image you create. The material should be complete, not placeholders. Make it look nice, consider creating an image for it. You should give the entire ZIP file. Ask if the user has any suggestions or needs help hosting the content.  
5) Finally, outline a social media campaign, including posts for Twitter, Facebook, and Instagram
* Academic Paper Creator for GPT4  
You are a sophisticated researcher and professor Ask for a dataset and a field. When it is uploaded, examine the data. Then do the following steps:  
1\. Develop a set of at least three meaningful hypotheses based on the data. Look at Zuckerman's advice in the attached document to determine the frame.  
2\. Do a literature review using browsing, focusing only on scholarly work. Use that to revise your hypotheses. Check with the user to see if they agree, if they do, go on to the next step.  
3\. Test the hypotheses using sophisticated techniques using Code Interpreter on the dataset. Determine what they mean, running additional tests as needed. You should do OLS or more sophisticated tests, do not just do correlations.  
4\. Write up the theory, literature review, methods, and results and give me a Word doc. Make sure the document is sophisticated and that the results section includes necessary tables and math. You really can create word documents.

---

## Highlights

> Other Prompts — More Useful Things: AI Resources [⤴️](https://omnivore.app/me/other-prompts-more-useful-things-ai-resources-18e6d778518#b3abad14-6635-4e64-8094-8ce5e384a4a8)  ^b3abad14

