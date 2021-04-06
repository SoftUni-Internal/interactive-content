# Problem: TV Series Budget
[slide hideTitle]
# TV Series Budget

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="TV Series Budget" taskId="java-basics-exam-prep-tv-series-budget" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You are hired by a TV company to create a program that calculates whether it is possible for customers to purchase access to TV series that they would like to watch. 

You receive a budget and the number of series that the user will want to purchase.

Each item has a **title** and a **price**.



There are discounts for some of the titles:
- Thrones - 50%
- Lucifer - 40%	
- Protector - 30%
- TotalDrama - 20%
- Area - 10%

## Input
You will receive the following input from the console:

- Budget - **real** number in range [10.0 ... 100.0]

- Number of series - **integer** number in range [1 ... 10]

For each series, you receive two lines:

- Title of the series - **string**

- Price of the series - **real** number in range [1.0 ... 15.0]

## Output
The output should consist of a single line in the following format:
- If the budget is greater than or equal to the price of the series: **"You bought all the series and left with** \{**money left**\}**$"**
- If the budget is less than the price of the series: **"You need** \{**money needed**\}**$ more to buy the series!"**

The result must be formatted to the second digit after the decimal point.

## Example
| **Input** | **Output** | 
| --- | --- |
| 10 | You bought all the series and left with 0.50$ | 
| 3 | 
| Thrones | 
| 5 | 
| Riverdale | 
| 5 | 
| Gotham | 
| 2 | 

[hints]

[hint]
After receiving the budget and the series count, determine whether some of the received series have a discount.
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
10
3
Thrones
5
Riverdale
5
Gotham
2
[/input]
[output]
You bought all the series and left with 0.50$
[/output]
[/test]
[test]
[input]
25
2
Thrones
6
Lucifer
5
[/input]
[output]
You bought all the series and left with 19.00$
[/output]
[/test]
[test]
[input]
15
3
Protector
8
TotalDrama
6
Area
5
[/input]
[output]
You bought all the series and left with 0.10$
[/output]
[/test]
[test]
[input]
50
2
Lord of the rings
40
Gotham
10
[/input]
[output]
You bought all the series and left with 0.00$
[/output]
[/test]
[test]
[input]
24
4
Gotham
11
Thrones
5
Lucifer
9
Unkown
4
[/input]
[output]
You bought all the series and left with 1.10$
[/output]
[/test]
[test]
[input]
5
2
Area
12
Legendarie
48
[/input]
[output]
You need 53.80$ more to buy the series!
[/output]
[/test]
[test]
[input]
10
4
Thrones
8
Lucifer
5
Stoned
4
MK
12
[/input]
[output]
You need 13.00$ more to buy the series!
[/output]
[/test]
[test]
[input]
5
4
Legends
5
Gotham
4
Lucifer
12
Thrones
4
[/input]
[output]
You need 13.20$ more to buy the series!
[/output]
[/test]
[test]
[input]
5
2
Thrones
5
Scooby-Doo
2.50
[/input]
[output]
You bought all the series and left with 0.00$
[/output]
[/test]
[test]
[input]
14.67
3
Golden age
2.47
Rush hours series
15
Unknown
1.45
[/input]
[output]
You need 4.25$ more to buy the series!
[/output]
[/test]
[test]
[input]
100
4
Area
15
Legendary
10
Teen wolf
10
Breaking bad
15
[/input]
[output]
You bought all the series and left with 51.50$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
