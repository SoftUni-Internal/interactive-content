# Problem 2: The Lift

[slide]
# Description
Write a program that checks for **empty seats on a lift.**

Each of the cabins of the lift can fit no **more than 4 people.**

If a cabin is full you should direct the people to the next one with available seats.

## Input

* On the first line you, will receive the number of people waiting in line to get on the lift.

* On the second line, you will receive the current state of the lift – a string of numbers `(0-4)` each number representing the number of people in each next cabin, separated by an empty space.

## Output

When you run out of empty seats, or if there are no more people on the queue you should print out one of the following messages:

* If there are no more people queueing but there are some seats left on the lift:

`There is room for more passengers!`

Followed by:
`{the state of each cabin, separated by ' '}`

* If there are people left on the queue but no more seats available:

`The lift is full. {people} people currently in line.`

Followed by:
`{the state of each cabin, separated by ' '}`

* If the lift is full and there are no more people waiting to get in, you should just print out the state of each cabin separated by a single space.


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
|`['15','0 0 0 0 0']`| There is room for more passengers! |
||4 4 4 3 0|

## Comment

* First state: `4 0 0 0` \-\> `11` people left

* Second state: `4 4 0 0` \-\> `7` people left

* Third state: `4 4 4 0` \-\> `3` people left


| **Input** | **Output** |
| --- | --- |
|`['20','0 2 0']`|The lift is full. 10 people currently in line.|
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
There is room for more passengers\!
4 4 4 1 3 0 0 0
[/output]
[/test]
[test]
[input]
10
4 4 4 4 4 4 4 4 1 4 4 4
[/input]
[output]
The lift is full. 7 people currently in line.
4 4 4 4 4 4 4 4 4 4 4 4
[/output]
[/test]
[test]
[input]
20
0 0 4
[/input]
[output]
The lift is full. 12 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
2
0
[/input]
[output]
There is room for more passengers\!
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
There is room for more passengers\!
4 4 4 3 0 0
[/output]
[/test]
[test]
[input]
20
0 2 0
[/input]
[output]
The lift is full. 10 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
20
0 0 4
[/input]
[output]
The lift is full. 12 people currently in line.
4 4 4
[/output]
[/test]
[test]
[input]
18
0 2 0 1 3 4
[/input]
[output]
The lift is full. 4 people currently in line.
4 4 4 4 4 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
