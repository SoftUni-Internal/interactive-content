[slide hideTitle]
# Expresii

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-28-29-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Expresiile** sunt secvențe de operatori, literali și variabile care sunt evaluate la o valoare.

* Constau din cel puțin un **operand**

* Pot avea unul sau mai mulți **operatori**

```java
int y = x + 5;
```

```java
String name = "John Doe";
```

În cele mai multe contexte în care sunt utilizate expresii, de exemplu în instrucțiuni, este de așteptat că expresia să evalueze la o anumită valoare.

* Dacă `x` și `y` sunt numere intregi, expresia `x + y` se evaluează la o valoare numerică. Fiecare valoare are un tip asociat
  * de exemplu, dacă x și y sunt variabile de tip **int**, valoarea expresiei `x + y` este de asemenea **int**

* Dacă valoarea este alocată unei variabile de alt tip sau dacă `x` și `y` sunt tipuri diferite, acestea trebuie transformate în același tip

## Expresii Numerice

În programare, putem calcula expresii numerice, de exemplu:

```java
int r = (150-20) / 2 + 5;
```

Regulile standard din matematică se aplică pentru **prioritatea** operațiilor aritmetice: înmulțirea și împărțirea se fac întotdeauna înainte de adunare și scădere. 

În cazul unei expresii între **paranteze**, se calculează **prima**, la fel ca în matematică.
[/slide]
