[slide]
# Problem: Report System
[code-task title="Report System" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
At a charity event, payments for the purchased products are always **alternated**: **cash payment and card payment**. **Always first payment method is cash**.

The following payment rules have been established:
- If the product **exceeds 100 dollars**, it **cannot be paid in cash**
- If the product is priced **under 10 dollars**, it **cannot be paid by credit card**

The program ends either after we receive the command **"End"**, or after the **funds are collected**.

# Input
Read from the console:
- The amount **expected to be collected** from sales - integer in range \[1...10000\] 

On each subsequent line, until the **"End"** command is received or until **the necessary funds are collected**: 
    - **The prices of items** to be purchased - integer in range \[1...500\]

# Output
Print on the console:
- In case of successful transaction: "Product sold!" 
- In case of unsuccessful transaction: "Error in transaction!" 
- If the sum of all purchased products **exceeds or reaches the expected amount**, the program must be completed and **two lines** are printed to the console: 
    - "Average CS: \{average payment in person's cash\}" 
    - "Average CC: \{average card payment per person\}"
    Payments must be **formatted to the second digit after the decimal point**.
- When the **"End"** command is received, **one line** is written:
    - "Failed to collect required money for charity."

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 500| | Error in transaction!|
| 120| | Error in transaction!|
| 8| | Product sold!|
| 63| | Product sold!|
| 256| | Product sold!|
| 78| | Product sold!|
| 317| | Average CS: 70.50|
| | | Average CC: 286.50|

## Comments
- The condition is rotated first in **cash payment**, then through **credit card**
- 120 > 100 transaction is rejected 
- 8 < 10 transaction is rejected 
- 63 <= 100 => the transaction was successful
- 256 >= 10 => the transaction was successful 
- 78 <= 100 => the transaction was successful 
- 317 >= 10 => the transaction was successful 
- Total amount collected: 63 + 256 + 78 + 317 = 714 
- 714 >= 500
- Total cash: 63 + 78 = 141;  Average cash: 141/2 = 70.50 
- Total credit cards: 256 \+ 317 = 573; Average credit cards: 573/2 = 286.50

[/task-description]
[tests]
[test]
[input]
500
120
8
63
256
78
317
[/input]
[output]
Error in transaction!
Error in transaction!
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 70.50
Average CC: 286.50
[/output]
[/test]
[test]
[input]
600
86
150
98
227
End
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
500
100
200
100
100
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 100.00
Average CC: 150.00
[/output]
[/test]
[test]
[input]
100
101
9
80
20
[/input]
[output]
Error in transaction!
Error in transaction!
Product sold!
Product sold!
Average CS: 80.00
Average CC: 20.00
[/output]
[/test]
[test]
[input]
5000
150
890
70
1500
200
1000
End
[/input]
[output]
Error in transaction!
Product sold!
Product sold!
Product sold!
Error in transaction!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
4333
64
333
150
1234
100
6
66
335
End
[/input]
[output]
Product sold!
Product sold!
Error in transaction!
Product sold!
Product sold!
Error in transaction!
Product sold!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
600
25
346
100
256
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 62.50
Average CC: 301.00
[/output]
[/test]
[test]
[input]
777
120
6
333
8
453
134
End
[/input]
[output]
Error in transaction!
Error in transaction!
Error in transaction!
Error in transaction!
Error in transaction!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[test]
[input]
2983
35
995
94
937
38
593
End
[/input]
[output]
Product sold!
Product sold!
Product sold!
Product sold!
Product sold!
Product sold!
Failed to collect required money for charity.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]