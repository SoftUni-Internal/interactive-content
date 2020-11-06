[slide]
# Nested while Loops
The use of nested `while` loops is very similar to the one of the `for`.

Here is the syntax in JS:
```js
while (condition) {
  // Outer Loop 
  while (condition) {
    // Inner Loop
    
    // Statements
  }
}
```

# Example

```js live
let i = 0;
let n = 5;
while (i < n) {
  console.log(`Value of i: ${i}`);
  let j = 1;
  i++;

  while (j < n)
  {
    console.log(`  Value of j: ${j}`);
    j++;
  }
}
```
[/slide]

[slide]
# Problem: Triangle of Stars with While
[code-task title="Triangle of Stars with While" executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
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
# Solution: Triangle of Stars with While
[code-task title="Triangle of Stars with While" executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
[code-editor language=javascript]
```
function triangleOfStars(input) {
  let height = Number(input.shift());
  let row = 1;
  while (row <= height) {
    let col = 1;

    let rowLine = '';
    while (col <= row) {
      rowLine += '*';
      col++;
    }

    row++;
    console.log(rowLine);
  }
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
