# Problemă: Club
[slide hideTitle]
# Club
[code-task title="Club" taskId="pb-java-exam-Club" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Scrieți codul dvs. aici
  }
}
```
[/code-editor]
[task-description]

## Descriere
Vremea se încălzește, iar cluburile lansează oferte promițătoare.

Scrieți un program care să calculeze profitul unui club pentru o seară și să determine dacă este atins profitul dorit, ținând cont de faptul că prețul unui cocktail este egal cu lungimea numelui său.

Dacă prețul unei comenzi este un număr impar, există o reducere de 25% din prețul comenzii.

# Intrare
Veți primi:
- Pe prima linie - profitul dorit al clubului - număr real în intervalul [1.00 ... 15000.00]

O serie de două rânduri până la comanda **"Party!"** sau până la atingerea profitului dorit:
- Numele cocktailului - șir
- Numărul de cocktailuri din comandă - număr întreg în intervalul [1 ... 50]

## Ieșire
Mai întâi, imprimați o linie pe consolă:

- Dacă primiți comanda **"Party!"**:
	- "**We need** \{**money needed**\} **dollars more.**"
- Dacă este atins profitul dorit:
	- "**Target acquired.**"

Apoi imprimați:
- "**Club income -** \{**club's profit**\} **dollars.**"

Suma trebuie formatată la a doua cifră după punctul zecimal.


## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 500 | We need 416.00 dollars more. |
| Bellini | Club income - 84.00 dollars. |
| 6 |  |
| Bamboo |  |
| 7 |  |
| Party! |  |

| **Input** | **Output** |
| --- | --- |
| 100 | Target acquired. |
| Sidecar | Club income - 196.75 dollars. |
| 7 |  |
| Mojito |  |
| 5 |  |
| White Russian |  |
| 10 |  |

[hints]
[hint]
Țineți cont că prețul individual pentru fiecare cocktail este lungimea numelui său. Dacă prețul unei comenzi este un număr impar, aplicați reducerea.
Calculați prețul pentru fiecare comandă și adăugați-l la suma totală.
[/hint]
[hint]
Dacă atingeți profitul dorit înaintea de primiriea comenzii "Party!", tipăriți ieșirea corectă.
Dacă primiți comanda "Party!" și nu ați atins profitul dorit, determinați de ce sumă mai este nevoie și tipăriți ieșirea corectă.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
500
Bellini
6
Bamboo
7
Party!
[/input]
[output]
We need 416.00 dollars more.
Club income - 84.00 dollars.
[/output]
[/test]
[test open]
[input]
100
Sidecar
7
Mojito
5
White Russian
10
[/input]
[output]
Target acquired.
Club income - 196.75 dollars.
[/output]
[/test]
[test]
[input]
50
Rom
3
Rakia
5
Vesper
9
[/input]
[output]
Target acquired.
Club income - 79.50 dollars.
[/output]
[/test]
[test]
[input]
100
Rakia
5
Whiskey
9
Irish Coffee
5
[/input]
[output]
Target acquired.
Club income - 126.00 dollars.
[/output]
[/test]
[test]
[input]
1000
Irish Coffe
50
Party!
[/input]
[output]
We need 450.00 dollars more.
Club income - 550.00 dollars.
[/output]
[/test]
[test]
[input]
789
Painkiller
20
Party!
[/input]
[output]
We need 589.00 dollars more.
Club income - 200.00 dollars.
[/output]
[/test]
[test]
[input]
100
Bees Knees
23
[/input]
[output]
Target acquired.
Club income - 230.00 dollars.
[/output]
[/test]
[test]
[input]
200
French 75
9
French 75
9
Gimlet
3
Mai Tai
6
Gin Fizz
6
[/input]
[output]
Target acquired.
Club income - 229.50 dollars.
[/output]
[/test]
[test]
[input]
50
Rakia
3
Vodka
16
[/input]
[output]
Target acquired.
Club income - 91.25 dollars.
[/output]
[/test]
[test]
[input]
999
Rum old fashioned
10
Bloody Mary
9
Party!
[/input]
[output]
We need 754.75 dollars more.
Club income - 244.25 dollars.
[/output]
[/test]
[test]
[input]
100
White Lady
9
R
9
Party!
[/input]
[output]
We need 3.25 dollars more.
Club income - 96.75 dollars.
[/output]
[/test]
[test]
[input]
100
Caipirinha
10
[/input]
[output]
Target acquired.
Club income - 100.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
