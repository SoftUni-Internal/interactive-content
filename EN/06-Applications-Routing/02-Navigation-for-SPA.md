# Routing Concepts 

[slide hideTitle]

# How Routers Work

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-14-15-16-navigation-for-SPA-how-routers-wrok-hash-based-routing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Router** loads the right content for a specific location, also called URL.

We should **update** the address bar on **every change** in the content of the page.

The **Router** allows the user to change the location **manually** or by clicking a **link**

It gives the **user** a better **experience**.

[/slide]

[slide hideTitle]

# Hash-Based Routing 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-17-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use **hash-based** routing to "deep link" a section of a page.

This type of navigation simulates the loading of different content.

**Hash-based routing** does **not** reload the page.

To extract the hash from the URL, we use:

```js
window.location.href.split('#')[1] || '';
```

If we use only **window.location.href**, we will **retrieve the whole URL**.

To extract the hash, we can use `split('#')`.

An example for changing the location: 

```js
let changePath = function (path) {
   let currentPath = window.location.href;
   window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
};
```

We set the current URL in a variable called "**currentPath**".

After, we set the **window.location.href** to the same URL but with a changed hash.

[/slide]

[slide hideTitle]

# Subscribing to Changes 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-18-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can subscribe for changes in the URL.

The subscribing looks like this:

```js
let url = undefined;

let getCurrent = function () {
   return window.location.hash;
};

let listen = function () {
   let current = getCurrent();
   if (current !== url) {
      url = current;
   }
   setTimeout(listen, 200);
};

listen();
```

We have two functions, `getCurrent()` and `listen()`, `getCurrent()` returns the **hash**.

The function that we are interested in is the `listen()` function.

In this function, we check if the current hash is different.

If not, we assign the hash to the **URL** variable.

After that, we set a **timeout** to 200ms, at which the function to be called.

[/slide]

[slide hideTitle]

# Push-Based Routing 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-19-Push-based-routing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **push-based** routing is a more modern way to handle navigation.

It allows us to show real **server-side data**. 

That can help with **SEO** and **Facebook Open Graph**.

The **push-based** routing helps with **analytics** and fix **hashtag issues**.

This type of routing allows us to use the **hash-based** routing as intended.

[/slide]

[slide hideTitle]

# History API 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-20-History-API-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The History API provides access to the browser "**history**" object.

We can use methods like `back()`, `forward()` and `go()` using the the "history" object. 

This method allows us to have the native navigation that users want.

In **HTML5** were introduced `history.pushState()` and `history.replaceState()`.

These methods can modify and add to the **history object entries**.

They work in combination with the **popstate** event.

If we use the `pushState()` method or the `replaceState()` method, the event listener will store a copy of the history object. 

[/slide]

[slide hideTitle]

# The PushState Method

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-21-The-Pushstate-Method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **PushState** method adds a new entry to the **history object** of the browser.

This method takes three parameters.

- The **state** is associated with the new entry

- The **Title** is ignored by most of the browser nowadays

- The **URL** is the new history entry, and it must be from the **same origin** as the current URL

Here is an example:

```js
let productId = { productId: '56789123' };
history.pushState(productId, '', 'product.html');
```

We call the `history.pushState()` method and pass the parameters.

The browsers ignores the second parameter, and that is why it is an empty string.

[/slide]

[slide hideTitle]

# The ReplaceState Method

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-22-The-ReplaceState-Method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


The **ReplaceState** moethod modifies the current entry.

It takes a **State**, a **Title**, and a **URL** as parameters.

The **Title** parameter will be ignored by most of the browsers.

**ReplaceState** is useful if we want to update the **state object** or the **URL**.

Here is an example of `replaceState()`:

```js
let student = { studentId: '56789123' };
history.replaceState(student, '', 'newStudent.html');
```

After we instantiate the `replaceState()` method, it will modify the current history entry.

[/slide]

[slide hideTitle]

# The Popstate Event

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-23-The-Popstate-event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **popstate event** listens for changes in the state.

The event will trigger when the history object changes.

**Popstate event** will update the current entry to the last that the user has visited.


We can read the current history object with **history.state.property** without waiting for the **popstate** event.

[/slide]
