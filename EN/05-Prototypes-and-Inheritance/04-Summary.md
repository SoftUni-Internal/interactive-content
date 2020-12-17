[slide]

# Summary

## What you learned in this lesson

-  **Inheritance**, in general, is the ability to **extend** some or all of the functionality of a class to another.

   -  Child classes inherit **data** and **methods** from parent.

-  Object in JavaScript have **prototypes**.
   -  They have **properties** in their prototype chain.
-  We have two ways to create an object.

   -  Literal

   ```js live
   let foo = {
      me: 'Hi!',
      print: function () {
         console.log(this.me);
      },
   };
   bar.print();
   ```

   -  Constructor

   ```js live
   function Foo() {
      this.me = 'Hi!';
      this.print = function () {
         return `${this.me}`;
      };
   }

   let test = new Foo();
   console.log(test.print());
   ```

-  Prototypes are objects that form **hierarchical chain**.

[/slide]
