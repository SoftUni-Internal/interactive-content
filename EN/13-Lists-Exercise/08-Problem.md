# Problem: Pokemon Don't Go

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821869" default /]
[stream language="RO" videoId="432473432"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Pokemon Don't Go
[code-task title="Pokemon Don't Go" taskId="java-fund-14-Lists-Exercise-problem-8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
In Pokemon Don’t Go, when you walk to a certain pokemon, those closer to you, naturally get further, and those further from you, get closer.

You will **receive a sequence of integers, separated by spaces** – the **distances** to the pokemons.

Then you will **begin receiving integers**, which will correspond to **indexes** in that sequence.

**When you receive an index**, you must **remove the element at that index** from the sequence (as if you’ve captured the pokemon).
- You must INCREASE the value of all elements in the sequence which are **LESS or EQUAL to the removed element**, with the **value** **of the removed element**.
- You must DECREASE the value of all elements in the sequence which are **GREATER than the removed element**, with the **value of the removed element**.

If the given index is **LESS than 0**, **remove the first element of the sequence**, and **COPY the last element to its place**.

If the given index is **GREATER than the last index of the sequence**, **remove the last element from the sequence**, and **COPY the first element to its place**.

The increasing and decreasing of elements should be done in these cases, also. The element, whose value you should use is the **REMOVED element**.

The **program ends** when the sequence has **no elements**.

### Input
- On the first line of input you will receive a sequence of integers, separated by spaces.
- On the next several lines you will receive integers – the indexes.

### Output
- When the program ends, you must print on the console, the summed up value of all REMOVED elements.

### Example
| **Input** | **Output** |
| --- | --- |
| 4 5 3 | 14 |
| 1 | |
| 1 | |
| 0 | |

**Comments:**
- The array is \{4, 5, 3\}. The index is 1.
- We remove 5, and we increase all lower than it and decrease all higher than it.
- In this case there are no higher than 5.
- The result is \{9, 8\}.
- The index is 1. So we remove 8, and decrease all higher than it. 
- The result is \{1\}. 
- The index is 0. So we remove 1. 
- There are no elements left, so we print the sum of all removed elements. 
- 5 + 8 + 1 = 14.

### Example
| **Input** | **Output** |
| --- | --- |
| 5 10 6 3 5 | 31 |
| 4 | |
| 1 | |
| 1 | |
| 3 | |
| 0 | |
| 0 | |

**Comments:**
- Step 1: \{11, 4, 9, 11\}
- Step 2: \{22, 15, 20, 22\}
- Step 3: \{7, 5, 7\}
- Step 4: \{2, 2\}
- Step 5: \{4, 4\}
- Step 6: \{8\}
- Step 7: \{\} (empty).
- Result = 6 + 11 + 15 + 5 + 2 + 4 + 8 = 51.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 5 3
1
1
0

[/input]
[output]
14

[/output]
[/test]
[test open]
[input]
5 10 6 3 5
2
4
1
1
3
0
0

[/input]
[output]
51

[/output]
[/test]
[test]
[input]
1 2 3 4 5
2
0
2
1
0

[/input]
[output]
42

[/output]
[/test]
[test]
[input]
10 5 2 3 104 4 30 2 1
4
5
0
0
2
1
1
0
0

[/input]
[output]
31365

[/output]
[/test]
[test]
[input]
1 1 1 1 1
4
3
2
1
0
[/input]
[output]
31

[/output]
[/test]
[test]
[input]
4 8 15 16 23 42
0
1
3
1
0
0

[/input]
[output]
105

[/output]
[/test]
[test]
[input]
124 56 93 20 31 40 59 2 11 3 11
10
3
2
0
5
1
2
1
0
0
0

[/input]
[output]
995

[/output]
[/test]
[test]
[input]
1 2 3 4 3 2 1
3
2
2
1
1
0
0

[/input]
[output]
427

[/output]
[/test]
[test]
[input]
102 31 24 54
3
10
0
-1
0
0

[/input]
[output]
748

[/output]
[/test]
[test]
[input]
123 321
-12491287
12412831
0
0

[/input]
[output]
1509

[/output]
[/test]
[test]
[input]
1 1
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
0
0

[/input]
[output]
65535

[/output]
[/test]
[test]
[input]
-2 1
1
0

[/input]
[output]
0

[/output]
[/test]
[/tests]
[/code-task]
[/slide]
