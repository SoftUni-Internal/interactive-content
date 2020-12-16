# Inbox Manager

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421820584" default /]
[stream language="RO" videoId="436043847"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Inbox Manager
[code-task title="Inbox Manager" taskId="64e29e83-0df4-41cb-b25b-44ea07742954" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that **manages users and emails** sent by users.

You need to keep information about their username and their sent emails.

The emails are **represented as strings**.

You will be **receiving lines with commands separated by** "->" **until you receive** the "Statistics" command.

There are **three possible commands**:
- "Add->\{username\}" 
    - **Check if the username exists and if it does print** - "\{username\} is already registered"
    - If it doesn't exist, then add the user to the collection of users.
- "Send->\{username\}->\{Email\}" 
    - Add the \{Email\} to the \{username\}'s collection of sent emails.
- "Delete->\{username\}"
    - Delete the given user, if he exists. 
    - If the user doesn’t exist, print "\{username\} not found!"

In the end, you have to **print the count of users**, **each user with his/her emails**. 

**Users** need to be **sorted in descending order** by the **count of sent еmails and then by their username in ascending order in the following format**:  

Users count: \{count\}

\{username\} 

 - \{Email1\}

 - \{Email2\}

 - \{EmailN\}

### Input
- You will be receiving lines until you receive the "Statistics" command.
- The commands will be in the format described above.

### Output
- Print the collection in the format described above after the "Statistics" command.

### Example
| **Input** | **Output** |
| --- | --- |
| Add->Mike | Users count: 2 |
| Add->George | George |
| Send->George->Hello World |  - Hello World |
| Send->George->Some random test mail |  - Some random test mail |
| Send->Mike->Hello, do you want to meet up tomorrow? |  - It would be a pleasure |
| Send->George->It would be a pleasure | Mike |
| Send->Mike->Another random test mail |  - Hello, do you want to meet up tomorrow? |
| Statistics |  - Another random test mail |

### Comment
- First we receive our users.
- Since they are not already in our collection, we add them. 
- Then they start sending emails and in the end we print the output in the described format.

### Example
| **Input** | **Output** |
| --- | --- |
| Add->Mike | Mike is already registered |
| Add->George | Peter not found! |
| Send->George->Hello World | Users count: 1 |
| Send->George->Your loan is overdue | Mike |
| Add->Mike |  - Hello, do you want to meet up tomorrow? |
| Send->Mike->Hello, do you want to meet up tomorrow? |  - Another random test mail |
| Delete->Peter | |
| Send->George->I'm busy | |
| Send->Mike->Another random test mail | |
| Delete->George | |
| Statistics | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Add-\>Mike
Add-\>George
Send-\>George-\>Hello World
Send-\>George-\>Some random test mail
Send-\>Mike-\>Hello, do you want to meet up tomorrow?
Send-\>George-\>It would be a pleasure
Send-\>Mike-\>Another random test mail
Statistics
[/input]
[output]
Users count: 2
George
 \- Hello World
 \- Some random test mail
 \- It would be a pleasure
Mike
 \- Hello, do you want to meet up tomorrow?
 \- Another random test mail
[/output]
[/test]
[test open]
[input]
Add-\>Annie
Add-\>George
Send-\>George-\>Hello World
Send-\>George-\>Some random test mail
Send-\>Annie-\>Hello, do you want to meet up tomorrow?
Send-\>George-\>It would be a pleasure
Send-\>Annie-\>Another random test mail
Delete-\>Annie
Delete-\>George
Statistics
[/input]
[output]
Users count: 0
[/output]
[/test]
[test]
[input]
Add-\>a
Statistics
[/input]
[output]
Users count: 1
a
[/output]
[/test]
[test]
[input]
Add-\>a
Send-\>a-\>test
Statistics
[/input]
[output]
Users count: 1
a
 \- test
[/output]
[/test]
[test]
[input]
Add-\>a
Delete-\>a
Statistics
[/input]
[output]
Users count: 0
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>a
Statistics
[/input]
[output]
a is already registered
Users count: 1
a
[/output]
[/test]
[test]
[input]
Delete-\>a
Statistics
[/input]
[output]
a not found!
Users count: 0
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Add-\>z
Add-\>c
Statistics
[/input]
[output]
Users count: 4
a
b
c
z
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>a
Statistics
[/input]
[output]
a is already registered
Users count: 1
a
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Send-\>b-\>test
Send-\>b-\>test
Send-\>a-\>test
Statistics
[/input]
[output]
Users count: 2
b
 \- test
 \- test
a
 \- test
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Send-\>b-\>test
Send-\>b-\>test
Send-\>a-\>test
Send-\>a-\>test
Statistics
[/input]
[output]
Users count: 2
a
 \- test
 \- test
b
 \- test
 \- test
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Send-\>b-\>test
Send-\>b-\>test
Send-\>a-\>test
Send-\>a-\>test
Add-\>b
Delete-\>a
Delete-\>a
Add-\>c
Send-\>c-\>test
Send-\>c-\>test
Statistics
[/input]
[output]
b is already registered
a not found!
Users count: 2
b
 \- test
 \- test
c
 \- test
 \- test
[/output]
[/test]
[/tests]
[/code-task]
[/slide]