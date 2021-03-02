# Expresii regulate în JavaScript

[slide]
# Regex în JS


[vimeo-video]
[stream language="EN" videoId="489818276/f505c53905" default /]
[stream language="RO" videoId="489818276/f505c53905"  /]
[/video-vimeo]

În „JavaScript”, putem construi o expresie regulată în două moduri:

Primul se numește **Expresie regulată literală** și oferă o compilație atunci când scriptul este încărcat.

Expresia regex este între oblice.

```js
let pattern = /[A-Za-z]+/g;
```
Cea de-a doua se numește **Funcția constructor** `RegExp` și oferă o compilație runtime.

Se folosește atunci când modelul provine dintr-o altă sursă.

```js
let regExp = new RegExp('[A-Za-z]+', 'g');
```
[/slide]

[slide]
# Validarea șirului după șablon

[vimeo-video]
[stream language="EN" videoId="489818324/1f73bd06a2" default /]
[stream language="RO" videoId="489818324/1f73bd06a2"  /]
[/video-vimeo]

Prima metodă pe care o vom analiza este `.test ()`. Pur și simplu determină dacă există o potrivire.

În exemplul de mai jos testăm dacă avem o dată validă. Dacă facem acest lucru, rezultatul va fi **true**, altfel va fi **false**.

```js live
let text = 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regex.test(text);
console.log(containsValidDate);
```
[/slide]

[slide]
# Verificarea pentru potriviri 

[vimeo-video]
[stream language="EN" videoId="489818336/9c43130f55" default /]
[stream language="RO" videoId="489818336/9c43130f55"  /]
[/video-vimeo]

Utilizați metoda `.match ()` pentru a verifica dacă există potriviri. Returnează o matrice, care poate fi iterată cu ușurință după aceea.

În exemplu, avem doar două potriviri.

```js live
let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regex);
console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
```
[/slide]

[slide]
# Folosirea metodei Exec() 

[vimeo-video]
[stream language="EN" videoId="489818381/0d46d8c337" default /]
[stream language="RO" videoId="489818381/0d46d8c337"  /]
[/video-vimeo]

Dacă potrivirea reușește, metoda `.exec ()` returnează o matrice cu proprietăți suplimentare \: "index" și "input".

Actualizează proprietatea „lastIndex” a obiectului expresie regulată.

Matricea returnată are textul potrivit ca primul element, apoi un articol pentru fiecare grup de captare parantetic al textului potrivit.

Dacă potrivirea eșuează, metoda `.exec ()` returnează ** null ** și setează „lastIndex” la 0.

Este important să utilizați steagul global `g`.

```js live
let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let result = regex.exec(text);
while (result !== null) {
    console.log(result[0]);
    result = regex.exec(text);
}
```
[/slide]


[slide]
# Încloruirea cu regex

[vimeo-video]
[stream language="EN" videoId="489818394/353321baad" default /]
[stream language="RO" videoId="489818394/353321baad"  /]
[/video-vimeo]

Putem folosi metoda `.replace (regex, stringReplacement)` cu expresii regulate.

Înlocuiește toate șirurile care se potrivesc cu șablonul și su modelul de înlocuire furnizată.

```js live
let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regex = /\d{3}/g;
let result = text.replace(regex, replacement);
console.log(result);
```
[/slide]

[slide]
# Metoda MatchAll 

[vimeo-video]
[stream language="EN" videoId="489818400/49ac9835cd" default /]
[stream language="RO" videoId="489818400/49ac9835cd"  /]
[/video-vimeo]

Metoda `.matchAll()` returnează un iterator al tuturor rezultatelor care se potrivesc unui șir cu o expresie regulată, inclusiv grupuri de capturare.

Funcționează similar cu metoda `.exec()`. Singura diferență este că obținem toate potrivirile simultan într-o formă de matrice.

Rezultatul este o serie de matrice, de aceea în acest exemplu folosim operatorul spread.

```js live
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0][0]);
console.log(array[1][0]);
```
[/slide]


[slide]
# Împărțirea cu regex
[vimeo-video]
[stream language="EN" videoId="489818451/1a9e36239e" default /]
[stream language="RO" videoId="489818451/1a9e36239e"  /]
[/video-vimeo]

Metoda `.split()` împarte textul după șablon și returnează o serie de șiruri.

```js live
let text = '1   2 3      4';
let regex = /\s+/g;
let result = text.split(regex);
console.log(result);
```

[/slide]

[slide]
# Problemă: Match Full Name
[vimeo-video]
[stream language="EN" videoId="489818467/fd0f9e6999" default /]
[stream language="RO" videoId="489818467/fd0f9e6999"  /]
[/video-vimeo]

[code-task title="Match Full Name" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o funcție „JavaScript” pentru a se potrivi cu numele complete dintr-o listă de nume și imprimați-o pe consolă.

Mai întâi, scrieți o expresie regulată pentru a se potrivi cu un nume complet valid, în conformitate cu aceste condiții:

Un nume complet valid are următoarele caracteristici:
- Este format din două cuvinte.
- Fiecare cuvânt începe cu o literă mare.
- După prima literă, aceasta conține doar litere mici după aceea.
- Fiecare dintre cele două cuvinte trebuie să aibă cel puțin două litere.
- Cele două cuvinte sunt separate de un singur spațiu.

Pentru a vă ajuta, am prezentat mai mulți pași:
1. Utilizați un tester de regex online, cum ar fi: [Regex101] (https://regex101.com)
2. Verificați modul de utilizare a seturilor de caractere \ (notate cu paranteze drepte \ - \ "\ [\] \" \).
3. Specificați că doriți două cuvinte cu un spațiu între ele \ (caracterul spațial \ '\' și nu orice simbol al spațiului alb \).
4. Pentru fiecare cuvânt, specificați că ar trebui să înceapă cu o literă mare, utilizând un set de caractere. Caracterele dorite se află într-un interval \: de la A la Z.
5. Pentru fiecare cuvânt, specificați că prima literă este urmată doar de litere mici, una sau mai multe \ - utilizați un alt set de caractere și cuantificatorul corect.
6. Pentru a preveni capturarea literelor pe linii noi, puneți „\ b” la începutul și la sfârșitul regexului.
Acest lucru va asigura că ceea ce precede și ceea ce urmează potrivirea este o limită de cuvânt ca o nouă linie.

# Exemplu

**Intrare**
`['John smith, john smith, john Smith, JOhn Smith, JohN smith, John Smith']`

**Ieșire**
John Smith

[/task-description]
[tests]
[test]
[input]
Ivan Ivanov\, Ivan ivanov\, ivan Ivanov\, IVan Ivanov\, Test Testov\, Ivan	Ivanov
[/input]
[output]
Ivan Ivanov Test Testov
[/output]
[/test]
[test]
[input]
gosho goshov\-Xi Ban cc DD\-e e gosho goshov gosho goshov\-pesho ivanov\-PESHO IVANOV\-AA PESHO IVANOV A A aa Ivan Ivanov B B\-d d EE\-ivanivanov\-D D Ivan Ivanov 
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
c c\-PESHO IVANOV GOSHO GOSHOV\-D D\-GoshoGoshov goshogoshov\-bb d d\-CC d d A A\-IvanIvanov A A\-xiban gosho goshov\-Xi Ban xi ban\-BB\-pesho petrov XiBan\-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
GOSHO GOSHOV\-peshopetrov\-c c ivanivanov peshoivanov\-PeshoPetrov\-PeshoIvanov\-DD\-PeshoPetrov Xi Ban\-D D\-IvanIvanov\-D D\-dd\-aa pesho petrov PeshoIvanov\-XI BAN\-cc\-ivan ivanov\-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
EE\-e e pesho petrov\-PeshoPetrov aa\-gosho goshov\-peshoivanov\-B B EE\-Pesho Petrov\-Pesho Ivanov peshoivanov\-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b\-ivanivanov CC
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
d d gosho goshov XiBan pesho ivanov\-Pesho Petrov\-xiban\-Pesho Ivanov pesho petrov\-Pesho Petrov\-IvanIvanov\-Pesho Petrov\-PESHO IVANOV\-EE EE C C\-Pesho Ivanov\-peshoivanov\-bb XiBan\-aa
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
Xi Ban\-GoshoGoshov B B\-PeshoIvanov xiban B B aa C C\-goshogoshov\-IvanIvanov PeshoPetrov\-PeshoIvanov C C ivan ivanov\-Pesho Ivanov\-IVAN IVANOV C C\-PESHO IVANOV\-PESHO IVANOV ivan ivanov
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
A A\-Xi Ban b b\-C C ee XiBan\-gosho goshov GoshoGoshov AA\-IvanIvanov BB\-cc\-pesho petrov DD goshogoshov ivan ivanov IvanIvanov\-pesho ivanov a a\-gosho goshov\-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
gosho goshov\-aa\-C C-PESHO IVANOV PESHO PETROV\-A A xi ban A A aa\-peshopetrov Gosho Goshov d d\-E E DD XI BAN\-bb\-Gosho Goshov\-aa\-dd ivan ivanov\-
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
Gosho Goshov a a C C\-GoshoGoshov EE PeshoPetrov\-a a xi ban D D bb b b\-B B\-c c EE\-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV\-
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
goshogoshov peshoivanov\-c c\-XiBan\-cc\-Ivan Ivanov\-D D IVAN IVANOV xi ban BB\-xiban\-PESHO PETROV xiban Ivan Ivanov\-XI BAN\-cc\-IVAN IVANOV EE c c e e
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide]
# Soluție: Match Full Name

[vimeo-video]
[stream language="EN" videoId="489818469/5176096631" default /]
[stream language="RO" videoId="489818469/5176096631"  /]
[/video-vimeo]

[code-task title="Match Full Name" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
// Video code
function solve(input) {
    input = input[0];
    let arrResult = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validName = null;
    while ((validName = pattern.exec(input)) !== null) {
        arrResult.push(validName[0]);
    }
    console.log(arrResult.join(' '));
}
```

[/code-editor]
[task-description]

# Descriere 

Scrieți o funcție „JavaScript” pentru a se potrivi cu numele complete dintr-o listă de nume și imprimați-o pe consolă.

Mai întâi, scrieți o expresie regulată pentru a se potrivi cu un nume complet valid, în conformitate cu aceste condiții:

Un nume complet valid are următoarele caracteristici:
- Este format din două cuvinte.
- Fiecare cuvânt începe cu o literă mare.
- După prima literă, aceasta conține doar litere mici după aceea.
- Fiecare dintre cele două cuvinte trebuie să aibă cel puțin două litere.
- Cele două cuvinte sunt separate de un singur spațiu.

Pentru a vă ajuta, am prezentat mai mulți pași:
1. Utilizați un tester de regex online, cum ar fi: [Regex101] (https://regex101.com)
2. Verificați modul de utilizare a seturilor de caractere \ (notate cu paranteze drepte \ - \ "\ [\] \" \).
3. Specificați că doriți două cuvinte cu un spațiu între ele \ (caracterul spațial \ '\' și nu orice simbol al spațiului alb \).
4. Pentru fiecare cuvânt, specificați că ar trebui să înceapă cu o literă mare, utilizând un set de caractere. Caracterele dorite se află într-un interval \: de la A la Z.
5. Pentru fiecare cuvânt, specificați că prima literă este urmată doar de litere mici, una sau mai multe \ - utilizați un alt set de caractere și cuantificatorul corect.
6. Pentru a preveni capturarea literelor pe linii noi, puneți „\ b” la începutul și la sfârșitul regexului.
Acest lucru va asigura că ceea ce precede și ceea ce urmează potrivirea este o limită de cuvânt ca o nouă linie.

# Exemplu

**Intrare**
`['John smith, john smith, john Smith, JOhn Smith, JohN smith, John Smith']`

**Iesire**
John Smith

[/task-description]
[tests]
[test]
[input]
Ivan Ivanov\, Ivan ivanov\, ivan Ivanov\, IVan Ivanov\, Test Testov\, Ivan	Ivanov
[/input]
[output]
Ivan Ivanov Test Testov
[/output]
[/test]
[test]
[input]
gosho goshov\-Xi Ban cc DD\-e e gosho goshov gosho goshov\-pesho ivanov\-PESHO IVANOV\-AA PESHO IVANOV A A aa Ivan Ivanov B B\-d d EE\-ivanivanov\-D D Ivan Ivanov 
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
c c\-PESHO IVANOV GOSHO GOSHOV\-D D\-GoshoGoshov goshogoshov\-bb d d\-CC d d A A\-IvanIvanov A A\-xiban gosho goshov\-Xi Ban xi ban\-BB\-pesho petrov XiBan\-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
GOSHO GOSHOV\-peshopetrov\-c c ivanivanov peshoivanov\-PeshoPetrov\-PeshoIvanov\-DD\-PeshoPetrov Xi Ban\-D D\-IvanIvanov\-D D\-dd\-aa pesho petrov PeshoIvanov\-XI BAN\-cc\-ivan ivanov\-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
EE\-e e pesho petrov\-PeshoPetrov aa\-gosho goshov\-peshoivanov\-B B EE\-Pesho Petrov\-Pesho Ivanov peshoivanov\-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b\-ivanivanov CC
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
d d gosho goshov XiBan pesho ivanov\-Pesho Petrov\-xiban\-Pesho Ivanov pesho petrov\-Pesho Petrov\-IvanIvanov\-Pesho Petrov\-PESHO IVANOV\-EE EE C C\-Pesho Ivanov\-peshoivanov\-bb XiBan\-aa
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
Xi Ban\-GoshoGoshov B B\-PeshoIvanov xiban B B aa C C\-goshogoshov\-IvanIvanov PeshoPetrov\-PeshoIvanov C C ivan ivanov\-Pesho Ivanov\-IVAN IVANOV C C\-PESHO IVANOV\-PESHO IVANOV ivan ivanov
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
A A\-Xi Ban b b\-C C ee XiBan\-gosho goshov GoshoGoshov AA\-IvanIvanov BB\-cc\-pesho petrov DD goshogoshov ivan ivanov IvanIvanov\-pesho ivanov a a\-gosho goshov\-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
gosho goshov\-aa\-C C-PESHO IVANOV PESHO PETROV\-A A xi ban A A aa\-peshopetrov Gosho Goshov d d\-E E DD XI BAN\-bb\-Gosho Goshov\-aa\-dd ivan ivanov\-
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
Gosho Goshov a a C C\-GoshoGoshov EE PeshoPetrov\-a a xi ban D D bb b b\-B B\-c c EE\-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV\-
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
goshogoshov peshoivanov\-c c\-XiBan\-cc\-Ivan Ivanov\-D D IVAN IVANOV xi ban BB\-xiban\-PESHO PETROV xiban Ivan Ivanov\-XI BAN\-cc\-IVAN IVANOV EE c c e e
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: Match Phone Number
[vimeo-video]
[stream language="EN" videoId="489818535/165ce68434" default /]
[stream language="RO" videoId="489818535/165ce68434"  /]
[/video-vimeo]

[code-task title="Match Phone Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o expresie regulată pentru a se potrivi cu un număr de telefon valid de la Sofia.

După ce găsiți toate telefoanele valide, imprimați-le pe consolă, separate printr-o virgulă și un spațiu `,`.

Un număr valid are următoarele caracteristici:
- Începe cu `+ 359`
- Apoi, este urmat de codul de zonă `(întotdeauna 2)`.

După aceea, este urmat de numărul în sine:
- Numărul este format din 7 cifre (separate în două grupuri de 3 și respectiv 4 cifre).
- Diferitele părți sunt separate fie de un spațiu, fie de o cratimă `-`.

Puteți utiliza următoarele proprietăți RegEx pentru a ajuta la potrivirea:
- Folosiți cuantificatoare pentru a potrivi un anumit număr de cifre.
- Utilizați un grup de capturare pentru a vă asigura că delimitatorul este doar unul dintre caracterele permise (spațiu sau cratimă) și nu o combinație a ambelor \ (de ex. \ +359 2 \ -111 111 are delimitatoare mixte, este nevalid \). Folosiți o referință de grup pentru a realiza acest lucru.
- Adăugați o limită de cuvânt la sfârșitul potrivirii pentru a evita potriviri parțiale (ultimul exemplu din partea dreaptă).
- Asigurați-vă că înainte de semnul `+` există fie un spațiu, fie este începutul șirului.

# Exemplu

**Intrare**

`["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]`

**Iesire**

\+359 2 222 2222\, \+359\-2\-222\-2222

[/task-description]
[tests]
[test]
[input]
\+359 2 222 2222\,359\-2\-222\-2222\, \+359\/2\/222\/2222\, \+359\-2 222 2222 \+359 2\-222\-2222\, \+359\-2\-222\-222\, \+359\-2\-222\-22222 \+359\-2\-222\-2222
[/input]
[output]
\+359 2 222 2222\, \+359\-2\-222\-2222
[/output]
[/test]
[test]
[input]
\+359\-2\-376\-7398 \+359\-2\-854\-2280 \-359 2 222 2222 \-359 2 222 2222 \+359 1 123 4567 \+359\-2\-789\-2584 \+359 2 727 9740 \+359 2 819 7146 \+359 2 558 8560 \+359\-2\-376\-7398 \+359\-2\-961\-0248 \+359\-2\-376\-7398 \+359 2 262 8203 \+359 2 22 2222 \+359\-2\-191\-9995
[/input]
[output]
\+359\-2\-376\-7398\, \+359\-2\-854\-2280\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359 2 819 7146\, \+359 2 558 8560\, \+359\-2\-376\-7398\, \+359\-2\-961\-0248\, \+359\-2\-376\-7398\, \+359 2 262 8203\, \+359\-2\-191\-9995
[/output]
[/test]
[test]
[input]
\+359 2 357 3351 \+359 2 22 2222 \+359 2 173 3408 \+359\-2\-789\-2584 \+359 2 193 3953 \+359\-2\-961\-0248 \+359\-2\-789\-2584 \+359 2 222 222 \+360 2 222 2222 \+359 2 727 9740 \+359\-2\-854\-2280 \+359 2 193 3953 \+359 2 357 3351 \+359 2 558 8560 \+359 2 222 222
[/input]
[output]
\+359 2 357 3351\, \+359 2 173 3408\, \+359\-2\-789\-2584\, \+359 2 193 3953\, \+359\-2\-961\-0248\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359\-2\-854\-2280\, \+359 2 193 3953\, \+359 2 357 3351\, \+359 2 558 8560
[/output]
[/test]
[test]
[input]
\+359\-2\-645\-6120 \+359 2 680 6053 \+359 2 262 8203 \+359 2 262 8203 \+359 2 717 0238 \+359\-2\-961\-0248 \+359 1 123 4567 \+359 2 173 3408 \+359\-2\-977\-0618 \+360 2 222 2222 \+359 2 123 1273 \+359 2 177 2605 \+359 2 177 2605 \+359 2 558 8560 \+359\-2\-789\-2584
[/input]
[output]
\+359\-2\-645\-6120\, \+359 2 680 6053\, \+359 2 262 8203\, \+359 2 262 8203\, \+359 2 717 0238\, \+359\-2\-961\-0248\, \+359 2 173 3408\, \+359\-2\-977\-0618\, \+359 2 123 1273\, \+359 2 177 2605\, \+359 2 177 2605\, \+359 2 558 8560\, \+359\-2\-789\-2584
[/output]
[/test]
[test]
[input]
\+359\-2\-376\-7398 \+359 2 558 8560 \+360 2 222 2222 \+359 2 073 2128 \+359 2 628 8897 \+359 2 123 1273 \+359 2 819 7146 \+359\-2\-191\-9995 \+359\-2\-645\-6120 \+359 2 262 8203 \+359 2 123 1273 \+359 2 073 2128 \+359\-2\-191\-9995 \+359 2 22 2222 \+359 2 073 2128
[/input]
[output]
\+359\-2\-376\-7398\, \+359 2 558 8560\, \+359 2 073 2128\, \+359 2 628 8897\, \+359 2 123 1273\, \+359 2 819 7146\, \+359\-2\-191\-9995\, \+359\-2\-645\-6120\, \+359 2 262 8203\, \+359 2 123 1273\, \+359 2 073 2128\, \+359\-2\-191\-9995\, \+359 2 073 2128
[/output]
[/test]
[test]
[input]
\+359 2 222 222 \+359\-2\-961\-0248 \+359 2 717 0238 \+359\-2\-789\-2584 \+359\-2\-376\-7398 \+359 2 173 3408 \+359\-2\-977\-0618 \+359 2 680 6053 \+359 2 22 2222 \+359 2 22 2222 \+359 2 680 6053 \+359\-2\-191\-9995 \+359 2 819 7146 \+359 2 262 8203 \+359\-2\-854\-2280
[/input]
[output]
\+359\-2\-961\-0248\, \+359 2 717 0238\, \+359\-2\-789\-2584\, \+359\-2\-376\-7398\, \+359 2 173 3408\, \+359\-2\-977\-0618\, \+359 2 680 6053\, \+359 2 680 6053\, \+359\-2\-191\-9995\, \+359 2 819 7146\, \+359 2 262 8203\, \+359\-2\-854\-2280
[/output]
[/test]
[test]
[input]
\+359 2 173 3408 \+359 1 123 4567 \+359 2 22 2222 \+359 2 727 9740 \+359 2 222 222 \+359 2 262 8203 \+359 2 222 222 \+359\-2\-191\-9995 \+359 2 22 2222 \+359 1 123 4567 \+359 2 717 0238 \+359 2 193 3953 \+359 1 123 4567 \+359 2 193 3953 \+359 1 123 4567
[/input]
[output]
\+359 2 173 3408\, \+359 2 727 9740\, \+359 2 262 8203\, \+359\-2\-191\-9995\, \+359 2 717 0238\, \+359 2 193 3953\, \+359 2 193 3953
[/output]
[/test]
[test]
[input]
\+359 2 680 6053 \+359 1 123 4567 \+359\-2\-191\-9995 \+359 2 073 2128 \+359 2 262 8203 \+359\-2\-789\-2584 \+359 2 173 3408 \+359 2 717 0238 \+359\-2\-645\-6120 \+359 2 628 8897 \+359 2 222 222 \+359 2 177 2605 \+359\-2\-191\-9995 \+359\-2\-645\-6120 \+359\-2\-191\-9995
[/input]
[output]
\+359 2 680 6053\, \+359\-2\-191\-9995\, \+359 2 073 2128\, \+359 2 262 8203\, \+359\-2\-789\-2584\, \+359 2 173 3408\, \+359 2 717 0238\, \+359\-2\-645\-6120\, \+359 2 628 8897\, \+359 2 177 2605\, \+359\-2\-191\-9995\, \+359\-2\-645\-6120\, \+359\-2\-191\-9995
[/output]
[/test]
[test]
[input]
\+359 2 123 1273 \+359 2 222 222 \+359 2 262 8203 \+359 2 717 0238 \+359\-2\-789\-2584 \+359 2 727 9740 \+359\-2\-376\-7398 \+359 2 123 1273 \+359 2 680 6053 \+359 2 193 3953 \+359 2 262 8203 \+359\-2\-854\-2280 \+359 2 558 8560 \+359 2 558 8560 \+360 2 222 2222
[/input]
[output]
\+359 2 123 1273\, \+359 2 262 8203\, \+359 2 717 0238\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359\-2\-376\-7398\, \+359 2 123 1273\, \+359 2 680 6053\, \+359 2 193 3953\, \+359 2 262 8203\, \+359\-2\-854\-2280\, \+359 2 558 8560\, \+359 2 558 8560
[/output]
[/test]
[test]
[input]
\+359\-2\-376\-7398 \+359 2 727 9740 \+359 2 680 6053 \-359 2 222 2222 \+359 2 123 1273 \+359\-2\-961\-0248 \+359 2 22 2222 \+359 2 173 3408 \+359 2 558 8560 \+359 2 073 2128 \+359 2 357 3351 \+359\-2\-789\-2584 \+359 2 717 0238 \+359 2 073 2128 \+359 2 22 2222
[/input]
[output]
\+359\-2\-376\-7398\, \+359 2 727 9740\, \+359 2 680 6053\, \+359 2 123 1273\, \+359\-2\-961\-0248\, \+359 2 173 3408\, \+359 2 558 8560\, \+359 2 073 2128\, \+359 2 357 3351\, \+359\-2\-789\-2584\, \+359 2 717 0238\, \+359 2 073 2128
[/output]
[/test]
[test]
[input]
\-359 2 222 2222 \+359 2 357 3351 \+359\-2\-191\-9995 \-359 2 222 2222 \+359 2 222 222 \+359\-2\-789\-2584 \+359\-2\-376\-7398 \+359 1 123 4567 \+360 2 222 2222 \+359 2 22 2222 \+359 2 262 8203 \+359 2 193 3953 \+359 2 177 2605 \+359 2 073 2128 \+359 2 073 2128
[/input]
[output]
\+359 2 357 3351\, \+359\-2\-191\-9995\, \+359\-2\-789\-2584\, \+359\-2\-376\-7398\, \+359 2 262 8203\, \+359 2 193 3953\, \+359 2 177 2605\, \+359 2 073 2128\, \+359 2 073 2128
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Soluție: Match Phone Number
[vimeo-video]
[stream language="EN" videoId="489818538/577d03f267" default /]
[stream language="RO" videoId="489818538/577d03f267"  /]
[/video-vimeo]

[code-task title="Match Phone Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
// Video code
function solve(input) {
    let validNumber = [];
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    while ((validNumber = pattern.exec(input)) !== null) {
        validNumber.push(validNumber[0]);
    }
    console.log(validNumber.join(", "));
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o expresie regulată pentru a se potrivi cu un număr de telefon valid de la Sofia.

După ce găsiți toate telefoanele valide, imprimați-le pe consolă, separate printr-o virgulă și un spațiu `,`.

Un număr valid are următoarele caracteristici:
- Începe cu `+ 359`
- Apoi, este urmat de codul de zonă `(întotdeauna 2)`.

După aceea, este urmat de numărul în sine:
- Numărul este format din 7 cifre (separate în două grupuri de 3 și respectiv 4 cifre).
- Diferitele părți sunt separate fie de un spațiu, fie de o cratimă `-`.

Puteți utiliza următoarele proprietăți RegEx pentru a ajuta la potrivirea:
- Folosiți cuantificatoare pentru a potrivi un anumit număr de cifre.
- Utilizați un grup de capturare pentru a vă asigura că delimitatorul este doar unul dintre caracterele permise (spațiu sau cratimă) și nu o combinație a ambelor \ (de ex. \ +359 2 \ -111 111 are delimitatoare mixte, este nevalid \). Folosiți o referință de grup pentru a realiza acest lucru.
- Adăugați o limită de cuvânt la sfârșitul potrivirii pentru a evita potriviri parțiale (ultimul exemplu din partea dreaptă).
- Asigurați-vă că înainte de semnul `+` există fie un spațiu, fie este începutul șirului.

# Exemplu

**Intrare**

`["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]`

**Iesire**

\+359 2 222 2222\, \+359\-2\-222\-2222

[/task-description]
[tests]
[test]
[input]
\+359 2 222 2222\,359\-2\-222\-2222\, \+359\/2\/222\/2222\, \+359\-2 222 2222 \+359 2\-222\-2222\, \+359\-2\-222\-222\, \+359\-2\-222\-22222 \+359\-2\-222\-2222
[/input]
[output]
\+359 2 222 2222\, \+359\-2\-222\-2222
[/output]
[/test]
[test]
[input]
\+359\-2\-376\-7398 \+359\-2\-854\-2280 \-359 2 222 2222 \-359 2 222 2222 \+359 1 123 4567 \+359\-2\-789\-2584 \+359 2 727 9740 \+359 2 819 7146 \+359 2 558 8560 \+359\-2\-376\-7398 \+359\-2\-961\-0248 \+359\-2\-376\-7398 \+359 2 262 8203 \+359 2 22 2222 \+359\-2\-191\-9995
[/input]
[output]
\+359\-2\-376\-7398\, \+359\-2\-854\-2280\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359 2 819 7146\, \+359 2 558 8560\, \+359\-2\-376\-7398\, \+359\-2\-961\-0248\, \+359\-2\-376\-7398\, \+359 2 262 8203\, \+359\-2\-191\-9995
[/output]
[/test]
[test]
[input]
\+359 2 357 3351 \+359 2 22 2222 \+359 2 173 3408 \+359\-2\-789\-2584 \+359 2 193 3953 \+359\-2\-961\-0248 \+359\-2\-789\-2584 \+359 2 222 222 \+360 2 222 2222 \+359 2 727 9740 \+359\-2\-854\-2280 \+359 2 193 3953 \+359 2 357 3351 \+359 2 558 8560 \+359 2 222 222
[/input]
[output]
\+359 2 357 3351\, \+359 2 173 3408\, \+359\-2\-789\-2584\, \+359 2 193 3953\, \+359\-2\-961\-0248\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359\-2\-854\-2280\, \+359 2 193 3953\, \+359 2 357 3351\, \+359 2 558 8560
[/output]
[/test]
[test]
[input]
\+359\-2\-645\-6120 \+359 2 680 6053 \+359 2 262 8203 \+359 2 262 8203 \+359 2 717 0238 \+359\-2\-961\-0248 \+359 1 123 4567 \+359 2 173 3408 \+359\-2\-977\-0618 \+360 2 222 2222 \+359 2 123 1273 \+359 2 177 2605 \+359 2 177 2605 \+359 2 558 8560 \+359\-2\-789\-2584
[/input]
[output]
\+359\-2\-645\-6120\, \+359 2 680 6053\, \+359 2 262 8203\, \+359 2 262 8203\, \+359 2 717 0238\, \+359\-2\-961\-0248\, \+359 2 173 3408\, \+359\-2\-977\-0618\, \+359 2 123 1273\, \+359 2 177 2605\, \+359 2 177 2605\, \+359 2 558 8560\, \+359\-2\-789\-2584
[/output]
[/test]
[test]
[input]
\+359\-2\-376\-7398 \+359 2 558 8560 \+360 2 222 2222 \+359 2 073 2128 \+359 2 628 8897 \+359 2 123 1273 \+359 2 819 7146 \+359\-2\-191\-9995 \+359\-2\-645\-6120 \+359 2 262 8203 \+359 2 123 1273 \+359 2 073 2128 \+359\-2\-191\-9995 \+359 2 22 2222 \+359 2 073 2128
[/input]
[output]
\+359\-2\-376\-7398\, \+359 2 558 8560\, \+359 2 073 2128\, \+359 2 628 8897\, \+359 2 123 1273\, \+359 2 819 7146\, \+359\-2\-191\-9995\, \+359\-2\-645\-6120\, \+359 2 262 8203\, \+359 2 123 1273\, \+359 2 073 2128\, \+359\-2\-191\-9995\, \+359 2 073 2128
[/output]
[/test]
[test]
[input]
\+359 2 222 222 \+359\-2\-961\-0248 \+359 2 717 0238 \+359\-2\-789\-2584 \+359\-2\-376\-7398 \+359 2 173 3408 \+359\-2\-977\-0618 \+359 2 680 6053 \+359 2 22 2222 \+359 2 22 2222 \+359 2 680 6053 \+359\-2\-191\-9995 \+359 2 819 7146 \+359 2 262 8203 \+359\-2\-854\-2280
[/input]
[output]
\+359\-2\-961\-0248\, \+359 2 717 0238\, \+359\-2\-789\-2584\, \+359\-2\-376\-7398\, \+359 2 173 3408\, \+359\-2\-977\-0618\, \+359 2 680 6053\, \+359 2 680 6053\, \+359\-2\-191\-9995\, \+359 2 819 7146\, \+359 2 262 8203\, \+359\-2\-854\-2280
[/output]
[/test]
[test]
[input]
\+359 2 173 3408 \+359 1 123 4567 \+359 2 22 2222 \+359 2 727 9740 \+359 2 222 222 \+359 2 262 8203 \+359 2 222 222 \+359\-2\-191\-9995 \+359 2 22 2222 \+359 1 123 4567 \+359 2 717 0238 \+359 2 193 3953 \+359 1 123 4567 \+359 2 193 3953 \+359 1 123 4567
[/input]
[output]
\+359 2 173 3408\, \+359 2 727 9740\, \+359 2 262 8203\, \+359\-2\-191\-9995\, \+359 2 717 0238\, \+359 2 193 3953\, \+359 2 193 3953
[/output]
[/test]
[test]
[input]
\+359 2 680 6053 \+359 1 123 4567 \+359\-2\-191\-9995 \+359 2 073 2128 \+359 2 262 8203 \+359\-2\-789\-2584 \+359 2 173 3408 \+359 2 717 0238 \+359\-2\-645\-6120 \+359 2 628 8897 \+359 2 222 222 \+359 2 177 2605 \+359\-2\-191\-9995 \+359\-2\-645\-6120 \+359\-2\-191\-9995
[/input]
[output]
\+359 2 680 6053\, \+359\-2\-191\-9995\, \+359 2 073 2128\, \+359 2 262 8203\, \+359\-2\-789\-2584\, \+359 2 173 3408\, \+359 2 717 0238\, \+359\-2\-645\-6120\, \+359 2 628 8897\, \+359 2 177 2605\, \+359\-2\-191\-9995\, \+359\-2\-645\-6120\, \+359\-2\-191\-9995
[/output]
[/test]
[test]
[input]
\+359 2 123 1273 \+359 2 222 222 \+359 2 262 8203 \+359 2 717 0238 \+359\-2\-789\-2584 \+359 2 727 9740 \+359\-2\-376\-7398 \+359 2 123 1273 \+359 2 680 6053 \+359 2 193 3953 \+359 2 262 8203 \+359\-2\-854\-2280 \+359 2 558 8560 \+359 2 558 8560 \+360 2 222 2222
[/input]
[output]
\+359 2 123 1273\, \+359 2 262 8203\, \+359 2 717 0238\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359\-2\-376\-7398\, \+359 2 123 1273\, \+359 2 680 6053\, \+359 2 193 3953\, \+359 2 262 8203\, \+359\-2\-854\-2280\, \+359 2 558 8560\, \+359 2 558 8560
[/output]
[/test]
[test]
[input]
\+359\-2\-376\-7398 \+359 2 727 9740 \+359 2 680 6053 \-359 2 222 2222 \+359 2 123 1273 \+359\-2\-961\-0248 \+359 2 22 2222 \+359 2 173 3408 \+359 2 558 8560 \+359 2 073 2128 \+359 2 357 3351 \+359\-2\-789\-2584 \+359 2 717 0238 \+359 2 073 2128 \+359 2 22 2222
[/input]
[output]
\+359\-2\-376\-7398\, \+359 2 727 9740\, \+359 2 680 6053\, \+359 2 123 1273\, \+359\-2\-961\-0248\, \+359 2 173 3408\, \+359 2 558 8560\, \+359 2 073 2128\, \+359 2 357 3351\, \+359\-2\-789\-2584\, \+359 2 717 0238\, \+359 2 073 2128
[/output]
[/test]
[test]
[input]
\-359 2 222 2222 \+359 2 357 3351 \+359\-2\-191\-9995 \-359 2 222 2222 \+359 2 222 222 \+359\-2\-789\-2584 \+359\-2\-376\-7398 \+359 1 123 4567 \+360 2 222 2222 \+359 2 22 2222 \+359 2 262 8203 \+359 2 193 3953 \+359 2 177 2605 \+359 2 073 2128 \+359 2 073 2128
[/input]
[output]
\+359 2 357 3351\, \+359\-2\-191\-9995\, \+359\-2\-789\-2584\, \+359\-2\-376\-7398\, \+359 2 262 8203\, \+359 2 193 3953\, \+359 2 177 2605\, \+359 2 073 2128\, \+359 2 073 2128
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]