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

The most used numeric data type​ in JavaScript is Number.

It can represent both Integers and floating-point numbers.

This type has three additional values: +Infinity, -Infinity, and NaN, short for "**N**ot **a** **N**umber"

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

The lack of support for floating-point numbers enables to store far larger integers, as compared to `Number`.

## `Symbol`

Symbol is a unique and immutable primitive value​.

It is often used as a key of an Object property.

## Data Structures​

Further in this lesson, we will learn what JavaScript Objects and Functions are, and how to use them.

[/slide]

[slide hideTitle]

# Variable Values​

There are three ways to declare variables​ in JavaScript

## `let` 

The `let` keyword allows us to declare block-level variables. 

```js
// num is not visible here

for (let num = 0; num < 53; num++) {
  // num is only visible here
}

// num is not visible here

```

The declared variable is available from the block it is enclosed in.

## `const` 

Variable declared with `const` cannot be modified​ once they are assigned.

Similar to `let`, they available only from the enclosing block.

## `var` 

`var` defines a variable in the lexical scope regardless of block scope​.

[/slide]

[slide hideTitle]

# Dynamic Typing​

Variables in JavaScript are not directly associated with any particular value type​.

Any variable can be assigned (and re-assigned) values of all types​.

[/slide]

[slide hideTitle]

# Comparison Operators​

| Operator | Notation in JS |
|---|---|
| EQUAL value EQUAL value and type | == === |
| NOT EQUAL value NOT EQUAL value/type | != !== |
| Greater than | > |
| Greater than OR EQUAL | >= |
| LESS than | < |
| LESS than OR EQUAL | <= |

[/slide]

[slide hideTitle]

# Comparison Operators ​

```js
console.log(1 == '1');    // true​

console.log(1 === '1');   // false​

console.log(3 != '3');    // false​

console.log(3 !== '3');   // true​

console.log(5 < 5.5);     // true​

console.log(5 <= 4);      // false​

console.log(2 > 1.5);     // true​

console.log(2 >= 2);      // true​

console.log(5 ? 4 : 10);  // 4​
```

[/slide]

[slide hideTitle]

# Functions​

A function is a named list of instructions (statements and expressions)​.

It takes parameters as input and return a result​, based on the inner logic and the passed input.

Function names and parameters use camel case​: `myFunction`

Contrary to languages like Java and C#, the opening bracket `{` stays at the same line​:

```js
function printStars(count) {​
  console.log("*".repeat(count));​
}​

printStars(10);​
```

[/slide]

[slide hideTitle]

# Declaring Functions​

There are **three** ways to declare functions in JS:

## Function declaration​

```js
function walk() {​
  console.log("walking");​
}​
```

## Function expression​

```js
let walk = function (){​
  console.log("walking");​
}
```

## Arrow functions​

```js
let walk = () => {​
  console.log("walking");​
}​
```

[/slide]

[slide hideTitle]

# Parameters​

You can instantiate parameters with no value​:

```js live
function foo(a,b,c){​
  console.log(a);​
  console.log(b);​
  console.log(c); 
}​

foo(1,2)​
```

The unused parameters are ignored​:

```js live
function foo(a,b,c){​
  console.log(a);​
  console.log(b);​
  console.log(c);​
}​

foo(1,2,3,6,7)​;
```

[/slide]

[slide hideTitle]

# Hoisting​

Variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code​.

```js
console.log(num); 

var num;​

num = 6;​
```

Since only declarations are hoisted​, the above example returns `undefined`.

[/slide]

[slide hideTitle]

# Hoisting Variables ​

```js live
num = 6;​

console.log(num);

var num;​
```

[/slide]

[slide hideTitle]

# Hoisting Functions​

```js live
run(); // running​

function run() {​

    console.log("running");​

};​
```

[/slide]

[slide hideTitle]

# What is an Object?​

An object is a collection of fields, and a field is an ​
association between a name (or key) and a value​

Objects are a reference data type ​

You define (and create) a JavaScript object with an object literal:

```js
let person = {​

    firstName: "John",​

    lastName: "Doe",​

    age: 50​

};​
```

[/slide]

[slide hideTitle]

# Variables Holding References​

The in-memory value of a reference type is the ​
reference itself (a memory address)​:

```js live
let x = {name: 'John'};​

let y = x;​

y.name = "John";​

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
let course = { name: 'JS Core', hall: 'Open Source' };​

let keys = Object.keys(course);​

console.log(keys);  

if (course.hasOwnProperty('name')) {​

    console.log(course.name); 

}​
```

[/slide]

[slide hideTitle]

# For-in Loop​

The `for-in` loop iterates a specified variable over all the ​enumerable properties of an object​:

```js live
​let obj = {a: 1, b: 2, c: 3};​

for (const key in obj) {​

  console.log(`obj.${key} = ${obj[key]}`);​

}​
```

[/slide]

[slide hideTitle]

# For-of Loop​

The **for-of** statement creates a loop iterating over iterable objects​:

```js live
let obj = {a: 1, b: 2, c: 3};​

for (const key of Object.keys(obj)) {​

  console.log(`obj.${key} = ${obj[key]}`);​

}​
```

[/slide]
