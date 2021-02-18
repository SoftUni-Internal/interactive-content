[slide hideTitle]
# Pool Day
[code-task title="Pool Day" taskId="pb-java-exam-Pool-day" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
It's hot and sunny outside so you decides to go to the swimming pool with your friends. 

Your task is to write a program that calculates the amount that should be paid. 

**Every person should pay an entrace fee.** 

You should keep in mind that **an umbrella is enough for two people** and only **75% of the group wants sunbeds**. 

When calculating the number of umbrellas and sunbeds, their number should be **rounded up to the next integer**.

## Input
You will receive **4 lines of input from the console**: 
- The number of people - **an integer** in the range [1... 100]
- The entrance fee for one person - **a real number** in the range [0.00... 50.00]
- The price for a single sunbed - **a real number** in the range [0.00... 50.00]
- The price for one umbrella - **a real number** in the range [0.00... 50.00] 

## Output
The output should consist of one line:
- "\{total price\} euro" 

The result must be formatted to **two decimal places**. 

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 21 | 254.10 euro | 21 people \* 5.50 = 115.50 euro |
| 5.50 | | 75% of 21 people are 16 -> 16 * 4.40 = 70.40 euro |
| 4.40 | | 50% of 21 people are 11 -> 11 * 6.20 = 68.20 euro |
| 6.20 | | The final: 115.50 + 70.40 + 68.20 = 254.10 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
21
5.50
4.40
6.20
[/input]
[output]
254.10 euro
[/output]
[/test]
[test]
[input]
32
5
2
4
[/input]
[output]
272.00 euro
[/output]
[/test]
[test]
[input]
123
23
2
5
[/input]
[output]
3325.00 euro
[/output]
[/test]
[test]
[input]
666
6
6
6
[/input]
[output]
8994.00 euro
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
3.00 euro
[/output]
[/test]
[test]
[input]
34
2.4
2.2
1.6
[/input]
[output]
166.00 euro
[/output]
[/test]
[test]
[input]
46
24
23.4
23.6
[/input]
[output]
2465.80 euro
[/output]
[/test]
[test]
[input]
49
20.20
13.10
5.60
[/input]
[output]
1614.50 euro
[/output]
[/test]
[test]
[input]
88
22.22
11.11
33.33
[/input]
[output]
4155.14 euro
[/output]
[/test]
[test]
[input]
23
43
23
1.3
[/input]
[output]
1418.60 euro
[/output]
[/test]
[test]
[input]
100
50
50
50
[/input]
[output]
11250.00 euro
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
