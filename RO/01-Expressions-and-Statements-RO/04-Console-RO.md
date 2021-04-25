[slide hideTitle]
# Consolă (Terminal)

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-13-14-reading-user-input-and-formatting-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În general, **consola sistemului** reprezintă un terminal pentru text, ceea ce înseamnă că acceptă și permite vizualizarea comenzilor sub formă de **text**, fără elemente grafice cum ar fi butoane, meniuri, etc.

De obicei, arată ca o fereastră de culoare neagră ca aceasta:

[image assetsSrc="00.Console-example.png" /]

În majoritatea sistemelor de operare, **consola** este disponibilă ca o aplicație independentă pe care o putem utiliza pentru a rula comenzile computerului.

Aceasta se numește **Command Prompt** în Windows, și **Terminal** în Linux și Mac.

Consola rulează aplicații pentru consolă. 

Acestea citesc textul de pe linia de comandă și imprimă ieșirea sub formă de text. 

Vom învăța programare în principal prin crearea **aplicațiilor de consolă**.

**IntelliJ IDEA** are propria sa consolă, pe care o vom folosi pentru a **citi intrarea** și a **imprima ieșirea**:
[image assetsSrc="intro-to-programming-console.png" /]

[/slide]

[slide hideTitle]
# Tipărirea și Formatarea Textului și a Numerelor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Utilizarea metodelor `System.out.print(…)` și `System.out.println(…)`
Lucrul cu aceste metode este ușor, deoarece pot imprima toate tipurile elementare de date (șiruri, tipuri numerice și primitive).

Mai jos avem câteva exemple de tipărire a diferitelor tipuri de date:

```java live
System.out.println("Hello World");
System.out.println(5);
System.out.println(3.14159265358979);
```

După cum vedem prin folosirea `System.out.println(...)` este posibilă tipărirea a diferite tipuri de date, deoarece pentru fiecare tip există o versiune predefinită a metodei `println(...)`.

Diferența dintre `print(...)` și `println(...)` este că metoda `print(...)` tipărește pe consolă ceea ce este specificat între paranteze și nu face nimic în plus, în timp ce metoda `println(...)` tipărește conținutul specificat pe o linie **separată**.

De fapt, metoda nu imprimă o nouă linie, ci pur și simplu folosește o **comandă pentru a muta** cursorul în poziția în care începe linia nouă (această comandă constă din caracterul `\r` urmat de `\n`).

Mai jos avem un exemplu care ilustrează diferența dintre `print(...)` și `println(...)`:

```java live
System.out.println("I love");
System.out.print("this ");
System.out.print("course!");
```
Observăm că rezultatul acestui exemplu este tipărit pe două linii, chiar dacă codul este pe trei.

Acest lucru se întâmplă pentru că pe prima linie de cod folosim `println(...)` care tipărește **"I love"** și apoi trece la o nouă linie.

Următoarele două comenzi folosesc metoda `print(...)`, care tipărește conținutul fără să treacă la o nouă linie și astfel cuvintele "**this**" și "**course!**" rămân pe aceeași linie.

## Formatare
În Java, atunci când se imprimă un text, numere și alte date pe consolă, **le putem alătura** folosind șabloane precum `%s`,`%d`, `%f`:
* `%s` - formatare **string** (șir)
* `%d` - formatare **integer** (număr întreg)
* `%f` - formatare **floating-point numbers** (numere în virgulă mobilă)

În programare, aceste șabloane se numesc **substituenți**. 

Acesta este un exemplu simplu:

```java live
System.out.printf("%d + %d = %d", 3, 5, 3 + 5);
```

Substituenții `%d` sunt înlocuiți cu expresiile date după text.


[/slide]

[slide hideTitle]

# Exemplu: Formatarea Textelor și Numerelor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Citirea Datelor Introduse de Utilizator

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-15-reading-user-input-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a citi un **text** (șir) de pe consolă, trebuie să **declarăm o nouă variabilă** și să folosim comanda standard **pentru citirea unui text de pe consolă**:

```java 
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
```

În mod implicit, metoda `scanner.nextLine()` returnează **un rezultat de tip text** - o linie de text, citită de pe consolă.

- După ce ați citit un text de pe consolă, în plus, puteți **parsa textul** la un număr întreg prin `Integer.parseInt(...)` sau un număr zecimal prin  `Double.parseDouble(...)`

- Dacă parsarea la un număr nu este posibilă, **fiecare număr** va fi considerat ca fiind **un text** și **nu putem executa** operații aritmetice cu acesta

## Exemplu: Home Town
Să scriem un program care cere utilizatorului orașul natal și imprimă textul `I am from {homeTown}!`.

```java
Scanner scanner = new Scanner(System.in);
String homeTown = scanner.nextLine();
System.out.printf("I am from %s!", homeTown);
```

În acest caz, expresia `%s` este înlocuită cu valoarea variabilei `homeTown`.

Dacă introducem **"Bucharest"**, rezultatul va fi după cum urmează:
```
I am from Bucharest!
```
[/slide]

[slide hideTitle]

# Exemplu: Citirea Datelor Introduse de Utilizator

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Citirea Numerelor Întregi

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-18-reading-integers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a citi un **număr întreg** (nu unul în virgulă mobilă) de pe consolă, trebuie să **declarăm o variabilă**, să declarăm **tipul de dată** și să folosim comanda standard pentru **citirea unei linii de text** din consola sistemului: `scanner.nextLine()`.

După aceea, **trebuie să transformăm linia de text într-un număr întreg** folosind `Integer.parseInt(text)`:

```java
Scanner scanner = new Scanner(System.in);
int num = Integer.parseInt(scanner.nextLine());
```

Linia de mai sus **citește un număr întreg** de pe consolă.

Dacă încercăm să introducem simboluri care nu pot fi interpretate ca numere, de exemplu "**hello**", vom primi un mesaj de eroare în timpul rulării (excepție). 

Mai târziu, vom afla cum putem găsi aceste tipuri de erori și cum putem determina utilizatorul să introducă din nou un număr.
[/slide]

[slide hideTitle]
# Exemplu: Calculating a Square Area

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-18-reading-integers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Acest cod demonstrează modul în care putem calcula suprafața unui pătrat după lungimea dată a laturii:

```java
Scanner scanner = new Scanner(System.in);
System.out.print("a = ");              
int a = Integer.parseInt(scanner.nextLine());
int area = a * a;
System.out.print("Square area = ");
System.out.println(area);
```

Mai jos vom vedea cum ar funcționa programul dacă am avea un pătrat cu o lungime a laturii egală cu 3:

[image assetsSrc="expressions-and-statements-console-example-area.png" /]
[/slide]

[slide hideTitle]

# Citirea Numerelor în Virgulă Mobilă (Float)

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-19-reading-floating-point-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a citi un **număr în virgulă mobilă (float)** (număr fracționar, neîntreg) de pe consolă, utilizați următoarea comandă:
```java
Scanner scanner = new Scanner(System.in);
double num = Double.parseDouble(scanner.nextLine());
```
Codul Java de mai sus citește mai întâi o **linie de text** din consolă, apoi o convertește (parsează) într-un **număr în virgulă mobilă (float)**.

[/slide]

[slide hideTitle]

# Exemplu: Converting Inches into Centimeters

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-19-reading-floating-point-numbers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să scriem un program care citește un număr în virgulă mobilă (float) în inchi și îl convertește în centimetri:

```java
Scanner scanner = new Scanner(System.in);
System.out.print("Inches = ");              
double inches = Double.parseDouble(scanner.nextLine());
double centimeters = inches * 2.54;
System.out.print("Centimeters = ");
System.out.println(centimeters);
```

Să rulăm programul și să ne asigurăm că atunci când este introdusă o valoare în inchi, obținem o ieșire corectă în centimetri:

[image assetsSrc="expressions-and-statements-console-example-2.png" /]

Rețineți că, dacă introduceți un **tip de date non-valid**, de ex. "**someText**", programul se va bloca și va afișa un mesaj de eroare (excepție).

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Greeting

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-20-21-problem-and-solution-greeting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Greeting" taskId="pb-java-expressions-greeting" executionStrategy="java-code" requiresInput]
[code-editor language="java"]

```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      // Scrieți codul dvs. aici
  }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un **program** care:

* Citește o intrare de la utilizator - **name**, de pe consolă
* Tipărește "**Hello**, \{**name**\}**!**", unde "\{**name**\}" este intrarea utilizatorului

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| Peter | Hello, Peter! |

[/task-description]
[tests]
[test open]
[input]
Peter
[/input]
[output]
Hello, Peter!
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie!
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd!
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


