[slide hideTitle]
# Problem: Cinema
[code-task title="Cinema" taskId="java-basics-exam-prep-Cinema" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Pentru viitoarea premieră a trei producții populare, un cinematograf local v-a angajat să scrieți un software care calculează prețul, pe care clienții trebuie să-l plătească, în funcție de film și de oferta pe care au ales-o.

|   | John Wick | Star Wars | Jumanji |
| --- | --- | --- | --- |
| Drink | 12 $ | 18 $ | 9 $ |
| Popcorn | 15 $ | 25 $ | 11 $ |
| Menu | 19$ | 30$ | 14$ |

Scrieți un program care calculează prețul care trebuie plătit.

Rețineți că există reduceri:
- Dacă filmul ales este "Star Wars" și se cumpără cel puțin patru bilete, există o reducere de 30% pentru o familie.
- Dacă filmul ales este "Jumanji" și biletele cumpărate sunt exact două, există o reducere de 15% pentru două persoane.

## Intrare
Primești 3 linii de pe consolă:
- Prima linie - film - un șir: "John Wick", "Star Wars" sau "Jumanji"
- A doua linie - ofertă - un șir: "Drink", "Popcorn" sau "Menu"
- A treia linie - numărați bilete -un număr întreg în intervalul [1… 30]

## Ieșire
Imprimați un rând pe consolă: "Your bill is \{total price\}$"
  * Prețul trebuie formatat la două cifre după punctul zecimal.

## Exemplu
|**Intrare**|**Ieșire**|**Comentarii**|
| --- | --- | --- |
| John Wick | Your bill is 72.00$ | Dacă filmul este "Războiul stelelor" și se alege floricele. |
| Bea | | Prețul pentru un bilet este de 25 $. 4 bilete fiecare de 25 $ -> 100 $. |
| 6 | | Pentru acest film există o reducere de 30% pentru 4 sau mai multe persoane. |
| | | 30% din 100 -> 30 $. |
| | | 100 $ - 30 $ -> 70 $ este prețul total.  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
John Wick
Drink
23
[/input]
[output]
Your bill is 276.00$
[/output]
[/test]
[test]
[input]
John Wick
Popcorn
11
[/input]
[output]
Your bill is 165.00$
[/output]
[/test]
[test]
[input]
John Wick
Menu
8
[/input]
[output]
Your bill is 152.00$
[/output]
[/test]
[test]
[input]
Star Wars
Drink
10
[/input]
[output]
Your bill is 126.00$
[/output]
[/test]
[test]
[input]
Star Wars
Popcorn
3
[/input]
[output]
Your bill is 75.00$
[/output]
[/test]
[test]
[input]
Star Wars
Menu
1
[/input]
[output]
Your bill is 30.00$
[/output]
[/test]
[test]
[input]
Jumanji
Drink
2
[/input]
[output]
Your bill is 15.30$
[/output]
[/test]
[test]
[input]
Jumanji
Popcorn
1
[/input]
[output]
Your bill is 11.00$
[/output]
[/test]
[test]
[input]
Jumanji
Menu
3
[/input]
[output]
Your bill is 42.00$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]