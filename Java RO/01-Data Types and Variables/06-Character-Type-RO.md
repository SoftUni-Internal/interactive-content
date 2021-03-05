# Character Type

[slide hideTitle]

# Tipul Caracterului

Tipul de date char este utilizat pentru a stoca un caracter**unic**.

Personajul trebuie să fie înconjurat de ghilimele unice, cum ar fi `'A'` sau `'c'`.

```java live
char myGrade = 'B';
System.out.println(myGrade);
```

De asemenea, personajul:

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

There is an integer value behind each character. 

This value corresponds to a letter in the Unicode table.

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

The Unicode table is separated into different parts and almost all living languages are represented in it.

[/slide]


[slide hideTitle]
# Problem with Solution: Reversed Chars

[code-task title="Reversed Chars" taskId="java-fund-1-data-types-lab-reversed-chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that accepts an input of 3 lines of characters and prints them in reversed order with a space between them.

## Examples
|**Input**|**Output**|
|-----|------|
| A | C B A |
| B |  |
| C |  |

|**Input**|**Output**|
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
# Caracterele Scăpate
Deoarece șirurile trebuie scrise între ghilimele, Java va înțelege greșit acest șir și va genera o eroare:

```Java
String txt = "We are the so-called "Vikings" from the north.";
```

Soluția pentru a evita această problemă este să folosiți caracterul de ieșire inversă.

Caracterul de bară inversă \(\\\) transformă caracterele speciale în caractere șir:

**Caracter de Scăpare**:

|Escape Sequence |Character| Description|
|-----|--------|--------|
|\\'|**'**       |Single quote|
|\\"  |**''**      |Double quote|
|\\\  |**\\**     |Backslash|


Secvența `\"` inserează un ghilimel dublu într-un șir:

```Java live
String txt = "We are the so-called \"Vikings\" from the north.";
System.out.println(txt);
```

Secvența `\'` inserează un singur ghilimel într-un șir:

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
# Character Literals

Character literals are all the character expressions that are embedded in Java. 

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
