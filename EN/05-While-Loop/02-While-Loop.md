// sectionId: "Javascript::Programming-Basics::While-Loop::While-Loop"

[slide hideTitle]
# While Loop

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-8-9-10-While-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming, the "**while**" **loop** is used when we want to **repeat** the execution of a certain logic while a condition is in effect. 

By **"condition"**, we understand every **expression** that returns `true` or `false`. 

When **the condition** is **wrong**, the while loop is **interrupted**, the program **continues** to execute the remaining code after the loop. 

[image assetsSrc="05-use-case-while.png" /]

The while loop looks like this:
```js
while (condition) {
  loop body;
}
```

In the code example above, the condition is any **expression that returns a Boolean result** - `true` or `false`. 

It determines how long the loop body will be repeated and it is called "loop condition". 

In this example, the "loop body" is the code executed at each iteration of the loop, i.e. whenever the input condition is true.

In the while loop, firstly the Boolean expression is evaluated and if it is `true`, the sequence of operations in the body of the loop is executed. 

Then again the input condition is checked and if it is `true` again, the body of the loop is executed. 

All this is repeated again and again **until at some point the conditional expression returns value** `false`.

[/slide]

[slide hideTitle]
# Problem with Solution: Decreasing Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-12-Solution-Decreasing-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Decreasing Numbers" taskId="pb-js-while-loop-Decreasing-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function decreasingNumbers (input) {
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
Create a program, which prints all the numbers from a given input in decreasing order:

* You receive a number from the console
* Print the numbers starting from the given input up to 1 (**inclusive**)

# Example
  | **Input** | **Output** |
| --- | --- |
|decreasingNumbers(4)| 4 |
||3 |
||2 |
|| 1|
| decreasingNumbers(3)| 3 |
|| 2 |
|| 1 |

[/task-description]
[tests]
[test]
[input]
decreasingNumbers(5)
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[test]
[input]
decreasingNumbers(4)
[/input]
[output]
4
3
2
1
[/output]
[/test]
[test]
[input]
decreasingNumbers(3)
[/input]
[output]
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide hideTitle]
# Problem with Solution: Sequence 2k + 1

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-14-Solution-Sequence-2k+1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sequence 2k + 1" taskId="pb-js-while-loop-Sequence-2k" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence(input) {
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

Create a program, which prints all numbers **smaller than** and **equal to** a given number **n**:

- You receive a number **n**

- Stick to the following rules when printing: **1, 3, 7, 15, 31, …, n** assuming that each next number equals the **previous number * 2 + 1**.

# Example
  | **Input** | **Output** |
| --- | --- |
|sequence(8)| 1 |
||3 |
||7 |
|sequence(15)| 1 |
|| 3 |
|| 7 |
|| 15 |

[/task-description]
[tests]
[test]
[input]
sequence(3)
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

