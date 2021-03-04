[slide hideTitle]
# Parametrii metodelor

Informația poate fii **transmisă** metodelor ca parametru. 

Parametrii se comportă ca **variabile** înăuntrul unei metode.

Parametrii sunt specificați după numele metodei, **între paranteze**.

Puteți adăuga **câți** parametrii doriți, doar să-i **separați** prin virgule.

Următorul exemplu are o metodă ce ia un `String` numit `firstName` ca parametru.

Când metoda este apelată, îi dăm un nume, care este folosit în interiorul metodei pentru a afișa întregul nume:

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

Puteți pasa unul sau mai mulți parametrii.

Puteți pasa parametrii de diferite tipuri.

Fiecare parametru are un nume și un tip.

```Java
public static void printStudent(String name, int age, double grade) {
    System.out.printf("Student: %s; Age: %d, Grade: %.2f\n",
        name, age, grade);
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Sign of Integer
[code-task title="Sign of Integer" taskId="java-fund-Methods-lab-Sign-of-Integer" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[task-description]
## Cerință
Creați o metodă care afișează semnul unui număr întreg.

## Exemple
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| 2 | The number 2 is positive. |


| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| -5 | The number -5 is negative. |


| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| 0 | The number 0 is zero. |



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
[test]
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
# Problem with Solution: Grades
[code-task title="Grades" taskId="java-fund-lab-Methods-Grades" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Cerință
Scrieți o metodă **care primește** o notă între **2.00** și **6.00** și **afișează nota corespunzătoare în cuvinte**:

* 2.00 – 2.99 - "Fail"
* 3.00 – 3.49 - "Poor"
* 3.50 – 4.49 - "Good"
* 4.50 – 5.49 - "Very good"
* 5.50 – 6.00 - "Excellent"

## Examples
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| 3.33 | Poor |


| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| 4.50 | Very good |


| **Date de intrare** | **Date de ieșire** |
| --- | --- |
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
# Problem with Solution: Printing Triangle
[code-task title="Printing Triangle" taskId="java-fund-Methods-lab-Printing-Triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Cerință
Creați o metodă pentru a afișa triunghiuri ca în exemplul de mai jos:

## Exemple
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| 3 | 1 |
|  | 1 2 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |

| **Date de intrare** | **Date de ieșire** |
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
[test]
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
# Problem with Solution: Calculations
[code-task title="Calculations" taskId="java-fund-Methods-Calculations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Cerință
Scrieți un program care primește un **șir** pe prima linie \(adunare, înmulțire, diferență, împărțire\) și pe următoarele 2 linii primește **2 numere**.

Creați 4 **metode** \(pentru fiecare operație\) și s-o invocați pe cea corectă în funcție de comandă.

Metoda ar trebui să afișeze și rezultatul \(trebuie să fie nul\)

## Exemple
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| subtract | 1 |
| 5 |  |
| 4 |  |

| **Date de intrare** | **Date de ieșire** |
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

