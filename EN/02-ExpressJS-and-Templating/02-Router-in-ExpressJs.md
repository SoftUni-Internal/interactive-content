# Router in ExpressJs

[slide]
# Router

Routing is done by using the `app.METHOD()` function, which receives the **path** and a **handler** callback function as parameters.

Example:

`app.METHOD(PATH, HANDLER)`


In this example:

- `app` is an instance of express.

- `METHOD` is an HTTP request method, in lowercase.

- `PATH` is a path on the server.

- `HANDLER` is the function executed when the route is matched.

[/slide]

[slide]
# Route Methods

In this example, there are different requests as well as their path.

The type of requests is `GET`, `POST` and `PUT`, and each of the requests has its own **route**.

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

The arrangement of routes is important, because when we have two get routs at the same address, the program will enter the first one it comes across.

[/slide]

[slide]
# Route Methods

There is another parameter in handlers that is called `next`.

`Next` allows us to call the next function.

```js
// All methods route
app.all('/about', (req, res, next) => {
  console.log('Middleware execution..')
  next()
}, (req, res) => {
  res.send('Show about page.')
})
```
In this example we tap route `app.all` and the function with which we print `Middleware execution..` to the console.

Then, thanks to `next` with a separate function we return a response, which in this case is `Show about page.`
[/slide]

[slide]
# Router Paths

Routes are not strictly defined.

We can create a path using regex.

In this example, we perform this function on all routes that end in `fly`.
```js
app.get('*',(req, res) => {
  res.send('Matches everything')
})
app.get('/ab*cd', (req, res) => {
  res.send('abcd, abANYTHINGcd')
})
app.get(/.*fly$/, (req, res) => {
  res.send('butterfly, dragonfly') })
```
[/slide]

[slide]
# Extracting Parameters

Paths can have parameters.

In this way we can dynamically take data, which we can later use, for example, to obtain information from the database.

```js
app.get('/users/:userId', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```

We can also validate parameters with regular expressions:

```js
app.get('/users/:userId(\\d+)', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```

In this way we can validate the route.

In this case, if route is not just numbers, then we will get an error `Not Found`.

[/slide]

[slide]
# Chainable Routes

You can create chainable route handlers using `app.route()`

```js
app.route('/home')
  .get((req, res) => {
    res.send('GET home page') })
  .post((req, res) => {
    res.send('POST home page') })
  .all((req, res) => {
    res.send('Everything else')
  })
```
[/slide]

[slide]
# Router Responses

As a response, we can send many things.

We can use:

- `res.download` \- if we want to return a file, which the user can download.

```js
app.get('/pdf', (req, res) => {
  res.download('FULL PATH TO PDF') })
```

- `res.end` \- end the response process

- `res.json` \- send a JSON response

- `res.redirect` \- redirect a request (to another page)

```js
app.get('/about/old', (req, res) => {
  res.redirect('/about') })

```

- `res.sendFile` \- send a file as an **octet stream**

```js
app.get('/file/:fileName', (req, res) => {
  const fileName = req.params.fileName
  res.sendFile("PATH TO FILE" + fileName) })
```

- `res.render` \- render a view template, index HTML or other template
[/slide]

[slide]
# Modular Routers

You can use `express.Router` for modular route handlers.

Mounted on a route (e.g. `/about`).

Can use middleware, specific only to that router.

```js
const express = require('express')
const router = express.Router()
router.use(/* add middleware */)
router.get(/* define route handlers */)
app.use('/about', router)

```

[/slide]
