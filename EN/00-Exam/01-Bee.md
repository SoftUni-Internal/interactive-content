[slide hideTitle]
# Problem: Bee
[code-task title="Bee" taskId="java-advanced-exam-Bee" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

You will be given an integer **n** for the **size** of the bee territory. The territory has a **squared** shape. 

On the next **n** lines, you will receive the **rows** of the territory. 

The bee will be placed on a **random position**, marked with the letter **'B'**. 

On random positions there will be flowers, marked with the letter **'f'**. 

There may also be а **bonus** on the territory. 

There will always be only one bonus. 

It will be **marked** with the **letter** - **'O'**. 

**All of the empty positions** will be marked with '.'. 

Each turn, you will be given a **command** for the **movement of the bee**. 

The commands will be: **"up"**, **"down"**, **"left"**, **"right"**, **"End"**. 

If the bee **moves** to a **flower**, it pollinates the flower and increases the pollinated flowers with one. 

If it goes to a **bonus**, the bee gets a bonus one move forward and then the bonus **disappears**. 

If the bee **goes out** she can't return back and the program ends. If the bee receive **"End"** command the program ends. 

The bee needs **at least 5 pollinated flowers**. 

## Input

- On the first line, you are given the integer **n** – the size of the **square** matrix. 

- The **next n lines** holds the values for every **row**. 

- On each of the next lines until you receive **"End"** command,  you will receive a move command. 

## Output

- On the first line:
  - If the bee goes out of its territory print: **"The bee got lost!"**
- On the second line:
  - If the bee couldn’t pollinate enough flowers print: **"The bee couldn't pollinate the flowers, she needed** \{**needed**\} **flowers more"**
  - If the bee successfully pollinated enough flowers print: **"Great job, the bee manage to pollinate** \{**polinationed flowers**\} **flowers!"**
- In the end print the matrix.

## Constraints

- The size of the **square** matrix will be between \[2…10\]. 

- There will **always** be **0** or **1** bonus, marked with - **'O'**. 

- The bee position will be marked with **'B'**. 

- There won't be a case where a bonus moves the bee out of its territory. 

## Examples

|Input|Output|
|-----|------|
|5|The bee got lost!|
|Bff..|Great job, the bee manage to pollinate 6 flowers!|
|..O..|.....|
|f.f.f|.....|
|.....|....f|
|fffff|.....|
|right|..fff|
|right||
|down||
|left||
|left||
|down||
|down||
|right||
|down||

## Comment

|1) right|2) right|3) down|5) left|
|---|---|---|---|
|.Bf..|..B..|.....|.....|
|..O..|..O..|.....|.....|
|f.f.f|f.f.f|f.B.f|fB..f|
|.....|.....|.....|.....|
|fffff|fffff|fffff|fffff|


- pollinate a flower: 'f' (0, 1) 

- step on a bonus: 'O' (1, 2) and make one more step down to: 'f' (2, 2) 

- the bee is on (4, 1), the next command she receive is down and she goes out of the field and the program ends. 

|Input|Output|
|---|---|
|4|The bee couldn't pollinate the flowers, she needed 2 flowers more|
|....|.B..|
|.O..|....|
|ff..|....|
|f.B.|....|
|left||
|left||
|up||
|right||
|up||
|End||
[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
Bff..
..O..
f.f.f
.....
fffff
right
right
down
left
left
down
down
right
down
[/input]
[output]
The bee got lost!
Great job, the bee manage to pollinate 6 flowers!
.....
.....
....f
.....
..fff
[/output]
[/test]
[test open]
[input]
4
....
.O..
ff..
f.B.
left
left
up
right
up
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 2 flowers more
.B..
....
....
....
[/output]
[/test]
[test]
[input]
4
....
BOff
..ff
ffff
right
right
down
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 2 flowers more
....
....
..fB
ffff
[/output]
[/test]
[test]
[input]
3
B..
fff
...
right
right
down
down
left
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 4 flowers more
...
ff.
.B.
[/output]
[/test]
[test]
[input]
4
....
Bfff
.Off
....
right
right
right
down
left
left
End
[/input]
[output]
Great job, the bee manage to pollinate 5 flowers!
....
....
B...
....
[/output]
[/test]
[test]
[input]
3
B..
...
...
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 5 flowers more
B..
...
...
[/output]
[/test]
[test]
[input]
3
...
fff
..B
right
[/input]
[output]
The bee got lost!
The bee couldn't pollinate the flowers, she needed 5 flowers more
...
fff
...
[/output]
[/test]
[test]
[input]
4
Bfff
.O..
....
ffff
right
right
down
left
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 3 flowers more
...f
B...
....
ffff
[/output]
[/test]
[test]
[input]
2
..
B.
left
[/input]
[output]
The bee got lost!
The bee couldn't pollinate the flowers, she needed 5 flowers more
..
..
[/output]
[/test]
[test]
[input]
3
B..
fff
fff
down
down
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 3 flowers more
...
.ff
Bff
[/output]
[/test]
[test]
[input]
4
BOff
ffff
..ff
ffff
right
right
down
down
left
down
left
left
End
[/input]
[output]
Great job, the bee manage to pollinate 8 flowers!
....
fff.
....
B..f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
