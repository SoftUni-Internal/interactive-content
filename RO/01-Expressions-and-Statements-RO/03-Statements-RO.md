// sectionId: "Javascript::Programming-Basics::Expressions-And-Statements::Statements"

# Instrucțiuni


[slide hideTitle]
# Comenzile în Programele de Calculator

Acțiunile pe care le aplică un program sunt exprimate ca **instrucțiuni**.

JavaScript suportă **diferite** tipuri de instrucțiuni, iar mai jos enunțăm câteva dintre acestea:

* **Declaration** statements: declară constante și variabile locale

* **Expression** statements: evaluează expresii

* **Selection** statements: selectează o comandă din mai multe comenzi posibile

* **Iteration** statements: execută în mod repetat o comandă dată

* **Jump** statements: transferă controlul
  
Acțiuni comune pot include:

-  **Declararea** unei variabile

  Declararea unei variabile înseamnă să-i definim tipul.

```js
let counter;
```

-  **Alocarea** unei valori

După ce am declarat o variabilă, putem să îi alocăm o valoare. 

Alocarea unei valori unei variabile înseamnă că stocăm în ea o valoare. 

```js
counter = 1;
```

- Declararea \+ inițializarea

```js
let counter = 1;
```

- Tipărirea unei valori

```js live
let counter = 1;
console.log(counter);
```

- **Modificarea** unei valori

```js
counter++;
```
  
```js
sum = a + b;
```

## Comentarii

**Comentariile** sunt **instrucțiuni** speciale care **nu** sunt executate.

Acestea sunt un mod pentru programatori de a scrie **notițe** pentru ei înșiși sau pentru alți programatori.

Putem folosi comentariile pentru **a clarifica** care este scopul pe care vrem să îl atingem cu codul nostru.

Există **două tipuri** de comentarii în Javascript. 

- Comentarii pe un singur rând

**Comentariile pe un singur rând** au cea mai simplă sintaxă.

Pentru a declara unul, folosim **două bare oblice** `//`, urmate de comentariu:

```js
// Acesta este un comentariu pe un singur rând 💬
```

Putem să le utilizăm pentru **a explica** codul nostru:

```js live
console.log("JavaScript e super! 😎"); // Această linie tipărește un șir pe consolă
```

Sau pentru **opri** o linie de cod din **a rula**:

```js live
console.log("Vremea afară este însorită. 🌞"); 
// console.log("Afară plouă. 🌧");
```

Orice se află pe o linie de comentariu **va fi ignorat de compilator**.

- Comentarii pe linii multiple

După cum sugerează numele, **comentariile pe linii multiple** pot ocupa **mai multe** linii.

Acest lucru poate fi util atunci când un comentariu este **prea lung** pentru o singură linie și ar necesita derulare orizontală.

Le deschidem folosind o **bară oblică**, urmată de un **asterisc**:

```js live
let name = "Harry";

console.log(`Hello, ${name}! 🙋`);

/*Acest comentariu
  ocupă mai multe 
  linii*/
```

Și să le închidem folosind **un asterisc și o bară oblică**.

Putem să scriem comentarii pe o singură linie folosind sintaxa:

```js
/*Acesta este un comentariu pe un singur rând 👨🏼‍💻*/
```
  
[/slide]
