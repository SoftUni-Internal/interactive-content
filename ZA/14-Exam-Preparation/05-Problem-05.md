[slide]
# Problem 05
[code-task title="Problem-05" taskId="27-07-05" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are hired by a TV company to write a program that calculate whether it is possible for customers to purchase the desired series. 

You have a budget and number of series that the user will want to purchase.

Each series has a title and price.

Some of the series have a discount:
- Thrones – 50%
- Lucifer – 40%	
- Protector – 30%
- TotalDrama – 20%
- Area – 10%

## Input
You receive from the console:
- Budget - real number in the range [10.0… 100.0]
- Count series - n – whole number in the range [1… 10]

For each series you receive two lines:
- Name of the series - string
- Price for a series - real number in the range [1.0… 15.0]

## Output
Print one line on the console:
- If your budget is greater than or equal to the price of the series: "You bought all the series and left with \{money left\}$"
- If your budget is less than the price of the series: "You need \{money needed\}$ more to buy the series!"

The result must be formatted to two digits after the decimal point.

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 10 | You bought all the series and left with 0.50$ | You receive budget – 10$ and count of series - 3. |
| 3 | | The first series is Thrones with price 5$, which has 50% discount from the price 5 - 50% = 2.50$. |
| Thrones | | The second series is Riverdale, which does not have a discount on the price. |
| 5 | | The third series also does not have a discount. |
| Riverdale | | Price of series is 2.50 + 5 + 2 = 9.50$. Your budget is bigger than the price of series, so you can buy them.|
| 5 | | |
| Gotham | | |
| 2 | | |
[/task-description]
[code-io /]
[tests]
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