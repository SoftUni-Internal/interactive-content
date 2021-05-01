[slide hideTitle]
# Tipuri Întregi
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-12-13-Integer-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Tipurile întregi** stochează numere întregi, pozitive sau negative (precum 123 sau -456).

Tipurile întregi existente sunt **byte**, **short**, **int** și **long**.

Alegerea tipului depinde de valoarea numerică care trebuie stocată.

| Tip | Valoare implicită | Valoare minimă | Valoare maximă | Dimensiune |
|-----|------|-----|------|-----|
| byte | 0 | -128 | 127 | 8 bit |
| short | 0 | -32768 | 32767 | 16 bit |
| int | 0 | -2147483648 | 2147483647 | 32 bit |
| long | 0 | -9223372036854775808 | 9223372036854775807 | 64 bit |

[/slide]

[slide hideTitle]
# Exemplu: Centuries

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-14-examples-centuries-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java live
byte centuries = 20; 
short years = 2000; 
int days = 730484;
long hours = 17531616; 

System.out.printf("%d centuries = %d years = %d days = %d hours.", 
                                    centuries, years, days, hours);
//20 centuries = 2000 years = 730484 days = 17531616 hours.
```

Putem folosi diferite tipuri întregi, în funcție de ceea ce dorim să stocăm în ele.  

- Tipul de date **byte** poate stoca numere întregi de la -128 la 127

**Byte** este folosit pentru a salva memorie atunci când se știe sigur că valoarea va fi cuprinsă între -128 și 127:

```java live
byte myNum = 100;
System.out.println(myNum);
```

- Tipul de date **short** poate stoca numere întregi de la -32768 la 32767

```java live
short myNum = 5000;
System.out.println(myNum);
```

- Tipul de date **int** poate stoca numere întregi de la -2147483648 la 2147483647

Tipul de date **int** este cel mai utilizat tip de date atunci când creăm variabile care au o valoare numerică.


```java live
int myNum = 100000;
System.out.println(myNum);
```

- Tipul de date **long** poate stoca numere întregi de la -9223372036854775808 la 9223372036854775807

Acesta este utilizat atunci când **int** nu este suficient de mare pentru a stoca valoarea.

Rețineți că trebuie să încheiați valoarea cu un "L" atunci când utilizați acest tip de date:

```java live
long myNum = 15000000000L;
System.out.println(myNum);
```

[/slide]


[slide hideTitle]
# Integer Overflow

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-15-Integer-overflow-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Toate variabilele de tip întreg au un interval - o valoare minimă și una maximă. 

Acest lucru înseamnă că intervalul acestora poate fi depășit, ceea ce poate determina valori incorecte.

Exemplu:
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

Variabila **counter** are inițial valoarea 0 și este incrementată la fiecare iterație a buclei for. 

Atunci când atinge valoarea maximă a tipului **byte** (127), este resetată din nou la valoarea minimă (-128). 

Acest exemplu ilustrează conceptul de **integer overflow** și importanța alegerii corecte a tipului de date.

[/slide]

[slide hideTitle]
# Literali Întregi
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-16-integer-literals-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Literalii întregi sunt numere care nu au o parte reprezentată în virgulă mobilă.

De exemplu, **541** este o valoare literală.

Aceștia pot fi reprezentați în câteva moduri diferite, care nu sunt la fel de intuitive:

- **Literali întregi hexazecimali** - valori care folosesc sistemul de numerație hexazecimal; încep cu **0x** și **0X** - **0xFE**, **0xA8F1**, **0xFFFFFFFF**

- **Literali întregi lungi** - valori urmate de litera **L** sau **l** - **9876543L**, **0L**

```java live
int hexadecimal = 0xA8F1; // 43249
long number = 1L; // 1

System.out.println("hexadecimal: " + hexadecimal);
System.out.println("long: " + number);
```
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Convert Meters to Kilometers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-17-problem-and-solution-convert-meters-to-kilometers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Problem: Convert Meters to Kilometers" taskId="java-fund-1-data-types-lab-convert-meters-to-kilometers-problem" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Vi se va da un număr întreg care va reprezenta distanța în metri.

Scrieți un program care convertește metri în kilometri - rezultatul trebuie formatat cu două zecimale

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


