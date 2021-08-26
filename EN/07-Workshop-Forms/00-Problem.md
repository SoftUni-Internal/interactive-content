# Origami Platform Workshop: Part 3

[slide hideTitle]
# Overview

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/01-workshop-part-3-explanation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Now it is time to implement **private** and public **parts** for our app. 

And to make the already existing **forms** to **work**.

# Public Parts

These parts can be accessed by any **guest user** (not logged in).

- **Publications**

Publications view **shows all created posts** from the database.

[image assetsSrc="ReactJS-Workshop-Forms-1.png" /]

- **Register**

A **register form** should make a **post request** with the given data to the **API** and create a user.

[image assetsSrc="ReactJS-Workshop-Forms-2.png" /]

- **Login**

The login form should also make a **post request** with the given data to the **API**, and if the **provided data** is **valid**, you should authorize the user (**can see the public parts**).

[image assetsSrc="ReactJS-Workshop-Forms-3.png" /]

## Private Parts

Private parts should be accessed only by **logged in users** (**authorized with jwt token from the given API**).

- **Publications**

Publications view **shows all created posts** from the database.

[image assetsSrc="ReactJS-Workshop-Forms-4.png" /]

- **Profile**

The profile page shows information about the currently logged-in user. 

This is his **username**, **total posts count** and **the top 3 of his recent posts.**

Also, you should show a `[Logout]` **button**, which can be pressed and clear the provided **jwt** token from the API and redirect the user to the **publications page.**

[image assetsSrc="ReactJS-Workshop-Forms-5.png" /]

- **Post**
  
In Post view, the form with the text area should be able to make a **post request** with the given **post description.** 

If that happens, the user should be redirected to the **publication view.**

Also, this view shows the **top 3 recent posts** from the database.

[image assetsSrc="ReactJS-Workshop-Forms-6.png" /]

## Database

Use the provided **REST API** build with **Express.js** and **MongoDB**

- **Server**

The server will listen on port **9999** by default and recognize the following paths with methods:

- Get request: `localhost:9999/api/origami/`

- Post request: `localhost:9999/api/origami/`

- Post request: `localhost:9999/api/user/register`

- Post request: `localhost:9999/api/user/login`

- Post request: `localhost:9999/api/user/logout`

[/slide]

[slide hideTitle]
# Expose API Headers

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/02-expose-rest-api-headers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Complete User Registration

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/03-complete-user-registration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Complete User Login

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/04-complete-user-login-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor Fetch Logic

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/05-refactor-fetch-logic-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Refactor App Container Element

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/06-refactor-app-container-component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Creating the User Context

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/07-creating-the-user-context-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Setting User Context After Login

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/08-seting-user-context-after-login-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Showing the Correct Navigation Links

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/09-showing-the-correct-navigation-links-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Implement Logging Out

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/10-implement-logging-out-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Creating Protected Routes

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/08.ReactJS-Workshop-Forms/11-creating-protected-routes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]