[slide hideTitle]
# Bucla While

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-5-6-7-While-Loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programare bucla numită `while` se folosește atunci când vrem să **repetăm** executarea unei anumite logici în timp ce condiția este în desfășurare.

Prin **"condiție"**, înțelegem fiecare **expresie** care returnează`true` sau `false`. 

Când **condiția** este **falsă**, bucla while este **întreruptă**, iar programul **continuă** să execute codul rămas după buclă.  

[image assetsSrc="05-use-case-while.png" /]

Bucla while arată așa:
```java
while (condition) {
  loop body;
}
```

In codul din exemplul de mai sus, condiția este orice **expresie care returnează un rezultat boolean** - `true` sau `false`. 

Aceasta determină cât timp corpul buclei va fi repetat și se numește `condi'ia buclei`. 

In acest exemplu `corpul buclei` este codul de programare executat la fiecare iterare a buclei, oricând condiția de intrare este adevărată.

In bucla while, mai întâi expresia booleană este evaluată și dacă aceasta este `true`, secvența de operații din corpul buclei este executată.  

Apoi, condiția de intrare este verificată și dacă este din nou `true`, corpul buclei este executat.

Totul se repetă mereu și mereu **până când la un moment dat expresia condițională returnează o valoare** `false`.

## Exemplu: Secvența de Numere 2k+1
Scrieți un program care imprimă toate **numerele ≤ n** al seriei: **1, 3, 7, 15, 31, …,** dacă fiecare număr următor = **numărul anterior* 2 + 1**.

Iată cum rezolvăm problema:
- Creăm o variabilă num pentru numărul curent căruia îi asignăm inițial **value of 1**
- Ca și condiție de buclă, punem **the current number <= n**
- În **corpul buclei**: imprimăm valoarea unui număr curent și creștem numărul curent folosind formula din enunțul problemei

Aici este o probă de implementare a acestei idei:
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
# Problemă cu Soluție: Descreșterea Numerelor

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


