---
layout: post
title:  "Create HTML-Based Email in Microsoft Outlook (and Prevent Mistakes That I Made)"
date:   2020-07-23 20:57:36 +0700
categories: jekyll update
---

Office email is kinda boring if you just use the normal Outlook editor. I saw some marketing (or spam) email that is more attractive in my personal inbox. If the marketing can do that in email, why can't I? 

When I googled, I came across this [link](https://www.linkedin.com/pulse/how-insert-html-source-code-outlook-emails-maurizio-la-cava/) on how to insert HTML source code to Outlook emails. 

I tried to follow the tutorial, using one of the free templates that is available on internet [here](https://graphicmama.com/blog/free-responsive-html-email-templates/)

After I click **send** button, the nightmare happened. 

#### The Image Didn't Showed
![Image Didn't Showed](/assets/images/email2.png)

Later I found out that you can't put relative directory on your HTML email 
> you need absolute link

so instead of putting `<img src="assets/pic1.png">` you should put `<img src="http://www.sanfiz.ro/images/2020/06/05/pic1.png">`

![Image Now Appear](/assets/images/email1.png)

I hope you won't make any mistakes that I made earlier in the office :D