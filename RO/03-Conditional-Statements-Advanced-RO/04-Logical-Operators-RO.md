// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Logical-Operators"

# Operatori Logici

[slide hideTitle]
# Condiții mai Complexe
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-19-20-21-Logical Operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să aruncăm o privire la modul în care putem crea mai multe**condiții logice complexe**în programare.
Putem folosi:
* Operatorul logic **"ȘI"** (`&&`)
* Operatorul logic **"SAU"** (`||`)
* Operatorul **negare** (`!`) 
* **Paranteze** (`()`).

## Operatorii logici "ȘI","SAU" și "NU"
Acesta este un scurt exemplu care demonstrează puterea logicii **"ȘI"**, logicii  **"SAU"** și logicii  **"NU"**:

```js live
let input = ['shark', '50'];
let animal = input[0];
let speed =  Number(input[1]);

if ((animal == 'horse' || animal == 'donkey') && (speed > 40)) {
    console.log("Run fast");
} else if ((animal == 'shark' || animal == 'dolphin') && (speed > 45)) {
    console.log('Swim fast');
} else if (!(speed > 30 || animal == 'turtle')) {
    console.log('Move slow');
}
```
Vom explica operatorii logici **"ȘI"** (`&&`), **"SAU"** (`||`) și **"NU"** (`!`) în următoarele secțiuni, împreună cu exemple și exerciții.
[/slide]

[slide hideTitle]
# Operatorul Logic "ȘI" 
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-22-Logical-and-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După cum am văzut,în unele probleme trebuie să facem **multe verificări simultan**.

Ce se întâmplă când trebuie îndeplinite toate condițiile simultan și nu vrem să facem negare (else) pentru fiecare dintre ele?
Opțiunea cu `if` **imbricate** este validă, dar codul ar părea foarte neordonat și **greu de citit și întreținut**.

Logica **"ȘI"** (operator `&&`) înseamnă că trebuie îndeplinite simultan câteva condiții.

Se aplică următorul tabel al veridicității:

 | **Operandul unu** | **Operandul doi** | **ȘI**   |
| :---:       |    :----:   |   :---:   |
| adevărat | adevărat | adevărat |
| adevărat | false | false |
| false | adevărat | false |
| false | false | false |

## Cum funcționează operatorul `&&`?
Operatorul logic `&&` acceptă câteva instrucțiuni booleene (condiționale), care au o valoare adevărata sau falsa și returnează o declarație 'booleană' ca rezultat.

Folosindu-l în loc de câteva blocuri imbricate `if`, facem codul **mai lizibil**, **mai ordonat** și **ușor** de întreținut.

Dar cum funcționează atunci când punem câteva condiții una după cealaltă?

Așa cum am văzut mai sus, logica **"ȘI"** returnează true, numai atunci când acceptă ca argumente instrucțiunile cu valori care sunt `adevărate`. 

Respectiv, atunci când avem o **secvență** de argumente, **logica "ȘI"** verifică fie până când nu mai există argumente, fie până când întâlnește un argument cu o valoare `false`.

## Exemplu
```js live
let a = true;
let b = true;
let c = false;
let d = true;
let result = a && b && c && d;
console.log(result);
```

Programul va rula în modul **următor**:

- Începe verificarea de la `a`, îl citeste și acceptă că are o valoare reală. După aceea verifică `b`

- După ce **a acceptat** că `a` și `b` se schimba in `true`, **el verifică următorul** argument

- Se ajunge la `c` și vede că variabila are o valoare `false`

- După ce programul acceptă că argumentul `c` are o valoare `false`, acesta calculează expresia **înainte de** `c`, **independent** de ce este valoarea lui `d`

- De aceea evaluarea lui `d` este **sărita** și întreaga expresie este calculată ca `false`.

## Exemplu: Punct într-un dreptunghi

Verifică dacă `punctul {x, y}` este plasat în interiorul dreptunghiului `{x1, y1} - {x2, y2}`.

[image assetsSrc="03.Point-in-rectangle-01.png" /]

Datele de intrare sunt citite de pe consolă și constă din 6 linii:

- Numerele zecimale `x1`, `y1`, `x2`, `y2`, `x` și `y` (deoarece se garantează că `x1 <x2` și `y1 <y2`).

## Eșantion de intrare și ieșire

  |**Intrare**|**Iesire**|
| --- | --- |
|2|Inside|
|-3||
|12||
|3||
|8||
|-1||

## Soluție

- Punctul este plasat în dreapta din partea stângă a dreptunghiului

- Punctul este plasat în stânga din partea dreaptă a dreptunghiului

- Punctul este plasat în jos din partea superioară a dreptunghiului

- Punctul este plasat în sus din partea de jos a dreptunghiului


```js live
let x1 = 2;
let y1 = -3;
let x2 = 12;
let y2 = 3;

let x = 8;
let y = -1;

if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    console.log('Inside');
} else {
    console.log('Outside');
}
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Bonus Points

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-23-Problem-and-Solution-Bonus-Points-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Bonus Points" taskId="pb-js-conditional-statements-advanced-Bonus-Points" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function bonusPoints(input) {
    // Scrieți codul aici
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Creați un program care aplică un bonus punctelor date

* Dacă punctele sunt între **0** și **3**, se adaugă **5**

* Dacă punctele sunt între **4** și **6**, se adaugă **15**

* Dacă punctele sunt între **7** și **9**, se adaugă **20**

# Exemplu
   | **Intrare** | **Ieșire** |
| --- | --- |
| bonusPoints(4) | 19 |
| bonusPoints(8) | 28 |

[/task-description]
[tests]
[test open]
[input]
bonusPoints(4)
[/input]
[output]
19
[/output]
[/test]
[test open]
[input]
bonusPoints(8)
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
bonusPoints(1)
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide hideTitle]
# Operator Logic "SAU" 

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-24-25-Logical-or-and-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Logica **OR** (operator `||`) înseamnă că **cel puțin una** dintre câteva condiții este îndeplinită.

Similar cu operatorul `&&`, **OR** logic acceptă câteva argumente de tip **boolean** (condițional) și se schimbă în `true` sau `false`.

Putem afla cu ușurință că **obținem** o valoare `true` de fiecare dată când cel puțin unul dintre argumente are o valoare `true`.

| **Operandul unu** | **Operandul doi** | **SAU** |
| :---: | :---: | :---: |
| adevărat | adevărat | adevărat |
| adevărat | fals | adevărat |
| fals | adevărat | adevărat |
| fals | fals | fals |

La școală, profesorul spune: "Ioan sau Petru ar trebui să curățe tabla". 

Pentru a îndeplini această condiție (pentru a curăța tabla), este posibil fie doar ca Ioan s-o curățe, fie doar ca Petru s-o curățe, sau ambii s-o facă.

## Cum funcționează operatorul `||`?
Am învățat deja ce reprezintă logica **SAU**. Dar cum se realizează de fapt?

La fel ca și în cazul logicii **"ȘI"**, programul verifică de la stânga la dreapta argumentele date.

Pentru a obține `adevărat` din expresie, este necesar să aveți cel puțin un argument cu o valoare `true`.

Respectiv, verificarea **continuă** până când se îndeplinește un **argument** cu **o astfel de** valoare sau până când argumentele **se termină**.

Iată un **exemplu** al operatorului `||` în acțiune:

```js live
let a = false;
let b = true;
let c = false;
let d = true;

let result = a || b || c || d;

console.log(result);
```

Programul **verifică** `a`, acceptă că are o valoare`false` și continuă.

Ajungând la `b`, înțelege că are o valoare `adevărată` și întreaga **expresie** este calculată ca `adevărată`, fără a fi nevoie de bifat`c` sau `d`, deoarece valorile lor **nu ar fi modificat** rezultatul expresiei.
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Food or Drink

[code-task title="Food or Drink" taskId="pb-js-conditional-statements-advanced-Food-or-Drink" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodOrDrink(input) {
    /// Scrieți codul dvs. aici
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Creați un program care determină dacă **intrarea** este **mâncare** sau **băutură**:

* Imprimă "**food**" pentru următoarele: **curry**, **noodles**, **sushi** and **spaghetti**

* Imprimă "**drink**" pentru următoarele: **tea**, **water** and **coffee**

* Imprimă "**unknown**" pentru orice altceva

# Exemplu
| **Intrare** | **Ieșire**  |
| --- | --- |
|foodOrDrink('curry')| food |
|foodOrDrink('flower')| unknown |


[/task-description]
[tests]
[test open]
[input]
foodOrDrink('curry')
[/input]
[output]
food
[/output]
[/test]
[test open]
[input]
foodOrDrink('flower')
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
foodOrDrink('tea')
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
foodOrDrink('something')
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Operatorul Logic "NU"

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-26-Logical-not-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Negarea logică (operator `!`) înseamnă că o condiție dată nu este **îndeplinită.**

| **a** | **!a**|
| --- | --- |
| adevărat | fals |

Operatorul `!` Acceptă ca **argument** o variabilă booleană și **returnează** valoarea acesteia.

## Exemplu: număr nevalid
Un număr dat este valid dacă este în intervalul `[100 ... 200]` sau este `0`. 

Faceți o validare pentru un număr nevalid.

De exemplu, `75` și `220` sunt **nevalide**, dar `150` este **valid**.

```js live
let num = 75;

let inRange = (num >= 100 && num <= 200) || num == 0;
if (!inRange) {
    console.log('invalid');
}
```
[/slide]

[slide hideTitle]
# Operatorul de Paranteză
La fel ca și restul operatorilor din programare, operatorii `&&` și `||` au prioritate, ca în acest caz: `&&` are prioritate mai mare decât `||`.

Operatorul `()` servește pentru **modificarea priorității operatorilor** și este calculat mai întâi, la fel ca și în matematică.

Folosirea parantezelor oferă, de asemenea, o lizibilitate mai bună a codului și este considerată o bună practică.

Exemplu de verificare dacă o variabilă aparține anumitor intervale:

```js
if (x < 0 || ((x >= 5) && (x <= 10)) || x > 20) {
    // Commands
}
```
[/slide]
