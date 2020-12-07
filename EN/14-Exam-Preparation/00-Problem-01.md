[slide]
# Problem 01
[code-task title="Problem-01" taskId="27-07-01" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which calculates how long it will take you to watch all episodes of a series in minutes. 

You will receive count seasons, count episodes per season and duration of each episode. 

In every episode there are advertisements, whose duration is 20% of the episode’s duration. 

You also have to keep in mind that every season ends with a special episode, which lasts 10 minutes longer than usual. 

## Input
From the console you receive 4 lines:
- Name of the series - String
- Count seasons – int in the range [1… 10]
- Count episodes  – int in the range [10… 80]
- Duration of a usual episode without the advertisements – double in the range [40.0… 65.0]

## Output
You have to print on the console the time needed to watch all of the episodes, rounded down to the nearest whole number in the following format: 
- "Total time needed to watch the \{name of the series\} series is \{time\} minutes."

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