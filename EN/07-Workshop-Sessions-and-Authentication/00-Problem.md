# Cubicle: Part 3

[slide hideTitle]
# Project Setup

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/05-Sessions-and-Authentication-Workshop-Resources.zip) **for this task.**

"**Cubicle**" is a place, where you can browse some of the most popular Rubik cubes in the world and add some new cubes that you have discovered.  

If you missed the first two parts of this workshop, **make sure you complete them** before you continue because all parts of this workshop are related to each other.

## Main Task 

Now it's time to implement user service in your app, so people can **register**, **login**, and **logout**. 

And each cube can be **edited** or **deleted**. 

Some of the functionality should **requires authentication** (such as **create the cube**, **create accessory**) and authorization (such as **edit** and **delete**).

Also, all **routes** should be **protected!** 

## Installing Dependencies 

You should install a few more packages which you will use. 

They are: 

- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): allows you to decode, verify and generate JWT

- [Bcrypt](https://www.npmjs.com/package/bcrypt): a library to help you hash passwords

- [Cookie-parser](https://www.npmjs.com/package/cookie-parser): parse **cookie header** and populate `req.cookies` with an object keyed by the cookie names (if you choose to store the jwt as а cookie)

## Model 

The **User Model** structure:

- **Id**: ObjectId

- **Username**:  string

- **Password**: string (**hashed**), уse `bcrypt` to hash and compare the password

Make sure, when you successfully create a new user into the database, you generate a **JSON web token** and use it later for **authentication** and **authorization.**

Also, you have to add a property on **Cube Model**, which is `creatorId` (type: **String** and its **required**), so you can keep tracking every cube's creator. 

[/slide]


[slide hideTitle]
# Authentication 

Make sure the **anonymous** (guest) users **cannot reach** the functionality which requires **authentication**, such as "**create cube view**".

And already logged in users have generated and stored **jwt**, can see the correct navigation and **can not** reach the login and register form.

If some of these scenarios happen, make sure the current user is redirected to the home page.

**Guest** users can **see** and **access** the following urls: 

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-1.png" /]

- **Home page** **(Browse)**
- **About page**
- **Login page**
- **Register page**
- **Cube details page**

and cannot access and see everyone else.

**Logged** in users can see and access the following urls:

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-2.png" /]

- **Home page (Browse)**
- **About page**
- **Add cube**
- **Add accessory**
- **Logout**
- **Cube details page**
- **Cube accessories page**
- **Edit Cube page**
- **Delete Cube page**

[/slide]

[slide hideTitle]
# Authorization

Only authorized users should see the `[Edit]` and `[Delete]` buttons and if the **currently logged in user is the creator of this cube.**

Otherwise, they should be **hidden.**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-3.png" /]

[/slide]

[slide hideTitle]
# Additional Pages

You should implement four new routes:

- `/login`: should render the login form

- `/register`: should render the register form

- `/edit`: should render the edit form

- `/delete`: should render the delete form

Make sure when you access `/edit` and `/delete` routes, they show the current cube information.

Use the provided resources to create the additional templates using Handlebars (Use "**username**: **student**", "**password**: **student credentials**" to do that).

Identify the dynamic parts and use the appropriate syntax for interpolating and rendering the application context. 

Replace the old CSS file with the given one.

- **Login Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-4.png" /]

- **Register Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-5.png" /]

- **Edit Cube Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-6.png" /]

- **Delete Cube Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-7.png" /]

[/slide]
