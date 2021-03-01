[slide]
# Recapitulare

[vimeo-video]
[stream language="EN" videoId="489371197/487983cf9f" default /]
[stream language="RO" videoId="489371197/487983cf9f"  /]
[/video-vimeo]


În această lecție ați învățat:
  - Există**opt tipuri de date**în JavaScript: 
    - Number
    ```js
    let myNumber = 3.14;
    ```
    - String
    ```js
    let myString = 'Hello JavaScript!';
    ```
    - Symbol
    ```js
    let mySymbol = 'R';
    ```
    - null

     ```js
    let variable = null;
    ```
    - undefined
     ```js
    let variable = undefined;
    ```
    - Object
     ```js
    let car = {type:"Tesla", model:"S", color:"white"};
    ```
    - Boolean
     ```js
    let bool = true;
    ```
    - BigInt 
   ```js
    let alsoHuge = BigInt(9007199254740991)
    ```
- `let` are domeniu de obiect, `var` domeniu funcțional
- Prin  `typeof` putem obține tipul variabilei
``` js live
let cars = ["Nio", "Tesla", "Xpeng"];

console.log(typeof(cars));
```
- `Null` este 'nimic', nedefinit există, dar este gol

În lecția următoare veți învăța:

- Definiția și sintaxa matricelor
``` js
let cars = ["Nio", "Tesla", "Xpeng"];
```
- Cum iterăm peste matrice

``` js live
let cars = ["Nio", "Tesla", "Xpeng"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
```
- Modalități alternative de iterație folosind o buclă for-of

``` js live
let cars = ["Nio", "Tesla", "Xpeng"];

for (const car of cars) {
  console.log(car);
}
```

[/slide]