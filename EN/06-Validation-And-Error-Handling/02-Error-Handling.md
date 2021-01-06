# Authentication Concepts

[slide]

# Types of Errors

Wen we have errors in our app, we have to handle them properly.

The types of errors are:

- **Technical** or **Network** errors.

   - An example of **technical** or **network** error is when the server is down.

- **Usual** or **Expected** errors are the predictable ones.

   - Example of **usual** or **expected** is when a database operation fails or cannot read a file.

- **Bugs** or **Logical** errors are not predictable because, with these errors, the software does not work how we expected.

   - Example of **bugs** or **logical** is trying to call something that does not exist.

   - Also, these errors are our fault, and we should fix them through the development process.

[/slide]

[slide]

# Working with Errors

We have built\-in error object from node.js.

This error object is a **technical** one, and it can be thrown.

For synchronous coding, we use **try\-catch**.

But for asynchronous code we need to use `then().catch()`.

Also, we can handle the errors directly or to use the **ExpressJS** tools.

When we want to use the **ExpressJS** functionality, we need to use the `next()` functions, which calls a middleware.

[/slide]

[slide]

# Working Synchronously with Errors

To handle synchronous errors, we use the standard **try\-catch** block statement.

Here is an example:

```js
const User = require('../models/User/');

async (req, res, next) => {
    const { username, password } = req.body;
    try{
	const currentUser = await User.findOne({ username });
	// Login...
    } catch (e) {
    // Handle error...
    }
};
```

Because it is synchronous, we use `try{}catch(error){}` block statement.

In the `try{}` statement, we write the logic which we want to be executed.

And in the `catch(error){}` statement we write the error handling logic.

Which can `console.log()` the error, send a message, etc.

[/slide]

# Working Asynchronously with Errors

To handle asynchronous errors is almost the same as synchronously, but not exactly.

Have a look at this example:

```js
Post.findById(postId)
   .then((post) => {
      // Some logic
   })
   .catch((error) => {
      if (!error.statusCode) {
         error.statusCode = 500;
      }
      next(error);
   });
```

For asynchronous coding we use `then().catch()`.

In the `then()` statement we put the logic that we want to execute.

But if something goes wrong, we will execute the `catch()` statement.

In this case, first we check the status code, and after that we call the `next()` function.

Which calls an error middleware.

[/slide]

[slide]

# Error Handling

In the end, when an errors shows up, we need to handle it.

While we are doing that, we need to make a good user experience.

There are several things that we can do to improve the UX in this moments.

Some of them are:

- To return an error page.

[image assetsSrc="JS-Web-Validation-And-Error-Handling.png" /]

- To return every response with error information and specific status code.

- To **redirect** to a specific error page

- To return a error notification.

[/slide]
