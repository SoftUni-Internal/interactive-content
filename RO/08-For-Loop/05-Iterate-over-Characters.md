[slide]
# Iterating over Characters
It is good to know that the **for loops** don't only work with numbers. 

We can also use **for loops** to iterate over **characters**.

Here is an example of how a loop can pass sequentially through some **letters** in the English alphabet:
```py live
for a in range(65, 71):
    print(chr(a))
```
We use the function `chr()` to get the character encoded by an ASCII code number.

`ord()` is used to get the ASCII code number of a character.

# ASCII Table
**ASCII** stands for American Standard Code for Information Interchange. 
 
Computers can only understand numbers, so an **ASCII** code is the numerical representation of a character such as 'a' or '@' or an action of some sort. 

This is an example part of the table:

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/04-for-loop-ascii.png"/]

And here you can check the whole **ASCII Table**: **http://www.asciitable.com**

The columns that you would most probably use for the purposes of this course are the **decimal** and **character** ones.

For example, the decimal value of the character **'a'** is **97** and the one corresponding to **'@'** is **64**.
[/slide]


[slide]
# Problem: Latin Letters
[code-task title="Latin Letters" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads **2 letters**
* Prints **all letters** in the given range **inclusive**
# Example
## Input
- a
- c
## Output
- a b c
[/task-description]
[tests]
[test]
[input]
a
c
[/input]
[output]
a b c
[/output]
[/test]
[test]
[input]
f
l
[/input]
[output]
f g h i j k l
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Latin Letters
[code-task title="Latin Letters" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
start = input()
end = input()

for a in range(ord(start), ord(end)+1):
    print(chr(a), end=" ")
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads **2 letters**
* Prints **all letters** in the given range **inclusive**
# Example
## Input
- a
- c
## Output
- a b c
[/task-description]
[tests]
[test]
[input]
a
c
[/input]
[output]
a b c
[/output]
[/test]
[test]
[input]
f
l
[/input]
[output]
f g h i j k l
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
