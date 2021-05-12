[slide hideTitle]
# Summary


# In this lesson you learnt:

- **ExpressJS** is a server framework
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

- **Templating** enables code readability and speeds up development
  - Templating engines **assemble** **logic** and **data**

```
<div class="entry">
  <h1>{{ title }}</h1>
  <div class="body">
    {{ body }}
  </div>
</div>

```

```
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>

```

- **Handlebars** is a templating engine with a lot of features
  - **For-Loops**
  - **Conditional Statements**
  - **Partials**

```
{{#if sunny}}
  The sky is clear
{{else}}
  The sky is overcast
{{/if}}

```


## In the next lesson you will learn:

- Relational and NoSQL Databases
- What is MongoDB?
- Mongoose
  - Models
  - CRUD Operations
  - Middleware and Queries
  - Model population

[/slide]
