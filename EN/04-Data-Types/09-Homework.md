[slide]
# Problem: Town Info
[code-task title="Problem: Town Info" taskId="java-fundamentals-Data-Types-and-Variables-Homework-01" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You will be given 3 lines of input.

On the first line you will be given the name of the town, on the second – the population and on the third the area.

Use the correct data types and print the result in the following format:

\"Town \{town name\} has population of \{population\} and area \{area\} square km.\"

## Examples
|**Input**|**Output**|
|-----|------|
| Bucharest | Town Bucharest has population of 1829897 and area 226 square km. |
| 1829897 | |
| 226 | |


[/task-description]
[code-io /]
[tests]
[test]
[input]
Bucharest
1829897
226

[/input]
[output]
Town Bucharest has population of 1829897 and area 226 square km.
[/output]
[/test]
[test]
[input]
a
1
2
[/input]
[output]
Town a has population of 1 and area 2 square km.
[/output]
[/test]
[test]
[input]
A
1233
320
[/input]
[output]
Town A has population of 1233 and area 320 square km.
[/output]
[/test]
[test]
[input]
KEF
10000
500
[/input]
[output]
Town KEF has population of 10000 and area 500 square km.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Chars to String
[code-task title="Problem: Chars to String" taskId="java-fundamentals-Data-Types-and-Variables-Homework-02" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that reads 3 lines of input.

On each line you get a single character.

Combine all the characters into one string and print it on the console.

## Example
|**Input**|**Output**|
|-----|------|
| a | abc |
| b | |
| c | |


|**Input**|**Output**|
|-----|------|
| % | %2o |
| 2 | |
| o | |




[/task-description]
[code-io /]
[tests]
[test]
[input]
a
b
c
[/input]
[output]
abc
[/output]
[/test]
[test]
[input]
%
2
0
[/input]
[output]
%20
[/output]
[/test]
[test]
[input]
1
5
p
[/input]
[output]
15p
[/output]
[/test]
[test]
[input]
d
e
f
[/input]
[output]
def
[/output]
[/test]
[test]
[input]
x
y
z
[/input]
[output]
xyz
[/output]
[/test]
[test]
[input]
1
2
3
[/input]
[output]
123
[/output]
[/test]
[test]
[input]
0
0
0
[/input]
[output]
000
[/output]
[/test]
[test]
[input]
1
b
#
[/input]
[output]
1b#
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Problem: Lower or Upper
[code-task title="Problem: Lower or Upper" taskId="java-fundamentals-Data-Types-and-Variables-Homework-03" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that prints whether a given character is upper-case or lower-case.

## Example
|**Input**|**Output**|
|-----|------|
| L | upper-case |


|**Input**|**Output**|
|-----|------|
| f | lower-case |



[/task-description]
[code-io /]
[tests]
[test]
[input]
L
[/input]
[output]
upper-case
[/output]
[/test]
[test]
[input]
f
[/input]
[output]
lower-case
[/output]
[/test]
[test]
[input]
A
[/input]
[output]
upper-case
[/output]
[/test]
[test]
[input]
a
[/input]
[output]
lower-case
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

