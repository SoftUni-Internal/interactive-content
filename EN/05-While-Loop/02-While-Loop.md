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
# Problem: Sequence 2k + 1

[vimeo-video]
[stream language="EN" videoId="487120652/4dbc030699" default /]
[stream language="RO" videoId="487120652/4dbc030699"  /]
[/video-vimeo]



[code-task title="Sequence 2k + 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program that prints all **numbers ≤ n** of the series: **1, 3, 7, 15, 31, …,** assuming that each next number = **previous number * 2 + 1**.


[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
1
3
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Sequence 2k + 1

[vimeo-video]
[stream language="EN" videoId="487120683/99149d6f3f" default /]
[stream language="RO" videoId="487120652/4dbc030699"  /]
[/video-vimeo]


[code-task title="Sequence 2k + 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence(input) {
  let k = 1;
  
  while(k <= input){
    console.log(k);
    k = k * 2 + 1;
  }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

Write a program that prints all **numbers ≤ n** of the series: **1, 3, 7, 15, 31, …,** assuming that each next number = **previous number * 2 + 1**.

# Solution:

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

[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
1
3
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
