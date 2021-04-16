# Problem 3: Inbox Manager

[slide hideTitle]
# Inbox Manager

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/05.Java-Fundamentals-Exam-Preparation/EN/03-Inbox-Manager-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Inbox Manager" taskId="java-fundamentals-2-Exam-preparation-Inbox-Manager" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that keeps the whole information about some users, their usernames, and their emails.

The emails are represented as **strings**.

You will be receiving lines, containing commands that are separated by **"->"**, until you receive the "**Statistics**" command.

There are **three possible commands**:
- "**Add->**\{**username**\}" 
    - you should check if the username exists, and if it does, print out - "\{**username**\} **is already registered"**
    - if it does not exist, then you need to add the user to the collection of all users
- "**Send->**\{**username**\}**->**\{**Email**\}"
    - add the \{**Email**\} to the \{**username**\}'s collection of emails
- "**Delete->**\{**username**\}"
    - delete the given user, if such exists
    - if the user does not exist, print out - "\{**username**\} **not found!**"

In the end, you have to **print the count of all users** and **all users with their emails**. 

The **users** have to be sorted by the **count of their emails** in **descending** order, and then by their **username** in **ascending** order.

The output should be in the following format: 

"**Users count:** \{**count**\}
\{**username**\} 
 - \{**Email1**\}
 - \{**Email2**\}
 - \{**EmailN**\}"

### Input
- You will be receiving lines of input, until you receive the "**Statistics**" command
- The commands will be in the format described above

### Output
Print out the collection in the format described above after receiving the "**Statistics**" command.

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

[hints]
[hint]
First, we receive the **users**.
Since they are **not** already in our collection, we **add** all of them.
[/hint] 
[hint]
Then, they start **sending** emails.
[/hint] 
[hint]
In the end, we **print** the expected output.
[/hint] 
[/hints] 

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
