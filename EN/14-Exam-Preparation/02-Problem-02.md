[slide]
# Problem 02
[code-task title="Problem-02" taskId="27-07-02" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
During the lunch break you want to watch an episode from your favorite series. 

Your task is to write a program that will help you determine whether you have enough time to watch the episode. 

In the lunch break you spend time to have lunch and to unwind. 

The time for lunch will be 1/8 of the break time and the time for relaxing will be 1/4 of the break time.

## Input
You receive 3 lines from the console:
- Name of the series - string
- Duration of an episode - whole number in the range [10… 90]
- Duration of the break - whole number in the range [10… 120]

## Output
Print on the console one line:
- If the time is enough to watch the episode: "You have enough time to watch \{name of the series\} and left with \{time left\} minutes free time."
- If the time is not enough: "You don't have enough time to watch \{name of the series\}, you need \{time needed\} more minutes."
    - Round the time up to the nearest whole number.

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| Game of Thrones | You have enough time to watch Game of Thrones and left with 0 minutes free time. | Time for lunch: 96 * 1/8 = 12.0 |
| 60 | | Time to unwind: 96 * 1/4 = 24.0 |
| 96 | | Time left: 96 - 12 - 24 = 60 |
|  | | The time we have left is bigger or equal to the duration of the episode, so we print the suitable output. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Riverdale
57
90
[/input]
[output]
You don't have enough time to watch Riverdale, you need 1 more minutes.
[/output]
[/test]
[test]
[input]
Gotham
45
120
[/input]
[output]
You have enough time to watch Gotham and left with 30 minutes free time.
[/output]
[/test]
[test]
[input]
Arrow
45
60
[/input]
[output]
You don't have enough time to watch Arrow, you need 8 more minutes.
[/output]
[/test]
[test]
[input]
CW
45
51
[/input]
[output]
You don't have enough time to watch CW, you need 14 more minutes.
[/output]
[/test]
[test]
[input]
Lucifer
50
75
[/input]
[output]
You don't have enough time to watch Lucifer, you need 4 more minutes.
[/output]
[/test]
[test]
[input]
Riverdale
45
80
[/input]
[output]
You have enough time to watch Riverdale and left with 5 minutes free time.
[/output]
[/test]
[test]
[input]
Game of thrones
56
90
[/input]
[output]
You have enough time to watch Game of thrones and left with 1 minutes free time.
[/output]
[/test]
[test]
[input]
Lucifer
45
80
[/input]
[output]
You have enough time to watch Lucifer and left with 5 minutes free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]