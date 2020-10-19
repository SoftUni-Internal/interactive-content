[slide hideTitle]
# Problem: Poisonous Plants
[code-task title="Poisonous Plants" taskId="6ab9ac86-35f0-40ba-828e-48272be42cca" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given  **N**  plants in a garden.

Each of these plants has been added with some amount of pesticide.

After each day, if any plant has **more pesticide** than the plant at **its left**, being weaker (more GMO) than the left one, **it dies**.

You are given the initial values of the pesticide and position of each plant.

Print the number of days **after** which no plant dies, i.e. the time after which there are no plants with more pesticide content than the plant to their left.

### Input

- The input consists of an integer  **N** representing the number of plants.
- The next **single line** consists of  **N**  integers, where every integer represents the position and amount of pesticides of each plant. 1 ≤ N ≤ 100000
- Pesticides amount on a plant is between 0 and 1000000000

### Output

- Output a single value equal to the number of days after which no plants die.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 7 | 2 | Initially all plants are alive.  |
| 6 5 8 4 7 10 9 |  | Plants = {(6, 1), (5, 2), (8, 3), (4, 4), (7, 5), (10, 6), (9, 7)}  |
|  |  | Plants[k] = (i, j) => jth plant has pesticide amount = i.  |
|  |  | After the 1st day, 4 plants remain as plants 3, 5, and 6 die.  |
|  |  | Plants = {(6, 1), (5, 2), (4, 4), (9, 7)}  |
|  |  | After the 2nd day, 3 plants survive as plant 7 dies. Plants = {(6, 1), (5, 2), (4, 4)}  |
|  |  | After the 3rd day, 3 plants survive and no more plants die.  |
|  |  | Plants = {(6, 1), (5, 2), (4, 4)}  |
|  |  | After the 2nd day the plants stop dying.  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
7
6 5 8 4 7 10 9
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
8
6 5 8 4 7 10 9 4
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
7 2 3 9 2
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
12
1 8 2 5 2 6 2 4 90 25 2 666
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
12
12398 382 752 9320 4282 9122 932 7742 91283 7427 128823 887
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
13
2139 8236 8129 92002 88429 1 2 3 32 5 123 5124 712
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
17
2832 42 1 2 45 63 1 2 3 35 12 563441 2 23 6422 421 91
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
20
128 462 582 472 291 284 762 293 865 675 679 200 672 534 123 123 321 431 321 98
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
