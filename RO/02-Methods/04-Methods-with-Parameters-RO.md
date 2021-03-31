[slide hideTitle]
# Parametrii Metodelor
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-16-17-18-Methods-with-parameters-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Informațiile pot fi **transmise** metodelor ca **parametri**. 

Parametrii se comportă ca **variabile** înăuntrul unei metode.

Parametrii sunt specificați după numele metodei, **între paranteze**.

Puteți adăuga **câți** parametrii doriți, doar să-i **separați** prin virgule.

Următorul exemplu are o metodă ce preia un **șir** numit **firstName** ca parametru.

Când metoda este apelată, trecem paramterul  **firstName**, care este folosit în interiorul metodei pentru a afișa întregul nume:

```java live no-template
public class MyClass {
  static void printName(String firstName) {
    System.out.println(firstName + " Refsnes");
  }

  public static void main(String[] args) {
    printName("Liam");
    printName("Jenny");
    printName("Anja");
  }
}
```

Puteți trece unul sau mai mulți parametrii.

Puteți trece parametrii de diferite tipuri.

Fiecare parametru are un nume și un tip.

```Java
public static void printStudent(String name, int age, double grade) {
  System.out.printf("Student: %s; Age: %d, Grade: %.2f\n",
    name, age, grade);
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sign of Integer

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-19-problem-and-solution-sign-of-integer-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sign of Integer" taskId="java-fund-1-Methods-lab-Sign-of-Integer" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați o metodă care verifică dacă un număr dat este pozitiv, negativ sau zero și imprimă rezultatul pe consolă.

## Exemplu
|**Intrare**|**Ieșire** |
|---|---|
| 2 | The number 2 is positive. |
| -5 | The number -5 is negative. |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
The number 2 is positive.
[/output]
[/test]
[test open]
[input]
-5
[/input]
[output]
The number -5 is negative.
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
The number 0 is zero.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Grades

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-21-problem-and-solution-grades-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Grades" taskId="java-fund-1-lab-Methods-Grades" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți o metodă **care primește** o notă între **2.00** și **6.00** și **imprimă nota corespunzătoare în cuvinte**:

* 2.00 – 2.99 - "Fail"
* 3.00 – 3.49 - "Poor"
* 3.50 – 4.49 - "Good"
* 4.50 – 5.49 - "Very good"
* 5.50 – 6.00 - "Excellent"

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 3.33 | Poor |
| 4.50 | Very good |
| 2.99 | Fail |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3.33
[/input]
[output]
Poor
[/output]
[/test]
[test open]
[input]
4.50
[/input]
[output]
Very good
[/output]
[/test]
[test open]
[input]
2.99
[/input]
[output]
Fail
[/output]
[/test]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Printing Triangle

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-23-problem-and-solution-printing-triangle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Printing Triangle" taskId="java-fund-1-Methods-lab-Printing-Triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați o metodă pentru a afișa triunghiuri ca în exemplul de mai jos:

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 3 | 1 |
|  | 1 2 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |

|**Intrare**|**Ieșire** |
| --- | --- |
| 4 | 1 |
|  | 1 2 |
|  | 1 2 3  |
|  | 1 2 3 4 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
[/input]
[output]
1
1 2
1 2 3
1 2
1
[/output]
[/test]
[test open]
[input]
4
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
22
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12 13 14
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1 2 3 4 5 6 7 8 9 10 11 12 13 14
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Calculations

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-problem-and-solution-calculations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculations" taskId="java-fund-1-Methods-Calculations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care primește un **șir** pe prima linie \(adunare, înmulțire, scădere, împărțire\) și pe următoarele 2 linii primește **2 numere**.

Creați 4 **metode** \(pentru fiecare operație\) și s-o invocați pe cea corectă în funcție de comandă.

Metoda ar trebui să imprimă și rezultatul \(trebuie să fie de tipul void\)

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| subtract | 1 |
| 5 |  |
| 4 |  |

|**Intrare**|**Ieșire** |
| --- | --- |
| divide | 2 |
| 8 |  |
| 4 |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
subtract
5
4
[/input]
[output]
1
[/output]
[/test]
[test open]
[input]
divide
8
4
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
add
1
2
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
multiply
2
4
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
divide
6
2
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
add
5
4
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
multiply
3
2
[/input]
[output]
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

