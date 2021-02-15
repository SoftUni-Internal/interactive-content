[slide hideTitle]

# Condițile If-Else
Construcția `if` poate conține, de asemenea, o clauză `else` pentru a da o acțiune specifică în cazul în care expresia Boolean (care este setată la începutul `if (expresia bool)`) returnează un rezultat negativ (`false`).

Construită astfel, **declarația condițională** se numește `if-else` și comportamentul său este după cum urmează:
* În cazul în care rezultatul condiției este pozitiv (`true`) - vom efectua unele acțiuni
* Când este negativ („false”) - alt ceva

[image assetsSrc="02-usecase-if-else-statement.png" /]

Formatul construcției este:
```java
if (condition) {
  // condition body;
} else {
  // else construction body;
}
```

În cazul în care condiția este `false`, declarație else se execută.

Deoarece o condiție nu poate fi in același timp „true” și „false”, declarația then și declarația else a unei declarații `if-else` nu pot **fi executate niciodată ambele**.

După declarația then sau declarația `else`, controlul este transferat la următoarea declarație care este după declarație `if`.

Într-o declarație `if` care nu include o declarație else, dacă condiția este `true`, atunci declarația then este executată.

Dacă condiția este `false`, controlul este transferat la următoarea declarație care este după declarație` if`.

Atât declarația then, cât și declarația else pot consta dintr-o singură declarație sau mai multe declarații care sunt încadrate între paranteze `{}`.

Pentru o singură declarație, parantezele sunt opționale, dar recomandate.

Declarația sau declarațiile din declarația then și declarația else pot fi de orice fel, inclusiv de alta dacă declarația care  este imbricată în  interiorul declarației originale if.
[/slide]

[slide hideTitle]
# Exemplu: vreme


Aceasta este o versiune extinsă a exemplului din slide-ul anterior.

După cum puteți vedea acum, avem un alt caz, care va fi executat atunci când condiția din declarați `if` se dovedește  sa fie ** false **.
```java
Scanner scanner = new Scanner(System.in);
String weather = scanner.nextLine();

if (weather.equals("rainy")) {
    System.out.println("Take an umbrella!");
} else {
    System.out.println("Leave your umbrella at home!")
}
```
[/slide]

[slide hideTitle]
# Bloc de cod

Când avem **o singură comandă** în corpul construcției **if**, putem **sări peste parantezele buclate**, indicând corpul operatorului condiționat.

Când dorim să executăm **bloc de cod** (grup de comenzi), parantezele buclate sunt **necesare**. 

În cazul în care le eliminăm, **numai prima linie** după clauza **if** va fi executată.
Mai jos avem  un exemplu în care eliminarea parantezele buclate  ne  duce la o confuzie:
```java live
String color = "red";
if (color.equals("red")) 
  System.out.println("tomato");
else
  System.out.println("banana");
System.out.println("lemon"); 
```

Cu paranteze buclate:
```java live
String color = "red";
if (color.equals("red")) {
  System.out.println("tomato");
  System.out.println("strawberry"); 
} else {
  System.out.println("banana");
  System.out.println("lemon");
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Even or Odd
[code-task title="Even or Odd" taskId="pb-java-Conditional-Statements-even-or-odd"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program, care verifică dacă un număr este **even** sau **odd**

   * Dacă este even, tipăriți **even**
   * Dacă este odd, tipăriți **odd**
# Exemplu

| **Input** | **Output** | 
| ---- | ---- |
| 4 | even|
| 7 | odd |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]



[slide hideTitle]
# Problem with Solution: Greater Number
[code-task title="Greater Number" taskId="pb-java-Conditional-Statements-greater-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program, care găsește cel mai mare dintre două numere:

   * Citiți două **numere întregi**
   * Găsiți numărul mai mare
   * Imprimați `Greater number: ` + numărul **mai mare**
# Exemplu

| **Input** | **Output** | 
| ---- | ---- |
| 4 | Greater number: 8 |
| 8 |

[/task-description]
[tests]
[test]
[input]
4
8
[/input]
[output]
Greater number: 8
[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
Greater number: 7
[/output]
[/test]
[test]
[input]
1
2
[/input]
[output]
Greater number: 2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


