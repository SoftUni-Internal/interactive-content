[slide hideTitle]
# Problem: A Miner Task
[code-task title="A Miner Task" taskId="6275489d-9eb4-43ca-850a-1c055cb6377f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a **sequence of strings**, each on a new line until the command "stop".

Every **odd line** on the console is representing a **resource** (e.g. Gold, Silver, Copper, and so on).

And every even - **quantity**. 

Your task is to collect the resources and print them each on a new line.

**Print** the resources and their quantities in **format**: 

\{resource\} -> \{quantity\}

### Example
| **Input** | **Output** |
| --- | --- |
| Gold | Gold -> 155 | 
| 155 | Silver -> 10 |
| Silver | Gold -> 17 |
| 10 | | 
| Copper | |
| 17 | |
| stop | |

### Example
| **Input** | **Output** |
| --- | --- |
| gold | Gold -> 170 | 
| 155 | Silver -> 10 |
| silver | Gold -> 17 |
| 10 | | 
| copper | |
| 17 | |
| gold | |
| 15 | |
| stop | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Gold
155
Silver
10
Copper
17
stop
[/input]
[output]
Gold -> 155
Silver -> 10
Copper -> 17
[/output]
[/test]
[test open]
[input]
gold
155
silver
10
copper
17
gold
15
stop
[/input]
[output]
gold -> 170
silver -> 10
copper -> 17
[/output]
[/test]
[test]
[input]
Silver
1234
Gold
155
Copper
113417
Silver
10351
Copper
17134
Gold
155325
stop
[/input]
[output]
Silver -> 11585
Gold -> 155480
Copper -> 130551
[/output]
[/test]
[test]
[input]
Silver
1234
gold
155
Copper
113417
Silver
10351
copper
17134
Gold
155325
stop
[/input]
[output]
Silver -> 11585
gold -> 155
Copper -> 113417
copper -> 17134
Gold -> 155325
[/output]
[/test]
[test]
[input]
Silver
1268
Gold
16846
Platinium
1683
Cork
1843
Cork
9864
Platinium
14558
stop
[/input]
[output]
Silver -> 1268
Gold -> 16846
Platinium -> 16241
Cork -> 11707
[/output]
[/test]
[test]
[input]
Silver
126358
Gold
123123
Wood
1231231
Cork
18143
Wood
986324
Platinium
14558
stop
[/input]
[output]
Silver -> 126358
Gold -> 123123
Wood -> 2217555
Cork -> 18143
Platinium -> 14558
[/output]
[/test]
[test]
[input]
Wood
73675
Gold
5438
Cork
12331
Cork
1432
Wood
67436
Platinium
36756
stop
[/input]
[output]
Wood -> 141111
Gold -> 5438
Cork -> 13763
Platinium -> 36756
[/output]
[/test]
[/tests]
[/code-task]
[/slide]