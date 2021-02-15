[slide hideTitle]
# Condiții mai complexe
Să aruncăm o privire la modul în care putem crea mai multe **condiții logice complexe** în programare.

Putem folosi:
* Operatorul logic **"ȘI"** (`&&`)
* Operatorul logic **"SAU"** (`||`)
* Operatorul  logic **negare** (`!`) 
* **Paranteze** (`()`).

# Operatorii logici "ȘI", "SAU" și "NU"
Acesta este un scurt exemplu care demonstrează puterea logicii **"ȘI"**, logică **"SAU"** și logică **"NU"**:
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

Vom explica logică **ȘI** (`&&`), logica **SAU** (`||`) și logica **NU** (`!`) În următoarele secțiuni, de-a lungul cu exemple și exerciții.

[/slide]

[slide hideTitle]
# Logica ȘI
După cum am văzut, în unele sarcini trebuie să facem **multe verificări simultan**.

Dar ce se întâmplă atunci când pentru a executa un anumit cod **mai trebuie** executate condiții și **nu vrem** să facem o **negare** (`else`) pentru fiecare dintre ele?

Opțiunea cu blocuri `if` **imbricate** este validă, dar codul ar părea foarte neordonat și sigur - **greu de citit și întreținut**.

Logica **"ȘI"** (operator `&&`) înseamnă că trebuie îndeplinite câteva condiții **simultan**.

Se aplică următorul tabel al veridicității:

| Operand1 | Operand2 | ȘI |
|---|---|---|---|
| adevărat | adevărat | adevărat |
| adevărat | fals | fals |
| fals | adevărat | fals |
| fals | fals | fals |

# Cum funcționează operatorul `&&`?
Operatorul `&&` acceptă **câteva instrucțiuni booleene** (condiționate), care au o valoare `adevărată` sau `falsă` și returnează o instrucțiune bool ca rezultat.

Folosindu-l în loc de câteva blocuri imbricate `if`, faceți codul **mai lizibil**, **ordonat** și **ușor** de întreținut.

Dar cum funcționează **când punem** câteva condiții una după alta?

După cum am văzut mai sus, logica **"ȘI"** se schimba in `adevarat`, **numai** atunci când acceptă ca **instrucțiuni de argumente** cu valoarea `adevarat`.

Respectiv, atunci când avem o **secvență** de argumente, operatorul logic **"ȘI"**  **verifică** fie până când unul dintre argumente s-a **îndeplinit**, fie până când **îndeplinește** un argument cu valoare `false`.

# Exemplu
```java live
boolean a = true;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a && b && c && d;
System.out.println(result);
```

Programul va rula în modul **următor**:
- **Începe** formularul de verificare `a`, **îl citește** și acceptă că are o valoare `adevărată`, după care **verifică** `b`
- După ce **a acceptat** că `a` și `b` se schimba in `adevărat`,**verifică următorul** argument
- Se ajunge la `c` și vede că variabila are o valoare `falsă`
- După ce programul acceptă că argumentul `c` are o valoare `falsă`, acesta calculează expresia **înainte de** `c`, **independent** de ce este valoarea lui `d`
- De aceea evaluarea lui `d` este **sarită**și întreaga expresie este calculată ca `falsă`

# Exemplu: Punct într-un dreptunghi
Verifică dacă **`punctul {x, y}`** este plasat **în interiorul dreptunghiului {x1, y1} - {x2, y2}**.

[image assetsSrc = "03.Point-in-rectangle-01.png" /]

Datele de intrare sunt citite de pe consolă și constă din 6 linii:
- numerele zecimale `x1`,` y1`, `x2`,` y2`, `x` și` y` (deoarece se garantează că `x1 < x2` și` y1 < y2`).

## Eșantion de intrare și ieșire
| Intrare |Ieșire|
|-----|------|
|2|Inside|
|-3||
|12||
|3||
|8||
|-1||

## Soluție
Un punct este intern pentru un poligon dat, dacă următoarele patru condiții sunt aplicate în același timp:
- Punctul este plasat în dreapta din partea stângă a dreptunghiului
- Punctul este plasat în stânga din partea dreaptă a dreptunghiului
- Punctul este plasat în jos din partea superioară a dreptunghiului
- Punctul este plasat în sus din partea de jos a dreptunghiului

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
# Problem with Solution: Bonus Points
[code-task title="Bonus Points" taskId="java-basics-logical-operators-bonus-points" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      // write code here
  }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care aplică bonus punctelor date
   *Dacă punctele sunt între **0** și **3**, se adaugă **5**
   *Dacă punctele sunt între **4** și **6**, se adaugă **15**
   *Dacă punctele sunt între **7** și **9**, se adaugă **20**
# Exemplu

| Intrare | Ieșire |
| --- | --- |
| 4 | 19 |

[/task-description]
[tests]
[test]
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
# Operatorul logic SAU 
Logica **OR** (operator `||`) înseamnă că **cel puțin una** dintre câteva condiții este îndeplinită.

Similar cu operatorul `&&`,operatorul logic **OR** acceptă câteva argumente de tip **boolean** (condițional) și se schimba in `true` sau` false`.

Putem ghici cu ușurință că **obținem** o valoare `true` de fiecare dată când cel puțin unul dintre argumente are o valoare `adevărat`.

| Operand1 | Operand2 | SAU|
|---|---|---|---|
| adevărat | adevărat | adevărat|
| adevărat | fals | adevărat|
| fals | adevărat | adevărat|
| fals | fals | fals|

La școală, profesorul spune: "John sau Peter ar trebui să curățe tabla". Pentru a îndeplini această condiție (pentru a curăța tabla), este posibil fie ca John s-o curățe, fie doar ca Petru s-o curățe, sau ambii s-o facă.

# Cum funcționează operatorul '||'?
Am învățat deja ce reprezintă logica **SAU**. Dar cum se realizează de fapt?

La fel ca și  în cazul operatorului logic **"ȘI"** , programul **verifică** de la stânga la dreapta **argumentele** care sunt date.

Pentru a obține `adevărat` din expresie, este necesar ca **doar un** argument să aibă o valoare `adevărată`.

Respectiv, verificarea **continuă** până când se îndeplinește un **argument** cu **o astfel de** valoare sau până când argumentele **se termină**.

Iată un **exemplu** al operatorului `||` în acțiune:

```java live
boolean a = false;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a || b || c || d;
System.out.println(result);
```
Programele **verifică** `a`, acceptă că are o valoare 'false` și continuă.

Ajungând la 'b', înțelege că are o valoare `adevărată` și întreaga **expresie** este calculată ca `adevărată`, fără a trebui să bifați `c` sau `d`, deoarece valorile lor **nu ar fi schimbat** rezultatul expresiei.
[/slide]

[slide hideTitle]
# Problem: Food or Drink
[code-task title="Food or Drink" taskId="java-basics-logical-opators-food-ot-drink" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:
   * Citește o singură linie și tipărește "***drink***", "***food***" sau "***unknown***"
   * Alimente: curry, noodles, sushi, spaghetti 
   * Băuturi: tea, water, coffee
   * Orice altceva este unknown
# Exemplu
## Intrare
- curry
## Ieșire
- food
## Intrare
- flower
## Ieșire
- unknown

[/task-description]
[tests]
[test]
[input]
curry
[/input]
[output]
food
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
# Operatorul logic NU 
Negarea logică (operator **!**) înseamnă că o condiție dată nu este **îndeplinită**.

| a | ! a |
| --- | --- |
| adevărat | fals |

Operatorul `!` Acceptă ca **argument** o variabilă bool și **returnează** valoarea acesteia.

# Exemplu: număr nevalid
Un număr **dat este valid** dacă este în intervalul **\[100 ... 200 \]** sau este **0**. Faceți o validare pentru un număr **nevalid**.

De exemplu, `75` și `220` sunt **nevalide**, dar `150` este**valid**.

```java live
int num = 75;

boolean inRange = (num >= 100 && num <= 200) || num == 0;
if (!inRange) {
    System.out.println("invalid");
}
```
[/slide]

[slide]
# Operatorul de paranteză
La fel ca restul operatorilor din programare, operatorii `&&` și `||` au prioritate, ca în cazul `&&` are prioritate mai mare decât `||`.

Operatorul `()` servește pentru **schimbarea priorității operatorilor** și este calculat mai întâi, la fel ca în matematică.

Utilizarea parantezelor oferă, de asemenea, o mai bună lizibilitate a codului și este considerată o bună practică.

Exemplu de verificare dacă o variabilă aparține anumitor intervale:
```java 
if (x < 0) || ((x >= 5) && (x <= 10)) || (x > 20) {
    // Commands
}
```
[/slide]