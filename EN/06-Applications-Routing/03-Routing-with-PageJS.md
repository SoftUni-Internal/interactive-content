# Routing with page.js

[slide hideTitle]

# Introduction to page.js

**Page.js** is a client-side router, which uses **string-to-regexp** conversion.

We need to install it from **npm** with the following command: `npm install page`.

We can pass multiple parameters to **page.js**.

Defining a route is done with **callbacks**.

Every callback is called with **context** and **next** parameters.

When we pass the **next** callback, it will instantiate the next registered callback from the path.

Here is an example:

```js
page('/', user.list);
page('/user/:id', user.load, user.show);
```

In this example, we set the URL and the callbacks: `user.load` and `user.show`.

After the `user.load` is ready, the `user.show` will be executed.

## Redirecting with PageJS

To redirect we can call `page.redirect()`.

This method receives only the **path** as a parameter.

It waits for the state of the current route and replaces it with a new one.

After the redirect, it will leave the **browser history object** clean.

Here is how `redirect()` looks:

```js
page('/default', function () {
   if (admin) {
      page.redirect('/admin');
   } else {
      page.redirect('/guest');
   }
});
```

In this example, we check if the user is an **admin** or **not**.

If it is admin, it will redirect to the `/admin` page.

If not, it will redirect to `/guest`.

[/slide]
