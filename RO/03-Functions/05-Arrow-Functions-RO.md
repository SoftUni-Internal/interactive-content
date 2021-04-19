# Funcții Săgeată

[slide hideTitle]
# Ce reprezintă Funcțiile Săgeată?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-27-28-arrow-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Funcțiile săgeată `=>` au fost introduse cu [ECMAScript 6](https://en.wikipedia.org/wiki/ECMAScript) în 2015.

Cu noua sintaxă putem obține adeseori un cod mai **concis**.

În unele cazuri, se face interpretarea funcțiilor de apel invers cu mai multe linii în funcții de apel invers pe o singură linie, datorită caracteristicilor precum returnarea implicită.

Funcțiile săgeată nu pot înlocui funcțiile standard peste tot.

Există unele contexte în care nu le putem folosi și vom vedea de ce.

## Exemple:

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

- Funcția săgeată cu mai mulți parametri:

```js live
let sum = (a, b) => a + b;

console.log(sum(5, 6));  
```

[/slide]
