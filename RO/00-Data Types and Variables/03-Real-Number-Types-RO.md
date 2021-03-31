# Tipul Numerelor Reale

[slide hideTitle]
# Tipuri în Virulă Mobilă

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-18-19-What-are-floating-point-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ar trebui să utilizați un **tip cu virgulă mobilă** ori de câte ori aveți nevoie de un număr cu o zecimală, cum ar fi 9.99 sau 3.14515.

Tipurile cu virgulă mobilă, de asemenea:

- Au autonomie și precizie în funcție de memoria utilizată
- Uneori se comportă anormal în calcule
- Poate deține valori foarte mici și foarte mari, cum ar fi **0.00000000000001** și **10000000000000000000000000000.0**

Tipurile valide sunt **float** și **double**:

| Tip | Dimensiune | Precizie |
| --- | --- | --- |
| float  | 32 bit | up to 7 digits  |
| double | 64 bit | up to 16 digits |

[/slide]

[slide hideTitle]
# Numere în Virgulă Mobilă

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-20-floating-point-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Float**: tipul de date poate stoca numere fracționare. 

Rețineți că ar trebui să încheiați valoarea cu un `f`:

```java live
float myNum = 5.75f;
System.out.println(myNum);
```

Valoarea **implicită** a **float** este **0,0F**.

- **Double**: în acest curs când avem nevoie de numere în virgulă mobilă, de cele mai multe ori vom folosi **double**

```java live
double myNum = 19.99;
System.out.println(myNum);
```

 **Valoarea implicită** a lui **double** este **0.0D**.
[/slide]

[slide hideTitle]
# PI Precizie
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-21-PI-precision-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există diferențe de precizie atunci când folosim **float** și **double**

```java live
float floatPI = 3.141592653589793238f;
double doublePI = 3.141592653589793238;
System.out.println("Float PI is: " + floatPI);
System.out.println("Double PI is: " + doublePI);
```

**NOTĂ**: Sufixul `f` din prima afirmație!

- Numerele reale sunt interpretate implicit ca duble

- Ar trebui să le convertiți în mod explicit în **float**
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Pounds to Dollars
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-22-problem-and-solution-pounds-to-dollars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Problem: Pounds to Dollars" taskId="java-fund-1-data-types-lab-pounds-to-dollars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care convertește lire sterline în dolari SUA formatat în a doua zecimală.

**1 lire sterline = 1.31 dolari**

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 80 | 104.800 |
| 39 | 51.090 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
80
[/input]
[output]
104.800
[/output]
[/test]
[test open]
[input]
39
[/input]
[output]
51.090
[/output]
[/test]
[test]
[input]
25.50
[/input]
[output]
33.405
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0.000
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
131.000
[/output]
[/test]
[test]
[input]
55.55
[/input]
[output]
72.771
[/output]
[/test]
[test]
[input]
99.85
[/input]
[output]
130.803
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Notatie Stiintifica

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-23-scientific-notation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când lucrați cu un număr mare, notația științifică este extrem de utilă.

În notația științifică, litera `E` reprezintă `10 la puterea lui E`.

De exemplu, `1.51E + 1` înseamnă același lucru ca și `1.51x10 ^ 1`.

Să trecem în revistă câteva exemple de notații științifice mai jos.

```java live
double exampleVariableOne = 1E+3;
System.out.println(exampleVariableOne);

double exampleVariableTwo = 1E+12;
System.out.println(exampleVariableTwo);

double exampleVariableThree = 1E-4;
System.out.println(exampleVariableThree);
```
[/slide]


[slide hideTitle]
# Împărțirea în Virgulă Mobilă

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-24-floating-point-division-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Împărțirea integrală și împărțirea în virgulă mobilă sunt diferite.

Vedeți  exemplele de mai jos:

```java live
System.out.println(10 / 4);
System.out.println(10 / 4.0);
System.out.println(10 / 0.0);
System.out.println(-10 / 0.0);
System.out.println(0 / 0.0);
System.out.println(8 % 2.5);
//System.out.println(10 / 0);     ArithmeticException
```
[/slide]


[slide hideTitle]
# Calcule în Virgulă Mobilă - Anomalii
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-25-floating-point-calculations-abnormalities-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Rețineți că uneori numerele cu virgulă mobilă funcționează incorect!

Vă încurajăm să citiți mai multe despre `IEEE 754`.

## Exemplu

```java live
double a = 1.0f;
double b = 0.33f;
double sum = 1.33d;

System.out.printf("a+b=%f \nsum=%f \nequal=%b", a + b, sum, (a + b == sum));
```

```java live
double num = 0;

for (int i = 0; i < 10000; i++) {
    num += 0.0001;
}

System.out.println(num);
```
[/slide]


[slide hideTitle]
# Clasa BigDecimal
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-26-big-decimal-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Rețineți că uneori numerele cu virgulă mobilă funcționează incorect!

Vă încurajăm să citiți mai multe despre `IEEE 754`.

```java live
BigDecimal bigDecimal1 =
 new BigDecimal("243156478.7384930212");
BigDecimal bigDecimal2 =
 new BigDecimal("843753892.4637281941");

// Addition of two BigDecimals
bigDecimal1 = bigDecimal1.add(bigDecimal2);
System.out.println(bigDecimal1);

// Subtraction of two BigDecimals
bigDecimal1 = bigDecimal1.subtract(bigDecimal2);
System.out.println(bigDecimal1);

// Multiplication of two BigDecimals
bigDecimal1 = bigDecimal1.multiply(bigDecimal2);
System.out.println(bigDecimal1);

// BigDecima1 raised to the power of 2
bigDecimal1 = bigDecimal1.pow(2);
System.out.println(bigDecimal1);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Exact Sum of Real Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-27-problem-and-solution-exact-sum-of-real-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Problem: Exact Sum of Real Numbers" taskId="java-fund-1-data-types-lab-exact-sum-of-real-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care acceptă un număr n de numere,  calculează și imprimă **suma exactă** (fără rotunjire).

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | 1000000000000000015 |
| 1000000000000000000 |  |
| 5 |  |
| 10 |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | 333333333333.30000000003 |
| 0.00000000003 |  |
| 333333333333.3 |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
1000000000000000000
5
10
[/input]
[output]
1000000000000000015
[/output]
[/test]
[test open]
[input]
2
0.00000000003
333333333333.3
[/input]
[output]
333333333333.30000000003
[/output]
[/test]
[test]
[input]
5
0.11
0.22
0.33
1.11
10.11
[/input]
[output]
11.88
[/output]
[/test]
[test]
[input]
2
1000000000000000000
5
[/input]
[output]
1000000000000000005
[/output]
[/test]
[test]
[input]
2
0.00000000003
333333333333.3
[/input]
[output]
333333333333.30000000003
[/output]
[/test]
[test]
[input]
4
100000000000
0.00001
100000000000
0.00001
[/input]
[output]
200000000000.00002
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

