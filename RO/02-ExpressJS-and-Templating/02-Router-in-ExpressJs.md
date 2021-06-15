# Router in Express.js

[slide hideTitle]
# Router

Routing refers to how an application handles requests to specific paths.

Routing in Express.js is done by using the `app.METHOD()` function, which receives the **path** and a **handler** callback function as parameters.


The syntax is `app.METHOD(PATH, HANDLER)`.

In this case: 
- `app` - an instance of express

- `METHOD` - an HTTP request method (in lowercase)

- `PATH` - a path on the server

- `HANDLER` - function to execute the route is matched

Here is an example:

```js
app.get('/', function(req, res) {
    res.send('Hello World!')
})
```

or 

```js
app.get('/user', (req, res) => {
    res.send('The user management page has been requested')
})
```

[/slide]

[slide hideTitle]
# Route Methods - 1

In this example, there are different requests as well as their path.

The type of requests is `GET`, `POST`, and `PUT`, and each of the requests has its own **route**.

```js
// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
// PUT method route
app.put('/', (req, res) => {
    res.send('PUT request to the homepage')
})
```

You can also use `app.all()` to handle all types of HTTP methods.

It is important to note is that Express.js will prioritize routes based on how specific they are and also based on the order that they appear in the code.

Take a look at the below example:


```js
// A wildcard as a route means it will match any route
app.get('*', (req, res) => {
    res.send('Page not found!')
})
// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
```

The wildcard route will match any route that is entered and because it is in the top position, your other routes will never be reached.

The correct approach is to always keep the least specific routes below the most specific ones, and the wildcard route is a good example of a route that should be last to appear in the code.

## Route Methods - 2

The routing methods can have  more than one callback function. 

You can use `next()` in the body of the function to pass control to the next callback.

```js
app.all('/about', (req, res, next) => {
    console.log('Middleware execution..')
    next()
}, (req, res) => {
    res.send('Show about page.')
})
```
In this example, any type of request to the '/about' route calls the function with which prints "**Middleware execution..**" to the console.

Then, thanks to the `next()` method we return a response with another function that sends a response that "shows" the about page. 

This is especially useful if you want to execute some function (a middleware) before handling the request.

[/slide]

[slide hideTitle]
# Router Paths

Routes are not strictly defined.

We can create a path using regex.

In this example, we perform this function on all routes that end in `fly`.

```js
app.get('/ab*cd', (req, res) => {
    res.send('Match abcd or abANYTEXTcd')
})
app.get(/.*fly$/, (req, res) => {
    res.send('Matches words like butterfly, dragonfly')
})
app.get('*', (req, res) => {
    res.send('Matches everything')
}) 
```


[/slide]

[slide hideTitle]
# Extracting Parameters

Paths can contain parameters. 

For example, you might have a product page with an edit button, in which case you would need to somehow get the ID of the product from the URL path to display the edit page for the correct product.

Your path might look like `/product/1224/`.

You will need to read the id (1224) and use it to retrieve the correct product details from a database. 


```js
app.get('/product/:productId', (req, res) => {
    const paramsObj = req.params
    res.send(paramsObj)
})
```

Receiving a GET request at a path such as `/product/121` would let you capture the product id and store it in the paramsObj variable.


In this way we can dynamically take data, which we can later use, for example, to obtain information from the database.

We can also validate parameters with regular expressions:

```js
app.get('/users/:userId(\\d+)', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```

The regex check in the path above ensures that the parameter received is a number, else we will get a **Not Found** error.


[/slide]

[slide hideTitle]
# Chaining Routes

You can chain handlers using `app.route()`

```js
app.route('/home')
    .get((req, res) => {
        res.send('GET home page')
    })
    .post((req, res) => {
        res.send('POST home page')
    })
    .all((req, res) => {
        res.send('Everything else')
    })
```

This is very useful when you want to execute different actions based on request type on the same path, saving you a few lines of code.


[/slide]

[slide hideTitle]
# Router Responses

There are several different types of responses we can specify.

We can use:

- `res.download()`: if we want to return a file for the user to download

```js
app.get('/pdf', (req, res) => {
    res.download('FULL PATH TO PDF')
})
```

- `res.end()`: end the response process

- `res.json()`: send response in JSON format
```js
res.json({ product: 'Tootbrush' })
```

- `res.redirect()`: redirect a request to another page

```js
app.get('/about/old', (req, res) => {
  res.redirect('/about') })
```

- `res.sendFile()`: send a file as an **octet stream**

```js
app.get('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName
    res.sendFile("PATH TO FILE" + fileName)
})
```

- `res.render`: render a view template, index HTML or other template
[/slide]

[slide hideTitle]
# Modular Routers

You can use `express.Router` for creating modular route handlers that be mounted to specific paths.

In this way, you can use middleware, specific only to that router.

These are created in separate js files. 

For example we can create an about.js file with the following contents:

```js
const express = require('express')
const router = express.Router()
router.use( /* add middleware */ )
router.get( /* define route handlers */ )
app.use('/about', router)
```

If we want to use the router anywhere within the app, we can load it with `var aboutRouter = require('./about')`

[/slide]

[slide hideTitle]
# Demo: Express.js

[/slide]