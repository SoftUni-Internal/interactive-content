# Problema 1: Activation Keys
[slide hideTitle]
# Activation Keys
[code-task title="Activation Keys" taskId="Java-Fundamentals-Part-Two-Exam-Activations-Keys" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Prima linie de intrare va fi cheia dvs. de activare brută. Acesta va consta numai din **litere și cifre**.

După aceea, până când este dată comanda "**Generate**", veți primi șiruri cu instrucțiuni pentru diferite operațiuni care trebuie efectuate pe cheia de activare brută.

Există mai multe tipuri de instrucțiuni, împărțite la `>>>`:

* "**Contains**\>\>\>\{**substring**\}" - Verifică dacă cheia brută de activare conține subșirul dat

  - dacă se întâmplă, tipăriți: "\{**raw activation key**\} **contains** \{**substring**\}"

  - dacă nu, tipăriți: "**Substring not found!**"

* "**Flip**\>\>\>**Upper/Lower**\>\>\>\{**startIndex**\}\>\>\>\{**endIndex**\}" - Schimbă șirul **între indicii dați (indexul final este exclusiv)** cu majuscule sau minuscule

Toți indicii dați vor fi valabili.

Tipărește cheia de activare.

- "**Slice**\>\>\>\{**startIndex**\}\>\>\>\{**endIndex**\}"

**Șterge** caracterele dintre indicii de început și sfârșit (**indexul final este exclusiv**).

Ambii indici vor fi **valabili**.

Tipărește cheia de activare.

### Intrare

Prima linie a intrării va fi un șir și va consta din **numai litere și cifre**.

După prima linie, până când este dată comanda "**Generate**", veți primi șiruri.

### Ieșire

După primirea comenzii "**Generate**", tipăriți:

"**Your activation key is:** \{**activation key**\}"

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| abcdefghijklmnopqrstuvwxyz | abghijklmnopqrstuvwxyz |
| Slice\>\>\>2\>\>\>6 | abgHIJKLMNOPQRstuvwxyz |
| Flip\>\>\>Upper\>\>\>3\>\>\>14 | abgHIjkLMNOPQRstuvwxyz |
| Flip\>\>\>Lower\>\>\>5\>\>\>7 | Substring not found! |
| Contains\>\>\>def | Substring not found! |
| Contains\>\>\>deF | Your activation key is: abgHIjkLMNOPQRstuvwxyz |
| Generate |  |

[hints]
[hint]
Prima comandă este `Slice>>2>>6`

Eliminăm caracterele dintre indexul 2 and 6(neincluse) - **cdef**

ab**cdef**ghijklmnopqrstuvwxyz **devine** "**abghijklmnopqrstuvwxyz**"
[/hint] 
[hint]
Al doilea vine `Flip>>>Upper>>>3>>>14`

Comutăm caracterele între indexurile 3 și 14(neincluse) cu majuscule - **hijklmnopqr**

abg**hijklmnopqr**stuvwxyz **devine** abg**HIJKLMNOPQR**stuvwxyz
[/hint] 
[hint]
A patra comandă este `Flip>>>Lower>>>5>>>7`

abgHI**JK**LMNOPQRstuvwxyz **devine** abgHI**jk**LMNOPQRstuvwxyz
[/hint] 
[hint]
Următoarea comandă este `Contains>>>def`

"**abgHIjkLMNOPQRstuvwxyz**" **nu** conține "**def**", deci imprimăm:

"**Substring not found!**"
[/hint] 
[hint]
Ultima comandă este `Contains>>>deF`:

"**abgHIjkLMNOPQRstuvwxyz**" **nu** conține "**deF**"
[/hint]
[hint]
Cheia de activare finală este "**abgHIjkLMNOPQRstuvwxyz**"
[/hint] 
[/hints] 


| **Intrare** | **Ieșire** |
| --- | --- |
| 134softsf5ftuni2020rockz42 | 134sf5ftuni2020rockz42 |
| Slice\>\>\>3\>\>\>7 | Substring not found! |
| Contains\>\>\>-rock | Substring not found! |
| Contains\>\>\>-uni- | Substring not found! |
| Contains\>\>\>-rocks | 134SF5FTuni2020rockz42 |
| Flip\>\>\>Upper\>\>\>2\>\>\>8 | 134SF5ftuni2020rockz42 |
| Flip\>\>\>Lower\>\>\>5\>\>\>11 | Your activation key is: 134SF5ftuni2020rockz42 |
| Generate |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
abcdefghijklmnopqrstuvwxyz
Slice\>\>\>2\>\>\>6
Flip\>\>\>Upper\>\>\>3\>\>\>14
Flip\>\>\>Lower\>\>\>5\>\>\>7
Contains\>\>\>def
Contains\>\>\>deF
Generate
[/input]
[output]
abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz
[/output]
[/test]
[test open]
[input]
134softsf5ftuni2020rockz42
Slice\>\>\>3\>\>\>7
Contains\>\>\>-rock
Contains\>\>\>-uni-
Contains\>\>\>-rocks
Flip\>\>\>Upper\>\>\>2\>\>\>8
Flip\>\>\>Lower\>\>\>5\>\>\>11
Generate
[/input]
[output]
134sf5ftuni2020rockz42
Substring not found!
Substring not found!
Substring not found!
134SF5FTuni2020rockz42
134SF5ftuni2020rockz42
Your activation key is: 134SF5ftuni2020rockz42
[/output]
[/test]
[test]
[input]
abc
Contains\>\>\>def
Generate
[/input]
[output]
Substring not found!
Your activation key is: abc
[/output]
[/test]
[test]
[input]
abc
Contains\>\>\>a
Contains\>\>\>b
Contains\>\>\>c
Contains\>\>\>A
Contains\>\>\>ab
Contains\>\>\>abc
Generate
[/input]
[output]
abc contains a
abc contains b
abc contains c
Substring not found!
abc contains ab
abc contains abc
Your activation key is: abc
[/output]
[/test]
[test]
[input]
abcdefghijklmnopqrstuvwxyzadsadasdadsdad
Flip\>\>\>Upper\>\>\>13\>\>\>28
Generate
[/input]
[output]
abcdefghijklmNOPQRSTUVWXYZADsadasdadsdad
Your activation key is: abcdefghijklmNOPQRSTUVWXYZADsadasdadsdad
[/output]
[/test]
[test]
[input]
ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
Flip\>\>\>Lower\>\>\>5\>\>\>12
Generate
[/input]
[output]
ABCDEfghijklMNOPQRSTUVWXYZ0123456789
Your activation key is: ABCDEfghijklMNOPQRSTUVWXYZ0123456789
[/output]
[/test]
[test]
[input]
abcdefghijklmnopqrstuvwxyz0123456789
Slice\>\>\>2\>\>\>5
Generate
[/input]
[output]
abfghijklmnopqrstuvwxyz0123456789
Your activation key is: abfghijklmnopqrstuvwxyz0123456789
[/output]
[/test]
[test]
[input]
abcdefghijklmnopq-rstuvwxyz0123456789
Contains\>\>\>klm
Flip\>\>\>Upper\>\>\>4\>\>\>9
Generate
[/input]
[output]
abcdefghijklmnopq-rstuvwxyz0123456789 contains klm
abcdEFGHIjklmnopq-rstuvwxyz0123456789
Your activation key is: abcdEFGHIjklmnopq-rstuvwxyz0123456789
[/output]
[/test]
[test]
[input]
abcdefghijklmnopqrstuvwxyz0123456789
Slice\>\>\>2\>\>\>8
Contains\>\>\>defg
Contains\>\>\>789
Flip\>\>\>Upper\>\>\>3\>\>\>19
Flip\>\>\>Lower\>\>\>1\>\>\>11
Slice\>\>\>0\>\>\>2\>\>\>7\>\>\>10\>\>\>13\>\>\>21
Generate
[/input]
[output]
abijklmnopqrstuvwxyz0123456789
Substring not found!
abijklmnopqrstuvwxyz0123456789 contains 789
abiJKLMNOPQRSTUVWXYz0123456789
abijklmnopqRSTUVWXYz0123456789
ijklmnopqRSTUVWXYz0123456789
Your activation key is: ijklmnopqRSTUVWXYz0123456789
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
