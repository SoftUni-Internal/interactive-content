# Introduction to TypeScript

[slide hideTitle]

# TypeScript Overview

Intro-to-Angular-and-Typescript-14-15-Introduction-to-TypeScript

**TypeScript** is a **JavaScript superset** developed by Google and Microsoft.

It allows us to write **typed** JavaScript, but it does not force us.

We can install the **TypeScript** compiler from **npm** with the following command: `npm install -g typescript`.

We need to add the `.ts` extension to our files if we want to write **TypeScript**.

To run **TypeScript** files, we need to write the `tsc myFile.ts` command in the terminal.

After the file compilation, we will receive plain JavaScript as output.

[/slide]

[slide hideTitle]

# Variable Types in TypeScript

Intro-to-Angular-and-Typescript-16-Variable-Types

TypeScript allows us to have **annotations** attach to the variables.

The annotations give us the ability to **specify** the **type** of every **variable**.

The variable **types** in TypeScript are:

-  **Boolean**

```js
   let isChecked: boolean = false;
```

-  **Number**

```js
   let decimal: number = 6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   let octal: number = 0o744;
```

-  **String**

```js
   let car: string = 'coupe';
```

-  **Array**

```js
   let list: number[] = [1, 2, 3]; //Recommended
   let shoppingList: Array<number> = [1, 2, 3];
```

[/slide]

[slide hideTitle]

# Classes in TypeScript

Intro-to-Angular-and-Typescript-17-Classes

The **classes** in **TypeScript** are a little bit different from the ones in JavaScript.

**TypeScript** gives us **access modifiers** and functions can have a **return type**.

A **class** in **TypeScript** looks like this:

```js
   class Greeter {
      public greeting : string;

      constructor(message : string) {
      this.greeting = message;
   }

   greet() : string {
         return `Hello, ${this.greeting}!`;
      }
   }

   let greeter : Greeter = new Greeter('world');
   console.log(greeter.greet());
```

In this class, the **greeting** property is а **public** one also, it is a **string**.

The **constructor** is a usual JavaScript constructor, with the difference that we set a **type** to the message property.

We set the **return type** of the **greet** function, which returns a **string**.

After we have instantiated the **Greeter** class, we have also printed it to the console.

[/slide]

[slide hideTitle]

# Inheritance in TypeScript

Intro-to-Angular-and-Typescript-18-Inheritance

**Inheritance** in **TypeScript** is the same as the one in **JavaScript**.

In **TypeScript** to inherit a class, we use the **extends** keyword.

The difference between the inheritance in **TypeScript** and the one in **JavaScript**, is that in **TypeScript** we can add **annotations**.

Here is an example:

```js
   class Animal {
      move(distanceInMeters: number = 0): void {
         console.log(`Animal moved ${distanceInMeters}m.`);
      }
   }

   class Dog extends Animal {
      bark(): void {
         console.log('Woof! Woof!');
      }
   }

   const dog = new Dog();
   dog.bark();
   dog.move(10);
   dog.bark();
```

In this example, the **Dog** class inherits the **Animal** one.

The **Dog** will have all the methods that the **Animal** has.

To the `bark()` and the `move()` methods, we added the **void** annotation because they **do not** return anything.

[/slide]

[slide hideTitle]

# Interfaces

Intro-to-Angular-and-Typescript-19-Interfaces

The **interfaces** are another ability that TypeScript gives us.

With **interfaces**, we can take apart the most used properties and **re-use** them instead of writing them every time.

That allows us to have more **re-usable** code, also to have fewer lines of code.

We can take the **interfaces** out in a different file if we use them a lot in the application.

In this way, if we need them, we only need to import them.

If we are going to use an **interface**, we need to add it as an **annotation**.

Here is an example:

```js
   interface Man {
      name: string;
   }

   function Person(obj: Man) {
      return `Hi, ${obj.name}`;
   }

   let john = { name: 'John' };
   console.log(john);
```

In this example, we have the **interface** **Man**, used in the function **Person**.

This function will return a string with `Hi, John` printed to the console.

[/slide]

[slide hideTitle]

# Generics and Enumerations

Intro-to-Angular-and-Typescript-20-Generics-and-Enumerations

Generics gives us a **more flexible** and more **re-usable** code, also make the component to work with **more than one type**.

We can set a specific function to work with **any** given type, but in this way, after the return, we are **losing the type**.

But we can use the **type variable** - `T`, which allows us to **capture** the provided type.

For example:

```js
   function identity<T>(arg: T): T {
      return arg;
   }

   let outputString = identity<string>'myString';
   let outputNumber = identity<number>5;
```

In this example, we set the type of the `outputString` variable to be a **string**.

We set `outputNumber` variable to be a **number**

The `outputString` will be **string** but the `outputNumber` will be **number**.

## Enumerations

The **Enumerations** are a set of named constants.

TypeScript provides both **numeric** and **string-based** enums.

They help us to create a set of individual cases.

Here is an example of **Numeric** enum:

```js
   enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
   }
```

The **Numeric** enumerations can store values as numbers.

Have a look a **String-Based** enum:

```js
   enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT",
   }
```

Unlike the Numeric enums, the **String-Based** enumerations can store strings as values.

[/slide]

[slide hideTitle]

# Modules

Intro-to-Angular-and-Typescript-21-Modules

Modules in TypeScript are the same as the ones in **ES6**.

Here are some ways to export methods:

- **Exporting** and **declaring**:

```js
   export default interface StringValidator {
      isAcceptable(s: string): boolean;
   }
```

- **Exporting** a **specific** function:

```js
   export { Example };
```

- **Export** a **function** with **different** **name**:

```js
   export { Example as mainExample };
```

Here are some ways to import methods:

- **Importing** a **specific** function:

```js
   import { Example } from './example';
```

- **Importing** **everything** into a **single** **variable**:

```js
   import * as example from './example';
```

- **Importing** a **function** and **changing** the **name**:

```js
   import { Example as mainExample } from './example';
```

If we have used the **default exporting**, we can use `import example from "./example";`.

You can learn more about TypeScript [here](https://www.typescriptlang.org/docs/).

[/slide]
