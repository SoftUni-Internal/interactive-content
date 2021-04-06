# Conversia Tipului

[slide hideTitle]

# Conversia Tipului

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-30-31-type-conversion-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când atribuiți valoarea  unui tip de date altuia, este posibil ca cele două tipuri să nu fie compatibile între ele.

Dacă tipurile de date sunt compatibile, atunci Java va efectua conversia cunoscută automat sub numele de Conversie automată de tip și, dacă nu, atunci trebuie să fie exprimate sau convertite în mod explicit.

De exemplu, atribuirea unei valori int unei variabile lungi.

În Java, există două tipuri de casting:

- Casting extins \(automat\) - convertirea unui tip mai mic într-un format mai mare

```java live
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double

System.out.println(myInt);
System.out.println(myDouble);
```

Aici tipul inferior de date \(având o dimensiune mai mică\) este convertit în tipul de date mai mare \(având o dimensiune mai mare\)

Prin urmare, nu există pierderi de date. Acesta este motivul pentru care acest tip de conversie are loc automat

- Casting restrâns \(manual\) - convertirea unui tip mai mare într-un tip de dimensiune mai mică

```java live
double myDouble = 9.78;
int myInt = (int)myDouble; // Manual casting: double to int

System.out.println(myDouble);
System.out.println(myInt);
```

Aici tipurile de date superioare \(având dimensiuni mai mari\) sunt convertite în tipuri de date mai mici \(având dimensiuni mai mici\). 

Prin urmare, există pierderea de date. Acesta este motivul pentru care acest tip de conversie nu are loc automat.

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Centuries to Minutes
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-33-problem-and-solution-centuries-to-minutes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Centuries to Minutes" taskId="java-fund-1-data-types-lab-centuries-to-minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Creați un program care aceptă un număr **int** de **secole** și le convertește în **ani**,**zile**, **ore** și **minute**.
Intrarea va fi de tipul **int**. 

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| 1 | 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes    |
| 5 | 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
[/input]
[output]
1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
[/output]
[/test]
[test open]
[input]
5
[/input]
[output]
5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
[/output]
[/test]
[test]
[input]
14
[/input]
[output]
14 centuries = 1400 years = 511339 days = 12272136 hours = 736328160 minutes
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 centuries = 200 years = 73048 days = 1753152 hours = 105189120 minutes
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 centuries = 400 years = 146096 days = 3506304 hours = 210378240 minutes
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3 centuries = 300 years = 109572 days = 2629728 hours = 157783680 minutes
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 centuries = 600 years = 219145 days = 5259480 hours = 315568800 minutes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Chars to String

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-problem-and-solution-chars-to-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Chars to String" taskId="java-fund-1-data-types-lab-chars-to-string" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Creați un program care citește 3 linii de intrare.

Pe fiecare linie primiți un singur personaj.

Combinați toate caracterele într-un singur șir și imprimați-le pe consolă.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| a | abc |
| b |     |
| c |     |

|**Intrare**|**Ieșire**|
| --- | --- |
| % | %20 |
| 2 |     |
| 0 |     |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a
b
c
[/input]
[output]
abc
[/output]
[/test]
[test open]
[input]
%
2
0
[/input]
[output]
%20
[/output]
[/test]
[test]
[input]
1
5
p
[/input]
[output]
15p
[/output]
[/test]
[test]
[input]
d
e
f
[/input]
[output]
def
[/output]
[/test]
[test]
[input]
x
y
z
[/input]
[output]
xyz
[/output]
[/test]
[test]
[input]
1
2
3
[/input]
[output]
123
[/output]
[/test]
[test]
[input]
0
0
0
[/input]
[output]
000
[/output]
[/test]
[test]
[input]
1
b
\#
[/input]
[output]
1b\#
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Lower or Upper
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-problem-and-solution-lower-or-upper-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Lower or Upper" taskId="java-fund-1-data-types-lab-lower-or-upper" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care imprimă dacă un caracter dat este scris cu majuscule sau minuscule.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| L | upper-case |
| f | lower-case |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
L
[/input]
[output]
upper-case
[/output]
[/test]
[test open]
[input]
f
[/input]
[output]
lower-case
[/output]
[/test]
[test]
[input]
A
[/input]
[output]
upper-case
[/output]
[/test]
[test]
[input]
a
[/input]
[output]
lower-case
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

