# Asynchronous JavaScript and XML

[slide hideTitle]

# What is AJAX?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-23-24-what-is-ajax-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **AJAX** abbreviation stands for **Asynchronous** **JavaScript** and **XML**. 

Nowadays, **JSON** is used instead of **XML**.

This technique allows us to **dynamically** **load** and **render** content or data.

There are two types of **AJAX**:

- **Partial page rendering** allows us to render an HTML fragment in a `<div>` while the data loads

- **JSON services** have JSON objects, which we need to parse

[/slide]

[slide hideTitle]

# AJAX Workflow

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-25-ajax-workflow-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an example of AJAX **workflow**:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-5.png" /]

In this example, we can see how the **client** sends a request, and the **server** returns a response with the requested page.

After the **initial loading** of the page, the **server** will return only a **JSON** or an **HTML** file.

That allows us to load the content dinamically, **without** the need for page reloading.

[/slide]

[slide hideTitle]

# XMLHttpRequest - Standard API for AJAX

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-26-27-xmlhttp-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can see how to update a web page without the page reloading.

For this example, we will use the **XMLHttpRequest object** to request the data from the server.

We need to create a **button** and a **div**.

```js
<button id="load">Load Repos</button>
<div id="res"></div>
```

The function will look like this:

```js
let button = document.getElementById('#load');

button.addEventListener('click', function loadRepos() {
    let url = 'https://api.github.com/users/softuni/repos';
    const httpRequest = new XMLHttpRequest();

    httpRequest.addEventListener('readystatechange', function() {
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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-28-what-is-a-promise-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **Promise** is the result of an **asynchronous action**.

When the Promise is **completed**, it **produces a value**.

They have states, which are:

- **Pending** meaning that the operation is still running or is unfinished
- **Fulfilled** meaning that the operation has finished and the result is available
- **Failed** meaning that the operation failed, and an error is present

To create a **Promise**, we use a **Promise object**: `new Promise(executor);`

[/slide]

[slide hideTitle]

# Promise.then(): Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-29-promise-then-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this example, we will see how the **new Promise** works:

```js live
let first = 'Before promise'
console.log(first);

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('done');
    }, 500);
}).then(function(res) {
    let second = 'Then returned: ' + res
    console.log(second);
});

let third = 'After promise'
console.log(third);
```

The values of the **first** and **third** variable will be printed.

That is because the Promise is not resolved yet.

The **second** will be printed to the console when the Promise is resolved.

That is because **new Promise()** is asynchronous.

[/slide]

[slide hideTitle]

# What is Fetch?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-30-31-what-is-fetch-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Fetch** is an alternative to **XMLHttpRequest**.

The `fetch()` method allows us to make network requests using Promises.

It makes the code more **maintainable** and more **readable** with a **simpler** and **cleaner** API.

Here you can see the `fetch()` syntax:

```js
fetch('/api/example.json')
    .then(function(response) {})
    .catch(function(err) {});
```

# Basic Fetch Request

**Fetch** returns a response, which is a **Stream** object.

We read it asynchronously with `then()`.

When we call the `json()` method it will return a Promise.

**Before parsing** the response as JSON, we need to check if the **response status** is **200**.

If not, we should **handle** the error.

Here is an example of that action:

```js
if (response.status !== 200) {
    console.error('Request failed')
}

response.json().then(function(data) {});
```

We check the response status and if it is **200**, we **continue** with parsing the response.

[/slide]

[slide hideTitle]

# Chaining Promises

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-32-chaining-promises-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The beneficial thing about **promises** is that when we use the `fetch()` method, the result returned by it can be **separated** into functions.

We can **chain** promises using the `then()` method.

When chained, they will perform **asynchronously**.

Here is a basic **example**:

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

In this example, we **parse** the response to **JSON**, and we print the parsed date on the console.

If one of the operations is **not successful**, `catch()` will print an error.

[/slide]

[slide hideTitle]

# GET Request

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-33-get-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The first request with `fetch()` that we are going to have a look at is a **GET** request.

By default, **Fetch API** sends a **GET** request.

Here is an example:

```js
fetch('https://api.github.com/users/softuni/repos')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```

To see how it works, run it in the Chrome DevTools console by pressing `F12`.

We **fetch** the URL and we **parse** the received **response** to **JSON**.

After the data is **parsed**, we print it to the **console**.

If there is an error, the `catch()` method will **print** an error.

[/slide]

[slide hideTitle]

# Post Request

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-34-post-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **POST** request is different from the **GET** request.

When we send a **POST** request, we need to set the **method**, the **headers** and the **body**.

It will look like this:

```js
fetch('https://api.github.com/repos/softni/js-apps/issues', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
});
```

The **Content-Type** and the authentications are set in the **headers** section.

We set the data in the **body** and it should be a **JSON, stringified**.

[/slide]

[slide hideTitle]

# Body Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-35-36-body-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

After the **fetch** request is done, a response should be returned.

The response object has properties and methods.

The **methods** are as follows:

- `clone()` will create a **clone** of the response
- `json()` will **parse** the response to JSON
- `redirect()` will create a copy of the response, but with a new name
- `text()` will **parse** the response to a text
- `arrayBuffer()` will return a promise that resolves with an **ArrayBuffer**
- `blob()` will take the response and return a promise that resolves with **Blob**
- `formData()` will return a promise that resolves with a **FormData** object

[/slide]

[slide hideTitle]

# Response Type

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-37-response-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **response types** are **read-only** properties.

They show the type of response.

| **Type** | **Description** |
| --- | --- |
|**basic**| Normal, or same-origin response |
|**cors**| The response is received from valid cross-origin request |
|**error**| Network error or not valid information |
|**opaque**| Response for **no-cors** request send to cors resource |
|**opaqueredirect**| The request was made with **manual** redirect |

[/slide]
