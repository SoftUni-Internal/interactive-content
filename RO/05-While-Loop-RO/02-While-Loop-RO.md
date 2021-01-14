[slide]
# Bucla While

[vimeo-video]
[stream language="EN" videoId="487120555/61828bfd47" default /]
[stream language="RO" videoId="487120555/61828bfd47"  /]
[/video-vimeo]



În programare, **bucla** `while` este utilizată atunci când dorim să **repetăm** execuția unei anumite logici cât timp se îndeplinește o anumită condiție. 

Prin **"condiție"**, înțelegem orice **expresie** care returnează `true` sau `false`. Când **condiția** nu e **îndeplinită**, bucla while este **întreruptă**, programul **continuă** să execute codul de după buclă.
 
[image assetsSrc="05-use-case-while.png" /]
Bucla while arată în felul următor:
```js
while (condition) {
  loop body;
}
```

În exemplul de cod de mai sus, condiția este orice **expresie care returnează un rezultat de tip boolean** – `true` sau `false`. 

Aceasta determină de câte ori se va repeta conținutul buclei și se numește `condiția de repetiție`. 

În acest exemplu, `conținutul blocului repetitiv` este codul executat la fiecare iterație a buclei, cu alte cuvinte, oricând condiția dată este îndeplinită.

În bucla while, mai întâi este evaluată expresia booleană, iar dacă aceasta e `true`, secvența de operații din conținutul buclei este executată. 

Apoi, se verifică din nou condiția dată și dacă e din nou `true`, se execută conținutul buclei. 

Toată această parte se repetă din nou **până într-un anumit punct în care condiția buclei returnează valoarea** `false`.

[/slide]

[slide]
# Problemă: Decreasing Numbers

[vimeo-video]
[stream language="EN" videoId="487120584/cf3fbb855b" default /]
[stream language="RO" videoId="487120584/cf3fbb855b"  /]
[/video-vimeo]


[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function decreasingNumbers (input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Cerință
Scrieți un program care:

* Citește un număr de pe consolă
* Imprimă numerele începând de la numărul respectiv și până la 1 (**inclusiv**)

# Exemplu
  | **Input** | **Output** |
| --- | --- |
|4| 4 |
||3 |
||2 |
|| 1|

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Soluție: Decreasing Numbers

[vimeo-video]
[stream language="EN" videoId="487120633/4307d54296" default /]
[stream language="RO" videoId="487120633/4307d54296"  /]
[/video-vimeo]


[code-task title="Decreasing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function decreasingNumbers (input) {
  let inputNumber = Number(input.shift());
  
  while (inputNumber >= 1) {
    console.log(inputNumber);
    inputNumber--;
  }
}
```
[/code-editor]
[task-description]
# Cerință
Scrieți un program care:

* Citește un număr de pe consolă
* Imprimă numerele începând de la numărul respectiv până la 1 (**inclusiv**)
# Exemplu
  | **Input** | **Output** |
| --- | --- |
|4| 4 |
||3 |
||2 |
|| 1|
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide]
# Problemă: Sequence 2k + 1

[vimeo-video]
[stream language="EN" videoId="487120652/4dbc030699" default /]
[stream language="RO" videoId="487120652/4dbc030699"  /]
[/video-vimeo]



[code-task title="Sequence 2k + 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersInRange (input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Cerință

Scrieți un program care imprimă toate **numerele ≤ n** din seria: **1, 3, 7, 15, 31, …,** presupunând că fiecare număr care urmează = **numărul precedent * 2 + 1**.


[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
1
3
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Soluție: Sequence 2k + 1

[vimeo-video]
[stream language="EN" videoId="487120683/99149d6f3f" default /]
[stream language="RO" videoId="487120652/4dbc030699"  /]
[/video-vimeo]


[code-task title="Sequence 2k + 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
// TODO: Solution
}
```
[/code-editor]
[task-description]
[task-description]
# Cerință

Scrieți un program care imprimă toate **numerele ≤ n** din seria: **1, 3, 7, 15, 31, …,** presupunând că fiecare număr care urmează = **numărul precedent * 2 + 1**.

# Soluție:

Problema poate fi rezolvată în felul următor:
- Creăm o variabilă num pentru numărul curent, căreia îi asignăm o **valoare inițială egală cu 1**.
- Drept condiție de repetiție, scriem **numărul curent <= n**.
- În **conținutul buclei**: imprimăm valoarea numărului curent și incrementăm numărul curent utilizând formula din cerința problemei.

Aceasta este o implementare a acestei idei:
```js
let n = Number(input.shift());
let num = 1;
while (num <= n) {
  console.log(num);
  num = 2 * num + 1;
}
```

[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
1
3
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
