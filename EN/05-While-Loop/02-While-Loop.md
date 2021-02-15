[slide hideTitle]
# While Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-5-6-7-While-Loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
- We create a num variable for the current number to which we assign an initial **value of 1**
- For a loop condition, we put **the current number <= n**
- In **the body of the loop**: we print the value of the current number and increase the current number by using the formula from the problem's description

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

[slide hideTitle]
# Problem with Solution: Decreasing Numbers

Java-While-Loops-8-Problem-Decreasing-Numbers + 

[code-task title="Decreasing Numbers" taskId="java-basics-while-loop-decreasing-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

| **Input** | **Output** |
| ---- | ---- |
| 4 | 4 |
|| 3 |
|| 2 |
|| 1 |

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


[slide hideTitle]
# Problem with Solution: Number in Range

Java-While-Loops-10-Problem-Number-in-range

[code-task title="Number in Range" taskId="java-basics-while-loop-number-in-range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

| **Input** | **Output** |
| ---- | ---- |
| -10 | 50 |
| 101 |
| 50 |

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

