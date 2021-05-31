# Routing Concepts

[slide hideTitle]

# What is Routing?

Angular-Modules-and-routing-8-9-What-is-Routing

**Routing** is navigation on the **client-side**, which is the main element of **Single Page Applications**, also called **SPA**s.

This type of navigation downloads the entire app on the first load, and if the URL changes, it only updates the page without **reloading**.

There is also **server-side** navigation, which works differently than **client-side** navigation.

**Server-side** navigation reloads on every **change** in the URL.

In this example you can notice the difference between the two types of navigation:

## Server-Side



[image assetsSrc="Angular-Modules-And-Routing.png" /]

## Client-Side

[image assetsSrc="Angular-Modules-And-Routing-1.png" /]

[/slide]

[slide hideTitle]

# Single Page Application

Angular-Modules-and-routing-10-Single-page-applications

When the **location is changed**, the **router** will load the corresponding resource for that location.

Also, on the opposite side, a difference in the content will be represented in the URL.

This type of routing has many benefits, including:

- The resources for the app are loaded **only once**

- The state is maintainable across all pages

- We can use **browser history**

- Тhe user interface has increased response times

[/slide]
