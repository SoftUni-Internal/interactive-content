# MySQL Exam Preparation
[slide hideTitle]
# Insta Influencers

You have been selected to help the most famous Insta influencers. 

Thanks to your knowledge of databases, you have been selected to create the structure of a brand-new database and to fill it. 

Once the base is ready, you will be able to respond without any problems to any information request from the influencers based on certain criteria. 

As with other databases, it is most important first to become familiar with the structure you need to build, and then fill it with given data.

## Database Overview
You have been given an Entity / Relationship Diagram of the **Insta Influencers**:

[image assetsSrc="mysql_exam-prep.png" /]

The **Insta Influencers** needs to hold information about "**users**", "**addresses**", "**photos**", "**comments**", "**users_photos**" and "**likes**".
Your task is to create a database called instd (Insta Database). Then you will have to create several tables.
- "**users**" - contains information about the users
	- each user has an **id**, **username**, **password**, **email**, **gender**, **age**, **job_title** and **ip**
- "**addresses**" - contains information about the addresses
	- each address has an **id**, **address**, **town**, **country** and **user_id**
- "**photos**" - contains information about the photos
	- each photo has **id**, **description**, **date** and **views**
- "**comments**" - contains information about the comments
	- each comment has **id**, **comment**, **date** and **photo_id**
- "**users_photos**" - a many to many mapping table between the users and the photos
	- have composite primary key from **user_id** and **photo_id** 
- "**likes**" - contains information about the likes
	- each like has **id**, **photo_id** and **user_id**

[/slide]