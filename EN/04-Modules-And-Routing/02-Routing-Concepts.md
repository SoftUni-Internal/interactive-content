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

First, the user clicks on an **anchor** element and the browser detects the event.

Then, the client creates a **GET** request to route found in the `href` tag.

On the **server** side, the request is processed and a response (in the form of HTML, JSON, images, etc.) is returned.

Finally, the browser loads a completely **new webpage**, discarding the previous one.

## Client-Side

[image assetsSrc="Angular-Modules-And-Routing-1.png" /]

Once again, the browser detects a click event, but a client-side routing library handles it.

It detects that the URL is in the form of a path (e.g. `'/users/jane.michaels`) and does not perform a GET request.

The library then modifies the URL using the History API, and changes the state of the given component.

A front-end framework (such as Angular) processes state changes and renders the required components.

If new information is reqquired, it fetches it in small chunks.

Instead of downloading a whole webpage, Angular will download only the new assets, and will generate the client-ready HTML locally.

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
