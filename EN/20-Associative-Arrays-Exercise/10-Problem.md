[slide]
# Problem: SoftUni Course Planning
[code-task title="SoftUni Course Planning" taskId="python-fundamentals-assosiative-arrays-10" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
You are tasked to help planning a course by keeping track of the **lessons**, that are going to be included in the course, as well as all the **exercises** for the lessons.

On the **first input line** you will receive the **initial schedule of lessons and exercises** that are going to be part of the next course, **separated by comma and space** ", ". 

But before the course starts, there are some changes to be made. 

Until you receive "course start" you will be given some commands to modify the course schedule. 

The **possible commands** are: 

- Add:\{lessonTitle\} - **add the lesson to the end of the schedule**, if it does **not exist**
- Insert:\{lessonTitle\}:\{index\} - **insert the lesson to the given index**, if it does **not exist**
- Remove:\{lessonTitle\} - **remove the lesson**, if it **exists**
- Swap:\{lessonTitle\}:\{lessonTitle\} - **change the place of the two lessons**, if they **exist**
- Exercise:\{lessonTitle\} - **add exercise in the schedule right after the lesson index**
    - **if the lesson exists** and there is **no exercise already,** in the following format "\{lessonTitle\}-Exercise"
    - **if the lesson doesn't exist**, **add the lesson** in the end of the course schedule, **followed by the exercise**

Each time you **swap or remove a lesson**, you should **do the same with the exercises**, if there are any, which follow the lessons.


### Examples
| **Input** | **Output** |
| --- | --- |
| Peter-Java-91 | Results: |
| George-C#-84 | Peter \| 91 |
| Mike-Java-90 | George \| 84 |
| Mike-C#-50 | Submissions: |
| Mike-banned | C# - 2 |
| exam finished | Java - 2 |

### Comments
Mike is banned so he is removed from the contest, but his submissions are still preserved in the submissions count. 

So although there are only 2 participants in the results, there are 4 submissions in total.

[/task-description]
[code-io /]
[tests]
[test]
[input]
Pesho-Java-84
Gosho-C#-70
Gosho-C#-84
Kiro-C#-94
exam finished
[/input]
[output]
Results:
Kiro | 94
Gosho | 84
Pesho | 84
Submissions:
C# - 3
Java - 1
[/output]
[/test]
[test]
[input]
Pesho-Java-91
Gosho-C#-84
Kiro-JavaScript-90
Kiro-C#-50
Kiro-banned
exam finished
[/input]
[output]
Results:
Pesho | 91
Gosho | 84
Submissions:
C# - 2
Java - 1
JavaScript - 1
[/output]
[/test]
[test]
[input]
a-j-10
exam finished
[/input]
[output]
Results:
a | 10
Submissions:
j - 1
[/output]
[/test]
[test]
[input]
a-j-10
b-k-50
exam finished
[/input]
[output]
Results:
b | 50
a | 10
Submissions:
j - 1
k - 1
[/output]
[/test]
[test]
[input]
a-j-10
a-j-20
a-j-40
a-j-30
exam finished
[/input]
[output]
Results:
a | 40
Submissions:
j - 4
[/output]
[/test]
[test]
[input]
aa-b-40
aa-b-30
aa-b-20
aa-b-10
exam finished
[/input]
[output]
Results:
aa | 40
Submissions:
b - 4
[/output]
[/test]
[test]
[input]
aa-b-40
bb-b-30
cc-b-20
dd-b-10
exam finished
[/input]
[output]
Results:
aa | 40
bb | 30
cc | 20
dd | 10
Submissions:
b - 4
[/output]
[/test]
[test]
[input]
a-j-10
b-j-10
c-j-10
d-j-10
exam finished
[/input]
[output]
Results:
a | 10
b | 10
c | 10
d | 10
Submissions:
j - 4
[/output]
[/test]
[test]
[input]
a-b-10
b-b-20
c-a-30
d-a-40
exam finished
[/input]
[output]
Results:
d | 40
c | 30
b | 20
a | 10
Submissions:
a - 2
b - 2
[/output]
[/test]
[test]
[input]
a-b-10
b-b-20
c-a-30
d-a-40
d-banned
exam finished
[/input]
[output]
Results:
c | 30
b | 20
a | 10
Submissions:
a - 2
b - 2
[/output]
[/test]
[test]
[input]
a-b-10
b-a-20
c-a-30
c-banned
exam finished
[/input]
[output]
Results:
b | 20
a | 10
Submissions:
a - 2
b - 1
[/output]
[/test]
[test]
[input]
e-b-90
f-b-90
g-b-90
h-b-90
a-a-90
b-a-90
c-a-90
d-a-90
e-b-100
f-b-100
g-b-100
h-b-100
a-a-100
b-a-100
c-a-100
d-a-100
d-banned
exam finished
[/input]
[output]
Results:
a | 100
b | 100
c | 100
e | 100
f | 100
g | 100
h | 100
Submissions:
a - 8
b - 8
[/output]
[/test]
[/tests]
[/code-task]
[/slide]