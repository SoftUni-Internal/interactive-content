[slide]
# Problem 03
[code-task title="Problem-03" taskId="27-07-03" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
For the upcoming premiere of three popular productions a local cinema has hired you to write a software that calculates the price, which the clients have to pay, depending on the movie and the offer they have chosen.

|   | John Wick | Star Wars | Jumanji |
|---|---|---|---|
| Drink | 12$ | 18$ | 9$ |
| Popcorn | 15$ | 25$ | 11$ |
| Menu | 19$ | 30$ | 14$ |

Write a program that calculates the price that has to be paid.

Keep in mind that there are discounts:
- If the chosen movie is "Star Wars" and at least four tickets are bought, there is 30% family discount.
- If the chosen movie is "Jumanji" and the tickets bought are exactly two, there is 15% discount for two.

## Input
You receive 3 lines from the console:
- First line - movie - string: "John Wick", "Star Wars" or "Jumanji"
- Second line - offer - string:"Drink", "Popcorn" or "Menu"
- Third line - count tickets – whole number in the range [1… 30]

## Output
Print one line on the console: "Your bill is \{total price\}$"
 * The price must be formatted to two digits after the decimal point.

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| John Wick | Your bill is 72.00$ | If the movie is Star Wars and popcorn is chosen. |
| Drink | | The price for one ticket is 25$. 4 tickets each 25$ -> 100$. |
| 6 | | For this movie there is 30% discount for 4 or more people. |
|  | | 30% of 100 -> 30$.  |
|  | | 100$ – 30$ -> 70$ is the total price.  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
John Wick
Drink
23
[/input]
[output]
Your bill is 276.00$
[/output]
[/test]
[test]
[input]
John Wick
Popcorn
11
[/input]
[output]
Your bill is 165.00$
[/output]
[/test]
[test]
[input]
John Wick
Menu
8
[/input]
[output]
Your bill is 152.00$
[/output]
[/test]
[test]
[input]
Star Wars
Drink
10
[/input]
[output]
Your bill is 126.00$
[/output]
[/test]
[test]
[input]
Star Wars
Popcorn
3
[/input]
[output]
Your bill is 75.00$
[/output]
[/test]
[test]
[input]
Star Wars
Menu
1
[/input]
[output]
Your bill is 30.00$
[/output]
[/test]
[test]
[input]
Jumanji
Drink
2
[/input]
[output]
Your bill is 15.30$
[/output]
[/test]
[test]
[input]
Jumanji
Popcorn
1
[/input]
[output]
Your bill is 11.00$
[/output]
[/test]
[test]
[input]
Jumanji
Menu
3
[/input]
[output]
Your bill is 42.00$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]