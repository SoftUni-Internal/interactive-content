[slide hideTitle]
# Nested While Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-28-30-nested-while-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The use of nested `while-loops` is very similar to `for-loops`. However, while-loops are used when we do not know the exact number of repetitions.

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

## Example:

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

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-31-problem-and-solution-triangle-of-stars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Create a program That:

* Reads **the height** of a triangle
* Prints a **triangle made of asterisks**
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


[slide hideTitle]

# Problem with Solution: Sum of Digits Calculator

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-33-34-nesting-while-and-for-loops-and-problem-and-solution-sum-digits-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of Digits Calculator" taskId="java-basics-nested-loops-Sum-of-Digits-Calculator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that:

- Continuously reads integers until "**End**" is entered​

  - prints the sum of all received **digits** for each integer​

- Finally, prints "**Goodbye**"

## Example

| **Input** |**Output**|
| ----- | ----- |
|157 |Sum of digits = 13
|99|Sum of digits = 18
|5|Sum of digits = 5
|438|Sum of digits = 15
|End|Goodbye

[/task-description]
[tests]
[test open]
[input]
157
99
5
438
End
[/input]
[output]
Sum of digits = 13​
Sum of digits = 18​
Sum of digits = 5​
Sum of digits = 15​
Goodbye
[/output]
[/test]
[test]
[input]
55
123
145
End
[/input]
[output]
Sum of digits = 10
Sum of digits = 6
Sum of digits = 10
Goodbye
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]



[/slide]
