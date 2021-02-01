[slide hideTitle]
# Iterația peste caractere

[vimeo-video]
[stream language="EN" videoId="487119574/ea95aca57d" default /]
[stream language="RO" videoId="487119574/ea95aca57d"  /]
[/video-vimeo]

Este bine de știut că **buclele for** nu funcționează doar cu numere.

De asemenea, putem folosi **buclele for** pentru a itera peste**caractere**.

Iată un exemplu despre cum o buclă poate trece secvențial prin unele **litere** din alfabetul englez:

```js live
 function latinLetters(startChar, endChar) {
  let startValue = startChar.charCodeAt(0);
  let endValue = endChar.charCodeAt(0);
  let result = '';
  for (let i = startValue; i <= endValue; i++) {
    result += String.fromCharCode(i) + ' ';
  }
  console.log(result);
}
```

# ASCII Table

**ASCII** înseamnă American Standard Code for Information Interchange.

Calculatoarele pot înțelege numai numerele, deci un cod **ASCII** este reprezentarea numerică a unui caracter precum `a` sau `@` sau o acțiune de un fel.

Acesta este un exemplu de parte a tabelului:

[image assetsSrc="04-for-loop-ascii.png" /]

Și aici puteți verifica întregul [Tabel ASCII](http://www.asciitable.com)

Coloanele pe care le-ați folosi cel mai probabil în scopul acestui curs sunt cele **zecimale** și **charactere**.

De exemplu, valoarea zecimală a caracterului **a** este **97** și cea corespunzătoare lui `@` este `64`.


# Conversii de caractere

Convertiți un număr ASCII / Unicode într-un caracter:

```js live
let letter = String.fromCharCode(65);
console.log(letter);
```

Convertiți un caracter în codul ASCII / Unicode:

```js live
let letter = 'A';
let asciiValue = letter.charCodeAt(0);
console.log(asciiValue);
```
[/slide]

[slide hideTitle]
# Problem: Latin Letters


[vimeo-video]
[stream language="EN" videoId="487119629/a9b273defe" default /]
[stream language="RO" videoId="487119629/a9b273defe"  /]
[/video-vimeo]

[code-task title="Latin Letters" taskId="pb-js-for-loop-lab-Latin-Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function latinLetters(startChar, endChar) {
    // Write your code here...
}

```
[/code-editor]
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
Scrieți un program care:

* Citește 2 litere
* Imprimă toate literele din intervalul dat inclusiv

# Example
| **Input** | **Output** |
| --- | --- |
|'a', 'c'| a b c  |

[/task-description]
[tests]
[test]
[input]
d
u
[/input]
[output]
d e f g h i j k l m n o p q r s t u
[/output]
[/test]
[test]
[input]
a
d
[/input]
[output]
a b c d
[/output]
[/test]
[test]
[input]
b
p
[/input]
[output]
b c d e f g h i j k l m n o p
[/output]
[/test]
[test]
[input]
p
t
[/input]
[output]
p q r s t
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Latin Letters

[vimeo-video]
[stream language="EN" videoId="487119646/6501686e7f" default /]
[stream language="RO" videoId="487119646/6501686e7f"  /]
[/video-vimeo]

[code-task title="Latin Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function latinLetters(startChar, endChar) {
  // Scrieți codul dvs. aici
}

```
[/code-editor]
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
Scrieți un program care:

* Citește 2 litere
* Imprimă toate literele din intervalul dat inclusiv

# Example
| **Input** | **Output** |
| --- | --- |
|'a', 'c'| a b c  |

[/task-description]
[tests]
[test]
[input]
d
u
[/input]
[output]
d e f g h i j k l m n o p q r s t u
[/output]
[/test]
[test]
[input]
a
d
[/input]
[output]
a b c d
[/output]
[/test]
[test]
[input]
b
p
[/input]
[output]
b c d e f g h i j k l m n o p
[/output]
[/test]
[test]
[input]
p
t
[/input]
[output]
p q r s t
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
