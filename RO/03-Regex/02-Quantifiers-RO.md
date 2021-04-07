# Cuantificatori

[slide hideTitle]
# Cuantificatori
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-9-10-Quantifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Cuantificatorii** indică numărul de caractere sau de expresii care se potrivesc.

Pentru exemplele de mai jos, avem nevoie de un **șir**, un **șablon** și metoda `.match()`.

Șablonul arată în felul următor: `/regularExpression/g`

Modificatorul `g` este utilizat pentru a realiza o potrivire globală (găsește toate potrivirile, fără să se oprească după prima potrivire).

Uneori vom avea nevoie de un semnal global, însă uneori nu.

Să ne uităm la exemple:

`*` corespunde elementului precedent, de 0 sau mai multe ori.

Exemplu: `Hellooo World! Hello Again!`

`lo*` va face potrivirile următoare: "l", "looo", "l", "l", "lo".

```js live
var str = 'Hellooo World! Hello Again!';
var pattern = /lo*/g;
var result = str.match(pattern);

console.log(result);
```

`+` corespunde elementului precedent o dată sau de mai multe ori.

**Exemplu**: `Hellooo World! Hello Again!`

`o+` va genera o potrivire pentru "ooo", "o", "o".

```js live
var str = 'Hellooo World! Hello Again!';
var pattern = /o+/g;
var result = str.match(pattern);

console.log(result);
```

`?` corespunde elementului precedent de 0 ori sau o dată.

Exemplu: `1, 100 sau 1000`

`10?` face potriviri pentru "1", "10" și "10" drept rezultat.

```js live
var str = '1, 100 or 1000';
var pattern = /10?/g;
var result = str.match(pattern);

console.log(result);
```

`{4}` face potriviri pentru elementul precedent exact 4 ori.

Exemplu: `1000, 10000 sau 100000`

`\d{4}` corespunde lui "1000", "1000", "1000" drept rezultat.

```js live
var str = '1000, 10000 or 100000';
var pattern = /\d{4}/g;
var result = str.match(pattern);

console.log(result);
```
[/slide]

[slide hideTitle]
# Construcții de Grupuri

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-11-Grouping-Expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O parte din șablon poate fi pusă în paranteze (...).

Acest concept poartă denumirea de **grup de capturare**.

Acesta are 2 efecte:

- Permite preluarea unei părți din potrivire ca o informație separată în vectorul de rezultate

- Dacă adăugăm un cuantificator după paranteze, acesta se aplică întregii paranteze

În următorul exemplu, vom căuta expresia "go".

```js live
const str = 'Here we go now';
var pattern = /(go)/g;
var result = str.match(pattern);

console.log(result);
```

Putem utiliza cuantificatori după paranteze.

```js live
const str = 'Here we gogo now';
var pattern = /(go)+/g;
var result = str.match(pattern);

console.log(result);
```

Utilizați această expresie pentru **grup de capturare denumit**: `(?<nume>subexpression)`.

Metoda `.exec()` testează potriviri într-un șir.

Această metodă returnează textul potrivit tiparului dacă se găsește o astfel de potrivire, altfel returnează un rezultat nul.

```js live
const str = 'My telephone number is 0884608975';
var pattern = /(?<number>\d+)/g;
var match = pattern.exec(str);

console.log(match.groups.number);
```

Dacă există potriviri multiple, putem executa iterații prin acestea.

```js live
const str = 'My telephone number is 0884608975 and yours is 0887468956';
var pattern = /(?<number>\d+)/g;
var match = pattern.exec(str);

while (match != null) {
    console.log(match.groups.number);
    match = pattern.exec(str);
}
```

Utilizați această expresie pentru **grup ce nu capturează potriviri** `(?:subexpression)`.

Putem utiliza `(?:subexpression)` pentru a nu captura grupuri și pentru a le elimina din rezultat.

Când lucrăm cu expresii regulate complexe, acest lucru poate fi foarte folositor.

Simbolul `|` din exemplu semnifică logica "or".

```js live
const regex = /(?:Jane|John|Alison)\s(.*?)\s(?:Smith|Smuth)/;
const result = regex.exec('Jane Isabell Smith');

console.log(result[0]);
console.log(result[1]);
```
[/slide]

[slide hideTitle]
# Backreferences
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-14-15-Backreferences-Match-Previous-Groups-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În șablon se pot utiliza referințe pentru un grup utilizând `\N`, unde N este numărul grupului.

Pentru a clarifica motivul pentru care acest concept este folositor, să considerăm o cerință pentru a extrage o propoziție înconjurată de `\#`.

Primul grup din șablon este `(\#)` și se va potrivi pentru primul `#`. 

După aceea, potrivim majuscule, litere mici și spații cu `[A-Z,a-z\s]+`

Pentru a potrivi al doilea `#`, care se află după cuvântul "there", utilizăm \1, unde 1 este numărul grupului.


```js live
const str = `The day #he said I will be there# he made a promise`;
const pattern = /(\#)[A-Za-z\s]+\1/;
const result = str.match(pattern);

console.log(result[0]);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Match Dates

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-12S-Solution-Match-Dates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Scrieți o expresie regulată care extrage date dintr-un text.

Un format de dată validă: `dd-MMM-yyyy`

Exemple: `12-Jun-1999, 3-Nov-1999`

I am born on **30-Dec-1994**.

My father is born on the **30-Dec-1994**.

**01-July-2000** nu este o dată validă.

- Format de dată validă: `30-Dec-1994` și `30-Dec-1994`

- Format de dată nevalidă: **01-July-2000**

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Email Validation

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-13-Solution-email-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Scrieți o expresie regulată care realizează o simplă **validare de email.**

Un email constă în: nume de utilizator `@` numele domeniului.

- **Numele de utilizator** este **alfanumeric**

- **Numele domeniului** constă în **2 șiruri**, separate de o punct \(`.`\)

- **Numele domeniului** poate conține doar **litere din alfabetul englez**

- Email valid: `valid123@email.com`

- Email nevalid: `invalid*name@emai1.com`

[/slide]
