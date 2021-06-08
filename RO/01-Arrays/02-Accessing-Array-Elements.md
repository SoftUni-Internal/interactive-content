
# Accesarea elementelor matricei

[slide hideTitle]

# Accesarea elementelor matricei după index

În JavaScript, elementele dintr-o matrice sunt accesate prin **indecșii** lor:

```js live
let elements = [10, 20, 30];

console.log(`elements[0] = ${elements[0]}`);
console.log(`elements[2] = ${elements[1 + 1]}`);
```

În Java, atunci când se încearcă **accesul** unui element la un index **inexistent**, va fi aruncata o **excepție**.

Când încercați să accesați un **element** de la un index **inexistent** în JavaScript, rezultatul va fi: "**undefined**":

```js live
let elements = [10, 20, 30];

console.log(elements[10]);
console.log(elements[-1]);
```

[/slide]

[slide hideTitle]

# Proprietăți valide și nevalide

În JavaScript, **proprietățile obiectului** pot fi accesate utilizând:

- Notație cu punct
- Paranteză patrata

O matrice își stochează elementele ca **proprietăți** și folosim un număr ca **nume de proprietate** pentru a le prelua

```js live
let years = [1950, 1960, 1970, 1980, 1990, 2000];
// console.log(years.0);   // O eroare de sintaxă
console.log(years[0]);
```
O notație cu punct cu numere **nu poate fi** utilizată pentru a recupera elementul unui tablou.

[/slide]

[slide hideTitle]

# Operatorul Rest

Operatorul rest ne permite să **folosim** o cantitate nedeterminată de matrice sau obiecte.

```js live
let numbers = [10, 20, 30, 40, 50];
let [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber) // Primul element
console.log(secondNumber) // Al doilea element
console.log(rest) // Restul numerelor
```

În acest exemplu, creăm trei noi **variabile** din **matricea** inițială de numere utilizând **destructurarea**:

- "firstNumber" - un număr
- "secondNumber" - un număr
- "rest" - noua matrice

Operatorul `...rest`  îi spune **interpretorului** că **toate valorile cu excepția** primului și celui de-al doilea element merg la **o altă matrice**.

De asemenea, poate fi **folosit** pentru a face o **copie** a unui tablou:

```js live
let numbers = [10, 20, 30, 40, 50];
let [...rest] = numbers;

console.log(rest == numbers);
```

În acest exemplu, există două matrici **separate** cu valori **identice** ale căror **referințe** indică o adresă diferită în memorie.

Compararea celor două tablouri va avea ca rezultat "fals".
[/slide]
