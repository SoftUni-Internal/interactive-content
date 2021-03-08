// sectionId: "Javascript::Programming-Basics::For-Loop::Infinite-Loops"

[slide hideTitle]

# Infinite Loops

[vimeo-video]
[stream language="EN" videoId="487119696/795eeac3a1" default /]
[stream language="RO" videoId="487119696/795eeac3a1" /]
[/video-vimeo]

Buclele infinite pot **repeta un bloc de cod de un număr nelimitat.**

Utilizare în programare:

- Sunt utilizate pe scară largă în dezvoltarea jocului pentru a desena mediul jocului

- Pentru desenarea animațiilor

- Pe serverele web, deoarece acestea rulează permanent

```js
for (;;) {
  console.log("Hello World");
}
// Puteți sări peste inițializare, condiție și increment
```

[/slide]

[slide hideTitle]

# Problemă cu soluție: Sum Numbers Until 0

[vimeo-video]
[stream language="EN" videoId="487119738/e0db9467e8" default /]
[stream language="RO" videoId="487119738/e0db9467e8" /]
[/video-vimeo]

[code-task title="Sum Numbers Until 0" taskId="pb-js-for-loop-Sum-Numbers-Until-0" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sumNumbers(nums) {
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

# Description

Creați un program care adună și imprimă  numerele dintr-o matrice până când se ajunge la 0.

# Exemplu

| **Intrare**              | **Ieșire** |
| ------------------------ | ---------- |
| sumNumbers([5, 3, 2, 0]) | Sum = 5    |
|                          | Sum = 8    |
|                          | Sum = 10   |
|                          | Good bye   |

[/task-description]
[tests]
[test]
[input]
sumNumbers([5, 3, 2, 0])
[/input]
[output]
Sum \= 5
Sum \= 8
Sum \= 10
Good bye
[/output]
[/test]
[test]
[input]
sumNumbers([6, 4, 3, 0])
[/input]
[output]
Sum \= 6
Sum \= 10
Sum \= 13
Goodbye
[/output]
[/test]
[test]
[input]
sumNumbers([9, 7, 5, 0])
[/input]
[output]
Sum \= 9
Sum \= 16
Sum \= 21
Goodbye
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
