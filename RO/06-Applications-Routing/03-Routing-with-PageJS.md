# Routing with page.js

[slide]

# Introduction to page.js

`Page.js` is a client-side router, which uses **string\-to\-regexp** conversion.

With pageJs, we can pass multiple parameters.

To use pageJs, we need to install it from the **package manager**.

We will use **npm**, so to install it, you need to write the following command: `npm install page`.

Define a route mapping is done with **callbacks**.

Every callback is called with two parameters.

They are:

- **context**

- **next**

When we call the next callback, it will invoke the next registered one with the given path.

Here is an example:

```js
page('/', user.list);
page('/user/:id', user.load, user.show);
```

In this example, we are setting the URL and the callback.

Which are `user.load` and `user.show`.

After the `user.load` is done it will execute `user.show`.

Now let us see how we can redirect with page.js.

For redirecting we can call `page.redirect()`.

This method receives only one parameter, which is the **path**.

It waits to see the state of the current route, and after that, it replaces it with a new one.

After the redirect, it will leave the browser history object clean.

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

In this example, in the callback, we check if the user is an admin or not.

If the user is admin, it will redirect to `/admin`. But if not, it will redirect to `/guest`.

[/slide]
