# Softuni Forum Workshop: Part 4

[slide hideTitle]

# Task Requirements

In the previous lesson, you got familiar with **JWT** and **Interceptors**.

Try to implement these concepts and intercept the **requests** and **responses** between the front-end and the back-end.

- **Auth Interceptor**

After a user has **registered** or trying to **log in**, the API should return a **cookie** which holds a **JSON Web Token** (**JWT**).

Use it to authenticate the current user.

[/slide]

[slide hideTitle]

# Error Interceptor

Good error handling is very important for every website.

Use interceptors to handle potential errors in your project. 

You can create a **404 error page** or a **paragraph** `<p>` with the provided styling.

The following image illustrates where in your HTML code you should place the error paragraph:

```html
<nav>
    <ul>
        <li>
            <a routerLink="home">Home</a>
        </li>
        <li>
            <a routerLink="themes">Themes</a>
        </li>
        <li>
            <a routerLink="add-theme">New Theme</a>
        </li>
    </ul>
    <p class="notification error-message">{{"Error message"}}</p>
</nav>
```

```css
.notification{
  position: fixed;
  z-index: 10;
  right: 8%;
  top: 8%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: rgb(255, 255, 255);
  font-style: italic;
  text-decoration: underline;
  box-shadow: 0 5px 10px rgb(204, 204, 204);
  background-color: rgba(238, 74, 74, 0.699);
}
.error-message {
    background-color: rgba(238, 74, 74, 0.699);
}
.success-message {
    background-color: rgba(99, 230, 81, 0.699);
}
```

## Lazy Loading

Managing resources and improving loading speed is what separates a good website from a great website.

One way of doing that is by implementing **lazy loading** in your project.

Lazy loading is the process of delivering resources to the user only when they are requested.

It improves the overall user experience by not slowing down your website to load unnecessary resources.

Try to implement it on as many modules as you can.

[/slide]

[slide hideTitle]

# Pipes

Try to write the following pipes for your project:

- Write a pipe for slicing long titles of the themes (25 characters max). 

You can use the "**SlicePipe**" provided from Angular or write your own.

[image assetsSrc="Angular-Pipes-Interceptors-And-Subjects-Workshop.png" /]

- Write a pipe that converts the date as shown in the next image:

[image assetsSrc="Angular-Pipes-Interceptors-And-Subjects-Workshop(1).png" /]

- Write another pipe that calculates how much time has passed after creating a post:

[image assetsSrc="Angular-Pipes-Interceptors-And-Subjects-Workshop(2).png" /]

[/slide]




