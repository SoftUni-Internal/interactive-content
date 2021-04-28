# Routing with page.js

[slide hideTitle]

# Introduction to page.js

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-24-25-26-27-Routing-with-page-js-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Page.js** is a client-side router, which uses **string-to-regexp** conversion.

To use it, we need to install the package.

We need to install it from **npm** with the following command: `npm install page`.

We can pass multiple parameters to **page.js**.

Defining a route is done by using **callbacks**.

Every callback is called with a **context** and a **next** as parameters.

When we pass the **next** callback, it will instantiate the next registered callback from the path.

Here is an example:

```js
page('/', user.list);
page('/user/:id', user.load, user.show);
```

In this example, we set the URLs and the callbacks: **user.list**, **user.load** and **user.show**.

The **user.list** will be executed when the user is at the **Home page**.

It will list all of the users.

When the user is on the `/user/:id` path, the **user.load** will be executed.

After **user.load** is ready, the **user.show** will be executed.

[/slide]

[slide hideTitle]
# Redirecting with page.js

We can call `page.redirect()` to redirect.

This method receives only the **path** as a parameter.

It waits for the state of the current route and replaces it with a new one.

After the redirect, it will leave the **browser history object** clean.

Here is how `redirect()` looks:

```js
page('/index', function() {
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
