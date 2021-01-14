
[slide]
# Console (Terminal)
În general, **system console** reprezintă un terminal de text, ceea ce înseamnă că acceptă și vizualizează doar **text**, fără elemente grafice ca butoane, meniuri, etc. 

Arată, de obicei, ca o fereastră colorată în negru ca aceasta.

[image assetsSrc="00.Console-example.png" /]

In majoritatea cazurilor,  **console** este o aplicație independentă în care putem scrie comenzi în consolă.

Este denumită **Command Prompt** in Windows și **Terminal** în Linux și Mac. 

Consola rulează aplicații pentru consolă.Ele citesc text din liniile de comandă și imprimă textul pe consolă.

Vom învăța să programăm, creând **console applications**.

VS Code are propria sa consolă pe care o vom folosi pentru a citi intrările și pentru a imprima ieșirile. 

[image assetsSrc="expressions-and-statements-console.png" /]
[/slide]

[slide]
# Variabilele de logare pe consolă

[vimeo-video]
[stream language="EN" videoId="486855670/d118990c90" default /]
[stream language="RO" videoId="486855670/d118990c90"  /]
[/video-vimeo]

Consola este utilă în scopul testării.

Metoda `console.log()` scrie un mesaj pe consolă:

```js live
let firstNum = 10;
let secondNum = 5;
console.log(firstNum + secondNum);
```

[/slide]

[slide]
# Citirea datelor de la utilizator

[vimeo-video]
[stream language="EN" videoId="486855737/188e2502e0" default /]
[stream language="RO" videoId="486855737/188e2502e0"  /]
[/video-vimeo]

In sistemele software, informațiile de la utilizatori vin din multe surse, ca de exemplu, User Interface(UI).

Veți avea o fereastră text care vă va spune `please type your username and type your password`, iar apoi veți putea da click pe un buton de login.

Este unul dintre modurile de a primi informații de la utilizatori.

Programele pot, de asemenea, să preia informațiile de la utilizatori(input) prin intermediul rest API sau ca parametri ai unei funcții. a
[/slide]

[slide]
# Funcții și parametri

[vimeo-video]
[stream language="EN" videoId="486855856/06a253a610" default /]
[stream language="RO" videoId="486855856/06a253a610"  /]
[/video-vimeo]

Folosiți funcțiile și invocați funcția cu ajutorul numelui său. 

``` js live
function printNum (number) {
   console.log(number);
}

//Invoke
printNum(5);
printNum(10);
```

Din setările inițiale,  **input** este **text** – o linie de text, citită de consolă.
- După ce citiți un text din consolă, puteți **parsa textul** la un număr prin `Number()`.

- Dacă parsarea la un număr nu s-a putut realiza, **each number** va apărea ca **text**, și vom vedea mesajul **cannot do** operații aritmetice.

# Exemplu: orașul natal
Haideți să scriem un program care îi solicită utilizatorului să introducă numele orașului natal și printează textul. `I am from {homeTown}!`.

```js live
function town(homeTown) {
  console.log(`I am from ${homeTown}!`);
}

town("Buccuresht");
```

În acest caz expresia `{homeTown}`  este înlocuită cu valoarea de intrare `homeTown`.

Dacă introducem **București**, ieșirea va fi astfel: `I am from București!` 

[/slide]

[slide]
# Transmiterea Paranetrilor Multipli 

[vimeo-video]
[stream language="EN" videoId="486855964/c2b23e3efb" default /]
[stream language="RO" videoId="486855964/c2b23e3efb"  /]
[/video-vimeo]

Puteți transmite **parametri multipli pentru o funcție.** 

Avem o funcție care **primește doi parametri:** `firstNum` și `secondNum` și imprimă rezultatul sumei numerelor pe consolă.

Aici, `firstNum` și `secondNum` există doar **în corpul funcției.**

``` js live
function printSum(firstNum, secondNum) {
   console.log(firstNum + secondNum);
}

printSum(5, 10);
```

Dacă încercăm să accesăm firstNum în afara corpului funcției, vom obține o eroare.

``` js live
function printSum(firstNum, secondNum) {
   console.log(firstNum + secondNum);
}

printSum(5, 10);
console.log(firstNum);
```
[/diapozitiv]

[diapozitiv]
# Formatarea ieșirii

[vimeo-video]
[stream language="EN" videoId="486856070/5392c79701" default /]
[stream language="RO" videoId="486856070/5392c79701"  /]
[/video-vimeo]

JavaScript ne permite să formatăm numerele ca virgule mobile. 

In exemplu următor vom formata numărul la două cifre după virgula de zecimale, folosind metoda `toFixed(2)` :

```js
function calculateSquareArea(input) {
  let a = Number(input);
  let area = a * a;
  console.log(area.toFixed(2));
}
```

# Folosirea interpolării șirului Dollar String
Putem formata text în JS folosind, de asemenea, următoarea sintaxa $ syntax. Aceasta ne oferă  o metodă simplificată de formatare a textului.

Încadrată de simbolurile back-tick (**\` \`**), în loc să fie scris între virgule sau ghilimele. 

Putem folosi simbolul dollarului și acolade

 (`${expression}`):
```js
let name = "John"; 
console.log(`Hi, ${name}`);
```
Prefixul `$` înaintea unui șir în JS ne ajută să facem așa-numita **string interpolation**: înlocuirea tuturor expresiilor care sunt plasate între acolade  `{ }` în text, cu valorile lor.

[/diapozitiv]

[diapozitiv]
# Citirea numerelor

[vimeo-video]
[stream language="EN" videoId="486856186/d812421fbc" default /]
[stream language="RO" videoId="486856186/d812421fbc"  /]
[/video-vimeo]

Pentru a putea citi un **number** din consolă, trebuie să folosim **declare a variable** și să folosim comanda standard **reading a text line** din consola de sistem și după aceea,**convert the text line into a number** folosind `Number(text)`:

```js
function example(input){
  let num = Number(input);
}
```
Linia de sus in JS code **reads a number**, este prima linie de pe consolă.

Dacă vrem să alocăm o valoare non-numerică acestei variabile, de exemplu `Hello`, vom primi rezultatul`NaN` care este acronimul de la **Not a number**. 

# Exemplu: Calcularea ariei unui pătrat
Acest cod ne arată cum putem calcula aria unui pătrat în funcție de lungimea laturii acestuia: 

```js
function example(input){
    let a = Number(input);
    let area = a * a;
    console.log(`Square area = ${area}`);
  }
```

Aici, vedem cum funcționează programul dacă avem un pătrat cu latura egală cu 3:

[image assetsSrc="expressions-and-statements-example.png" /]
[/diapozitiv]


[diapozitiv]
# Problemă: Greeting
[code-task title="Greeting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sayHello (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Enunț
Scrieți o funcție care să citească datele de intrare din consolă: numele și apoi imprimați  `Hello, {name}`, unde `{name}` este introdus de utilizator.  

## Exemplu
| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter |

[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Soluție: Greeting

[vimeo-video]
[stream language="EN" videoId="486856341/87210226f4" default /]
[stream language="RO" videoId="486856341/87210226f4"  /]
[/video-vimeo]

[code-task title="Greeting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sayHello (input) {
  let user = input.shift();
  console.log(`Hello, ${user}`);
}
```
[/code-editor]
[task-description]

# Enunț
Scrieți o funcție care citește datele furnizate de utilizator din consolă: numele și apoi, imprimați. 

`Hello, {name}`, unde `{name}` sunt datele furnizate de utilizator.   

## Exemplu
| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter |

[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

