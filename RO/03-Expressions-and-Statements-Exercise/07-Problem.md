[slide]
# Problem: Yard Greening
[code-task title="Yard Greening" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program that **calculates the expenses** for yard greening. 

The price **for one square meter is 7.61 dollars with VAT**. 

The company offers **18% discount from the total price**.

# Input

Single line from the console:

- **Square meters** which will be greening - float-pointing number in range [0.00… 10000.00]

# Output

Print on the console **two lines**:   
- "The final price is: \{total price\} dollars"
- "The discount is: \{discount\} dollars"

Prices should be **formatted to the second decimal point**.

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| 540 | | The final price is: 3369.71 dollars |
|  | | The discount is: 739.69 dollars |

# Comments
- Calculate the price for greening the whole yard: 540 \* 7.61 = 4109.40 $
- Calculate the discount: 0.18 \* 4109.40 = 739.69 $
- Calculate the final price: 4109.40 – 739.69 = 3369.71 $
[/task-description]
[tests]
[test]
[input]
540
[/input]
[output]
The final price is: 3369.71 dollars
The discount is: 739.69 dollars
[/output]
[/test]
[test]
[input]
135
[/input]
[output]
The final price is: 842.43 dollars
The discount is: 184.92 dollars
[/output]
[/test]
[test]
[input]
335
[/input]
[output]
The final price is: 2090.47 dollars
The discount is: 458.88 dollars
[/output]
[/test]
[test]
[input]
412
[/input]
[output]
The final price is: 2570.96 dollars
The discount is: 564.36 dollars
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
The final price is: 3120.10 dollars
The discount is: 684.90 dollars
[/output]
[/test]
[test]
[input]
650
[/input]
[output]
The final price is: 4056.13 dollars
The discount is: 890.37 dollars
[/output]
[/test]
[test]
[input]
123
[/input]
[output]
The final price is: 767.54 dollars
The discount is: 168.49 dollars
[/output]
[/test]
[test]
[input]
811
[/input]
[output]
The final price is: 5060.80 dollars
The discount is: 1110.91 dollars
[/output]
[/test]
[test]
[input]
250
[/input]
[output]
The final price is: 1560.05 dollars
The discount is: 342.45 dollars
[/output]
[/test]
[test]
[input]
211.05
[/input]
[output]
The final price is: 1316.99 dollars
The discount is: 289.10 dollars
[/output]
[/test]
[test]
[input]
348.49
[/input]
[output]
The final price is: 2174.65 dollars
The discount is: 477.36 dollars
[/output]
[/test]
[test]
[input]
74.44
[/input]
[output]
The final price is: 464.52 dollars
The discount is: 101.97 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]