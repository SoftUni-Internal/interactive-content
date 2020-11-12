# Problem 5: Care of Puppy

[slide]

# Description
Annie finds a puppy to take care of until someone is found to adopt him.

It eats a certain amount of food daily.

Write a program that checks if the **amount of food purchased for the puppy** will be enough **until the puppy is adopted.**

# Input
From the console read:

- Purchased **amount of food for the puppy in kilograms** - an integer in the interval \[1 …100\]

- On each subsequent line until you receive the `Adopted` command, you will receive **how many grams the puppy eats at each meal** - an integer in the interval \[10 …1000\]

# Output

One line is printed on the console:

- If the amount of food **is enough** to print  `Food is enough! Leftovers: {leftover food} grams.` 

- If the amount of food is **not enough** to print: `Food is not enough. You need {need the amount of food grams more.`


[code-task title="Care of Puppy" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Example

| **Input** | **Output** |
| --- | --- |
|`["4", "130" ,"345", "400", "180", "230", "120" ,"Adopted"]` | Food is enough! Leftovers: 2595 grams. |

# Comments

- The **purchased** amount of food is `4 kg = 4 * 1000 = 4000 grams.`

- The **total amount of food** that the puppy ate before adoption was: `130 + 345 + 400 + 180 + 230 + 120 = 1405 grams.` 

- **This quantity is less than the originally purchased 4000 grams:**

    - food remains is: `4000 - 1405 = 2595 grams.`


# More Examples

| **Input** | **Output** |
| --- | --- |
|`["3","1000","1000","1000", "Adopted"]` |Food is enough! Leftovers: 0 grams. |
|`[2,999,456,999,999,123,456,Adopted]` | Food is not enough. You need 2032 grams more. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
4
500
600
700
800
Adopted
[/input]
[output]
Food is enough! Leftovers: 1400 grams.
[/output]
[/test]
[test]
[input]
4
1000
2000
3000
4000
Adopted
[/input]
[output]
Food is not enough. You need 6000 grams more.
[/output]
[/test]
[test]
[input]
3
120
120
120
120
150
180
340
560
Adopted
[/input]
[output]
Food is enough! Leftovers: 1290 grams.
[/output]
[/test]
[test]
[input]
1
200
300
400
200
Adopted
[/input]
[output]
Food is not enough. You need 100 grams more.
[/output]
[/test]
[test]
[input]
9
800
430
560
120
340
560
125
440
Adopted
[/input]
[output]
Food is enough! Leftovers: 5625 grams.
[/output]
[/test]
[test]
[input]
4
1000
340
120
356
1000
2345
100
450
Adopted
[/input]
[output]
Food is not enough. You need 1711 grams more.
[/output]
[/test]
[test]
[input]
2
1200
1200
1200
Adopted
[/input]
[output]
Food is not enough. You need 1600 grams more.
[/output]
[/test]
[test]
[input]
18
200
400
500
600
Adopted
[/input]
[output]
Food is enough! Leftovers: 16300 grams.
[/output]
[/test]
[test]
[input]
5
5000
1000
234
456
789
Adopted
[/input]
[output]
Food is not enough. You need 2479 grams more.
[/output]
[/test]
[test]
[input]
1
1000
Adopted
[/input]
[output]
Food is enough! Leftovers: 0 grams.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]