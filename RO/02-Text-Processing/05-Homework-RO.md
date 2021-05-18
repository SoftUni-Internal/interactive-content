# Teme Pentru Acasă


[slide hideTitle]
# Problemă: Valid Usernames
[code-task title="Valid Usernames" taskId="Java-Fundamentals-2-Text-Processing-Valid-Usernames" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește numele utilizatorilor pe o singură linie (însoțite de ", ") și **tipărește toate numele de utilizatori valizi**.

Un **nume de utilizator valid**:
- Are **lungimea între 3 și 16 caractere**
- Conține **numai litere, cifre, cratime și sublinieri**
- Nu are **simboluri redundante** înainte, după sau între ele.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| Jeff, john45, ab, cd, peter-white, @smith | Jeff | 
| | john45 |
| | peter-white |

[hints]
[hint]
Creați o metodă de validare:

```java
private static boolean validate(String username)
```
[/hint] 
[hint]
Asigurați-vă că verificați lungimea mai întâi:

```java
if (username.length() < 3 || username.length() > 16) {
  return false;
}
```
[/hint] 
[hint]
Iterați prin caractere cu o buclă for:

```java
for (int i = 0; i < username.length(); i++)
```
[/hint] 
[hint]
Utilizați metoda încorporată `isLetterOrDigit` pentru a valida fiecare caracter:

```java
char symbol = username.charAt(i);
 
if (!Character.isLetterOrDigit(symbol) &&
  symbol != '-' && symbol != '_') {
    return false;
}
```
[/hint]
[/hints] 

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
# Problemă: Character Multiplier
[code-task title="Character Multiplier" taskId="Java-Fundamentals-2-Text-Processing-Character-Multiplier" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați o **metodă care ia două șiruri** ca argumente și **returnează suma codurilor caracterelor lor înmulțite** (înmulțiți str1 \[0\] cu str2 \[0\] și adăugați suma totală)

Apoi **continuați cu următoarele două caractere**.

**Dacă unul dintre șiruri este mai lung decât celălalt**, **adăugați codurile de caractere rămase** la suma totală fără multiplicare.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| a aaaa | 9700 | 
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
# Problemă: Extract File
[code-task title="Extract File" taskId="Java-Fundamentals-2-Text-Processing-Extract-Files" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **citește calea către un fișier** și **scade numele fișierului și extensia acestuia**.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| C:\Internal\training-internal\Template.pptx | File name: Template | 
| | File extension: pptx |

### Exemplu
|**Intrare**|**Ieșire** |
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
# Problemă: Caesar Cipher
[code-task title="Caesar Cipher" taskId="Java-Fundamentals-2-Text-Processing-Caesar-Cipher" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
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

### Exemplu
|**Intrare**|**Ieșire** |
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
# Problemă: Multiply Big Number
[code-task title="Multiply Big Number" taskId="Java-Fundamentals-2-Text-Processing-Multiply-Big-Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Se dau **două rânduri**- **primul poate fi un număr foarte mare**.

Cel de-al doilea **va fi o singură cifră** (de la 0 la 9).

Trebuie să afișați produsul acestor numere.

**Notă**: Nu utilizați clasa BigInteger.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 23 | 46 | 
| 2 | |

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 214748364711 | 858993458844 | 
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
214748364711
4
[/input]
[output]
858993458844
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
# Problemă: Replace Repeating Chars
[code-task title="Replace Repeating Chars" taskId="Java-Fundamentals-2-Text-Processing-Replace-Repeating-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **citește un șir din consolă** și **înlocuiește orice secvență formată din aceleași litere cu o singură literă corespunzătoare**.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| aaaaabbbbbcdddeeeedssaa | abcdedsa |
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
# Problemă: String Explosion
[code-task title="String Explosion" taskId="Java-Fundamentals-2-Text-Processing-String-Explosion" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
**Exploziile sunt marcate** cu "\>".

Imediat după marcare, va exista un număr întreg, care semnifică **puterea exploziei**.

Trebuie să **eliminați x caractere** (unde x este forța exploziei), **începând după caracterul care marchează explozia** ("\>").

Dacă găsiți **un alt semn de explozie** ("\>") **în timp ce ștergeți caractere**, trebuie să **adăugați forța exploziei anterioare**.

Când toate caracterele sunt procesate, **tipăriți șirul fără caracterele șterse**.

**Nu trebuie să ștergeți caracterul de explozie** - "\>", dar **trebuie să ștergeți numerele întregi**, care reprezintă puterea.

### Intrare
Veți primi o singură linie cu șirul.

### Ieșire
Imprimați ce a rămas din șir după explozii.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| abv\>1\>1\>2\>2asdasd | abv\>\>\>\>dasd |

Puteți vedea **rezultatul fiecărei explozii** la această secțiune de sugestii.

[hints]
[hint]
Prima explozie este la indicele **3** și are o putere de **1**.

**Ștergem** doar cifra după caracterul care marchează explozia ("\>").

Șirul va arăta astfel: `abv>>1>2>2asdasd`
[/hint] 
[hint]
A doua explozie este de putere **unu** și șirul se transformă în: `abv>>>2>2asdasd`
[/hint] 
[hint]
A 3-a explozie are acum o putere de **2**.

**Ștergem** cifra și găsim o altă explozie.

Acesta este rezultatul: `abv>>>>2asdasd`
[/hint] 
[hint]
A 4-a explozie este cu puterea **2**.

Mai avem **1** putere rămasă din explozia anterioară, **adăugăm** puterea exploziei actuale la ceea ce a rămas și asta însumează o putere **totală** de **3**.

**Ștergem** următoarele trei caractere.

În acest moment șirul arată astfel: `abv>>>>dasd`
[/hint] 
[hint]
Nu mai avem explozii și **imprimăm** rezultatul: `abv>>>>dasd`
[/hint]
[/hints] 

Aici veți găsi o explicație a procesului de **rezolvare**.

[hints]
[hint]
Creați un result `StringBuilder` și inițializați **power**:

```java
Scanner sc = new Scanner(System.in);

StringBuilder result = 
  new StringBuilder(sc.nextLine());
int power = 0;
```
[/hint] 
[hint]
**Măriți** **puterea** cu valorile numerice ale caracterelor precedate de `>`:

```java
for (int i = 0; i < result.length(); i++) {
  if (result.charAt(i) == '>') {
    power += Character
      .getNumericValue(result.charAt(i + 1));
  } else if (power > 0 && result.charAt(i) != '>') {
    result.deleteCharAt(i);
    power--;
    i--;
  }
}
```

**Eliminați** caracterele necesare. Nu trebuie să eliminați `>`.

[/hint] 
[hint]
**Tipăriți** șirul rămas pe consolă:

```java
System.out.println(result);
```
[/hint] 
[/hints] 

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
# Problemă: Letters Change Numbers
[code-task title="Letters Change Numbers" taskId="Java-Fundamentals-2-Text-Processing-Letters-Change-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Lui John îi place matematica.

Dar îi place mult și alfabetul limbii engleze.

A inventat un **joc cu cifre și litere** din alfabetul limbii engleze.

Jocul a fost simplu.

Obțineți un șir **format dintr-un număr între două litere**.

În funcție de poziția literei, adică dacă litera **se află în fața numărului** sau **după el, veți efectua diferite operații matematice** asupra numărului pentru a obține rezultatul.

**Mai întâi începeți cu litera dinaintea numărului**.

- Dacă este **majusculă**, **împărțiți numărul la poziția literei** în alfabet

- Dacă este **cu litere mici**, **înmulțiți numărul cu poziția literei** în alfabet

Apoi **treceți la litera de după număr**.

- Dacă este **majusculă, îi scădeți poziția** din numărul care rezultă

- Dacă este **cu litere mici, îi adăugați poziția** la numărul care rezultă

Dar jocul a devenit prea ușor pentru John foarte repede.

El a decis să-l complice puțin **făcând același lucru, dar cu mai multe șiruri, urmărind doar suma totală** a tuturor rezultatelor.

Odată ce a început să rezolve acest lucru cu **mai multe șiruri și numere mai mari**, a devenit destul de greu să-l facă doar în mintea lui.

Deci, el vă cere să **scrieți un program care să calculeze suma tuturor numerelor** după ce au fost efectuate operațiile asupra fiecărui număr.


**De exemplu**, vi se oferă secvența "A12b s17G":

Avem două șiruri - "A12b" și "s17G". 

Facem **operațiile pe fiecare și le însumăm**. **Începem cu litera dinaintea numărului** din primul șir.

A este **majusculă și poziția sa în alfabet este 1**. Deci **împărțim numărul 12 la poziția 1** (12/1 = 12).

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
Imprimați pe consolă un singur număr: suma totală a tuturor numerelor procesate rotunjită la două cifre după separatorul zecimal.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| A12b s17G | 330.00 |


[hints]
[hint]
Utilizați o **expresie regulată** pentru a împărți intrarea:

```java
String[] input = scanner.nextLine().split("\\s+");
```
[/hint] 
[hint]
Definiți o **metodă** separată pentru a obține **poziția** alfabetică a unui simbol:

```java
private static int getPosition(char c) {
  char targetChar = Character.toLowerCase(c);
  char initialChar = 'a';
  int position = targetChar - initialChar + 1;

  return (position);
}
```
[/hint] 
[hint]
Utilizați `getPosition` după cum urmează:

```java
int firstLetterPosition = getPosition(firstLetter);
int secondLetterPosition = getPosition(secondLetter);
```

**Adăugați** sau **scădeți** numerele rezultate din **suma** totală.
[/hint] 
[/hints] 

### Exemplu
|**Intrare**|**Ieșire** |
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

