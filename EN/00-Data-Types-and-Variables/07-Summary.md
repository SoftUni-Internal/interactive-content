[slide hideTitle]
# Summary

[vimeo-video]
[stream language="EN" videoId="489371197/487983cf9f" default /]
[stream language="RO" videoId="489371197/487983cf9f"  /]
[/video-vimeo]


# In this lesson you learned:

- There are **eight data types** in JavaScript: 
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
- `let` has block scope, `var` has function scope

- With `typeof` we can receive the type of a variable
``` js live
let cars = ["Nio", "Tesla", "Xpeng"];

console.log(typeof(cars));
```
- `Null` is "nothing", while `undefined` exists, but is empty


## In the next lesson, you will learn:

- Arrays
  - Definition and syntax
``` js
let cars = ["Nio", "Tesla", "Xpeng"];
```

- Array iteration
  - How we iterate over array
  - Alternative ways to iterate using a for-of loop

``` js live
let cars = ["Nio", "Tesla", "Xpeng"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
```

``` js live
let cars = ["Nio", "Tesla", "Xpeng"];

for (const car of cars) {
  console.log(car);
}
```

- Array operations

[/slide]
