---
slug: google-season-of-docs-month-1
title: Google Season of Docs - Month 1
author: Harsh Bardhan Mishra
author_title: GSoD '21 Technical Writer @ moja.global
author_url: https://github.com/harshcasper
author_image_url: https://i.imgur.com/Owk4NoA.jpg
tags: [month1, gsod, moja-global, linux-foundation]
---

I formally got started with my [Google Season of Docs](https://developers.google.com/season-of-docs) Internship with [moja global](https://moja.global/) for the next six months. A welcome mail from the Technical Steering Committee (TSC) director [Dr. Andrew O’Reilly-Nugent](https://github.com/aornugent) was enough for me to get started with the upcoming six months where I work on a high-impact project titled [“Develop a content strategy to consolidate and promote documentation for the FLINT”](https://github.com/moja-global/Google_Season_of_Documentation/blob/master/GSoD2021-moja-global-proposal.md) along with my fellow mate [Sarthak Kundra](http://github.com/sarthakkundra/). Our work is primarily aimed towards developing content strategies, auditing and refactoring documentation, developing a community website and migrating stale documentation to the same, while persisting a user-experience for new contributors who are looking to get started with [moja global](https://github.com/moja-global).

This blog post describes my experiences around the first month of working with moja global and the learnings and work that I did. It also describes the various methodologies and concepts that I learned and implemented during this journey, while actively working with a diverse community.

![image](https://i.imgur.com/RmLmMn0.gif)

## Meetings

The best part about working with a global open-source community is the amount of communication that you need to indulge in. It not only includes interacting with the mentors and guides but also includes the stakeholders who would be directly impacted by the work we do. During the first month of [Google Season of Docs](https://developers.google.com/season-of-docs), I had the pleasure to meet with my mentors and chair a Technical Steering Committee (TSC) meeting as well.

I kick-started my internship work almost 2 weeks before the official appointment by having a meeting with [Sabita Rao](https://github.com/sabitarao), my mentor who was a GSoD ‘20 participant with [CERN](https://home.cern/) on April 19, 2021. My initial work involved the following:

-   Reading the existing documentation and finding missing gaps among the same.
-   Map the existing GitHub repositories at moja global and standardize documentation.
-   Meet with the Documentation Working Group.
-   Divide the Documentation between novice users, advanced users and developers/contributors.
-   Brainstorm on the Style Guide that moja global can follow for their purpose.

On May 3, 2021, we had a meeting with [Dr Andrew O’Reilly-Nugent](https://github.com/aornugent) who broke down the first set of deliverables for me and Sarthak. These sets of deliverables were flexible and planned with a focus on going through as much documentation as we can and finding gaps in them and fixing them up.  

On May 16, 2021, we had another meeting with a few specific members of the Technical Steering Committee, which included my mentors [Sabita Rao](https://github.com/sabitarao) and [Sagar Utekar](https://github.com/Sagar2366) and other stakeholders and fellow contributors. The meeting was scheduled to primarily discuss the following:

-   User Experience Flow    
-   Content Strategy (in progress)    
-   State of Documentation Audits (Progress & Blockers)    
-   Setting up Documentation Working Progress

The meeting recording is available [here](https://drive.google.com/file/d/1cJZIlkjyPBogDJtd1mbzrlQWlWsBBNAI/view?usp=sharing).

On May 18, 2021, we had our Technical Steering Committee meeting which was chaired by me and [Sarthak](http://github.com/sarthakkundra/) and included an introduction to the work we would do. The slides that we presented are available [here](https://docs.google.com/presentation/d/1Ajas4sc0dy6KALicIm9OHbgKosX41RPe1C7uE2ylifo/edit?usp=sharing) while the meeting recording is available [here](https://drive.google.com/file/d/1mkUnebgQWVB3Nd-wXxsKSDTusIoA-OWH/view?usp=sharing).

We demonstrated the following pointers that we are going to implement in the coming months:

-   Documentation audit plan and work done till now.    
-   Style Guide in progress for moja global.
-   Content strategy for moja global for creating outreach.    
-   User Experience map made by [Mohd Warid](https://github.com/waridrox) and the repo audit plans.    
-   Proposal for a Documentation Working Group within moja global and the work methodology.    
-   Development of a Community Website and its significance along with the documentation migration to the Read-the-Docs Website.

On May 25, 2021, we had another meeting with [Kyle Saukas](https://climateadvisers.org/staff/kyle-saukas/) that discussed the overall branding of [moja global](http://moja.global) and how the [Community Website](https://github.com/moja-global/contributor-website-v2) can have its brand. We also discussed the content that would be hosted over the community website and how we can set up the deployment for our community website.

On May 27, 2021, we had another Office Hours meeting where we welcomed some new contributors onboard the team. Some of the pointers revolving around the meeting were:
 
-   Sarthak introduced the new Community Website. 
-   Discussion around Moodle to be integrated with the Community Website.  
-   Addressing Information overlap to be addressed between the main website and the community website.  
-   Welcoming new contributors and finding ways to help them get started.

<div style={{textAlign: 'center'}}>

![image](https://i.imgur.com/2NZtEcC.gif)

</div>

## Work Completed

My first work was to evaluate the state of the documentation audits and the areas where we would need to work on. After quick sync with [Sarthak](http://github.com/sarthakkundra/), we were able to develop a mind map on a Google Sheet which consisted of various repositories across moja global and the state of the documentation among them. The Google Sheet is available [here](https://docs.google.com/spreadsheets/d/1xYU2RzQVBmG_yy3p4jP-vfsKV-LT4mjlYYtUtuV_Jl0/edit?usp=sharing).

The standard audit process was broken down to identify the following in each of the repositories:  

-   Standard README    
-   Contribution Guide    
-   Development Setup Guide    
-   User Guide    
-   Issue/PR Templates    
-   GitHub Bots

Apart from this, I also worked on developing a GitHub Bot Integration plan that can be used for a better project management workflow. The plan over Google Sheet is available [here](https://docs.google.com/spreadsheets/d/1VVSLZ4QIqQxl1h4bM8JxF4lOmRlK8N0cnJfBqSgRP8o/edit?usp=sharing). As part of the plan, the integration of the Developer Certification of Origin (DCO) Bot has been completed while the other integration would be soon carried out, which is being tracked over this [issue](https://github.com/moja-global/About_moja_global/issues/131).

Apart from this a major refactor of the moja global’s contributing documentation has been completed through this [Pull Request](https://github.com/moja-global/About_moja_global/pull/130). The Pull Request removes the typo fixes, dead links and adds new updated information through which we would like the new contributor engagement with the community. A simplistic refactor of the “About moja global” README has also been carried out through this [Pull Request](https://github.com/moja-global/About_moja_global).

Lastly, the README for the [FLINT JSON Interface](https://github.com/moja-global/FLINT-JSON-Interface) was audited through this [Pull Request](https://github.com/moja-global/FLINT-JSON-Interface/pull/40) to help developers better get started contributing to the same. I also worked with Sarthak on the new community website, creating new issues for contributors and defining the [Community Website Map](https://miro.com/app/board/o9J_lFEkawU=/), with Mohammad Warid which would be utilized for the User Experience Flow.

<div style={{textAlign: 'center'}}>

![image](https://i.imgur.com/T85reT9.gif)

</div>

## Work in Progress

The following pointers are work in progress for me:

-   Developing the Content Strategy for moja global   
-   Developing the Style Guide for moja global    
-   Auditing the rest of the GitHub Repositories across moja global    
-   Setting up a Documentation Working Group at moja global

The content strategy for moja global would allow the organization administrators, contributors and maintainers to identify the region where content can be developed and curated for the community outreach. It would also define how the documentation would be structured and laid out in the essence to make sure it is accessible to all.

The style guide aims to bring standardization across the whole organization and the documentation efforts that are being put into the pipeline right now. The style guide has been heavily inspired by [Google's style guide](https://developers.google.com/style) and [Red Hat’s Documentation guide](https://redhat-documentation.github.io/) to ensure best practices are being followed consistently.

The audits are currently underway with a lot of contributors joining right now, and their contributions further paving the way for user-centric audits. It would also allow us to set up a Documentation Working Group, under the Technical Steering Committee which would allow us to channel the efforts properly towards having a more consistent documentation development.

<div style={{textAlign: 'center'}}>

![image](https://i.imgur.com/Munizlj.gif)

</div>

## Learnings

The first month at moja global as a GSoD contributor was associated with many learnings. The first was around communicating and navigating across a large organization and finding areas to plug in our contributions. I never had the opportunity to work with a large scale open source organization on a more consistent basis and I’m thankful to moja global for providing me with this opportunity.

I also learnt a great deal about effective communication, requirement analysis and building proper deliverables. During our regular meetings with [Andrew](https://github.com/aornugent), my mentors [Sabita](http://github.com/sabitarao/) & [Sagar](https://github.com/Sagar2366) and fellow contributors, [Sarthak](http://github.com/sarthakkundra/), [Shubham](https://github.com/shubhamkarande13) & [Warid](https://github.com/waridrox), I learnt to manage my work and take actionable feedback on the same within a properly structured timeline. It has also helped me streamline my work accordingly, thus paving the way for a better contribution pipeline.

Working at moja global has also allowed me to be a part of a diverse community. It allowed me to introduce the community to a lot of my fellow peers and juniors who have been joining the community to coordinate the fight against climate change in their way. It has also allowed me to assess the setting up of special teams/groups within the community to ensure that the documentation development continues to persist even after the end of the [Google Season of Docs](https://developers.google.com/season-of-docs) 2021.

From a documentation perspective, I got a chance to apply the principles of Minimalism, creating user stories for effective content development and documentation user experience. Some of these are fundamental to product documentation and I was glad I could utilize my learnings for the same and contribute to the content outreach and documentation efforts at moja global.

<div style={{textAlign: 'center'}}>

![image](https://i.imgur.com/YRiWOhw.gif)

</div>

## Shout-Outs

I would like to extend my gratitude to [Sabita Rao](http://github.com/sabitarao/) and [Sagar Utekar](http://github.com/sarthakkundra/), my mentors for the [Google Season of Docs](https://developers.google.com/season-of-docs) to have guided me throughout the first month. Their reviews, feedback and overall support was invaluable to me to help me grow as a Technical Writer and Information developer.

I would also like to thank [Shubham Karande](https://github.com/shubhamkarande13), my first point of contact to the community when I started up initially. His loads of information, feedback and expertise with the moja global community helped me a lot in getting started up and working on my project. It was also a great experience working with [Mohammad Warid](https://github.com/waridrox) and [Mohit Kumar](https://github.com/Mohitkumar6122), with their shared expertise on User Experience and Module development respectively.

Lastly, I would like to thank the overall moja global community for providing the opportunity to work on a more consistent long-term basis on coordinating the documentation efforts. It has been a great experience working so far and I hope I can work even more in the coming months.

Signing off the first-month log about my [Google Season of Docs](https://developers.google.com/season-of-docs) experience!

<div style={{textAlign: 'center'}}>

![image](https://i.imgur.com/NDIkyfG.gif)

</div>