// sectionId: "Javascript::Programming-Basics::Expressions-And-Statements::Console"

[slide hideTitle]
# Consolă (Terminal)

În general, **system console** reprezintă un terminal de text, ceea ce înseamnă că acceptă și vizualizează doar **text**, fără elemente grafice ca butoane, meniuri, etc. 

Arată, de obicei, ca o fereastră colorată în negru, ca aceasta:

[image assetsSrc="00.Console-example.png" /]

In majoritatea cazurilor,  **consola** este o aplicație independentă în care putem scrie comenzi.

Este denumită **Command Prompt** în Windows și **Terminal** în Linux și Mac. 

Consola rulează aplicații pentru consolă. Ele citesc text din linia de comandă și imprimă textul pe consolă.

Vom învăța să programăm, creând **aplicații de consolă**.

VS Code are propria sa consolă pe care o vom folosi pentru a citi intrările și pentru a imprima ieșirile. 

[image assetsSrc="expressions-and-statements-console.png" /]
[/slide]

[slide hideTitle]

# Variabilele de Logare pe Consolă

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-16-17-Console-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Consola este utilă în scopul testării.

Metoda `console.log()` scrie un mesaj pe consolă:

```js live
let firstNum = 10;
let secondNum = 5;
console.log(firstNum + secondNum);
```

[/slide]

[slide hideTitle]
# Citirea Datelor de la Utilizator

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-18-Reading-user-input-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În sistemele software, informațiile de la utilizatori vin din multe surse, ca de exemplu, User Interface (UI).

Veți avea o fereastră text care vă va spune `please type your username and type your password`, iar apoi veți putea da click pe un buton de login.

Acesta este unul dintre modurile de a primi informații de la utilizatori.

Programele pot, de asemenea, să preia informațiile de la utilizatori (input) prin intermediul REST API sau ca parametri ai unei funcții.
[/slide]

[slide hideTitle]
# Funcții și Parametri

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-19-Functions-and-Parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosiți funcțiile și invocați funcția cu ajutorul numelui său. 

``` js live
function printNum (number) {
   console.log(number);
}

//Invoke
printNum(5);
printNum(10);
```

Din setările inițiale,  **intrarea** este **text** – o linie de text, citită de consolă.
- După ce citiți un text de pe consolă, puteți **parsa textul** la un număr prin `Number()`.

- Dacă parsarea la un număr nu s-a putut realiza, **fiecare număr** va apărea ca **text**, și **nu vom putea** efectua operații aritmetice cu acesta.

## Exemplu: Home Town
Haideți să scriem un program care îi solicită utilizatorului să introducă numele orașului natal și imprimă textul `I am from {homeTown}!`.

```js live
function town(homeTown) {
  console.log(`I am from ${homeTown}!`);
}

town("București");
```

În acest caz expresia `{homeTown}`  este înlocuită cu valoarea intrării `homeTown`.

Dacă introducem **București**, ieșirea va fi astfel: `I am from București!` 

[/slide]

[slide hideTitle]
# Transmiterea Parametrilor Multipli 

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-20-Passing-Multiple-Parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți transmite **parametri multipli unei funcții.** 

Avem o funcție care **primește doi parametri:** `firstNum` și `secondNum` și imprimă rezultatul sumei numerelor pe consolă.

Aici, `firstNum` și `secondNum` există doar **în corpul funcției.**


``` js live
function printSum(firstNum, secondNum) {
   console.log(firstNum + secondNum);
}

printSum(5, 10);
```

Dacă încercăm să accesăm `firstNum` în afara corpului funcției, vom obține o eroare.

``` js live
function printSum(firstNum, secondNum) {
   console.log(firstNum + secondNum);
}

printSum(5, 10);
console.log(firstNum);
```
[/slide]

[slide hideTitle]
# Formatarea Ieșirii

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-21-21-demo-Formatting-Outputs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript ne permite să formatăm numerele în virgulă mobilă. 

În exemplul următor vom formata numărul la două cifre după punctul zecimal, folosind metoda `toFixed(2)` :

```js
function calculateSquareArea(input) {
  let a = Number(input);
  let area = a * a;
  console.log(area.toFixed(2));
}
```

## Folosirea Interpolării Dollar String
Putem formata text în JS folosind, de asemenea, următoarea sintaxă $. Aceasta ne oferă o metodă simplificată de formatare a textului.

Este încadrat de simbolurile back-tick (**\` \`**), în loc să fie scris între virgule sau ghilimele. 

Putem folosi simbolul dolarului și acolade (`${expression}`):
```js
let name = 'John'; 
console.log(`Hi, ${name}`);
```
Prefixul `$` înaintea unui șir în JS ne ajută să facem așa-numita **interpolare a șirului**: înlocuirea tuturor expresiilor care sunt plasate între acolade  `{ }` în text, cu valorile lor.

[/slide]

[slide hideTitle]
# Citirea Numerelor

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-22-Parsing-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a putea citi un **număr** de pe consolă, trebuie să **declarăm o variabilă** și să folosim comanda standard **de citire a unei linii de text** de pe consola de sistem și după aceea, **să convertim acea linie de text într-un număr**, folosind `Number(text)`:

```js live
function example(input){
  let num = Number(input);

  console.log(num);
}

example('25');
```
Linia de sus a codului JS **citește un număr** de pe prima linie de pe consolă.

Dacă vrem să alocăm o valoare non-numerică acestei variabile, de exemplu `Hello`, vom primi rezultatul `NaN` care este acronimul de la **Not a number**. 

## Exemplu: Calculating a Square Area
Acest cod ne arată cum putem calcula aria unui pătrat în funcție de lungimea laturii acestuia: 

```js live
function example(input){
    let a = Number(input);
    let area = a * a;
    console.log(`Square area = ${area}`);
  }

example('3');
```

Aici, vedem cum funcționează programul dacă avem un pătrat cu latura egală cu 3:

[image assetsSrc="expressions-and-statements-example.png" /]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Greeting

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-23-Problem-Greeting-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Greeting" taskId="pb-js-expression-and-statements-Greeting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sayHello (name) {
   // Write your code here
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
Creați un program care să citească numele utilizatorului din consolă și apoi imprimă  "**Hello,** \{**name**\}", unde \{**name**\} este introdus de utilizator.  

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| sayHello('Peter') | Hello, Peter |
| sayHello('John') | Hello, John |

[/task-description]
[tests]
[test open]
[input]
sayHello('Peter')
[/input]
[output]
Hello, Peter
[/output]
[/test]
[test open]
[input]
sayHello('John')
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
sayHello('Marie')
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
sayHello('asd')
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
sayHello('George')
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

