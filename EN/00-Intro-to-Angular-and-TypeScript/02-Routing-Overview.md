# Routing Overview

[slide hideTitle]

# What is Routing?

Intro-to-Angular-and-Typescript-8-9-Routing-Overview

**Routing** is the **client-side** navigation and it is responsible for **switching** between different views (pages).

The routing can be **performed** on the **server-side** as well as on the **client-side** (in the browser).

## Client-Side Routing

The **client-side routing** is the main element of the **Single Page Applications** (**SPA**), which is the focus of this course.

When a "**GET**" request is sent to a SPA, the **server response** is a single most often "index" page, all together with **JavaScript** (**Angular**) code. 

This code will run in the **browser** and will take **control** of which parts of our SPA will be **rendered**, depending on the **users**' actions. 

Here is an example: 

[image assetsSrc="Angular-Introduction-2.png" /]

Here **JavaScript** (**Angular**) router takes **control** of which page will be displayed, based on the **URL locations**.

## Server-Side

When a "**GET**" request is sent to a **Multi-Page Application**, the server responds with a web page that was **rendered** on the **server** and **visualizes** it to the browser. 

When a user tries to access **another page**, the **server-side** navigation **reloads** the entire application and again the **server returns a response**, with a new page that was **rendered** on the server and displayed in the browser.

You can recognize an application as a **Multi-Page Application** when the **reload** icon gets triggered.

Here is an example:

[image assetsSrc="Angular-Introduction-1.png" /]

Here we have **many pages** (**many views**), which are waiting to be **rendered** on the server once a user **accesses** them, regardless of where you are **located** in the application.

[/slide]

[slide hideTitle]

# Single Page Application

Intro-to-Angular-and-Typescript-10-Single-Page-Applications

The **router navigation** will load the correct resource when the **location is changed**.

In reverse, a difference in the content represents itself in the **URL**.

With this type of routing, we get many **benefits**:

- The resources are loaded **only once**, which increase the application's performance

- The state is maintainable across all pages

- We can use **browser history**

- Quicker **UX**

- Smooth transitions between pages 

[/slide]
