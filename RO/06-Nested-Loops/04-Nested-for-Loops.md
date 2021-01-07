[slide]
# Nested for Loops

[vimeo-video]
[stream language="EN" videoId="488090349/1e2b80201d" default /]
[stream language="RO" videoId="488090349/1e2b80201d"  /]
[/video-vimeo]

Nested for-loops are statements that consist of several for loops located inside each other 

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

Here is an example of 3 `for` loops nested in one another: 
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
[/slide]

[slide]
# Example

[vimeo-video]
[stream language="EN" videoId="488090388/9cb36b2bd2" default /]
[stream language="RO" videoId="488090388/9cb36b2bd2"  /]
[/video-vimeo]

Here is an example JavaScript program:
```js live
let rows = 3;
let columns = 2;

for (let r = 0; r <= rows; r++) {
    console.log(`row = ${r}`);

    for (let c = 0; c < columns; c++) {
        console.log(`  columns = ${c}`);
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
## Input
- 5
## Output
- \*
- \*\*
- \*\*\*
- \*\*\*\*
- \*\*\*\*\*
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
*
**
***
****
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Triangle of Stars

[vimeo-video]
[stream language="EN" videoId="488090539/2eacc8e193" default /]
[stream language="RO" videoId="488090539/2eacc8e193"  /]
[/video-vimeo]

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
## Input
- 5
## Output
- \*
- \*\*
- \*\*\*
- \*\*\*\*
- \*\*\*\*\*
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
*
**
***
****
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
