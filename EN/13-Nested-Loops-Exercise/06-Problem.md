[slide]
# Problem: Train the Trainers
[code-task title="Train the Trainers" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
The course "Train the trainers" is ending and the final evaluation approaches.

Help the jury which by writing a program to calculate the **average score** of **each presentation** by a student, and the **average of all of them**.

# Input
- From the console of the first row read the number of people on the jury - **n** - an integer in the range \[1...20\]
- Then on a separate line read the name of the presentation - **String**
- For each presentation of the new line is read **n - the number of ratings** - real number in the interval \[2.00 ... 6.00\]

# Output
- After calculating the **average score** for a particular presentation, print to the console:   
   "\{name of the presentation\} \- \{average score\}."
- After receiving the command "**Finish**" on the console, print:    
    "Student\'s final assessment is \{average presentations of all presentations\}." and the program ends.

All scores must be formatted to the **second decimal point**.

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 2 | | While-Loop - 5.75. |
| While-Loop | | For-Loop - 5.75. |
| 6.00 | | Student\'s final assessment is 5.75. |
| 5.50 | | |
| For-Loop | | | 
| 5.84 | | |
| 5.66 | | | 
| Finish | | | 

## Comments
- 2 – the number of people on the jury - therefore gain a 2 evaluations of the presentation:
    - \(6.00 \+ 5.50\) / 2 = 5.75
    - \(5.84 \+ 5.66\) / 2 = 5.75
- \(6.00 \+ 5.50 \+ 5.84 \+ 5.66\) / 4 = 5.75 
[/task-description]
[tests]
[test]
[input]
2
While\-Loop
6.00
5.50
For\-Loop
5.84
5.66
Finish
[/input]
[output]
While\-Loop \- 5.75.
For\-Loop \- 5.75.
Student\'s final assessment is 5.75.
[/output]
[/test]
[test]
[input]
3
Arrays
4.53
5.23
5.00
Lists
5.83
6.00
5.42
Finish
[/input]
[output]
Arrays \- 4.92.
Lists \- 5.75.
Student's final assessment is 5.34.
[/output]
[/test]
[test]
[input]
2
Objects and Classes
5.77
4.23
Dictionaries
4.62
5.02
RegEx
2.88
3.42
Finish
[/input]
[output]
Objects and Classes \- 5.00.
Dictionaries \- 4.82.
RegEx \- 3.15.
Student's final assessment is 4.32.
[/output]
[/test]
[test]
[input]
3
Linear Data Structures
5.43
6.23
5.21
Sets And Maps
4.24
2.43
5.23
Files And Directories
4.34
5.24
6.00
String Processing
3.34
5.23
2.54
Functional Programming
2.45
5.34
5.75
Stream API
3.45
5.34
3.54
Finish
[/input]
[output]
Linear Data Structures \- 5.62.
Sets And Maps \- 3.97.
Files And Directories \- 5.19.
String Processing \- 3.70.
Functional Programming \- 4.51.
Stream API \- 4.11.
Student's final assessment is 4.52.
[/output]
[/test]
[test]
[input]
2
Defining Classes
5.43
5.21
Encapsulation
4.24
2.44
Inheritance
4.34
5.24
Polymorphism
3.34
2.54
Interfaces and Abstraction
2.45
5.34
Finish
[/input]
[output]
Defining Classes \- 5.32.
Encapsulation \- 3.34.
Inheritance \- 4.79.
Polymorphism \- 2.94.
Interfaces and Abstraction \- 3.90.
Student's final assessment is 4.06.
[/output]
[/test]
[test]
[input]
3
Generics
5.43
4.34
5.21
Iterators and Comparators
4.24
5.34
2.43
Enumerations and Annotations
4.34
5.24
5.24
Reflection
3.34
5.32
2.54
Unit testing
2.45
5.34
5.34
Finish
[/input]
[output]
Generics \- 4.99.
Iterators and Comparators \- 4.00.
Enumerations and Annotations \- 4.94.
Reflection \- 3.73.
Unit testing \- 4.38.
Student's final assessment is 4.41.
[/output]
[/test]
[test]
[input]
4
Open Closed and Liskov Principle
5.42
4.34
5.21
4.24
Object Communication and Events
4.24
5.34
5.43
2.43
Exam Preparation I
4.34
5.24
2.43
5.24
Exam Preparation II
3.34
5.32
4.23
2.54
Exam Preparation III
2.45
4.23
5.34
5.34
Finish
[/input]
[output]
Open Closed and Liskov Principle \- 4.80.
Object Communication and Events \- 4.36.
Exam Preparation I \- 4.31.
Exam Preparation II \- 3.86.
Exam Preparation III \- 4.34.
Student's final assessment is 4.33.
[/output]
[/test]
[test]
[input]
2
Data Definition And Data Types
5.43
5.21
Basic CRUD
4.23
2.43
Built\-in Functions
5.34
5.99
Data Aggregation
5.24
6.00
Table Relations
5.34
5.23
Subqueries and JOINs
5.74
5.00
Functions Triggers And Transactions
5.66
4.74
Finish
[/input]
[output]
Data Definition And Data Types \- 5.32.
Basic CRUD \- 3.33.
Built\-in Functions \- 5.67.
Data Aggregation \- 5.62.
Table Relations \- 5.29.
Subqueries and JOINs - 5.37.
Functions Triggers And Transactions \- 5.20.
Student's final assessment is 5.11.
[/output]
[/test]
[test]
[input]
3
Java Basics
5.43
5.21
6.00
Java OOP Overview
4.24
5.43
6.00
Java OOP Principles
5.34
5.99
6.00
Java Fundamentals
5.24
6.00
6.00
Finish
[/input]
[output]
Java Basics \- 5.55.
Java OOP Overview \- 5.22.
Java OOP Principles \- 5.78.
Java Fundamentals \- 5.75.
Student's final assessment is 5.57.
[/output]
[/test]
[test]
[input]
3
HTML and CSS Overview
5.43
4.23
5.21
HTML Structure
4.24
5.56
2.43
Introduction To CSS
5.34
5.76
5.99
CSS In Depth
5.24
3.65
6.00
CSS Formatting
5.34
3.67
5.23
CSS Positioning
5.74
2.54
5.00
Creating Landing Pages
5.66
3.43
4.74
Finish
[/input]
[output]
HTML and CSS Overview \- 4.96.
HTML Structure \- 4.08.
Introduction To CSS \- 5.70.
CSS In Depth \- 4.96.
CSS Formatting \- 4.75.
CSS Positioning \- 4.43.
Creating Landing Pages \- 4.61.
Student's final assessment is 4.78.
[/output]
[/test]
[test]
[input]
4
Introduction to JavaScript
5.43
4.65
4.23
5.21
Introduction to DOM and Events
4.27
4.70
5.58
2.45
Introduction to jQuery
5.34
4.00
5.76
5.99
Introduction to AJAX
5.24
3.00
3.65
6.00
Finish
[/input]
[output]
Introduction to JavaScript \- 4.88.
Introduction to DOM and Events \- 4.25.
Introduction to jQuery \- 5.27.
Introduction to AJAX \- 4.47.
Student's final assessment is 4.72.
[/output]
[/test]
[test]
[input]
2
Data Types and Variables
4.23
5.21
Methods, Debugging and Troubleshooting Code
4.24
5.56
Arrays
5.34
5.99
Lists
5.24
6.00
Dictionaries, Lambda and LINQ
5.34
5.23
Finish
[/input]
[output]
Data Types and Variables \- 4.72.
Methods, Debugging and Troubleshooting Code \- 4.90.
Arrays \- 5.67.
Lists \- 5.62.
Dictionaries, Lambda and LINQ \- 5.29.
Student's final assessment is 5.24.
[/output]
[/test]
[test]
[input]
4
Objects and Classes
4.23
2.00
5.21
3.38
Strings and Text Processing
4.24
4.23
5.21
5.56
Regular Expressions (RegEx)
5.34
4.00
5.99
3.45
Exam Preparation I
3.46
5.25
4.89
6.00
Exam Preparation II
5.36
3.35
5.25
4.44
Finish
[/input]
[output]
Objects and Classes \- 3.71.
Strings and Text Processing \- 4.81.
Regular Expressions (RegEx) \- 4.70.
Exam Preparation I \- 4.90.
Exam Preparation II \- 4.60.
Student's final assessment is 4.54.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]