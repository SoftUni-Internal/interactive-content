[slide hideTitle]
# Tipuri întregi

[vimeo-video startTimeInSeconds="543" endTimeInSeconds="1001"]
[stream language="EN" videoId="425081520" default /]
[stream language="RO" videoId="425084744"  /]
[/vimeo-video]
**Tipuri întregi**stochează numere întregi, pozitive sau negative (cum ar fi 123 sau -456), fără zecimale.

Tipurile valide sunt **byte**, **short**, **int** și **long**, tipul pe care ar trebui să îl utilizați, depinde de valoarea numerică.

| Tip | Valoare implicită | Valoare min. | Valoare maximă | Dimensiune |
|-----|------|-----|------|-----|
| byte | 0 | -128 | 127 | 8 bit |
| short | 0 | -32768 | 32767 | 16 bit |
| int | 0 | -2147483648 | 2147483647 | 32 bit |
| long | 0 | -9223372036854775808 | 9223372036854775807 | 64 bit |

[/slide]

[slide hideTitle]
# Example: Centuries

```java live
byte centuries = 20; 
short years = 2000; 
int days = 730484;
long hours = 17531616; 

System.out.printf("%d centuries = %d years = %d days = %d hours.", 
                                    centuries, years, days, hours)
//20 centuries = 2000 years = 730484 days = 17531616 hours.
```

We can use different integer types, depending on what we want to store in them. 

- Tipul de date **Byte** poate stoca numere întregi de la -128 la 127

Acest lucru poate fi folosit în loc de **int** sau alte tipuri întregi pentru a salva memoria atunci când sunteți sigur că valoarea va fi cuprinsă între -128 și 127:

```java live
byte myNum = 100;
System.out.println(myNum);
```

- **Short** tipul de date poate stoca numere întregi de la -32768 la 32767:

```java live
short myNum = 5000;
System.out.println(myNum);
```

- **Int** tipul de date poate stoca numere întregi de la -2147483648 la 2147483647

În general și în cursul nostru, tipul de date **int** este tipul de date preferat atunci când creăm variabile cu o valoare numerică.


```java live
int myNum = 100000;
System.out.println(myNum);
```

- **Long** tipul de date poate stoca numere întregi de la -9223372036854775808 la 9223372036854775807.

Acesta este utilizat atunci când un int nu este suficient de mare pentru a stoca valoarea.

Rețineți că ar trebui să încheiați valoarea cu un "L":

```java live
long myNum = 15000000000L;
System.out.println(myNum);
```

[/slide]


[slide hideTitle]
# Integer Overflow

All integers have a range - a minimum and maximum value. This means that integers can overflow, resulting in incorrect values. 

Take a look at the below example.

```java
byte counter = 0;
for (int i = 0; i < 130; i++) {
  counter++;
  System.out.println(counter);
}

//1
//2
//…
//127
//-128
//-127
```

The counter variable starts from 0 and is incremented with each step of the for loop. 

Eventually when it reaches the maximum value of byte (127), it restarts again from the minimum value (-128). 

This is what we mean by **integer overflow** and it is precisely the reason why choosing your data type correctly is important.

[/slide]

[slide hideTitle]
# Integer Literals


Integer literals are numbers, which do not have a floating point part. 

**541** is a literal value by that definition.

They can be represented in a few different ways, which are not as intuitive:

- **hexadecimal integer literals** - values beginning with **0x** and **OX** - **0xFE**, **0xA8F1**, **0xFFFFFFFF**

- **long integer literals** - values preceded by the letter **L** or **l** - **9876543L**, **0L**

```java live
int hexadecimal = 0xA8F1; //43249
long number = 1L; //1

System.out.println("hexadecimal: ", hexadecimal);
System.out.println("long: ", number);
```

[/slide]


[slide hideTitle]
# Problem with Solution: Convert Meters to Kilometers

[code-task title="Problem: Convert Meters to Kilometers" taskId="java-fund-data-types-lab-convert-meters-to-kilometers-problem" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Vi se va da un număr întreg care va fi distanța în metri.

Scrieți un program care convertește metri în kilometri formatați în a doua zecimală.

## Exemple
|**Intrare**|**Ieșire**|
|-----|------|
| 1852 | 1.85 |
| 798 | 0.80 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1852
[/input]
[output]
1.85
[/output]
[/test]
[test open]
[input]
798
[/input]
[output]
0.80
[/output]
[/test]
[test]
[input]
5000
[/input]
[output]
5.00
[/output]
[/test]
[test]
[input]
825
[/input]
[output]
0.83
[/output]
[/test]
[test]
[input]
1254
[/input]
[output]
1.25
[/output]
[/test]
[test]
[input]
2450
[/input]
[output]
2.45
[/output]
[/test]
[test]
[input]
4589
[/input]
[output]
4.59
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


