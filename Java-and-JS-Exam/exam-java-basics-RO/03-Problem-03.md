[slide hideTitle]
# Coffee Machine
[code-task title="Coffee Machine" taskId="pb-java-exam-coffee-machine" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care calculează prețul pe care un client, care a cumpărat băuturi de la un aparat de cafea, trebuie să îl plătească:

|   | Without sugar | Normal | Extra sugar |
|---|---|---|---|
| Espresso | 0.90$ | 1$ | 1.20$ |
| Cappuccino | 1.00$ | 1.20$ | 1.60$ |
| Tea | 0.50$ | 0.60$ | 0.70$ |

Rețineți următoarele reduceri:
- La o băutură selectată fără zahăr, există o reducere de 35%.
- Cu o băutură selectată „Espresso” și ați cumpărat cel puțin 5 băuturi, există o reducere de 25%.
- Cu o sumă care depășește 15 USD, există o reducere de 20% din prețul final.

Reducerile se aplică în ordinea descrierii lor.

## Input
Veți primi 3 linii de pe consolă:
- Prima linie - băutură - șir: "Espresso", "Cappuccino" sau "Ceai"
- A doua linie - zahăr - șir: „Fără”, „Normal” sau „Extra”
- A treia linie - numărați băuturile - numărul întreg în intervalul [1 ... 50]

## Output
Imprimați o linie pe consolă:
- "You bought \{count drinks\} cups of \{drink\} for \{total price\} dollars."
	 - Prețul trebuie formatat la a doua cifră după punctul zecimal.

## Exemple
| **Input** | **Output** |
| --- | --- |
| Espresso | You bought 10 cups of Espresso for 4.39 dollars. |
| Without |  |
| 10 |  |

### Comentarii
- Sunt selectate 10 cupe de espresso fără zahăr 0,90 fiecare -> 9 $
- 35% reducere pentru o băutură fără zahăr de 9 $ -> 3,15 -> 9 - 3,15 = 5,85
- 25% reducere la achiziționarea a cel puțin 5 cupe de espresso. 25% din 5,85 -> 1,4625
- 5,85 - 1,4625 -> 4,3875

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
[test]
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