# Async / Await

[slide]

# Async Functions

"Async" functions, unlike promises and callbacks, are an **easy-to-read way of operating asynchronously**.

They look like regular functions but use the event loop to work asynchronously.

"Async" functions consist of two parts:

- `async` keyword - Placed in **front of the function's declaration**. Specifies that the `await` keyword might be used with asynchronous operations inside the function.

- `await` keyword - **Used only in "async functions"**. If placed before an asynchronous operation, **pauses the flow of the function until some value is returned**.

Here is an example of how "async" functions are structured:

```js live
function getValueAfterDelay() {
  let username = "Alex";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Username is: " + username);
    }, 2000);
  });
}

async function printUsername() {
  console.log("Getting name...");

  let result = await getValueAfterDelay(); // throws error if promise is rejected

  console.log(result);
}

printUsername();
```

The `await` keyword is fundamentally different from `Promise.then()`.

While `await` pauses the function execution for **just one promise**, `Promise.then()` is used to chain **multiple promises together**.

Always use `await` **to get a single value** and `Promise.then()` **to run many promises in parallel**.

[/slide]

[slide]

# Async/Await vs Promise.then

Async functions a **much more concise** than promises.

Here is a comparison between the code blocks of the two:

```js
//Promise Example

function getDbInfo(url) {
  return fetch(url)
    .then((data) => {
      return data.json(); //converts data to JSON
    })
    .then((data) => {
      data.performMethod(); //calls a random method of the data object
    })
    .catch((err) => {
      console.log(err);
    });
}
```

```js
//Async function example

async function getDbInfo(url) {
  try {
    let data = await fetch(url);

    let dataToJSON = await data.json(); // converts data to JSON
    dataToJSON.performMethod(); //calls a random method of the data object
  } catch (err) {
    console.log(err);
  }
}
```

[/slide]

[slide]

# Error Handling

Async functions are **best used with a try/catch block**.

```js
async function getInfo(url) {
  try {
    let response = await fetch(url);
    let text = await response.text();
  } catch (err) {
    //would catch an error for every await operation
    console.log(err);
  }
}
```

They could also be used with the `.catch()` method.

```js
async function getInfo(url) {
  const response = await fetch(url);
}

//getInfo() becomes a rejected promise
getinfo.catch((err) => {
  console.log(err);
});
```

[/slide]

[slide]

# Sequential Execution

The `await` keyword in "async" functions allows for the **execution of code in sequence**.

When used **before an asynchronous operation**, the rest of the function will **pause and wait for the operation's return value**.

Here is an example of sequential code execution:

```js
function multplyByTwo(number, seconds) {
  return new Promise((resolve) => {
    console.log("Entry number: " + number);

    setTimeout(() => {
      console.log(`${number}*2 = ` + number * 2);
      resolve(number * 2);
    }, seconds * 1000);
  });
}

async function serialFlow() {
  let result1 = await multplyByTwo(3, 1);
  let result2 = await multplyByTwo(4, 1);
  let result3 = await multplyByTwo(5, 1);

  let total = result1 + result2 + result3;
  console.log("Total sum: " + total);
}

serialFlow();
```

[/slide]

[slide]

# Concurrent Execution

When the `await` keyword is omitted, operations run **concurrently** or independently from one another.

Here is the code from the previous example, but with **concurrent** execution:

```js
function multplyByTwo(number, seconds) {
  return new Promise((resolve) => {
    console.log("Entry number: " + number);

    setTimeout(() => {
      console.log(`${number}*2 = ` + number * 2);
      resolve(number * 2);
    }, seconds * 1000);
  });
}

async function concurrentFlow() {
  let result1 = multplyByTwo(3, 1);
  let result2 = multplyByTwo(4, 2);
  let result3 = multplyByTwo(5, 3);

  let total = (await result1) + (await result2) + (await result3);
  console.log("Total sum: " + total);
}

concurrentFlow();
```

It is preferred to use the `async` keyword before **asynchronous operations** if any functionality below them **relies on their return value**.

If the program flow is parallel, the functions that **depend on the asynchronous operations' values would throw errors**.

[/slide]

[slide]

# Problem: Blog

[code-task title="Problem: Blog" taskId="js-applications-asynchronous-programming-Blog" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```

```

[/code-editor]
[task-description]

# Description

_**Here is a link to the**_ [resources](https://mega.nz/file/qIRBRaDR#mJQb9tyUP9oPhRFlTzA1MDNvXI_T8EB1iF064WCIJpo) _**for this task.**_

Write a program for reading blog content.

It needs to make **requests** to the **server** and display **all blog posts** and their **comments**.

Firebase URL - https://blog-apps-c12bf.firebaseio.com/

Skeleton will be provided in the **Resources folder**.

The button with ID "**btnLoadPosts**" should make a **GET** request to "**/posts**". The **response** from the **server** will be an **Object of objects**.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-1.jpg" /]

Each object will be in the following format:

```js
{
  body: {postBody},
  id: {postId},
  title: {postTitle}
}
```

Create an **\<option\>** for each post using its **object key** as value and **current object title property** as text inside the node with ID "**posts**".

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-2.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-3.jpg" /]

When the button with ID "**btnViewPost**" is clicked, a **GET** request should be made to:

- "**/posts/{postId}**" to obtain the selected post (from the dropdown menu with ID "**posts**") - The following **request** will return a **single object** as described above.

- "**/comments**" - to obtain all comments. The request will **return** an **Object of objects**.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-4.jpg" /]

Each object will be in the following format:

```js
{
  	id: {commentId},
  	postId: {postId},
  	text: {commentText}
}
```

You have to find these comments that are for the current post (check the **postId property**).

Display the post title inside **h1** with ID "**post-title**" and the post content inside ul with ID "**post-body**".

Display **each comment** as a **\<li\>** inside ul with ID "**post-comments**".

Do not forget to clear its content beforehand.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-5.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-6.jpg" /]
[/task-description]
[code-io /]
[tests]
[test]
[input]
server.respondWith((request) =\> \{
if (request.method == 'GET') \{
expect(request.requestHeaders.Authorization).to.contains('Basic');
let target = request.url.split('/');
target = target\[target.length - 1\];
expect(target).to.equal('posts');
let response = `\[\{"_id":"582cde77209db9d9730bab03","title":"Post1","body":"Post \#1 body"\},\{"_id":"582ce30adb630ca5056856d6","title":"Post2","body":"Post \#2 body"\}\]`;
request.respond(200, \{"Content-Type": "application/json"\}, response);
\} else \{
request.respond(500, \{\}, "");
\}
\});

server.respondImmediately = true;
document.body.innerHTML = `\<button id="btnLoadPosts"\>Load Posts\</button\>
\<select id="posts"\>\</select\>
\<button id="btnViewPost"\>View\</button\>

\<h1 id="post-title"\>Post Details\</h1\>
\<ul id="post-body"\>\</ul\>
\<h2\>Comments\</h2\>
\<ul id="post-comments"\>\</ul\>`;

global\['btoa'\] = function (str) \{
return str;
\};

result();
\\$("\#btnLoadPosts").trigger('click');

setTimeout(nextStep, 20);

function nextStep() \{
let posts = \\$('\#posts').text();
expect(posts).to.contains('Post1');
expect(posts).to.contains('Post2');
done();
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
server.respondWith((request) =\> \{
if (request.method == 'GET') \{
expect(request.requestHeaders.Authorization).to.contains('Basic');
let target = request.url.split('/').pop();
let response = '\{\}';
if (target == 'posts') \{
response = `\[\{"_id":"582cde77209db9d9730bab03","title":"Post1","body":"Post \#1 body"\},\{"_id":"582ce30adb630ca5056856d6","title":"Post2","body":"Post \#2 body"\}\]`;
\} else if (target == '582cde77209db9d9730bab03') \{
response = JSON.stringify(\{\_id:"582cde77209db9d9730bab03",
title:"Post1",
body:"Post \#1 body" \});
\} else if (target.includes('query')) \{
response = JSON.stringify(\[\{ \_id:"582ce154d474d37548133d04",
text:"Com1a",
post_id:"582cde77209db9d9730bab03"\},
\{\_id:"582ce2b76ce7ea9e15ca61e3",
text:"Com1b",
post_id:"582cde77209db9d9730bab03"\}\]);
\} else \{
request.respond(404, \{\}, "");
return;
\}
request.respond(200, \{"Content-Type": "application/json"\}, response);
\} else \{
request.respond(500, \{\}, "");
\}
\});

server.respondImmediately = true;
document.body.innerHTML = `\<button id="btnLoadPosts"\>Load Posts\</button\>
\<select id="posts"\>\</select\>
\<button id="btnViewPost"\>View\</button\>

\<h1 id="post-title"\>Post Details\</h1\>
\<ul id="post-body"\>\</ul\>
\<h2\>Comments\</h2\>
\<ul id="post-comments"\>\</ul\>`;

global\['btoa'\] = function (str) \{
return str;
\};

result();
\\$("\#btnLoadPosts").trigger('click');

setTimeout(nextStep, 20);

function nextStep() \{
\\$('\#posts').val('582cde77209db9d9730bab03');
    \\$("\#btnViewPost").trigger('click');
setTimeout(nextNextStep, 20);
\}

function nextNextStep() \{
expect(\\$('\#post-title').text()).to.contains('Post1');
    expect(\\$('\#post-body').text()).to.contains('Post \#1 body');
expect(\\$('\#post-comments').text()).to.contains('Com1a');
    expect(\\$('\#post-comments').text()).to.contains('Com1b');
done();
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Blog

[code-task title="Problem: Blog"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```

```

[/code-editor]
[task-description]

# Description

Write a program for reading blog content.

It needs to make **requests** to the **server** and display **all blog posts** and their **comments**.

Firebase URL - https://blog-apps-c12bf.firebaseio.com/

Skeleton will be provided in the **Resources folder**.

The button with ID "**btnLoadPosts**" should make a **GET** request to "**/posts**". The **response** from the **server** will be an **Object of objects**.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-1.jpg" /]

Each object will be in the following format:

```js
{
  body: {postBody},
  id: {postId},
  title: {postTitle}
}
```

Create an **\<option\>** for each post using its **object key** as value and **current object title property** as text inside the node with ID "**posts**".

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-2.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-3.jpg" /]

When the button with ID "**btnViewPost**" is clicked, a **GET** request should be made to:

- "**/posts/{postId}**" to obtain the selected post (from the dropdown menu with ID "**posts**") - The following **request** will return a **single object** as described above.

- "**/comments**" - to obtain all comments. The request will **return** an **Object of objects**.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-4.jpg" /]

Each object will be in the following format:

```js
{
  	id: {commentId},
  	postId: {postId},
  	text: {commentText}
}
```

You have to find these comments that are for the current post (check the **postId property**).

Display the post title inside **h1** with ID "**post-title**" and the post content inside ul with ID "**post-body**".

Display **each comment** as a **\<li\>** inside ul with ID "**post-comments**".

Do not forget to clear its content beforehand.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-5.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-6.jpg" /]
[/task-description]
[code-io /]
[tests]
[test]
[input]
server.respondWith((request) =\> \{
if (request.method == 'GET') \{
expect(request.requestHeaders.Authorization).to.contains('Basic');
let target = request.url.split('/');
target = target\[target.length - 1\];
expect(target).to.equal('posts');
let response = `\[\{"_id":"582cde77209db9d9730bab03","title":"Post1","body":"Post \#1 body"\},\{"_id":"582ce30adb630ca5056856d6","title":"Post2","body":"Post \#2 body"\}\]`;
request.respond(200, \{"Content-Type": "application/json"\}, response);
\} else \{
request.respond(500, \{\}, "");
\}
\});

server.respondImmediately = true;
document.body.innerHTML = `\<button id="btnLoadPosts"\>Load Posts\</button\>
\<select id="posts"\>\</select\>
\<button id="btnViewPost"\>View\</button\>

\<h1 id="post-title"\>Post Details\</h1\>
\<ul id="post-body"\>\</ul\>
\<h2\>Comments\</h2\>
\<ul id="post-comments"\>\</ul\>`;

global\['btoa'\] = function (str) \{
return str;
\};

result();
\\$("\#btnLoadPosts").trigger('click');

setTimeout(nextStep, 20);

function nextStep() \{
let posts = \\$('\#posts').text();
expect(posts).to.contains('Post1');
expect(posts).to.contains('Post2');
done();
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
server.respondWith((request) =\> \{
if (request.method == 'GET') \{
expect(request.requestHeaders.Authorization).to.contains('Basic');
let target = request.url.split('/').pop();
let response = '\{\}';
if (target == 'posts') \{
response = `\[\{"_id":"582cde77209db9d9730bab03","title":"Post1","body":"Post \#1 body"\},\{"_id":"582ce30adb630ca5056856d6","title":"Post2","body":"Post \#2 body"\}\]`;
\} else if (target == '582cde77209db9d9730bab03') \{
response = JSON.stringify(\{\_id:"582cde77209db9d9730bab03",
title:"Post1",
body:"Post \#1 body" \});
\} else if (target.includes('query')) \{
response = JSON.stringify(\[\{ \_id:"582ce154d474d37548133d04",
text:"Com1a",
post_id:"582cde77209db9d9730bab03"\},
\{\_id:"582ce2b76ce7ea9e15ca61e3",
text:"Com1b",
post_id:"582cde77209db9d9730bab03"\}\]);
\} else \{
request.respond(404, \{\}, "");
return;
\}
request.respond(200, \{"Content-Type": "application/json"\}, response);
\} else \{
request.respond(500, \{\}, "");
\}
\});

server.respondImmediately = true;
document.body.innerHTML = `\<button id="btnLoadPosts"\>Load Posts\</button\>
\<select id="posts"\>\</select\>
\<button id="btnViewPost"\>View\</button\>

\<h1 id="post-title"\>Post Details\</h1\>
\<ul id="post-body"\>\</ul\>
\<h2\>Comments\</h2\>
\<ul id="post-comments"\>\</ul\>`;

global\['btoa'\] = function (str) \{
return str;
\};

result();
\\$("\#btnLoadPosts").trigger('click');

setTimeout(nextStep, 20);

function nextStep() \{
\\$('\#posts').val('582cde77209db9d9730bab03');
    \\$("\#btnViewPost").trigger('click');
setTimeout(nextNextStep, 20);
\}

function nextNextStep() \{
expect(\\$('\#post-title').text()).to.contains('Post1');
    expect(\\$('\#post-body').text()).to.contains('Post \#1 body');
expect(\\$('\#post-comments').text()).to.contains('Com1a');
    expect(\\$('\#post-comments').text()).to.contains('Com1b');
done();
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
