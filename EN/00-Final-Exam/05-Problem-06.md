# Problem 6: Tournament of Christmas 
[slide hideTitle]
# Tournament of Christmas 

[code-task title="Tournament of Christmas" taskId="JavaScript-Programming-Basics-exam-Tournament-of-Christmas" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function tournament(input) {
   // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description

Create a program, which tracks your team's performance at a Christmas charity tournament. 

Every day you get game names until the "**Finish**" command. 

By winning each game, you win **$20 for the charity**. 

You need to calculate how much **money you earned at the end of the day**. 

If you have **more games won than lost** - **you are the winner of the day** and your money is increased by 10%. 

At the **end of the tournament**, if you have been the winner most days, you **win the tournament and increase all the money won by 20%.**

You will never have an equal number of won and lost games.

## Input

**The input comes as an array of elements.** 

Until you receive the "**Finish**" command, you receive:

- **First Element:**

**The number of days of the tournament**: an integer in the interval \[1… 20\]

- **Until you receive the** "**Finish**" **command, read:**

**Sport** - String

- **For each sport read:**

**Result** - Text with possibilities:  "**win**" or "**lose**"

## Output

Finally, one line is printed:

- If you won the tournament:

"**You won the tournament! Total raised money:** \{**the money earned**\}"

- If you lost the tournament:

"**You lost the tournament! Total raised money:** \{**the money earned**\}"

The money should be **formatted to the second digit after the decimal point.**

## Example

| **Input** | **Output** |
| --- | --- |
|tournament([3, 'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish', 'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish', 'volleyball', 'win', 'basketball', 'win', 'Finish']) | You lost the tournament! Total raised money: 84.00 |
|tournament([2, 'volleyball', 'win', 'football','lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']) | You won the tournament! Total raised money: 132.00 |

[hints]
[hint]
Determine the amount of money won from each day of the tournament. Check if the won games are more than the lost. 

If they are, add a 10% bonus.

Upon receving the "**Finish**" command, calculate the total sum of money.
[/hint]
[hint]
Finally, check if the overall wins are more than the losses. 

If they are, add 20% and print the correct output.
[/hint]
[/hints]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
tournament([2, 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 132.00
[/output]
[/test]
[test open]
[input]
tournament([3, 'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish', 'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish', 'volleyball', 'win', 'basketball', 'win', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 84.00
[/output]
[/test]
[test]
[input]
tournament([2, 'sport', 'lose', 'Finish', 'sport', 'lose', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 0.00
[/output]
[/test]
[test]
[input]
tournament([2, 'sport', 'win', 'Finish', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 52.80
[/output]
[/test]
[test]
[input]
tournament([3, 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 156.00
[/output]
[/test]
[test]
[input]
tournament([5, 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 422.40
[/output]
[/test]
[test]
[input]
tournament([3, 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 180.00
[/output]
[/test]
[test]
[input]
tournament([4, 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'Finish', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 84.00
[/output]
[/test]
[test]
[input]
tournament([2, 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'Finish', 'sport', 'lose', 'sport', 'lose', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 60.00
[/output]
[/test]
[test]
[input]
tournament([1, 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 105.60
[/output]
[/test]
[test]
[input]
tournament([4, 'port', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 208.80
[/output]
[/test]
[test]
[input]
tournament([4, 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'lose', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 104.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
