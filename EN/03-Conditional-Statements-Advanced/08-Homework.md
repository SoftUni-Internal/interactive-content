[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.
[image assetsSrc="homeowrk.png" /]
[/slide]

[slide]
# Problem: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-js-03-p-01" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fruitOrVegetable(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to check for fruit or vegetable:

* Read a single input line: an item from the greengrocery
* Fruits: banana, apple, kiwi, cherry, lemon, grapes
* Vegetables: cucumber, pepper, carrot, onion
* Print: `vegetable`, `fruit` or `unknown`

# Example
  | **Input** | **Output** |
| --- | --- |
|lemon| fruit |
|carrot| vegetable |

[/task-description]
[tests]
[test]
[input]
lemon
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
carrot
[/input]
[output]
vegetable
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Day of Week
[code-task title="Day of Week" taskId="pb-js-03-p-02" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dayOfWeek(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to print the day of week as words:

* Read and integer **n**: the **day of the week** in range `[1..7]`
* Print the **name of the day** (as words, in English)
* Print `Error` if the number is not in the given range

# Example
  | **Input** | **Output** |
| --- | --- |
|1| Monday |
|8| Error |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Error
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-js-03-p-03" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vowelOrConsonant(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to check a letter for vowel or consonant:

* Read a **letter** from the English alphabet
* Print either `Vowel` or `Consonant`

# Example
  | **Input** | **Output** |
| --- | --- |
|a| Vowel |
|B| Consonant |

[/task-description]
[tests]
[test]
[input]
a
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
E
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
b
[/input]
[output]
Consonant
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Product of 3 Numbers
[code-task title="Product of 3 Numbers" taskId="pb-js-03-p-04" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function productOfThreeNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Calculate the sign of the product of 3 numbers:

* Read **3 floating-point** numbers
* Print the **sign** of the product of the entered 3 numbers: `positive`, `negative` or `zero`

Try to do this **without multiplying** the 3 numbers
# Example
  | **Input** | **Output** |
| --- | --- |
|2| negative |
|3|  |
|-1|  |

[/task-description]
[tests]
[test]
[input]
-2
3
1
[/input]
[output]
negative
[/output]
[/test]
[test]
[input]
-3
-4
5
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
1
2
0
[/input]
[output]
zero
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Sorted Numbers
[code-task title="Sorted Numbers" taskId="pb-js-03-p-05" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sortedNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which checks for **sorted 3 numbers**:

* Read 3 real numbers
* Print `Ascending` if the numbers are in ascending order
* Print `Descending` if the numbers are in descending order
* Print `Not sorted` in any other case

# Example
  | **Input** | **Output** |
| --- | --- |
|1| Ascending |
|2|  |
|3|  |

  | **Input** | **Output** |
| --- | --- |
|3| Not sorted |
|5|  |
|2|  |

[/task-description]
[tests]
[test]
[input]
1
2
3
[/input]
[output]
Ascending
[/output]
[/test]
[test]
[input]
3
1
2
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
3
2
1
[/input]
[output]
Descending
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Vacation Expenses
[code-task title="Vacation Expenses" taskId="pb-js-03-p-06" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vacationExpenses(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which calculates vacation expenses:

* Read season, accommodation type and count of the days
* Print the total **expenses**, based on the price table bellow, formatted to the **2nd digit** after the decimal point

 | Season   | Hotel | Camping   | Discount|
| :---:       |    :----:   |   :---:     |   :---: |
|Spring|30|10|20\%|
|Summer|50|30|0\%|
|Autumn|20|15|30\%|
|Winter|40|10|10\%|

# Example
  | **Input** | **Output** |
| --- | --- |
|Winter| 180.00 |
|Hotel|  |
|5|  |

[/task-description]
[tests]
[test]
[input]
Winter
Hotel
5
[/input]
[output]
180.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Cinema
[code-task title="Cinema" taskId="pb-js-03-p-07" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinema(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Calculate the **price** for all the tickets for a cinema movie:

* Reads the **type of the movie**, the **rows** and the **seats per row** in the cinema
* Prints the **total price** for all seats **formatted** to the 2nd digit after the decimal point

  | **Type** | **Price** |
| --- | --- |
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

# Example
  | **Input** | **Output** |
| --- | --- |
|Normal| 810.00 |
|12|  |
|9|  |

[/task-description]
[tests]
[test]
[input]
Normal
12
9
[/input]
[output]
810.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-js-03-p-08" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numberOperations(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to apply an operator for given two numbers:

* Read **two integers** and **math operator** from the console
* The math operator could be: "+", "-", "/", "%" and "*"
* The output should be in the following **format**: `{N1} {operator} {N2} = {result}`

# Example
  | **Input** | **Output** |
| --- | --- |
|12| 12 + 10 = 22 |
|10|  |
|\+|  |

[/task-description]
[tests]
[test]
[input]
10
12
\+
[/input]
[output]
10 + 12 = 22
[/output]
[/test]
[test]
[input]
12
10
\-
[/input]
[output]
12 \- 10 = 2
[/output]
[/test]
[test]
[input]
10
12
\*
[/input]
[output]
10 \* 12 = 120
[/output]
[/test]
[test]
[input]
6
2
\/
[/input]
[output]
6 \/ 2 = 3
[/output]
[/test]
[test]
[input]
5
2
\%
[/input]
[output]
5 \% 2 = 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: ATM
[code-task title="ATM" taskId="pb-js-03-p-09" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function ATM(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to simulate an ATM withdrawal:

* Read: **balance**, **withdraw** and **limit**
* Print `The withdraw was successful.` if the balance is enough
* Print `The daily limit was exceeded.` if the limit is exceeded
* Print `Insufficient availability.` if the balance isn't enough

# Example
  | **Input** | **Output** |
| --- | --- |
|420| The withdraw was successful. |
|20|  |
|25|  |

  | **Input** | **Output** |
| --- | --- |
|10| The daily limit was exceeded. |
|50| Insufficient availability. |
|20|  |

[/task-description]
[tests]
[test]
[input]
420
20
25
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-js-03-p-10" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function biggestOfFiveNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to find the biggest among 5 numbers
* Read **5 integers**
* Print the **biggest** number

  | **Input** | **Output** |
| --- | --- |
|\-1| \-1 |
|\-2|  |
|\-3|  |
|\-4|  |
|\-5|  |


[/task-description]
[tests]
[test]
[input]
1
2
3
4
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

