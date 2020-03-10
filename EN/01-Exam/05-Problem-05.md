[slide]
# Problem 05
## Description
Your task is to write a program that takes the name of a team and does statistics about it. 

During one season each team plays a certain number of football matches and for each team meeting points are awarded depending on the outcome of the match. 

There are three possible outcomes from one meeting: 
- W - The team is a winner and gets 3 points
- D - The meeting ended without a winner and the team gets 1 point
- L - The team has lost the match and does not receive points

Write a program that takes the name of a football team and displays its statistics, based on played matches this season. 

Its statistics should include the total number of points earned in the current season, detailed statistics on the outcome of the games played and a beat rate in the season. 

If for some reason the team has not played any matches in the current season, a special message is displayed.

## Input
You will receive two lines from the console:
- The name of the football team we're doing statistics about - string
- Number of games played in the current season - whole number in the range [0… 100]

For each game played, a separate line is read:
- The result of the game played in one of the formats above - a character: 'W', 'D' or 'L'


## Output
Depending on whether the team has played games in the current season two types of output are displayed.
- If the team has not played a single match in the current season, one line is displayed in the following format:
	- "\{team name\} hasn't played any games during this season."
- If the team has played one match or more, six lines are displayed in the following format:
	- "\{team name\} has won \{count points\} points during this season."
	- "Total stats:"
	- "## W: \{count games won\}"
	- "## D: \{number of games with even score\}" 
	- "## L: \{count games lost\}" 
	- "Win rate: \{percent games won\}%"

The percent must be formatted to the second digit after the decimal point.

[code-task title="Problem-05" taskId="pb-june-pr-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Example
## Input
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

## Output
Liverpool has won 19 points during this season.

Total stats:

\#\# W: 5

\#\# D: 4

\#\# L: 1

Win rate: 50.00%

## Comments
The name of our team is Liverpool.

He played 10 games in the season:

5 won * 3 points = 15 points

4 scored even * 1 points = 4 points

1 lost -> no points added

Total points after the season: 19 points

5 wins of 10 games played = 50% win rate

After formatting to the second digit -> 50.00%

[/task-description]
[tests]
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