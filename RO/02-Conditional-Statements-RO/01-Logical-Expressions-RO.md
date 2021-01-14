[slide]

# Operatori de comparație

[vimeo-video]
[stream language="EN" videoId="486878604/02a3167730" default /]
[stream language="RO" videoId="486878604/02a3167730"  /]
[/video-vimeo]

În programare, putem compara valorile folosind următorii operatori:
| Operatori | Desemnare |
|---------|-----------|
| Egal cu (valoare) |   **==** |
| Nu este egal cu (valoare) |   **!=** |
| Egal cu  (valaore&tip) |   **===** |
| Nu este egal cu (valaore&tip) |   **!==** |
| Mai mare decât |   **>** |
| Mai mare decât sau egal cu |   **>=** |
| Mai mic decât |   **<** |
| Mai mic decât sau egal cu |   **<=** |

Rețineți diferența dintre `===` and`==`.
Vedeți exemplul:
```js live
let a = 5;
let b = '5';
console.log(a == b) // true
console.log(a === b) // false
```

Atunci când este comparat, rezultatul este o valoare booleană `adevărat` sau `fals`, în funcție de rezultatul comparației este `true` sau `false`.

[/slide]
[slide]

# Compararea valorii

[vimeo-video]
[stream language="EN" videoId="486878826/d63c730134" default /]
[stream language="RO" videoId="486878826/d63c730134"  /]
[/video-vimeo]

Exemple de astfel de expresii sunt următoarele:
```js live
let a = 5;
let b = 10;
console.log(a < b);
console.log(a > 100);
console.log(a <= 5);
console.log(b === 2 * a);
console.log(a !== b);
```

De asemenea, puteți compara expresii numerice.

Expresiile pe care le comparați pot fi expresii complexe, ca în exemplul următor.

``` js live
x / 45 * (y +17)> = Math.sqrt (z) / (p - (x * 16))
```

Expresia complexă precedentă include **literale**, **variabile** și **apeluri de funcții.**

Expresiile de pe ambele părți ale operatorului de comparație sunt **evaluate**. Apoi, valorile date sunt **comparate** utilizând operatorul de comparație >=.

Dacă valoarea expresiei din partea stângă este mai mare sau egală cu valoarea expresiei din dreapta, întreaga expresie se evaluează la `true`, în caz contrar, se evaluează la `false`.

## Compararea de șiruri

Compararea textului utilizând operatorul de egalitate (`==`).

Doi operanzi de șir sunt egali atunci când ambii sunt `null` sau ambii au aceeași lungime și au caractere identice în fiecare poziție de caracter:
```js live
let a = "Examplе";
let b = a;
console.log(a === b);
```

```js
let a = "hello";
let b = "hello";
console.log(a === b);
console.log(a < b); // error
```
[/slide]
