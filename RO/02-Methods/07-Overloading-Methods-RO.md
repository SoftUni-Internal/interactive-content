# Supraîncărcarea Metodelor

[slide hideTitle]
# Semnătura Metodei
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-44-45-46-Method-Signature-Overlading-Methods-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


În Java, semnătura metodei face parte din declararea metodei.

Aceasta este reprezentată de combinațiă dintre **numele metodei** și **parametrii** metodei.

```Java
public static void print(String text) {
  System.out.println(text);
}
```
În acest exemplu, elementele semnăturii sunt **print** (numele metodei) și **String text** (parametru).

## Supraîncărcarea Metodelor

Supraîncărcarea unei metode se face folosind același nume pentru mai multe metode cu diferite **semnături** \(**numele** metodei și **parametrii**\).

În loc să definim două metode care fac același lucru, este mai bine să supraîncărcăm una.

În exemplul de mai jos, supraîncărcăm metoda **addTwoNumbers** pentru a funcționa atât cu **int**, cât și cu **double**:

```java live no-template
public class MyClass {
  static int addTwoNumbers(int x, int y) {
    return x + y;
  }

  static double addTwoNumbers(double x, double y) {
    return x + y;
  }

  public static void main(String[] args) {
    int myNum1 = addTwoNumbers(8, 5);
    double myNum2 = addTwoNumbers(4.3, 6.26);

    System.out.println("int: " + myNum1);

    System.out.println("double: " + myNum2);
  }
}
```


[/slide]

[slide hideTitle]
# Semnătura și Tipul Returnat 

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-47-Signature-type-and-return-type-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Semnătura** metodei nu include tipul returnat al metodei.

O clasă nu poate avea două metode cu aceeași semnătură. 

Dacă încercăm să declarăm două metode cu aceeași semnătură, vom primi o eroare în timpul compilării.

```Java
public static void print(String text) {
    System.out.println(text);
}

public static String print(String text) {
    return text;
}
// Compile-time error!
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Greater of Two Values

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-problem-and-solution-greater-of-two-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Greater of Two Values" taskId="java-fund-1-Methods-lab-Greater-of-Two-Values" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Primiți două valori cu același tip de date.

Valorile pot fi de tipul **int**, **char** sau **String**.

Creați o metodă numită **getMax()** care returnează **parametrul cu cea mai mare valoare**.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- | 
| int | 16 |
| 2 | |
| 16 | |

|**Intrare**|**Ieșire** |
| --- | --- | 
| char | z |
| a | |
| z | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
int
2
16
[/input]
[output]
16
[/output]
[/test]
[test open]
[input]
char
a
z
[/input]
[output]
z
[/output]
[/test]
[test]
[input]
string
Ivan
Todor
[/input]
[output]
Todor
[/output]
[/test]
[test]
[input]
char
A
a
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
int
123412
123
[/input]
[output]
123412
[/output]
[/test]
[test]
[input]
string
lorem ipsum
muspi merol
[/input]
[output]
muspi merol
[/output]
[/test]
[test]
[input]
string
Soft
Uni
[/input]
[output]
Uni
[/output]
[/test]
[test]
[input]
string
Programming Fundamentals
Software Technologies
[/input]
[output]
Software Technologies
[/output]
[/test]
[test]
[input]
char
1
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
string
123
234
[/input]
[output]
234
[/output]
[/test]
[test]
[input]
int
999999
888888
[/input]
[output]
999999
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Multiply Evens by Odds
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-problem-and-solution-multiply-evens-by-odds-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Multiply Evens by Odds" taskId="java-fund-1-Methods-lab-Multiply-Evens-by-Odds" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care citește un **număr întreg** și **înmulțește suma cifrelor sale pare** cu **suma cifrelor sale impare**.

## Exemplu
|**Intrare**|**Ieșire** |**Comentarii**|
| --- | --- | --- |
| 12345 | 54 | 12345 are 2 cifre pare - 2 și 4. |
| | | Suma cifrelor pare este 6. |
| | | Are 3 cifre impare - 1, 3 și 5. |
| | | Suma cifrelor impare este 9. |
| | | Înmulțim 6 cu 9 și obținem 54. |


|**Intrare**|**Ieșire** |
| --- | --- |
| -12345 | 54 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
12345
[/input]
[output]
54
[/output]
[/test]
[test open]
[input]
-12345
[/input]
[output]
54
[/output]
[/test]
[test]
[input]
12211
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
17
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2222222
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2222221
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
12521234
[/input]
[output]
100
[/output]
[/test]
[test]
[input]
10000012
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
987654321
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
-987654321
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
-8811
[/input]
[output]
32
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

