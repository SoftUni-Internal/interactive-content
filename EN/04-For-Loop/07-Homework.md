// sectionId: "Javascript::Programming-Basics::For-Loop::Homework"

# Homework

[slide hideTitle]

# Problem: Calculate Month Salary

[code-task title="Calculate Month Salary" taskId="pb-js-for-loop-Calculate-Month-Salary" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function calculateMonthSalary (days, salaryPerDay) {
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

Create a program, which calculates and prints the total salary:

- You will receive the number of workdays for the current month as an integer and the salary per day as an array
- Calculate the monthly salary of an employee
- Print the result to the console

# Example

| **Input**                               | **Output** |
| --------------------------------------- | ---------- |
| calculateMonthSalary(2, [100, 200]) | 300        |
| calculateMonthSalary(3, [200, 240, 130]) | 570 |

[/task-description]
[tests]
[test open]
[input]
calculateMonthSalary(2, [100, 200])
[/input]
[output]
300
[/output]
[/test]
[test open]
[input]
calculateMonthSalary(3, [200, 240, 130])
[/input]
[output]
570
[/output]
[/test]
[test]
[input]
calculateMonthSalary(2, [100, 300])
[/input]
[output]
400
[/output]
[/test]
[test]
[input]
calculateMonthSalary(3, [100, 300, 50])
[/input]
[output]
450
[/output]
[/test]
[test]
[input]
calculateMonthSalary(5, [100, 100, 100, 100, 100])
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
calculateMonthSalary(3, [10, 20, 30])
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Number Sequence

[code-task title="Number Sequence" taskId="pb-js-for-loop-Number-Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function numberSequence (n, numbers) {
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

Create a program, which finds the **biggest** and the **smallest** number from a given sequence:

- You will receive **n**:  the count of numbers to process
- Find the **max** and the **min** values
- Print them to the console

# Example


| **Input**| **Output** |
| ---| --- |
| numberSequence(5, [10, 304, 0, 0, 50]) | Max number: 304 |
|                                                  | Min number: 0   |



| **Input**| **Output** |
| --- | --- |
| numberSequence(4, [15, 155, 34, 71]) | Max number: 155 |
|                                                  | Min number: 15  |

[/task-description]
[tests]
[test open]
[input]
numberSequence(5, [10, 304, 0, 0, 50])
[/input]
[output]
Max number: 304
Min number: 0
[/output]
[/test]
[test open]
[input]
numberSequence(4, [15, 155, 34, 71]) 
[/input]
[output]
Max number: 155
Min number: 15
[/output]
[/test]
[test]
[input]
numberSequence(4, [100, 200, 0, 300])
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
numberSequence(1, [100])
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
numberSequence(3, [-1, -2, 0])
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

[slide hideTitle]

# Problem with Solution: Power Of Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-37-solution-power-of-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Power Of Numbers" taskId="pb-js-for-loop-Power-Of-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function powerOfNumbers(p, n) {
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

Create a program, which calculates and prints a given number to a given power

- You will receive **p** - the power and **n** – the number

- Print the result of **n** to the power of **p**

- Do not use **Math.Pow()** - it is not the goal of this exercise

# Example

| **Input** | **Output** |
| --------- | ---------- |
| powerOfNumbers(5, 2)      | 32         |
| powerOfNumbers(5, 5)      | 3125       |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
powerOfNumbers(5, 2)  
[/input]
[output]
32
[/output]
[/test]
[test open]
[input]
powerOfNumbers(5, 5)
[/input]
[output]
3125
[/output]
[/test]
[test]
[input]
powerOfNumbers(7, 4)
[/input]
[output]
16384
[/output]
[/test]
[test]
[input]
powerOfNumbers(12, 3)
[/input]
[output]
531441
[/output]
[/test]
[test]
[input]
powerOfNumbers(7, 3)
[/input]
[output]
2187
[/output]
[/test]
[test]
[input]
powerOfNumbers(3, 8)
[/input]
[output]
512
[/output]
[/test]
[test]
[input]
powerOfNumbes(8, 2)
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
powerOfNumbers(5, 3)
[/input]
[output]
243
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Equal Pairs

[code-task title="Equal Pairs" taskId="pb-js-for-loop-Calculate-Equal-Pairs" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function equalPairs(n, numbers) {
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

Create a program, which determines if the sum of pairs in a sequence is the same:

- You will receive a number **n** and **n pairs** of numbers
- Print "**Yes, value=**\{**sum**\}", if the **sum of all** pairs is the **same**
- **Otherwise**, print "**No, maxdiff=**\{**diff**\}"
- The **maxdiff** value is the **max difference** in the sum between two pairs

# Example

| **Input**                             | **Output**     |
| ------------------------------------- | -------------- |
| equalPairs(2, [-1, 0, 0, -1]) | Yes, value=\-1 |
| equalPairs(2, [1, 2, 0, 1])           | No, maxdiff=2  |

[/task-description]
[tests]
[test open]
[input]
equalPairs(2, [-1, 0, 0, -1])
[/input]
[output]
Yes, value=\-1
[/output]
[/test]
[test open]
[input]
equalPairs(2, [1, 2, 0, 1])
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
equalPairs(2, [1, 2, 0, 1])
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
equalPairs(3, [1, 2, 0, 3, 4, -1])
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
equalPairs(2, [1, 2, 2, 2])
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
equalPairs(4, [1, 1, 3, 1, 2, 2, 0, 0])
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
equalPairs(1, [5, 5])
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
equalPairs(2, [-1, 0, 0, -1])
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test]
[input]
equalPairs(2, [-1, 2, 0, -1])
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
equalPairs(8, [5, 5, 70, -60, 3, 7, 2, 8, 20, -10, 15, -5, 0, 10, 10, 0])
[/input]
[output]
Yes, value=10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: ZigZag Sum

[code-task title="ZigZag Sum" taskId="pb-js-for-loop-Zig-Zag-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function zigZagSum(n, numbers) {
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

Create a program, which calculates and prints the sum of a sequence in zigzag:

- You receive **n** - the amount of input numbers
- Process **n numbers**
- For every **even** line **add** the number to the result
- For every **odd** line **subtract** the number from the result
- **Print** the result to the console

# Example

| **Input**                  | **Output** |
| -------------------------- | ---------- |
| zigZagSum(2, [10, 20]) | -10         |
| zigZagSum(2, [5, 5])   | 0          |

[/task-description]
[tests]
[test open]
[input]
zigZagSum(2, [10, 20])
[/input]
[output]
-10
[/output]
[/test]
[test open]
[input]
zigZagSum(2, [5, 5])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
zigZagSum(4, [20, 20, 20, 20])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
zigZagSum(2, [10, 20])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
zigZagSum(5, [213, 645, 234, 547, 3])
[/input]
[output]
742
[/output]
[/test]
[test]
[input]
zigZagSum(7, [3, 4, 3, 2, 5, 345, 657])
[/input]
[output]
317
[/output]
[/test]
[test]
[input]
zigZagSum(8, [45, 5, 654, 4, 5, 345, 123, 2])
[/input]
[output]
471
[/output]
[/test]
[test]
[input]
zigZagSum(3, [3453, 456456, 547546])
[/input]
[output]
94543
[/output]
[/test]
[test]
[input]
zigZagSum(5, [4564, 345, 456, 4563, 234])
[/input]
[output]
346
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Divide Without Remainder

[code-task title="Divide Without Remainder" taskId="pb-js-for-loop-Divide-Without-Reminder" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function divideWithoutRemainder(n, numbers) {
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

Create a program, which finds how many numbers of a sequence are divisible without a remainder:

- You will receive a number `n` and a **n amount** of numbers after it

- Calculate the **percentage** of how many of them can be divided **without a remainder, using 2, 3, and 4 as divisors**

- Print the percentages for the three divisors, **formatted** to the second digit

# Example

| **Input** | **Output** |
|   ---      |    --- |
| divideWithoutRemainder(3, [3, 6, 9]) | 33.33\%    |
|                                            | 100.00\%   |
|                                            | 0.00\%     |

| **Input** | **Output** |
|   ---      |    --- |
| divideWithoutRemainder(2, [2, 11, 4]) | 100.00\%   |
|                                            | 0.00\%     | 
|                                            | 50.00\%    |

[/task-description]
[tests]
[test open]
[input]
divideWithoutRemainder(3, [3, 6, 9])
[/input]
[output]
33.33\%
100.00\%
0.00\%
[/output]
[/test]
[test open]
[input]
divideWithoutRemainder(2, [2, 11, 4])
[/input]
[output]
100.00\%
0.00\%
50.00\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(3, [12, 27, 6])
[/input]
[output]
66.67\%
100.00\%
33.33\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(5, [34, 45, 654, 76, 56])
[/input]
[output]
80.00\%
40.00\%
40.00\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(6, [34, 453, 45, 654, 76, 56])
[/input]
[output]
66.67\%
50.00\%
33.33\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(7, [34, 453, 45, 654, 76, 2, 56])
[/input]
[output]
71.43\%
42.86\%
28.57\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(8, [34, 0, 453, 45, 654, 76, 2, 56])
[/input]
[output]
75.00\%
50.00\%
37.50\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(9, [34, 0, 453, 45, 2342, 654, 76, 2, 56])
[/input]
[output]
77.78\%
44.44\%
33.33\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(10, [34, 12, 0, 453, 45, 2342, 654, 76, 2, 56])
[/input]
[output]
80.00\%
50.00\%
40.00\%
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Vowel Sum

[code-task title="Vowel Sum" taskId="pb-js-for-loop-Vowel-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function vowelSum(n, chars) {
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

Create a program, which calculates the sum of vowels in a sequence based on the given data:

- You will receive a number **n** - the count of characters

- If a character is a vowel, add its **value** to the result

| **character** | **a** | **e** | **i** | **o** | **u** |
| :-----------: | :---: | :---: | :---: | :---: | :---: |
|   **value**   |   1   |   2   |   3   |   4   |   5   |

- Print the result to the console

# Example

| **Input**               | **Output** |
| ----------------------- | ---------- |
| vowelSum(2, ['a', 'g']) | 1          |
| vowelSum(3, ['o', 'k', 'e']) | 6     |

[/task-description]
[tests]
[test open]
[input]
vowelSum(2, ['a', 'g'])
[/input]
[output]
1
[/output]
[/test]
[test opne]
[input]
vowelSum(3, ['o', 'k', 'e'])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
vowelSum(2, ['i', 'u'])
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
vowelSum(5, ['a', 'u', 'n', 'm', 's'])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
vowelSum(1, ['a'])
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
vowelSum(8, ['a', 'e', 'i', 'o', 'u', 'a', 'a', 's'])
[/input]
[output]
17
[/output]
[/test]
[test]
[input]
vowelSum(5, ['a', 'g', 'c', 'q', 'i'])
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
vowelSum(6, ['a', 'e', 'c', 'q', 'i', 'u'])
[/input]
[output]
11
[/output]
[/test]
[test]
[input]
vowelSum(7, ['a', 'e', 'c', 'q', 'i', 'u', 'o'])
[/input]
[output]
15
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Rollercoaster

[code-task title="Rollercoaster" taskId="pb-js-for-loop-Rollercoaster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function rollercoaster(input) {
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

Create a program, which determines if a rollercoaster can depart:

- The first three numbers of the input are:
  - number of **seats**
  - **minimum passenger age**
  - **number of people** in the queue

- All the other numbers represent the **age** for each person queuing

- If all the seats can be filled, print out: "**The rollercoaster departs**"

- In any other case, print out: "**Waiting...**"

# Example

| **Input**                                   | **Output**                   |
| ------------------------------------------- | ---------------------------- |
| rollercoaster([2, 10, 2, 15, 24]) | The rollercoaster departs |
| rollercoaster([3, 15, 1, 23])       | Waiting...                   |

[/task-description]
[tests]
[test open]
[input]
rollercoaster([2, 10, 2, 15, 24])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test open]
[input]
rollercoaster([3, 15, 1, 23])
[/input]
[output]
Waiting...  
[/output]
[/test]
[test]
[input]
rollercoaster([2, 25, 5, 10, 15, 18, 5, 30])
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
rollercoaster([4, 18, 10, 15, 57, 14, 35, 68, 45, 23, 14, 24, 26])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test]
[input]
rollercoaster([3, 21, 5, 25, 45, 34, 12, 24])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test]
[input]
rollercoaster([3, 10, 5, 10, 15, 18, 5, 30])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test]
[input]
rollercoaster([10, 10, 5, 12, 9, 8, 1, 23])
[/input]
[output]
Waiting...
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem with Solution: Multiply

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-38-39-solution-multiply-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Multiply" taskId="pb-js-for-loop-Multiply" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function multiply(input) {
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

Create a program, which multiplies a given number by all the numbers from **1** to **10**:

- You will receive a number `n` – the number to multiply

- Write a for-loop, which prints: "\{**n**\} **x** \{**i**\} **=** \{**result**\}"

- The **i** value represents the numbers from **1** to **10** inclusive

# Example

| **Input**   | **Output**  |
| ----------- | ----------- |
| multiply(2) | 2 x 1 = 2   |
|             | 2 x 2 = 4   |
|             | 2 x 3 = 6   |
|             | 2 x 4 = 8   |
|             | 2 x 5 = 10  |
|             | 2 x 6 = 12  |
|             | 2 x 7 = 14  |
|             | 2 x 8 = 16  |
|             | 2 x 9 = 18  |
|             | 2 x 10 = 20 |


| **Input**   | **Output**  |
| ----------- | ----------- |
| multiply(5) | 5 x 1 = 5   |
|             | 5 x 2 = 10  |
|             | 5 x 3 = 15  |
|             | 5 x 4 = 20  |
|             | 5 x 5 = 25  |
|             | 5 x 6 = 30  |
|             | 5 x 7 = 35  | 
|             | 5 x 8 = 40  |
|             | 5 x 9 = 45  |
|             | 5 x 10 = 50 |

[/task-description]
[tests]
[test open]
[input]
multiply(2)
[/input]
[output]
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
[/output]
[/test]
[test open]
[input]
multiply(5)
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
[test]
[input]
multiply(3)
[/input]
[output]
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
[/output]
[/test]
[test]
[input]
multiply(4)
[/input]
[output]
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40
[/output]
[/test]
[test]
[input]
multiply(6)
[/input]
[output]
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
[/output]
[/test]
[test]
[input]
multiply(7)
[/input]
[output]
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
[/output]
[/test]
[test]
[input]
multiply(8)
[/input]
[output]
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Numbers, Divisible by 9

[code-task title="Divisible by 9" taskId="pb-js-for-loop-Numbers-Divisible-by-9" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(firstNumber, secondNumber) {
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

Create a program, which prints all the numbers, divisible by 9 without a remainder in a given range and their sum:

- You will receive **two numbers**: the range to process

- On the first line, print the sum of the numbers, divisible by 9 without remainder

- On the second line, print the numbers, divisible by 9 without remainder

# Example

| **Input**       | **Output**                                  |
| --------------- | ------------------------------------------- |
| solve(100, 200) | The sum: 1683                               |
|                 | 108 117 126 135 144 153 162 171 180 189 198 |


| **Input**   | **Output**  |
| ----------- | ----------- |
| solve(10, 20)   | The sum: 18                                 |
|                 | 18                                          |

[/task-description]
[tests]
[test open]
[input]
solve(100, 200)
[/input]
[output]
The sum: 1683
108 117 126 135 144 153 162 171 180 189 198
[/output]
[/test]
[test open]
[input]
solve(10, 20)
[/input]
[output]
The sum: 18
18
[/output]
[/test]
[test]
[input]
solve(0, 100)
[/input]
[output]
The sum: 594
0 9 18 27 36 45 54 63 72 81 90 99
[/output]
[/test]
[test]
[input]
solve(1, 50)
[/input]
[output]
The sum: 135
9 18 27 36 45
[/output]
[/test]
[test]
[input]
solve(9000, 9008)
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[test]
[input]
solve(1000, 1300)
[/input]
[output]
The sum: 38016
1008 1017 1026 1035 1044 1053 1062 1071 1080 1089 1098 1107 1116 1125 1134 1143 1152 1161 1170 1179 1188 1197 1206 1215 1224 1233 1242 1251 1260 1269 1278 1287 1296
[/output]
[/test]
[test]
[input]
solve(500, 630)
[/input]
[output]
The sum: 8505
504 513 522 531 540 549 558 567 576 585 594 603 612 621 630
[/output]
[/test]
[test]
[input]
solve(200, 260)
[/input]
[output]
The sum: 1377
207 216 225 234 243 252
[/output]
[/test]
[test]
[input]
solve(120, 260)
[/input]
[output]
The sum: 2835
126 135 144 153 162 171 180 189 198 207 216 225 234 243 252
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
