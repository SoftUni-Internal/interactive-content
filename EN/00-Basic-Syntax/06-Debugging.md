# Debugging

[slide]
# Video
[vimeo-video startTimeInSeconds="9443" endTimeInSeconds="11095"]
[stream language="EN" videoId="421764903" default /]
[stream language="RO" videoId="422795597"  /]
[/vimeo-video]

[/slide]

[slide]
# Debugging
So far, we wrote a lot of code, and there were some mistakes in it, right? 

Now we will show a tool that can help us find mistakes more easily: **the debugger**.

# What is "Debugging"?
**Debugging** is the process of "**attaching**" to the program execution, which allows us to **track step by step the process**. 

We can track **line by line** what happens in our program, what path it follows, what are the values of defined variables at each step of debugging, and many other things that allow us to detect errors (**bugs**).

[image assetsSrc="conditional-statements-breakpoint.png" /]
[image assetsSrc="conditional-statements-variables-watch.png" /]

# Debugging in IntelliJ IDEA 
By pressing the `[Shift + F9]` button, we run the program in **debug mode**. We move to **the next line** with `[F7]`.

[image assetsSrc="conditional-statements-debug.png" /]

With `[Ctrl + F8]` we create the so-called breakpoints, that we can reach directly using `[Ctrl + F8]` when we start the program.
[/slide]

[slide hideTitle]
# Problem: Refactor Sum of Odd Numbers
[code-task title="Refactor Sum of Odd Numbers" taskId="java-fund-01-Basic-Syntax-problem-11" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());
        int sum = 1;
        
        for (int i = 0; i <= n; i++) {
        System.out.print(2 * i + 1);
        sum += 2 * i;
        }
        System.out.printf("Sum: %d%n", sum);
    }
}
```
[/code-editor]
[task-description]
## Description
You are assigned to **find and fix the bugs** in an existing piece of code, using the **debugger**.

You should trace the program execution to find the lines of code that produce incorrect or unexpected results.

You are given a program \(existing source code\) that prints the next **n odd numbers** \(starting from 1\) and on the **last row** prints the sum of them.

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 1 |
|  | 3 |
|  | 5 |
|  | 7 |
|  | 9 |
|  | Sum: 25 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
1
3
5
7
9
Sum: 25
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
1
3
5
Sum: 9
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1
3
5
7
Sum: 16
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
3
5
7
9
11
13
Sum: 49
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
1
3
5
7
9
11
13
15
17
19
Sum: 100
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
Sum: 1
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
1
3
5
7
9
11
13
15
Sum: 64
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Solution: Refactor Sum of Odd Numbers
[code-task title="Refactor Sum of Odd Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        int sum = 0;
        for (int i = 0; i < n; i++) {
            System.out.println(2 * i + 1);
            sum += 2 * i + 1;
        }
        System.out.printf("Sum: %d%n", sum);
    }
}
```
[/code-editor]
[task-description]
## Description
You are assigned to **find and fix the bugs** in an existing piece of code, using the **debugger**.

You should trace the program execution to find the lines of code that produce incorrect or unexpected results.

You are given a program \(existing source code\) that prints the next **n odd numbers** \(starting from 1\) and on the **last row** prints the sum of them.

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 1 |
|  | 3 |
|  | 5 |
|  | 7 |
|  | 9 |
|  | Sum: 25 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
1
3
5
7
9
Sum: 25
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
1
3
5
Sum: 9
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1
3
5
7
Sum: 16
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
3
5
7
9
11
13
Sum: 49
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
1
3
5
7
9
11
13
15
17
19
Sum: 100
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
Sum: 1
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
1
3
5
7
9
11
13
15
Sum: 64
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
