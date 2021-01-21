[slide hideTitle]
# Problem: Loot Box
[code-task title="Loot Box" taskId="a83d9d2c-abf2-46c7-976b-9a491441bcba" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
_You are tired of being the only one on your team without cool items, so you decided to buy some loot boxes which have a chance to drop some cool items._


Every purchase gives you two loot boxes and they are represented as a sequence of integers. 

First, you will be given **a sequence of integers, representing the first loot box**. Afterward, you will be given another **sequence of integers representing the second loot box**.

You need to start from the **first item** in the first box and **sum** it with the last item in the second box. 

If the **sum** of their values is **an even number,** add the **summed** item to **your collection of claimed items** and **remove** them **both** from the boxes. 

Otherwise, remove the last item from the second box and add it at the last position in the first box. 

You need to **stop** summing items when one of the boxes becomes empty.

If the first loot box becomes empty print:

`First lootbox is empty`

If the second loot box becomes empty print:

`Second lootbox is empty`

In the end you need to determine the quality of your claimed items. 

If the sum of the claimed items is equal to or greater than 100, print:

`Your loot was epic! Value: {sum of claimed items}`

Else print:

`Your loot was poor... Value: {sum of claimed items}`

## Input

- On the **first line**, you will receive the integers representing the **first loot box**, **separated** by a **single space**.
- On the **second line**, you will receive the integers representing the **second loot box, separated** by a **single space**.

## Output

- On the **first** line of output – print which box got empty in the format described above.
- On the **second** line – the quality of your loot in the format described above.

## Constraints

- All of the given numbers will be valid integers in the range [0 ... 100].
- There won't be a case where both loot boxes become empty at the same time.


## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 10 11 8 13 5 6 | Second lootbox is empty | First we sum 10 and 3. We get 13, which is not an even number, so we take the last item from the second box and move it to last position in the first box. The current state of the boxes:  |
| 0 4 7 3 6 23 3 | Your loot was poor... Value: 42 | 10 11 8 13 5 6 3 |
|  |  | 0 4 7 3 6 23 |
|  |  | The next sum is 33 so we do the same again. On the third iteration the sum is 16 which is an even number, so we remove both of the boxes and we add the value to our claimed items. We keep summing items until one of the boxes becomes empty. |


| **Input** | **Output** |
| --- | --- |
| 20 40 60 80 100 | First lootbox is empty |
| 10 20 30 40 50 60 | Your loot was epic! Value: 500 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 11 8 13 5 6
0 4 7 3 6 23 3
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 42
[/output]
[/test]
[test open]
[input]
20 40 60 80 100
10 20 30 40 50 60
[/input]
[output]
First lootbox is empty
Your loot was epic! Value: 500
[/output]
[/test]
[test]
[input]
2 2 2 2
2 2 2
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 12
[/output]
[/test]
[test]
[input]
50 50 50
50 50
[/input]
[output]
Second lootbox is empty
Your loot was epic! Value: 200
[/output]
[/test]
[test]
[input]
2 2 2
2 2 2 2
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 12
[/output]
[/test]
[test]
[input]
50 50
50 50 50
[/input]
[output]
First lootbox is empty
Your loot was epic! Value: 200
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9
1 2 3
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 12
[/output]
[/test]
[test]
[input]
3 3 3 3
2 2
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[test]
[input]
2 2
3 3 3 3
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[test]
[input]
0 0
10 0 0 0
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[test]
[input]
-10 10 -10 10
-10 10 -10 10 10
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 20
[/output]
[/test]
[test]
[input]
-3
1 2 3
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]