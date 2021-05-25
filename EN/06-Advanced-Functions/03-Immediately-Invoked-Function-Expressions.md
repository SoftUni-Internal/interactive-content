# Immediately-Invoked Function Expressions

[slide hideTitle]

# Definition

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-18-19-iife-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An **Immediately-Invoked Function Expression** is a JavaScript **function** that **runs instantly after it is defined**.

**Immediately-Invoked Function Expressions** are:

- Defined **anonymously**

- Invoked **immediately** after they are declared

To create an **IIFE**, we put the function declaration between **round brackets**, after which we invoke it **immediately**:

```js live
let result = (function() {
    let name = 'Harper';
    return name;
})();

console.log(result);
```

The **return value** of an **Immediately-Invoked Function Expression** has to be saved in a variable, otherwise it is **purged from memory right after execution**:

```js live
(function() {
    let name = 'Nick';
});
console.log(name);
```
As you can see in this example, an IIFE's variables are **only accessible inside the function scope**.

[/slide]
