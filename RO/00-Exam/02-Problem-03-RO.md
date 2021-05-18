# Problema 3: Inventory

[slide hideTitle]
# Inventory
[code-task title="Inventory" taskId="Java-Fundamentals-Part-1-Exam-Inventory" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

### Intrare / Constrângeri

Veți primi un jurnal care conține articole, separate prin ", " **(virgulă și spațiu)**.

După aceea, până la introducerea comenzii "**Craft!**", veți primi diferite comenzi.

Comenzile sunt separate prin " - " **(spațiu, liniuță, spațiu)**:

- "**Collect -** \{**element** \}": dacă primiți această comandă, trebuie **să adaugați** elementul dat la inventar

Dacă articolul se află deja în inventar, **comanda trebuie omisă**.

- "**Drop -** \{**element** \}": trebuie să **eliminați** articolul din invetar, **dacă acesta este prezent**

- "**Combine items -** \{**element vechi** \}:\{**element nou** \}": trebuie să verificați dacă elementul vechi este prezent în inventar, iar dacă este, plasați noul element după cel vechi  

În caz contrar, ignorați comanda.

- "**Renew -** \{**element** \}": dacă articolul dat există, trebuie să îi schimbați poziția și **să îl plasați pe ultima poziție din inventar**

### Ieșire

După ce primiți comanda "**Craft!**", tipăriți articolele din inventar, separate prin ", " **(virgulă și spațiu)**.

## Primul Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Iron, Wood, Sword | Iron, Sword, Gold  |
| Collect - Gold |  |
| Drop - Wood |  |
| Craft! |  |

[hints]
[hint]
Împărțiți comenzile și articolele pentru fiecare comandă de lângă cratima încadrată de spații: **" - "**.
[/hint] 
[hint]
Creați o condiție care verifică dacă șirul articolelor conține două puncte (**":"**), iar apoi îl împarte.
[/hint] 
[hint]
Parcurgeți fiecare comandă/articol și modificați inventarul în mod corespunzător.
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
