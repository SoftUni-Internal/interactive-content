[slide hideTitle]
# Recapitulare


## Ce ați învățat în această lecție: 

- Matricile sunt secvențe de elemente 

    - elementele lor sunt numărate de la  0 până la `length-1 `

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
- Elementele pot fi iterate printr-o buclă standard loop o buclă "**for-of**" 
``` js live
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```

## In the next lesson, you will learn:

- What is a Function?

- Declaring and invoking functions

- Nested functions

- Value and reference types

- Arrow functions

- Naming and best practices
[/slide]