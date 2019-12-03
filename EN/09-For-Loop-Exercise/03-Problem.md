[slide]
# Problem: Hospital
[code-task title="Hospital" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
**For a period of time, patients are arriving every day** in the hospital for examination. 

It has initially **7** doctors. 

Each doctor can only review **one patient per day**, but sometimes there is a shortage of doctors, so other patients are sent to other hospitals. 

**Every third day** the hospital makes calculations and **if the number of unreviewed patients is greater than the number of reviewed, one more doctor is appointed**. 

As the **appointment of the doctor occurs before the intake of patients for the day**. 

Write a program that calculates the number of reviewed and unreviewed patients for the given period.

# Input

The input is read from the console and contains: 

- **The period** for which you need to perform calculations - integer in range \[1... 1000\] 
- On the **following lines (equal to the number of days)** – the number of patients arriving for review for the current day - integer in range \[0... 10 000\]

# Output
Print on the console 2 lines:
- First line: "Treated patients: \{Number of patients reviewed\}." 
- Second line: "Untreated patients: \{Number of unreviewed patients\}."

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 4 | | Treated patients: 23. |
| 7 | | Untreated patients: 21. |
| 27 | | |
| 9 | | |
| 1 | | |

## Comments
- Day 1: 7 treated and 0 untreated patients for the day 
- Day 2: 7 treated and 20 untreated patients for the day 
- Day 3: Until now, the patients treated were 14 and untreated – 20 – > A new doctor is appointed – > 8 treated and 1 untreated patient for the day 
- Day 4: 1 treated and 0 untreated patient for the day 
- Total: 23 treated and 21 untreated patients

[/task-description]
[tests]
[test]
[input]
4
7
27
9
1
[/input]
[output]
Treated patients: 23.
Untreated patients: 21.
[/output]
[/test]
[test]
[input]
6
25
25
25
25
25
2
[/input]
[output]
Treated patients: 40.
Untreated patients: 87.
[/output]
[/test]
[test]
[input]
3
7
7
7
[/input]
[output]
Treated patients: 21.
Untreated patients: 0.
[/output]
[/test]
[test]
[input]
9
25
25
25
25
25
25
25
25
25
[/input]
[output]
Treated patients: 75.
Untreated patients: 150.
[/output]
[/test]
[test]
[input]
3
7
7
8
[/input]
[output]
Treated patients: 21.
Untreated patients: 1.
[/output]
[/test]
[test]
[input]
1
200
[/input]
[output]
Treated patients: 7.
Untreated patients: 193.
[/output]
[/test]
[test]
[input]
2
9
9
[/input]
[output]
Treated patients: 14.
Untreated patients: 4.
[/output]
[/test]
[test]
[input]
10
0
0
0
0
0
0
0
0
0
0
[/input]
[output]
Treated patients: 0.
Untreated patients: 0.
[/output]
[/test]
[test]
[input]
3
10000
10000
10000
[/input]
[output]
Treated patients: 22.
Untreated patients: 29978.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]