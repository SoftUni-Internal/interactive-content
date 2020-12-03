[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab.

Here, we are going to write a couple of console applications together.

Let us solve a few problems to exercise what we have learned.
[/slide]

[slide]
# Problem: Employees
[code-task title="Employees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumEvenNumbers(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
You're tasked to create a list of employees and their personal numbers.

You will receive an array of strings.

Each string is an employee name and to assign them a personal number you have to find the **length of the name** (whitespace included).

Try to use an object.

At the end print all the list employees in the following format:

`Name: {employeeName} -- Personal Number: {personalNum}`


# Example
| **Input** | **Output** |
| --- | --- |
|`['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']`| Name\: Silas Butler \-\- Personal Number\: 12 |
|| Name\: Adnaan Buckley \-\- Personal Number\: 14 |
|| Name\: Juan Peterson \-\- Personal Number\: 13 |
||Name\: Brendan Villarreal \-\- Personal Number\: 18|

[/task-description]
[tests]
[test]
[input]
Kiril Kirilov
Peter Petrov
[/input]
[output]
Name\: Kiril Kirilov \-\- Personal Number\: 13
Name\: Peter Petrov \-\- Personal Number\: 12
[/output]
[/test]
[test]
[input]
Jack
Will
Amanda
[/input]
[output]
Name\: Jack \-\- Personal Number\: 4
Name\: Will \-\- Personal Number\: 4
Name\: Amanda \-\- Personal Number\: 6
[/output]
[/test]
[test]
[input]
Samuel Jackson
Will Smith
Bruce Willis
Tom Holland
[/input]
[output]
Name\: Samuel Jackson \-\- Personal Number\: 14
Name\: Will Smith \-\- Personal Number\: 10
Name\: Bruce Willis \-\- Personal Number\: 12
Name\: Tom Holland \-\- Personal Number\: 11
[/output]
[/test]
[test]
[input]
Silas Butler
Adnaan Buckley
Juan Peterson
Brendan Villarreal
[/input]
[output]
Name\: Silas Butler \-\- Personal Number\: 12
Name\: Adnaan Buckley \-\- Personal Number\: 14
Name\: Juan Peterson \-\- Personal Number\: 13
Name\: Brendan Villarreal \-\- Personal Number\: 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
