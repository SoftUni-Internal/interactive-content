# Authentication Concepts

[slide hideTitle]

# Types of Errors

When we have errors in our app, we have to handle them properly.

There are several types of errors:

- **Technical** or **Network** errors:

   - An example of these errors is when the server is down

- **Usual** or **Expected** errors:

   - They are predictable

   - Example of a **usual** or **expected** error is when a database request fails

- **Bugs** or **Logical** errors:

   - These errors are not predictable because the software does not work as expected

   - Example of **bugs** or **logical** error is trying to call a function that does not exist

   - These errors are our fault, and we should fix them through the development process

[/slide]

[slide hideTitle]

# Working with Errors

There is a **built-in error** object in **node.js**.

We can be thrown the  **technical** object in case of an error.

To catch errors in synchronous code, we need to use **try-catch**.

For asynchronous code we use `then().catch()`.

We can handle the errors directly with **try-catch** or `then().catch()`. 

But if we want, we can use the **ExpressJS** tools.

When we use the **ExpressJS** functionality, we need to use the `next()` functions, which calls a middleware.

[/slide]

[slide hideTitle]

# Working Synchronously with Errors

We use the **try-catch** block statement with **async** and **await** to handle errors synchronously.

Here is an example:

```js
const User = require('../models/User/');

async (req, res, next) => {
    const { username, password } = req.body;
    try{
   const currentUser = await User.findOne({ username });
      console.log(username)
    } catch (error) {
      console.error(error)
    }
};
```

Because it is synchronous, we use `try{}catch(error){}` block statement.

In the `try{}` statement, we print the **username** in the console.

In the `catch(error){}` statement we print the **error** in the console.

[/slide]

[slide hideTitle]

# Working Asynchronously with Errors

We can handle asynchronous errors with `.then().catch()` block statement.

Have a look at this example:

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

In the `then()` statement, we print the **product** in the console.

But if the product is missing, it will be executed the `catch()` statement.

In this case, we check the **status code**.

If it is missing, we set it to **500**.

After that, we pass the **error** to the `next()` middleware.

[/slide]

[slide hideTitle]

# Error Handling

When an error shows up, we need to handle it.

While we are doing that, we need to make a good **user experience**.

There are several things that we can do to improve the **UX** in moments like this.

For example:

- We can **redirect** to an error page

[image assetsSrc="JS-Web-Validation-And-Error-Handling.png" /]

- Every response from the API should have a **specific status code** and **well-described information** about the error

- We can display an error notification

[/slide]
