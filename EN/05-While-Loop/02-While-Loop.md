[slide]
# While Loop

[vimeo-video]
[stream language="EN" videoId="487120555/61828bfd47" default /]
[stream language="RO" videoId="487120555/61828bfd47"  /]
[/video-vimeo]



In programming the `while` **loop** is used when we want to **repeat** the execution of a certain logic while a condition is in effect. 

By **"condition"**, we understand every **expression** that returns `true` or `false`. When **the condition** is **wrong**, the while loop is **interrupted**, the program **continues** to execute the remaining code after the loop. 
[image assetsSrc="05-use-case-while.png" /]
The while loop looks like this:
```js
while (condition) {
  loop body;
}
```

In the code example above, condition is any **expression that returns a Boolean result** – `true` or `false`. 

It determines how long the loop body will be repeated and is called `loop condition`. 

In this example the `loop body` is the programming code executed at each iteration of the loop, i.e. whenever the input condition is true.

In the while loop, firstly the Boolean expression is evaluated and if it is `true`, the sequence of operations in the body of the loop is executed. 

Then again the input condition is checked and if it is `true` again, the body of the loop is executed. 

All this is repeated again and again **until at some point the conditional expression returns value** `false`.

# Example: Sequence of Numbers 2k+1
Write a program that prints all **numbers ≤ n** of the series: **1, 3, 7, 15, 31, …,** assuming that each next number = **previous number * 2 + 1**.

Here is how we can solve the problem:
- We create a num variable for the current number to which we assign an initial **value of 1**.
- For a loop condition, we put **the current number <= n**.
- In **the body of the loop**: we print the value of the current number and increase the current number by using the formula from the problem's description.

Here is a sample implementation of this idea:
```js
let n = Number(input.shift());
let num = 1;
while (num <= n) {
  console.log(num);
  num = 2 * num + 1;
}
```
[/slide]

[slide]
# Problem: Decreasing Numbers

[vimeo-video]
[stream language="EN" videoId="487120584/cf3fbb855b" default /]
[stream language="RO" videoId="487120584/cf3fbb855b"  /]
[/video-vimeo]


[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function decreasingNumbers (input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number from the console
* Prints the numbers starting from the number to 1 (**inclusive**)

# Example
  | **Input** | **Output** |
| --- | --- |
|4| 4 |
||3 |
||2 |
|| 1|

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Decreasing Numbers

[vimeo-video]
[stream language="EN" videoId="487120633/4307d54296" default /]
[stream language="RO" videoId="487120633/4307d54296"  /]
[/video-vimeo]


[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function decreasingNumbers (input) {
  let inputNumber = Number(input.shift());
  
  while (inputNumber >= 1) {
    console.log(inputNumber);
    inputNumber--;
  }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number from the console
* Prints the numbers starting from the number to 1 (**inclusive**)
# Example
  | **Input** | **Output** |
| --- | --- |
|4| 4 |
||3 |
||2 |
|| 1|
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide]
# Problem: Numbers in Range


[code-task title="Numbers in Range" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersInRange (input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it isn't - it reads a **new one**
* If it is - **prints the number** and the program stops

# Example
  | **Input** | **Output** |
| --- | --- |
|\-10| 50 |
|101||
|50| |



[/task-description]
[tests]
[test]
[input]
-10
101
60
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Numbers in Range
[code-task title="Numbers in Range" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersInRange (input) {
  let num = Number(input.shift());
    while (num < 1 || num > 100){
      num = Number(input.shift());
    }
    console.log(num);
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it isn't - it reads a **new one**
* If it is - **prints the number** and the program stops

# Example
  | **Input** | **Output** |
| --- | --- |
|\-10| 50 |
|101||
|50| |

[/task-description]
[tests]
[test]
[input]
-10
101
60
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
