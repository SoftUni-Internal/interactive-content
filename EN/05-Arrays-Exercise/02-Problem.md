[slide hideTitle]
# Problem: Common Elements
[code-task title="Common Elements" taskId="java-fund-08-Arrays-Exercise-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Write a program, which prints **common elements** in **two arrays**.

You have to **compare the elements** of the **second array** to the elements of the **first**.

### Example
| **Input** | **Output** |
| --- | --- |
| Hey hello 2 4 | 4 hello |
| 10 hey 4 hello | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Hey hello 2 4
10 hey 4 hello
[/input]
[output]
4 hello
[/output]
[/test]
[test]
[input]
S of t un i
of i 10 un
[/input]
[output]
of i un
[/output]
[/test]
[test]
[input]
i love to code
code i love to
[/input]
[output]
code i love to
[/output]
[/test]
[test]
[input]
a b c d
a x e f
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
abc def xyz kmn lop
abc 213 xyz 5406 lop ####
[/input]
[output]
abc xyz lop
[/output]
[/test]
[test]
[input]
aaa bbb ccc ddd eee fff ggg
aaa xxx yyy zzz 123 ccc ggg
[/input]
[output]
aaa ccc ggg
[/output]
[/test]
[test]
[input]
aaa bbb ddd eee fff ggg
ggg
[/input]
[output]
ggg
[/output]
[/test]
[test]
[input]
111 222 333 444 555
666 777 888 999 111
[/input]
[output]
111
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
