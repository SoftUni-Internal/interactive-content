# Problema 2: Fancy Barcodes
[slide hideTitle]
# Fancy Barcodes
[code-task title="Fancy Barcodes" taskId="Java-Fundamentals-Part-Two-Exam-Fancy-Barcodes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Prima voastră sarcină este de a determina dacă secvența dată de caractere este un cod de bare **valid** sau **nu**.

**Fiecare linie trebuie să conțină numai coduri de bare valide**.

Un cod de bare este valabil atunci când:

- este încadrat de un simbol "**@**", urmat de unul sau mai multe simboluri "\#"

- are cel puțin 6 caractere (nu se ține cont de simbolul "**@**" sau "\#" care îl încadrează)

- începe cu o majusculă

- conține doar litere (litere mici și majuscule) și cifre

- se termină cu o majusculă

Exemple de coduri de bare valide: "\@\#FreshFisH\@\#", "\@\#\#\#Brea0D\@\#\#\#", "\@\#\#Che46sE\ @\#\#"

Exemple de coduri de bare **nevalide**: "\#\#InvaliDiteM\#\#", "\@InvalidIteM\@", "\@\#Invalid_IteM\@\#"

După aceea, trebuie să determinați **grupul de produse** al articolului din **codul de bare**.

Grupul de produse se obține prin **concatenarea tuturor cifrelor găsite în codul de bare**.

Dacă **nu există cifre** prezente în **codul de bare**, grupul de produse implicit este "**00**".

Exemple:

"\@\#FreshFisH\@\#" \-\> product group: 00

"\@\#\#\#Brea0D\@\#\#\#" \-\> product group: 0

"\@\#\#Che4s6E\@\#\#" \-\> product group: 46

### Intrare

Pe prima linie vi se va da un număr întreg "**n**" - numărul de coduri de bare pe care le veți primi în continuare.

Pe următoarele "**n**" linii veți primi șiruri diferite.

### Ieșire

Pentru fiecare cod de bare pe care îl procesați, trebuie să imprimați un mesaj.

Dacă codul de bare este nevalid:

- "**Invalid barcode**"

Dacă codul de bare este valid:

- "**Product group:** \{**product group**\}"


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | Product group: 00 |
| @\#FreshFisH@\# | Product group: 0 |
| @\#\#\#Brea0D@\#\#\# | Product group: 46 |
| @\#\#Che4s6E@\#\# |  |


| **Intrare** | **Ieșire** |
| --- | --- |
| 6 | Product group: 11 |
| @\#\#\#Val1d1teM@\#\#\# | Product group: 00 |
| @\#ValidIteM@\# | Invalid barcode |
| \#\#InvaliDiteM\#\# | Invalid barcode |
| @InvalidIteM@ | Invalid barcode |
| @\#Invalid_IteM@\# | Product group: 00 |
| @\#ValiditeM@\# |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
@\#FreshFisH@\#
@\#\#\#Brea0D@\#\#\#
@\#\#Che46sE@\#\#
[/input]
[output]
Product group: 00
Product group: 0
Product group: 46
[/output]
[/test]
[test open]
[input]
6
@\#\#\#Val1d1teM@\#\#\#
@\#ValidIteM@\#
\#\#InvaliDiteM\#\#
@InvalidIteM@
@\#Invalid_IteM@\#
@\#ValiditeM@\#
[/input]
[output]
Product group: 11
Product group: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group: 00
[/output]
[/test]
[test]
[input]
1
@\#invalid@\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
@\#\#Invalid@\#\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
@\#invalidBarcodE@\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
@\#ValiD@\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
@\#\#Xa013mlX@\#\#
[/input]
[output]
Product group: 013
[/output]
[/test]
[test]
[input]
3
@\#CucumberS@\#
@\#\#CarrotS@\#\#
@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#PotatoeS@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
[/input]
[output]
Product group: 00
Product group: 00
Product group: 00
[/output]
[/test]
[test]
[input]
3
@\#P1n3Appl3S@\#
@\#\#\#X1x2x3x4x5x6x7x8x9x0X@\#\#\#
@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#Zzzz987zzz65zzz43zzz210zzZ@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
[/input]
[output]
Product group: 133
Product group: 1234567890
Product group: 9876543210
[/output]
[/test]
[test]
[input]
1
@\#Test4et0O@\#
[/input]
[output]
Product group: 40
[/output]
[/test]
[test]
[input]
11
@\#\#Aaa1A1aaA@\#\#
@\#Bbbbbb@\#
@\#Ccccc_ccccC@\#
@\#\#\#D2d3d4D@\#\#\#
@\#EfgfE@\#
@\#hhhhhhhH@\#
@\#IIIIIIIII@\#
@\#IIII11IIIII@\#
@\#\#JjjjjJ@\#
@KkkkkkK@
@\#\#Lmn83opq19RsTuV@\#\#
[/input]
[output]
Product group: 11
Invalid barcode
Invalid barcode
Product group: 234
Invalid barcode
Invalid barcode
Product group: 00
Product group: 11
Product group: 00
Invalid barcode
Product group: 8319
[/output]
[/test]
[test]
[input]
7
@\#Th1sIsTh3T0ughestT3sT@\#
@\#\#\#ItReallyISharD@\#\#\#
@\#\#ItT3stsTh3Wh0l3Match1nG@\#\#
@\#I`llThrowSomeInvalidCodeS@\#
@\#\#\#AndSomeMorE@\#\#
@\#\#AndFinally@\#\#
@\#\#Th3R34lM0F0T3sT@\#\#\#
[/input]
[output]
Product group: 1303
Product group: 00
Product group: 33031
Invalid barcode
Product group: 00
Invalid barcode
Product group: 334003
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
