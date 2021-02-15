[slide hideTitle]
# For Loop
În programare este adesea necesar să efectuați un bloc de comenzi de mai multe ori.

Pentru a face acest lucru, sunt utilizate așa-numitele **bucle**.

Să examinăm un exemplu de buclă `for` care trece secvențial prin numerele de la 1 la 10 și le imprimă:
```java live
for (int i = 1; i <= 10; i += 1) {
  System.out.println(i);
}
```

Blocul de cod poate fi explicat cu această diagramă de caz de utilizare:

[image assetsSrc="04-for-loop-use-case.png" /]

Bucla începe cu operatorul `for` și trece prin toate valorile pentru o anumită variabilă dintr-un interval dat, de exemplu numerele de la 1 la 10 (incluse) și pentru fiecare valoare efectuează o serie de comenzi.
[/slide]

[slide hideTitle]
# Sintaxă: For-Loop
La declararea buclei, puteți specifica o **valoare inițială** și o **valoare finală**.

**Corpul** buclei este de obicei închis între paranteze `{ }` și reprezintă un bloc de **una sau mai multe comenzi**.

Blocul de cod de mai jos arată structura unei bucle `for`:
```
for (initialization; condition; update) {
  loop's body;
}
```
Se compune din:
* O **parte de inițializare** pentru contor (în modelul `int i = 0`)
* O condiție **booleană** (`i < 10`) 
* O expresie pentru **actualizarea** contorului (``i += 1``)
* Corpul buclei

În majoritatea cazurilor, o buclă `for` se execută între `1` și `n` ori (de exemplu de la 1 la 10).

Scopul buclei este de a trece secvențial prin numerele 1, 2, 3, …, n și ca fiecare dintre ele să efectueze o anumită acțiune.

În primul exemplu, variabila `i` acceptă valori de la 1 la 10 și valoarea **curent** este imprimată în corpul buclei.

Bucla se repetă de 10 ori și fiecare dintre aceste repetări se numește **"iterație"**.
[/slide]


[slide hideTitle]
# Problem with Solution: Print Sum of N Numbers
[code-task title="Print Sum of N Numbers" taskId="java-basics-for-loop-print-sum-of-n-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Citește numărul n de pe consolă
* **Tipărește** toate numerele de la **1** la **n**
* **Adună** toate numerele de la **1** la **n**
* **Tipărește** suma de pe consolă la final

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | 1 |
|  | 2 |
|  | 3 |
|  | 4 |
|  | 5 |
|  | 15 |
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

