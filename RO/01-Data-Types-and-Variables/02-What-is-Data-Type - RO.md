[slide hideTitle]

# Ce Este un Tip de Date?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-8-9-10-what-is-a-data-type-examples-of-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tipurile de date informează calculatorul ce cantitate de infromații trebuie să citească **din memorie**, dintr-o perspectivă pur tehnică.

În Javascipt putem **modifica** conținutul variabilelor. 

De exemplu, dacă am declarat o variabilă ca număr, putem să-i schimbăm foarte ușor valoarea:

``` js live
let myVar = 5;
console.log(`The number is ${myVar}`);

myVar = 'JavaScript';
console.log(`I love ${myVar}!`);
```

Cu toate că putem schimba valoarea variabilei, aceasta nu este o practică bună.

Variabilele în Javascript **nu au** un tip, în ele putem **stoca** orice tipuri de date dorim, deci datele au tipuri.

În JavaScript, avem **șapte tipuri de date primitive** și un tip compozit, denumit de asemenea, tip referință. 

Tipurile de date **primitive** sunt: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol`, `BigInt`.

Tipurile de date de **referință** sunt: `objects` și `arrays`.

[image assetsSrc="data-types-in-js.png" /]

Exemple:
``` js
let number = 10;         // Number
let name = 'George';     // String
let array = [1, 2, 3];   // Array
let isTrue = true;       // Boolean
let person = {name: 'George', age: 25}; // Object
let empty = null;        // Null
let unknown = undefined; // Undefined
```
[/slide]

[slide hideTitle]


# Tipizarea Dinamică

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-11-dynamic-typing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Variabilele în JavaScript nu sunt strict asociate cu un **tip de valoare** specific.

Astfel, putem re-aloca variabile de toate tipurile:

``` js live
let variable = 15; 
console.log(`My variable is ${typeof(variable)}`)

variable = 'Peter'; 
console.log(`My variable is ${typeof(variable)}`)

variable = false;
console.log(`My variable is ${typeof(variable)}`)
```

[/slide]
