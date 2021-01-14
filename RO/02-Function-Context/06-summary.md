[slide]
# Summary

<<<<<<< HEAD
**In this lesson we learned:**
=======
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
>>>>>>> a372c1cf81cc182639d119f13c41522fb1f79679

**Functional Context** - the object from which the code originated is its default context. 

<<<<<<< HEAD
What **this** refers to depends on **where** and **how** the **function** that is being executed **is called**.
=======
```js
info: function () {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function () {
        return cat;
    }
```

- The functions **bind**, **apply** and **call** that can all be used to explicitly set the value of **this**.
>>>>>>> a372c1cf81cc182639d119f13c41522fb1f79679

The functions **bind**, **apply** and **call** that can all be used to explicitly set the value of **this**.

 - ``call()`` - changes the context of the function to the given object.

```js
functionName.call(objectToBind, additionalArguments);
```

- ``apply()``- same function as **call()** but accepts a list of arguments, while **apply()** accepts an array.

```js
console.log(praise.apply(dog,
    ['A good boy', 'My best friend']
));
```

- ``bind()`` - creates a **new function**. Allows objects to borrow methods from other objects without us having to manually make copies of that method.

**Internal** Object Properties that allow you to modify how the object properties will behave: 
  - **enumerable**, **configurable** and **writable**;
  - **seal** and **freeze** that deal with the object's **immutability**;


<<<<<<< HEAD
**In the next lesson we will learn:**
- **Advanced Functions** - what are first-class and higher-order functions.
=======
## In this the next lesson we will learn:

- Advanced Functions
>>>>>>> a372c1cf81cc182639d119f13c41522fb1f79679

- Currying and Partial Application

- Immediately-Invoked Function Expressions

- Closure

- Error Handling

[/slide]
