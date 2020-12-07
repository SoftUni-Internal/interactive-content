# Problem: House Party

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421820479" default /]
[stream language="RO" videoId="432473385"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: House Party
[code-task title="House Party" taskId="java-fund-14-Lists-Exercise-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that keeps track of the guests that are going to a house party.

On the first input line you are going to **receive how many commands** you are going to have.

On the next lines you are going to receive some of the following inputs: 
-	"\{name\} is going!"
-	"\{name\} is not going!"

If you receive the **first** type of input, you have to **add the person if he/she is not in the list**. 

If **he/she is in the list print** on the console: 
- "\{name\} is already in the list!" 

If you receive the second type of input, you have to remove the person if he/she is in the list. 

If not print: 
- "\{name\} is not in the list!"

**At the end print all the guests. Each on a new line.**

### Example
| **Input** | **Output** |
| --- | --- |
| 4 | John is not in the list! |
| Allie is going! | Allie |
| George is going! | |
| John is not going! | |
| George is not going! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Allie is going!
George is going!
John is not going!
George is not going!
[/input]
[output]
John is not in the list!
Allie

[/output]
[/test]
[test]
[input]
5
Tom is going!
Annie is going!
Tom is going!
Garry is going!
Jerry is going!
[/input]
[output]
Tom is already in the list!
Tom
Annie
Garry
Jerry
[/output]
[/test]
[test]
[input]
5
Denny is going!
Annie is going!
Gregory is going!
Jack is going!
Sam is going!
[/input]
[output]
Denny
Annie
Gregory
Jack
Sam
[/output]
[/test]
[test]
[input]
7
Denny is going!
Sofiya is going!
Rosica is going!
Ivica is going!
Kveta is going!
Giosetta is going!
Chip is going!
[/input]
[output]
Denny
Sofiya
Rosica
Ivica
Kveta
Giosetta
Chip
[/output]
[/test]
[test]
[input]
8
Adriana is going!
Posie is going!
Eldon is going!
Posie is going!
Jack is going!
Adriana is going!
Nataly is going!
Jack is going!
[/input]
[output]
Posie is already in the list!
Adriana is already in the list!
Jack is already in the list!
Adriana
Posie
Eldon
Jack
Nataly
[/output]
[/test]
[test]
[input]
5
Adriana is going!
Posie is going!
Eldon is going!
Adriana is not going!
Posie is not going!
[/input]
[output]
Eldon
[/output]
[/test]
[test]
[input]
5
Adriana is not going!
Posie is not going!
Posie is not going!
Jack is not going!
Jack is going!
[/input]
[output]
Adriana is not in the list!
Posie is not in the list!
Posie is not in the list!
Jack is not in the list!
Jack
[/output]
[/test]
[test]
[input]
7
Adriana is going!
Nataly is going!
Posie is not going!
Nataly is going!
Jack is not going!
Nataly is not going!
Jack is going!
[/input]
[output]
Posie is not in the list!
Nataly is already in the list!
Jack is not in the list!
Adriana
Jack
[/output]
[/test]
[test]
[input]
9
Nataly is going!
Nataly is going!
Nataly is going!
Posie is not going!
Ivan is going!
Jack is not going!
Nata is not going!
Jack is going!
Pesho is going!
[/input]
[output]
Nataly is already in the list!
Nataly is already in the list!
Posie is not in the list!
Jack is not in the list!
Nata is not in the list!
Nataly
Ivan
Jack
Pesho
[/output]
[/test]
[test]
[input]
5
Misho is going!
Pesho is going!
Pesho is going!
Adriana is not going!
Adriana is going!
[/input]
[output]
Pesho is already in the list!
Adriana is not in the list!
Misho
Pesho
Adriana
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
