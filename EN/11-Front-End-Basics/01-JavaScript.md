# JavaScript

[slide hideTitle]

# Dynamic Programming Language

JavaScript is a dynamic programming language.

Compared to static languages in which operations are done at compile time, JS does them at run-time.

This allows us to change the flow of an application while it is running.

For example, we can add new properties/methods to an object, or change a variable's type at runtime.

Along with HTML and CSS, it is a leading **front-end** technology, supported by all web browsers.

It can also be used on the server side, with the help of **Node.js**.

[/slide]

[slide hideTitle]

# Data Types

There are **seven** primitive data types in JavaScript:

## `String`

The string type is used to represent textual data​.

It is a sequence of 16-bit integer values.

Each symbol has its own index, the first one being zero.

## `Number` 

The most used numeric data type in JavaScript is Number.

It can represent both Integers and floating-point numbers.

This type has three additional values: `+Infinity`, `-Infinity`, and `NaN`, short for "**N**ot **a** **N**umber"

## `Boolean`

Boolean is a **logical** data type and can have two values: `true` and `false`.

## `Undefined`

When a variable has been declared without being assigned a value, it is **undefined**.

## `Null` 

Null represents the intentional absence of any object value​.

While often cosidered to be a primitive type, internally `null` is of type `object`:

```js
let isObject = (typeof null === 'object');

console.log(isObject);
```

This makes null a **Structural Root Primitive**.

## `BigInt`

Bigint is the second numeric type in JavaScript.

It represents **integers** with arbitrary precision​.

The lack of support for floating-point numbers enables it to store far larger integers, as compared to `Number`.

## `Symbol`

Symbol is a unique and immutable primitive value​.

It is often used as a key of an Object property.

## Data Structures​

Further in this lesson, we will learn what JavaScript Objects and Functions are, and how to use them.

[/slide]

[slide hideTitle]

# Variable Values​

There are three ways to declare variables in JavaScript

## `let` 

The `let` keyword allows us to declare block-level variables. 

```js
// num is unreachable here

for (let num = 0; num <= 100; num++) {
  // num is usable in the for-loop
}

// num is unreachable here
```

The declared variable is available from the block it is enclosed in.

## `const` 

Variables declared with `const` cannot be modified once they are assigned.

```js
const name = 'James';
name = 'Mike'; // Results in an error
```

Similar to `let`, they available only from the enclosing block.

## `var` 

Before the introduction of EcmaScript 6 in 2015, the `var` keyword was the only way to declare a variable.

While it is the most common of the three, it is recommended to refrain from using it.

Variables declared with `var` have a functional scope:

```js
// num is available here

for (var num = 0; num <= 100; num++) {
  // we can use num anywhere within the function
}

// num is available here
```

[/slide]

[slide hideTitle]

# Dynamic Typing​

JavaScript is a **dynamically** typed language.

When declaring a variable, we are not required to explicitly specify its type.

This means that we can assign a number to a variable, and convert it to a string or boolean at a later time:

```js live
let myVar = 8;
console.log(myVar);

myVar = 'hello';
console.log(myVar);

myVar = true;
console.log(myVar);
```

[/slide]

[slide hideTitle]

# Comparison Operators​

There are the **eight** comparison operators in JavaScript.

| Operator | Notation in JS |
|---|---|
| EQUAL value | `==` |
| EQUAL value and type | `===` |
| NOT EQUAL value | `!=` |
| NOT EQUAL value/type | `!==` |
| Greater than | `>` |
| Greater than OR EQUAL | `>=` |
| LESS than | `<` |
| LESS than OR EQUAL | `<=` |

[/slide]

[slide hideTitle]

# Comparison Operators ​

In JavaScript, there are two ways to test equality - `==` and `===`.

While both operators look similar, they often produce different results.

When using double equals, we are testing for loose equality.

They perform type coercion, meaning that both values will be compared only when converted into a common type.

```js live
console.log(7 == '7');
```

In the above example, we compare a Number to a String, but receive `true`.

The String '7' is automatically converted to a Number.

However, trying the same comparison with `===` returns `false`:

```js live
console.log(7 === '7');
```

The triple-equal operator performs type checking as well, and comparing two different types returns `false`.

The inequality operators work similarly, returning the opposite results:

```js live
console.log(5 != '5');

console.log(5 !== '5');
```

The **ternary operator** works similarly to an if-statement.

```js live
let myBoolean = true;

console.log(myBoolean ? 2 : 4);
```

It accepts three operands:

- A condition: `myBoolean`
- An expression to execute if the condition is truthy: `2`
- An expression to execute if the condition is falsy: `4`

Most values that store data are truthy in JavaScript.

For example, a non-empty string is truthy, while an empty one coerces to `false`:

```js live
console.log('Hello' == true);

console.log('' == true);
```

[/slide]

[slide hideTitle]

# Functions​

A function is a named list of instructions (statements and expressions)​.

It takes parameters as input and return a result​, based on the inner logic and the passed input.

Function names and parameters use camel case​: `myFunction`

Contrary to languages like Java and C#, the opening bracket `{` stays at the same line​:

```js live
function printDots(count) {​
  console.log(".".repeat(count));​
}​

printDots(5);​
```

[/slide]

[slide hideTitle]

# Declaring Functions​

There are **three** ways to declare functions in JS:

## Function declaration​

```js live
function bark() {​
 console.log("woof");​
}​
```

## Function expression​

```js live
let bark = function (){​
 console.log("woof");​
}
```

## Arrow functions​

```js live
let bark = () => {​
 console.log("woof");​
}​
```

[/slide]

[slide hideTitle]

# Parameters​

In JS, we can instantiate parameters without a value​:

```js live
function print(num1,num2,num3){​
  console.log(num1);​
  console.log(num2);​
  console.log(num3); 
}​

print(1, 2)​;
```

In the example above, `num3` has a value of **undefined**.

We can also pass more arguments than expected:

```js live
function print(num1,num2,num3){​
  console.log(num1);​
  console.log(num2);​
  console.log(num3); 
}​

print(1, 2, 3, 4, 5)​;
```

In this example, 4 and 5 are going to be ignored.

[/slide]

[slide hideTitle]

# Hoisting​

Variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code​.

```js live
console.log(num); 

var num;​

num = 6;​
```

Since only declarations are hoisted​, the above example returns `undefined`.

[/slide]

[slide hideTitle]

# Hoisting Variables ​

In JavaScript, we can use variables before they have been declared:

```js live
city = 'London'; // Assigning 'London' to city

console.log(city); // Printing city to the console

var city; // Declaring city
```

In this example, we assign a value to `city` and output it before declaring it.

Keep in mind that **initializations** are not hoisted:

```js live
console.log(city); // undefined

var city = 'Paris'; // Initializing city with 'Paris'
```

[/slide]

[slide hideTitle]

# Hoisting Functions​

Function declarations are hoisted:

```js live
sayHello(); // Hello!

function sayHello() {​
  console.log("Hello! 🙋");​
};​
```

The same however does not apply to function expressions:

```js live
myFunc(); // TypeError: myFunc is not a function

var myFunc = function() {
  console.log('This will not be printed 🙁');
};
```

[/slide]

[slide hideTitle]

# What is an Object?​

An object is a reference data type, a ​collection of key-value pairs, called fields.

JavaScript is based around objects and everything, including functions, can be regarded as an object.

We define a JavaScript object with an object literal:

```js
let student = {​
  firstName: "Patricia",​
  lastName: "Williams",​
  age: 34​
};​

console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);
```

In this example, we create a `student` object with three properties: `firstName`, `lastName`, and `age`.

[/slide]

[slide hideTitle]

# Variables Holding References​

The in-memory value of a reference type is the ​
reference itself (a memory address)​:

```js live
let x = {name: 'Mark'};​

let y = x;​

y.name = "Mark";​

console.log(x.name);
```

[/slide]

[slide hideTitle]

# Object Properties​

A property of an object can be explained as a ​
variable that is attached to the object​.

Object properties are basically the same as ordinary ​
JavaScript variables, except for the attachment to ​
objects​.

[/slide]

[slide hideTitle]

# Object Keys and Values​

```js live
let address = { street: 'Champs-Élysées', number: '259' };

let keys = Object.keys(address);​

console.log(keys); 

if (address.hasOwnProperty('street')) {​
  console.log(address.street); 
}​
```

[/slide]

[slide hideTitle]

# For-in Loop​

The `for-in` loop iterates a specified variable over all the ​enumerable properties of an object​:

```js live
​let users = {
  1: 'annedavis82', 
  2: 'barbara_m2634', 
  3: 'elijah.593'
};​

for (const key in users) {​
  console.log(`users.${key} = ${users[key]}`);​
}​
```

In this example we print information about all enumerable properties of the `users` object.

[/slide]

[slide hideTitle]

# For-of Loop​

The **for-of** statement creates a loop iterating over iterable objects​:

```js live
let obj = {
  a: 1, 
  b: 2, 
  c: 3
};

for (const key of Object.keys(obj)) {
  console.log(`obj.${key} = ${obj[key]}`);
}
```

In this example, we print the keys and values of each `obj` property.

[/slide]
