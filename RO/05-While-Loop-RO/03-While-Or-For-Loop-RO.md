[slide]
# Bucla While sau Bucla For?

[vimeo-video]
[stream language="EN" videoId="487120722/4b17fd0910" default /]
[stream language="RO" videoId="487120722/4b17fd0910"  /]
[/video-vimeo]


Buclele `while` și `for` **repetă** un bloc de **cod**.

Dar există situații diferite în procesul scrierii de cod în care ni se recomandă să folosim primul tip sau cel al doilea.

Când știți **exact de câte ori** doriți să repetați un bloc de cod, utilizați bucla `for`.
```js live
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

Este de obicei potrivit să folosiți bucle for în cazurile în care inițializarea și incrementarea sunt instrucțiuni unice  și sunt legate în mod logic.

Este o buclă mai compactă în comparație cu bucla `while` și menține instrucțiunile de control ale buclei în același loc.

Dar ar putea exista mai multe probleme **complexe** în care numărul de iterații depinde de anumite **situații** și nu pot fi anticipate. 

Ceea ce înseamnă că nu știm exact dinainte **de câte ori** trebuie să repetăm o buclă.

În acele situații, este recomandată utilizarea unei bucle `while`.
```js
let command = input.shift();
let number = Number(input.shift());
while (command != "End") {
    switch (command) {
        case "Add":
            number += 1;
            break;
        case "Subtract":
            number -= 1;
            break;
    }

    command = input.shift();
}

console.log(number);
```
[/slide]

[slide]
# Problemă: Odd Number
[code-task title="Odd Number" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumber(numbers) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Cerință
Scrieți un program care:

* Citește numere de pe consolă până la obținerea unui **număr impar**
* Imprimă **numărul impar** 

# Exemplu
  | **Input** | **Output** |
| --- | --- |
|2| 3 |
|4||
|8| |
|3| |

[/task-description]
[tests]
[test]
[input]
2
4
8
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Soluție: Odd Number

[vimeo-video]
[stream language="EN" videoId="487120737/05e8469c7d" default /]
[stream language="RO" videoId="487120737/05e8469c7d"  /]
[/video-vimeo]


[code-task title="Odd Number" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumber(numbers) {
  let num = Number(numbers.shift());
  while (num % 2 === 0) {
    num = Number(numbers.shift());
  }
  console.log(num);
}
```
[/code-editor]
[task-description]
# Cerință
Scrieți un program care:

* Citește numere dde pe in consolă până la obținerea unui **număr impar**
* Imprimă **numărul impar**
# Exemplu
  | **Input** | **Output** |
| --- | --- |
|2| 3 |
|4||
|8| |
|3| |
[/task-description]
[tests]
[test]
[input]
2
4
8
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
