[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab.

Here, we are going to write a couple of console applications together.

Let us solve a few problems to exercise what we have learned.
[/slide]

[slide]
# Problem: Order Rectangles
[code-task title="Order Rectangles" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You will be passed a few pairs of **widths** and **heights** of rectangles.

Create objects to represent the rectangles. 

The objects should additionally have two functions **area**, which returns the area of the rectangle and **compareTo** function, which compares the current rectangle with another one.

The input will come ina form of an **array of arrays** - every nested array will contain exactly 2 variables the **width** and the **height** of the rectangle.

The output must be an array of **rectangles** objects sorted by their **area** in **descending** order as a first criteria and by their **width** in **descending** order as a second criteria.  

# Example 1
**Input**

`[[10,5],[5,12]]` 

**Output**

`[{width:5, height:12, area:function(), compareTo:function(other)},
{width:10, height:5, area:funciton(),compareTo:function(other)}]`

# Example 2
**Input**

`[[10,5], [3,20], [5,12]]`

**Output**

`[{width:5, height:12, area:function(), compareTo:function(other)},
{width:3, height:20, area:funciton(),compareTo:function(other)},
{width:10, height:5, area:funciton(),compareTo:function(other)}]]`

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: List Processor
[code-task title="List Processor" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Using a closure, create an inner object to process list commands. 

The commands supported should be the following:
- `add <string>` adds the following string in an inner collection.
- `remove <string>` removes all occurrences of the supplied `<string>` from the inner collection.
- `print` prints all elements of the inner collection joined by `","`.

The input will be in a form of an array of strings - each string represents a command to be executed from the command execution engine.
 

# Example 1
| **Input** | **Output** |
| --- | --- |
|`['add hello', 'add again', 'remove hello', 'add again', 'print']`| again\, again |

# Example 2
| **Input** | **Output** |
| --- | --- |
|`['add pesho', 'add george', 'add peter', 'remove peter','print']`| pesho\, george |

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Object Factory
[code-task title="Object Factory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that can compose objects. 

You will receive an array and your goal is to create a new object with all the unique properties you were given. 

You should print the newly created object.
 

# Example 1
| **Input** | **Output** |
| --- | --- |
|`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`| `{ canMove: true, doors: 4, capacity: 5 }` |

# Example 2
| **Input** | **Output** |
| --- | --- |
|`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`| `{ canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true }` |

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Cars
[code-task title="Cars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a closure that can create and modify objects. 

All created objects should be kept and be accessible by name. 

You should support the following functionality:
- `create <name>` creates an object with the supplied `<name>`.
- `create <name> inherits <parentName>` creates an object with the given `<name>`, which inherits from the parent object with the `<parentName>`.
- `set <name> <key> <value>` sets the property with key equal to `<key>` to `<value>` in the object with the supplied `<name>`.
- `print <name>` prints the object with the supplied `<name>` in the format `<key1>:<value1>,<key2>:<value2>…`, the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.

 The input will be in a form of an array of strings, each string represents a command to be executed from your closure.

 All commands will always be valid. There will be no nonexistent or incorrect input.

# Example
**Input**

`['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']`

**Output**

color\:red

model\:new\, color\:red

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Sum
[code-task title="Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a function which returns an object that can modify the DOM. 

The returned object should support the following functionality:
- `init(selector1, selector2, resultSelector)` initializes the object to work with the elements corresponding to the supplied selectors.
- `add()` adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.
- `subtract()` subtracts the numerical value of the element corresponding to selector2 from the numerical value of the element corresponding to selector1 and then writes the result in the element corresponding to resultSelector.

There will be no input your function must only provide an object.

All commands will always be valid. There will be no nonexistent or incorrect input.

All selectors will point to single textbox elements.

You are given the following HTML for testing purposes:

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<input type="text" id="num1" />
<input type="text" id="num2" />
<input type="text" id="result" readonly />
<br>
<button id="sumButton">
    Sum</button>
<button id="subtractButton">
    Subtract</button>
</body>
</html>
`

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Heroes
[code-task title="Heroes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a functionwhich returns an object with 2 methods `mage` and `fighter`. 

This object should be able to create heroes `fighters` and `mages`. 

Every hero has a state.

Fighters have `name`, `health = 100` and `stamina = 100` and every fighter can fight.  

When the fighter fights its stamina decreases by 1 and the following message is printed on the console:

`${fighter's name} slashes at the foe!`

Mages also have `name`, `health = 100` and `mana = 100`. 

Every mage can cast spells. When a spell is casted the mage's mana decreases by 1 and the following message is printed on the console:

`${mage's name} cast ${spell}`


# Example
**Input**

```js
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
```

**Output**

Scorcher cast fireball

Scorcher cast thunder

Scorcher cast light

Scorcher 2 slashes at the foe\!

99

97

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Construction Crew
[code-task title="Construction Crew" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program that receives a worker object as a parameter and modifies its properties. 

Workers have the following structure:

`{ weight: Number,
  experience: Number,
  levelOfHydrated: Number,
  dizziness: Boolean }`

Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. 

If you receive a worker who\’s dizziness property is set to **true** it means he needs to intake some water in order to be able to work correctly. 

The required amount is 0\.1ml per kilogram per year of experience. 

The required amount must be added to the existing amount. 

Once the water is administered, change the dizziness property to **false**.

Workers who do not have dizziness should not be modified in any way. Return them as they are.


# Example 1
**Input**

`{ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }`

**Output**

`{ weight: 80,
  experience: 1,
  levelOfHydrated: 8,
  dizziness: false }`

# Example 2
**Input**

`{ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }`

**Output**

`{ weight: 120,
  experience: 20,
  levelOfHydrated: 440,
  dizziness: false }`

# Example 3
**Input**

`{ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }`

**Output**

`{ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }`

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Car Factory
[code-task title="Car Factory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program that assembles a car by given requirements out of existing components. 

The client will place an order in the form of an object describing the car. 

You need to determine which parts to use to fulfil the client’s order. 

You have the following parts in storage\:

An engine has power and volume. Power is in horsepower and volume is in cubic centimeters.

Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.

`Small engine: { power: 90, volume: 1800 }`

`Normal engine: { power: 120, volume: 2400 }`

`Monster engine: { power: 200, volume: 3500 }`

A carriage has a type and color. 

Both of these values are strings. You have two types of carriages in storage and you can paint it in any color.

`Hatchback: { type: 'hatchback', color: <as required> }`

`Coupe: { type: 'coupe', color: <as required> }`

The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. 

The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 

You will receive an object as an argument to your function. The format will be as follows\:

`{ model: <model name>,
  power: <minimum power>,
  color: <color>,
  carriage: <carriage type>,
  wheelsize: <size> }`


# Example 1
**Input**

`{ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }`

**Output**

`{ model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] }`

# Example 2
**Input**

`{ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }`

**Output**

`{ model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] }`

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Extensible Object
[code-task title="Extensible Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create an object that can clone the functionality of another object into itself. 

Implement an extend\(template\) function that would copy all of the properties of template to the parent object and if the property is a function, add it to the object’s prototype instead.

Your code should return the extensible object instance. 

The `extend()` function of your object will receive a valid object as input parameter, and has no output.

To gain access to the prototype of an instance, use the `Object.getPrototypeOf()` function. 

To make a function shared between all instances, it’ll have to be attached to the prototype instead of the instance.

# Example
**Extesible Object**

`myObj: {
  __proto__: {}
  extend: function () {…}
}
`

**Template Object**

`template: {
  extensionMethod: function () {…},
  extensionProperty: 'someString'
}`

**Resulting Object**

`myObj: {
  __proto__: {
    extensionMethod: function () {…}
  },
  extend: function () {…},
  extensionProperty: 'someString'
}`

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]