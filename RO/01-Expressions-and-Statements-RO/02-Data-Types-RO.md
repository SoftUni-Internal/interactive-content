// sectionId: "Javascript::Programming-Basics::Expressions-And-Statements::Data-Types"

# Tipurile de Date 

[slide hideTitle]
# Tipurile de Date

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-11-12-What-are-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există șase tipuri primitive de date:

* Datele de tip boolean: true or false (adevărat sau fals)
* Datele de tip Null
* Datele de tip nedefinit (Undefined)
* Datele numerice (numere întregi): `1, 2, 4.5, -2`
* Datele de tip text (string): `Hello, World!`
* Datele de tip simbol (simboluri) (o noutate a ECMAScript 6)
* Datele de tip BigInt

```js
const isValidated = true; // tipul de date boolean este reprezentat de una dintre cele două valori ale sale, adevărat (true) sau fals (false)
```

```js
const number = null; // tipul de date null reprezintă valorile goale
```

```js
let firstName;
console.log(firstName); // returnează valoarea nedefinită, întrucât este posibil ca datele să nu fie alocate
```

```js
const number1 = 15; // număr întreg
const number2 = 3.433; // număr zecimal
```

```js
const name = "George" // Tipurile de date letrice sau string reprezintă texte
```

```js
let name = Symbol("Peter");
let name2 = Symbol("Peter");
// nume == nume2 -> fals     
// Simbolurile sunt în mod garantat unice. Fiecare simbol trebuie să aibă o valoare diferită.
```

```js
const value1 = 900723149151234998n; // Vom folosi BigInt dacă vrem să reprezentăm valori mai mari decât cele numerice
```

Toate celelalte sunt tipuri de **obiecte**.

Veți aprofunda tipurile de **obiecte** mai târziu în cadrul cursului.
[/slide]

[slide hideTitle]
# Tipurile de Date sunt Dinamice

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-13-13-demo-Data-types-are-dynamic-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În limbajul JavaScript, tipurile de date sunt dinamice.

O variabilă individuală poate fi folosită pentru a conține diferite tipuri de date:

```js

let x = 5;   // x este un număr
x = "John";  // x este un text sau un șir 
x = true;  // x este o dată de tip boolean
```

Tipurile de date își pot stabili intervale de valori cu caracteristici similare.

Ele se pot caracteriza prin:

* **Nume**

* **Mărime** (capacitatea de memorie utilizată): Exemplu: 4 biți

* **Valoare inițială sau default**: Exemplu: 0
[/slide]

[slide hideTitle]
# Convenții Referitoare la Denumire

În programarea computerizată, convențiile privind numele sunt reprezentate de un set de **reguli** pentru alegerea numelor variabilelor.

În limbajul JavaScript, convenția pentru alocarea unui nume unei variabile este reprezentată de **camelCase**. 

Mai există și alte convenții privind denumirea variabilelor care sunt utilizate în alte limbaje de programare, precum **Pascalcase** și  **Snake case**. 

**camelCase** combină cuvinte după cum urmează:

* Indicând separarea cuvintelor cu o simplă literă mare la începutul fiecărui cuvânt următor

* Eliminând toate spațiile:


```js
let userLoginCount;
```

**PascalCase** combină cuvintele în următoarea manieră:

* Fiecare cuvânt începe cu literă mare, inclusiv primul

* Eliminând toate spațiile:

```js
let UserLoginCount;
```

**Snake_case** este o altă convenție privind alocarea unui nume, care combină cuvintele astfel:

* Folosind o liniuță jos ca separator al cuvintelor `_`
* Eliminând toate spațiile
* Litera de început a fiecărui element component este de obicei literă mică
* Prima literă poate fi literă mică sau majusculă, la alegere:

```js
let users_count;
let first_name;
```

[/slide]
