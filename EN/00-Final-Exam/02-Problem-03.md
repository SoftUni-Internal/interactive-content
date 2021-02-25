
[slide hideTitle]

# Problem 3: Energy Booster

[code-task title="Energy Booster" taskId="JavaScript-Programming-Basics-Energy-Booster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function energyBooster(input) {
	// Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Description

The season for climbing alpine peaks begins, and all climbers stock up on energy bars for climbing.

The company offers **small** and **large** cuts with two or five energy bars. 

The price of one bar depends on its flavor.

The cut size(small or big) affects the price of a bar as well.

The flavor and cut size are read from the console.

You will also receive the number of cuts in the order.

Create a program, which calculates the total amount for the order.


| \- | Watermelon  | Mango | Pineapple   | Raspberry |
| :---:       |    :----:   |   :---:     |  :---:     | :---:     |
| 2 pcs. (small) | $56 pcs.  | $36.66 pcs. |$42.10 pcs. | $20 pcs.|
| 5 pcs. (big) | $28.70 pcs.  | $19.60 pcs. |$24.80 pcs. | $15.20 pcs.|

For orders:

- From **$400 to $1000 inclusive, there is a 15%** discount.

- If the amount is over $1,000, there is a 50% discount.

## Input

The input comes as an **array of which contains three elements:**

- **First Element:**  

Flavor, text with possibilities: **Watermelon**, **Mango**, **Pineapple** or **Raspberry**

- **Second Element:** 

Cut size, text with options: **small** or **big**

- **Third Element:** 

Number of ordered cuts: integer in the interval \[1 … 10000\]

## Output

**One line** is printed on the console:

- The **price to be paid**, **formatted to the second digit after decimal point**, in the following format: \{**price**\} **dollars.**

## Example

| **Input** | **Output** |
| --- | --- |
|energyBooster(['Pineapple', 'small', 1]) | 84.20 dollars. |
|energyBooster(['Raspberry', 'small', 50])|1000.00 dollars.|
|energyBooster(['Watermelon', 'big', '4']) | 487.90 dollars. |

**Comments**

- The price of a large package of watermelon bars is 5 \* 28.70 = $143.50

- The price of 4 sets: $574

- The customer receives a 15\% discount: 400 \<\= 574 \<\= 1000

- 15\% from 574 = \$86.1 discount

- Final price: 574 \- 86.1 = \$487.9

[/task-description]
[code-io /]
[tests]
[test open]
[input]
energyBooster(['Watermelon', 'big', '4'])
[/input]
[output]
487.90 dollars.
[/output]
[/test]
[test open]
[input]
energyBooster(['Pineapple', 'small', 1])
[/input]
[output]
84.20 dollars.
[/output]
[/test]
[test open]
[input]
energyBooster(['Raspberry', 'small', 50])
[/input]
[output]
1000.00 dollars.
[/output]
[/test]
[test open]
[input]
energyBooster(['Mango', 'big', 8])
[/input]
[output]
666.40 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Raspberry', 'small', 25])
[/input]
[output]
850.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Raspberry', 'small', 10])
[/input]
[output]
340.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Watermelon', 'big', 44])
[/input]
[output]
3157.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Pineapple', 'small', 2])
[/input]
[output]
168.40 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Mango', 'big', 10])
[/input]
[output]
833.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Watermelon', 'big', 0])
[/input]
[output]
0.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Pineapple', 'big', 77])
[/input]
[output]
4774.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Watermelon', 'small', 3])
[/input]
[output]
336.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Mango', 'small', 11])
[/input]
[output]
685.54 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Pineapple', 'small', 10000])
[/input]
[output]
421000.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
