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
## Description

Write a program that tracks your team's performance at a Christmas charity tournament.

Every day, until the "**Finish**" command you will receive **different type of game names**.

By **winning** each game, you win **20 euro** for charity. 

You need to **calculate how much money** you earned at the end of the day. 

**If you have more games won than lost** - you are the winner of the day and your money gets **increased by 10%**.

At the end of the tournament, if you have been a winner on most days, you win the tournament and **increase all winnings by 20%**.

**You will never have an equal number of won and lost games**.

## Input

**Initially, the number of days of the tournament is read from the console - an integer in the interval \[1… 20\]**

Until you receive the "**Finish**" command, read:

- Sports - **String**

For each sport read:

  * result - **String with options: "win" or "lose"**


## Output

The output is formatted in one line:

- If you **win** the tournament:

     "You won the tournament! Total money raised: \{earned money\}"

- If you **lost** in the tournament:

"You lost the tournament! Total money raised: \{earned money\}"

**The money variable should be formatted to the second digit after the decimal point.**

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


## Comments:

The tournament is 2 days long.

**The first day:**

We play volleyball and win -> 20 Euro.

We play football and lose -> 0 Euro.

We play basketball and win -> 20 Euro.

We get the Finish command and the games for the day are over. 

Earned money 20 + 0 + 20 = 40 Euro We have more games won than lost, respectively we increase the money of the day by 10% -> 44 Euro.

**The Second day:**

We play golf and win -> 20 Euro.

We play tennis and win -> 20 Euro.

We play badminton and win -> 20 Euro.

We receive the **Finish** command and the games for the day are over. 

Earned money 20 + 20 + 20 = 60 Euro We have only won games, respectively we increase the money of the day by 10% -> 66 Euro.

The money earned from the two days: 44 + 66 = 110 Euro.

Since we have more wins than losses, we win the tournament and increase the money by 20% -> 132 Euro.



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
