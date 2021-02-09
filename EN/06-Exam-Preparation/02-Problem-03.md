# Archery Tournament BG

[slide hideTitle]

# Archery BG var

[code-task title="Archery Tournament BG" taskId="Archery-Tournament-BG" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=javascript-code]
```

```
[/code-editor]
[task-description]
## Description

Our hero Iskren is going to take part in an archery tournament. Your task is to help him calculate his points.
On the first line you will receive integers separated by "|", representing the targets in the archery field.
On the next lines until you receive "Game over" command, you will receive commands by the Judge of the tournament:
- "Shoot Left@{start index}@{length}":
  * Iskren starts traversing the archery field to the left from {start index} with given {length}. 
  * If he goes out of the field, he will continue from the end of the field.
- "Shoot Right@{start index}@{length}":
  * Iskren starts traversing the archery field to the right from {start index} with given {length}.
  * If he goes out of the field, he will continue from the start of the field.
- "Reverse":
Reverse the archery field.
- "Game Over"
Print the archery field and collected points.
When he arrives at the target, he will shoot at it and increase his points by 5 and decrease the target by 5 points, if the target points are less than 5, he takes all of them and decreases it to 0. If the start index is out of range of the field Iskren will have to ignore the command.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10\|10\|10\|10\|10
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@6@5
Reverse
Game over
[/input]
[output]
5 - 5 - 10 - 10 - 10
Iskren finished the archery tournament with 10 points!
[/output]
[/test]
[test open]
[input]
20\|30\|40\|50\|60
Shoot Left@0@12
Shoot Right@4@15
Shoot Left@6@5
Reverse
Game over
[/input]
[output]
55 - 45 - 40 - 30 - 20
Iskren finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
1\|1\|1\|1\|1
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@6@5
Reverse
Game over
[/input]
[output]
0 - 0 - 1 - 1 - 1
Iskren finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
1\|1\|1\|1\|1
Shoot Left@0@2
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@6@5
Reverse
Game over
[/input]
[output]
0 - 0 - 1 - 1 - 1
Iskren finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
1\|1\|1\|1\|1
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@4@5
Shoot Right@6@5
Reverse
Game over
[/input]
[output]
0 - 0 - 1 - 1 - 1
Iskren finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
10\|10\|10\|10\|10
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@-6@5
Reverse
Game over
[/input]
[output]
5 - 5 - 10 - 10 - 10
Iskren finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
10\|10\|10\|10\|10
Shoot Left@3@0
Shoot Right@4@0
Shoot Right@-6@5
Reverse
Game over
[/input]
[output]
5 - 5 - 10 - 10 - 10
Iskren finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
3\|1243\|6\|3\|2
Shoot Right@0@2
Shoot Right@5@5
Shoot Right@9@5
Game over
[/input]
[output]
3 - 1243 - 1 - 3 - 2
Iskren finished the archery tournament with 5 points!
[/output]
[/test]
[test]
[input]
3\|13\|6\|3\|2\|34\|5\|123\|576
Shoot Left@6@3
Reverse
Shoot Right@5@7
Shoot Left@2@8
Game over
[/input]
[output]
576 - 123 - 5 - 24 - 2 - 0 - 6 - 13 - 3
Iskren finished the archery tournament with 13 points!
[/output]
[/test]
[test]
[input]
34\|5\|123\|576
Reverse
Shoot Left@6@3
Reverse
Shoot Left@5@0
Reverse
Shoot Left@2@1
Reverse
Game over
[/input]
[output]
34 - 5 - 118 - 576
Iskren finished the archery tournament with 5 points!
[/output]
[/test]
[test]
[input]
34\|5\|123\|576
Reverse
Reverse
Reverse
Reverse
Game over
[/input]
[output]
34 - 5 - 123 - 576
Iskren finished the archery tournament with 0 points!
[/output]
[/test]
[test]
[input]
34\|5\|123\|576
Game over
[/input]
[output]
34 - 5 - 123 - 576
Iskren finished the archery tournament with 0 points!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]