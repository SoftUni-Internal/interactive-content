[slide]
# Problem 03
## Description
Write a program that calculates the price a customer, who has bought drinks from a coffee machine, has to pay:

|   | Without sugar | Normal | Extra sugar |
|---|---|---|---|
| Espresso | 0.90$ | 1$ | 1.20$ |
| Cappuccino | 1.00$ | 1.20$ | 1.60$ |
| Tea | 0.50$ | 0.60$ | 0.70$ |

Keep in mind the following discounts:
- With a selected drink without sugar, there is a 35% discount.
- With a selected drink "Espresso" and bought at least 5 drinks, there is a 25% discount.
- With an amount exceeding 15$, there is a 20% discount from the final price. 

The discounts are applied in the order of their description.

## Input
You receive 3 lines from the console:
- First line - drink - string: "Espresso", "Cappuccino" or "Tea"
- Second line - sugar - string: "Without", "Normal" or "Extra"
- Third line - count drinks - whole number in the range [1… 50]

## Output
Print one line on the console:
- "You bought \{count drinks\} cups of \{drink\} for \{total price\} dollars."
	 - The price must be formatted to the second digit after the decimal point.

[code-task title="Problem-03" taskId="pb-june-pr-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Example

## Input
Espresso

Without

10

## Output
You bought 10 cups of Espresso for 4.39 dollars.

## Comments
Selected are 10 cups of espresso without sugar 0.90 each -> 9$

35% discount for a sugar free drink of 9$ -> 3.15 -> 9 – 3.15 = 5.85

25% discount on the purchase of at least 5 cups of espresso. 25% of 5.85 -> 1.4625

5.85 – 1.4625 -> 4.3875

[/task-description]
[tests]
[test]
[input]
Espresso
Without
4
[/input]
[output]
You bought 4 cups of Espresso for 2.34 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Normal
20
[/input]
[output]
You bought 20 cups of Espresso for 15.00 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Extra
30
[/input]
[output]
You bought 30 cups of Espresso for 21.60 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Without
7
[/input]
[output]
You bought 7 cups of Cappuccino for 4.55 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Normal
10
[/input]
[output]
You bought 10 cups of Cappuccino for 12.00 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Extra
12
[/input]
[output]
You bought 12 cups of Cappuccino for 15.36 dollars.
[/output]
[/test]
[test]
[input]
Tea
Without
1
[/input]
[output]
You bought 1 cups of Tea for 0.33 dollars.
[/output]
[/test]
[test]
[input]
Tea
Normal
50
[/input]
[output]
You bought 50 cups of Tea for 24.00 dollars.
[/output]
[/test]
[test]
[input]
Tea
Extra
5
[/input]
[output]
You bought 5 cups of Tea for 3.50 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]