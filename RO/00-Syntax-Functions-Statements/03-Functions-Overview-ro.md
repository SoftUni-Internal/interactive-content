# Prezentare generală a funcțiilor

[slide hideTitle]

# Funcții

Funcțiile sunt denumite blocuri de cod. 

Acestea pot fi declarate cu un nume `function functionName()` , dar putem scruie și funcții anonime care pot fi stacate chiar și în variabile.

Avantajul principal al utilizării funcțiilor este că scrieți codul o singură dată și apoi îl utilizați ori de câte ori aveți nevoie, fără a fi nevoie să rescrieți aceleași linii din nou și din nou.

Funcțiile ajută la organizarea codului în bucăți reutilizabile, ușor de înțeles și ușor de depanat.

Iată sintaxa unei funcții:

```js
function functionName([param1, param2, paramN]){  
 //code  
}  
```

Numele funcțiilor trebuie scrise în **camelCase**.

Puteți avea funcții cu zero, unul sau mai mulți parametri ( argumente).

Prin utilizarea parametrilor, funcția dvs. poate utiliza diferite date de intrare, poate prelucra aceste date și poate genera un rezultat.

```js live
function sayMyName(name) {
  console.log("Your name is: ", name);
}
sayMyName("Akeem");
```

Functions can also return a result.

```js live
function convertInches(inches) {
  return inches * 2.54;
}
let inches = 10;
console.log(convertInches(inches));
```

[/slide]

[slide hideTitle]

# Declararea funcțiilor

Funcțiile pot fi declarate în câteva moduri.

- Declararea funcțiilor:

```js
function fly() {
  console.log("I'm flying!");
}
```
Acesta este cel mai tipic mod de a scrie o funcție și seamănă puternic cu sintaxa din alte limbi.

Definiți o funcție, îi dați un nume și adăugați zero sau mai mulți parametri pentru a funcționa.

Codul este apoi plasat într-un bloc de cod înconjurat de acolade.

- Expresia funcției:

```js
const run = function() {
  console.log("I am running!");
}
```

De asemenea, puteți stoca o funcție într-o constantă.

Când utilizați o expresie de funcție, puteți stoca o funcție într-o variabilă și o puteți utiliza pentru a apela funcția.

Funcțiile declarate în acest mod nu trebuie să aibă un nume și pot fi anonime ca în exemplul anterior.


- Arrow function:

```js
const saySomething = () => {
  console.log("I said something...");
}
```

Funcțiile săgeată sunt similare cu expresiile funcțiilor, dar sunt chiar mai scurte de scris, deoarece cuvântul cheie function nu este necesar, iar funcția este anonimă.

[/slide]

[slide hideTitle]

# Parametrii

Când scrieți funcții JavaScript cu mai mulți parametri, parametrii suplimentari vor fi ignorați dacă nu li se pasează nicio valoare.


```js live
function multiplyNumbers(a, b, c) {
  console.log(a * b * c);
}
multiplyNumbers(2, 3);
```

Rezultatul operației de mai sus este „NaN” sau Not a Number.

Acest lucru se datorează faptului că nu am furnizat un al treilea parametru, iar JavaScript i-a dat în mod implicit valoarea „undefined”.

Observați cum nu s-a oprit executarea programului.

În limbajele precum Java sau C # ați putea porni programul, dar JavaScript vă oferă mai multă flexibilitate și este, în cele din urmă, depinde de programatorul să se asigure că funcțiile primesc parametrii necesari pentru a funcționa corect.

De asemenea, nu am definit niciodată tipul de date pe care le vom pasa.

Acesta este un alt lucru de urmărit, deoarece orice tip de parametru va fi acceptat, dar funcția dvs. nu va funcționa decât dacă este programată să funcționeze cu acel tip special.

Dacă treceți mai mulți parametri decât cei definiți în declarația de funcție, aceștia sunt ignorați fără nicio consecință.

```js live
function multiplyNumbers(a, b, c) {
  console.log(a * b * c);
}
multiplyNumbers(2, 3, 5, 10, 6000);
```

Doar primii trei parametri au fost utilizați, iar ultimii doi au fost complet ignorați.

[/slide]

[slide hideTitle]

# Default Function Parameter Values

Uneori s-ar putea să doriți să transmiteți parametrii impliciți funcțiilor dvs.

Acest lucru se face de obicei atunci când există o valoare exactă care este esențială pentru ca funcția să funcționeze corect.

```js live
function convertInches(inches, value = 2.45) {
  return inches * value;
}
let inches = 10;
console.log(convertInches(inches));
```
Atunci când o funcție are o valoare implicită poate fi apelată fără parametri.

```js live
function printCopyright(year = 2021) {
  console.log("Copyright ", year)
}
printCopyright();
```
You could also overwrite the default parameter:

```js live
function printCopyright(year = 2021) {
  console.log("Copyright ", year)
}
printCopyright("Noble Co. LLC");
```


[/slide]

[slide hideTitle]

# Problemă cu soluțue: Largest Number
[code-task title="Largest Number" taskId="js-syntax-functions-statements-largest-number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function largestNumber(firstNum, secondNum, thirdNum) {
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
## Descriere

Scrieți o funcție care primește  **tei argumente numerice** ca intrare și găsește **cel mai mare număr** dintre acestea. 

Imprimați următorul text pe consolă: "**The largest number is** \{**number**\}".

 **Intrarea** vine ca **tei argumente numerice** pasate funcției dvs.

 **Ieșirea** trebuie să fie imprimată pe consolă.



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| largestNumber(5, -3, 16) | The largest number is 16. |
| largestNumber(-3, -5, -22.5) | The largest number is -3.|


Scrieți o funcție care primește trei argumente numerice.

Declarați o variabilă denumită result care va păstra rezultatul.

[image assetsSrc="syntax-hint-01.png" /]


Faceți câteva verificări pentru a găsi cel mai mare număr dintre trei numere, începând din num1.

[image assetsSrc="syntax-hint-02.png" /]


Faceți același lucru pentru celelalte numere.

[image assetsSrc="syntax-hint-03.png" /]


Imprimați rezultatul pe consolă.

[image assetsSrc="syntax-hint-04.png" /]



[/task-description]
[code-io /]
[tests]
[test open]
[input]
largestNumber(5, -3, 16)
[/input]
[output]
The largest number is 16.
[/output]
[/test]
[test open]
[input]
largestNumber(-3, -5, -22.5)
[/input]
[output]
The largest number is -3.
[/output]
[/test]
[test]
[input]
largestNumber(1, 2, 3)
[/input]
[output]
The largest number is 3.
[/output]
[/test]
[test]
[input]
largestNumber(1, -5, 10)
[/input]
[output]
The largest number is 10.
[/output]
[/test]
[test]
[input]
largestNumber(200, 199, 4)
[/input]
[output]
The largest number is 200.
[/output]
[/test]
[test]
[input]
largestNumber(-5, -1, -15)
[/input]
[output]
The largest number is -1.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu soluțue: Circle Area
[code-task title="Circle Area" taskId="js-syntax-functions-statements-circlearea" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function circleArea(radius) {
    // Write your code here
};
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

Scrieți o funcție care primește **un singur argument** ca intrare.

**Verificați tipul**  argumentului de intrare. 

Dacă este  **number**, presupuneți că este raza unui cerc și **calculați aria cercului**.

Imprimați  **aria** **rotunjită** la **a doua zecimală**.

Dacă tipul argumentului este **NU** un număr, tipăriți următorul text pe consolă:
This calculation cannot be completed using a variable of type: String.
- "**This calculation cannot be completed using a variable of type:** \{**type of argument**\}**.**"

 **Intrarea** vine ca **un singur argument** pasat funcției dvs..

 **Ieșirea** trebuie să fie tipărită pe consolă.



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| circleArea(5) | 78.54 |
| circleArea('name') | This calculation cannot be completed using a variable of type: string. |


Scrieți o funcție care primește un singur argument.

Declarați o variabilă numită **result** care vă va păstra rezultatul.


[image assetsSrc="syntax-hint-05.png" /]

Verificați tipul argumentului de intrare folosind operatorul `typeof`.

[image assetsSrc="syntax-hint-06.png" /]

Dacă tipul este egal cu '**number**', calculați calculați aria cercului și imprimați-o pe consolă rotunjită la a doua zecimală.

Pentru a face acest lucru, utilizați metoda `toFixed()`.

Funcția `Math.pow()` readuce baza la puterea exponentului.

Puteți găsi mai multe informații despre calcularea ariei unui cerc [here](https://en.wikipedia.org/wiki/Circle).

[image assetsSrc="syntax-hint-07.png" /]

Dacă tipul **NU** este '**number**', tipăriți următorul mesaj pe consolă:

"**This calculation cannot be completed using a variable of type:** \{**type of argument**\}**.**"


[/task-description]
[code-io /]
[tests]
[test open]
[input]
circleArea(5)
[/input]
[output]
78.54
[/output]
[/test]
[test open]
[input]
circleArea('name')
[/input]
[output]
This calculation cannot be completed using a variable of type: string.
[/output]
[/test]
[test]
[input]
circleArea(3.5)
[/input]
[output]
38.48
[/output]
[/test]
[test]
[input]
circleArea(10)
[/input]
[output]
314.16
[/output]
[/test]
[test]
[input]
circleArea([1, 2, 3])
[/input]
[output]
This calculation cannot be completed using a variable of type: object.
[/output]
[/test]
[test]
[input]
circleArea({ "name": "pesho" })
[/input]
[output]
This calculation cannot be completed using a variable of type: object.
[/output]
[/test]
[test]
[input]
circleArea(true)
[/input]
[output]
This calculation cannot be completed using a variable of type: boolean.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu soluție: String Length
[code-task title="String Length" taskId="js-syntax-functions-statements-stringlength" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function findStringLength(firstString, secondString, thirdString){
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
## Descriere
Scrieți o funcți JS care primește  **trei argumente șir** ca intrare. 

Calculați **suma**  **lungimii**  **șirurilor** și a **lungimii medii** a șirurilor **rotunjite în jos** la cel mai apropiat număr întreg.

**Intrarea** vine ca **trei argumente șir** pasate funcției dvs.

**Ieșirea** trebuie imprimată pe consolă pe două linii.



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| findStringLength('chocolate', 'ice cream', 'cake') | 22 |
| | 7 |

| **Intrare** | **Ieșire** |
| --- | --- |
| findStringLength('pasta', '5', '22.3') | 10 |
|  | 30 |


Scrieți o funcție care primește trei argumente șir.

Declarați două variabile denumite **sumLength** și **averageLength** care vor păstra rezultatele matematice.

Calculați lungimea șirurilor folosind **proprietatea length**.

[image assetsSrc = "syntax-hint-09.png" /]

Calculați suma celor trei lungimi.

[image assetsSrc = "syntax-hint-10.png" /]

Calculați **lungimea medie** a șirurilor **rotunjite în jos** la cel mai apropiat număr întreg. Utilizați funcția `Math.floor()`.

[image assetsSrc = "syntax-hint-11.png" /]

Imprimați **sumLength** și **averageLength** pe consolă, fiecare pe o linie separată.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
findStringLength('chocolate', 'ice cream', 'cake')
[/input]
[output]
22
7
[/output]
[/test]
[test open]
[input]
findStringLength('pasta', '5', '22.3')
[/input]
[output]
10
3
[/output]
[/test]
[test]
[input]
findStringLength('pesho', 'stamat', 'blah')
[/input]
[output]
15
5
[/output]
[/test]
[test]
[input]
findStringLength('dsa', 'dddd', '')
[/input]
[output]
7
2
[/output]
[/test]
[test]
[input]
findStringLength('djskl', 'dsadasdsadas', 'dsfdfdfdfdf')
[/input]
[output]
28
9
[/output]
[/test]
[test]
[input]
findStringLength('vfvv', 'dsadsa', 'eewewewe')
[/input]
[output]
18
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
