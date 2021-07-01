# Problemă: Coffee Machine
[slide hideTitle]
# Coffee Machine
[code-task title="Coffee Machine" taskId="pb-java-exam-coffee-machine" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care calculează prețul pe care un client, care a cumpărat băuturi de la un aparat de cafea, trebuie să îl plătească:

|   | **Without sugar** | **Normal** | **Extra sugar** |
|---|---|---|---|
| Espresso | 0.90$ | 1$ | 1.20$ |
| Cappuccino | 1.00$ | 1.20$ | 1.60$ |
| Tea | 0.50$ | 0.60$ | 0.70$ |

Rețineți următoarele reduceri:
- Pentru o băutură selectată fără zahăr, există o reducere de 35%
- Pentru 5 băuturi "Espresso", există o reducere de 25%
- Pentru o sumă care depășește 15$, există o reducere de 20% din prețul final

Reducerile se aplică în ordinea descrierii lor.

## Intrare
Veți primi 3 linii de pe consolă:
- Prima linie - băutură - șir: "**Espresso**", "**Cappuccino**" sau "**Tea**" 
- A doua linie - zahăr - șir: "**Without**", "**Normal**" sau "**Extra**"
- A treia linie - numărul băuturilor - număr întreg în intervalul [1 ... 50]

## Ieșire
Imprimați o linie pe consolă:
- "**You bought** \{**count drinks**\} **cups of** \{**drink**\} **for** \{**total price**\} **dollars.**"
	 - prețul trebuie formatat la a doua cifră după punctul zecimal

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| Espresso | You bought 10 cups of Espresso for 4.39 dollars. |
| Without |  |
| 10 |  |

| **Input** | **Output** |
| --- | --- |
| Espresso | You bought 4 cups of Espresso for 2.34 dollars. |
| Without |  |
| 4 |  |

[hints]
[hint]
Calculați prețul total pentru băuturi. Apoi verificați dacă există o reducere.
[/hint]
[hint]
Dacă există o reducere pentru băutură, determinați cât este aceasta și scădeți-o din prețul total al băuturilor.
[/hint]
[hint]
Verificați dacă există reduceri suplimentare.
La final, determinați prețul final și tipăriți ieșirea corectă. Țineți cont că prețul trebuie formatat la a doua cifră după punctul zecimal.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Espresso
Without
10
[/input]
[output]
You bought 10 cups of Espresso for 4.39 dollars.
[/output]
[/test]
[test open]
[input]
Espresso
Without
4
[/input]
[output]
You bought 4 cups of Espresso for 2.34 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Normal
20
[/input]
[output]
You bought 20 cups of Espresso for 15.00 dollars.
[/output]
[/test]
[test]
[input]
Espresso
Extra
30
[/input]
[output]
You bought 30 cups of Espresso for 21.60 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Without
7
[/input]
[output]
You bought 7 cups of Cappuccino for 4.55 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Normal
10
[/input]
[output]
You bought 10 cups of Cappuccino for 12.00 dollars.
[/output]
[/test]
[test]
[input]
Cappuccino
Extra
12
[/input]
[output]
You bought 12 cups of Cappuccino for 15.36 dollars.
[/output]
[/test]
[test]
[input]
Tea
Without
1
[/input]
[output]
You bought 1 cups of Tea for 0.33 dollars.
[/output]
[/test]
[test]
[input]
Tea
Normal
50
[/input]
[output]
You bought 50 cups of Tea for 24.00 dollars.
[/output]
[/test]
[test]
[input]
Tea
Extra
5
[/input]
[output]
You bought 5 cups of Tea for 3.50 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
