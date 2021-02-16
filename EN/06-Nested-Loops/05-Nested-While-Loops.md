[slide hideTitle]
# Nested While Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-28-30-nested-while-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The use of nested `while` loops is very similar to the one of the `for`.

Here is the syntax in Java:
```java
while (condition) {
  // Outer Loop 
  while (condition) {
    // Inner Loop
    
    // Statements
  }
}
```

# Example:

```java live
int i = 0;
int n = 5;
while (i < n) {
  System.out.printf("Value of i: %d%n", i);
  int j = 1;
  i++;

  while (j < n) {
    System.out.printf("  Value of j: %d%n", j);
    j++;
  }
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Triangle of Stars with While
[code-task title="Triangle of Stars with While" taskId="java-basics-nested-loops-Triangle-of-Stars-with-While" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that:

* Read **the height** of a triangle in the console
* Print a **star triangle**
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
\*
\*\*
\*\*\*
\*\*\*\*
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide hideTitle]

# Example: Combining "while" and "for" Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-33-34-nesting-while-and-for-loops-and-problem-and-solution-sum-digits-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[/slide]