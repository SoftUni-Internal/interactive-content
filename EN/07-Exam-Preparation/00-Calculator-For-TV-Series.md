# Problem: Calculator For TV Series

[slide hideTitle]

# Calculator For TV Series

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-1-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

# Description

Create a program that calculates how long it will take you to watch all episodes of a TV series in **minutes**.

You will receive the **number of seasons**, **the number of episodes per season**, and **the duration of each episode**.

In every episode, there are **advertisements**, which increase each episode's final duration by 20%.

Every season ends with a special episode, which lasts **10 minutes longer than usual**.

## Input

You will receive 4 lines of input:

- Title of the series - **string**
- Number of seasons - **integer** in range [1 ... 10]
- Number of episodes - **integer** in range [10 ... 80]
- Duration of each episode, not including the advertisements - **double** in the range [40.0 ... 65.0]

## Output

Print out the time needed to watch all of the episodes, rounded down to the nearest integerS in the following format:

- "**Total time needed to watch the** \{**name of the series**\} **series is** \{**time**\} **minutes.**"


## Example

| **Input** | **Output** |
| --- | --- | 
| Lucifer   | Total time needed to watch the Lucifer series is 3594 minutes. |
| 3         |
| 18        |
| 55        |

[hints]

[hint]
Calculate the duration of the advertisements per episode.
[/hint]
[hint]

Determine the duration of each episode, including the advertisements.
[/hint]
[hint]

Add extra time for the **special** episodes.
[/hint]
[hint]

Calculate the total time needed for watching the TV series.
[/hint]

[/hints]
[/task-description]
[code-io /]
[tests]
[test open]
[input]
Lucifer
3
18
55
[/input]
[output]
Total time needed to watch the Lucifer series is 3594 minutes.
[/output]
[/test]
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
