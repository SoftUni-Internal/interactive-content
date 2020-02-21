[slide]
# Problem: Vacation
[code-task title="Vacarion" taskId="ITPE-p-03" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You are given a group of people, type of the group, on which day of the week they are going to stay. 

Calculate how much they have to pay and print that price. 

Use the table below. In each cell is the price for a single person. 

Print: "Total price: {price}". 

Format the price to the second decimal point.

| asd | **Friday** | **Saturday** | **Sunday** |
| 1 | 2 | 3 | 4 |

There are also discounts based on some conditions:
•	Students – if the group is bigger than or equal to 30 people reduce the total price by 15%
•	Business – if the group is bigger than or equal to  100 people 10 of them can stay for free
•	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5% 

You should reduce the prices in that EXACT order

[/task-description]
[code-io /]
[tests]
[test]
[input]
30
Students
Sunday
[/input]
[output]
Total price: 266.73
[/output]
[/test]
[test]
[input]
40
Regular
Saturday
[/input]
[output]
Total price: 800.00
[/output]
[/test]
[test]
[input]
5
Students
Friday
[/input]
[output]
Total price: 42.25
[/output]
[/test]
[test]
[input]
10
Students
Saturday
[/input]
[output]
Total price: 98.00
[/output]
[/test]
[test]
[input]
30
Students
Friday
[/input]
[output]
Total price: 215.47
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
