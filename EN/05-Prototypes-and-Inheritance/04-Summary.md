# Summary

[slide hideTitle]

# Summary

## In this lesson you learned:

- What is Inheritance:

    - **inheritance** is the ability of a class to copy the functions of another class

    - the class that inherits is called **Child** and the inherited one is called **Parent**

- Objects have an **internal property** used for implementing **prototype-based inheritance**

    - **methods** and **properties** are inherited by reference

- The **properties** in the **prototype chain** form a **hierarchical chain**

- There are two ways to create an object

  - **literal creation**

  ```js
    let Greet = {
      greet: 'Hi!',
      print: function () {
        console.log(this.greet);
      },
    };
  ```

  - **Constructor creation**

  ```js 
    function Greet() {
      this.greet = 'Hi!';
      this.print = function () {
        return `${this.greet}`;
      };
    }

    let greet = new Greet();
  ```

[/slide]
