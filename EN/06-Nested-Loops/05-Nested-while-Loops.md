// sectionId: "Javascript::Programming-Basics::Nested-Loops::Nested-While-Loops"

[slide hideTitle]
# Nested While-Loops

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-22-23-nested-wihle-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The use of nested **while-loops** is very similar to the one of the "**for**".

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
[/slide]

[slide hideTitle]
# Example

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-24-nested-while-loops-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
let row = 1;
while (row <= 2) {
  console.log(`Row: ${row}`);
  let col = 1;
  while (col <= 3)
  {
    console.log(`  Column: ${col}`);
    col++;
  }
  row++;
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Triangle of Stars with While

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-25-26-solution-triangle-of-stars-with-while-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Triangle of Stars with While" taskId="pb-js-nested-loops-Triangle-of-Stars-with-While" executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
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

* You will receive the **height** of a triangle as input
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



[slide hideTitle]
# Problem with Solution: Sum of Digits Calculator

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-29-solution-sum-of-digits-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of Digits Calculator" taskId="pb-js-nested-loops-Sum-of-Digits-Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
[code-editor language=javascript]
```
function sumOfDigits(inputLines) {
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
Create a program, which processes a sequence of numbers and prints the sum of their digits:

* You will receive an array of numbers as input

* Print the sum of digits for each number: "**Sum of digits =** \{**sum**\}"

* When you reach the **END** command, print: "**Goodbye**"

# Example
| **Input** | **Output** |
| --- | --- |
| sumOfDigits(['157', '99', '5', '438', 'End']) |Sum of digits: 13 |
||Sum of digits: 18|
||Sum of digits: 5|
||Sum of digits: 15|
||Goodbye|

| **Input** | **Output** |
| --- | --- |
| sumOfDigits(['33', '52', 'End']) | Sum of digits: 6 |
||Sum of digits: 7 |
||Goodbye|


[/task-description]
[tests]
[test open]
[input]
sumOfDigits(['157', '99', '5', '438', 'End'])
[/input]
[output]
Sum of digits: 13
Sum of digits: 18
Sum of digits: 5
Sum of digits: 15
Goodbye
[/output]
[/test]
[test open]
[input]
sumOfDigits(['33', '52', 'End'])
[/input]
[output]
Sum of digits: 6
Sum of digits: 7
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['124', '33', '2', '563', 'End'])
[/input]
[output]
Sum of digits: 7
Sum of digits: 6
Sum of digits: 2
Sum of digits: 14
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['24', '312', '3', '543', 'End'])
[/input]
[output]
Sum of digits: 6
Sum of digits: 6
Sum of digits: 3
Sum of digits: 12
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['1234', '212', '4', '343', 'End'])
[/input]
[output]
Sum of digits: 10
Sum of digits: 5
Sum of digits: 4
Sum of digits: 10
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['123', '23', '234', '566', 'End'])
[/input]
[output]
Sum of digits: 6
Sum of digits: 5
Sum of digits: 9
Sum of digits: 17
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['789', '567', '567', '345', 'End'])
[/input]
[output]
Sum of digits: 24
Sum of digits: 18
Sum of digits: 18
Sum of digits: 12
Goodbye
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

