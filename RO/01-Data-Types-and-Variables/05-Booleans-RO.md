# Valori Booleene

[slide hideTitle]

# Ce Este o Valoare Booleană?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-21-22-what-is-a-boolean-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Valorile booleene poartă numele lui [George Boole](https://en.wikipedia.org/wiki/George_Boole), un matematician englez.

Valorile booleene reprezintă unele **valori logice**.

Ele pot avea doar două valori: "**true**" sau "**false**".

Putem da această valoare ca **literal** sau o putem obține din rezultatul unei **expresii date**.

``` js live
let myBool = 10 > 9;
console.log(myBool);
```

Comparațiile booleene sunt cel mai adesea plasate în construcția "**if**", dar putem returna și o valoare booleană ca **rezultat dintr-o funcție.**

**Extrem de rar** scriem "**true**" sau "**false**" în mod explicit.

[/slide]
[slide hideTitle]

# Comparații și Condiții

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-23-comparisons-and-conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Exemple de operatori de comparație:

| **Operator** | **Descriere** | **Exemplu**   |
| :---:       |    :---:   |   :---:   |
| `==` | egal cu (fără tip) | `if (day == 'Monday')` |
| `===` | egal cu (cu tip) | `if (5 === 5)` |
| `!=`| nu este egal (fără tip) | `if (5 != 5)` |
| `!==` | nu este egal (cu tip) | `if (5 !== '5')` |
| `>` | mai mare decât | `if (salary > 9000)` |
| `<` | mai mic decât | `if (age < 18)` |
| `>=` | mai mare sau egal cu (fără tip) | `if (6 >= 6)` |
| `<=` | mai mic sau egal cu (fără tip) | `if(6 <= 6)` |


[/slide]

[slide hideTitle]
# True și False

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-24-25-boolean-comparisons-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Totul cu o "valoare" este "**true**":

``` js live
let number=1;

if (number) {
  console.log(number);
}
```

Totul fără o "valoare" este "**false**"

``` js live
let number;

if (number) {
  console.log(number);
} else {
  console.log('false');
}
```

În plus față de "**true**" și "**false**", JavaScript are "**truthy**" și "**falsy**".

Acestea sunt valori care **nu sunt** **true** sau **false**, dar când le transformăm într-o valoare booleană ele dau "**true**" sau "**false**".

În JavaScript este **slab tastat**, deci nu avem tipuri de variabile.

Acest lucru nu împiedică o expresie "**if**" care încearcă să compare variabile care stochează valori cu diferite tipuri.

În acest exemplu: 

``` js live
console.log(5 == '5');
```

trecem valori de diferite tipuri, folosind operatorul `==` sau `!=`.

În acest caz, interpretor va face așa-numitul **casting implicit**.

Acest lucru înseamnă că interpretorul implicit va **converti** o valoare în **alta**, ceea ce în majoritatea cazurilor înseamnă **convertirea într-un șir.**

Dând un**șir**și un**număr**, de exemplu, **numărul devine un șir** și interpretul compară șirurile.

Dacă folosim `===`, interpretorul **nu convertește numărul într-un șir**, deci **numărul cinci nu este același cu șirul cinci** și această expresie returnează `false`.

``` js live
console.log(5 === '5');
```

În ceea ce privește valorile "**truthy**" și "**falsy**", le putem folosi de exemplu într-o construcție "**if**" pentru a compara diferite tipuri de date:

``` js live
if (5 == true) {
  console.log('same');
} else {
  console.log('not');
}

```
Rezultatul acestei expresii va fi `not`, iar acesta este comportamentul așteptat.

Rezultatul acestei expresii:
``` js live
if (1 == true) {
  console.log('same');
} else {
  console.log('not');
}
```

este "**same**", deoarece interpretorul vede `1 == true` și transformă acest lucru într-o **valoare booleană.**

Valorile **0** și **1** devin valorile booleană **0 false** și **1 true**.

Celelalte valori numerice devin valori booleene și sunt "**false**".

În JavaScript avem opt valori care sunt admise ca fiind "**falsy**":

| **Valoare** | **Descriere** | 
| :---:       |    :----:   |   
| "**false**" | Cuvântul cheie "**false**" | 
| `0` | Numărul zero | 
| `-0`| Numărul zero negativ | 
| `0n` | BigInt, când este utilizat ca boolean | 
| `''` |  Valoarea șirului gol | 
| `null` |  `null` - absența oricărei valori | 
| `undefined` | `undefined` - valoarea primitivă | 
| `NaN` |  `NaN` - non-număr | 

Toate celelalte valori sunt "**true**", de exemplu o matrice goală `[]` și un obiect gol `{}` sunt adevărate.

Cu toate acestea, într-o buclă, dacă o construcție prezintă întotdeauna valoarea booleană, ea nu va trimite niciodată altceva decât o valoare booleană.

Este întotdeauna mai bine să fii **explicit** pentru a nu fi ambiguu.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Amazing Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-26-solution-solution-amazing-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Amazing Numbers" taskId="fund-js-data-types-and-variables-lab-amazing-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function amazingNumber(num){
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

Creați un program care va primi un **număr** ca intrare și care determină dacă numărul este **amazing** sau **nu** și imprimă rezultatul.
 
Un număr **amazing** este unul care include **cifra 9** în suma cifrelor sale.
Imprimați rezultatul în următorul format: 

"\{**number**\} **Amazing?** \{**result**\}"

Exemple pentru numere amazing sunt:

- 1233 (1 + 2 + 3 + 3 = 9)

- 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| amazingNumber(1233) | 1233 Amazing? True |
| amazingNumber(999) | 999 Amazing? False|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
amazingNumber(1233)
[/input]
[output]
1233 Amazing? True
[/output]
[/test]
[test open]
[input]
amazingNumber(999)
[/input]
[output]
999 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumber(144)
[/input]
[output]
144 Amazing? True
[/output]
[/test]
[test]
[input]
amazingNumber(55555554)
[/input]
[output]
55555554 Amazing? True
[/output]
[/test]
[test]
[input]
amazingNumber(5554)
[/input]
[output]
5554 Amazing? True
[/output]
[/test]
[test]
[input]
amazingNumber(45645)
[/input]
[output]
45645 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumber(3671)
[/input]
[output]
3671 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumber(1231)
[/input]
[output]
1231 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumber(6123)
[/input]
[output]
6123 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumber(65451)
[/input]
[output]
65451 Amazing? False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Operatorul Typeof 

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-28-29-Definition-of-the-typeof-operator-and-examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript în sine oferă un operator numit `typeof` pentru tot ceea ce funcționează într-un mod direct.

`Typeof` **returnează un șir** cu tipul de date al unei valori, deci pentru un obiect, se returnează `object` și pentru un șir, `string`.

Cu toate acestea, tipurile de date JavaScript și operatorul `typeof` nu sunt tocmai perfecte.

De exemplu, pentru matrice și `null`, este returnat un `obiect`. 

Pentru `NaN` și `Infinity` - `number`.

Exemple:

``` js live
console.log(typeof '');
console.log(typeof 'John');
console.log(typeof 'John Doe');
console.log(typeof 0);
console.log(typeof true);
console.log(typeof {Name: 'Peter', Age: 3})
```

Putem folosi typeof în construcția `if`:

``` js live
let n = 5;

if (typeof(n) === 'number') {
  console.log(n);
}
```

[/slide]
