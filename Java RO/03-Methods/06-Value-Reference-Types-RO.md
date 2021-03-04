# Tipuri de valori și referințe

[slide]

# Tipuri de valori

[vimeo-video startTimeInSeconds="5784" endTimeInSeconds="6540"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

Variabila unei valori \(date primitive\) conține o instanță a tipului ce arată direct valoarea lor. 

Cu tipuri de valori, fiecare variabilă are **o copie a datelor**, și nu este posibil ca operațiile pe o variabilă să **le afecteze și pe celelalte**.

Când valoarea unei primitive îi este atribuită altei variabile de același tip, se crează o copie.

Când o primitivă este pasată unei metode, doar o copie a unei primitive este pasată. 

Metoda apelată nu are acces la valoarea originala a primitivei, deci nu o poate schimba. 

Metoda apelată poate schimba valoarea copiată.

* Tipurile de date primitive sunt: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean` și `char`.

```Java
int i = 42; //require 4 bytes of memory
char ch = 'A'; //require 2 bytes of memory
boolean result = true; //require 1 byte of memory
```

# Tipurile de referințe

**Tipul de referință** al variabilei ține o referință \(indicator / adresă de memorie\) a valorii în sine.

Când un tip de referință îi este atribuit unui alt tip de referință, ambele vor indica același obiect.

Când un obiect este pasat într-o metodă, metoda apelată poate schimba conținutul obiectului pasat dar nu și adresa obiectului.

* Tipurile de date de referință sunt: `String`, `int[]`, `char[]`, `String[]`.

```Java
String str = "Hello";
byte[] bytes = { 1, 2, 3 };
```
## Exemple de tipuri de valori

```java live no-template
public class MyClass {
 public static void main(String[] args) {
   int num = 5;
   increment(num, 15);
   System.out.println(num);
}

public static void increment(int num, int value) {
   num += value;
 }
}
```

## Exemple de tipuri de referințe

```java live no-template
public class MyClass {
public static void main(String[] args) {
  int[] nums = { 5 };
  increment(nums, 15);
  System.out.println(nums[0]);
}

public static void increment(int[] nums, int value) {
  nums[0] += value;
 }
} 
```
[/slide]

[slide hideTitle]
# Problem: Math Operations
[code-task title="Problem: Math operations" taskId="java-fund-Methods-Math-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți o metodă care primește **2 numere** și un **operator**, calculează rezultatul și-l returnează.

Veți primi **3 linii pentru datele de intrare**.

Prima va fii pentru primul **număr**, a doua pentru **operator** și ultima pentru **al doilea număr**.

Operatorii posibili sunt: `/` `*` `+` `-`

## Exemple
|**Date de intrare**|**Date de ieșire**|
| --- | --- | 
| 5 | 25 |
| * ||
| 5 ||

|**Date de intrare**|**Date de ieșire**|
| --- | --- | 
| 4 | 12 |
| + ||
| 8 ||

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
\*
5
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
4
+
8
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
4
/
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
\-
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
+
2
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
2
\*
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
5
+
5
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Math operations
[code-task title="Problem: Math operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class MathOperations {
    public static void main(String[] args) {
        // Write your solution here
}
```
[/code-editor]
[task-description]
## Cerință
Scrieți o metodă care primește **2 numere** și un **operator**, calculează rezultatul și-l returnează.

Veți primi **3 linii pentru datele de intrare**.

Prima va fii pentru primul **număr**, a doua pentru **operator** și ultima pentru **al doilea număr**.

Operatorii posibili sunt: `/` `*` `+` `-`

## Exemple
|**Date de intrare**|**Date de ieșire**|
| --- | --- | 
| 5 | 25 |
| * ||
| 5 ||

|**Date de intrare**|**Date de ieșire**|
| --- | --- | 
| 4 | 12 |
| + ||
| 8 ||

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
\*
5
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
4
+
8
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
4
/
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
\-
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
+
2
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
2
\*
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
5
+
5
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
