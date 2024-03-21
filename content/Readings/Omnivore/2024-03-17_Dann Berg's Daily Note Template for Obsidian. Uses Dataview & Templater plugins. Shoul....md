---
id: 83c3fba0-4223-4f2b-8e78-dbcbb2bf5fc1
title: |
  Dann Berg's Daily Note Template for Obsidian. Uses Dataview & Templater plugins. Should be saved as a Markdown file in Obsidian. Read the full tour: https://dannb.org/blog/2022/obsidian-daily-note-template/
author: |
  dannberg
date_saved: 2024-03-17 13:38:23
---

# Dann Berg's Daily Note Template for Obsidian. Uses Dataview & Templater plugins. Should be saved as a Markdown file in Obsidian. Read the full tour: https://dannb.org/blog/2022/obsidian-daily-note-template/
#Omnivore

[Read on Omnivore](https://omnivore.app/me/dann-berg-s-daily-note-template-for-obsidian-uses-dataview-templ-18e4d7e3f16)

[Read Original](https://gist.github.com/dannberg/48ea2ba3fc0abdf3f219c6ad8bc78eb6)

date_saved: 2024-03-17 13:38:23


--- 

# Full Content: 

 This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.[Learn more about bidirectional Unicode characters](https://github.co/hiddenchars) 

| \---                                                                                                                                     |                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| created: <% tp.file.creation\_date() %>                                                                                                  |                                                                                                                                     |
| \---                                                                                                                                     |                                                                                                                                     |
| tags:: \[\[+Daily Notes\]\]                                                                                                              |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>                                                                |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| << \[\[Timestamps/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM-MMMM", -1) %>/<% tp.date.now("YYYY-MM-DD-dddd", -1) %>\|Yesterday\]\] | \[\[Timestamps/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM-MMMM", 1) %>/<% tp.date.now("YYYY-MM-DD-dddd", 1) %>|Tomorrow\]\] >> |
|                                                                                                                                          |                                                                                                                                     |
| \---                                                                                                                                     |                                                                                                                                     |
| \### 📅 Daily Questions                                                                                                                  |                                                                                                                                     |
| \##### 🌜 Last night, after work, I...                                                                                                   |                                                                                                                                     |
| \-                                                                                                                                       |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \##### 🙌 One thing I'm excited about right now is...                                                                                    |                                                                                                                                     |
| \-                                                                                                                                       |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \##### 🚀 One+ thing I plan to accomplish today is...                                                                                    |                                                                                                                                     |
| \- \[ \]                                                                                                                                 |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \##### 👎 One thing I'm struggling with today is...                                                                                      |                                                                                                                                     |
| \-                                                                                                                                       |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \---                                                                                                                                     |                                                                                                                                     |
| \# 📝 Notes                                                                                                                              |                                                                                                                                     |
| \- <% tp.file.cursor() %>                                                                                                                |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \---                                                                                                                                     |                                                                                                                                     |
| \### Notes created today                                                                                                                 |                                                                                                                                     |
| \`\`\`dataview                                                                                                                           |                                                                                                                                     |
| List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc                                                 |                                                                                                                                     |
| \`\`\`                                                                                                                                   |                                                                                                                                     |
|                                                                                                                                          |                                                                                                                                     |
| \### Notes last touched today                                                                                                            |                                                                                                                                     |
| \`\`\`dataview                                                                                                                           |                                                                                                                                     |
| List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc                                                 |                                                                                                                                     |
| \`\`\`                                                                                                                                   |                                                                                                                                     |

---

## Highlights

> Dann Berg's Daily Note Template for Obsidian. Uses Dataview & Templater plugins. Should be saved as a Markdown file in Obsidian. Read the full tour: https://dannb.org/blog/2022/obsidian-daily-note-template/ [⤴️](https://omnivore.app/me/dann-berg-s-daily-note-template-for-obsidian-uses-dataview-templ-18e4d7e3f16#1c07efb1-f3c4-43ac-a6d9-63b1e153cd06)  ^1c07efb1

