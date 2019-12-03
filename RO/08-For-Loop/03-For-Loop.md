[slide]
# For Loop
In programming it is often required to perform a block of commands multiple times. 

In order to do that, the so-called **loops** are used.

```python
for i in iterable:
  print(i)
```

The block of code can be explained with this use case diagram:

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/for-loop-use-case.png"/]

The loop starts with the `for` operator and passes through all values in a particular iterable, which is a collection that can be iterated over.

# Syntax: For-Loop

The **body** of the loop is marked by indentation and represents a block of **one or multiple commands**. 

The code block below shows the structure of a `for` loop:
```
for variable in collection:
  # loop's body
```

It consists of:
* the **keyword `for`**
* a **variable**
* **keyword `in`**
* a **collection** to iterate over
* **body** of the loop

The purpose of the loop is to pass sequentially through the values of a collection and for each of them to perform a particular action. 

Each of the repetitions is called an **"iteration"**.

# Iterating Strings
A **string** is a collection of characters and as one we can use a **for loop** to work with every item (char) in it.
```python
for char in "John":
  print(char)
# J
# o
# h
# n
```
[/slide]

[slide]
# Problem: Characters

[code-task title="Characters" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]

```
# Write your code here
```

[/code-editor]
[task-description]
# Description
Write a program, which:

- Receives a single string
- Print each character of that string on a new line

# Example
## Input
- Hello
## Output
- H
- e
- l
- l
- o
[/task-description]
[tests]
[test]
[input]
Python
[/input]
[output]
P
y
t
h
o
n
[/output]
[/test]
[test]
[input]
softuni
[/input]
[output]
s
o
f
t
u
n
i
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Solution: Characters

[code-task title="Characters" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]

```
text = input()
for char in text:
  print(char)
```

[/code-editor]
[task-description]
# Description
Write a program, which:

- Receives a single string
- Print each character of that string on a new line

# Example
## Input
- Hello
## Output
- H
- e
- l
- l
- o
[/task-description]
[tests]
[test]
[input]
Python
[/input]
[output]
P
y
t
h
o
n
[/output]
[/test]
[test]
[input]
softuni
[/input]
[output]
s
o
f
t
u
n
i
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Video

[vimeo-video videoId="342410322" startTimeInSeconds="1330" endTimeInSeconds="165" /]

[/slide]
