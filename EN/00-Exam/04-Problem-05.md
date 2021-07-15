# Problem: Football Tournament
[slide hideTitle]
# Football Tournament
[code-task title="Football Tournament" taskId="pb-java-exam-football-tournament" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives the name of a football team and displays statistics based on matches played this season. 

The statistics should include the total points earned during the current season, detailed statistics on the outcome of the games played and thier win rate. 

If for some reason the team has not played any games this season a special message should be displayed. 

During the season, each team plays a certain number of football matches and for each match played points are awarded depending on the outcome.

There are three possible outcomes from a match: 
- W - the team wins and receives 3 points 
- D - a draw - the team gets 1 point 
- L - the team has lost the match and does not receive any points

## Input
You will receive **two lines** of input:
- The name of the football team - a **string**
- The number of games, played during the season - an **integer** in range [0 ... 100] 

**For each game** a separate line is given:
- The result of the game - a character (**"W", "D" or "L"**)

## Output
Depending on whether the team has played any games or not in the current season, there are two possible outcomes:

- If the team has not played a single match print out a single line in the following format:
	- "\{**team name**\} **hasn't played any games during this season.**"
- If the team has played at least one match, six lines should be displayed in the following format:
	- "\{**team name**\} **has won** \{**count points**\} **points during this season.**"
	- "**Total stats:**"
	- "**## W:** \{**number of games won**\}"
	- "**## D:** \{**number draws**\}" 
	- "**## L:** \{**number of games lost**\}" 
	- "**Win rate:** \{**win rate(percentage)**\}**%**"

The percentage must be formatted to the second decimal place.

## Example
| **Input** | **Output** |
| --- | --- |
| Liverpool | Liverpool has won 19 points during this season. |
| 10 | Total stats: |
| W | \#\# W: 5 |
| D | \#\# D: 4 |
| D | \#\# L: 1 |
| W | Win rate: 50.00% |
| L |  |
| W |  |
| D |  |
| D |  |
| W |  |
| W |  |

[hints]
[hint]
Determine the total points for the team. Each win is 3 points, a draw is 1 and no points are awarded for a loss.
[/hint]
[hint]
Keep track of each win, draw and loss.
Calculate the win rate percentage and do not forget to format it.
[/hint]
[hint]
Print the correct output.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Liverpool
10
W
D
D
W
L
W
D
D
W
W
[/input]
[output]
Liverpool has won 19 points during this season.
Total stats:
\#\# W: 5
\#\# D: 4
\#\# L: 1
Win rate: 50.00%
[/output]
[/test]
[test]
[input]
Otbor deto igrae malko machove
1
W
[/input]
[output]
Otbor deto igrae malko machove has won 3 points during this season.
Total stats:
\#\# W: 1
\#\# D: 0
\#\# L: 0
Win rate: 100.00%
[/output]
[/test]
[test]
[input]
drug slab otbor deto igrae malko machove
1
L
[/input]
[output]
drug slab otbor deto igrae malko machove has won 0 points during this season.
Total stats:
\#\# W: 0
\#\# D: 0
\#\# L: 1
Win rate: 0.00%
[/output]
[/test]
[test]
[input]
MainstreamFootballTeam
18
W
W
L
D
W
L
W
W
W
W
W
L
D
W
W
W
L
W
[/input]
[output]
MainstreamFootballTeam has won 38 points during this season.
Total stats:
\#\# W: 12
\#\# D: 2
\#\# L: 4
Win rate: 66.67%
[/output]
[/test]
[test]
[input]
MnogoSilenOtbor
20
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
[/input]
[output]
MnogoSilenOtbor has won 60 points during this season.
Total stats:
\#\# W: 20
\#\# D: 0
\#\# L: 0
Win rate: 100.00%
[/output]
[/test]
[test]
[input]
EdinMnogoSlabOtbor
15
D
L
L
L
D
D
L
D
L
L
L
D
L
D
D
[/input]
[output]
EdinMnogoSlabOtbor has won 7 points during this season.
Total stats:
\#\# W: 0
\#\# D: 7
\#\# L: 8
Win rate: 0.00%
[/output]
[/test]
[test]
[input]
OtborDetoIgraeMnogoMachove
70
W
L
W
W
D
W
W
L
L
W
W
L
L
D
D
L
L
L
D
D
W
D
L
L
L
D
L
D
L
W
L
W
D
W
W
D
D
L
D
D
D
D
W
D
D
W
L
W
L
L
L
D
L
W
W
D
W
W
W
D
L
L
D
W
L
W
D
L
W
L
[/input]
[output]
OtborDetoIgraeMnogoMachove has won 91 points during this season.
Total stats:
\#\# W: 23
\#\# D: 22
\#\# L: 25
Win rate: 32.86%
[/output]
[/test]
[test]
[input]
EdinOtborSMnogoNusykWinRate
99
L
D
L
L
L
D
L
L
D
L
D
L
D
L
L
D
L
L
D
L
L
D
D
L
L
L
L
D
D
L
L
D
D
D
D
D
D
D
L
D
D
D
D
L
D
L
L
L
D
D
L
L
L
L
L
L
L
D
D
L
L
L
L
D
L
L
D
D
D
D
D
L
L
L
D
D
D
L
D
L
L
L
L
D
L
L
L
L
L
D
D
L
D
D
L
D
L
L
W
[/input]
[output]
EdinOtborSMnogoNusykWinRate has won 46 points during this season.
Total stats:
\#\# W: 1
\#\# D: 43
\#\# L: 55
Win rate: 1.01%
[/output]
[/test]
[test]
[input]
OtborDetoIgraeMachoveNaMax
100
D
L
D
D
L
L
D
D
L
D
W
W
D
L
W
D
W
W
D
L
D
W
D
W
L
D
D
D
W
W
D
D
W
W
D
D
D
W
L
W
W
W
L
W
L
D
D
W
W
W
L
W
W
L
W
D
D
L
W
D
L
D
L
W
D
L
W
W
D
L
D
W
W
L
D
W
D
L
W
D
D
L
W
L
W
W
W
L
W
W
D
W
W
W
L
W
D
W
L
D
[/input]
[output]
OtborDetoIgraeMachoveNaMax has won 158 points during this season.
Total stats:
\#\# W: 41
\#\# D: 35
\#\# L: 24
Win rate: 41.00%
[/output]
[/test]
[test]
[input]
NacionalniqDetoNeMuSeIgraeMnogoMnogo
3
D
L
D
[/input]
[output]
NacionalniqDetoNeMuSeIgraeMnogoMnogo has won 2 points during this season.
Total stats:
\#\# W: 0
\#\# D: 2
\#\# L: 1
Win rate: 0.00%
[/output]
[/test]
[test]
[input]
NacionalniqDetoHichNeImSeIgrae
0
[/input]
[output]
NacionalniqDetoHichNeImSeIgrae hasn't played any games during this season.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
