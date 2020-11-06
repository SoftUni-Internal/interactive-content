[slide]
# Nested for Loops
Statements that consist of several **for loops** located **inside each other**

**Nested for loops** are used:

* To execute an **action**, which **executes** multiple **actions**
* To make more **complex** calculations and variations

The syntax for a **nested for loop in JS** is as follows:
```js
for (variable initialization; condition; increment) {
  // Outer Loop 
  for (variable initialization; condition; increment) { 
    // Inner Loop

    // Statements
  }
}
```
These are 3 `for` loops nested in one another:
```js live
let n = 5;
for (let i = 1; i <= n; i += 3) {
    for (let j = 1; j <= n; j += 3) {
        for (let k = 1; k <= n; k += 3) {
           console.log(`${i}${j}${k}`);
        }
    }
}
```
# Example
Here is an example JavaScript program:
```js live
let a = 3;
let b = 3;

for (let i = 0; i < a; i++) {
    console.log(`i = ${i}`);

    for (let j = 0; j < b; j++) {
        console.log(`  j = ${j}`);
    }
}
```
[/slide]

[slide]
# Problem: Triangle of Stars
[code-task title="Triangle of Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads the **height** of a triangle from the console
* Prints a **triangle of stars**
# Example
  | **Input** | **Output** |
| --- | --- |
|5| \*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\* |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Triangle of Stars
[code-task title="Triangle of Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
  let size = Number(input.shift());
  let result = '';

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }

    result += '\n';
  }
  
  console.log(result);
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads the **height** of a triangle from the console
* Prints a **triangle of stars**

# Example
  | **Input** | **Output** |
| --- | --- |
|5| \*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\* |
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
