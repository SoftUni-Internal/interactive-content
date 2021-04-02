# Denumirea și Cele mai Bune Practici

[slide hideTitle]
# Denumirea Funcțiilor

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-30-naming-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Numele funcțiilor ar trebui să **descrie sarcina lor** într-un mod **clar** și **lipsit de ambiguități**
- Numele lor trebuie să fie **semnificative și nu foarte lungi**
- Ar trebui să răspundă la întrebarea: "**Ce face această funcție?**"

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

# Cele mai Bune Practici 

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-29-naming-and-best-practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

Asigurați-vă că utilizați indentarea corectă.

- Lăsați o linie goală între funcții și după blocuri

- Utilizați întotdeauna paranteze cretate pentru corpuri condiționate și bucle

- Evitați rândurile lungi și expresiile complexe

- Exemplu de o **funcție bine structurată:**

```js
function sum() {
    let name = "Jacob";
    console.log(name);
}
```

- Exemplu de o **funcție prost structurată:**

```js
function sum()​
      {​
          let name = "Jacob";
console.log(name);}
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Simple Calculator

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-solution-simple-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Simple Calculator" taskId="fundamentals-js-functions-lab-Simple-Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculator(num1, num2, operator){
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

Scrieți o funcție săgeată care primește **o matrice cu trei elemente** (două numere și un șir)și calculează rezultatul, în funcție de operatorul specificat. 

Operatorul poate fi unul dintre următoarele: 
"**multiply**" (înumlțire), "**divide**" (împărțire), "**add**" (adăugare), and "**subtract**" (scădere).

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| calculator(5, 5, 'multiply') | 25 |
| calculator(40, 8, 'divide') | 5 |
| calculator(12, 19, 'add') | 31 |

[/task-description]
[tests]
[test open]
[input]
calculator(5, 5, 'multiply')
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
calculator(40, 8, 'divide')
[/input]
[output]
5
[/output]
[/test]
[test open]
[input]
calculator(12, 19, 'add')
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
calculator(1, 15, 'multiply')
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
calculator(61, 2, 'divide')
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
calculator(2, 18, 'add')
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
calculator(186, 121, 'subtract')
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
calculator(2, 35, 'multiply')
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
calculator(12, 2, 'divide')
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
calculator(115, 338, 'add')
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
calculator(46, 521, 'subtract')
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

