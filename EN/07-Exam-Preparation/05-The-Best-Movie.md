[slide hideTitle]
# Problem: The Best Movie

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-6-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="The Best Movie" taskId="java-basics-exam-prep-the-best-movie" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Until the command "STOP" you will be receiving movie titles.

The best movie for you will be the one that has the most points.

Points are calculated by adding all of the ASCII character values in the movie title.

There will not be a case in which there are two films with an equal number of points.

Keep in mind the following:
- For each lowercase letter in the movie title, you must subtract twice the length of the movie title from the final sum.
- For each uppercase letter in the title, the length of the movie title should be subtracted from the final sum.
There can be a maximum of 7 movie titles.

## Input
You receive multiple lines from the console until the command "STOP" is recieved or until the limit of 7 movies is reached:
- Movie title – string;

## Output
Print out on the console:

- If you have reached the limit of 7 movies you should print out: "The limit is reached."
- Print out the movie, holding the highest score: "The best movie for you is \{movie title\} with \{sum of symbols\} ASCII sum."

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| Matrix | The best movie for you is Breaking bad with 878 ASCII sum. | First we get Matrix, the first letter is M with a value of 77, but it is a capital letter and we subtract from it the length of the title: 77 - 6 = 71. |
| Breaking bad | | The second letter is a with a value of 97 and we subtract twice the movie title: 97 - 12 = 85.|
| Legend | | Similarly, we proceed with each subsequent letter and receive an amount of 563. |
| STOP | | Upon receiving the STOP command, we print the title with the highest value, which is Breaking bad with sum of 878. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
The maze
School story 2
Shrek 2
Ice age
STOP
[/input]
[output]
The best movie for you is School story 2 with 1013 ASCII sum.
[/output]
[/test]
[test]
[input]
Tomorrow Land
NEW BEGINNING
STOP
[/input]
[output]
The best movie for you is Tomorrow Land with 1002 ASCII sum.
[/output]
[/test]
[test]
[input]
The maze
Scorch
Killing zone
Danger alert
Harry Poter
Shrek
Hobbit
[/input]
[output]
The limit is reached.
The best movie for you is Killing zone with 938 ASCII sum.
[/output]
[/test]
[test]
[input]
The Maze
New Beggining
Trials
STOP
[/input]
[output]
The best movie for you is New Beggining with 950 ASCII sum.
[/output]
[/test]
[test]
[input]
Dark Knight Raises
Game of thrones
STOP
[/input]
[output]
The best movie for you is Dark Knight Raises with 1156 ASCII sum.
[/output]
[/test]
[test]
[input]
New Beggining
Pretty Little Liars
Hobbit New Beggining
STOP
[/input]
[output]
The best movie for you is Pretty Little Liars with 1252 ASCII sum.
[/output]
[/test]
[test]
[input]
Frozen
Kill machine
Mad Max
Fury
Rage
Stone cold
Matrix
[/input]
[output]
The limit is reached.
The best movie for you is Kill machine with 901 ASCII sum.
[/output]
[/test]
[test]
[input]
Rage
Fury
Cold
Ice
Fire
Furrry
ROAD RAGE
[/input]
[output]
The limit is reached.
The best movie for you is Furrry with 584 ASCII sum.
[/output]
[/test]
[test]
[input]
Heavy Metal
Armagedon
War of Titans
TROY
Elysium
Vortex
Ice Age
[/input]
[output]
The limit is reached.
The best movie for you is War of Titans with 942 ASCII sum.
[/output]
[/test]
[test]
[input]
Heavy Metal
Armagedon
War of Titans
TROY
Elysium
Vortex
STOP
[/input]
[output]
The best movie for you is War of Titans with 942 ASCII sum.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]