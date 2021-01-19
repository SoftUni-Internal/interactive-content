# For Loop

[slide]
# Video

[vimeo-video startTimeInSeconds="1464" endTimeInSeconds="2901"]
[stream language="EN" videoId="342471604" default /]
[stream language="RO" videoId="389927500"  /]
[/vimeo-video]
[/slide]

[slide]
# For Loop
In programming it is often required to perform a block of commands multiple times. 

In order to do that, the so-called **loops** are used. 

Let's examine an example of a `for` loop that passes sequentially through the numbers from 1 to 10 and prints them:
```java live
for (int i = 1; i <= 10; i += 1) {
  System.out.println(i);
}
```

The block of code can be explained with this use case diagram:

[image assetsSrc="04-for-loop-use-case.png" /]

The loop starts with the `for` operator and passes through all values for a particular variable in a given range, for example the numbers from 1 to 10 (included), and for each value it performs a series of commands.

# Syntax: For-Loop
Upon declaring the loop, you can specify a **start value** and an **end value**. 

The **body** of the loop is usually enclosed in curly brackets `{ }` and represents a block of **one or multiple commands**. 

The code block below shows the structure of a `for` loop:
```
for (initialization; condition; update) {
  loop's body;
}
```

It consists of:
* an **initialization part** for the counter (in the pattern `int i = 0`)
* a **boolean** condition (`i < 10`)
* an expression for **updating** the counter (``i += 1``)
* body of the loop.

In most cases a `for` loop is run between `1` and `n` times (for example from 1 to 10). 

The purpose of the loop is to pass sequentially through the numbers 1, 2, 3, …, n and for each of them to perform a particular action. 

In the first example, the `i` variable accepts values from 1 to 10 and the **current** value is printed in the body of the loop. 

The loop repeats 10 times and each of these repetitions is called an **"iteration"**.
[/slide]


[slide]
# Problem: Print Sum of N Numbers
[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads number n from the console
* **Prints** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints** the sum on the console at the end

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | 1 |
|  | 2 |
|  | 3 |
|  | 4 |
|  | 5 |
|  | 15 |
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Print Sum of N Numbers
[code-task title="Print Sum of N Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        for (int i = 1; i <= n; i += 1) {
            System.out.println(i);
            sum += i;
        }
        System.out.println(sum);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads number n from the console
* **Prints** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints** the sum on the console at the end\

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | 1 |
|  | 2 |
|  | 3 |
|  | 4 |
|  | 5 |
|  | 15 |
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Calculate Month Salary
[code-task title="Calculate Month Salary" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads n - the number of working days in the current month. 
* On the next n lines reads an integer - the salary for each particular day.
* **Calculates** the salary for the month.
* **Prints** the result on the console.

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 300 |
| 100 |  |
| 200 |  |
[/task-description]
[tests]
[test]
[input]
2
100
300
[/input]
[output]
400
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Calculate Month Salary
[code-task title="Calculate Month Salary" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int totalSalary = 0;
        for (int i = 1; i <= days; i += 1) {
            int salaryPerDay = Integer.parseInt(scanner.nextLine());
            totalSalary += salaryPerDay;
        }
        System.out.println(totalSalary);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads n - the number of working days in the current month. 
* On the next n lines reads an integer - the salary for each particular day.
* **Calculates** the salary for the month.
* **Prints** the result on the console.

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 300 |
| 100 |  |
| 200 |  |
[/task-description]
[tests]
[test]
[input]
2
100
300
[/input]
[output]
400
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]