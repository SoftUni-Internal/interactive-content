# Origami Platform Workshop: Part 4

[slide hideTitle]
# Overview

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/01-workshop-part-4-explanation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Last time we have to implement **private**, **public**, and make the already created **forms work**. 

If you missed some of these parts, **go back and complete them before you continue.**

- Once we have **authentication** in our app. 

The next step is to **protect the routes**

   * if a guest user tries to access some of the **private parts**, he should be **redirected** to the publications or **404 page**

   * if some of them **already logged** **in user tries to access the public parts**, he should be **redirected** to the publications or **404 page**

- Refactor **all class components** to **functional components** that work with **hooks.**

## Public Parts

These parts can be accessed by any **guest user** (not logged in).

- **Publications**

Publications view **shows all created posts** from the database.

[image assetsSrc="ReactJS-Workshop-Hooks-1.png" /]

- **Register**

A register form should make a post request with the given data to the API and create a user.

[image assetsSrc="ReactJS-Workshop-Hooks-2.png" /]

- **Login**

The login form should also make a **post request** with the given data to the **API**, and if the **provided data** is valid, you should authorize the user (**can see the public parts**).

[image assetsSrc="ReactJS-Workshop-Hooks-3.png" /]

## Private Parts

Private parts should be accessed only by **logged in users** (**authorized with jwt token from the given API**). 

- **Publications**
Publications view **shows all created posts** from the database

[image assetsSrc="ReactJS-Workshop-Hooks-4.png" /]

- **Profile**

The profile page **shows** information about the currently logged-in user. 

This is his **username**, **total posts count** and the **top 3 of his recent posts.** 

Also, you should show a `[Logout]` **button**, which can be pressed and clear the **provided jwt** token from the API and redirect the user to the **publications page.**

[image assetsSrc="ReactJS-Workshop-Hooks-5.png" /]

- **Post**

In the Post view, the form with the text area should be able to make a **post request** with the given **post description.** 

If that happens, the user should be redirected to the **publication view.**

Also, this view shows the **top 3 recent posts** from the database.

[image assetsSrc="ReactJS-Workshop-Hooks-6.png" /]

## Database

Use the provided **REST API** build with **Express.js** and **MongoDB**

- **Server**

The server will listen on port **9999** by default and recognize the following **paths** with **methods:**

- Get request: `localhost:9999/api/origami/`

- Post request: `localhost:9999/api/origami/`

- Post request: `localhost:9999/api/user/register`

- Post request: `localhost:9999/api/user/login`

- Post request: `localhost:9999/api/user/logout`

[/slide]

[slide hideTitle]
# Refactor the Navigations Using Hooks

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/02-refactor-the-navigations-using-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor App Component Using Hooks

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/03-refactor-app-component-using-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor Login Component Using Hooks

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/04-refactor-login-component-using-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor Register Component Using Hooks

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/05-refactor-register-component-using-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor Origami Items Component Using Hooks

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/06-refactor-origami-items-component-using-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor Profile Component Using Hooks

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/07-refactor-profile-component-using-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Complete "Share Your Thoughts": Part 1

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/08-complete-share-your-thoughts-part-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Complete "Share Your Thoughts": Part 2

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/09-complete-share-your-thoughts-part-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactoring Route Protection

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/10.ReactJS-Workshop-React-Hooks/10-refactoring-route-protection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

