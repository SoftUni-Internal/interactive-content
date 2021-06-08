# Matrice în JavaScript

[slide hideTitle]
# Ce este o matrice?

Ați aflat deja despre **diferitele** tipuri de colecții, cum ar fi **matrice**, **liste**, **stive**, **cozi** și cum să **le modificați**  folosind metode din **fluxurile Java**.

În acest curs, veți afla despre **cele mai importante două structuri de date** din JavaScript:

- Matrice
- Obiecte

Tablourile din JavaScript sunt **obiecte de tip listă** asemănătoare cu cele din Java, ceea ce înseamnă că le putem **modifica**, folosind **metode diferite**.

În timp ce Java oferă structuri de date diferite în scopuri diferite, JavaScript **are numai matrice**.

Matricele din JavaScript, de asemenea, **fac referință** la tipuri de date, ceea ce înseamnă că **informațiile** matricei sunt stocate în **memoria heap** în timp ce **stiva stochează** doar adresa sa.

[image assetsSrc="java-js-adv-arrays-01.png" /]

Primul element al unei matrice este stocat la **indexul 0**, ceea ce face ca matricea să fie **zero-based**, iar ultimul element să fie stocat la **array.length-1**.

Aruncați o privire la următorul exemplu:

```js
let numbers = [10, 20, 30, 40, 50];
```

În exemplul de mai sus, o matrice de numere întregi este creată cu matricea literală.

Definim variabila cu cuvântul cheie `let`, urmat de numele pe care i-l atribuim.. 

Pentru a inițializa matricea, trebuie să folosim `[]` (paranteze pătrate).

O matrice poate fi, de asemenea, inițializată cu cuvântul cheie `const`:

```js
const numbers = [10, 20, 30, 40, 50];
```

[/slide]

[slide hideTitle]
# Specificații ale matricelor JavaScript

În Java, când o matrice este **inițializată**, trebuie specificate **tipul său de date** și **lungimea**.

În JavaScript, când este inițializată o matrice, **nu este necesar** să specificați niciuna dintre aceste proprietăți.

Aceasta înseamnă că putem **crea o matrice goală** și insera **câte elemente** avem nevoie.

Matricea va fi **redimensionată automat**.

```js live
let elements = [];
console.log(`The length of the array is: ${elements.length}`);

// Redimensionarea matricei
elements[0] = 10; 
elements[1] = 20;
elements[2] = 30;

console.log(`The length after resizing is: ${elements.length}`);
```

În JavaScript, **nu fiecare element al matricei trebuie să conțină date**.

Dacă încercăm să atribuim o valoare unui indice **inexistent**, JavaScript **va umple** elementele dinaintea acestuia cu "**undefined**" și va crește dimensiunea matricei:

```js live
let elements = [];

elements[0] = 10; 
elements[5] = 20;
elements[10] = 30;

console.log(`The length of the array is: ${elements.length}`);

console.log(`elements[0] = ${elements[0]}`);
console.log(`elements[1] = ${elements[1]}`);
console.log(`elements[5] = ${elements[5]}`);
```

Un **element** la un anumit indice poate fi, de asemenea, **modificat**:


```js live
let elements = [10, 20, 30];
console.log(`Element on index 1 is: ${elements[1]}`);

elements[1] = 100;

console.log(`The new element on index 1 is: ${elements[1]}`);

```

[/slide]

[slide hideTitle]
# Matrice de diferite tipuri

Matricele din JavaScript pot conține **diferite** tipuri de date:

Aceasta este o matrice de **numere**:
```js
let numbers = [10, 20, 30, 40, 50];
```

Matricea aceasta stochează **strings**:
```js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Iată un exemplu de matrice care stochează date **mixte**:
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide hideTitle]
# Indexarea matricelor

**Setarea** sau **accesarea** elementelor cu o notație cu **non-întregi** și **paranteză** (sau notație punct) **nu va funcționa**.

```js live
let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);               
console.log(arr.hasOwnProperty(3.4));

arr['fruit'] = 'Grapes';
console.log(arr.length);
console.log(arr);
```

Acest exemplu arată rezultatul **setării** elementelor folosind un indice **zecimal**, un indice **negativ** și un **șir**.

**Interpretorul** va **converti** fiecare index într-un **șir** și va seta valoarea ca o **proprietate**.

Ca urmare, lungimea matricei este **zero**.
[/slide]
