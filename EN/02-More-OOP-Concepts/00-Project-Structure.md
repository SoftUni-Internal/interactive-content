# Project-Structures

[slide]

# Methods

- We use **methods** to split code into functional blocks
    - Improves code **readability**
    - Allows for easier **debugging**

For Example:

From this nested loops:
```java
for (char move : moves){
  for (int r = 0; r < room.length; r++)
    for (int c = 0; c < room[r].length; c++)
      if (room[row][col] == 'b')
        …
}
```
To this readable splited in methods code:
```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }
```
**Methods let us easily reuse code**
- We change the method once to affect all calls

Example:

```java
BankAccount bankAcc = new BankAccount();
bankAcc.setId(1);
bankAcc.deposit(20);
System.out.printf("Account %d, balance %d",
		bankAcc.getId(),bankAcc.getBalance());
bankAcc.withdraw(10);
…
System.out.println(bankAcc.toString());
//Override .toString() to set a global printing format

```
[/slide]

[slide]

# Problem: Rhombus of Stars
[code-task title="Problem: Rhombus of Stars" taskId="ce8ecf85-74ad-4066-b7ee-cf05ec5a36cc" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads a **positive integer n** as input and prints on the console a **rhombus** with size **n**.

[image assetsSrc="more-oop-concepts-example(1).png" /]

## Hint

Create a `printRow()` method to easily reuse code.

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 | \* |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2	 |  \* |
|  | \* \* |
|  |  \* |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 3 |   \* |
|  |  \* \* |
|  | \* \* \* |
|  |  \* \* |
|  |   \* |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 4 |    \* |
|  |   \* \* |
|  |  \* \* \* |
|  | \* \* \* \* |
|  |  \* \* \* |
|  |   \* \* |
|  |    \* |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
[/input]
[output]
   \*
  \* \*
 \* \* \*
\* \* \* \*
 \* \* \*
  \* \*
   \*
[/output]
[/test]
[test]
[input]
48
[/input]
[output]
                                               \*
                                              \* \*
                                             \* \* \*
                                            \* \* \* \*
                                           \* \* \* \* \*
                                          \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                          \* \* \* \* \* \*
                                           \* \* \* \* \*
                                            \* \* \* \*
                                             \* \* \*
                                              \* \*
                                               \*
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
              \*
             \* \*
            \* \* \*
           \* \* \* \*
          \* \* \* \* \*
         \* \* \* \* \* \*
        \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \*
         \* \* \* \* \* \*
          \* \* \* \* \*
           \* \* \* \*
            \* \* \*
             \* \*
              \*
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
\*
[/output]
[/test]
[test open]
[input]
2
[/input]
[output]
 \*
\* \*
 \*
[/output]
[/test]
[test open]
[input]
3
[/input]
[output]
  \*
 \* \*
\* \* \*
 \* \*
  \*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Rhombus of Stars
[code-task title="Problem: Rhombus of Stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = Integer.parseInt(sc.nextLine());
        for (int starCount = 1; starCount <= size; starCount++) {
          printRow(size, starCount); // Reusing code
        }
        for (int starCount = size - 1; starCount >= 1; starCount--) {
          printRow(size, starCount);
        }
    }

    static void printRow(int figureSize, int starCount) {
        for (int i = 0; i < figureSize - starCount; i++){
          System.out.print(" ");
        }
        for (int col = 1; col < starCount; col++) {
          System.out.print("* ");
        }
          System.out.println("*");
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that reads a **positive integer n** as input and prints on the console a **rhombus** with size **n**.

[image assetsSrc="more-oop-concepts-example(1).png" /]

## Hint

Create a `printRow()` method to easily reuse code.

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 | \* |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2	 |  \* |
|  | \* \* |
|  |  \* |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 3 |   \* |
|  |  \* \* |
|  | \* \* \* |
|  |  \* \* |
|  |   \* |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 4 |    \* |
|  |   \* \* |
|  |  \* \* \* |
|  | \* \* \* \* |
|  |  \* \* \* |
|  |   \* \* |
|  |    \* |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
[/input]
[output]
\*
[/output]
[/test]
[test open]
[input]
2
[/input]
[output]
 \*
\* \*
 \*
[/output]
[/test]
[test open]
[input]
3
[/input]
[output]
  \*
 \* \*
\* \* \*
 \* \*
  \*
[/output]
[/test]
[test open]
[input]
4
[/input]
[output]
   \*
  \* \*
 \* \* \*
\* \* \* \*
 \* \* \*
  \* \*
   \*
[/output]
[/test]
[test]
[input]
48
[/input]
[output]
                                               \*
                                              \* \*
                                             \* \* \*
                                            \* \* \* \*
                                           \* \* \* \* \*
                                          \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                          \* \* \* \* \* \*
                                           \* \* \* \* \*
                                            \* \* \* \*
                                             \* \* \*
                                              \* \*
                                               \*
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
              \*
             \* \*
            \* \* \*
           \* \* \* \*
          \* \* \* \* \*
         \* \* \* \* \* \*
        \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \*
         \* \* \* \* \* \*
          \* \* \* \* \*
           \* \* \* \*
            \* \* \*
             \* \*
              \*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]

# Splitting Code into Classes

**Just like methods, classes should not know or do too much**

Example:

```java
GodMode master = new GodMode();
int[] numbers = master.parseAny(input);
...
int[] numbers2 = master.copyAny(numbers);
master.printToConsole(master.getDate());
master.printToConsole(numbers);
```
**We can also break our code up logically into classes**
- Hiding implementation
- Allow us to change output destination
- Helps us to avoid repeating code

Example: Same block of code before and after using classes

Before

```java
List<Integer> input = Arrays.stream(
	sc.nextLine().split(" "))
	  .map(Integer::parseInt)
	  .collect(Collectors.toList()); 
...
String result = input.stream()
		      .map(String::valueOf)
		      .collect(Collectors.joining(", "));
System.out.println(result);
```
After

```java
ArrayParser parser = new ArrayParser();
OuputWriter printer = new OuputWriter();
int[] numbers = parser.integersParse(args);
int[] coordinates = parser.integerParse(args1);
printer.printToConsole(numbers);
```
[/slide]

[slide]
# Problem: Point in Rectangle
[code-task title="Problem: Point in Rectangle" taskId="23f4ddd7-605d-42b0-813d-1f1684c684a2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class **Point** and a class **Rectangle**.

The **Point** should hold **coordinates X** and **Y** and the **Rectangle** should hold 2 **Points** – its **bottom left** and **top right** corners.

In the **Rectangle** class, you should implement a **contains(Point point)** method that returns **true** or **false**, based on **whether** the **Point** given as **attribute** is **inside** or **outside** of the **Rectangle** object.

Points **on the side** of a Square are considered **inside**.

## Input
- On the first line read the coordinates of the bottom left and top right corner of the Rectangle in the format:

     “`<bottomLeftX>` `<topRightX>` `<topRightY>`”.
- On the second line, read an integer N and on the next N lines, read the coordinates of points.

## Output
- For each point, print out the result of the `Contains()` method.


## Examples
| **Input** | **Output** |
| --- | --- |
| 0 0 3 3 | true |
| 5 | true |
| 0 0 | false |
| 0 1 | false |
| 4 4 | true |
| 5 3 |  |
| 1 2 |  |

| **Input** | **Output** |
| --- | --- |
| 2 -3 12 3 | true |
| 4 | true |
| 8 -1 | false |
| 11 3 | false |
| 1 1 |  |
| 2 4 |  |

| **Input** | **Output** |
| --- | --- |
| 5 8 12 15 | false |
| 6 | true |
| 0 0 | true |
| 5 8 | true |
| 12 15 | true |
| 8 15 | true |
| 7 15 |  |
| 8 12 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 -3 12 3
4
8 -1
11 3
1 1
2 4
[/input]
[output]
true
true
false
false
[/output]
[/test]
[test open]
[input]
0 0 3 3
5
0 0
0 1
4 4
5 3
1 2
[/input]
[output]
true
true
false
false
true
[/output]
[/test]
[test open]
[input]
5 8 12 15
6
0 0
5 8
12 15
8 15
7 15
8 12
[/input]
[output]
false
true
true
true
true
true
[/output]
[/test]
[test]
[input]
2 -3 12 3
6
8 -1
11 3
1 1
2 4
1 1
2 4
1 1
2 4
[/input]
[output]
true
true
false
false
false
false
[/output]
[/test]
[test]
[input]
0 0 3 3
10
0 0
0 1
4 4
5 3
1 2
-1 5
0 2
3 0
4 3
1 2
3 3
[/input]
[output]
true
true
false
false
true
false
true
true
false
true
[/output]
[/test]
[test]
[input]
5 8 12 15
9
0 0
5 8
12 15
8 15
7 15
8 12
15 8
15 7
12 8
[/input]
[output]
false
true
true
true
true
true
false
false
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]

# Solution: Point in Rectangle

Create a class **Point**.

```java
public class Point {
    private int x;
    private int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public int getX() {
        return x;
    }
    public int getY() {
        return y;
    }
}
```
Then create a class **Rectangle**.

```java
public class Rectangle {
    private Point bottomLeft;
    private Point topRight;

    public Rectangle(Point bottomLeft, Point topRight) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }
```
- Implement **method `contains()`**, that **return boolean**.

```java
public boolean contains(Point point)
{
  boolean isInHorizontal = 
	this.bottomLeft.getX() <= point.getX() &&
	this.topRight.getX() >= point.getX();

  boolean isInVertical = 
	this.bottomLeft.getY() <= point.getY() &&
	this.topRight.getY() >= point.getY();

  boolean isInRectangle = isInHorizontal && isInVertical;

  return isInRectangle;
}
```
Than go in `Main()` and set **input and output.**

```java
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] coordinates = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        Point2D leftBottom = new Point2D(coordinates[0], coordinates[1]);
        Point2D topRight = new Point2D(coordinates[2], coordinates[3]);

        Rectangle rectangle = new Rectangle(leftBottom, topRight);

        int n = Integer.parseInt(scanner.nextLine());

        while (n-- > 0) {
            coordinates = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            Point2D point2D = new Point2D(coordinates[0], coordinates[1]);

            boolean isContained = rectangle.contains(point2D);

            System.out.println(isContained);
        }
    }
}
```
[/slide]