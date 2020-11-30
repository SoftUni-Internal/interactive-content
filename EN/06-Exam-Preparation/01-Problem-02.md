[slide]
# Problem 2: The Lift
## Description
Write a program that **finds a place for the tourist on a lift.** 

Every wagon should have a maximum of **4 people on it.**

If a wagon is full you should direct the people to the **next one with space available.**

## Input

* On the first line you, will receive how many people are waiting to get on the lift

* On the second line, you will you will receive the current state of the lift separated by ` ` (empty space).

## Output

**When there is no more available space left on the lift,** or **there are no more people in the queue**, you should print on the console the final state of the lift's wagons separated by ` ` (empty space) and one of the following messages:

* If there are no more people and the lift have empty spots you should print:

`The lift has empty spots!`

`{wagons separated by ' '}`

* If there are still people on the queue and no more available space, you should print:

`There isn't enough space! {people} people in a queue!`

`{wagons separated by ' '}`

* If the lift is full and there are no more people in the queue, you should print only the wagons separated by ` `


[code-task title="The Lift" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples
| **Input** | **Output** |
| --- | --- |
|`['15','0 0 0 0 0']`| The lift has empty spaces! |
||4 4 4 3 0|

## Comment

* First state: `4 0 0 0` \-\> `11` people left

* Second state: `4 4 0 0` \-\> `7` people left

* Third state: `4 4 4 0` \-\> `3` people left


| **Input** | **Output** |
| --- | --- |
|`['20','0 2 0']`| There isn't enough space! 10 people in a queue!|
||4 4 4|

## Comment

* First state - `4 2 0`  \-\> `16` people left

* Second state – `4 4 0`  \-\> `14` people left

* Third state – `4 4 4` \-\> `10` people left, but there're no more waggons.


[/task-description]
[code-io /]
[tests]
[test]
[input]
10
0 2 0 1 3 0 0 0
[/input]
[output]
The lift has empty spots\!
4 4 4 1 3 0 0 0
[/output]
[/test]
[test]
[input]
10
4 4 4 4 4 4 4 4 1 4 4 4
[/input]
[output]
There isn't enough space! 7 people in a queue\!
4 4 4 4 4 4 4 4 4 4 4 4
[/output]
[/test]
[test]
[input]
20
0 0 4
[/input]
[output]
There isn't enough space\! 12 people in a queue\!
4 4 4
[/output]
[/test]
[test]
[input]
2
0
[/input]
[output]
The lift has empty spots\!
2
[/output]
[/test]
[test]
[input]
14
0 2 0 1 3
[/input]
[output]
4 4 4 4 4
[/output]
[/test]
[test]
[input]
15
0 0 0 0 0 0
[/input]
[output]
The lift has empty spots\!
4 4 4 3 0 0
[/output]
[/test]
[test]
[input]
20
0 2 0
[/input]
[output]
There isn't enough space! 10 people in a queue\!
4 4 4
[/output]
[/test]
[test]
[input]
20
0 0 4
[/input]
[output]
There isn't enough space! 12 people in a queue!
4 4 4
[/output]
[/test]
[test]
[input]
18
0 2 0 1 3 4
[/input]
[output]
There isn't enough space! 4 people in a queue\!
4 4 4 4 4 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]