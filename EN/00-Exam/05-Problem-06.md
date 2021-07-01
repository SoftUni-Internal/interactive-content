# Problem: Tournament for Christmas
[slide hideTitle]
# Tournament for Christmas
[code-task title="Tournament for Christmas" taskId="pb-java-exam-tournament-for-christmas" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program that tracks your team's performance at a Christmas charity tournament.

For each day of the tournament you will receive **different game names** which are played at the event, until the "**Finish**" command is received.

By **winning** a game, you earn **20 euro** for charity. 

You need to **calculate how much money** you earned at the end of each day. 

**If you have won more games than you have lost** - you are the winner of the day and the total amount of money that you raised gets **a 10% increse**.

At the end of the tournament, if you have won on most days, you win the tournament and **increase your total amount money raised by 20%**.

**There will not be a case in which the number of won and lost games is equal**.

## Input

**The number of days the tournamemnt will be runnung for is an integer in range [1 ... 20]**

Until you receive the "**Finish**" command, read:

  - Game name - **a string**

For each game read:

  * Result - **a string, options: "win" or "lose"**


## Output

The output consists of one line:

- If you **win** the tournament:

     "**You won the tournament! Total money raised:** \{**earned money**\}"

- If you **lose** the tournament:

    "**You lost the tournament! Total money raised:** \{**earned money**\}"

**The amount of money should be formatted to the second digit after the decimal point.**

## Example:

| **Input** | **Output** |
| --- | --- | 
| **2** | You won the tournament! Total money raised: 132.00 |
| volleyball | |
| win | | 
| football | |
| lose | |
| basketball | |
| win | |
| **Finish** | |
| golf | | 
| win | |
| tennis | |
| win | |
| badminton | |
| win | |
| **Finish** | |

| **Input** | **Output** |
| --- | --- | 
| **3** | You lost the tournament! Total money raised: 84.00 |
| darts | |
| lose | | 
| handball | |
| lose | |
| judo | |
| win | |
| **Finish** | |
| snooker | | 
| lose | |
| swimming | |
| lose | |
| squash | |
| lose | |
| table tennis | |
| win | |
| **Finish** | |
| volleyball | |
| win | |
| basketball | |
| win | |
| **Finish** | |

[hints]
[hint]
Calculate how much money you have won for each day of the tournament. If you have more wins than loses in a day increase the earnings by 10%.
[/hint]
[hint]
Upon reaching the "Finish" command, add the total amount of money earned and if you have won on most days, increase the total amount of money raised by 20%. Then print the correct output.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
volleyball
win
football
lose
basketball
win
Finish
golf
win
tennis
win
badminton
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 132.00
[/output]
[/test]
[test open]
[input]
3
darts
lose
handball
lose
judo
win
Finish
snooker
lose
swimming
lose
squash
lose
table tennis
win
Finish
volleyball
win
basketball
win
Finish
[/input]
[output]
You lost the tournament! Total money raised: 84.00
[/output]
[/test]
[test]
[input]
2
sport
lose
Finish
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total money raised: 0.00
[/output]
[/test]
[test]
[input]
2
sport
win
Finish
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 52.80
[/output]
[/test]
[test]
[input]
3
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
sport
lose
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 156.00
[/output]
[/test]
[test]
[input]
5
sport
win
sport
win
sport
win
Finish
sport
win
sport
win
sport
win
sport
win
sport
win
sport
win
Finish
sport
win
sport
win
sport
win
Finish
sport
win
Finish
sport
win
sport
win
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 422.40
[/output]
[/test]
[test]
[input]
3
sport
win
sport
win
sport
win
sport
lose
sport
lose
Finish
sport
win
sport
win
sport
lose
Finish
sport
lose
sport
lose
sport
win
sport
lose
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 180.00
[/output]
[/test]
[test]
[input]
4
sport
lose
sport
lose
sport
win
sport
lose
Finish
sport
lose
sport
lose
sport
lose
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
lose
sport
win
Finish
[/input]
[output]
You lost the tournament! Total money raised: 84.00
[/output]
[/test]
[test]
[input]
2
sport
win
sport
win
sport
win
sport
lose
sport
lose
sport
lose
sport
lose
Finish
sport
lose
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total money raised: 60.00
[/output]
[/test]
[test]
[input]
1
sport
win
sport
lose
sport
win
sport
lose
sport
win
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 105.60
[/output]
[/test]
[test]
[input]
4
sport
win
sport
win
sport
win
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 208.80
[/output]
[/test]
[test]
[input]
4
sport
lose
sport
lose
sport
win
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total money raised: 104.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
