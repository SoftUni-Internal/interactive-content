# Returnarea de Valori de la Metode

[slide hideTitle]
# Instrucțiunea de Returnare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-27-28-The-return-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cuvântul-cheie `return` termină execuția unei metode, și poate fi folosit pentru a returna o valoare de la o metodă.

```java live no-template
public class MyClass {
  static int myMethod(int x) {
    return 5 + x;
  }

  public static void main(String[] args) {
    System.out.println(myMethod(3));
  }
}
```
[/slide]

[slide hideTitle]
# Folosirea Valorilor de Returnare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-29-Using-the-return-values-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Valorile de returnare pot fi:

* **Atribuite** unei variabile
```Java
int max = getMax(5, 10);
```

* **Folosite** într-o expresie
```Java
double total = getPrice() * quantity * 1.20;
```

* **Trecute** unei alte metode
```Java
int age = Integer.parseInt(sc.nextLine());
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Calculate Rectangle Area
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-30-problem-and-solution-calculate-rectangle-area-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculate Rectangle Area" taskId="java-fund-1-Methods-lab-Calculate-Rectangle-Area" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați o metodă care calculează și afișează aria unui dreptunghi cu lungimea si lățimea date:

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 3 | 12 |
| 4 |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
4
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
6
2
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
3
7
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
3
5
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
2
4
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
3
6
[/input]
[output]
18
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Repeat String

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-33-problem-and-solution-repeat-string-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Repeat String" taskId="java-fund-1-Methods-lab-Repeat-String" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați o metodă care primește un **șir** și un număr repetat  **n** \(un număr întreg\).

Metoda va afișa un nou **șir** \(cel vechi repetat de **n** ori\).

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| abc | abcabcabc |
| 3 |  |

|**Intrare**|**Ieșire** |
| --- | --- |
| String | StringString |
| 2 |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
abc
3
[/input]
[output]
abcabcabc
[/output]
[/test]
[test open]
[input]
String
2
[/input]
[output]
StringString
[/output]
[/test]
[test]
[input]
ani
2
[/input]
[output]
aniani
[/output]
[/test]
[test]
[input]
ananas
3
[/input]
[output]
ananasananasananas
[/output]
[/test]
[test]
[input]
tanya
2
[/input]
[output]
tanyatanya
[/output]
[/test]
[test]
[input]
yavor
3
[/input]
[output]
yavoryavoryavor
[/output]
[/test]
[test]
[input]
ivan
2
[/input]
[output]
ivanivan
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Math Power

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-34-problem-and-solution-math-power-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Power" taskId="java-fund-1-Methods-lab-Math-Power" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.text.DecimalFormat;
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
Creați o metodă care calculează și returnează valoarea unui număr ridicat la o anumită putere.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 2 | 256 |
| 9 |  |

|**Intrare**|**Ieșire** |
| --- | --- |
| 5.5 | 166.375 |
| 3 |  |

[hints] 
[hint] 
Folosiți **BigDecimal**.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
8
[/input]
[output]
256
[/output]
[/test]
[test open]
[input]
5.5
3

[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
7
2
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
123
3
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
5.5
3
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
21
10
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
10
7
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
12
3
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
2
3
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
3
2
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
4
4
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
4.4
4
[/input]
[output]
374.8096
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Orders

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-problem-and-solution-orders-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Orders" taskId="java-fund-1-Methods-lab-Orders" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați o metodă care calculează prețul total al unei comenzi și-l imprimă pe consolă.

Metoda va primi unul din **următoarele produse**: cafea, cola, apă, gustări; și o cantitate a produsului.

Prețul pentru fiecare produs este:

|**Product**|**Price**|
| --- | --- |
| coffee | 1.50 |
| water | 1.00 |
| coke | 1.40 |
| snacks | 2.00 |

Imprimați rezultatul final rotunjit la a doua zecimală.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| water | 5.00 |
| 5 | |

|**Intrare**|**Ieșire** |
| --- | --- |
| coffee | 2.00 |
| 2 | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
water
5
[/input]
[output]
5.00
[/output]
[/test]
[test open]
[input]
coffee
2
[/input]
[output]
3.00
[/output]
[/test]
[test]
[input]
snacks
3
[/input]
[output]
6.00
[/output]
[/test]
[test]
[input]
water
4
[/input]
[output]
4.00
[/output]
[/test]
[test]
[input]
coke
2
[/input]
[output]
2.80
[/output]
[/test]
[test]
[input]
coffee
1
[/input]
[output]
1.50
[/output]
[/test]
[test]
[input]
water
1
[/input]
[output]
1.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

