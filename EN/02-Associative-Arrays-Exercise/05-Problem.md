# Problem: Parking

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821599" default /]
[stream language="RO" videoId="435755981"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Parking
[code-task title="Parking" taskId="5cc3b7a5-ce88-4822-bce2-841d1e366c33" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which **validates parking** for an online service.

Users can **register to park and unregister to leave**.

The program receives **2 commands**:
- "register \{username\} \{licensePlateNumber\}":
    - The system **only supports one car per user** at the moment, so if a user tries to register another license plate, using the same username, the system should **print**: "ERROR: already registered with plate number \{licensePlateNumber\}"
    - If the aforementioned checks pass **successfully**, the **plate can be registered**, so the system should **print**: "\{username\} registered \{licensePlateNumber\} successfully"
- "unregister \{username\}":
    - If the user is **not present in the database**, the system should **print**: "ERROR: user \{username\} not found"
    - If the aforementioned check passes **successfully**, the system should **print**: "\{username\} unregistered successfully"

After you execute all of the commands, **print** all the **currently registered users and their license plates** in the format:
- "\{username\} => \{licensePlateNumber\}"

### Input
- First line: n – number of commands – integer
- Next n lines: commands in one of two possible formats:
    - Register: "register \{username\} \{licensePlateNumber\}"
    - Unregister: "unregister \{username\}"

### Examples
| **Input** | **Output** |
| --- | --- |
| 5 | John registered CS1234JS successfully | 
| register John CS1234JS | George registered JAVA123S successfully |
| register George JAVA123S | Andy registered AB4142CD successfully |
| register Andy AB4142CD | Jesica registered VR1223EE successfully | 
| register Jesica VR1223EE | Andy unregistered successfully | 
| unregister Andy | John => CS1234JS | 
| | George => JAVA123S | 
| | Jesica => VR1223EE | 

### Examples
| **Input** | **Output** |
| --- | --- |
| 4 | Jony registered AA4132BB successfully | 
| register Jony AA4132BB | ERROR: already registered with plate number AA4132BB |
| register Jony AA4132BB | Linda registered AA9999BB successfully |
| register Linda AA9999BB | Jony unregistered successfully | 
| unregister Jony | Linda => AA9999BB | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
register John CS1234JS
register George JAVA123S
register Andy AB4142CD
register Jesica VR1223EE
unregister Andy
[/input]
[output]
John registered CS1234JS successfully
George registered JAVA123S successfully
Andy registered AB4142CD successfully
Jesica registered VR1223EE successfully
Andy unregistered successfully
John => CS1234JS
George => JAVA123S
Jesica => VR1223EE
[/output]
[/test]
[test open]
[input]
4
register Jony AA4132BB
register Jony AA4132BB
register Linda AA9999BB
unregister Jony
[/input]
[output]
Jony registered AA4132BB successfully
ERROR: already registered with plate number AA4132BB
Linda registered AA9999BB successfully
Jony unregistered successfully
Linda => AA9999BB
[/output]
[/test]
[test]
[input]
6
register Jacob MM1111XX
register Anthony AB1111XX
unregister Jacob
register Joshua DD1111XX
unregister Lily
register Samantha AA9999BB
[/input]
[output]
Jacob registered MM1111XX successfully
Anthony registered AB1111XX successfully
Jacob unregistered successfully
Joshua registered DD1111XX successfully
ERROR: user Lily not found
Samantha registered AA9999BB successfully
Anthony => AB1111XX
Joshua => DD1111XX
Samantha => AA9999BB
[/output]
[/test]
[test]
[input]
9
register John CS1234JS
register George JAVA123S
register Andy AB4142CD
register Jesica VR1223EE
unregister Andy
register Jony AA4132BB
register Jony AA4132BB
register Linda AA9999BB
unregister Jony
[/input]
[output]
John registered CS1234JS successfully
George registered JAVA123S successfully
Andy registered AB4142CD successfully
Jesica registered VR1223EE successfully
Andy unregistered successfully
Jony registered AA4132BB successfully
ERROR: already registered with plate number AA4132BB
Linda registered AA9999BB successfully
Jony unregistered successfully
John => CS1234JS
George => JAVA123S
Jesica => VR1223EE
Linda => AA9999BB
[/output]
[/test]
[test]
[input]
3
register Misho CS1234JS
register George JAVA123S
register Jesica VR1223EE
[/input]
[output]
Misho registered CS1234JS successfully
George registered JAVA123S successfully
Jesica registered VR1223EE successfully
Misho => CS1234JS
George => JAVA123S
Jesica => VR1223EE
[/output]
[/test]
[test]
[input]
6
register John CS1234JS
register George JAVA123S
register Andy AB4142CD
register Jesica VR1223EE
unregister George
unregister Andy
[/input]
[output]
John registered CS1234JS successfully
George registered JAVA123S successfully
Andy registered AB4142CD successfully
Jesica registered VR1223EE successfully
George unregistered successfully
Andy unregistered successfully
John => CS1234JS
Jesica => VR1223EE
[/output]
[/test]
[test]
[input]
7
register Mitko CS9999JS
register Dinko JAVA123S
register Misho AB5652CD
register Simo VR4627EE
unregister George
unregister Andy
unregister Simo
[/input]
[output]
Mitko registered CS9999JS successfully
Dinko registered JAVA123S successfully
Misho registered AB5652CD successfully
Simo registered VR4627EE successfully
ERROR: user George not found
ERROR: user Andy not found
Simo unregistered successfully
Mitko => CS9999JS
Dinko => JAVA123S
Misho => AB5652CD
[/output]
[/test]
[test]
[input]
11
register Mitko CS9999JS
unregister Mike
register Dinko JAVA123S
register Misho AB5652CD
unregister Misho
register Simo VR4627EE
unregister George
unregister Andy
unregister Simo
register Simo2 AD1538BC
register Acho AD1538BC
[/input]
[output]
Mitko registered CS9999JS successfully
ERROR: user Mike not found
Dinko registered JAVA123S successfully
Misho registered AB5652CD successfully
Misho unregistered successfully
Simo registered VR4627EE successfully
ERROR: user George not found
ERROR: user Andy not found
Simo unregistered successfully
Simo2 registered AD1538BC successfully
Acho registered AD1538BC successfully
Mitko => CS9999JS
Dinko => JAVA123S
Simo2 => AD1538BC
Acho => AD1538BC
[/output]
[/test]
[/tests]
[/code-task]
[/slide]