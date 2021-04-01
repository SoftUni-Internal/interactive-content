// sectionId: "Javascript::Programming-Basics::While-Loop::While-Loop"

[slide hideTitle]
# Bucla While

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-8-9-10-While-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



În programare, **bucla while** este utilizată atunci când dorim să **repetăm** execuția unei anumite logici cât timp se îndeplinește o anumită condiție. 

Prin **"condiție"**, înțelegem orice **expresie** care returnează `true` sau `false`. 

Când **condiția** nu e **îndeplinită**, bucla while este **întreruptă**, programul **continuă** să execute codul de după buclă.
 
[image assetsSrc="05-use-case-while.png" /]

Bucla while arată în felul următor:
```js
while (condition) {
  loop body;
}
```

În exemplul de cod de mai sus, condiția este orice **expresie care returnează un rezultat de tip boolean** - `true` sau `false`. 

Aceasta determină de câte ori se va repeta conținutul buclei și se numește "condiția de repetiție". 

În acest exemplu, "conținutul blocului repetitiv" este codul executat la fiecare iterație a buclei, cu alte cuvinte, oricând condiția dată este îndeplinită.

În bucla while, mai întâi este evaluată expresia booleană, iar dacă aceasta e `true`, secvența de operații din conținutul buclei este executată. 

Apoi, se verifică din nou condiția dată și dacă e din nou `true`, se execută conținutul buclei. 

Toată această parte se repetă din nou **până într-un anumit punct în care condiția buclei returnează valoarea** `false`.

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Decreasing Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-12-Solution-Decreasing-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Creați un program care imprimă toate numerele din intrarea dată în ordine descrescătoare:

* Veți primi un număr de pe consolă
* Imprimați numerele începând de la numărul respectiv și până la 1 (**inclusiv**)

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|decreasingNumbers(4)| 4 |
||3 |
||2 |
|| 1|


 | **Intrare** | **Ieșire** |
| --- | --- |
| decreasingNumbers(3)| 3 |
|| 2 |
|| 1 |
[/task-description]
[tests]
[test]
[input]
decreasingNumbers(5)
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[test open]
[input]
decreasingNumbers(4)
[/input]
[output]
4
3
2
1
[/output]
[/test]
[test open]
[input]
decreasingNumbers(3)
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
# Problemă cu Soluție: Sequence 2k + 1

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-14-Solution-Sequence-2k+1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Sequence 2k + 1" taskId="pb-js-while-loop-Sequence-2k" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence (input) {
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

Creați un program, care imprimă toate numerele **mai mici decât** și **egale cu** un număr dat **n**:

- Veți primi un număr **n**

- Respectați următoarele reguli la imprimare: **1, 3, 7, 15, 31,…, n** presupunând că fiecare număr următor este egal cu **numărul anterior * 2 + 1**.

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|sequence(8)| 1 |
||3 |
||7 |


| **Intrare** | **Ieșire** |
| --- | --- |
|sequence(15)| 1 |
|| 3 |
|| 7 |
|| 15 |

[/task-description]
[tests]
[test open]
[input]
sequence(8)
[/input]
[output]
1
3
7
[/output]
[/test]
[test open]
[input]
sequence(15)
[/input]
[output]
1
3
7
15
[/output]
[/test]
[test]
[input]
sequence(3)
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
