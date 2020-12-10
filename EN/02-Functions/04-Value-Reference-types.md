# Value vs. Reference Types

[slide]

# Value and Reference Types

[vimeo-video]
[stream language="EN" videoId="489373589/a2a27866c0" default /]
[stream language="RO" videoId="489373589/a2a27866c0"  /]
[/video-vimeo]

Value types and reference types are the two main categories of JavaScript types

[image assetsSrc="Value-vs-Reference-Types(1).gif" /]

# Value Types

A variable of a value \(primitive data\) type contains an instance of the type and hold directly their value. 

With value types, each variable has **its own copy of the data**, and it is not possible for operations on one variable to **affect the other**.

When a value of a primitive is assigned to another variable of the same type, a copy is made.

When a primitive is passed into a method, only a copy of the primitive is passed. 

The called method does not have access to the original primitive value and therefore cannot change it. 

The called method can change the copied value.

- Primitive data types are: `undefined`, `boolean`, `number`, `string`, `bigint` and `symbol`.

```js
i = 42;
ch = 'A';
result = true;
```

# Reference Types

**Reference type** variables hold а reference \(pointer, memory address\) of the value itself.

When a reference type is assigned to another reference type, both will point to the same object.

When an object is passed into a method, the called method can change the contents of the object passed to it but not the address of the object.

- Reference data types are: `object`, `Array` and `function`.

```js
let cars = ["NIO", "XPang", "Tesla"];
let obj = {firstName:"Maria", lastName:"Agarici"};
```

[/slide]

[slide]
# Value and Reference Types: Demo

[vimeo-video]
[stream language="EN" videoId="489373150/9d47a9faca" default /]
[stream language="RO" videoId="489373150/9d47a9faca"  /]
[/video-vimeo]

[/slide]
