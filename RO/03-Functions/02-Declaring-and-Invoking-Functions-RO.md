# Declararea și Invocarea Funcțiilor

[slide hideTitle]
# Declararea Unei Funcții

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-6-7-declaring-a-function-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O funcție este definită utilizând cuvântul cheie `function` urmat de **numele funcției** și un set de **paranteze** care conțin parametrii sau valorile care trebuie primite de funcție.

Funcțiile pot fi declarate în două moduri:

- **Declararea funcției** (mod recomandat)

``` js
function printText(text){
  console.log(text);
}
```

- **Expresia funcției** (utilă în programarea funcțională)

```js
let printText = function(text){
  console.log(text);
}
```

## Funcții cu Parametri

**Argumentele** pot fi transmise funcției prin încadrarea valorilor între paranteze după numele funcției.

Argumentele pot fi trimise ca o listă de **argumente** separate prin virgule, în timpul apelării funcției.

Argumentele sunt primite ca **parametri** de către funcție și sunt stocate în variabile locale.

De îndată ce funcția se termină, variabila dispare.
```js
function printText(text){
  console.log(text);
}
```

[/slide]

[slide hideTitle]
# Invocarea Unei Funcții

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-8-9-invoking-a-function-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O funcție nu este executată înainte de a fi invocată.

O funcție poate fi invocată **oriunde în cadrul domeniului** în care este definită.

Putem declara o funcție, iar apoi putem invoca (apela) funcția cu ajutorul numelui său:

```js live
function hLine() {
  console.log('----------');
}

hLine();
```

[/slide]

[slide hideTitle]
# Invocarea Unei Funcții Dintr-o Altă Funcție

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-21-22-nested-functions-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

De asemenea, putem invoca o **funcție** din **altă funcție:**

```js
function printDocument() {
  printLabel();
  printContent();
}
```
[/slide]

[slide hideTitle]
# Recursivitate

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-recursion-and-example-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

De asemenea, putem invoca o **funcție** **în propriul său corp (recursivitate):**

``` js
function countDown(x) {
  console.log(x);

  if (x > 0) {
    countDown(x - 1);
  }
}
```
**Recursivitatea** este procesul în care o funcție **se invocă pe sine**.

Astfel de funcții se numesc **recursive**.

Funcțiile recursive adecvate **opresc** propria invocare atunci când se obține **rezultatul** dorit.

Dacă **nu există o astfel de condiție**, funcția va fi apelată **la nesfârșit**.

[/slide]

[slide hideTitle]
# Funcții Cu și Fără Parametri 

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-11-12-functions-with-and-without-parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem avea o funcție **cu sau fără** parametri.

**Parametrii** funcției se comportă ca variabile locale în **corpul funcției.**

## Funcții Fără Parametri 

Dacă o funcție nu primește argumente, atunci când este invocată, rezultatul **este întotdeauna același** (cu excepția cazului în care citește date din exterior): 

``` js live
function printHeader() {
  console.log('~~~-   {@}   -~~~');
  console.log('~- Certificate -~');
  console.log('~~~-  ~---~  -~~~');
}
printHeader();
```

## Funcții cu Parametri

O funcție poate primi **orice număr și tip de argumente** atunci când este invocată.

În acest exemplu transmitem **doi parametri** ca argument:

```js live
function add(a, b) {
  console.log(a + b);
}
add(2, 5);
```

În acest exemplu transmitem **o matrice** ca argument:

``` js live
function printName(nameArr) {
  console.log(nameArr[0] + ' ' + nameArr[1]);
}

printName(['John', 'Smith']); 
```

[/slide]

[slide hideTitle]

# Funcții cu Parametri: Exemplu
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-functions-with-parameters-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
function multiply(a, b) {
  console.log(a * b);
}
multiply(5, 7);
```

Putem transmite **mai multe sau mai puține** argumente decât este așteptat atunci când invocăm o funcție.

```js live
function multiply(a, b) {
  console.log(a * b);
}
multiply(5); // NaN
```

Dacă transmitem mai puține argumente, restul parametrilor vor fi transmiși funcției ca fiind **nedefiniți.**

Dacă transmitem mai multe argumente, atunci **argumentele suplimentare vor fi ignorate.**

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Grades

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-14-solution-grades-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Grades" taskId="fundamentals-js-functions-lab-Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grade(gradeAsNum){
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

Scrieți o funcție care primește o notă între "**2.00**" și "**6.00**" și imprimă nota corespunzătoare în cuvinte.

|**Notă**|**Rezultat**|
| --- | --- |
| "2.00 - 2.99" | "Fail" |
| "3.00 - 3.49" | "Poor" |
| "3.50 - 4.49" | "Good" |
| "4.50 - 5.49" | "Very good" |
| "5.50 - 6.00" | "Excellent" |


## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| grade(3.33) | Poor |
| grade(4.50) | Very good |
| grade(2.99) | Fail |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
grade(3.33)
[/input]
[output]
Poor
[/output]
[/test]
[test open]
[input]
grade(4.50)
[/input]
[output]
Very good
[/output]
[/test]
[test open]
[input]
grade(2.99)
[/input]
[output]
Fail
[/output]
[/test]
[test]
[input]
grade(4.49)
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
grade(5.50)
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
grade(4.60)
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
grade(3.20)
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
grade(2.00)
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Math Power

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-16-solution-math-power-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Power" taskId="fundamentals-js-functions-lab-Math-Power"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function power(num, pow){
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

Scrieți o funcție care **calculează** și returnează valoarea unui număr **ridicat la o putere dată.**

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| power(2, 8) | 256 |
| power(3, 4) | 81 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
power(2, 8)
[/input]
[output]
256
[/output]
[/test]
[test open]
[input]
power(3, 4)
[/input]
[output]
81
[/output]
[/test]
[test]
[input]
power(7, 2)
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
power(123, 3)
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
power(5.5, 3)
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
power(21, 10)
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
power(10, 7)
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
power(12, 3)
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
power(2, 3)
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
power(3, 2)
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
power(4, 4)
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
power(4, 4)
[/input]
[output]
256
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
