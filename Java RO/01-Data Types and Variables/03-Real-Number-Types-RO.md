# Real Number Types

[slide hideTitle]
# Floating-Point Types?

Ar trebui să utilizați un **tip cu virgulă mobilă** ori de câte ori aveți nevoie de un număr cu o zecimală, cum ar fi 9.99 sau 3.14515.

Tipurile cu virgulă mobilă, de asemenea:

- Au autonomie și precizie în funcție de memoria utilizată.
- Uneori se comportă anormal în calcule.
- Poate deține valori foarte mici și foarte mari, cum ar fi **0.00000000000001** și **10000000000000000000000000000.0**.

Tipurile valide sunt **float** și **double**:

| Tastați | Dimensiune | Precizie |
| --- | --- | --- |
| float  | 32 bit | up to 7 digits  |
| double | 64 bit | up to 16 digits |

[/slide]

[slide hideTitle]
# Floating-Point Numbers

- **Float**: tipul de date poate stoca numere fracționate, rețineți că ar trebui să încheiați valoarea cu un `f`:

```java live
float myNum = 5.75f;
System.out.println(myNum);
```
The **default value** of **float** is **0.0F**.

- **Double**: în acest curs când avem nevoie de numere în virgulă mobilă, de cele mai multe ori vom folosi **double**

```java live
double myNum = 19.99;
System.out.println(myNum);
```

The **default value** of **double** is **0.0D**.
[/slide]

[slide hideTitle]
# PI Precizie

Există diferențe de precizie atunci când se utilizează **float** și **double**

```java live
float floatPI = 3.141592653589793238f;
double doublePI = 3.141592653589793238;
System.out.println("Float PI is: " + floatPI);
System.out.println("Double PI is: " + doublePI);
```

**NOTĂ**: Sufixul `f` din prima afirmație!

- Numerele reale sunt interpretate implicit ca duble

- Ar trebui să le convertiți în mod explicit în float
[/slide]

[slide hideTitle]
# Problem with Solution: Pounds to Dollars

[code-task title="Problem: Pounds to Dollars" taskId="java-fund-data-types-lab-pounds-to-dollars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care convertește lire sterline în dolari SUA formatat în a treia zecimală.

1 lire sterline = 1,31 dolari

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 80 | 104.800 |
|  |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 39 | 51.090 |
|  |  |

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
# Notatie stiintifica

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
# Divizia în Virgulă Mobilă

Diviziunea integrală și diviziunea în virgulă mobilă sunt diferite.

Vezi exemplele de mai jos:

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
# Problem with Solution: Exact Sum of Real Numbers

[code-task title="Problem: Exact Sum of Real Numbers" taskId="java-fund-data-types-lab-exact-sum-of-real-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a introduce n numere și calculați și tipăriți **suma exactă** (fără rotunjire).

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

