[slide hideTitle]
# Problem: Simple Text Editor
[code-task title="Simple Text Editor" taskId="4e4ddd79-3e4b-4215-b529-50a0f652da09" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given an empty text.

Your task is to implement **4 types of commands** related to manipulating the text:

- 1 \[string\] - **appends** \[string\] to the end of the text
- 2 \[count\] - **erases** the last \[count\] elements from the text
- 3 \[index\] - **returns** the element at position \[index\] from the text
- 4 - **undoes** the last not-undone command of type 1 or 2 and returns the text to the state before that operation

### Input

- The first line contains **N** , the number of operations, where **1 ≤ N ≤**  **105**
- Each of the following **N** lines contains the name of the operation, followed by the command argument, if any, separated by space in the following format **"command argument"**.
- **The length of the text** will not exceed **1000000**
- All input characters are **English letters**
- It is **guaranteed** that the sequence of **input operation is possible to perform**

### Output

- For each operation of type **"3"** print a **single line with the returned character of that operation**.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 8 | c | There are 8 operations. Initially, the text is empty.  |
| 1 abc | y | Append "abc" |
| 3 3 | a | Print third character |
| 2 3 |  | Erase 3 characters |
| 1 xy |  | Append "xy" |
| 3 2 |  | Print second character |
| 4 |  | Undo last command - text is now "" |
| 4 |  | Undo last command - text is now "abc" |
| 3 1 |  | Print first character |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
8
1 abc
3 3
2 3
1 xy
3 2
4 
4 
3 1
[/input]
[output]
c
y
a
[/output]
[/test]
[test]
[input]
9
1 ZdrKoPr
3 7
2 2
3 5
4
3 7
4
1 BegaiSToqTest
3 5
[/input]
[output]
r
o
r
i
[/output]
[/test]
[test]
[input]
8
1 aaaaaaaaab
1 aaaaaaaaab
2 10
2 10
4
4
3 10
3 20
[/input]
[output]
b
b
[/output]
[/test]
[test]
[input]
8
1 RapuncelBesheTuk
2 3
1 Tam
4
4
3 1
3 15
3 16
[/input]
[output]
R
u
k
[/output]
[/test]
[test]
[input]
10
1 Mo
2 2
4
1 Ti
2 2
4
1 Karq
2 1
3 1
3 5
[/input]
[output]
M
K
[/output]
[/test]
[test]
[input]
13
1 ASL
1 Opsi
1 Mopsi
2 5
2 4
2 3
4
4
4
1 Zdr
3 13
3 14
3 15
[/input]
[output]
Z
d
r
[/output]
[/test]
[test]
[input]
14
1 ANqkoiKara
1 Kolelo
2 6
1 MaikaTi
1 DaShieChorapi
2 30
1 ANqkoiPushi
1 Seno
4
4
1 TovaBeshe
3 4
3 6
3 9
[/input]
[output]
a
e
e
[/output]
[/test]
[test]
[input]
14
1 NaskoE
1 SlabNa
1 Unreal
2 6
1 CS
4
4
4
4
1 MnLosh
1 NaSeriousSam
3 6
3 15
3 22
[/input]
[output]
E
S
S
[/output]
[/test]
[test]
[input]
23
1 ToqTest
1 ELesen
3 1
3 4
4
4
1 Obache
2 3
2 3
1 ObacheKazah
4
4
4
1 Sledvashtiq
1 EDosta
1 Vesel
3 7
3 8
3 9
2 5
1 Lud
3 25
3 26
[/input]
[output]
T
T
S
l
e
u
d
[/output]
[/test]
[test]
[input]
9
1 aaa
1 bbb
2 3
3 1
2 3
4
4
4
3 3
[/input]
[output]
a
a
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
