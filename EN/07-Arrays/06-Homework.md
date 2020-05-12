[slide]
# Problem: Sum Even Numbers
[code-task title="Problem: Sum Even Numbers" taskId="java-fundamentals-Arrays-05" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read an array from the console and sum only the even numbers.

## Examples
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 12|
| 3 5 7 9 | 0 |
| 2 4 6 8 10 | 30|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
0
[/output]
[/test]
[test open]
[input]
2 4 6 8 10
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
1 1 1
[/input]
[output]
0
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
2 4 3 1
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
12 22 32 44
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10
[/input]
[output]
30
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Equal Arrays
[code-task title="Problem: Equal Arrays" taskId="java-fundamentals-Arrays-06" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read two arrays and print on the console whether they are identical or not.

Arrays are **identical** if their **elements are equal**.

If the arrays are identical find the **sum of the first one** and print on the console following message: 
`"Arrays are identical. Sum: {sum}"`.

Otherwise find the first index where the arrays differ and print on the console following message: 
`"Arrays are not identical. Found difference at {index} index."`.



## Examples
|**Input**|**Output**|
|-----|------|------|
| 10 20 30 | Arrays are identical. Sum: 60|
| 10 20 30 | |

|**Input**|**Output**|
|-----|------|------|
| 1 2 3 4 5 | Arrays are not identical. Found difference at 2 index.|
| 1 2 4 3 5 | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 20 30
10 20 30
[/input]
[output]
Arrays are identical. Sum: 60
[/output]
[/test]
[test open]
[input]
1 2 3 4 5
1 2 4 3 5
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
1
10
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[test]
[input]
1 2 3
1 2 3
[/input]
[output]
Arrays are identical. Sum: 6
[/output]
[/test]
[test]
[input]
1 2 3
1 2 4
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
100
100
[/input]
[output]
Arrays are identical. Sum: 100
[/output]
[/test]
[test]
[input]
100 200 300 400
400 300 200 100
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Condense Array to Number
[code-task title="Problem: Condense Array to Number" taskId="java-fundamentals-Arrays-07" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to read a**n array of integers** and condense them by **summing** adjacent couples of elements until a **single integer** is obtained.

For example, if we have 3 elements \{2, 10, 3\}, we sum the first two and the second two elements and obtain \{2+10, 10+3\} = \{12, 13\}, then we sum again all adjacent elements and obtain \{12+13\} = \{25\}.

## Examples


Hints
While we have more than one element in the array **nums[]**, repeat the following:

*	Allocate a new array **condensed\[\]** of size **nums.Length-1**.
*	Sum the numbers from **nums\[\]** to **condensed\[\]**:

	**condensed\[i\]** = **nums\[i\]** + **nums\[i+1\]**
*	**nums\[\]** = **condensed\[\]**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 10 3
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
5 0 4 1 2
[/input]
[output]
35
[/output]
[/test]
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
3 4 0 3 4 0 0 0 0 1 2
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
0 0 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-5 -10 -15 -5
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
-1 2 -3 4 -5 6 -7 8 -9
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-1 -1 -1 -1 -1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -1
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]