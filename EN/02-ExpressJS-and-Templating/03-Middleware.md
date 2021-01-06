# Middleware

[slide]

# What is a Middleware?

A **middleware** is a **function** that has access to:

- The **request** object (`req`)
- The **response** object (`res`)

- The **next middleware function** in an application's **request-response cycle**:
  - The `next` keyword is most commonly used to designate it;
  - Utilised to create a **middleware stack**.

We use middleware functions to:

- **Execute** any code in the function body;
- **Modify** the **request** and **response** objects;

- Call the **next middleware** in the stack.

- **End** the **request-response cycle**.

## How to load a Middleware

To load **our middleware**, we utilise the `app.use()` method which accepts our function as a parameter.

Here is a simple example:

```js
var express = require("express");
var app = express();

app.use(function (req, res, next) {
  console.log("Hello World!");
  next();
});
```

First, we **import** the `express` framework.

Then we create a new instance of the **app object**.

We hand over our middleware function to the `app.use()` method.

In the function body we have called the console.log() method with a simple string.

We call the **next function**, if such exists in the **middleware stack**, with the help of `next()`.

[/slide]