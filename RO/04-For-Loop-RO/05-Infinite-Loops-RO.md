// sectionId: "Javascript::Programming-Basics::For-Loop::Infinite-Loops"

[slide hideTitle]

# Bucle Infinite

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-30-32-infinite-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Buclele infinite pot **repeta un bloc de cod de un număr nelimitat de ori.**

Utilizare în programare:

- Sunt utilizate pe scară largă în dezvoltarea jocurilor pentru a desena mediul jocului

- Pentru desenarea animațiilor

- Pe serverele web, deoarece acestea rulează permanent

```js
for (;;) {
  console.log('Hello World');
}
// Puteți sări peste inițializare, condiție și incrementare
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Sum Numbers Until 0

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-33-34-problem-and-solution-sum-numbers-until-zero-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Numbers Until 0" taskId="pb-js-for-loop-Sum-Numbers-Until-0" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sumNumbers(nums) {
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

Creați un program care însumează și tipărește numere într-o matrice până la întâlnirea numărului **0**:

- Veți primi o matrice cu numere

- Parcurgeți matricea și imprimați suma pentru fiecare iterație

- Când ajungeți la **0**, tipăriți: "**Good bye**"

# Exemplu

| **Intrare**              | **Ieșire** |
| ------------------------ | ---------- |
| sumNumbers([5, 3, 2, 0]) | Sum = 5    |
|                          | Sum = 8    |
|                          | Sum = 10   |
|                          | Good bye   |


| **Intrare**              | **Ieșire** |
| ----------- | ----------- |
| sumNumbers([3, 15, 0])   | Sum = 3    |
|                          | Sum = 18   |
|                          | Good bye   |

[/task-description]
[tests]
[test open]
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
[test open]
[input]
sumNumbers([3, 15, 0])
[/input]
[output]
Sum \= 3
Sum \= 18
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
Good bye
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
Good bye
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
