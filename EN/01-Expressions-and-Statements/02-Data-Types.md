// sectionId: "Javascript::Programming-Basics::Expressions-and-Statements::Data-Types"

# Data Types and Ranges of Variables

[slide hideTitle]
# Data Types

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-11-12-What-are-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are six primitive data types:

* Boolean - true or false
* Null
* Undefined
* Number - `1, 2, 4.5, -2`
* String - `Hello, World!`
* Symbol (new in ECMAScript 6)
* BigInt

```js
const isValidated = true; // boolean data type represent one of two values - true or false
```

```js
const number = null; // null data type represents empty value
```

```js
let firstName;
console.log(firstName); // returns undefined because data is not assigned
```

```js
const number1 = 15; // integer number
const number2 = 3.433; // floating number
```

```js
const name = "George" // strings represent text
```

```js
let name = Symbol("Peter");
let name2 = Symbol("Peter");
// name == name2 -> false      
// symbols are guaranteed to be unique. Every symbol have different value
```

```js
const value1 = 900723149151234998n; // we use BigInt if we need to represent bigger value than number can store
```

Everything else is an **object** type.

U will cover **object** types later.
[/slide]

[slide hideTitle]
# Data Types are Dynamic


[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-13-13-demo-Data-types-are-dynamic-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In JavaScript data types are dynamic.

A single variable can be used to hold different data types:

```js

let x = 5;   // x is Number
x = "John";  // x is String
x = true;  // x is Boolean
```

Data types set ranges of values with similar characteristics.

The are characterized by:

* **Name**

* **Size** (memory usage) - Example: 4 bytes

* **Default value** - Example: 0
[/slide]

[slide hideTitle]
# Naming Conventions

In computer programming, a naming convention is a set of **rules** for choosing the name to be used for variables.

In JS the convention for naming variables is **camelCase**. 

There are other naming conventions which are used in different languages such as **PascalCase** and  **Snake case**.

**camelCase** combines words by:

* Indicating the separation of the words with a single capitalized letter

* Removing all spaces:

```js
let userLoginCount;
```

**PascalCase** combines words by:

* Capitalizing each word along with the first one

* Removing all spaces:

```js
let UserLoginCount;
```

**Snake case** is another naming convention, which combines words by:

* Using an underscore as a separator of the words `_`
* Removing all spaces
* Each element's initial letter usually lowercased within the compound
* The first letter either upper or lowercase:

```js
let users_count;
let first_name;
```

[/slide]
