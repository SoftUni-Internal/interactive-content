# Introduction to JavaScript

[slide hideTitle]

# Dynamic Programming Language

JavaScript is what is known as a **dynamic programming language**.

This type of language is more flexible compared to **static programming languages** because the programmer can pass parameters during the runtime of the program, and they do not need to define the type of variable in advance.

This is why JavaScript is also called a **dynamically typed** language.

We can essentially use one variable to store many different types of values.

In comparison, in **statically typed** languages such as Java or C#, you are typically forced to declare your variable types in advance. 

When working with **static programming languages** and you use one variable to store text, you will not be able to override the same variable with numerical data, and attempting so will result in an error.

```js
string lastPlaceVisited = "Jeffrey's Bar";

//The below results in an error in statically typed languages

lastPlaceVisited = 777;
```

In JavaScript, you can change the **type** of a variable, and you can also add **new properties** or **methods** to an object dynamically (while the program is running).

```js live
var lastPlaceVisited = "Mr. Magoo's Emporium";

console.log(lastPlaceVisited);

lastPlaceVisited = 13;

console.log(lastPlaceVisited);
```

If you run the code from the example above, you will see that JavaScript accepts the assignment of a numerical value even though the **lastPlaceVisited** variable was first used for storing text.

Ultimately, it is the programmer's responsibility to ensure that user input does not cause errors in the application and is handled correctly, regardless of type.

[/slide]

[slide hideTitle]
# Data Types

We can divide the types of data available in JavaScript into two groups - **primitives** and **reference** types. 

A variable that is assigned a primitive data type value, holds the value of the data directly, and contains no additional properties or methods.

Variables that contain **Reference** data such as **Objects** actually hold references to the memory locations of the data stored in them.

Here is a table containing the seven primitive data types in JavaScript.

| **Type** | **Description** |
| --- | --- |
| String | Represents text |
| Number | Represents numeric values |
| Boolean | A logical data type that contains either `true` or `false` |
| undefined | Assigned automatically to variables at the time of their declaration |
| null | Represents the intentional absence of any object value  |
| BigInt | Used for working with very big integers, and it is limited by the amount of memory available in the system |
| Symbol | Represents a unique identifier. Each time a symbol value is created, an anonymous unique value is created. |

[/slide]

[slide hideTitle]
# Instalarea Node.js și Visual Studio Code

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-20-21-22-Installing-NodeJS-and-Visual-Studio-Code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Avem nevoie de **Node.js**, astfel încât să putem executa cod JavaScript în afara unui browser.

* Runtime JS pe partea de server

[image assetsSrc="intro-to-programming-3.png" /]

Puteți descărca [Node.js](https://nodejs.org/en/download/).

[image assetsSrc="intro-to-programming-install-nodejs-1.png" /]

Selectați OS-ul vostru și continuați cu instalarea.

[image assetsSrc="intro-to-programming-install-nodejs-2.png" /]

Să continuăm cu instalarea mediului integrat **Microsoft Visual Studio Code**.

Instalarea versiunilor ulterioare ale Visual Studio Code ar trebui să fie foarte asemănătoare.

[Visual Studio Code](https://code.visualstudio.com/download) (VS Code) este distribuit gratuit de Microsoft.

Instalarea este tipică pentru Windows cu `[Next]`, `[Next]` și `[Finish]`.

Următoarele linii descriu în detaliu pașii pentru instalarea Visual Studio Code.

După ce descărcăm fișierul de instalare și îl pornim, apare următorul ecran:

[image assetsSrc="intro-to-programming-install-vscode-1.png" /]

Apăsăm butonul `[Next]` și vom vedea ecranul de mai jos:

[image assetsSrc="intro-to-programming-install-vscode-2.png" /]

Putem alege o locație de destinație sau să o lăsăm pe cea implicită. Apoi apăsăm din nou butonul `[Next]`.

[image assetsSrc="intro-to-programming-install-vscode-3.png" /]

Acum trebuie să specificăm un nume pentru folderul programului care va fi creat în meniul Start.

Următorul pas este să punem bife pentru următoarele sarcini:

[image assetsSrc="intro-to-programming-install-vscode-4.png" /]

VS este acum gata pentru instalare. Apăsați butonul `[Install]`. Practic asta este totul.

[image assetsSrc="intro-to-programming-install-vscode-5.png" /]

Instalarea Visual Studio începe și va apărea un ecran ca cel de mai jos:

[image assetsSrc="intro-to-programming-install-vscode-6.png" /]

După instalarea Visual Studio, va apărea un ecran informativ. Apăsați butonul `[Launch]` pentru a-l porni.

[image assetsSrc="intro-to-programming-install-vscode-7.png" /]

La **pornirea VS Code** se afișează vizualizarea principală a Visual Studio Code.

[image assetsSrc="intro-to-programming-install-vscode-8.png" /]

Suntem pregătiți să lucrăm cu Visual Studio Code.
[/slide]

[slide hideTitle]

# Identifiers

Identifiers are sequences of characters in the code used to identify a particular variable, function, or property.

When you are giving a name to a variable, you are assigning it a unique identifier.

Here are some rules that apply to identifiers:

- Identifiers are **case-sensitive** 
- Can contain unicode characters such as **letters**, **$**, **_** and **digits from 0-9**
- Identifiers **cannot start with a digit**

Valid identifiers:
- `var _month = "January"`
- `function $doSomething()`
- `let moneyAmount = 131`


Invalid identifier:
- `var 2price`

Identifiers are not the same as strings because a string is, while identifiers are considered part of the code.

[/slide]

[slide hideTitle]

# Variable Values

Every variable stores a value inside it. 

Primitive values are stored directly in the variables, while variables that are assigned non-primitive values, hold references to those values.

A variable that has been declared with no value assigned to it will contain a value of `undefined` by default.

We can demonstrate it with some code:

```js live
let weight;
console.log(weight);
```

Printing the value of **weight** to the console shows **undefined**.

JavaScript also has a value for variables that have never been declared:

```js live
console.log(topScore);
```

Variables that are not defined at all are considered `Undeclared` and trying to access such variables results in a **Reference Error**.

In summary variables can contain:
- primitive data values
- non-primitive data values (references in memory)
- undeclared
- undefined 

## Declaring Variables

We can use `let`, `const`, or `var` for declaring variables.

Each of them serves a different purpose.

**let** is used for declaring **reassignable** variables and is **block-scoped**. 

Reassignable means that you can change the value of the variable after assigning.

Block-scoped means that the variable will be accessible only inside the block where it is declared. 

```js live
{
  let profession = "Lawyer";
  console.log(profession);
}

console.log(profession)
```

The above example shows the concept of **block-scope** as the **profession** variable is not available outside the code block; attempting to log it to the console results in an error.

**const** is used for variables holding constant values that are not likely to change over time. 

Const variables **cannot be assigned new values**, and once set, attempting to change the value results in an **TypeError**.

```js live
const daysInWeek = 7;
daysInWeek = 2; //Type Error
```

The **var** is similar to **let** but it is **not block-scoped**, meaning that the variable will be available within the whole function where it is declared.

```js live
{
  var profession = "Lawyer";
  console.log(profession);
}

console.log(profession)
```

Last time we attempted this, we could not log the value of **profession** but since we used **var** which has a bigger scope, this works fine.

Be careful with using **var** as it might result in unexpected behavior.

Declaring variables with **let** is generally considered safer as their scope is much more limited.

**Var** is **function-scoped** and will be available only within the function it was defined in.

```js live
function announceProfession() {
  var profession = "Software Architect";
  console.log(profession);
}

console.log(profession)
```

The above results in a **ReferenceError** because **var** is **function-scoped**.

[/slide]

[slide hideTitle]

# Variable Scopes

There are a few different types of variable scopes in JavaScript.

Let us see three of them: 

- **Global scope** - this is the area outside of any function or block of code; there is only one global scope in the program

```js live
var subject = 'Applied Physics'
console.log(subject); //Applied Physics

function getSubject() {
  console.log(subject); //still accessible
}

getSubject();   
```

- **Function scope** - this is the code area within a function declaration; function-scope variables are available only within the function declared

```js live
function displayName() {
  var name = 'Leon';
  console.log('functions-scoped: ', leon);
}

displayName(); 
console.log(name); //error
```

In the above example, logging the **name** from inside the function works, but trying to access it outside of the function scope results in an error.


- **Block scope** - the area of code within a block of code signified by a pair of curly braces `{ }`

```js live
function checkStatus() {
  if (true) {
    let status1 = 'DISCONNECTED'; 
    var status2 = 'OK'; 
    const status3 = 'DENIED'; 

  }
  //console.log(status1);
  console.log(status2);
  //console.log(status3);
}

checkStatus();
```

Run the code above and you should see the value of **status2** printed to the console.

This works because **var** is function scoped.

Now reemove the comments for **status1** or **status3** (the ``//`` in front of the ``console.log()`` function), and run the code again.

This immediately causes an error because **let** and **const** are both block scoped and can only be used within the if code block. 

[/slide]

[slide hideTitle]

# Dynamic Typing

Because JavaScript is a dynamically typed language, the declared variables are **not directly associated** with a particular value type.

As long as you did not declare a variable with the **const** keyword, any variable can be assigned and re-assigned 
different values of any type.

```
let myVariable = "Gone with the wind"; //String
myVariable = 15; //Turns into a number
myVariable = false; //And now a boolean value
```

Just because you can store any type of value in a single variable, it does not mean you should.

Most of the time this is considered a bad practice and should be avoided as each variable should serve one purpose.


[/slide]