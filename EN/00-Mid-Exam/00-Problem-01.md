# Problem 1: Archery Tournament

[slide hideTitle]

# Archery Tournament

[code-task title="Archery Tournament" taskId="js-fundamentals-regular-exam-Archery-Tournament" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function archeryTournament(input) {
   // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Description

You will receive an array of integers separated by a "\|" representing the targets in an archery range.

Until the "**Game over**" command is given, you will be receiving commands:

* Command "**Shoot Left@**\{**start index**\}**@**\{**length**\}":

Peter starts moving in the archery range from the left starting from the "\{**start index**\}" and travels through as many targets as stated in: "\{**length**\}".

He should ignore the command if the "\{**start index**\}" is out of the archery range.

Walk over and continue walking to the left if he has reached the end of the archery range.

* Command "**Shoot Right@**\{**start index**\}**@**\{**length**\}":

Peter starts moving in the archery range from the right starting from the "\{**start index**\}" and travels through as many targets as stated in: "\{**length**\}".

He should ignore the command if the "\{**start index**\}" is out of the archery range.

Walk over and continue walking to the left if he has reached the end of the archery range.

* Command "**Reverse**":

Reverse all targets in the range.

* Command "**Game Over**":

Print the current state of all of the targets in the range

Each time Peter has reached a target:

* He shoots it and gets 5 points, decreasing the target's total point value by 5

* If the target is worth less than 5 points, Peter should take all of its points and decreases the total points of the target to 0

## Input

* You will receive integers separated by а "\|" representing the targets in the archery range

* Until the "**Game over**" command is given you will receive commands in the format described above

## Output

* Print out the state of each target on the field in the following format:

"\{**target**\} - \{**target**\} - \{**target**\} ... - \{**target**\}"

"**Peter finished the archery tournament with** \{**points**\}!"

## Example One

| **Input** | **Output** |
| --- | --- |
|archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2','Shoot Right@4@5','Shoot Right@6@5','Reverse','Game over'])| 5 \- 5 \- 10 \- 10 \- 10|
||Peter finished the archery tournament with 10 points\!|

[hints]
[hint]
First, Peter receives the "**Shoot Left@0@2**" command, so he starts walking in the archery range from "**index 0**" with "**length 2**" and he stops at "**index 3**".

He shoots and the archery filed looks like this: `10 - 10 - 10 - 5 - 10`

At this point he aquires **5** points.
[/hint] 
[hint]
Then he receives "**Shoot Right@4@5**" \-\> `10 - 10 - 10 - 5 - 5`
[/hint] 
[hint]
Shoot "**Right@6@5**" \-\> "**Index 6**" is out of range (does not exist in the range), so Peter ignores the command.
[/hint] 
[hint]
"**Reverse**" \-\> The end result should be: `5 - 5 - 10 - 10 - 10`
[/hint] 
[/hints] 

## Example Two

| **Input** | **Output** |
| --- | --- |
|archeryTournament(['20\|30\|40\|50\|60','Shoot Left@0@12','Shoot Right@4@15','Shoot Left@6@5','Reverse','Game over'])| 55 \- 45 \- 40 \- 30 \- 20|
||Peter finished the archery tournament with 10 points\!|

[hints]
[hint]
Split the first input string by the delimeter (`|`), and save the result in an array.

Map through the elements in the **field** and convert them to `Number`.
[/hint] 
[hint]
Use the appropriate conditional statements to handle each command type.
[/hint] 
[hint]
Print the end result in the proper format, as shown above.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
5 - 5 - 10 - 10 - 10
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test open]
[input]
archeryTournament(['20\|30\|40\|50\|60', 'Shoot Left@0@12', 'Shoot Right@4@15', 'Shoot Left@6@5', 'Reverse', 'Game over'])
[/input]
[output]
55 - 45 - 40 - 30 - 20
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['1\|1\|1\|1\|1', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
0 - 0 - 1 - 1 - 1
Peter finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['1\|1\|1\|1\|1', 'Shoot Left@0@2', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
0 - 0 - 1 - 1 - 1
Peter finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['1\|1\|1\|1\|1', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
0 - 0 - 1 - 1 - 1
Peter finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@-6@5', 'Reverse', 'Game over'])
[/input]
[output]
5 - 5 - 10 - 10 - 10
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@3@0', 'Shoot Right@4@0', 'Shoot Right@-6@5', 'Reverse', 'Game over'])
[/input]
[output]
5 - 5 - 10 - 10 - 10
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['3\|1243\|6\|3\|2', 'Shoot Right@0@2', 'Shoot Right@5@5', 'Shoot Right@9@5', 'Game over'])
[/input]
[output]
3 - 1243 - 1 - 3 - 2
Peter finished the archery tournament with 5 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['3\|13\|6\|3\|2\|34\|5\|123\|576', 'Shoot Left@6@3', 'Reverse', 'Shoot Right@5@7', 'Shoot Left@2@8', 'Game over'])
[/input]
[output]
576 - 123 - 5 - 24 - 2 - 0 - 6 - 13 - 3
Peter finished the archery tournament with 13 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['34\|5\|123\|576', 'Reverse', 'Shoot Left@6@3', 'Reverse', 'Shoot Left@5@0', 'Reverse', 'Shoot Left@2@1', 'Reverse', 'Game over'])
[/input]
[output]
34 - 5 - 118 - 576
Peter finished the archery tournament with 5 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['34\|5\|123\|576', 'Reverse', 'Reverse', 'Reverse', 'Reverse', 'Game over'])
[/input]
[output]
34 - 5 - 123 - 576
Peter finished the archery tournament with 0 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['34\|5\|123\|576', 'Game over'])
[/input]
[output]
34 - 5 - 123 - 576
Peter finished the archery tournament with 0 points!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
