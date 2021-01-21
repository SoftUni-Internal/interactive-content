# Homework

[slide hideTitle]
# Problem: Building
[code-task title="Building" taskId="java-basics-nested-loops-building" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Imprimă informații despre ** apartamente ** (linii impare), ** birouri ** (linii pare) și ** ultimul etaj ** (ultima linie)
* Apartament "" A {buildingNum} {apartmentNum} ""
* Biroul "" O {floorNum} {officeNum} ""
* Etajul "" L {buildingNum} {apartmentNum} ""
* Numerele încep întotdeauna de la 0

## Example
| **Input** | **Output** |
| --- | --- |
| 6 | L60 L61 L62 L63 |
| 4| A50 A51 A52 A53 |
| | O40 O41 O42 O43 |
| | A30 A31 A32 A33 |
| | O20 O21 O22 O23 |
| | A10 A11 A12 A13 |

[/task-description]
[tests]
[test open]
[input]
6
4
[/input]
[output]
L60 L61 L62 L63
A50 A51 A52 A53
O40 O41 O42 O43
A30 A31 A32 A33
O20 O21 O22 O23
A10 A11 A12 A13
[/output]
[/test]
[test]
[input]
1
7
[/input]
[output]
L10 L11 L12 L13 L14 L15 L16
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
L20 L21 L22 L23 L24
A10 A11 A12 A13 A14
[/output]
[/test]
[test]
[input]
10
10
[/input]
[output]
L100 L101 L102 L103 L104 L105 L106 L107 L108 L109
A90 A91 A92 A93 A94 A95 A96 A97 A98 A99
O80 O81 O82 O83 O84 O85 O86 O87 O88 O89
A70 A71 A72 A73 A74 A75 A76 A77 A78 A79
O60 O61 O62 O63 O64 O65 O66 O67 O68 O69
A50 A51 A52 A53 A54 A55 A56 A57 A58 A59
O40 O41 O42 O43 O44 O45 O46 O47 O48 O49
A30 A31 A32 A33 A34 A35 A36 A37 A38 A39
O20 O21 O22 O23 O24 O25 O26 O27 O28 O29
A10 A11 A12 A13 A14 A15 A16 A17 A18 A19
[/output]
[/test]
[test]
[input]
5
5
[/input]
[output]
L50 L51 L52 L53 L54
O40 O41 O42 O43 O44
A30 A31 A32 A33 A34
O20 O21 O22 O23 O24
A10 A11 A12 A13 A14
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
L10
[/output]
[/test]
[test]
[input]
6
7
[/input]
[output]
L60 L61 L62 L63 L64 L65 L66
A50 A51 A52 A53 A54 A55 A56
O40 O41 O42 O43 O44 O45 O46
A30 A31 A32 A33 A34 A35 A36
O20 O21 O22 O23 O24 O25 O26
A10 A11 A12 A13 A14 A15 A16
[/output]
[/test]
[test]
[input]
8
2
[/input]
[output]
L80 L81
A70 A71
O60 O61
A50 A51
O40 O41
A30 A31
O20 O21
A10 A11
[/output]
[/test]
[test]
[input]
9
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
L70 L71 L72
O60 O61 O62
A50 A51 A52
O40 O41 O42
A30 A31 A32
O20 O21 O22
A10 A11 A12
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Passwords
[code-task title="Passwords" taskId="java-basics-nested-loops-passwords" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:
* Citește un număr întreg - **n**
* Generează parole personalizate, care îndeplinesc următoarele condiții:
* Prima ** parte ** este un  număr ** par ** și nu trebuie să fie mai mare decât ** n **
* A doua ** parte este un ** număr impar ** și nu trebuie să fie mai mare decât ** n **
* Ultima parte ** este ** produsul ** din primele două

## Example
| **Input** | **Output** |
| --- | --- |
| 6 | 212 236 2510 414 4312 4520 616 6318 6530 |

[/task-description]
[tests]
[test open]
[input]
6
[/input]
[output]
212 236 2510 414 4312 4520 616 6318 6530
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
212 236 2510 2714 414 4312 4520 4728 616 6318 6530 6742 818 8324 8540 8756
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972 10110 10330 10550 10770 10990
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
212 236
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
212
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Magic Number
[code-task title="Magic Number" taskId="java-basics-nested-loops-magic-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:
* Citește un număr **number - n** de pe consolă
* Găsește toate  **numerele cu 3 cifre** care produs al multiplicării cifrelor lor este egal cu ** n **
## Example
| **Input** | **Output** |
| --- | --- |
| 3 | 113 |
| | 131 |
| | 311 |

[/task-description]
[tests]
[test open]
[input]
3
[/input]
[output]
113
131
311
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
114
122
141
212
221
411
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Travelling
[code-task title="Travelling" taskId="java-basics-nested-loops-travelling" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care
* Citește o ** destinație ** și ** bugetul necesar ** pentru destinație
* Continuă să citească numere - sume de bani, până când sunt ** suficiente ** pentru destinație
* Dacă primește comanda ** „End” **, programul se termină

## Example
| **Input** | **Output** |
| --- | --- |
| Philippines | Going to Philippines! |
| 1000|  |
| 550|  |
| 450|  |
| End|  |

## Example
| **Input** | **Output** |
| --- | --- |
| Bulgaria | Going to Bulgaria! |
| 500|  Going to Austria! |
| 200|  |
| 100|  |
| 300|  |
| Austria|  |
| 700|  |
| 200|  |
| 200|  |
| 200|  |
| 200|  |
| End|  |

[/task-description]
[tests]
[test open]
[input]
Greece
1000
200
200
300
100
150
240
Spain
1200
300
500
193
423
End
[/input]
[output]
Going to Greece!
Going to Spain!
[/output]
[/test]
[test open]
[input]
France
2000
300
300
200
400
190
258
360
Portugal
1450
400
400
200
300
300
Egypt
1900
1000
280
300
500
End
[/input]
[output]
Going to France!
Going to Portugal!
Going to Egypt!
[/output]
[/test]
[test]
[input]
Maldives
2500
1000
340
50
50
50
50
700
700
End
[/input]
[output]
Going to Maldives!
[/output]
[/test]
[test]
[input]
Bulgaria
500
200
100
300
Austria
700
200
200
200
200
End
[/input]
[output]
Going to Bulgaria!
Going to Austria!
[/output]
[/test]
[test]
[input]
Africa
3000
1000
5000
America
2000
2500
China
4000
2000
1800
1800
End
[/input]
[output]
Going to Africa!
Going to America!
Going to China!
[/output]
[/test]
[test]
[input]
Estonia
1000
300
200
200
300
Peru
3000
2000
1000
Uganda
1000
1000
UAE
5000
3000
4000
Germany
2000
2000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
End
[/input]
[output]
Going to Estonia!
Going to Peru!
Going to Uganda!
Going to UAE!
Going to Germany!
Going to Portugal!
Going to Portugal!
Going to Portugal!
Going to Portugal!
Going to Portugal!
[/output]
[/test]
[test]
[input]
End
[/input]
[output]

[/output]
[/test]
[test]
[input]
France
3000
50
50
50
50
50
50
50
50
50
50
50
250
100
106
280
400
400
50
400
600
End
[/input]
[output]
Going to France!
[/output]
[/test]
[test]
[input]
Russia
15000
4500
300
300
3000
2000
4500
5000
Japan
1500.600
67.60
26.4052345
250.78
450.78945
578.76
98.60
260.84
End
[/input]
[output]
Going to Russia!
Going to Japan!
[/output]
[/test]
[test]
[input]
South Africa
2000
1000
1000
Egypt
300
150
100
20
20
20
End
[/input]
[output]
Going to South Africa!
Going to Egypt!
[/output]
[/test]
[test]
[input]
Zambia
3700.250
450.300
450.20414
600.43
640.23
824.50
1200.46
End
[/input]
[output]
Going to Zambia!
[/output]
[/test]
[test]
[input]
Albania
350.23414
45.24
23.124
123.144
145.23556
45.2345
End
[/input]
[output]
Going to Albania!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Prime Numbers
[code-task title="Prime Numbers" taskId="java-basics-nested-loops-prime-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Citește ** două numere ** de pe consolă
* Tipărește numărul ** prim ** din acel ** interval **


## Example
| **Input** | **Output** |
| --- | --- |
| 1 | 1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 |
| 50|  |

[/task-description]
[tests]
[test open]
[input]
1
50
[/input]
[output]
1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
[/output]
[/test]
[test]
[input]
1
4
[/input]
[output]
1 2 3
[/output]
[/test]
[test]
[input]
600
900
[/input]
[output]
601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887
[/output]
[/test]
[test]
[input]
55
70
[/input]
[output]
59 61 67
[/output]
[/test]
[test]
[input]
11
13
[/input]
[output]
11 13
[/output]
[/test]
[test]
[input]
88
100
[/input]
[output]
89 97
[/output]
[/test]
[test]
[input]
23
27
[/input]
[output]
23
[/output]
[/test]
[test]
[input]
1
9
[/input]
[output]
1 2 3 5 7
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Unique PIN Codes
[code-task title="Unique PIN Codes" taskId="java-basics-nested-loops-unique-pin-codes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:
* Citește ** 3 cifre ** - n1, n2 și n3
* Generează ** coduri PIN unice de 3 cifre **, care îndeplinesc următoarele ** condiții **:
* ** Prima ** cifră nu trebuie să fie mai mare decât n1
* A doua ** cifră ** nu trebuie să fie mai mare decât n2
* Cea de-a treia ** cifră nu trebuie să fie mai mare decât n3
* ** Prima ** și ** a treia ** cifră trebuie să fie pare
* A doua cifră trebuie să fie un ** număr prim ** în intervalul \ [2 ... 7 \]

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | 222 |
| 5| 224 |
| 5| 232 |
| | 234 |
| | 252 |
| | 254 |

[/task-description]
[tests]
[test open]
[input]
3
5
5
[/input]
[output]
222
224
232
234
252
254
[/output]
[/test]
[test]
[input]
8
2
8
[/input]
[output]
222
224
226
228
422
424
426
428
622
624
626
628
822
824
826
828
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Letter Combinations
[code-task title="Letter Combinations" taskId="java-basics-nested-loops-letter-combinations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care:

* Tipărește ** combinații de litere ** și ** contează ** combinațiile tipărite
* Veți primi ** gama de litere ** pe prima și a doua linie
* Pe a treia linie, veți primi o ** literă **, pe care trebuie să o ** ignorați ** - nu tipăriți combinații cu aceasta
# Exemplu
## Input
- a
- c
- b
## Output
- aaa aac aca acc caa cac cca ccc 8
[/task-description]
[tests]
[test open]
[input]
a
c
b
[/input]
[output]
aaa aac aca acc caa cac cca ccc 8
[/output]
[/test]
[test]
[input]
a
c
b
[/input]
[output]
aaa aac aca acc caa cac cca ccc 8
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Happy Numbers
[code-task title="Happy Numbers" taskId="java-basics-nested-loops-happy-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Citește un număr n
* Tipărește ** toate numerele din 4 cifre **, care îndeplinesc următoarele condiții:
* Când ** le împărțiți ** în două perechi și ** adăugați ** prima cifră la a doua - rezultatul ** este egal cu ** n
* Când adăugați primele două cifre una la cealaltă, rezultatul trebuie să fie ** divizibil ** cu n ** fără rest **

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | 1212 1221 2112 2121 |

[/task-description]
[tests]
[test open]
[input]
3
[/input]
[output]
1212 1221 2112 2121
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
1212 1221 2112 2121
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide hideTitle]
# Problem: Clock
[code-task title="Clock" taskId="java-basics-nested-loops-clock" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care imprimă **orele zilei** de la o anumită oră și minutele până la to 23:59 (**inclusiv**), fiecare fiind pe o linie separată. 

## Input
Intrarea constă din ** 2 ** linii:
- Prima linie - ore - număr întreg în intervalul \ [0 ... 23 \]
- A doua linie - minute - număr întreg în intervalul \ [0 ... 59 \]

## Output
- Orele trebuie să fie tipărite pe consolă în formatul „\ {hour \}: \ {minutes \}”.
## Example

| **Input** | **Output** |
| --- | --- |
| 8 | 08 : 05 |
| 5 | 08 : 06 |
| | ... |
| | 23 : 57 |
| | 23 : 58 |
| | 23 : 59 |

[/task-description]
[tests]
[test open]
[input]
22
55
[/input]
[output]
22 : 55
22 : 56
22 : 57
22 : 58
22 : 59
23 : 00
23 : 01
23 : 02
23 : 03
23 : 04
23 : 05
23 : 06
23 : 07
23 : 08
23 : 09
23 : 10
23 : 11
23 : 12
23 : 13
23 : 14
23 : 15
23 : 16
23 : 17
23 : 18
23 : 19
23 : 20
23 : 21
23 : 22
23 : 23
23 : 24
23 : 25
23 : 26
23 : 27
23 : 28
23 : 29
23 : 30
23 : 31
23 : 32
23 : 33
23 : 34
23 : 35
23 : 36
23 : 37
23 : 38
23 : 39
23 : 40
23 : 41
23 : 42
23 : 43
23 : 44
23 : 45
23 : 46
23 : 47
23 : 48
23 : 49
23 : 50
23 : 51
23 : 52
23 : 53
23 : 54
23 : 55
23 : 56
23 : 57
23 : 58
23 : 59
[/output]
[/test]
[test]
[input]
23
0
[/input]
[output]
23 : 00
23 : 01
23 : 02
23 : 03
23 : 04
23 : 05
23 : 06
23 : 07
23 : 08
23 : 09
23 : 10
23 : 11
23 : 12
23 : 13
23 : 14
23 : 15
23 : 16
23 : 17
23 : 18
23 : 19
23 : 20
23 : 21
23 : 22
23 : 23
23 : 24
23 : 25
23 : 26
23 : 27
23 : 28
23 : 29
23 : 30
23 : 31
23 : 32
23 : 33
23 : 34
23 : 35
23 : 36
23 : 37
23 : 38
23 : 39
23 : 40
23 : 41
23 : 42
23 : 43
23 : 44
23 : 45
23 : 46
23 : 47
23 : 48
23 : 49
23 : 50
23 : 51
23 : 52
23 : 53
23 : 54
23 : 55
23 : 56
23 : 57
23 : 58
23 : 59
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Clock - Part 2
[code-task title="Clock - Part 2" taskId="java-basics-nested-loops-clock-part2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a tipări ** orele zilei ** de la o anumită oră, minute, secunde până la 23:59:59 (** inclusiv **), fiecare pe o linie separată.

## Input
Intrarea este introdusă din consolă ca ** 3 ** linii:
- Prima linie - ** ore ** - un număr întreg în intervalul \ [0 ... 23 \]
- A doua linie - ** minute ** - un număr întreg în intervalul \ [0 ... 59 \]
- A treia linie - ** secunde ** - un număr întreg în intervalul \ [0 ... 59 \]

## Output
- Rezultatul trebuie să fie tipărit în următorul format „\ {hour \}: \ {minutes \}: \ {seconds \}”.
## Example

| **Input** | **Output** |
| --- | --- |
| 21 | 21 : 59 : 58 |
| 59 | 21 : 59 : 59 |
| 58 | 22 : 00 : 00 |
| | 22 : 00 : 01 |
| | ... |
| | 23 : 59 : 58 |
| | 23 : 59 : 59 |

[/task-description]
[tests]
[test open]
[input]
23
56
59
[/input]
[output]
23 : 56 : 59
23 : 57 : 00
23 : 57 : 01
23 : 57 : 02
23 : 57 : 03
23 : 57 : 04
23 : 57 : 05
23 : 57 : 06
23 : 57 : 07
23 : 57 : 08
23 : 57 : 09
23 : 57 : 10
23 : 57 : 11
23 : 57 : 12
23 : 57 : 13
23 : 57 : 14
23 : 57 : 15
23 : 57 : 16
23 : 57 : 17
23 : 57 : 18
23 : 57 : 19
23 : 57 : 20
23 : 57 : 21
23 : 57 : 22
23 : 57 : 23
23 : 57 : 24
23 : 57 : 25
23 : 57 : 26
23 : 57 : 27
23 : 57 : 28
23 : 57 : 29
23 : 57 : 30
23 : 57 : 31
23 : 57 : 32
23 : 57 : 33
23 : 57 : 34
23 : 57 : 35
23 : 57 : 36
23 : 57 : 37
23 : 57 : 38
23 : 57 : 39
23 : 57 : 40
23 : 57 : 41
23 : 57 : 42
23 : 57 : 43
23 : 57 : 44
23 : 57 : 45
23 : 57 : 46
23 : 57 : 47
23 : 57 : 48
23 : 57 : 49
23 : 57 : 50
23 : 57 : 51
23 : 57 : 52
23 : 57 : 53
23 : 57 : 54
23 : 57 : 55
23 : 57 : 56
23 : 57 : 57
23 : 57 : 58
23 : 57 : 59
23 : 58 : 00
23 : 58 : 01
23 : 58 : 02
23 : 58 : 03
23 : 58 : 04
23 : 58 : 05
23 : 58 : 06
23 : 58 : 07
23 : 58 : 08
23 : 58 : 09
23 : 58 : 10
23 : 58 : 11
23 : 58 : 12
23 : 58 : 13
23 : 58 : 14
23 : 58 : 15
23 : 58 : 16
23 : 58 : 17
23 : 58 : 18
23 : 58 : 19
23 : 58 : 20
23 : 58 : 21
23 : 58 : 22
23 : 58 : 23
23 : 58 : 24
23 : 58 : 25
23 : 58 : 26
23 : 58 : 27
23 : 58 : 28
23 : 58 : 29
23 : 58 : 30
23 : 58 : 31
23 : 58 : 32
23 : 58 : 33
23 : 58 : 34
23 : 58 : 35
23 : 58 : 36
23 : 58 : 37
23 : 58 : 38
23 : 58 : 39
23 : 58 : 40
23 : 58 : 41
23 : 58 : 42
23 : 58 : 43
23 : 58 : 44
23 : 58 : 45
23 : 58 : 46
23 : 58 : 47
23 : 58 : 48
23 : 58 : 49
23 : 58 : 50
23 : 58 : 51
23 : 58 : 52
23 : 58 : 53
23 : 58 : 54
23 : 58 : 55
23 : 58 : 56
23 : 58 : 57
23 : 58 : 58
23 : 58 : 59
23 : 59 : 00
23 : 59 : 01
23 : 59 : 02
23 : 59 : 03
23 : 59 : 04
23 : 59 : 05
23 : 59 : 06
23 : 59 : 07
23 : 59 : 08
23 : 59 : 09
23 : 59 : 10
23 : 59 : 11
23 : 59 : 12
23 : 59 : 13
23 : 59 : 14
23 : 59 : 15
23 : 59 : 16
23 : 59 : 17
23 : 59 : 18
23 : 59 : 19
23 : 59 : 20
23 : 59 : 21
23 : 59 : 22
23 : 59 : 23
23 : 59 : 24
23 : 59 : 25
23 : 59 : 26
23 : 59 : 27
23 : 59 : 28
23 : 59 : 29
23 : 59 : 30
23 : 59 : 31
23 : 59 : 32
23 : 59 : 33
23 : 59 : 34
23 : 59 : 35
23 : 59 : 36
23 : 59 : 37
23 : 59 : 38
23 : 59 : 39
23 : 59 : 40
23 : 59 : 41
23 : 59 : 42
23 : 59 : 43
23 : 59 : 44
23 : 59 : 45
23 : 59 : 46
23 : 59 : 47
23 : 59 : 48
23 : 59 : 49
23 : 59 : 50
23 : 59 : 51
23 : 59 : 52
23 : 59 : 53
23 : 59 : 54
23 : 59 : 55
23 : 59 : 56
23 : 59 : 57
23 : 59 : 58
23 : 59 : 59
[/output]
[/test]
[test]
[input]
23
59
27
[/input]
[output]
23 : 59 : 27
23 : 59 : 28
23 : 59 : 29
23 : 59 : 30
23 : 59 : 31
23 : 59 : 32
23 : 59 : 33
23 : 59 : 34
23 : 59 : 35
23 : 59 : 36
23 : 59 : 37
23 : 59 : 38
23 : 59 : 39
23 : 59 : 40
23 : 59 : 41
23 : 59 : 42
23 : 59 : 43
23 : 59 : 44
23 : 59 : 45
23 : 59 : 46
23 : 59 : 47
23 : 59 : 48
23 : 59 : 49
23 : 59 : 50
23 : 59 : 51
23 : 59 : 52
23 : 59 : 53
23 : 59 : 54
23 : 59 : 55
23 : 59 : 56
23 : 59 : 57
23 : 59 : 58
23 : 59 : 59
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Combinations
[code-task title="Combinations" taskId="java-basics-nested-loops-combinations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program care calculează **câte soluții în numere naturale (inclusiv zero)** are ecuația:

""
x1 + x2 + x3 + x4 + x5 = n
""

## Input
- Intrarea conține un singur număr - n - întreg

## Output
- Imprimați pe consolă numărul total de soluții

## Example
| **Input** | **Output** | **Comments** | 
| --- | --- | --- |
| 25 | 23751 | Generate all combinations of 5 digits, the first is: |
| | | 0\+0\+0\+0\+0=0, but because it is not equal to 25,|
| | | continuing 0\+0\+0\+0\+1=1 - again, it\'s not 25, etc. |
| | | We come to the first valid combination: |
| | | 0\+0\+0\+0\+25=25, expanding the number of valid |
| | | combinations of 1, the second valid combination is:| 
| | | 0\+0\+0\+1\+24=25|
| | | The third: 0\+0\+0\+2\+23=25  etc.|
| | | After generating all possible combinations,|
| | | the number of valid combinations is 23751.|
[/task-description]
[tests]
[test open]
[input]
25
[/input]
[output]
23751
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
10626
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
126
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
35
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
-1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
210
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
1001
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
2380
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Word Wars
[code-task title="Word Wars" taskId="java-basics-nested-loops-word-wars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care ** calculează valoarea ASCII a câtorva cuvinte **, deoarece cuvântul cu ** cea mai mare valoare ** este câștigătorul.

Valoarea unui cuvânt este calculată atunci când însumați valorile ** ASCII ale tuturor literelor din care este format **.

De pe consolă citiți cuvinte până la comanda „** STOP **”, apoi tipăriți:
- "Câștigătorul este \ {cuvântul câștigător \} - \ {valoarea cuvântului \}!"
More about this source text

## Example

| **Input** | **Output** 
| --- | --- |
| House | Winner is Destination - 1154! |
| Dog | |
| Destination | |
| STOP | |

### Comments
-Prima literă este \ 'H \' și valoarea ASCII este 72, \ 'o \' are valoarea 111, \ 'u \' are valoarea 117, \ 's \' are valoarea 115, \ 'e \ 'are valoarea 101. Suma lor este 516.
- Continuați să faceți aceleași calcule pentru celelalte cuvinte și obțineți că Destinația are cea mai mare valoare - 1154.

[/task-description]
[tests]
[test open]
[input]
House
Dog
Destination
STOP
[/input]
[output]
Winner is Destination - 1154!
[/output]
[/test]
[test]
[input]
Cat
Doll
Information
Winner
STOP
[/input]
[output]
Winner is Information - 1158!
[/output]
[/test]
[test]
[input]
IVAN
Stoyan
Kirch0
STOP
[/input]
[output]
Winner is Stoyan - 638!
[/output]
[/test]
[test]
[input]
st0y1n
Vladimir
Petur
STOP
[/input]
[output]
Winner is Vladimir - 824!
[/output]
[/test]
[test]
[input]
slavi
Gosheto
Aleksandur
STOP
[/input]
[output]
Winner is Aleksandur - 1034!
[/output]
[/test]
[test]
[input]
Mascota
Destryktor
STOP
[/input]
[output]
Winner is Destryktor - 1083!
[/output]
[/test]
[test]
[input]
marto
krasi
Vasil
Valeri
Baluchonkata
STOP
[/input]
[output]
Winner is Baluchonkata - 1229!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Coding
[code-task title="Coding" taskId="java-basics-nested-loops-coding" executionType="tests-execution" executionStrategy="java-code" requiresInput ]
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

Scrieți un program care citește ** un număr întreg N ** de pe consolă. Consola ar trebui să tipărească ** câte linii are numărul de cifre N **. ** Prima linie ** corespunde cu ** unitățile **, a doua cu ** zecile **, a treia cu ** sutele ** de număr etc., până când ** nu mai sunt ** cifre ** a numărului.

Pe fiecare linie trebuie să imprimați un simbol **, care îndeplinește următoarele condiții:

- Simbolul, care trebuie tipărit, poate fi găsit în tabelul \ [ASCII \] (http://www.asciitable.com/). ** Codul ASCII zecimal ** al acestuia este calculat prin adăugarea ** 33 ** la cifra numărului de intrare care corespunde unei linii date
- Simbolul trebuie să fie tipărit ** de câte ori cifra ** corespunzătoare acestei linii
- Dacă o linie dată ** se potrivește cu cifra 0 **, pe această linie se imprimă „** ZERO **” o dată

## Example

| **Input** | **Output** |
| --- | --- |
| 2049 | \*\*\*\*\*\*\*\*\* | 
| | %%%% |
| | ZERO |
| | \#\# |

### Commentarii
- Numărul 2049 are patru cifre, așa că vom imprima patru linii.
- Prima linie corespunde cifrei 9. Adunăm 33 la 9 și obținem 42.
- Acesta este codul ASCII zecimal al simbolului pe care ar trebui să fie tipărit pe prima linie.
- Din tabelul ASCII știm că simbolul corespunzător al lui 42 este „\ *”.
- Deoarece la prima linie corespunde cifra 9 imprimăm de 9 ori „\ *”.
- Pentru a doua linie cifra este 4. 4 \ + 33 = 37. Folosind tabelul ASCII, descoperim că simbolul de imprimat este „%”.
- Tipărim „%” de 4 ori.
- A treia linie se potrivește cu o cifră 0. Pe această linie tipărim ZERO o dată.
- Ultima cifră a numărului este 2. 2 \ + 33 = 35.
- Din tabelul ASCII găsim simbolul de imprimat - '\ #' și îl imprimăm de două ori.

### Sfaturi
- Citiți numărul ca un șir, salvați lungimea acestuia într-o variabilă folosind metoda ** length () **. Găsiți mai multe ** informații ** despre aceasta pe Internet
- Pentru a lua ultima cifră a numărului, împărțiți-l la 10 (** num% 10 **) și salvați-l într-o variabilă. Apoi ** eliminați ultima cifră a numărului **, împărțind-o la 10 (** num / 10 **) astfel încât următoarea cifră de luat să fie din nou ultima.
[/task-description]
[tests]
[test open]
[input]
2049
[/input]
[output]
\*\*\*\*\*\*\*\*\*
%%%%
ZERO
\#\#
[/output]
[/test]
[test]
[input]
9347439
[/input]
[output]
\*\*\*\*\*\*\*\*\*
$$$
%%%%
\(\(\(\(\(\(\(
%%%%
$$$
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
123456789
[/input]
[output]
\*\*\*\*\*\*\*\*\*
\)\)\)\)\)\)\)\)
\(\(\(\(\(\(\(
''''''
&&&&&
%%%%
$$$
\#\#
"
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
"
[/output]
[/test]
[test]
[input]
1001
[/input]
[output]
"
ZERO
ZERO
"
[/output]
[/test]
[test]
[input]
19557
[/input]
[output]
\(\(\(\(\(\(\(
&&&&&
&&&&&
\*\*\*\*\*\*\*\*\*
"
[/output]
[/test]
[test]
[input]
526576543
[/input]
[output]
$$$
%%%%
&&&&&
''''''
\(\(\((\(\(\(
&&&&&
''''''
\#\#
&&&&&
[/output]
[/test]
[test]
[input]
100000000
[/input]
[output]
ZERO
ZERO
ZERO
ZERO
ZERO
ZERO
ZERO
ZERO
"
[/output]
[/test]
[test]
[input]
999999999
[/input]
[output]
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
987654321
[/input]
[output]
"
\#\#
$$$
%%%%
&&&&&
''''''
\(\(\(\(\(\(\(
\)\)\)\)\)\)\)\)
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
20709428
[/input]
[output]
\)\)\)\)\)\)\)\)
\#\#
%%%%
\*\*\*\*\*\*\*\*\*
ZERO
\(\(\(\(\(\(\(
ZERO
\#\#
[/output]
[/test]
[test]
[input]
9037309
[/input]
[output]
\*\*\*\*\*\*\*\*\*
ZERO
$$$
\(\(\(\(\(\(\(
$$$
ZERO
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
367377098
[/input]
[output]
\)\)\)\)\)\)\)\)
\*\*\*\*\*\*\*\*\*
ZERO
\(\(\(\(\(\(\(
\(\(\(\(\(\(\(
$$$
\(\(\(\(\(\(\(
''''''
$$$
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Train the Trainers
[code-task title="Train the Trainers" taskId="java-basics-nested-loops-train-the-trainers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Cursul „Antrenează trainerii” se încheie și abordările finale ale evaluării.

Ajutați juriul care, scriind un program, să calculeze ** scorul mediu ** al ** fiecărei prezentări ** de către un student și ** media tuturor acestora **.

## Input
- Pe primul rând al consolei citiți numărul de persoane din juriu - ** n ** - un număr întreg în intervalul \ [1 ... 20 \]
- Apoi, pe o linie separată, citiți numele prezentării - ** Șir **
- Pentru fiecare prezentare a noii linii se citește ** n - numărul de evaluări ** - numărul real în intervalul \ [2.00 ... 6.00 \]

## Output
- După calcularea ** scorului mediu ** pentru o anumită prezentare, tipăriți pe consolă:
    "\ {numele prezentării \} \ - \ {scor mediu \}."
- După ce ați primit comanda „** Finish **” pe consolă, tipăriți:
     "Evaluarea finală a studentului este \ {prezentări medii ale tuturor prezentărilor \}." iar programul se încheie.

Toate scorurile trebuie să fie formatate la ** a doua zecimală **.

## Example

| **Input** | **Output** |
| --- | --- |
| 2 | While-Loop - 5.75. |
| While-Loop | For-Loop - 5.75. |
| 6.00 | Student\'s final assessment is 5.75. |
| 5.50 | |
| For-Loop | | 
| 5.84 | |
| 5.66 | | 
| Finish | | 

## Comentarii
- 2 – numărul persoanelor din juriu - prin urmare, obțineți 2 evaluări ale prezentării:
    - \(6.00 \+ 5.50\) / 2 = 5.75
    - \(5.84 \+ 5.66\) / 2 = 5.75
- \(6.00 \+ 5.50 \+ 5.84 \+ 5.66\) / 4 = 5.75 
[/task-description]
[tests]
[test open]
[input]
2
While\-Loop
6.00
5.50
For\-Loop
5.84
5.66
Finish
[/input]
[output]
While\-Loop \- 5.75.
For\-Loop \- 5.75.
Student\'s final assessment is 5.75.
[/output]
[/test]
[test]
[input]
3
Arrays
4.53
5.23
5.00
Lists
5.83
6.00
5.42
Finish
[/input]
[output]
Arrays \- 4.92.
Lists \- 5.75.
Student's final assessment is 5.34.
[/output]
[/test]
[test]
[input]
2
Objects and Classes
5.77
4.23
Dictionaries
4.62
5.02
RegEx
2.88
3.42
Finish
[/input]
[output]
Objects and Classes \- 5.00.
Dictionaries \- 4.82.
RegEx \- 3.15.
Student's final assessment is 4.32.
[/output]
[/test]
[test]
[input]
3
Linear Data Structures
5.43
6.23
5.21
Sets And Maps
4.24
2.43
5.23
Files And Directories
4.34
5.24
6.00
String Processing
3.34
5.23
2.54
Functional Programming
2.45
5.34
5.75
Stream API
3.45
5.34
3.54
Finish
[/input]
[output]
Linear Data Structures \- 5.62.
Sets And Maps \- 3.97.
Files And Directories \- 5.19.
String Processing \- 3.70.
Functional Programming \- 4.51.
Stream API \- 4.11.
Student's final assessment is 4.52.
[/output]
[/test]
[test]
[input]
2
Defining Classes
5.43
5.21
Encapsulation
4.24
2.44
Inheritance
4.34
5.24
Polymorphism
3.34
2.54
Interfaces and Abstraction
2.45
5.34
Finish
[/input]
[output]
Defining Classes \- 5.32.
Encapsulation \- 3.34.
Inheritance \- 4.79.
Polymorphism \- 2.94.
Interfaces and Abstraction \- 3.90.
Student's final assessment is 4.06.
[/output]
[/test]
[test]
[input]
3
Generics
5.43
4.34
5.21
Iterators and Comparators
4.24
5.34
2.43
Enumerations and Annotations
4.34
5.24
5.24
Reflection
3.34
5.32
2.54
Unit testing
2.45
5.34
5.34
Finish
[/input]
[output]
Generics \- 4.99.
Iterators and Comparators \- 4.00.
Enumerations and Annotations \- 4.94.
Reflection \- 3.73.
Unit testing \- 4.38.
Student's final assessment is 4.41.
[/output]
[/test]
[test]
[input]
4
Open Closed and Liskov Principle
5.42
4.34
5.21
4.24
Object Communication and Events
4.24
5.34
5.43
2.43
Exam Preparation I
4.34
5.24
2.43
5.24
Exam Preparation II
3.34
5.32
4.23
2.54
Exam Preparation III
2.45
4.23
5.34
5.34
Finish
[/input]
[output]
Open Closed and Liskov Principle \- 4.80.
Object Communication and Events \- 4.36.
Exam Preparation I \- 4.31.
Exam Preparation II \- 3.86.
Exam Preparation III \- 4.34.
Student's final assessment is 4.33.
[/output]
[/test]
[test]
[input]
2
Data Definition And Data Types
5.43
5.21
Basic CRUD
4.23
2.43
Built\-in Functions
5.34
5.99
Data Aggregation
5.24
6.00
Table Relations
5.34
5.23
Subqueries and JOINs
5.74
5.00
Functions Triggers And Transactions
5.66
4.74
Finish
[/input]
[output]
Data Definition And Data Types \- 5.32.
Basic CRUD \- 3.33.
Built\-in Functions \- 5.67.
Data Aggregation \- 5.62.
Table Relations \- 5.29.
Subqueries and JOINs - 5.37.
Functions Triggers And Transactions \- 5.20.
Student's final assessment is 5.11.
[/output]
[/test]
[test]
[input]
3
Java Basics
5.43
5.21
6.00
Java OOP Overview
4.24
5.43
6.00
Java OOP Principles
5.34
5.99
6.00
Java Fundamentals
5.24
6.00
6.00
Finish
[/input]
[output]
Java Basics \- 5.55.
Java OOP Overview \- 5.22.
Java OOP Principles \- 5.78.
Java Fundamentals \- 5.75.
Student's final assessment is 5.57.
[/output]
[/test]
[test]
[input]
3
HTML and CSS Overview
5.43
4.23
5.21
HTML Structure
4.24
5.56
2.43
Introduction To CSS
5.34
5.76
5.99
CSS In Depth
5.24
3.65
6.00
CSS Formatting
5.34
3.67
5.23
CSS Positioning
5.74
2.54
5.00
Creating Landing Pages
5.66
3.43
4.74
Finish
[/input]
[output]
HTML and CSS Overview \- 4.96.
HTML Structure \- 4.08.
Introduction To CSS \- 5.70.
CSS In Depth \- 4.96.
CSS Formatting \- 4.75.
CSS Positioning \- 4.43.
Creating Landing Pages \- 4.61.
Student's final assessment is 4.78.
[/output]
[/test]
[test]
[input]
4
Introduction to JavaScript
5.43
4.65
4.23
5.21
Introduction to DOM and Events
4.27
4.70
5.58
2.45
Introduction to jQuery
5.34
4.00
5.76
5.99
Introduction to AJAX
5.24
3.00
3.65
6.00
Finish
[/input]
[output]
Introduction to JavaScript \- 4.88.
Introduction to DOM and Events \- 4.25.
Introduction to jQuery \- 5.27.
Introduction to AJAX \- 4.47.
Student's final assessment is 4.72.
[/output]
[/test]
[test]
[input]
2
Data Types and Variables
4.23
5.21
Methods, Debugging and Troubleshooting Code
4.24
5.56
Arrays
5.34
5.99
Lists
5.24
6.00
Dictionaries, Lambda and LINQ
5.34
5.23
Finish
[/input]
[output]
Data Types and Variables \- 4.72.
Methods, Debugging and Troubleshooting Code \- 4.90.
Arrays \- 5.67.
Lists \- 5.62.
Dictionaries, Lambda and LINQ \- 5.29.
Student's final assessment is 5.24.
[/output]
[/test]
[test]
[input]
4
Objects and Classes
4.23
2.00
5.21
3.38
Strings and Text Processing
4.24
4.23
5.21
5.56
Regular Expressions (RegEx)
5.34
4.00
5.99
3.45
Exam Preparation I
3.46
5.25
4.89
6.00
Exam Preparation II
5.36
3.35
5.25
4.44
Finish
[/input]
[output]
Objects and Classes \- 3.71.
Strings and Text Processing \- 4.81.
Regular Expressions (RegEx) \- 4.70.
Exam Preparation I \- 4.90.
Exam Preparation II \- 4.60.
Student's final assessment is 4.54.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Homework Results

[tasks-results/]
[/slide]