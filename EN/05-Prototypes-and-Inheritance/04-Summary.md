# Summary
[slide hideTitle]
# Summary

# In this lesson you learnt:

-  **Inheritance** makes it possible to create a new class that **extends** some or all of the functionality of a class by inheriting from it. Child classes inherit **data** and **methods** from their parent

-  Objects in JavaScript have **prototypes**

-  They have **properties** in their prototype chain

- There are two ways to create an object:

**Literal creation**

```js
let foo = {
  me: 'Hi!',
  print: function () {
    console.log(this.me);
  },
};
```

**Constructor creation**

```js 
function Foo() {
  this.me = 'Hi!';
  this.print = function () {
    return `${this.me}`;
  };
}

let test = new Foo();
```

-  Prototypes are objects that form **hierarchical chain**

[/slide]
