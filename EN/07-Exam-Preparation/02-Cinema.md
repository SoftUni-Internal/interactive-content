# Problem: Cinema
[slide hideTitle]
# Cinema

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/EN/interactive-programming-basics-with-java-exam-preparation-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema" taskId="java-basics-exam-prep-Cinema" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
For the upcoming premiere of three popular productions a local cinema has hired you to write software that calculates the price, which the clients should pay, depending on the movie and the offer they choose.

| -  | **John Wick** | **Star Wars**| **Jumanji** |
|---|---|---|---|
| Drink | $12 | $18 | $9 |
| Popcorn | $15 | $25 | $11 |
| Menu | $19 | $30 | $14 |

Create a program that calculates the **total price** of the tickets.

Discounts should be applied in the following cases:

- If the chosen movie is **"Star Wars"** and at least four tickets are bought, there is a **30%** family discount
- If the chosen movie is **"Jumanji"** and the tickets bought are **exactly two**, there is a **15%** couple discount

## Input
You will receive 3 lines:

- Name of the movie - string: **"John Wick"**, **"Star Wars"** or **"Jumanji"**

- Type of the offer - string: **"Drink"**, **"Popcorn"** or **"Menu"**

- Number of the tickets – integer number in range [1 ... 30]

## Output
Print out on a single line: **"Your bill is $** \{**total price**\}**"**

The price must be formatted to the second digit after the decimal point.

## Example
| **Input** | **Output** |
| --- | --- | 
| John Wick | Your bill is $72.00 | 
| Drink | 
| 6 | 

[hints]

[hint]
Depending on the movie and the offer determine the ticket price.
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
John Wick
Drink
6
[/input]
[output]
Your bill is $72.00
[/output]
[/test]
[test]
[input]
John Wick
Drink
23
[/input]
[output]
Your bill is $276.00
[/output]
[/test]
[test]
[input]
John Wick
Popcorn
11
[/input]
[output]
Your bill is $165.00
[/output]
[/test]
[test]
[input]
John Wick
Menu
8
[/input]
[output]
Your bill is $152.00
[/output]
[/test]
[test]
[input]
Star Wars
Drink
10
[/input]
[output]
Your bill is $126.00
[/output]
[/test]
[test]
[input]
Star Wars
Popcorn
3
[/input]
[output]
Your bill is $75.00
[/output]
[/test]
[test]
[input]
Star Wars
Menu
1
[/input]
[output]
Your bill is $30.00
[/output]
[/test]
[test]
[input]
Jumanji
Drink
2
[/input]
[output]
Your bill is $15.30
[/output]
[/test]
[test]
[input]
Jumanji
Popcorn
1
[/input]
[output]
Your bill is $11.00
[/output]
[/test]
[test]
[input]
Jumanji
Menu
3
[/input]
[output]
Your bill is $42.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
