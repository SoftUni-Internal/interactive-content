# Value vs. Reference Types

[slide hideTitle]

# Value and Reference Types

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-23-24-25-value-and-reference-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Value types** and **reference types** are the two main categories of JavaScript types.

[image assetsSrc="Value-vs-Reference-Types(1).png" /]

## Value Types

A variable of a **value (primitive data) type** contains an **instance** of the type and holds their value directly.

With value types, each variable has **its own copy of the data**, and it is not possible for operations done on one variable to affect the other. 

When a value of a **primitive type** is assigned to **another variable of the same type**, a **copy** is made. 

When it is passed into a **method**, only a **copy of the primitive value** is passed. 

The called method **does not have access** to the original primitive value and therefore **cannot change it**. 

The called method can only change the **copied value**. 

Primitive data types are: **undefined**, **boolean**, **number**, **string**, **bigint** and **symbol**.

```js
i = 42;
ch = 'A';
result = true;
```

## Reference Types

**Reference type** variables hold а reference (pointer, memory address) of the value itself. 

When a reference type variable is assigned to another reference type, both will point to the same object. 

When an object is passed to a method, the called method can change the contents of the object passed to it but not the address of the object. 

Reference data types are: **object**, **array** and **function**.

```js
let cars = ['Nio', 'XPang', 'Tesla'];
let obj = {
  firstName: 'Maria',
  lastName: 'Agarici'
};
```

[/slide]

[slide hideTitle]
# Value and Reference Types: Demo

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-value-vs-refenrence-types-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
