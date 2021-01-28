[slide]
# Problem 2: Time for Lunch

[vimeo-video]
[stream language="EN" videoId="487118102/c7f6a5713f" default /]
[stream language="RO" videoId="487118102/c7f6a5713f"  /]
[/video-vimeo]

## Description
During your lunch break you want to watch an episode of your favorite TV series.

Your task is to write a program that will help you determine whether you have enough time to watch an entire episode.

During your lunchbreak you should also take some time to eat and relax.

You know, that the time you need to finish your lunch takes up precisely `1/8`(an eight) of your break and the time you need for relaxation will be exactly `1/4` (a quarter) of your total break time.


## Input
You will receive 3 lines from the console:
- Name of the series - string
- Duration of an episode - a whole number in the range \[10… 90\]
- Break duration - a whole number in the range \[10… 120\]

## Output
The output should consist of one line:

- If there is enough time to watch the episode: 

`You have enough time to watch {name of the series} and would be left with {time left} minutes of free time.`

- If there is not enough time: 

`You don't have enough time to watch {name of the series}, you need {time needed} more minutes.`
Round the time up to the nearest whole number.

[code-task title="Time for Lunch" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Name of the series - Game of Thrones

Duration of an episode - 60

Duration of the break - 96

## Output
You have enough time to watch Game of Thrones and would be left with 0 minutes of free time.
## Comments
Time for lunch: `96 * 1/8 = 12.0`

Time to relax: `96 * 1/4 = 24.0`

Time left: `96 - 12 - 24 = 60`

In this case, the time you would have left is more than or equal to the duration of the episode. 

Make sure that the right output is printed out.
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
You have enough time to watch Gotham and would be left with 30 minutes of free time.
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
You have enough time to watch Riverdale and would be left with 5 minutes of free time.
[/output]
[/test]
[test]
[input]
Game of thrones
56
90
[/input]
[output]
You have enough time to watch Game of thrones and would be left with 1 minutes of free time.
[/output]
[/test]
[test]
[input]
Lucifer
45
80
[/input]
[output]
You have enough time to watch Lucifer and would be left with 5 minutes of free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
