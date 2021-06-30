# Introduction to TypeScript

[slide hideTitle]

# TypeScript Overview

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-14-15-Introduction-to-TypeScript-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Intro-to-Angular-and-Typescript-14-15-Introduction-to-TypeScript

**TypeScript** is a **JavaScript superset** developed by Google and Microsoft.

It allows us to write **typed** JavaScript, but it does not force us.

We can install the **TypeScript** compiler from **npm** with the following command: `npm install -g typescript`.

We need to add the `.ts` extension to our files in order to use **TypeScript**.

To run **TypeScript** files, we need to type in the `tsc myFile.ts` command in the terminal.

After the file compilation, we **will receive plain JavaScript** as output.

[/slide]

[slide hideTitle]

# Variable Types in TypeScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-16-Variable-Types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

TypeScript allows us to have **annotations** attached to the variables.

The annotations give us the ability to **specify** the **type** of the **variable**.

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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-17-Classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

In this class, the **greeting** property is **public** and also a **string**.

The **constructor** is a usual JavaScript constructor, with the difference that we set a **type** to the message property.

We set the **return type** of the **greet** function, which returns a **string**.

After instanting the **Greeter** class, also print it to the console.

[/slide]

[slide hideTitle]

# Inheritance in TypeScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-18-Inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Inheritance** in **TypeScript** is the same as in **JavaScript**.

In **TypeScript** we use the **extends** keyword in order to inherit a class.

The difference between the inheritance in **TypeScript** and the one utilized in **JavaScript**, is that in **TypeScript** we can add **annotations**.

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

The **Dog** class inherits the **Animal** one.

The **Dog** class will have all the methods that the **Animal** class has.
We add  **void** annotation to the `bark()` and the `move()` methods because they **do not** return anything.

[/slide]

[slide hideTitle]

# Interfaces

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-19-Interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Interfaces** is another concept provided by TypeScript.

With **interfaces**, we can separate and group the most used properties of a certain feature and **re-use** them instead of rewriting them every time.

That allows us to have more **reusable** code which decreases its size and complexity.

We can separate **interfaces** in different files which makes them easier to address and use in an application.

This way, if we **need to use interfaces**, we only have to import them.

If we are going to use a certain **interface**, we need to add it as an **annotation**.

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

In this example, we have the "**Man**" **interface** used in the **Person** function.

This function will return the string: `Hi, John`, printing it to the console.

[/slide]

[slide hideTitle]

# Generics and Enumerations

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-20-Generics-and-Enumerations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The generics allow for yet **more flexible** and more **reusable** code they also make a component work with **more than one type**.

We can set a specific function to work with **any** given type, but in this way, after the return statement,**the data type** is lost.

We can address this issue by useing the **type variable** - `T`, which allows us to **capture** the provided type.

For example:

```js
   function identity<T>(arg: T): T {
      return arg;
   }

   let outputString = identity<string>'myString';
   let outputNumber = identity<number>5;
```

In this example, we set the datatype of the `outputString` variable to **string**.

We set the `outputNumber` variable to be a **number**

The `outputString` will be of type **string** and the `outputNumber` will be a **number**.

## Enumerations

**Enumerations** are a set of named constants.

TypeScript provides both **numeric** and **string-based** enums.

They help us create a **set of individual cases**.

Here is a **Numeric** enum:

```js
   enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
   }
```

The **Numeric** enumerations can store values as numbers.

**String-Based** enum:

```js
   enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT",
   }
```

**String-Based** enumerations can store strings as values.

[/slide]

[slide hideTitle]

# Modules

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-21-Modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modules in TypeScript are the **same as in ES6**.

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

- **Export** a **function** with a **different** **name**:

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

If we used the **default exporting**, we can use `import example from "./example";`.

You can learn more about TypeScript [here](https://www.typescriptlang.org/docs/).

[/slide]
