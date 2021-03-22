# Homework

[slide hideTitle]
# Problem: Order Rectangles
[code-task title="Order Rectangles" taskId="js-advanced-object-composition-Order-Rectangles" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function orderRectangles(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You will be passed a few pairs of **widths** and **heights** of rectangles.

Create objects to represent the rectangles. 

The objects should additionally have two functions **area**, which returns the area of the rectangle, and **compareTo** function, which compares the current rectangle with another one.

## Input

The input will come in form of an **array of arrays**.

Every nested array will contain exactly **2 variables**:
- the **width** of the rectangle
- the **height** of the rectangle

## Output

The output must be an array of **rectangles** objects sorted by:
- their **area** in **descending** order, as a first criterion
- their **width** in **descending** order, as a second criterion

# Example
|**Input**|**Output**|
|---|---|
|\[\[10,5\], \[5,12\]\]|\[\{width:5, height:12, area:function(), compareTo:function(other)\}, \{width:10, height:5, area:funciton(),compareTo:function(other)\}\]|
|\[\[10,5\], \[3,20\], \[5,12\]\]|\[\{width:5, height:12, area:function(), compareTo:function(other)\}, \{width:3, height:20, area:funciton(),compareTo:function(other)\}, \{width:10, height:5, area:funciton(),compareTo:function(other)\}\]|


[/task-description]
[code-io /]
[tests]
[test]
[input]
let sizes = \[\[10,5\],\[5,12\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(2,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.exist;
expect(sortedRectangles\[0\].height).to.exist;
expect(sortedRectangles\[0\].area).to.exist;
expect(sortedRectangles\[0\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[0\].width).to.equal(5,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(12,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(60,'Area did not match!');

expect(sortedRectangles\[1\].width).to.exist;
expect(sortedRectangles\[1\].height).to.exist;
expect(sortedRectangles\[1\].area).to.exist;
expect(sortedRectangles\[1\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[1\].width).to.equal(10,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(50,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[10,5\],\[3,20\],\[5,12\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(3,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.exist;
expect(sortedRectangles\[0\].height).to.exist;
expect(sortedRectangles\[0\].area).to.exist;
expect(sortedRectangles\[0\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[0\].width).to.equal(5,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(12,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(60,'Area did not match!');

expect(sortedRectangles\[1\].width).to.exist;
expect(sortedRectangles\[1\].height).to.exist;
expect(sortedRectangles\[1\].area).to.exist;
expect(sortedRectangles\[1\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[1\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(20,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(60,'Area did not match!');

expect(sortedRectangles\[2\].width).to.exist;
expect(sortedRectangles\[2\].height).to.exist;
expect(sortedRectangles\[2\].area).to.exist;
expect(sortedRectangles\[2\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[2\].width).to.equal(10,'Width did not match!');
expect(sortedRectangles\[2\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[2\].area()).to.equal(50,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[1,1\],\[15,1\],\[1,1\],\[1,15\],\[7,7\],\[25,3\],\[13,3\],\[15,5\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(8,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.equal(25,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(3,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(75,'Area did not match!');

expect(sortedRectangles\[1\].width).to.equal(15,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(75,'Area did not match!');

expect(sortedRectangles\[2\].width).to.equal(7,'Width did not match!');
expect(sortedRectangles\[2\].height).to.equal(7,'Height did not match!');
expect(sortedRectangles\[2\].area()).to.equal(49,'Area did not match!');

expect(sortedRectangles\[3\].width).to.equal(13,'Width did not match!');
expect(sortedRectangles\[3\].height).to.equal(3,'Height did not match!');
expect(sortedRectangles\[3\].area()).to.equal(39,'Area did not match!');

expect(sortedRectangles\[4\].width).to.equal(15,'Width did not match!');
expect(sortedRectangles\[4\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[4\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[5\].width).to.equal(1,'Width did not match!');
expect(sortedRectangles\[5\].height).to.equal(15,'Height did not match!');
expect(sortedRectangles\[5\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[6\].width).to.equal(1,'Width did not match!');
expect(sortedRectangles\[6\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[6\].area()).to.equal(1,'Area did not match!');

expect(sortedRectangles\[7\].width).to.equal(1,'Width did not match!');
expect(sortedRectangles\[7\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[7\].area()).to.equal(1,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[1,20\],\[20,1\],\[5,3\],\[5,3\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(4,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].compareTo).to.be.an.instanceOf(Function);
expect(sortedRectangles\[1\].compareTo).to.be.an.instanceOf(Function);
expect(sortedRectangles\[2\].compareTo).to.be.an.instanceOf(Function);

expect(sortedRectangles\[0\].compareTo(sortedRectangles\[1\])).to.be.below(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles\[1\].compareTo(sortedRectangles\[0\])).to.be.above(0,'CompareTo function did not compare correctly or elements were not sorted');

expect(sortedRectangles\[1\].compareTo(sortedRectangles\[2\])).to.be.below(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles\[2\].compareTo(sortedRectangles\[1\])).to.be.above(0,'CompareTo function did not compare correctly or elements were not sorted');

expect(sortedRectangles\[2\].compareTo(sortedRectangles\[3\])).to.equal(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles\[2\].compareTo(sortedRectangles\[2\])).to.equal(0,'CompareTo function did not compare correctly or elements were not sorted');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[3, 4\], \[5, 3\], \[3, 4\], \[3, 5\], \[12, 1\]\];

let sortedRectangles = result(sizes);


expect(sortedRectangles).to.have.lengthOf(5,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.equal(5,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(3,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[1\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[2\].width).to.equal(12,'Width did not match!');
expect(sortedRectangles\[2\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[2\].area()).to.equal(12,'Area did not match!');

expect(sortedRectangles\[3\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[3\].height).to.equal(4,'Height did not match!');
expect(sortedRectangles\[3\].area()).to.equal(12,'Area did not match!');

expect(sortedRectangles\[4\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[4\].height).to.equal(4,'Height did not match!');
expect(sortedRectangles\[4\].area()).to.equal(12,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: List Processor
[code-task title="List Processor" taskId="js-advanced-object-composition-List-Processor" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function listProcessor(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Using a closure, create an inner object to process list commands. 

The commands supported should be the following:
- `add <string>` adds the following string in an inner collection
- `remove <string>` removes all occurrences of the supplied `<string>` from the inner collection
- `print` prints all elements of the inner collection, joined by a comma: "**,**"

## Input

The input will be in a form of an array of strings - each string represents a command to be executed from the command execution engine.
 

# Example
| **Input** | **Output** |
| --- | --- |
|\['add hello', 'add again', 'remove hello', 'add again', 'print'\]| again,again |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
let output = "";

console.log = function (buff) \{
    output += buff;
\};

let commands = \['add hello', 'add again', 'remove hello', 'add again', 'print'\];
result(commands);

expect(output).to.equal('again,again', 'Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let output = "";
console.log = function (buff)\{
    output += buff;
\};

let commands = \['add stallone', 'remove stallone', 'remove stallone', 'print'\];
result(commands);

expect(output).to.equal('','Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let output = "";
console.log = function (buff)\{
    output += buff;
\};

let commands = \['add peter', 'add george', 'add peter', 'remove peter','print'\];
result(commands);

expect(output).to.equal('george','Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let output = "";
console.log = function (buff)\{
    output += buff;
    output += '\n';
\};

let commands = \['add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print'\];
result(commands);

expect(output).to.equal('JSFundamentals\nJSFundamentals,JSAdvanced\nJSFundamentals,JSAdvanced,JSApplications\n','Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Object Factory
[code-task title="Object Factory" taskId="js-advanced-object-composition-Object-Factory" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function objectFactory(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that can compose objects. 

## Input

You will receive an array and your goal is to create a new object with all the unique properties you were given. 

## Output

You should print the newly created object.
 

# Examples
| **Input** | **Output** |
| --- | --- |
|'\[\{"canMove": true\},\{"canMove":true, "doors": 4\},\{"capacity": 5\}\]'| \{ canMove: true, doors: 4, capacity: 5 \} |
|'\[\{"canFly": true\},\{"canMove":true, "doors": 4\},\{"capacity": 255\},\{"canFly":true, "canLand": true\}\]'| \{ canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true \} |

[/task-description]
[code-io /]
[tests]
[test]
[input]
let composer = result;
let actual = composer(\`\[\{"prop1": 1\},\{"prop2":2\},\{"prop3":3\}\]\`);
let expected = \{prop1:1,prop2:2,prop3:3\};
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let composer = result;
let actual = composer(\`\[\{"canFly": true\},\{"canMove":true, "doors": 4\},\{"capacity": 255\},\{"canFly":true, "canLand": true\}\]\`);
let expected = \{ canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true \};
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let composer = result;
let actual = composer('\[\]');
let expected = \{\};
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Cars
[code-task title="Cars" taskId="js-advanced-object-composition-Cars" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function cars(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a **closure** that can create and modify **objects**. 

All created objects should be kept and be accessible **by name**. 

The following functionality should be supported:

- `create <name>` - creates an object with the supplied `<name>`

- `create <name> inherits <parentName>` - creates an object with the given `<name>`, which inherits from the parent object with the `<parentName>`

- `set <name> <key> <value>` - sets the property with key equal to `<key>` to `<value>` in the object with the supplied `<name>`

- `print <name>` - prints the object with the supplied `<name>`, in the format:

"\<**key1**\>:\<**value1**\>,\<**key2**\>:\<**value2**\>…"

It should also print all **inherited properties** from **parent objects**. 

Inherited properties should come after own properties.

## Input

The input will be in a form of an array of strings, each string represents a command to be executed from your closure.

All commands will always be valid. 
 
There will be no nonexistent or incorrect input.

# Example
| **Input** | **Output** |
| --- | --- |
|\['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'\]| color\:red |
||model\:new\, color\:red|



[/task-description]
[code-io /]
[tests]
[test]
[input]
let commands = \['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2'\];

let text = "";
console.log = function (buff) \{
    text += buff;
    text += '\n';
\};

result(commands);

expect(text).to.equal('color:red\nmodel:new, color:red\n', 'The expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let commands = \['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'\];

let text = "";
console.log = function (buff) \{
    text += buff;
    text += '\n';
\};

result(commands);
expect(text).to.equal('nick:goshko, rank:number1\n', 'The expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Sum
[code-task title="Sum" taskId="js-advanced-object-composition-Sum" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function sum(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that returns an object that can modify the DOM. 

The returned object should support the following functionality\:

- `init(selector1, selector2, resultSelector)` - initializes the object to work with the elements corresponding to the supplied selectors
  
- `add()` - adds the numerical value of the element corresponding to `selector1` to the numerical value of the element corresponding to `selector2`
    * then, writes the result in the element corresponding to `resultSelector`

- `subtract()` - subtracts the numerical value of the element corresponding to `selector2` from the numerical value of the element corresponding to `selector1`
    * then, writes the result in the element corresponding to `resultSelector`

## Input
There will be no input your function must only provide an object.

## Output
Your function should return an object that meets the specified requirements.

## Constraints

- All commands will always be valid, there will be no nonexistent or incorrect input

- All selectors will point to single textbox elements

## HTML
You are given the following HTML for testing purposes:

```js
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
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = '\<input type="text" id="num1" /\>' +
    '\<input type="text" id="num2" /\>' +
    '\<input type="text" id="result" readonly /\>';

let obj = result();

obj.init("\#num1","\#num2",'\#result');
let num1 = \\$('\#num1');
let num2 = \\$('\#num2');
let res = \\$('\#result');
num1.val(5);
num2.val(3);
obj.add();
expect(res.val()).to.equal('8',"Incorrect result");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = '\<input type="text" id="num1" /\>' +
    '\<input type="text" id="num2" /\>' +
    '\<input type="text" id="result" readonly /\>';

let obj = result();

obj.init("\#num1","\#num2",'\#result');
let num1 = \\$('\#num1');
let num2 = \\$('\#num2');
let res = \\$('\#result');
num1.val(-13);
num2.val(5);
obj.subtract();
expect(res.val()).to.equal('-18',"Incorrect result");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Heroes
[code-task title="Heroes" taskId="js-advanced-object-composition-Heroes" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function heroes(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that returns an object with 2 methods "**mage**" and "**fighter**". 

This object should be able to create heroes "**fighters**" and "**mages**". 

Every hero has a state.

Fighters have "**name**", `health = 100` and `stamina = 100` and every fighter can fight.  

When the fighter fights its stamina decreases by 1 and the following message is printed to the console:

"\{**fighter's name**\} **slashes at the foe!**"

Mages also have "**name**", `health = 100` and `mana = 100`. 

Every mage can cast spells. When a spell is cast the mage's mana decreases by 1 and the following message is printed to the console:

"\{**mage's name**\} **cast** \{**spell**\}"

# Example

## Input

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

## Output

```
Scorcher cast fireball
Scorcher cast thunder
Scorcher cast light
Scorcher 2 slashes at the foe\!
99
97
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let create = result();
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
let act = scorcher2.stamina;
let exp = 99;
assert.equal(act,exp,"2");

let act1 = scorcher2.name;
let exp1 = "Scorcher 2"
assert.equal(act1,exp1);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let create = result\(\);
const scorcher = create.mage\("Scorcher"\);
scorcher\.cast\("fireball"\);
scorcher\.cast\("thunder"\);
scorcher\.cast\("light"\);

let act4 = scorcher\.mana;
let exp4 = 97;
assert\.equal\(act4,exp4,"4"\);
let act1 = scorcher\.health;
assert\.equal\(100,act1\);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Construction Crew
[code-task title="Construction Crew" taskId="js-advanced-object-composition-Construction-Crew" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function constructionCrew(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a program that receives a worker object as a parameter and modifies its properties. 

Workers have the following structure:

```
{
    weight: Number,
    experience: Number,
    levelOfHydrated: Number,
    dizziness: Boolean
}
```

Weight is expressed in kilograms, experience in years, and levelOfHydrated is in milliliters. 

If you receive a worker who's dizziness property is set to **true** it means he needs to intake some water to be able to work correctly. 

The required amount is 0\.1ml per kilogram per year of experience. 

The **required amount** must be added to the **existing amount**. 

Once the water is administered, change the dizziness property to **false**.

Workers who **do not have dizziness** should not be modified in any way. 

**Return** them as they are.

# Examples
## Example 1

## Input

```
{
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
```

## Output
```
{
    weight: 80,
    experience: 1,
    levelOfHydrated: 8,
    dizziness: false
}
```

## Example 2

## Input
```
{
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
```
  
## Output 
```
{
    weight: 120,
    experience: 20,
    levelOfHydrated: 440,
    dizziness: false
}
```

## Example 3

## Input  

```
{
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
```

## Output
```
{
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
```


[/task-description]
[code-io /]
[tests]
[test]
[input]
let worker = result(\{ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true \}
);

expect(worker.weight).to.equal(80, "Worker weight was modified.");
expect(worker.experience).to.equal(1, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(8, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true \}
);

expect(worker.weight).to.equal(120, "Worker weight was modified.");
expect(worker.experience).to.equal(20, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(440, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false \}
);

expect(worker.weight).to.equal(95, "Worker weight was modified.");
expect(worker.experience).to.equal(3, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(0, "Worker was given water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 60,
    experience: 5,
    levelOfHydrated: 600,
    dizziness: false \}
);

expect(worker.weight).to.equal(60, "Worker weight was modified.");
expect(worker.experience).to.equal(5, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(600, "Worker was given water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Car Factory
[code-task title="Car Factory" taskId="js-advanced-Object-Composition-Car-Factory" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
function carFactory(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a program that **assembles a car**, by given requirements, out of existing components. 

The client will place an order in the form of an object describing the car. 

You need to determine which parts to use to fulfill the client’s order. 

You have the following parts in storage:

An **engine** has **power and volume**. Power is in horsepower and volume is in cubic centimeters.

Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.

"**Small engine:** \{ **power: 90, volume: 1800** \}"

"**Normal engine:** \{ **power: 120, volume: 2400** \}"

"**Monster engine:** \{ **power: 200, volume: 3500** \}"

A carriage has a type and color. 

Both of these values are strings. You have two types of carriages in storage and you can paint them in any color.

- `Hatchback: { type: 'hatchback', color: <as required> }`

- `Coupe: { type: 'coupe', color: <as required> }`

The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. 

The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 

You will receive an object as an argument to your function. 

The **format** will be as follows:

```js
{
    model: <model name> ,
    power: <minimum power> ,
    color: <color> ,
    carriage: <carriage type> ,
    wheelsize: <size>
}
```

# Examples

## Example 1

## Input 
```
{
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
```

## Output
```
 {
    model: 'VW Golf II',
    engine: {
        power: 90,
        volume: 1800
    },
    carriage: {
        type: 'hatchback',
        color: 'blue'
    },
    wheels: [13, 13, 13, 13]
}
```

## Example 2

## Input
```
{
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
```

## Output
```
{
    model: 'Opel Vectra',
    engine: {
        power: 120,
        volume: 2400
    },
    carriage: {
        type: 'coupe',
        color: 'grey'
    },
    wheels: [17, 17, 17, 17]
}
```


[/task-description]
[code-io /]
[tests]
[test]
[input]
let input = \{
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
\};

let expected = \{
    model: 'VW Golf II',
    engine: \{
        power: 90,
        volume: 1800
    \},
    carriage: \{
        type: 'hatchback',
        color: 'blue'
    \},
    wheels: \[13, 13, 13, 13\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = \{
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
\};

let expected = \{
    model: 'Opel Vectra',
    engine: \{
        power: 120,
        volume: 2400
    \},
    carriage: \{
        type: 'coupe',
        color: 'grey'
    \},
    wheels: \[17, 17, 17, 17\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = \{
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
\};

let expected = \{
    model: 'Ferrari',
    engine: \{power: 200, volume: 3500\},
    carriage: \{type: 'coupe', color: 'red'\},
    wheels: \[21, 21, 21, 21\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = \{
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
\};

let expected = \{
    model: 'Brichka',
    engine: \{power: 90, volume: 1800\},
    carriage: \{type: 'hatchback', color: 'white'\},
    wheels: \[15, 15, 15, 15\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Extensible Object
[code-task title="Extensible Object" taskId="js-advanced-object-composition-Extensible-Object" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function extensibleObject(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create an object that can clone the functionality of another object into itself. 

Implement an extend\(template\) function that will copy all of the properties of the template to the parent object and if the property is a function, add it to the object’s prototype instead.

Your code should return the extensible object instance. 

The `extend()` function of your object will receive a valid object as an input parameter and has no output.

To gain access to the prototype of an instance, use the `Object.getPrototypeOf()` function. 

To make a function shared between all instances, it will have to be attached to the prototype instead of the instance.

# Example

**Extensible Object:**

```js
myObj: {
  __proto__: {}
  extend: function () {…}
}
```

**Template Object:**

```js
template: {
  extensionMethod: function () {…},
  extensionProperty: 'someString'
}
```

**Resulting Object:**

```js
myObj: {
  __proto__: {
    extensionMethod: function () {…}
  },
  extend: function () {…},
  extensionProperty: 'someString'
}
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
var template = \{
    extensionMethod: function () \{
        console.log("From extension method")
    \}
\};

var testObject = result();
testObject.extend(template);
expect(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod')).to.equal(true, "Object's prototype was not extended");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    extensionMethod: function () \{
        return 5;
    \}
\};

var testObject = result();
testObject.extend(template);
expect(testObject.extensionMethod()).to.equal(5, "Extension method wasn't cloned correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    health: 100,
    mana: 50
\};

var testObject = result();
testObject.extend(template);
expect(testObject.hasOwnProperty('health')).to.equal(true, "Template properties were not cloned correctly.");
expect(testObject.hasOwnProperty('mana')).to.equal(true, "Template properties were not cloned correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    fight: function(target) \{ return \`object fights with \\$\{target\}\` \},
    health: 100,
    mana: 50
\};

var testObject = result();
testObject.extend(template);
expect(Object.getPrototypeOf(testObject).hasOwnProperty('fight')).to.equal(true, "Object's prototype was not extended");
expect(testObject.hasOwnProperty('health')).to.equal(true, "Template properties were not cloned correctly.");
expect(testObject.hasOwnProperty('mana')).to.equal(true, "Template properties were not cloned correctly.");
expect(testObject.fight('me')).to.equal('object fights with me', "Extension method wasn't cloned correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    name: '',
    setName: function (newValue) \{
        this.name = newValue;
    \},
    getName: function () \{
        return this.name;
    \}
\};

var testObject = result();
testObject.extend(template);
expect(testObject.hasOwnProperty('name')).to.equal(true, "Template properties were not cloned correctly.");
testObject.setName('new name');
expect(testObject.getName()).to.equal('new name', "Extension method didn't work with local context.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: String Extension
[code-task title="String Extension" taskId="js-advanced-object-composition-String-Extension" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function stringExtension(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

**Extend** the built-in String object with additional functionality. 

Implement the following **functions**:

- `ensureStart(str)` - append `str` to the beginning of a string, only if it is not already present

- `ensureEnd(str)` - append `str` to the end of a string, only if it’s not already present

- `isEmpty()` - return **true** if the string is empty, **false** otherwise

- `truncate(n)` - truncates the string to **n** characters by removing words and appends an ellipsis \(three periods\) to the end

If a string is less than **n** characters long, return the same string. 

If it is longer, split the string where space occurs and append an ellipsis to it so that the total length is less than or equal to **n**. 

If no space occurs anywhere in the string, return n \- 3 characters and an ellipsis. 

If n is less than 4, return **n** amount of periods.

- `format(string, …params)` - static method to replace placeholders with parameters

A placeholder is a **number, surrounded by curly braces**. 

If parameter index cannot be found for a certain placeholder, do not modify it. 

**Note:** Static methods are attached to the String object instead of its prototype. 

**See the examples for more info.**

Your main code should be structured as an **IIFE without input or output**. 

It should **modify the existing String prototype** instead.

## Example

## Input

```js
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
```

## Output
```
my string
hello my string
hello my string
hello my...
hello...
h...
..
The quick brown fox
jumps dog {1}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
expect(String.prototype.hasOwnProperty('ensureEnd')).to.equal(true, "Couldn't find ensureEnd() function");
expect(String.prototype.hasOwnProperty('isEmpty')).to.equal(true, "Couldn't find isEmpty() function");
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
var answer = testString.ensureStart('the ');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
answer = answer.ensureStart('the ');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy';
expect(String.prototype.hasOwnProperty('ensureEnd')).to.equal(true, "Couldn't find ensureEnd() function");
var answer = testString.ensureEnd(' dog');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureEnd() functionality');
answer = answer.ensureEnd(' dog');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing end of string');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('isEmpty')).to.equal(true, "Couldn't find isEmpty() function");
expect(testString.isEmpty()).to.equal(false, 'Incorrect isEmpty() functionality');
''.isEmpty().should.be.true;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(testString.truncate(6)).to.equal('the...', 'Incorrect truncate() functionality');
expect(testString.truncate(12)).to.equal('the quick...', 'Incorrect truncate() functionality');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(testString.truncate(10)).to.equal('the...', 'Incorrect truncate() functionality 1');
expect(testString.truncate(25)).to.equal('the quick brown fox...', 'Incorrect truncate() functionality 2');
expect(testString.truncate(43)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 3');
expect(testString.truncate(45)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 4');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the \{0\} brown \{1\} jumps over the \{2\} dog';
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
expect(String.format(testString, 'quick')).to.equal('the quick brown \{1\} jumps over the \{2\} dog', 'Incorrect format() functionality');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the \{0\} brown \{1\} jumps over the \{2\} dog';
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
expect(String.format(testString, 'quick', 'fox', 'lazy')).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect format() functionality');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the \{0\} brown \{1\} jumps over the \{2\} dog';
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
expect(String.format(testString, 'quick', 'fox', 'lazy', 'bananas')).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect format() functionality');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Sorted List
[code-task title="Sorted List" taskId="js-advanced-object-composition-Sorted List" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function sortedList(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Implement a collection, which keeps a list of numbers, sorted in **ascending** order. 

It must support the following functionality:

- `add(element)` - adds a new element to the collection

- `remove(index)` - removes the element at position index

- `get(index)` - returns the value of the element at position index

- `size` - number of elements stored in the collection

The correct order of the element must be kept at all times, regardless of which operation is called. 

**Removing** and **retrieving** elements should not work if the provided index points outside the **length** of the collection \(either throw an error or do nothing\). 

Note the **size** of the collection is **NOT** a function. 

Write your code such that the **first function in your solution** returns an instance of your Sorted List.


# Example

``` js
function sortedList() {
    return (function () {
        let arr = [];
        let sorting = (a, b) => a - b;
        let add = function (element) {};
        let remove = function (index) {};
        let get = function (index) {};
        let size = 0;
        return {add, remove, get, size}
    })();
}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
result = result();
expect(result.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = result;
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

myList.add(5);
expect(myList.get(0)).to.equal(5, "Element wasn't added");

myList.add(3);
expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

myList.remove(0);
expect(myList.get(0)).to.equal(5, "Element wasn't removed");
expect(myList.size).to.equal(1, "Element wasn't removed");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();
expect(result.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = result;
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// Generate random list of 20 numbers
var expectedArray = \[\];
for (let i = 0; i \< 20; i++) \{
    expectedArray.push(Math.floor(Math.random() \* 200) - 100);
\}
// Add to collection
for (let i = 0; i \< expectedArray.length; i++) \{
    myList.add(expectedArray\[i\]);
\}
expect(myList.size).to.equal(20, "Elements weren't added");
// Sort array
expectedArray.sort((a, b) =\> a - b);
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Array wasn't sorted");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();
expect(result.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = result;
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

for (let i = 0; i \< 10; i++) \{
    myList.add(i);
\}

myList.remove(9);
expect(myList.size).to.equal(9, "Element wasn't removed");
var expectedArray = \[0, 1, 2, 3, 4, 5, 6, 7, 8\];
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Element wasn't removed");
\}
myList.remove(5);
expect(myList.size).to.equal(8, "Element wasn't removed");
expectedArray = \[0, 1, 2, 3, 4, 6, 7, 8\];
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Element wasn't removed");
\}
myList.remove(0);
expect(myList.size).to.equal(7, "Element wasn't removed");
expectedArray = \[1, 2, 3, 4, 6, 7, 8\];
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Element wasn't removed");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var myList = result();
var failsafe = 'failsafe';

try \{
    failsafe = myList.get(0) ? myList.get(0) : 'failsafe';
\} catch (e) \{\}

expect(myList.size).to.equal(0, "Unexpected behaviour with empty collection.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with empty collection.");

try \{
    myList.remove(0);
\} catch (e) \{\}

expect(myList.size).to.equal(0, "Unexpected behaviour with empty collection.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var myList = result();
var failsafe = 'failsafe';

for (let i = 0; i \< 10; i++) \{
    myList.add(i);
\}

try \{
    failsafe = myList.get(-1) ? myList.get(-1) : 'failsafe';
\} catch (e) \{\}
expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with negative index.");

try \{
    failsafe = myList.get(11) ? myList.get(11) : 'failsafe';
\} catch (e) \{\}
expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with index outside of range.");

var expectedArray = \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\];
try \{
    myList.remove(-1);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with index outside of range.");
\}

try \{
    myList.remove(11);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with index outside of range.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

