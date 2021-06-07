[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-37-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- JavaScript is a **dynamic** programming language

- You can change the **type of a variable** or **add** new properties/methods while the program is running

- Data types can be **primitive** or **reference** data types:
    - **primitive** types store the value directly
    - **reference** types store a reference to a memory location

- Declaring variables using `let`, `const`, `var`:

```js
let name = 'Arthur';
```
```js
const dayDuration = 24;
```

```js
var age = 5;
```

- Variables scope - determines where the **variable can be accessed**:
    - global scope - any variable **not inside** a function or a block of code
    - functional scope - variables that **are declared inside** functions
    - block scope - `let` and `const` are visible within the code block they are placed

- Arithmetic operators return a single numerical value (`+`, `-`, `*`, `/`, etc.)

```js
let a = 15;
let b = 5;
let c;
c = a * b;
```
- Comparison operators are used for comparing values (`==`, `===`, `!=`, >, etc.)

- Values can be **truthy** or **falsy** depending on whether they coerce to true or false when evaluated

- `typeof` is used for returning the type of an operand

```js
const val = 5; 
console.log(typeof val);
// number
```

- `instanceof` returns true if the checked object is an **instance** of another specified object

```js
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars instanceof Array);
// Returns true
```

- Functions are a set of instructions that we can name and reuse

- Functions can take 0 or more parameters and return a result

```js
function printStars(count) {
    console.log('*'.repeat(count));
}

printStars(10); //invoking the function
```

- Functions can be declared in three different ways:

```js
//Function declaration
function walk() {
    console.log('walking');
}
```

```js
//Function expression
const walk = function (){
    console.log('walking');
}
```

```js
//Arrow function
const walk = () => {
    console.log('walking');
}
```

- First-class functions are functions that are passed as arguments to other functions

- They are also known as Callback functions

```js
function running() {
    return 'Running';
}

function category(run, type) {
    console.log(run() + ' ' + type);
}
category(running, 'sprint');
//Running sprint
```
- Functions can be nested

```js
function joinWords(word1, word2) {
    function checkLength(word1, word2) {
        return word1.length + word2.length;
    }
    return `New word: '${word1.concat(word2)}',
  length: ${checkLength(word1,word2)}`;
}
console.log(joinWords('one', 'two'));
```

- Hoisting is the process of **moving** all declarations to the top of the scope during compile-time

- Only declarations are hoisted

- Only variables declared with `var` can be hoisted:

```js
num = 6;
console.log(num); // Returns 6
var num;
```
- Functions can also be used before their declaration:

```js
run(); // running
function run() {
    console.log('running');
};
```

## In the next lesson you will learn:

- Arrays
  - accessing elements
  - properties and methods
  - iterating through array elements
- Nested Arrays
  - looping through nested arrays
  - manipulating nested array data

[/slide]
