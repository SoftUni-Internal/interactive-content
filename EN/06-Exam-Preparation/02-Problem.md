[slide hideTitle]
# Problem: Re-Volt
[code-task title="Re-Volt" taskId="9d5cd2f5-aa55-4917-ae5e-27a314f2c4e7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will be given an integer N for the size of the square matrix and then an integer for the count of commands.

On the next **n** lines, you will receive the rows of the matrix.

The player starts at a random position (the player is marked with **"f"**)and **all of the empty slots** will be filled with **"+"** (plus).

The goal is to reach the finish mark which will be marked with **"F"**.

On the field there can also be bonuses and traps.

Bonuses are marked with **"B"** and traps are marked with **"T"**.

Each turn you will be given commands for **the player's movement**. 

If the player **goes out** of the matrix, he comes in from **the other side**. 

For example, if the player is on 0, 0 and the next command is left, he goes to the last spot on the first row.

If the player steps on a **bonus**, he should move another step forward in the direction he is going. 

If the player steps on a **trap**, he should move a step backward.

When the player reaches the **finish mark** or the **count of commands is reached**, the game ends.

## Input

- On the first line, you are given the integer N – the size of the square matrix.
- On the second you are given the count of commands.
- The next N lines hold the values for every row.
- On each of the next lines, you will get commands for movement directions.

## Output

- If the player reaches the finish mark, print:
  - `Player won!`
- If the player reaches the commands count and hasn't reached the finish mark print:
  - `Player lost!`

- At the end print the matrix.

## Constraints

- The size of the matrix will be between [2 ... 20].
- The players will always be indicated with **"f"**.
- If the player steps on the finish mark **at the same time** as his last command, he **wins** the game.
- Commands will be in the format **up** , **down** , **left** or **right**.
- There won't be a case where you bypass the finish while you are on a trap or a bonus.
- A trap will never place you into a bonus or another trap and a bonus will never place you into a trap or another bonus.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 5 | Player won! | The first command is down so f moves down.  |
| 5 | +++++ | On turn 1, the player steps on a bonus and does an additional step.  |
| +++++ | +++++ | On turn 2, the player steps on a trap and goes a step back. After each turn the field is: |
| +f+++ | +B+++ |   1      2      3    |
| +B+++ | \++T\++ | +++++  +++++  +++++ |
| \++T\++ | +f+++ | +++++  +++++  +++++ |
| +F+++ |  | +B+++  +B+++  +B+++ |
| down |  | +fT++  +fT++  \++T\++ |
| right |  | +F+++  +F+++  +f+++ |
| down |  | On turn 3 f reaches the finish 'F' and wins the game. |


| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 4 | Player lost! | The first command is up so f moves up and the new player position is (0,1).  |
| 3 | ++++ | The next command is up again, so the player goes out of the matrix and comes back from the other side at (3,1).  |
| ++++ | +++B | Then the command is left, so the end position is (3,0) which is not the finish mark, so the player has lost. |
| +f+B | ++T+ |  |
| ++T+ | f++F |  |
| +++F |  |  |
| up |  |  |
| up |  |  |
| left |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
5
+++++
+f+++
+B+++
\++T\++
+F+++
down
right
down
[/input]
[output]
Player won!
+++++
+++++
+B+++
\++T\++
+f+++
[/output]
[/test]
[test open]
[input]
4
3
++++
+f+B
++T+
+++F
up
up
left
[/input]
[output]
Player lost!
++++
+++B
\++T+
f\++F
[/output]
[/test]
[test open]
[input]
5
5
+++++
Bf+++
+++++
+++++
++++F
left
up
up
[/input]
[output]
Player won!
+++++
B++++
+++++
+++++
++++f
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
up
[/input]
[output]
Player lost!
+f+
+++
++F
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
down
[/input]
[output]
Player lost!
+++
+++
+fF
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
left
[/input]
[output]
Player lost!
+++
f++
++F
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
right
[/input]
[output]
Player lost!
+++
++f
++F
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
up
up
[/input]
[output]
Player lost!
+++
+++
+fF
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
down
down
[/input]
[output]
Player lost!
+f+
+++
++F
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
right
right
[/input]
[output]
Player lost!
+++
f++
++F
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
left
left
[/input]
[output]
Player lost!
+++
++f
++F
[/output]
[/test]
[test]
[input]
3
2
+++
Bf+
++F
left
down
[/input]
[output]
Player won!
+++
B++
++f
[/output]
[/test]
[test]
[input]
3
2
+++
Tf+
+F+
left
down
[/input]
[output]
Player won!
+++
T++
+f+
[/output]
[/test]
[test]
[input]
3
2
+++
BfF
+++
left
[/input]
[output]
Player won!
+++
B+f
+++
[/output]
[/test]
[/tests]
[/code-task]
[/slide]