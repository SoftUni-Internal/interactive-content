# Introduction to TypeScript

[slide]

# TypeScript Overview

**TypeScript** is a JS superset developed by Google and Microsoft.

It allows us to write **typed** JavaScript, but it does not oblige us.

We can install the TypeScript compiler from npm with this command: `npm install -g typescript`.

To write it, we need to add the `.ts` extension to our files.

We run them with `tsc myFile.ts`.

The output that we receive is plain JavaScript.

[/slide]

[slide]

# Variable Types in TypeScript

TypeScript allows us to have **annotations** for the variables.

The annotations give us the ability to specify which variable what type is.

The **types** in TypeScript are:

-  **Boolean**

```js
let isDone: boolean = false;
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
let list: Array<number> = [1, 2, 3];
```

[/slide]

[slide]

# Classes in TypeScript

The classes in TypeScript are a little different from the ones in JS.

TypeScript gives us **access modifiers** and functions can have a **return type**.

So a class in TypeScript looks like this:

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

In this class, we have **public** property.

Which is **greeting**, it is a **string**.

The **constructor** is the usual JS constructor, with the difference that we set a **type** to the message property.

We set the **return type** of the **greet** function, which returns a string.

After, we instantiate the class and `console.log()` it.

[/slide]

[slide]

# Inheritance in TypeScript

Inheritance in TypeScript is the same as in JS.

We inherit with the keyword **extends**.

The difference is that we can add annotations.

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

On the methods, we added the **void** annotation because they **do not** return anything.

[/slide]

[slide]

# Interfaces

Another ability that TypeScript gives us is the **interfaces**.

With them, we can take apart the most used properties and not write them every time.

That allows us to have more re-usable code, also to have fewer lines.

When we use the **interface** in many files in our app, we can take it out in a different file.

And in this way, we will need only to import it.

To use **interfaces** we need to add them as **annotation**.

Here is an example:

```js
interface Man {
   name: string;
}

function person(obj: Man) {
   return `Hi, ${obj.name}`;
}

let myObj = { name: 'John' };
console.log(myObj);
```

In this example, we have the **interface** **Man**, which is used in the function **person**.

This function will return a string with `Hi, John`.

[/slide]

[slide]

# Generics and Enumerations

Generics gives us a more flexible, more re-usable code, also make the component to work with more than one type.

We can set a function to work with **any** type, but in this way, after the return, we are losing the type.

But we can use the **type variable** - `T`, which allows us to capture the type which is provided.

Have a look at this example:

```js
function identity<T>(arg: T): T {
   return arg;
}

let output = identity<string>'myString';
let output1 = identity<number>5;
```

In this example, on the first variable, we set that the type is a string, the second one is a **number**.

The `output` type will return a **string** and `output1` type will be **number**.

The **Enumerations** are a set of named constants.

They help us to create a set of individual cases

TypeScript provides both **numeric** and **string-based** enums.

Here is an example of numeric and string-based enums:

-  Numeric:

```js
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

-  String-Based

```js
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

[/slide]

[slide]

# Modules

Modules in TypeScript are the same as the ones in ES6.

Here are some ways to export:

-  Exporting and declaring:

```js
export default interface StringValidator {
    isAcceptable(s: string): boolean;
}
```

-  Exporting a specific function:

```js
export { Example };
```

-  Export a function with different name:

```js
export { Example as mainExample };
```

And here are some ways to import:

-  Importing a specific function:

```js
import { Example } from './example';
```

-  Importing everything into a single variable:

```js
import * as example from './example';
```

-  Importing a function and changing the name:

```js
import { Example as mainExample } from './example';
```

If we have used the default exporting, we can use `import example from "./example";`.

[/slide]
