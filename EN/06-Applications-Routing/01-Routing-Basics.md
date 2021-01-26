# Routing Basics

[slide hideTitle]
# Multi-Page Applications

The multi-page applications reload the entire page when a user interacts with the app.

Also, the data is exchanged when a new page is **requested**.

After the server returns a response, the new page is displayed in the browser.

We can define that an application is a multi\-page application when the **reload** icon is triggered.

[/slide]

[slide hideTitle]

# Multi-Page Pros and Cons

Let us have a look at some of the **pros** and **cons** of the multi-page application.

We will start with the pros:

- They perform very well in **search engines**.

- They provide a **visual map** of the application when shared through a link in social media.

Now let us have a look at their **cons**:

- They are **complex to develop**.

- The Front-End and the Back-End are coupled.

[/slide]

[slide hideTitle]

# Single Page Application

Single-Page Application or **SPA** is the evolution of the multi-page application.

SPAs **dynamically update** the content of the page, instead of **reloading** the whole page.

They use **HTML5**, **CSS**, and **AJAX** to create a fluid and responsive user interface, which is operated by the user.

SPA will re\-render the content in response to the user actions.

It can use state from **internal** or **external** source.

The internal state is **limited** to only one entry.

And there are the location\-based SPAs, in which the location is always updating.

That means that we can share a link and be sure that anyone can that opens it will see what we see.

Also, location\-based ones need a special object called **Router**.

[/slide]

[slide hideTitle]

# SPA Pros and Cons

So what are the Single Page Applications pros and cons?

First, let us have a look at the pros:

- They are a lot faster.

- They load all scripts **only once**.

- We can use browser **history** with them.

- They have better **UX**

Now, let us see what are the cons:

- They are not good at **SEO**.

   - The solution is **server-side rendering**.

- They provide **single sharing link**.

- They can be less secure if the data is stored on the front\-end.

[/slide]

[slide hideTitle]
# Multi and Single Page Application Lifecycle

We will start with **Multi-Page Application's** lifecycle.

[image assetsSrc="JS-Applications-Routing.png" /]

In this image, we see that the user sends a request and the server responses with HTML.

But on every response, the page reloads.

Now, let us have a look at the **Single Page Application** lifecycle.

[image assetsSrc="JS-Applications-Routing-1.png" /]

Here we see that on the initial request, the server responds with HTML.

But every other request is made with AJAX, and the response is a JSON.

The page updates itself without reloading, which is a lot faster.

[/slide]

[slide hideTitle]

# Navigation Types

The types of navigation are the standard and the navigation using **Routing**.

In the standard navigation, we use hyperlinks.

And we are using it in **Multi-Page Applications** because the standard navigation reloads the page.

[image assetsSrc="JS-Applications-Routing-2.png" /]

We use the **Routing** navigation in SPAs because it simulates the standard one without the reloading part.

[image assetsSrc="JS-Applications-Routing-3.png" /]

This navigation allows us after everything is rendered, to update the content and the URL.

With this type of navigation, the app will not reload unless we press `F5`.

That is why on user's actions, the **reload icon** does not get triggered.

[/slide]

[slide hideTitle]

# Query Parameters

The **query parameters** are a set of parameters attached to the end of the URL.

They give us the ability to personalize the request to the API.

Some common use cases are:

- When we want to filter.

- When we want to sort.

- When we want to display the current page number in the pagination collection.

Let us have a look at this example:

[image assetsSrc="JS-Applications-Routing-4.png" /]

In this example, we have an URL.

The first part is the **protocol** that is used.

After we have the **hostname** and the **pathname**.

After they are the query parameters, in this case, they are the key, its value, and the tag that indicates that the item is trending.

[/slide]
