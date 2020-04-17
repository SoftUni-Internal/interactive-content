[slide hideTitle]
# Problem: Kamino Factory
[code-task title="Kamino Factory" taskId="java-fundamentals-arrays-09" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
The clone factory in Kamino got another order to clone troops.

But this time you are tasked to find the best DNA sequence to use in the production.

You will receive the **DNA length** and **until** you receive the **command** "Clone them!" you will be **receiving** a **DNA sequences of ones and zeroes**, split by "!" (one or several).

You should **select the sequence with the longest subsequence of ones**.

If there are **several sequences with same length** of subsequence of ones, print the one with the **leftmost** starting index, if there are **several sequences with same length and starting index**, select the sequence with the **greater** sum of its elements.

After you receive the last command "Clone them!" you should print the collected information in the following **format**:

"Best DNA sample \{bestSequenceIndex\} with sum: \{bestSequenceSum\}."
"{DNA sequence, joined by space\}"

## Input / Constraints
- The first line holds the length of the sequences – integer
- On the next lines until you receive "Clone them!" you will be receiving sequences (at least one) of ones and zeroes, split by "!" (one or several).

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | Best DNA sample 2 with sum: 2. |
| 1!0!1!1!0 | 0 1 1 0 0 |
| 0!1!1!0!0 | |
| Clone them! | |

### Comments
We receive 2 sequences with same length of subsequence of ones, but the second is printed, because its subsequence starts at index\[1\].

[/task-description]
[code-io /]
[tests]
[test]
[input]
5
1!0!1!1!0
0!1!1!0!0
Clone them!
[/input]
[output]
Best DNA sample 2 with sum: 2.
0 1 1 0 0
[/output]
[/test]
[test]
[input]
4
1!1!0!1
1!0!0!1
1!1!0!0
Clone them!
[/input]
[output]
Best DNA sample 1 with sum: 3.
1 1 0 1
[/output]
[/test]
[test]
[input]
5
1!0!1!1!1!
0!1!1!1!0!
1!1!1!0!0!
1!1!1!0!0!
1!1!1!0!0!
Clone them!
[/input]
[output]
Best DNA sample 3 with sum: 3.
1 1 1 0 0
[/output]
[/test]
[test]
[input]
3
0!0!0
0!0!0
0!0!0
Clone them!
[/input]
[output]
Best DNA sample 1 with sum: 0.
0 0 0
[/output]
[/test]
[test]
[input]
4
1!1!1!1
1!1!1!1
1!1!1!1
Clone them!
[/input]
[output]
Best DNA sample 1 with sum: 4.
1 1 1 1
[/output]
[/test]
[test]
[input]
9
1!0!1!1!0!1!1!0!0
1!0!1!1!0!1!1!0!0
1!0!1!1!0!1!1!0!1
Clone them!
[/input]
[output]
Best DNA sample 3 with sum: 6.
1 0 1 1 0 1 1 0 1
[/output]
[/test]
[test]
[input]
8
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!0!1!1!1!1!1!1
1!1!1!1!1!1!1!1
Clone them!
[/input]
[output]
Best DNA sample 15 with sum: 8.
1 1 1 1 1 1 1 1
[/output]
[/test]
[test]
[input]
10
1!0!1!1!0!1!1!!1!0!1
1!0!1!1!0!1!1!!1!1!!0
1!1!0!1!1!!1!1!!0!1!0
Clone them!
[/input]
[output]
Best DNA sample 3 with sum: 7.
1 1 0 1 1 1 1 0 1 0
[/output]
[/test]
[test]
[input]
20
1!0!1!1!0!1!1!!1!0!1!!!1!0!1!1!0!1!1!!1!0!1
1!0!1!1!0!1!1!!1!1!!0!!!1!0!1!1!0!1!1!!1!1!!0
1!1!0!1!1!!1!1!!0!1!0!!!1!1!0!1!1!!1!1!!0!1!0
Clone them!
[/input]
[output]
Best DNA sample 3 with sum: 14.
1 1 0 1 1 1 1 0 1 0 1 1 0 1 1 1 1 0 1 0
[/output]
[/test]
[test]
[input]
1
1
1
1
Clone them!
[/input]
[output]
Best DNA sample 1 with sum: 1.
1
[/output]
[/test]
[test]
[input]
10
1!0!1!1!0!1!1!!1!0!1
Clone them!
[/input]
[output]
Best DNA sample 1 with sum: 7.
1 0 1 1 0 1 1 1 0 1
[/output]
[/test]
[test]
[input]
100
1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1!1!0!1!1!0!1!1!!1!0!1
Clone them!

[/input]
[output]
Best DNA sample 1 with sum: 70.
1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 0 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]