// sectionId: "Javascript::Programming-Basics::For-Loop::Infinity-Loops"

[slide hideTitle]

# Infinite Loops

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-30-32-infinite-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Infinite loops can **repeat a block of code an unlimited number of times.**

Usage in Programming:

- They are widely used in game development for drawing the game environment

- For drawing animations

- In web servers, as they run permanently

```js
for (;;) {
  console.log('Hello World');
}
// You can skip the initialization, condition, and the increment
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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```

[/code-adapter]
[task-description]

# Description

Create a program, which sums and prints numbers in an array until the number **0**.

- You will receive an array of numbers

- Go through the array and print the sum for each iteration

- When you reach **0**, print: "**Good bye**"

# Example

| **Input**                | **Output** |
| ------------------------ | ---------- |
| sumNumbers([5, 3, 2, 0]) | Sum = 5    |
|                          | Sum = 8    |
|                          | Sum = 10   |
|                          | Good bye   |

| **Input**   | **Output**  |
| ----------- | ----------- |
| sumNumbers([3, 15, 0])   | Sum = 3    |
|                          | Sum = 18   |
|                          | Good bye   |

[/task-description]
[tests]
[test open]
[input]
sumNumbers([5, 3, 2, 0])
[/input]
[output]
Sum \= 5
Sum \= 8
Sum \= 10
Good bye
[/output]
[/test]
[test open]
[input]
sumNumbers([3, 15, 0])
[/input]
[output]
Sum \= 3
Sum \= 18
Good bye
[/output]
[/test]
[test]
[input]
sumNumbers([6, 4, 3, 0])
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
sumNumbers([9, 7, 5, 0])
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
