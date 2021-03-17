# The "this" Keyword

[slide hideTitle]

# Function Context

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-3-4-what-is-this-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Function context** refers to the object that **owns** the code, which is currently being executed. 

The context depends on the way the function is invoked. 

Functions can be called in several different ways:
 - Global invoke: `func()` - `this` is a global function
 - `object.function()` - `this` is a method, excuted within the context of an object
 - `domElement.event()` - invoked on a DOM element

 We can manually change the context of a function by using `call()`, `apply()` and `bind()`.

 **Function context** and the `this` object are terms that can be used interchangeably. 
 
[/slide]

[slide hideTitle]

# What "this" is

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-5-this-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The value of `this` is always a reference to an object - the object from which it was called. 

In other words - `this` references the object that is executing the current function.

The goal of the current lesson will be to understand how `this` behaves in **non-strict mode**. 

Keep in mind that in **strict mode** there are differences, and `this` can be any value.

The object referenced by `this` **changes** when the execution context is changed.

[/slide]

[slide hideTitle]

# "this" Referring to the Global Object

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-6-this-refers-to-the-global-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If `this` is used on its own, it always returns the global object - `Object [global]`

```js live
function testThis() {
    return this;
}
console.log(testThis() === global);
```

When run, the above example returns **true**, meaning that `this` is indeed **equal to the global object**.

[/slide]

[slide hideTitle]

# "this" in the Browser

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-7-this-keyword-in-the-browser-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **global object** in the browser is the **window**. 

Run the following examples in your browser's console to see them in action!

```js
function thisInBrowser() {
    console.log('Simple function call');
    console.log(this === window);
}
thisInBrowser();
 ```

[image assetsSrc="function-context-01.png" /]

The above example illustrates that `this` is equal to the **window** object.

```js
let name = 'Arthur';
console.log('My name is', this.name);
```

Running the code above outputs **undefined** to the console.

This is because variables declared with `let`, have limited scope and are not attached to the global object.

[image assetsSrc="function-context-02.png" /]

```js
var anotherName = 'Chris';
console.log('My name is ', this.anotherName);
```

`this.anotherName` returns the value of **anotherName**, because variables, declared with `var`, have a wider scope and are attached to the global object (in this case to **window**).

[image assetsSrc="function-context-03.png" /]

**Note: Declaring a variable with "let" or "var" returns "undefined" in NodeJS.**

[/slide]

