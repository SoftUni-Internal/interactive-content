[slide hideTitle]
# Problem: Recursive Fibonacci
[code-task title="Recursive Fibonacci" taskId="426b0bb7-d61b-48d0-bde3-8a141d87e84c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Each member of the **Fibonacci sequence** is calculated from the **sum of the two previous members**.

The first two elements are 1, 1.

Therefore the sequence goes like 1, 1, 2, 3, 5, 8, 13, 21, 34…

The following sequence can be generated with an array, but that is easy, so **your task is to implement it recursively**.

If the function **getFibonacci(n)** returns the nth Fibonacci number, we can express it using 
**getFibonacci(n) = getFibonacci(n-1) + getFibonacci(n-2)**.

However, this will never end and in a few seconds, a Stack Overflow Exception is thrown. 

For the recursion to be stoped, it has to have a "bottom". 

The bottom of the recursion is getFibonacci(1), and should return 1. The same goes for getFibonacci(0).

## Input

- On a single line the user should enter the wanted Fibonacci number N where 1 <= N <= 49

## Output

- The output should be the n-th Fibonacci number counting from 0.

## Hint

For the n-th Fibonacci number, we calculate the N - 1st and the N - 2nd number, but for the calculation of N - 1st number we calculate the N - 1 - 1st(N - 2nd) and the N - 1 - 2nd number, so we have a lot of repeated calculations.

If you want to figure out how to skip those unnecessary calculations, you can search for a technique called [memoization](https://en.wikipedia.org/wiki/Memoization).

## Examples
| **Input** | **Output** |
| --- | --- |
| 5 | 8 |

| **Input** | **Output** |
| --- | --- |
| 10 | 89 |

| **Input** | **Output** |
| --- | --- |
| 21 | 17711 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
34
[/output]
[/test]
[test]
[input]
24
[/input]
[output]
75025
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1346269
[/output]
[/test]
[test]
[input]
37
[/input]
[output]
39088169
[/output]
[/test]
[test]
[input]
42
[/input]
[output]
433494437
[/output]
[/test]
[test]
[input]
49
[/input]
[output]
12586269025
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
