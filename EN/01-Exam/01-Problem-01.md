[slide]
# Problem 01
## Description
It is hot and sunny outside so Softuni training team decides to organize a workday by the swimming pool. 

Your task is to write a program that calculates the amount that should be paid. 

Entrance fee must be paid for every single person. 

You should keep in mind that an umbrella is enough for two people. It is known that only 75% of the team wants sunbeds. In the calculation of the number of umbrellas and sunbeds, their number should be rounded up to the nearest whole number.

## Input
4 lines are read from the console:
- First line - number of people - whole number in the range [1... 100]
- Second line - entrance fee - real number in the range [0.00... 50.00]
- Third line - price for a sunbed - real number in the range [0.00... 50.00]
- Fourth line - price for one umbrella - real number in the range [0.00... 50.00]

## Output
"\{total price\} dollars." 
- The result must be formatted to the second digit after the decimal point.


[code-task title="Problem-01" taskId="pb-june-pr-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Input
21

5.50

4.40

6.20

## Output
254.10 dollars.

## Comments 
21 people at 5.50$ entrance fee is 115.50$

75% of 21 people are 16 and therefore need 16 sunbeds, which are priced at 4.40$ -> 16 * 4.40 = 70. 40$

50% of 21 people are 11 and therefore need 11 umbrellas, which are priced at 6.20$ -> 11 * 6.20 = 68.20$

The final price is: 115.50 + 70.40 + 68.20 = 254.10

[/task-description]
[tests]
[test]
[input]
32
5
2
4
[/input]
[output]
272.00 dollars.
[/output]
[/test]
[test]
[input]
123
23
2
5
[/input]
[output]
3325.00 dollars.
[/output]
[/test]
[test]
[input]
666
6
6
6
[/input]
[output]
8994.00 dollars.
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
3.00 dollars.
[/output]
[/test]
[test]
[input]
34
2.4
2.2
1.6
[/input]
[output]
166.00 dollars.
[/output]
[/test]
[test]
[input]
46
24
23.4
23.6
[/input]
[output]
2465.80 dollars.
[/output]
[/test]
[test]
[input]
49
20.20
13.10
5.60
[/input]
[output]
1614.50 dollars.
[/output]
[/test]
[test]
[input]
88
22.22
11.11
33.33
[/input]
[output]
4155.14 dollars.
[/output]
[/test]
[test]
[input]
23
43
23
1.3
[/input]
[output]
1418.60 dollars.
[/output]
[/test]
[test]
[input]
100
50
50
50
[/input]
[output]
11250.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]