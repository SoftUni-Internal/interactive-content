[slide hideTitle]
# Rezumat

## În această lecție ați învățat:

- JavaScript este un limbaj de programare dinamic

- Puteți schimba tipul unei variabile sau puteți adăuga noi proprietăți / metode în timp ce programul rulează

- Tipurile de date pot fi tipuri de date primitive sau de referință:
   - tipurile primitive stochează direct valoarea
   - tipurile de referință stochează o referință la o locație de memorie

- Declararea variabilelor folosind `let`, `const`, `var`:

```js
let name = "Arthur";
```
```js
const dayDuration = 24;
```

```js
var age = 5;
```

- Domeniul variabilei - determină unde poate fi accesată variabila:
    - domeniul global - orice variabilă care nu se află într-o funcție sau un bloc de cod
    - domeniul funcțional - variabile care sunt declarate în interiorul funcțiilor
    - domeniul  blocului - `let` și `const` sunt vizibile în blocul de cod în care sunt plasate

- Operatorii aritmetici returnează o singură valoare aritmetică (`+`, `-`, `*`, `/`, etc.)

```js
let a = 15;
let b = 5;
let c;
c = a * b;
```
- Operatorii de comparație sunt utilizați pentru compararea valorilor (`==`, `===`, `!=`, >, etc.)

- Valorile pot fi **truthy** or **falsy**, în funcție de în funcție de constrângerea la adevărat sau fals atunci când sunt evaluate

- `typeof` este folosit pentru a returna tipul unui operand 

```js
const val = 5; 
console.log(typeof val);
// number
```

- `instanceof` returnează true dacă obiectul bifat este o instanță a unui alt obiect specificat

```js
const cars = ["Saab", "Volvo", "BMW"]; 
console.log(cars instanceof Array); 
 // Returns true
```

- Funcțiile sunt un set de instrucțiuni pe care le putem denumi și reutiliza

- Funcțiile pot lua 0 sau mai mulți parametri și pot întoarce un rezultat

```js
function printStars(count) {
    console.log("*".repeat(count));
}
printStars(10); //invoking the function
```

- Funcțiile pot fi declarate în trei moduri diferite:

```js
//Function declaration
function walk() {
    console.log("walking");
}
```

```js
//Function expression
const walk = function (){
    console.log("walking");
}
```

```js
//Arrow function
const walk = () => {
    console.log("walking");
}
```

- Funcțiile de primă clasă sunt funcții care sunt transmise ca argumente către alte funcții

- Sunt cunoscute și sub denumirea de funcții de apel invers

```js
function running() {
    return "Running";
}
function category(run, type) {
    console.log(run() + " " + type);
}
category(running, "sprint");
 //Running sprint
```
- Functions can be nested

```js
function joinWords(word1, word2) {
  function checkLength(word1, word2) {
    return word1.length + word2.length;
  }
  return `New word: "${word1.concat(word2)}",
  length: ${checkLength(word1,word2)}`;
}
console.log(joinWords('one', 'two'));
```

- Ridicarea este procesul de mutare a tuturor declarațiilor în partea de sus a domeniului în timpul compilării

- Doar declarațiile sunt ridicate

- Doar variabilele declarate cu `var` pot fi ridicate:

```js
num = 6;
console.log(num); // Returns 6
var num;
```
- Funcțiile pot fi, de asemenea, utilizate înainte de declararea lor:

```js
run(); // running
function run() {
    console.log("running");
};
```

## În lecția următoare veți învăța:

- Matrice
   - accesarea elementelor
   - proprietăți și metode
   - iterație prin elementele  matricei
- Matrice imbricate
   - iterarea prin matrici imbricate
   - manipularea datelor matricei imbricate

[/slide]
