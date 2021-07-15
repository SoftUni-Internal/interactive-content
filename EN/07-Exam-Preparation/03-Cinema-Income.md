# Problem: Cinema Income
[slide hideTitle]
# Cinema Income

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-4-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema Income" taskId="java-basics-exam-prep-cinema-income" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You have been hired by a cinema to create a program that calculates whether there would be enough viewers to fill the cinema hall and what the income of the event would be.

On the first line, you are going to receive the number of seats in the hall.

On the following lines, until the command **"Movie time!"** is received, you will receive numbers, representing how many people want to enter the hall.

The price for a ticket is **5$**. 

If the current number of people that enter the hall can be divided by **3** without a remainder, there is a **5$** discount on the total price.

If there are no more free seats for the people that want to enter, the program should end.

If more people than the available seats number try to enter the hall, it should be considered full and the program should stop.

## Input
Read from the console:
- Hall capacity - **integer** number in range [50 ... 150]

- On the following lines, until the command **"Movie time!"** is received:
 Number of people entering the cinema - **integer** in range [1 ... 15]

## Output
The output should consist of a single line in the following format:

- If you have received the command **"Movie time!"**: **"There are** \{**seats left**\} **seats left in the cinema."**

- If there are **no more free seats** in the hall: **"The cinema is full."**

- Afterwards, print out: **"Cinema income -** \{**income**\}**$"**

## Example
| **Input** | **Output** | 
| --- | --- |
| 60 | There are 6 seats left in the cinema. | 
| 10 | Cinema income - 255$ | 
| 6 | 
| 3 | 
| 20 | 
| 15 | 
| Movie time! | 

[hints]

[hint]
Check if there are enough free seats on each iteration.
[/hint]

[hint]
Check if there will be a discount and calculate the total price.
[/hint]
[/hints]
[/task-description]
[code-io /]
[tests]
[test open]
[input]
60
10
6
3
20
15
Movie time!
[/input]
[output]
There are 6 seats left in the cinema.
Cinema income - 255$
[/output]
[/test]
[test]
[input]
140
15
15
10
5
6
7
8
9
Movie time!
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
150
15
15
15
15
15
10
10
10
Movie time!
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
50
10
15
15
10
9
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
100
15
15
15
15
15
15
15
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
120
10
10
10
10
10
10
10
10
10
10
10
10
Movie time!
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
50
15
15
10
6
3
3
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
100
15
3
6
9
12
15
10
Movie time!
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
50
15
15
10
9
9
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
120
10
15
3
6
9
12
15
Movie time!
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
