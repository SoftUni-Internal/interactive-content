# Problem 3: Energy Booster

[slide hideTitle]

# Description

The season for climbing alpine peaks begins and all climbers stock up on energy bars for climbing.

The company offers **small** and **large** cuts with **2 pcs.** and **5 pcs.** energy bars, the price of one bar depends on the fruit from which it is made.

Depending on the **size of the cut**, the price per number of an energy bar is different.

From the console are read the fruits, the size of the package `(small) 2 pcs.` or `(big) 5 pcs.`.

Also, you will receive the **count of cuts that are ordered.**

Write a program that c**alculates the amount to be paid** for the order.


| \- | Watermelon  | Mango | Pineapple   | Raspberry |
| :---:       |    :----:   |   :---:     |  :---:     | :---:     |
| `2 pcs. (small)` | $56 pcs.  | $36.66 pcs. |$42.10 pcs. | $20 pcs.|
| `5 pcs. (big)`  | $28.70 pcs.  | $19.60 pcs. |$24.80 pcs. | $15.20 pcs.|

For orders:

- From **$400 to $1.000 inclusive there is a 15\%** discount.

- Over **$1,000 there is a 50\%** discount.

## Input

The input comes as an **array of which contains three elements:**

- **First Element:**  

Fruit, text with possibilities: `Watermelon`, `Mango`, `Pineapple` or `Raspberry`

- **Second Element:** 

The size of the set: text with options: `small` or `big`

- **Third Element:** 

Number of ordered sets: integer in the interval \[1 … 10000\]

## Output

**One line** is printed on the console:

- The **price to be paid**, **formatted to the second digit after decimal point**, in the following format: `{price} dollars.`


[code-task title="Energy Booster" taskId="js-pb-final-exam-Energy-Booster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
|`['Watermelon', 'big', '4']` | 487.90 dollars. |

# Comments

- The price of a large package of watermelon bars is `5 * 28.70 = $143.50`

- The price of 4 sets: `$574`

- The customer receives a 15\% discount: `400 <= 574 <= 1000`

- `15% from 574 = $86.1 discount`

- Final price: `574 - 86.1 = $487.9`

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Watermelon
big
4
[/input]
[output]
487.90 lv.
[/output]
[/test]
[test open]
[input]
Pineapple
small
1
[/input]
[output]
84.20 lv.
[/output]
[/test]
[test open]
[input]
Raspberry
small
50
[/input]
[output]
1000.00 lv.
[/output]
[/test]
[test open]
[input]
Mango
big
8
[/input]
[output]
666.40 lv.
[/output]
[/test]
[test]
[input]
Raspberry
small
25
[/input]
[output]
850.00 dollars.
[/output]
[/test]
[test]
[input]
Raspberry
small
10
[/input]
[output]
340.00 dollars.
[/output]
[/test]
[test]
[input]
Watermelon
big
44
[/input]
[output]
3157.00 dollars.
[/output]
[/test]
[test]
[input]
Pineapple
small
2
[/input]
[output]
168.40 dollars.
[/output]
[/test]
[test]
[input]
Mango
big
10
[/input]
[output]
833.00 dollars.
[/output]
[/test]
[test]
[input]
Watermelon
big
0
[/input]
[output]
0.00 dollars.
[/output]
[/test]
[test]
[input]
Pineapple
big
77
[/input]
[output]
4774.00 dollars.
[/output]
[/test]
[test]
[input]
Watermelon
small
3
[/input]
[output]
336.00 dollars.
[/output]
[/test]
[test]
[input]
Mango
small
11
[/input]
[output]
685.54 dollars.
[/output]
[/test]
[test]
[input]
Pineapple
small
10000
[/input]
[output]
421000.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]