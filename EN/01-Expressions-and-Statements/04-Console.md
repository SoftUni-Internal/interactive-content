
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
# Printing and Formatting Text and Numbers

## Log Variables on the Console
The console is useful for testing purposes

The **`console.log()`** method writes a message to the console:
```js
let firstNum = 10;
let secondNum = 5;
console.log(firstNum + secondNum); // 15
```

## Formatting
JavaScript allows us to format floating-point numbers.

In the following example we format the number to 2 digits after the decimal point:
```js
function calculateSquareArea(input) {
  let a = Number(input);
  let area = a * a;
  console.log(area.toFixed(2));
}
```

## Using the Dollar String Interpolation
We can format text in JS using also the following $ syntax. It provides simplified text formatting.

Еnclosed by the back-tick (**\` \`**) character instead of double or single quotes

May contain placeholders which are indicated by the dollar sign and curly braces (**`${expression}`**):
```js
let name = "John"; 
console.log(`Hi, ${name}`);
```

The `$` prefix before a string in JS enables the so called **"string interpolation"**: replacing all expressions, staying in curly brackets `{ }` in the text with their values.
[/slide]

[slide]
# Reading User Input
Use functions:
```js
function printNum (number) {
   console.log(number);
}
```

Invoke the function by name
```js
printNum(5);  // 5
printNum(10); //10
```

By default, the **input** is **text** – a text line, read from the console.
- After you read a text from the console, additionally, you can **parse the text** to an number by `Number()`.
- If parsing to a number is not done, **each number** will simply be **text**, and we **cannot do** arithmetic operations with it.

# Example: Home Town
Let's write a program that asks the user for their home town and prints the text `"I am from {homeTown}!"`.

```js
function example(homeTown) {
  console.log(`I am from ${homeTown}!`);
}
```

In this case the `{homeTown}` expression is replaced with the value of the input `homeTown`. 

If we enter **"Sofia"**, the output will be as follows:
```
I am from Sofia!
```
[/slide]

[slide]
# Reading Numbers
In order to read an  **number** from the console, we have to **declare a variable** and use the standard command for **reading a text line** from the system console and after that **convert the text line into a number** using `Number(text)`:

```js
function example(input){
  let num = Number(input);
}
```
The above line of JS code **reads a number** from the first line on the console.

Try to write a wrong number, for example **"hello"**. 

You will receive `NaN` which is the acronym for **Not a number**.

# Example: Calculating a Square Area
This code demonstrates how we can calculate the square area by the given length of the side:
```js
function example(input){
    let a = Number(input);
    let area = a * a;
    console.log(`Square area = ${area}`);
  }
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
Write a **function**, which, reads a user input: **name**, from the console and prints "Hello, \{name\}", where {**name**} is the **user input**.

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
Write a **function**, which, reads a user input: **name**, from the console and prints "Hello, \{name\}", where {**name**} is the **user input**.

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
# Concatenating Text and Numbers
Besides for summing up numbers, the operator `+` is also used for **joining pieces of text** (concatenation of two strings one after another). 

In programming, joining two pieces of text is called **"concatenation"**. 

Here is how we can concatenate a text with a number by the `+` operator:

```js live
let firstName = "John";
let lastName = "Doe";
let age = 19;
let str = firstName + " " + lastName + " @ " + age;
console.log(str);
```
There is another way of concatenating strings using the `concat()` method.
```js live
let str1 = 'Hello';
let str2 = 'JS';

console.log(str1.concat(' ', str2));

console.log(str2.concat(', ', str1));
```

# Examples: Concatenating Text and Numbers
Here is another **example** of concatenating text and numbers:
```js live
let a = 1.5;
let b = 2.5;
let sum = "The sum is: " + a + b;
console.log(sum);
```

Did you notice **something strange**? Maybe you expected the numbers `a` and `b` to be summed? 

Actually, the concatenation works from right to left and the result above is absolutely correct. 

If we want to sum the numbers, we have to use **brackets**, in order to change the order of execution of the operations:
```js live
let a = 1.5;
let b = 2.5;
let sum = "The sum is: " + (a + b);
console.log(sum);
```

[/slide]