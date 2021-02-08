# For Loop

[slide hideTitle]
# Real Life Example: Moving Dishes

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-9-10-Real-life-example-Moving-dishes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us say you want to fill the dishwasher with plates.

To do that you will take some of the plates from the pile and you will put them in.

Then you will take some more plates and repeat the action until all the plates in the dishwasher.

This is a loop, you repeat an action until you reach a certain condition.

When you reach that condition, you stop the loop.

[/slide]

[slide hideTitle]
# For Loop

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-11-13-For-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming on many occasions, we need to execute a block of commands multiple times. 

To do that, the so-called loops are used. 

Let us see an example of a for loop that passes sequentially through the numbers from 1 to 10 and prints them to the console. 
```js live
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
```

The block of code can be explained with this use case diagram:

[image assetsSrc="for-loop-use-case.png" /]

The loop starts with the `for` operator and passes through all values for a particular variable in a given range, for example the numbers from 1 to 10 (included), and for each value it performs a series of commands. 

## Syntax: For-Loop 

Upon declaring the loop, you can specify a **start value** and an **end value.** 

The body of the loop is usually enclosed in curly brackets `{ }` and represents a block of one or multiple commands. 

The code block below shows the structure of a `for` loop: 

``` js
for (initialization; condition; update) {
  //loop's body;
}
```

It consists of:

* an **initialization part** for the counter (in the pattern `let i = 0`)

* a **boolean** condition (`i < 10`)

* an expression for **updating** the counter (``i += 1``)

* body of the loop.

In most cases a `for` loop is run between `1` and `n` times (for example from 1 to 10).

The purpose of the loop is to pass sequentially through the numbers 1, 2, 3, …, n and for each of them to perform a particular action.

In the first example, the `i` variable accepts values from 1 to 10 and the **current** value is printed in the body of the loop.

The loop repeats 10 times and each of these repetitions is called an **iteration**.

[/slide]

[slide hideTitle]
# Problem: Print Sum of N Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-14-problem-first-n-numbers-sum-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Sum of N Numbers" taskId="pb-js-for-loop-lab-Print-Sum-of-N-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function printSum (input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads number n from the console
* **Prints** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints** the sum on the console at the end

# Example
  | **Input** | **Output** |
| --- | --- |
|5| 1 |
|| 2 |
|| 3 |
|| 4 |
|| 5 |
|| 15 |

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Print Sum of N Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-15-Solution-Print-Sum-of-N-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function printSum (input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads number n from the console
* **Prints** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints** the sum on the console at the end

# Example
  | **Input** | **Output** |
| --- | --- |
|5| 1 |
|| 2 |
|| 3 |
|| 4 |
|| 5 |
|| 15 |
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Greatest Number

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-16-problem-biggest-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Greatest Number" taskId="pb-js-for-loop-lab-Greatest-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function greatestNumber(n, numbers) {
 // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => code(Number(input.unshift()), input);
```
[/code-adapter]
[task-description]
# Description
Write a program, which: 

* Reads `n`: a number representing the amount of following input numbers 

* Reads n numbers 

* Finds and prints the greatest number 

# Example
| **Input** | **Output** |
| --- | --- |
|`3, ['40', '90', '50']`| 90 |


[/task-description]
[tests]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test  open]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
15
110
40
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
3
30
90
40
[/input]
[output]
90
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Greatest Number

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-17-solution-biggest-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Greatest Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function greatestNumber(n, numbers) {
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => code(Number(input.unshift()), input);
```
[/code-adapter]
[task-description]
# Description
Write a program, which: 

* Reads `n`: a number representing the amount of following input numbers 

* Reads n numbers 

* Finds and prints the greatest number 

# Example
| **Input** | **Output** |
| --- | --- |
|`3, ['40', '90', '50']`| 90 |


[/task-description]
[tests]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
15
110
40
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
3
30
90
40
[/input]
[output]
90
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
