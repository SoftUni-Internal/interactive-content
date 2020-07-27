[slide hideTitle]
# Problem: Race
[code-task title="Race" taskId="ce66b922-72e3-4277-9c51-4e988d899ed8" executionType="tests-execution" executionStrategy="java-code"  requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
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
Write a program that processes information about a race.

On the **first line** you will be given a **list of participants separated** by ", ".

On the **next few lines until you receive** a line "end of race" you will be given some info which will be some **alphanumeric characters**.

In between them you could have **some extra characters which you should ignore**.

For **example**: "G!32e%o7r#32g$235@!2e".

The **letters are the name of the person** and the **sum of the digits is the distance he ran**.

So here we have **George who ran 29 km**.

**Store the information** about the **person only if the list of racers contains the name** of the person.

If you receive the **same person more than once** just **add the distance to his old distance**.

At the end **print the top 3 racers ordered by distance in descending** in the format:

"1st place: \{first racer\}

2nd place: \{second racer\}

3rd place: \{third racer\}"

### Example
| **Input** | **Output** |
| --- | --- |
| George, Peter, Bill, Tom | 1st place: George |
| G4e@55or%6g6!68e!!@ | 2nd place: Peter |
| R1@!3a$y4456@ | 3rd place: Tom |
| B5@i@#123ll | |
| G@e54o$r6ge# | |
| 7P%et^#e5346r | |
| T$o553m&6 | |
| end of race | |

### Comments
- On the third input line we have Ray. 
- He is not in the list, so we do not count his result. 
- The other ones are valid. 
- George has total of 55 km, Peter has 25 and Tom has 19. 
- We do not print Bill because he is on the fourth place.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
George, Peter, Bill, Tom
G4e@55or%6g6!68e!!@
R1@!3a\$y4456@
B5@i@\#123ll
G@e54o\$r6ge\#
7P%et^\#e5346r
T\$o553m&6
end of race
[/input]
[output]
1st place: George
2nd place: Peter
3rd place: Tom
[/output]
[/test]
[test]
[input]
Gregory, Tom, Jerry, Christian, Bill
G4r\*\&^\$\#ego%4^\&4\*ry
T\*\&^%57)\&%\$o^\*m6
J\&\*\*67e%\&))rr\&12\*3y
J\&\*\*22e%&))rr\&44\*8y
Ch\&\*\&\*^ri1s3t5ian
L\&\*\&%666amar
end of race
[/input]
[output]
1st place: Jerry
2nd place: Tom
3rd place: Gregory
[/output]
[/test]
[test]
[input]
Ronald, Bill, Tom, Timmy, Maggie, Michonne
Mi@@@@!ch123o!@nne787)
%@B(@@)i89ll)!@)
R@(on@ald992)
T(@immy77)
Ma10!@@g0g0g0i0e
end of race
[/input]
[output]
1st place: Michonne
2nd place: Ronald
3rd place: Bill
[/output]
[/test]
[test]
[input]
Rick, Negan, Lucille, Peter, Stamat, George
R\*\*\*\*i22c00k199!!!
N\*\*\*\\&^E989GA(\*\\&^\\&^\\&N323a)))
\*^%%Pe87876t\\&\\&^er87\#\$\\&(%)
L\\&^%u9754cille\*\\&^\\&%^234
end of race
[/input]
[output]
1st place: Peter
2nd place: Lucille
3rd place: Rick
[/output]
[/test]
[test]
[input]
Rick, Negan, Lucille, Peter, Stamat, George
R****i22c00k199!!!
N***\\&^e989ga(*\\&^\\&^\\&n323)))
*^%%Pe87876t\\&\\&^er87\#\$\\&(%)
L\\&^%u9754cille*\\&^\\&%^234
R**%^\\&%i11c104k123!^\\&!!
R\\&\\&%^\\&%ic10^\$@k123!^\\&!!
*^%Peter8675
*^%Geo\$12\#%112r^\$ge23!(@^)
!!22!P23!e!t!e!r!85
end of race
[/input]
[output]
1st place: Peter
2nd place: Rick
3rd place: Negan
[/output]
[/test]
[test]
[input]
Joro, George, Georgi, Stamat
!@232St#$ama!@!@t
@@@232St@@ama!@!@!t
G7667eorge!!!
@!@@J99999oro@@@57
end of race
[/input]
[output]
1st place: Joro
2nd place: George
3rd place: Stamat
[/output]
[/test]
[/tests]
[/code-task]
[/slide]