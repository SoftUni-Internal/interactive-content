# Problem: Student Academy

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822735" default /]
[stream language="RO" videoId="435756044"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Student Academy
[code-task title="Student Academy" taskId="b8d51fcb-c61c-49b4-94f3-baf33a98e9e9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which keeps information about students and their grades.

You will receive **n pair of rows**. 

First you will receive the **student's name**, after that you will receive his/her **grade**. 

Check if the **student already exists**, and if **not**, **add** him/her. 

Keep track of **all grades for each student**.

When you finish reading data, keep the students with average grade **higher or equal to 4.50**. 

Order filtered students by average grade in **descending**.

**Print the students and their average grade** in format:
- "\{name\} –> \{averageGrade\}"

**Format** the average grade to the **second decimal** place.

### Examples
| **Input** | **Output** |
| --- | --- |
| 5 | John -> 5.00 | 
| John | George -> 5.00 |
| 5.5 | Alice -> 4.50 |
| John | | 
| 4.5 | |
| Alice | |
| 6 | | 
| Alice | |
| 3 | |
| George | | 
| 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
John
5.5
John
4.5
Alice
6
Alice
3
George
5
[/input]
[output]
John -> 5.00
George -> 5.00
Alice -> 4.50
[/output]
[/test]
[test]
[input]
5
Amanda
3.5
Amanda
4
Rob
5.5
Christian
5
Robert
6
[/input]
[output]
Robert -> 6.00
Rob -> 5.50
Christian -> 5.00
[/output]
[/test]
[test]
[input]
5
Gosho
6
Ivan
5.89
Stoyan
5.74
Mitko
5.10
Vasil
4.50
[/input]
[output]
Gosho -> 6.00
Ivan -> 5.89
Stoyan -> 5.74
Mitko -> 5.10
Vasil -> 4.50
[/output]
[/test]
[test]
[input]
3
Elly
5.84
Doni
5.50
Ketty
4.89
[/input]
[output]
Elly -> 5.84
Doni -> 5.50
Ketty -> 4.89
[/output]
[/test]
[test]
[input]
7
Elly
5.00
Doni
5.40
Ketty
5.20
Elly
6.00
Ketty
5.00
Sissy
4.98
Doni
5.50
[/input]
[output]
Elly -> 5.50
Doni -> 5.45
Ketty -> 5.10
Sissy -> 4.98
[/output]
[/test]
[test]
[input]
7
Elly
5.00
Doni
5.20
Ketty
5.20
Sissy
4.50
Doni
5.50
Ketty
4.90
Elly
6.00
[/input]
[output]
Elly -> 5.50
Doni -> 5.35
Ketty -> 5.05
Sissy -> 4.50
[/output]
[/test]
[test]
[input]
9
Mitko
3.80
Ivan
4.20
Siso
4.80
Misho
5.23
Ivan
5.46
Mitko
5.20
Dido
4.85
Damyan
4.99
Misho
5.89
[/input]
[output]
Misho -> 5.56
Damyan -> 4.99
Dido -> 4.85
Ivan -> 4.83
Siso -> 4.80
Mitko -> 4.50
[/output]
[/test]
[test]
[input]
9
Kelly
3.80
Ivan
5.82
Lilly
4.20
John
5.23
Kelly
5.46
Peter
5.20
Nick
4.77
Lilly
4.99
Simon
5.67
[/input]
[output]
Ivan -> 5.82
Simon -> 5.67
John -> 5.23
Peter -> 5.20
Nick -> 4.77
Kelly -> 4.63
Lilly -> 4.60
[/output]
[/test]
[test]
[input]
9
Kelly
2.89
Ivan
4.26
Lilly
4.20
John
6.00
Kelly
5.46
Peter
5.64
Nick
4.88
Lilly
5.24
Simon
4.22
[/input]
[output]
John -> 6.00
Peter -> 5.64
Nick -> 4.88
Lilly -> 4.72
[/output]
[/test]
[test]
[input]
5
Slavi
5.50
Mimmy
3.94
Mitko
4.26
Mimmy
3.24
Mitko
5.08
[/input]
[output]
Slavi -> 5.50
Mitko -> 4.67
[/output]
[/test]
[/tests]
[/code-task]
[/slide]