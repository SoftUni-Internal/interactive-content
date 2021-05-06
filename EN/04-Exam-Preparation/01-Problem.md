# Problem 2: Registration

[slide hideTitle]
# Registration

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/05.Java-Fundamentals-Exam-Preparation/EN/02-Registration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Registration" taskId="java-fundamentals-part-2-exam-preparation-registration" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that checks **if some registration attempts can be processed or not**.

Each registration consists of a **username** and a **password**.


On the **first line**, you will receive a **number that indicates how many inputs** you will receive on the **next** lines.

A **registration is valid** when:

- The username is surrounded by `"U\$"`

- The username needs to contain a **minimum of 3 characters**, to **start** with an **uppercase letter**, followed **only by lowercase letters**

- The password is surrounded by `"P@\$"`

- The password needs to start with a **minimum of 5 alphabetical characters** (not including digits) and to end with a **digit**

**Example of a valid** registration: 
- "U\$MichaelU\$P@\$asdqwe123P@\$"

You have to check if the registration is **valid**. 

- **If it is valid**, print out the following messages:
- "**Registration was successful**"
- "**Username**: \{**Username**\}, **Password**: \{**Password**\}"

**If it is not valid** - print out the following message:
- "**Invalid username or password**"

In the end, **print out the count of successful registrations**:
- "**Successful registrations:** \{**successfulRegistrationsCount**\}"

### Input

- On the first line, you will receive a number **n** - the count of input lines that you will receive
- On the next **n** lines - a text, containing an username and a password that you have to check

### Output
- Print all the expected messages, each on a new line
- In the end, print the count of successful registrations

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | Registration was successful |
| U\$MichaelU\$P@$asdqwe123P@\$ | Username: Michael, Password: asdqwe123 |
| U\$NameU$P@\$PasswordP@\$ | Invalid username or password |
| U\$UserU$P@\$ad2P@\$ | Invalid username or password |
| | Successful registrations: 1 |

[hints]
[hint]
We have **3** input lines to check:

The **first** one follows the rules, so it is **valid**.
[/hint] 
[hint]
The **second** one is **not valid** because the password does not end with a digit.
[/hint] 
[hint]
The third one is **not valid** because the password is too short.
[/hint] 
[/hints] 

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
