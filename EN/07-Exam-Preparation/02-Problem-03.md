[slide]
# Problem 3: Cinema
## Description
For the upcoming premieres of three highly expected productions a local cinema has hired you to write a piece of software that calculates the price, which their clients have to pay, depending on the movie and the offer they have chosen.

| | John Wick      | Star Wars | Jumanji   |
|:---:    | :---:       |    :----:   |   :---:     |
| Drink | 12$ | 18$ | 9$ |
| Popcorn | 15$ | 25$ | 11$ |
| Menu | 19$ | 30$ | 14$ |

Write a program that calculates what is the total price to be paid by the customer. 

There are also promotional discounts available for two of the movies:

- If the chosen movie is `Star Wars` and at least four tickets are bought, there is a `30%` family discount.

- If the chosen movie is `Jumanji` and exactly 2 tickets are bought, there is `15%` discount for two.

## Input
You receive 3 lines from the console:
- First line - movie - string: `John Wick`, `Star Wars` or `Jumanji`
- Second line - offer - string: `Drink`, `Popcorn` or `Menu`
- Third line – number of tickets  – whole number in the range \[1… 30\]

## Output
Print one line on the console: `Your bill is {total price}$`
 * The price must be formatted to two digits after the decimal point.

[code-task title="Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Movie - John Wick

Offer - Drink

Count tickets – 6

## Output
Your bill is 72.00$

## Comments
The movie is John Wick and drink is chosen.

The price for one ticket is 12\$

6 tickets each `12$ -> 72$`

For this movie there is no discount, total price is `72.00$`. 

[/task-description]
[code-io /]
[tests]
[test]
[input]
John Wick
Drink
23
[/input]
[output]
Your bill is 276.00$
[/output]
[/test]
[test]
[input]
John Wick
Popcorn
11
[/input]
[output]
Your bill is 165.00$
[/output]
[/test]
[test]
[input]
John Wick
Menu
8
[/input]
[output]
Your bill is 152.00$
[/output]
[/test]
[test]
[input]
Star Wars
Drink
10
[/input]
[output]
Your bill is 126.00$
[/output]
[/test]
[test]
[input]
Star Wars
Popcorn
3
[/input]
[output]
Your bill is 75.00$
[/output]
[/test]
[test]
[input]
Star Wars
Menu
1
[/input]
[output]
Your bill is 30.00$
[/output]
[/test]
[test]
[input]
Jumanji
Drink
2
[/input]
[output]
Your bill is 15.30$
[/output]
[/test]
[test]
[input]
Jumanji
Popcorn
1
[/input]
[output]
Your bill is 11.00$
[/output]
[/test]
[test]
[input]
Jumanji
Menu
3
[/input]
[output]
Your bill is 42.00$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]