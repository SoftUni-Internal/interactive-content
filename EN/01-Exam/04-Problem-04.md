[slide]
# Problem 04
## Description
The weather is warming up and the clubs are launching promising offers. 

Write a program that calculates the profit of a club for the evening and whether the desired profit is reached, keeping in mind the following: 

The price of a cocktail is its name's length. 

If the price of an order is an odd number, there is a 25% discount on the order price.

# Input
You will receive:
- On the first line – the desired profit of the club - real number in the range [1.00... 15000.00]

A series of two rows until the command "Party!" or until the desired profit is reached:
- Name of the cocktail - string
- Number of cocktails for the order - whole number in the range [1… 50]

## Output
First, print one line on the console:

- If you receive the command "Party!":
	- "We need \{money needed\} dollars more."
- If the desired profit is reached:
	- "Target acquired."

Then print:
- "Club income - \{club's profit\} dollars."

The money must be formatted to the second digit after the decimal point.

[code-task title="Problem-04" taskId="pb-june-pr-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Example 
## Input
500

Bellini

6

Bamboo

7

Party!

## Output
We need 416.00 dollars more.

Club income - 84.00 dollars.

## Comments
The goal of the club is to collect 500$.

The first order is for 6 cocktails Bellini. 

The price of the cocktail is its name length - 7. 6 Cocktails of 7$ -> 42$, the last digit is 2, therefore there is no discount.

The next order is for 7 Bamboo cocktails, its price is 6$. 6 * 7-> 42$, again there is no discount.

We receive the command Party! The program stops.

The club has 42 + 42 = 84$ and the target is 500. 500 – 84 = 416$ are needed.

[/task-description]
[tests]
[test]
[input]
50
Rom
3
Rakia
5
Vesper
9
[/input]
[output]
Target acquired.
Club income - 79.50 dollars.
[/output]
[/test]
[test]
[input]
100
Rakia
5
Whiskey
9
Irish Coffee
5
[/input]
[output]
Target acquired.
Club income - 126.00 dollars.
[/output]
[/test]
[test]
[input]
1000
Irish Coffe
50
Party!
[/input]
[output]
We need 450.00 dollars more.
Club income - 550.00 dollars.
[/output]
[/test]
[test]
[input]
789
Painkiller
20
Party!
[/input]
[output]
We need 589.00 dollars more.
Club income - 200.00 dollars.
[/output]
[/test]
[test]
[input]
100
Bees Knees
23
[/input]
[output]
Target acquired.
Club income - 230.00 dollars.
[/output]
[/test]
[test]
[input]
200
French 75
9
French 75
9
Gimlet
3
Mai Tai
6
Gin Fizz
6
[/input]
[output]
Target acquired.
Club income - 229.50 dollars.
[/output]
[/test]
[test]
[input]
50
Rakia
3
Vodka
16
[/input]
[output]
Target acquired.
Club income - 91.25 dollars.
[/output]
[/test]
[test]
[input]
999
Rum old fashioned
10
Bloody Mary
9
Party!
[/input]
[output]
We need 754.75 dollars more.
Club income - 244.25 dollars.
[/output]
[/test]
[test]
[input]
100
White Lady
9
R
9
Party!
[/input]
[output]
We need 3.25 dollars more.
Club income - 96.75 dollars.
[/output]
[/test]
[test]
[input]
100
Caipirinha
10
[/input]
[output]
Target acquired.
Club income - 100.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]