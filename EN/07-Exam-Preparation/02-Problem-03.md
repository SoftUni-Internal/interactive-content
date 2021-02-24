// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-03"

[slide hideTitle]
# Problem 3: Cinema

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema" taskId="js-pb-exam-preparation-Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinema(name, consumables, tickets) {
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
For the upcoming premieres of three highly expected productions, a local cinema has hired you to create a piece of software that calculates the price, which their clients have to pay, depending on the movie and the offer they have chosen.

|\- | **John Wick**      | **Star Wars** | **Jumanji**   |
|:---:    | :---:       |    :----:   |   :---:     |
| Drink | 12$ | 18$ | 9$ |
| Popcorn | 15$ | 25$ | 11$ |
| Menu | 19$ | 30$ | 14$ |

Create a program, which calculates what is the total price to be paid by the customer. 

There are also promotional discounts available for two of the movies:

- If the chosen movie is "**Star Wars**" and at least four tickets are bought, there is a 30\% family discount.

- If the chosen movie is "**Jumanji**" and exactly 2 tickets are bought, there is 15\% discount for two.

## Input
As input you will receive 3 arguments:

- A string, representing the name of the movie: "**John Wick**", "**Star Wars**" or "**Jumanji**"

- A string, representing consumables: "**Drink**", "**Popcorn**" or "**Menu**"

- A number, representing the number of tickets: Int in the range \[1… 30\]

## Output

Print one line on the console: "**Your bill is** \{**total price**\}$"

 * The price must be formatted to the second digit after the decimal point.

## Example
| **Input** | **Output** |
| --- | --- |
|cinema(['John Wick', 'Drink', 6])| Your bill is 72.00$|
|cinema(['Star Wars', 'Menu', 1]) | Your bill is 30.00$| 


[hints]

[hint]
Depending on what movie and drink have been chosen, determine the ticket price.
[/hint]

[hint]
Check if there will be a discount and calculate the total price.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cinema(['John Wick', 'Drink', 6])
[/input]
[output]
Your bill is 72.00$
[/output]
[/test]
[test open]
[input]
cinema(['John Wick', 'Popcorn', 11])
[/input]
[output]
Your bill is 165.00$
[/output]
[/test]
[test]
[input]
cinema(['John Wick', 'Drink', 23])
[/input]
[output]
Your bill is 276.00$
[/output]
[/test]
[test]
[input]
cinema(['John Wick', 'Menu', 8])
[/input]
[output]
Your bill is 152.00$
[/output]
[/test]
[test]
[input]
cinema(['Star Wars', 'Drink', 10])
[/input]
[output]
Your bill is 126.00$
[/output]
[/test]
[test]
[input]
cinema(['Star Wars', 'Popcorn', 3])
[/input]
[output]
Your bill is 75.00$
[/output]
[/test]
[test]
[input]
cinema(['Star Wars', 'Menu', 1])
[/input]
[output]
Your bill is 30.00$
[/output]
[/test]
[test]
[input]
cinema(['Jumanji', 'Drink', 2])
[/input]
[output]
Your bill is 15.30$
[/output]
[/test]
[test]
[input]
cinema(['Jumanji', 'Popcorn', 1])
[/input]
[output]
Your bill is 11.00$
[/output]
[/test]
[test]
[input]
cinema(['Jumanji', 'Menu', 3])
[/input]
[output]
Your bill is 42.00$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
