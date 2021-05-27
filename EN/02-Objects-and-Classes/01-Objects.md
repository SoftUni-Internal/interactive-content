# Objects

[slide hideTitle]
# What is an Object?

**Objects** in **JavaScript**, similarly to **Java**, can be compared to objects in real life.

An object consists of several **variables** - called **properties**, and **functions** - called **methods**.

This is an example of a simple `country` object:

```js live
let country = {
    name: 'United Kingdom',
    capital: 'London',
    population: 64886004,
    language: 'english'
};

console.log(country.name);
```

To define an object in JavaScript, we use **curly brackets**.

This object has **four properties** - `name`, `capital`, `population`, and `language`.

We can **access** a property's value by writing the class name, followed by a dot `.`, and the property name (e.g. `country.name`).

[/slide]

[slide hideTitle]
# Variables Holding References

**Objects** are a reference data type.

Contrary to primitive data types, such as `Number` and `String`, reference types hold only the **pointer** to the data in the memory.

Variables that are assigned a non-primitive value are given a **reference** to that value:

``` js live
let personOne = {
    name: 'Michelle',
    age: '35',
    city: 'Los Angeles'
};

let personTwo = personOne;

console.log(`The first person's name is ${personOne.name}.`);
console.log(`The second person's name is ${personTwo.name}.`);

personOne.name = 'Maria';

console.log(`The first person's name is ${personOne.name}.`);
console.log(`The second person's name is ${personTwo.name}.`);
```
 
In this example, we create a `personOne` object to which we assign the following properties: **name**, **age**, and **city**. 

This value is stored in the memory, and **only the reference** is assigned to the variable. 

When we assign `personOne` to the second variable, which is `personTwo`, we create a copy of the **reference** that points to the memory. 

As a result, when we log both objects' **name** propeties to the console, we receive the same result - `Michelle`.

When we change the `personOne.name` to be equal to `Maria`, we are altering the **object** stored in memory. 
 
Because `objectTwo` is simply a reference to the same value, we get the same result when we `console.log` both properties - `Maria.`

[/slide]

[slide hideTitle]
# Object Properties

When a variable is assigned to an **object**, it is called a **property**.

The only difference between both is that properties **belong** to an object.

Declaring a property is done using **key-value** pairs in the format `key: value`:

```js live
let color = {
    name: 'red',
    rgbValues: [255, 0, 0],
    hexTriplet: '#FF0000'
    
};

console.log(color);
```

As we can see, properties can be of different **data types**.

In this example, the `color` object has three properties.

|**Property Name**|**Property Value**|**Data Type**|
|---|---|---|
|name|red|**String**|
|rgbValues|`[255, 0, 0]`|**Array**|
|hexTriplet|\#FF0000|**String**|

[/slide]

[slide hideTitle]
# Assigning and Accessing Properties

There are **two** syntaxes for assigning and accessing properties - **dot notation** and **bracket notation**.

## Dot Notation

Obtaining a property using dot notation, as the name suggests, has the following syntax: `object.property`

Being **faster and easier to write**, it is the most commonly used way to manipulate objects.

```js live
let artist = {};
artist.firstName = 'Elton';
artist.lastName = 'John';
artist.age = 74;
artist.genres = ['Pop rock', 'Glam rock', 'Soft Rock'];

console.log(`${artist.firstName} ${artist.lastName}`)
```

In this example, we create an empty `artist` object.

Subsequently, we assign four properties to it - `firstName`, `lastName`, `age`, and `genres`.

## Bracket Notation

A common **downside** of dot notation is that it does **not allow** for the use of **special symbols**, such as hyphens.

Bracket notation solves this problem by accepting strings, numbers, and even arrays and objects as keys, although the latter is not recommended.

The syntax for a bracket selector looks like this: `object[key]`

```js live
let student = {
    name: 'Joseph',
    'school-name': 'SoftUni'
}

console.log(student['school-name']);
console.log(student.school-name);
```

As we can see, using dot notation in this example results in a `ReferenceError`.

Bracket notation also enables selecting keys by using **variables**:

```js
let car = {
    color: 'blue',
    brand: 'Toyota',
    year: 2015
}

let x = 'brand';

console.log(car[x]);
```

[/slide]

[slide hideTitle]
# Accessing Unassigned Properties

Trying to access an unassigned object property returns `undefined`:

```js live
let book = {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    genre: 'Novel'
};

console.log(book.age);
```

This `book` object has three properties: **title**, **author** and **genre**.

It does not have an **age** property, as it would be irrelevant.

As a result, the value of `book.age` is `undefined`.

[/slide]

[slide hideTitle]
# Problem with Solution: City Record
[code-task title="City Record" taskId="java-path-js-advanced-objects-and-classes-city-record" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cityRecord(name, population, treasury){
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
You will receive a city’s **name** (string), **population** (number), and **treasury** (number) as arguments. 

Set them as **properties** of an object and **return** it. 

## Example One

|**Input**|**Output**|
|---|---|
| cityRecord('Tortuga', 7000, 15000) | \{ name: 'Tortuga', population: 7000, treasury: 15000 \} |

## Example Two

|**Input**|**Output**|
|---|---|
| cityRecord('Santo Domingo', 12000, 23500) | \{ name: 'Santo Domingo', population: 12000, treasury: 23500 \} |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cityRecord('Tortuga', 7000, 15000)
[/input]
[output]
\{ name: 'Tortuga', population: 7000, treasury: 15000 \}
[/output]
[/test]
[test open]
[input]
cityRecord('Santo Domingo', 12000, 23500)
[/input]
[output]
\{ name: 'Santo Domingo', population: 12000, treasury: 23500 \}
[/output]
[/test]
[test]
[input]
cityRecord('Hong Kong', 50000, 45262)
[/input]
[output]
\{ name: 'Hong Kong', population: 50000, treasury: 45262 \}
[/output]
[/test]
[test]
[input]
cityRecord('California', 75203720, 45121262)
[/input]
[output]
\{ name: 'California', population: 75203720, treasury: 45121262 \}
[/output]
[/test]
[test]
[input]
cityRecord('Paris', 75203720, 45121262)
[/input]
[output]
\{ name: 'Paris', population: 75203720, treasury: 45121262 \}
[/output]
[/test]
[test]
[input]
cityRecord('Barcelona', 47297302, 91231262)
[/input]
[output]
\{ name: 'Barcelona', population: 47297302, treasury: 91231262 \}
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Object Methods

Along with properties, JavaScript objects can also have **methods**.

A method is simply a **function** that is **part of an object**.

You can think of methods as **actions** - they can be used to **retrieve, modify, or delete data** from their parent object.

There are multiple ways to **define** methods - two of them require declaring the method at the moment of the **class creation**, while the third enables adding one at a **later time**.

## Property Declaration

Adding an object using the property syntax is very similar to adding a regular property - `key: value(){...}`

The main difference is that the property value is a function:

``` js live
let dog = {
    name: 'Cooper',
    breed: 'German Shepherd',
    bark: function() {
        console.log('Woof🐶');
    }
}

dog.bark();
```

In this `dog` object, we have added a `bark` method that prints output to the console.

Then, we write the name of the object (`dog`), followed by a period, and the key - `bark`.

In the end, we add opening and closing brackets to **invoke** it.

## Function Declaration

Defining a method using a function declaration is identical to writing a regular function.

The only requirement is that it must be in the object's body - between the opening and closing brackets:

```js live
let city = {
    name: 'Berlin',
    country: 'Germany',
    population: 3769495,
    summarize() {
        console.log(`${this.name} is a city in ${this.country} with a population of ${this.population}.`);
    }
}

city.summarize();
```

In this example, we create a `summarize` function.

We use the `this` keyword to refer to the **current object instance**.

## Adding a Method to an Existing Object

We can add a method to an already defined object by either using **dot** or **bracket** notation:

```js
let person = {
    name: 'Charlotte',
    age: 20
};
person.sayHello = () => console.log('Hi, guys');
```

Here, we add a `sayHello` **arrow function** to the `person` object.

[/slide]

[slide hideTitle]
# Deleting Propeties

To remove a property from an object, we use the `delete` operator.

```js live
let fruit = {
    type: 'apple',
    species: 'Malus domestica',
    calories: 52
}

console.log(fruit.species);

delete fruit.species;

console.log(fruit.species);
```

In this example, we create a `fruit` object that has a `species` property, and we print its value to the console.

Then, we **delete** it using the `delete object.property` syntax.

If we try to access its value for a second time, we receive `undefined`.

[/slide]

[slide hideTitle]
# Comparing Objects

As we learned earlier, objects are a **reference** data type.

That is why when **comparing** them, we may end up with confusing results.

## Comparing Two Distinct Objects with Identical Properties

In this example, we create two separate objects - `bagOne` and `bagTwo`.

However, both of them have completely **identical properties**.

```js live
let bagOne = { 
    compartments: 10,
    volume: 32
}

let bagTwo = { 
    compartments: 10,
    volume: 32
}

console.log(bagOne == bagTwo);
console.log(bagOne === bagTwo);
```

When comparing them, it turns out that they are not equal to each other.

That is because while they may look the same, they are pointing to different places in the memory.

## Comparing Two Variables Pointing to a Single Object

Here, we create an object and assign it to the `bagOne` variable.

This time, instead of writing the object again, we set `bagTwo` to be equal to the value of `bagOne`.

```js live
let bagOne = { 
    compartments: 10,
    volume: 32
}

let bagTwo = bagOne;

console.log(bagOne == bagTwo);
console.log(bagOne === bagTwo);
```

Both comparisons return `true`, because the two variables hold a reference to the **exact same object**.


[/slide]

[slide hideTitle]
# Object Keys and Values

As we already know, each object entry is a `key: value` pair.

Тhere are many built-in methods in the `Object` prototype that provide a way of **looping through** objects.

## Object.entries

The `Object.entries()` method returns an **array** with the **key-value pairs** of **every** object entry:

```js live
let cat = {
    name: 'Tommy',
    age: 5
};

console.log(Object.entries(cat));
```

## Object.keys

`Object.keys()` returns an array holding the keys of all object properties (without the values):

```js live
let giraffe = {
    name: 'Nairobi',
    height: 480
};

console.log(Object.keys(giraffe));
```

## Object.values

The `Object.values()` method returns an array containing the values of all object properties (not including their keys):

```js live
let swan = {
    name: 'Olivia',
    lake: 'Reindeer Lake'
};

console.log(Object.values(swan));
```

[/slide]

[slide hideTitle]
# For-in Loop

We can use a **for-in loop** to iterate over the **keys** of an object.

This way, we can access the **value** of a given key:

``` js live
let pencil = {
    brand: 'BIC',
    type: 'liquid graphite',
    size: 2,
    shape: 'hexagonal'
};

for (let key in pencil) {
    console.log(`${key}: ${pencil[key]}`);
}
```

[/slide]

[slide hideTitle]
# For-of Loop

A **for-of loop** iterates through the **values** of an object.

In order to use one, we have to pass in an enumerable object, such as the arrays returned by `Object.keys()`, `Object.values()`, and `Object.entries()`:

``` js live
let computer = {
    processor: 'Intel Core i7',
    memory: 'SKHynix 8GB DDR4',
    hardDrive: 'Samsung 256GB SSD'
};

for (const key of Object.keys(computer)) {
    console.log(key);
}

console.log('------------------------------');
  
for (const value of Object.values(computer)) {
    console.log(value);
}

console.log('------------------------------');

for (const [key, value] of Object.entries(computer)) {
    console.log(`computer.${key} = ${value}`);
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Town Population
[code-task title="Town Population" taskId="java-path-js-advanced-objects-and-classes-town-population" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function townPopulation(townData){
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Your task is to create a registry for different **towns** and their **population**. 

## Input 
The **input** comes as an array of strings. 

Each element will contain data for a town and its population in the following format: `{townName} <-> {townPopulation}`

If you receive the same town twice, **you should add** the **given population** to the **existing one**. 

## Output 
You should print out all the towns and their population. 

## Example One

|**Input**|**Output**|
|---|---|
|townPopulation(\['Bucharest \<-\> 1830000', 'Vienna \<-\> 1900000', 'New York \<-\> 10000000', 'Washington \<-\> 2345000', 'Las Vegas \<-\> 1000000'\])| Bucharest : 1830000 |
| | Vienna : 1900000 |
| | New York : 10000000 |
| | Washington : 2345000 |
| | Las Vegas : 1000000 |

## Example Two

|**Input**|**Output**|
|---|---|
|townPopulation(\['Istanbul \<-\> 100000', 'Hong Kong \<-\> 2100004', 'Jerusalem \<-\> 2352344', 'Mexico City \<-\> 23401925', 'Istanbul \<-\> 1000'\])| Istanbul : 101000 |
| | Hong Kong : 2100004 |
| | Jerusalem : 2352344 |
| | Mexico City : 23401925 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
townPopulation(['Bucharest \<-\> 1830000', 'Vienna \<-\> 1900000', 'New York \<-\> 10000000', 'Washington \<-\> 2345000', 'Las Vegas \<-\> 1000000'])
[/input]
[output]
Bucharest : 1830000
Vienna : 1900000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
[/output]
[/test]
[test open]
[input]
townPopulation(['Istanbul \<-\> 100000', 'Hong Kong \<-\> 2100004', 'Jerusalem \<-\> 2352344', 'Mexico City \<-\> 23401925', 'Istanbul \<-\> 1000'])
[/input]
[output]
Istanbul : 101000
Hong Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
[/output]
[/test]
[test]
[input]
townPopulation(['CreativityDead \<-\> 1234', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'ImDead \<-\> 0'])
[/input]
[output]
CreativityDead : 6789
ImDead : 0
[/output]
[/test]
[test]
[input]
townPopulation(['Test \<-\> 0', 'Out \<-\> 0', 'Txt \<-\> 5'])
[/input]
[output]
Test : 0
Out : 0
Txt : 5
[/output]
[/test]
[test]
[input]
townPopulation(['Silent Hill \<-\> 0', 'Tin City \<-\> 0', 'King Island \<-\> 0', 'Kern \<-\> 0', 'Three Saints Bay \<-\> 1'])
[/input]
[output]
Silent Hill : 0
Tin City : 0
King Island : 0
Kern : 0
Three Saints Bay : 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
