

[slide]
# Error Handling

**Error handling** comprises of the **response** and **recovery procedures** from error conditions in an application.

A function should either:

- Do what it is intended to;

- Indicate a problem;

Any other behavior is **incorrect** and is subject to **error handling**.

When a function or method fails to do what its name suggests, it **should** either:

- Return a special value:

```js live
const years = [1991, 1968, 2009];
console.log(years.indexOf(2020));
```

In the above example, the `indexOf()` method **fails** to find `2020` in the `years` array.

To indicate that, it returns the special value `-1`.

- Throw an **exception**:

```js live
function toUppercase(string) {
  if (typeof string !== "string") {
    throw TypeError("The input provided is not a string");
  }

  return string.toUpperCase();
}

toUppercase(5);
```

The toUppercase function will throw a TypeError, because it is invoked with a number, instead of a string.

[/slide]

[slide]
# Types of Errors

The three most common types of **errors** are:

- **Syntax Errors**
  
  - Every programming language has a set of **grammar rules** which, if mistaken, cause problems
  
  - Most [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment) have with the ability to warn you about **Syntax Errors** at the time of writing your code.
  

- **Runtime Errors**
  
  - Runtime Errors happen after compilation, as a **user is executing your application**
  
  - Making use of [software frameworks](https://en.wikipedia.org/wiki/Software_framework) can significantly lower the chance of such errors.

- **Logical errors**
  
  - They occur when a mistake has been made in the **logic of the script** and the **expected result is incorrect**.
  
  - They are most commonly known as **bugs**.

[/slide]

[slide]
# Throwing Exceptions

We use the `throw` statement to manually throw an exception:

```js
function isEven(num) {
  if (typeof num !== "number") {
    throw TypeError("You must provide a number");
  }

  return num % 2 === 0;
}
```

If ``TypeError`` is thrown, the rest of the code **will not** be executed.

[/slide]

[slide]
# Try-Catch

The **try-catch** construct consists of two main blocks: 

- **try**, which contains your code;

- **catch**, containing **error handling** logic.

```js
try {
  // Code that can throw an exception
  // If executed properly, the catch block is ignored
} catch (exception) {
  // Executed only if an error is thrown
}
```

[/slide]

[slide]
# Exception Properties

The `Error` object contains multiple properties:

- `Error.prototype.name` - **name** of the error;

- `Error.prototype.message` - the error **message**;

- `Error.prototype.stack` - the [stack trace](https://en.wikipedia.org/wiki/Stack_trace) of the exception.
  
[/slide]
