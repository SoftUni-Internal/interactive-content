# Error Handling

[slide hideTitle]

# Definition

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-25-27-error-handling-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Error handling** comprises of the **response** and **recovery procedures** from error conditions in an application.

A function should either:

- Do what it is intended to

- Indicate a problem

Any other behavior is **incorrect** and is subject to **error handling**.

When a function or method fails to do what its name suggests, it **should** either:

- Return a special value

```js live
const years = [1991, 1968, 2009];

console.log(years.indexOf(2020));
```

In the above example, the `indexOf()` method **fails** to find `2020` in the `years` array.

To indicate that, it returns the special value `-1`.

- Throw an **exception**

```js live
function toUppercase(string) {
    if (typeof string !== 'string') {
        throw TypeError('The input provided is not a string');
    }

    return string.toUpperCase();
}

toUppercase(5);
```

The `toUppercase()` function will throw a TypeError, because it is invoked with a number, instead of a string.

[/slide]

[slide hideTitle]
# Types of Errors

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-28-types-of-errors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The three most common types of **errors** are:

- **Syntax Errors**
  
  - every programming language has a set of **grammar rules** which, if mistaken, cause problems
  
  - most [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment) include the ability to warn you about **Syntax Errors** at the time of writing your code
  

- **Runtime Errors**
  
  - runtime errors happen after compilation, as **the application is running**
  
  - making use of [software frameworks](https://en.wikipedia.org/wiki/Software_framework) can significantly lower the chance of such errors

- **Logical errors**
  
  - they occur when a mistake has been made in the **logic of the script** and the **expected result is incorrect**
  
  - they are most commonly known as **bugs**

[/slide]

[slide hideTitle]

# Error Handling - Exceptions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-29-error-handling-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An **exception** occurs when a function is **unable to execute its task successfully**, resulting in an error.


- **RangeError**

**Range errors** occur when a value is **outside of a given range**.

```js
let arr = new Array(-1); // Invalid array length
```

Initializing an array with a **length of -1** will result in a TypeError, because array length cannot be a negative number.

```js 
let bigArr = new Array(9999999999); // RangeError
```

The same error will occur when the **length** parameter is over **4 294 567 295** (2\^32 -1) - the **maximum length** of an array in **JavaScript**.

- **TypeError** 

**Type errors** are the result of an **unexpected value type**.

```js
let index = undefined.indexOf('hi'); // TypeError
```

```js
console.print('hi');   // Uncaught TypeError
```

- **ReferenceError**

**Reference errors** signify that an **inexistent variable** has been **referenced**.

```js
console.log(George);   // Uncaught ReferenceError
```

[/slide]

[slide hideTitle]

# Error Handling - Special Values

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-30-error-handling-special-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Some built-in JavaScript methods can return **special values**, in the case of ill-matched data.

```js
let sqrt = Math.sqrt(-1); // NaN (special value)
```

```js
let sub = 'hello'.substring(2, 1000); // llo
let sub = 'hello'.substring(-100, 100); // hello
// Soft error - substring still does its job: takes all available chars

```

```js
let invalid = new Date('Christmas'); // Invalid Date
let date = invalid.getDate(); // NaN
```


[/slide]


[slide hideTitle]
# Throwing Exceptions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-31-throwing-errors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use the `throw` statement to manually throw an exception:

```js
function isEven(num) {
    if (typeof num !== 'number') {
        throw TypeError('You must provide a number');
    }

    return num % 2 === 0;
}
```

If `TypeError` is thrown, the rest of the code **will not** be executed.

[/slide]

[slide hideTitle]
# Try-Catch

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-32-try-catch-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **try-catch** construct consists of two main blocks: 

- `try`, which contains your code

- `catch`, containing **error handling** logic

```js
try {
    // Code that can throw an exception
    // If executed properly, the catch block is ignored
} catch (exception) {
    // Executed only if an error is thrown
}
```

[/slide]

[slide hideTitle]
# Exception Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-33-exception-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `Error` object contains multiple properties:

- `Error.prototype.name` - **name** of the error

- `Error.prototype.message` - the error **message**

- `Error.prototype.stack` - the [stack trace](https://en.wikipedia.org/wiki/Stack_trace) of the exception
  
[/slide]
