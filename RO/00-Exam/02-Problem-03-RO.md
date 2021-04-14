# Problema 3: Inventory

[slide hideTitle]
# Inventory
[code-task title="Inventory" taskId="Java-Fundamentals-Part-1-Exam-Inventory" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

### Intrare / constrângeri

Veți primi un jurnal care conține unele articole, separate prin ", " **(virgulă și spațiu)**

.După aceea, până când veți primi comanda "**Craft!**", veți primi diferite comenzi.

Comenzile sunt împărțite de " - " **(spațiu liniuță)**:

- "**Collect -** \{**element** \}": primind această comandă, ar trebui **să adaugați** elementul dat la inventar

Dacă articolul este deja în inventarul dvs., **ar trebui să renunțați**.

- "**Drop -** \{**element** \}": ar trebui să **eliminați** articolul din inventar, **dacă acesta este prezent în inventar**

- "**Combine items -** \{**element vechi** \}:\{**element nou** \}": ar trebui să verificați dacă elementul vechi este prezent, dacă da, plasați noul element după cel vechi  

În caz contrar, ignorați comanda.

- "**Renew -** \{**element** \}": dacă articolul dat există, ar trebui să-i schimbați poziția și **să-l puneți la ultima poziție din inventar**

### Ieșire

După ce primiți "**Craft!**" tipăriți articolele din inventar, separate prin ", " **(virgulă și spațiu)**

## Primul Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Iron, Wood, Sword | Iron, Sword, Gold  |
| Collect - Gold |  |
| Drop - Wood |  |
| Craft! |  |

[hints]
[hint]
Împărțiți comenzile și obiectele pentru fiecare comandă de lângă cratimă, înconjurată de spații: **" - "**
[/hint] 
[hint]
Creați o condiție care verifică dacă șirul obiectelor conține două puncte (**":"**), iar apoi îl împarte.
[/hint] 
[hint]
Parcurgeți fiecare comandă/obiecte și modificați inventarul în mod corespunzător.
[/hint] 
[hint]
La final, tipăriți inventarul pe consolă folosind metoda `String.join(delimiter, inventory)`.
[/hint] 
[/hints] 

## Al Doilea Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Iron, Sword | Sword, Bow, Iron |
| Drop - Bronze |  |
| Combine Items - Sword:Bow |  |
| Renew - Iron |  |
| Craft! |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Iron, Wood, Sword
Collect - Gold
Drop - Wood
Craft!
[/input]
[output]
Iron, Sword, Gold
[/output]
[/test]
[test open]
[input]
Iron, Sword
Drop - Bronze
Combine Items - Sword:Bow
Renew - Iron
Craft!
[/input]
[output]
Sword, Bow, Iron
[/output]
[/test]
[test]
[input]
A, B, C, D
Collect - E
Collect - F
Craft!
[/input]
[output]
A, B, C, D, E, F
[/output]
[/test]
[test]
[input]
A, B, C, D
Collect - D
Collect - E
Craft!
[/input]
[output]
A, B, C, D, E
[/output]
[/test]
[test]
[input]
A, B, C, D
Drop - C
Drop - D
Craft!
[/input]
[output]
A, B
[/output]
[/test]
[test]
[input]
A, B, C, D
Drop - D
Drop - E
Craft!
[/input]
[output]
A, B, C
[/output]
[/test]
[test]
[input]
A, B, C, D
Renew - C
Craft!
[/input]
[output]
A, B, D, C
[/output]
[/test]
[test]
[input]
A, B, C, D
Renew - D
Renew - E
Renew - B
Craft!
[/input]
[output]
A, C, D, B
[/output]
[/test]
[test]
[input]
A, B, C, D
Combine Items - C:C1
Craft!
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
A, B, C, D
Combine Items - C:C1
Combine Items - E:E1
Craft!
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
N, S, F, T
Collect - U
Drop - F
Renew - N
Combine Items - S:B1
Combine Items - B1:O
Drop - B1
Combine Items - O:F
Collect - I
Craft!
[/input]
[output]
S, O, F, T, U, N, I
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
