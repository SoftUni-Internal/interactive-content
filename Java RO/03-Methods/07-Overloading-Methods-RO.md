# Metode de supraîncărcare

[slide hideTitle]
# Semnătura metodei

In Java method signature is part of the method declaration.

Este o combinație între numele metodei și lista de parametrii.

```Java
public static void print(String text) {
  System.out.println(text);
}
```

Semnătura **metodei** nu include tipul de returnare a metodei.

O clasă nu poate avea două metode cu aceeași semnătură.

Dacă încercăm să declarăm două metode cu aceeași semnătură vom primi o eroare de compilare.

```Java
public static void print(String text) {
  System.out.println(text);
}

public static String print(String text) {
  return text;
}
// Compile-time error!
```

## Metode de supraîncărcare

Folosirea aceluiași nume pentru metode cu semnături **diferite** \(numele **metodei** și **parametrii**\)

În loc să definim două metode care fac același lucru, este ma bine să supraîncărcăm una.

În exemplul de mai jos, vom supraîncărca metoda `plusMethod` ca să funcționeze pentru `int` și `double`:

```java live no-template
public class MyClass {
 static int plusMethodInt(int x, int y) {
  return x + y;
 }

 static double plusMethodDouble(double x, double y) {
  return x + y;
 }

 public static void main(String[] args) {
  int myNum1 = plusMethodInt(8, 5);
  double myNum2 = plusMethodDouble(4.3, 6.26);

  System.out.println("int: " + myNum1);

  System.out.println("double: " + myNum2);
 }
}
```

[/slide]

[slide hideTitle]
# Signature and Return Type

The method **signature** does not include the return type of the method.

A class cannot have two methods with the same signature.

If we try to declare two methods with the same signature we will get a compile-time error.

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
# Problem with Solution: Greater of Two Values
[code-task title="Greater of Two Values" taskId="java-fund-Methods-lab-Greater-of-Two-Values" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Primiți două valori care sunt la fel ca tip de dată.

Valorile pot fi **int**, **char** sau **String**.

Creați o metodă **getMax()** care returnează valoarea mai mare dintre cele 2 numere:

## Exemple
|**Date de intrare**|**Date de ieșire**|
| --- | --- | 
| int | 16 |
| 2 | |
| 16 | |

|**Date de intrare**|**Date de ieșire**|
| --- | --- | 
| char | z |
| a | |
| z | |

|**Date de intrare**|**Date de ieșire**|
| --- | --- |
| String | Todor |
| Ivan | |
| Todor | |


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
[test]
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
# Problem with Solution: Multiply Evens by Odds
[code-task title="Multiply Evens by Odds" taskId="java-fund-Methods-lab-Multiply-Evens-by-Odds" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care citește un **număr întreg** și **înmulțește cu suma cifrelor sale pare** cu **suma cifrelor sale impare**:

## Exemple
|**Date de intrare**|**Date de ieșire**|**Comentarii**|
| --- | --- | --- |
| 12345 | 54 | 12345 are 2 cifre pare - 2 și 4. cifrele  |
| | | pare adunate sunt 6. |
| | | Are 3 cifre impare - 1, 3 și 5.  |
| | | cifrele impare adunate sunt 9. |
| | | Înmulțim 6 cu 9 și avem 54. |


|**Date de intrare**|**Date de ieșire**|
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
[test]
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

