[slide hideTitle]
# Expressii
**Expresiile** sunt secvențe de operatori, literali și variabile care sunt evaluate la o valoare.
   * Constă din cel puțin din un **operand**
   * Poate avea unu sau mai mulți **operatori**
```java
int y = x + 5;
```
```java
String name = "John Doe";
```
In cele mai multe contexte în care sunt utilizate expresii, de exemplu, în declarații, este de așteptat că expresia să evalueze la o anumită valoare.

* Dacă `x` și `y` sunt numere intregi, expresia `x + y` se evaluează la o valoare numerică. Fiecare valoare are un tip asociat.
* De exemplu, dacă x și y sunt variabile de tip **int**, valoarea expresiei `x + y` este, de asemenea, tastată ca **int**. 
* Dacă valoarea este alocată unei variabile de alt tip sau dacă `x` și` y` sunt tipuri diferite, acestea trebuie transformate într-un anumit tip.

# Expresii numerice
În programare, putem calcula expresii numerice, de exemplu:
```java
int r = (150-20) / 2 + 5;
```
Regula standard se aplica pentru **prioritățile** operațiunilor aritmetice: înmulțirea și împărțirea se face întotdeauna înainte de adunare și scădere. 

In cazul unei expresii între **paranteze**, se calculează **prima**, la fel ca în matematică.
[/slide]