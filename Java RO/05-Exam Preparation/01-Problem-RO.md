# Shopping List

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="434990022" default /]
[stream language="RO" videoId="433962297"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Shopping List
[code-task title="Shopping List" taskId="java-fund-18-Exam-Preparation-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Descriere
Veți primi o **listă inițială cu produse alimentare separate de** "!".

După aceea veți primi **4 tipuri de comenzi, până când veți primi comanda** "Go Shopping!"
- Urgent \{item\} - **adăugați articolul la începutul** listei.
    - Dacă elementul **există deja, săriți peste această comandă**.
- Unnecessary \{item\} - **eliminați articolul cu numele dat**.
    - **Numai dacă există în listă**. **În caz contrar, săriți** această comandă.
- Correct \{oldItem\} \{newItem\} - **dacă elementul cu numele vechi dat există**, **schimbați-l** cu cel nou.
    - Dacă**nu există, săriți**această comandă.
- Rearrange \{item\} - dacă magazinul **există în listă**, **scoateți-l din poziția** actuală și **adăugați-l la sfârșitul listei**.

### Constrângeri
- Nu vor exista elemente duplicate în lista inițială

### Ieșire
**Imprimați lista cu toate produsele alimentare, alături de** ", ".
- "\{firstGrocery\}, \{secondGrocery\}, … \{nthGrocery\}"

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| Tomatoes!Potatoes!Bread | Tomatoes, Potatoes, Bread |
| Unnecessary Milk | |
| Urgent Tomatoes | |
| Go Shopping! | |

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| Milk!Pepper!Salt!Water!Banana | Milk, Onion, Salt, Water, Banana |
| Urgent Salt | |
| Unnecessary Grapes  | |
| Correct Pepper Onion | |
| Rearrange Grapes | |
| Correct Tomatoes Potatoes | |
| Go Shopping! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Tomatoes!Potatoes!Bread
Unnecessary Milk
Urgent Tomatoes
Go Shopping!
[/input]
[output]
Tomatoes, Potatoes, Bread
[/output]
[/test]
[test open]
[input]
Milk!Pepper!Salt!Water!Banana
Urgent Salt
Unnecessary Grapes 
Correct Pepper Onion
Rearrange Grapes
Correct Tomatoes Potatoes
Go Shopping!
[/input]
[output]
Milk, Onion, Salt, Water, Banana
[/output]
[/test]
[test]
[input]
Dustin!William
Urgent Jon
Go Shopping!
[/input]
[output]
Jon, Dustin, William
[/output]
[/test]
[test]
[input]
Mark!Dustin!William
Urgent George
Go Shopping!
[/input]
[output]
George, Mark, Dustin, William
[/output]
[/test]
[test]
[input]
Mark!Dustin!William
Unnecessary George
Unnecessary William
Go Shopping!
[/input]
[output]
Mark, Dustin
[/output]
[/test]
[test]
[input]
Mark!Dustin!William
Urgent George
Urgent Dustin
Go Shopping!
[/input]
[output]
George, Mark, Dustin, William
[/output]
[/test]
[test]
[input]
George!Mark!Dustin!Aaron!Will
Correct Will William
Go Shopping!
[/input]
[output]
George, Mark, Dustin, Aaron, William
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Correct George Dustin
Correct Walt Will
Go Shopping!
[/input]
[output]
Joshua, Aaron, Will, Dustin, William
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Rearrange Aaron
Rearrange Joshua
Go Shopping!
[/input]
[output]
Walt, Dustin, William, Aaron, Joshua
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Rearrange Aaron
Rearrange Peter
Rearrange Dustin
Go Shopping!
[/input]
[output]
Joshua, Walt, William, Aaron, Dustin
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Unnecessary Aaron
Urgent Jon
Unnecessary Walt
Urgent Kiro
Correct Kiro Kiril
Rearrange Kiril
Go Shopping!
[/input]
[output]
Jon, Joshua, Dustin, William, Kiril
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Unnecessary Aaron
Unnecessary Marcus
Urgent Jon
Urgent Walt
Unnecessary Walt
Urgent Kiro
Correct Kiro Kiril
Correct Kiro Kircata
Rearrange Kiril
Rearrange Oliver
Go Shopping!
[/input]
[output]
Jon, Joshua, Dustin, William, Kiril
[/output]
[/test]
[/tests]
[/code-task]
[/slide]