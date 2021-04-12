# Problem 2: The Lift

[slide hideTitle]
# The Lift

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/06.JS-Fundamentals-Exam-Prep-2/EN/the-lift-problem-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="The Lift" taskId="js-fundamentals-examPreparation-2-The-Lift" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function lift(input) {
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
Write a function that checks for **empty seats on a lift.**

Each of the cabins of the lift can fit no **more than 4 people.**

If a cabin is full, you should direct the people to the next one with available seats.

## Input

* On the first line, you will receive the number of people waiting in line to get on the lift


* On the second line, you will receive the current state of the lift - a string of numbers "(0-4)" each number representing the number of people in each next cabin, separated by an empty space


## Output

When you run out of empty seats, or if there are no more people on the queue, you should print out one of the following messages:

* If there are no more people queueing but there are some seats left on the lift:

"**There is room for more passengers!**"

Followed by:

"\{**the state of each cabin, separated by ' '**\}"

* If there are people left on the queue but no more seats available:

"**The lift is full.** \{**people**\} **people currently in line.**"

Followed by:

"\{**the state of each cabin, separated by ' '**\}"

* If the lift is full and there are no more people waiting to get in, you should just print out the state of each cabin separated by a single space

## Example One

| **Input** | **Output** |
| --- | --- |
|lift([15, '0 0 0 0'])| There is room for more passengers! |
||4 4 4 3 |

[hints]
[hint]
First state: 4 0 0 0 \-\> 11 people left
[/hint] 
[hint]
Second state: 4 4 0 0 \-\> 7 people left
[/hint] 
[hint]
Third state: 4 4 4 0 \-\> 3 people left
[/hint] 
[/hints] 

## Example Two

| **Input** | **Output** |
| --- | --- |
|lift([20, '0 2 0'])|The lift is full. 10 people currently in line.|
||4 4 4|

[hints]
[hint]
First state - 4 2 0 \-\> 16 people left
[/hint] 
[hint]
Second state - 4 4 0 \-\> 14 people left
[/hint] 
[hint]
Third state - 4 4 4 \-\> 10 people left, but there are no more empty seats
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
lift([15, '0 0 0 0'])
[/input]
[output]
There is room for more passengers!
4 4 4 3
[/output]
[/test]
[test open]
[input]
lift([20, '0 2 0'])
[/input]
[output]
The lift is full. 10 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
lift([10, '0 2 0 1 3 0 0 0'])
[/input]
[output]
There is room for more passengers!
4 4 4 1 3 0 0 0
[/output]
[/test]
[test]
[input]
lift([10, '4 4 4 4 4 4 4 4 1 4 4 4'])
[/input]
[output]
The lift is full. 7 people currently in line.
4 4 4 4 4 4 4 4 4 4 4 4
[/output]
[/test]
[test]
[input]
lift([20, '0 0 4'])
[/input]
[output]
The lift is full. 12 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
lift([2, '0'])
[/input]
[output]
There is room for more passengers!
2
[/output]
[/test]
[test]
[input]
lift([14, '0 2 0 1 3'])
[/input]
[output]
4 4 4 4 4
[/output]
[/test]
[test]
[input]
lift([15, '0 0 0 0 0 0'])
[/input]
[output]
There is room for more passengers!
4 4 4 3 0 0
[/output]
[/test]
[test]
[input]
lift([20, '0 2 0'])
[/input]
[output]
The lift is full. 10 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
lift([20, '0 0 4'])
[/input]
[output]
The lift is full. 12 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
lift([18, '0 2 0 1 3 4'])
[/input]
[output]
The lift is full. 4 people currently in line.
4 4 4 4 4 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
