[slide]
# Problem 02
## Description
The Smiths are planning their family trip. 

Your task is to write a program that calculates whether their budget will be enough, knowing how many nights they have planned, what is the price per night and what percent of the budget has been provided for additional costs.

Keep in mind that if the number of nights is greater than 7, the price per night is reduced by 5%.

## Input
You will receive 4 lines from the console:
- The budget they have – real number in the range [1.00 … 10000.00]
- Count of nights – whole number in the range [0 … 1000]
- Price per night – real number in the range [1.00 … 500.00]
- Additional cost percentage – whole number in the range [0 … 100]

## Output
The printing on the console depends on the result:
- If the budget is enough:
	- "The Smiths will be left with \{money left after the trip\} dollars after vacation."
- If the budget is NOT enough:
	- "\{money needed\} dollars needed."

The sum must be formatted to the second digit after the decimal point.

[code-task title="Problem-02" taskId="pb-june-pr-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Example

## Input
800.50

8

100

2

## Output
The Smiths will be left with 24.49 dollars after vacation.

## Comments
8 Nights > 7, therefore there is a 5% discount on the price per night, which is 100$

5% from 100 is 5. -> 100 – 5-> 95$ per night after the discount, 8 overnights 95$ -> 760$

2% of the budget is provided for additional costs. 2% from 800.50 is 16.01$

760 + 16.01 = 776.01 < = 800.50, therefore the money is enough and after the trip they return with 800.50 – 776.01 = 24.49$
 
[/task-description]
[tests]
[test]
[input]
504.20
10
54.20
20
[/input]
[output]
111.54 dollars needed.
[/output]
[/test]
[test]
[input]
845
9
50
18
[/input]
[output]
The Smiths will be left with 265.40 dollars after vacation.
[/output]
[/test]
[test]
[input]
100
4
25
1
[/input]
[output]
1.00 dollars needed.
[/output]
[/test]
[test]
[input]
566
9
10
30
[/input]
[output]
The Smiths will be left with 310.70 dollars after vacation.
[/output]
[/test]
[test]
[input]
100
15
40
5
[/input]
[output]
475.00 dollars needed.
[/output]
[/test]
[test]
[input]
800
10
10
60
[/input]
[output]
The Smiths will be left with 225.00 dollars after vacation.
[/output]
[/test]
[test]
[input]
500
20
40
26
[/input]
[output]
390.00 dollars needed.
[/output]
[/test]
[test]
[input]
100
2
20
10
[/input]
[output]
The Smiths will be left with 50.00 dollars after vacation.
[/output]
[/test]
[test]
[input]
95
10
10
0
[/input]
[output]
The Smiths will be left with 0.00 dollars after vacation.
[/output]
[/test]
[test]
[input]
50
5
9
10
[/input]
[output]
The Smiths will be left with 0.00 dollars after vacation.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]