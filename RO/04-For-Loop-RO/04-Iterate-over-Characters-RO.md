// sectionId: "Javascript::Programming-Basics::For-Loop::Iterate-Over-Characters"

[slide hideTitle]

# Iterația Peste Caractere

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-24-27-iterating-over-characters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Este bine de știut că **buclele for** nu funcționează doar cu numere.

De asemenea, putem folosi **buclele for** pentru a itera peste **caractere**.

Iată un exemplu despre cum o buclă poate trece secvențial prin **literele** alfabetului limbii engleze:

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

latinLetters('a', 'k') 
```

## Tabelul ASCII 

**ASCII** înseamnă American Standard Code for Information Interchange.

Calculatoarele pot înțelege numai numere, deci un cod **ASCII** este reprezentarea numerică a unui caracter precum `a` sau `@` sau o acțiune de un fel.

Acesta este un exemplu de parte a tabelului:

| **Dec** | **Hex** | **Char** | **Dec** | **Hex** | **Char** |
| :-----: | :-----: | :------: | :-----: | :-----: | :------: |
|   64    |   40    |    \@    |   96    |   60    |    \`    |
|   65    |   41    |    A     |   97    |   61    |    a     |
|   66    |   42    |    B     |   98    |   62    |    b     |
|   67    |   43    |    C     |   99    |   63    |    c     |
|   68    |   44    |    D     |   100   |   64    |    d     |
|   69    |   45    |    E     |   101   |   65    |    e     |
|   70    |   46    |    F     |   102   |   66    |    f     |
|   71    |   47    |    G     |   103   |   67    |    g     |
|   72    |   48    |    H     |   104   |   68    |    h     |
|   73    |   49    |    I     |   105   |   69    |    i     |
|   74    |   4A    |    J     |   106   |   6A    |    j     |

Aici puteți verifica întregul [Tabel ASCII](http://www.asciitable.com)

Coloanele pe care le-ați folosi cel mai probabil în scopul acestui curs sunt cele **zecimale** și cele pentru **caractere**.

De exemplu, valoarea zecimală a caracterului "**a**" este **97** și cea corespunzătoare lui `@` este `64`.

## Conversiuni de Caractere

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

# Problemă cu Soluție: Latin Letters

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-29-solution-latin-letters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Latin Letters" taskId="pb-js-for-loop-Latin-Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function latinLetters(startChar, endChar) {
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

Creați un program care imprimă toate literele dintr-un interval dat:

- Veți primi 2 litere care semnifică începutul și sfârșitul intervalului
- Imprimați toate literele din intervalul dat, inclusiv cele 2 litere primite

# Exemplu

| **Intrare**              | **Ieșire** |
| ---------------------- | ---------- |
| latinLetters('a', 'c') | a b c      |
| latinLetters('e', 'h') | e f g h    |

[/task-description]
[tests]
[test open]
[input]
latinLetters('a', 'c')
[/input]
[output]
a b c  
[/output]
[/test]
[test open]
[input]
latinLetters('e', 'h')
[/input]
[output]
e f g h
[/output]
[/test]
[test]
[input]
latinLetters('d', 'u')
[/input]
[output]
d e f g h i j k l m n o p q r s t u
[/output]
[/test]
[test]
[input]
latinLetters('a', 'd')
[/input]
[output]
a b c d
[/output]
[/test]
[test]
[input]
latinLetters('b', 'p')
[/input]
[output]
b c d e f g h i j k l m n o p
[/output]
[/test]
[test]
[input]
latinLetters('p', 't')
[/input]
[output]
p q r s t
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
