// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-01"

[slide hideTitle]
# Problem 1: Calculator for TV series

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculator for TV series" taskId="js-pb-exam-preparation-Calculator-for-TV-series" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function tvSeries(name, seasons, episodes, duration) {
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

Create a program, which calculates how long it will take you to watch all episodes of a TV series in minutes.

As input, you will receive the number of seasons, the number of episodes per season and the duration of each episode.

In every episode there are advertisements, which increase its duration by 20\%.

You should also keep in mind that every season ends with a special episode, which lasts 10 minutes longer than usual.

## Input
As input you will receive 4 arguments:

- Name of the series: String

- Number of seasons: Int in the range \[1… 10\]

- Number of episodes: Int in the range \[10… 80\]

- Duration of a standard episode without the advertisements: Floating-point number in the range \[40.0… 65.0\]

## Output
Print to the console the time needed to watch all of the episodes, rounded down to the nearest whole number in the following format:

- **Total time needed to watch the** \{**name of the series**\} **series is** \{**time**\} **minutes.**

## Example
| **Input** | **Output** |
| --- | --- |
|tvSeries(['Lucifer', 3, 18, 55])| Total time needed to watch the Lucifer series is 3594 minutes.|
|tvSeries(['Flash', 5, 20, 51])| Total time needed to watch the Flash series is 6170 minutes.|

[hints]

[hint]
Calculate the duration of advertisements per episode.
[/hint]
[hint]

Determine the duration of an episode with advertisements.
[/hint]
[hint]

Add extra time for the specials.
[/hint]
[hint]

Calculate the total time needed to watch the whole series.
[/hint]

[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
tvSeries(['Lucifer', 3, 18, 55])
[/input]
[output]
Total time needed to watch the Lucifer series is 3594 minutes.
[/output]
[/test]
[test open]
[input]
tvSeries(['Flash', 5, 20, 51])
[/input]
[output]
Total time needed to watch the Flash series is 6170 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Origin', 10, 19, 50])
[/input]
[output]
Total time needed to watch the Origin series is 11500 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Arrow', 5, 24, 60])
[/input]
[output]
Total time needed to watch the Arrow series is 8690 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Vampires', 8, 25, 50])
[/input]
[output]
Total time needed to watch the Vampires series is 12080 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Tom & Jerry', 15, 25, 30])
[/input]
[output]
Total time needed to watch the Tom & Jerry series is 13650 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Teen wolf', 5, 20, 55])
[/input]
[output]
Total time needed to watch the Teen wolf series is 6650 minutes.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
