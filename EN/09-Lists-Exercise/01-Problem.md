[slide hideTitle]
# Problem: Change List
[code-task title="Change List" taskId="java-fund-14-Lists-Exercise-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which **reads a list of integers** from the console and receives **commands**, which **manipulate the list**.

Your program may receive the following **commands**: 
•	**Delete** \{element\} – delete all elements in the array, which are equal to the given element
•	**Insert** \{element\} \{position\} – insert element and the given position
You should **stop the program** when you receive the command "end". Print all numbers in the array **separated with single whitespace**.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 3 4 5 5 5 6 | 1 10 2 3 4 6 |
| Delete 5 | |
| Insert 10 1 | |
| Delete 5 | |
| end | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 5 5 6
Delete 5
Insert 10 1
Delete 5
end
[/input]
[output]
1 10 2 3 4 6
[/output]
[/test]
[test]
[input]
20 12 4 319 21 31234 2 41 23 4
Insert 50 2
Insert 50 5
Delete 4
end
[/input]
[output]
20 12 50 319 50 21 31234 2 41 23
[/output]
[/test]
[test]
[input]
429 816 83 411
Delete 816
Delete 83
end
[/input]
[output]
429 411
[/output]
[/test]
[test]
[input]
750 747 827 55
Delete 750
Delete 750
Delete 83
Delete 54
Delete 55
end
[/input]
[output]
747 827
[/output]
[/test]
[test]
[input]
56 95
Insert 198 0 
Insert 18 2 
Insert 178 3 
Insert 8 1 
Insert 25 0 
end
[/input]
[output]
25 198 8 56 18 178 95
[/output]
[/test]
[test]
[input]
21 85 29
Insert 275  0 
Insert 744  2 
Insert 73  3 
Insert 798 1 
Insert 248 0 
end
[/input]
[output]
248 275 798 21 744 73 85 29
[/output]
[/test]
[test]
[input]
444 868 119 891 717 755 564 52 246 876
Delete 119
Delete 755
Insert 755 0
Delete 876
Insert 666 5
Insert 949 6
end
[/input]
[output]
755 444 868 891 717 666 949 564 52 246
[/output]
[/test]
[test]
[input]
67 26 161 985 709 373 830
Delete 0
Delete 26
Insert 0 0
Delete 373
Delete 985
Insert 666 5
Insert 949 6
end
[/input]
[output]
0 67 161 709 830
[/output]
[/test]
[test]
[input]
216 467 876
Delete 216
Delete 876
Insert 0 0
Delete 373
Delete 985
Insert 13 0
Insert 468 1
end
[/input]
[output]
13 468 0 467
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
