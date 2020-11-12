# Problem: Care of Puppy

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