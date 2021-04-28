# Routing Basics 

[slide hideTitle]
# Multi Page Applications

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-3-4-Multi-page-applications-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Multi Page Applications** reload the entire page when a user interacts with the app.

We exchange data when a new page is **requested**.

After the server returns a response, a new page is displayed in the browser.

We can define an application as a **Multi Page** when the **reloaded**.

[/slide]

[slide hideTitle]

# Multi Page Pros and Cons

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-5-Multi-page-applications-Pros-and-Cons-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


|**Pros**|**Cons**|
|---|---|
|They perform very well in **search engines**|They are **complex to develop**|
|They provide a **visual map** of the application when shared through a link in social media|The Front-End and the Back-End are **coupled**|


[/slide]

[slide hideTitle]

# Single Page Application

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-6-7-Single-page-applications-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**SPA** is an abbreviation for **Single-Page Application**.

The **Single-Page Application**:

- Is an evolution of the **Multi Page Application**

- **Dynamically updates** the page content, instead of **refreshing** it

- **Re-render** the content in response to the user's actions

**SPA**s use **HTML5**, **CSS**, and **AJAX** to create a fluid and responsive user interface operated by the user.

To create that experience, SPAs use state from **internal** or **external** sources.

The internal state is **limited** to only one entry.

We also have location-based **SPAs**, in which the location is always updating.

That means that we can share a link and be sure that anyone that opens it will see the wanted page.

Location-based **SPAs** need a special object called **Router**.

[/slide]

[slide hideTitle]

# SPA Pros and Cons

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-8-Single-page-applications-Pros-and-Cons-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


|**Pros**|**Cons**|
|---|---|
|They are a lot faster.|They are not good at **Search engine optimization (SEO)**: the solution is the **server-side rendering** |
|They load all of the needed scripts at **once**.|They provide a **single sharing link**|
|With SPAs, we can use the browser **history**.|Less secure if stored in the Front-End |
|They provide better **UX**.||

[/slide]

[slide hideTitle]

# Application Lifecycle

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-9-Multi-page-application-lifecycle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Multi **Page Applications** and **Single Page Applications** have their lifecycles.

This is the **Multi Page Application's lifecycle**: 

[image assetsSrc="JS-Applications-Routing.png" /]

We see that when a user **sends a request**, the server **responds with an HTML formatted response**. 

After every response, the page **reloads**.

Let us have a look at the **Single Page Application's** lifecycle.

[image assetsSrc="JS-Applications-Routing-1.png" /]

In this image, we see that on the **initial request**, the server responds with **an HTML** file. 

But on every other request, the response is a **JSON**. 

That is because we made the requests with **AJAX**.

The page updates itself without refreshing, which gives the feeling for a lot faster application.

[/slide]

[slide hideTitle]

# Navigation Types

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-9-10-11-12-13-Multi-SPA-lifecycle-navigation-types-query-parameters-location-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are two types of navigations: a **standard** one and a navigation using **Routing**.

The standard navigation is used in the **Multi Page Applications**. 

It uses **hyperlinks** to navigate through the application.

Because it uses **hyperlinks**, the standard navigation reloads the entire page.

[image assetsSrc="JS-Applications-Routing-2.png" /]

The other type is the **Routing** navigation. 

We use it in **SPA** because it simulates the standard navigation without refreshing the page.

[image assetsSrc="JS-Applications-Routing-3.png" /]

The **Routing** navigation allows us to update the URL and its the content after everything is rendered.

It will **not trigger a reload** unless the user refreshes the page by clicking `F5`.

## Query Parameters

The **query parameters** are a set of parameters attached to the end of an URL.

They give us the ability to **personalize** the sent request to the API.

Here are some use cases to use query parameters:

- If we want to filter

- If we want to sort

- If we want to display the current page number in a pagination collection

Have a look at this example:

[image assetsSrc="JS-Applications-Routing-4.png" /]

In this example, we have an URL.

The **protocol** is the first part of the URL.

After the protocol, we have the **hostname** and the **pathname**.

In this case, the query parameters are in the end. 

They are the **key**, its **value**, and the **tag**, which indicates that the item is trending.

[/slide]
