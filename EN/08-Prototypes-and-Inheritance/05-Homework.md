# Homework

[slide hideTitle]

# Problem: Person and Teacher
[code-task title="Person and Teacher" taskId="js-advanced-prototypes-and-inheritance-person-and-teacher" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function personAndTeacher() {
    // Write your code here

    return {
        Person,
        Teacher
    }
}
```

[/code-editor]
[task-description]

# Description

Write a class **Person** and a class **Teacher** which extends **Person**.

- The **Person** class should have a **name** and an **email**
- The **Teacher** class should have a **name**, an **email**, and a **subject**

## Input and Output

There will be **NO** input. Your function should return an object containing the classes **Person** and **Teacher**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let p = new Person('Pesho','pesho@pesho.com');
expect(p.name).to.equal("Pesho");
expect(p.email).to.equal('pesho@pesho.com');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('mesho','mesho@pesho.com','Meshematika');
expect(t.name).to.equal("mesho");
expect(t.email).to.equal('mesho@pesho.com');
expect(t.subject).to.equal('Meshematika');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

expect(Teacher.prototype).to.be.an.instanceof(Person);
let t = new Teacher();
expect(t).to.be.an.instanceof(Person);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problem: Inheriting and Replacing ToString
[code-task title="Inheriting and Replacing ToString" taskId="js-advanced-prototypes-and-inheritance-inheriting-and-replacing-toString" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function toStringExtension() {
    // Write your code here

    return {
        Person,
        Teacher,
        Student
    }
}
```

[/code-editor]
[task-description]

# Description

Extend the **Person** and **Teacher** classes from the previous task and add a class **Student** inheriting from **Person**. 

Add `toString()` functions to all classes, the format should be as follows:

- **Person** - returns "**Person (name:** \{**name**\}**, email:** \{**email**\}**)**"
- **Student** - returns "**Student (name:** \{**name**\}**, email:** \{**email**\}**, course:** \{**course**\}**)**"
- **Teacher** - returns "**Teacher (name:** \{**name**\}**, email:** \{**email**\}**, subject:** \{**subject**\}**)**"

Try to reuse code by using the `toString()` function of the base class.

## Input and Output

There will be **NO** input. 

Your function should return an object containing the classes **Person**, **Teacher**, and **Student**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
expect(p.toString()).to.equal('Person (name: Pesho, email: Pesho@pesh.com)');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");
expect(t.toString()).to.equal('Teacher (name: Gosho, email: gosh@gosh.com, subject: Graphics)');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let s = new Student("Stamat",'stamcho@stamishteto.bg',666);
expect(s.toString()).to.equal('Student (name: Stamat, email: stamcho@stamishteto.bg, course: 666)');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]

# Problem: Array Extension
[code-task title="Array Extension" taskId="js-advanced-prototypes-and-inheritance-array-extension" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function arrayExtension() {
      // Write your code here
   }
```

[/code-editor]
[task-description]

# Description

Extend the built-in **Array** object with additional functionality. 

Implement the following functionality:

- `last()`: returns the last element of the array
- `skip(n)`: returns a new array which includes all original elements, except the first **n** elements **n** is a **Number** parameter
- `take(n)`: returns a new array containing the first **n** elements from the original array; **n** is a **Number** parameter
- `sum()`: returns a sum of all array elements
- `average()`: returns the average of all array elements

## Input and Output

The input for functions that expect it will be passed as valid parameters. 

The output should be their **return** value.

## Constraints

Structure your code as an **IIFE**.

[hints]
[hint]
If we have an **instance** of an array, since we know it is an object, adding new properties to it is pretty straightforward:

```js
let myArr = [1, 2, 3]

myArr.last = function() {
    // TODO...
};
```

However, this only adds our new function to **this instance**. 
[/hint] 
[hint]
To add all functions just one time and have them work on **all arrays**, we have to attach them to `Array`'s **prototype** instead:

```js
Array.prototype.last = function() {
    // TODO...
};
```

With such a declaration, we gain access to the context of the calling instance via the "**this**" keyword. 
[/hint] 
[hint]
We can then easily **access indexes** and other existing **properties**. 

Do not forget we do **not** want to **modify** the exiting array but to create a **new one**:

```js
Array.prototype.last = () => {
  return this[this.length - 1];
};
```

```js
Array.prototype.skip = (n) => {
  let result = [];

  for (let i = n; i < this.length; i++) {
    result.push(this[i]);
  }

  return result;
};
```

```js
Array.prototype.take = (n) => {
  let result = [];

  for (let i = n; i < n; i++) {
    result.push(this[i]);
  }

  return result;
};
```

Note these functions do not have any error checking - if **n** is **negative** or **outside the bounds** of the array, an exception will be thrown.

Be **careful** when using them, or add your **validation**. 
[/hint] 
[hint] 
The **last two functions** require a little bit of **arithmetic** to be performed:

```js
Array.prototype.sum = () => {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  return sum;
};
```

```js
Array.prototype.average = () => {
  return this.sum() / this.length;
};
```
[/hint] 
[/hints]

## Submission

To be able to submit the solution, we need to wrap our program in an "**IIFE**". 

There is **no return value** since the code execution results in functionality being added to an existing object. 

We are ready to **submit** our solution.

```js
(function solve() {
    Array.prototype.last = () => {};

    Array.prototype.skip = () => {};

    Array.prototype.take = () => {};

    Array.prototype.sum = () => {};

    Array.prototype.average = () => {};
}, ()); 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('last')).to.equal(true, "Couldn't find last() function");
expect(testArray.last()).to.equal(3, 'Incorrect last element');
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('skip')).to.equal(true, "Couldn't find skip() function");
expect(testArray.skip(1)\[0\]).to.equal(2, 'Incorrect result of skip()');
expect(testArray.skip(1)\[1\]).to.equal(3, 'Incorrect result of skip()');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('take')).to.equal(true, "Couldn't find take() function");
expect(testArray.take(2)\[0\]).to.equal(1, 'Incorrect result of take()');
expect(testArray.take(2)\[1\]).to.equal(2, 'Incorrect result of take()');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];
expect(Array.prototype.hasOwnProperty('last')).to.equal(true, "Couldn't find last() function");
expect(testArray.last()).to.equal(3, 'Incorrect last element');

expect(Array.prototype.hasOwnProperty('skip')).to.equal(true, "Couldn't find skip() function");
expect(testArray.skip(1)\[0\]).to.equal(2, 'Incorrect result of skip()');
expect(testArray.skip(1)\[1\]).to.equal(3, 'Incorrect result of skip()');

expect(Array.prototype.hasOwnProperty('take')).to.equal(true, "Couldn't find take() function");
expect(testArray.take(2)\[0\]).to.equal(1, 'Incorrect result of take()');
expect(testArray.take(2)\[1\]).to.equal(2, 'Incorrect result of take()');

expect(Array.prototype.hasOwnProperty('sum')).to.equal(true, "Couldn't find sum() function");
expect(testArray.sum()).to.equal(6, 'Incorrect sum');

expect(Array.prototype.hasOwnProperty('average')).to.equal(true, "Couldn't find average() function");
expect(testArray.average()).to.equal(2, 'Incorrect average value');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('average')).to.equal(true, "Couldn't find average() function");
expect(testArray.average()).to.equal(2, 'Incorrect average value');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('sum')).to.equal(true, "Couldn't find sum() function");
expect(testArray.sum()).to.equal(6, 'Incorrect sum');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problem: Balloons
[code-task title="Balloons" taskId="js-advanced-prototypes-and-inheritance-balloons" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function balloons() {
      // Write your code here
   }
```

[/code-editor]
[task-description]

# Description

You have been tasked with creating several classes for balloons.
## Balloon Class

Implement a class **Balloon**, which is initialized with a **color** (String) and **gasWeight** (Number). 

These two arguments should be **public members**.

## PartyBalloon Class

Implement a **PartyBalloon** class, which inherits **Balloon** and is initialized with **2 additional parameters** - **ribbonColor** (String) and **ribbonLength** (Number).

The **PartyBalloon** class should have a **property ribbon** which is an object with **color** and **length** - the ones given upon initialization. 

The ribbon property should have a **getter**.

## BirthdayBalloon Class

Implement another class - **BirthdayBalloon**, which inherits the **PartyBalloon** class and is initialized with **1 extra parameter** - **text** (String). 

The **text** should be a property and should have a **getter**.

[hints]
[hint]
First, we need to write a **function** that will hold our classes. 

We create a simple function and, we add the first **class**, the **base** class for all **Balloons** to it.

```js
function balloons() {
  class Ballon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }
}
```
[/hint] 
[hint]
Now that we have our base class, we can create the first child class - the **PartyBalloon**, which extends the base **Balloon** class.

Upon inheriting the **Balloon** class, the constructor of the **PartyBalloon** class will require the use of the `super()` method to initialize the **Balloon** base constructor.

```js
class PartyBallon extends Ballon {
  constructor(color, gasWeight,
    ribbonColor, ribbonLength) {

    super(color, gasWeight);
    // TODO: Initialize ribbon object

  }

  get ribbon() {
    return this._ribbon;
  }
}
```

We also need to add the **ribbon** object property in the constructor of the **PartyBalloon** class. 

This one is for you to do.
[/hint] 
[hint]
Now that we know how to inherit classes, create the **BirthdayBalloon** class on your own.

The **BirthdayBalloon** class should extend the **PartyBalloon** class and add an **extra property**.

It is the same as the previous class.
[/hint] 
[hint]
Lastly, we need to **return** an object containing **all** of our classes, so we can **submit** the solution.

```js
function balloons() {
  class Ballon {...}

  class PartyBallon extends Ballon {...}

  class BirthdayBallon extends PartyBallon {...}

  return {
    Ballon: Ballon,
    PartyBallon: PartyBallon,
    BirthdayBallon: BirthdayBallon
  }
}
```
[/hint]
[/hints]

## Submission

Submit a **function (NOT IIFE)**, which holds all classes, and returns them as an object.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let classes = result();

expect(classes.Balloon.length).to.be.equal(2,
"'Balloon constructor' does not accept 2 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();

let test = new classes.Balloon("Tumno-bqlo", 20.5);

expect(test.color).to.be.equal("Tumno-bqlo",
"'Balloon color' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();

let test = new classes.Balloon("Tumno-bqlo", 20.5);

expect(test.gasWeight).to.be.equal(20.5,
"'Balloon gasWeight' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.PartyBalloon)).to.be.equal(classes.Balloon,
"'PartyBalloon class' does not inherit 'Balloon class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.PartyBalloon.length).to.be.equal(4,
"'PartyBalloon constructor' does not accept 4 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);

expect(test.color).to.be.equal("Tumno-bqlo",
"'PartyBalloon color' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);

expect(test.gasWeight).to.be.equal(20.5,
"'PartyBalloon gasWeight' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;

expect(ribbon.color).to.be.equal("Svetlo-cherno",
"'PartyBalloon ribbon color' does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;

expect(ribbon.length).to.be.equal(10.25,
"'PartyBalloon ribbon length' does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.BirthdayBalloon)).to.be.equal(classes.PartyBalloon,
"'BirthdayBalloon class' does not inherit 'PartyBalloon class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.BirthdayBalloon.length).to.be.equal(5,
"'BirthdayBalloon constructor' does not accept 5 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
let ribbon = test.ribbon;

expect(ribbon.length).to.be.equal(10.25,
"'PartyBalloon ribbon length' does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
let text = test.text;

expect(text).to.be.equal("Happy Birthday!!!",
"'BirthdayBalloon text' property does not return correct values");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problem: People

[code-task title="People" taskId="js-advanced-prototypes-and-inheritance-people" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function people() {
      // Write your code here
   }
```

[/code-editor]
[task-description]

# Description

Define several classes that represent a company's employee records. 

Every employee has a **name** and **age**, a **salary**, and a list of **tasks**, while every position has specific properties not present in the others. 

Place all common functionality in an **abstract parent** class. 

Follow the diagram below:

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-4.png" /]

Every position has different tasks. In addition to all common properties, the manager position has a **dividend** he can collect along with his salary.

All employees have a `work()` function when called cycles through the list of responsibilities for that position and prints the current one. 

When all tasks have been printed, the list starts over from the beginning. Employees can also collect **salary**, which outputs the amount plus any **bonuses**.

Your program needs to expose a module containing the three classes **Junior**, **Senior**, and **Manager**. 

The properties **name** and **age** are set through the constructor, while the **salary** and a manager's **dividend** are initially set to zero and can be changed later.

The list of tasks is filled by each position. The resulting objects also expose the functions `work()` and `collectSalary()`. 

When `work()` is called, one of the following lines is printed to the console depending on the current task in the list:

- "\{**employee name**\} **is working on a simple task.**"
- "\{**employee name**\} **is working on a complicated task.**"
- "\{**employee name**\} **is taking time off work.**"
- "\{**employee name**\} **is supervising junior workers.**"
- "\{**employee name**\} **scheduled a meeting.**"
- "\{**employee name**\} **is preparing a quarterly report.**"

When `collectSalary()` is called, print the following:

- "\{**employee name**\} **received** \{**salary + bonuses**\} **this month.**"

## Input and Output

Any input will be passed as valid arguments where applicable. 

Print any output that is required to the console as a **string**.

## Submission

Submit your code as a revealing module, containing the **three classes**. 

All definitions need to be named as described above.

[hints]
[hint]
We should begin by creating a **parent class** that will hold all properties **shared** among the different positions. 

Looking at the problem description, we see the following **structure** for our parent object:

```js
{
  age: Number,
  name: String,
  salary: Number,
  tasks: [],
  work: Function,
  collectSalary: Function
}
```
[/hint] 
[hint]
Data variables will be part of the object attached to its local context with **this** inside the **constructor**. 

Any properties that need to be initialized at **instantiation time** are defined as function **parameters**. 

Functions are defined inside the **class body**.

```js
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }

  work() {
    // TODO: Cycle tasks
  }

  collectSalary() {
    // TODO: Get paid
  }
}
```
[/hint] 
[hint]
The problem description requires that the **parent** class is **abstract**. 

To achieve this, we have to add a **condition** in the constructor which **prevents** its direct instantiation. 

Using the `new.target` keyword, we can check whether the object is created from **the abstract constructor** or through a **child class**.

```js
constructor(name, age) {
  if (new.target === Employee) {
    throw new Error(
      "Cannot instantiate directly.");
  }

  this.name = name;
  this.age = age;
  this.salary = 0;
  this.tasks = [];
}
```
[/hint] 
[hint]
The `work()` function has to **cycle through** the list of tasks and **print** the current one. 

The easiest way to do this is to **shift** the first element from the array and **push** it to the end.

```js
work() {
  let currentTask = this.tasks.shift();
  console.log(this.name + currentTask);
  this.tasks.push(currentTask)
}
```
[/hint]
[hint]
Printing the **salary** is pretty straightforward. 

However, since the manager has a **bonus** to his salary, it is best to get the whole sum with an internal function, that the manager can **override**.

```js
collectSalary() {
  console.log(`${this.name} received
      ${this.getSalary()} this month`);
}

getSalary() {
  return this.salary;
}
```
[/hint]
[hint]
Now any objects that inherit from **Employee** will have **all** of their properties as well as anything **new** that is defined in their declaration. 

To **inherit** (extend) a class, a **new class** is defined with the `extends` keyword after its **name**.

They also have to **call** the parent constructor from their constructor, so the **prototype chain** is established. 
[/hint]
[hint]
For **Junior** and **Senior**, the only difference from the parent **Employee** is the elements inside the tasks array, since they can use the functions **directly** from the base class. 

Child classes will **call** the parent with any parameters that are needed and push their tasks directly to the **array**.

```js
class Junior extends Employee {
  constructor(name, age) {
    super(name, age);
    this.tasks.push(' is working on simple task.');
  }
}
```

```js
class Senior extends Employee {
  constructor(name, age) {
    super(name, age);
    this.tasks.push(
      ' is working on a complicated task.');
    this.tasks.push(' is taking time off work.');
    this.tasks.push(
      ' is supervising junior workers.');
  }
}
```
[/hint]
[hint]
The **Manager** class is not much different, with the exception that its constructor has to attach a **dividend** property that is initially set to zero. 

Its definition also needs to **override** the `getSalary()` function we added to the base class earlier, which includes the **bonus**.

```js
class Manager extends Employee {
  constructor(name, age) {
    super(name, age);

    this.dividend = 0;

    this.tasks.push(' scheduled a meeting.');
    this.tasks.push(' is preparing a quarterly report.');
  }

  getSalary() {
    return this.salary + this.dividend;
  }
}
```
[/hint]
[hint]
After we are done with the **definitions** of all object constructors, we need to **wrap** them in a revealing **module** for use by other parts of our program:

```js
class Manager extends Employee {
  constructor(name, age) {...}
  getSalary() {...}

  function solve() {

    class Employee {...}
    class Junior extends Employee {...}
    class Senior extends Employee {...}
    class Manager extends Employee {...}

    return {
      Employee,
      Junior,
      Senior,
      Manager,
    };
  }
}
```

This prevents global namespace pollution.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
result = result();

expect(result.hasOwnProperty('Employee')).to.equal(true, "Solution didn't contain Employee constructor");
expect(result.hasOwnProperty('Junior')).to.equal(true, "Solution didn't contain Junior constructor");
expect(result.hasOwnProperty('Senior')).to.equal(true, "Solution didn't contain Senior constructor");
expect(result.hasOwnProperty('Manager')).to.equal(true, "Solution didn't contain Manager constructor");

var guy1parent = Object.getPrototypeOf(result.Junior.prototype);
var guy2parent = Object.getPrototypeOf(result.Senior.prototype);
var guy3parent = Object.getPrototypeOf(result.Manager.prototype);

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

expect(guy1.hasOwnProperty('name')).to.equal(true, "Name property not found on Junior instance.");
expect(guy1.hasOwnProperty('age')).to.equal(true, "Age property not found on Junior instance.");
expect(guy1.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Junior instance.");

expect(guy2.hasOwnProperty('name')).to.equal(true, "Name property not found on Senior instance.");
expect(guy2.hasOwnProperty('age')).to.equal(true, "Age property not found on Senior instance.");
expect(guy2.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Senior instance.");

expect(guy3.hasOwnProperty('name')).to.equal(true, "Name property not found on Manager instance.");
expect(guy3.hasOwnProperty('age')).to.equal(true, "Age property not found on Manager instance.");
expect(guy3.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Manager instance.");
expect(guy3.hasOwnProperty('dividend')).to.equal(true, "Salary property not found on Manager instance.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

// Stub the console
var oldConsole = console.log;
var log = \[\];
console.log = function (string) \{
log.push(string);
\};

var guy1 = new result.Junior('Peter', 27);
guy1.salary = 1200;
guy1.collectSalary();
expect(log\[0\]).to.equal('Peter received 1200 this month.', "Junior's salary was not logged.");

// Restore the console
console.log = oldConsole;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy2 = new result.Senior('Peter', 24);
var guy3 = new result.Manager('Jake', 25);

expect(guy1.name).to.equal('Don', "Junior's name not set through constructor");
expect(guy1.age).to.equal(23, "Junior's age not set through constructor");
expect(guy2.name).to.equal('Peter', "Senior's name not set through constructor");
expect(guy2.age).to.equal(24, "Senior's age not set through constructor");
expect(guy3.name).to.equal('Jake', "Manager's name not set through constructor");
expect(guy3.age).to.equal(25, "Manager's age not set through constructor");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('Peter', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('Jake', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");

expect(guy1.salary).to.equal(0, "Salary not initialized through constructor on Junior.");
guy1.salary = 1000;
expect(guy1.salary).to.equal(1000, "Salary could not be changed at runtime on Junior.");

expect(guy2.salary).to.equal(0, "Salary not initialized through constructor on Senior.");
guy2.salary = 2000;
expect(guy2.salary).to.equal(2000, "Salary could not be changed at runtime on Senior.");

expect(guy3.salary).to.equal(0, "Salary not initialized through constructor on Manager.");
expect(guy3.dividend).to.equal(0, "Dividend not initialized through constructor on Manager.");
guy3.salary = 3000;
guy3.dividend = 500;
expect(guy3.salary).to.equal(3000, "Salary could not be changed at runtime on Manager.");
expect(guy3.dividend).to.equal(500, "Dividend could not be changed at runtime on Manager.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('Peter', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('Jake', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");

// Stub the console
var oldConsole = console.log;
var log = \[\];
console.log = function (string) \{
log.push(string);
\};

// Test Junior
guy1.work();
guy1.work();
guy1.work();

var expectedGuy1Output = \[
'Don is working on a simple task.',
'Don is working on a simple task.',
'Don is working on a simple task.'
\];

compareArrays(expectedGuy1Output, log, "Junior's work wasn't logged.");

// Test Senior
log = \[\];
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();

var expectedGuy2Output = \[
'Peter is working on a complicated task.',
'Peter is taking time off work.',
'Peter is supervising junior workers.',
'Peter is working on a complicated task.',
'Peter is taking time off work.',
'Peter is supervising junior workers.',
'Peter is working on a complicated task.',
'Peter is taking time off work.',
'Peter is supervising junior workers.'
\];

compareArrays(expectedGuy2Output, log, "Senior's work wasn't logged.");

// Test Manager
log = \[\];
guy3.work();
guy3.work();
guy3.work();
guy3.work();
guy3.work();
guy3.work();

var expectedGuy3Output = \[
'Jake scheduled a meeting.',
'Jake is preparing a quarterly report.',
'Jake scheduled a meeting.',
'Jake is preparing a quarterly report.',
'Jake scheduled a meeting.',
'Jake is preparing a quarterly report.'
\];

compareArrays(expectedGuy3Output, log, "Manager's work wasn't logged.");

// Restore the console
console.log = oldConsole;

function compareArrays(array1, array2, message) \{
expect(array1.length).to.equal(array2.length, message);
for (let i = 0; i \< array1.length; i++) \{
expect(array1\[i\]).to.equal(array2\[i\], message);
\}
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('Peter', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('Jake', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");

// Stub the console
var oldConsole = console.log;
var log = \[\];
console.log = function (string) \{
log.push(string);
\};

guy1.salary = 1000;
guy1.collectSalary();
expect(log\[0\]).to.equal('Don received 1000 this month.', "Junior's salary was not logged.");

guy2.salary = 2000;
guy2.collectSalary();
expect(log\[1\]).to.equal('Peter received 2000 this month.', "Senior's salary was not logged.");

guy3.salary = 3000;
guy3.collectSalary();
expect(log\[2\]).to.equal('Jake received 3000 this month.', "Manager's salary was not logged.");
guy3.dividend = 500;
guy3.collectSalary();
expect(log\[3\]).to.equal('Jake received 3500 this month.', "Manager's dividend was not logged.");

// Restore the console
console.log = oldConsole;
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problem: Posts

[code-task title="Posts" taskId="js-advanced-prototypes-and-inheritance-posts" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function posts() {
      // Write your code here
   }
```

[/code-editor]
[task-description]

# Description

You need to create several classes for **Posts**.

Implement the following classes:

- **Post**, which is initialized with **title** (String) and **content** (String).

   - The **2** arguments should be **public members**
   - The **Post** class should also have a `toString()` function which returns the following result:
      - "**Post:** \{**postTitle**\}"
      - "**Content:** \{**postContent**\}"

- **SocialMediaPost**, which inherits the **Post** class and should be initialized with **2 additional arguments** - **likes** (Number) and **dislikes** (Number). The class should hold:

   - **comments**(Strings) - an array of strings

   - **addComment**(comment)- a function which **adds** comments to that array

   - The class should extend the `toString()` function of the **Post** class, and should return the following result

    ```
      Post: {postTitle}
      Content: {postContent}
      Rating: {postLikes - postDislikes}
      Comments:
       * {comment1}
       * {comment2}
    ```

In case **there are no comments**, return information only about the **title**, **content**, and the **rating** of the **post**.

- **BlogPost**, which inherits the **Post** class

   - the **BlogPost** class should be initialized with **1 additional argument** - **views**(Number)

   - the **BlogPost** class should hold a `view()` method which **increments** the **views** of the object by **1**, every time it is called. The function should **return the object**, so that **chaining is supported**

   - the **BlogPost** class should extend the `toString()` function of the **Post** class, and should return the following result

   ```
   Post: {postTitle}
   Content: {postContent}
   Views: {postViews}
   ```

# Example

## Input

```js
   let post = new Post('Post', 'Content');

   console.log(post.toString());

   let scm = new SocialMediaPost(
       'TestTitle', 'TestContent', 25, 30);

   scm.addComment('Good post');
   scm.addComment('Very good post');
   scm.addComment('Wow!');

   console.log(scm.toString());
```

## Output

```
Post: Post
Content: Content
----------------------------
Post: TestTitle
Content: TestContent
Rating: -5
Comments:
 * Good post
 * Very good post
 * Wow!
```

## Submission

Submit a **function (NOT IIFE)**, which holds all classes, and returns them as an object.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let classes = result();

let test = new classes.Post("TestTitle", "TestContent");

expect(test.title).to.be.equal("TestTitle",
"'Post title' was not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();

let test = new classes.Post("TestTitle", "TestContent");

expect(test.content).to.be.equal("TestContent",
"'Post content' was not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.SocialMediaPost)).to.be.equal(classes.Post,
"'SocialMediaPost class' does not inherit 'Post class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.SocialMediaPost.length).to.be.equal(4,
"'SocialMediaPost constructor' does not accept 4 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

expect(test.title).to.be.equal("TestTitle",
"'SocialMediaPost title' was not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Rating: -5",
"'SocialMediaPost toString()' function does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Rating: -5\n" +
"Comments:\n" +
" \* 1\n" +
" \* 2\n" +
" \* 3",
"'SocialMediaPost toString()' function does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.BlogPost)).to.be.equal(classes.Post,
"'BlogPost class' does not inherit 'Post class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.BlogPost.length).to.be.equal(3,
"'BlogPost constructor' does not accept 3 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Views: 5",
"'BlogPost toString()' function does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Views: 8",
"'BlogPost views()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problem: Computer

[code-task title="Computer" taskId="js-advanced-prototypes-and-inheritance-computer" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function computer() {
    // Write your code here

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
```

[/code-editor]
[task-description]

# Description

Implement the class hierarchy for a computer business.

Implement the following classes:

- A **Keyboard** class that contains:

   - **manufacturer** - a string property for the name of the manufacturer
   - **responseTime** - a number property for the response time of the keyboard

- A **Monitor** class that contains:

   - **manufacturer** - a string property for the name of the manufacturer
   - **width** - a number property for the width of the screen
   - **height** - a number property for the height of the screen

- A **Battery** class that contains:

   - **manufacturer** - a string property for the name of the manufacturer
   - **expectedLife** - a number property for the expected years battery life

- **Computer** - an **abstract** class that contains:

   - **manufacturer** - a string property for the name of the manufacturer
   - **processorSpeed** - a number property containing the speed of the processor in GHz
   - **ram** - a number property containing the RAM of the computer in Gigabytes
   - **hardDiskSpace** - a number property containing the hard disk space in Terabytes

- A **Laptop** class **extending** the **Computer** class that contains:

   - **weight** - a number property containing the weight of the laptop in Kilograms
   - **color** - a string property containing the color of the laptop
   - **battery** - an instance of the **Battery** class containing the laptop's battery
   
There should be a **getter** and a **setter** for the property and validation to ensure the argument that is passed in is an instance of the Battery class.

- **Desktop** - a concrete class **extending** the **Computer** class that contains:

   - **keyboard** - an instance of the **Keyboard** class containing the Desktop PC's Keyboard

There should be a **getter** and a **setter** for the property and validation ensuring the argument that is passed in is an instance of the **Keyboard** class.

   - **monitor** - an instance of the **Monitor** class containing the Desktop PC's Monitor
   
There should be a **getter** and a **setter** for the property and validation ensuring the argument that is passed in is an instance of the **Monitor** class.

- Attempting to instantiate an abstract class should throw an **Error**
- Attempting to pass an object that is not of the expected instance (ex. object that is not an instance of Battery to the laptop as a battery) should throw a **TypeError**

## Example

```js
function createComputerHierarchy() {
    // TODO: Implement all the classes, 
    // with their properties

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
```

## Submission

You are asked to submit **ONLY the function** that returns an object containing the classes mentioned above.

## Bonus

To achieve code reusability, it is a good idea to have an abstract class containing common information. 

Check the classes for common characteristics, that can be grouped in a base class.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;

expect(Object.getPrototypeOf(Desktop)).to.equal(Computer,"Incorrect inheritance.");
expect(Object.getPrototypeOf(Laptop)).to.equal(Computer,"Incorrect inheritance.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
expect(desktop.manufacturer).to.equal("JAR Computers",'Expected manufacturer did not match.');
expect(desktop.processorSpeed).to.be.closeTo(3.3,0.01,'Expected processor speed did not match.');
expect(desktop.ram).to.equal(8,'Expected RAM did not match.');
expect(desktop.hardDiskSpace).to.equal(1,'Expected hard disk space did not match.');
expect(desktop.keyboard).to.equal(keyboard,'Expected keyboard did not match.');
expect(desktop.monitor).to.equal(monitor,'Expected monitor did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
expect(laptop.manufacturer).to.equal("Hewlett Packard",'Expected manufacturer did not match.');
expect(laptop.processorSpeed).to.be.closeTo(2.4,0.01,'Expected processor speed did not match.');
expect(laptop.ram).to.equal(4,'Expected RAM did not match.');
expect(laptop.hardDiskSpace).to.be.closeTo(0.5,0.05,'Expected hard disk space did not match.');
expect(laptop.weight).to.be.closeTo(3.12,0.01,'Expected weight did not match.');
expect(laptop.color).to.equal('Silver','Expected color did not match.');
expect(laptop.battery).to.equal(battery,'Expected battery did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);

expect(()=\>new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho")).to.throw(TypeError);
expect(()=\>new Desktop("JAR Computers",3.3,8,1,1,monitor)).to.throw(TypeError);
expect(()=\>new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor")).to.throw(TypeError);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let monitor = new Monitor('Benq',28,18);

let keyboard = new Keyboard('Pesho',5);
expect(keyboard.responseTime).to.equal(5,"Response time did not match.");
expect(keyboard.manufacturer).to.equal('Pesho','Manufacturer did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let monitor = new Monitor('Plank',3,2);
expect(monitor.width).to.equal(3,"Width did not match.");
expect(monitor.height).to.equal(2,'Height did not match.');
expect(monitor.manufacturer).to.equal("Plank",'Manufacturer did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Monster',2.5);
expect(battery.expectedLife).to.be.closeTo(2.5,0.05,"Expected life did not match.");
expect(battery.manufacturer).to.equal("Monster",'Manufacturer did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

expect(()=\>new Computer("Most Computers",2,8,1.5)).to.throw(Error);

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);

expect(()=\>laptop.battery = "pesho").to.throw(TypeError);
expect(()=\>desktop.keyboard = "gosho").to.throw(TypeError);
expect(()=\>desktop.monitor = "stamat").to.throw(TypeError);

keyboard.manufacturer = "Ha";
expect(desktop.keyboard.manufacturer).to.equal('Ha',"Keyboard getter did not work.");
monitor.manufacturer = "Ho";
expect(desktop.monitor.manufacturer).to.equal('Ho',"Keyboard getter did not work.");
battery.manufacturer = "Hi";
expect(laptop.battery.manufacturer).to.equal('Hi',"Keyboard getter did not work.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
