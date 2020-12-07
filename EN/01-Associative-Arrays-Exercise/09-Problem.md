[slide hideTitle]
# Problem: SoftUni Exam Results
[code-task title="SoftUni Exam Results" taskId="f79c1e2b-c5aa-4d45-9d52-41c73c3db591" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You should collect all the submissions and print the final results and statistics about each language that the participants submitted their solutions in.

You will be receiving lines in the following format: "\{username\}-\{language\}-\{points\}" until you receive "exam finished". 

You should store each **username** and his **submissions and points**. 

You can receive a command to ban a user for **cheating** in the following format: "\{username\}-banned". 

In that case, you should remove the user from the contest, but preserve his submissions in the total count of submissions for each language.

After receiving "exam finished", **print** each of the participants, ordered **descending** by their **max** **points**, then by **username**, in the following **format**:

Results:
\{username\} \| \{points\}
…

After that print each language, used in the exam, ordered **descending** by total **submission count** and **then** by language **name**, in the following format:

Submissions:
\{language\} - \{submissionsCount\}
…

## Input / Constraints
Until you receive "exam finished", you will be receiving participant submissions in the following format: "\{username\}-\{language\}-\{points\}"
You can receive a ban command -> "\{username\}-banned"
The points of the participant will always be a valid integer in the range \[0-100\]

## Output
- Print the exam results for each participant, ordered descending by max points and then by username, in the following format:

Results:
\{username\} \| \{points\}
…
- After that print each language, ordered descending by total submissions and then by language name, in the following format:

Submissions:
\{language\} - \{submissionsCount\}
…


### Examples
| **Input** | **Output** |
| --- | --- |
| Peter-Java-91 | Results: |
| George-C#-84 | Peter \| 91 |
| Mike-Java-90 | George \| 84 |
| Mike-C#-50 | Submissions: |
| Mike-banned | C# - 2 |
| exam finished | Java - 2 |

### Comments
Mike is banned so he is removed from the contest, but his submissions are still preserved in the submissions count. 

So although there are only 2 participants in the results, there are 4 submissions in total.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Peter-Java-91
George-C#-84
Mike-Java-90
Mike-C#-50
Mike-banned
exam finished
[/input]
[output]
Results:
Peter | 91
George | 84
Submissions:
C# - 2
Java - 2
[/output]
[/test]
[test]
[input]
Pesho-Java-91
Gosho-C#-84
Kiro-JavaScript-90
Kiro-C#-50
Kiro-banned
exam finished
[/input]
[output]
Results:
Pesho | 91
Gosho | 84
Submissions:
C# - 2
Java - 1
JavaScript - 1
[/output]
[/test]
[test]
[input]
a-j-10
exam finished
[/input]
[output]
Results:
a | 10
Submissions:
j - 1
[/output]
[/test]
[test]
[input]
a-j-10
b-k-50
exam finished
[/input]
[output]
Results:
b | 50
a | 10
Submissions:
j - 1
k - 1
[/output]
[/test]
[test]
[input]
a-j-10
a-j-20
a-j-40
a-j-30
exam finished
[/input]
[output]
Results:
a | 40
Submissions:
j - 4
[/output]
[/test]
[test]
[input]
aa-b-40
aa-b-30
aa-b-20
aa-b-10
exam finished
[/input]
[output]
Results:
aa | 40
Submissions:
b - 4
[/output]
[/test]
[test]
[input]
aa-b-40
bb-b-30
cc-b-20
dd-b-10
exam finished
[/input]
[output]
Results:
aa | 40
bb | 30
cc | 20
dd | 10
Submissions:
b - 4
[/output]
[/test]
[test]
[input]
a-j-10
b-j-10
c-j-10
d-j-10
exam finished
[/input]
[output]
Results:
a | 10
b | 10
c | 10
d | 10
Submissions:
j - 4
[/output]
[/test]
[test]
[input]
a-b-10
b-b-20
c-a-30
d-a-40
exam finished
[/input]
[output]
Results:
d | 40
c | 30
b | 20
a | 10
Submissions:
a - 2
b - 2
[/output]
[/test]
[test]
[input]
a-b-10
b-b-20
c-a-30
d-a-40
d-banned
exam finished
[/input]
[output]
Results:
c | 30
b | 20
a | 10
Submissions:
a - 2
b - 2
[/output]
[/test]
[test]
[input]
a-b-10
b-a-20
c-a-30
c-banned
exam finished
[/input]
[output]
Results:
b | 20
a | 10
Submissions:
a - 2
b - 1
[/output]
[/test]
[test]
[input]
e-b-90
f-b-90
g-b-90
h-b-90
a-a-90
b-a-90
c-a-90
d-a-90
e-b-100
f-b-100
g-b-100
h-b-100
a-a-100
b-a-100
c-a-100
d-a-100
d-banned
exam finished
[/input]
[output]
Results:
a | 100
b | 100
c | 100
e | 100
f | 100
g | 100
h | 100
Submissions:
a - 8
b - 8
[/output]
[/test]
[/tests]
[/code-task]
[/slide]