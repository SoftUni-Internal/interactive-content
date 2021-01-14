# Tipurile de date și gama de variabile

[slide]
# Tipurile de date

[vimeo-video]
[stream language="EN" videoId="486855368/8cbb7ec0db" default /]
[stream language="RO" videoId="486855368/8cbb7ec0db"  /]
[/video-vimeo]

Există șase tipuri primitive de date:

* datele de tip boolean - true or false (adevărat sau fals)
* datele de tip Null
* datele de tip nedefinit (Undefined)
* datele numerice (numere întregi) - `1, 2, 4.5, -2`
* datele de tip text (string) - `Hello, World!`
* datele de tip simbol (simboluri) (o noutate a ECMAScript 6)
* datele de tip BigInt

```js
const isValidated = true; // tipul de date boolean este reprezentat de una dintre cele două valori ale sale, adevărat (true) sau fals (false)
```

```js
const number = null; // tipul de date null reprezintă valorile goale
```

```js
let firstName;
console.log(firstName); // returnează valoarea nedefinită, intrucât este posibil ca datele să nu fie alocate
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

[slide]
# Tipurile de date sunt dinamice

[vimeo-video]
[stream language="EN" videoId="486855395/6827c0da76" default /]
[stream language="RO" videoId="486855395/6827c0da76"  /]
[/video-vimeo]

În limbajul JavaScript, tipurile de date sunt dinamice.

O variabilă individuală poate fi folosită pentru a conține diferite tipuri de date:

```js

let x = 5;   // x este un număr
x = "John";  // x este un text sau un șir 
x = true;  // x este o data de tip boolean
```

Tipurile de date își pot stabili intervale de valori cu caracteristici similare.

Ele se pot caracteriza prin:

* **Nume / Denumire**

* **Mărime** (capacitatea de memorie utilizată) - Exemplu: 4 biți

* **Valoare inițială sau default** - Exemplu: 0
[/slide]

[slide]
# Convenții referitoare la denumire

În programarea computerizată, convențiile privind nume sunt reprezentate de un set de **reguli** pentru alegerea numelor variabilelor.

În limbajul JavaScript, convenția pentru alocarea unui nume unei variabile este reprezentat de **camel-case**. 

Mai există și alte convenții privind denumirea variabilelor care sunt utilizate în alte limbaje de programare, precum `Pascal case` și  `Snake case`. 

**Camel case** combină cuvinte după cum urmează:

* Indicând separarea cuvintelor cu o simpla literă mare la începutul fiecărui cuvânt următor

* Eliminând toate spațiile:

```js
let userLoginCount;
```

**Pascal case** combină cuvintele în următoarea manieră:

* Fiecare cuvânt începe cu literă mare, inclusiv primul

* Eliminând toate spațiile:

```js
let UserLoginCount;
```

**Snake-case** este o altă convenție privind alocarea unui nume, care combină cuvintele astfel:

* folosind o liniuță jos ca separator al cuvintelor `_`
* eliminând toate spațiile
* litera de început a fiecărui element component este de obicei literă mică
* prima literă poate fi literă mică sau majusculă, la alegere:

```js
let users_count;
let first_name;
```

[/slide]