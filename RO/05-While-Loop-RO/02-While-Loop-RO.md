[slide hideTitle]
# Bucla While
In programare bucla numită `while` se folosește atunci când vrem să **repetăm** executarea unei anumite logici în timp ce condiția este în desfășurare.

Prin **"condiție"**, înțelegem fiecare **expresie** care returnează`true` sau `false`. Când **condiția** este **falsă**, bucla while este **întreruptă**, iar programul **continuă** să execute codul rămas după buclă.  

[image assetsSrc="05-use-case-while.png" /]

Bucla while arată așa:
```java
while (condition) {
  loop body;
}
```

In codul din exemplul de mai sus, condiția este orice **expresie care returnează un rezultat boolean** – `true` sau `false`. 

Aceasta determină cât timp corpul buclei va fi repetat și se numește `loop condition`. 

In acest exemplu `loop body` este codul de programare executat la fiecare iterare a buclei, oricând condiția de intrare este aevărată.

In bucla while, mai întâi expresia Booleană este evaluată și dacă aceasta este `true`, secvența de operații din corpul buclei este executată.  

Apoi, condiția de intrare este verificată și dacă este din nou `true`, corpul buclei este executat.

Totul se repetă mereu și mereu **până când la un moment dat expresia condițională returnează o valoare** `false`.

# Exemplu: Secvența de Numere 2k+1
Scrieți un program care imprimă toate **numerele ≤ n** al seriei: **1, 3, 7, 15, 31, …,** dacă fiecare număr următor = **previous number * 2 + 1**.

Iată cum rezolvăm problema:
- Creăm o variabilă num pentru numărul curent căruia îi asignăm inițial **value of 1**
- Ca și condiție de buclă, punem **the current number <= n**
- În **corpul buclei**: imprimăm valoarea unui număr curent și creștem numărul curent folosind formula din enunțul problemei

Aici este o probă de implementare a acestei idei:
```java live
Scanner scanner = new Scanner(System.in);
int n = Integer.parseInt(scanner.nextLine());
int num = 1;
while (num <= n) {
  System.out.println(num);
  num = 2 * num + 1;
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Descreșterea Numerelor
[code-task title="Decreasing Numbers" taskId="java-basics-while-loop-decreasing-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care:

* Citește un număr de pe consolă
* Imprimă numerele începând de la numărul 1 (**inclusiv**)
## Exemplu

| **Input** | **Output** |
| ---- | ---- |
| 4 | 4 |
|| 3 |
|| 2 |
|| 1 |

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]



[slide hideTitle]
# Problem with Solution: Un număr din interval
[code-task title="Number in Range" taskId="java-basics-while-loop-number-in-range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Citește un **număr** de pe consolă
* Verifică dacă numărul este în intervalul dintre **1 and 100**
* Dacă nu este - citește **un nou număr**
* Dacă este - **imprimă numărul** și programul se oprește

## Exemplu

| **Input** | **Output** |
| ---- | ---- |
| -10 | 50 |
| 101 |
| 50 |

[/task-description]
[tests]
[test]
[input]
-10
101
60
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

