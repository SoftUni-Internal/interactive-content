# Function Variables

[slide hideTitle]

# First-class Functions

Functions in JavaScript can be used as variables for other functions. 

In other words, functions that are passed to other functions as arguments, or returned as a result of a function, are called **First-class** functions.

Passing a function to another function as an argument:

```js live
function calculateResult(num1, num2) {
  return num1 + num2;
}
function printResult(calculate) {
  console.log(calculateResult(52, 300));
}
printResult(calculateResult);
```

A function that we pass to another function is called a **Callback function**.


Returning a function:

```js live
function teleport() {
  return function() {
    console.log("Teleporting to unknown location.")
  }
}
const action = teleport();
action();
```

A function that returns another function, like in the example above is called a **Higher-order Function**.


[/slide]

[slide hideTitle]

# Nested Functions

JavaScript allows function nesting and inner functions can access variables from their parent function.

The functions that are nested inside another function will not be accessible outside of that function.

To understand this better, keep in mind that JavaScript treats functions as variables, so creating a function inside another function changes its scope just as the scope of a variable would change.


```js live
function joinWords(word1, word2) {
  function checkLength(word1, word2) {
    return word1.length + word2.length;
  }
  return `New word: "${word1.concat(word2)}",
  length: ${checkLength(word1,word2)}`;
}
console.log(joinWords('one', 'two'));
```

In the last example, `joinWords()` is **the outer function** or parent function, while `checkLength()` is the **inner function** or child function.

The child function has access to the arguments passed to the parent function (word1, word2) but its scope begins and ends in the parent function, it will not be accessible outside of it.

Attempting to access the inner function outside of the scope of the parent results in a **Reference Error**:

```js live
function joinWords(word1, word2) {
  function checkLength(word1, word2) {
    return word1.length + word2.length;
  }
  return `New word: "${word1.concat(word2)}",
  length: ${checkLength(word1,word2)}`;
}
checkLength('words', 'like');
```
[/slide]

[slide hideTitle]

# Hoisting

Hoisting in real life is the act of raising or lifting something. 

Similarly, hoisting in JavaScript is a mechanism that ensures that a variable or function can be used before declaration.

This does not mean that you do not need to declare it but it can be declared on a line that is further down than and JavaScript will "pull" it to the top so that it can be used.

The benefit of hoisting is that we can use functions anywhere in the code and not just below the line where they are declared. 


[/slide]


[slide hideTitle]

# Hoisting Variables

Variables declarations using the `var` keyword are hoisted:

```js live
x = 10;
console.log(x);
var a;
```

Hoisting only applies to declarations - **assignments are not hoisted**:

```js live
console.log(num); 
num = 6;
```

This example returns `undefined `because only the declaration is hoisted to the top and **the assignment is not**:

```js live
console.log(num); 
var num;
num = 6;
```

Only variables declared with `var` can be hoisted (`let` and `const` cannot).

This is why the below example results in a **Reference Error**:

```js live
length= 354;
console.log(length); 
const length;
```

Hoisting does not change the scope of variables and functions.

If a variable is declared within a function it will only be hoisted to the top of that function and will not be accessible outside of the function.

This will work:

```js live
function speak() {
  words = 'I was hoisted!';
  console.log(words);
  var words;
}
speak();
```

[/slide]

[slide hideTitle]

# Hoisting Functions

Functions can also be called before declaring them.

```js live
walk()
function walk() {
  console.log("Walking briskly...");
}
```

However, **hoisting works only for function declarations** and **will not work** if you write a function using a **function expression**.

```js live
walk()
let walk = function() {
  console.log("Walking briskly...");
}
```
The above results in a **ReferenceError**.

```js live
walk()
var walk = function() {
  console.log("Walking briskly...");
}
```

This will also not work and will result in a **TypeError** because the **walk** function was not hoisted and cannot be invoked.

[/slide]

[slide]
# Problem with Solution: Aggregate Elements
[code-task title="Aggregate Elements" taskId="js-syntax-functions-statements-aggregateelements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function aggregate(array) {
    //Write your code here
}
```
[/code-editor]

[code-adapter]

function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
[/code-adapter]

[task-description]
## Description

Create a program that performs different operations on an array of elements. Implement the following operations:

- **Sum(a)** - calculates the sum of all elements from the input array

- **Sum(1/a) **- calculates the sum of the inverse values (1/a) of all elements from the array

- **Concat(a) **- concatenates the string representations of all elements from the array

The **input** comes as an array of number elements.

The **output** should be printed to the console on a new line for each of the operations.


## Examples
| **Input** | **Output** |
| --- | --- |
| aggregate([1, 2, 3]) | 6 |
| | 1.8333 |
| | 123 |
| **aggregate([2, 4, 8, 16])** | **30** |
|  | 0.9375 |
|  | 24816 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
aggregate([1, 2, 3])
[/input]
[output]
6
1.8333333333333333
123
[/output]
[/test]
[test open]
[input]
aggregate([2, 4, 8, 16])
[/input]
[output]
30
0.9375
24816
[/output]
[/test]
[test]
[input]
aggregate([1, -1, 1, -1, 1, -1]
[/input]
[output]
0
0
1-11-11-1
[/output]
[/test]
[test]
[input]
aggregate([2, 0.5, 0.25, 0.125])
[/input]
[output]
2.875
14.5
20.50.250.125
[/output]
[/test]
[test]
[input]
aggregate([2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 8, 6, 14, 22, 186])
[/input]
[output]
272
4.913926127635806
222222444444861422186
[/output]
[/test]
[/tests]
[/code-task]
[/slide]