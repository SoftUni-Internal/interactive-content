[slide hideTitle]

# Condițile If-Else

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-18-simple-conditions-if-else-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Construcția `if` poate conține, de asemenea, o clauză `else` pentru a da o acțiune specifică în cazul în care expresia booleană (care este setată la începutul `if (expresia bool)`) returnează un rezultat negativ (`false`).

Construită astfel, **instrucțiunea  condițională** se numește `if-else` și comportamentul său este după cum urmează:
* În cazul în care rezultatul condiției este pozitiv ("**true**") - vom efectua unele acțiuni
* Când este negativ ("**false**") - altceva

[image assetsSrc="02-usecase-if-else-statement.png" /]

Formatul construcției este:
```java
if (condition) {
  // condition body;
} else {
  // else construction body;
}
```

În cazul în care condiția este "**false**", instrucțiunea else se execută.

Deoarece o condiție nu poate fi in același timp "**true**" și "**false**", instrucțiunea then și instrucțiunea  else a unei instrucțiuni `if-else` nu pot **fi executate niciodată ambele**.

După instrucțiunea  then sau instrucțiunea `else`, controlul este transferat la următoarea instrucțiune care este după instrucțiune `if`.

Într-o instrucțiune `if` care nu include o instrucțiune else, dacă condiția este "**true**", atunci instrucțiunea  then este executată.

Dacă condiția este "**false**", controlul este transferat la următoarea instrucțiune care este după declarație `if`.

Atât instrucțiunea  then, cât și instrucțiunea  else pot consta dintr-o singură instrucțiune sau mai multe instrucțiuni care sunt încadrate între paranteze `{}`.

Pentru o singură instrucțiune, parantezele sunt opționale, dar recomandate.

Instrucțiunea  sau instrucțiunile din instrucțiunea  then și instrucțiunea  else pot fi de orice fel, inclusiv de alta dacă instrucțiunea  care  este imbricată în  interiorul instrucțiunii originale if.
[/slide]

[slide hideTitle]
# Exemplu: vreme

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-18-simple-conditions-if-else-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aceasta este o versiune extinsă a exemplului din diapozitivul anterior.

După cum puteți vedea acum, avem un alt caz, care va fi executat atunci când condiția din instrucțiunea `if` se dovedește  sa fie "**false**".
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

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-19-20-block-of-code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când avem **o singură comandă** în corpul construcției **if**, putem **sări peste parantezele buclate**, indicând corpul operatorului condiționat.

Când dorim să executăm **bloc de cod** (grup de comenzi), parantezele crețate sunt **necesare**. 

În cazul în care le eliminăm, **numai prima linie** după clauza **if** va fi executată.

Mai jos avem  un exemplu în care eliminarea parantezele crețate ne  duce la o confuzie:
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
# Problemă cu soluție: Even or Odd

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-21-problem-and-solution-even-or-odd-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Scrieți un program, care verifică dacă un număr este **par** sau **impar**

   * Dacă este par, tipăriți **even**
   * Dacă este impar, tipăriți **odd**
## Exemplu

|**Intrare**|**Ieșire** |
| ---- | ---- |
| 4 | even|
| 7 | odd |

[/task-description]
[tests]
[test open]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test open]
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
# Problemă cu soluție: Greater Number

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-23-problem-and-solution-greater-numbers-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
## Exemplu

|**Intrare**|**Ieșire** |
| ---- | ---- |
| 4 | Greater number: 8 |
| 8 |

[/task-description]
[tests]
[test open]
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


