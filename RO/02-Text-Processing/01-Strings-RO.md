# Șiruri

[slide hideTitle]
# Ce Este un Șir

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-3-4-5-what-is-a-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șirurile** sunt serii de **caractere.**

Sunt folosite pentru stocarea textului.

**Una dintre cele mai utilizate proprietăți este** lungimea lor, care poate fi obținută folosind `.length()` pe orice șir.

Textul ar trebui să fie înfășurat în ghilimele, există trei tipuri care pot fi utilizate:

- **Ghilimele duble**

```js
let myString = "Hello !";
```

-  **Ghilimele unice**

```js
let myString = 'Hello !';
```

-  **Backticks**

```js
let myString = `Hello !`;
```

Putem **concatena șiruri** cu operatorul plus (`+`).

```js live
let hello = 'Hello';
let world = 'World';

let concatenated = hello + ' ' + world;

console.log(`${concatenated}`);
```

## Accesarea șirurilor

**Șirurile** sunt lanțuri de caractere numai în citire, ceea ce înseamnă că nu le putem schimba.

**Le accesăm** după indexul lor. 

Există două moduri de a face acest lucru.

- Primul este prin utilizarea operatorului de indexare `[]`

```js live
let hi = 'Hi, JS';

console.log(hi[4]);
```

Acesta va returna, de asemenea, `J` deoarece cele două modalități de accesare a indexurilor sunt identice.

- Putem accesa un **șir** și cu metoda `charAt()`.

Și va arăta așa:

```js live
let hi = 'Hi, JS';

console.log(hi.charAt(4));
```

Aceasta va da ca rezultat de asemenea, `J`, deoarece cele două moduri sunt identice la sfârșit.

[/slide]

[slide hideTitle]
# Iterarea Printr-un Șir: Demo

Iterăm printr-un șir folosind bucla `for-of`:

```js live
let text = 'Hello, there!'

for (let el of text) {
    console.log(el);
}
```
În acest exemplu, fiecare caracter în `text` va fi imprimat pe consolă.
[/slide]

[slide hideTitle]
# Problem with Solution: Print Characters

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-6-solution-print-characters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Characters" taskId="js-fund-part-2-text-processing-lab-Print-Characters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function printCharacters(input){
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
Scrieți o funcție care primește un **șir** și imprimă caracterele sale pe linii separate.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| printCharacters('AWord') | A |
||W|
||o|
||r|
||d|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
printCharacters('AWord')
[/input]
[output]
A
W
o
r
d
[/output]
[/test]
[test]
[input]
printCharacters('AWord1')
[/input]
[output]
A
W
o
r
d
1
[/output]
[/test]
[test]
[input]
printCharacters('A')
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
printCharacters('AB')
[/input]
[output]
A
B
[/output]
[/test]
[test]
[input]
printCharacters('Pesho')
[/input]
[output]
P
e
s
h
o
[/output]
[/test]
[test]
[input]
printCharacters('GOSHOpesho')
[/input]
[output]
G
O
S
H
O
p
e
s
h
o
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

