# Navigation for SPA

[slide hideTitle]

# How Routers Work

The **Router** loads the right content for a specific location, also called URL.

We should **update** the address bar on **every change** in the content of the page.

The **Router** allows the user to change the location **manually** or by clicking a **link**

It gives the **user** a better **experience**.

[/slide]

[slide hideTitle]

# Hash Based Routing

We use **hash-based** routing to deep link a section of a page.

This type of navigation simulates the loading of different content.

**Hash-based routing** does **not** reload the page.

To extract the hash from the URL, we use:

```js
window.location.href.split('#')[1] || '';
```

If we use only `window.location.href`, we will retrieve the whole URL.

To extract the hash, we need to use `split('#')`.

We can change the location like this:

```js
let changePath = function (path) {
   let currentPath = window.location.href;
   window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
};
```

We set the current URL in a variable called **currentPath**

After, we set `window.location.href` to the same URL but with a changed hash.

[/slide]

[slide hideTitle]

# Subscribing for Changes

We can subscribe for changes in the url.

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

After, we set a **timeout** to 200ms, at which the function to be called.

[/slide]

[slide hideTitle]

# Push Based Routing

The **push-based** routing is a more modern way to handle navigation.

It allows us to show real **server-side data**. 

That can help with **SEO** and **Facebook Open Graph**.

The **push-based** routing helps with **analytics** and fix **hashtag issues**.

This routing allows us to use the **hash-based** routing as intended.

[/slide]

[slide hideTitle]

# History API

The History API provides access to the browser **history** object.

With history object we can use methods like `back()`, `forward()` and `go()`.

This method allows us to have the native navigation that users want.

In **HTML5** were introduced `history.pushState()` and `history.replaceState()`.

These methods can modify and add to the **history object entries**.

They work in combination with the **popstate** event.

[/slide]

[slide hideTitle]

# The PushState Method

We will have a look at the `pushState()` method.

The **PushState** method adds a new entry to the **history object** of the browser.

This method takes three parameters.

- The **state** is associated with the new entry.

- The **Title** is ignored by most of the browser nowadays.

- The **URL** is the new history entry, and it must be from the **same origin** as the current URL.

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

Let us examine `replaceState()`.

**ReplaceState** modifies the current entry.

It takes **State**, **Title**, and **URL** as parameters.

The **Title** parameter will be ignored, by most of the browsers.

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

The **popstate event** listens for changes in the state.

The event will trigger when the history object changes.

**Popstate event** will update the current entry to the last that the user has visited.

if we use `pushState()` or `replaceState()`, the **event listener** will store a copy of the history object.

We can read the current history object with `history.state.property` without waiting for the **popstate** event.

[/slide]
