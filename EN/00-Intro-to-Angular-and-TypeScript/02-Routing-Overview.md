# Routing Overview

[slide hideTitle]

# What is Routing?

**Routing** is the **client-side** navigation.

The **client-side routing** is the main element of the **Single Page Applications**.

This navigation allows us to downloads the entire application on the first load.

When the URL changes, it only updates the modified component without **reloading**.

Here is an example: 

[image assetsSrc="Angular-Introduction-2.png" /]

## Server-side

The **server-side** navigation reloads the application on every **change** in the URL.

When a new page is **requested**, we **exchange** data from the server.

After the server returns a response, we will display a new page in the browser.

We can define an application as a **Multi Page Application** when the **reload** icon gets triggered.

Here is an example:

[image assetsSrc="Angular-Introduction-1.png" /]

[/slide]

[slide hideTitle]

# Single Page Application

The **router navigation** will load the correct resource when the **location is changed**.

In reverse, a difference in the content represents itself in the **URL**.

With this type of routing, we get many **benefits**:

- The resources are loaded **only once**

- The state is maintainable across all pages

- We can use **browser history**

- quicker **UX**

- Smooth transitions between pages 

[/slide]
