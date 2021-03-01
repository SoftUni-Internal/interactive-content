# Denumirea și cele mai bune practici

[slide]
# Denumirea funcțiilor

[vimeo-video]
[stream language="EN" videoId="489373649/847cb6caf0" default /]
[stream language="RO" videoId="489373649/847cb6caf0"  /]
[/video-vimeo]

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


## Numirea parametrilor funcției

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

[slide]

# Cele mai bune practici în ceea ce privește funcțiile

[vimeo-video]
[stream language="EN" videoId="489373682/d2ab7caa52" default /]
[stream language="RO" videoId="489373682/d2ab7caa52"  /]
[/video-vimeo]


 - Fiecare funcție trebuie să efectueze o sarcină **unică**, bine definită.
- **Evitați funcțiile lungi**, **împărțiți-le** în **câteva mai scurte**.


 ```js
 function printReceipt(){
    printHeader();
    printBody();
    printFooter();
}
 ```

 În urma practicilor, funcția definită în exemplul de mai sus este **autodocumentată** și **ușoară de testat**.

## Structura codului și formatarea codului

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

[slide]
# Problem: Simple Calculator

[vimeo-video]
[stream language="EN" videoId="489373707/dfc94da2ab" default /]
[stream language="RO" videoId="489373707/dfc94da2ab"  /]
[/video-vimeo]

[code-task title="Simple Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function simpleCalculator(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

Scrieți o funcție care primește o serie de trei elemente.

Scrieți o funcție săgeată care calculează rezultatul în funcție de operator.

Operatorul poate fi: `multiply`, `divide`, `add`, `subtract`.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|`['5', '5', 'multiply']` | 25 |
|`['40', '8', 'divide']` | 5 |
|`['12', '19', 'add']` | 31 |

[/task-description]
[tests]
[test]
[input]
1
15
multiply
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
61
2
divide
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
2
18
add
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
186
121
subtract
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
2
35
multiply
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
12
2
divide
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
115
338
add
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
46
521
subtract
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Simple Calculator

[vimeo-video]
[stream language="EN" videoId="489373791/a1578a4a89" default /]
[stream language="RO" videoId="489373791/a1578a4a89"  /]
[/video-vimeo]

[code-task title="Simple Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function simpleCalculator(input){
  let a = Number(input[0]);
  let b = Number(input[1]);  
  let operator = input[2];
  
  switch (operator) {
    case 'multiply':
      let multiply = (a, b) => a * b;
      console.log(multiply(a, b));
      break;
    case 'divide':
      let divide = (a, b) => a / b;
      console.log(divide(a, b));
      break;
    case 'add':
      let add = (a, b) => a + b;
      console.log(add(a, b));
      break;
    case 'subtract':
      let subtract = (a, b) => a - b;
      console.log(subtract(a, b));
      break;
  }
}
```
[/code-editor]
[task-description]

Scrieți o funcție care primește o serie de trei elemente.

Scrieți o funcție săgeată care calculează rezultatul în funcție de operator.

Operatorul poate fi: `multiply`, `divide`, `add`, `subtract`.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|`['5', '5', 'multiply']` | 25 |
|`['40', '8', 'divide']` | 5 |
|`['12', '19', 'add']` | 31 |

[/task-description]
[tests]
[test]
[input]
1
15
multiply
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
61
2
divide
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
2
18
add
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
186
121
subtract
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
2
35
multiply
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
12
2
divide
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
115
338
add
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
46
521
subtract
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]