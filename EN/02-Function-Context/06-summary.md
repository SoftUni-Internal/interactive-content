[slide]
# Summary

## In this lesson we learned:

- **Functional Context:** the object from which the code originated is its default context. 

```js
const test = {
  num: 42,
  func: function() {
    return this.num;
  },
};

console.log(test.func());
// expected output: 42
```

- What **this** refers to depends on **where** and **how** the **function** that is being executed **is called**.

```js
info: function () {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function () {
        return cat;
    }
```

- The functions **bind**, **apply** and **call** that can all be used to explicitly set the value of **this**.

- **Internal** Object Properties that allow you to modify how the object properties will behave: 
  - **enumerable**, **configurable** and **writable**;
  - **seal** and **freeze** that deal with the object's **immutability**;


## In this the next lesson we will learn:

- Advanced Functions

- Currying and Partial Application

- Immediately-Invoked Function Expressions

- Closure

- Error Handling

[/slide]
