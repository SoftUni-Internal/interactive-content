[slide]
# Complex Loops
Loops with different **steps**

```python
for x in range(2, 11, 2):
  print(x)
# Prints the even numbers from 2 to 10
```
[/slide]

[slide]
# Problem: Numbers from n to 1
[code-task title="Numbers from n to 1" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
Write a program, which:

* Reads an integer number n
* Prints the numbers from n to 1 
[/task-description]
[code-io /]
[/code-task]
# Sample Input and Output
|Input|Output|
|-----|------|
|10|10|
||9|
||8|
||7|
||6|
||5|
||4|
||3|
||2|
||1|
[/slide]

[slide]
# Solution: Numbers from n to 1
[code-task title="Numbers from n to 1" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
n = int(input())
for i in range(n, 0, -1):
  print(i)
```
[/code-editor]
[task-description]
Write a program, which:

* Reads an integer number n
* Prints the numbers from n to 1 
[/task-description]
[code-io /]
[/code-task]
# Sample Input and Output
|Input|Output|
|-----|------|
|10|10|
||9|
||8|
||7|
||6|
||5|
||4|
||3|
||2|
||1|
[/slide]

[slide]
# Problem: Numbers with Step 3
[code-task title="Numbers with Step 3" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
Write a program which:

* Reads an integer number n
* Prints the numbers from 1 to n with step 3
[/task-description]
[code-io /]
[/code-task]
# Sample Input and Output
|Input|Output|
|-----|------|
|10|1|
||4|
||7|
||10|
[/slide]

[slide]
# Solution: Numbers with Step 3
[code-task title="Numbers with Step 3" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
n = int(input())
for i in range(1, n + 1, 3):
  print(i)
```
[/code-editor]
[task-description]
Write a program which:

* Reads an integer number n
* Prints the numbers from 1 to n with step 3
[/task-description]
[code-io /]
[/code-task]
# Sample Input and Output
|Input|Output|
|-----|------|
|10|1|
||4|
||7|
||10|
[/slide]

[slide]
# Problem: Even Powers of 2
[code-task title="Even Powers of 2" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
Write a program, which:

* Reads a number n
* Prints the even powers of 2 to 2n: 20, 22, 24, 28, …, 2n
[/task-description]
[code-io /]
[/code-task]
# Sample Input and Output
|Input|Output|
|-----|------|
|3|1|
||4|
||16|
[/slide]

[slide]
# Solution: Even Powers of 2
[code-task title="Even Powers of 2" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
n = int(input())
num = 1
for i in range(0, n + 1, 2): 
  print(num)
  num = num * 2 * 2
```
[/code-editor]
[task-description]
Write a program, which:

* Reads a number n
* Prints the even powers of 2 to 2^n: 2^0, 2^2, 2^4, 2^8, …, 2^n
[/task-description]
[code-io /]
[/code-task]
# Sample Input and Output
|Input|Output|
|-----|------|
|3|1|
||4|
[/slide]

[slide]
# Introduction

[vimeo-video videoId="345185854" startTimeInSeconds="1501" endTimeInSeconds="2677" /]

[/slide]