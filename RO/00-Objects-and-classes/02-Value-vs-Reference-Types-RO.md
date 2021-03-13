# Valoare vs. Tipuri de Referință

[slide hideTitle]
# Valoare vs. Tipuri de Referință

[image assetsSrc="Value-vs-Reference-Types(1).gif" /]

## Tipuri de valori

În Javascript, există șapte tipuri de date de bază (numite și primitive).

Cele mai importante șapte tipuri de date sunt "**Boolean**", "**String**", "**Number**", "**null**", "**undefined**", "**Symbol**" și "**BigInt**".

Ne referim la acestea ca **tipuri de date primitive.**

O singură **variabilă** poate stoca doar **un singur tip de date**.

Dacă un tip primitiv este atribuit unei variabile, am putea spune că această variabilă conține valoarea primitivă:

``` js live
let a = 10;
let c = a;
let b = 'abc';
let d = b;

console.log(`Variable a = ${a}`);
console.log(`Variable b = ${b}`);
console.log(`Variable b = ${c}`);
console.log(`Variable b = ${d}`);
```

## Tipuri de Referință

Există **trei tipuri comune de date de referință** - **Obiecte**, **Matrice** și **Funcții**.

**Obiectele** și**matricele** sunt „colecții” - o modalitate de a grupa mai multe puncte de date într-un singur pachet pe care îl putem transmite folosind accesul.

**Funcțiile** sunt, de asemenea, obiecte, un tip special de obiecte numite: **obiecte funcționale.**

Ele pot fi **invocate de câte ori avem nevoie.**

Toate acestea sunt **Obiecte tehnice**, deci ne vom referi la ele în viitor în mod colectiv ca Obiecte.

Variabilelor cărora li se atribuie o valoare neprimitivă li se oferă o referință pentru acea valoare.

``` js live
let array = ['a', 'b', 'c', 'd'];
let array2 = array;

console.log(`First array value: ${array}`);
console.log(`Second array value: ${array2}`);

array.push('e');

console.log(`First array value: ${array}`);
console.log(`Second array value: ${array2}`);
```

În acest exemplu creăm o matrice, numită `arrayOne` căreia îi atribuim valori.

Această valoare este stocată în memoria și atașarea doar a referinței,însa este atașată si variabilei.

Când atribuim `arrayOne` celei de-a doua variabile `arrayTwo`, creăm o copie a referinței care indică memoria.

Din acest motiv, atunci când înregistrăm amândouă, obținem același rezultat `['a', 'b', 'c', 'd']`. 
 
Când adăugăm șirul `e` la matrice apelând `array.push('e')` modificăm valoarea stocată în memorie.
 
Deoarece `arrayTwo` este doar o copie a punctului de referință la aceeași valoare, obținem același rezultat atunci când `console.log` ambele variabile. 

[/slide]