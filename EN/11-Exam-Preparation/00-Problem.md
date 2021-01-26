# Exam Preparation: Theater

[slide hideTitle]

# Exam Rules:

[Download resources here!](https://mega.nz/file/fVgUAL4B#rQeXaRcVuIN-_eDiBjHQwZzhVXvbdOa5kK5UlwrUI-8)

- You have 4 hours to complete the task

- When you are ready, **delete** the `node_modules` folder, make sure all dependencies are listed in the `package.json` file, and submit your archived project

- You are provided with **HTML and CSS** resources, which you **CAN modify**

- Use `Express.js` as a back-end framework

- Use **MongoDB** as a database with **mongoose**

- You can use whatever **view engine** you like (Handlebars, EJS, Pug, etc...)

- Keep in mind that the points listed below, are the maximum point you can receive for a given functionality!

- **Application Overview**
Get familiar with the provided **HTML** and **CSS** and create an application for **theaters.**

[/slide]

[slide hideTitle]
# Functional Requirements

The **Functionality Requirements** describe the functionality that the **Application** must support.

- **Guest (Not Logged In)**

The **application** should provide **Guest** (not logged in) users with the functionality to **login**, **register** and **view** the **Guest Home page.**

- **Users (Logged In)**

The **application** should provide **Users** (logged in) with the functionality to **view all the plays which are listed**, **play details page** and **they should be able to like a play.** 

Plays can be **public** or **not.**

Users can access **only public plays.**
[/slide]


[slide hideTitle]
# Database Models: 10 Pts

The **Database** of the **Theater** application needs to support **two entities:**

## User

- Username: string (required), unique

- Password: string (required)

- Liked Plays: a collection of Plays 

## Play

- Title: string (required), unique

- Description: string (required), max length of 50 symbols,

- Image Url: string (required),

- Is Public: boolean, default - false,

- Created at: Date or String, required

- Users Liked: a collection of Users

Implement the entities with the **correct datatypes.**

[/slide]

[slide hideTitle]
# Guest Pages: 15 Pts

These are the pages and functionalities, accessible by **Guests (logged out users).**

- **Home Page (Logged Out User)**

List the **top three (3) public plays** ordered by the count of likes in **descending** order. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-1.png" /]

If there are no plays in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-2.png" /]

- **Register Page (Logged Out User)**

Register a user inside the database with **username** and **password.** 

Both **passwords** must **match!** 


[image assetsSrc="JS-BackEnd-Exam-Preparation-3.png" /]


- **Login Page (Logged Out User)**

[image assetsSrc="JS-BackEnd-Exam-Preparation-4.png" /]

[/slide]


[slide hideTitle]
# User Pages: 55 Pts

These are the **templates** and **functionalities**, accessible by **Users** (logged in users).

- **Home Page (Logged in User)**

List **all public** plays sorted in **descending order** by the **created time** with a button **Details** which leads to a **play details page.** 

[image assetsSrc="JS-BackEnd-Exam-Preparation-5.png" /]

If there are no plays in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-6.png" /]

- **Create Play Page (Logged in User)**

Enter play **title**, **description**, **image URL** and choose if the play will be public or not. 

You will receive the value of the checkbox as a string `on` if it is checked or **undefined** if it is not. 

You have to convert the received value as Boolean **true** or **false** and save the play in the database. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-7.png" /]

- **Logged in Details Page (Logged in User)**

In the Details of a play section, you should load play **name** and **description**. 

- **Not Liked Play (Logged in User) **

If the user did not like the play, you should display the **Like button.**  

[image assetsSrc="JS-BackEnd-Exam-Preparation-8.png" /]

- **Liked Play (Logged in User)**

**After** the user has liked the play, the `You have already liked this play!` span element should be shown instead of the `[Like]` button. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-9.png" /]

- **Play Creator (Logged in User)**

The creator of the play should see `[Delete]` `[Edit]`. 

The creator should NOT be able to like his plays! 
[image assetsSrc="JS-BackEnd-Exam-Preparation-10.png" /]

- **Delete Play (Logged in User)**

Upon deleting a play (clicking over `[Delete]` **button**, you should be **redirected to the home page.** 

- **Edit Play (Logged in User)**

All form fields should be **filled automatically** with the corresponding information of the selected play. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-11.png" /]
[/slide]


[slide hideTitle]

# Security Requirements: 10 Pts

The **Security Requirements** are mainly access requirements. 

Configurations about which users can access specific functionalities and pages.

- **Guest** (not logged in) users can access **Home** page and functionality.

- **Guest** (not logged in) users can access **Login** page and functionality.

- **Guest** (not logged in) users can access **Register** page and functionality.

- **Users** (logged in) can access **Home page** (**Listed all Plays**) page and functionality.

- **Users** (logged in) can access **Play Details** page and functionality.

    - **Users** (not play creator) can **Like** a play **once** 

    - **Users** (play creator) can **Edit** and **Delete** the current play

- **Users** (logged in) can access **Create Play** page and functionality.

- **Users** (logged in) can access **Logout** functionality.

[/slide]

[slide hideTitle]
# Validation and Error Handling: 10 Pts

- **Login / Register**

The application should notify the users about the result of their actions.

You should make the following validations:

- The username should be **at least 3 characters** long and should consist only **English letters** and **digits**

- The password should be **at least 3 characters** long and should consist only **English letters** and **digits**

- The **repeat password** should be **equal to the password**

[image assetsSrc="JS-BackEnd-Exam-Preparation-12.png" /]

- **Play**

You should make the following validations while **creating** or **editing a play:**

- The **title** should **not be empty**

- The **description** should **not be empty**

- The **imageUrl** should **not be empty**

[image assetsSrc="JS-BackEnd-Exam-Preparation-13.png" /]

[/slide]

[slide hideTitle]

# Bonus: 10 Pts

- `[Sort by Likes]`: Filter only the **play with the most likes.**  

[image assetsSrc="JS-BackEnd-Exam-Preparation-14.png" /]

- `[Sort by Date]`: Sort all plays by date from newest to oldest

[image assetsSrc="JS-BackEnd-Exam-Preparation-15.png" /]


[/slide]