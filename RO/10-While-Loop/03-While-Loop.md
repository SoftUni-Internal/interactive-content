[slide]
# While Loop
In programming the `while` **loop** is used when we want to **repeat** the execution of a certain logic while a condition is in effect. 

By **"condition"**, we understand every **expression** that returns `True` or `False`. When **the condition** is **wrong**, the while loop is **interrupted**, the program **continues** to execute the remaining code after the loop. 
[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/05-use-case-while.png"/]
The while loop looks like this:
```py
while condition:
  # loop body
```

In the code example above, condition is any **expression that returns a Boolean result** – `True` or `False`. 

It determines how long the loop body will be repeated and is called `loop condition`. 

In this example the `loop body` is the programming code executed at each iteration of the loop, i.e. whenever the input condition is True.

In the while loop, firstly the Boolean expression is evaluated and if it is `True`, the sequence of operations in the body of the loop is executed. 

Then again the input condition is checked and if it is `True` again, the body of the loop is executed. 

All this is repeated again and again **until at some point the conditional expression returns value** `False`.

# Example: Sequence of Numbers 2k+1
Write a program that prints all **numbers ≤ n** of the series: **1, 3, 7, 15, 31, …,** assuming that each next number = **previous number * 2 + 1**.

Here is how we can solve the problem:
- We create a num variable for the current number to which we assign an initial **value of 1**.
- For a loop condition, we put **the current number <= n**.
- In **the body of the loop**: we print the value of the current number and increase the current number by using the formula from the problem's description.

Here is a sample implementation of this idea:
```py
n = int(input())
num = 1
while num <= n:
  print(num)
  num = 2 * num + 1
```
[/slide]

[slide]
# Problem: Decreasing Numbers
[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number from the console
* Prints the numbers starting from the number to 1 (**inclusive**)
# Example
## Input
- 4
## Output
- 4
- 3
- 2
- 1
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Decreasing Numbers
[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
number = int(input())
while number >= 1:
  print(number)
  number -= 1
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number from the console
* Prints the numbers starting from the number to 1 (**inclusive**)
# Example
## Input
- 4
## Output
- 4
- 3
- 2
- 1
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Numbers in Range
[code-task title="Numbers in Range" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it isn't - it reads a **new one**
* If it is - **prints the number** and the program stops
# Example
## Input
- -10
- 101
- 50
## Output
- 50
[/task-description]
[tests]
[test]
[input]
-10
101
60
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
# Solution: Numbers in Range
[code-task title="Numbers in Range" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
num = int(input())
while num < 1 or num > 100:
  num = int(input())
print(num)
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it isn't - it reads a **new one**
* If it is - **prints the number** and the program stops
# Example
## Input
- -10
- 101
- 50
## Output
- 50
[/task-description]
[tests]
[test]
[input]
-10
101
60
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
# Video

[vimeo-video videoId="343587107" startTimeInSeconds="1331" endTimeInSeconds="2144" /]

[/slide]