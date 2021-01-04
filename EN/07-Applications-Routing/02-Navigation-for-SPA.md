# Navigation for SPA

[slide]
# How Routers Work

The main job of a **router** is to load the right content for a specific location, also called URL.

We do this so that the user can change the location **manually**.

Or to change the location when a user **clicks on a link**.

That means every change in the content should be indicated in the address bar.

When we are using the **router**, we can give the **user** a better **experience**.

[/slide]

[slide]

# Hash Based Routing

We use **hash based** routing when we want to deep link a section of an application.

This type of navigation simulates the loading of different content.

Also, **hash based routing** does **not** reload the page.

To extract hash from the url we use:

```js
window.location.href.split('#')[1] || '';
```

`Window.location.href` will return us the whole URL.

So that is why, after we got the URL, we are using `split()`.

After we split with `#` the URL, we got the hash.

If we want to change the path, it will look like this:

```js
let changePath = function (path) {
   let currentPath = window.location.href;
   window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
};
```

In this example, first, we got the **URL**.

And after that, we set `window.location.href` to the same URL but with a changed hash.

We pass the hash to the function's parameter **path**.

And now let us see how to subscribe for changes:

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

In this example, we have two functions.

The first one returns the **hash**, and the other one **listens** for a change.

The function that we are interested in is the second one.

In the second function, first, we get the current hash and check if it is different.

If not, we assign it to the **URL** variable.

After that, we set a **timeout** to 200ms, at which the function to be called.

[/slide]

[slide]

# Push Based Routing

The push based routing is the more modern way to handle navigation.

This way allows us to show real **server-side data** this can help with SEO and Facebook Open Graph.

The push based routing helps with **analytics** and also fix **hash tag issues**.

In this way, we can use the hash tag for what it is made, for the deep linking of sections of a long page.

[/slide]

[slide]

# History API

The History API provides access to the browser **history** object.

With history object we can use methods like `back()`, `forward()`, `go()` and etc.

This method allows us to have the native navigation that users want.

In **HTML5** are introduced `history.pushState()` and `history.replaceState()`.

These methods allow us to add and modify the **history object entries**.

They work in combination with the **popstate** event.

[/slide]

[slide]

# The PushState Method

Firstly, we will have a look at the `pushState()` method.

The **PushState** method adds a new entry to the browser's history object.

This method takes three parameters.

- The first one is the **state**, which is associated with the new entry.

- The second parameter is **Title** this one is ignored by most of the browser nowadays.

- The third one is the **URL**, which is the new history entry, and it must be from the **same origin** as the current URL.

```js
let stateObj = { facNum: '56789123' };
history.pushState(stateObj, '', 'student.html');
```

In this example we have an object, which is the first parameter.

And After we call the `history.pushState()` method and pass the parameters.

[/slide]

[slide]

# The ReplaceState Method

Let's examine `replaceState()`.

**ReplaceState**, unlike **pushState**, does not create a new entry but modifies the current one.

It takes three parameters.

Which are:

- State

- Title

- URL

This method is useful when we want to update the **state object** or the **URL**, not to create a new one.

Here is an example of `replaceState()`:

```js
let stateObj = { facNum: '56789123' };
history.replaceState(stateObj, '', 'newStudent.html');
```

In this example we have an object, which is the first parameter.

And After we call the `history.replaceState()` method and pass the parameters, it will update the current entry.

[/slide]

[slide]

# The Popstate Event

The **popstate event** listens for changes in the state.

When the active history object changes, this event is triggered.

It updates the current entry to the last that the user has visited.

This event listener contains a copy of the history entry\'s object, if we use `pushState()` or `replaceState()`.

We can read the state of the current history object, without waiting for the **popstate** event which is using `history.state.property`.
[/slide]
