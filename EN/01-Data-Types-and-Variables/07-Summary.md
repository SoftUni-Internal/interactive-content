[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-34-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## In this lesson you learned:

- There are **eight data types** in JavaScript: 
    - number
    ```js
    let myNumber = 3.14;
    ```
    - string
    ```js
    let myString = 'Hello JavaScript!';
    ```
    - symbol
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
    - object
     ```js
    let car = {type:'Tesla', model:'S', color:'white'};
    ```
    - boolean
     ```js
    let bool = true;
    ```
    
- `let` has block scope, `var` has function scope

- With `typeof` we can receive the type of a variable
``` js live
let cars = ['Nio', 'Tesla', 'Xpeng'];

console.log(typeof(cars));
```

- `Null` is "nothing", while `undefined` exists, but is empty


## In the next lesson, you will learn:

- Arrays
  - definition and syntax
- Array iteration
  - how we iterate over array
  - alternative ways to iterate using a "**for-of**" loop
- Array operations

[/slide]
