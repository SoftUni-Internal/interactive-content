# Functions

[slide hideTitle]

# First-Class Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-3-7-first-class-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


In JavaScript functions are treated as **first-class citizens**.

This means that just like primitive values and objects, functions can be:

- **Passed as arguments** to functions

```js live
function sayHello() {
    return 'Hello, ';
}

function greet(helloFunction, name) {
    return helloFunction() + name;
}

console.log(greet(sayHello, 'Peter'));
```

In the above example `helloFunction` acts as a placeholder for the `sayHello()` function.

- **Assigned** to variables

```js live
let greet = function(name) {
    return `Hello, ${name}`;
};
console.log(greet('Johnny'));
```

We **invoke** the function by adding **parentheses** after the function's name.

- **Returned** from functions

In JavaScript, functions are treated as **values**.

Hence, they can be returned by another function:

```js live
function helloWorld() {
    return function greet() {
        console.log('Hello, world!');
    };
}

console.log(helloWorld());
```

In short, first-class functions **support all the operations** available to any JavaScript primitive or object.

[/slide]

[slide hideTitle]

# Higher-Order Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-8-higher-order-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Higher-order functions** can accept other functions as **arguments** and return them as **values**.

Here is a higher-order function in action:

```js live
const sayHello = function() {
    return function() {
        console.log('Hello!');
    };
};

const greet = sayHello();
greet();
```

When invoked, the `sayHello` function returns another function, which is then assigned to the `greet` constant.

[/slide]

[slide hideTitle]

# Predicates

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-9-predicates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


A **predicate** is any function that takes one value as input and returns **true** or **false** based on whether the value **satisfies the condition**.

```js live
function lessThanFive(num) {
    return num < 5;
}

let number = 5;
let result = lessThanFive(number);
console.log(result);
```

The `lessThanFive` function takes a number as an input and checks if it is **smaller than five**.

It returns a **boolean**, meaning it is a **predicate**.

[/slide]

[slide hideTitle]

# Built-in Higher-Order Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-10-built-in-higher-order-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Built\-in higher-order functions accept a **callback function** as an argument, which is called on **every element** in an array.

Here are some examples:

- Array.prototype.**map**

The `map()` method creates a **new array** by calling the callback function provided as an argument on **every single element** in the input array:

```js live
const numbers = [1, 2, 3];
const numsMultiplied = numbers.map((num) => num * 2);

console.log(numsMultiplied);
```

Let us look at the example above.

First, we create the `numbers` array.

Then, we use the `map()` method to **multiply every element by two**.

We save the **newly created array** in the `numsMultiplied` variable.

- Array.prototype.**filter**

The `filter()` function creates a new array that contains **only the elements matching a certain condition**:

```js live
const ages = [18, 20, 19, 27, 23];
const olderThanTwenty = ages.filter((age) => age > 20);

console.log(olderThanTwenty);
```

In the above example, the `olderThanTwenty` array contains only the numbers **bigger than 20**.

- Array.prototype.**reduce**

The `reduce()` method executes the callback function on **each member of a given array**, resulting in a **single value**.

It accepts two parameters:

- The **reducer** callback function, which accepts an `accumulator` and a `currentValue`
- An `initialValue`, which is optional

Here you can see **reduce** in action:

```js live
const arr = [51, 8, 17, 80, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum);
```

When the **reducer** function is called on **each value** in the array, the **accumulator** keeps the result of the previous operation returned from the reducer function, and **currentValue** is set to the current value of the array.

In the end, the result is stored in the **sum** variable.

[/slide]

[slide hideTitle]

# Pure Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-11-pure-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A pure function always returns the same result if the same arguments are passed to it:

- It must **only depend** on its **input arguments**

- It **does not depend** on any state or data **change during execution**

A function is **pure** when it is **free from side-effects**:

```js live
const pureFunc = function (a, b) {
  return a + b;
};

console.log(pureFunc(5, 2));
console.log(pureFunc(5, 2));
```

No matter how many times you run the function with the **same input**, it will **always produce the same result**.

[/slide]

[slide hideTitle]

# Referential Transparency

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-12-referencial-transparency-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **referentially transparent** function call can be replaced with its **return value** and **not affect** the rest of the program.

Let us look at an example:

```js live
function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

let multResult = mult(5, 7);

let x = add(2, mult(5, 7)); // 37

// Replacing mult(5, 7) with its return value 
let y = add(2, multResult); // 37

console.log(x);
console.log(y);
```

A **referentially transparent** function **only depends on its input**.

[/slide]
