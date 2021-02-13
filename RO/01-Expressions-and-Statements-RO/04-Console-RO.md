[slide hideTitle]
# Consolă (terminal)

În general, **consola sistemului** reprezintă un terminal de text, ceea ce înseamnă că acceptă și vizibilizează doar **textul** fără elemente grafice, cum ar fi butoane, meniuri,

De obicei, arată ca o fereastră de culoare neagră ca aceasta:

[image assetsSrc="00.Console-example.png" /]

În majoritatea sistemelor de operare, **consola** este disponibilă ca o aplicație independentă pe care imprimăm comenzile consolei.

Acesta se numește **Command Prompt** în Windows, și **Terminal** în Linux și Mac.

Consola rulează aplicații pentru consolă. Aplicațiile citesc textul de pe linie de comanda și imprimă textul pe consolă. Vom învăța programarea în principal prin crearea **aplicațiilor de consolă**.

**IntelliJ IDEA** are propria sa consolă, pe care o vom folosi pentru a **citi intrarea** și a **imprima ieșirea**:
[image assetsSrc="intro-to-programming-console.png" /]

[/slide]

[slide hideTitle]
# Tipărirea și formatarea textului și a numerelor

## Utilizarea `System.out.print(…)` and `System.out.println(…)`
Lucrul cu aceste metode este ușor, deoarece pot imprima toate tipurile de bază (șiruri, tipuri numerice și primitive).

Mai jos avem câteva exemple de tipărire a diferitelor tipuri de date:

```java live
System.out.println("Hello World");
System.out.println(5);
System.out.println(3.14159265358979);
```

După cum vedem prin folosirea `System.out.println (...)` este posibil să tipăriți diferite tipuri de date deoarece pentru fiecare tip există o versiune predefinită a metodei `println (...)`.

Diferența dintre `print (...)` și `println (...)` este că metoda `print (...)` tipărește pe consolă ceea ce este specificat între paranteze nu și nu face nimic în plus în timp ce metoda `println (...) `înseamnă **„ tipărire de linie ”**.

Această metodă face ceea ce face `println (...)`, dar în plus se duce la o nouă linie.

De fapt, metoda nu imprimă o nouă linie, ci pur și simplu pune o **comandă pentru a muta** cursorul în poziția în care începe linia nouă (această comandă constă din caracterul `\ r` urmat de` \ n`) .

Mai jos avem un exemplu, care ilustrează diferența dintre `print (...)` și `println (...)`:
```java live
System.out.println("I love");
System.out.print("this ");
System.out.print("course!");
```
Observăm că rezultatul acestui exemplu este tipărit pe două linii, chiar dacă codul este pe trei.

Acest lucru se întâmplă pentru că pe prima linie de cod folosim `println (...)` care tipărește **I love ** și apoi mergem la o nouă linie.

În următoarele două rânduri ale codului se folosește metoda `print (...), care tipărește fără să meargă pe o nouă linie și astfel cuvintele **this** și **course!** rămân pe aceeași linia.

## Formatare
În Java, atunci când se imprimă un text, numere și alte date de pe consola, **le putem alătura** folosind template-uri `% s`,`% d`, `% f` etc.
* `%s` - formatare **string** 
* `%d` - formatare **integer** 
* `%f` - formatare **floating-point numbers** 

În programare, aceste template-uri se numesc **substituenți**. Acesta este un exemplu simplu:
```java live
System.out.printf("%d + %d = %d", 3, 5, 3 + 5);
```

Substituentii `%d` se înlocuiesc cu expresiile date după text.



[/slide]

[slide hideTitle]

# Example: Formatting Text and Numbers

interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-demo

[/slide]

[slide hideTitle]
# Citirea datelor introduse de utilizator
Pentru a citi un **text** (șir) de pe consolă, din nou, trebuie să **declarăm o nouă variabilă** și să folosim comanda standard **pentru citirea unui text de pe consolă**:
```java 
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
```

În mod implicit, metoda `scanner.nextLine ()` returnează **rezultatul textului** - o linie de text, citită de pe consolă.
- După ce ați citit un text de pe consolă, în plus, puteți **parsa textul** cu un număr întreg prin `Integer.parseInt (...)` sau un număr zecimal prin  `Double.parseDouble (...)`.
- Dacă parsarea cu un număr nu este posibila, **fiecare număr** va fi pur și simplu **un text** și **nu putem executa** operații aritmetice cu acesta.

# Exemplu: Home Town
Să scriem un program care cere utilizatorului orașul natal și imprimă textul `"I am from {homeTown}!"`.

```java
Scanner scanner = new Scanner(System.in);
String homeTown = scanner.nextLine();
System.out.printf("I am from %s!", homeTown);
```

În acest caz, expresia `% s` este înlocuită cu valoarea variabilei` homeTown`.

Dacă introducem **Sofia**, rezultatul va fi după cum urmează:
```
I am from Sofia!
```
[/slide]

[slide hideTitle]

# Example: Reading User Input

interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input + 

interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input-demo

[/slide]

[slide hideTitle]

# Example: Reading User Input

interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input + 

interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input-demo

[/slide]


[slide hideTitle]
# Citirea întregilor
Pentru a citi un **întreg** (nu un float) **număr** de pe consolă, trebuie să **declarăm o variabilă**, să declarăm **tipul de număr** și să folosim comanda standard pentru **citirea unei linii de text** din consola sistemului `scanner.nextLine ()` și după aceea **să transformăm linia de text într-un număr întreg** folosind `Integer.parseInt (text)`:

```java
Scanner scanner = new Scanner(System.in);
int num = Integer.parseInt(scanner.nextLine());
```
Linia de mai sus a codului Java **citește un număr întreg** din prima linie de pe consolă.

Încercați să scrieți un număr greșit, de exemplu **hello**.

Veți primi un mesaj de eroare în timpul rulării (excepție). Asta este normal.

Mai târziu, vom afla cum putem găsi aceste tipuri de erori și putem determina utilizatorului să introducă din nou un număr.
[/slide]

[slide hideTitle]
# Exemplu: Calcularea unei suprafețe pătrate

Acest cod demonstrează modul în care putem calcula suprafața pătrată după lungimea dată a laturii:
```java
Scanner scanner = new Scanner(System.in);
System.out.print("a = ");              
int a = Integer.parseInt(scanner.nextLine());
int area = a * a;
System.out.print("Square area = ");
System.out.println(area);
```
Mai jos vom vedea cum ar funcționa programul dacă am avea un pătrat cu o lungime laterală egală cu 3:

[image assetsSrc="expressions-and-statements-console-example-area.png" /]
[/slide]

[slide hideTitle]



# Citirea numerelor reale reprezentate în virgulă mobilă cu simplă precizie (float)

Pentru a citi un **număr real reprezentat în virgulă mobilă cu simplă precizie (float)** (număr fracțional, neîntreg) de pe consolă, utilizați următoarea comandă:
```java
Scanner scanner = new Scanner(System.in);
double num = Double.parseDouble(scanner.nextLine());
```
Codul Java de mai sus citește mai întâi o **linie de text** din consolă, apoi o convertește (parsează) într-un **număr real reprezentat în virgulă mobilă cu simplă precizie (float)**.

# Exemplu: Conversia inch în centimetri
Să scriem un program care citește un număr real reprezentat în virgulă mobilă cu simplă precizie (float) în inci și îl convertește în centimetri:
```cs
Scanner scanner = new Scanner(System.in);
System.out.print("Inches = ");              
double inches = Double.parseDouble(scanner.nextLine());
double centimeters = inches * 2.54;
System.out.print("Centimeters = ");
System.out.println(centimeters);
```

Să începem programul și să ne asigurăm că atunci când este introdusă o valoare în inci, obținem un rezultat corect în centimetri:

[image assetsSrc="expressions-and-statements-console-example-2.png" /]

Rețineți că, dacă introduceți și **un număr nevalid**, de ex. **asfd**, programul se va bloca cu un mesaj de eroare (excepție).

Vom învăța cum să gestionăm excepțiile în cursurile ulterioare.
[/slide]

[slide hideTitle]
# Problemă cu soluția: Greeting
[code-task title="Greeting" taskId="pb-java-expressions-greeting" executionStrategy="java-code" requiresInput]
[code-editor language="java"]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      // write code here
  }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un **program**, care:

* Citește o intrare de utilizator - **name**, de pe consolă
* Tipărește "Hello, \{name\}!", unde \{name\} este intrarea utilizatorului
# Exemplu:

| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter! |
|  |  |
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


