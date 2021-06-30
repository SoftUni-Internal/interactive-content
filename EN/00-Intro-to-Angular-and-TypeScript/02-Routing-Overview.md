# Routing Overview

[slide hideTitle]

# What is Routing?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-8-9-Routing-Overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Routing** is is a part of **web site navigation**, it is responsible for **switching** between different views (pages).

Routing can be **performed** on the **server-side** as well as on the **client-side** (in the browser).

## Client-Side Routing

**Client-side routing** is a main element of a **Single Page Applications** (**SPA**), which is the focus of this course.

When a "**GET**" request is sent to an SPA, the **server response** is normally a single "index" page, accompanied by **JavaScript** (**Angular**) code. 

This code will run in the **browser** and will **dictate** which parts of our SPA will be **rendered**, depending on the **users**' actions. 

Example: 

[image assetsSrc="Angular-Introduction-2.gif" /]

Here **JavaScript** (**Angular**) **controls** which page will be displayed, based on the **URL locations**.

## Server-Side

When a "**GET**" request is sent to a **Multi-Page Application**, the server responds with a web page that was **rendered** on the **server** and then **visualized** in the browser. 

When a user tries to access **another page**, the **server-side** navigation **reloads** the entire application and then **returns a response**, with the new page that was **rendered** on the server and displayed in the browser.

A **Multi-Page Application** can be recognized by the fact that it triggers the **reload** icon.

Example:

[image assetsSrc="Angular-Introduction-1.png" /]

Here are **some pages**, which are waiting to be **rendered** on the server once a user **accesses** them, regardless of where you are **located** in the application.

[/slide]

[slide hideTitle]

# Single Page Application

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-10-Single-Page-Applications-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Router navigation** will load the corresponding resource when the **location is changed**.

This sort of routing offers some **benefits**:

- Resources are loaded **only once**, which increases application performance

- The state is maintainable across all pages

- We can use **browser history**

- The **UX** becomes faster more responsive

- Smooth transitions between pages 

[/slide]
