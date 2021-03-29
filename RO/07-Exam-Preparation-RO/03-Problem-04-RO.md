// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-04"
# Problema 4: Cinema Income
[slide hideTitle]
# Cinema Income

[video src="https://videos.softuni.org/hls/javascript-basics/RO/07-Exam-Preparation/JS-exam-preparation-4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema Income" taskId="js-pb-exam-preparation-Cinema-Income" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinemaIncome(input) {
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

Ați fost angajat de un cinematograf să scrieți un program care să determine dacă sala de cinema este ocupată complet și care este profitul.

Veți primi numărul de locuri din sală și pe următoarele linii din consolă, până ce este introdusă comanda "**Movie time!**", veți primi un număr de spectatori noi.

Prețul biletului este de 5 USD.

Dacă numărul de oameni care intră în sală poate fi împărțit la 3 fără rest, atunci se va aplica o reducere de $5 la prețul total.

Dacă nu mai rămân locuri libere în sală, programul trebuie să oprească citirea datelor de intrare de pe consolă. 

Dacă numărul de spectatori care intră depășește numărul de locuri rămase în sală, sala trebuie să fie considerată ca fiind plină și programul trebuie să se oprească. 


## Intrare
Veți primi următoarele elemente de pe consolă:

- Primul element: capacitatea sălii - un număr întreg în intervalul  \[50... 150\]

- Pe fiecare dintre liniile următoare, până când comanda este "**Movie time!**":

  - Numărul de oameni care intră în cinematograf - un număr întreg în intervalul  \[1… 15\]

## Ieșire
Mai întâi, tipăriți următoarele linii:

- Dacă ați primit comanda "**Movie time!**": 

"**There are** \{**seats left**\} **seats left in the cinema.**"

- În cazul în care nu mai sunt locuri libere în sală: 

"**The cinema is full.**"

- Pe urmă imprimați:

 "**Cinema income -** \{**income**\}$"

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
|cinemaIncome([60, 10, 6, 3, 20, 15, 'Movie time!'])| There are 6 seats left in the cinema.|
||Cinema income - 255$|
|cinemaIncome([140, 15, 15, 10, 5, 6, 7, 8, 9, 'Movie time!']) | There are 65 seats left in the cinema. |
|| Cinema income - 355$|

[hints]

[hint]
Obțineți capacitatea sălii. Apoi calculați cât va plăti fiecare grup de vizitatori.
[/hint]
[hint]

Dacă numărul de persoane care intră în sală poate fi împărțit la 3, aplicați reducerea.
[/hint]
[hint]
După primirea comenzii "**Movie time!**", imprimați rezultatul adecvat.
[/hint]

[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cinemaIncome([60, 10, 6, 3, 20, 15, 'Movie time!'])
[/input]
[output]
There are 6 seats left in the cinema.
Cinema income - 255$
[/output]
[/test]
[test open]
[input]
cinemaIncome([140, 15, 15, 10, 5, 6, 7, 8, 9, 'Movie time!'])
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
cinemaIncome([150, 15, 15, 15, 15, 15, 10, 10, 10, 'Movie time!'])
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
cinemaIncome([50, 10, 15, 15, 10, 9,])
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
cinemaIncome([100, 15, 15, 15, 15, 15, 15, 15,])
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
cinemaIncome([120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 'Movie time!'])
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
cinemaIncome([50, 15, 15, 10, 6, 3, 3])
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
cinemaIncome([100, 15, 3, 6, 9, 12, 15, 10, 'Movie time!'])
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
cinemaIncome([50, 15, 15, 10, 9, 9])
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
cinemaIncome([120, 10, 15, 3, 6, 9, 12, 15, 'Movie time!'])
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
