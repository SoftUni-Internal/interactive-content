# Functions Overview

[slide hideTitle]

# Functions

Functions are named blocks of code. 

They can be declared with a name `function functionName()` but we can also write anonymous functions, which can even be stored in variables.

The main advantage of using functions is that you write the code once, and use it as many times as you need without having to rewrite the same lines over and over again.

Functions help organize code into reusable chunks that are easy to understand and easy to debug.

Here is the syntax of a function:

```js
function functionName([param1, param2, paramN]){  
 //code  
}  
```

Function names should be written in **camelCase**.

You can have functions with zero, one, or more parameters (arguments).

By using parameters your function can utilize different input data, process that data, and output a result.

```js
function sayMyName(name) {
  console.log("Your name is: ", name);
}
sayMyName("Akeem");
```

Functions can also return a result.

```js live
function convertInches(inches) {
  return inches * 2.54;
}
let inches = 10;
console.log(convertInches(inches));
```

[/slide]

[slide hideTitle]

# Declaring Functions

Functions can be declared in several ways.

- Function declaration:

```js live
function fly() {
  console.log("I'm flying!");
}
```
This is the most typical way to write a function and it strongly resembles the syntax in other languages.

You define a function, give it a name and add zero or more parameters to work with.

The code is then placed in a code block surrounded by curly brackets.

- Function expression:

```js live
const run = function() {
  console.log("I am running!");
}
```

You can also store a function into a constant.

When using a function expression you can store a function into a variable and use it to call the function.

Functions declared in this way do not need to have a name and can be anonymous as in the previous example.


- Arrow function:

```js live
const saySomething = () => {
  console.log("I said something...");
}
```

Arrow functions are similar to function expressions but they are even shorter to write because the function keyword is not required, and the function is anonymous.

[/slide]

[slide hideTitle]

# Parameters

When writing JavaScript functions with several parameters, the additional parameters will be ignored if no value is passed to them.


```js live
function multiplyNumbers(a, b, c) {
  console.log(a * b * c);
}
multiplyNumbers(2, 3);
```

The result of the above operation is `NaN` or Not a Number. 

This is because we did not supply a third parameter and JavaScript gave it a value of `undefined` by default.

Notice how the program execution did not stop.

In languages such as Java or C# you would be able to start the program, but JavaScript gives you more flexibility and it is ultimately up to the programmer to ensure functions receive the necessary parameters to operate properly.

We also never defined the type of data we will be passing.

This is another thing to watch for as any type of parameter will be accepted but your function will not work unless it is programmed to operate with that particular type.

If you pass more parameters than defined in the function declaration they are ignored with no consequence.

```js live
function multiplyNumbers(a, b, c) {
  console.log(a * b * c);
}
multiplyNumbers(2, 3, 5, 10, 6000);
```

Only the first three parameters were used and the last two were completely ignored.

[/slide]

[slide hideTitle]

# Default Function Parameter Values

Sometimes you might want to pass default parameters to your functions.

This is usually done when there is an exact value that is essential for the function to work properly.

```js live
function convertInches(inches, value = 2.45) {
  return inches * value;
}
let inches = 10;
console.log(convertInches(inches));
```
When a function has a default value it can be called without any parameters.

```js live
function printCopyright(year = 2021) {
  console.log("Copyright ", year)
}
printCopyright();
```
You could also overwrite the default parameter:

```js live
function printCopyright(year = 2021) {
  console.log("Copyright ", year)
}
printCopyright("Noble Co. LLC");
```


[/slide]

[slide hideTitle]

# Problem with Solution: Largest Number
[code-task title="Largest Number" taskId="js-syntax-functions-statements-largest-number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function largestNumber() {
    // Write your code here
};
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

Write a function that takes **three number arguments** as input and finds the **largest** of them. 

Print the following text to the console:  '**The largest number is {number}.**'.

The **input** comes as **three number arguments** passed to your function.

The **output** should be printed to the console.



## Examples
| **Input** | **Output** |
| --- | --- |
| largestNumber(5, -3, 16) | The largest number is 16. |
| largestNumber(-3, -5, -22.5) | The largest number is -3.|


Write a function that receives three number arguments.

Declare a variable named result that will keep the result.

[image assetsSrc="syntax-hint-01.png" /]


Make several checks to find out the largest of the three numbers, starting with num1.

[image assetsSrc="syntax-hint-02.png" /]


Do the same for the other numbers.

[image assetsSrc="syntax-hint-03.png" /]


Print the result to the console.

[image assetsSrc="syntax-hint-04.png" /]



[/task-description]
[code-io /]
[tests]
[test open]
[input]
largestNumber(5, -3, 16)
[/input]
[output]
The largest number is 16.
[/output]
[/test]
[test open]
[input]
largestNumber(-3, -5, -22.5)
[/input]
[output]
The largest number is -3.
[/output]
[/test]
[test]
[input]
largestNumber(1, 2, 3)
[/input]
[output]
The largest number is 3.
[/output]
[/test]
[test]
[input]
largestNumber(1, -5, 10)
[/input]
[output]
The largest number is 10.
[/output]
[/test]
[test]
[input]
largestNumber(200, 199, 4)
[/input]
[output]
The largest number is 200.
[/output]
[/test]
[test]
[input]
largestNumber(-5, -1, -15)
[/input]
[output]
The largest number is -1.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Circle Area
[code-task title="Circle Area" taskId="js-syntax-functions-statements-circlearea" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function circleArea(radius) {
    // Write your code here
};
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

Write a function that takes **a single argument** as input.

**Check the type**  of the input argument. 

If it is a **number**, assume it is the radius of a circle and **calculate the circle area**. Print the **area** **rounded** to **the second decimal place**.

If the argument type is **NOT** a number, print the following text to the console:

- "We can not calculate the circle area, because we receive a {type of argument}."

The **input** comes as a **single argument** passed to your function.

The **output** should be printed to the console.



## Examples
| **Input** | **Output** |
| --- | --- |
| circleArea(5) | 78.54 |
| circleArea('name') | We could not calculate the circle area because we received a string. |


Write a function that receives a single argument.

Declare a variable named **result** that will keep your result.


[image assetsSrc="syntax-hint-05.png" /]

Check the type of the input argument with the `typeof` operator.

[image assetsSrc="syntax-hint-06.png" /]

If the type is equal to 'number', calculate the circle area and print it to the console rounded to the second decimal place. 

To do this, use the toFixed() method.

The Math.pow() function returns the base to the exponent power. 

You can find more information about calculating the area of a circle [here](https://en.wikipedia.org/wiki/Circle).

[image assetsSrc="syntax-hint-07.png" /]

If the type is **NOT** a '**number**', print the following message to the console:

```js
else {
    console.log(`We could not calculate the circle area because we received a ${inputType}.`)
}
```


[/task-description]
[code-io /]
[tests]
[test open]
[input]
circleArea(5)
[/input]
[output]
78.54
[/output]
[/test]
[test open]
[input]
circleArea('name')
[/input]
[output]
We could not calculate the circle area because we received a string.
[/output]
[/test]
[test]
[input]
circleArea(3.5)
[/input]
[output]
38.48
[/output]
[/test]
[test]
[input]
circleArea(10)
[/input]
[output]
314.16
[/output]
[/test]
[test]
[input]
circleArea([1, 2, 3])
[/input]
[output]
We could not calculate the circle area because we received a object.
[/output]
[/test]
[test]
[input]
circleArea(\{ "name": "pesho" \})
[/input]
[output]
We could not calculate the circle area because we received a object.
[/output]
[/test]
[test]
[input]
circleArea(true)
[/input]
[output]
We could not calculate the circle area because we received a boolean.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: String Length
[code-task title="String Length" taskId="js-syntax-functions-statements-stringlength" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function findStringLength(string1, string2, string3) {
    // Write your code here
};
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
Write a JS function that takes **three string arguments** as input. 

Calculate the **sum** of the **length** of the **strings** and the **average length** of the strings **rounded down** to the nearest integer.

The **input** comes as **three string arguments** passed to your function.

The **output** should be printed to the console on two lines.



## Examples
| **Input** | **Output** |
| --- | --- |
| findStringLength('chocolate', 'ice cream', 'cake') | 22 |
| | 7 |
| **findStringLength('pasta', '5', '22.3')** | **10** |
|  | 30 |


Write a function that receives three string arguments.

Declare two variables named **sumLength** and **averageLength** that will keep the mathematical results.

Calculate the length of the strings using the **length property**.

[image assetsSrc="syntax-hint-09.png" /]

Calculate the sum of the three lengths. 

[image assetsSrc="syntax-hint-10.png" /]

Calculate the **average length** of the strings **rounded down** to the nearest integer. Use the `Math.floor()` function.

[image assetsSrc="syntax-hint-11.png" /]

Print the **sumLength** and the **averageLength** to the console, each on a separate line.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
findStringLength('chocolate', 'ice cream', 'cake')
[/input]
[output]
22
7
[/output]
[/test]
[test open]
[input]
findStringLength('pasta', '5', '22.3')
[/input]
[output]
10
3
[/output]
[/test]
[test]
[input]
findStringLength('pesho', 'stamat', 'blah')
[/input]
[output]
15
5
[/output]
[/test]
[test]
[input]
findStringLength('dsa', 'dddd')
[/input]
[output]
7
2
[/output]
[/test]
[test]
[input]
findStringLength('djskl', 'dsadasdsadas', 'dsfdfdfdfdf')
[/input]
[output]
28
9
[/output]
[/test]
[test]
[input]
findStringLength('vfvv', 'dsadsa', 'eewewewe')
[/input]
[output]
18
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]