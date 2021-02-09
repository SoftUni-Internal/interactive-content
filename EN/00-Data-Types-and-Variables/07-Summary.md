[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-34-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


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
- Array iteration
  - How we iterate over array
  - Alternative ways to iterate using a for-of loop
- Array operations

[/slide]
