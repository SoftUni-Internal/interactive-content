[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-35-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **Functional context** - the object from which the code originated is its default context

- What **this** refers to depends on **where** and **how** the **function** that is being executed **is called**

- The functions **bind**, **apply** and **call** that can all be used to explicitly set the value of **this**

- ``call()`` - changes the context of the function to the given object

```js
functionName.call(objectToBind, additionalArguments);
```

- ``apply()`` - same function as **call()**, but accepts a list of arguments, while **apply()** accepts an array

```js
console.log(praise.apply(dog,
    ['A good boy', 'My best friend']
));
```

- ``bind()`` - creates a **new function**.
    * allows objects to borrow methods from other objects without us having to manually make copies of that method

- **Internal** object properties that allow you to modify how the object properties will behave: 
    - **enumerable**
    - **configurable**
    - **writable**

- **Seal** and **freeze** that deal with the object's **immutability**


## In the next lesson you will learn:

- **Advanced Functions**
    * what are first-class and higher-order functions

- Currying and Partial Application

- Immediately-Invoked Function Expressions

- Closure

- Error Handling

[/slide]
