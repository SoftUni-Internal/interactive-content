# Nested while Loops

[slide]
# Video

[vimeo-video startTimeInSeconds="3511" endTimeInSeconds="3956"]
[stream language="EN" videoId="345185854"  /]
[stream language="RO" videoId="393622973" default /]
[/vimeo-video]

[/slide]


[slide]
# Nested while Loops
The use of nested `while` loops is very similar to the one of the `for`.

Here is the syntax in **Python**:
```py live
n = 5
while i < n:
  print(f'Value of i: {i}')
  j = 1
  i += 1

  while j < n:
    print(f'  Value of j: {j}')
    j += 1
}
```
[/slide]

[slide]
# Problem: Triangle of Stars 2
[code-task title="Triangle of Stars 2" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads the height of a triangle from the console
* Prints a triangle of stars
* Use a `while` loop

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | \* |
| | \*\* |
| | \*\*\* |
| | \*\*\*\*\ |
| | \*\*\*\*\* |
[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
*
**
***
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Triangle of Stars 2
[code-task title="Triangle of Stars 2" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
height = 5
i = 1
while i <= height:
    j = 0
    while j < i:
        print('*', end="")
        j += 1
    print()
    i += 1
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads the height of a triangle from the console
* Prints a triangle of stars
* Use a `while` loop

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | \* |
| | \*\* |
| | \*\*\* |
| | \*\*\*\*\ |
| | \*\*\*\*\* |
[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
*
**
***
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]