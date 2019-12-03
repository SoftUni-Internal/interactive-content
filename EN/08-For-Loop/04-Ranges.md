[slide]
# Range
`range()` is a function in python, which generates a collection of numbers between given start and stop integers.

It takes three arguments:
* **start** - lower limit - 0 by default
* **stop** - upper limit 
  * not included in the result
* **step** - difference between each number in the result - 1 by default

Having a **default** value means that we don't have to specify it and the function will use 0 or 1 as parameter depending on whether it is start or step.

**Example: range(0, 10, 2)**
[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/for-loop-range-use-case.png"/]

**Note:** All parameters must be whole numbers (integers), positive or negative

Positive step means incrementing the values in the range, while negative - decrementing. The step value must **not** be **zero**.

```python
range(10, 4, -2) # negative step -2
# 10 8 6
```

```python
range(1, 10, 2) # positive step 2
# 1 3 5 7 9
```

```python
range(1, 5) # step 1 by default
# 1 2 3 4 
```

[/slide]

[slide]
# Range in Loop
We can use ranges in `for` loops.

As you already know loops are all about executing a block of code multiple times.

When we use `range()` with a `for` loop, we can iterate over the numbers produced by the function.

Here is a detailed **example** that explains the whole concept step by step:
```python
for num in range(1, 10, 3):
  # loop body
# rest of code
```
[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/for-loop-range-use-case-example.png"/]

`num` is the variable that will represent the current number of iterations. 

At first it will be equal to the **start** value of the range.

Each time the program goes inside the body of the loop its value will be incremented (increased) along with the execution of the code inside the loop body.

`num` is increased with the step we have chosen. In our case `num += 3`

In order for the loop to keep iterating the updated value must not exceed the **stop** value of the range.

The moment this condition becomes false the loop will break and the program will go on with executing the lines of code after the loop.

[/slide]

[slide]
# Problem: Print Sum of N Numbers
[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
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
## Input
- 5
## Output
- 1
- 2
- 3
- 4
- 5
- 15
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
[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
n = int(input())
sum = 0
for i in range(1, n + 1):
   sum += i
print(sum)
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
## Input
- 5
## Output
- 1
- 2
- 3
- 4
- 5
- 15
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
# Problem: Calculate Monthly Salary
[code-task title="Calculate Monthly Salary" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads working days in the current month and salary per day - integers
* **Calculates** the salary for the month
* **Prints** the result on the console
# Example
## Input
- 2
- 100
- 200
## Output
- 300
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
# Solution: Calculate Monthly Salary
[code-task title="Calculate Monthly Salary" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
days = int(input())
total_salary = 0
for i in range(1, days + 1):
  salary_per_day = int(input())
  total_salary += salary_per_day
print(total_salary)
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads working days in the current month and salary per day - integers
* **Calculates** the salary for the month
* **Prints** the result on the console
# Example
## Input
- 2
- 100
- 200
## Output
- 300
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
# Video

[vimeo-video videoId="342410322" startTimeInSeconds="1656" endTimeInSeconds="2522" /]

[/slide]