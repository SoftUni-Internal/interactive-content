# Declararea și invocarea funcțiilor

[slide]
# Declararea unei funcții

[vimeo-video]
[stream language="EN" videoId="489373256/dbc8412983" default /]
[stream language="RO" videoId="489373256/dbc8412983"  /]
[/video-vimeo]

O funcție este definită, utilizând cuvântul cheie "funcție" urmat de **numele funcției** și un set de **paranteze** pentru a păstra parametrii sau valorile care trebuie primite de funcție.

Funcțiile pot fi declarate în două moduri:

- **Declarație de funcție** (mod recomandat)

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

## Funcții cu parametri

**Argumentele** pot fi transmise funcției prin încadrarea valorilor între paranteze după numele funcției.

Argumentele pot fi trimise ca o listă de **argumente** separate prin virgule, în timpul apelării funcției.

Argumentele primite ca **parametri** de către funcția primitoare sunt stocate în variabile locale.

De îndată ce funcția se termină, variabila dispare
```js
function printText(text){
  console.log(text);
}
```

[/slide]

[slide]
# Invocarea unei funcții

[vimeo-video]
[stream language="EN" videoId="489373258/bc07c2ad58" default /]
[stream language="RO" videoId="489373258/bc07c2ad58"  /]
[/video-vimeo]

O funcție nu este executată înainte de a fi invocată.

O funcție poate fi invocată de **oriunde în domeniul**, unde este definită.

Puteți declara o funcție astfel:

```js live
function hLine() {
  console.log("----------");
}

hLine();
```

## Demo

[vimeo-video]
[stream language="EN" videoId="489373310/980f876469" default /]
[stream language="RO" videoId="489373310/980f876469"  /]
[/video-vimeo]


[/slide]

[slide]
# Invocarea unei funcții dintr-o altă funcție

[vimeo-video]
[stream language="EN" videoId="489373314/21401d79a4" default /]
[stream language="RO" videoId="489373314/21401d79a4"  /]
[/video-vimeo]


De asemenea, putem invoca o **funcție** din **altă funcție:**

```js
function printDocument() {
  printLabel();
  printContent();
}
```
[/slide]

[slide]
# Recursivitate

[vimeo-video]
[stream language="EN" videoId="489373783/9258f21dc4" default /]
[stream language="RO" videoId="489373783/9258f21dc4"  /]
[/video-vimeo]

De asemenea, putem invoca o **funcție** **în propriul său corp (recursivitate):**

``` js
function countDown(x) {
  console.log(x);
  if (x > 0) { countDown(x - 1); }
}
```

Recutrsivitatea  este proprietatea  **funcției de a se autoapela**.

[/slide]

[slide]
# Funcțiile și parametrii

[vimeo-video]
[stream language="EN" videoId="489373376/28ddf53572" default /]
[stream language="RO" videoId="489373376/28ddf53572"  /]
[/video-vimeo]
 
Putem avea o funcție **cu sau fără** parametri.

*Parametrii** funcției se comportă ca variabile locale din **corpul funcției.**

Dacă o funcție nu primește argumente, atunci când este invocată, rezultatul **este întotdeauna același**(cu excepția cazului în care citește date din exterior): 

``` js live
function printHeader() {
  console.log('~~~-   {@}   -~~~');
  console.log('~- Certificate -~');
  console.log('~~~-  ~---~  -~~~');
}
printHeader();
```
[/slide]
[slide]

## Funcții cu parametrii

[vimeo-video]
[stream language="EN" videoId="489373715/065a22dd97" default /]
[stream language="RO" videoId="489373715/065a22dd97"  /]
[/video-vimeo]

O funcție poate primi **orice număr și tip de argumente** atunci când este invocată:

În acest exemplu trecem **doi parametri** ca argument:

```js live
function multiply(a, b) {
  console.log(a*b);
}
multiply(5, 7);
```

În acest exemplu trecem **o matrice** ca argument:

``` js live
function printName(nameArr) {
  console.log(nameArr[0] + ' ' + nameArr[1]);
}

printName(['John', 'Smith']); 
```

Putem transmite **mai puține sau mai multe** argumente în timp ce invocăm o funcție.

Dacă trecem mai puține argumente, restul parametrilor vor fi **nedefiniți.**

Dacă dați mai multe argumente, atunci **argumentele suplimentare vor fi ignorate.**

[/slide]

[slide]
# Problem: Grades

[vimeo-video]
[stream language="EN" videoId="489373386/94e32c3892" default /]
[stream language="RO" videoId="489373386/94e32c3892"  /]
[/video-vimeo]


[code-task title="Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grades(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Scrieți o funcție care primește o notă între `2.00` și `6.00` și imprimă nota corespunzătoare în cuvinte

|**Grad**|**Rezultat**|
| --- | --- |
|`2.00 - 2.99` | `Fail` |
|`3.00 - 3.49` | `Poor` |
|`3.50 - 4.49` | `Good` |
|`4.50 - 5.49` | `Very good` |
|`5.50 - 6.00` | `Excellent` |


## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|`3.33` | Poor |
|`4.50` | Very good |
|`2.99` | Fail |

[/task-description]
[tests]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Grades

[vimeo-video]
[stream language="EN" videoId="489373420/6a36318ce6" default /]
[stream language="RO" videoId="489373420/6a36318ce6"  /]
[/video-vimeo]


[code-task title="Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grades(grade){
  if (grade >= 2.0 && grade < 3.0) {
        console.log('Fail');
    } else if (grade >= 3.0 && grade < 3.5) {
        console.log('Poor');
    } else if (grade >= 3.5 && grade < 4.5) {
        console.log('Good');
    } else if (grade >= 4.5 && grade < 5.5) {
        console.log('Very good');
    } else if (grade >= 5.5 && grade <= 6.0) {
        console.log('Excellent');
    }
}
```
[/code-editor]
[task-description]
Scrieți o funcție care primește o notă între `2.00` și `6.00` și imprimă nota corespunzătoare în cuvinte

|**Grad**|**Rezultat**|
| --- | --- |
|`2.00 - 2.99` | `Fail` |
|`3.00 - 3.49` | `Poor` |
|`3.50 - 4.49` | `Good` |
|`4.50 - 5.49` | `Very good` |
|`5.50 - 6.00` | `Excellent` |


## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|`3.33` | Poor |
|`4.50` | Very good |
|`2.99` | Fail |

[/task-description]
[tests]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Math Power

[vimeo-video]
[stream language="EN" videoId="489373435/cb25361ef7" default /]
[stream language="RO" videoId="489373435/cb25361ef7"  /]
[/video-vimeo]


[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function mathPower(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Scrieți o funcție care**calculează**și returnează valoarea unui număr **ridicat la o putere dată:**

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['2', '8']` | 256 |
|`['3', '4']` | 81 |

[/task-description]
[tests]
[test]
[input]
7
2
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
123
3
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
5.5
3
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
21
10
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
10
7
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
12
3
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
2
3
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Math Power

[vimeo-video]
[stream language="EN" videoId="489373438/64f923b0a0" default /]
[stream language="RO" videoId="489373438/64f923b0a0"  /]
[/video-vimeo]


[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function mathPower(input){
  let num = Number(input[0]);
  let pow = Number(input[1]);

  let result = Math.pow(num,pow);
  console.log(result);
}
```
[/code-editor]
[task-description]
Scrieți o funcție care**calculează**și returnează valoarea unui număr **ridicat la o putere dată:**

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['2', '8']` | 256 |
|`['3', '4']` | 81 |

[/task-description]
[tests]
[test]
[input]
7
2
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
123
3
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
5.5
3
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
21
10
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
10
7
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
12
3
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
2
3
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]