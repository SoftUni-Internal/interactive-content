[slide hideTitle]
# Club
[code-task title="Club" taskId="pb-java-exam-Club" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Write code here
  }
}
```
[/code-editor]
[task-description]

## Description
The weather is warming up and the clubs are launching promising offers. 

Create a program that calculates the profit of a club for the evening and checks whether the desired profit is reached.
Keep in mind that **the price of a cocktail is its name's length**. 

If the price of an order is an odd number - there is **a 25% discount** on the price of the order.

# Input
You will receive:
- On the first line – the desired profit of the club - **a real number** in the range [1.00... 15000.00]

On the next lines, you will be receiving two rows until you receive the command **"Party!"** or until the desired profit is reached: 
- The name of the cocktail - **a string** 
- The number of cocktails for the order - **an integer** in the range [1… 50] 

## Output
First, print a single line to the console:

- If you receive the command "Party!":
	- "We need \{money needed\} dollars more."
- If the desired profit is reached:
	- "Target acquired."

Then, print:
- "Club income - \{club's profit\} dollars."

The money must be formatted **to two decimal places**.


## Example
| **Input** | **Output** |
| --- | --- |
| 500 | We need 416.00 dollars more. |
| Bellini | Club income - 84.00 dollars. |
| 6 |  |
| Bamboo |  |
| 7 |  |
| Party! |  |

### Comments
- The goal of the club is to collect 500$.
- The first order is for 6 cocktails Bellini.
- The price of the cocktail is the length of its name - 7. The price of the order is 6 * 7$ -> 42$. Since 42 is an even number, there is no discount.
- The next order is for 7 Bamboo cocktails, its price is 6$. 7 * 6$-> 42$. Again, there is no discount.
- We receive the command "Party!". The program stops.
- The club has a profit of 42 + 42 = 84$. The target is 500$, which means it's not reached. 500 – 84 = 416$ more money are needed.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
500
Bellini
6
Bamboo
7
Party!
[/input]
[output]
We need 416.00 dollars more.
Club income - 84.00 dollars.
[/output]
[/test]
[test open]
[input]
100
Sidecar
7
Mojito
5
White Russian
10
[/input]
[output]
Target acquired.
Club income - 196.75 dollars.
[/output]
[/test]
[test]
[input]
50
Rom
3
Rakia
5
Vesper
9
[/input]
[output]
Target acquired.
Club income - 79.50 dollars.
[/output]
[/test]
[test]
[input]
100
Rakia
5
Whiskey
9
Irish Coffee
5
[/input]
[output]
Target acquired.
Club income - 126.00 dollars.
[/output]
[/test]
[test]
[input]
1000
Irish Coffe
50
Party!
[/input]
[output]
We need 450.00 dollars more.
Club income - 550.00 dollars.
[/output]
[/test]
[test]
[input]
789
Painkiller
20
Party!
[/input]
[output]
We need 589.00 dollars more.
Club income - 200.00 dollars.
[/output]
[/test]
[test]
[input]
100
Bees Knees
23
[/input]
[output]
Target acquired.
Club income - 230.00 dollars.
[/output]
[/test]
[test]
[input]
200
French 75
9
French 75
9
Gimlet
3
Mai Tai
6
Gin Fizz
6
[/input]
[output]
Target acquired.
Club income - 229.50 dollars.
[/output]
[/test]
[test]
[input]
50
Rakia
3
Vodka
16
[/input]
[output]
Target acquired.
Club income - 91.25 dollars.
[/output]
[/test]
[test]
[input]
999
Rum old fashioned
10
Bloody Mary
9
Party!
[/input]
[output]
We need 754.75 dollars more.
Club income - 244.25 dollars.
[/output]
[/test]
[test]
[input]
100
White Lady
9
R
9
Party!
[/input]
[output]
We need 3.25 dollars more.
Club income - 96.75 dollars.
[/output]
[/test]
[test]
[input]
100
Caipirinha
10
[/input]
[output]
Target acquired.
Club income - 100.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
