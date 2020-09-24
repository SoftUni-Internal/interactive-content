# Nested while Loops

[slide]
# Video

[vimeo-video startTimeInSeconds="4533" endTimeInSeconds="5149"]
[stream language="EN" videoId="345011935" default /]
[stream language="RO" videoId="393861306"  /]
[/vimeo-video]

[/slide]

[slide]
# Nested while Loops
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

# Example

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

[slide]
# Problem: Triangle of Stars with While
[code-task title="Triangle of Stars with While" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Input
- 5
## Output
- \*
- \*\*
- \*\*\*
- \*\*\*\*
- \*\*\*\*\*
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

[slide]
# Solution: Triangle of Stars with While
[code-task title="Triangle of Stars with While" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int height = Integer.parseInt(scanner.nextLine());
        int i = 1;

        while (i <= height) {
            int j = 1;
            while (j <= i) {
                System.out.print("*");
                j++;
            }

            System.out.println();
            i++;
        }
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
## Input
- 5
## Output
- \*
- \*\*
- \*\*\*
- \*\*\*\*
- \*\*\*\*\*
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