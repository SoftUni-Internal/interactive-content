// sectionId: "Javascript-Programming-Basics-While-Loop-While-Loop

[slide hideTitle]
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

În exemplul de cod de mai sus, condiția este orice **expresie care returnează un rezultat de tip boolean** - `true` sau `false`. 

Aceasta determină de câte ori se va repeta conținutul buclei și se numește `condiția de repetiție`. 

În acest exemplu, `conținutul blocului repetitiv` este codul executat la fiecare iterație a buclei, cu alte cuvinte, oricând condiția dată este îndeplinită.

În bucla while, mai întâi este evaluată expresia booleană, iar dacă aceasta e `true`, secvența de operații din conținutul buclei este executată. 

Apoi, se verifică din nou condiția dată și dacă e din nou `true`, se execută conținutul buclei. 

Toată această parte se repetă din nou **până într-un anumit punct în care condiția buclei returnează valoarea** `false`.

[/slide]

[slide hideTitle]
# Problemă cu soluția: Decreasing Numbers

[vimeo-video]
[stream language="EN" videoId="487120584/cf3fbb855b" default /]
[stream language="RO" videoId="487120584/cf3fbb855b"  /]
[/video-vimeo]


[code-task title="Decreasing Numbers" taskId="pb-js-while-loop-Decreasing-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function decreasingNumbers (input) {
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {code(Number(input[0]))}
```
[/code-adapter]
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
[test]
[input]
4
[/input]
[output]
4
3
2
1
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3
2
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide hideTitle]
# Problemă: Sequence 2k + 1

[vimeo-video]
[stream language="EN" videoId="487120652/4dbc030699" default /]
[stream language="RO" videoId="487120652/4dbc030699"  /]
[/video-vimeo]


[code-task title="Sequence 2k + 1" taskId="pb-js-while-loop-Sequence-2k" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence (input) {
  // Scrieți codul dvs. aici
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

