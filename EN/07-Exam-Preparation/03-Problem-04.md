// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-04"
# Problem 4: Cinema Income
[slide hideTitle]
# Cinema Income

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema Income" taskId="js-pb-exam-preparation-Cinema-Income" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinemaIncome(input) {
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

You have been hired by a cinema to create a program, which calculates whether the **cinema hall is full and how much the profit will be**.

You are going to receive the number of seats in the hall and on the next console lines, until the command "**Movie time!**", you will get a number of newly arriving viewers.

**The price for 1 ticket is 5$.**

If the number of people currently entering the hall can be **divided by 3 without a remainder**, there is a 5$ **discount** on the total price.

If there are **no more free seats in the hall**, the program must stop reading input from the console.

If the number of entering viewers exceeds the number of seats left in the hall, it should be considered full and the program should finish.

## Input
You will receive the following elements from the console:

- First element: the hall capacity – Int in the range  \[50...150\]

- On each of the next element until the command is "**Movie time!**":
	- Number of people entering the cinema: Int in the range  \[1...15\]

## Output
First, print one of these lines:

- If you have received the command "**Movie time!**": 

"**There are** \{**seats left**\} **seats left in the cinema.**"

- If there are no more free seats in the hall: 

"**The cinema is full.**"

- Afterwards, print: 

"**Cinema income -** \{**income**\}$"

## Example
| **Input** | **Output** |
| --- | --- |
|cinemaIncome([60, 10, 6, 3, 20, 15, 'Movie time!'])| There are 6 seats left in the cinema.|
||Cinema income - 255$|
|cinemaIncome([140, 15, 15, 10, 5, 6, 7, 8, 9, 'Movie time!']) | There are 65 seats left in the cinema. |
|| Cinema income - 355$|


[hints]

[hint]
Get the hall's capacity. Then calculate how much each group of visitors will pay.
[/hint]
[hint]

If the number of people entering the hall can be divided by 3, apply the discount.
[/hint]
[hint]
Upon receiving the command "**Movie time!**", print the suitable output.
[/hint]

[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cinemaIncome([140, 15, 15, 10, 5, 6, 7, 8, 9, 'Movie time!'])
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
cinemaIncome([150, 15, 15, 15, 15, 15, 10, 10, 10, 'Movie time!'])
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
cinemaIncome([50, 10, 15, 15, 10, 9,])
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
cinemaIncome([100, 15, 15, 15, 15, 15, 15, 15,])
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
cinemaIncome([120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 'Movie time!'])
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
cinemaIncome([50, 15, 15, 10, 6, 3, 3])
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
cinemaIncome([100, 15, 3, 6, 9, 12, 15, 10, 'Movie time!'])
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
cinemaIncome([50, 15, 15, 10, 9, 9])
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
cinemaIncome([120, 10, 15, 3, 6, 9, 12, 15, 'Movie time!'])
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
