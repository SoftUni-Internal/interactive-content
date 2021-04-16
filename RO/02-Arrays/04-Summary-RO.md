[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-27-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat: 

- Matricele sunt secvențe de elemente 

    - elementele lor sunt numerotate de la  0 până la `length-1`

``` js live
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[numbers.length-1])
```

- Putem crea o matrice, utilizând următoarea sintaxă: 
``` js 
let numbers = [1, 2, 3, 4, 5];
```
- Putem accesa elementele matricei prin indicii acestora:

``` js 
let numbers = [1, 2, 3, 4, 5];
```
- Elementele pot fi iterate printr-o buclă standard sau o buclă "**for-of**" 
``` js live
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
```

## În lecția următoare veți învăța:

- Ce reprezintă o funcție?

- Declararea și invocarea funcțiilor

- Funcțiile imbricate

- Tipurile referință și valoare

- Funcțiile săgeată

- Denumirea și cele mai bune practici
[/slide]
