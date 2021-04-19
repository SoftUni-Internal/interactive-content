[slide hideTitle]
# Iterația Peste Caractere
[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/RO/interactive-programming-basics-with-java-for-loops-25-26-27-the-ASCII-table-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Tabelul ASCII 
Calculatoarele pot înțelege doar numerele, deci un cod **ASCII** este reprezentarea numerică a unui caracter precum "a" sau "@".

Aici este o parte din tabelul ASCII:

| **Dec** | **Hex** | **Char** | **Dec** | **Hex** | **Char** |
| :-----: | :-----: | :------: | :-----: | :-----: | :------: |
|   64    |   40    |    \@    |   96    |   60    |    \`    |
|   65    |   41    |    A     |   97    |   61    |    a     |
|   66    |   42    |    B     |   98    |   62    |    b     |
|   67    |   43    |    C     |   99    |   63    |    c     |
|   68    |   44    |    D     |   100   |   64    |    d     |
|   69    |   45    |    E     |   101   |   65    |    e     |
|   70    |   46    |    F     |   102   |   66    |    f     |
|   71    |   47    |    G     |   103   |   67    |    g     |
|   72    |   48    |    H     |   104   |   68    |    h     |
|   73    |   49    |    I     |   105   |   69    |    i     |
|   74    |   4A    |    J     |   106   |   6A    |    j     |

Aici puteți verifica întregul [Tabel ASCII](http://www.asciitable.com).

Coloanele pe care le-ați folosi cel mai probabil în scopul acestui curs sunt cele **zecimale** și cele pentru **caractere**.

De exemplu, valoarea zecimală a caracterului **'a'** este **97** și cea corespunzătoare lui **'@'** este **64**.

## Iterația Peste Caractere
Este bine de știut că **buclele for** nu funcționează doar cu numere.

De asemenea, putem folosi **buclele for** pentru a itera peste **caractere**.

Iată un exemplu despre cum o buclă poate trece secvențial print-un interval de **litere** din alfabetul englez:

```java live
for (char ch = 'a'; ch <= 'd'; ch++) {
  System.out.print(ch + " ");
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Latin Letters

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/RO/interactive-programming-basics-with-java-for-loops-28-problem-and-solution-latin-letters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Latin Letters" taskId="java-basics-for-loop-numbers-latin-letters" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;
public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **2 litere**, fiecare pe o linie separată
* Tipărește **toate literele** din intervalul dat, **inclusiv** cele 2 litere din intrare

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| a | a b c|
| c | |

[/task-description]
[tests]
[test open]
[input]
a
c
[/input]
[output]
a b c
[/output]
[/test]
[test]
[input]
f
l
[/input]
[output]
f g h i j k l
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

