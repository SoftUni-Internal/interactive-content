[slide hideTitle]

# Conținutul Lecției

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-1-2-introduction-and-table-of-contents-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție veți învăța:

**1. Variabile**

- Cum să declarați, citiți sau să modificați o variabilă

**2. Tipurile de date**

- Cum să procesați numere întregi, numere reale sau text

**3. Instrucțiuni (comenzi)**

**4. Citirea datelor de intrarea de la utilizator și formatarea ieșirii**

- Cum să citiți și să formatați intrarea de la utilizator

**5. Operatori simpli**

- Adunare: **+**
- Scădere: **-**
- Înmulțire: **\***
- Împărțire: **/**

**6. Expresii** 

- Ce reprezintă expresiile

**7. Exerciții practice de programare**

[/slide]

[slide hideTitle]

# Variabile

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-3-7-variables-and-demo-NEW-RO-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În programare, fiecare **variabilă** stochează o anumită valoare de un anumit tip. 

De exemplu, tipurile de date pot fi: număr, literă, text (șir), dată, culoare, imagine, listă și altele. 

Mai jos aveţi câteva exemple de tipuri de date:
* Integer - pentru stocarea numerelor întregi : 1, 2, 3, 4, -5, 20, …
* Float - pentru stocarea numerelor zecimale: 0.5, 3.14, -1.5, …
* Character - pentru stocarea literelor și a altor caractere: 'a', 'b', 'c', '@', 'X', …
* String - pentru stocarea textului: "Hello", "Hi", "How are you?", …
* Variabile pentru stocarea zilelor săptămânii (DayOfWeek): Monday, Tuesday, …, Sunday
* Data și ora: 14-June-1980 6:30:00, 25-Dec-2017 23:17:22

**Variabilele** pot fi vizualizate ca niște containere pentru date sau zone în memorie, iar datele pe care le stochează pot fi citite și modificate în orice moment.

**Variabilele** au următoarele roluri:
   * **Stocarea** datelor
   * **Preluarea** datelor stocate
   * **Modificarea** datelor stocate
  
**Variabilele** se caracterizează prin:
   * Nume (identificator)
   * Tip (al informațiilor păstrate)
   * Valoare (informații stocate)

Putem declara o variabilă și să îi atribuim o valoare simultan:
```java
String name = "Bob";
boolean employed = true;
int age = 35;
```
Dacă vă imaginați variabilele ca pe niște cutii care conțin informații, ar arăta așa:
[image assetsSrc="expressions-and-statements-boxes.png" /]

Variabilele pot fi stocate în:
   * Memoria operațională - în **stiva** de execuție
   * Memoria dinamică - în **heap**

[/slide]
