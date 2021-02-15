[slide hideTitle]
# Iterația peste caractere

# ASCII Table
Calculatoarele pot înțelege doar numerele, deci un cod **ASCII** este reprezentarea numerică a unui caracter precum 'a' sau '@' sau o acțiune de un fel.

Acesta este un exemplu de parte a tabelului:

[image assetsSrc = "04-for-loop-ascii.png" /]

Și aici puteți verifica întregul **Tabel ASCII**: **http: //www.asciitable.com**

Coloanele pe care le-ați folosi cel mai probabil în scopul acestui curs sunt cele **zecimale** și **charactere**.

De exemplu, valoarea zecimală a caracterului **'a'** este **97** și cea corespunzătoare **'@'** este **64**.

# Iterația peste caractere
Este bine de știut că **buclele for** nu funcționează doar cu numere.

De asemenea, putem folosi **buclele for** pentru a itera peste **caractere**.

Iată un exemplu despre cum o buclă poate trece secvențial prin unele **litere** din alfabetul englez:

```java live
for (char ch = 'a'; ch <= 'd'; ch++) {
  System.out.print(ch + " ");
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Latin Letters
[code-task title="Latin Letters" taskId="java-basics-for-loop-numbers-latin-letters" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;
public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **2 litere**, fiecare pe o linie separată
* Tipărește **toate literele** din intervalul dat **inclusiv**

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| a | a |
| c | b |
|  | c |
[/task-description]
[tests]
[test]
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

