[slide]

# Homework

[/slide]

[slide]

# Problem: Word Tracker

[code-task title="Word Tracker" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that receives an **array of words** and finds **occurrences of given words** in that sentence.

The input will come as **array of strings**.

The **first string** will contain the **words** you will be looking for separated by a **space**.

All **strings after that** will be the words you will be looking for.

Print **for each word** how many times it **occurs**.

The words should be **sorted by count in descending**.

# Example

| **Input**                                                                                                                                                                 | **Output**    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the' ,'words','this','and','sentence','because','this','is','your','task' ]` | this \- 3     |
|                                                                                                                                                                           | sentence \- 2 |

[/task-description]
[tests]
[test]
[input]
this sentence
In this sentence you have to count the occurances of the words this and sentence because this is your task
[/input]
[output]
this \- 3
sentence \- 2
[/output]
[/test]
[test]
[input]
dara bara mara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
[/output]
[/test]
[test]
[input]
dara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
dara - 3
[/output]
[/test]
[test]
[input]
dara sara mara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
dara sara mara bara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
a b c d
vdsa a rb b dbs a ss b c d sdn bd d
[/input]
[output]
a \- 2
b \- 2
d \- 2
c \- 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
[slide]

# Problem: Odd Occurrences

[code-task title="Odd Occurrences" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that extracts all the elements of a sentence odd number of times (**case-insensitive**).

The input comes as a **single string**. The words will be **separated by a single space**.

# Example

| **Input**                                   | **Output**  |
| ------------------------------------------- | ----------- |
| 'Java C\# Php PHP Java PhP 3 C\# 3 1 5 C\#' | c\# php 1 5 |

[/task-description]
[tests]
[test]
[input]
Java C\# Php PHP Java PhP 3 C\# 3 1 5 C\#
[/input]
[output]
c\# php 1 5
[/output]
[/test]
[test]
[input]
a 2 A a A c D C dcndjk dbsa bsd bs Cbc D ss as
[/input]
[output]
2 dcndjk dbsa bsd bs cbc ss as
[/output]
[/test]
[test]
[input]
a a a a a D Sb dbsnb bdw dd dd dss
[/input]
[output]
a d sb dbsnb bdw dss
[/output]
[/test]
[test]
[input]
b b b b b
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
a a a b b c
[/input]
[output]
a c
[/output]
[/test]
[test]
[input]
a a a a a a a a a aa a a a a ab bb bb cccc
[/input]
[output]
a aa ab cccc
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Problem: Piccolo

[code-task title="Piccolo" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write function that:

- Records a car number for every car that enters the parking lot.
- Removes a car number when the car goes out.
- Input will be array of strings in format [**direction**, **carNumber**].

Print the output with all car numbers which are in the parking lot **sorted in ascending by number**.

# Example 1

| **Input**                                                                                                                                                             | **Output** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']` | CA2822UU   |
|                                                                                                                                                                       | CA2844AA   |
|                                                                                                                                                                       | CA9876HH   |
|                                                                                                                                                                       | CA9999TT   |

# Example 2

| **Input**                                                            | **Output**           |
| -------------------------------------------------------------------- | -------------------- |
| `['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']` | Parking Lot is Empty |

[/task-description]
[tests]
[test]
[input]
IN\, CA2844AA
IN\, CA1234TA
OUT\, CA2844AA
IN\, CA9999TT
IN\, CA2866HI
OUT\, CA1234TA
IN\, CA2844AA
OUT\, CA2866HI
IN\, CA9876HH
IN\, CA2822UU
[/input]
[output]
CA2822UU
CA2844AA
CA9876HH
CA9999TT
[/output]
[/test]
[test]
[input]
IN\, CA2844AA
IN\, CA1234TA
OUT\, CA2844AA
OUT\, CA1234TA
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
IN\, ggg
IN\, sss
IN\, gqq
[/input]
[output]
aaa
ccc
ggg
gqq
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
IN\, ggg
IN\, sss
IN\, sss
IN\, gqq
[/input]
[output]
aaa
ccc
ggg
gqq
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
OUT\, ggg
IN\, sss
IN\, mmm
OUT\, aaa
IN\, ccc
OUT\, ggg
IN\, sss
IN\, mmm
IN\, aaa
OUT\, ccc
IN\, ggg
IN\, sss
IN\, sss
OUT\, gqq
[/input]
[output]
aaa
ggg
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
OUT\, ggg
IN\, sss
IN\, mmm
IN\, ggg
IN\, sss
IN\, sss
OUT\, gqq
[/input]
[output]
aaa
ccc
ggg
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
OUT\, ggg
IN\, ll
IN\, sss
IN\, mmm
IN\, kk
IN\, sss
IN\, sss
IN\, sss
IN\, mmm
IN\, ggg
IN\, sss
IN\, sss
OUT\, gqq
[/input]
[output]
aaa
ccc
ggg
kk
ll
mmm
sss
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Problem: Party Time

[code-task title="Party Time" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

There is a party at SoftUni. Many guests are invited and they are **two types**: VIP and regular.

When guests come to the party check if he/she **exists** in any of **the two reservation lists**.

The input will come as **array of strings**. You will be given the list with the guests before you receive a command "**PARTY**".

All **VIP numbers start with digit**.

When you receive the command "**PARTY**" the guests start coming.

Output all guest, who didn't come to the party (VIP must be first).

# Example 1

| **Input**                                                                                                   | **Output** |
| ----------------------------------------------------------------------------------------------------------- | ---------- |
| `['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']` | 2          |
|                                                                                                             | 7IK9Yo0h   |
|                                                                                                             | tSzE5t0p   |

# Example 2

| **Input**                                                                                                                                                                                                                                                                                                                                                   | **Output** |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']` | 2          |
|                                                                                                                                                                                                                                                                                                                                                             | xys2FYzn   |
|                                                                                                                                                                                                                                                                                                                                                             | MDzcM9ZK   |

[/task-description]
[tests]
[test]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBUajQ
Ce8vwPmE
SVQXQCbc
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBUajQ
Ce8vwPmE
SVQXQCbc
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
[/input]
[output]
5
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
PARTY
5SVQXQCbc
6tSzE5t0p
[/input]
[output]
3
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
[/output]
[/test]
[test]
[input]
IK9Yo0h
NoBUajQ
4Ce8vwPmE
5SVQXQCbc
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
PARTY
9NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
[/input]
[output]
5
7IK9Yo0h
4Ce8vwPmE
5SVQXQCbc
IK9Yo0h
NoBUajQ
[/output]
[/test]
[test]
[input]
IK9Yo0h
NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
PARTY
IK9Yo0h
NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5IK9Yo0h
NoBUajQ
4Ce8vwPmE
QXQCbc
6tSzE5t0p
4ftyfvwPmE
jghvgyg
6tSzE5t0p
PARTY
4Ce8vwPmE
6tSzE5t0p
[/input]
[output]
6
5IK9Yo0h
4ftyfvwPmE
6tSzE5t0p
NoBUajQ
QXQCbc
jghvgyg
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
