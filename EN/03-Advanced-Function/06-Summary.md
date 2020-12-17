[slide]

# Summary

In this lesson we learned:

- That **first class functions**:
  - Can be passed as an **argument**
  - Can be **returned**

```js
function sayHello() {
  return "Hello, ";
}

function greet(helloFunction, name) {
  return helloFunction() + name;
}
```

- **Higher-Order Functions**:
  - Take other **functions** as an argument or **return** a function as a result

```js
const sayHello = function () {
  return function () {
    console.log("Hello!");
  };
};

const greet = sayHello();
greet(); // Output: "Hello"
```


- **IIFE** is short for Immediately-Invoked Function Expression:
  - It **encapsulates code and data** \(state\)

```js
(function () {
  let name = "James";
})();
console.log(name) // TypeError
```

[/slide]
