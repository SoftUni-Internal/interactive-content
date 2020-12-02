[slide hideTitle]
# Problem: List Operations
[code-task title="List Operations" taskId="java-fund-14-Lists-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will be given a list of **integer** numbers on the first input line.

Until you receive "End" you will be given **operations** you have to apply on the list.

The **possible commands** are:
- **Add** \{number\} – add number at the end
- **Insert** \{number\} \{index\}” – insert number at given index
- **Remove** \{index\} – remove at index
- **Shift left** \{count\} – first number becomes last 'count' times
- **Shift right** \{count\} – last number becomes first 'count' times

**Note**: it is possible that the index given is outside of the bounds of the array. In that case print "Invalid index"

### Example
| **Input** | **Output** |
| --- | --- |
| 1 23 29 18 43 21 20  | 43 20 5 1 23 29 18 |
| Add 5 |  |
| Remove 5 | |
| Shift left 3 | |
| Shift left 1 | |
| End | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 23 29 18 43 21 20 
Add 5
Remove 5
Shift left 3
Shift left 1
End
[/input]
[output]
43 20 5 1 23 29 18
[/output]
[/test]
[test]
[input]
5 12 42 95 32 1
Insert 3 0
Remove 10
Insert 8 6
Shift right 1
Shift left 2
End
[/input]
[output]
Invalid index
5 12 42 95 32 8 1 3
[/output]
[/test]
[test]
[input]
73 57 29
Add 15
Add 58
Add 17
Add 97
End
[/input]
[output]
73 57 29 15 58 17 97
[/output]
[/test]
[test]
[input]
39 54 66
Add 1500
Add 59588
Add 1718
Add 9227
End
[/input]
[output]
39 54 66 1500 59588 1718 9227
[/output]
[/test]
[test]
[input]
39 54 66
Insert 1500 1
Insert 59588 0
Insert 1718 4
Insert 9227 2
End
[/input]
[output]
59588 39 9227 1500 54 1718 66
[/output]
[/test]
[test]
[input]
25 87
Insert 23 1
Insert 1 0
Insert 22 3
Insert 0 2
Insert 80 2
Insert 15 2
Insert 52 2
Insert 16 2
End
[/input]
[output]
1 25 16 52 15 80 0 23 22 87
[/output]
[/test]
[test]
[input]
90 29 49 20 0 84 64 62 50 2
Remove 0
Remove 5
Remove 4
Remove 6
Remove 0
Remove 1
Remove 3
Remove 1
End
[/input]
[output]
49 62
[/output]
[/test]
[test]
[input]
91 33 11 34 20 23 47 70 53 19 31 25 20 12 50 39 86 94 98 97 30 46 84 79 95 45 89 29 34 4 43 1 81 81 31 18 11 81 52 90 24 92 36 97 6 26 57 74 18 0
Remove 0
Remove 25
Remove 34
Remove 16
Remove 10
Remove 11
Remove 13
Remove 24
End
[/input]
[output]
33 11 34 20 23 47 70 53 19 31 20 50 39 98 97 30 46 84 79 95 45 29 34 4 1 81 81 31 18 81 52 90 24 92 36 97 6 26 57 74 18 0
[/output]
[/test]
[test]
[input]
67 50 97 67 29
Shift left 5
Shift left 5
Shift left 5
End
[/input]
[output]
67 50 97 67 29
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Shift left 2
Shift left 7
Shift left 20
End
[/input]
[output]
72 58 27 8 43
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Shift right 2
Shift right 7
Shift right 20
End
[/input]
[output]
27 8 43 72 58
[/output]
[/test]
[test]
[input]
13 764 666 89 27 24
Shift right 3
Shift right 17
Shift right 7
Shift right 8
End
[/input]
[output]
764 666 89 27 24 13
[/output]
[/test]
[test]
[input]
58 27
Add 24
Insert 89 1
Insert 666 1
Add 764
Remove 0
Remove 185
Insert 13 4
Remove -9
Insert 245 -54
Shift left 17
Shift right 7
End
[/input]
[output]
Invalid index
Invalid index
Invalid index
13 764 666 89 27 24
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Add 24
Remove 3
Remove 27
Insert 13 4
Insert 9999 -54
Shift right 20
Shift left 3
End
[/input]
[output]
Invalid index
Invalid index
27 8 72 13 24 58
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
