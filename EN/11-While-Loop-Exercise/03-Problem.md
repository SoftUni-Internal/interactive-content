[slide]
# Problem: Graduation
[code-task title="Graduation" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program that calculates the **average grade** of a student from his entire education. 

# Input
- On the first line you will receive **the name of the student**, and on each following line his annual grades. - The student passes to upper class, if his **annual grade is 4.00 or greater**. 
- If his grade is less than 4.00, he has to **repeat** the class.

# Output
- If the student graduates **12th** class, you have to print:
    - "\{student name\} graduated. Average grade: \{average grade from his entire education\}"

**The grade should be formatted to the second decimal point.**

# Example

| **Input** | | **Output** |
| --- | --- | --- | 
| John | | John graduated. Average grade: 5.37 | 
| 4 | | |
| 5.5 | | | 
| 6 | | | 
| 5.43 | | |
| 4.5 | | | 
| 6 | | | 
| 5.55 | | | 
| 5 | | | 
| 6 | | | 
| 6 | | | 
| 5.43 | | |
| 5 | | |
[/task-description]
[tests]
[test]
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