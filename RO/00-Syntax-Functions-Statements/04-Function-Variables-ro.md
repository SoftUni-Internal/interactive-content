# Variabile de funcție

[slide hideTitle]

# Funcții de prima clasă

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-29-first-class-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile din JavaScript pot fi utilizate ca variabile pentru alte funcții.

Cu alte cuvinte, funcțiile care sunt transmise către alte funcții ca argumente sau returnate ca rezultat al unei funcții, se numesc funcții **de primă clasă**.

Trecerea unei funcții la o altă funcție ca argument:

```js live
function calculateResult(num1, num2) {
  return num1 + num2;
}
function printResult(calculate) {
  console.log(calculateResult(52, 300));
}
printResult(calculateResult);
```

O funcție pe care O funcție pe care o trecem la o altă funcție se numește **funcție de apel invers**.


Returnarea funcției:

```js live
function teleport() {
  return function() {
    console.log("Teleporting to unknown location.")
  }
}
const action = teleport();
action();
```

O funcție care returnează o altă funcție, ca în exemplul de mai sus, se numește **Funcție de ordin superior**.

[/slide]

[slide hideTitle]

# Funcții imbricate

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-30-nested-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript permite imbricare  funcțiilor și funcțiile interioare pot accesa variabile din funcția lor părinte.

Funcțiile care sunt imbricate în interiorul altei funcții nu vor fi accesibile în afara funcției respective.

Pentru a înțelege mai bine acest lucru, rețineți că JavaScript tratează funcțiile ca fiind variabile, astfel încât crearea unei funcții în interiorul altei funcții își schimbă domeniul de aplicare la fel cum s-ar schimba domeniul de aplicare al unei variabile.


```js live
function joinWords(word1, word2) {
  function checkLength(word1, word2) {
    return word1.length + word2.length;
  }
  return `New word: "${word1.concat(word2)}",
  length: ${checkLength(word1,word2)}`;
}
console.log(joinWords('one', 'two'));
```

În acest exemplu, `joinWords()` este **funcția exterioară** sau funcția părinte, iar `checkLength()` este **funcția interioară** sau funția copil.

Tfuncția copil are acces la argumentele transmise funcției părinte (word1, word2), dar scopul său începe și se termină în funcția părinte, nu va fi accesibilă în afara acesteia.

Încercarea de a accesa funcția interioară în afara sferei părintelui are ca rezultat **Reference Error**:

```js live
function joinWords(word1, word2) {
  function checkLength(word1, word2) {
    return word1.length + word2.length;
  }
  return `New word: "${word1.concat(word2)}",
  length: ${checkLength(word1,word2)}`;
}
checkLength('words', 'like');
```
[/slide]

[slide hideTitle]

# Hoisting

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-31-hoisting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Hoisting-ul în viața reală este actul de a ridica ceva.

În mod similar, ridicarea în JavaScript este un mecanism care asigură că o variabilă sau o funcție poate fi utilizată înainte de declarare.

Acest lucru nu înseamnă că nu trebuie să-l declarați, dar poate fi declarat pe o linie care este mai jos decât și JavaScript îl va "trage" în partea de sus pentru a putea fi folosit.

Avantajul ridicării este că putem folosi funcții oriunde în cod și nu doar sub linia unde sunt declarate.


[/slide]


[slide hideTitle]

# Ridicarea variabilelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-32-hoisting-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Declarațiile variabilelor care folosesc cuvântul-cheie  `var` sunt ridicate:

```js live
x = 10;
console.log(x);
var a;
```

Ridicarea se aplică numai declarațiilor - **atribuirile nu sunt ridicate**:

```js live
console.log(num); 
num = 6;
```

Acest exemplu returnează `undefined` deoarece doar declarația este ridicată în partea de sus, iar  **atribuirea nu este**

```js live
console.log(num); 
var num;
num = 6;
```

Doar variabilele cu  `var` pot fi ridicate (`let` și `const` nu pot).

Acesta este motivul din care exemplul de mai jos rezultă în  **Reference Error**:

```js live
length= 354;
console.log(length); 
const length;
```

Ridicarea nu schimbă domeniul  variabilelor și funcțiilor.

Dacă o variabilă este declarată în cadrul unei funcții, aceasta va fi ridicată doar în partea de sus a acelei funcții și nu va fi accesibilă în afara funcției.

Acest lucru va funcționa:

```js live
function speak() {
  words = 'I was hoisted!';
  console.log(words);
  var words;
}
speak();
```

[/slide]

[slide hideTitle]

# Ridicarea funcțiilor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-33-hoisting-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile pot, de asemenea, a fi apelate înainte de a fi declarate.

```js live
walk()
function walk() {
  console.log("Walking briskly...");
}
```

Totuși, **ridicarea funcționează doar pentru declararea funcțiilor** și  **nu va funcționa** dacă scrieți o funcție utilizând **o expresie de funcție**.

```js live
walk()
let walk = function() {
  console.log("Walking briskly...");
}
```
Codul de mai sus rezultă în **ReferenceError**.

```js live
walk()
var walk = function() {
  console.log("Walking briskly...");
}
```

Acest cod de asemenea nu va funcționa și va rezulta în  **TypeError** deoarece funcția **walk** nu a fost ridicată și nu poate fi invocată.

[/slide]

[slide hideTitle]
# Problemă: Aggregate Elements
[code-task title="Aggregate Elements" taskId="js-syntax-functions-statements-aggregateelements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function aggregateElements(input) {
    //Write your code here
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

## Descriere

Creați un program care efectuează diferite operațiuni pe o serie de elemente. Implementați următoarele operațiuni:

- **Sum (a)** - calculează suma tuturor elementelor din matricea de intrare

- **Sum (1/a)** - calculează suma valorilor inverse (1/a) ale tuturor elementelor din matrice

- **Concat (a)** - concatenează reprezentările șirurilor tuturor elementelor din matrice

**Intrarea** vine ca o serie de elemente numerice.

**Ieșirea** ar trebui tipărită pe consolă pe o nouă linie pentru fiecare dintre operații.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| aggregate([1, 2, 3]) | 6 |
| | 1.8333 |
| | 123 |

| **Intrare** | **Ieșire** |
| --- | --- |
| aggregate([2, 4, 8, 16]) | 30 |
|  | 0.9375 |
|  | 24816 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
aggregate([1, 2, 3])
[/input]
[output]
6
1.8333333333333333
123
[/output]
[/test]
[test open]
[input]
aggregate([2, 4, 8, 16])
[/input]
[output]
30
0.9375
24816
[/output]
[/test]
[test]
[input]
aggregate([1, -1, 1, -1, 1, -1])
[/input]
[output]
0
0
1-11-11-1
[/output]
[/test]
[test]
[input]
aggregate([2, 0.5, 0.25, 0.125])
[/input]
[output]
2.875
14.5
20.50.250.125
[/output]
[/test]
[test]
[input]
aggregate([2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 8, 6, 14, 22, 186])
[/input]
[output]
272
4.913926127635806
222222444444861422186
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
