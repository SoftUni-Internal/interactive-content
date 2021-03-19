[slide hideTitle]
# Club
[code-task title="Club" taskId="pb-java-exam-Club" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Write code here
  }
}
```
[/code-editor]
[task-description]

## Descriere

Vremea se încălzește, iar cluburile lansează oferte promițătoare.

Scrieți un program care să calculeze profitul unui disco club  și dacă este atins profitul dorit, ținând cont de următoarele:

Prețul unui cocktail este lungimea numelui său.

Dacă prețul unei comenzi este un număr impar, există o reducere de 25% de la prețul comenzii.

# Input
Veți primi:
- Pe prima linie - profitul dorit al clubului - număr real în intervalul [1.00 ... 15000.00]

O serie de două rânduri până la comanda „Party!” sau până la atingerea profitului dorit:
- Numele cocktailului - șir
- Numărul de cocktailuri pentru comandă - număr întreg în intervalul [1 ... 50]

## Output
Mai întâi, imprimați o linie pe consolă:

- Dacă primiți comanda "Party!":
	- "We need \{money needed\} dollars more."
- Dacă este atins profitul dorit:
	- "Target acquired."

Apoi imprimați:
- "Club income - \{club's profit\} dollars."

Banii trebuie formatați la a doua cifră după punctul zecimal.


## Exemple
| **Input** | **Output** |
| --- | --- |
| 500 | We need 416.00 dollars more. |
| Bellini | Club income - 84.00 dollars. |
| 6 |  |
| Bamboo |  |
| 7 |  |
| Party! |  |

### Comentarii

- Scopul clubului este de a colecta 500 $.
- Prima comandă este pentru 6 cocktailuri Bellini.
- Prețul cocktailului este lungimea numelui său - 7.6 Cocktailuri de 7 $ -> 42 $, ultima cifră este 2, prin urmare nu există reducere.
- Următoarea comandă este pentru 7 cocktailuri Bamboo, prețul său este de 6 $. 6 * 7-> 42 $, din nou nu există reducere.
- Primim comanda Party! Programul se oprește.
- Clubul are 42 + 42 = 84 $ și scopul este 500. Sunt necesare 500 - 84 = 416 $.

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