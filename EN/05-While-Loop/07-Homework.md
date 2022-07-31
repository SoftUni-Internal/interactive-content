# Homework

[slide hideTitle]
# Problem with Solution: Sum Digits

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-Problem-and-Solution-Sum-Digits-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Create a program that:

* Reads a number from the console
* **Sums** all the **digits** of the given number
* Prints the sum of all digits

## Example
| **Input** | **Output** |
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

[slide hideTitle]
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
Create a program that:

* Reads a **string** representing the name of a particular book
* Reads another string values until it receives the name of the first book again.
* Prints "Book found! Attempts: \{attemptsCount\}" and stops

## Example
| **Input** | **Output** |
| --- | --- |
| Alice in Wonderland | Book found! Attempts: 3 |
| Winnie the Pooh | |
| Peter Pan | |
| Alice in Wonderland | |

[hints]
[hint]
Firstly read the title of the book.
[/hint]
[hint]
Then using a **while loop**, keep reading titles until you receive the same one as in the start. Keep track of the attempts and print them at the end!
[/hint]
[/hints]

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

[slide hideTitle]
# Problem with Solution: Find Min and Max

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-Problem-and-Solution-Find-Min-and-Max-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Create a program that:

* Reads integers until the **"END"** command is received

* Prints the **greatest** and the **smallest** integers in the following format:
   * "**Max number:** \{**max number**\}"
   * "**Min number:** \{**min number**\}"

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

[slide hideTitle]
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
A **special** number is a number **divisible by all of its digits** without a remainder. 

Create a program that:
* Receives an integer value
* **Prints** "\{**num**\} **is special**", if the number is special
* Otherwise, prints "\{**num**\} **is not special**"

## Example
| **Input** | **Output** |
| --- | --- |
| 23 | 23 is not special |
| 404 | 404 is special |

[hints]
[hint]
Using a while loop, iterate over every digit of the number. 
[/hint]
[hint]
You can get each of the digits using: int lastDigit = number % 10; number /= 10; 
[/hint]
[hint]
In the end, print if the number is special or not.
[/hint]
[/hints]

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

[slide hideTitle]
# Problem with Solution: Special Bonus

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-Problem-and-Solution-Special-Bonus-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Create a program that: 

* Reads an **integer** number
* Keeps reading integers until it receives the **same number**
* When such a number is received, the value of the **previous** number should be increased by **100%**
* The **increased number** should be printed to the console

## Example
| **Input** | **Output** |
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

[slide hideTitle]
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
Create a program that:

* Reads an integer number - `n` 
* Prints a **sequence** of numbers that are **<= `n`** and satisfy the following condition:
* Each number is equal to the previous one multiplied by **2** plus **1** 

## Example
| **Input** | **Output** |
| --- | --- |
| 8 | 1 |
|  | 3 |
|  | 7 |

[hints]
[hint]
The condition of your while loop should be (<= n)
[/hint]
[hint]
```java
while (2*num+1<=n)
    {
        num = num * 2 + 1;
        (...)
    }
```
[/hint]
[/hints]

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

[slide hideTitle]
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
Create a program that:

* Receives a number representing the **amount of money** for each transaction, until the **END** command is received
* **Adds** the money to the **balance** and **prints**: "Increase: \{money\}".  The `money` should be formatted to the **2nd digit** after the decimal point
* After the **END** command is received, calculates and **prints** the **total balance**: "Total: \{balance\}". The `balance` should be formatted to the **2nd digit** after the decimal point

## Example
| **Input** | **Output** |
| --- | --- |
| 5.51 | Increase: 5.51 |
| 69.42 | Increase: 69.42 |
| 100 | Increase: 100.00 |
| END | Total: 174.93 |

[hints]
[hint]
Read data until reaching END. In every iteration, keep track of the money and then print it after the END command.
[/hint]
[hint]
Don't forget to format the result to the second decimal point!
[/hint]
[/hints]

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
Total: 174.93
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

[slide hideTitle]
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
After spending a couple of years abroad Andreea finally goes back home.

Help Andreea find the **book** she\'s searching for by writing a program in which she enters the **title** of the book (**string**) and the **number of books** in the library (**integer**).  

**Until** Andreea finds her favorite book **or** prior to going through the whole library, the program has to read a new title of a book on each consecutive line.

## Input
- The name of the book Andreea is searching for - **string**
- The number of books in the library - **integer**
- A new name of a book - **string**

## Output
- If Andreea **does not** find the book, print **two** lines:
  - "**The book you search is not here!**"
  - "**You checked** \{**count**\} **books.**"
- If Andreea **finds** the book, print a **single** line:
  - "**You checked** \{**count**\} **books and found it.**"

## Example
| **Input** | **Output** |
| --- | --- |
| Troy | You checked 2 books and found it. |
| 8 | |
| Stronger | |
| Life Style | |
| Troy | |

[hints]
[hint]
Andreea is searching for a book with the name "Troy", and the library\'s capacity is 8 books.
[/hint]
[hint]
The first book is called "Stronger", the second one is called "Life Style" and the third one - “Troy”. This is the one Andreea has been looking for all along. Therefore, the program ends.
[/hint]
[/hints]

## Example
| **Input** | **Output** |
| --- | --- |
| The Spot | The book you search is not here! |
| 4 | You checked 4 books. |
| Hunger Games | |
| Harry Potter | |
| Torronto | | 
| Spotify | | 

[hints]
[hint]
Andreea is searching for a book with the name "The Spot". The library contains 4 books.
The first book is "Hunger Games", the second - "Harry Potter", the third - "Torronto" and the fourth - "Spotify".
[/hint]
[hint]
Since there are no more books in the library the program ends.
[/hint]
[/hints]

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

[slide hideTitle]
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
Martin, your classmate, should prepare for his end of year exam.

In order to do that he should solve math problems until he receives the message **Enough** from his tutor. 

Every time he solves a problem he receives a grade.

**The program should end** when he receives the message **Enough** or when he reaches the limit of poor grades.

A poor grade is a grade less than or equal to **4.00**.

## Input
- **Limit of poor grades** – integer in range \[1…5\]
Until the program ends, we will receive the following 2 lines: 
  - **Name of a problem** - a string value
  - **Grade** - an integer in range \[2…6\]

## Output
- If Martin receives the **Enough** command, print the following **3** lines:
  - "**Average grade:** \{**average grade**\}"
  - "**Number of problems:** \{**number of ALL problems**\}"
  - "**Last problem:** \{**last problem\'s name**\}"
- If he reaches the **specified limit of poor grades**:
  - "**You need a break**, \{**number poor grades**\} **poor grades.**"

The **average grade** should be formatted to the second decimal point.

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

[hints]
[hint]
The number of allowed poor grades is 3.
[/hint]
[hint]
The first problem is called called **Money**. Martin has a grade equal to **6**.
The second problem is called **Story**. Martin has a grade equal to **4**.
The third problem is called **Spring Time**. Martin has a grade equal to **5**.
The fourth problem is called **Bus**. Martin has a grade equal to **6**.
Then, we receive **Enough**, which is the end of the program.
[/hint]
[hint]
Average grade: 21 / 4 = 5.25
Number of solved problems: 4
Last problem: Bus
[/hint]
[/hints]

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

[hints]
[hint]
The number of allowed poor grades is 2.
[/hint]
[hint]
The first problem is called called **Income**. Martin has a grade equal to **3**.
The second problem is called **Game Info**. Martin has a grade equal to **6**.
The third problem is called **Best Player**. Martin has a grade equal to **4**.
Martin reaches the limit of allowed poor grades, so it is time for him to take a break.
[/hint]
[/hints]
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

[slide hideTitle]
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
Gaby wants to start a healthy lifestyle so that she sets a goal to walk **10000 steps** a **day**.

Create a program that reads from the console **how many steps** Gaby walks every time she goes out, and **when she reaches the set goal**, prints the following message: 
- **Goal reached! Good job!**.

In case she wants to go home **before** reaching the goal, she will enter the command **Going home** and the **steps she had walked while she was going back home**.  

If she did not manage to reach her goal, you have to print out the following massage:
- "\{**difference in steps**\} **more steps to reach goal.**"

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
| 200| | 

[hints]
[hint]
Iterate over the number of steps before reaching the end goal, or receiving one of the stop commands.
[/hint]
[hint]
Check if the sum is less or more than the needed goal.
[/hint]
[/hints]

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

[slide hideTitle]
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
John works in a restaurant. He is responsible for loading the dishwasher at the end of the day. 

Your task is to create a program that calculates **whether** the purchased quantity of bottles of dishwasher detergent is **enough** to wash a certain amount of dishes. 

It is known that each bottle contains **750 ml.** of detergent. 

For a **plate** only **5ml.** are required, whereas for a **bowl** – **15 ml**.

Every **third** time we load the dishwasher with bowls only. The rest of the time we load it with **plates**.

Until **END** is entered in the console, the program will keep on receiving the number of dishes that need to be washed.

# Input
Read from the console: 
- **Number of bottles of detergent** that will be used - integer in range \[1...10\] 

- On each subsequent line, until the command **End**, or until **we run out of detergent**, we will receive the **number of vessels** that need to be washed - integer in range \[1...100\]

# Output
- If the amount of the detergent **is sufficient** for washing all the vessels, print the following three lines: 
    - "**Detergent was enough!**"
    - "\{**Number of clean plates**\} **dishes and** \{**number of clean pots**\} **pots were washed.**"
    - "**Leftover detergent** \{**amount of detergent remaining**\} **ml.**" 
- If the amount of detergent **is not sufficient**, print the following line: 
    - "**Not enough detergent**, \{**quantity not reached detergent**\} **ml. more necessary!**"

## Example

| **Input** | **Output** |
| --- | --- |
| 2 | Detergent was enough! |
| 53 | 118 dishes and 55 pots were washed. |
| 65 | Leftover detergent 85 ml. |
| 55 | |
| End | |

[hints]
[hint]
First read the number of bottles of detergent.
[/hint]
[hint]
Detergent quantity = 2 \* 750 = 1500 ml.
53 plates are loaded = > 53 \* 5 = 265 ml.  1500 \- 265 = 1235 ml. left
65 plates = > 65 \* 5 = 325 ml 1235 \- 325 = 910 ml. left
55 pots = > 55 \* 15 = 825 ml 910\- 825 = 85 ml. left
[/hint]
[hint]
We receive the command "End". Therefore, we can conclude that the quantity is enough, so the corresponding messages are printed: 
- number of all plates washed = 53 \+ 65 = 118. 
- number of all pots washed = 55
[/hint]
[/hints]

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

[slide hideTitle]
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
At a charity event, people can pay for their purchased products **in cash** or by **credit card**. 
The method of payment alternates as follows:
- The first payment should be **in cash**
- The second payment should be made by **credit card**
- The third one should be **in cash** and so on


The following payment rules have been established:
- If the product's price **exceeds 100 dollars**, it **cannot be paid in cash**
- If the product is priced **under 10 dollars**, it **cannot be paid by credit card**

The program ends when we receive the command **End**, or when the needed **funds are collected**.

## Input
Read from the console:
- The amount that should be **collected** from sales - integer in range \[1...10000\] 

- On the next lines, until the program ends:
    - **The prices of items** to be purchased - integer in range \[1...500\]

## Output
Print out:
- In case of successful transaction: **"Product sold!"** 
- In case of unsuccessful transaction: **"Error in transaction!"** 
- In case we reach the expected amount of money, the following two lines should be printed out:
    - **"Average CS:** \{**average payment in cash per person**\}"
    - **"Average CC:** \{**average payment by card per person**\}"
 All payments must be **formatted to the second digit after the decimal point**.
- In case the **End** command is received, the following line should be printed out:
    - **"Failed to collect required money for charity."**

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


[hints]
[hint]
The first type of payment should be **in cash**
120 > 100 => the transaction is rejected 
8 < 10 => the transaction is rejected 
63 <= 100 => the transaction is successful
256 >= 10 => the transaction is successful 
78 <= 100 => the transaction is successful 
317 >= 10 => the transaction is successful 
Total amount of money collected: 63 + 256 + 78 + 317 = 714  
714 >= 500
[/hint]
[hint]
- Total amount of money in cash: 63 + 78 = 141 
  - Average amount of money in cash: 141/2 = 70.50 
- Total amount of money received by credit card: 256 \+ 317 = 573 
  - Average amount of money received by credit card: 573/2 = 286.50
[/hint]
[/hints]


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

[slide hideTitle]
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

Create a program that calculates the **average grade** of a student for his entire education. (From **1st** to **12th** grade).

## Input
- On the first line, we will receive **the name of the student** 
- On the next lines, we will receive his grades

- If his grade is **4.00 or greater**, he graduates
- If his grade is **less than 4.00**, he has to **repeat** the class

## Output
- If the student graduates, we have to print out:
    - "\{**student name**\} **graduated. Average grade:** \{**average grade from his entire education**\}"

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

[hints]
[hint]
After reading the name, iterate over the 12 grades.
[/hint]
[hint]
Get their average value, and if it is more than 4.00 print that the students graduates, other wise do not print anything.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
John
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
[/input]
[output]
John graduated. Average grade: 5.37
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

[slide hideTitle]
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
We will receive symbols until the **End** command is received. 

We should skip the **non-letter chars** and the first occurrence of **c**, **o**, and **n**.

When we receive one of those letters (**c**, **o**, or **n**) for the first time, we should not use it to form our word, but we have to note that it is encountered. 

If we receive all three **secret symbols**, we have to add а **white space** to the end of our word and **print it out**. We should reset the count of the appearance of each letter to **0**.

A **new word** is started which follows the same principle for it to be printed. (requires the **secret symbols** to be printed to the console).

## Input
- We will receive symbols, each on a new line, until we receive the "**End**" command

## Output
- Print out the word, followed by а **white space**

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

[hints]
[hint]
 "**H**", "**n**", "**e**", "**l**", "**l**", "**o**", "**o**", "**c**" are all letters that we receive.
First, we receive "**H**" and we add it to the word. The next symbol is "**n**". We receive this letter for a first time, so we **do not** add it to our word.
The next symbols are: "**e**", "**l**", "**l**" and we add them to the word. We receive "**o**" for a first time, so we **do not** add it to the word. The next letter is "**o**", but this time, we add it to the word. The next letter is "**c**", so all the three symbols (**c**, **o**  and **n**) are met.
[/hint]
[hint]
We print "**Hello** ". Then we receive the **"End"** command and the program ends. The result is **"Hello "**.
[/hint]
[/hints]


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
[test open]
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

