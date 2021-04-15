# Summary

[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-35-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **First-class functions**
  - can be passed as an **argument**
  - can be **returned**

```js
function sayHello() {
    return "Hello, ";
}

function greet(sayHello, name) {
    return sayHello() + name;
}
```

- **Higher-order functions**
  - take other **functions** as an argument or **return** a function as a result

```js
const sayHello = function() {
    return function() {
        console.log("Hello!");
    };
};

const greet = sayHello();
greet(); // Output: "Hello"
```


- **IIFE** is short for Immediately-Invoked Function Expression
  - it **encapsulates code and data** \(state\)

```js
(function() {
    let name = "James";
})();
console.log(name) // TypeError
```


## In the next lesson you will learn:

- What object composition is
- Destructuring
- Forms of object composition
  - aggregation
  - concatenation
  - delegation

[/slide]
