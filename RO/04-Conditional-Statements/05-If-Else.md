[slide]
# If-Else Conditions
The `if` construction may also contain an `else` clause to give a specific action in case the Boolean expression (which is set at the beginning `if (bool expression)` ) returns a negative result (`false`). 

Built this way, **the conditional statement** is called `if-else` and its behavior is as follows: 
* if the result of the condition is positive (`true`) – we perform some actions
* when it is negative (`false`) – others. 

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/02-usecase-if-else-statement.png"/]

The format of the construction is:
```py
if condition:
  # condition body;
else:
  # else construction body;
```

If condition is `false`, the else-statement runs.

Because a condition can’t be simultaneously `true` and `false`, the then-statement and the else-statement of an `if-else` statement can **never both run**. 

After the then-statement or the `else`-statement runs, control is transferred to the next statement after the `if` statement.

In an `if` statement that doesn’t include an else statement, if condition is `true`, the then-statement runs. 

If condition is `false`, control is transferred to the next statement after the if statement.

Both the then-statement and the else-statement can consist of a single statement or multiple statements. 

The statement or statements in the then-statement and the else-statement can be of any kind, including another if statement nested inside the original if statement.

# Example: Weather
This is an extended version of the example from the previous slide.

As you can see now we have another case, which will be executed when the condition in the `if` statement turns out **false**.
```py
weather = input()

if weather == "rainy":
    print("Take an umbrella!")
else:
    print("Leave your umbrella at home!")
```
[/slide]

[slide]
# Block of Code
Unlike other programming languages Python uses indentation to indicate the blocks of code and not only to make it readable and pretty.

To make a block of code, you have to indent every line of the block by the same amount. 

Here is an example where incorrect indentation leads to confusion:
```py live
color = "red"
if color == "red":
  print("tomato")
else:
  print("banana")
print("lemon")
```

With proper indentation:
```py live
color = "red"
if color == "red":
  print("tomato")
  print("strawberry")
else:
  print("banana")
  print("lemon")
```
[/slide]

[slide]
# Problem: Even or Odd
[code-task title="Even or Odd" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write code here
```
[/code-editor]
[task-description]
# Description
Write a program, which checks if a number is **even** or **odd**

  * If it's even, print "**even**"
  * If it's odd, print "**odd**"
# Example
## Input
- 4
## Output
- even
## Input
- 7
## Output
- odd
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Even or Odd
[code-task title="Even or Odd" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
num = int(input())
if num % 2 == 0: 
   print("even")
else:
   print("odd")
```
[/code-editor]
[task-description]
# Description
Write a program, which checks if a number is **even** or **odd**

  * If it's even, print "**even**"
  * If it's odd, print "**odd**"
# Example
## Input
- 4
## Output
- even
## Input
- 7
## Output
- odd
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Greater Numbers
[code-task title="Greater Number" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write code here
```
[/code-editor]
[task-description]
# Description
Write a program, which finds the greater of two numbers:

  * Read two **integers**
  * Find the greater number
  * Print `"Greater number: "` + the **greater** number
# Example
## Input
- 4
- 8
## Output
- Greater number: 8

[/task-description]
[tests]
[test]
[input]
4
8
[/input]
[output]
Greater number: 8
[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
Greater number: 7
[/output]
[/test]
[test]
[input]
1
2
[/input]
[output]
Greater number: 2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide]
# Solution: Greater Numbers
[code-task title="Greater Number" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
number1 = int(input())
number2 = int(input())

if number1 > number2:
    print(f"Greater number: {number1}")
elif number2 > number1:
    print(f"Greater number: {number2}")
```
[/code-editor]
[task-description]
# Description
Write a program, which finds the greater of two numbers:

  * Read two **integers**
  * Find the greater number
  * Print `"Greater number: "` + the **greater** number
# Example
## Input
- 4
- 8
## Output
- Greater number: 8
[/task-description]
[tests]
[test]
[input]
4
8
[/input]
[output]
Greater number: 8
[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
Greater number: 7
[/output]
[/test]
[test]
[input]
1
2
[/input]
[output]
Greater number: 2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Video

[vimeo-video videoId="341553633" startTimeInSeconds="2429" endTimeInSeconds="2553" /]

[/slide]
