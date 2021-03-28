// sectionId: "Javascript::Programming-Basics::Nested-Loops::Nested-For-Loops"

[slide hideTitle]

# Bucle For Imbricate


[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-17-18-nested-for-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Buclele imbricate sunt instrucțiuni care constă în mai multe bucle for situate una în cealaltă.

Buclele for sunt folosite:

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

Iată un exemplu de 3 bucle `for` imbricate una în alta: 


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

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-19-nested-for-loops-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
# Problemă cu Soluție: Triangle of Stars

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-21-solution-triangle-of-stars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Triangle of Stars" taskId="pb-js-nested-loops-Triangle-of-Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
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
Creați un program care care imprimă un triunghi de stele cu o anumită dimensiune:

* Veți primi **înălțimea** unui triunghi de pe consolă
* Tipăriți un **triunghi de stele**

# Exemplu
| **Intrare** | **Ieșire**| 
| --- | --- |
| triangleOfStars(5) | \* |
| | \*\* |
| | \*\*\* |
|  | \*\*\*\* |
| | \*\*\*\*\* |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
triangleOfStars(5)
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
triangleOfStars(6)
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
triangleOfStars(8)
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

