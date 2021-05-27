[slide hideTitle]
# Condiții mai Complexe

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-16-18-logical-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să aruncăm o privire la modul în care putem crea **condiții logice mai complexe** în programare.

Putem folosi următorii operatori logici:
* **"ȘI"** (`&&`)
* **"SAU"** (`||`)
* **negare** (`!`) 
* **Paranteze** (`()`).

## Operatorii logici "ȘI", "SAU" și "NU"
Acesta este un scurt exemplu care demonstrează puterea logicii **"ȘI"**, logicii **"SAU"** și logicii **"NU"**:
```java
Scanner scanner = new Scanner(System.in);
String animal = scanner.nextLine();
int speed = Integer.parseInt(scanner.nextLine());

if ((animal == "horse" || animal == "donkey") && (speed > 40)) {
    System.out.println("Run fast");
} else if ((animal == "shark" || animal == "dolphin") && (speed > 45)) {
    System.out.println("Swim fast");
} else if (!(speed > 30 || animal == "turtle")) {
    System.out.println("Move slow");
}
```

Vom explica logica **ȘI** (`&&`), logica **SAU** (`||`) și logica **NU** (`!`) în următoarele secțiuni, împreună cu exemple și exerciții.

[/slide]

[slide hideTitle]
# Operatorul Logic "ȘI"

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-19-logical-and-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După cum am văzut, în unele sarcini trebuie să facem **mai multe verificări simultan**.

Operatorul logic **"ȘI"** (`&&`) ne ajută să verificăm mai multe condiții **simultan**.

Putem folosi operatoul logic **"ȘI"** pentru a simplifica codul nostru și pentru a evita construcții inutile precum prea multe instrucțiuni condiționale imbricate.

Următorul tabel ne ajută să vizualizăm posibilele combinații:

| **Operand Unu**| **Operand Doi** | **ȘI** |
|---|---|---|
| adevărat | adevărat | adevărat |
| adevărat | fals | fals |
| fals | adevărat | fals |
| fals | fals | fals |

## Cum funcționează operatorul `&&`?

Operatorul `&&` acceptă **două instrucțiuni booleene** (condiționale) și returnează o valoare booleană ca rezultat.

Utilizarea acestuia în loc de câteva blocuri imbricate `if` face codul **mai lizibil**, **ordonat** și **ușor** de întreținut.

După cum am văzut mai sus, logica **"ȘI"** returnează `true` **numai** atunci când ambii operanzi au valoarea `true`.

Respectiv, atunci când avem o **secvență** de argumente, operatorul logic **"ȘI"** returnează `false` ca rezultat dacă una dintre variabilele booleene este `false` și `true` dacă toate valorile au valoarea `true`.

## Exemplu
```java live
boolean a = true;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a && b && c && d;
System.out.println(result);
```

Programul va rula în modul **următor**:
- **Începe** verificarea cu `a`, **îl citește** și acceptă că are valoarea `true`, după care **verifică** `b`
- După ce **a acceptat** că atât `a`, cât și `b` returnează `true`, **verifică următorul** argument
- Programul citește valoarea lui `c` și vede că variabila are valoarea `false`
- După ce programul acceptă că argumentul `c` are valoarea `false`, iese din expresie și returnează valoarea `false`
- Evaluarea lui `d` este **omisă**

## Exemplu: Point in a Rectangle
Scrieți un program care verifică dacă un punct cu coordonatele `x` și `y` este plasat **în interiorul unui dreptunghi** `{x1, y1}` - `{x2, y2}`.

[image assetsSrc="03.Point-in-rectangle-01.png" /]

Datele de intrare sunt citite de pe consolă și constă din 6 linii:

- Numerele `x1`, `y1`, `x2`, `y2`, `x` și `y` (se garantează că `x1 < x2` și `y1 < y2`)

## Eșantion de Intrare și Ieșire
| **Intrare** |**Ieșire**|
|---|---|
|2|Inside|
|-3||
|12||
|3||
|8||
|-1||

## Soluție
Un punct este intern pentru un poligon dat dacă următoarele patru condiții sunt aplicate în același timp:
- Punctul este plasat la dreapta față de latura stângă a dreptunghiului
- Punctul este plasat la stânga față de latura dreaptă a dreptunghiului
- Punctul este plasat inferior față de latura superioară a dreptunghiului
- Punctul este plasat superior față de latura inferioară a dreptunghiului

```java live
double x1 = 2;
double y1 = -3;
double x2 = 12;
double y2 = 3;

double x = 8;
double y = -1;

if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    System.out.println("Inside");
} else {
    System.out.println("Outside");
}
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Bonus Points

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-19-logical-and-problem-and-solution-bonus-points-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Bonus Points" taskId="java-basics-logical-operators-bonus-points" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      // Scrieți codul dvs. aici
  }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care primește un număr de puncte ca intrare și adaugă un număr de puncte bonus, conform următoarelor reguli:
* Dacă punctele date sunt între **0** și **3**, se adaugă **5**
* Dacă punctele date sunt între **4** și **6**, se adaugă **15**
* Dacă punctele date sunt între **7** și **9**, se adaugă **20**

## Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
| 4 | 19 |

[/task-description]
[tests]
[test open]
[input]
4
[/input]
[output]
19
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]



[slide hideTitle]
# Operatorul Logic "SAU"

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-advanced-21-logical-or-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorul ogic **SAU** (`||`) înseamnă că **cel puțin un operand** dintr-un set de operanzi are valoarea `true`.

Similar cu operatorul `&&`, operatorul logic **SAU** acceptă câteva argumente de tip **boolean** și returnează `true` sau `false`.

Vom **obține** o valoare `true` de fiecare dată când cel puțin unul dintre argumente are o valoare `true`.

| **Operand Unu**| **Operand Doi** | **ȘI** |
|---|---|---|
| adevărat | adevărat | adevărat|
| adevărat | fals | adevărat|
| fals | adevărat | adevărat|
| fals | fals | fals|

## Exemplu:

La școală, profesorul spune: "John sau Peter trebuie să curețe tabla". Pentru a îndeplini această condiție, este posibil fie ca John să o curețe, fie doar ca Petru să o curețe, sau ambii să o facă.

## Cum funcționează operatorul `||`?
Am învățat deja ce reprezintă logica **SAU**. Acum trebuie să explicăm cum funcționează.

La fel ca în cazul operatorului logic **"ȘI"** , programul **verifică** de la stânga la dreapta **argumentele** care sunt date.

Pentru a obține `true` din expresie, este necesar ca **doar un** argument să aibă valoarea `true`.

Respectiv, verificarea **continuă** până când se întâlnește un **argument** cu **o astfel de** valoare sau până când argumentele **se termină**.

Iată un **exemplu** al operatorului `||` în acțiune:

```java live
boolean a = false;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a || b || c || d;
System.out.println(result);
```
Programul **verifică** `a`, acceptă că are valoarea `false` și continuă.

Ajunge la `b`, care are valoarea `true`, și întreaga **expresie** este considerată ca fiind `true`, fără a trebui să se verifice `c` sau `d`, deoarece valorile lor **nu ar fi schimbat** rezultatul expresiei.
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Food or Drink

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-21-logical-or-problem-and-solution-food-or-drink-solution-only-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Food or Drink" taskId="java-basics-logical-opators-food-ot-drink" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care:
* Citește o singură linie și tipărește "**drink**", "**food**" sau "**unknown**" în funcție de cuvântul introdus
* Food: curry, noodles, sushi, spaghetti 
* Drink: tea, water, coffee
* Unknown: orice altă intrare

## Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
| curry | food |
| flower | unknown |

[/task-description]
[tests]
[test open]
[input]
curry
[/input]
[output]
food
[/output]
[/test]
[test open]
[input]
flower
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
tea
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
something
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]





[slide hideTitle]
# Operatorul Logic "Negare"

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-23-logical-not-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorul logic de **negare** (**!**) inversează semnificația operandului său.

| **a** | **!a** |
| --- | --- |
| adevărat | fals |
| fals | adevărat |

Operatorul `!` acceptă ca **argument** o variabilă booleană și **returnează** valoarea inversată a acesteia.

## Exemplu: Invalid Number
Un număr **dat este valid** dacă se află în intervalul **\[100 ... 200 \]** sau este **0**. Faceți o validare pentru un număr **non-valid**.

De exemplu, `75` și `220` sunt **non-valide**, dar `150` este **valid**.

```java live
int num = 75;

boolean inRange = (num >= 100 && num <= 200) || num == 0;
if (!inRange) {
    System.out.println("invalid");
}
```
[/slide]

[slide hideTitle]
# Operatorul Paranteză

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-23-logical-not-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unii operatori au o prioritate mai mare decât alții. De exemplu, operatorul `&&` are prioritate mai mare decât `||`.

Operatorul `()` servește pentru **schimbarea priorității de executare**, la fel ca în matematică.

Utilizarea parantezelor oferă, de asemenea, o mai bună lizibilitate a codului și este considerată o bună practică.

Exemplu de verificare dacă o variabilă aparține anumitor intervale, folosind paranteze:
```java 
if (x < 0) || ((x >= 5) && (x <= 10)) || (x > 20) {
    // Commands
}
```
[/slide]
