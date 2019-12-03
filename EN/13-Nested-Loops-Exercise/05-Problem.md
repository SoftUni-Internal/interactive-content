[slide]
# Problem: Coding
[code-task title="Coding" executionType="tests-execution" executionStrategy="python-code" requiresInput ]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program that reads **an integer** from the console. The console should print **as many lines as digit is number**. As the **first line** of the corresponding **units**, of the second - **tens**, third order - **hundreds** of number, etc., as there are **no more digits** of the number.

Each line you must print **symbol**, which satisfies the following conditions:

- The symbol, which must be printed on a line, is located on the \[ASCII\](http://www.asciitable.com/) table. Its **decimal ASCII code** is calculated as adding **33** to the digit of the input number that corresponds to a given row
- The symbol shall be printed **as many times as the digit** corresponding to this line
- If for a given row **matches a digit 0**, on this line is printed "**ZERO**" once

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 2049 | | \*\*\*\*\*\*\*\*\* | 
| | | %%%% |
| | | ZERO |
| | | \#\# |

## Comments

The number 2049 has four digits so we will print four rows.

The first line corresponds to the digit 9. We add 33 to 9 and get 42.

This is the decimal ASCII code of the symbol it should be print on the first row.

From the ASCII table we find out that of the 42 corresponds symbol '\*'. 

Because the first line corresponds with digit 9 we print 9 times '\*'.

For the second line the digit is 4. 4\+33=37. Using ASCII table we find that 

the symbol to print is '%'. We print 4 times '%'.

On the third line matches a digit 0. In this case we do **NOT** searching 

anything in ASCII table and on this line we print ZERO once.

The last digit of the number is 2. 2\+33=35.

From the ASCII table we found the symbol to print - '\#' and we print it twice.

**Hints**:
- Read the number as a String, save its length in a variable using the **length() method**. Find more **information** about it on the Internet
- To take the last digit of the number, divide it modular of 10 (**num % 10**) and save it in a variable. Then **remove the last digit of the number**, dividing it by 10 (**num / 10**) for the next time again to grab the last digit.
[/task-description]
[tests]
[test]
[input]
2049
[/input]
[output]
\*\*\*\*\*\*\*\*\*
%%%%
ZERO
\#\#
[/output]
[/test]
[test]
[input]
9347439
[/input]
[output]
\*\*\*\*\*\*\*\*\*
$$$
%%%%
\(\(\(\(\(\(\(
%%%%
$$$
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
123456789
[/input]
[output]
\*\*\*\*\*\*\*\*\*
\)\)\)\)\)\)\)\)
\(\(\(\(\(\(\(
''''''
&&&&&
%%%%
$$$
\#\#
"
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
"
[/output]
[/test]
[test]
[input]
1001
[/input]
[output]
"
ZERO
ZERO
"
[/output]
[/test]
[test]
[input]
19557
[/input]
[output]
\(\(\(\(\(\(\(
&&&&&
&&&&&
\*\*\*\*\*\*\*\*\*
"
[/output]
[/test]
[test]
[input]
526576543
[/input]
[output]
$$$
%%%%
&&&&&
''''''
\(\(\((\(\(\(
&&&&&
''''''
\#\#
&&&&&
[/output]
[/test]
[test]
[input]
100000000
[/input]
[output]
ZERO
ZERO
ZERO
ZERO
ZERO
ZERO
ZERO
ZERO
"
[/output]
[/test]
[test]
[input]
999999999
[/input]
[output]
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
987654321
[/input]
[output]
"
\#\#
$$$
%%%%
&&&&&
''''''
\(\(\(\(\(\(\(
\)\)\)\)\)\)\)\)
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
20709428
[/input]
[output]
\)\)\)\)\)\)\)\)
\#\#
%%%%
\*\*\*\*\*\*\*\*\*
ZERO
\(\(\(\(\(\(\(
ZERO
\#\#
[/output]
[/test]
[test]
[input]
9037309
[/input]
[output]
\*\*\*\*\*\*\*\*\*
ZERO
$$$
\(\(\(\(\(\(\(
$$$
ZERO
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
367377098
[/input]
[output]
\)\)\)\)\)\)\)\)
\*\*\*\*\*\*\*\*\*
ZERO
\(\(\(\(\(\(\(
\(\(\(\(\(\(\(
$$$
\(\(\(\(\(\(\(
''''''
$$$
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]