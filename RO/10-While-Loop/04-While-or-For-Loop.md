[slide]
# While or For Loop?

`while` and `for` loops both **repeat** a block of **code**.

But there are different situations when writing code that require either the first loop, or the other.

When you know **exactly how many times** you want to loop through a block of code, use the `for` loop.
```py
for i in range(1, 5)
    print(i)
```
It is usually appropriate for loops in which the initialization and increment are single statements and logically related. 

It is more compact than `while` and it keeps the loop control statements together in one place.

But, there could be many **complex** problems where number of iterations depend upon a certain **condition** and can't be predicated beforehand. 

That means we don't know in advance **how many times** to repeat a loop.

In those situation it is better to use `while` loop.
```py
i = int(input())

while i != 10
    print(i)
    i = int(input())
```
[/slide]

[slide]
# Problem: Odd Number
[code-task title="Odd Number" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number
# Example
## Input
- 2
- 4
- 8
- 3
## Output
- 3
[/task-description]
[tests]
[test]
[input]
2
4
8
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

[slide]
# Solution: Odd Number
[code-task title="Odd Number" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
number = int(input())
while (number % 2) == 0:
    number = int(input())
print(number)
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number
# Example
## Input
- 2
- 4
- 8
- 3
## Output
- 3
[/task-description]
[tests]
[test]
[input]
2
4
8
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

[slide]
# Problem: Number Manipulator
[code-task title="Number Manipulator" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number
# Example
## Input
- 2
- 4
- 8
- 3
## Output
- 3
[/task-description]
[tests]
[test]
[input]
2
4
8
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

[slide]
# Solution: Number Manipulator
[code-task title="Number Manipulator" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
number = int(input())

while number % 2 == 0:
    number = int(input())

print(number)
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number
# Example
## Input
- 2
- 4
- 8
- 3
## Output
- 3
[/task-description]
[tests]
[test]
[input]
2
4
8
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

[slide]
# Video

[vimeo-video videoId="343587107" startTimeInSeconds="2145" endTimeInSeconds="2859" /]

[/slide]