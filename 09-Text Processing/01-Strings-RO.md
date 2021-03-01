# Șir

[slide]
# Ce este un Șir

[vimeo-video]
[stream language="EN" videoId="489817383/8da2994345" default /]
[stream language="RO" videoId="489817383/8da2994345"  /]
[/video-vimeo]

**Șirurile** sunt serii de **caractere.**

Sunt folosite pentru stocarea textului.

**Una dintre cele mai utilizate proprietăți este** lungimea lor, care poate fi obținută folosind `.length()` pe orice șir.

Textul ar trebui să fie înfășurat în ghilimele, există trei tipuri care pot fi utilizate:

- **Citate duble**

```js
let myString = "Hello !";
```

-  **Citate unice**

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

# Accesarea șirurilor

**Șirurile** sunt lanțuri de caractere numai în citire, ceea ce înseamnă că nu le putem schimba.

**Le accesăm** după indexul lor. Există două moduri de a face acest lucru.

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

[slide]
# Iterează Printr-un Șir: Demo

[vimeo-video]
[stream language="EN" videoId="489817402/1b82ef9f2e" default /]
[stream language="RO" videoId="489817402/1b82ef9f2e"  /]
[/video-vimeo]

Iterează printr-un șir folosind bucla `for-of`:

```js live
let text = 'Hello, there!'

for(let el of text){
  console.log(el);
}
```

[/slide]

[slide]
# Problemă: Print Characters

[vimeo-video]
[stream language="EN" videoId="489817393/3dc5fc66ce" default /]
[stream language="RO" videoId="489817393/3dc5fc66ce"  /]
[/video-vimeo]

[code-task title="Print Characters" taskId="text-processing-lab-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function printCharacters(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește un șir și imprimă caracterele sale pe linii separate.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['AWord']`| A |
||W|
||o|
||r|
||d|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
AWord
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
AWord
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
A
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
AB
[/input]
[output]
A
B
[/output]
[/test]
[test]
[input]
Pesho
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
GOSHOpesho
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

[slide]
# Soluți: Print Characters

## Missing Video

[code-task title="Print Characters" taskId="text-processing-lab-solution-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input) {
  let word = input[0];

  for (let i =0; i < word.length; i++){
    console.log(word[i])
 }
}
```

[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește un șir și imprimă caracterele sale pe linii separate.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['AWord']`| A |
||W|
||o|
||r|
||d|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
AWord
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
AWord
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
A
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
AB
[/input]
[output]
A
B
[/output]
[/test]
[test]
[input]
Pesho
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
GOSHOpesho
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