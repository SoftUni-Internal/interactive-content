[slide hideTitle]
# Nested For-Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-23-25-nested-for-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us take a look at the statements that consist of several nested **for-loops** 

**Nested for-loops** are used:

* To **repeat code logic** an **exact number** of times
* To complete more **complex** calculations and variations

The syntax for a **nested for-loop in Java** is as follows:
```java
for (variable initialization; condition; increment) {
  // Outer Loop 
  for (variable initialization; condition; increment) { 
    // Inner Loop

    // Statements
  }
}
```
Here is an example of code logic containing a three level structure of nested for-loops.
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
## Example

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

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-26-problem-and-solution-triangle-of-stars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Triangle of Stars" taskId="java-basics-nested-loops-triangle-of-stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Place your code here
    }
}
```
[/code-editor]
[task-description]
# Description
Create a program, that:

* Reads the **height** of a triangle from the console
* Prints a **triangle of stars**

## Example

| **Input** |**Output**|
| ----- | ----- |
| 5 | \* |
|| \*\* |
|| \*\*\* |
|| \*\*\*\* |
|| \*\*\*\*\* |

[/task-description]
[tests]
[test open]
[input]
5
[/input]
[output]
*
**
***
****
*****
[/output]
[/test]
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

