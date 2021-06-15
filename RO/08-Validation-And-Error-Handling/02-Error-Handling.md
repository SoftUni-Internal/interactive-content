# Authentication Concepts

[slide hideTitle]

# Types of Errors

When we have errors in our app, we have to handle them properly.

There are several types of errors:

- **Technical** or **network** errors:

  * when the server is down

- **Usual** or **expected** errors:

  * they are predictable

  * a database request failure is predictable - you might be looking for a non-existent resource

- **Bugs**, also known as **logical** errors:

  * these errors are **not predictable** because the software does not work as expected

  * trying to **call a function that does not exist** is a logical error

  * these errors are our fault, and we should fix them during the development process

[/slide]

[slide hideTitle]

# Working with Errors

There is a **built-in error** object in **node.js**, which we can use to throw an error.

To catch errors in **synchronous** code, we need to use a **try-catch** block.

For **asynchronous** code, we use `then().catch()`.

We can handle the errors directly with **try-catch** or `then().catch()`. 

Depending on our preference, we can use the **ExpressJS** tools.

When we use the **ExpressJS** functionality, we need to use the `next()` function, which calls a middleware.

This is an example of how to use `next`:

```js
async function validateCookies(req, res, next) {
    await cookieValidator(req.cookies);
    next();
}

app.use(cookieParser());
```

[/slide]

[slide hideTitle]

# Working Synchronously with Errors

We use the **try-catch** block statement with **async** and **await** to handle errors synchronously.

Here is an example:

```js
const User = require('../models/User/');

async (req, res, next) => {
    const {
        username,
        password
    } = req.body;
    try {
        const currentUser = await User.findOne({
            username
        });
        console.log(username);
    } catch (error) {
        console.error(error);
    }
};
```

In the `try{...}` statement, we print the **username** to the console.

In the `catch(error){...}` statement, we print the **error** to the console.

[/slide]

[slide hideTitle]

# Working Asynchronously with Errors

We can handle asynchronous errors with the `.then().catch()` block statement:

```js
Post.findById(productId)
    .then((product) => {
        console.log(product)
    })
    .catch((error) => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    });
```

In the `then()` statement, we print the **product** to the console.

But if the product is missing, the `catch()` statement will be executed.

In this case, we check the **status code**.

If it is missing, we set it to **500**.

After that, we pass the **error** to the `next()` middleware.

[/slide]

[slide hideTitle]

# Error Handling

**Error handling** is important for a number of reasons:

- It makes our application more user-friendly, as we can deal with the error in a proper way
  * we can also make it easier for the user to contact a help center when a problem occurs

- Developers benefit from code that is easier to debug and maintain

- It ensures that our application will **continue to run**, without fatal crashes


There are several things that we can do to improve the **user experience** in moments like this:

- We can **redirect** to an error page

[image assetsSrc="JS-Web-Validation-And-Error-Handling.png" /]

- Displaying an error **notification** is a **less intrusive** alternative to redirecting
  * can be used for less major errors, such as an invalid index in an **input** field

- Every response from the API should have a **specific status code** and **well-described information** about the error

[/slide]
