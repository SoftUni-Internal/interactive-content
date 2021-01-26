# Routing Basics

[slide hideTitle]
# Multi Page Applications

**Multi Page Applications** reload the entire page when a user interacts with the app.

We exchange data when a new page is **requested**.

After the server returns a response, a new page is displayed in the browser.

We can define an application as a **Multi Page Application** when the **reload** icon gets triggered.

[/slide]

[slide hideTitle]

# Multi Page Pros and Cons

**Multi Page Application** have **pros** and **cons** .

Let us check some of the **pros**:

- They perform very well in **search engines**.

- They provide a **visual map** of the application when shared through a link in social media.

Now have a look at the **cons**:

- They are **complex to develop**.

- The Front-End and the Back-End are **coupled**.

[/slide]

[slide hideTitle]

# Single Page Application

**SPA** is an abbreviation for **Single-Page Application**.

They are an evolution of the **Multi Page Application**.

**SPA**s **dynamically updates** the page content, instead of **refreshing** it.

They **re-render** the content in response to the user's actions.

**SPA**s use **HTML5**, **CSS**, and **AJAX** to create a fluid and responsive user interface operated by the user.

To create that experience, SPAs use state from **internal** or **external** sources.

The internal state is **limited** to only one entry.

We also have location-based **SPA**s, in which the location is always updating.

That means that we can share a link and be sure that anyone that opens it will see the wanted page.

Location-based SPAs need a special object called **Router**.

[/slide]

[slide hideTitle]

# SPA Pros and Cons

**Single Page Applications** also have **pros** and **cons**.

Here are the **pros**:

- They are a lot faster.

- They load all of the needed scripts at **once**.

- With SPAs, we can use the browser **history**.

- They provide better **UX**

Let us see the cons:

- They are not good at **SEO**.

   - The solution is the **server-side rendering**.

- They provide a **single sharing link**.

- If we store data on the front-end, they can be less secure

[/slide]

[slide hideTitle]

# Multi and Single Page Application Lifecycle

Both **Multi Page Application's** and **Single Page Application** have their lifecycle.

On this image is the **Multi Page Application's** lifecycle.

[image assetsSrc="JS-Applications-Routing.png" /]

We see that when a user **sends a request**, the server **responds with HTML**.

After every response, the page **reloads**.

Let us have a look at the **Single Page Application** lifecycle.

[image assetsSrc="JS-Applications-Routing-1.png" /]

In this image, we see that on the **initial request**, the server responds with HTML.

But on every other request, the response is a **JSON**. 

That is because we made the requests with **AJAX**.

The page updates itself without refreshing, which gives the feeling for a lot faster application.

[/slide]

[slide hideTitle]

# Navigation Types

There are two types of navigation: a **standard** one and navigation using **Routing**.

The standard navigation is used in the **Multi Page Applications**. 

It uses **hyperlinks** to navigate through the application.

Because it uses **hyperlinks**, the standard navigation reloads the entire page.

[image assetsSrc="JS-Applications-Routing-2.png" /]

The other type is the **Routing** navigation. 

We use it in **SPA**s because it simulates the standard one without refreshing the page.

[image assetsSrc="JS-Applications-Routing-3.png" /]

The **Routing** navigation allows us to update the URL and the content after everything is rendered.

The **reload icon** will not get triggered unless the user refreshes the page by clicking `F5`.

[/slide]

[slide hideTitle]

# Query Parameters

The **query parameters** are a set of parameters attached to the end of a URL.

They give us the ability to **personalize** the sent request to the API.

Here are some use cases to use query parameters:

- If we want to filter.

- If we want to sort.

- If we want to display the current page number in a pagination collection.

Have a look at this example:

[image assetsSrc="JS-Applications-Routing-4.png" /]

In this example, we have an URL.

The **protocol** is the first part of the URL.

After the protocol, we have the **hostname** and the **pathname**.

In this case, the query parameters are in the end. 

They are the **key**, its **value**, and the **tag**, which indicates that the item is trending.

[/slide]
