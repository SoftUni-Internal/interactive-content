[slide]
# Summary

# In this lesson you learnt:

**Functional Context** - the object from which the code originated is its default context. 

What **this** refers to depends on **where** and **how** the **function** that is being executed **is called**.

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


## In the next lesson you will learn:
- **Advanced Functions** - what are first-class and higher-order functions.

- Currying and Partial Application

- Immediately-Invoked Function Expressions

- Closure

- Error Handling

[/slide]
