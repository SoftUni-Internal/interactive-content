[slide hideTitle]
# Problem: Password Validator
[code-task title="Password Validator" taskId="java-fund-11-Methods-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that checks if a given password is **valid**. 

Password **rules** are:
- **6 - 10 characters** (inclusive)
- Consists **only** of **letters and digits**
- Have **at least 2 digits** 
If a password is **valid** print "Password is valid". 

If it is **not valid**, for every unfulfilled rule **print a message**:
- "Password must be between 6 and 10 characters"
- "Password must consist only of letters and digits"
- "Password must have at least 2 digits"

### Hint
Write a method for each rule.

### Example
| **Input** | **Output** |
| --- | --- |
| logIn | Password must be between 6 and 10 characters |
| | Password must have at least 2 digits |

### Example
| **Input** | **Output** |
| --- | --- |
| MyPass123 | Password is valid |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
logIn
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test open]
[input]
MyPass123
[/input]
[output]
Password is valid
[/output]
[/test]
[test]
[input]
Pa$s$s
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Acer
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Picture
[/input]
[output]
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
pesho123\#
[/input]
[output]
Password must consist only of letters and digits
[/output]
[/test]
[test]
[input]
gas%2
[/input]
[output]
Password must be between 6 and 10 characters
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Pesho189
[/input]
[output]
Password is valid
[/output]
[/test]
[test]
[input]
SoftUni40
[/input]
[output]
Password is valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
