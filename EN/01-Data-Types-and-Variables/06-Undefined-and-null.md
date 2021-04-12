# Undefined and Null

[slide hideTitle]

# Undefined

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-30-31-undefined-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we declare a variable **without value**, it is undefined.

We can **set a variable** to undefined in our code at a later stage.

If something exists **but is not given a value it is undefined**. 

If we try to access a parameter that is not specified in a function, we will get undefined.

``` js live
let car;
console.log(car);
```

Another possibility to receive undefined is when we **manually set the value of a variable.**

``` js live
let car = undefined;  
console.log(car);
```

[/slide]

[slide hideTitle]

# Null

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-32-null-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Null** is an **object type** which can be used for any variable that **holds an object** which we do not want to be undefined.

For example, when we have a function that **returns an object**, or a function that needs to read something from the **database and return an object**.

In case the function **does not find what it is looking for**, we tell it to return "**null**", and then we can check if the function returns "**null**". 

``` js live
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50
};

person = null;
console.log(person);
console.log(typeof(person));

```
[/slide]

[slide hideTitle]

# Null and Undefined

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-33-null-and-undefined-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Null** is a value that we set so we know that there is **nothing** inside, i.e. we set the value null **explicitly**.

Undefined occurs when the value **does not exist** or is **declared but not set to a value**.

Also Undefined is **obtained** from the execution of the program, i.e. we receive it **implicitly**.

Null and Undefined are of different types:

``` js live
console.log(typeof null);
console.log(typeof undefined);
```

But they are equal in identity operator:

``` js live
console.log(null !== undefined);
console.log(null == undefined);
```

[/slide]
