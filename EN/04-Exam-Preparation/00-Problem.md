# Email Validator

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421819529" default /]
[stream language="RO" videoId="436043965"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Email Validator
[code-task title="Email Validator" taskId="a6f7d9dd-7e35-43fe-b3f8-c90ee64026c7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that **manipulates a string** and **makes it suitable for an Email**.

First, you are going to **receive the email that the user wants to use**, then you will receive **commands**.

**You will be receiving commands until the** "Complete" **command**. 

There are **six possible commands**:
- "Make Upper"
    - Replace all letters with **upper case**, then **print** the result. 
- "Make Lower"
    - Replace all letters with **lower case**, then **print** the result.
- "GetDomain \{count\}"
    - **Print** the **last** \{count\} **characters** of the Email.
- "GetUsername"
    - **Print** the substring from the start of the Email **until the** @ symbol.
    - If the Email doesn't contain the @ symbol, **print**: 
"The email \{email\} doesn't contain the @ symbol."
- "Replace \{char\}"
    - Replace **all occurences** of the \{char\} with a dash "-" and **print** the result.
- "Encrypt"
    - Get the **ASCII value of each symbol**. **Print** the result **on a single line separated by a single space**

### Input
- On **the 1st line** you are going to receive the **Email in the form of a string**.
- On the next lines, **until** the "Complete" **command** is received, you will be receiving commands.

### Output
- Print the output of every command in the format described above.

### Example
| **Input** | **Output** |
| --- | --- |
| Mike123@somemail.com | MIKE123@SOMEMAIL.COM |
| Make Upper | COM |
| GetDomain 3 | MIKE123 |
| GetUsername | 77 73 75 69 49 50 51 64 83 79 77 69 77 65 73 76 46 67 79 77 |
| Encrypt | |
| Complete | |

### Example
| **Input** | **Output** |
| --- | --- |
| AnotherMail.com | anothermail.com |
| Make Lower | The email anothermail.com doesn't contain the @ symbol. |
| GetUsername | -notherm-il.com |
| Replace a | |
| Complete | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Mike123@somemail.com
Make Upper
GetDomain 3
GetUsername
Encrypt
Complete
[/input]
[output]
MIKE123@SOMEMAIL.COM
COM
MIKE123
77 73 75 69 49 50 51 64 83 79 77 69 77 65 73 76 46 67 79 77
[/output]
[/test]
[test open]
[input]
AnotherMail.com
Make Lower
GetUsername
Replace a
Complete

[/input]
[output]
anothermail.com
The email anothermail.com doesn't contain the @ symbol.
-notherm-il.com
[/output]
[/test]
[test open]
[input]
Another@Mail.com
Make Lower
GetUsername
GetDomain 3
Encrypt
Complete
[/input]
[output]
another@mail.com
another
com
97 110 111 116 104 101 114 64 109 97 105 108 46 99 111 109
[/output]
[/test]
[test]
[input]
another@mail.com
Make Upper
Complete
[/input]
[output]
ANOTHER@MAIL.COM
[/output]
[/test]
[test]
[input]
ANOTHER@MAIL.COM
Make Lower
Complete
[/input]
[output]
another@mail.com
[/output]
[/test]
[test]
[input]
another@mail.com
GetDomain 3
Complete
[/input]
[output]
com
[/output]
[/test]
[test]
[input]
another@mail.com
GetUsername
Complete
[/input]
[output]
another
[/output]
[/test]
[test]
[input]
anothermail.com
GetUsername
Complete
[/input]
[output]
The email anothermail.com doesn't contain the @ symbol.
[/output]
[/test]
[test]
[input]
another@mail.com
Replace a
Complete
[/input]
[output]
-nother@m-il.com
[/output]
[/test]
[test]
[input]
another@mail.com
Encrypt
Complete
[/input]
[output]
97 110 111 116 104 101 114 64 109 97 105 108 46 99 111 109
[/output]
[/test]
[test]
[input]
another@mail.com
Make Upper
Make Lower
Complete
[/input]
[output]
ANOTHER@MAIL.COM
another@mail.com
[/output]
[/test]
[test]
[input]
another@mail.com
Replace z
Complete
[/input]
[output]
another@mail.com
[/output]
[/test]
[test]
[input]
another@mail.com
Make Upper
GetUsername
GetDomain 3
Encrypt
Complete
[/input]
[output]
ANOTHER@MAIL.COM
ANOTHER
COM
65 78 79 84 72 69 82 64 77 65 73 76 46 67 79 77
[/output]
[/test]
[/tests]
[/code-task]
[/slide]