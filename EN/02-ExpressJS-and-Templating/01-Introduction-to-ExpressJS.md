# Introduction to ExpressJs

[slide]

# Introduction
To use Express.Js we need to install the `npm install express` library.

Installing the library:

```
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running on port: ${port}...`));
```

To be able to use the ExpressJs library, we should type `const express = require ('express')`, then we should display the function `const app = express ();` so that we can generate our server.

Then we create the port on which the server will accept requests `const port = 3000;`.

Then we make a handler, hat will be responsible for `GET` type requests:
```
app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to Express.js!');
})
```

When we receive `GET` request, this handler will be called and will return the corresponding responce.

In this case `200` and` Welcome to Express.js! `, which means that our request has been processed.

Finally, we call `app.listen`, on which we pass the port on which our application will listen and callBack function, which says that` Express running on port: $ {port} ... `.
[/slide]