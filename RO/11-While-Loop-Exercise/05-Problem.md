[slide]
# Problem: Exam Preparation
[code-task title="Exam Preparation" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description 
Write a program in which Martin solves problems for exams until he receives message from his trainer: "**Enough**". 

Every time he solves a problem, he get a grade. **The program should ends either** Martin receives "Enough" command, **or obtain the number of poor grades**. 

A poor grade is a grade less or equal to 4.00.

# Input
- On the first line – **number of poor grades** – integer in range \[1…5\]
- **After that repeatedly two lines**:
  - **Name of a problem - text**
  - **Grade** - integer in range \[2…6\]

# Output
- If Martin reaches "**Enough**" command, print **3** lines:
  - "Average score: \{average grade\}"
  - "Number of problems: \{number of ALL problems\}"
  - "Last problem: \{last problem\'s name\}"
- **If he gets the specified number of poor grades**:
  - "You need a break, \{number poor grades\} poor grades."

**The average grade should be formatted to the second decimal point.**

# Example
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

## Comments
- The number of allowed poor grades is 3.
- First problem\'s name is Money, Martin\'s grade is 6.
- Second problem - Story, grade - 4.
- Third problem - Spring Time, grade - 5.
- Fourth problem - Bus, grade - 6.
- Next command is Enough, the program ends.
- Average grade: 21 / 4 = 5.25
- Number of solved problems: 4
- Last problem: Bus

# Example
| **Input** | **Output** |
| --- | --- | --- |
| 2| You need a break, 2 poor grades. |
| Income| |
| 3| |
| Game Info| |
| 6| |
| Best Player| |
| 4| |

## Comments
- The number of allowed poor grades is 2.
- The first problem\'s name is Income, Martin\' grade is 3.
- Second problem - Game Info, grade - 6.
- Third problem - Best Player, grade - 4.
- Martin reaches the number of allowed poor grades, it is time for break.
[/task-description]
[tests]
[test]
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
[test]
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