# Homework


[slide hideTitle]
# Problem: Valid Usernames
[code-task title="Valid Usernames" taskId="Java-Fundamentals-2-Text-Processing-Valid-Usernames" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește numele utilizatorilor pe o singură linie (alăturat de ", ") și **tipărește toate numele de utilizatori valizi**.

Un **nume de utilizator valid** este:
- Are **lungime între 3 și 16 caractere**
- Conține **numai litere, cifre, cratime și sublinieri**
- Nu are **simboluri redundante** înainte, după sau între ele

### Exemple
| **Input** | **Output** |
| --- | --- |
| Jeff, john45, ab, cd, peter-white, @smith | Jeff | 
| | john45 |
| | peter-white |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Jeff, john45, ab, cd, peter-white, @smith
[/input]
[output]
Jeff
john45
peter-white
[/output]
[/test]
[test]
[input]
sh, too_long_username, !lleg@l ch@rs, jeffbutt
[/input]
[output]
jeffbutt
[/output]
[/test]
[test]
[input]
ador@ed, babo_on, bog-art, boo@@@th, %bul$ocks,    burgoo
[/input]
[output]
babo_on
bog-art
[/output]
[/test]
[test]
[input]
cheesey, chix, clastic, clearwater, cofactor, collection
[/input]
[output]
cheesey
chix
clastic
clearwater
cofactor
collection
[/output]
[/test]
[test]
[input]
chee\@sey, \$chix\$,   clastic, clear-water, cof actor, collection
[/input]
[output]
clear-water
collection
[/output]
[/test]
[test]
[input]
produce, gather, low-ther, energy_power, #adored,   dashboard  , registered , fish, stylish
[/input]
[output]
produce
gather
low-ther
energy_power
fish
stylish
[/output]
[/test]
[test]
[input]
le, tod@gers, log_in, infant, fancy-smile,  , bogart, as
[/input]
[output]
log_in
infant
fancy-smile
bogart
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Character Multiplier
[code-task title="Character Multiplier" taskId="Java-Fundamentals-2-Text-Processing-Character-Multiplier" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați o metodă **care ia două șiruri** ca argumente și **returnează suma codurilor de caractere înmulțite** (înmulțiți str1 \[0\] cu str2 \[0\] și adăugați suma totală)

Apoi **continuați cu următoarele două caractere**.

**Dacă una dintre șiruri este mai lungă decât cealaltă**, **adăugați codurile de caractere rămase** la suma totală fără multiplicare.

### Example
| **Input** | **Output** |
| --- | --- |
| a aaaa | 9700 | 

### Example
| **Input** | **Output** |
| --- | --- |
| John Smith | 42025 | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a aaaa
[/input]
[output]
9700
[/output]
[/test]
[test open]
[input]
John Smith
[/input]
[output]
42025
[/output]
[/test]
[test]
[input]
123 522
[/input]
[output]
7647
[/output]
[/test]
[test]
[input]
mnoji sabe
[/input]
[output]
44894
[/output]
[/test]
[test]
[input]
leet test
[/input]
[output]
47800
[/output]
[/test]
[test]
[input]
poKys ePyrviqStringTuka
[/input]
[output]
57885
[/output]
[/test]
[test]
[input]
zzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzz
[/input]
[output]
416752
[/output]
[/test]
[test]
[input]
ioers;hiuesyv843sao384uyvP309308u 0s8o48eieoveatgo4rh;owia390'a92qa
[/input]
[output]
256134
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Extract File
[code-task title="Extract File" taskId="Java-Fundamentals-2-Text-Processing-Extract-Files" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care**citește calea către un fișier**și**scade numele fișierului și extensia acestuia**.

### Example
| **Input** | **Output** |
| --- | --- |
| C:\Internal\training-internal\Template.pptx | File name: Template | 
| | File extension: pptx |

### Example
| **Input** | **Output** |
| --- | --- |
| C:\Projects\Data-Structures\LinkedList.cs | File name: LinkedList | 
| | File extension: cs |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
C:\Internal\training-internal\Template.pptx
[/input]
[output]
File name: Template
File extension: pptx
[/output]
[/test]
[test open]
[input]
C:\Projects\Data-Structures\LinkedList.cs
[/input]
[output]
File name: LinkedList
File extension: cs
[/output]
[/test]
[test]
[input]
C:\Internal\training-C#\Strings-and-Text-Processing.doc
[/input]
[output]
File name: Strings-and-Text-Processing
File extension: doc
[/output]
[/test]
[test]
[input]
C:\Pesho\Video\Wrath-of-The-Titans.mkv
[/input]
[output]
File name: Wrath-of-The-Titans
File extension: mkv
[/output]
[/test]
[test]
[input]
C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VS2017.exe
[/input]
[output]
File name: VS2017
File extension: exe
[/output]
[/test]
[test]
[input]
C:\Program Files\Ditto\Ditto.exe
[/input]
[output]
File name: Ditto
File extension: exe
[/output]
[/test]
[test]
[input]
C:\Trash\DesignPatterns\DesignPatterns.sln
[/input]
[output]
File name: DesignPatterns
File extension: sln
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Caesar Cipher
[code-task title="Caesar Cipher" taskId="Java-Fundamentals-2-Text-Processing-Caesar-Cipher" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **returnează o versiune criptată a aceluiași text**.

**Criptați textul deplasând fiecare caracter cu trei poziții înainte**.

**De exemplu** A ar fi înlocuit cu D, B ar deveni E și așa mai departe.

**Imprimați textul criptat**.

### Example
| **Input** | **Output** |
| --- | --- |
| Programming is cool! | Surjudpplqj#lv#frro$ | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Programming is cool!
[/input]
[output]
Surjudpplqj#lv#frro$
[/output]
[/test]
[test]
[input]
One year has 365 days.
[/input]
[output]
Rqh#\|hdu#kdv#698#gd\|v1
[/output]
[/test]
[test]
[input]
Where do random thoughts come from?
[/input]
[output]
Zkhuh#gr#udqgrp#wkrxjkwv#frph#iurpB
[/output]
[/test]
[test]
[input]
I think I will buy the red car, or I will lease the blue one.
[/input]
[output]
L#wklqn#L#zloo#ex\|#wkh#uhg#fdu/#ru#L#zloo#ohdvh#wkh#eoxh#rqh1
[/output]
[/test]
[test]
[input]
The stranger officiates the meal.
[/input]
[output]
Wkh#vwudqjhu#riilfldwhv#wkh#phdo1
[/output]
[/test]
[test]
[input]
There was no ice cream in the freezer, nor did they have money to go to the store.
[/input]
[output]
Wkhuh#zdv#qr#lfh#fuhdp#lq#wkh#iuhh}hu/#qru#glg#wkh\|#kdyh#prqh\|#wr#jr#wr#wkh#vwruh1
[/output]
[/test]
[test]
[input]
My Mum tries to be cool by saying that she likes all the same things that I do.
[/input]
[output]
P\|#Pxp#wulhv#wr#eh#frro#e\|#vd\|lqj#wkdw#vkh#olnhv#doo#wkh#vdph#wklqjv#wkdw#L#gr1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Multiply Big Number
[code-task title="Multiply Big Number" taskId="Java-Fundamentals-2-Text-Processing-Multiply-Big-Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Ți se oferă **două rânduri**-**primul poate fi un număr foarte mare** (de la 0 la 1050).

Cel de-al doilea **va fi o singură cifră** (de la 0 la 9).

Trebuie să afișați produsul acestor numere.

**Notă**: nu utilizați clasa BigInteger.

### Example
| **Input** | **Output** |
| --- | --- |
| 23 | 46 | 
| 2 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 923847238931983192462832102 | 3695388955727932769851328408 | 
| 4 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
23
2
[/input]
[output]
46
[/output]
[/test]
[test open]
[input]
923847238931983192462832102
4
[/input]
[output]
3695388955727932769851328408
[/output]
[/test]
[test]
[input]
9999
9
[/input]
[output]
89991
[/output]
[/test]
[test]
[input]
2398482374762387432193481894638
4
[/input]
[output]
9593929499049549728773927578552
[/output]
[/test]
[test]
[input]
2938413876134964736
7
[/input]
[output]
20568897132944753152
[/output]
[/test]
[test]
[input]
000002
5
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
999999999999999999999999999999999999999999
0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
230947329471398784192398431894
1
[/input]
[output]
230947329471398784192398431894
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Replace Repeating Chars
[code-task title="Replace Repeating Chars" taskId="Java-Fundamentals-2-Text-Processing-Replace-Repeating-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **citește un șir din consolă** și **înlocuiește orice secvență din aceleași litere cu o singură literă corespunzătoare**.

### Example
| **Input** | **Output** |
| --- | --- |
| aaaaabbbbbcdddeeeedssaa | abcdedsa |

### Example
| **Input** | **Output** |
| --- | --- |
| qqqwerqwecccwd | qwerqwecwd |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
aaaaabbbbbcdddeeeedssaa
[/input]
[output]
abcdedsa
[/output]
[/test]
[test open]
[input]
qqqwerqwecccwd
[/input]
[output]
qwerqwecwd
[/output]
[/test]
[test]
[input]
aaaaaaaa
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
bbbbbbbbb
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
aaaaabbbbbbbcccceeede
[/input]
[output]
abcede
[/output]
[/test]
[test]
[input]
kkddidkkgiiggbd
[/input]
[output]
kdidkgigbd
[/output]
[/test]
[test]
[input]
asdasdasd
[/input]
[output]
asdasdasd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: String Explosion
[code-task title="String Explosion" taskId="Java-Fundamentals-2-Text-Processing-String-Explosion" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
**Explosions are marked** with '\>'.

Immediately after the mark, there will be an integer, which signifies the **strength of the explosion**.

You should **remove x characters** (where x is the strength of the explosion), **starting after the punch character** ('\>').

If you find **another explosion mark** ('\>') **while you are deleting characters**, you should **add the strength to your previous explosion**.

When all characters are processed, **print the string without the deleted characters**. 

You **should not delete the explosion character** - '\>', but you **should delete the integers**, which represent the strength.

### Input
You will receive single line with the string.

### Output
Print what is left from the string after explosions.

## Descriere
**Exploziile sunt marcate** cu '\>'.

Imediat după marcare, va exista un număr întreg, care semnifică **puterea exploziei**.

Ar trebui să **eliminați x caractere** (unde x este punctul forte al exploziei), **începând după caracterul lovitura** ('\>').

Dacă găsiți **un alt semn de explozie** ('\>') **în timp ce ștergeți caractere**, ar trebui să **adăugați forța exploziei anterioare**.

Când toate caracterele sunt procesate, **tipăriți șirul fără caracterele șterse**.

**Nu ar trebui să ștergeți caracterul de explozie** - '\>', dar **ar trebui să ștergeți întregii**, care reprezintă puterea.

### Intrare
Veți primi o singură linie cu șirul.

### Ieșire
Imprimați ce a rămas din șir după explozii.

### Example
| **Input** | **Output** |
| --- | --- |
| abv\>1\>1\>2\>2asdasd | abv\>\>\>\>dasd |

### Comentarii
Prima explozie este la indicele 3 și are o putere de 1.

Ștergem doar cifra după caracterul exploziei.

Șirul va arăta astfel: abv \>\> 1\> 2\> 2asdasd

A doua explozie este cu puterea unu și șirul se transformă în asta: abv \>\>\> 2\> 2asdasd

A 3-a explozie are acum o putere de 2.

Ștergem cifra și găsim o altă explozie.

În acest moment șirul arată astfel: abv \>\>\>\> 2asdasd.

A 4-a explozie este cu puterea 2.

Mai avem 1 putere din explozia anterioară, adăugăm puterea exploziei actuale la ceea ce a rămas și asta se adaugă la o putere totală de 3.

Ștergem următoarele trei caractere și primim șirul abv \>\>\>\> dasd

Nu mai avem explozii și imprimăm rezultatul: abv\>\>\>\>dasd

[/task-description]
[code-io /]
[tests]
[test open]
[input]
abv>1>1>2>2asdasd
[/input]
[output]
abv>>>>dasd
[/output]
[/test]
[test]
[input]
pesho>2sis>1a>2akarate>4hexmaster
[/input]
[output]
pesho>is>a>karate>master
[/output]
[/test]
[test]
[input]
abv>1as>1 dfgdg>2ss>2Adasd
[/input]
[output]
abv>as> dfgdg>s>dasd
[/output]
[/test]
[test]
[input]
aaaa>2B>3ACe>1asdfghjkl
[/input]
[output]
aaaa>>e>asdfghjkl
[/output]
[/test]
[test]
[input]
aaaa>5B>9ACE>9ASDFGHJKL
[/input]
[output]
aaaa>>>
[/output]
[/test]
[test]
[input]
frtkvd>8CARDS>5ACE>2
[/input]
[output]
frtkvd>>>
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Letters Change Numbers
[code-task title="Letters Change Numbers" taskId="Java-Fundamentals-2-Text-Processing-Letters-Change-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Lui John îi place Matematica.

Dar îi place mult și alfabetul englezesc.

A inventat un **joc cu cifre și litere** din alfabetul englez.

Jocul a fost simplu.

Obțineți un șir **format dintr-un număr între două litere**.

În funcție de, dacă litera **se afla în fața numărului** sau **după ea, veți efectua diferite operații matematice** asupra numărului pentru a obține rezultatul.

**Mai întâi începeți cu litera înaintea numărului**.

- Dacă este **majusculă**, **împărțiți numărul la poziția literei** în alfabet

- Dacă este **cu litere mici**, **înmulțiți numărul cu poziția literei** în alfabet

Apoi **treceți la litera de după număr**.

- Dacă este **majusculă, îi scădeți poziția** numărului care rezultă

- Dacă este **cu litere mici, îi adăugați poziția** la numărul care rezultă

Dar jocul a devenit prea ușor pentru John si cu adevărat rapid.

El a decis să-l complice puțin **făcând același lucru, dar cu mai multe șiruri, urmărind doar suma totală** a tuturor rezultatelor.

Odată ce a început să rezolve acest lucru cu **mai multe șiruri și numere mai mari**, a devenit destul de greu să-l facă doar în mintea lui.

Deci, el vă cere să **scrieți un program care să calculeze suma tuturor numerelor** după ce au fost efectuate operațiunile de pe fiecare număr.


**De exemplu**, vi se oferă secvența "A12b s17G":

Avem două șiruri - "A12b" și "s17G". 

Facem **operațiunile pe fiecare și le însumăm**. 

**Începem cu litera dinaintea numărului** din primul șir.

A este **majusculă și poziția sa în alfabet este 1**. 

Deci **împărțim numărul 12 cu poziția 1** (12/1 = 12).

Apoi **ne mutăm la litera de după număr**. b este **cu litere mici** și poziția sa **este 2**.

Deci **adăugăm 2 la numărul** rezultat (12 + 2 = 14).

În mod similar pentru al doilea șir, s este **cu litere mici** și **poziția sa este de 19**, așa că **îl înmulțim cu numărul** (17 * 19 = 323).

Apoi avem **majuscula G cu poziția 7**, deci **o scădem din numărul rezultat** (323 - 7 = 316).

În cele din urmă, **sumăm cele 2 rezultate și obținem** 14 + 316 = 330.

### Intrare
Intrarea provine de pe consolă ca o singură linie, ținând secvența șirurilor.

Șirurile sunt separate de unul sau mai multe spații albe.

Datele de intrare vor fi întotdeauna valabile și în formatul descris. 

Nu este nevoie să o verificați în mod explicit.

### Ieșire
Imprimați pe consolă un singur număr: suma totală a tuturor numerelor procesate rotunjite la două cifre după separatorul zecimal.

### Example
| **Input** | **Output** |
| --- | --- |
| A12b s17G | 330.00 |

### Comments
12\/1=12, 12+2=14, 17\*19=323, 323–7=316, 14+316=330

### Example
| **Input** | **Output** |
| --- | --- |
| P34562Z q2576f   H456z | 46015.13 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
A12b s17G
End
[/input]
[output]
330.00
[/output]
[/test]
[test open]
[input]
P34562Z q2576f   H456z
End
[/input]
[output]
46015.13
[/output]
[/test]
[test]
[input]
a1A
End
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
A43873477A    b647742b  C57C h1337Q  
End
[/input]
[output]
45179657.00
[/output]
[/test]
[test]
[input]
Z1Z k6573H    	 F12J
End
[/input]
[output]
72261.04
[/output]
[/test]
[test]
[input]
A129561542z F220197965z r4756z T23692z A79367z G7777z l1000z A2531z A21z I393993777z
End
[/input]
[output]
210220371.77
[/output]
[/test]
[test]
[input]
A2147483646a
End
[/input]
[output]
2147483647.00
[/output]
[/test]
[test]
[input]
z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z
End
[/input]
[output]
558345748480.00
[/output]
[/test]
[test]
[input]
a1Z
End
[/input]
[output]
-25.00
[/output]
[/test]
[test]
[input]
s536K Q532f b53u b23822a x35823Z F3258x a58325814X
End
[/input]
[output]
59244065.29
[/output]
[/test]
[test]
[input]
S134L U4A I636N O1337S T86314t
End
[/input]
[output]
4456.74
[/output]
[/test]
[test]
[input]
A1w e2S 	o3M  e4T 	e5S  t6S
End
[/input]
[output]
154.00
[/output]
[/test]
[test]
[input]
j1j   f1V 		P1E   g1x  	 Y1T  c1M F1v h1c		 b1J d1x
End
[/input]
[output]
53.27
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

