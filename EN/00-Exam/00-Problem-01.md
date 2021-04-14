# Problem 1: Bonus Scoring System
[slide hideTitle]

# Bonus Scoring System
[code-task title="Bonus Scoring System" taskId="Java-Fundamentals-Part-1-Exam-Bonus-Scoring-System" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program that calculates the **bonus points** for each **student**, for a certain course.

On the first line, you are going to receive **the number of students** for the course.

**On the second line**, you are going to receive **the number of the lectures** in the course.

On the third line, you are going to receive the **additional bonus** for the **course**. 

On the next lines, you will be receiving the **number of attendances for each student**. 

The bonus points are calculated using the following **formula**: 

\{total bonus\} = \{student attendances\} \/ \{course lectures\} \* (5 + \{additional bonus\})

Find the student with the **most bonus points** and print their total **points** along with **attendances** in the following format: 

"**Max Bonus:** \{**maxBonusPoints**\}."
"**The student has attended** \{**studentAttendances**\} **lectures.**"


In the end, round the bonus points up to **the next whole number**.

### Input / Constrains

- On the **first line**, you are going to receive the number of students - an integer in range \[0...50\]

- On the **second line**, you are going to receive the number of lectures - an integer in range \[0...50\]

- On the **third line**, you are going to receive **the initial bonus** - an integer in range \[0...100\]

- **On the next lines**, you will be receiving the number of **attendances of each student**

- There will **not be students with the same final amount of bonus points**

### Output

- Print the maximum bonus points, rounded up to the nearest whole number, along with the attendance of the given student, in the format described above 

## Example One
| **Input** | **Output** |
| --- | --- |
| 5 | Max Bonus: 34. |
| 25 | The student has attended 24 lectures. |
| 30 |  |
| 12 |  |
| 19 |  |
| 24 |  |
| 16 |  |
| 20 |  |

[hints]
[hint]
First, we receive the **number of students** enrolled in the course - **5**.

The total **count** of the **lectures** is **25** and the initial **bonus** is **30**.
[/hint] 
[hint]
Then we **calculate** the **bonus** of the student with **12** attendances, which is **16.8**.

We **continue** to calculate **each student's bonus points**.
[/hint] 
[hint]
The one **with** 24 **attendances** has the **highest bonus** - 33.6 (34 **rounded**), so we print the corresponding message to the console.
[/hint] 
[/hints] 

## Example Two
| **Input** | **Output** |
| --- | --- |
| 10 | Max Bonus: 18. |
| 30 | The student has attended 28 lectures. |
| 14 |  |
| 8 |  |
| 23 |  |
| 27 |  |
| 28 |  |
| 15 |  |
| 17 |  |
| 25 |  |
| 26 |  |
| 5 |  |
| 18 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
25
30
12
19
24
16
20
[/input]
[output]
Max Bonus: 34.
The student has attended 24 lectures.
[/output]
[/test]
[test open]
[input]
10
30
14
8
23
27
28
15
17
25
26
5
18
[/input]
[output]
Max Bonus: 18.
The student has attended 28 lectures.
[/output]
[/test]
[test]
[input]
3
10
5
4
6
3
[/input]
[output]
Max Bonus: 6.
The student has attended 6 lectures.
[/output]
[/test]
[test]
[input]
2
5
4
5
4
[/input]
[output]
Max Bonus: 9.
The student has attended 5 lectures.
[/output]
[/test]
[test]
[input]
4
4
4
4
3
2
1
[/input]
[output]
Max Bonus: 9.
The student has attended 4 lectures.
[/output]
[/test]
[test]
[input]
3
2
1
1
2
1
[/input]
[output]
Max Bonus: 6.
The student has attended 2 lectures.
[/output]
[/test]
[test]
[input]
3
10
7
5
4
1
[/input]
[output]
Max Bonus: 6.
The student has attended 5 lectures.
[/output]
[/test]
[test]
[input]
0
0
0
[/input]
[output]
Max Bonus: 0.
The student has attended 0 lectures.
[/output]
[/test]
[test]
[input]
5
8
12
7
8
6
5
4
[/input]
[output]
Max Bonus: 17.
The student has attended 8 lectures.
[/output]
[/test]
[test]
[input]
2
8
3
5
4
[/input]
[output]
Max Bonus: 5.
The student has attended 5 lectures.
[/output]
[/test]
[test]
[input]
2
6
5
6
5
[/input]
[output]
Max Bonus: 10.
The student has attended 6 lectures.
[/output]
[/test]
[test]
[input]
2
15
11
5
15
[/input]
[output]
Max Bonus: 16.
The student has attended 15 lectures.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
