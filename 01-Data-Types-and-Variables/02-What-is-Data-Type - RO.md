[slide]

# Ce este un tip de date?

[vimeo-video]
[stream language="EN" videoId="489371369/e56b1d1bdf" default /]
[stream language="RO" videoId="489371369/e56b1d1bdf"  /]
[/video-vimeo]


Tipurile de date informează calculatorul ce cantitate de infromații trebuie să citească **din memorie**, dintr-o perspectivă pur tehnică.

În Javascipt putem **modifica** conținutul variabilelor. 

De exemplu, dacă am declarat o variabilă ca număr, putem să-i schimbăm foarte ușor valoarea:

``` js live
let myVar = 5;
console.log(`The number is ${myVar}`);

myVar = "JavaScript";
console.log(`I love ${myVar}!`);
```
Cu toate că putem schimba valoarea variabilei, aceasta nu este o practică bună.

Variabilele în Javascript **nu au** un tip, în ele putem **stoca** orice tipuri de date dorim, deci datele au tipuri.

În JavaScript, avem **șapte tipuri de date primitive** și un tip compozit, denumit de asemenea, tip referință. 

Tipurile de date **primitive** sunt: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol`, `BigInt`.

Tipurile de date de **referință** sunt: `objects` `(obiecte)` și `arrays``(matrici)`.

[image assetsSrc="data-types-in-js.png" /]

Examples:
``` js
let number = 10; 					     // Number
let name = 'George';				     // String
let array = [1, 2, 3];				     // Array
let isTrue = true;					     // Boolean
let person = {name: 'George', age: 25};	 // Object
let empty = null;					     // Null
let unknown = undefined;				 // Undefined
```
[/slide]

[slide]


# Tipizarea dinamică

[vimeo-video]
[stream language="EN" videoId="489371371/38ee98e956" default /]
[stream language="RO" videoId="489371371/38ee98e956"  /]
[/video-vimeo]

Variabilele în JavaScript nu sunt strict asociate cu un **tip de valoare** specific.

Astfel, putem re-aloca variabile de toate tipurile:

``` js
let var = 15; // var now is a number
var = "Peter"; // var now is a String
var = false; // var now is boolean
 
```

[/slide]