[slide]
# Tipuri Booleene și de Caractere

[vimeo-video startTimeInSeconds="1741" endTimeInSeconds="2220"]
[stream language="EN" videoId="425081520" default /]
[stream language="RO" videoId="425084744"  /]
[/vimeo-video]

Un tip de date boolean este declarat cu cuvântul cheie **boolean** cu două opțiuni de valoare: **true** sau **false**:

```java live
 int firstNumber = 5;
 int secondNumber = 10;

 boolean firstBoolean = true;
 boolean secondBoolean = false;

 if (firstNumber < secondNumber) {
  System.out.println(firstBoolean);
 } else {
  System.out.println(secondBoolean);
 }       
```

# Tipul Caracterului
Tipul de date char este utilizat pentru a stoca un caracter**unic**. Personajul trebuie să fie înconjurat de ghilimele unice, cum ar fi `'A'` sau `'c'`.

```java live
char myGrade = 'B';
System.out.println(myGrade);
```

De asemenea, personajul:

* Oferă fiecărui simbol un cod întreg corespunzător.

* Are o valoare implicită `\0`.

* Ia 16 biți de memorie \(de la**U+0000** la **U+FFFF**\).

* Deține un singur caracter Unicode \(sau o parte a caracterului\).

```java live
char ch = 'a';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'b';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'A';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);
```

În exemplul de mai sus convertim fiecare caracter la valoarea sa **ASCII**. **Tabelul ASCII** este acronimul pentru `American Standard Code for Information Interchange`.
Este un cod pentru reprezentarea a 128 de caractere englezești ca numere, fiecărei litere i se atribuie un număr de la 0 la 127. Vă încurajăm să îl cercetați singur!
[/slide]

[slide hideTitle]
# Problem: Special Numbers
[code-task title="Problem: Special Numbers" taskId="java-fund-Data-Types-Special-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Descriere
Un **număr** este **special** când **suma cifrelor sale este 5, 7 sau 11**.

Scrieți un program pentru a citi un număr întreg **n** și pentru toate numerele din intervalul **1 ... n** pentru a imprima numărul și dacă este special sau nu **(True / False)**.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 15 | 1 -> False|
|  | 2 -> False |
|  | 3 -> False |
|  | 4 -> False |
|  | 5 -> True |
|  | 6 -> False |
|  | 7 -> True |
|  | 8 -> False |
|  | 9 -> False |
|  | 10 -> False |
|  | 11 -> False |
|  | 12 -> False |
|  | 13 -> False |
|  | 14 -> True |
|  | 15 -> False |
 
### Sugestii
Pentru a calcula suma cifrelor unui număr dat **num**, puteți repeta următoarele: suma ultimei cifre **(num % 10)** și scoaterea acesteia **(sum = sum / 10)** până la **num** ajunge la **0**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
15
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 -\> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
[/output]
[/test]
[test]
[input]
75
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
41 -\> True
42 -\> False
43 -\> True
44 -\> False
45 -\> False
46 -\> False
47 -\> True
48 -\> False
49 -\> False
50 -\> True
51 -\> False
52 -\> True
53 -\> False
54 -\> False
55 -\> False
56 -\> True
57 -\> False
58 -\> False
59 -\> False
60 -\> False
61 -\> True
62 -\> False
63 -\> False
64 -\> False
65 -\> True
66 -\> False
67 -\> False
68 -\> False
69 -\> False
70 -\> True
71 -\> False
72 -\> False
73 -\> False
74 -\> True
75 -\> False
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Special Numbers
[code-task title="Problem: Special Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
    // Write your solution here
}
```
[/code-editor]
[task-description]
## Descriere
Un **număr** este **special** când **suma cifrelor sale este 5, 7 sau 11**.

Scrieți un program pentru a citi un număr întreg **n** și pentru toate numerele din intervalul **1 ... n** pentru a imprima numărul și dacă este special sau nu **(True / False)**.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 15 | 1 -> False|
|  | 2 -> False |
|  | 3 -> False |
|  | 4 -> False |
|  | 5 -> True |
|  | 6 -> False |
|  | 7 -> True |
|  | 8 -> False |
|  | 9 -> False |
|  | 10 -> False |
|  | 11 -> False |
|  | 12 -> False |
|  | 13 -> False |
|  | 14 -> True |
|  | 15 -> False |
 
### Sugestii
Pentru a calcula suma cifrelor unui număr dat **num**, puteți repeta următoarele: suma ultimei cifre **(num % 10)** și scoaterea acesteia **(sum = sum / 10)** până la **num** ajunge la **0**.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
15
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 -\> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
[/output]
[/test]
[test]
[input]
75
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
41 -\> True
42 -\> False
43 -\> True
44 -\> False
45 -\> False
46 -\> False
47 -\> True
48 -\> False
49 -\> False
50 -\> True
51 -\> False
52 -\> True
53 -\> False
54 -\> False
55 -\> False
56 -\> True
57 -\> False
58 -\> False
59 -\> False
60 -\> False
61 -\> True
62 -\> False
63 -\> False
64 -\> False
65 -\> True
66 -\> False
67 -\> False
68 -\> False
69 -\> False
70 -\> True
71 -\> False
72 -\> False
73 -\> False
74 -\> True
75 -\> False
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Reversed Chars
[code-task title="Problem: Reversed Chars" taskId="java-fund-Data-Types-Reversed-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Descriere
Scrieți un program care să ia 3 rânduri de caractere și să le imprime în ordine inversă cu un spațiu între ele.

## Exemple
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
# Solution: Reversed Chars
[code-task title="Problem: Reversed Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Pr7ReversedChars {
  public static void main(String[] args) {
    // Write your solution here
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care să ia 3 rânduri de caractere și să le imprime în ordine inversă cu un spațiu între ele.

## Exemple
|**Intrare**|**Ieșire**|
|-----|------|
| A | C B A |
| B |  |
| C |  |

|**Intrare**|**Ieșire**|
| --- | --- |
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

[slide]

# Caracterele  Scăpate
Deoarece șirurile trebuie scrise între ghilimele, Java va înțelege greșit acest șir și va genera o eroare:

```Java
String txt = "We are the so-called "Vikings" from the north.";
```

Soluția pentru a evita această problemă este să folosiți caracterul de ieșire inversă.

Caracterul de bară inversă \(\\\) transformă caracterele speciale în caractere șir:

**Caracter de Scăpare**:
- \\' -> '  Single quote;
- \\" -> "  Double quote;
- \\\ -> \\ Backslash;

Secvența `\" `inserează un ghilimel dublu într-un șir:

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
