
[slide hideTitle]
# National Court
[code-task title="National Court" taskId="java-fund-18-Exam-Preparation-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
There are **3 employees working** at the reception of the National Court all day long.

Each of them can serve a **different number of people per hour**.

Your task is to **calculate how much time it will take to answer all the questions** of a given number of people.

First, you will receive **3 lines with integers**, representing the **count of people that each of the employees can help per hour**. 

On the **next line**, you will receive **the total count of people** as a single integer. 

**Every fourth hour all the employees have a one-hour break** before they start working again. 

**Calculate the time needed to answer all people's questions** and **print it in the following format**: "Time needed: \{time\}h."

### Input / Constraints
- On the first 3 lines, you will receive each employee's **efficiency** as an **integer**
- On the 4th line - the  **count** of people as an **integer**

### Output
- Print a **single line**: 
    - "Time needed: \{time\}h."

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | Time needed: 2h. |
| 6 | |
| 4 | |
| 20 | |

### Comment
- All employees can answer 15 people per hour
- After the first hour, there are 5 people left to be answered
- All the people would have been helped on the second hour

### Example
| **Input** | **Output** |
| --- | --- |
| 1 | Time needed: 10h. |
| 2 | |
| 3 | |
|45 | |

### Comment
- The employees can answer 6 people per hour 
- In the first 3 hours they have answered 6 \* 3 = 18 people
- Then they have a break for an hour
- After the next 3 hours there are 18 + 6 \* 3 = 36 answered people 
- After the one-hour break, there are only 9 people to answer
- On the 10th hour all of the people's questions would have been answered

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | Time needed: 5h. |
| 2 | |
| 5 | |
| 40 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
6
4
20
[/input]
[output]
Time needed: 2h.
[/output]
[/test]
[test open]
[input]
1
2
3
45
[/input]
[output]
Time needed: 10h.
[/output]
[/test]
[test open]
[input]
3
2
5
40
[/input]
[output]
Time needed: 5h.
[/output]
[/test]
[test]
[input]
1
2
3
45
[/input]
[output]
Time needed: 10h.
[/output]
[/test]
[test]
[input]
1
2
3
100
[/input]
[output]
Time needed: 22h.
[/output]
[/test]
[test]
[input]
20
40
40
900
[/input]
[output]
Time needed: 11h.
[/output]
[/test]
[test]
[input]
3
2
5
40
[/input]
[output]
Time needed: 5h.
[/output]
[/test]
[test]
[input]
1
1
1
4519
[/input]
[output]
Time needed: 2009h.
[/output]
[/test]
[test]
[input]
1
1
1
30
[/input]
[output]
Time needed: 13h.
[/output]
[/test]
[test]
[input]
2
4
4
70
[/input]
[output]
Time needed: 9h.
[/output]
[/test]
[test]
[input]
2
4
4
500
[/input]
[output]
Time needed: 66h.
[/output]
[/test]
[test]
[input]
3
3
3
27
[/input]
[output]
Time needed: 3h.
[/output]
[/test]
[test]
[input]
3
3
3
0
[/input]
[output]
Time needed: 0h.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
