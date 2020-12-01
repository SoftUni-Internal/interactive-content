# Registration

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822173" default /]
[stream language="RO" videoId="436043909"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Registration
[code-task title="Registration" taskId="d3807cc1-117e-4698-9d49-adceb9e49978" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that checks **if registrations are valid**.

A registration consists of a **Username and a Password**.

On the **first line** you will receive a **number that indicates how many inputs** you will receive on the **next** lines.

A **registration is valid** when:
- The **username is surrounded by** "U\$"
- The **username needs to be minimum 3 characters** long, **start** with an **uppercase letter**, followed **only by lowercase letters**
- The **password is surrounded by** "P@\$"
- The **password needs to start with minimum 5 alphabetical letters** (not including digits) and **must end with a digit**

**Example for a valid** registration: 
- "U\$MichaelU\$P@\$asdqwe123P@\$"

You must check if the registration is **valid and if it is print**:
- "Registration was successful"
- "Username: \{Username\}, Password: \{Password\}"

**If it isn't** - print the following message:
- "Invalid username or password"

In the end **print the count of successful registrations**:
- "Successful registrations: \{successfulRegistrationsCount\}"

### Input
- On the first line - n - the count of inputs.
- On the next n lines - input that you have to check if it has a valid registration.

### Output
- Print all results from each input, each on a new line.
- In the end print the count of successful registrations

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | Registration was successful |
| U\$MichaelU\$P@$asdqwe123P@\$ | Username: Michael, Password: asdqwe123 |
| U\$NameU$P@\$PasswordP@\$ | Invalid username or password |
| U\$UserU$P@\$ad2P@\$ | Invalid username or password |
| | Successful registrations: 1 |

### Comment
- We have 3 input lines to check.
- The first one follows the rules and is valid. 
- The second one doesn't because the password doesn’t end with a digit. 
- The third one is not valid because the password is too short.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | Registration was successful |
| U\$TommyU\$P@\$asdqwe123P@\$ | Username: Tommy, Password: asdqwe123 |
| Sara 1232412 | Invalid username or password |
| | Successful registrations: 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
U\$MichaelU\$P@\$asdqwe123P@\$
U\$NameU\$P@\$PasswordP@\$
U\$UserU\$P@\$ad2P@\$
[/input]
[output]
Registration was successful
Username: Michael, Password: asdqwe123
Invalid username or password
Invalid username or password
Successful registrations: 1
[/output]
[/test]
[test open]
[input]
2
U\$TommyU\$P@\$asdqwe123P@\$
Sara 1232412
[/input]
[output]
Registration was successful
Username: Tommy, Password: asdqwe123
Invalid username or password
Successful registrations: 1
[/output]
[/test]
[test open]
[input]
3
U\$myU\$--\>P@\$asdqwe123P@\$
Sara 1232412
U\$NameU\$P@\$Pass234P@\$
[/input]
[output]
Invalid username or password
Invalid username or password
Invalid username or password
Successful registrations: 0
[/output]
[/test]
[test]
[input]
1
U\$MichaelU\$P@\$asdqwe123P@\$
[/input]
[output]
Registration was successful
Username: Michael, Password: asdqwe123
Successful registrations: 1
[/output]
[/test]
[test]
[input]
1
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MicU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Registration was successful
Username: Mic, Password: asdqw1
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 2
[/output]
[/test]
[test]
[input]
2
U\$micU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MiU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MicU\$P@\$asdqwP@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MicU\$P@\$asdq5P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
\$Mic\$P@\$asdqs5P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
\$Mic\$P@\$asdqs5
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
5
\$Mic\$P@\$asdqs5
MicU\$P@\$asdqw1P@\$
U\$micU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqwP@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Invalid username or password
Invalid username or password
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]