# Problem: Person ID

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821748" default /]
[stream language="RO" videoId="433932277"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Person ID
[code-task title="Person ID" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive **an unknown number of lines**.

On each line, you will receive **array with 3 elements**.

The **first** element will be **string** and represents the **name of the person**. 

The **second** element will be a **string** and will represent the **ID of the person**. 

The last element will be an **integer** and represents the **age of the person**.

If you get a person whose **ID you've already received**, then **update** the name and age for that ID with that **of the new person**.

When you receive the **command** "End", **stop** taking input and **print all the people**.

### Example
| **Input** | **Output** |
| --- | --- |
| George 123456 20 | George with ID: 123456 is 20 years old. |
| Peter 78911 15 | John with ID: 78911 is 30 years old. |
| Steven 524244 10 | Steven with ID: 524244 is 10 years old. |
| John 78911 30 | |
| End | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
George 123456 20
Peter 78911 15
Steven 524244 10
John 78911 30
End
[/input]
[output]
George with ID: 123456 is 20 years old.
John with ID: 78911 is 30 years old.
Steven with ID: 524244 is 10 years old.
[/output]
[/test]
[test]
[input]
Cindy 88611 2
Kaloyan 13967 3
Simona 53316 11
Gil 31837 72
Gil 31837 72
Stacy 88611 10
End
[/input]
[output]
Stacy with ID: 88611 is 10 years old.
Kaloyan with ID: 13967 is 3 years old.
Simona with ID: 53316 is 11 years old.
Gil with ID: 31837 is 72 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Margie 17098 46
Chip 84450 89
End
[/input]
[output]
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Margie with ID: 17098 is 46 years old.
Chip with ID: 84450 is 89 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Chip 84450 89
Margie 17098 46
End
[/input]
[output]
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Chip with ID: 84450 is 89 years old.
Margie with ID: 17098 is 46 years old.
[/output]
[/tests]
[/code-task]
[/slide]
