# Problem: Coffee Machine
[slide hideTitle]
# Coffee Machine
[code-task title="Coffee Machine" taskId="pb-java-exam-coffee-machine" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description
Create a program that calculates the cost of drinks that a customer purchases from a coffee machine:

|   | **Without sugar** | **Normal** | **Extra sugar** |
|---|---|---|---|
| Espresso | $0.90 | $1 | $1.20 |
| Cappuccino | $1.00 | $1.20 | $1.60 |
| Tea | $0.50 | $0.60 | $0.70 |

Keep in mind the following discounts:
- There is a 35% discount if the selected drink **does not** contain **sugar**
- There is a 25% discount if **5 or more** cups of Espresso have been purchased
- There is a 20% discount on the total bill, if it **exceeds $15**

The discounts are applied in the order of their description.

## Input
You will receive **3 lines of input**:
- The first line describes the type of drink - **a string**: "**Espresso**", "**Cappuccino**" or "**Tea**" 
- The second line represents the sugar level - **a string**: "**Without**", "**Normal**" or "**Extra**" 
- The third line will specify the number of drinks - **an integer** in range [1 ... 50] 

## Output
Print **a single line** to the console:
- "**You bought** \{**count drinks**\} **cups of** \{**drink**\} **for** \{**total price**\} **dollars.**"
The price must be formatted up to **the second decimal place**.

## Example
| **Input** | **Output** |
| --- | --- |
| Espresso | You bought 10 cups of Espresso for 4.39 dollars. |
| Without |  |
| 10 |  |

[hints]
[hint]
Calculate the total price of the drinks. Then check if there is a discount.
[/hint]
[hint]
If there is a discount for the drink determine how much it is and subtract it from the total price of the drinks.
[/hint]
[hint]
Check if there is any additional discount. 
Finally, determine the final price and print the correct output. Note that the price must be formatted to the second decimal place.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Espresso
Without
10
[/input]
[output]
You bought 10 cups of Espresso for 4.39 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Without
4
[/input]
[output]
You bought 4 cups of Espresso for 2.34 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Normal
20
[/input]
[output]
You bought 20 cups of Espresso for 15.00 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Extra
30
[/input]
[output]
You bought 30 cups of Espresso for 21.60 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Without
7
[/input]
[output]
You bought 7 cups of Cappuccino for 4.55 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Normal
10
[/input]
[output]
You bought 10 cups of Cappuccino for 12.00 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Extra
12
[/input]
[output]
You bought 12 cups of Cappuccino for 15.36 dollars.
[/output]
[/test]
[test]
[input]
Tea
Without
1
[/input]
[output]
You bought 1 cups of Tea for 0.33 dollars.
[/output]
[/test]
[test]
[input]
Tea
Normal
50
[/input]
[output]
You bought 50 cups of Tea for 24.00 dollars.
[/output]
[/test]
[test]
[input]
Tea
Extra
5
[/input]
[output]
You bought 5 cups of Tea for 3.50 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
