# Softuni Forum Workshop: Part 1

[slide hideTitle]

# Task Requirements
[Download resources here!](https://mega.nz/file/Oc4BTa5B#kopKiHP4-KPlYK7si4ecujloS1PxIhVJG_ULMZmhpKo)

In the resources, you will find the skeleton **HTML** and **CSS**. 

When starting the `index.html` the following page will appear:

[image assetsSrc="Angular-Components-Workshop.png" /]

The application is a forum where each registered user can create a theme or post a comment. 

For now, your task is to check the given skeleton, **HTML** and **CSS** files and split them into components so each part can be reusable. 

Be careful when you structure the components.

[/slide]

[slide hideTitle]

# MongoDB

Before you start with creating a new project in Angular, you need to install **MongoDB**.

You can find an installation guide [here](https://mega.nz/file/bMZC3ThT#1F--LRBifNwhKe_qg2eUgE9ZpV0u2tSx6u2jjpZO3cY)

After the successful installation, your database will be empty, so you can load the provided data in the database as follows:

1. Use the provided folder named `from` resources.
2. You have to have "mongod" running on a separate system command line.
3. Open a new command line and in the console write the following command: `mongorestore -d forum C:\Users\Name\Desktop\forum`

Note: `C:\Users\Name\Desktop\forum`: replace it with the path of the folder `forum` on your computer!

On the console you will see something like this:

[image assetsSrc="Angular-Components-Workshop(1).png" /]

This is it! Now you can check if the **db** is in your **dbs** using the following commands:

[image assetsSrc="Angular-Components-Workshop(2).png" /]

[/slide]

[slide hideTitle]

# REST API

You are also provided with a REST API. Download it from [here](https://mega.nz/file/yN4k0RoS#pGmJUZli5wta8YIUC496T10bSv45sgbm62MeIX8vKmQ)

Inside the REST API folder, you should first install the dependencies using the command `npm install`. 

After that, type the command `npm start`. 

To fetch the themes, you will have to make a GET request on `localhost:3000/api/themes`.

Here are the REST API endpoints specifications:

| **HTTP Method** | **Description** | **Endpoint** | **Expect** | **Login Required** |
|:---:|:---:|:---:|:---:|:---:|
| `POST`   | Signing up            | `/users/register`                 | `username`, `email`, `password`, `rePassword`, `tel` - optional     | No  |
| `POST`   | Signing in            | `/users/login`                  | `username`, `password`  | No  |
| `POST`   | Logging out           | `/users/logout`                  |             | Yes |
| `GET`    | Get all themes        | `/themes`                        |             | No  |
| `POST`   | Post new theam        | `/themes`                        | `themeName`, `postText`   | Yes |
| `POST`   | Post comment in theme | `/themes/:themeId`                | `postText`    | Yes |
| `PUT`    | Subscribe to theme    | `/themes/:themeId`               |             | Yes |
| `GET`    | Get latest posts      | `/posts?limit=5`                 |             | No  |
| `PUT`    | Edit post             | `/themes/:themeId/posts/:postId`  | `postText`    | Yes |
| `DELETE` | Delete post           | `/themes/:themeId/posts/:postId` |             | Yes |
| `PUT`    | Like a post           |`/likes/:postId`                |             | Yes |
| `GET`    | Get user info / **Verify if user is logged in** | `/users/profile`                  |             | Yes |
| `PUT`    | Update user info      | `/users/profile`                 | `username`, `email`, `tel` - optional  | Yes |


Note: **Edit post** and **Delete post** can be done only by the **user** who has created the post!

**Logged Unlogged User**

**NOTE: Because we have not covered authentication yet, you can hardcode it with a variable.**

Logged out users see the Log-in and the Register buttons or links.

[/slide]

[slide hideTitle]

# Implementation of the Main Section

After the back end is ready, you should fetch all themes and list them on the home page in the format provided in the skeleton.

Sort the themes in the main section in descending order by the subscribers.

Each theme should have a **title**, **date of creation**, the **username** of the creator, and the **count** of the subscribers of the theme. 

[image assetsSrc="Angular-Components-Workshop(3).png" /]

[/slide]

[slide hideTitle]

# Implementation of the Aside Section

In the recent posts section, show only the five latest posts.

`https://localhost:3000/api/posts?limit=5`

The posts will be returned from the REST API **sorted by the time of creation**.

Each component should have a **title**, the title of the theme, and a **username** of the user.

The last comment in the theme belongs to the user, who created it, and the **time** the user created the post.

[image assetsSrc="Angular-Components-Workshop(4).png" /]

[/slide]


