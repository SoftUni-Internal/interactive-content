[slide hideTitle]
# Problem: Palindrome Integers
[code-task title="Palindrome Integers" taskId="java-fund-11-Methods-Exercise-problem-9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
A palindrome is a number which reads the same **backward as forward,** such as 323 or 1001.

Write a program which reads a positive integer numbers **until you receive** "END", for each number **print whether the number is palindrome or not**.

### Example
| **Input** | **Output** |
| --- | --- |
| 123 | false |
| 323 | true |
| 421 | false |
| 121 | true |
| END | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
123
323
421
121
END
[/input]
[output]
false
true
false
true
[/output]
[/test]
[test]
[input]
32
2
232
1010
END
[/input]
[output]
false
true
true
false
[/output]
[/test]
[test]
[input]
121
159
259
END
[/input]
[output]
true
false
false
[/output]
[/test]
[test]
[input]
121
528
891
622
271
602
117
489
END
[/input]
[output]
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
70
555
523
902
554
209
918
37
808
END
[/input]
[output]
false
true
false
false
false
false
false
false
true
[/output]
[/test]
[test]
[input]
567
656
920
184
580
128
638
276
137
END
[/input]
[output]
false
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
123321
121
356653
157
1001
666
159951
END
[/input]
[output]
true
true
true
false
true
true
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
