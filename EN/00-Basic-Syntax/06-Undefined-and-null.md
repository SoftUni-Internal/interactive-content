# Undefined and Null

[slide]

# Undefined

[vimeo-video]
[stream language="EN" videoId="489371807/542891a72e" default /]
[stream language="RO" videoId="489371807/542891a72e"  /]
[/video-vimeo]

[image assetsSrc="Undefined-Null.png" /]

When we declare a variable **without value**, it is undefined.

We can **set a varibale** to undefined later stage in our code.

If something exists **but is not given a value it is undefined**. 

If we try to access a parameter that is not specified in a function, we will get undefined.

``` js live
let car;
console.log(car);
```

Another possibility to have undefined is when we **manually set the value of a variable.**

``` js live
let car = undefined;  
console.log(car);
```

[/slide]

[slide]

# Null

[vimeo-video]
[stream language="EN" videoId="489371851/d2a4d15a1e" default /]
[stream language="RO" videoId="489371851/d2a4d15a1e"  /]
[/video-vimeo]

Null is an object type, which can be used for any variable that holds an object which we do not want to be undefined.

For example, when we have the function to **return an object**, or a function that needs to read something from the **database and return an object**.

In case the function **does not find what it is looking for**, we tell it to return null, and then we can check if the function returns null. 

``` js live
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

person = null;
console.log(person);
console.log(typeof(person));

```
[/slide]

[slide]

# Null and Undefined

[vimeo-video]
[stream language="EN" videoId="489371864/d1eeb434fb" default /]
[stream language="RO" videoId="489371864/d1eeb434fb"  /]
[/video-vimeo]


**Null** is a value that we set and we know that there is nothing inside, ie. we set the value null explicitly.

Undefined occurs when the value does not exist or is declared but not set to a value.

Also Undefined is obtained from the execution of the program, ie. we receive implicitly.

Null and Undefined are of different types.

``` js live
console.log(typeof null);
console.log(typeof undefined);
```

But they are equal in identity operator.

``` js live
console.log(null !== undefined);
console.log(null == undefined);
```

[/slide]