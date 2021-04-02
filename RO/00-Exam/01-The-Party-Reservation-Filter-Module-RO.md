[slide hideTitle]
# The Party Reservation Filter Module 
[code-task title="The Party Reservation Filter Module " taskId="Java-OOP-Basics-Exam-The-Party-Reservation-Filter-Module" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Sunteți un tânăr și talentat **dezvoltator**.

Prima sarcină pe care trebuie să o faceți este să implementați **un modul de filtrare** într-un software de rezervare de petreceri.

În primul rând, modulului de rezervare a petrecerii (**Modulul TPRF** pe scurt) este trecut o **listă** cu invitații.

Apoi **TPRF** primește o secvență de comenzi care specifică dacă trebuie să adăugați sau să eliminați un anumit filtru. 

Comenzile **TPRF** sunt în formatul dat "\{**command;filter type;filter parameter**\}"

Puteți primi următoarele comenzi **TPRF**: "**Add filter**", "**Remove filter**" sau "**Print**". 

Posibilele tipuri de filtre **TPRF** sunt: "**Starts with**", "**Ends with**", "**Length**" și "**Contains**". 

Toți parametrii de filtrare **TPRF** vor fi un șir (sau un număr întreg pentru filtrul de lungime).

Introducerea se va încheia cu o comandă "**Print**". 

Vezi exemplele de mai jos:

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| Peter Michael Slav | Slav |
| Add filter;Starts with;P | |
| Add filter;Starts with;M | | 
| Print | |



|**Intrare**|**Ieșire**|
| --- | --- |
| Peter Michael Bob  | Michael |
| Add filter;Starts with;P  | Bob | 
| Add filter;Starts with;M | |
| Remove filter;Starts with;M  | | 
| Print | | 
| --- | --- |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Peter Michael Slav
Add filter;Starts with;P
Add filter;Starts with;M
Print
[/input]
[output]
Slav
[/output]
[/test]
[test open]
[input]
Peter Michael Bob
Add filter;Starts with;P
Add filter;Starts with;M
Remove filter;Starts with;M
Print
[/input]
[output]
Michael Bob
[/output]
[/test]
[test]
[input]
Pesho
Add filter;Starts with;P
Add filter;Starts with;M
Add filter;Starts with;G
Remove filter;Starts with;P
Print
[/input]
[output]
Pesho
[/output]
[/test]
[test]
[input]
G G G G P
Add filter;Contains;G
Print
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
L O S H O M I E
Add filter;Contains;M
Add filter;Starts with;I
Add filter;Ends with;E
Print
[/input]
[output]
L O S H O
[/output]
[/test]
[test]
[input]
Deadpool Spiderman Romanov Fury
Add filter;Starts with;F
Add filter;Contains;man
Add filter;Contains;G
Remove filter;Starts with;F
Print
[/input]
[output]
Deadpool Fury
[/output]
[/test]
[test]
[input]
Pesho
Add filter;Starts with;P
Add filter;Starts with;M
Add filter;Starts with;G
Print
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]