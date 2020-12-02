# Problem: Valid Usernames

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421823458" default /]
[stream language="RO" videoId="436016525"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Valid Usernames
[code-task title="Valid Usernames" taskId="9ed965a2-c892-454a-985c-88e8f9b2ff7a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads user names on a single line (joined by ", ") and **prints all valid usernames**.

A **valid username** is:
- Has **length between 3 and 16 characters**
- Contains **only letters, numbers, hyphens and underscores**
- Has **no redundant symbols** before, after or in between.

### Example
| **Input** | **Output** |
| --- | --- |
| Jeff, john45, ab, cd, peter-white, @smith | Jeff | 
| | john45 |
| | peter-white |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Jeff, john45, ab, cd, peter-white, @smith
[/input]
[output]
Jeff
john45
peter-white
[/output]
[/test]
[test]
[input]
sh, too_long_username, !lleg@l ch@rs, jeffbutt
[/input]
[output]
jeffbutt
[/output]
[/test]
[test]
[input]
ador@ed, babo_on, bog-art, boo@@@th, %bul$ocks,    burgoo
[/input]
[output]
babo_on
bog-art
[/output]
[/test]
[test]
[input]
cheesey, chix, clastic, clearwater, cofactor, collection
[/input]
[output]
cheesey
chix
clastic
clearwater
cofactor
collection
[/output]
[/test]
[test]
[input]
chee\@sey, \$chix\$,   clastic, clear-water, cof actor, collection
[/input]
[output]
clear-water
collection
[/output]
[/test]
[test]
[input]
produce, gather, low-ther, energy_power, #adored,   dashboard  , registered , fish, stylish
[/input]
[output]
produce
gather
low-ther
energy_power
fish
stylish
[/output]
[/test]
[test]
[input]
le, tod@gers, log_in, infant, fancy-smile,  , bogart, as
[/input]
[output]
log_in
infant
fancy-smile
bogart
[/output]
[/test]
[/tests]
[/code-task]
[/slide]