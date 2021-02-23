// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-02"

[slide hideTitle]
# Problem 2: Time for Lunch

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Time for Lunch" taskId="js-pb-exam-preparation-Time-for-Lunch" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function timeForLunch(input) {
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
During your lunch break you want to **watch** an episode of your favorite TV series.

Your task is to create a program that will help you determine whether you have **enough time** to watch an entire episode.

During your lunchbreak you should also take some time to **eat** and **relax**.

You know, that the time you need to finish your lunch takes up precisely 1\/8 (**an eight**) of your break and the time you need for relaxation will be exactly 1\/4 (**a quarter**) of your **total** break time.


## Input
You will receive **3 elements** from the console:

- Name of the series: string

- Duration of an episode: a whole number in the range \[10… 90\]

- Break duration: a whole number in the range \[10… 120\]

## Output
The output should consist of one line:

- If there is enough time to watch the episode: 

`You have enough time to watch {name of the series} and would be left with {time left} minutes of free time.`

- If there is not enough time: 

`You don't have enough time to watch {name of the series}, you need {time needed} more minutes.`

Round the time up to the nearest whole number.

## Example
| **Input** | **Output** |
| --- | --- |
|timeForLunch(['Game of Thrones', 60, 96])| You have enough time to watch Game of Thrones and would be left with 0 minutes of free time.|

**Comments**

Time for lunch: 96 \* 1\/8 = 12.0

Time to relax: 96 \* 1\/4 = 24.0

Time left: 96 \- 12 \- 24 = 60

In this case, the time you would have left is more than or equal to the duration of the episode.

Make sure that the right output is printed out.

## Example
| **Input** | **Output** |
| --- | --- |
|timeForLunch(['Riverdale', 57, 90])| You don't have enough time to watch Riverdale, you need 1 more minutes.|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
timeForLunch(['Game of Thrones', 60, 96])
[/input]
[output]
You have enough time to watch Game of Thrones and would be left with 0 minutes of free time.
[/output]
[/test]
[test open]
[input]
timeForLunch(['Riverdale', 57, 90])
[/input]
[output]
You don't have enough time to watch Riverdale, you need 1 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['Gotham', 45, 120])
[/input]
[output]
You have enough time to watch Gotham and would be left with 30 minutes of free time.
[/output]
[/test]
[test]
[input]
timeForLunch(['Arrow', 45, 60])
[/input]
[output]
You don't have enough time to watch Arrow, you need 8 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['CW', 45, 51])
[/input]
[output]
You don't have enough time to watch CW, you need 14 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['Lucifer', 50, 75])
[/input]
[output]
You don't have enough time to watch Lucifer, you need 4 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['Riverdale', 45, 80])
[/input]
[output]
You have enough time to watch Riverdale and would be left with 5 minutes of free time.
[/output]
[/test]
[test]
[input]
timeForLunch(['Game of thrones', 56, 90])
[/input]
[output]
You have enough time to watch Game of thrones and would be left with 1 minutes of free time.
[/output]
[/test]
[test]
[input]
timeForLunch(['Lucifer', 45, 80])
[/input]
[output]
You have enough time to watch Lucifer and would be left with 5 minutes of free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
