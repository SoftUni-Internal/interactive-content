# Problem 1: Archery Tournament

[slide]
# Description

Peter the archer is going to participate in a tournament.

Your task is to help him calculate his points.

On the first line you will receive an array of integers separated by `|`, representing the targets in an archery range.

On the next lines until you receive the Game over command, you have to process commands issued by the Judge of the tournament:

* Command `Shoot Left@{start index}@{length}`:

Peter starts moving in the archery range to the left starting from `{start index}` and traveling through as many targets as stated in: `{length}`.

He cannot go out of the archery range, so if he reaches its beginning, he should walk over to its end and continue walking to the left from there.

* Command `Shoot Right@{start index}@{length}`:

Peter starts moving in the archery range to the right from `{start index}` going through `{length}` number of targets.

If the length he has to walk through goes beyond the end of the archery range, he has to walk over to its beginning and continue walking from there.

* Command `Reverse`:

Reverse all targets in the range

* Command `Game Over`:

Print the current state of all targets in the range

Each time Peter reaches a target:

* He will shoot at it and get 5 points, decreasing the target's total point value by 5.

* If the target is worth less than 5 points Peter takes all of its points and decreases the total points of the target to 0.

If the start index, specified in any command is out of range to begin with, Peter will have to ignore this command.

## Input

* On the first line, you will receive integers separated by `|` representing the targets in the archery range.

* On the next lines, until the `Game over` command is given you will receive commands in the format described above.

## Output

* Print out the state of each target on the field in the following format: `{target} - {target} - {target} ….. - {target}`.

`Peter finished the archery tournament with {points}!`

[code-task title="Archery Tournament" taskId="js-fundamentals-regular-exam-problem-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples

| **Input** | **Output** |
| --- | --- |
|`['10|10|10|10|10', 'Shoot Left@0@2','Shoot Right@4@5','Shoot Right@6@5','Reverse','Game over']`| 5 \- 5 \- 10 \- 10 \- 10|
||Peter finished the archery tournament with 10 points\!|

## Comments

* First, Peter receives the `Shoot Left@0@2` command, so he starts walking in the archery range from `index 0` with `length 2` and he stops at `index 3`.

He shoots and the archery filed looks like this: `10 - 10 - 10 - 5 – 10`

At this point he aquires 5 points.

* Then he receives `Shoot Right@4@5 -> 10 - 10 - 10 - 5 - 5`

* Shoot `Right@6@5 -> Index 6` is out of range (does not exist in the range), so Peter ignores the command.

* `Reverse` \-\> The end result should be: `5 - 5 - 10 - 10 - 10`

| **Input** | **Output** |
| --- | --- |
|`['20|30|40|50|60','Shoot Left@0@12','Shoot Right@4@15','Shoot Left@6@5','Reverse','Game over']`| 55 \- 45 \- 40 \- 30 \- 20|
||Peter finished the archery tournament with 10 points\!|

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
Peter finished the archery tournament with 10 points!
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
Peter finished the archery tournament with 10 points!
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
Peter finished the archery tournament with 2 points!
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
Peter finished the archery tournament with 2 points!
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
Peter finished the archery tournament with 2 points!
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
Peter finished the archery tournament with 10 points!
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
Peter finished the archery tournament with 10 points!
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
Peter finished the archery tournament with 5 points!
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
Peter finished the archery tournament with 13 points!
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
Peter finished the archery tournament with 5 points!
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
Peter finished the archery tournament with 0 points!
[/output]
[/test]
[test]
[input]
34\|5\|123\|576
Game over
[/input]
[output]
34 - 5 - 123 - 576
Peter finished the archery tournament with 0 points!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]