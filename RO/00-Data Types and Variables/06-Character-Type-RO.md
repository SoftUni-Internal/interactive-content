# Tipul Caracter

[slide hideTitle]

# Tipul Caracter
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-38-40-character-type-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tipul de date char este utilizat pentru a stoca un **singur** caracter

Caracterul ar trebui să fie înconjurat de ghilimele unice, cum ar fi `'A'` sau `'c'`.

```java live
char myGrade = 'B';
System.out.println(myGrade);
```

De asemenea, tipul de date caracter:

* Oferă fiecărui simbol un cod întreg corespunzător

* Are o valoare implicită `\0`

* Ia 16 biți de memorie \(de la**U+0000** la **U+FFFF**\)

* Deține un singur caracter Unicode \(sau o parte a caracterului\)

```java live
char ch = 'a';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'b';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'A';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);
```

În exemplul de mai sus convertim fiecare caracter la valoarea sa **ASCII**. 

**Tabelul ASCII** este acronimul pentru **American Standard Code for Information Interchange.

Este un cod pentru reprezentarea a 128 de caractere englezești ca numere, fiecărei litere i se atribuie un număr de la 0 la 127. 

Vă încurajăm să îl cercetați singur!

## Characters and Unicode

Există o valoare întreagă în spatele fiecărui caracter.

Această valoare corespunde unei litere din tabelul Unicode.

```java live
char ch = 'a';
System.out.printf("'%c' is: %d%n", ch, (int) ch);
ch = 'b';
System.out.printf("'%c' is: %d%n", ch, (int) ch);
ch = 'A';
System.out.printf("'%c' is: %d%n", ch, (int) ch);
ch = 'щ'; 
System.out.printf("'%c' is: %d%n", ch, (int) ch);
```

Tabelul Unicode este separat în diferite părți și aproape toate limbile vii sunt reprezentate în acesta.

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Reversed Chars

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-41-problem-and-solution-reversed-chars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reversed Chars" taskId="java-fund-1-data-types-lab-reversed-chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care acceptă o intrare de 3 linii de caractere și le imprimă în ordine inversată și cu spații între ele. 
## Exemplu
|**Intrare**|**Ieșire**|
|-----|------|
| A | C B A |
| B |  |
| C |  |

|**Intrare**|**Ieșire**|
|-----|------|
| 1 | & L 1 |
| L |  |
| & |  |
 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
A
B
C
[/input]
[output]
C B A
[/output]
[/test]
[test open]
[input]
1
L
&
[/input]
[output]
& L 1
[/output]
[/test]
[test]
[input]
1
2
3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
A
A
A
[/input]
[output]
A A A
[/output]
[/test]
[test]
[input]
X
a
1
[/input]
[output]
1 a X
[/output]
[/test]
[test]
[input]
(
0
)
[/input]
[output]
) 0 (
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Caractere Evadate

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-43-escaping-characters-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare limbaj de programare, inclusiv Java, are câteva caractere rezervate care nu pot fi utilizate direct.

Un exemplu în acest sens îl reprezintă ghilimelele duble în șiruri care ar trebui evitate.


```Java
String txt = "We are the so-called "Vikings" from the north.";
```


Pentru evita această problemă, adăugăm o bară inversă \ (\\\), care este utilizată ca caracter de evadare

Caracterul de bară inversă \(\\\) transformă caracterele speciale în caractere șir:

**Caractere de evadare

|Secvență de evadare |Caracter| Descriere|
|-----|--------|--------|
|\\'|**'**       |Ghilimele singulare|
|\\"  |**''**      |Ghilimele duble|
|\\\  |**\\**     |Bară oblică|


Secvența `\"` inserează ghilimele duble într-un șir:

```Java live
String txt = "We are the so-called \"Vikings\" from the north.";
System.out.println(txt);
```

Secvența `\'` inserează ghilimele unice într-un șir:

```Java live
String txt = "It\'s alright.";
System.out.println(txt);
```

Secvența `\\` inserează o singură bară inversă într-un șir:

```Java live
String txt = "The character \\ is called backslash.";
System.out.println(txt);
```

[/slide]

[slide hideTitle]
# Caractere Literale

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-44-character-literals-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Caracterele literale sunt toate expresiile de caractere care sunt încorporate în Java. 

```java
char symbol = 'a'; // An ordinary character
symbol = '\u006F'; // Unicode character code in a
symbol = `4F`; // hexadecimal format (letter 'o')
symbol = '\u8449'; // 葉 (Leaf in Traditional Chinese)
symbol = '\''; // Assigning the single quote character
symbol = '\\'; // Assigning the backslash character
symbol = '\n'; // Assigning new line character
symbol = '\t'; // Assigning TAB character
symbol = "a";  // Incorrect: use single quotes!
```

[/slide]
