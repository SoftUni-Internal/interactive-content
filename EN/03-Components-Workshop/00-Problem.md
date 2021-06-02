# Softuni Forum Workshop: Part 1

[slide hideTitle]

# Task Requirements

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/new-resources-workshop-Components.zip) **for this task.**

This task contains a program skeleton which consists of **HTML** and **CSS** code, please do not alter its structure. 

When starting the `index.html`, the following page will appear: 

[image assetsSrc="Angular-Components-Workshop-New.png" /]

The application is a forum, where each registered user can create a theme or post a comment.

The first part of the assignment is to split the HTML and CSS code from the skeleton **into components**, so that each part can be **reusable**. 

[/slide]

[slide hideTitle]

# MongoDB

Before you start a new project in Angular you need to install MongoDB. 

You can find an installation guide in the following document:  

[MongoDB-Installation-Guide.docx](https://mega.nz/file/bMZC3ThT#1F--LRBifNwhKe_qg2eUgE9ZpV0u2tSx6u2jjpZO3cY).

After the installation your database will be empty, so you can load the provided initial data: 

- Download the folder named "forum"

- Start MongoDB on a system command line

- Open a new command prompt and in the console type in the following command: 

`mongorestore -d forum C:\Users\Name\Desktop\forum`

**Note** `C:\Users\Name\Desktop\forum`- **replace with the path of the folder** `forum` **in your computer!!**

If it runs correctly, the console output should have a similar look to this one: 

[image assetsSrc="Angular-Components-Workshop(1).png" /]

That's it! Now you can check if the db is in your dbs using the "show dbs" command: 

[image assetsSrc="Angular-Components-Workshop(2).png" /]

[/slide]

[slide hideTitle]

# REST API

You can find the **REST API** in the [resources](https://mega.nz/file/yN4k0RoS#pGmJUZli5wta8YIUC496T10bSv45sgbm62MeIX8vKmQ).

To make use of it you should install the required dependencies by typing in the `npm install` command. 

After that, type in `npm start`. 

To fetch the themes, make a GET request on `localhost:3000/api/themes`.

Here are the REST API endpoints specifications:

**Base Url:** `https://localhost:3000/api`

| **HTTP Method** | **Description** | **Endpoint** | **Expect** | **Login Required** |
|:---:|:---:|:---:|:---:|:---:|
| `POST`   | Signing up            | `/users/register`                 | `username`, `email`, `password`, `rePassword`, `tel` - optional     | No  |
| `POST`   | Signing in            | `/users/login`                  | `username`, `password`  | No  |
| `POST`   | Logging out           | `/users/logout`                  |             | Yes |
| `GET`    | Get all themes        | `/themes`                        |             | No  |
| `POST`   | Post new Theme        | `/themes`                        | `themeName`, `postText`   | Yes |
| `POST`   | Post comment in Theme  | `/themes/:themeId`                | `postText`    | Yes |
| `PUT`    | Subscribe to theme    | `/themes/:themeId`               |             | Yes |
| `GET`    | Get latest posts      | `/posts?limit=5`                 |             | No  |
| `PUT`    | Edit post (possible only for the creator of this post)             | `/themes/:themeId/posts/:postId`  | `postText`    | Yes |
| `DELETE` | Delete post (possible only for the creator of this post)            | `/themes/:themeId/posts/:postId` |             | Yes |
| `PUT`    | Like a post           |`/likes/:postId`                |             | Yes |
| `GET`    | Get user info / **Verify if user is logged in** | `/users/profile`                  |             | Yes |
| `PUT`    | Update user info      | `/users/profile`                 | `username`, `email`, `tel` - optional  | Yes |


## Logged/Unlogged User

**NOTE: Because we have not covered authentication yet (ogging in and registering), you can hardcode it using a variable.**

**Logged out** users should see the **Login** and **Register** buttons/links. 

[/slide]

[slide hideTitle]

# Implementation of the Main Section

After the backend is ready to use, you should **fetch all themes** and **list them** on the home page in the format provided in the skeleton.  

The **themes in the main** section should be **sorted in descending order according to the subscribers.**  

Each theme should have a **title**, **date** (of creation), the **username** of its creator, **count of the subscribers** of that theme. 

[image assetsSrc="Angular-Components-Workshop-New-2.png" /]

[/slide]

[slide hideTitle]

# Implementation of the Aside Section

In the **Recent posts section, only the 5 latest posts** should be rendered.

`https://localhost:3000/api/posts?limit=5` 

The posts will be returned from the REST-API **sorted by time of creation**.

Each component should contain the **theme title**, the **username** of the last user to post a comment in the theme thread and the **time** the post was created. 


[image assetsSrc="Angular-Components-Workshop-New-3.png" /]

[/slide]


