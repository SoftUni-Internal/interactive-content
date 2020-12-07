# Problem: ForceBook

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421819849" default /]
[stream language="RO" videoId="435755669"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: ForceBook
[code-task title="ForceBook" taskId="9bc11cca-f0ef-401d-a174-42b93f03c811" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
The force users are struggling to remember which side are the different force users from, because they switch them too often.

So you are tasked to create a program to manage their profiles.

You should store information for **every unique force user**, registered in the application.

You will receive several **input lines in one of the following formats**:
- \{forceSide\} \| \{forceUser\}
- \{forceUser\} -> \{forceSide\}

The **force user and force side are strings**, containing any character.

If you receive force side \| force user you should **check if such force user already exists**, and if not, **add him/her** to the corresponding side.

If you receive a force user -> force side you should **check if there is such force user already** and if so, **change his/her side**. 

If there is no such force user, **add him/her to the corresponding force side**, treating the command as new registered force user.

Then you should print on the console: 

"\{forceUser\} joins the \{forceSide\} side!"

You should **end your program when you receive the command** "End". 

At that point you should print each force side, **ordered descending by force users count**, than **ordered by name**. 

For each side print the force users, **ordered by name**.

In case there are **no force users** in a side, you **shouldn't print the side information**.

### Input
- The input comes in the form of commands in one of the formats specified above.
- The input ends when you receive the command "End".

### Output
- As output for each force side, ordered descending by force users count, then by name, you must print all the force users, ordered by name alphabetically.
- The output format is:
Side: \{forceSide\}, Members: \{forceUsersCount\}
! \{forceUser\}
! \{forceUser\}
! \{forceUser\}
- In case there are NO force users, don't print this side.

### Examples
| **Input** | **Output** |
| --- | --- |
| Light \| George | Side: Dark, Members: 1 | 
| Dark \| Peter | ! Peter |
| End | Side: Light, Members: 1 |
| | ! George |

### Comments
We register George in the Light side and Peter in the Dark side.

After receiving "End" we print both sides, ordered by membersCount and then by name.

### Examples
| **Input** | **Output** |
| --- | --- |
| Lighter \| Ronn | John joins the Lighter side! | 
| Darker \| Dean | Dean joins the Lighter side! |
| John -> Lighter | Side: Lighter, Members: 3 |
| Dean -> Lighter | ! Dean |
| End | ! John |
| | ! Ronn |

### Comments
Although John doesn't have a profile, we register him and add him to the Lighter side.

We remove Dean from Darker side and add him to Lighter side.

We print only Lighter side because Darker side has no members.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Lighter \| Ronn
Darker \| Dean
John -> Lighter
Dean -> Lighter
End
[/input]
[output]
John joins the Lighter side!
Dean joins the Lighter side!
Side: Lighter, Members: 3
! Dean
! John
! Ronn
[/output]
[/test]
[test]
[input]
Light \| Gosho
Dark \| Pesho
End
[/input]
[output]
Side: Dark, Members: 1
! Pesho
Side: Light, Members: 1
! Gosho
[/output]
[/test]
[test]
[input]
Dark \| Gosho
Light \| Pesho
End
[/input]
[output]
Side: Dark, Members: 1
! Gosho
Side: Light, Members: 1
! Pesho
[/output]
[/test]
[test]
[input]
Light \| Gosho
Dark \| Pesho
Dark \| Kiro
End
[/input]
[output]
Side: Dark, Members: 2
! Kiro
! Pesho
Side: Light, Members: 1
! Gosho
[/output]
[/test]
[test]
[input]
Light \| Royal
Dark \| DCay
Ivan -> Middle
End
[/input]
[output]
Ivan joins the Middle side!
Side: Dark, Members: 1
! DCay
Side: Light, Members: 1
! Royal
Side: Middle, Members: 1
! Ivan
[/output]
[/test]
[test]
[input]
Light \| Royal
Dark \| DCay
Ivan -> Light
End

[/input]
[output]
Ivan joins the Light side!
Side: Light, Members: 2
! Ivan
! Royal
Side: Dark, Members: 1
! DCay
[/output]
[/test]
[test]
[input]
Royal -> Java
DCay -> Java
Vik -> JScript
Ivan -> C#
End
[/input]
[output]
Royal joins the Java side!
DCay joins the Java side!
Vik joins the JScript side!
Ivan joins the C# side!
Side: Java, Members: 2
! DCay
! Royal
Side: C#, Members: 1
! Ivan
Side: JScript, Members: 1
! Vik
[/output]
[/test]
[test]
[input]
Pesho \| Gosho Goshov
Gosho \| Pesho Peshov
Pesho Peshov \| Gosho
Gosho Goshov \| Pesho
End
[/input]
[output]
Side: Gosho, Members: 1
! Pesho Peshov
Side: Gosho Goshov, Members: 1
! Pesho
Side: Pesho, Members: 1
! Gosho Goshov
Side: Pesho Peshov, Members: 1
! Gosho
[/output]
[/test]
[test]
[input]
Light \| Gosho
Dark \| Pesho
Pesho -> SoftUni
Gosho -> SoftUni
End
[/input]
[output]
Pesho joins the SoftUni side!
Gosho joins the SoftUni side!
Side: SoftUni, Members: 2
! Gosho
! Pesho
[/output]
[/test]
[test]
[input]
Java \| e
Java \| d
Java \| c
Java \| b
Java \| a
End
[/input]
[output]
Side: Java, Members: 5
! a
! b
! c
! d
! e
[/output]
[/test]
[test]
[input]
e \| b
e \| a
f \| d
f \| c
f \| e
g \| e
End
[/input]
[output]
Side: f, Members: 3
! c
! d
! e
Side: e, Members: 2
! a
! b
[/output]
[/test]
[/tests]
[/code-task]
[/slide]