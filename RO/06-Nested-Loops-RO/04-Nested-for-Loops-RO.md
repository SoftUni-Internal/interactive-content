[slide]

# Bucle for imbricate


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

[slide]
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

[slide]
# Problem: Triangle of Stars
[code-task title="Triangle of Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]

# Descriere
Scrieți un program care:

* Citește **înălțimea** unui triunghi de pe consolă
* Tipărește un **triunghi de stele**
# Exemplu

## Input
- 5
## Output
- \*
- \*\*
- \*\*\*
- \*\*\*\*
- \*\*\*\*\*
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
*
**
***
****
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Triangle of Stars

[vimeo-video]
[stream language="EN" videoId="488090539/2eacc8e193" default /]
[stream language="RO" videoId="488090539/2eacc8e193"  /]
[/video-vimeo]

[code-task title="Triangle of Stars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triangleOfStars(input) {
  let size = Number(input.shift());
  let result = '';

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= row; col++) {
      result += "*";
    }

    result += '\n';
  }
  
  console.log(result);
}
```
[/code-editor]
[task-description]

# Descriere
Scrieți un program care:

* Citește **înălțimea** unui triunghi de pe consolă
* Tipărește un **triunghi de stele**
# Exemplu

## Input
- 5
## Output
- \*
- \*\*
- \*\*\*
- \*\*\*\*
- \*\*\*\*\*
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
*
**
***
****
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
