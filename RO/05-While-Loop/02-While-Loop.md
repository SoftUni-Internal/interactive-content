# While Loop

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# While Loop
In programming the `while` **loop** is used when we want to **repeat** the execution of a certain logic while a condition is in effect. 

By **"condition"**, we understand every **expression** that returns `true` or `false`. When **the condition** is **wrong**, the while loop is **interrupted**, the program **continues** to execute the remaining code after the loop. 

[image assetsSrc="05-use-case-while.png" /]

The while loop looks like this:
```java
while (condition) {
  loop body;
}
```

In the code example above, condition is any **expression that returns a Boolean result** – `true` or `false`. 

It determines how long the loop body will be repeated and is called `loop condition`. 

In this example the `loop body` is the programming code executed at each iteration of the loop, i.e. whenever the input condition is true.

In the while loop, firstly the Boolean expression is evaluated and if it is `true`, the sequence of operations in the body of the loop is executed. 

Then again the input condition is checked and if it is `true` again, the body of the loop is executed. 

All this is repeated again and again **until at some point the conditional expression returns value** `false`.

# Example: Sequence of Numbers 2k+1
Write a program that prints all **numbers ≤ n** of the series: **1, 3, 7, 15, 31, …,** assuming that each next number = **previous number * 2 + 1**.

Here is how we can solve the problem:
- We create a num variable for the current number to which we assign an initial **value of 1**.
- For a loop condition, we put **the current number <= n**.
- In **the body of the loop**: we print the value of the current number and increase the current number by using the formula from the problem's description.

Here is a sample implementation of this idea:
```java live
Scanner scanner = new Scanner(System.in);
int n = Integer.parseInt(scanner.nextLine());
int num = 1;
while (num <= n) {
  System.out.println(num);
  num = 2 * num + 1;
}
```
[/slide]

[slide]
# Problem: Decreasing Numbers
[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads a number from the console
* Prints the numbers starting from the number to 1 (**inclusive**)
## Example
### Input
- 4
### Output
- 4
- 3
- 2
- 1
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Decreasing Numbers
[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int number = scanner.nextInt();
      while (number >= 1) {
         System.out.println(number);
         number--;
      }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a number from the console
* Prints the numbers starting from the number to 1 (**inclusive**)
## Example
### Input
- 4
### Output
- 4
- 3
- 2
- 1
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Number in Range
[code-task title="Number in Range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it isn't - it reads a **new one**
* If it is - **prints the number** and the program stops

## Example
### Input
- -10
- 101
- 50
### Output
- 50
[/task-description]
[tests]
[test]
[input]
-10
101
60
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Number in Range
[code-task title="Number in Range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int num = scanner.nextInt();
      while (num < 1 || num > 100) {
         num = scanner.nextInt();
      }
      System.out.println(num);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it isn't - it reads a **new one**
* If it is - **prints the number** and the program stops
## Example
### Input
- -10
- 101
- 50
### Output
- 50
[/task-description]
[tests]
[test]
[input]
-10
101
60
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]