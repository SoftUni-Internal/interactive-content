[slide hideTitle]
# Problem: Valid Usernames
[code-task title="Valid Usernames" taskId="python-fundamentals-text-processing-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
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
| | John45 |
| | peter-white |

[/task-description]
[code-io /]
[tests]
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
Jeff, John45, ab, cd, peter-ivanov, @smith
[/input]
[output]
Jeff
John45
peter-ivanov
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