# Softuni Forum Workshop: Part 4

[slide hideTitle]

# Task Requirements

Last time we saw what JWT (JSON WEB TOKEN) is the INTERCEPTORS concept. 

Try to intercept the requests and responses between the front-end part and the back-end.

[/slide]

[slide hideTitle]

# Auth Interceptor

When a user is registered or is trying to log in, the API should return a cookie, which holds JSON WEB TOKEN (JWT). 

Use it to authenticate the current user.

[/slide]

[slide hideTitle]

# Error Interceptor

In some cases, errors will occur. This is inevitable. 

Use the interceptor, and try to prevent bad user experience by handling these error cases. 

You can use, **404** page to show **error** info or put a **paragraph** `<p>` element in the **header** as shown in the example below with the provided **styling**:

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

[/slide]

[slide hideTitle]

# Lazy Loading

Lazy Loading helps us download the web pages in chunks. 

Try to lazy load all the modules you can.

[/slide]

[slide hideTitle]

# Pipes

Try to write pipes as follows:

- Write a "pipe" for slicing long titles of the themes (25 characters max). 

You can use the "**SlicePipe**" provided from Angular or write your own.

[image assetsSrc="Angular-Pipes-Interceptors-And-Subjects-Workshop.png" /]

- Write a "pipe" to convert the date, as shown in the pictures:

[image assetsSrc="Angular-Pipes-Interceptors-And-Subjects-Workshop(1).png" /]

- Write another "pipe", that calculates the time since the post has been created:

[image assetsSrc="Angular-Pipes-Interceptors-And-Subjects-Workshop(2).png" /]

[/slide]




