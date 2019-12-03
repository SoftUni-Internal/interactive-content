[slide]
# Problem: Stream Of Letters
[code-task title="Stream Of Letters" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program that reads a hidden message in a sequence of symbols.

You will receive each of them on a single line until the "**End**" command. 

The words are initiated from the letters in the **order of their reading**. 

Symbols which are **not Latin** letters should be **ignored**.

The words, hidden in the stream, are separated from a **secret command by three letters** - "**c**", "**o**" and "**n**". 

When you **first receive** one of these letters, you have to mark it as visited, **but it is not saved in the word**.

Every time you **receive the same** letter, **it is saved normally** in the word.

After you have found **all three symbols from the command**, you have to print the word and a space " ".

A new word is started at the same way, waiting the secret command to be printed. 

# Input
- Read a sequence of lines with a single symbol each, until you receive the "**End**" command

# Output
- Print on the console **every word after the secret command** followed by **space**

# Example

| **Input** | **Output** |
| --- | --- |
| H | Hello |
| n| |
| e| |
| l| |
| l| |
| o| | 
| o| |
| c| |
| End| |

## Comments
- "**H**", "**n**", "**e**", "**l**", "**l**", "**o**", "**o**", "**c**" are all read letters.
- First we read "**H**" and we add it to the word. The next symbol is "**n**". It\'s part of the command and we **do not add it to the word as we meet it for the first time**.
- The next symbols are "**e**", "**l**", "**l**" and we add them to the word. We read "**o**" and we mark it as visited, but again we do **not** add it to the word. The next letter is "**o**" again and it\'s added. The next is "**c**" and all three symbols for the secret command are available.
- We print "**Hello** " and we recieve "End" command and the programs ends. The result is "Hello ".
[/task-description]
[tests]
[test]
[input]
H
n
e
l
l
o
o
c
t
c
h
o
e
r
e
n
e
End
[/input]
[output]
Hello there 
[/output]
[/test]
[test]
[input]
%
\!
c
^
B
\`
o
%
o
o
M
\)
\{
n
\\
A
D
End
[/input]
[output]
BooM 
[/output]
[/test]
[test]
[input]
o
S
%
o
l
^
v
e
c
n
&
m
e
c
o
n
End
[/input]
[output]
Solve me 
[/output]
[/test]
[test]
[input]
c
c
o
o
n
n
End
[/input]
[output]
co 
[/output]
[/test]
[test]
[input]
%
$
\!
\)
\(
\{
\}
End
[/input]
[output]
[/output]
[/test]
[test]
[input]
H
e
c
o
@
r
%
e
n
w
c
o
e
n
g
o
c
o
n
w
i
t
n
o
h
c
t
h
c
\*
o
e
n
s
i
g
&
n
n
s
@
c
o
%
n
End
[/input]
[output]
Here we go with the signs 
[/output]
[/test]
[test]
[input]
o
n
C
c
n
c
O
o
c
o
N
n
End
[/input]
[output]
C O N 
[/output]
[/test]
[test]
[input]
c
o
n
n
c
o
n
o
c
End
[/input]
[output]
   
[/output]
[/test]
[test]
[input]
I
c
n
n
o
t
c
h
o
e
n
n
e
n
c
d
o
L
i
n
k
i
n
P
a
r
k
End
[/input]
[output]
In the end 
[/output]
[/test]
[test]
[input]
T
c
h
e
o
r
e
n
I
c
s
o
n
A
c
o
n
H
i
c
d
d
e
n
n
o
M
e
n
s
s
o
a
g
e
c
o
N
o
t
c
n
o
P
r
i
n
n
t
e
d
c
M
a
d
e
Y
o
u
L
o
o
k
\!
End
[/input]
[output]
There Is A Hidden Message Not Printed 
[/output]
[/test]
[test]
[input]
O
u
t
%
O
f
%
I
d
e
a
s
End
[/input]
[output]
[/output]
[/test]
[test]
[input]
I
c
o
n
$
L
c
i
k
o
e
n
^
c
N
o
a
r
u
t
o
n
%
a
n
d
^
t
h
i
n
k
&
t
h
a
t
\)
p
e
o
p
l
e
@
a
r
e
\+
b
i
a
s
e
d
\(
t
o
w
a
r
d
s
\)
A
n
i
m
e
s
End
[/input]
[output]
I Like Naruto 
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]