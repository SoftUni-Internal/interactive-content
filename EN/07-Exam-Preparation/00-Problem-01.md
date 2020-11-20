[slide]
# Calculator for TV series
## Description
Write a program, which calculates how long it will take you to watch all episodes of a TV series in minutes.

As input, you will receive the number of seasons, the number of episodes per season and the duration of each episode.

In every episode there are advertisements, which increase its duration by `20%`.

You should also keep in mind that every season ends with a special episode, which lasts 10 minutes longer than usual.

## Input
As input you will receive 4 console lines:
- Name of the series - String
- Number of seasons – int in the range \[1… 10\]
- Number of episodes – int in the range \[10… 80\]
- Duration of a standard episode without the advertisements – double in the range \[40.0… 65.0\]

## Output
Print out on the console the time needed to watch all of the episodes, rounded down to the nearest whole number in the following format:
- `Total time needed to watch the {name of the series} series is {time} minutes.`

[code-task title="Calculator for TV series" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Name of the series - Lucifer

Number seasons – 3

Number episodes  – 18

Duration of an episode – 55

## Output
Total time needed to watch the Lucifer series is 3594 minutes.

## Comments 
Duration of advertisements per episode: 20\% from 55 = 11.0

Duration of an episode with the advertisements: `55 + 11 = 66.0`

Additional time to be added, because of the specials: `3*10 = 30`

Total time needed to watch the episodes: `66 * 18 * 3 + 30 = 3594.0`  
[/task-description]
[code-io /]
[tests]
[test]
[input]
Flash
5
20
51
[/input]
[output]
Total time needed to watch the Flash series is 6170 minutes.
[/output]
[/test]
[test]
[input]
Origin
10
19
50
[/input]
[output]
Total time needed to watch the Origin series is 11500 minutes.
[/output]
[/test]
[test]
[input]
Arrow
5
24
60
[/input]
[output]
Total time needed to watch the Arrow series is 8690 minutes.
[/output]
[/test]
[test]
[input]
Vampires
8
25
50
[/input]
[output]
Total time needed to watch the Vampires series is 12080 minutes.
[/output]
[/test]
[test]
[input]
Tom & Jerry
15
25
30
[/input]
[output]
Total time needed to watch the Tom & Jerry series is 13650 minutes.
[/output]
[/test]
[test]
[input]
Teen wolf
5
20
55
[/input]
[output]
Total time needed to watch the Teen wolf series is 6650 minutes.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]