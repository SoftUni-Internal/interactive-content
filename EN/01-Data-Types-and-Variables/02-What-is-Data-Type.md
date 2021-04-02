# Data Types


[slide hideTitle]

# What is a Data Type?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-8-9-10-what-is-a-data-type-examples-of-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Data types inform the computer how much information to read **from memory** purely technically.

In JavaScript we can **change** the content of variables. 

For example, if we have declared a variable as a number, we can easily change its value:

``` js live
let myVar = 5;
console.log(`The number is ${myVar}`);

myVar = 'JavaScript';
console.log(`I love ${myVar}!`);
```

Although we can change a variable's value, it is not a good practice.

Variables in JavaScript **do not have** a type, we can **store** whatever types of data we want, but the data has a type.

In JavaScript, we have **seven primitive** data types and one composite type, also called a **reference type**.

The **primitive** data types are: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and `BigInt`.

The **reference** data types are: `objects` and `arrays`.

[image assetsSrc="data-types-in-js.png" /]

Examples:
``` js
let number = 10;         // Number
let name = 'George';     // String
let array = [1, 2, 3];   // Array
let isTrue = true;       // Boolean
let person = {name: 'George', age: 25}; // Object
let empty = null;        // Null
let unknown = undefined; // Undefined
```
[/slide]


[slide hideTitle]


# Dynamic Typing

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-11-dynamic-typing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Variables in JavaScript are not strictly associated with a particular **value type**.

We can reassign variables of all types:

``` js live
let variable = 15; 
console.log(`My variable is ${typeof(variable)}`)

variable = 'Peter'; 
console.log(`My variable is ${typeof(variable)}`)

variable = false;
console.log(`My variable is ${typeof(variable)}`)
```

[/slide]
