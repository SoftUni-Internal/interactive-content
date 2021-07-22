# Softuni Forum Workshop: Part 2

[slide hideTitle]

# Task Requirements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-0-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/Modules-and-routing-resources.zip) **for this task.**

So far, we have created **a dynamic page** which **lists all themes** sorted in descending order according to the number of subscribers.

The next step is to implement **a few more pages** and **routes between them.** 

You will be provided with an **HTML** and **CSS** skeleton for all other additional pages that you must create.

There is one catch, half of these pages require **authentication**.

You need to create some **properties** or **services** to **fake** this **authentication**, as we do not know how to manipulate **forms** properly yet or the process of real authentication and authorization. 

We will fix that later when we acquire the knowledge to do so.

[/slide]

[slide hideTitle]

# Navigation Bar

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Logged in Users

**“Logged in”** and **“not logged in”** users can see 3 options in the center of the navigation:

- \[**Home**\] **button**, should refer to the home page `localhost:4200/home`

- \[**Themes**\] **button**, should refer to the "page with all themes" `localhost:4200/themes`

- \[**New Theme**\] **button**, should refer to the "create theme" `localhost:4200/add-theme`

When the "**user**" is "**logged in**" they should see the following navigation: 

- \[**My Profile**\] **tag**, should refer to the profile page `localhost:4200/profile`

- \[**Logout**\] **tag**, should refer to `localhost:4200/logout` 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New.png" /]

## Not Logged in Users

When the user is "**not logged in**" they should see the following navigation:  

- \[**Login**\] **tag**, should refer to the home page `localhost:4200/login`

- \[**Register**\] **tag**, should refer to `localhost:4200/register` 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-2.png" /]

[/slide]

[slide hideTitle]

# Home Page

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Not Logged in

This is the home page `localhost:4200/home`, a welcome user page.

The “welcome” component that we have already can be reused here. 

All "users" can access this page no matter of their authentication. 

The not logged in user view:  

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-3.png" /]

## Logged in

The logged in user view: 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-4.png" /]

[/slide]

[slide hideTitle]

# Register (Not Logged in)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the register page `localhost:4200/register`. 

This will be the **point** of your app that the fake **isLoggedIn property** can be changed to **true**.

For now, we do not have a database with user registration. 

So, make sure **each registered** user is stored in **userService** or some other appropriate place. 

So, each of them can log in successfully. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-5.png" /]

[/slide]

[slide hideTitle]

# Login (Not Logged in)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-6-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the login page `localhost:4200/login`. 

This will be another **point** of the app where the fake **isLoggedIn property** can be changed to **true**. 

For now, we do not have a database to hold user registrations. 

So, make sure each registered user is stored in **userService** or some other appropriate place. 

Each of them should log in successfully.  

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-6.png" /]

[/slide]

[slide hideTitle]

# Log Out Page

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-7-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The \[**Logout**\] **tag** should refer to `localhost:4200/logout` page:

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-14.png" /]

[/slide]

[slide hideTitle]

# Themes Page 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-8-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Not Logged in

This is the themes page `localhost:4200/themes`.

It is a page we already have. 

All "users" can access this page no matter of their authentication. 

By clicking the title of a theme, you will be redirected to the theme content view. It is described below.

There are several differences between a logged in and an anonymous user. 

The anonymous user should see the following:  

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-7.png" /]

## Logged in

This is the themes page `localhost:4200/themes` for logged in users.

**Note**: Because you are still not really logged in, you can hardcode this **userId** `5fa64b162183ce1728ff371d` in your service, to place the logic for subscribed users (**Red** and **Green** buttons). 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-8.png" /]

[/slide]

[slide hideTitle]

# Theme Comments 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-9-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Not Logged in

This is the theme comments page `localhost:4200/themes/:themeId`, where the user can see all the posts for the selected theme. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-9.png" /]


## Logged in

The logged in user can **add new comments** or **like** the other users' posts. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-10.png" /]

[/slide]

[slide hideTitle]

# Create New Theme (Logged in only)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-11-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the create new theme page `localhost:4200/themes` where each **user** (logged in) can create their own theme.  

- When the **"Post"** button is clicked, you can try to make a **"POST request"** to `localhost:4200/themes` with the given theme information. 

After a successful theme creation, **redirect** the current user to the **theme comments page** of their new theme. 

- When the **"Cancel"** button is clicked, **redirect** the user to the **home** page. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-11.png" /]

[/slide]

[slide hideTitle]

# Profile - Logged in

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-12-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the profile page `localhost:4200/profile`. 

This page will show information about the currently logged in user. 

For now, the data on this page will be **static**, except if we create more than the **fake isLoggedIn properties**. 

The "Edit" button will replace the information fields with input fields, but this will be done in the next workshop, as we learn more about handling forms. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-12.png" /]

[/slide]

[slide hideTitle]

# Invalid Routes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-13-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the page for all **invalid routes** `localhost:4200/??????`. 

Use it if an invalid path is given.

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-13.png" /]

[/slide]

[slide hideTitle]

# Protected Routes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-14-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Make sure all **users** (logged in) pages are **protected**. 

That means if the fake **"isLoggedIn"** **property** is set to **false** the pages **cannot be accessed**. 

Create authentication guards. 

[/slide]

