# Funcții

[slide hideTitle]

# Funcții de Prim Rang

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-3-7-first-class-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


In JavaScript funcțiile sunt tratate ca **first-class citizens**.

Aceasta înseamnă că, la fel ca valorile și obiectele primitive, funcțiile pot fi: 

- **Passed as arguments** către funcții

```js live
function sayHello() {
    return 'Hello, ';
}

function greet(helloFunction, name) {
    return helloFunction() + name;
}

console.log(greet(sayHello, 'Peter'));
```

În exemplul de mai sus `helloFunction` se comportă ca un înlocuitor al funcției `sayHello()`.

- **Assigned** la variabile.

```js live
let greet = function (name) {
  return `Hello, ${name}`;
};
console.log(greet('Johnny'));
```

Vom **invoke** funcția prin adăugarea unor **parentheses** după numele funcției. 

- **Returned** de la funcții.

În JavaScript, funcțiile sunt tratate ca **values**.

De aceea, ele pot fi returnate de o altă funcție :


```js live
function helloWorld() {
    return function() {
        console.log('Hello, world!');
    };
}

helloWorld();
```

Pe scurt, funcțiile de prim rang **susține toate operațiunile** posibile pentru orice primitiv sau obiect Javascript.

[/slide]

[slide hideTitle]

# Funcțiile de Rang Înalt

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-8-higher-order-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Higher-order functions** pot accepta alte funcții ca **arguments** și le returnează pe acestea ca **values**.

Iată o funcție de rang înalt, în acțiune: 

```js live
const sayHello = function() {
    return function() {
        console.log('Hello!');
    };
};

const greet = sayHello();
greet();
```

Când este invocată, funcția `sayHello` returnează o altă funcție care este asignată constantei `greet`.

[/slide]

[slide hideTitle]

# Predicatele

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-9-predicates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Un **predicate** este orice funcție care ia o valoare ca input și returnează **true** sau **false** bazat pe oricare dintre valorile care **îndeplinește condiția**.

```js live
function lessThanFive(num) {
    return num < 5;
}

let number = 5;
let result = lessThanFive(number);
console.log(result);
```

Funcția `lessThanFive` ia un număr ca intrare și verifică dacă este **mai mici de cinci**.

Ea returnează o valoare **boolean**, ceea ce înseamnă că este un **predicate**.

[/slide]

[slide hideTitle]

# Funcțiile de Rang Înalt Built-in

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-10-built-in-higher-order-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile de rang înalt Built\-in acceptă o **callback function** ca argument, care este apelată la **fiecare element** dintr-o matrice.

Iată câteva exemple :

- Array.prototype.**map**

Metoda `map()` crează o **new array** prin apelarea unei funcții callback furnizată ca argument la **fiecare element unic** din matricea de intrare. 

```js live
const numbers = [1, 2, 3];
const numsMultiplied = numbers.map((num) => num * 2);

console.log(numsMultiplied);
```

Să urmărim exemplul de mai sus.

Mai întâi, creăm o matrice de `numbers`.

Apoi, folosim metoda `map()` pentru a **înmulțiți fiecare element cu două**.

Salvăm acea **newly created array** în variabila `numsMultiplied`.

- Array.prototype.**filter**

Funcția `filter()` crează o nouă matrice care conține **numai elementele care corespund unei anumite condiții**:

```js live
const ages = [18, 20, 19, 27, 23];
const olderThanTwenty = ages.filter((age) => age > 20);

console.log(olderThanTwenty);
```

În exemplul de mai sus, matricea `olderThanTwenty` conține numai numerele **mai mare de 20**.

- Array.prototype.**reduce**

Metoda `reduce()` execută funcția callback la **each member of a given array**, rezultând o **valoare unică**.

Ea acceptă doi parametri :

- Funcția callback **reducer**, care acceptă un `accumulator` și o `currentValue`
- O `initialValue`, care este opțională

Aici putem vedea **reduce** în acțiune :

```js live
const arr = [51, 8, 17, 80, 4];
const sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum);
```

Când funcția **reducer** este apelată pentru **fiecare valoare** din matrice, **accumulator** reține rezultatul operației anterioare returnate din funcția reducer, iar **currentValue** este fixată la valoarea curentă a matricei.

La final, rezultatul este stocat în variabila **sum**.

[/slide]

[slide hideTitle]

# Funcțiile Pure

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-11-pure-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O funcție pură returnează întotdeauna același rezultat dacă îi este pasat același argument :

- Trebuie să **only depend** de **input arguments**

- Aceasta **does not depend** de nicio **change during execution** de stare sau date

O funcție este **pure** când este **free from side-effects**:

```js live
const pureFunc = function (a, b) {
  return a + b;
};

console.log(pureFunc(5, 2));
console.log(pureFunc(5, 2));
```

Nu contează de câte ori rulăm funcția **aceeași intrare**, aceasta va **produc întotdeauna același rezultat**.

[/slide]

[slide hideTitle]

# Transparența Referențială

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-12-referencial-transparency-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


O funcție **referentially transparent** poate fi înlocuită cu **return value** a sa și **not affect** restul programului. 

Să vedem un exemplu :

```js live
function add(a, b) {
  return a + b;
}

let letOne = add(5, 7);
let letTwo = 12;

console.log(letOne);
console.log(letTwo);
```

O funcție **referentially transparent**, **depinde doar de intrarea sa**.

[/slide]
