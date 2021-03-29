// sectionId: "Javascript::Programming-Basics::While-Loop::While-Or-For-Loop"

[slide hideTitle]
# Bucla While sau Bucla For?

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-15-17-While-or-for-problem-odd-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Buclele "**while**" și "**for**" **repetă** un bloc de **cod**.

Dar există situații diferite în procesul scrierii de cod în care este recomandat să folosim primul tip sau cel de-al doilea.

Când știți **exact de câte ori** doriți să repetați un bloc de cod, utilizați bucla "**for**".
```js live
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

Este de obicei potrivit să folosiți bucle for în cazurile în care inițializarea și incrementarea sunt instrucțiuni unice și sunt legate în mod logic.

Este o buclă mai compactă în comparație cu bucla "**while**" și menține instrucțiunile de control ale buclei în același loc.

Dar pot să existe mai multe probleme **complexe** în care numărul de iterații depinde de anumite **situații** și nu pot fi anticipate. 

Ceea ce înseamnă că nu știm exact dinainte **de câte ori** trebuie să repetăm o buclă.

În acele situații, este recomandată utilizarea unei bucle "**while**".
```js
let command = input.shift();
let number = Number(input.shift());
while (command != 'End') {
    switch (command) {
        case 'Add':
            number += 1;
            break;
        case 'Subtract':
            number -= 1;
            break;
    }

    command = input.shift();
}

console.log(number);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Odd Number

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-18-Solution-Odd-Number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Odd Number" taskId="pb-js-while-loop-Odd-Number" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumber(numbers) {
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
Creați un program care imprimă **primul** număr impar dintr-o secvență dată:

* Veți primi numere de pe consolă 
* Imprimați primul **numărul impar** pe care îl găsiți

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
| oddNumber([2, 4, 8, 3]) | 3 |
| oddNumber([7, 32, 6, 12])| 7 |

[/task-description]
[tests]
[test open]
[input]
oddNumber([2, 4, 8, 3])
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
oddNumber([7, 32, 6, 12])
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
oddNumber([2, 4, 8, 5])
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
