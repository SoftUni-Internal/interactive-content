[slide hideTitle]

# Ce Sunt Șirurile?


Un șir este un tip de date care se folosește pentru a prezenta un **text** și care reprezintă o **secvență** de caractere.

Fiecare simbol are o **poziție** în șir și atunci când le conectăm, **se obține un text.**

Putem scoate **simboluri** individuale dintr-un șir.

Aici, de exemplu, luăm primul element din șir și lungimea acestuia.

``` js live
let myString = 'Hello JavaScript!';

console.log(myString[0]);
console.log(myString.length);
```

[/slide]

[slide hideTitle]


# Șirurile Sunt Neschimbătoare


Țineți minte că putem să scoatem doar elemente individuale ale șirului, dar nu putem să modificăm elementele care se află înlăuntrul șirului.

Șirurile sunt neschimbătoare. 

În acest exemplu, încercăm să modificăm al patrulea simbol, care este `o`:

``` js live
let myString = 'Hello JavaScript!';
console.log(myString);

myString[4] = 'Change fourth symbol!';
console.log(myString);  
```

Știm că putem schimba **datele conținute în variabile**, dar nu putem schimba simbolurile dintr-un șir.

[/slide]

[slide hideTitle]

# Interpolarea Șirurilor


Înlocuirea **substituenților** cu valori înlăuntrul unui șir literal se numește **interpolarea** șirului. 

În JavaScript, literalele template-ului (acele șiruri aflate între apostroafe) și expresia `${expression}` ca substituent realizează interpolarea șirurilor.

``` js live
let name = 'Rick';
let age = 18;
console.log(`Hello, my name is ${name}, I am ${age} years old.`);
```
[/slide]

[slide hideTitle]

# Problem with Solution: Concantenarea numelor

[code-task title="Concantenate Names" taskId="fund-js-data-types-and-variables-lab-concatenate-names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function concatNames(firstName, lastName, delimeter){
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
Creați un program, which receives three parameters:

- **First name** - a string

- **Last name** - a string

- **Delimiter** - a string

Your task is to print the first name and the last name, joined by the delimiter.

# Exemplus
  | **Date de intrare** | **Rezultat** |
| --- | --- |
| concatNames('John', 'Smith', '\-\>') | John\-\>Smith |
| concatNames('Jan', 'White', '\<\-\>') | Jan\<\-\>White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
concatNames('John', 'Smith', '\-\>')
[/input]
[output]
John\-\>Smith
[/output]
[/test]
[test open]
[input]
concatNames('Jan', 'White', '\<\-\>')
[/input]
[output]
Jan\<\-\>White
[/output]
[/test]
[test]
[input]
concatNames('John', 'Smith', 'm')
[/input]
[output]
JohnmSmith
[/output]
[/test]
[test]
[input]
concatNames('Jan', 'White', 'k')
[/input]
[output]
JankWhite
[/output]
[/test]
[test]
[input]
concatNames('Jan', 'White', '\-')
[/input]
[output]
Jan\-White
[/output]
[/test]
[test]
[input]
concatNames('Jan', 'White', '\=')
[/input]
[output]
Jan\=White
[/output]
[/test]
[test]
[input]
concatNames('Jan', 'White', '\,')
[/input]
[output]
Jan\,White
[/output]
[/test]
[test]
[input]
concatNames('Jan', 'White', 'p')
[/input]
[output]
JanpWhite
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]

# Problem with Solution: Locul potrivit

[code-task title="Right Place" taskId="fund-js-data-types-and-variables-lab-right-place" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rightPlace(string, sym, result){
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
# Descrierе:
Veți primi 3 parametri: **string** (**șir**), **char** (**caracter**), **string** (**șir**).

Primul șir va fi un cuvânt cu un **caracter lipsă** înlocuit cu underscore ("**_**").

Trebuie să **înlocuiți** spațiul lipsă semnalat de underscore din primul șir cu caracterul dat și să **comparați** rezultatul cu cel de-al doilea șir dat. 

Dacă sunt egale, ar trebui să tipăriți "**Matched**" ("**Potrivire**"), altfel veți tipări "**Not Matched**" ("**Nepotrivire**").


# Exemplus
  | **Intrare** | **Ieșire** |
| --- | --- |
| rightPlace('Str_ng', 'I', 'Strong') | Not Matched |
| rightPlace('Str_ng', 'i', 'String') | Matched |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
rightPlace('Str_ng', 'I', 'Strong')
[/input]
[output]
Not Matched
[/output]
[/test]
[test open]
[input]
rightPlace('Str_ng', 'i', 'String')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('aa_av', 'n', 'aanav')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('fd_sa', 'l', 'fdlsa')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('ww_', 'w', 'www')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('_ngsd', 'n', 'jkljkl')
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
rightPlace('gds_aaasng', 'm', 'Sjkl')
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
rightPlace('a_ff', 'i', 'jkll')
[/input]
[output]
Not Matched
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
