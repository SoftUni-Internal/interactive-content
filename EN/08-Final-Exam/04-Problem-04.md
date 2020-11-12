# Problem: Food for Pets

[slide]

# Description
Annie has two pets - a dog and a cat. 

Write a program that compiles **statistics** on pet food for a certain number of days. 

Every day the dog and the cat eat a **different amount** of their common food. 

Every **third day they receive a prize** - cookies. 

The amount of **cookies is 10\%** of the total food eaten for the day.

Your program should print **statistics about the amount of cookies they ate**.

What **percentage of the original amount** of total food they ate.

And what **percentage of the food the dog ate** and how much the cat ate.


# Input
Initially, one line is read:

- Number of days - an integer in the range \[1…30\]

- Total amount of food - a real number in the range \[0.00…10000.00\]

**Then for each day it is read:**

- Amount of food eaten by the dog - an integer in the range \[10…500\]

- Amount of food eaten by the cat - an integer in the rang \[10…500\]


# Output

Print four lines on the console:

- `Total eaten biscuits: {amount of biscuits eaten}gr.`

- `{percentage of food eaten}% of the food has been eaten.`

- `{percentage of food eaten by the dog }% eaten from the dog.`

- `{percentage of food eaten by the cat}% eaten from the cat.`

The amount of c**ookies eaten must be rounded to the nearest whole number.**

The percentage of food m**ust be formatted to the second digit after the decimal point.**


[code-task title="Food for Pets" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
|`["3", "1000", "300", "20", "100", "30", "110", "40"]` | Total eaten biscuits: 15gr. |
|| 60.00\% of the food has been eaten. |
|| 85.00\% eaten from the dog. |
|| 15.00\% eaten from the cat. |

# Comments

We have **3 days** and a total amount of food: **1000g.**

On the first day:

- The dog eats 300 g, the cat eats 20 g.

On the second day:

- The dog eats 100 g, the cat eats 30 g.

On the third day:

- The dog eats 110 g, the cat eats 40 g.

On this day they should also **receive a prize - cookies:**
- `10% of 110 + 40 - 15 g.`

**Total food eaten: 600 g.**

Food eaten:
- by the dog - 510 g.

- by the cat: 90 g.

`600g of 1000g = 60%` of the food is eaten.

`510g of 600g = 85%` was eaten by the dog.

`90g of 600g = 15%` was eaten by the cat.

# More Examples

| **Input** | **Output** |
| --- | --- |
|`["3"," 500", "100", "30","110" ,"25" ,"120" ,"35"]` | Total eaten biscuits: 16gr. |
| | 84.00\% of the food has been eaten. |
| | 78.57\% eaten from the dog. |
| | 21.43\% eaten from the cat. |
[/task-description]
[code-io /]
[tests]
[test]
[input]
6
6000
200
100
300
30
100
55
156
25
426
65
200
29
[/input]
[output]
Total eaten biscuits: 38gr.
28.10\% of the food has been eaten.
81.97\% eaten from the dog.
18.03\% eaten from the cat.
[/output]
[/test]
[test]
[input]
5
5014
236
124
365
120
146
66
208
140
369
96
[/input]
[output]
Total eaten biscuits: 21gr.
37.30\% of the food has been eaten.
70.80\% eaten from the dog.
29.20\% eaten from the cat.
[/output]
[/test]
[test]
[input]
2
700
200
33
300
50
[/input]
[output]
Total eaten biscuits: 0gr.
83.29\% of the food has been eaten.
85.76\% eaten from the dog.
14.24\% eaten from the cat.
[/output]
[/test]
[test]
[input]
7
7000
200
33
300
50
369
258
456
246
666
66
648
215
741
231
[/input]
[output]
Total eaten biscuits: 149gr.
63.99\% of the food has been eaten.
75.46\% eaten from the dog.
24.54\% eaten from the cat.
[/output]
[/test]
[test]
[input]
7
3000
200
33
300
50
369
25
234
24
466
66
648
21
541
23
[/input]
[output]
Total eaten biscuits: 106gr.
100.00\% of the food has been eaten.
91.93\% eaten from the dog.
8.07\% eaten from the cat.
[/output]
[/test]
[test]
[input]
5
5584
436
224
565
220
346
166
508
148
469
95
[/input]
[output]
Total eaten biscuits: 51gr.
56.89\% of the food has been eaten.
73.15\% eaten from the dog.
26.85\% eaten from the cat.
[/output]
[/test]
[test]
[input]
3
900
176
36
159
19
399
111
[/input]
[output]
Total eaten biscuits: 51gr.
100.00\% of the food has been eaten.
81.56\% eaten from the dog.
18.44\% eaten from the cat.
[/output]
[/test]
[test]
[input]
3
2000
300
110
365
120
444
50
[/input]
[output]
Total eaten biscuits: 49gr.
69.45\% of the food has been eaten.
79.84\% eaten from the dog.
20.16\% eaten from the cat.
[/output]
[/test]
[test]
[input]
4
5000
666
230
156
32
400
200
500
190
[/input]
[output]
Total eaten biscuits: 60gr.
47.48\% of the food has been eaten.
72.54\% eaten from the dog.
27.46\% eaten from the cat.
[/output]
[/test]
[test]
[input]
3
500
100
30
110
25
120
35
[/input]
[output]
Total eaten biscuits: 16gr.
84.00\% of the food has been eaten.
78.57\% eaten from the dog.
21.43\% eaten from the cat.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]