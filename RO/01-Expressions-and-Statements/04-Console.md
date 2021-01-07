
[slide]
# Console (Terminal)
Generally, the **system console** represents a text terminal, which means that it accepts and visualizes just **text** without any graphical elements like buttons, menus, etc. 

It usually looks like a black colored window like this one:

[image assetsSrc="00.Console-example.png" /]

In most operating systems, the **console** is available as a standalone application on which we write console commands. 

It is called a **Command Prompt** in Windows, and a **Terminal** in Linux and Mac. 

The console runs console applications. They read text from the command line and print text on the console. 

We are going to learn programming mostly through creating **console applications**.

VS Code has its own console, which we are going to use to read input and print output:
[image assetsSrc="expressions-and-statements-console.png" /]
[/slide]

[slide]
# Log Variables on the Console

[vimeo-video]
[stream language="EN" videoId="486855670/d118990c90" default /]
[stream language="RO" videoId="486855670/d118990c90"  /]
[/video-vimeo]

The console is useful for testing purposes

The `console.log()` method writes a message to the console:

```js live
let firstNum = 10;
let secondNum = 5;
console.log(firstNum + secondNum);
```

[/slide]

[slide]
# Reading User Input

[vimeo-video]
[stream language="EN" videoId="486855737/188e2502e0" default /]
[stream language="RO" videoId="486855737/188e2502e0"  /]
[/video-vimeo]

In software systems, the user input could come from many sources, like User Interface (UI) controls.

You have a text box that says `please type your username and type your password`, then you click the login button. 

This is a way to receive user's input.

Programs can also take the user data (input) from some rest API or as parameter in a function.
[/slide]

[slide]
# Functions and Parameters

[vimeo-video]
[stream language="EN" videoId="486855856/06a253a610" default /]
[stream language="RO" videoId="486855856/06a253a610"  /]
[/video-vimeo]

Use functions and Invoke the function by name 

``` js live
function printNum (number) {
   console.log(number);
}

//Invoke
printNum(5);
printNum(10);
```

By default, the **input** is **text** – a text line, read from the console.
- After you read a text from the console, additionally, you can **parse the text** to an number by `Number()`.

- If parsing to a number is not done, **each number** will simply be **text**, and we **cannot do** arithmetic operations with it.

# Example: Home Town
Let's write a program that asks the user for their home town and prints the text `I am from {homeTown}!`.

```js live
function town(homeTown) {
  console.log(`I am from ${homeTown}!`);
}

town("Buccuresht");
```

In this case the `{homeTown}` expression is replaced with the value of the input `homeTown`.

When we enter **Buccuresht**, the output will be as follows: `I am from Buccuresht!` 

[/slide]

[slide]
# Passing Multiple Parameters

[vimeo-video]
[stream language="EN" videoId="486855964/c2b23e3efb" default /]
[stream language="RO" videoId="486855964/c2b23e3efb"  /]
[/video-vimeo]

You can pass **multiple parameters to a function.** 

We have a function which **receives two parameters:** `firstNum` and `secondNum` and prints the sum of that calculation to the console. 

Here `firstNum` and `secondNum` exists only **in the function body.**

``` js live
function printSum(firstNum, secondNum) {
   console.log(firstNum + secondNum);
}

printSum(5, 10);
```

If we try to access firstNum outside of the function body, we'll get an error.

``` js live
function printSum(firstNum, secondNum) {
   console.log(firstNum + secondNum);
}

printSum(5, 10);
console.log(firstNum);
```
[/slide]

[slide]
# Formatting Output

[vimeo-video]
[stream language="EN" videoId="486856070/5392c79701" default /]
[stream language="RO" videoId="486856070/5392c79701"  /]
[/video-vimeo]

JavaScript allows us to format floating-point numbers.

In the following example we format the number to 2 digits after the decimal point by using the `toFixed(2)` method:

```js live
function calculateSquareArea(input) {
  let a = Number(input);
  let area = a * a;
  console.log(area.toFixed(2));
}

calculateSquareArea(5);
```

# Using the Dollar String Interpolation
We can format text in JS using also the following $ syntax. It provides simplified text formatting.

Еnclosed by the back-tick (**\` \`**) character instead of double or single quotes

May contain placeholders which are indicated by the dollar sign and curly braces (`${expression}`):

```js live
let name = "John"; 
console.log(`Hi, ${name}`);
```

The `$` prefix before a string in JS enables the so called **string interpolation**: replacing all expressions,which are placed in curly brackets `{ }` in the text with their values. 

[/slide]

[slide]
# Reading Numbers

[vimeo-video]
[stream language="EN" videoId="486856186/d812421fbc" default /]
[stream language="RO" videoId="486856186/d812421fbc"  /]
[/video-vimeo]

In order to read a **number** from the console, we have to **declare a variable** and use the standard command for **reading a text line** from the system console and after that **convert the text line into a number** using `Number(text)`:

```js live
function example(input){
  let num = Number(input);

  console.log(num);
}

example('25');
```

The above line of JS code **reads a number** from the first line on the console.

If we try to assign a non-numeric value to this variable, for example `Hello`, we will receive `NaN` which is the acronym for **Not a number**. 

# Example: Calculating a Square Area
This code demonstrates how we can calculate the area of a square by given length of its side: 

```js live
function example(input){
    let a = Number(input);
    let area = a * a;
    console.log(`Square area = ${area}`);
  }

example('3');
```

Here is how the program would work if we had a square with a side length equal to 3: 
[image assetsSrc="expressions-and-statements-example.png" /]
[/slide]


[slide]
# Problem: Greeting
[code-task title="Greeting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sayHello (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function, which reads the user input from the console: name and then prints `Hello, {name}`, where `{name}` is the user input.  

## Example
| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter |

[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Solution: Greeting

[vimeo-video]
[stream language="EN" videoId="486856341/87210226f4" default /]
[stream language="RO" videoId="486856341/87210226f4"  /]
[/video-vimeo]

[code-task title="Greeting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sayHello (input) {
  let user = input.shift();
  console.log(`Hello, ${user}`);
}
```
[/code-editor]
[task-description]
# Description
Write a function, which reads the user input from the console: name and then prints `Hello, {name}`, where `{name}` is the user input.  

## Example
| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter |

[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

