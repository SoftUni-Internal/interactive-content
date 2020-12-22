# Asynchronous JavaScript and XML

[slide]

# What is AJAX

**AJAX** stands for **Asynchronous** **JavaScript** and **XML**, but instead of XML nowadays we use **JSON**.

That is a technique that allows us to **dynamically** **load** and **render** content or data.

There two types of **AJAX**:

-  **Partial page rendering**, where we can render an HTML fragment in a `<div>` while the data loads.

-  **JSON service**, where we have a JSON object, and we need to parse it.

Here is an example of AJAX workflow:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-5.png" /]

[/slide]

[slide]

# XMLHttpRequest – Standard API for AJAX

In this example, we will see how to update a web page without reloading the entire page.

For this example, we will use **XMLHttpRequest object** to request data from the server.

First, we need to create a **button** and a **div**.

```
<button id="load">Load Repos</button>
<div id="res"></div>
```

And the function will look like this:

```js
let button = document.querySelector('#load');

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

[slide]

# What is Promise?

We say **Promise** to the result of an **asynchronous action**.

When the promise is **completed**, it can **produce a value**.

Promises have a state.

The states are:

- Pending - it means that the operation is still running, or it is unfinished.
- Fulfilled - this one means that the operation is finished, and the result is available.
- Failed - It means that the operation failed, and an error is present.

They use **Promise** object.

```js
new Promise(executor);
```

[/slide]

[slide]

# Promise.then(): Example

In this example we will see how **new Promise** works:

```js live
console.log('Before promise');

new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve('done');
   }, 500);
}).then(function (res) {
   console.log('Then returned: ' + res);
});

console.log('After promise');
```

The first and third `console.log()`, are printed first because the promise is not resolved yet.

Once finished, it will console.log the result as a third `console.log()`.

That is because **new Promise** is asynchronous.

[/slide]

[slide]

# What is Fetch?

**Fetch** is the alternative to **XMLHttpRequest** in nowadays.

The `fetch()` method allows us to make network requests.

It makes the code more **maintainable** and more **readable** with **simpler** and **cleaner** API.

**Fetch** uses **Promises**.

Here is an example of how fetch looks like:

```js
fetch('/api/example.json')
   .then(function (response) {})
   .catch(function (err) {});
```

[/slide]

[slide]

# Basic Fetch Request

**Fetch** returns a response, which is a **Stream** object.

We read that stream asynchronously with `then()`.

When we call the `json()` method, it will return a promise.

**Before parsing** the response as JSON, we need to check if the **response status** is **200**.

If not, we should **handle** the error.

Here is a basic example of that action:

```js
if (response.status !== 200) {
   // handle error
}

response.json().then(function (data) {});
```

First, we check the response status, and if it is 200, we continue with parsing the response.

[/slide]

[slide]

# Chaining Promises

The beneficial thing about **promises** is that when we use `fetch ()`, the result returned by it can be **separated** into functions.

We can **chain** promises with `then()`.

When chained, they will perform **asynchronously**.

Here is a basic example:

```js
fetch('example.json')
   .then(status)
   .then(json)
   .then((data) => {})
   .catch((error) => {});
```

In this example, the `then(json)` will be executed if only the status succeeds.

If one of the operations is not successful `catch((error) => {});` will handle throw an error.

[/slide]

[slide]

# Fetch Requests

The first request with `fetch()` that we are going to have a look at is **GET** request.

By default, **Fetch API** sends a **GET** request.

GET request with fetch will look like this:

```js
fetch('https://api.github.com/users/softuni/repos')
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => console.error(error));
```

To see how it works, run it into the Chrome DevTools console.

First, we **fetch** the URL.

After we receive the **response**, we **parse** the data to **JSON**.

And after the data is **parsed**, we printed it in the **console**.

If there is an error, `catch()` will print it in the console.

A **POST** request is almost the same, the difference is that we need to set the **method**, **headers**, and **body**.

It will look like this:

```js
fetch('/url', {
   method: 'POST',
   headers: { 'Content-type': 'application/json' },
   body: JSON.stringify(data),
});
```

In the **headers** section we set keys like **Content\-type**, authentication and etc.

In the **body** we set the data, also we need always to `JSON.stringify()` the data.

[/slide]

[slide]

# Body Methods

After we fetch a request, it returns a response.

This response object has properties and methods.

The methods are:

- `clone()` \- **Clone** will create a clone of the response.
- `json()` \- This one will parse the response to JSON.
- `redirect()` \- It will create a copy of the response, but with a new name.
- `text()` \- **Text** will parse the response to text.
- `arrayBuffer()` \- It will return a promise that resolve with an **ArrayBuffer**.
- `blob()` \- This one will take the response and return a promise that resolves with **Blob**
- `formData()` \- **FormData** promise that resolves with a **FormData** object

[/slide]

[slide]

# Response Type

The response types are read- only properties, that shows the type of the response

The response type are:

| **Type** | **Description** |
| --- | --- |
|basic| Normal, or same origin response |
|cors| The response is received from valid cross\-origin request |
|error| Network error or not valid information |
|opaque| Response for **no-cors** request send to cors resource |
|opaqueredirect| The request was made with **manual** redirect |

[/slide]
