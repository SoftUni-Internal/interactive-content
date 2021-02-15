[slide hideTitle]
# Nested For Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-23-25-nested-for-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Statements that consist of several **for loops** located **inside each other**

**Nested for loops** are used:

* To execute an **action**, which **executes** multiple **actions**
* To make more **complex** calculations and variations

The syntax for a **nested for loop in Java** is as follows:
```java
for (variable initialization; condition; increment) {
  // Outer Loop 
  for (variable initialization; condition; increment) { 
    // Inner Loop

    // Statements
  }
}
```
These are 3 `for` loops nested in one another:
```java live
int n = 5;
for (int i = 1; i <= n; i += 3) {
    for (int j = 1; j <= n; j += 3) {
        for (int k = 1; k <= n; k += 3) {
            System.out.printf("%d%d%d%n", i, j, k);
        }
    }
}
```
# Example
Here is an example Java program:
```java live
int a = 3;
int b = 3;

for (int i = 0; i < a; i++) {
    System.out.printf("i = %d%n", i);

    for (int j = 0; j < b; j++) {
        System.out.printf("  j = %d%n", j);
    }
}
```
[/slide]


[slide hideTitle]
# Problem with Solution: Triangle of Stars

interactive-programming-basics-with-java-nested-loops-26-problem-triangle-of-stars

[code-task title="Triangle of Stars" taskId="java-basics-nested-loops-triangle-of-stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description
Write a program, which:

* Reads the **height** of a triangle from the console
* Prints a **triangle of stars**
# Example

| **Input** |**Output**|
| ----- | ----- |
| 5 | \* |
|| \*\* |
|| \*\*\* |
|| \*\*\*\* |
|| \*\*\*\*\* |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
*
**
***
****
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

