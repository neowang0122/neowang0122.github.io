---
id: c319093a-cff6-4084-afec-3f4c7639f1be
title: |
  My Obsidian Daily Note Template | Dann Berg: blog, newsletter, shop, and more
author: |
  unknown
date_saved: 2024-03-17 13:38:15
date_published: 2024-01-30 10:55:30
draft: true
---

# My Obsidian Daily Note Template | Dann Berg: blog, newsletter, shop, and more
#Omnivore

[Read on Omnivore](https://omnivore.app/me/my-obsidian-daily-note-template-dann-berg-blog-newsletter-shop-a-18e4d7e228c)

[Read Original](https://dannb.org/blog/2022/obsidian-daily-note-template/)

date_saved: 2024-03-17 13:38:15

date_published: 2024-01-30 10:55:30

--- 

# Full Content: 

By Dann Berg

![Dann’s Daily Note template for Obsidian](https://proxy-prod.omnivore-image-cache.app/0x0,sHRDPuEZr2_d3NxSnMvLTMtY-MvVmdIrwYNo7PxmUHPs/https://dannb.org/images/blog/2022/10/daily-note-template.png)

❗ _Feel free to skip the fluff and navigate directly to the **[raw Daily Note template](https://gist.github.com/dannberg/48ea2ba3fc0abdf3f219c6ad8bc78eb6)**._

Also, this tutorial is now available as a _YouTube video_! Watch **[📆 Obsidian Daily Note Template Tour and Tutorial](https://youtu.be/v84uSIqqVPQ)** to see me set up the system from scratch.

---

I’ve officially drunk the [Obsidian](https://obsidian.md/) Kool-Aid. While I still think my [Daily Driver Task Management System](https://dannb.org/blog/2020/daily-driver-task-management-system/) is the best way to manage your to-dos, I’ve moved my entire note-taking system to Obsidian and it’s now functioning as my second brain.

Before falling in love with Obsidian, I started using [Roam Research](https://roamresearch.com/) (paired with the book _[How To Take Smart Notes](https://amzn.to/3JK4ncl)_) as a way to start shifting my note-taking strategy. Roam’s bi-directional linking, paired with a modified version of the Zettelkasten strategy outlined in the book, allowed me to build a system that supports information _recall_ as much as note _taking_.

One of the things I really liked about Roam Research was the Daily Note. For me, the real strength of a daily note is to anchor one’s daily activity within the larger world of personal productivity. I wanted to design a daily note that allowed for:

1. Thoughtful reflection
2. A place for ephemeral notes throughout the day
3. A record of more evergreen notes that were touched that day

The template I’m currently using (and am sharing in this post) was built over a period of several months. I’d make a small change, use it for days to weeks+ to see if it stuck, and then make another change. I’ve most recently added the “Notes created today” and “Notes modified today” sections, and I finally think I’m done making changes. My daily note template is complete.

I wanted to share, because I thought others might be interested. Please steal/remix/reuse anything you like.

## Setting up the Daily Note Template

These are the plugins you’ll need:

1. [Daily Notes ](https://help.obsidian.md/Plugins/Daily+notes)(Core Plugin)
2. [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
3. [Templater](https://github.com/SilentVoid13/Templater)

You’ll want to install the plugins [directly through Obsidian](https://help.obsidian.md/Advanced+topics/Community+plugins).

❗ Feel free to jump directly to the [raw Obsidian Daily Note template](https://gist.github.com/dannberg/48ea2ba3fc0abdf3f219c6ad8bc78eb6), if you aren’t interested in this fairly wordy tour.

### Metadata and Navigation

![Dann’s Daily Note metadata and navigation](https://proxy-prod.omnivore-image-cache.app/0x0,sJgqmB4dIQBIPhXqGA_yMwasVARlMrJxQ1fPwIj7n_QM/https://dannb.org/images/blog/2022/10/daily-note-metadata-nav.png)

I don’t put too much information into the YAML front matter. Just a created date, using the following Templater code, inserts the current date:

`<% tp.file.creation_date() %>`

Any tags (I only use `+Daily Notes`) are outside of the front matter. But that’s just a personal preference.

I also use Templater to insert the day’s date, in an easy-to-read format, with the day of the week prominently at the front.

`<% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>`

I also include some Previous/Next navigation at the top[1](#fn:1), powered by Templater and formatted the same as the filename naming convention. Most frequently, I’m using today’s note, which means the link to tomorrow’s note doesn’t exist. But these can both be useful when browsing older notes.

`<< [[<% fileDate = moment(tp.file.title, 'YYYY-MM-DD-dddd').subtract(1, 'd').format('YYYY-MM-DD-dddd') %>|Yesterday]] | [[<% fileDate = moment(tp.file.title, 'YYYY-MM-DD-dddd').add(1, 'd').format('YYYY-MM-DD-dddd') %>|Tomorrow]] >>`

**Note:** this Previous/Next navigation Templater code can be imperfect if you’re not creating Daily Notes every day. This can apparently be solved using [this method involving DataviewJS](https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/20?u=gibson). I haven’t tried this myself, but I’ve heard it works well.

### Daily Questions

![Dann’s Daily Note questions](https://proxy-prod.omnivore-image-cache.app/0x0,sQvx4sw8gu5IMFT3tA8I0H4XbZ9vhj7TKktOA84kYWig/https://dannb.org/images/blog/2022/04/daily-note-daily-questions.png)

For a long time, I used the [Day One](https://dayoneapp.com/) iOS app for daily journaling. It’s a beautiful mobile app, and I loved storing my daily ephemeral notes there. However, I found myself annoyed every time I wrote an entry, since typing a full-length post on my phone was tedious. I experimented with voice entry, but that felt too unnatural. I explored switching to the MacOS app, but the monthly fee (vs _free_ on a single device) kept me away.

I’ve now moved this all to Obsidian, and thought of four questions to inspire quick writing. Each question appears when I create a new note in the morning, along with an empty bullet point, ready to be filled with answers.

I write these answers first thing in the morning, right after I create the day’s note.

### Ephemeral Notes

![Dann’s Daily Note ephemeral and record of work](https://proxy-prod.omnivore-image-cache.app/0x0,sQvQElm0WXSKJJqHJ7D-H_8uIcFkDooziPEjR29554cw/https://dannb.org/images/blog/2022/04/daily-note-ephemeral-record-of-work.png)

Like the Daily Questions, the Notes section has an empty bullet point ready for me to write. Writing in bullet points makes the task much less daunting. You’re inviting yourself to make a quick note. You should always make it as easy as possible to start.

Often, I’ll take notes from meetings here, and then spin those notes into their own file using the [Note Refactor plugin](https://github.com/lynchjames/note-refactor-obsidian) during end-of-day processing. All that will be left is a link to the new file.

Other times ephemeral notes will juts stay here. Although I recognize that the recall process of accessing my notes from a Daily Note vs from an evergreen note is less straightforward. For some notes, that’s fine for me.

### Automatic cursor placement

![Dann’s Daily Note Templater cursor placement text](https://proxy-prod.omnivore-image-cache.app/0x0,s-k6jE2dXUak5FxmJDBVqI-80jDokrnp9AhYUK1UFyO8/https://dannb.org/images/blog/2022/04/daily-note-cursor-placement-templater.png)

**Update Oct 2022**: A [commenter](https://gist.github.com/moritzdawo) on the [gist](https://gist.github.com/dannberg/48ea2ba3fc0abdf3f219c6ad8bc78eb6) pointed out that you can use `<% tp.file.cursor() %>` to tell Obsidian where to place your cursor once Templater creates each new Daily Note.

To use this, place the code `<% tp.file.cursor() %>` wherever you want your cursor to appear (maybe on the first bullet point under Notes, or under the first daily question). Then, in Templater settings, make sure you have the following **enabled**:

* Automatic jump to cursor
* Trigger Templater on new file creation

### Record of work

Lastly, the template ends with a few queries powered by the Dataview plugin. These output two unordered lists:

* Notes created today
* Notes modified today

When you create your Daily Note, and remain in Edit Mode, these will just be codeblocks (as shown in the picture). You’ll need to toggle Reading View in order for Dataview to generate the list of notes.

I personally find this information less useful day-of, so just having codeblocks at the bottom the the note is fine for me. It’s only when reviewing past notes, specifically in Reading Mode, that these sections are particularly interesting.

## Where to store your daily notes

![Dann’s Daily Note directory structure](https://proxy-prod.omnivore-image-cache.app/0x0,s_hxDKJe3NHPl-wHrjl6QNQRvp6vqlZmmtAgkOiBNBeI/https://dannb.org/images/blog/2022/04/daily-note-directory-structure.png)

My overall Obsidian organizational structure is based largely on Nick Milo’s [Linking Your Thinking](https://www.linkingyourthinking.com/). As such, I have a `Timestamps` folder, and all my daily notes live there.

Originally, all my daily notes were in that single directory, but I’ve since moved to a Year > Month > Day system that makes navigating old notes significantly quicker. This organizational structure is super easy to set up for new notes. In the Daily Note settings, set Date Format to `YYYY/MM-MMMM/YYYY-MM-DD-dddd`. Each `/` denotes a new directory, so new daily note files will be created within existing Year and Month folders, or create them if they don’t yet exist.

![Dann’s Daily Note settings](https://proxy-prod.omnivore-image-cache.app/0x0,sY3PVoXE5dvCJoHtZlTS42nicWl8gAPfL7_C5x21Q9I4/https://dannb.org/images/blog/2022/04/daily-note-settings.png)

### Setting up your Daily Note template

Create a new note, and name it `Template, Daily Note`. Move it to your templates directory if you have one (I use `Extras/Templates/`).

Once the file exists in your desired directory, enter the directory path in the Daily Notes settings page. Each time you click the menu button to create your Daily Note, it will use that template file, along with the Templater plugin, to generate a fully-formed, ready-to-use, daily note.

![Templater setting to run when new file is created](https://proxy-prod.omnivore-image-cache.app/0x0,sVxYsoYzDT0FX_pfjifeh7pYKPdp_yYzOO3dZYJ1WIJ4/https://dannb.org/images/blog/2022/10/obsidian-templater-trigger-new-file.jpg)

Additionally, in the Templater settings, make sure that you enable `Trigger Templater on new file creation`. With this enabled, you’ll have a new Daily Note, complete with the dynamic text that we created, when you click the Open Today’s Daily Note button[2](#fn:2).

Additionally, we need to make sure that the Yesterday and Tomorrow links work both to navigate to an existing note, or to create a new note from our template if there isn’t yet a Daily Note for that date.

In Obsidian Settings, go to Templater settings, and scroll down to Folder Templates. Toggle the “Enable Folder Templates” switch on. For folder, select `Timestamps/` (or whereever you keep your Daily Notes) and for Template, choose our new Daily Note template[3](#fn:3).

**Dive deeper in Obsidian**

Did you find this post useful? Check out my other Obsidian posts:

* [My Obsidian Meeting Note Template](https://dannb.org/blog/2023/obsidian-meeting-note-template/)
* [My Obsidian People Note Template](https://dannb.org/blog/2022/obsidian-people-note-template/)
* [My Obsidian Physical Object System](https://dannb.org/blog/2024/obsidian-physical-object-template/)
* [Recalling Books You’ve Read, Made Easy](https://dannb.org/blog/2022/recalling-books-youve-read-made-easy/)

**Prefer video content?** Check out the above video tutorial version of this post. It shows you exactly how to set up your own Daily Note template system.

---

If you’ve read this far, you might also really enjoy my free monthly newsletter [_The Dann Chronicles_](https://dannberg.substack.com/). Each month, I share five cool new things I found. These can be products, articles, apps, movies, concepts, and anything else. Feel free to [check out the archive](https://dannberg.substack.com/archive) to see if it’s something you might like, and subscribe to get each edition in your email.

---

1. This Templater code was updated Oct 2022 thanks to feedback from [Lopyter on Reddit](https://reddit.com/r/ObsidianMD/comments/yd62d1/my%5Fobsidian%5Fdaily%5Fnote%5Ftemplate%5Fusing%5Ftemplater/its9d7y/). The old format would have broke if you create Daily Notes for future dates. [↩︎](#fnref:1)
2. An alternate option is to use `<%+ %>` instead of `<% %>`, but this isn’t the cleanest way to run code on file creation. For a longer discussion, see the comments of the [gist on Github](https://gist.github.com/dannberg/48ea2ba3fc0abdf3f219c6ad8bc78eb6?permalink%5Fcomment%5Fid=4761287#gistcomment-4761287). [↩︎](#fnref:2)
3. Thank you to [Robiton](https://gist.github.com/Robiton) for his [helpful comment](https://gist.github.com/dannberg/48ea2ba3fc0abdf3f219c6ad8bc78eb6?permalink%5Fcomment%5Fid=4948882#gistcomment-4948882) on the template code to get this working correctly. [↩︎](#fnref:3)

_[How I back up my Obsidian vault to Github (free & cheap options)](https://dannb.org/blog/2024/obsidian-backup-github/)_  
_[Obsidian Physical Object System and Template](https://dannb.org/blog/2024/obsidian-physical-object-template/)_  
_[My Obsidian People Note Template](https://dannb.org/blog/2022/obsidian-people-note-template/)_  

---

## Highlights

> My Obsidian Daily Note Template | Dann Berg: blog, newsletter, shop, and more [⤴️](https://omnivore.app/me/my-obsidian-daily-note-template-dann-berg-blog-newsletter-shop-a-18e4d7e228c#a90f9acb-4b93-47e8-82ad-84c005431056)  ^a90f9acb

