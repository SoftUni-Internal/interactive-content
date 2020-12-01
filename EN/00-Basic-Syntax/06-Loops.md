# Loops

[slide]
# Video

[vimeo-video startTimeInSeconds="6677" endTimeInSeconds="9442"]
[stream language="EN" videoId="421764903" default /]
[stream language="RO" videoId="422795597"  /]
[/vimeo-video]
[/slide]

[slide]
# Loop: Definition
In programming it is often required to perform a block of commands multiple times. 

To do that, the so-called **loops** are used.

A **loop** is a control statement that repeats the execution of a block of statements.

There are several types of loop:
* **for** loop: executes a code block a fixed number of times.
* **while** and **do…while**: executes a code block while a given condition returns true.
[/slide]

[slide]
# For Loop

When you know **exactly how many times** you want to loop through a block of code, use the `for` loop instead of a `while` loop:
```java live
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `int i = 0` sets a variable before the loop starts.
- `i < 5` defines the condition for the loop to run
    - If the condition is `true`, the loop will start over again, if it is `false`, the loop will end.
- `i++` increases a value each time the code block in the loop has been executed.

You can use `fori` live template in Intellij, using `fori` push \[Tab\] twice.
[/slide]

[slide hideTitle]
# Problem: Divisible by 3
[code-task title="Divisible by 3" taskId="java-fund-01-Basic-Syntax-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which prints all the numbers from **1 to 100**, which are **divisible by 3**.

You have to use a single **for** loop.

The program should not receive input.
[/task-description]
[code-io /]
[tests]
[test]
[input]
[/input]
[output]
3
6
9
12
15
18
21
24
27
30
33
36
39
42
45
48
51
54
57
60
63
66
69
72
75
78
81
84
87
90
93
96
99
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Divisible by 3
[code-task title="Divisible by 3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
      for (int i = 3; i <= 100; i += 3) {
        System.out.println(i);  
      }
  }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which prints all the numbers from **1 to 100**, which are **divisible by 3**.

You have to use a single **for** loop.

The program should not receive input.
[/task-description]
[code-io /]
[tests]
[test]
[input]
[/input]
[output]
3
6
9
12
15
18
21
24
27
30
33
36
39
42
45
48
51
54
57
60
63
66
69
72
75
78
81
84
87
90
93
96
99
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Sum of Odd Numbers
[code-task title="Sum of Odd Numbers" taskId="java-fund-01-Basic-Syntax-problem-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that prints the next **n odd numbers** (starting from 1) and on the **last row** prints the **sum of them**.

## Examples
|Input|Output|
|-----|------|
| 5 | 1 |
| | 3 |
| | 5 |
| | 7 |
| | 9 |
| | Sum: 25 |


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
# Solution: Sum of Odd Numbers
[code-task title="Sum of Odd Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());
        int counter = 1;
        int sum = 0;

        for (int i = 1; counter <= n; i += 2) {
            System.out.println(i);
            counter++;
            sum += i;
        }

        System.out.println("Sum: " + sum);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that prints the next **n odd numbers** (starting from 1) and on the **last row** prints the **sum of them**.

## Examples
|Input|Output|
|-----|------|
| 5 | 1 |
| | 3 |
| | 5 |
| | 7 |
| | 9 |
| | Sum: 25 |


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

[slide]
# While Loop
In programming, the `while` **loop** is used when we want to **repeat** the execution of a certain logic while a condition is true. 

By **condition**, we understand every **expression** that returns `true` or `false`. 

When **the condition** is **false**, the while loop is **interrupted**, the program **continues** to execute the remaining code after the loop. 

The `while` loop looks like this:
```java
while (condition) {
  //loop body;
}
```

```java live
Scanner sc = new Scanner(System.in);
String correctWord = sc.nextLine();
int failedAttempts = 0;

String guessWord = sc.nextLine();
while (!guessWord.equals(correctWord)) {
    failedAttempts += 1;
    guessWord = sc.nextLine();
}

System.out.println(failedAttempts);
```

In the code example above, the condition is any **expression that returns a Boolean result** – `true` or `false`. 

It determines how long the loop body will be repeated and is called a `loop condition`. 

In this example, the `loop body` is the programming code executed at each iteration of the loop, i.e. whenever the input condition is true.

In the while loop, first, the Boolean expression is evaluated and if it is `true`, the sequence of operations in the body of the loop is executed. 

Then again the input condition is checked and if it is `true` again, the body of the loop is executed. 

All this is repeated again and again **until at some point the conditional expression returns value** `false`.
[/slide]

[slide hideTitle]
# Problem: Multiplication Table
[code-task title="Multiplication Table" taskId="java-fund-01-Basic-Syntax-problem-8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive an integer as an input from the console.

Print the 10 times table for this integer.

See the examples below for more information.

Print every row of the table in the following format: `theInteger X times = product`

## Examples
|Input|Output|
|-----|------|
| 5 | 5 X 1 = 5 |
| | 5 X 2 = 10 |
| | 5 X 3 = 15 |
| | 5 X 4 = 20 |
| | 5 X 5 = 25 |
| | 5 X 6 = 30 |
| | 5 X 7 = 35 |
| | 5 X 8 = 40 |
| | 5 X 9 = 45 |
| | 5 X 10 = 50 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
5 X 8 = 40
5 X 9 = 45
5 X 10 = 50
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 X 1 = 4
4 X 2 = 8
4 X 3 = 12
4 X 4 = 16
4 X 5 = 20
4 X 6 = 24
4 X 7 = 28
4 X 8 = 32
4 X 9 = 36
4 X 10 = 40
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
7 X 1 = 7
7 X 2 = 14
7 X 3 = 21
7 X 4 = 28
7 X 5 = 35
7 X 6 = 42
7 X 7 = 49
7 X 8 = 56
7 X 9 = 63
7 X 10 = 70
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10 X 1 = 10
10 X 2 = 20
10 X 3 = 30
10 X 4 = 40
10 X 5 = 50
10 X 6 = 60
10 X 7 = 70
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 X 1 = 1
1 X 2 = 2
1 X 3 = 3
1 X 4 = 4
1 X 5 = 5
1 X 6 = 6
1 X 7 = 7
1 X 8 = 8
1 X 9 = 9
1 X 10 = 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Multiplication Table
[code-task title="Multiplication Table" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d X %d = %d%n", num, i, num * i);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
You will receive an integer as an input from the console.

Print the 10 times table for this integer.

See the examples below for more information.

Print every row of the table in the following format: `theInteger X times = product`.

## Examples
|Input|Output|
|-----|------|
| 5 | 5 X 1 = 5 |
| | 5 X 2 = 10 |
| | 5 X 3 = 15 |
| | 5 X 4 = 20 |
| | 5 X 5 = 25 |
| | 5 X 6 = 30 |
| | 5 X 7 = 35 |
| | 5 X 8 = 40 |
| | 5 X 9 = 45 |
| | 5 X 10 = 50 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
5 X 8 = 40
5 X 9 = 45
5 X 10 = 50
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 X 1 = 4
4 X 2 = 8
4 X 3 = 12
4 X 4 = 16
4 X 5 = 20
4 X 6 = 24
4 X 7 = 28
4 X 8 = 32
4 X 9 = 36
4 X 10 = 40
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
7 X 1 = 7
7 X 2 = 14
7 X 3 = 21
7 X 4 = 28
7 X 5 = 35
7 X 6 = 42
7 X 7 = 49
7 X 8 = 56
7 X 9 = 63
7 X 10 = 70
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10 X 1 = 10
10 X 2 = 20
10 X 3 = 30
10 X 4 = 40
10 X 5 = 50
10 X 6 = 60
10 X 7 = 70
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 X 1 = 1
1 X 2 = 2
1 X 3 = 3
1 X 4 = 4
1 X 5 = 5
1 X 6 = 6
1 X 7 = 7
1 X 8 = 8
1 X 9 = 9
1 X 10 = 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Do-While Loop
The next type of loops we will get familiar with is the `do-while` loop. 

By structure, this type of loop resembles the `while` loop, but there is a significant difference between them.

The following example shows the usage of the `do-while` loop:
```java live
int n = 0;
do {
    System.out.println(n);
    n++;
} while (n < 5);
```
It is that the `do-while` loop will execute its body at least once. 

Why is this happening? 

Notice that the conditional expression appears at the end of the loop, so the statement(s) in the loop executes once before the condition is tested.

In the do-while loop construction, **the condition** is always checked **after** the body. 

This way it is ensured that **the first loop iteration will execute** the code and **the check for the end of the loop** will be applied to each subsequent iteration of the `do-while`.

If the condition is true, the flow of control jumps back up to `do`, and the statement(s) in the loop executes again. 

This process repeats until the given condition becomes false.
[/slide]

[slide hideTitle]
# Problem: Multiplication Table 2.0
[code-task title="Multiplication Table 2.0" taskId="java-fund-01-Basic-Syntax-problem-10" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Rewrite your program so it can receive the **multiplier from the console**.

Print the **table from the given multiplier to 10**.

If the given multiplier is **more than 10** - print only one row with the **integer**, the given **multiplier** and the **product**.

See the examples below for more information.

Print every row of the table in the following format: `theInteger X times = product`.

## Examples
|Input|Output|
|-----|------|
| 5 | 5 X 2 = 10 |
| 2 | 2 X 6 = 12 |
| | 2 X 7 = 14 |
| | 2 X 8 = 16 |
| | 2 X 9 = 18 |
| | 2 X 10 = 20 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
5
[/input]
[output]
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
[/output]
[/test]
[test]
[input]
7
11
[/input]
[output]
7 X 11 = 77
[/output]
[/test]
[test]
[input]
2
14
[/input]
[output]
2 X 14 = 28
[/output]
[/test]
[test]
[input]
4
2
[/input]
[output]
4 X 2 = 8
4 X 3 = 12
4 X 4 = 16
4 X 5 = 20
4 X 6 = 24
4 X 7 = 28
4 X 8 = 32
4 X 9 = 36
4 X 10 = 40
[/output]
[/test]
[test]
[input]
7
8
[/input]
[output]
7 X 8 = 56
7 X 9 = 63
7 X 10 = 70
[/output]
[/test]
[test]
[input]
10
1
[/input]
[output]
10 X 1 = 10
10 X 2 = 20
10 X 3 = 30
10 X 4 = 40
10 X 5 = 50
10 X 6 = 60
10 X 7 = 70
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
[/output]
[/test]
[test]
[input]
1
9
[/input]
[output]
1 X 9 = 9
1 X 10 = 10
[/output]
[/test]
[test]
[input]
100
19
[/input]
[output]
100 X 19 = 1900
[/output]
[/test]
[test]
[input]
19
100
[/input]
[output]
19 X 100 = 1900
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Multiplication Table 2.0
[code-task title="Multiplication Table 2.0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();
        int multiplier = scanner.nextInt();

        do {
            System.out.printf("%d X %d = %d%n", number, multiplier, number * multiplier);
            multiplier++;
        } while (multiplier <= 10);
    }
}
```
[/code-editor]
[task-description]
## Description
Rewrite your program so it can receive the **multiplier from the console**.

Print the **table from the given multiplier to 10**.

If the given multiplier is **more than 10** - print only one row with the **integer**, the given **multiplier** and the **product**.

See the examples below for more information.

Print every row of the table in the following format: `theInteger X times = product`.

## Examples
|Input|Output|
|-----|------|
| 5 | 5 X 2 = 10 |
| 2 | 2 X 6 = 12 |
| | 2 X 7 = 14 |
| | 2 X 8 = 16 |
| | 2 X 9 = 18 |
| | 2 X 10 = 20 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
5
[/input]
[output]
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
[/output]
[/test]
[test]
[input]
7
11
[/input]
[output]
7 X 11 = 77
[/output]
[/test]
[test]
[input]
2
14
[/input]
[output]
2 X 14 = 28
[/output]
[/test]
[test]
[input]
4
2
[/input]
[output]
4 X 2 = 8
4 X 3 = 12
4 X 4 = 16
4 X 5 = 20
4 X 6 = 24
4 X 7 = 28
4 X 8 = 32
4 X 9 = 36
4 X 10 = 40
[/output]
[/test]
[test]
[input]
7
8
[/input]
[output]
7 X 8 = 56
7 X 9 = 63
7 X 10 = 70
[/output]
[/test]
[test]
[input]
10
1
[/input]
[output]
10 X 1 = 10
10 X 2 = 20
10 X 3 = 30
10 X 4 = 40
10 X 5 = 50
10 X 6 = 60
10 X 7 = 70
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
[/output]
[/test]
[test]
[input]
1
9
[/input]
[output]
1 X 9 = 9
1 X 10 = 10
[/output]
[/test]
[test]
[input]
100
19
[/input]
[output]
100 X 19 = 1900
[/output]
[/test]
[test]
[input]
19
100
[/input]
[output]
19 X 100 = 1900
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
