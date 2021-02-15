// sectionId: "Javascript-Programming-Basics-Conditional-Exam-Preparation-Problem-04

[slide hideTitle]
# Problem 4: Cinema Income

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema Income" taskId="js-pb-exam-preparation-Cinema-Income" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
# Description

You have been hired by a cinema to write a program that calculates whether the cinema hall is full and how much will the profit be.

You are going to receive the count of seats in the hall and on the next console lines until the command `Movie time!` Is entered, you will get a number of newly arriving viewers.

If the number of people currently entering the hall can be divided by 3 without a remainder, there is $5 discount on the total price.

If there are no more free seats in the hall, the program must stop reading input from the console.

If the number of entering viewers, exceeds the number of seats left in the hall, it should be considered full and the program should finish.

## Input
Read from the console:

- First element: the hall capacity – whole number in the range  \[50... 150\]

- On each of the next element until the command is  `Movie time!`:
	- Number of people entering the cinema: whole number in the range  \[1… 15\]

## Output
First, print on of these lines:

- If you have received the command `Movie time!`: 

`There are {seats left} seats left in the cinema.`

- If there are no more free seats in the hall: 

`The cinema is full.`

- Afterwards, print: 

`Cinema income - {income}$`

## Example
| **Input** | **Output** |
| --- | --- |
|`['60', '10', '6', '3', '20', '15', 'Movie time!']`| There are 6 seats left in the cinema.|
||Cinema income - 255$|

**Comments**

The hall's capacity is 60 seats. 

The next element is the number of people that have entered the hall: 10. 

The price that they will pay is `10 * 5 = 50$`. 

After that we receive that 6 people enter the hall and 6 can be divided by 3, so they pay `5$` less. 

We continue until we receive the command `Movie time!` and then we print a suitable output.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
140
15
15
10
5
6
7
8
9
Movie time!
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
150
15
15
15
15
15
10
10
10
Movie time!
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
50
10
15
15
10
9
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
100
15
15
15
15
15
15
15
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
120
10
10
10
10
10
10
10
10
10
10
10
10
Movie time!
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
50
15
15
10
6
3
3
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
100
15
3
6
9
12
15
10
Movie time!
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
50
15
15
10
9
9
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
120
10
15
3
6
9
12
15
Movie time!
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
