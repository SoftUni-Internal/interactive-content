# Problem: Snowballs

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="425480088" default /]
[stream language="RO" videoId="425478382"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Snowballs
[code-task title="Snowballs" taskId="java-fund-05-Data Types-Exercise-problem-11" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Tony and Andi love playing in the snow and having snowball fights, but they always argue which makes the best snowballs. 

Тhey have decided to involve you in their fray, by making you write a program which **calculates snowball data**, and outputs the best snowball value.

You will receive **N** – an integer, the **number of snowballs being made** by Tony and Andi.

For each snowball you will receive 3 input lines:
-	On the first line you will get the **snowballSnow** – an integer.
-	On the second line you will get the **snowballTime** – an integer.
-	On the third line you will get the **snowballQuality** – an integer.

For each snowball you must calculate its snowballValue by the following formula:
**(snowballSnow / snowballTime) ^ snowballQuality**

At the end you must **print the highest calculated** snowballValue.


### Input/ Constraints
-	On the first input line you will receive N – the number of snowballs.
-	On the next N * 3 input lines you will be receiving data about snowballs. 

### Output
-	As output you must print the **highest calculated snowballValue**, by the formula, specified above. 
- The output format is: 
\{snowballSnow\} : \{snowballTime\} = \{snowballValue\} (\{snowballQuality\})

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | 10 : 2 = 125 (3) |
| 10 | |
| 2 | |
| 3 | |
| 5 | |
| 5 | |
| 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
10
2
3
5
5
5
[/input]
[output]
10 : 2 = 125 (3)
[/output]
[/test]
[test]
[input]
3
10
5
7
16
4
2
20
2
2
[/input]
[output]
10 : 5 = 128 (7)
[/output]
[/test]
[test]
[input]
2
50
10
4
5
5
10
[/input]
[output]
50 : 10 = 625 (4)
[/output]
[/test]
[test]
[input]
2
5
5
5
15
3
5
[/input]
[output]
15 : 3 = 3125 (5)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
