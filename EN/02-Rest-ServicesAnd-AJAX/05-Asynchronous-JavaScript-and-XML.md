# Asynchronous JavaScript and XML

[slide hideTitle]

# What is AJAX

[vimeo-video]
[stream language="EN" videoId="497191274/a7841157ed" default /]
[stream language="RO" videoId="497191274/a7841157ed"  /]
[/video-vimeo]

**AJAX** abbreviation stands for **Asynchronous** **JavaScript** and **XML**. 

Nowadays, instead of **XML**, we use **JSON**.

This technique allows us to **dynamically** **load** and **render** content or data.

There are two types of **AJAX**:

-  **Partial page rendering** allows us to render an HTML fragment in a `<div>` while the data loads.

-  **JSON service**, has a JSON object, which we need to parse.

[/slide]

[slide hideTitle]

# AJAX Workflow

[vimeo-video]
[stream language="EN" videoId="497191306/6c8c746993" default /]
[stream language="RO" videoId="497191306/6c8c746993"  /]
[/video-vimeo]

Here is an example of AJAX workflow:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-5.png" /]

In this example, we can see how the **client** sent a request, and the **server** returns a response with the requested page.

After the **initial load** of the page, the **server** will return only **JSON** or **HTML** file.

That allows us to load the content **without** page reload.

[/slide]

[slide hideTitle]

# XMLHttpRequest – Standard API for AJAX

[vimeo-video]
[stream language="EN" videoId="497191331/aab9a52aae" default /]
[stream language="RO" videoId="497191331/aab9a52aae"  /]
[/video-vimeo]

Here we can see how to update a web page without page reloading.

For this example, we will use **XMLHttpRequest object** to request the data from the server.

We need to create a **button** and a **div**.

```
<button id="load">Load Repos</button>
<div id="res"></div>
```

The function will look like this:

```js
let button = document.getElementById('#load');

button.addEventListener('click', function loadRepos() {
   let url = 'https://api.github.com/users/softuni/repos';
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         document.getElementById('res').textContent = httpRequest.responseText;
      }
   });

   httpRequest.open('GET', url);
   httpRequest.send();
});
```

[/slide]

[slide hideTitle]

# What is a Promise?

[vimeo-video]
[stream language="EN" videoId="497191378/a55aff23a3" default /]
[stream language="RO" videoId="497191378/a55aff23a3"  /]
[/video-vimeo]

**Promise** is the result of an **asynchronous action**.

When the Promise is **completed**, it  **produces value**.

They have states, which are:

- **Pending** means that the operation is still running, or it is unfinished.
- **Fulfilled** means that the operation is finished, and the result is available.
- **Failed** means the operation failed, and an error is present.

To create a **Promise**, we use **Promise object** : `new Promise(executor);`

[/slide]

[slide hideTitle]

# Promise.then(): Example

[vimeo-video]
[stream language="EN" videoId="497191409/ff4fc09960" default /]
[stream language="RO" videoId="497191409/ff4fc09960"  /]
[/video-vimeo]

In this example we will see how the **new Promise** works:

```js live
let first = 'Before promise'
console.log(first);

new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve('done');
   }, 500);
}).then(function (res) {
   let second = 'Then returned: ' + res
   console.log(second);
});

let third = 'After promise'
console.log(third);
```

Printed first will be the variables called  **first** and **third**.

That is because the Promise is not resolved yet.

The **second** will be printed in the console when the Promise is resolved.

That is because **new Promise** is asynchronous.

[/slide]

[slide hideTitle]

# What is Fetch?

[vimeo-video]
[stream language="EN" videoId="497191438/868f1cd08d" default /]
[stream language="RO" videoId="497191438/868f1cd08d"  /]
[/video-vimeo]

**Fetch** is an alternative of **XMLHttpRequest**.

The `fetch()` method allows us to make network requests using Promises.

It makes the code more **maintainable** and more **readable** with **simpler** and **cleaner** API.

Here is an example of how `fetch()` works:

```js
fetch('/api/example.json')
   .then(function (response) {})
   .catch(function (err) {});
```

# Basic Fetch Request

**Fetch** returns a response, which is a **Stream** object.

We read it asynchronously with `then()`.

When we call the `json()` method, it will return a promise.

**Before parsing** the response as JSON, we need to check if the **response status** is **200**.

If not, we should **handle** the error.

Here is an example of that action:

```js
if (response.status !== 200) {
   console.error('Request failed')
}

response.json().then(function (data) {});
```

We check the response status, and if it is **200**, we continue with parsing the response.

[/slide]

[slide hideTitle]

# Chaining Promises

[vimeo-video]
[stream language="EN" videoId="497191476/2eee16d66a" default /]
[stream language="RO" videoId="497191476/2eee16d66a"  /]
[/video-vimeo]

The beneficial thing about **promises** is that when we use `fetch ()`, the result returned by it can be **separated** into functions.

We can **chain** promises with `then()`.

When chained, they will perform **asynchronously**.

Here is a basic example:

```js
fetch('example.json')
   .then(res => res.json())
   .then(data => {
      console.log(data)
   })
   .catch(err => {
      console.error('Request Failed');
   });
```

In this example, we parse the response to JSON, and we print the parsed date in the console.

If one of the operations is not successful, `catch()` will print an error.

[/slide]

[slide hideTitle]

# GET Request

[vimeo-video]
[stream language="EN" videoId="497191506/ffd06dbce6" default /]
[stream language="RO" videoId="497191506/ffd06dbce6"  /]
[/video-vimeo]

The first request with `fetch()` that we are going to have a look at is a **GET** request.

By default, **Fetch API** sends a **GET** request.

Here is an example:

```js
fetch('https://api.github.com/users/softuni/repos')
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => console.error(error));
```

To see how it works, run it into the Chrome DevTools console.

We **fetch** the URL and we **parse** the received **response** to **JSON**.

After the data is **parsed**, we print it in the **console**.

If there is an error, `catch()` will print an error.

[/slide]

[slide hideTitle]

# Post Request

[vimeo-video]
[stream language="EN" videoId="497191535/cb32a5d9e3" default /]
[stream language="RO" videoId="497191535/cb32a5d9e3"  /]
[/video-vimeo]

The **POST** request is different from the **GET** request. 

When we send a **POST** request, we need to set the **method**, the **headers**, and the **body**.

It will look like this:

```js
fetch('https://api.github.com/repos/softni/js-apps/issues', {
   method: 'POST',
   headers: { 'Content-type': 'application/json' },
   body: JSON.stringify(data),
});
```

The **Content-type** or the authentication are set in the **headers** section.

In the **body**, we set the data, and it should be **JSON stringified**.

[/slide]

[slide hideTitle]

# Body Methods

[vimeo-video]
[stream language="EN" videoId="497191576/3758785d78" default /]
[stream language="RO" videoId="497191576/3758785d78"  /]
[/video-vimeo]

After the fetch request is done, a response should be returned.

The response object has properties and methods.

The methods are:

- `clone()` will create a **clone** of the response.
- `json()` will **parse** the response to JSON.
- `redirect()` will create a copy of the response, but with a new name.
- `text()` will **parse** the response to a text.
- `arrayBuffer()` will return a promise that resolves with an **ArrayBuffer**.
- `blob()` will take the response and return a promise that resolves with **Blob**
- `formData()` will return a promise that resolves with a **FormData** object

[/slide]

[slide hideTitle]

# Response Type

[vimeo-video]
[stream language="EN" videoId="497191609/984e7c1fb1" default /]
[stream language="RO" videoId="497191609/984e7c1fb1"  /]
[/video-vimeo]

The **response types** are **read-only** properties, 

They show the type of response.

| **Type** | **Description** |
| --- | --- |
|`basic`| Normal, or same-origin response |
|`cors`| The response is received from valid cross-origin request |
|`error`| Network error or not valid information |
|`opaque`| Response for **no-cors** request send to cors resource |
|`opaqueredirect`| The request was made with **manual** redirect |

[/slide]
