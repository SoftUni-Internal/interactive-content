[slide hideTitle]
# Problem: Infix to Postfix
[code-task title="Infix to Postfix" taskId="f7d51cf8-541d-48fd-bd9f-795d70200d50" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Mathematical expressions are **written in an infix notations** , for example "5 / ( 3 + 2 )".

However, this kind of notation is **not efficient for computer processing** , as you first need to evaluate the expression inside the brackets, so there is a lot of back and forth movement.

A more suitable approach is to **convert it in the so-called postfix notations** (also called [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)), in which the **expression is evaluated from left to right** , for example "3 2 + 5 /".

Implement an **algorithm that converts** the mathematical expression **from infix notation into a postfix notation**. Use the famous [Shunting-yard algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm).

## Input

- You will **receive an expression on a single line, consisting of tokens**
- Tokens could be numbers 0-9, variables a-z, operators +, -, \*, /, and brackets ( or )
- Each token is **separated by exactly one space**

## Output

- The **output should be on a single line**, consisting of **tokens**, **separated by exactly one space**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 5 / ( 3 + 2 ) | 5 3 2 + / |


| **Input** | **Output** |
| --- | --- |
| 1 + 2 + 3 | 1 2 + 3 + |


| **Input** | **Output** |
| --- | --- |
| 7 + 13 / ( 12 - 4 ) | 7 13 12 4 - / + |


| **Input** | **Output** |
| --- | --- |
| ( 3 + x ) - y | 3 x + y - |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 / ( 3 + 2 )
[/input]
[output]
5 3 2 + /
[/output]
[/test]
[test open]
[input]
1 + 2 + 3
[/input]
[output]
1 2 + 3 +
[/output]
[/test]
[test open]
[input]
7 + 13 / ( 12 - 4 )
[/input]
[output]
7 13 12 4 - / +
[/output]
[/test]
[test open]
[input]
( 3 + x ) - y
[/input]
[output]
3 x + y -
[/output]
[/test]
[test]
[input]
3 + 2 + 4 \* 1
[/input]
[output]
3 2 + 4 1 \* +
[/output]
[/test]
[test]
[input]
( 1 + 2 ) + ( 2 \* 6 ) / ( 7 - 2 )
[/input]
[output]
1 2 + 2 6 \* 7 2 - / +
[/output]
[/test]
[test]
[input]
( 1 + 2 ) + ( 2 \* 6 ) / ( 7 - 2 ) \* ( x \* ( 2 - 5 ) + ( 6 - 2 ) )
[/input]
[output]
1 2 + 2 6 \* 7 2 - / x 2 5 - \* 6 2 - + \* +
[/output]
[/test]
[test]
[input]
2 + 3 - 4 + ( 2 - 2 )
[/input]
[output]
2 3 + 4 - 2 2 - +
[/output]
[/test]
[test]
[input]
2 + 3 - ( 4 + ( 2 - 2 ) )
[/input]
[output]
2 3 + 4 2 2 - + -
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
