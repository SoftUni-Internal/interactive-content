# Tipul Caracter

[slide hideTitle]

# Tipul de Date Caracter
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-38-40-character-type-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tipul de date **char** este utilizat pentru stocarea unui **singur** caracter.

Caracterul trebuie să fie încadrat de ghilimele unice: `'A'`, `'c'`.

```java live
char myGrade = 'B';
System.out.println(myGrade);
```

De asemenea, tipul de date caracter are următoarele caracteristici:

* Atribuie fiecărui simbol un cod ASCII corespunzător

* Are valoarea implicită `\0`

* Rezervă 16 biți de memorie \(de la **U+0000** la **U+FFFF**\)

* Conține un singur caracter Unicode \(sau o parte a caracterului\)

```java live
char ch = 'a';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'b';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'A';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);
```

În exemplul de mai sus convertim fiecare caracter în valoarea sa **ASCII**. 

**ASCII** este acronimul pentru **American Standard Code for Information Interchange**.

Este un cod standard pentru reprezentarea a 128 de caractere ca numere. Fiecărui caracter i se atribuie un număr de la 0 la 127. 

Puteți găsi mai multe informații despre tabelul ASCII online.

## Unicode

Există o valoare întreagă pentru fiecare caracter.

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

Tabelul Unicode este separat în diferite părți și aproape toate limbile existente sunt reprezentate cu ajutorul acestuia.

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Reversed Chars

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/java-fund-data-types-and-variables-41-problem-and-solution-reversed-chars-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Creați un program care acceptă o intrare care constă în 3 linii de caractere și le imprimă în ordine inversă, separate de un spațiu.
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
# Caractere de Evadare (Escape Characters)

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-43-escaping-characters-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare limbaj de programare, inclusiv Java, are câteva caractere rezervate care nu pot fi utilizate direct.

Un exemplu în acest sens îl reprezintă ghilimelele duble în șiruri.


```Java
String txt = "We are the so-called "Vikings" from the north.";
```


Pentru a evita această problemă, adăugăm o bară oblică \(\\\), care este utilizată drept caracter de evadare.

Caracterul de evadare \(\\\) transformă caracterele speciale în caractere de tip șir:

**Caractere de evadare**:

|Secvență de evadare |Caracter| Descriere|
|-----|--------|--------|
|\\'|**'**       |Ghilimele unice|
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

Secvența `\\` inserează o singură bară oblică într-un șir:

```Java live
String txt = "The character \\ is called backslash.";
System.out.println(txt);
```

[/slide]

[slide hideTitle]
# Literali de Tip Caracter

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-44-character-literals-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Literalii de tip caracter sunt toate expresiile de tip caracter care sunt încorporate în Java. 

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
