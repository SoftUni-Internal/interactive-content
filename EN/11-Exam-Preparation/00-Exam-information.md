# Exam Preparation: Theater

[slide hideTitle]

# Exam Rules

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-1-2-3-4-5-6-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/08-Exam-Preparation-NEW.zip) **for this task.**

**You can view the solution by visiting the** [GitHub Repository](https://github.com/martinPandarski/Theaters-Node.js).

- When you are ready, **delete** the `node_modules` folder, make sure all dependencies are listed in the `package.json` file and submit your **project archived**

- You are provided with **HTML and CSS** resources, which you **CAN modify**

- Use `Express.js` as a back-end framework

- Use **MongoDB** as a database with **mongoose**

- You can use whatever **view engine** you like (Handlebars, EJS, Pug, etc...)

- Please keep in mind that the points listed below, is the maximum you can receive for sucessfully aplying a given functionality

## Application Overview
Get familiar with the provided **HTML & CSS code** in order to create an application for a **theater.**

[/slide]

[slide hideTitle]
# Functional Requirements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-7-HomePage-setup-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-8-Error-Handler-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Guest (Not Logged In)

The **application** should provide **Guest** (not logged in) users with the functionality to **login**, **register** and **view** the **Guest Home** page.

## Users (Logged In)

The **application** should provide **Users** (logged in) with the functionality to **view all the plays which are listed**, a **play details page, and they should be able to like a play.** 

Plays can be **public** or **not public.**

Users can access **only public plays.**

[/slide]


[slide hideTitle]
# Database Models: 10 Pts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-9-UserModel-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Database** of the **Theater** application needs to support **two entities.**

## User

- **Username**: string (**required**), **unique**

- **Password**: string (**required**)

- **Liked Plays**: a collection of Plays 

## Play

- **Title**: string (**required**), **unique**

- **Description**: string (**required**), max length of 50 symbols

- **Image Url**: string (**required**)

- **Is Public**: boolean, default - **false**

- **Created at**: Date or String, **required**

- **Users Liked**: a collection of Users

Make sure to implement the entities with the **correct datatypes.**

[/slide]

[slide hideTitle]

# Security Requirements: 10 Pts

**Security Requirements** mainly regard access. 

- **Guest** (not logged in) users can access the **Home** page and its functionality

- **Guest** (not logged in) users can access the **Login** page and its functionality

- **Guest** (not logged in) users can access the **Register** page and its functionality

- **Users** (logged in) can access the **Home page** (**Listed all Plays**) page and its functionality

- **Users** (logged in) can access the **Play Details** page and its functionality

    * **Users** (not play creator) can **Like** a play **once** 

    * **Users** (play creator) can **Edit** and **Delete** their plays

- **Users** (logged in) can access the **Create Play** page and its functionality

- **Users** (logged in) can access the **Logout** functionality

[/slide]

[slide hideTitle]
# Validation and Error Handling: 10 Pts

The application should notify the users about the result of their actions.

## Login / Register

You should make the following validations:

- The **username** should be **at least 3 characters** long and should consist only of **english letters** or **digits**

- The **password** should be **at least 3 characters** long and should consist only of **english letters** or **digits**

- The **repeated password** should be **equal to the password**

[image assetsSrc="JS-BackEnd-Exam-Preparation-12.png" /]

## Play

You should make the following validations while **creating** or **editing a play:**

- The **title** should **not be blank**

- The **description** should **not be blank**

- The **imageUrl** should **not be blank**

[image assetsSrc="JS-BackEnd-Exam-Preparation-13.png" /]

[/slide]

[slide hideTitle]
# Guest Pages: 15 Pts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-10-11-12-13-14-15-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

These are the pages and functionalities, accessible by **Guests (logged out users).**

## Home Page (Logged Out User)

List the **top three (3) public plays** ordered by the **number** of likes in **descending** order. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-1.png" /]

If there are no plays in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-2.png" /]

## Register Page (Logged Out User)

Registers a user inside the database with **username** and a **password.** 

Both **passwords** must **match!** 

[image assetsSrc="JS-BackEnd-Exam-Preparation-3.png" /]

## Login Page (Logged Out User)

[image assetsSrc="JS-BackEnd-Exam-Preparation-4.png" /]

[/slide]


[slide hideTitle]
# User Pages: 55 Pts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-16-17-18-19-20-21-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

These are the **templates** and **functionalities**, accessible by **Users** (**logged in** users).

## Home Page (Logged in Users)

Lists **all public** plays, sorted in **descending order** by the **time of creation** 

Each play's template includes a `Details` button which leads to the **play details page.**

[image assetsSrc="JS-BackEnd-Exam-Preparation-5.png" /]

If there are **no plays** in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-6.png" /]

## Create Play Page (Logged in Users)

Allows users to enter a play **title**, **description**, an **image URL** and choose if the play will be **public** or not. 

You will receive the value of the checkbox as a string "**on**" if it is checked or **undefined** if it is not. 

You have to convert the value to Boolean (**true** or **false**) and save the play in the database. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-7.png" /]

## Logged in Details Page (Logged in Users)

In the Details of a play, its **name** and **description** should be present. 

## Not Liked Play (Logged in Users)

If the user did not like the play, the **Like button** should be **visible**. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-8.png" /]

## Liked Play (Logged in Users)

**After** the user has liked the play, the `You have already liked this play!` **span element** should be shown **instead** of the `[Like]` button. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-9.png" /]

## Play Creator (Logged in Users)

The creator of the play should see `[Delete]` and `[Edit]`. 

The creator should NOT be able to like their plays! 

[image assetsSrc="JS-BackEnd-Exam-Preparation-10.png" /]

## Delete Play (Logged in Users)

Upon deleting a play (clicking the `[Delete]` **button**), users should be **redirected to the home page.**

## Edit Play (Logged in Users)

All form fields should be **filled in automatically** with the corresponding information of the selected play. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-11.png" /]
[/slide]

[slide hideTitle]

# Bonus: 10 Pts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-22-Bonus-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `[Sort by Likes]`: Filter out the **play with the most likes**  

[image assetsSrc="JS-BackEnd-Exam-Preparation-14.png" /]

- `[Sort by Date]`: Sort all plays by date from newest to oldest

[image assetsSrc="JS-BackEnd-Exam-Preparation-15.png" /]

[/slide]

[slide hideTitle]

# Deployment

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/08.Exam-Preparation/JS-BackEnd-ExamPrep-23-Deployment-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]









