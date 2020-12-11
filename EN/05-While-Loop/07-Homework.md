# Homework

[slide]
# Problem: Sum Digits
[code-task title="Sum Digits" taskId="pb-java-while-loop-sum-digits" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a number from the console
* **Sums** the **digits** of a number
* Prints the sum

## Example
| Input | Output |
| --- | --- |
| 5634 | 18 |
[/task-description]
[tests]
[test open]
[input]
123456
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
489451
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
8498498
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
000000
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5684915
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Favorite Book
[code-task title="Favorite Book" taskId="pb-java-while-loop-favourite-book" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Reads a **book's name** from the console
* Receives names until it gets **book with the same name as the first one**
* Prints "Book found! Attempts: \{attemptsCount\}" and stops afterwards

## Example
| Input | Output |
| --- | --- |
| Alice in Wonderland | Book found! Attempts: 3 |
| Winnie the Pooh | |
| Peter Pan | |
| Alice in Wonderland | |
[/task-description]
[tests]
[test open]
[input]
Alice in Wonderland
Winnie the Pooh
Peter Pan
Alice in Wonderland
[/input]
[output]
Book found! Attempts: 3
[/output]
[/test]
[test]
[input]
Fav Book
Book1
Book2
Book3
Book4
Book5
Book6
Book7
Book8
Book9
Book10
Book11
Fav Book
[/input]
[output]
Book found! Attempts: 12
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Find Min and Max
[code-task title="Find Min and Max" taskId="pb-java-while-loop-find-min-and-max" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Receives integers until **"END"**
* Prints the **biggest** and the **smallest** integer in the following format:
   * Max number: \{max number\}
   * Min number: \{min number\}

## Example
| Input | Output |
| --- | --- |
| 10 | Max number: 304 |
| 20 | Min number: 0 |
| 304 |  |
| 0 |  |
| 50 |  |
| END |  |

[/task-description]
[tests]
[test open]
[input]
10
20
304
0
50
END
[/input]
[output]
Max number: 304
Min number: 0
[/output]
[/test]
[test]
[input]
5
10
66
456
-4
1
0
END
[/input]
[output]
Max number: 456
Min number: -4
[/output]
[/test]
[test]
[input]
3
15
56
32
7
9
END
[/input]
[output]
Max number: 56
Min number: 3
[/output]
[/test]
[test]
[input]
-34
-4
-12
-45
END
[/input]
[output]
Max number: -4
Min number: -45
[/output]
[/test]
[test]
[input]
0
1
4
5
END
[/input]
[output]
Max number: 5
Min number: 0
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Special Number
[code-task title="Special Number" taskId="pb-java-while-loop-special-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Special number is number **divisible by all of its digits** without remainder. 

Write a program, which: 
* Receives integer
* **Prints** "\{num\} is special", if the number is special
* Otherwise, prints "\{num\} is not special"

## Example
| Input | Output |
| --- | --- |
| 23 | 23 is not special |

## Example
| Input | Output |
| --- | --- |
| 404 | 404 is special |
[/task-description]
[tests]
[test open]
[input]
23
[/input]
[output]
23 is not special
[/output]
[/test]
[test open]
[input]
404
[/input]
[output]
404 is special
[/output]
[/test]
[test]
[input]
55
[/input]
[output]
55 is special
[/output]
[/test]
[test]
[input]
43
[/input]
[output]
43 is not special
[/output]
[/test]
[test]
[input]
202
[/input]
[output]
202 is special
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Special Bonus
[code-task title="Special Bonus" taskId="pb-java-while-loop-special-bonus" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Reads an **integer** number from the console
* Keeps reading integers until it finds the **same one as the first one**
* When it finds it, it increases the value of the **previous** number **before it** with 100% and prints it

## Example
| Input | Output |
| --- | --- |
| 25 | 60 |
| 20 | |
| 30 | |
| 25 | |
[/task-description]
[tests]
[test open]
[input]
25
20
30
25
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
20
5
5
20
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
20
20
[/input]
[output]
40
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Sequence 2k + 1
[code-task title="Sequence 2k + 1" taskId="pb-java-while-loop-sequence-2k-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Reads a number **n** from the console
* Prints a **sequence** of numbers, which are **<= n** and satisfy the following condition:
* Each number is equal to the previous one multiplied by **2** plus **1**

## Example
| Input | Output |
| --- | --- |
| 8 | 1 |
|  | 3 |
|  | 7 |
[/task-description]
[tests]
[test open]
[input]
8
[/input]
[output]
1
3
7
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
3
7
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
1
3
7
15
31
63
[/output]
[/test]
[test]
[input]
511
[/input]
[output]
1
3
7
15
31
63
127
255
511
[/output]
[/test]
[test]
[input]
10000
[/input]
[output]
1
3
7
15
31
63
127
255
511
1023
2047
4095
8191
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Account Balance
[code-task title="Account Balance" taskId="pb-java-while-loop-account-balance" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Receives the **amount of money** for each transaction untill **"END"**
* **Adds** the money to the **balance** and **prints**: "Increase: \{money\}", format `money` to the **2nd digit** after the decimal point
* After **"END"** calculates and **prints** the total balance: "Total: \{balance\}", format `balance` to the **2nd digit** after the decimal point

## Example
| Input | Output |
| --- | --- |
| 5.51 | Increase: 5.51 |
| 69.42 | Increase: 69.42 |
| 100 | Increase: 100.00 |
| END | Total: 174.93 |
[/task-description]
[tests]
[test open]
[input]
5.51
69.42
100
END
[/input]
[output]
Increase: 5.51
Increase: 69.42
Increase: 100.00
Total: Total: 174.93
[/output]
[/test]
[test]
[input]
5.50
60.23
100
END
[/input]
[output]
Increase: 5.50
Increase: 60.23
Increase: 100.00
Total: ‭165.73‬
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Problem: Old Books
[code-task title="Old Books" taskId="pb-java-while-loop-old-books" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Andreea goes to her home town after being a long time abroad. 

When she comes home, she sees her grandmother\'s library and remembers her favourite book. 

Help Andreea writing a program in which Andreea enters the name of the **book** she\'s searching for (**String**) and the **capacity** of the library (**integer**). 

**Until** Andreea finds her favourite book **or** doesn\'t check all books in the library, the program have to reads every time the name of the next book on a separate line.

## Input
- First line of input is the name of the book Andreea's searching for - string
- Second line is the capacity of the library - integer
- On every nex line - name of book from library - string

## Output
- If Andreea **does not** find the book, print **two** lines:
  - "The book you search is not here!"
  - "You checked \{count\} books."
- If Andreea **finds** the book, print a **single** line:
  - "You checked \{count\} books and found it."

## Example
| **Input** | **Output** |
| --- | --- |
| Troy | You checked 2 books and found it. |
| 8 | |
| Stronger | |
| Life Style | |
| Troy | |

### Comments
- Andreea is searching for a book with name "Troy", and the library\'s capacity is 8 books.
- The first book is "Stronger", the second one is "Life Style", the third one is desired - "Troy" and the program ends.

## Example
| **Input** | **Output** |
| --- | --- |
| The Spot | The book you search is not here! |
| 4 | You checked 4 books. |
| Hunger Games | |
| Harry Potter | |
| Torronto | | 
| Spotify | | 

### Comments
- Andreea is searching for a book with name "The Spot". The library contains 4 books.
- The first book is "Hunger Games", the second - "Harry Potter", the third - "Torronto", the fourth - "Spotify"
- Since there aren\'t other books in the library, reading names is stopped. Andreea didn\'t find the book.
[/task-description]
[tests]
[test open]
[input]
Troy
8
Stronger
Life Style
Troy
[/input]
[output]
You checked 2 books and found it.
[/output]
[/test]
[test open]
[input]
The Spot
4
Hunger Games
Harry Potter
Torronto
Spotify
[/input]
[output]
The book you search is not here!
You checked 4 books.
[/output]
[/test]
[test]
[input]
Bourne
32
True Story
Forever
More Space
The Girl
Spaceship
Strongest
Profit
Tripple
Stella
The Matrix
Bourne
[/input]
[output]
You checked 10 books and found it.
[/output]
[/test]
[test]
[input]
Horror
22
Storm
Worms
Bronks
Paradise
Serdika
Stronger
Steroid
Proud
epic
Pepper
Purple Rain
Sephia
Philip The Killer
Saturday Night
Terror
Poor Man
Medom
medusa
saturn
story teller
Spotify
santas Life
[/input]
[output]
The book you search is not here!
You checked 22 books.
[/output]
[/test]
[test]
[input]
Sports
7
Stars
String It
Glamour
Paris 
Life Spell
Poppay
Proud of ME
[/input]
[output]
The book you search is not here!
You checked 7 books.
[/output]
[/test]
[test]
[input]
Programming Basics
4
Four
Triple W
Sarrah
Programming Basics
[/input]
[output]
You checked 3 books and found it.
[/output]
[/test]
[test]
[input]
La Liga
1
Troy
[/input]
[output]
The book you search is not here!
You checked 1 books.
[/output]
[/test]
[test]
[input]
The Post
5
Porto
Troy
Stormy
Udemy
The Post
[/input]
[output]
You checked 4 books and found it.
[/output]
[/test]
[test]
[input]
Most Wanted
9
Post Fight
stormy Wife
Windows..
Saturn
Karate Kid
Don't Think about me
Most Dangerous
Prepare for fight
Fair
The book you search is not here!
[/input]
[output]
The book you search is not here!
You checked 9 books.
[/output]
[/test]
[test]
[input]
Paramedick
11
Pop
Rock
Metallica
Mamma Mia
Morandy
Solo
Ordinary Life
Portable
Paramedick
[/input]
[output]
You checked 8 books and found it.
[/output]
[/test]
[test]
[input]
Possesion
1
Possesion
[/input]
[output]
You checked 0 books and found it.
[/output]
[/test]
[test]
[input]
Keep Trying
1
sout
[/input]
[output]
The book you search is not here!
You checked 1 books.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Exam Preparation
[code-task title="Exam Preparation" taskId="pb-java-while-loop-exam-preparation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program in which Martin solves problems for exams until he receives message from his trainer: "**Enough**". 

Every time he solves a problem, he get a grade. **The program should ends either** Martin receives "Enough" command, **or obtain the number of poor grades**. 

A poor grade is a grade less or equal to 4.00.

## Input
- On the first line – **number of poor grades** – integer in range \[1…5\]
- **After that repeatedly two lines**:
  - **Name of a problem - text**
  - **Grade** - integer in range \[2…6\]

## Output
- If Martin reaches "**Enough**" command, print **3** lines:
  - "Average score: \{average grade\}"
  - "Number of problems: \{number of ALL problems\}"
  - "Last problem: \{last problem\'s name\}"
- **If he gets the specified number of poor grades**:
  - "You need a break, \{number poor grades\} poor grades."

**The average grade should be formatted to the second decimal point.**

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | Average score: 5.25 |
| Money | Number of problems: 4 |
| 6 | Last problem: Bus |
| Story | |
| 4 | |
| Spring Time | |
| 5 | |
| Bus | |
| 6 | |
| Enough | |

### Comments
- The number of allowed poor grades is 3.
- First problem\'s name is Money, Martin\'s grade is 6.
- Second problem - Story, grade - 4.
- Third problem - Spring Time, grade - 5.
- Fourth problem - Bus, grade - 6.
- Next command is Enough, the program ends.
- Average grade: 21 / 4 = 5.25
- Number of solved problems: 4
- Last problem: Bus

## Example
| **Input** | **Output** |
| --- | --- |
| 2| You need a break, 2 poor grades. |
| Income| |
| 3| |
| Game Info| |
| 6| |
| Best Player| |
| 4| |

### Comments
- The number of allowed poor grades is 2.
- The first problem\'s name is Income, Martin\' grade is 3.
- Second problem - Game Info, grade - 6.
- Third problem - Best Player, grade - 4.
- Martin reaches the number of allowed poor grades, it is time for break.
[/task-description]
[tests]
[test open]
[input]
3
Money
6
Story
4
Spring Time
5
Bus
6
Enough
[/input]
[output]
Average score: 5.25
Number of problems: 4
Last problem: Bus
[/output]
[/test]
[test open]
[input]
2
Income
3
Game Info
6
Best Player
4
[/input]
[output]
You need a break, 2 poor grades.
[/output]
[/test]
[test]
[input]
4
Stone Age
5
Freedom
5
Storage
3
Enough
[/input]
[output]
Average score: 4.33
Number of problems: 3
Last problem: Storage
[/output]
[/test]
[test]
[input]
1
Estonia
6
Friday
6
Spaceship
5
Moving
6
Cake
4
[/input]
[output]
You need a break, 1 poor grades.
[/output]
[/test]
[test]
[input]
2
Personality
6
Stable versin
4
Stereotipe
6
Forerunner
6
IronMan
6
Enough
[/input]
[output]
Average score: 5.60
Number of problems: 5
Last problem: IronMan
[/output]
[/test]
[test]
[input]
2
Toronto
6
Graduation Pt3
3
Lilli
6
Graduation Pt2
6
Old Library
4
[/input]
[output]
You need a break, 2 poor grades.
[/output]
[/test]
[test]
[input]
3
ExamPrep
6
oldBooks
5
ForestGump
6
IronMan
6
Sephia
6
From 1 to 100
6
Substitute
6
Footbal Kit
5
Best Player
6
Game Statistics
6
Enough
[/input]
[output]
Average score: 5.80
Number of problems: 10
Last problem: Game Statistics
[/output]
[/test]
[test]
[input]
3
Iron Man
3
Substitute
6
Cat Walk
4
Cat Watch
3
[/input]
[output]
You need a break, 3 poor grades.
[/output]
[/test]
[test]
[input]
4
Stadium Income
6
New House
6
Old Books
6
Fishing Boat
6
Substitute
4
Troubles
4
Checker
6
Mathematics
6
Enough
[/input]
[output]
Average score: 5.50
Number of problems: 8
Last problem: Mathematics
[/output]
[/test]
[test]
[input]
4
Football Kit
3
Game Statistics
4
Argumented Reality
5
Virtual Reality
6
Cat Walk
3
Problem
4
[/input]
[output]
You need a break, 4 poor grades.
[/output]
[/test]
[test]
[input]
5
Sofia
6
Arested
6
Substitute
4
Graduation Pt3
3
On time for Exam
5
Cat Walk
4
Football Kit 4
4
Festival
3
[/input]
[output]
You need a break, 5 poor grades.
[/output]
[/test]
[test]
[input]
4
Stronger
6
Coliseum
5
Medicine
6
Static play
6
Volleyball
6
New House
6
Old Library
6
Fishing Boat 
6
Enough
[/input]
[output]
Average score: 5.88
Number of problems: 8
Last problem: Fishing Boat
[/output]
[/test]
[test]
[input]
3
PlayStation
5
Best Player
5
Poison
5
Enough
[/input]
[output]
Average score: 5.00
Number of problems: 3
Last problem: Poison
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Walking
[code-task title="Walking" taskId="pb-java-while-loop-Walking" executionType="tests-execution" executionStrategy="java-code" requiresInput ]
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
Gaby wants to start healthy life and she sets a goal to walk **10000 steps** a **day**.

Write a program **that reads from the console how many steps** Gaby walks every time she is out and **when she reaches the set goal**, print a message: 
- "**Goal reached! Good job!**".

In case she wants to go home **before** reaching the goal, she will enter "**Going home**" command and the **steps** she had **walked** while she was **going home**. 

After that, if she didn\'t manage to reach her goal, you have to print the following massage on the console: 
- "\{difference in steps\} more steps to reach goal."

## Examples

| **Input** | **Output** |
| --- | --- |
| 1000 | Goal reached! Good job! |
| 1500| | 
| 2000| | 
| 6500| |


| **Input** | **Output** |
| --- | --- |
| 1500 | 2500 more steps to reach goal. |
| 300| |
| 2500| |
| 3000| |
| Going home| |
| 200| | |
[/task-description]
[tests]
[test open]
[input]
1000
1500
2000
6500
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test open]
[input]
1500
300
2500
3000
Going home
200
[/input]
[output]
2500 more steps to reach goal.
[/output]
[/test]
[test]
[input]
1500
3000
250
1548
2000
Going home
2000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
125
250
4000
30
2678
4682
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
Going home
10000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
Going home
2000
[/input]
[output]
8000 more steps to reach goal.
[/output]
[/test]
[test]
[input]
1000
1000
2333
1234
12455
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
10000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
50
505
50
50
50
50
50
50
50
20
450
30
30
30
20
10
30
1
20
30
340
1000
30
40
200
30
200
20
20
1000
1000
305
5066
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
100
100
200
3004
3445
2344
Going home
4000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
1321
1345
457
6577
Going home
20
[/input]
[output]
280 more steps to reach goal.
[/output]
[/test]
[test]
[input]
Going home
4500
[/input]
[output]
5500 more steps to reach goal.
[/output]
[/test]
[test]
[input]
350
120
1204
1245
7432
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
5000
344
234
2344
Going home
200
[/input]
[output]
1878 more steps to reach goal.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Dishwasher
[code-task title="Dishwasher" taskId="pb-java-while-loop-Dishwasher" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
John works in a restaurant and is responsible for loading the dishwasher at the end of the day. 

Your task is to write a program that calculates **whether** a purchased quantity of bottles of dishwasher detergent is **enough** to wash a certain amount of vessels. 

It is known that each bottle contains **750 ml.** detergent. 

For 1 **plate** 5 ml is needed, and for a **pots** 15 ml. 

Accept that on every **third** filling with vessels, the dishwasher is filled only with pots, and the other times with plates. 

Until you get the command **"END"** you will continue to receive the number of vessels that need to be washed.

# Input
Read from the console: 
- **Number of bottles of detergent** that will be used for washing of plates - integer in range \[1...10\] 

On each **subsequent** line, until the command **"End"** or until **the amount of detergent is not run out**, the **number of vessels** that need to be washed - integer in range \[1...100\]

# Output
- In case that the amount of detergent **was sufficient** for the washing of the vessels, print three lines of output: 
    - "Detergent was enough!"
    - "\{Number of clean plates\} dishes and \{number of clean pots\} pots were washed."
    - "Leftover detergent \{amount of detergent remaining\} ml." 
- If the amount of detergent **was not sufficient** for the washing of the vessels, print the following line: 
    - "Not enough detergent, \{quantity not reached detergent\} ml. more necessary!"

## Example

| **Input** | **Output** |
| --- | --- |
| 2 | Detergent was enough! |
| 53 | 118 dishes and 55 pots were washed. |
| 65 | Leftover detergent 85 ml. |
| 55 | |
| End | |

### Comments
- Detergent quantity = 2 \* 750 = 1500 ml.
- 53 plates are loaded = > 53 \* 5 = 265 ml.  1500 \- 265 = 1235 ml. (residue)
- 65 plates = > 65 \* 5 = 325 ml 1235 \- 325 = 910 ml. (residue)
- 55 pots = > 55 \* 15 = 825 ml 910\- 825 = 85 ml. (residue)
- We receive the command "End", therefore the quantity is reached and the corresponding message is printed: number of plates = 53 \+ 65 = 118. Number of pots = 55

## Example
| **Input** | **Output** |
| --- | --- |
| 1 | Not enough detergent, 100 ml. more necessary! |
| 10 | |
| 15 | |
| 10 | |
| 12 | |
| 13 | |
| 30 | |
[/task-description]
[tests]
[test open]
[input]
2
53
65
55
End
[/input]
[output]
Detergent was enough!
118 dishes and 55 pots were washed.
Leftover detergent 85 ml.
[/output]
[/test]
[test open]
[input]
1
10
15
10
12
13
30
[/input]
[output]
Not enough detergent, 100 ml. more necessary!
[/output]
[/test]
[test]
[input]
2
53
65
55
End
[/input]
[output]
Detergent was enough!
118 dishes and 55 pots were washed.
Leftover detergent 85 ml.
[/output]
[/test]
[test]
[input]
1
10
15
10
12
13
30
[/input]
[output]
Not enough detergent, 100 ml. more necessary!
[/output]
[/test]
[test]
[input]
2
25
50
75
End
[/input]
[output]
Detergent was enough!
75 dishes and 75 pots were washed.
Leftover detergent 0 ml.
[/output]
[/test]
[test]
[input]
2
25
50
75
1
[/input]
[output]
Not enough detergent, 5 ml. more necessary!
[/output]
[/test]
[test]
[input]
3
66
33
99
End
[/input]
[output]
Detergent was enough!
99 dishes and 99 pots were washed.
Leftover detergent 270 ml.
[/output]
[/test]
[test]
[input]
3
38
47
59
75
31
29
[/input]
[output]
Not enough detergent, 25 ml. more necessary!
[/output]
[/test]
[test]
[input]
4
25
39
31
20
49
66
33
25
End
[/input]
[output]
Detergent was enough!
191 dishes and 97 pots were washed.
Leftover detergent 590 ml.
[/output]
[/test]
[test]
[input]
1
32
33
45
[/input]
[output]
Not enough detergent, 250 ml. more necessary!
[/output]
[/test]
[test]
[input]
4
52
3
13
39
86
50
49
37
End
[/input]
[output]
Detergent was enough!
266 dishes and 63 pots were washed.
Leftover detergent 725 ml.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Report System
[code-task title="Report System" taskId="pb-java-while-loop-Report-System" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
At a charity event, payments for the purchased products are always **alternated**: **cash payment and card payment**. **Always first payment method is cash**.

The following payment rules have been established:
- If the product **exceeds 100 dollars**, it **cannot be paid in cash**
- If the product is priced **under 10 dollars**, it **cannot be paid by credit card**

The program ends either after we receive the command **"End"**, or after the **funds are collected**.

## Input
Read from the console:
- The amount **expected to be collected** from sales - integer in range \[1...10000\] 

On each subsequent line, until the **"End"** command is received or until **the necessary funds are collected**: 
    - **The prices of items** to be purchased - integer in range \[1...500\]

## Output
Print on the console:
- In case of successful transaction: "Product sold!" 
- In case of unsuccessful transaction: "Error in transaction!" 
- If the sum of all purchased products **exceeds or reaches the expected amount**, the program must be completed and **two lines** are printed to the console: 
    - "Average CS: \{average payment in person's cash\}" 
    - "Average CC: \{average card payment per person\}"
    Payments must be **formatted to the second digit after the decimal point**.
- When the **"End"** command is received, **one line** is written:
    - "Failed to collect required money for charity."

## Example

| **Input** | **Output** |
| --- | --- |
| 500| Error in transaction!|
| 120| Error in transaction!|
| 8| Product sold!|
| 63| Product sold!|
| 256| Product sold!|
| 78| Product sold!|
| 317| Average CS: 70.50|
| | Average CC: 286.50|

### Comments
- The condition is rotated first in **cash payment**, then through **credit card**
- 120 > 100 transaction is rejected 
- 8 < 10 transaction is rejected 
- 63 <= 100 => the transaction was successful
- 256 >= 10 => the transaction was successful 
- 78 <= 100 => the transaction was successful 
- 317 >= 10 => the transaction was successful 
- Total amount collected: 63 + 256 + 78 + 317 = 714 
- 714 >= 500
- Total cash: 63 + 78 = 141;  Average cash: 141/2 = 70.50 
- Total credit cards: 256 \+ 317 = 573; Average credit cards: 573/2 = 286.50

[/task-description]
[tests]
[test open]
[input]
500
120
8
63
256
78
317
[/input]
[output]
Error in transaction!
Error in transaction!
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 70.50
Average CC: 286.50
[/output]
[/test]
[test]
[input]
600
86
150
98
227
End
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
500
100
200
100
100
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 100.00
Average CC: 150.00
[/output]
[/test]
[test]
[input]
100
101
9
80
20
[/input]
[output]
Error in transaction!
Error in transaction!
Product sold!
Product sold!
Average CS: 80.00
Average CC: 20.00
[/output]
[/test]
[test]
[input]
5000
150
890
70
1500
200
1000
End
[/input]
[output]
Error in transaction!
Product sold!
Product sold!
Product sold!
Error in transaction!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
4333
64
333
150
1234
100
6
66
335
End
[/input]
[output]
Product sold!
Product sold!
Error in transaction!
Product sold!
Product sold!
Error in transaction!
Product sold!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
600
25
346
100
256
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 62.50
Average CC: 301.00
[/output]
[/test]
[test]
[input]
777
120
6
333
8
453
134
End
[/input]
[output]
Error in transaction!
Error in transaction!
Error in transaction!
Error in transaction!
Error in transaction!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
2983
35
995
94
937
38
593
End
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Product sold!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Graduation
[code-task title="Graduation" taskId="pb-java-while-loop-graduation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a program that calculates the **average grade** of a student from his entire education. 

## Input
- On the first line you will receive **the name of the student**, and on each following line his annual grades. - The student passes to upper class, if his **annual grade is 4.00 or greater**. 
- If his grade is less than 4.00, he has to **repeat** the class.

## Output
- If the student graduates **12th** class, you have to print:
    - "\{student name\} graduated. Average grade: \{average grade from his entire education\}"

**The grade should be formatted to the second decimal point.**

## Example

| **Input** | **Output** |
| --- | --- | 
| John | John graduated. Average grade: 5.37 | 
| 4 | |
| 5.5 | | 
| 6 | | 
| 5.43 | |
| 4.5 | | 
| 6 | | 
| 5.55 | | 
| 5 | | 
| 6 | | 
| 6 | | 
| 5.43 | |
| 5 | |
[/task-description]
[tests]
[test open]
[input]
David
4
5.5
6
5.43
4.5
6
5.55
5
6
6
5.43
5
6
[/input]
[output]
David graduated. Average grade: 5.37
[/output]
[/test]
[test]
[input]
Ani
5
5.32
6
5.43
5
6
5.5
4.55
5
6
5.56
6
5
[/input]
[output]
Ani graduated. Average grade: 5.45
[/output]
[/test]
[test]
[input]
John
5
5
5
6
5.5
5
6
5.44
5
5
5
5
6
5.45
[/input]
[output]
John graduated. Average grade: 5.25
[/output]
[/test]
[test]
[input]
Prakash
5
5.43
5.55
6
5.87
5.90
6
6
5.45
5
6
5.76
[/input]
[output]
Prakash graduated. Average grade: 5.66
[/output]
[/test]
[test]
[input]
Monica
6
5.5
5.75
6
6
5
6
5.90
6
6
5
6
[/input]
[output]
Monica graduated. Average grade: 5.76
[/output]
[/test]
[test]
[input]
Alex
4
5
5.5
3.99
6
6
5
4.5
6
5.56
6
6
4
[/input]
[output]
Alex graduated. Average grade: 5.30
[/output]
[/test]
[test]
[input]
Alen
5.6
6
4
4
5
6
3
6
5.4
4.5
6
5.55
6
[/input]
[output]
Alen graduated. Average grade: 5.34
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Stream Of Letters
[code-task title="Stream Of Letters" taskId="pb-java-while-loop-stream-of-letters" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive symbols the "**End**" command. 

You skip the **non-letter chars** and the first occurence of **c**, **o**  and **n** (code chars).

When you **first receive** one of these letters, you have to mark it as visited, **but it is not saved in the word**.

After you have found **all three code chars from the command**, you have to print the word with a space and reset the counting of the code chars.

## Input
- Read a sequence of lines with a single symbol each, until you receive the "**End**" command

## Output
- Print on the console **every word after the secret command** followed by **space**

## Example
| **Input** | **Output** |
| --- | --- |
| H | Hello |
| n| |
| e| |
| l| |
| l| |
| o| | 
| o| |
| c| |
| End| |

### Comments
- "**H**", "**n**", "**e**", "**l**", "**l**", "**o**", "**o**", "**c**" are all read letters.
- First we read "**H**" and we add it to the word. The next symbol is "**n**". It\'s part of the command and we **do not add it to the word as we meet it for the first time**.
- The next symbols are "**e**", "**l**", "**l**" and we add them to the word. We read "**o**" and we mark it as visited, but again we do **not** add it to the word. The next letter is "**o**" again and it\'s added. The next is "**c**" and all three symbols for the secret command are available.
- We print "**Hello** " and we recieve "End" command and the programs ends. The result is "Hello ".

## Example
| **Input** | **Output** |
| --- | --- |
| % | BooM |
| \!| |
|  c|
| ^| |
| B| |
| \`| | 
| o| |
| %| |
| o| |
| o| |
| M| |
| \)| |
| n| |
| A| |
| D| |
| End| |

## Example
| **Input** | **Output** |
| --- | --- |
| o | Solve me |
| S | |
| % | |
| o | |
| l | |
| ^ | |
| v | |
| e | |
| c | |
| n | |
| & | |
| m | |
| e | |
| c | |
| o | |
| n | |
| End | |

[/task-description]
[tests]
[test open]
[input]
H
n
e
l
l
o
o
c
t
c
h
o
e
r
e
n
e
End
[/input]
[output]
Hello there 
[/output]
[/test]
[test open]
[input]
%
\!
c
^
B
\`
o
%
o
o
M
\)
\{
n
\\
A
D
End
[/input]
[output]
BooM 
[/output]
[/test]
[test]
[input]
o
S
%
o
l
^
v
e
c
n
&
m
e
c
o
n
End
[/input]
[output]
Solve me 
[/output]
[/test]
[test]
[input]
c
c
o
o
n
n
End
[/input]
[output]
co 
[/output]
[/test]
[test]
[input]
%
$
\!
\)
\(
\{
\}
End
[/input]
[output]
[/output]
[/test]
[test]
[input]
H
e
c
o
@
r
%
e
n
w
c
o
e
n
g
o
c
o
n
w
i
t
n
o
h
c
t
h
c
\*
o
e
n
s
i
g
&
n
n
s
@
c
o
%
n
End
[/input]
[output]
Here we go with the signs 
[/output]
[/test]
[test]
[input]
o
n
C
c
n
c
O
o
c
o
N
n
End
[/input]
[output]
C O N 
[/output]
[/test]
[test]
[input]
c
o
n
n
c
o
n
o
c
End
[/input]
[output]
   
[/output]
[/test]
[test]
[input]
I
c
n
n
o
t
c
h
o
e
n
n
e
n
c
d
o
L
i
n
k
i
n
P
a
r
k
End
[/input]
[output]
In the end 
[/output]
[/test]
[test]
[input]
T
c
h
e
o
r
e
n
I
c
s
o
n
A
c
o
n
H
i
c
d
d
e
n
n
o
M
e
n
s
s
o
a
g
e
c
o
N
o
t
c
n
o
P
r
i
n
n
t
e
d
c
M
a
d
e
Y
o
u
L
o
o
k
\!
End
[/input]
[output]
There Is A Hidden Message Not Printed 
[/output]
[/test]
[test]
[input]
O
u
t
%
O
f
%
I
d
e
a
s
End
[/input]
[output]
[/output]
[/test]
[test]
[input]
I
c
o
n
$
L
c
i
k
o
e
n
^
c
N
o
a
r
u
t
o
n
%
a
n
d
^
t
h
i
n
k
&
t
h
a
t
\)
p
e
o
p
l
e
@
a
r
e
\+
b
i
a
s
e
d
\(
t
o
w
a
r
d
s
\)
A
n
i
m
e
s
End
[/input]
[output]
I Like Naruto 
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide]
# Homework Results

[tasks-results/]
[/slide]