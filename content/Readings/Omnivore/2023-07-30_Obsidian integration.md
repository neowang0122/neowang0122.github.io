---
id: ceb349cd-6de8-41e9-9282-a582a5f38603
title: |
  Obsidian integration
author: |
  unknown
date_saved: 2023-07-30 01:35:48
date_published: 2023-02-14 09:31:26
draft: true
---

# Obsidian integration
#Omnivore

[Read on Omnivore](https://omnivore.app/me/obsidian-integration-189a5498a8a)

[Read Original](https://agenda.community/t/obsidian-integration/99850)

date_saved: 2023-07-30 01:35:48

date_published: 2023-02-14 09:31:26

--- 

# Full Content: 

I use obsidian as my PKM tool. I offload everything there: article highlights, academic notes, book highlights, etc. It has its own hashtag system for statuses, color coding, and link-based category. However, it is bad in integrating iCal and apple reminders and the available plugins don’t work very well. And Agenda does that pretty well  
So, I wish I could sync my agenda notes to obsidian, (show agenda content in obsidian), and maybe link obsidian notes directly into agenda. It could also sync specified folders directly to agenda. Obsidian is a markdown tool and stores its files locally and in your cloud service (I use iCloud). Agenda also stores everything using iCloud, so I guess it is a pretty easy thing to do.

* [last reply](https://agenda.community/t/obsidian-integration/99850/14)
* 823  
#### views
* 6  
#### users
* 11  
#### likes
* 4  
#### links

From what I understand, agenda does not uses .md or .txt files. Agenda uses its own format i believe. I dont think its possible. You can only have links in obsidian to jump into the notes inside agenda.

Unless someone else knows anything different?

oh well… I thought it was .md based. However, there is an export to markdown feature from what I’ve seen, so maybe it could work that way? Like, pressing sync option allows you to select the project and that project gets converted to markdown and sent to obsidian

a one way sync could probably work with shortcuts app , dont see why not

I saw that there’s an api that works with shortcuts. Do you know any tutorials on that specific matter?

Just managed to do it, if anyone is interested

Nice, thanks for sharing!

How did you manage to pull this off in the end? Did you get it to automatically put it in obsidian, or is it still a manual process?

Here is what I came up with. Mine takes a single selected note from Agenda, gets the markdown, saves it in my vault in iCloud, then renames it to a .md file so that it shows up in Obsidian.

[![IMG_0033](https://proxy-prod.omnivore-image-cache.app/690x388,se-WOGi-VbY73ESzBDtljf_CcNNZXPlntgX9kHRsOCSo/https://agenda.community/uploads/db1357/original/3X/4/0/4018d57dae203d3bb307bbc0eab67be5a5037d01.jpeg)](https://agenda.community/uploads/db1357/original/3X/4/0/4018d57dae203d3bb307bbc0eab67be5a5037d01.jpeg "IMG_0033")

Am I correct in understanding that is a oneway export?

Correct - it’ll only move a note from Agenda into your Obsidian vault.

I updated it and now it is working pretty well:  
It will always look for dates related to the file, both created date and dates inside the file (scheduled dates). If it finds two, and they are different, it will ask you which one it will want to use (in order to periodic notes format properly the title of your file).  
It will always check if there’s already a file with the date selected; if there is, it will combine both texts and replace the file.  
Please, select your periodic notes folder where there is a comment warning  
[https://www.icloud.com/shortcuts/63d4d474277d4edc83b08401f2e08930 15](https://www.icloud.com/shortcuts/63d4d474277d4edc83b08401f2e08930)

New update! Agenda to Obsidian 3 is out!  
Updates:

* Rewrote it completely
* Will look for all dates within a file (Creation dates and dates inside text)
* Will update your text, not append to it  
Link: [Shortcuts 20](https://www.icloud.com/shortcuts/75d1e240e83549558ddc9c9d66ccf801)  
How to use: Select your obsidian daily notes/periodic notes folder where the comment points  
Done! Open obsidian and run the shortcut, you can use shortcut launcher plugin and also automate it in your iphone/ipad upon opening obsidian!  
Works with any local first markdown app, just select the appropriate folder.

---

