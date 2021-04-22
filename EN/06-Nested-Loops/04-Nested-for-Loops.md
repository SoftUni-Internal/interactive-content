// sectionId: "Javascript::Programming-Basics::Nested-Loops::Nested-For-Loops"

[slide hideTitle]
# Nested For-Loops

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-17-18-nested-for-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Nested **for-loops** are statements that consist of several **for-loops** located inside each other 

**Nested for-loops** are used:

* To execute an **action**, which **executes** multiple **actions**
* To make more **complex** calculations and variations

The syntax for a **nested for-loop in JS** is as follows:
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

[slide hideTitle]
# Example

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-19-nested-for-loops-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[slide hideTitle]
# Problem with Solution: Triangle of Stars

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-21-solution-triangle-of-stars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Triangle of Stars" taskId="pb-js-nested-loops-Triangle-of-Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Create a program, which prints a triangle of stars with a given size:

* You will receive the **height** of a triangle from the console

* Print the **triangle of stars** to the console

# Example
| **Input** | **Output**| 
| --- | --- |
| triangleOfStars(5) | \* |
| | \*\* |
| | \*\*\* |
|  | \*\*\*\* |
| | \*\*\*\*\* |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
triangleOfStars(5)
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
[/output]
[/test]
[test]
[input]
triangleOfStars(6)
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
triangleOfStars(8)
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

