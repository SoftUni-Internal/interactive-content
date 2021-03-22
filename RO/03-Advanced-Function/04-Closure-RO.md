# Închiderea

[slide hideTitle]

# Ce Este Închiderea?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-20-21-closure-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Într-o **closure**, un **inner function scope** include parametrul **outer (enclosing) function**.

## Lanțul de Scop

O **closure** are trei lanțuri de scop :

- Аre acces la **its own scope** - variabila incastrată de corpul propriei funcții
  
- Аre access la variabilele **outer function's** 

- Аre acces la variabilele **global** 

Să analizăm un exemplu simplu :

```js
function outerFunc() {
   var numTwo = 3;

   function innerFunc() {
         var numOne = 5; 
         console.log(a + b);
    }
   return innerFunc;
}
```

Exemplul de mai sus are două funcții: 

- `outerFunc()` funcția care are o variabilă b și returnează funcția `innerFunc()`

- funcția `innerFunc()` care are o variabilă numită `a` și accesează o variabilă externă - `b` în interiorul corpului funcției 

Când o funcție **finishes execution**, orice variabile care au fost definite **inside** scopul funcției vor **nu mai există**

[/slide]


[slide hideTitle]

# Funcțiile care Returnează Funcții

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-22-functions-returning-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **state** este conservată în exteriorul funcției (closure):

```js live
const func = (function () {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();

func(); //1
func(); //2
func(); //3
```

De fiecare dată când apelăm funcția `func()` cronometrul va fi ieșirea către consolă care va fi incrementată cu unu. 


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Command Processor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-24-solution-command-processor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Command Processor" taskId="js-advanced-advanced-functions-Command-Processor"  executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function commandProcesso() {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Enunț

Scrieți o funcție care păstrează un șir **inside its context** și poate executa diferite **commands** care modifică sau imprimă șirul în consolă 

- `append(string)` - implementează un **şir** dat la finalul unui șir intern

- `removeStart(n)` - **elimina** **primul n** caractere din șir, **n** este un număr întreg

- `removeEnd(n)` - **elimina** **ultimul n** caractere din șir, **n** fiind un număr întreg

- `print` - **imprimare** șirul stocat în **console**

## Input

Urmăriți exemplul de mai jos pentru a vedea cum va fi executat codul vostru 

## Output

Atunci când primiți comanda **print**, ieșirea va fi **printed** pe consolă.


## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| `let firstZeroTest = solution();` | loa | 
|  |  |
| `firstZeroTest.append('hello');` | |
| `firstZeroTest.append('again');` | |
| `firstZeroTest.removeStart(3);` | |
| `firstZeroTest.removeEnd(4);` | |

|**Intrare**|**Ieșire** |
| --- | --- |
| `let secondZeroTest = solution();` | 34 | 
|  |  |
| `firstZeroTest.append('123');` | |
| `firstZeroTest.append('45');` | |
| `firstZeroTest.removeStart(2);` | |
| `firstZeroTest.removeEnd(1);` | |
| `firstZeroTest.print();` | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
// Acquire console
let log = [];
let oldcon = console.log;
console.log = (string) => log.push(string);

let firstZero = result();
let secondZero = result();

firstZero.append('247');
firstZero.append('86');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('world');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();

// Restore the console
console.log = oldcon;

assert.equal(log[0], '78', 'Printed wrong value.');
assert.equal(log[1], 'low', 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
/// Acquire console
let log = [];
let oldcon = console.log;
console.log = (string) => log.push(string);

let firstZero = result();
let secondZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();

// Restore the console
console.log = oldcon;

assert.equal(log[0], '34', 'Printed wrong value.');
assert.equal(log[1], 'loa', 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]