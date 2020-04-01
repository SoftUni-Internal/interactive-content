[slide]
# Order by Age
[code-task title="Order by Age" taskId="java-fundamentals-objects-and-classes-06" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive **an unknown number of lines**.

On each line, you will receive **array with 3 elements**.

The **first** element will be **string** and represents the **name of the person**. 

The **second** element will be a **string** and will represent the **ID of the person**. 

The last element will be an **integer** and represents the **age of the person**.

When you receive the **command** "End", **stop** taking input and **print all the people, ordered by age**.

### Example
| **Input** | **Output** |
| --- | --- |
| George 123456 20 | Stefan with ID: 524244 is 10 years old. |
| Peter 78911 15 | Pesho with ID: 78911 is 15 years old. |
| Steven 524244 10 | Georgi with ID: 123456 is 20 years old. |
| End | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Georgi 123456 20
Pesho 78911 15
Stefan 524244 10
End
[/input]
[output]
Stefan with ID: 524244 is 10 years old.
Pesho with ID: 78911 is 15 years old.
Georgi with ID: 123456 is 20 years old.
[/output]
[/test]
[test]
[input]
Cindy 88611 2
Kaloyan 13967 3
Simona 53316 11
Gil 31837 72
End
[/input]
[output]
Cindy with ID: 88611 is 2 years old.
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
Margie with ID: 17098 is 46 years old.
Chip with ID: 84450 is 89 years old.
[/output]
[/test]
[test]
[input]
Simona 53316 11
Gil 31837 72
Cindy 88611 2
Kaloyan 13967 3
End
[/input]
[output]
Cindy with ID: 88611 is 2 years old.
Kaloyan with ID: 13967 is 3 years old.
Simona with ID: 53316 is 11 years old.
Gil with ID: 31837 is 72 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Chip 84450 89
Margie 17098 46
Simona 53316 11
Gil 31837 72
Cindy 88611 2
Kaloyan 13967 3
End
[/input]
[output]
Cindy with ID: 88611 is 2 years old.
Kaloyan with ID: 13967 is 3 years old.
Simona with ID: 53316 is 11 years old.
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Margie with ID: 17098 is 46 years old.
Gil with ID: 31837 is 72 years old.
Chip with ID: 84450 is 89 years old.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]