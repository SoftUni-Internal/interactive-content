[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.ExpressJS-And-Templating/interactive-express.js-and-view-engines-33-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **Express.js** is a server framework
  * used with **Node.js**
  * **middlewares** are used to modify the request and response objects

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

- You can use the **built-in Router** to handle requests on specific paths
    * Express.js will prioritize routes based on how specific they are and the order that they appear in the code
```js
app.get('/user', (req, res) => {
  res.send('The user management page has been requested')
})
```


- Reading parameters passed through routes:

```js
app.get('/product/:productId', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```


- **Middlewares** are functions that have access to the response and request objects
   * load them by using `app.use()`


- You can easily **serve static files** as a response to requests:

```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```

- **Templating** enables code readability and speeds up development
  * templating engines **assemble logic** and **data**

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

  * **for-Loops**
  ```js
  <ul class="product_list">
    {{#each products}}
    <li>{{product}}</li>
    {{/each}}
  </ul>
  ```

  * **conditional Statements**
  ```js
  {{#if sunny}}
    The sky is clear
  {{else}}
    The sky is overcast
  {{/if}}

  ```  

  * **Partials**
  
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
