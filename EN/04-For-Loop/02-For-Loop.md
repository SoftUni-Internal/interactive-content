[slide]
# For Loop
In programming on many occasions, we need to execute a block of commands multiple times. 

To do that, the so-called loops are used. 

Let us see an example of a for loop that passes sequentially through the numbers from 1 to 10 and prints them to the console. 
```js live
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
```

The block of code can be explained with this use case diagram:
[image assetsSrc="for-loop-use-case.png" /]

The loop starts with the `for` operator and passes through all values for a particular variable in a given range, for example the numbers from 1 to 10 (included), and for each value it performs a series of commands. 

# Syntax: For-Loop 

Upon declaring the loop, you can specify a **start value** and an **end value.** 

The body of the loop is usually enclosed in curly brackets `{ }` and represents a block of one or multiple commands. 

The code block below shows the structure of a `for` loop: 

```
for (initialization; condition; update) {
  loop's body;
}
```

It consists of:
* an **initialization part** for the counter (in the pattern `let i = 0`)
* a **boolean** condition (`i < 10`)
* an expression for **updating** the counter (``i += 1``)
* body of the loop.

In most cases a `for` loop is run between `1` and `n` times (for example from 1 to 10). 

The purpose of the loop is to pass sequentially through the numbers 1, 2, 3, …, n and for each of them to perform a particular action. 

In the first example, the `i` variable accepts values from 1 to 10 and the **current** value is printed in the body of the loop. 

The loop repeats 10 times and each of these repetitions is called an **"iteration"**.
[/slide]

[slide]
# Problem: Print Sum of N Numbers
[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function printSum (input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads number n from the console
* **Prints** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints** the sum on the console at the end

# Example
  | **Input** | **Output** |
| --- | --- |
|5| 1 |
|| 2 |
|| 3 |
|| 4 |
|| 5 |
|| 15 |

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Print Sum of N Numbers
[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function printSum (input) {
   let n = Number(input);
   let sum = 0;
   for (let i = 1; i <= n; i += 1) {
      console.log(i)
      sum += i;
   }
   
   console.log(sum);
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads number n from the console
* **Prints** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints** the sum on the console at the end

# Example
  | **Input** | **Output** |
| --- | --- |
|5| 1 |
|| 2 |
|| 3 |
|| 4 |
|| 5 |
|| 15 |
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Calculate Month Salary
[code-task title="Calculate Month Salary" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateMonthSalary (input) {
   let days = Number(input.shift());
   let totalSalary = 0;

   for (let i = 1; i <= days; i += 1) {
      let salaryPerDay = Number(input.shift());
      totalSalary += salaryPerDay;
   }

   console.log(totalSalary);
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
[/tests]
[code-io /]
[/code-task]

[/slide]
