# Immediately-Invoked Function Expressions

[slide]
# Definition

An **Immediately-Invoked Function Expression** is a JavaScript **function** that **runs instantly after it is defined**.

**Immediately-Invoked Function Expressions** are:

- Defined **anonymously**

- Invoked **immediately** after they are declared

To create an **IIFE**, we put the function declaration between **round brackets**, after which we invoke it **immediately**:

```js live
(function () { let name = "Noah"; });
console.log(name); 
```
As you can see in this example, an **IIFE**'s variables are **only accessible inside the function scope**.

The **return value** of an **Immediately-Invoked Function Expression** has to be saved in a variable, otherwise it is **purged from memory right after execution**:

```js live
let result = (function () {
    let name = "Harper"; 
    return name; 
})(); 

console.log(result);
```

[/slide]
