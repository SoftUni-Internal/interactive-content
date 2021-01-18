[slide]

# Summary

## In this lesson we learned:

- **First-class functions**:
  - Can be passed as an **argument**
  - Can be **returned**

```js
function sayHello() {
  return "Hello, ";
}

function greet(sayHello, name) {
  return sayHello() + name;
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


## In the next lesson we will learn:

- What is object composition?
- Destructuring
- Forms of object composition
  - Aggregation
  - Concatenation
  - Delegation

[/slide]
