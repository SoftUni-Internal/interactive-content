[slide hideTitle]
# Summary

# In this lesson you learned:

- **Express.js** is a server framework
  - Used with **Node.js**
  - **Middlewares** are used to modify the request and response objects

```js
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running on port: ${port}...`));
```

- You can use the built-in Router to handle requests on specific paths

```js
app.get('/user', (req, res) => {
  res.send('The user management page has been requested')
})
```

Remember that Express.js will prioritize routes based on how specific they are and also based on the order that they appear in the code.

- Reading parameters passed through routes:

```js
app.get('/product/:productId', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```


- Middlewares are functions that have access to the response and request objects
 - load them by using `app.use()`


- You can easily serve static files as a response to requests:

```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```

- **Templating** enables code readability and speeds up development
  - templating engines **assemble** **logic** and **data**

```js
<div class="entry">
  <h1>{{ title }}</h1>
  <div class="body">
    {{ body }}
  </div>
</div>

```

```js
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>

```

- **Handlebars** is a templating engine with a lot of features

  - **for-Loops**
  ```js
  <ul class="product_list">
    {{#each products}}
    <li>{{product}}</li>
    {{/each}}
  </ul>
  ```
  - **conditional Statements**
  ```js
  {{#if sunny}}
    The sky is clear
  {{else}}
    The sky is overcast
  {{/if}}

  ```  
  - **Partials**
  
  `{{> myPartial }}`
  

## In the next lesson you will learn:

- Relational and NoSQL Databases
- MongoDB
- Mongoose
  - models
  - CRUD Operations
  - middleware and Queries
  - model population

[/slide]
