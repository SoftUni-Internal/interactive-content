[slide hideTitle]
# Bucla While

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-5-6-7-While-Loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În programare **bucla while** se folosește atunci când vrem să **repetăm** executarea unei anumite logici până când o condiție este atinsă.

Prin **"condiție"** înțelegem fiecare **expresie** care returnează `true` sau `false`. 

Când **condiția** returnează `false`, bucla while este **întreruptă**, iar programul **continuă** să execute codul rămas după buclă.  

[image assetsSrc="05-use-case-while.png" /]

Bucla while arată așa:
```java
while (condition) {
  loop body;
}
```

În codul din exemplul de mai sus, condiția este orice **expresie care returnează un rezultat boolean** - `true` sau `false`. 

Aceasta determină numărul de repetiții al corpul buclei și se numește `condiția buclei`. 

În acest exemplu `corpul buclei` este codul de programare executat la fiecare iterație a buclei, oricând condiția de intrare este adevărată.

În bucla while, mai întâi este evaluată expresia booleană și dacă aceasta este `true`, secvența de operații din corpul buclei este executată.  

Apoi, condiția de intrare este verificată și dacă este din nou `true`, corpul buclei este executat.

Totul se repetă din nou și din nou **până când la un moment dat expresia condițională returnează valoarea** `false`.

## Exemplu: Sequence of Numbers 2k+1
Scrieți un program care imprimă toate **numerele ≤ n** din seria: **1, 3, 7, 15, 31, …,** unde fiecare număr următor = **numărul anterior* 2 + 1**.

Iată cum rezolvăm problema:
- Creăm o variabilă **num** pentru numărul curent, căruia îi asignăm inițial **valoarea 1**
- Ca și condiție de buclă, specificăm că **numărul curent trebuie să fie mai mic sau egal cu `n`**
- În **corpul buclei**: imprimăm valoarea numărului curent și mărim numărul curent folosind formula din enunțul problemei

Aici este un exemplu de implementare a acestei idei:
```java
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
# Problemă cu Soluție: Decreasing Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-8-Problem-and-solution-Decreasing-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Decreasing Numbers" taskId="java-basics-while-loop-decreasing-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Citește un număr de pe consolă
* Imprimă numerele aflate între **numărul citit de pe consolă** și **1 (inclusiv)**, fiecare pe o linie nouă
## Exemplu

| **Intrare** | **Ieșire** |
| ---- | ---- |
| 4 | 4 |
|| 3 |
|| 2 |
|| 1 |

[/task-description]
[tests]
[test open]
[input]
4
[/input]
[output]
4
3
2
1
[/output]
[/test]
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
# Problemă cu Soluție: Number in Range

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-10-11-Problem-and-solution-Number-in-range-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Number in Range" taskId="java-basics-while-loop-number-in-range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Citește un **număr** de pe consolă
* Verifică dacă numărul este în intervalul dintre **1 și 100**
* Dacă nu este - citește **un nou număr**
* Dacă este - **imprimă numărul** și programul se oprește

## Exemplu

| **Intrare** | **Ieșire** |
| ---- | ---- |
| -10 | 50 |
| 101 |
| 50 |

[/task-description]
[tests]
[test open]
[input]
-10
101
50
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
-5
104
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


