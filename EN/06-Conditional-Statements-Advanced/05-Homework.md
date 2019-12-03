[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/homeowrk.png"/]
[/slide]

[slide]
# Problem: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="p-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to check for fruit or vegetable:

* Read a single input line: an item from the greengrocery
* Fruits: banana, apple, kiwi, cherry, lemon, grapes
* Vegetables: cucumber, pepper, carrot, onion
* Print: **"vegetable"**, **"fruit"** or **"unknown"**
# Example
## Input
- lemon
## Output
- fruit
## Input
- carrot
## Output
- vegetable
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
[code-task title="Day of Week" taskId="p-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to print the day of week as words:

* Read and integer **n**: the **day of the week** in range [1..7]
* Print the **name of the day** (as words, in English)
* Print **"Error"** if the number is not in the given range
# Example
## Input
- 1
## Output
- Monday
## Input
- 8
## Output
- Error
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
# Problem: Product of 3 Numbers
[code-task title="Product of 3 Numbers" taskId="p-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Calculate the sign of the product of 3 numbers:

* Read **3 floating-point** numbers
* Print the **sign** of the product of the entered 3 numbers: **positive**, **negative** or **zero**

Try to do this **without multiplying** the 3 numbers
# Example
## Input
- 2
- 3
- -1
## Output
- negative
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
[code-task title="Sorted Numbers" taskId="p-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which checks for **sorted 3 numbers**:

* Read 3 real numbers
* Print **"Ascending"** if the numbers are in ascending order
* Print **"Descending"** if the numbers are in descending order
* Print **"Not sorted"** in any other case
# Example
## Input
- 1
- 2
- 3
## Output
- Ascending
## Input
- 3
- 5
- 2
## Output
- Not sorted
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
# Problem: Sorted Numbers
[code-task title="Sorted Numbers" taskId="p-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
№ Write code herе
```
[/code-editor]
[task-description]
# Description
Write a program, which checks for **sorted 3 numbers**:

* Read 3 real numbers
* Print **"Ascending"** if the numbers are in ascending order
* Print **"Descending"** if the numbers are in descending order
* Print **"Not sorted"** in any other case
# Example
## Input
- 1
- 2
- 3
## Output
- Ascending
## Input
- 3
- 5
- 2
## Output
- Not sorted
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
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Vacation Expenses
[code-task title="Vacation Expenses" taskId="p-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which calculates vacation expenses:

* Read season, accommodation type and count of the days
* Print the total expenses, based on the price table bellow,formatted to the 2nd * digit after the decimal point

|Season|Hotel|Camping|Discount|
|-----|------|-------|--------|
|Spring|30|10|20%|
|Summer|50|30|0%|
|Autumn|20|15|30%|
|Winter|40|10|10%|
# Example
## Input
- Winter
- Hotel
- 5
## Output
- 180.00
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
[code-task title="Cinema" taskId="p-07" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Calculate the **price** for all the tickets for a cinema movie:

* Reads the **type of the movie**, the **rows** and the **seats per row** in the cinema
* Prints the **total price** for all seats **formatted** to the 2nd digit after the decimal point

|Type|Price|
|-----|----|
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

# Example
## Input
- Normal
- 12
- 9
## Output
- 810.00
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
# Problem: Number Operations
[code-task title="Number Operations" taskId="p-08" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to apply an operator for given two numbers:

* Read **two integers** and **math operator** from the console
* The math operator could be: "+", "-", "/", "%" and "*"
* The output should be in the following **format**: "\{N1\} \{operator\} \{N2\} = \{result\}"
# Example
## Input
- 12
- 10
- \+
## Output
- 12 + 10 = 22
[/task-description]
[tests]
[test]
[input]
10
12
+
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
*
[/input]
[output]
10 * 12 = 120
[/output]
[/test]
[test]
[input]
6
2
/
[/input]
[output]
6 / 2 = 3.0
[/output]
[/test]
[test]
[input]
5
2
%
[/input]
[output]
5 % 2 = 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: ATM
[code-task title="ATM" taskId="p-09" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to simulate an ATM withdrawal:

* Read: **balance**, **withdraw** and **limit**
* Print **"The withdraw was successful."** if the balance is enough
* Print **"The daily limit was exceeded."** if the limit is exceeded
* Print **"Insufficient availability."** if the balance isn't enough

# Example
## Input
- 420
- 20
- 25
## Output
- The withdraw was successful.
## Input
- 10
- 50
- 20
## Output
- The daily limit was exceeded.
- Insufficient availability.
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
# Video

[vimeo-video videoId="341568008" startTimeInSeconds="5965" endTimeInSeconds="8399" /]

[/slide]