[slide]
# Nested while Loops
```python
while condition:
  # Outer Loop 
  while condition: 
    # Inner Loop
      # Statement
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
# Description
Write a program, which:

* Reads the height of a triangle from the console
* Prints a triangle of stars
* use a **while** loop
# Example
## Input
- 5
## Output
```
*
**
***
****
*****
```
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
# Description
Write a program, which:

* Reads the height of a triangle from the console
* Prints a triangle of stars
* use a **while** loop
# Example
## Input
- 5
## Output
```
*
**
***
****
*****
```
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
# Video

[vimeo-video videoId="345185854" startTimeInSeconds="3511" endTimeInSeconds="3956" /]

[/slide]