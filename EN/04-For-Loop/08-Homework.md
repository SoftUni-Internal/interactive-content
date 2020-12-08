# Homework

[slide]
# Problem: Calculate Month Salary
[code-task title="Calculate Month Salary" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateMonthSalary (input) {
   // Write your code here
}

```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Receives the number of workdays for the current month and the salary per day - integers 
* Calculates the monthly salary of an employee 
* Prints the result on the console 

# Example
  | **Input** | **Output** |
| --- | --- |
|2| 300 |
|100| |
|200| |

[/task-description]
[tests]
[test]
[input]
2
100
300
[/input]
[output]
400
[/output]
[/test]
[test]
[input]
3
100
300
50
[/input]
[output]
450
[/output]
[/test]
[test]
[input]
5
100
100
100
100
100
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
3
10
20
30
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Number Sequence
[code-task title="Number Sequence" taskId="pb-js-04-p-02" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numberSequence(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads **n** representing the count of numbers to read next
* Finds the **max** and the **min numbers**
* Prints them on the console

# Example
| **Input** | **Output** |
| --- | --- |
|5| Max number: 304 |
|10|Min number: 0|
|304||
|0| |
|0| |
|50| |

[/task-description]
[tests]
[test]
[input]
4
100
200
0
300
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
1
100
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
3
-1
-2
0
[/input]
[output]
Max number: 0
Min number: -2
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem and Solution: Power Of Numbers

[vimeo-video]
[stream language="EN" videoId="488453000/3f94136963" default /]
[stream language="RO" videoId="488453000/3f94136963"  /]
[/video-vimeo]


[code-task title="Power Of Numbers" taskId="pb-js-04-p-03" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function powerOfNumbers(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 

* Reads `p` – the power and n – the number 

* Prints the result of `n` to the power of `p` 

* Do not use `Math.Pow()`- not the goal of our exercise 

# Example
| **Input** | **Output** |
| --- | --- |
|5| 32 |
|2||

[/task-description]
[tests]
[test]
[input]
5
2
[/input]
[output]
32
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Equal Pairs
[code-task title="Equal Pairs" taskId="pb-js-04-p-04" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function equalPairs(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads number **n** and **n pairs** of numbers
* Prints `Yes, value={sum}`, if the **sum of all** pairs is the **same**
* **Otherwise**, prints `No, maxdiff={diff}`
* diff is the **max difference** in the sum between two pairs

# Example
  | **Input** | **Output** |
| --- | --- |
|2| Yes, value=\-1 |
|\-1| |
|0| |
|0| |
|\-1| |

[/task-description]
[tests]
[test]
[input]
3
1
2
0
3
4
\-1
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
2
1
2
2
2
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
4
1
1
3
1
2
2
0
0
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
1
5
5
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
2
\-1
0
0
\-1
[/input]
[output]
Yes, value=\-1
[/output]
[/test]
[test]
[input]
2
\-1
2
0
\-1
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
8
5
5
70
\-60
3
7
2
8
20
\-10
15
\-5
0
10
10
0
[/input]
[output]
Yes, value=10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Zig Zag Sum
[code-task title="Zig Zag Sum" taskId="pb-js-04-p-05" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function zigZagSum(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads **n** - number representing amount of input numbers
* Reads **n numbers** 
* For every **even** line **adds** the number to the result
* For every **odd** line **subtracts** the number from the result
* **Prints** the result

# Example
  | **Input** | **Output** |
| --- | --- |
|2| 10 |
|10| |
|20| |
|| |

[/task-description]
[tests]
[test]
[input]
4
20
20
20
20
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
10
20
[/input]
[output]
10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Divide Without Remainder
[code-task title="Divide Without Remainder" taskId="pb-js-04-p-06" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function divideWithoutRemainder(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 

* Reads `n` and an **n amount** of numbers after it 

* Finds the **percentage** of how many of them can be divided w**ithout a remainder using 2, 3 and 4 as a divisors** 

* Prints the percentages for **p1, p2 and p3**, **formatted** to the second digit 

# Example
  | **Input** | **Output** |
| --- | --- |
|3| 33.33\% |
|3| 100.00\%|
|6|0.00\% |
|9| |

[/task-description]
[tests]
[test]
[input]
3
12
27
6
[/input]
[output]
66.67\%
100.00\%
33.33\%
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Vowel Sum
[code-task title="Vowel Sum" taskId="pb-js-04-p-07" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vowelSum(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 

* Reads `n` - the count of characters which the program is going to receive 

* If character is a vowel, it adds the characters `value` to the result

 | character      | a | e   |i   |o  |u  |
| :---:       |    :----:   |   :---:     |  :---:|:---:     |:---:     |
| value  | 1  | 2 |3 |4 |5 |


* Prints the result

# Example
  | **Input** | **Output** |
| --- | --- |
|2| 1 |
|a| |
|g| |
|| |

[/task-description]
[tests]
[test]
[input]
2
i
u
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
5
a
u
n
m
s
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8
a
e
i
o
u
a
a
s
[/input]
[output]
17
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Rollercoaster
[code-task title="Rollercoaster" taskId="pb-js-04-p-08" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rollercoaster(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 

* Reads the number of **places** on a rollercoaster 

* The **minimum passenger age** 

* After that receives the **number of people** on the queue for this ride 

* Followed by the **age** for each person queuing 

* If all places can be filled, the program prints out: `The rollercoaster departures` 

* In any other case, prints out:  `Waiting...`

# Example
  | **Input** | **Output** |
| --- | --- |
|2| The rollercoaster departures |
|10| |
|2| |
|15| |
|24| |

[/task-description]
[tests]
[test]
[input]
2
10
2
15
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
2
25
5
10
15
18
5
30
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
4
18
10
15
57
14
35
68
45
23
14
24
26
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
3
21
5
25
45
34
12
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem and Solution: Multiply

[vimeo-video]
[stream language="EN" videoId="487119938/9a4818ebf0" default /]
[stream language="RO" videoId="487119938/9a4818ebf0"  /]
[/video-vimeo]

[code-task title="Multiply" taskId="pb-js-04-p-09" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function multiply(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 

* Reads `n` – an int 

* Holds a for-loop which prints: `{n} x {i} = {result}` 

* Where i are the numbers from **1 to 10 (inclusive)** 

# Example
  | **Input** | **Output** |
| --- | --- |
|2| 2 x 1 = 2 |
||2 x 2 = 4 |
|| 2 x 3 = 6|
|| 2 x 4 = 8|
||2 x 5 = 10 |
|| 2 x 6 = 12|
||2 x 7 = 14 |
||2 x 8 = 16 |
|| 2 x 9 = 18|
|| 2 x 10 = 20|

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Homework Results
[tasks-results/]

[/slide]

[slide]
# NOT WORKING TEST PROBLEM:  Numbers, Divisible by 9

[code-task title="Divisible by 9"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let numByNine = '0';
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
            sum += index;
            
        }
    }
    console.log(`The sum: ${sum}`);
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
          console.log(index + " ");  
            
        }
    }
    
}
```
[/code-editor]
[task-description]
# Description

`Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващия отговарящите на условието числа с интервал между тях.`

# Example
| **Input** | **Output** |
| --- | --- |
|100| The sum: 1683 |
|200|108 117 126 135 144 153 162 171 180 189 198|

[/task-description]
[tests]
[test]
[input]
100
200
[/input]
[output]
The sum: 1683
108
117
126
135
144
153
162
171
180
189
198
[/output]
[/test]
[test]
[input]
0
100
[/input]
[output]
The sum: 594
0
9
18
27
36
45
54
63
72
81
90
99
[/output]
[/test]
[test]
[input]
1
50
[/input]
[output]
The sum: 135
9
18
27
36
45
[/output]
[/test]
[test]
[input]
9000
9008
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# WORKING TEST PROBLEM:  Numbers, Divisible by 9

[code-task title="Divisible by 9"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
  let  num1 = Number(input.shift());
  let  num2 = Number(input.shift());
  
    let sum = 0;
    let numByNine = '0';
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
            sum += index;
            
        }
    }
    console.log(`The sum: ${sum}`);
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
          console.log(index + " ");  
            
        }
    }
    
}
```
[/code-editor]
[task-description]
# Description

`Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващия отговарящите на условието числа с интервал между тях.`

# Example
| **Input** | **Output** |
| --- | --- |
|100| The sum: 1683 |
|200|108 117 126 135 144 153 162 171 180 189 198|

[/task-description]
[tests]
[test]
[input]
100
200
[/input]
[output]
The sum: 1683
108
117
126
135
144
153
162
171
180
189
198
[/output]
[/test]
[test]
[input]
0
100
[/input]
[output]
The sum: 594
0
9
18
27
36
45
54
63
72
81
90
99
[/output]
[/test]
[test]
[input]
1
50
[/input]
[output]
The sum: 135
9
18
27
36
45
[/output]
[/test]
[test]
[input]
9000
9008
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Homework Results
[tasks-results/]

[/slide]