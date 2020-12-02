[slide hideTitle]
# Problem: Cards Game
[code-task title="Cards Game" taskId="java-fund-14-Lists-Exercise-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will be given two hands of cards, which will be **integer numbers**.

Assume that you have **two players**.

You have to **find** out the **winning deck** and respectively the winner.

You start from the beginning of both hands. **Compare** the cards from the first deck to the cards from the second deck. 

The player, **who has the bigger card**, takes both cards and puts them at the back of his hand - the second player’s card is last, and the first person’s card (the winning one) is before it (second to last) and the player with the smaller card must remove the card from his deck. 

If both players’ cards **have the same values** - no one wins, and the two cards must be removed from the decks. 

The **game is over**, when one of the decks is left **without any cards**. 

You have to **print the winner on the console** and **the sum of the left** cards: "\{First/Second\} player wins! Sum: \{sum\}".

### Example
| **Input** | **Output** |
| --- | --- |
| 20 30 40 50  | First player wins! Sum: 240 |
| 10 20 30 40 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
20 30 40 50
10 20 30 40
[/input]
[output]
First player wins! Sum: 240
[/output]
[/test]
[test]
[input]
10 20 30 40 50
50 40 30 30 10
[/input]
[output]
Second player wins! Sum: 50
[/output]
[/test]
[test]
[input]
42 83 37 84 75 47 99
54 3 20 48 91 25 88
[/input]
[output]
First player wins! Sum: 796
[/output]
[/test]
[test]
[input]
21 19 59 47 99 92 87 19 50 34
14 10 20 51 71 77 82 13 54 50
[/input]
[output]
First player wins! Sum: 969
[/output]
[/test]
[test]
[input]
200 157 300
100 200 300
[/input]
[output]
Second player wins! Sum: 257
[/output]
[/test]
[test]
[input]
70 92 27 70 56 28 73 10
53 47 97 89 7 37 18 52
[/input]
[output]
Second player wins! Sum: 826
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
