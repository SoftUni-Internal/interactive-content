// sectionId: "Javascript-Programming-Basics-Nested-Loops-Nested-For-Loops"

[slide hideTitle]

# Bucle "for" imbricate


[vimeo-video]
[stream language="EN" videoId="488090349/1e2b80201d" default /]
[stream language="RO" videoId="488090349/1e2b80201d"  /]
[/video-vimeo]


Buclele imbricate sunt instrucțiuni care constă în mai multe bucle for situate una în cealaltă

Buclele for sunt folosite**:

* Pentru a executa o **acțiune**, care **execută** mai multe **acțiuni**
* Pentru a face calcule și variante mai **complexe**

Sintaxa buclei for **imbricate în JS** este după cum urmează:

```js
for (variable initialization; condition; increment) {
  // Outer Loop 
  for (variable initialization; condition; increment) { 
    // Inner Loop

    // Statements
  }
}
```

Iată un exemplu de 3 bucle  `for` imbricate una în alta: 


```js live
let n = 5;
for (let i = 1; i <= n; i += 3) {
    for (let j = 1; j <= n; j += 3) {
        for (let k = 1; k <= n; k += 3) {
           console.log(`${i}${j}${k}`);
        }
    }
}
```
[/slide]

[slide hideTitle]
# Exemplu

[vimeo-video]
[stream language="EN" videoId="488090388/9cb36b2bd2" default /]
[stream language="RO" videoId="488090388/9cb36b2bd2"  /]
[/video-vimeo]

Iată un exemplu de program JavaScript:

```js live
let rows = 3;
let columns = 2;

for (let r = 0; r <= rows; r++) {
    console.log(`row = ${r}`);

    for (let c = 0; c < columns; c++) {
        console.log(`  columns = ${c}`);
    }
}
```
[/slide]

[slide hideTitle]
# Problemă cu soluția: Triangle of Stars
[code-task title="Triangle of Stars" taskId="pb-js-nested-loops-Triangle-of-Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]

# Descriere
Scrieți un program care:

* Citește **înălțimea** unui triunghi de pe consolă
* Tipărește un **triunghi de stele**
# Exemplu
| **Input** | **Output**| 
| --- | --- |
| 5 | \* |
| | \*\* |
| | \*\*\* |
|  | \*\*\*\* |
| | \*\*\*\*\* |

[/task-description]
[code-io /]
[tests]
[test]
[input]
5
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

