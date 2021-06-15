# Homework

[slide hideTitle]

# TypeScript Playground

Install typescript by typing the following command into a terminal:
`npm install typescript -g`.

[image assetsSrc="Angular-Introduction-4.png" /]

Create a **.vscode** folder and a **tsconfig.json** file with the following configuration:

```
{
   "compilerOptions":{
      "target":"es6",
      "module":"commonjs",
      "sourceMap":true
   }
}
```

[image assetsSrc="Angular-Introduction-5.png" /]

After you have your **.ts** file, open a **terminal** and execute the **following commands**:

`tsc {filename}.ts`
`node {filename}`

[image assetsSrc="Angular-Introduction-6.jpg" /]

[/slide]

[slide hideTitle]

# Data Class

Write a TypeScript class that holds data about an HTTP request.

It should have the following properties:

-  **method** (String)

-  **uri** (String)

-  **version** (String)

-  **message** (String)

-  **response** (String)

-  **fulfilled** (Boolean)

The first four properties (**method**, **uri**, **version**, **message**) are set trough the **constructor**, in the listed order.

The **response** property is initialized as **undefined** and the **fulfilled** property is initially set to **false**.

## Example

| **Sample Input**| **Resulting object**|
| --- | --- |
|let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '') | \{ method: 'GET', uri: 'http://google.com', version: 'HTTP/1.1',message: '', response: undefined, fulfilled: false \} |

[/slide]

[slide hideTitle]

# Tickets

Write a program using TS that manages a ticket database.

A ticket has a **destination** (string), a **price** (number) and a **status** (string).

The program will receive **two arguments** - the first one is an **array of strings** representing ticket descriptions and the second is a **string**, representing the **sorting criteria**.

The ticket descriptions have the following format:

"\<**destinationName**\>\|\<**price**\>\|\<**status**\>"

Store each ticket and **return** a sorted summary of all tickets, sorted by **destination**, **price** or **status**, depending on the **second parameter** that your program received.

Always sort the entries in ascending order (the default behavior for **alphabetical** sort).

If two tickets compare the same, use their order of appearance.

See the examples for more information.

## Input

Your program will receive two parameters - an array of strings and a single string.

## Output

**Return** a **sorted array** of all the tickets that were registered.

## Examples

| **Sample Input** | **Output Array** |
| --- | --- | 
| \['Philadelphia\|94.20\|available', 'New York City\|95.99\|available', 'New York City\|95.99\|sold', 'Boston\|126.20\|departed'], 'destination' | [ Ticket \{ destination: 'Boston', price: 126.20, status: 'departed' \}, Ticket \{ destination: 'New York City', price: 95.99, status: 'available' \}, Ticket \{destination: 'New York City', price: 95.99, status: 'sold' \}, Ticket \{ destination: 'Philadelphia', price: 94.20, status: 'available' \} ] |
|['Philadelphia\|94.20\|available', 'New York City\|95.99\|available', 'New York City\|95.99\|sold', 'Boston\|126.20\|departed'], 'status' | [ Ticket \{ destination: 'Philadelphia', price: 94.20, status: 'available' \}, Ticket \{ destination: 'New York City', price: 95.99, status: 'available' \}, Ticket \{ destination: 'Boston', price: 126.20, status: 'departed' \}, Ticket \{ destination: 'New York City', price: 95.99, status: 'sold' \} ] |

[/slide]

[slide hideTitle]

# People

Define several TS classes, that represent a company's employee records.

Each employee has a **name** and **age**, a **salary** and a list of **tasks**, while every position has specific properties not present for the others.

Place all common functionality in a **parent abstract** class.

Follow the diagram below:

[image assetsSrc="Angular-Introduction-7.png" /]

Every position has different tasks.

In addition to all common properties, the manager position has a **dividend** property they can collect in addition to their salary.

All employees have a **work** function that, when called, cycles through the list of responsibilities for that position and prints the current one.

When all tasks have been printed, the list starts over from the beginning.

Employees can also **collect their salary**, which outputs the amount, plus any **bonuses**.

Your program needs to include a module, containing the three classes **Junior**, **Senior**, and **Manager**.

The properties **name** and **age** are set through the constructor, while the **salary** and a manager’s **dividend** are initially set to zero and can be changed later.

The list of **tasks** is filled for each position.

The resulting objects also hold the functions `work()` and `collectSalary()`.

When `work()` is called, one of the following lines is printed to the console, depending on the current task in the list:


"\{**employee name**\} **is working on a simple task.**"
"\{**employee name**\} **is working on a complicated task.**"
"\{**employee name**\} **is taking time off work.**"
"\{**employee name**\} **is supervising junior workers.**"
"\{**employee name**\} **scheduled a meeting.**"
"\{**employee name**\} **is preparing a quarterly report.**"


And when `collectSalary()` is called, print the following:


"\{**employee name**\} **received** \{**salary + bonuses**\} **this month.**"


## Hints

We should begin by creating a parent class, that will hold all properties, shared among all positions.

The following structure should be used for our parent object:

```
    {
      age: Number,
      name: String,
      salary: Number,
      tasks: [],
      work: Function,
      collectSalary: Function
    }
```

Data variables will be part of the object and attached to its local context using **this** inside the **constructor**.

Any properties that should be assigned a value during the object initialization are defined as function parameters.

Functions are defined inside the class body.

Why should the class be abstract?

```js
    abstract class Employee {
        public name: string;
        public age: number;
        public salary: number;
        public tasks: Array<string>;

        (name: string, age: number) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        public work(): void {
        /   /TODO
        }

        public collectSalary(): void {
            //TODO
        }

        public getSalary(): number {
            //TODO
        }
    }
```

The `work()` function has to cycle through the list of tasks and print the current one.

The easiest way to do this is to `shift` the first element from the array and `push` it to the end.

```js
    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }
```

Printing the salary is pretty straightforward.

However, since the manager has a bonus to their salary, it is best to calculate the whole sum with an internal function, that the manager can **override**.

```js
    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
```

Now any objects that inherit from the Employee class will have all of their properties as well as anything new that’s defined in their declaration.

To inherit (extend) a class, a new class is defined with the **extends** keyword.

They also have to call the parent constructor from their constructor, so the prototype chain is established.

For the **Junior** and **Senior** classes, the only difference from the parent **Employee** class is the elements inside their tasks array, since they can use the functions directly from the base class.

Child classes will call the parent with any parameters that are needed and push their tasks directly to the array.

```js
    export class Junior extends Employee {
        constructor(name: string, age: number) {
            super(name, age);
            this.tasks.push(" is working on a simple task.");
        }
    }

    export class Senior extends Employee {
        constructor(name: string, age: number) {
            super(name, age);
            this.tasks.push(" is working on a complicated task.");
            this.tasks.push(" is taking time off work.");
            this.tasks.push(" is supervising junior workers.");
        }
    }
```

The **Manager** is not much different, with the exception that their constructor has to hold a **dividend** property that is initially set to zero.

The class has to override the `getSalary()` function we added to the base class earlier, so it includes the bonus.

```js
    export class Manager extends Employee {
        public dividend: number;

        constructor(name: string, age: number) {
            super(name, age);
            this.tasks.push(" scheduled a meeting.");
            this.tasks.push(" is preparing a quarterly meeting.");
        }

        public getSalary(): number {
            return this.salary + this.dividend
        }
    }
```

[/slide]

[slide hideTitle]

# The Elements

If Watermelons exist, Firemelons, Earthmelons, and Airmelons should also exist.

Create **classes** for **the 4 Elemelons**.

Create an **abstract class** for the Elemelons.

Name it **Melon**.

The **Melon** class should be initialized with **weight** \(Number\) and **melonSort** \(String\) as arguments.

The two arguments should be **public members**.

Create classes **Watermelon**, **Firemelon**, **Earthmelon**, **Airmelon**.

Each of them should **inherit** the **abstract class Melon** and its functionality.

Aside from the abstract functionality, **each** of the **Elemelons** should have a property called **elementIndex** \(Number\), which is **equal** to its "**weight** multiplied by **the string length**" of its **melonSort**.

The property should only have a **getter**.

All of the classes should hold a `toString()` function, which returns the following result from them:

"**Element:** \{**Water/Fire/Earth/Air**\}"
"**Sort:** \{**elemelonSort**\}"
"**Element Index:** \{**elemelonElementIndex**\}"


Create one more class which is called **Melolemonmelon**, which inherits **one** of the **4 elements, regardless which**.

The Melolemonmelon **has no element**, but it can **morph** into any of the others. Implement a function `morph()` into it which **changes the current element** of the Melolemonmelon **each time** it is called.

Upon initialization, the **startiong element is Water**.

From then on it should go in the following order: **Fire, Earth, Air, Water, Fire**.

The `toString()` function should remain the same as its parent class.

## Example

```js
    let test : Melon = new Melon(100, "Test");
    //Throws error

    let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
    console.log(watermelon.toString());

    // Element: Water
    // Sort: Kingsize
    // Element Index: 100
```

[/slide]

[slide hideTitle]

# Boxes

Create a class Box<> that can store anything.

It should have two public methods and a getter:

-  `add(element)`

-  `remove()`

-  **count - getter**

`Add` should add an element on top of its contents.

`Remove` should remove the last placed element.

## Example

| **Input**| **Output** |
| --- | --- |
| let box = new Box\<Number\>(); | 3 |
| box.add(1); ||
| box.add(2); ||
| box.add(3); ||
| console.log(box.count); ||
| let box = new Box\<String\>(); | 2 |
| box.add("Pesho"); | 1 |
| box.add("Gosho"); ||
| console.log(box.count); ||
| box.remove(); ||
| console.log(box.count); ||

```js
    class Box<T> {
        private _boxes = [];

        public add(el: T) {
            //TODO
        }
        
        public remove(el: T) {
            //TODO
        }

        get count(): number {
            //TODO
        }
    }

    export default Box;
```

[/slide]

[slide hideTitle]

# KeyValuePairs

Create a generic class that can store a key and value of any type.

It should have the following public methods:

-  `setKeyValue(key: T, value: U)`

-  `display()` - log the key and the value in the following format: "**key =** \{**key**\}, **value =** \{**value**\}"

## Example

| **Input**| **Output**|
| --- | --- |
| let kvp = new KeyValuePair\<number, string\>(); | key = 1, value = Steve |
| kvp.setKeyValue(1, "Steve");||
| kvp.display();||

```js
    class KeyValuePair<T, U>
    {
        private key: T;
        private value: U;

        //TODO: Create setKeyValue function

        //TODO: Create display function
    }

    export default KeyValuePair
```

[/slide]
