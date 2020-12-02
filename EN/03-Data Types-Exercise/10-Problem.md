[slide hideTitle]
# Problem: Poke Mon
[code-task title="Poke Mon" taskId="java-fund-05-Data Types-Exercise-problem-10" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
A Poke Mon is a special type of pokemon which likes to Poke others. But at the end of the day, the Poke Mon wants to keeps **statistics**, about how many pokes it has managed to make.

The Poke Mon pokes his target, and then proceeds to poke another target. The **distance between his targets reduces his poke power**.

You will be given the **poke power** the Poke Mon has, **N** – an integer.

Then you will be given the **distance between the poke targets**, **M** – an integer.

Then you will be given the **exhaustionFactor Y** – an integer.

Your task is to start **subtracting M from N until N becomes less than M**, i.e. the Poke Mon does not have enough power to reach the next target. 

**Every time you subtract M from N that means you’ve reached a target** and poked it successfully. COUNT how many targets you’ve poked – you’ll need that count.

The Poke Mon becomes gradually **more exhausted**. **If N becomes equal to EXACTLY 50 % of its original value, you must divide N by Y**, if it is POSSIBLE. This DIVISION is between integers.

If a division is not possible, you should NOT do it. Instead, you should continue subtracting.

After dividing, you should **continue subtracting** from N, until it becomes less than M.

When N becomes less than M, you must take what has remained of N and the count of targets you’ve poked, and print them as output.

NOTE: When you are calculating percentages, you should be PRECISE at maximum.

Example: 505 is NOT EXACTLY 50 % from 1000, its 50.5 %.

### Input/ Constraints
-	On the first line you will receive **N** – an integer.
-	On the second line you will receive **M** – an integer.
-	On the third line you will receive **Y** – an integer.

### Output
-	On the first line print **what has remained of N**, after subtracting from it.
-	On the second line print the **count of targets**, you’ve managed to poke

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | 1 |
| 2 | 2 |
| 3 | |

**Comments**
- N = 5, M = 2, Y = 3.
- We start subtracting M from N.
- N – M = 3. 1 target poked.
- N – M = 1. 2 targets poked.
- N < M.
- We print what has remained of N, which is 1.
- We print the count of targets, which is 2.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
2
3
[/input]
[output]
1
2
[/output]
[/test]
[test]
[input]
10
5
2
[/input]
[output]
2
1
[/output]
[/test]
[test]
[input]
1000
45
2
[/input]
[output]
10
22
[/output]
[/test]
[test]
[input]
100
19
1
[/input]
[output]
5
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
