# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Integer Operations

[code-task title="Integer Operations" taskId="java-fund-1-data-types-and-variables-Integer-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Citiți **patru numere întregi**.

**Adăugați** **primul** număr la **al doilea**, **împărțiți** (împărțire întreagă) **suma** la **al treilea** număr și **înmulțiți** rezultatul cu **al patrulea** număr.

**Imprimați** rezultatul.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 10 | 30 |
| 20 | |
| 3 | |
| 3 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
20
3
3
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
15
14
2
3
[/input]
[output]
42
[/output]
[/test]
[test]
[input]
30
3
3
2
[/input]
[output]
22
[/output]
[/test]
[test]
[input]
40
10
5
2
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
100
20
2
3
[/input]
[output]
180
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Sum Digits
[code-task title="Sum Digits" taskId="java-fund-1-data-types-and-variables-Sum-Digit" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Vi se va da un **singur** întreg.

Sarcina dvs. este de a găsi **suma cifrelor sale**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 245678 | 32 |
| 543 | 12 |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
245678
[/input]
[output]
32
[/output]
[/test]
[test]
[input]
97561
[/input]
[output]
28
[/output]
[/test]
[test open]
[input]
543
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
1000
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Elevator

[code-task title="Elevator" taskId="java-fund-1-data-types-and-variables-Elevator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Calculați câte cursuri vor fi necesare unui lift pentru a **ridica n persoane** în vârful clădirii.

**Intrarea** conține **două linii**:

- Numărul de persoane **n**

- Capacitatea **p** a liftului

### Exemplu
|**Intrare**|**Ieșire**|**Comentarii**
| --- | --- | --- |
| 17 | 6 | 5 courses * 3 people |
| 3 | | + 1 course * 2 people |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
17
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
4
5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
16
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
16
4
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Sum of Chars
[code-task title="Sum of Chars" taskId="java-fund-1-data-types-and-variables-Sum-of-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program, care **rezumă codurile ASCII de n caractere**.

**Imprimați suma** pe consolă.

### Intrare

- Pe prima linie, veți primi **n** - numărul de linii, care va urma

- Pe următoarele **n linii** - veți primi litere din alfabetul latin

### Ieșire
Imprimați suma totală în următorul format:
- "**The sum equals:** \{**TotalSum**\}"

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 | The sum equals: 399 |
| A | |
| b | |
| C | |
| d | |
| E | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
A
b
C
d
E
[/input]
[output]
The sum equals: 399
[/output]
[/test]
[test]
[input]
12
S
o
f
t
U
n
i
R
u
l
z
z
[/input]
[output]
The sum equals: 1263
[/output]
[/test]
[test]
[input]
10
H
e
l
l
o
B
u
d
d
y
[/input]
[output]
The sum equals: 1004
[/output]
[/test]
[test]
[input]
20
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
[/input]
[output]
The sum equals: 1940
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Print Part of the ASCII Table
[code-task title="Print Part of the ASCII Table" taskId="java-fund-1-data-types-and-variables-Print-Part-of-the-ASCII-Table" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Găsiți online mai multe informații despre [ASCII](www.ascii-code.com) (American Standard Code for Information Interchange) și creați un program care **tipărește o parte din tabelul ASCII** de caractere pe consolă.

Pe prima linie de intrare veți primi **indicele char** cu care ar trebui să **începeți** 
Pe a doua linie - indexul **ultimului** caracter pe care ar trebui să-l imprimați.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 60 | < = > ? @ A |
| 65 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
60
65
[/input]
[output]
< = > ? @ A
[/output]
[/test]
[test]
[input]
69
79
[/input]
[output]
E F G H I J K L M N O
[/output]
[/test]
[test]
[input]
97
104
[/input]
[output]
a b c d e f g h
[/output]
[/test]
[test]
[input]
40
55
[/input]
[output]
( ) * + , - . / 0 1 2 3 4 5 6 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Triples of Latin Letters
[code-task title="Triples of Latin Letters" taskId="java-fund-1-data-types-and-variables-Triples-of-Latin-Letters" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program pentru a **citi** un număr întreg **n** și **tipări toate triplurile de primele n litere latine mici**, ordonate **alfabetic**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | aaa |
| | aab |
| | aba |
| | abb |
| | baa |
| | bab |
| | bba |
| | bbb |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
aaa
aab
aba
abb
baa
bab
bba
bbb
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
aaa
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
bac
bba
bbb
bbc
bca
bcb
bcc
caa
cab
cac
cba
cbb
cbc
cca
ccb
ccc
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
aaa
aab
aac
aad
aba
abb
abc
abd
aca
acb
acc
acd
ada
adb
adc
add
baa
bab
bac
bad
bba
bbb
bbc
bbd
bca
bcb
bcc
bcd
bda
bdb
bdc
bdd
caa
cab
cac
cad
cba
cbb
cbc
cbd
cca
ccb
ccc
ccd
cda
cdb
cdc
cdd
daa
dab
dac
dad
dba
dbb
dbc
dbd
dca
dcb
dcc
dcd
dda
ddb
ddc
ddd
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
aaa
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
aaa
aab
aac
aad
aae
aaf
aba
abb
abc
abd
abe
abf
aca
acb
acc
acd
ace
acf
ada
adb
adc
add
ade
adf
aea
aeb
aec
aed
aee
aef
afa
afb
afc
afd
afe
aff
baa
bab
bac
bad
bae
baf
bba
bbb
bbc
bbd
bbe
bbf
bca
bcb
bcc
bcd
bce
bcf
bda
bdb
bdc
bdd
bde
bdf
bea
beb
bec
bed
bee
bef
bfa
bfb
bfc
bfd
bfe
bff
caa
cab
cac
cad
cae
caf
cba
cbb
cbc
cbd
cbe
cbf
cca
ccb
ccc
ccd
cce
ccf
cda
cdb
cdc
cdd
cde
cdf
cea
ceb
cec
ced
cee
cef
cfa
cfb
cfc
cfd
cfe
cff
daa
dab
dac
dad
dae
daf
dba
dbb
dbc
dbd
dbe
dbf
dca
dcb
dcc
dcd
dce
dcf
dda
ddb
ddc
ddd
dde
ddf
dea
deb
dec
ded
dee
def
dfa
dfb
dfc
dfd
dfe
dff
eaa
eab
eac
ead
eae
eaf
eba
ebb
ebc
ebd
ebe
ebf
eca
ecb
ecc
ecd
ece
ecf
eda
edb
edc
edd
ede
edf
eea
eeb
eec
eed
eee
eef
efa
efb
efc
efd
efe
eff
faa
fab
fac
fad
fae
faf
fba
fbb
fbc
fbd
fbe
fbf
fca
fcb
fcc
fcd
fce
fcf
fda
fdb
fdc
fdd
fde
fdf
fea
feb
fec
fed
fee
fef
ffa
ffb
ffc
ffd
ffe
fff
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Water Overflow

[code-task title="Water Overflow" taskId="java-fund-1-data-types-and-variables-Water-Overflow" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Aveți un **rezervor de apă** cu o capacitate de 255 litri.

Pe prima**linie, veți primi n.

În următoarele **n linii**, veți primi **litri** de apă, pe care trebuie să **le turnați în rezervor**.

Dacă **capacitatea nu este suficientă**, tipăriți "**Insufficient capacity!**" și **continuați să citiți** următorul rând.

Pe ultima linie, **imprimați litrii** în rezervor.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 | Insufficient capacity! |
| 20 | 240 |
| 100 | |
| 100 | |
| 100 | |
| 20 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
20
100
100
100
20
[/input]
[output]
Insufficient capacity!
240
[/output]
[/test]
[test]
[input]
1
1000
[/input]
[output]
Insufficient capacity!
0
[/output]
[/test]
[test]
[input]
7
10
20
30
10
5
10
20
[/input]
[output]
105
[/output]
[/test]
[test]
[input]
10
3
10
12
50
30
40
10
20
60
20
[/input]
[output]
255
[/output]
[/test]
[test]
[input]
4
100
150
5
1
[/input]
[output]
Insufficient capacity!
255
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Beer Kegs

[code-task title="Beer Kegs" taskId="java-fund-1-data-types-and-variables-Beer-Kegs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care **calculează volumul** de **n** butoaie de bere.

**Veți primi** în total **3 * n linii**.

Fiecare **trei rânduri** va conține informații pentru un **singur butoi**.

**În primul rând** este **modelul**  butoiului, **după aceea** este **raza** (un număr în virgulă mobilă) al butoiului și **în sfârșit** este **înălțimea** butoiului.

Calculați **volumul** folosind următoarea formulă:

`π * r^2 * h` 

La final, **imprimați modelul celui mai mare butoi**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | Bigger Keg |
| Smaller Keg | |
| 2.41 | |
| 10 | |
| Bigger Keg | |
| 5.12 | |
| 20 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Smaller Keg
2.41
10
Bigger Keg
5.12
20
[/input]
[output]
Bigger Keg
[/output]
[/test]
[test]
[input]
3
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
3
Keg 1
15
15
Keg 2
20
10
Keg 3
10
20
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
5
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
Keg 4
213213.123
1234124124
Keg 5
1236.345534
21321124
[/input]
[output]
Keg 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Spice Must Flow
[code-task title="Spice Must Flow" taskId="java-fund-1-data-types-and-variables-Spice-Must-Flow" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care **calculează cantitatea totală de condimente** care poate fi extrasă dintr-o sursă.

Sursa are un randament **de pornire**, care indică cât de mult condiment poate fi extras în **prima zi**.

După ce  sursa a fost exploatată  pentru o zi, randamentul ei scade cu 10, ceea ce înseamnă că în a doua zi va produce cu 10 condimente mai puțin **decât în prima zi, în a treia zi cu 10 condimente mai puțin decât în a doua** , și **și așa mai departe** (vezi exemple).

O sursă este considerată **profitabilă numai în timp ce randamentul acesteia este de cel puțin 100** - când se așteaptă mai puțin de 100 de condimente într-o zi, abandonați  sursa.

Echipajul minier **consumă 26 de condimente în fiecare zi** la **sfârșitul turei** și **încă 26** după epuizarea minei.

Rețineți că lucrătorii nu pot consuma mai mult condiment decât există în depozit.

Când operațiunea este finalizată, **tipăriți pe consolă pe două linii separate** câte **zile** a funcționat mina și **cantitatea totală** de condiment extras.

### Intrare
Veți primi **un număr**, reprezentând randamentul **inițial** al sursei.

### Ieșire
Imprimați **două rânduri separate** câte **zile a funcționat mina** și **cantitatea totală de condimente extrase**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 111 | 2 |
| | 134 |

[hints] 
[hint] 
In **prima zi** extragem 111 de condimente și la sfârșitul turei, muncitorii consumă 26, lăsând 85.
Randamentul scade cu 10 până la 101.
[/hint] 
[hint] 
In **a-2-a zi** extragem 101 de condimente, muncitorii consumă 26, lăsând 75.
Totalul este 160 și randamentul a scăzut la 91.
[/hint] 
[hint] 
Deoarece randamentul așteptat este mai mic de 100, **abandonăm** sursa.
Muncitorii iau încă 26, lăsând 134. Mina a **funcționat** 2 zile.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
111
[/input]
[output]
2
134
[/output]
[/test]
[test]
[input]
450
[/input]
[output] 
36
8938
[/output]
[/test]
[test]
[input]
200
[/input]
[output]
11
1338
[/output]
[/test]
[test]
[input]
1234
[/input]
[output] 
114
73276
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Poke Mon
[code-task title="Poke Mon" taskId="java-fund-1-data-types-and-variables-Poke-Mon" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
A Poke Mon este un tip special de pokemon căruia îi place să-i împingă pe alții. 

Dar la sfârșitul zilei, Poke Mon vrea să păstreze **statistici**, despre câte împingeri a reușit să facă.

Poke Mon își aruncă ținta și apoi trece la o altă țintă. 

**Distanța dintre ținte reduce puterea sa de împingere**.

Vi se va oferi **puterea de împingere** (poke power)  pe care Poke Mon o are, **N** - un număr întreg.

Apoi vi se va acorda **distanța dintre țintele împingerii** (poke targets), **M** - un număr întreg.

Apoi vi se va da **exhaustionFactor Y** - un număr întreg.

Sarcina voastră este să începeți **scăzând M din N până când N devine mai mic decât M**, adică Poke Mon nu are suficientă putere pentru a atinge următoarea țintă.

**De fiecare dată când scadeți M de la N înseamnă că ați atins o țintă** și ați împins-o cu succes. 

Numărați câte ținte ați împins - veți avea nevoie de acest număr.

Poke Mon devine treptat **mai epuizat**. 

**Dacă N devine egal cu EXACT 50% din valoarea inițială, trebuie să împărțiți N la Y**, dacă este **posibil**. 

Folosiți împărțirea numerelor întregi.

Dacă o împărțire nu este posibilă, NU ar trebui să o faceți. 

În schimb, ar trebui să continuați scăderea.

După împărțire, ar trebui să **continuați scăderea** din N, până când devine mai mic decât M.

Când N devine mai mic decât M, trebuie să luați ceea ce a rămas din N și numărul de ținte pe care le-ați împins și să le imprimați ca rezultat.

**NOTĂ**: Când calculați procentele, ar trebui să calculați cu maxima precizie.

Notă: 505 NU este EXACT 50% din 1000, ci 50.5%.

### Intrare / Limitări

- Pe prima linie veți primi **N** - un număr întreg

- Pe a doua linie veți primi **M** - un număr întreg

- Pe a treia linie veți primi **Y** - un număr întreg

### Ieșire

- Pe prima linie tipăriți **ceea ce a rămas din N**, după ce ați scăzut din acesta

- Pe cea de-a doua linie tipăriți **numărul de ținte**, pe care ați reușit să le împingeți

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 | 1 |
| 2 | 2 |
| 3 | |

[hints] 
[hint] 
This Poke Mon has **poke power** of 5. (N = 5)
The **distance** between the **poke targets** is 2. (M = 2)
The **exhaustionFactor** is equal to 3. (Y = 3)
[/hint] 
[hint] 
Începem să scădem M de la N.
La inceput, N = 5 and M = 2.
N - M = 3 -> 1 țintă împinsă
N - M = 1 -> 2 ținte împinsă
N is now smaller than M.
[/hint] 
[hint] 
Tipărim ceea ce a rămas din N, care este 1.
Printăm numărul de ținte, care este 2.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
2
3
[/input]
[output]
1
2
[/output]
[/test]
[test]
[input]
10
5
2
[/input]
[output]
2
1
[/output]
[/test]
[test]
[input]
1000
45
2
[/input]
[output]
10
22
[/output]
[/test]
[test]
[input]
100
19
1
[/input]
[output]
5
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Snowballs

[code-task title="Snowballs" taskId="java-fund-1-data-types-and-variables-Snowballs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Tony și Andi adoră să se joace în zăpadă și să se lupte cu bulgări de zăpadă, dar se ceartă întotdeauna cine face cele mai bune bulgăre de zăpadă.

Au decis să vă implice în lupta lor, făcându-vă să creați un program care **să calculeze datele bulgărelui** și să imprimă cea mai bună valoare a bulgărelui.

Veți primi **N** - un număr întreg, **numărul de bulgări de zăpadă fiind făcut** de Tony și Andi.

Pentru fiecare bulgăre de zăpadă veți primi 3 linii de intrare:

- Pe prima linie veți obține **snowballSnow** - un număr întreg

- Pe a doua linie veți obține **snowballTime** - un număr întreg

- Pe a treia linie veți obține **snowballQuality** - un număr întreg

Pentru fiecare bulgăre de zăpadă trebuie să calculați valoarea acestuia cu următoarea formulă:

**(snowballSnow / snowballTime) ^ snowballQuality**

La sfârșit, trebuie să **imprimați** cea mai mare valoare calculată (snowballValue)

### Intrare / Limitări

- Pe prima linie de intrare veți primi N - numărul de bulgări de zăpadă

- Pe următoarele linii de intrare N * 3 veți primi date despre bulgări de zăpadă

### Ieșire

- Imprimați **cea mai mare valoare calculată (snowballValue)**, folosind formula specificată mai sus

- Formatul de ieșire este:

"\{**snowballSnow**\} : \{**snowballTime**\} = \{**snowballValue**\} (\{**snowballQuality**\})"

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | 10 : 2 = 125 (3) |
| 10 | |
| 2 | |
| 3 | |
| 5 | |
| 5 | |
| 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
10
2
3
5
5
5
[/input]
[output]
10 : 2 = 125 (3)
[/output]
[/test]
[test]
[input]
3
10
5
7
16
4
2
20
2
2
[/input]
[output]
10 : 5 = 128 (7)
[/output]
[/test]
[test]
[input]
2
50
10
4
5
5
10
[/input]
[output]
50 : 10 = 625 (4)
[/output]
[/test]
[test]
[input]
2
5
5
5
15
3
5
[/input]
[output]
15 : 3 = 3125 (5)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: First and Reserve Team

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/First-and-Reserve-Team-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="First and Reserve Team" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-First-and-Reserve-Team" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a **Team** class. 

Add to this team all the player data that you receive from the input. 

All players **younger** than 40 years old go to **the first team**, all others go to **the reserve team**.

After that, print both list sizes.

The class should have **private fields** for:
- **name: String**
- **firstTeam: List(Person)**
- **reserveTeam: List(Person)**

The class should have **constructors**:
- **Team(String name)**

The class should also have private method for setName and public methods for:
- **getName(): String**
- **addPlayer(Person person): void**
- **getFirstTeam(): List(Person) (Collections.unmodifiableList)**
- **getReserveTeam(): List(Person) (Collections.unmodifiableList)**

## This class should be applicable in the following context:
```java
Team team = new Team (name: "Black Eagles");
for (Person player : players) {
    team.addPlayer(player);
}

System.out.println("The number of players on the main team is:"
 + team.getFirstTeam().size());

System.out.println("The number of players on the reserve team is:"
 + team.getReserveTeam ().size());
```

## It should not function the following way:

```java
Team team = new Team (name: "Black Eagles");

for (Person player : players) {
    if (player.getAge() < 40) {
        team.getFirstTeam().add(player);
    } else {
        team.getReserveTeam().add(player);
    }
}
```

# Example
| **Input** | **Output** |
| --- | --- |
| 5 | The number of players on the main team is: 4  |
| George Air 20 2200 | The number of players on the reserve team is: 1  |
| Anderson Paak 57 3333 |  |
| Lee Parker 27 600 |  |
| Grigor Dimitrov 25 666.66 |  |
| Bob Manner 35 555 |  |

[/task-description]
[tests]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class T01TestAllClassesExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String[] classNames = new String[] {
            "Person",
            "Team",
    };

    @Test
    public void test() {
        assertExistingClasses(classNames);
    }

    private void assertExistingClasses(String[] classNames) {
        for (String className : classNames) {
            assertClassExists(className);
        }
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class T02TestFieldsExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_IS_MISSING_ERROR_MESSAGE = "Field '%s' is missing";

    private static final String[] classNames = new String[]{"Person", "Team"};
    private static final Map<String, String[]> allNeededFields =
            new HashMap<String, String[]>() {{
                put("Person", new String[]{"firstName", "lastName", "age", "salary"});
                put("Team", new String[]{"name", "firstTeam", "reserveTeam"});
            }};

    @Test
    public void test() {
        assertHaveAllFields(classNames);
    }

    private void assertHaveAllFields(String[] classNames) {
        for (String className : classNames) {
            haveAllFields(className);
        }
    }

    private void haveAllFields(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);
        Field[] fields = cl.getDeclaredFields();

        for (String field : allNeededFields.get(className)) {
            Assert.assertTrue(String.format(FIELD_IS_MISSING_ERROR_MESSAGE, field),
                    Arrays.stream(fields)
                            .anyMatch(x -> x.getName().equalsIgnoreCase(field)));
        }
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T03TestConstructors {

    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String[] classNames = new String[]{
            "Person",
            "Team"
    };

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Person", new Class[]{String.class, String.class, int.class, double.class});
        put("Team", new Class[]{String.class});

    }};

    @Test
    public void test() throws NoSuchMethodException {
        assertConstructors(classNames);
    }

    private void assertConstructors(String[] classNames) throws NoSuchMethodException {
        for (String className : classNames) {
            assertConstructorExists(className);
        }
    }

    private void assertConstructorExists(String className) throws NoSuchMethodException {
        Class cl = Classes.allClasses.get(className);

        Constructor constructor = null;

        try {
            constructor = cl.getDeclaredConstructor(constructorParameters.get(className));
        } catch (Exception e) {
            constructor = null;
        }
        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, className), constructor);

    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class T04TestForNonPrivateFields {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String[] classNames = new String[]{"Person"};

    @Test
    public void test() {
        assertPrivateFields(classNames);
    }

    private void assertPrivateFields(String[] classNames) {
        for (String className : classNames) {
            assertHasNoPrivateFields(className);
        }
    }

    private void assertHasNoPrivateFields(String className) {
        Class cl = getClass(className);
        Field[] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields)
                .filter(x -> !Modifier.isPrivate(x.getModifiers()))
                .count();

        Assert.assertEquals(String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className)
                , 0, nonPrivateFieldsCount);

    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        return Classes.allClasses.get(className);
    }

}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;

public class T05TestToStringOverride {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class %s not present";

    private static final String[] classNames = new String[]{"Person"};

    private static final String[] methodNames = new String[]{"toString"};


    @Test
    public void test() throws NoSuchMethodException {
        assertExistingMethodsInClasses(classNames, methodNames);
    }

    private void assertExistingMethodsInClasses(String[] classNames, String[] methodNames) throws NoSuchMethodException {
        for (String className : classNames) {
            for (String methodName : methodNames) {
                assertMethodExist(className, methodName);
            }
        }
    }

    private void assertMethodExist(String className, String methodName) throws NoSuchMethodException {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);
        Method toString = cl.getDeclaredMethod(methodName);
    }
}

[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class T06TestAllMethodsExists {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";

    private static final String[] classNames = new String[]{
            "Person", "Team"
    };


    private static final Map<String, String[]> methodsInClass =
            new HashMap<String, String[]>() {{
                put("Person", new String[]{
                        "setSalary",
                        "setFirstName",
                        "setLastName",
                        "setAge",
                });
                put("Team", new String[]{
                        "getFirstTeam",
                        "getReserveTeam"});
            }};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setSalary", void.class);
        put("setFirstName", void.class);
        put("setLastName", void.class);
        put("setAge", void.class);
        put("getFirstTeam", List.class);
        put("getReserveTeam",  List.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setSalary", new Class[]{double.class});
        put("setFirstName", new Class[]{String.class});
        put("setLastName", new Class[]{String.class});
        put("setAge", new Class[]{int.class});
        put("getFirstTeam", new Class[]{});
        put("getReserveTeam",  new Class[]{});
    }};

    @Test
    public void test() throws NoSuchMethodException {
        assertExistingMethods(classNames);
    }

    private void assertExistingMethods(String[] classNames) throws NoSuchMethodException {
        for (String className : classNames) {

            Class cl = getClass(className);
            for (String methodName : methodsInClass.get(className)) {
                Method method =
                        methodParameters.get(methodName).length == 0
                                ? cl.getDeclaredMethod(methodName)
                                : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
                Class<?> returnType = method.getReturnType();
                Assert.assertTrue(
                        String.format(METHOD_RETURN_TYPE_ERROR,
                                methodName,
                                className,
                                methodReturnTypes.get(methodName)),
                        returnType.equals(methodReturnTypes.get(methodName)));
            }

        }
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}


[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class T07TestUnmodifiableCollections {

    private static final String CLASS_NOT_PRESENT_ERROR = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR = "Class '%s' contains non private fields";


    private static final String[] classNames = new String[]{
            "Team"
    };

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Team", new Class[] {String.class});
    }};

    static final Map<Class<?>, Object> defaultValues = new HashMap<Class<?>, Object>() {{
        put(boolean.class, Boolean.FALSE);
        put(byte.class, (byte) 0);
        put(short.class, (short) 0);
        put(int.class, 0);
        put(long.class, 0L);
        put(char.class, '\0');
        put(float.class, 0.0F);
        put(double.class, 0.0);
        put(Boolean.class, Boolean.FALSE);
        put(Byte.class, (byte) 0);
        put(Short.class, (short) 0);
        put(Integer.class, 0);
        put(Long.class, 0L);
        put(Character.class, 0L);
        put(Float.class, 0L);
        put(Double.class, 0L);
    }};

    @Test
    public void test() throws Exception {
        assertPrivateFields(classNames);
        assertModifiableCollections(classNames);
    }

    private void assertModifiableCollections(String[] classNames) throws Exception {
        for (String className : classNames) {
            assertClassForModifiableCollection(className);
        }
    }

    private void assertClassForModifiableCollection(String className) throws Exception {
        Class cl = getClass(className);
        List<Method> nonPrivateMethods = Stream.of(cl.getMethods())
                .filter(m -> !Modifier.isPrivate(m.getModifiers()))
                .filter(m -> m.getParameterCount() == 0)
                .collect(Collectors.toList());

        for (Method nonPrivateMethod : nonPrivateMethods) {

            Class returnType = nonPrivateMethod.getReturnType();

            if (Iterable.class.isAssignableFrom(returnType)) {
                if (returnType.getSimpleName().equals(Iterable.class.getSimpleName())) {
                    continue; // iterable cannot be modified
                }

                Constructor c = cl.getConstructor(constructorParameters.get(className));
                Class<?>[] parameterTypes = constructorParameters.get(className);
                Object[] arguments = getArguments(parameterTypes);
                Object o = c.newInstance(arguments);
                Collection collection = (Collection) nonPrivateMethod.invoke(o);
                try {
                    collection.clear(); // ** should throw
                    throw new Exception("modifiable collection");
                } catch (UnsupportedOperationException uoe) {
                    // no problem
                }
            } else if (Map.class.isAssignableFrom(returnType)) {
                Constructor c = cl.getConstructor(constructorParameters.get(className));
                Class<?>[] parameterTypes = constructorParameters.get(className);
                Object[] arguments = getArguments(parameterTypes);
                Object o = c.newInstance(arguments);
                Map map = (Map) nonPrivateMethod.invoke(o);
                try {
                    map.clear(); // ** should throw
                    throw new Exception("Method returns a modifiable collection");
                } catch (UnsupportedOperationException uoe) {
                    // no problem
                }
            }
        }
    }

    private Object[] getArguments(Class<?>[] parameterTypes) {
        Object[] parameters = new Object[parameterTypes.length];
        for (int i = 0; i < parameterTypes.length; i++) {
            parameters[i] = defaultValues.get(parameterTypes[i]);
        }

        return parameters;
    }

    private void assertPrivateFields(String[] classNames) {
        for (String className : classNames) {
            assertHasNoPrivateFields(className);
        }
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }

    private void assertHasNoPrivateFields(String className) {
        Class cl = getClass(className);
        Field[] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR, className),
                nonPrivateFieldsCount == 0);
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T08TestSetSalary {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_SALARY = "salary";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;
    private static final double PERSON_LOWER_SALARY = 400D;

    private static final String PERSON = "Person";


    private static final String[] methodNames = new String[]{
            "setSalary"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("set", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setSalary", new Class[]{double.class});
    }};

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethods(methodNames);
    }

    private void assertExistingMethods(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertIncreaseSalaryCorrect(method, cl));
        }
    }

    private boolean assertIncreaseSalaryCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetSalaryUnder460(method, cl)
                && correctSetNormalSalary(method, cl);
    }

    private boolean correctSetNormalSalary(Method setSalary, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class, String.class,
                int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        setSalary.setAccessible(true);
        setSalary.invoke(person, PERSON_SALARY);

        Field fieldSalary = person.getClass().getDeclaredField(NAME_OF_FIELD_SALARY);
        fieldSalary.setAccessible(true);
        double salary = (double) fieldSalary.get(person);

        return salary == PERSON_SALARY;
    }

    private boolean correctSetSalaryUnder460(Method setSalary, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setSalary.setAccessible(true);
        boolean haveError= false;
        try {
            setSalary.invoke(person, PERSON_LOWER_SALARY);
        }catch (InvocationTargetException iae){
            haveError = true;
        }

        return haveError;
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}

[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T09TestSetFirstName {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SHORTER_FIRST_NAME = "fn";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_FIRST_NAME = "firstName";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;

    private static final String PERSON = "Person";


    private static final String[] methodNames = new String[]{
            "setFirstName"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setFirstName", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setFirstName", new Class[]{String.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetFirstNameCorrect(method, cl));
        }
    }

    private boolean assertSetFirstNameCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetFirstName(method, cl)
                && correctSetFirstNameWithShorterString(method, cl);
    }

    private boolean correctSetFirstNameWithShorterString(Method setFirstName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE,PERSON_SALARY);

        boolean error = false;
        try {
            setFirstName.invoke(person, SHORTER_FIRST_NAME);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetFirstName(Method setFirstName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setFirstName.invoke(person, FIRST_NAME);

        Field fieldFirstName = person.getClass().getDeclaredField(NAME_OF_FIELD_FIRST_NAME);
        fieldFirstName.setAccessible(true);
        String firstName  = (String) fieldFirstName.get(person);

        return FIRST_NAME.equals(firstName);
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}

[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T10TestSetLastName {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "lastName";
    private static final String SHORTER_SECOND_NAME = "sn";
    private static final String NAME_OF_FIELD_LAST_NAME = "lastName";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;

    private static final String PERSON = "Person";


    private static final String[] methodNames = new String[]{
            "setLastName"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setLastName", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setLastName", new Class[]{String.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetLastNameCorrect(method, cl));
        }
    }

    private boolean assertSetLastNameCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetLastName(method, cl)
                && correctSetLastNameWithShorterString(method, cl);
    }

    private boolean correctSetLastNameWithShorterString(Method setLastName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        boolean error = false;
        try {
            setLastName.invoke(person, SHORTER_SECOND_NAME);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetLastName(Method setLastName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setLastName.invoke(person, SECOND_NAME);

        Field fieldLastName = person.getClass().getDeclaredField(NAME_OF_FIELD_LAST_NAME);
        fieldLastName.setAccessible(true);
        String lastName = (String) fieldLastName.get(person);

        return SECOND_NAME.equals(lastName);
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}


[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T11TestSetAge {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_AGE = "age";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;

    private static final String PERSON = "Person";


    private static final String[] methodNames = new String[]{
            "setAge"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setAge", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setAge", new Class[]{int.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetAgeCorrect(method, cl));
        }
    }

    private boolean assertSetAgeCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetAge(method, cl)
                && correctSetAgeWithZERO(method, cl);
    }

    private boolean correctSetAgeWithZERO(Method setAge, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        boolean error = false;
        try {
            setAge.invoke(person, 0);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetAge(Method setAge, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setAge.invoke(person, YOUNG_PERSON_AGE);

        Field fieldAge = person.getClass().getDeclaredField(NAME_OF_FIELD_AGE);
        fieldAge.setAccessible(true);
        int age = (int) fieldAge.get(person);

        return YOUNG_PERSON_AGE == age;
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}


[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T12TestAddPlayer {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String TEAM_NAME = "TeamName";
    private static final String PERSON_CLASS_NAME = "Person";
    private static final String PERSON_METHOD_GET_AGE_NAME = "getAge";
    private static final String NAME_OF_FIELD_RESERVE_TEAM = "reserveTeam";
    private static final String NAME_OF_FIELD_FIRST_TEAM = "firstTeam";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;

    private static final String PERSON = "Team";


    private static final String[] methodNames = new String[]{
            "addPlayer"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("addPlayer", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("addPlayer", new Class[]{Object.class});
    }};
    private static final String CANNOT_ADD_PLAYER = "Can not add player";


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method = cl.getDeclaredMethod(methodName, Classes.allClasses.get(PERSON_CLASS_NAME));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(CANNOT_ADD_PLAYER,
                    assertAddPlayerCorrect(method, cl));
        }
    }

    private boolean assertAddPlayerCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctAddYoungPlayer(method, cl)
                && correctAddOldPlayer(method, cl);
    }

    private boolean correctAddOldPlayer(Method addPlayer, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class);
        constructor.setAccessible(true);
        Object team = constructor.newInstance(TEAM_NAME);

        Object person = Mockito.mock(Classes.allClasses.get(PERSON_CLASS_NAME));
        Method getAge = person.getClass().getDeclaredMethod(PERSON_METHOD_GET_AGE_NAME);
        getAge.setAccessible(true);
        Mockito.when(getAge.invoke(person)).thenReturn(OLD_PERSON_AGE);

        addPlayer.invoke(team, person);

        Field reserveTeamField = team.getClass().getDeclaredField(NAME_OF_FIELD_RESERVE_TEAM);
        reserveTeamField.setAccessible(true);
        List<?> reserveTeam = (List<?>) reserveTeamField.get(team);

        return reserveTeam.size() > 0;
    }

    private boolean correctAddYoungPlayer(Method addPlayer, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class);
        constructor.setAccessible(true);
        Object team = constructor.newInstance(TEAM_NAME);

        Object person = Mockito.mock(Classes.allClasses.get(PERSON_CLASS_NAME));
        Method getAge = person.getClass().getDeclaredMethod(PERSON_METHOD_GET_AGE_NAME);
        getAge.setAccessible(true);
        Mockito.when(getAge.invoke(person)).thenReturn(YOUNG_PERSON_AGE);

        addPlayer.invoke(team, person);

        Field firstTeamField = team.getClass().getDeclaredField(NAME_OF_FIELD_FIRST_TEAM);
        firstTeamField.setAccessible(true);
        List<?> firstTeam = (List<?>) firstTeamField.get(team);

        return firstTeam.size() > 0;
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

