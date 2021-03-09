// sectionId: "Javascript::Programming-Basics::-Exam-Preparation::Problem-05"
# Problem 5: TV Series Budget
[slide hideTitle]

# TV Series Budget

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="TV Series Budget" taskId="js-pb-exam-preparation-TV-Series-Budget" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function budget(input) {
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
You were hired by a TV company to create a program, which calculates whether it is possible for their customers to purchase some of their TV series. 

Some of the series have a discount:

- **Thrones**: 50\%
- **Lucifer**: 40\%	
- **Protector**: 30\%
- **TotalDrama**: 20\%
- **Area**: 10\%

## Input
You receive the following elements from the console:
- Budget: Floating-point in the range \[10.0...100.0\]
- Count of series "**n**": int in the range \[1...10\]

For each series you receive two elements:
- Name of the series: String
- Price: Floating-point number in the range \[1.0..15.0\]

## Output
Print one line to the console:

- If your budget is **greater than or equal** to the **price of the series**: 

"**You bought all the series and have** \{**money left**\}$ **left.**"

- If your budget is **less** than the **price of the series**: 

"**You need** \{**money needed**\}$ **more to buy the series!**"

The result must be **formatted** to the second digit after the decimal point.

## Example
| **Input** | **Output** |
| --- | --- |
|budget([10, 3, 'Thrones', 5, 'Riverdale', 5, 'Gotham', 2])| You bought all the series and have 0.50$ left.|
|budget([25, 6, 'Teen Wolf', 8, 'Protector', 5, 'TotalDrama', 5,'Area', 4, 'Thrones', 5, 'Lucifer', 9])|You need 2.00$ more to buy the series!|

[hints]

[hint]
After receiving the budget and the series count, determine whether the series in the input have a discount.
Then, calculate the price for each series.
[/hint]
[hint]
Calculate the price for all of the series and check if you can buy them.
[/hint]

[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
budget([10, 3, 'Thrones', 5, 'Riverdale', 5, 'Gotham', 2])
[/input]
[output]
You bought all the series and have 0.50$ left.
[/output]
[/test]
[test open]
[input]
budget([25, 6, 'Teen Wolf', 8, 'Protector', 5, 'TotalDrama', 5,'Area', 4, 'Thrones', 5, 'Lucifer', 9])
[/input]
[output]
You need 2.00$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([25, 2, 'Thrones', 6, 'Lucifer', 5])
[/input]
[output]
You bought all the series and have 19.00$ left.
[/output]
[/test]
[test]
[input]
budget([15, 3, 'Protector', 8, 'TotalDrama', 6, 'Area', 5])
[/input]
[output]
You bought all the series and have 0.10$ left.
[/output]
[/test]
[test]
[input]
budget([50, 2, 'Lord of the rings', 40, 'Gotham', 10])
[/input]
[output]
You bought all the series and have 0.00$ left.
[/output]
[/test]
[test]
[input]
budget([24, 4, 'Gotham', 11, 'Thrones', 5, 'Lucifer', 9, 'Unkown', 4])
[/input]
[output]
You bought all the series and have 1.10$ left.
[/output]
[/test]
[test]
[input]
budget([5, 2, 'Area', 12, 'Legendarie', 48])
[/input]
[output]
You need 53.80$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([10, 4, 'Thrones', 8, 'Lucifer', 5, 'Stoned', 4, 'MK', 12])
[/input]
[output]
You need 13.00$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([5, 4, 'Legends', 5, 'Gotham', 4, 'Lucifer', 12, 'Thrones', 4])
[/input]
[output]
You need 13.20$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([5, 2, 'Thrones', 5, 'Scooby-Doo', 2.50])
[/input]
[output]
You bought all the series and have 0.00$ left.
[/output]
[/test]
[test]
[input]
budget([14.67, 3, 'Golden age', 2.47, 'Rush hours series', 15, 'Unknown', 1.45])
[/input]
[output]
You need 4.25$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([100, 4, 'Area', 15, 'Legendary', 10, 'Teen wolf', 10, 'Breaking bad', 15,])
[/input]
[output]
You bought all the series and have 51.50$ left.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
