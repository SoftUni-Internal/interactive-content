# Softuni Forum Workshop: Part 2

[slide hideTitle]

# Task Requirements

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/06-Modules-And-Routing-Workshop.zip) **for this task.**

So far, we have created **one dynamic page** which **lists all themes** sorted by two different criteria.

The next step is to implement **few more pages** and **route between them**.

You will be provided with **HTML** and **CSS** skeleton for all other additional pages that you must create.

There is one catch, half of these pages require **authentication**.

You must create some properties or services that fake this authentication.

Because we do not know yet how to manipulate **forms** properly or the real case with the authentication and authorization. 

We will fix that later when we have the knowledge to do so.

[/slide]

[slide hideTitle]

# Navigation bar

## Logged in the navigation bar

When the `user` is `logged in` he should see the following navigations: 

The mini nav-bar includes: 

- `[Username's profile]` a-tag should refer to the profile page: `localhost:4200/profile`. 

- `[Logout]` a-tag should refer to `localhost:4200/logout`.

The nav-bar below the logo of the SoftUni forum includes: 

- `[Home]` a-tag should refer to the home page: `localhost:4200/home`.

- `[Themes]` a-tag should refer to the "page with all themes" `localhost:4200/themes` 

- `[New Theme]` a-tag should refer to the "create theme" `localhost:4200/add-theme`.

[image assetsSrc="Angular-Modules-And-Routing-Workshop.png" /]

## Not logged in the navigation bar

When the user is "not logged in" he should see the following navigations: 

The mini nav-bar includes: 

- `[Login]` a-tag should refer to the home page `localhost:4200/login`

- `[Register]` a-tag should refer to `localhost:4200/register`

[image assetsSrc="Angular-Modules-And-Routing-Workshop(1).png" /]

[/slide]

[slide hideTitle]

# Home page

## Not Logged in

This is the home page URL `localhost:4200/home`. 

This is a welcome user page. 

The welcome component that we have already can be reused here. 

All `users` can access this page no matter their authentication. 

The not logged in user view: 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(2).png" /]

## Logged in

Logged in users will see the following view:

[image assetsSrc="Angular-Modules-And-Routing-Workshop(3).png" /]

[/slide]

[slide hideTitle]

# Register: Not Logged in


This is the URL of the register page `localhost:4200/register`. 

This will be the **point** of your app that the fake **isLoggedIn property** can be changed to true. 

For now, we do not have a database with user registration. 

So, make sure each registered user is stored in **userService** or some other appropriate place. 

So, each of them can log in successfully. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(4).png" /]

[/slide]

[slide hideTitle]

# Login: Not Logged in

This is the URL of the login page `localhost:4200/login`. 

This will be another **one point** of your app that the fake **isLoggedIn property** can be changed to **true**. 

For now, we do not have a database with user registration. 

So, make sure each registered user is stored in **userService** or some other appropriate place. 

Each of them can log in successfully.  

[image assetsSrc="Angular-Modules-And-Routing-Workshop(5).png" /]

[/slide]

[slide hideTitle]

# Themes page 

## Not Logged in

This is the themes page URL `localhost:4200/themes`.

This is the page we already have. 

All `users` can access this page no matter their authentication. 

By clicking the title of a theme, you will be redirected to the theme content view. 

It is described below. There are several differences between the logged and anonymous user. 

The anonymous user should see the following: 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(6).png" /]

## Logged in

This is the themes page URL `localhost:4200/themes` for logged in users.

Note: Because you are still not logged in, you can **hardcode** this userId `5fa64b162183ce1728ff371d` in your service to write your logic for subscribed users - **Red** and **Green** buttons.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(7).png" /]

[/slide]

[slide hideTitle]

# Theme comments 

## Not Logged in

This is the theme comments page (`localhost:4200/themes/:themeId`), where the user can see all the posts for the selected theme. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(8).png" /]


## Logged in

The logged-in user can **write a new comment** or **like** the other user's posts. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(9).png" /]

[/slide]

[slide hideTitle]

# Create New Theme - Logged in only

This is the create new theme page (`localhost:4200/themes`) where each **user** (logged in) can create his own theme.  

- When the `Post` button is clicked, you can try to make a `POST` request to (`localhost:4200/themes`) with the given theme information. 

After successful creation, redirect the current `user` to the theme comments page of his newly created theme. 

- When the `Cancel` button is clicked, redirect the user to the home page. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(10).png" /]

[/slide]

[slide hideTitle]

# Profile - Logged in

This is the profile page (`localhost:4200/profile`). 

This page will show the information about the currently logged-in user. 

For now, the data on this page will be static, except if you create more than the **fake isLoggedIn property**. 

The `Edit` button will replace the information fields with input fields, but this will be made in the next workshop when you learn more about handling forms. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(11).png" /]

[/slide]

[slide hideTitle]

# Invalid routes

The page URL for all invalid routes `localhost:4200/??????`.

Use it if an invalid path or wrong one is accessed.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(12).png" /]

## Protected routes

Make sure all logged-in user pages are protected. 

That means if your fake "**isLoggedIn**" property is **false** the logged-in pages cannot be accessed. 

Create authentication guards.

[/slide]

