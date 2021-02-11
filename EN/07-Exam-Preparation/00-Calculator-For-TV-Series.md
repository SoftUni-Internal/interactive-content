[slide hideTitle]
# Problem: Calculator For TV Series

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculator For TV Series" taskId="java-basics-exam-prep-Calculator-For-TV-Series" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program, which calculates how long it will take you to watch all episodes of a TV series in minutes. 

You will receive the number of seasons,  number of episodes per season and the duration of each episode. 

In every episode there are advertisements, whose duration is 20% of the episode’s duration. 

Every season ends with a special episode, which lasts 10 minutes longer than usual. 

## Input
From the console you receive 4 lines:
- Title of the series - String
- Number of seasons – int in range [1… 10]
- Number of episodes  – int in range [10… 80]
- Standard episode duration without the advertisements – double in range [40.0… 65.0]

## Output
The output should consist of a single line in the following form:
- If there is enough time to watch the episode: "You have enough time to watch {name of the series} and left with {time left} minutes free time."
- If there is not enough time: "You don't have enough time to watch {name of the series}, you need {time needed} more minutes."
    - Round the time up to the nearest whole number.


## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| Lucifer | Total time needed to watch the Lucifer series is 3594 minutes. | Duration of advertisements per episode: 20% от 55 = 11.0 |
| 3 | | Duration of an episode with the advertisements: 55 + 11 = 66.0 |
| 18 | | Additional time from the special episode: 3*10 = 30|
| 55 | | Total time to watch the episodes: 66 * 18 * 3 + 30 = 3594.0 |
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