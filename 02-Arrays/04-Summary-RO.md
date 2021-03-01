[slide]
# Recapitulare

[vimeo-video]
[stream language="EN" videoId="489372690/1982a43d5b" default /]
[stream language="RO" videoId="489372690/1982a43d5b"  /]
[/video-vimeo]


Ce ați învățat în această lecție: 

- Matricile sunt secvențe de elemente 

    - Elementele lor sunt numărate de la  `0` până la `length-1 `

``` js live
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[numbers.length-1])
```

- Putem crea o matrice, utilizând următoarea sintaxă: 
``` js 
let numbers = [1, 2, 3, 4, 5];
```
- Putem accesa elementele matricei prin indecșii acestora:

``` js 
let numbers = [1, 2, 3, 4, 5];
```
- Elementele pot fi iterate printr-o buclă standard loop o buclă `for-of`  
``` js live
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```
[/slide]