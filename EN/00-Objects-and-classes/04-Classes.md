# Classes

[slide hideTitle]
# What Are Classes?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-24-25-What-are-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **class** is like a **blueprint** (or template) for creating **objects**.

Classes provide means of **bundling data and functionality** together.

Each class instance can have **attributes** attached to it.

A class instance can also have **methods** for **modifying its state**, they are its **behavior**.
[/slide]

[slide hideTitle]
# Class Declaration

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-26-Class-declaration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Example:**

``` js
class Student {
  constructor(name) {
    this.name = name;
  }
}
```

We declare a class using the `class` keyword, followed by the name of the class, in this case `Student`.

The `constructor` method will be called every time the class is **instantiated**.
[/slide]

[slide hideTitle]
# Class Example

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-27-Class-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `class` keyword is used to create a class.

**Class attributes** are **the same for all instances of the class**.

**Instance attributes** are **unique to each instance of the class**.

```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
```

The `this` keyword is used to set a property of the objects to a given value.

This is how we create an **instance** of the `Student` class:

```js
let student = new Student('Peter', 5.50);
```
[/slide]

[slide hideTitle]
# Functions in a Class

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-28-Functions-in-a-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

TODO: The first slide (Class Example) in this video must be removed.

The ability to modify data is performed by special functions that are a part of the class, which are called methods. 

JavaScript classes support both **instance** and **static** methods.

Instance methods can **access and modify** instance data.

They can call other instance methods, as well as any static method.

Static methods **refer to the class**, rather than an instance of it.

Therefore, they have **no access** to instance data.

``` js live
class Dog {
  constructor() {
    this.speak = () => {
      console.log('Woof');
    }
  }
}

let dog = new Dog();
dog.speak();
```

[/slide]

[slide hideTitle]
# Problem with Solution: Cats

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-31-Solution-Cat-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cats" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Cats" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cats(input){
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

Write a function that receives array of strings in the following format "\{**cat name**\} \{**age**\}".

Create a Cat class that receives in the constructor the name and the age parsed from the input. 

It should also have a function named **meow** that will print "\{**cat name**\}**, age** \{**age**\} **says Meow**" to the console.

For each of the strings provided you must create a cat object.

# Example
  | **Input** | **Output** |
| --- | --- |
|cats(['Mellow 2', 'Tom 5'])| Mellow, age 2 says Meow|
||Tom, age 5 says Meow|
|cats(['Millie 3', 'Lola 7'])| Millie, age 3 says Meow|
||Lola, age 7 says Meow|

# Hints

* Create a Cat class with properties and methods described above

* Parse the input data

* Create all objects using class constructor and the parsed input data, store them in an array

* Loop through the array using `for…of` cycle and invoke `.meow()` method


[/task-description]
[tests]
[test]
[input]
cats(['jsakd 45', 'dasd 12'])
[/input]
[output]
jsakd, age 45 says Meow
dasd, age 12 says Meow
[/output]
[/test]
[test]
[input]
cats(['jsakd 45', 'gyug 11', 'vtv 2', 'vv 1', 'huuh 9'])
[/input]
[output]
jsakd, age 45 says Meow
gyug, age 11 says Meow
vtv, age 2 says Meow
vv, age 1 says Meow
huuh, age 9 says Meow
[/output]
[/test]
[test]
[input]
cats(['jsakd 5', 'huh 2', 'f 1', 'huuh 9'])
[/input]
[output]
jsakd, age 5 says Meow
huh, age 2 says Meow
f, age 1 says Meow
huuh, age 9 says Meow
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
