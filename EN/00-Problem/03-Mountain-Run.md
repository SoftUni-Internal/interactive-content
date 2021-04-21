# Problem: Mountain Run
[slide hideTitle]
# Mountain Run
[code-task title="Mountain Run" taskId="pb-java-exam-Pool-day3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
It is hot and sunny outside so you decide to go to the swimming pool with your friends. 

Your task is to create a program that calculates the amount that should be paid for entry to the pool. 

**Every person should pay an entrace fee.** 

You should keep in mind that **an umbrella can provide shade for two people** and only **75% of the group would want sunbeds**. 

When calculating the number of umbrellas and sunbeds, their number should be **rounded up to the next integer**.

## Input
You will receive **4 lines of input**: 
- The number of people - **an integer** in range [1 ... 100]
- The entrance fee per person - **a real number** in range [0.00 ... 50.00]
- The price for a sunbed - **a real number** in range [0.00 ... 50.00]
- The price for an umbrella - **a real number** in range [0.00 ... 50.00] 

## Output
The output should consist of one line:
- "\{**total price**\} **euro**" 

The result must be formatted up to **the second decimal place**. 

## Example
| **Input** | **Output** |
| --- | --- | --- |
| 21 | 254.10 euro | 
| 5.50 | | 
| 4.40 | | 
| 6.20 | | 
[hints]
[hint]
Calculate the initial entrance fee for all the people.
[/hint]
[hint]
Determine how many of them will want a sunbed and calculate the price for all the sunbeds.
[/hint]
[hint]
Note that 1 umbrella can be used by 2 people. Don't forget that when calculating the number of umbrellas and sunbeds, their number should be rounded up to the next integer.
[/hint]
[hint]
Determine the final price after adding the umbrellas and sunbeds fees to the entrance fee.
[/hint]
[/hints]
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
