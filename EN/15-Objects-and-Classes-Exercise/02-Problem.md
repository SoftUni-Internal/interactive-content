# Problem: Opinion Poll

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821499" default /]
[stream language="RO" videoId="433935894"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Opinion Poll
[code-task title="Opinion Poll" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Using the **Person class**, write a program that reads from the console **N lines of personal information** and then **prints all people** whose **age is more than 30 years** in the following **format**:

\{name\} - \{age\}

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | John - 31 | 
| Peter 12 | Steven - 48 |
| John 31 | |
| Steven 48 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | Nick - 33 | 
| Nick 33 | John - 88 |
| John 88 | Leo - 44 |
| George 22 | |
| Leo 44 | |
| Peter 11 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Peter 12
John 31
Steven 48
[/input]
[output]
John - 31
Steven - 48
[/output]
[/test]
[test]
[input]
5
Nikolai 33
Yordan 88
Tosho 22
Lyubo 44
Stanislav 11

[/input]
[output]
Nikolai - 33
Yordan - 88
Lyubo - 44

[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
Dencho 31
Encho 99
Mincho 32
Noncho 123
Oncho 100
Pesho 321534
Suzi 3213
Zuzi 32131
[/input]
[output]
A - 40
B - 43
C - 54
Dencho - 31
Encho - 99
Mincho - 32
Noncho - 123
Oncho - 100
Pesho - 321534
Suzi - 3213
Zuzi - 32131

[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
Dencho 1
Encho 99
Mincho 32
Noncho 123
Oncho 100
Pesho 0
Suzi 12
Zuzi 32131
[/input]
[output]
A - 40
B - 43
C - 54
Encho - 99
Mincho - 32
Noncho - 123
Oncho - 100
Zuzi - 32131
[/output]
[/test]
[test]
[input]
4
A 10
B 11
C 12
D 13
[/input]
[output]

[/output]
[/test]
[test]
[input]
13
A 31
W 45
B 76
C 87
D 453
E 645
Z 55
K 53
I 43
J 543
P 67
H 76
F 88
[/input]
[output]
A - 31
W - 45
B - 76
C - 87
D - 453
E - 645
Z - 55
K - 53
I - 43
J - 543
P - 67
H - 76
F - 88
[/output]
[/test]
[test]
[input]
13
Astor 45
Asto 31
Borko 76
Ceco 87
Dido 453
Encho 645
Focker 11
Haplio 76
Ivo 12
Julien 0
Kodkoslav 30
Pencho 67
Zoro 55
[/input]
[output]
Astor - 45
Asto - 31
Borko - 76
Ceco - 87
Dido - 453
Encho - 645
Haplio - 76
Pencho - 67
Zoro - 55
[/output]
[/test]
[test]
[input]
4
Ann 31
Anntoanette 39
An 33
Annie 31
[/input]
[output]
Ann - 31
Anntoanette - 39
An - 33
Annie - 31
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
