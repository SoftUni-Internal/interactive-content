# For Loop with Step

[slide]
# Video

[vimeo-video startTimeInSeconds="2906" endTimeInSeconds="3553"]
[stream language="EN" videoId="342471604" default /]
[stream language="RO" videoId="389927500"  /]
[/vimeo-video]

[/slide]

[slide]
# For Loop with Step
In this section we will pay attention to a particular and very important part of the `for` loop, namely the **step**.

**The step** is that **part** of the `for` loop construction that tells **how** much to **increase** or **decrease** the value of its **leading** variable. 

It is declared last in the **skeleton** of the for loop.

Most often, we have **a size of** `1`, and in this case, instead of writing `i += 1` or `i -= 1`, we can use for a shorter syntax the `i++` or `i--` operators.

```java live
for (int i = 0; i < 10; i++) {
  System.out.println(i);
}
```

If we want our step to be **different than 1**, when **increasing**, we use the `i +=` + step size operator.

 With step of 2, the loop would look like this:
```java live
for (int i = 0; i < 10; i += 2) {
  System.out.println(i);
}
```

We might want to have a **decreasing step** - `i -=` + step size. 

In this case we should pay attention to the end condition to **avoid** an **infinite loop**.

```java live
for (int i = 10; i >= 1; i--) {
  System.out.println(i);
}
```
[/slide]

[slide]
# Problem: Numbers Ending with 7 
[code-task title="Numbers Ending with 7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a number **n**
* Prints all numbers from **7 to n**, **ending with 7**

## Example
| **Input** | **Output** 
| --- | --- |
| 30 | 7 |
|  | 17 |
|  | 27 |
[/task-description]
[tests]
[test]
[input]
40
[/input]
[output]
7
17
27
37
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Numbers Ending with 7 
[code-task title="Numbers Ending with 7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 7; i <= n; i += 10) {
            System.out.println(i);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a number **n**
* Prints all numbers from **7 to n**, **ending with 7**

## Example
| **Input** | **Output** 
| --- | --- |
| 30 | 7 |
|  | 17 |
|  | 27 |
[/task-description]
[tests]
[test]
[input]
40
[/input]
[output]
7
17
27
37
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Exam Countdown
[code-task title="Exam Countdown" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads an integer - count of **days before an exam**
* For **each day** prints: "\{currentDay\} days before the exam"
* At the end prints: **"The exam has come"**

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 3 days before the exam |
|  | 2 days before the exam |
|  | 1 days before the exam |
|  | The exam has come |
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Exam Countdown
[code-task title="Exam Countdown" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        for (int i = days; i >= 1; i -= 1) {
            System.out.printf("%d days before the exam%n", i);
        }
        System.out.println("The exam has come");
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads an integer - count of **days before an exam**
* For **each day** prints: "\{currentDay\} days before the exam"
* At the end prints: **"The exam has come"**

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 3 days before the exam |
|  | 2 days before the exam |
|  | 1 days before the exam |
|  | The exam has come |
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]