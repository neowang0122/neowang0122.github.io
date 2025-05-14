---
id: 87510867-bfb7-4e8e-bbbb-b28bb848c643
title: |
  CIS Web Servers – IT Support: CoE CIS Tech
author: |
  unknown
date_saved: 2023-09-11 16:48:07
date_published: 2023-07-20 20:00:00
draft: true
---

# CIS Web Servers – IT Support: CoE CIS Tech
#Omnivore

[Read on Omnivore](https://omnivore.app/me/cis-web-servers-it-support-co-e-cis-tech-18a2db94e76)

[Read Original](https://it.coecis.cornell.edu/cis/cisweb)

date_saved: 2023-09-11 16:48:07

date_published: 2023-07-20 20:00:00

--- 

# Full Content: 

## Web Server Overview

CIS faculty, staff, and Phd students can use the department web servers for hosting websites related to their research and instructional activities.

**Important: To edit the site from off-campus, you must connect to Cornell VPN via instructions here:** <https://it.cornell.edu/cuvpn>

* Course/Research/People sites are editable via SSH or SFTP to managed servers: **linux.coecis.cornell.edu**
* Authentication is with Cornell NetID and password.
* Full instructions with details are below.
* You must request a new directory for research sites. Course sites are automatically added before the start of each semester.
* Please submit a [helpdesk](https://help.coecis.cornell.edu/) ticket with any questions about this web hosting service.

## WordPress

WordPress hosting is offered through a separate service called CampusPress. WordPress makes it easy and intuitive to update your website, so it is recommended for users who don’t want to code HTML or PHP directly. For more information, see the [WordPress service site](https://sites.coecis.cornell.edu/).

## Web Accessible Templates

CIS provides HTML web accessible templates matching the CIS branding. You can preview the template here:

* <https://research.cs.cornell.edu/cistemplate/>

The HTML code is available for everyone in the CIS community to use. Please copy the code from the one of the following directories when you create your site:

* /cs/courses/cistemplate or /is/courses/cistemplate
* /is/research/cistemplate or /cs/research/cistemplate
* /cs/people/cistemplate or /is/people/cistemplate

Templates for WordPress are also available. You can preview the WordPress template here:

* <https://sites.coecis.cornell.edu/cistemplate/>

## Instructions for Editing

### SSH – Faculty and Graduate Students

* Login to the general purpose Linux cluster (linux.coecis.cornell.edu) with Cornell NetID and password:  
   * **ssh netid@linux.coecis.cornell.edu**
* Change directory to _/cs/_ or _/is/_ for your department:  
   * If you cannot find your directory, please submit an IT ticket to create one.  
   * **Course website**:  
         * **cd /cs/courses** OR **cd /is/courses**  
         * Change directory to applicable course folder, e.g.  
   * **Research website**:  
         * **cd /is/research/\[your research site\]** OR **cd /cs/research/\[your research site\]** OR **cd /stat/research/\[your research site\]**  
         * Change directory to your folder, e.g. _/cs/research/fabric_  
   * **Personal website**:  
         * **cd /cs/people/\[your netid\]** OR **cd /cs/people/\[your netid\]** OR **cd /stat/people/\[your netid\]**
* Edit files with text editor of your choice: vi, vim, emacs, nano
* Or edit locally and then use a local client like rsync or scp to transfer files

### SFTP – All others

1. Create a local folder in which to save your website files
2. Any SFTP client will work. We recommend **Filezilla** for its cross-platform support. Download and Install FileZilla:  
<https://filezilla-project.org/download.php?type=client>
3. Launch FileZilla, click File Menu, choose Site Manager
4. Click New Site  
   1. Host: linux.coecis.cornell.edu  
   2. Protocol: SFTP – SSH File Transfer Protocol  
   3. Logon Type: Normal  
   4. Username: Cornell NetID  
   5. Password: NetID Password
5. Click Advanced tab, Set Default remote directory  
   1. **Course website**: **/\[cs or is or stat\]/courses**  
   2. **Research website**: **/\[cs or is or stat\]/research/\[your research site\]**  
   3. **Personal website**: **/\[cs or is or stat\]/people/\[your netid\]**
6. Click OK
7. Click File menu, choose Site Manager, select the site and click Connect
8. On first login, there is a Unknown Host Key prompt; check the box to _Always trust this host, add this key to cache_, then click OK
9. Browse to your folder on the server to download files to the local folder you created.
10. Edit the local files in an editor of your choice
11. Upload modified files to the server.

### Testing

1. Course websites will appear under the main department websites in the **/courses** subdirectory:  
   1. **CS example:**  
   2. **IS example:** _http://www.infosci.cornell.edu/courses/info1309/2019fa_  
   3. A web crawler checks for new course websites every night and automatically adds them to the course listings.
2. Research websites will appear in the **/projects** or **/research** subdirectory  
   1. You can request a custom domain name for your site, e.g. **\[research group name\].\[department\].cornell.edu**
3. Personal websites will appear under your requested username  
   1. **IS example:** http://www.infosci.cornell.edu/\~username/  
   2. **CS example:** http://www.cs.cornell.edu/\~username/

---

[Learn more about the ITSG](https://it.coecis.cornell.edu/about/)

[IT Maintenance and](https://it.coecis.cornell.edu/maintenance/)[ Alerts](https://it.coecis.cornell.edu/maintenance/)

[Sitemap](https://it.coecis.cornell.edu/sitemap/)

[IT@Cornell Services](http://it.cornell.edu/)

---

