// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Homework"

# Homework
[slide hideTitle]
# Problem: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-js-Conditions-Advanced-Fruit-or-Vegetable" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fruitOrVegetable(input) {
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
Create a program, which determines if the **input** is a **fruit** or a **vegetable**:

* You will receive a single input line: an item from the greengrocery
* Print "**fruit**" for the following: **banana**, **apple**, **kiwi**, **cherry**, **lemon** and **grapes**
* Print "**vegetable**" for the following: **cucumber**, **pepper**, **carrot** and **onion**
* Print "**unknown**" for everything else

# Example
| **Input** | **Output** |
| --- | --- |
|fruitOrVegetable('lemon')| fruit |
|fruitOrVegetable('carrot')| vegetable |

[hints]
[hint]
You can use a switch-case expression to solve the problem easier.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
fruitOrVegetable('lemon')
[/input]
[output]
fruit
[/output]
[/test]
[test open]
[input]
fruitOrVegetable('carrot')
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
fruitOrVegetable('banana')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('apple')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('cherry')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('grapes')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('onion')
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
fruitOrVegetable('cucumber')
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
fruitOrVegetable('pepper')
[/input]
[output]
vegetable
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Day of Week
[code-task title="Day of Week" taskId="pb-js-Conditions-Advanced-Day-of-Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dayOfWeek(input) {
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
Create a program, which prints the day of the week as a word: 

* You will receive an integer **n**: the **day of the week** in range \[1..7\]
* Print the name of the day (as a word)
* Print "**Error**" if the number is not in the given range

# Example
| **Input** | **Output** |
| --- | --- |
|dayOfWeek(1)| Monday |
|dayOfWeek(8)| Error |

[/task-description]
[tests]
[test open]
[input]
dayOfWeek(1)
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
dayOfWeek(8)
[/input]
[output]
Error
[/output]
[/test]
[test]
[input]
dayOfWeek(7)
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
dayOfWeek(2)
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
dayOfWeek(3)
[/input]
[output]
Wednesday
[/output]
[/test]
[test]
[input]
dayOfWeek(4)
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
dayOfWeek(5)
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
dayOfWeek(6)
[/input]
[output]
Saturday
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-js-Conditions-Advanced-Vowel-or-Consonant" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vowelOrConsonant(input) {
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
Create a program, which determines if a letter is a **vowel** or a **consonant**:

* You will receive a **letter** from the English alphabet
* Print either "**Vowel**" or "**Consonant**"

# Example
  | **Input** | **Output** |
| --- | --- |
|vowelOrConsonant('a')| Vowel |
|vowelOrConsonant('B')| Consonant |

[hints]
[hint]
You can use an "if" statement and check if the letter is a vowel. 

If it is print the correct output. 

However, if it isn't, enter the "else" statement and print the appropriate output.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
vowelOrConsonant('a')
[/input]
[output]
Vowel
[/output]
[/test]
[test open]
[input]
vowelOrConsonant('B')
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
vowelOrConsonant('E')
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
vowelOrConsonant('b')
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
vowelOrConsonant('C')
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
vowelOrConsonant('A')
[/input]
[output]
Vowel
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Product of 3 Numbers
[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/problem1-product-of-3-numbers-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Product of 3 Numbers" taskId="pb-js-Conditions-Advanced-Product-of-3-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function productOfThreeNumbers(input) {
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
Create a program, which determines the sign of the product of 3 numbers:

* You will receive **3 floating-point** numbers as an array
* Print the **sign** of the product of the entered 3 numbers: "**positive**", "**negative**" or "**zero**"

Try to do this **without multiplying** the 3 numbers
# Example
  | **Input** | **Output** |
| --- | --- |
| productOfThreeNumbers([2, 3, -1]) | negative |
| productOfThreeNumbers([33, 3, 0]) | zero | 


[/task-description]
[tests]
[test open]
[input]
productOfThreeNumbers([2, 3, -1])
[/input]
[output]
negative
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([-3, -4, 5])
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([2, -9, 5])
[/input]
[output]
negative
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([4, 0, -10])
[/input]
[output]
zero
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([5, 2, 2])
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([-5, 2, -2])
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([1, 2, 0])
[/input]
[output]
zero
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Sorted Numbers
[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/problem2-sorted-numbers-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sorted Numbers" taskId="pb-js-Conditions-Advanced-Sorted-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sortedNumbers(input) {
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
Create a program, which determiens if the **given numbers** are sorted:

* You will receive 3 floating-point numbers
* Print "**Ascending**" if the numbers are in ascending order
* Print "**Descending**" if the numbers are in descending order
* Print "**Not sorted**" in any other case

# Example
| **Input** | **Output** |
| --- | --- |
|sortedNumbers([1, 2, 3])| Ascending |
|sortedNumbers([3, 5, 2])| Not sorted |

[/task-description]
[tests]
[test open]
[input]
sortedNumbers([1, 2, 3])
[/input]
[output]
Ascending
[/output]
[/test]
[test open]
[input]
sortedNumbers([3, 5, 2])
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
sortedNumbers([3, 1, 2])
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
sortedNumbers([3, 2, 1])
[/input]
[output]
Descending
[/output]
[/test]
[test]
[input]
sortedNumbers([4, 3, 2])
[/input]
[output]
Descending
[/output]
[/test]
[test]
[input]
sortedNumbers([2, 3, 4])
[/input]
[output]
Ascending
[/output]
[/test]
[test]
[input]
sortedNumbers([4, 5, 3])
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
sortedNumbers([10, 9, 8])
[/input]
[output]
Descending
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vacation Expenses
[code-task title="Vacation Expenses" taskId="pb-js-Conditions-Advanced-Vacation-Expenses" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vacationExpenses(season, building, days){
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
Create a program, which calculates vacation expenses:

* You will receive a season, an accommodation type, and a count of the days 
* Print the total **expenses**, based on the price table below, formatted to the **2nd digit** after the decimal point

 | Season   | Hotel | Camping   | Discount|
| :---:       |    :----:   |   :---:     |   :---: |
|Spring|30|10|20\%|
|Summer|50|30|0\%|
|Autumn|20|15|30\%|
|Winter|40|10|10\%|

# Example
| **Input** | **Output** |
| --- | --- |
| vacationExpenses('Winter', 'Hotel', 5) | 180.00 |
| vacationExpenses('Summer', 'Camping', 3) | 90.00 |

[hints]
[hint]
Initialize a variable at the beginning in which you will store the final price and give it an initial value of 0.

Use nested conditional statements and in the body of the conditional statement for the season, check for the accommodation type (**Hotel** or **Camping**).

Calculate the price, depending on the season, the accommodation type, and the discount. Save the resulting value in the variable you created.  

In the end, print the final price. To output the result with exactly 2 digits after the decimal point, use **toFixed(2)**.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
vacationExpenses('Winter', 'Hotel', 5)
[/input]
[output]
180.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Winter', 'Camping', 10)
[/input]
[output]
90.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Autumn', 'Camping', 6)
[/input]
[output]
63.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Summer', 'Hotel', 7)
[/input]
[output]
350.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Spring', 'Camping', 8)
[/input]
[output]
64.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Summer', 'Hotel', 9)
[/input]
[output]
450.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Autumn', 'Camping', 10)
[/input]
[output]
105.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Cinema
[code-task title="Cinema" taskId="pb-js-Conditions-Advanced-Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinema(typeOfMovie, rows, seatsPerRow) {
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
Create a program, which prints the **price** of all the tickets for a movie in the cinema:

* You will receive the **type of the movie**, the **rows** and the **seats per row** in the cinema
* Prints the **total price** for all seats, **formatted** to the 2nd digit after the decimal point

  | **Type** | **Price** |
| --- | --- |
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

# Example
  | **Input** | **Output** |
| --- | --- |
|cinema('Premiere', 10, 12)| 1440.00 |
|cinema('Normal', 21, 13)| 2047.50 |
|cinema('Discount', 12, 30)| 1800.00 |

[hints]
[hint]
Use simple checks and basic calculations. To output the result with exactly 2 digits after the decimal point, use **toFixed(2)**.
[/hint]
[hint]
Initialize variable "income" in the beginning, with an initial value of 0.
Make a series of checks for each type of movie ("Premiere, Normal, Discount"), assign the corresponding price to the "income" variable, and at the end, print the final result.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cinema('Premiere', 10, 12)
[/input]
[output]
1440.00
[/output]
[/test]
[test open]
[input]
cinema('Normal', 21, 13)
[/input]
[output]
2047.50
[/output]
[/test]
[test open]
[input]
cinema('Discount', 12, 30)
[/input]
[output]
1800.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 88, 44)
[/input]
[output]
29040.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 43, 15)
[/input]
[output]
3225.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 42, 62)
[/input]
[output]
31248.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 30, 36)
[/input]
[output]
5400.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 94, 17)
[/input]
[output]
19176.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 34, 7)
[/input]
[output]
1190.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 34, 93)
[/input]
[output]
15810.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 68, 50)
[/input]
[output]
40800.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 73, 61)
[/input]
[output]
33397.50
[/output]
[/test]
[test]
[input]
cinema('Normal', 63, 64)
[/input]
[output]
30240.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 84, 98)
[/input]
[output]
61740.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 59, 57)
[/input]
[output]
25222.50
[/output]
[/test]
[test]
[input]
cinema('Premiere', 52, 35)
[/input]
[output]
21840.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 36, 75)
[/input]
[output]
20250.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 65, 68)
[/input]
[output]
33150.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 59, 35)
[/input]
[output]
24780.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 78, 9)
[/input]
[output]
3510.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-js-Conditions-Advanced-Operation-With-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function operationswithNumbers(firstNumber, secondNumber, operation) {
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
Create a program, which applies an operator to a given pair of numbers:

* You will receive two integers and a math operator from the console 
* The math operator could be: \+, \-, \/, \% and \*
* The output should be in the following **format**: \{**N1**\} \{**operator**\} \{**N2**\} = \{**result**\}

# Example
  | **Input** | **Output** |
| --- | --- |
| operationswithNumbers(12, 10, '\+') | 12 + 10 = 22 |
| operationswithNumbers(25, 25, '\-') | 25 - 25 = 0 |

[hints]
[hint]
Initialize variable "result" in the beginning, with an initial value of 0.
Make a series of checks for each math operator and perform the corresponding mathematical operation on the two numbers, 
assigning the result to the "result" variable.
Print the output using string interpolation with Template Literals:
console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
operationswithNumbers(12, 10, '\+')
[/input]
[output]
12 + 10 = 22
[/output]
[/test]
[test]
[input]
operationswithNumbers(12, 10, '\-')
[/input]
[output]
12 \- 10 = 2
[/output]
[/test]
[test]
[input]
operationswithNumbers(10, 12, '\*')
[/input]
[output]
10 \* 12 = 120
[/output]
[/test]
[test]
[input]
operationswithNumbers(6, 2, '\/')
[/input]
[output]
6 \/ 2 = 3
[/output]
[/test]
[test]
[input]
operationswithNumbers(5, 2, '%')
[/input]
[output]
5 \% 2 = 1
[/output]
[/test]
[test]
[input]
operationswithNumbers(2, 2, '\-')
[/input]
[output]
2 \- 2 = 0
[/output]
[/test]
[test]
[input]
operationswithNumbers(2, 2, '\+')
[/input]
[output]
2 \+ 2 = 4
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: ATM
[code-task title="ATM" taskId="pb-js-Conditions-Advanced-ATM" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function atm(balance, withdraw, limit) {
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
Create a program, which simulates an ATM withdrawal:

* You will receive the following: **balance**, **withdraw** and **limit**
* Print "**The withdraw was successful.**" if the balance is enough
* Print "**The daily limit was exceeded.**" if the limit is exceeded
* Print "**Insufficient availability.**" if the balance is not enough

# Example
  | **Input** | **Output** |
| --- | --- |
|atm(420, 20, 25)| The withdraw was successful. |
|atm(10, 50, 20)| The daily limit was exceeded. |
|| Insufficient availability. |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
atm(420, 20, 25)
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test open]
[input]
atm(10, 50, 20)
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
atm(10, 4565, 345)
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
atm(342, 2, 3)
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test]
[input]
atm(10, 50, 20)
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-js-Conditions-Advanced-Biggest-of-Five-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function biggestOfFiveNumbers(numOne, numTwo, numThree, numFour, numFive) {
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
Create a program, which finds the biggest of 5 numbers
* You will receive **5 integers**
* Print the **largest** number

  | **Input** | **Output** |
| --- | --- |
| biggestOfFiveNumbers(\-1, \-2, \-3, \-4, \-5) | \-1 |
| biggestOfFiveNumbers(3, 4, 77, 12, 33) | 77 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
biggestOfFiveNumbers(\-1, \-2, \-3, \-4, \-5)
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(5, -2, -3, 9, -8)
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(-1, 4, 3, -4, 1)
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(4, 2, 5, 43, 1)
[/input]
[output]
43
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(234234, 2345, 56756, 67867, 3453)
[/input]
[output]
234234
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(3452, 54756, 6786, 3453, 4)
[/input]
[output]
54756
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

