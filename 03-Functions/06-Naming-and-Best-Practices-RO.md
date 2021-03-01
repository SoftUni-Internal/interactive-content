# Denumirea și Cele mai Bune Practici

[slide hideTitle]
# Denumirea Funcțiilor

- Numele funcțiilor ar trebui să **descrie sarcina lor** într-un mod **clar** și **lipsit de ambiguități**
- Numele lor trebuie să fie **semnificative și nu foarte lungi**
- Ar trebui să răspundă la întrebarea:"**Ce face această funcție?**"

Exemple pentru nume **bune**:
```js
findStudent, loadSeport, add
```

Exemple pentru nume **rele**:

```js
Method1, DoSomething, handleStuff, DirtyHack
```

Dacă **nu puteți** găsi un **nume bun** pentru o funcție, gândiți-vă la **dacă are o intenție clară**.


## Numirea Parametrilor Funcției

  - Formă preferată: `[Substantiv]` sau `[Adjectiv] + [Substantiv]`
  - **Nu** trebuie să conțină **litere majuscule**
  - Ar trebui să fie **semnificativ**
  - Unitatea de măsură ar trebui să fie evidentă

Exemple pentru nume de parametri **buni**:

```js
firstName, report, speedKmH, usersList, fontSizeInPixels, font
```

Exemple pentru nume de parametri **rei**

```js
p, p1, p2, populate, LastName, lastName
```
[/slide]

[slide hideTitle]

# Cele mai Bune Practici în Ceea ce Privește Funcțiile


- Fiecare funcție trebuie să efectueze o sarcină **unică**, bine definită
- **Evitați funcțiile lungi**, **împărțiți-le** în **câteva mai scurte**


 ```js
 function printReceipt(){
    printHeader();
    printBody();
    printFooter();
}
 ```

 În urma practicilor, funcția definită în exemplul de mai sus este **autodocumentată** și **ușoară de testat**.

## Structura Codului și Formatarea Codului

Asigurați-vă că utilizați indentarea corectă
- Lăsați o linie goală între funcții și după blocuri
- Utilizați întotdeauna paranteze cretate pentru corpuri condiționate și bucle
- Evitați rândurile lungi și expresiile complexe

- Exemplu de o **funcție bine structurată:**

```js
function sum() {
    // some code…
    // some more code…
}
```

- Exemplu de o **funcție prost structurată:**

```js
function sum()
      {
          // some code…
// some more code…
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Simple Calculator

[vimeo-video]
[stream language="EN" videoId="489373707/dfc94da2ab" default /]
[stream language="RO" videoId="489373707/dfc94da2ab"  /]
[/video-vimeo]

[code-task title="Simple Calculator" taskId="fundamentals-js-functions-lab-Simple-Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function simpleCalculator(input){
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

Write an arrow function that receives an **array containing three elements** (two numbers and a string) and calculates the result depending on the specified operator. 

The operator could only be one of the following: "**multiply**", "**divide**", "**add**", "**subtract**".

## Exemples
|**Intrare**|**Ieșire**|
| --- | --- |
| simpleCalculator([5, 5, 'multiply']) | 25 |
| simpleCalculator([40, 8, 'divide']) | 5 |
| simpleCalculator([12, 19, 'add']) | 31 |

[/task-description]
[tests]
[test open]
[input]
simpleCalculator([5, 5, 'multiply'])
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
simpleCalculator([40, 8, 'divide'])
[/input]
[output]
5
[/output]
[/test]
[test open]
[input]
simpleCalculator([12, 19, 'add'])
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
simpleCalculator([1, 15, 'multiply'])
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
simpleCalculator([61, 2, 'divide'])
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
simpleCalculator([2, 18, 'add'])
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
simpleCalculator([186, 121, 'subtract'])
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
simpleCalculator([2, 35, 'multiply'])
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
simpleCalculator([12, 2, 'divide'])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
simpleCalculator([115, 338, 'add'])
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
simpleCalculator([46, 521, 'subtract'])
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

