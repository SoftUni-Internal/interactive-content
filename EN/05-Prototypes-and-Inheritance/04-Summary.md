[slide]

# Summary

## What you learned in this lesson

-  **Inheritance**, in general, is the ability to **extend** some or all of the functionality of a class to another.

   -  Child classes inherit **data** and **methods** from parent.

-  Object in JavaScript have **prototypes**.
   -  They have **properties** in their prototype chain.
-  We have two ways to create an object.

   -  Literal

   ```js
   let foo = {
      me: 'Hi!',
      print: function () {
         console.log(this.me);
      },
   };
  
   ```

   -  Constructor

   ```js 
   function Foo() {
      this.me = 'Hi!';
      this.print = function () {
         return `${this.me}`;
      };
   }

   let test = new Foo();
   ```

-  Prototypes are objects that form **hierarchical chain**.

## In the next lesson you will learn about:

- Exam Preparation with three tasks:

   - DOM

   - Class Inheritance

   - Class task with Functionality
[/slide]
