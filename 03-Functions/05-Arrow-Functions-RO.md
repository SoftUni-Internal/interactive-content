# Arrow Functions

[slide hideTitle]
# What are Arrow Functions?


Funcții săgeată `=>` au fost introduse cu [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). 

Cu noua sintaxă putem obține adeseori un cod mai concis.

În unele cazuri, se face interpretarea funcțiilor de apel invers cu mai multe linii în funcții de apel invers pe o singură linie, datorită caracteristicilor precum returnarea implicită.

Funcțiile săgeți nu pot înlocui funcțiile standard peste tot.

Există unele contexte în care nu le putem folosi și vom vedea de ce.

## Example:

- Sintaxa funcției:

```js live
let increment = function(x) {
  return x + 1;
}

console.log(increment(5));  
```

- Sintaxa funcției săgeată:

``` js live
let increment = x => x + 1;

console.log(increment(5));  
```

- Funcția săgeată cu mai mulți parametrii:

```js live
let sum = (a, b) => a + b;

console.log(sum(5, 6));  
```

[/slide]
