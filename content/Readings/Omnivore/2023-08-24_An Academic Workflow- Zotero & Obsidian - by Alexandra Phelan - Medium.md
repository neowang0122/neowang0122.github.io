---
id: 2a08a448-7e82-404c-8e1a-950c558717f7
title: |
  An Academic Workflow: Zotero & Obsidian | by Alexandra Phelan | Medium
author: |
  Alexandra Phelan
date_saved: 2023-08-24 18:08:16
date_published: 2022-04-10 11:57:08
draft: true
---

# An Academic Workflow: Zotero & Obsidian | by Alexandra Phelan | Medium
#Omnivore

[Read on Omnivore](https://omnivore.app/me/an-academic-workflow-zotero-obsidian-by-alexandra-phelan-medium-18a29974f1f)

[Read Original](https://medium.com/@alexandraphelan/an-academic-workflow-zotero-obsidian-56bf918d51ab)

date_saved: 2023-08-24 18:08:16

date_published: 2022-04-10 11:57:08

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/700x0,samgs_Q9Zl-a99vEL37duz7Wwv1Hc-ZgoVKOgJdgTLKI/https://miro.medium.com/v2/1*NADjCHzJSxgEj92Xr71MVQ.png)

My Obsidian database in graph view, showing bidirectional links between notes, and key nodes of common tags.

_Note: An updated version of this workflow is_ [_available here._](https://medium.com/@alexandraphelan/an-updated-academic-workflow-zotero-obsidian-cffef080addd)

As an academic, my daily workflow involves collecting resources, reading and annotating them, creating notes, writing manuscripts, and citing references. This list doesn’t reflect the varying intensity and effort between these steps. Increasingly, “creating notes” has become the central part of my workflow: it’s where I synthesize what I’ve read, link concepts, get and develop ideas, and complete a first draft on an atomic part of a broader topic. Similarly, writing a manuscript is a huge lift, but it is easier when I have already developed these smaller, already synthesized and drafted notes (for those who know the [Zettelkasten system](https://zettelkasten.de/posts/overview/), this will already be familiar). It’s also substantially easier for me to write in a markdown editor, than in Word, Scrivener, or Google Docs – each with their own sluggishness and distracting formatting.

## Zotero: collecting resources, annotating them, citing references

For most of my academic workflow steps, [Zotero](https://www.zotero.org/) performs excellently. I use my library as a database that holds nearly 15 years of my research. I add resources to my library using the browser connectors that come with Zotero or manually, meaning that all the metadata for a resource (author, title, type, journal name, date etc) is logged. Every entry in my database is also linked to a PDF of the book or article, where I can read, highlight and add notes. Then, when I write a manuscript, I can easily insert citations in whatever citation style the relevant journal or editor requires. As someone who works across the law and science disciplines, being able to switch between APA, Bluebook or Nature at the press of a button is critical. While I use [Jurism](https://juris-m.github.io/) — a fork of Zotero that is better designed to handle law or international sources — Zotero’s latest update to Zotero 6 prompted the recalibration of my workflow. And while I’ll continue to use Jurism for now, the workflow below should be helpful for those using Zotero 6 and Obsidian.

## Obsidian: creating notes, writing manuscripts

It’s a waste of time to collect resources and do nothing with them. It’s inefficient to collect them, and then come back to a database like this just to cite a resource _if_ you remember. For me, the synthesis of my readings and annotations into new notes that help me draft manuscripts is the most critical part of my workflow. I could use any text editor to collect these notes, or even just the note function in Zotero itself. But I want to build and connect my ideas. I’ve never worked in strict disciplinary siloes, so my writing process never has either. To really embrace this, a simple text editor, potentially with one-way links between topics, is not enough. I need [bidirectional linking](https://maggieappleton.com/bidirectionals) and delight in pluralism. That’s where [Obsidian](https://obsidian.md/) comes in. Obsidian is a markdown editor, providing a distraction free writing environment. But Obsidian provides more than just a text editor and facilitates bidirectional links to create relationships between ideas.

![](https://proxy-prod.omnivore-image-cache.app/700x272,sQ_xiCjfRqPZ5xjaAP40F9t4FSkoPHGS6RgHzDvCqtDc/https://miro.medium.com/v2/resize:fit:1400/1*PF7DtY7gZf_hSlDkyfFwcQ.png)

## I. Zotero Setup

There are a range of plugins for Zotero, but I recommend installing:

* [**zotfile**](http://zotfile.com/) for managing pdfs. While Zotero 6 enables annotation in the app, and storing the pdfs in Zotero storage, I use zotfile to automatically rename pdfs into a consistent format (e.g. author\_date\_title) and move them to a specified attachments folder not in Zotero storage. This lets me keep all of annotations saved separately to Zotero and so I can access them through my file explorer (including on my tablet for my preferred pdf reader). If you’re happy with staying within the Zotero ecosystem, this may not be necessary.
* [**betterbibtex**](https://retorque.re/zotero-better-bibtex/)for creating citekeys. Betterbibtex does a lot, but I mainly use it to automatically create consistent [pandoc](https://pandoc.org/) citekeys (author\_date, e.g. Carter\_2022) that I can use when writing manuscripts in Obsidian. If you’re not planning on using Obsidian to write and cite, this may not be necessary.

![](https://proxy-prod.omnivore-image-cache.app/700x199,sVzDNpZepzaLksopZ0VHDLDESJfigRopd2sZMat1lfSk/https://miro.medium.com/v2/resize:fit:1400/1*4nABx_iY92q0CrrS3gWhYQ.jpeg)

My Zotero database, containing journal articles, books, chapters, reports, and primary sources like international and domestic court cases, statutes, and treaties.

## II. Obsidian Setup

The second part of the workflow relies on a number of Obsidian community plugins. The [**Obsidian Zotero Desktop Connector**](https://github.com/mgmeyers/obsidian-zotero-desktop-connector) is the only essential one for creating Literature Notes. However the roll-up summary page requires [**dataview**](https://github.com/blacksmithgu/obsidian-dataview), and exporting manuscripts written in Obsidian with citekeys to docx requires the [**pandoc**](https://github.com/OliverBalfour/obsidian-pandoc) plugin. With Obsidian (v0.14), call outs are now incorporated. I use the [**admonitions**](https://github.com/valentine195/obsidian-admonition) plugin to create customized call outs.

Literature Notes are essentially a single note for every reference, containing the full metadata, link to Zotero, and annotations and notes extracted from the PDF stored in Zotero.

**Zotero Desktop Connector for Literature Notes** 
There are two main templates required to get the Literature Note structure — Header and Annotations. The markdown code for each is set out below. These are saved as markdown files in the vault.

* **Literature Note Header**

![](https://proxy-prod.omnivore-image-cache.app/700x114,s24iA6W-v6B7ICLFjDNZpwWYBphabmC1I-hgRGcq8hQY/https://miro.medium.com/v2/resize:fit:1400/1*fqO-aQMtcv-gZp3yRnNg1w.png)

This template –‘infoheader’– provides the formatting framework for my literature notes. I like being able to have the full citation at the top to copy-paste if needed. I also like to synthesise the core contribution the piece makes to the literature up front. The template extracts the metadata from Zotero, including using nunjucks ‘if’’ functions to populate specific resource details. After import, I manually change the first author from **Author**::to **FirstAuthor**:: to simplify long author lists in my summary roll-up table (below).

> [!Cite]  
> {{bibliography}}>[!Synth]  
>**Contribution**::>[!md]  
> {%- for creator in creators %} {%- if creator.name == null %} **{{creator.creatorType | capitalize}}**:: {{creator.lastName}}, {{creator.firstName}}{%- endif -%}<br>  
> {%- if creator.name %}**{{creator.creatorType | capitalize}}**:: {{creator.name}}{%- endif -%}{%- endfor %}   
> **Title**:: {{title}}    
> **Year**:: {{date | format("YYYY")}}     
> **Citekey**:: @{{citekey}}    
> {%- if itemType %}**itemType**:: {{itemType}}{%- endif %}    
> {%- if itemType == "journalArticle" %}**Journal**:: *{{publicationTitle}}* {%- endif %}    
> {%- if volume %}**Volume**:: {{volume}} {%- endif %}    
> {%- if issue %}**Issue**:: {{issue}} {%- endif %}     
> {%- if itemType == "bookSection" %}**Book**:: {{publicationTitle}} {%- endif %}    
> {%- if publisher %}**Publisher**:: {{publisher}} {%- endif %}    
> {%- if place %}**Location**:: {{place}} {%- endif %}     
> {%- if pages %} **Pages**:: {{pages}} {%- endif %}    
> {%- if DOI %}**DOI**:: {{DOI}} {%- endif %}    
> {%- if ISBN %}**ISBN**:: {{ISBN}} {%- endif %}> [!LINK]   
> {%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}  
>  [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}})  {%- endfor -%}.> [!Abstract]  
> {%- if abstractNote %}  
> {{abstractNote}}  
> {%- endif -%}{%- set important = annotations | filterby("comment", "startswith", "important") -%}  
{%- if important.length > 0 %}> [!important] Callouts  
{%- for annotation in important -%}  
{%- if annotation.annotatedText %}  
> - {{annotation.annotatedText | nl2br}}  
{%- endif -%}  
{%- if annotation.imageRelativePath %}  
> - ![[{{annotation.imageRelativePath}}]]  
{%- endif %}  
> [page {{annotation.page}}](file://{{annotation.attachment.path | replace(" ", "%20")}})  
{%- endfor -%}  
{%- endif %}  
{%- if annotations.length %}## Annotations  
{%- endif %}

* **Annotations**

![](https://proxy-prod.omnivore-image-cache.app/700x75,sS2q5InvroPltROkwyLm4J7ibG_d6RtFdku05NlM2dak/https://miro.medium.com/v2/resize:fit:1400/1*GC06No20_eZ83uGgM6vYag.png)

This annotation template – ‘annots’ – does a few things. Firstly, it sets out separate formatting for highlight colours. This is useful for me because I use different highlighting colours to communicate different things:  
\- 🟡 interesting point  
\- 🟢 literature to read  
\- 🔵 key conclusion/_ratio decidendi_ 
\- 🟣 author critique of other literature  
_\-_ 🔴 disagree with author  
\- 🟠️ highlights after first iteration

The template also extracts written annotations as notes. Here you can also set styles for underlines, strikethroughs etc, but I don’t use them so have simplified the template.

The rest of the template then allows for subsequent annotations to be added to the literature note without wiping any changes or edits made after import.

{%- macro calloutHeader(type, color) -%}  
{%- if type == "highlight" -%}  
<mark style="background-color: {{color}}">Highlight</mark>  
{%- endif -%}{%- if type == "text" -%}  
Note  
{%- endif -%}  
{%- endmacro -%}{%- set annots = annotations | filterby("date", "dateafter", lastExportDate) -%}  
{%- if annots.length > 0 %}  
### Exported: {{exportDate | format("YYYY-MM-DD h:mm a")}}{% for annot in annots -%}  
> {{calloutHeader(annot.type, annot.color)}}  
{%- if annot.annotatedText %}  
> {{annot.annotatedText | nl2br}}  
{%- endif -%}  
{%- if annot.imageRelativePath %}  
> ![[{{annot.imageRelativePath}}]]  
{%- endif %}  
> [page {{annot.page}}](file://{{annot.attachment.path | replace(" ", "%20")}}) [[{{annot.date | format("YYYY-MM-DD#h:mm a")}}]]  
{%- if annot.comment %}  
> - {{annot.comment | nl2br}}  
{% endif %}{% endfor -%}  
{% endif -%}

## **III. Creating Literature Notes**

Once the Header and Annotations files are setup, activate the Obsidian command picker (cmd-p on mac) and select “Zotero Desktop Connector: Create Literature Note”. I have set this to a hotkey to immediately launch.

![](https://proxy-prod.omnivore-image-cache.app/700x225,sOhsbgWmhVN7NRdVfX7Hb7CPBjhLxpjvo1RGshh8XiHM/https://miro.medium.com/v2/resize:fit:1400/1*GgiVm5CAnXgwS25GcNIWAA.png)

The Zotero prompt should appear, and you can type in your reference for which you’re creating a Literature Note.

![](https://proxy-prod.omnivore-image-cache.app/700x301,swjEfrBI8WOElgTjMtcOnzIu6JSJqHJhJeEIouq9bpLc/https://miro.medium.com/v2/resize:fit:1400/1*Czplq0hnBk6XZ9BqF77-0Q.png)

Once selected, ZDC will run, and output in one Literature Note the Header and Annotations:

![](https://proxy-prod.omnivore-image-cache.app/700x916,sz6Uiy1AifTUkdVnrsgvGGauyyLP5hw1gjAdgzlCLNqE/https://miro.medium.com/v2/resize:fit:1400/1*ULEiGz45BTM6JZTQUjN5AQ.png)

![](https://proxy-prod.omnivore-image-cache.app/700x828,syzxG8EuEpIAR54mfEx9gJ89ggc-ZH4ZEe20NKbrDO-U/https://miro.medium.com/v2/resize:fit:1400/1*gcOCdiY170_nuJV-qp9qOg.png)

The first two references have been manually edited as part of synthesis process.

You can then edit the document, and edits will be preserved. If you subsequently add more notes and annotations in the relevant PDF, they will be added in separate entries when you re-run “Zotero Desktop Connector: Create Literature Note”. If you move the Literature Note from the output folder, this will not update the moved file but will instead create a new note in the original output folder. I recommend therefore keeping one Literature Notes output folder and not moving your files.

**Summary Roll-Up of Literature Notes**

In a new Obsidian note, dataview can be used to create a roll-up of all literature notes:

```dataview  
tabletitle as Title,   
FirstAuthor as "First Author",   
Year as Year,  
itemType as Item,   
Citekey as Citekey,   
Contribution as Contribution  
FROM "[insert Literature Notes folder here]"```

which results in:

![](https://proxy-prod.omnivore-image-cache.app/700x641,s6mVmxTXFASFLPfUQrPx4FBhyUKRvx_PyX8xyUJFgYMU/https://miro.medium.com/v2/resize:fit:1400/1*eTBRlCz2WNsv4kbTdYZwRQ.png)

## IV. Writing manuscripts

Writing in Obsidian is essentially the same in any other text editor, except formatting is done using [markdown](https://help.obsidian.md/How+to/Format+your+notes):

![](https://proxy-prod.omnivore-image-cache.app/700x745,s6yqLhrLH1vk_X-3rT8If0IABSUoOwZ5RT9o0KKI_MdQ/https://miro.medium.com/v2/resize:fit:1400/1*gktExOIMD7CNU0VIeI92KA.png)

Zotero Desktop Connector can be used to add in citations. First, you need to set your preferred citation styles. Ensure that you have the selected style installed (CSL) in your Zotero (Preferences > Cite > Styles). This will insert the completed citation in the preferred format.

Alternatively, you can also setup Pandoc citations that allows you to easily change formats as required (for example, if submitting to different journals).

![](https://proxy-prod.omnivore-image-cache.app/700x903,s_u_udTegIOtl87JfaveB7b4cOZ5CFDvEwdELSer_EKQ/https://miro.medium.com/v2/resize:fit:1400/1*n4tMks1KJd-mzTH5lFHCAA.png)

## Adding citations

Use the Obsidian command prompt to navigate to the citation style you want to insert a citation for. You can setup hotkeys to immediately go to your preferred style.

![](https://proxy-prod.omnivore-image-cache.app/700x356,sFXhdf2T_rXZ4KKNMbAG7BffZ3Voj45dYb8_PRkk2g9o/https://miro.medium.com/v2/resize:fit:1400/1*r0VUZOpe0IBQgMDfys7rYA.png)

You can then select the relevant citation in Zotero…

![](https://proxy-prod.omnivore-image-cache.app/700x300,sk9593pwXU77EYdPD4bFqCPr3rDrFONrCLifRE1KVWlA/https://miro.medium.com/v2/resize:fit:1400/1*GVlE0vA76QWpxBCd5-6Vbg.png)

and the selected cite is inserted into the document. Here, I have used a pandoc citation:

![](https://proxy-prod.omnivore-image-cache.app/650x108,sCQgIDs5YqRxW3_6aqtbXrWkRfVweHumdQvyA1AyMZMA/https://miro.medium.com/v2/resize:fit:1300/1*syWgKqI1nro_fjl_cQEbYA.png)

## Converting from markdown to docx & process citations

**Setting pandoc to read your Zotero library**Once citations are added, you can process them using the pandoc plugin. The first step is to export your Zotero library as a .bib file, and then point the pandoc plugin to it. You can do this using YAML frontmatter:

---  
bibliography: ~/yourpath/My library.bib  
---

or set it permanently in the pandoc plugin by adding to the Extra Pandoc Arguments box:

--metadata bibliography=~/yourpath/My Library.bib

**Setting pandoc to process citation in preferred style**

The default pandoc citation is Chicago (author date).

If you want to change the citation style or which zotero library you’re extra, you can set the CSL in the YAML metadata or in the pandoc plugin settings:

---  
csl: ~/yourpath/style.csl  
---

or set it permanently in the pandoc plugin settings by adding to the Extra Pandoc Arguments box:

--metadata csl=~/yourpath/style.csl

**Exporting to docx**

Simply open the command palette and select pandoc plugin: export as word document (docx). It will export to the same folder as the md file, or to a specified export folder provided in the obsidian pandoc plugin settings.

![](https://proxy-prod.omnivore-image-cache.app/700x540,s9MimZOo0kcWA9Fmj-Hs9PxlKntgbbI4_vpR4EiozJM4/https://miro.medium.com/v2/resize:fit:1400/1*dr3nU3opf87UYmx-xxTB1Q.png)

Alternatively, if you’re on a mac, you can use Terminal to do all of the above. Installation instructions [here](https://pandoc.org/installing.html).

pandoc "path/to/input.md" -o "path/to/output.docx" --citeproc --bibliography "path/to/library.bib" --csl "path/to/citation_style.csl"

## Going forward

Once you are familiar with the processes and the setup, the workflow runs incredibly smoothly. This is a steepish learning curve if you have limited programming experience or comfort, but this is a fairly user-interface-driven friendly approach to developing a full academic research and citation workflow.

**Thanks** to the Obsidian Discord, especially [Mathew Meyers](https://github.com/mgmeyers), [Chris Grieser](https://github.com/chrisgrieser), [Eleanor Konik](https://www.eleanorkonik.com/), [Leah Ferguson](https://notes.leahferguson.com/Home).

---

