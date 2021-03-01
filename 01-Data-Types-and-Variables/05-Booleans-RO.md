# Valori booleene

[slide]

# Ce este o valoare booleană?

[vimeo-video]
[stream language="EN" videoId="489371680/3568705290" default /]
[stream language="RO" videoId="489371680/3568705290"  /]
[/video-vimeo]


Valorile booleene poartă numele lui [George Boole](https://en.wikipedia.org/wiki/George_Boole), un matematician englez.

Valorile booleene reprezintă unele **valori logice**.

Ele pot avea doar două valori `​​true` sau `false`.

Putem da această valoare ca **literala** sau o putem obține din rezultatul unei **expresii date**.

``` js live
let myBool = 10 > 9;
console.log(myBool);
```

Comparațiile booleene sunt cel mai adesea plasate în construcția `if`, si putem returna și o valoare booleană ca **rezultat dintr-o funcție.**

**Extrem de rar** scriem `true` sau `false` în mod explicit.

[/slide]

[slide]

# Comparații și condiții

[vimeo-video]
[stream language="EN" videoId="489371693/bb15d255c4" default /]
[stream language="RO" videoId="489371693/bb15d255c4"  /]
[/video-vimeo]

Exemple de operatori de comparație:

| Operator | Descriere | Exemplu   |
| :---:       |    :----:   |   :---:   |
| `==` | egal cu (fără tip) | `if (day == 'Monday')` |
| `===` | egal cu (cu tip) | `if (5 === 5)` |
| `!=`| nu este egal (fără tip) | `if (5 != 5)` |
| `!==` | nu este egal (cu tipul) | `if (5 !== '5')` |
| `>` | mai mare decât | `if (salary > 9000)` |
| `<` | mai puțin de | `if (age < 18)` |
| `>=` | mai mare sau egal cu (fără tip) | `if (6 >= 6)` |
| `<=` | mai mic sau egal cu (fără tip) | `if(6 <= 6)` |

# Exemple booleene:

Totul cu o "valoare" este `true`:

``` js live
let number=1;

if (number) {
  console.log(number);
}
```

- Totul fără o "valoare" este `false`

``` js live
let number;

if (number) {
  console.log(number);
} else {
  console.log('false');
}

```
[/slide]

[slide]
# True and False

[vimeo-video]
[stream language="EN" videoId="489371697/c3dbb010c9" default /]
[stream language="RO" videoId="489371697/c3dbb010c9"  /]
[/video-vimeo]

În plus față de `true` și `false`, JavaScript are `truthy` și `falsy` (uneori scris `falsey`).

Acestea sunt valori care nu sunt**'adevărate' sau 'false', dar când le transformăm într-o valoare booleană ele dau `true` sau `false`.

În JavaScript este **limbaj slab tastat** și nu avem tipuri de variabile.

Acest lucru nu împiedică o expresie if care încearcă să compare variabile care stochează valori cu diferite tipuri.

În acest exemplu: 

``` js live
console.log(5 == '5');
```

trecem valori de diferite tipuri, folosind operatorul `==` sau `!=`.

În acest caz, interpretul va face așa-numitul **casting implicit**.

Aceasta înseamnă că interpretul implicit va **converti** o valoare în **altă**, ceea ce în majoritatea cazurilor înseamnă **convertirea într-un șir.**

Dând un**șir**și un**număr**, de exemplu, **numărul devine un șir** și interpretul compară șirurile.

Dacă folosim `===` interpretul **nu convertește numărul într-un șir**, deci **numărul cinci nu este același cu șirul cinci** și această expresie returnează in `false`.

``` js live
console.log(5 === '5');
```

În ceea ce privește valorile `truthy` și `falsy`, de exemplu în construcția `if` putem compara cu diferite tipuri de date.

``` js live
if (5 == true) {
  console.log('same');
}else{
  console.log('not');
}

```
Rezultatul acestei expresii va fi `not`, iar acesta este un comportament așteptat.

Rezultatul acestei expresii:
``` js live
if (1 == true) {
  console.log('same');
}else{
  console.log('not');
}
```

Este `same`, deoarece interpretul le vede ca `1 == true` și transformă acest lucru într-o **valoare booleană.**

Valorile `0` și` 1` devin valoarea booleană `0 false`,` 1 true`.

Celelalte valori numerice devin valori booleene și sunt `false`.

În javascript avem opt valori despre care se presupune că sunt `falsy`:

| Valoare | Descriere | 
| :---:       |    :----:   |   
| `false` | Cuvântul cheie `false` | 
| `0` | Numărul zero | 
| `-0`| Numărul zero negativ | 
| `0n` | BigInt, când este utilizat ca boolean | 
| `""` |  Valoarea șirului gol | 
| `null` |  `null` - absența oricărei valori | 
| `undefined` | `undefined` - valoarea primitivă | 
| `NaN` |  	`NaN` - nu un număr | 

Toate celelalte valori sunt `true`, de exemplu o matrice goală `[]` și un obiect gol `{}` sunt adevărate.

Cu toate acestea, într-o buclă, dacă o construcție prezintă întotdeauna valoarea booleană, ea nu va trimite niciodată altceva decât o valoare booleană.

Este întotdeauna mai bine să fii **explicit** pentru a nu fi ambiguu.

[/slide]

[slide]

# Problem: Amazing Numbers

[vimeo-video]
[stream language="EN" videoId="489371747/54fbdf1eb2" default /]
[stream language="RO" videoId="489371747/54fbdf1eb2"  /]
[/video-vimeo]

[code-task title="Amazing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function amazingNumbers(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție care ca intrare va primi un **număr.**
 
Verificați și tipăriți dacă numărul este uimitor sau nu, în următorul format:

`{number} Amazing? {result}`

Un număr uimitor este unul care include **cifra 9** în suma cifrelor sale.

Exemple pentru numere uimitoare sunt: `1233 (1 + 2 + 3 + 3 = 9)`, `583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)`

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`1233`| 1233 Amazing? True |
|`999`|999 Amazing? False|

[/task-description]
[tests]
[test]
[input]
5454155
[/input]
[output]
5454155 Amazing? True
[/output]
[/test]
[test]
[input]
144
[/input]
[output]
144 Amazing? True
[/output]
[/test]
[test]
[input]
55555554
[/input]
[output]
55555554 Amazing? True
[/output]
[/test]
[test]
[input]
5554
[/input]
[output]
5554 Amazing? True
[/output]
[/test]
[test]
[input]
45645
[/input]
[output]
45645 Amazing? False
[/output]
[/test]
[test]
[input]
3671
[/input]
[output]
3671 Amazing? False
[/output]
[/test]
[test]
[input]
1231
[/input]
[output]
1231 Amazing? False
[/output]
[/test]
[test]
[input]
6123
[/input]
[output]
6123 Amazing? False
[/output]
[/test]
[test]
[input]
65451
[/input]
[output]
65451 Amazing? False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]



# Solution: Amazing Numbers
[vimeo-video]
[stream language="EN" videoId="489371745/0d75d93049" default /]
[stream language="RO" videoId="489371745/0d75d93049"  /]
[/video-vimeo]


[code-task title="Amazing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function amazingNumbers(input) {
  let num = input.toString();
  let sum = 0;
  for (let j = 0; j <= num.length - 1; j++) {
    sum += Number(num[j]);
  }
  if (sum.toString().includes('9')) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție care ca intrare va primi un **număr.**
 
Verificați și tipăriți dacă este uimitor sau nu în următorul format:

`{number} Amazing? {result}`

Un număr uimitor este unul care include **cifra 9** în suma cifrelor sale.

Exemple pentru numere uimitoare sunt: `1233 (1 + 2 + 3 + 3 = 9)`, `583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)`

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`1233`| 1233 Amazing? True |
|`999`|999 Amazing? False|

[/task-description]
[tests]
[test]
[input]
5454155
[/input]
[output]
5454155 Amazing? True
[/output]
[/test]
[test]
[input]
144
[/input]
[output]
144 Amazing? True
[/output]
[/test]
[test]
[input]
55555554
[/input]
[output]
55555554 Amazing? True
[/output]
[/test]
[test]
[input]
5554
[/input]
[output]
5554 Amazing? True
[/output]
[/test]
[test]
[input]
45645
[/input]
[output]
45645 Amazing? False
[/output]
[/test]
[test]
[input]
3671
[/input]
[output]
3671 Amazing? False
[/output]
[/test]
[test]
[input]
1231
[/input]
[output]
1231 Amazing? False
[/output]
[/test]
[test]
[input]
6123
[/input]
[output]
6123 Amazing? False
[/output]
[/test]
[test]
[input]
65451
[/input]
[output]
65451 Amazing? False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# The Typeof operator

[vimeo-video]
[stream language="EN" videoId="489371799/fe15836811" default /]
[stream language="RO" videoId="489371799/fe15836811"  /]
[/video-vimeo]

JavaScript în sine oferă un operator numit `typeof` pentru tot ceea ce funcționează într-un mod simplu.

`typeof` **returnează un șir**din ceea ce este un tip de date de valori, deci pentru un obiect, `object` care se returnează  și pentru un șir `string`.

Cu toate acestea, tipurile de date JavaScript și operatorul `typeof` nu sunt tocmai perfecte.

De exemplu, pentru matrice și `null`, este returnat un `obiect` . Pentru `NaN` și `Infinity` -un număr.

Exemple:

``` js live
console.log(typeof "");
console.log(typeof "John");
console.log(typeof "John Doe");
console.log(typeof 0);
console.log(typeof true);
console.log(typeof {Name: "Peter", Age: 3})
```

Putem folosi typeof în construcția `if`:

``` js live
let n = 5;
if (typeof(n) === 'number') {
    console.log(n);
}
```

[/slide]