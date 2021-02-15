// sectionId: "Javascript-Programming-Basics-Conditional-For-Loop-Infinity-Loops"

[slide hideTitle]
# Infinite Loops

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-30-32-infinite-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Infinite loops can **repeat a block of code an unlimited number of times.** 

Usage in Programming:

* They are widely used in game development for drawing the game environment.

* For drawing animations. 

* In web servers, as they run permanently.

```js
for ( ; ; ) {
  console.log("Hello World");
}
// You can skip the initialization, condition and the increment
```
[/slide]


[slide hideTitle]
# Problem with Solution: Sum Numbers Until 0

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-34-solution-sum-numbers-until-zero-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Numbers Until 0" taskId="pb-js-for-loop-Sum-Numbers-Until-0" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumNumbers(nums) {
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {return code(input.map(Number))}
```
[/code-adapter]
[task-description]
# Description
Write a function to process numbers from the input parameters and print their sum until 0 is reached.


# Example
| **Input** | **Output** |
| --- | --- |
|`[5, 3, 2, 0]`| Sum = 5 |
||Sum = 8 |
||Sum = 10 |
||Good bye |

[/task-description]
[tests]
[test]
[input]
5
3
2
0
[/input]
[output]
Sum \= 5
Sum \= 8
Sum \= 10
Good bye
[/output]
[/test]
[test]
[input]
6
4
3
0
[/input]
[output]
Sum \= 6
Sum \= 10
Sum \= 13
Good bye
[/output]
[/test]
[test]
[input]
9
7
5
0
[/input]
[output]
Sum \= 9
Sum \= 16
Sum \= 21
Good bye
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


