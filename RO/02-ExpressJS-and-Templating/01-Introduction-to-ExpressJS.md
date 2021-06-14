# Introduction to Express.js

[slide hideTitle]

# Introduction

**Express.js** is a Node.js **framework**, specifically designed for building **web applications**. 

It is the **most popular** server framework for **Node.js**, and it is open-source and cross-platform.

The standard library of Node.js includes a set of asynchronous I/O primitives, and most of the libraries are written following the non-blocking paradigm.

Express.js is no exception and a server running with the express framework would be able to handle thousands of simultaneous requests.

To use **Express.js** we need to install the the Express.js library by executing the `npm install express` command.

Installing the library:

```js
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running on port: ${port}...`));
```

To be able to use the **Express.js** library, we should type `const express = require ('express')`, then we should display the function `const app = express();` so that we can generate our server.

Then we create the port on which the server will accept requests `const port = 3000;`.

After that, we make a handler, that will be responsible for `GET` type requests:

```js
app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to Express.js!');
})
```

When we receive a `GET` request, this handler will be called and will return the corresponding response.

In this case `200` and `Welcome to Express.js!`, which means that our request has been processed.

Finally, we call `app.listen`, passing the port on which our application will listen and a callback function `Express running on port: $ {port} ...`.

[/slide]