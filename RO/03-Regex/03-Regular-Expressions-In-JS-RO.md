# Expresii Regulate în JavaScript

[slide hideTitle]
# Expresii Regulate în JavaScript

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-16-17-Regex-in-JS-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


În JavaScript, putem construi o expresie regulată în două moduri.

Primul se numește **expresie regulată literală** și oferă o compilație atunci când scriptul este încărcat.

Expresia regex este între bare oblice.

```js
let pattern = /[A-Za-z]+/g;
```
Cel de-al doilea se numește **funcția constructor** `RegExp` și oferă o compilație runtime.

Se folosește atunci când modelul provine dintr-o altă sursă.

```js
let regExp = new RegExp('[A-Za-z]+', 'g');
```
[/slide]

[slide hideTitle]
# Validarea Şirului După Şablon

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-18-Validating-string-by-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Prima metodă pe care o vom analiza este `.test()`. Aceasta determină dacă există o potrivire.

În exemplul de mai jos testăm dacă avem o dată validă. Dacă avem, rezultatul va fi **true**, altfel va fi **false**.

```js live
let text = 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regex.test(text);
console.log(containsValidDate);
```
[/slide]

[slide hideTitle]
# Verificarea Pentru Potriviri 

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-19-Checking-for-matches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Utilizați metoda `.match()` pentru a verifica dacă există potriviri. 

Aceasta returnează o matrice, care poate fi iterată cu ușurință după aceea.

În acest exemplu, avem doar două potriviri:

```js live
let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regex);
console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
```
[/slide]

[slide hideTitle]
# Folosirea Metodei "Exec()"

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-20-Using-the-exce()-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă potrivirea reușește, metoda `.exec()` returnează o matrice cu proprietăți suplimentare \: `index` și `input`.

Aceasta actualizează proprietatea `lastIndex` a obiectului de expresie regulată.

Matricea returnată are textul potrivit ca prim element, apoi un element pentru fiecare grup de captare parantetic al textului potrivit.

Dacă potrivirea eșuează, metoda `.exec()` returnează `null` și setează `lastIndex` la 0.

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


[slide hideTitle]
# Înlocuirea cu Regex

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-21-Replacing-with-regex-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi metoda `.replace(regex, stringReplacement)` cu expresii regulate.

Înlocuiește toate șirurile care se potrivesc cu șablonul cu modelul de înlocuire furnizat.

```js live
let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regex = /\d{3}/g;
let result = text.replace(regex, replacement);
console.log(result);
```
[/slide]

[slide hideTitle]
# Metoda MatchAll 

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-22-Match-all-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `.matchAll()` returnează un iterator al tuturor rezultatelor care se potrivesc unui șir cu o expresie regulată, inclusiv grupuri de capturare.

Funcționează similar cu metoda `.exec()`. Singura diferență este că obținem toate potrivirile simultan sub formă de matrice.

Rezultatul este o matrice de matrice, de aceea în acest exemplu folosim operatorul spread.

```js live
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];

console.log(array[0][0]);
console.log(array[1][0]);
```
[/slide]


[slide hideTitle]
# Împărțirea cu Regex

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-23-Splitting-with-regex-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `.split()` împarte textul după un tipar și returnează o matrice de șiruri.

```js live
let text = '1   2 3      4';
let regex = /\s+/g;
let result = text.split(regex);

console.log(result);
```

[/slide]

[slide hideTitle]
# Problem cu Soluție: Match Full Name

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-25-Solution-match-full-name-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Match Full Name" taskId="js-fundamentals-pt2-Regular-Expressions-lab-Match-Full-Name" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function matchName(input){
  // Scrieți codul dvs. aici
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

Scrieți o funcție JavaScript pentru a se potrivi cu numele complete dintr-o listă de nume și imprimați-le pe consolă.

Mai întâi, scrieți o expresie regulată pentru a se potrivi cu un nume complet valid, în conformitate cu aceste condiții:

Un nume complet valid are următoarele caracteristici:
- Este format din două cuvinte
- Fiecare cuvânt începe cu o literă mare
- După prima literă, acesta conține doar litere mici
- Fiecare dintre cele două cuvinte trebuie să aibă cel puțin două litere
- Cele două cuvinte sunt separate de un singur spațiu

Pentru a vă ajuta, am prezentat mai mulți pași:
1. Utilizați un tester de expresii regulate online, cum ar fi: [Regex101](https://regex101.com)
2. Verificați modul de utilizare a seturilor de caractere \ (notate cu paranteze drepte \- \"\[\]\"\)
3. Specificați că doriți două cuvinte cu un spațiu între ele \ (caracterul pentru spațiu \ '\' și nu orice simbol pentru spațiu alb \)
4. Pentru fiecare cuvânt, specificați că trebuie să înceapă cu o literă mare, utilizând un set de caractere. Caracterele dorite se află într-un interval \: de la A la Z
5. Pentru fiecare cuvânt, specificați că prima literă este urmată doar de litere mici, una sau mai multe \- utilizați un alt set de caractere și cuantificatorul corect
6. Pentru a preveni capturarea literelor pe linii noi, puneți \\**b** la începutul și la sfârșitul expresiei regulate
Acest lucru va asigura că ceea ce precede și ceea ce urmează după potrivire este o limită de cuvânt precum o nouă linie

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| matchName('John smith, john smith, john Smith, JOhn Smith, JohN smith, John Smith') | John Smith |
| matchName('Chuck finley, chuck finley, tommy Lee, Chuck Finley') | Chuck Finley |

[/task-description]
[tests]
[test open]
[input]
matchName('John smith, john smith, john Smith, JOhn Smith, JohN smith, John Smith')
[/input]
[output]
John Smith
[/output]
[/test]
[test open]
[input]
matchName('Chuck finley, chuck finley, tommy Lee, Chuck Finley')
[/input]
[output]
Chuck Finley
[/output]
[/test]
[test]
[input]
matchName('Ivan Ivanov\, Ivan ivanov\, ivan Ivanov\, IVan Ivanov\, Test Testov\, Ivan	Ivanov')
[/input]
[output]
Ivan Ivanov Test Testov
[/output]
[/test]
[test]
[input]
matchName('gosho goshov\-Xi Ban cc DD\-e e gosho goshov gosho goshov\-pesho ivanov\-PESHO IVANOV\-AA PESHO IVANOV A A aa Ivan Ivanov B B\-d d EE\-ivanivanov\-D D Ivan Ivanov')
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
matchName('c c\-PESHO IVANOV GOSHO GOSHOV\-D D\-GoshoGoshov goshogoshov\-bb d d\-CC d d A A\-IvanIvanov A A\-xiban gosho goshov\-Xi Ban xi ban\-BB\-pesho petrov XiBan\-')
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
matchName('GOSHO GOSHOV\-peshopetrov\-c c ivanivanov peshoivanov\-PeshoPetrov\-PeshoIvanov\-DD\-PeshoPetrov Xi Ban\-D D\-IvanIvanov\-D D\-dd\-aa pesho petrov PeshoIvanov\-XI BAN\-cc\-ivan ivanov\-')
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
matchName('EE\-e e pesho petrov\-PeshoPetrov aa\-gosho goshov\-peshoivanov\-B B EE\-Pesho Petrov\-Pesho Ivanov peshoivanov\-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b\-ivanivanov CC')
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
matchName('d d gosho goshov XiBan pesho ivanov\-Pesho Petrov\-xiban\-Pesho Ivanov pesho petrov\-Pesho Petrov\-IvanIvanov\-Pesho Petrov\-PESHO IVANOV\-EE EE C C\-Pesho Ivanov\-peshoivanov\-bb XiBan\-aa')
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
matchName('Xi Ban\-GoshoGoshov B B\-PeshoIvanov xiban B B aa C C\-goshogoshov\-IvanIvanov PeshoPetrov\-PeshoIvanov C C ivan ivanov\-Pesho Ivanov\-IVAN IVANOV C C\-PESHO IVANOV\-PESHO IVANOV ivan ivanov')
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
matchName('A A\-Xi Ban b b\-C C ee XiBan\-gosho goshov GoshoGoshov AA\-IvanIvanov BB\-cc\-pesho petrov DD goshogoshov ivan ivanov IvanIvanov\-pesho ivanov a a\-gosho goshov\-')
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
matchName('gosho goshov\-aa\-C C-PESHO IVANOV PESHO PETROV\-A A xi ban A A aa\-peshopetrov Gosho Goshov d d\-E E DD XI BAN\-bb\-Gosho Goshov\-aa\-dd ivan ivanov\-')
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
matchName('Gosho Goshov a a C C\-GoshoGoshov EE PeshoPetrov\-a a xi ban D D bb b b\-B B\-c c EE\-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV\-')
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
matchName('goshogoshov peshoivanov\-c c\-XiBan\-cc\-Ivan Ivanov\-D D IVAN IVANOV xi ban BB\-xiban\-PESHO PETROV xiban Ivan Ivanov\-XI BAN\-cc\-IVAN IVANOV EE c c e e')
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Match Phone Number

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-27-Solution-Match-phone-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Match Phone Number" taskId="js-fundamentals-pt2-Regular-Expressions-Match-Phone-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function matchPhone(input){
  // Scrieți codul dvs. aici
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

Scrieți o expresie regulată pentru a se potrivi cu un număr de telefon valid din Sofia.

După ce găsiți toate numerele de telefon valide, imprimați-le pe consolă, separate printr-o virgulă și un spațiu `,`.

Un număr valid are următoarele caracteristici:
- Începe cu **+359**
- Apoi, este urmat de codul de zonă **(întotdeauna 2)**

După aceea, este urmat de numărul în sine:
- Numărul este format din 7 cifre (separate în două grupuri de 3 și respectiv 4 cifre)
- Diferitele părți sunt separate fie de un spațiu, fie de o cratimă "\-"

Puteți utiliza următoarele proprietăți RegEx pentru a ajuta la potrivirea:
- Folosiți cuantificatori pentru a potrivi un anumit număr de cifre
- Utilizați un grup de capturare pentru a vă asigura că delimitatorul este doar unul dintre caracterele permise (spațiu sau cratimă) și nu o combinație a ambelor \(de ex. \+359 2 \-111 111 are delimitatoare mixte, este nevalid \)
      - folosiți o referință de grup pentru a realiza acest lucru.
- Adăugați o limită de cuvânt la sfârșitul potrivirii pentru a evita potriviri parțiale (ultimul exemplu din partea dreaptă)
- Asigurați-vă că înainte de semnul **+** există fie un spațiu, fie este începutul șirului

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| matchPhone('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222') | \+359 2 222 2222\, \+359\-2\-222\-2222 |
| matchphone('+359 2 445 2035, +358 2 00 4455, +359 3 525 6866') | \+359 2 445 2035 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
matchPhone('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')
[/input]
[output]
+359 2 222 2222, +359-2-222-2222
[/output]
[/test]
[test open]
[input]
matchphone('+359 2 445 2035, +358 2 00 4455, +359 3 525 6866')
[/input]
[output]
\+359 2 445 2035
[/output]
[/test]
[test]
[input]
matchPhone('+359-2-376-7398 +359-2-854-2280 -359 2 222 2222 -359 2 222 2222 +359 1 123 4567 +359-2-789-2584 +359 2 727 9740 +359 2 819 7146 +359 2 558 8560 +359-2-376-7398 +359-2-961-0248 +359-2-376-7398 +359 2 262 8203 +359 2 22 2222 +359-2-191-9995')
[/input]
[output]
+359-2-376-7398, +359-2-854-2280, +359-2-789-2584, +359 2 727 9740, +359 2 819 7146, +359 2 558 8560, +359-2-376-7398, +359-2-961-0248, +359-2-376-7398, +359 2 262 8203, +359-2-191-9995
[/output]
[/test]
[test]
[input]
matchPhone('+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222')
[/input]
[output]
+359 2 357 3351, +359 2 173 3408, +359-2-789-2584, +359 2 193 3953, +359-2-961-0248, +359-2-789-2584, +359 2 727 9740, +359-2-854-2280, +359 2 193 3953, +359 2 357 3351, +359 2 558 8560
[/output]
[/test]
[test]
[input]
matchPhone('+359-2-645-6120 +359 2 680 6053 +359 2 262 8203 +359 2 262 8203 +359 2 717 0238 +359-2-961-0248 +359 1 123 4567 +359 2 173 3408 +359-2-977-0618 +360 2 222 2222 +359 2 123 1273 +359 2 177 2605 +359 2 177 2605 +359 2 558 8560 +359-2-789-2584')
[/input]
[output]
+359-2-645-6120, +359 2 680 6053, +359 2 262 8203, +359 2 262 8203, +359 2 717 0238, +359-2-961-0248, +359 2 173 3408, +359-2-977-0618, +359 2 123 1273, +359 2 177 2605, +359 2 177 2605, +359 2 558 8560, +359-2-789-2584
[/output]
[/test]
[test]
[input]
matchPhone('+359-2-376-7398 +359 2 558 8560 +360 2 222 2222 +359 2 073 2128 +359 2 628 8897 +359 2 123 1273 +359 2 819 7146 +359-2-191-9995 +359-2-645-6120 +359 2 262 8203 +359 2 123 1273 +359 2 073 2128 +359-2-191-9995 +359 2 22 2222 +359 2 073 2128')
[/input]
[output]
+359-2-376-7398, +359 2 558 8560, +359 2 073 2128, +359 2 628 8897, +359 2 123 1273, +359 2 819 7146, +359-2-191-9995, +359-2-645-6120, +359 2 262 8203, +359 2 123 1273, +359 2 073 2128, +359-2-191-9995, +359 2 073 2128
[/output]
[/test]
[test]
[input]
matchPhone('+359 2 222 222 +359-2-961-0248 +359 2 717 0238 +359-2-789-2584 +359-2-376-7398 +359 2 173 3408 +359-2-977-0618 +359 2 680 6053 +359 2 22 2222 +359 2 22 2222 +359 2 680 6053 +359-2-191-9995 +359 2 819 7146 +359 2 262 8203 +359-2-854-2280')
[/input]
[output]
+359-2-961-0248, +359 2 717 0238, +359-2-789-2584, +359-2-376-7398, +359 2 173 3408, +359-2-977-0618, +359 2 680 6053, +359 2 680 6053, +359-2-191-9995, +359 2 819 7146, +359 2 262 8203, +359-2-854-2280
[/output]
[/test]
[test]
[input]
matchPhone('+359 2 173 3408 +359 1 123 4567 +359 2 22 2222 +359 2 727 9740 +359 2 222 222 +359 2 262 8203 +359 2 222 222 +359-2-191-9995 +359 2 22 2222 +359 1 123 4567 +359 2 717 0238 +359 2 193 3953 +359 1 123 4567 +359 2 193 3953 +359 1 123 4567')
[/input]
[output]
+359 2 173 3408, +359 2 727 9740, +359 2 262 8203, +359-2-191-9995, +359 2 717 0238, +359 2 193 3953, +359 2 193 3953
[/output]
[/test]
[test]
[input]
matchPhone('+359 2 680 6053 +359 1 123 4567 +359-2-191-9995 +359 2 073 2128 +359 2 262 8203 +359-2-789-2584 +359 2 173 3408 +359 2 717 0238 +359-2-645-6120 +359 2 628 8897 +359 2 222 222 +359 2 177 2605 +359-2-191-9995 +359-2-645-6120 +359-2-191-9995')
[/input]
[output]
+359 2 680 6053, +359-2-191-9995, +359 2 073 2128, +359 2 262 8203, +359-2-789-2584, +359 2 173 3408, +359 2 717 0238, +359-2-645-6120, +359 2 628 8897, +359 2 177 2605, +359-2-191-9995, +359-2-645-6120, +359-2-191-9995
[/output]
[/test]
[test]
[input]
matchPhone('+359 2 123 1273 +359 2 222 222 +359 2 262 8203 +359 2 717 0238 +359-2-789-2584 +359 2 727 9740 +359-2-376-7398 +359 2 123 1273 +359 2 680 6053 +359 2 193 3953 +359 2 262 8203 +359-2-854-2280 +359 2 558 8560 +359 2 558 8560 +360 2 222 2222')
[/input]
[output]
+359 2 123 1273, +359 2 262 8203, +359 2 717 0238, +359-2-789-2584, +359 2 727 9740, +359-2-376-7398, +359 2 123 1273, +359 2 680 6053, +359 2 193 3953, +359 2 262 8203, +359-2-854-2280, +359 2 558 8560, +359 2 558 8560
[/output]
[/test]
[test]
[input]
matchPhone('+359-2-376-7398 +359 2 727 9740 +359 2 680 6053 -359 2 222 2222 +359 2 123 1273 +359-2-961-0248 +359 2 22 2222 +359 2 173 3408 +359 2 558 8560 +359 2 073 2128 +359 2 357 3351 +359-2-789-2584 +359 2 717 0238 +359 2 073 2128 +359 2 22 2222')
[/input]
[output]
+359-2-376-7398, +359 2 727 9740, +359 2 680 6053, +359 2 123 1273, +359-2-961-0248, +359 2 173 3408, +359 2 558 8560, +359 2 073 2128, +359 2 357 3351, +359-2-789-2584, +359 2 717 0238, +359 2 073 2128
[/output]
[/test]
[test]
[input]
matchPhone('-359 2 222 2222 +359 2 357 3351 +359-2-191-9995 -359 2 222 2222 +359 2 222 222 +359-2-789-2584 +359-2-376-7398 +359 1 123 4567 +360 2 222 2222 +359 2 22 2222 +359 2 262 8203 +359 2 193 3953 +359 2 177 2605 +359 2 073 2128 +359 2 073 2128')
[/input]
[output]
+359 2 357 3351, +359-2-191-9995, +359-2-789-2584, +359-2-376-7398, +359 2 262 8203, +359 2 193 3953, +359 2 177 2605, +359 2 073 2128, +359 2 073 2128
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
