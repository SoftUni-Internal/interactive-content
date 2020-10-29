[slide]

# Lambda Expressions

## What is a function?

A **function** is a part of a program that has its own name. 

This name can be used in the program as a **command** (this command is called a **function call**).

When a function is called, the commands of which it consists are **executed**. 
 
A function call can return a value (similar to an operation) and therefore can be used in an expression along with operations.
 
**Each** input in the **Function** has a **single** output.

**Mathematical Function:** 

## `ƒ(x) = x²`                                          
| `x` | `ƒ(x)`           
| ----------- | ----------- |
| **3** | **9**|
| 1 | 1 |
| 0 | 0 |
| 4 | 16 |
|-4 | 16 |

## Lambda Expressions

A Lambda Expression has parameters and body:

 `(parameters) -> {body}`

For example: 

 ```java
public class MyClass {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(5);
    numbers.add(9);
    numbers.add(8);
    numbers.add(1);
    numbers.forEach( (n) -> { System.out.println(n); } );
  }
}
 ```

 Use the lambda operator -> Reads as "`goes to`"


**Implicit** lambda expressions:

```java 
(msg) -> { System.out.println(msg); }

// Parameters can be enclosed in parentheses()
// The body can be enclosed n braces{}
```


**Explicit** lambda expressions:

```java
String msg -> System.out.println(msg); 
// We can declare parameters type
```
 
We can have different number of parameters:

- `Zero` parameters:

```java
() -> { System.out.println("Hello!"); }
() -> { System.out.println("How are you?"); }
```

- `More` parameters:
```java
(int x, int y) -> { return x + y; }
(int x, int y, int z) -> { return (y - x) * z; }
```

[/slide]


[slide hideTitle]
# Problem: Sort Even Numbers 
[code-task title="Problem: Sort Even Numbers " taskId="47daa520-925a-452b-9ef9-a2e0d30f8f6f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that reads one line of **integers** separated by **","**

# Examples


| **Input** | **Output** |
| --- | --- |
| 4, 2, 1, 3, 5, 7, 1, 4, 2, 12 | 4, 2, 4, 2, 12
|  | 2, 2, 4, 4, 12 |
| 1, 3, 5 | (no output) |
| 2, 4, 6  | 2, 4, 6 |
|  | 2, 4, 6 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
4, 2, 1, 3, 5, 7, 1, 4, 2, 12
[/input]
[output]
4, 2, 4, 2, 12
2, 2, 4, 4, 12
[/output]
[/test]
[test open]
[input]
1, 3, 5
[/input]
[output]

[/output]
[/test]
[test open]
[input]
2, 4, 6
[/input]
[output]
2, 4, 6
2, 4, 6
[/output]
[/test]
[test]
[input]
85, 51, 63, 31, 50, 5, 64, 82, 26, 71, 96, 31, 72, 77, 69, 19, 8, 37, 42, 45, 2, 87, 81, 22, 16, 7, 50, 38, 85, 28, 3, 57, 82, 30, 81, 80, 92, 10, 3, 53, 51, 35, 69, 25, 4, 5, 5, 80, 16, 89
[/input]
[output]
50, 64, 82, 26, 96, 72, 8, 42, 2, 22, 16, 50, 38, 28, 82, 30, 80, 92, 10, 4, 80, 16
2, 4, 8, 10, 16, 16, 22, 26, 28, 30, 38, 42, 50, 50, 64, 72, 80, 80, 82, 82, 92, 96
[/output]
[/test]
[test]
[input]
30, 21, 39, 74, 59, 21, 6, 75, 99, 27, 84, 54, 80, 55, 19, 61, 12, 86, 14, 41, 7, 96, 68, 10, 15, 61, 24, 73, 88, 97, 55, 74, 66, 96, 12, 41, 20, 28, 87, 73, 73, 39, 59, 23, 91, 51, 4, 98, 23, 85
[/input]
[output]
30, 74, 6, 84, 54, 80, 12, 86, 14, 96, 68, 10, 24, 88, 74, 66, 96, 12, 20, 28, 4, 98
4, 6, 10, 12, 12, 14, 20, 24, 28, 30, 54, 66, 68, 74, 74, 80, 84, 86, 88, 96, 96, 98
[/output]
[/test]
[test]
[input]
88, 33, 27, 65, 39, 93, 35, 9, 19, 48, 98, 56, 22, 30, 5, 97, 11, 76, 35, 19, 27, 60, 38, 25, 98, 60, 85, 5, 21, 90, 21, 77, 55, 93, 96, 80, 8, 4, 73, 92, 88, 86, 42, 77, 42, 89, 50, 42, 6, 87
[/input]
[output]
88, 48, 98, 56, 22, 30, 76, 60, 38, 98, 60, 90, 96, 80, 8, 4, 92, 88, 86, 42, 42, 50, 42, 6
4, 6, 8, 22, 30, 38, 42, 42, 42, 48, 50, 56, 60, 60, 76, 80, 86, 88, 88, 90, 92, 96, 98, 98
[/output]
[/test]
[test]
[input]
84, 78, 68, 87, 51, 56, 89, 20, 36, 23, 91, 45, 54, 98, 59, 23, 29, 56, 31, 45, 52, 30, 30, 3, 11, 36, 40, 80, 12, 66, 3, 35, 53, 29, 93, 25, 16, 68, 94, 69, 79, 16, 83, 18, 93, 15, 21, 31, 64, 39
[/input]
[output]
84, 78, 68, 56, 20, 36, 54, 98, 56, 52, 30, 30, 36, 40, 80, 12, 66, 16, 68, 94, 16, 18, 64
12, 16, 16, 18, 20, 30, 30, 36, 36, 40, 52, 54, 56, 56, 64, 66, 68, 68, 78, 80, 84, 94, 98
[/output]
[/test]
[test]
[input]
63, 99, 77, 15, 63, 93, 3, 34, 35, 92, 2, 79, 29, 35, 84, 14, 70, 45, 80, 75, 29, 24, 41, 52, 76, 93, 46, 6, 94, 56, 40, 63, 28, 92, 50, 23, 25, 79, 35, 60, 11, 16, 9, 83, 65, 65, 77, 87, 56, 47
[/input]
[output]
34, 92, 2, 84, 14, 70, 80, 24, 52, 76, 46, 6, 94, 56, 40, 28, 92, 50, 60, 16, 56
2, 6, 14, 16, 24, 28, 34, 40, 46, 50, 52, 56, 56, 60, 70, 76, 80, 84, 92, 92, 94
[/output]
[/test]
[/tests]
[/code-task]
[slide hideTitle]

# Solution: Sort Even Numbers

[code-task title="Sort Even Numbers " executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
``` java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Ex01SortEvenNumbers {
    private static BufferedReader reader;
    private static List<Integer> numbers;

    static {
        reader = new BufferedReader(new InputStreamReader(System.in));
        numbers = new ArrayList<>();
    }

    public static void main(String[] args) throws IOException {
        numbers = Arrays.stream(reader.readLine().split("[,\\s]+"))
                .filter(s -> !s.isEmpty())
                .map(Integer::parseInt)
                .collect(Collectors.toCollection(ArrayList::new));

        numbers.removeIf(n -> n % 2 != 0);
        System.out.println(numbers.toString().replaceAll("[\\[\\]]",""));
        numbers.sort(Integer::compareTo);
        System.out.println(numbers.toString().replaceAll("[\\[\\]]",""));
    }
}

```

[/code-editor]
[task-description]
