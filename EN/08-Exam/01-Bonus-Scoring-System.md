[slide]
# Problem 1. Bonus Scoring System
[code-task title="Problem 1. Bonus Scoring System" taskId="fd255115-00ef-4481-a5ae-19df12bdd3db" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program that calculates **bonus points** for each **student**, for a certain course.

On the first line, you are going to receive **the count of the students** for this course.

**In the second line**, you will receive **the count of the lectures** in the course.

Every course has **an additional bonus**.

You are going to receive it **on the third line**.

On the next lines, you will be receiving the **count of attendance for each student**.

The bonus is calculated with the following **formula**:

`{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})`

Find the student with the **maximum bonus** and print him/her, along with **his attendances** in the following format:

`Max Bonus: {maxBonusPoints}.`

`The student has attended {studentAttendances} lectures.`

Round the bonus points at the end to **the nearest bigger number**.

### Input \/ Constrains

- On the **first line**, you are going to receive the count of the students – an integer number in the range 0…50.

- On the **second line**, you are going to receive the count of the lectures – an integer number in the range 0...50.

- On the **third line**, you are going to receive **the initial bonus** – an integer number in the range 0….100.

- **In the next lines**, you will be receiving the **attendance of each student**.

- There will **never** be **students with equal bonuses**.

### Output

- Print the maximum bonus points along with the attendance of the given student, **rounded** to the nearest **bigger** number, scored by a student in this course in the format described above.

## Examples
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

### Comments

First, we receive the **number of students** enrolled in the course – `5`.

The total count of the lectures is `25` and the initial bonus is `30`.

Then we calculate the bonus of the student with `12` attendances, which is `16.8`.

We continue calculating **each of the student's bonuses**. 

The one **with** `24` **attendances** has the **highest bonus** – `33.6` (`34` **rounded**), so we print the appropriate message on the console.

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