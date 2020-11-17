[slide]
# What is a String?

A string is a type of data that is used to present **text** aand is a **sequence** of characters.

Each symbol has a **position** in the string and when we connect them, **a text is obtained.**

We can take the individual **symbols** from the string.

Here we take the first element of the string and its length.

``` js live
let myString = "Hello JavaScript!";

console.log(myString[0]);
console.log(myString.length);
```

# Strings Are Immutable

But keep in mind that we can only take the individual elements of the string, but we can not change the elements inside the string.

Strings are immutable. 

In this example we try to chache the fourth symbol which is `o`:

``` js live
let myString = "Hello JavaScript!";
console.log(myString);

myString[4] = 'Change fourth symbol!';
console.log(myString);  
```

We know we can change the **data held by a variable**, but we can't change symbols in the string.

# String Interpolation

Replacing **placeholders** with values inside of a string literal is named string **interpolation**. 

In JavaScript, the template literals (strings wrapped in backticks \`\`) and `${expression}` as placeholder perform the string interpolation.

``` js live
let name = "Rick";
let age = 18;
console.log(`Hello, my name is ${name}, I am ${age} years old.`);
```
[/slide]

 [slide]
# Problem: Concantenate names
[code-task title="Problem 1. Concantenate names" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=javascript]
```
function concatNames(input){
let firstName = input[0];
let lastName = input[1];
let delimiter = input[2];

console.log(`${firstName}${delimiter}${lastName}`);
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

- Receive two names as string parameters and a delimiter
- Print the names joined by the delimiter

# Example
  | **Input** | **Output** |
| --- | --- |
|`['John', 'Smith', '->']`| John\-\>Smith |
|`['Jan', 'White', '<->']`|Jan\<\-\>White|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John
\-\>
Smith
[/input]
[output]
John\-\>Smith
[/output]
[/test]
[test]
[input]
John
\-
Smith
[/input]
[output]
John\-Smith
[/output]
[/test]
[test]
[input]
Jan
=
White
[/input]
[output]
Jan=White
[/output]
[/test]
[test]
[input]
Jan
=
White
[/input]
[output]
Jan=White
[/output]
[/test]
[/tests]
[/code-task]
[/slide]