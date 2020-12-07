[slide hideTitle]
# Problem: SoftUni Course Planning
[code-task title="SoftUni Course Planning" taskId="java-fund-14-Lists-Exercise-problem-9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You are tasked to help planning the next Programing Fundamentals course by keeping track of the lessons, that are going to be included in the course, as well as all the exercises for the lessons.

On the first input line you will receive the initial schedule of lessons and exercises that are going to be part of the next course, separated by comma and space ", ". 

But before the course starts, there are some changes to be made. 

Until you receive "course start" you will be given some **commands to modify the course schedule**. 

The **possible commands** are: 
- Add:\{lessonTitle\} – **add the lesson to the end** of the schedule, if it **does not exist**.
- Insert:\{lessonTitle\}:\{index\} – **insert** the lesson to the **given index**, if it **does not exist**.
- Remove:\{lessonTitle\} – **remove the lesson**, if it **exists**.
- Swap:\{lessonTitle\}:\{lessonTitle\} – **change the place** of the two lessons, **if they exist**.
- Exercise:\{lessonTitle\} – **add Exercise in the schedule right after the lesson index**, if the lesson exists and there is no exercise already, in the following format: "- - - \{lessonTitle\}-Exercise". 
    - If the **lesson doesn't exist**, **add** the lesson **in the end** of the course schedule, **followed by the exercise**.

Each time you **Swap or Remove a lesson,** you should **do the same with the exercises**, if there are any, which follow the lessons.

### Example
| **Input** | **Output** |
| --- | --- |
| Data Types, Objects, Lists | 1.Arrays |
| Add:Databases | 2.Data Types |
| Insert:Arrays:0 | 3.Objects |
| Remove:Lists | 4.Databases |
| course start | |

**Comments:**
- We receive the initial schedule. 
- Next, we add Databases lesson, because it doesn`t exist. 
- We Insert at the given index lesson Arrays, because its not present in the schedule. 
- After receiving the last command and removing lesson Lists, we print the whole schedule.

### Example
| **Input** | **Output** |
| --- | --- |
| Arrays, Lists, Methods | 1.Methods |
| Swap:Arrays:Methods | 2.Databases |
| Exercise:Databases | 3.Databases-Exercise |
| Swap:Lists:Databases | 4.Arrays |
| Insert:Arrays:0 | 5.Lists |
| course start | |

**Comments:**
- We swap the given lessons, because both exist.
- After receiving the Exercise command, we see that such lesson doesn`t exist, so we add the lesson at the end, followed by the exercise.
- We swap Lists and Databases lessons, the
- Databases-Exercise is also moved after the Databases lesson.
- We skip the next command, because we already have such lesson in our schedule.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Data Types, Objects, Lists
Add:Databases
Insert:Arrays:0
Remove:Lists
course start
[/input]
[output]
1.Arrays
2.Data Types
3.Objects
4.Databases
[/output]
[/test]
[test open]
[input]
Arrays, Lists, Methods
Swap:Arrays:Methods
Exercise:Databases
Swap:Lists:Databases
Insert:Arrays:0
course start
[/input]
[output]
1.Methods
2.Databases
3.Databases-Exercise
4.Arrays
5.Lists
[/output]
[/test]
[test]
[input]
aa, bb, cc
Add:dd
course start
[/input]
[output]
1.aa
2.bb
3.cc
4.dd
[/output]
[/test]
[test]
[input]
aa, dd, cc
Add:bb
course start
[/input]
[output]
1.aa
2.dd
3.cc
4.bb
[/output]
[/test]
[test]
[input]
aa, bb, cc
Insert:dd:2
course start
[/input]
[output]
1.aa
2.bb
3.dd
4.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Remove:bb
course start
[/input]
[output]
1.aa
2.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Remove:cc
course start
[/input]
[output]
1.aa
2.bb
[/output]
[/test]
[test]
[input]
aa, bb, cc
Exercise:bb
course start
[/input]
[output]
1.aa
2.bb
3.bb-Exercise
4.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Exercise:cc
Exercise:cc
Exercise:dd
course start
[/input]
[output]
1.aa
2.bb
3.cc
4.cc-Exercise
5.dd
6.dd-Exercise
[/output]
[/test]
[test]
[input]
aa, bb, cc
Swap:aa:bb
Swap:aa:dd
course start
[/input]
[output]
1.bb
2.aa
3.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Add:dd
Insert:dd:2
Insert:ff:1
Remove:bb
Exercise:bb
Exercise:cc
Swap:aa:bb
Swap:aa:dd
course start
[/input]
[output]
1.bb
2.bb-Exercise
3.ff
4.cc
5.cc-Exercise
6.aa
7.dd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
