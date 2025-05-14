---
id: 00935964-450a-4668-8f03-ad310c6b3fac
title: |
  Day one to Obsidian conversion - Share & showcase - Obsidian Forum
author: |
  unknown
date_saved: 2023-08-04 04:26:29
date_published: 2022-02-26 16:22:12
draft: true
---

# Day one to Obsidian conversion - Share & showcase - Obsidian Forum
#Omnivore

[Read on Omnivore](https://omnivore.app/me/day-one-to-obsidian-conversion-share-showcase-obsidian-forum-189bfa79ef4)

[Read Original](https://forum.obsidian.md/t/day-one-to-obsidian-conversion/33139)

date_saved: 2023-08-04 04:26:29

date_published: 2022-02-26 16:22:12

--- 

# Full Content: 

* [last reply](https://forum.obsidian.md/t/day-one-to-obsidian-conversion/33139/15)
* 3.5k  
#### views
* 8  
#### users
* 9  
#### likes
* 8  
#### links

Thanks a lot [@arnaudl](https://forum.obsidian.md/u/arnaudl), and of course [@dcb](https://forum.obsidian.md/u/dcb), for the starting point!

I was working on a similar script to help a (potential) migration from DayOne to Obsidian when I found this thread (and a few others) on the forum.

I adapted the script a bit and added two features (among others) that someone else might find useful:

* Replacing DayOne internal links to Obsidian links. I have a journal where I heavily linked entries with each other, so migrating these links was essential to me.
* Merging entries with the same date instead of creating a new file with a character suffix.

Repo is public [on Github 110](https://github.com/edoardob90/dayone-to-obsidian).

Hope it’s useful.

Hi there, just wondering if you can assist me with this import from the JSON file to obsidian. I have no experience with Python and to be honest very little experience with executing anything via terminal. I have installed Python but don’t know how to run your script. Do you mind giving me a quick outline how to run this please? Appreciate your help and time. Cheers

Sure I can help you, perhaps I can record a short screencast on how to use the script. But I’m mostly using Linux and/or Mac OS, so if you’re a Windows user that’s slightly more complicated – well, I have a Windows machine at home, but I would have to install Python as I don’t use it that often.

Besides that, there are a few things that the script could do better. I already corrected a few small bugs but I discovered some more. For example (but it might not apply to your case): DayOne exports multi-line code blocks in a strange way, and I haven’t pushed that fix yet.

Hey thanks a lot! I use MacOS so a short screencast would be most helpful.

I’d really appreciate that mate

I tried to use this script but I just keep getting “ModuleNotFoundError: No module named ‘rich’”, though I have installed this module with pip. Is there something that I am missing? I am on macOS 12.3, with python 3.9.11 installed.

I have solved this problem by adding the rich module to the dependency section in the poetry toml file. 

Well, that’s actually a bug I accidentally introduced: I forgot to update the dependencies when I added a module of the “rich” package to print a progress bar (pretty useless, I’d say).

Thanks for spotting this!

I had not checked that thread in a while.

Those are great improvements you brought [@edobld](https://forum.obsidian.md/u/edobld), will add a note to my readme pointing to your version 

I would love to see a screencast on how to use this script. I know how to launch a python script, but I don’t know how to get this to work at all and I know I’m missing something.

---

