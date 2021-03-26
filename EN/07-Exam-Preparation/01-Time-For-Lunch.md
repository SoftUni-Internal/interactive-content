# Problem: Time For Lunch
[slide hideTitle]
# Time For Lunch

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Time For Lunch" taskId="java-exam-prep-Time-For-Lunch" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
During your lunch break, you want to watch an episode of your favorite series.

Create a program that will help you determine whether you have enough time to watch the episode.

During your lunch break, you also spend time having lunch and resting.

The time you need for lunch will be **1/8** of your overall break time.

The time you need to relax will be **1/4** of the break time.

## Input
You receive 3 lines from the console:
- Name of the series - **string**
- Duration of the episode - **integer** number in range [10 ...90]
- Duration of the break - **integer** number in range [10 ... 120]

## Output
The output should consist of a single line in the following format:

- If there is enough time to watch the episode: **"You have enough time to watch** \{**name of the series**\} **and left with** \{**time left**\} **minutes free time."**
- If there is not enough time: **"You don't have enough time to watch** \{**name of the series**\}**, you need** \{**time needed**\} **more minutes."**

Round the **time** up to the nearest integer.

## Example
| **Input** | **Output** |
| --- | --- | 
| Game of Thrones | You have enough time to watch Game of Thrones and left with 0 minutes free time. | 
| 60 | 
| 96 | 

[hints]

[hint]
Determine the time needed for having lunch.
[/hint]

[hint]
Calculate the time you will be resting.
[/hint]

[hint]
Figure out how much time is left.

Make sure that the corresponding output is printed out.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Game of Thrones
60
96
[/input]
[output]
You have enough time to watch Game of Thrones and left with 0 minutes free time.
[/output]
[/test]
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
You have enough time to watch Gotham and left with 30 minutes free time.
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
You have enough time to watch Riverdale and left with 5 minutes free time.
[/output]
[/test]
[test]
[input]
Game of thrones
56
90
[/input]
[output]
You have enough time to watch Game of thrones and left with 1 minutes free time.
[/output]
[/test]
[test]
[input]
Lucifer
45
80
[/input]
[output]
You have enough time to watch Lucifer and left with 5 minutes free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
