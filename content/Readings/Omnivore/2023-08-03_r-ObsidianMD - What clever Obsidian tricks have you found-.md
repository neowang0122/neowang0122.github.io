---
id: 8254f397-5e1a-487e-a13a-9d533f06b5fb
title: |
  r/ObsidianMD - What clever Obsidian tricks have you found?
author: |
  unknown
date_saved: 2023-08-03 03:30:44
date_published: 2022-04-23 20:00:00
draft: true
---

# r/ObsidianMD - What clever Obsidian tricks have you found?
#Omnivore

[Read on Omnivore](https://omnivore.app/me/r-obsidian-md-what-clever-obsidian-tricks-have-you-found-189ba4e5c1a)

[Read Original](https://www.reddit.com/r/ObsidianMD/comments/uaxzhf/what_clever_obsidian_tricks_have_you_found)

date_saved: 2023-08-03 03:30:44

date_published: 2022-04-23 20:00:00

--- 

# Full Content: 

level 1

I have a large vault for Software Engineer interview prep where I do tons of interview problems and write out solutions, tagging them with their difficulty, which companies are known to ask them, etc. I use notes for each individual company (e.g. `Netflix.md`) where I write out questions I have for interviewers in non-tech rounds and their responses, as well as verified offer data for compensation. These also help with the graph view, color-coding the nodes and watching them grow and centralize as I collect more data on different companies or concepts.

But I also use these as "dashboards" for all the interview prep, using Dataview to search all my interview problem notes and display a table of them for this company, showing a hyperlink to the note, the difficulty, and whether I've actually solved it myself or just have an empty note or copy/pasted an article.

**EDIT:** [**Here's what it looks like**](https://imgur.com/a/Xfxl2zG)

```routeros
for (
  let group of dv.pages('#companies/Amazon')
                 .groupBy(p => p.difficulty)
  ) {
  dv.header(3, group.key?.charAt(0)?.toUpperCase() + group.key?.slice(1));
  dv.table(
    ["Name", "difficulty", "solved"],
    group.rows.map(k => [
                  k.file.link,
                  k.difficulty === 'hard' ? '🔴' : 
                    k.difficulty == 'medium' ? '🟠' : 
                    k.difficulty == 'easy' ? '🟢' : 
                    '\\-', 
                  k.solved ? '✔️' : '❌'
                ]
           )
    )
}

```

I have a remarkably similar DataViewJS query for the "Blind 75" list -- a 75-problem list curated by a Facebook Tech Lead a few years back that essentially covers the baseline knowledge of almost all known interview problems, giving you a serious high-return-low-time-sink list to start with before diving in further.

I also add `solutionPrimer` to the frontmatter metadata, where I boil the optimal solution down to just 1-line. Then I memorize these one-liner solutions, as they're enough to make sure I go down the right path in an interview and remind me of a potential solution, while not having to memorize 95% of the answer.

So my frontmatter might be (note the `solutionPrimer` field)

```yaml
---
title: 130. Surrounded Regions
categories:
  - leetcode
difficulty: medium
solved: true
solutionPrimer: DFS from borders, flip values
created: 2022-02-24T21:12:49-05:00
updated: 2022-03-24T19:29:19-04:00
concepts:
  - Arrays
  - Breadth-First Search
  - Depth-First Search
  - Matrix
companies:
  - Amazon
  - Bloomberg
  - Google
  - Uber
---

```

And the Dataview would be:

```routeros
for (
  let group of dv.pages()
                 .where(p => p.blind75 == true)
                 .groupBy(p => p.blind75category)
  ) {
  dv.header(3, group.key);
  dv.table(
    ["Name", "difficulty", "solved", "primer"],
    group.rows.sort(k => k.review, 'asc')
      .map(k => [
                  k.file.link,
                  k.difficulty === 'hard' ? '🔴' : 
                    k.difficulty == 'medium' ? '🟠' : 
                    k.difficulty == 'easy' ? '🟢' : 
                    '\\-', 
                  k.solved ? '✔️' : '❌',
                  k.solutionPrimer
                ]
           )
    )
}

```

---

A note on your #1, there's a plugin for finding images with no linked notes and removing them from your vault. This has been huge for me as I constantly remove stuff during review since I normally write way too much on the first pass. (See: how damn long this reddit comment was).

There's a plugin to rename images based on their hash to prevent duplicate images across notes, but I've found it's _really_ bad and did a lot of damage to my vault so don't use that one. Basically it didn't update the notes at all, only the image names. And duplicates are a small percentage of the image folder.

---

