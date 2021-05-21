# Homework

[slide hideTitle]
# Problem: Heroic Inventory

[code-task title="Heroic Inventory" taskId="java-path-js-advanced-objects-and-classes- heroic-inventory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function heroicInventory(input) {
    // Write your code here
};
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
In the era of heroes, every hero has their own items which make them unique. 

Write a function that creates a **register for the heroes** with their **names**, **level**, and **items**, if they have such. 

The register should accept data in a specified format and return it presented in a specified format.  

## Input 
The **input** comes as an array of strings. 

Each element holds data for a hero, in the following format: 

`{heroName} / {heroLevel} / {item1}, {item2}, {item3}...` 

You must store the data about every hero. 

The **name** is a **string**, the level is a number and the items are all strings. 

## Output 
The **output** is a an array of **JSON representations** of the data for all the heroes you’ve stored. 

Check the examples for more information. 

## Example One

### Input

`['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']`

### Output

```json
[{"name":"Isacc","level":25,"items":
["Apple","GravityGun"]},
{"name":"Derek","level":12,"items":
["BarrelVest","DestructionSword"]},
{"name":"Hes","level":1,"items":
["Desolator","Sentinel","Antara"]}] 
```

## Example Two

### Input

`['Jake / 1000 / Gauss, HolidayGrenade']`

### Output

```json
[{"name":"Jake","level":1000,"items":
["Gauss","HolidayGrenade"]}] 
```

[hints]
[hint]
We need an **array** that will hold our **hero** data.

That is the **first** thing we create. 

```js
function heroicInventory(input) {
    let result = [];
};
```
[/hint] 
[hint]
Next, we need to **loop over** the whole input and **process** it. 

Let’s do that with a simple `for...of` loop. 

```js
for (const iterator of input) {
    let [name, level, items] = 
        iterator.split(' / ');

    level = Number(level);

    // ...
}
```
[/hint] 
[hint]
Every element from the input holds information about a hero. 

However, the **elements** we need are **separated by a delimiter**, so we just split each string by that **delimiter**. 
[/hint] 
[hint]
Next, we need to take the elements from the **string array**, which is a result of the **string split method**. 

With the [destructuring assignment syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), we assign the array properties. 

Do not forget to parse the number. 
[/hint] 
[hint]
However, here we remember there is something special about the items. 

If you read the problem description again, you will notice that there might be a **case** where the hero **has no items**. 

In that case, when we use **destructuring**, our property items will be undefined and trying to spit the array will throw an error.  

That is why we need to perform a simple check using the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). 

```js
items = items ? items.split(', ') : [];
```
[/hint] 
[hint]
If **there are any items** in the **input**, the **variable** will be set to the **split version of them**. 

If not, it will just be set to an **empty array**. 
[/hint] 
[hint]
We have now extracted the needed data – we have stored the **input name** in a **variable**, we have parsed the **given level** to a **number**, and we have also **split** the **items** that the **hero holds** by their **delimiter**. 

By definition, the **items** are **strings**, so we do not need to process the array we have created anymore.  
[/hint] 
[hint]
Now what is left is to add that data to **an object** and **add** the object to the **array**.   

```js
for (const iterator of input) {
    let [name, level, items] = 
        iterator.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];

    result.push({name, level, items});
}
```
[/hint] 
[hint]
Lastly, we need to turn the array of objects into a JSON string, which is done with the `JSON.stringify()` method.

```js
console.log(JSON.stringify(result));
```
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Isacc / 25 / Apple, GravityGun
Derek / 12 / BarrelVest, DestructionSword
Hes / 1 / Desolator, Sentinel, Antara
[/input]
[output]
\[\{"name":"Isacc","level":25,"items":\["Apple","GravityGun"\]\},\{"name":"Derek","level":12,"items":\["BarrelVest","DestructionSword"\]\},\{"name":"Hes","level":1,"items":\["Desolator","Sentinel","Antara"\]\}\]
[/output]
[/test]
[test open]
[input]
Jake / 1000 / Gauss, HolidayGrenade
[/input]
[output]
\[\{"name":"Jake","level":1000,"items":\["Gauss","HolidayGrenade"\]\}\]
[/output]
[/test]
[test]
[input]
Kayden / 24 / Apple, Orange, Grapefruit
Joseph / 50 / AK47, M4A1, ES21, Deagle
Chris / 10 / Knife
Eve / 23 / Gummy, Depathy
[/input]
[output]
\[\{"name":"Kayden","level":24,"items":\["Apple","Orange","Grapefruit"\]\},\{"name":"Joseph","level":50,"items":\["AK47","M4A1","ES21","Deagle"\]\},\{"name":"Chris","level":10,"items":\["Knife"\]\},\{"name":"Eve","level":23,"items":\["Gummy","Depathy"\]\}\]
[/output]
[/test]
[test]
[input]
EmptyOne / 200
Anderson / 250 / StrikeForge, HeavensGuard
Hendricksen / 300 / DemonHeart, DemonSoul, DemonEdge
[/input]
[output]
\[\{"name":"EmptyOne","level":200,"items":\[\]\},\{"name":"Anderson","level":250,"items":\["StrikeForge","HeavensGuard"\]\},\{"name":"Hendricksen","level":300,"items":\["DemonHeart","DemonSoul","DemonEdge"\]\}\]
[/output]
[/test]
[test]
[input]
Test / 3 / In, Txt
[/input]
[output]
\[\{"name":"Test","level":3,"items":\["In","Txt"\]\}\]
[/output]
[/test]
[test]
[input]
Destroyer / 25 / DivineRapier, AghanimScepter, Dagon
Geomancer / 25 / AghanimScepter, VladmirsOffering, Mekanism
Juggernaut / 25 / AghanimScepter, Desolator, BattleFury
Earthshaker / 20 / AghanimScepter, RefresherOrb, BlinkDagger
Chieftain / 20 / AghanimScepter, BlinkDagger, Battlefury, TravelBoots, DrumOfEndurance
Invoker / 25 / AghanimScepter, Satanic, EyeOfSkadi, Butterfly
NogoTheNextLevel / 150 / DomoSweather
[/input]
[output]
\[\{"name":"Destroyer","level":25,"items":\["DivineRapier","AghanimScepter","Dagon"\]\},\{"name":"Geomancer","level":25,"items":\["AghanimScepter","VladmirsOffering","Mekanism"\]\},\{"name":"Juggernaut","level":25,"items":\["AghanimScepter","Desolator","BattleFury"\]\},\{"name":"Earthshaker","level":20,"items":\["AghanimScepter","RefresherOrb","BlinkDagger"\]\},\{"name":"Chieftain","level":20,"items":\["AghanimScepter","BlinkDagger","Battlefury","TravelBoots","DrumOfEndurance"\]\},\{"name":"Invoker","level":25,"items":\["AghanimScepter","Satanic","EyeOfSkadi","Butterfly"\]\},\{"name":"NogoTheNextLevel","level":150,"items":\["DomoSweather"\]\}\]
[/output]
[/test]
[test]
[input]
What / 1 / The, Fuck
[/input]
[output]
\[\{"name":"What","level":1,"items":\["The","Fuck"\]\}\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: JSON's Table

[code-task title="JSON's Table" taskId="java-path-js-advanced-objects-and-classes-json-s-table" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function jsonTable(arr) {
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
## Description
JSON’s Table is a magical table which turns JSON data into an HTML table. 

You will be given **JSON strings** holding data about employees, including their **name**, **position**, and **salary**. 

You should **parse the strings** to **objects** and create an **HTML table** that holds the data for each **employee on a different row** as **columns**.  

The **name** and **position** of the employee are **strings**, the **salary** is an **integer**. 

## Input 
The **input** comes as an array of strings. 

Each element is a JSON string which represents the data for a certain employee. 

## Output 
The **output** is the HTML code of a table which holds the data exactly as explained above. 

Check the examples for more information. 

## Example

### Input

`['{"name":"Peter","position":"Director","salary":100000}', '{"name":"Ted","position":"Lecturer","salary":1000}', '{"name":"George","position":"Lecturer","salary":1000}']`

### Output

```html
<table>
	<tr>
		<td>Peter</td>
		<td>Director</td>
		<td>100000</td>
	</tr>
	<tr>
		<td>Ted</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>George</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
</table>
```

[hints]
[hint]
You should **escape the HTML**. 

Otherwise, you might find yourself victim to malicious JavaScript **code in the input**. 
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
\{"name":"Peter","position":"Director","salary":100000\}
\{"name":"Ted","position":"Lecturer","salary":1000\}
\{"name":"George","position":"Lecturer","salary":1000\}
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>Peter\</td\>
		\<td\>Director\</td\>
		\<td\>100000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Ted\</td\>
		\<td\>Lecturer\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>George\</td\>
		\<td\>Lecturer\</td\>
		\<td\>1000\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
\{"name":"George","position":"CEO","salary":10000\}
\{"name":"Peter","position":"Employee","salary":1000\}
\{"name":"John","position":"Employee","salary":1000\}
\{"name":"Henrick","position":"Employee","salary":1000\}
\{"name":"Phillip","position":"Employee","salary":1000\}
\{"name":"Alex","position":"Cleaner","salary":500\}
\{"name":"Ivan","position":"Cleaner","salary":500\}
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>George\</td\>
		\<td\>CEO\</td\>
		\<td\>10000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Peter\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>John\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Henrick\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Phillip\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Alex\</td\>
		\<td\>Cleaner\</td\>
		\<td\>500\</td\>
	\</tr\>
	\<tr\>
		\<td\>Ivan\</td\>
		\<td\>Cleaner\</td\>
		\<td\>500\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
\{"name":"This","position":"Will","salary":123\}
\{"name":"Be","position":"ALot","salary":456\}
\{"name":"Of","position":"Fun","salary":789\}
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>This\</td\>
		\<td\>Will\</td\>
		\<td\>123\</td\>
	\</tr\>
	\<tr\>
		\<td\>Be\</td\>
		\<td\>ALot\</td\>
		\<td\>456\</td\>
	\</tr\>
	\<tr\>
		\<td\>Of\</td\>
		\<td\>Fun\</td\>
		\<td\>789\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
\{"name":"test","position":"out.txt","salary":3\}
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>test\</td\>
		\<td\>out.txt\</td\>
		\<td\>3\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Juice

[code-task title="Juice" taskId="java-path-js-advanced-objects-and-classes-juice" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function juice(arr) {
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
## Description

You will be given different types of juices as **strings**.

You will also **receive milliliters** as a **number**.

If you receive a type of juice that you already have, you should **combine their volumes**.

When a type of juice reaches **1000 milliliters**, it is poured into a bottle.

You must **store all bottles**, and you must **print them** at the end.


**Note:** 1000 milliliters of **juice** is **one bottle**.

If you happen to have **more than 1000**, you must make **as many bottles as you can** and store **what is left** from the juice.


**Example:** You have **2643 milliliters** of Orange Juice – this is **2 bottles** of Orange Juice and **643 milliliters left**.


## Input 
The **input** comes as array of strings.

Each element holds data about a type of juice and its volume in the following format: 
`{juiceName} => {juiceVolume}`
 
## Output 
The **output** consists of all the filled bottles.

They are to be printed in the **order of filling**.

Check the second example bellow.

Even though we receive the Kiwi juice first, we do not fill a bottle of Kiwi juice until the 4th line.

By that time, we have already filled Pear and Watermelon juice bottles, so the Kiwi bottles appear last in the output.

## Example One

### Input

`['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']`

### Output

```
Orange => 2 
Peach => 2 
```

## Example Two

### Input

`['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']`

### Output

```
Pear => 8 
Watermelon => 10 
Kiwi => 4 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Orange =\> 2000
Peach =\> 1432
Banana =\> 450
Peach =\> 600
Strawberry =\> 549
[/input]
[output]
Orange =\> 2
Peach =\> 2
[/output]
[/test]
[test open]
[input]
Kiwi =\> 234
Pear =\> 2345
Watermelon =\> 3456
Kiwi =\> 4567
Pear =\> 5678
Watermelon =\> 6789
[/input]
[output]
Pear =\> 8
Watermelon =\> 10
Kiwi =\> 4
[/output]
[/test]
[test]
[input]
Hell =\> 100000
Coca Cola =\> 1000000000
Water =\> 10000
Nestea =\> 11111
[/input]
[output]
Hell =\> 100
Coca Cola =\> 1000000
Water =\> 10
Nestea =\> 11
[/output]
[/test]
[test]
[input]
Musaka =\> 1000
Lambda =\> 1000
Filter =\> 1000
Function =\> 1000
Judge =\> 1000
Mojem =\> 1000
Zadacha =\> 1000
Reshenie =\> 1000
Prav =\> 1000
Nakov =\> 1000
Izvrashtenie =\> 1000
[/input]
[output]
Musaka =\> 1
Lambda =\> 1
Filter =\> 1
Function =\> 1
Judge =\> 1
Mojem =\> 1
Zadacha =\> 1
Reshenie =\> 1
Prav =\> 1
Nakov =\> 1
Izvrashtenie =\> 1
[/output]
[/test]
[test]
[input]
Code =\> 999
Software =\> 1000
SoftwareShouldBeBeforeCode =\> 1345
Code =\> 1
[/input]
[output]
Software =\> 1
SoftwareShouldBeBeforeCode =\> 1
Code =\> 1
[/output]
[/test]
[test]
[input]
What =\> 919
The =\> 191
Fuck =\> 1110
What =\> 191
The =\> 919
The =\> 889
The =\> 1
[/input]
[output]
Fuck =\> 1
What =\> 1
The =\> 2
[/output]
[/test]
[test]
[input]
Test =\> 500
Out =\> 500
Txt =\> 1000
Out =\> 512
Test =\> 499
Test =\> 1
[/input]
[output]
Txt =\> 1
Out =\> 1
Test =\> 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Store Catalogue

[code-task title="Store Catalogue" taskId="java-path-js-advanced-objects-and-classes-store-catalogue" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function store(products) {
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
## Description

You have to create a sorted catalogue of store products. 

You will be given the products’ names and prices. 

You need to order them **alphabetically**.  

## Input 
The **input** comes as array of strings.

Each element holds information about a product in the following format: 

`{productName} : {productPrice}`

The **product’s name** will be a **string**, which will **always start with a capital letter**.

The price will be a number.

You can safely assume there will be **NO duplicates**.

The comparison for alphabetical order is **case-insensitive**.


## Output 
As **output**, you must print all the products in the specified format.

They must be ordered **exactly as shown above**.

The products must be **divided into groups**, based on the **first letter of their name**.

The **group’s initial should be printed**, and after that the products should be printed with **2 spaces before their name**s.

For more information, check the examples.

## Example One

### Input

`['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']`

### Output

```
A 
  Anti-Bug Spray: 15 
  Apple: 1.25 
  Apricot: 20.4 
B 
  Boiler: 300 
D 
  Deodorant: 10 
F 
  Fridge: 1500 
T 
  T-Shirt: 10 
  TV: 1499 
```

## Example Two

### Input

`['Banana : 2', 'Rubic's Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rally Car : 2000000', 'Paper : 0.000001', 'Barrel : 10'] `

### Output

```
B 
  Banana: 2 
  Barrel: 10 
P 
  Paper: 0.000001 
R 
  Rali Car: 2000000 
  Raspberry P: 4999 
  Rolex: 100000 
  Rollon: 10 
  Rubic's Cube: 5 
```


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Apricot : 20.4
Fridge : 1500
TV : 1499
Deodorant : 10
Boiler : 300
Apple : 1.25
Anti-Bug Spray : 15
T-Shirt : 10
[/input]
[output]
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Apricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
[/output]
[/test]
[test open]
[input]
Banana : 2
Rubic's Cube : 5
Raspberry P : 4999
Rolex : 100000
Rollon : 10
Rally Car : 2000000
Paper : 0.000001
Barrel : 10
[/input]
[output]
B
  Banana: 2
  Barrel: 10
P
  Paper: 0.000001
R
  Rally Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic's Cube: 5
[/output]
[/test]
[test]
[input]
Apple : 1
Broccoli : 2
Corn : 3
Deagle : 4
Eclipse : 5
Flirt : 6
Gargoyle : 7
Heart : 8
Iris : 9
Juice : 10
King : 11
Lemon : 12
Melolemonmelon : 13
Nestea : 14
Opium : 15
Pineapple Pen : 16
Quartz : 17
Rocket : 18
Sphere : 19
Tantrum : 20
Uranium : 21
Vi\*\*\*tor : 22
Wolfy : 23
Xeno : 24
Yoyo : 25
Zord : 26
[/input]
[output]
A
  Apple: 1
B
  Broccoli: 2
C
  Corn: 3
D
  Deagle: 4
E
  Eclipse: 5
F
  Flirt: 6
G
  Gargoyle: 7
H
  Heart: 8
I
  Iris: 9
J
  Juice: 10
K
  King: 11
L
  Lemon: 12
M
  Melolemonmelon: 13
N
  Nestea: 14
O
  Opium: 15
P
  Pineapple Pen: 16
Q
  Quartz: 17
R
  Rocket: 18
S
  Sphere: 19
T
  Tantrum: 20
U
  Uranium: 21
V
  Vi\*\*\*tor: 22
W
  Wolfy: 23
X
  Xeno: 24
Y
  Yoyo: 25
Z
  Zord: 26
[/output]
[/test]
[test]
[input]
HueHueHue : 1000
Harley Davidson : 10
Halberd : 101
Broccoli : 10
Beans : 2302
KFC : 1000
McDonalds : 10
Kitchen : 10
[/input]
[output]
B
  Beans: 2302
  Broccoli: 10
H
  Halberd: 101
  Harley Davidson: 10
  HueHueHue: 1000
K
  KFC: 1000
  Kitchen: 10
M
  McDonalds: 10
[/output]
[/test]
[test]
[input]
Test : 300
Out : 200
Txt : 100
Milionaaa : 300
[/input]
[output]
M
  Milionaaa: 300
O
  Out: 200
T
  Test: 300
  Txt: 100
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: System Components
[code-task title="System Components" taskId="java-path-js-advanced-objects-and-classes-system-components" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function system(components) {
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
## Description
You will be given a register of systems with components and subcomponents.

You need to build an ordered database of all the elements you have.


The elements are registered in a very simple way.

When you have processed all of the input data, you must print them in a specific order.

For every System, you must print its components in a specified order and for every Component, you must print its Subcomponents in a specified order.


The **Systems** you have stored must be ordered by the **number of components** in **descending order** as **first criteria** and by **alphabetical order** as **second criteria**.

The **Components** must be ordered by the **number of Subcomponents** in **descending order**.


## Input 
The **input** comes as array of strings.

Each element holds **data** about a **system**, a **component** in that **system**, and a **subcomponent** in that **component**.

If the given **system already exists**, you should just **add the new component** to it.

If even the **component exists**, you should just **add** the **new subcomponent** to it.

The **subcomponents** will **always be unique**.

**The input format is:** 

`{systemName} | {componentName} | {subcomponentName}`

All of the elements are strings, and can contain **any ASCII characters**.

The **string comparison** for the alphabetical order is **case-insensitive**.


## Output 
As **output**, you need to print all of the elements, ordered exactly in the way specified above.

**The format is:**

```
{systemName} 
|||{componentName} 
|||{component2Name} 
||||||{subcomponentName} 
||||||{subcomponent2Name} 
{system2Name}  
...
```

## Examples

### Input

`['SULS | Main Site | Home Page', 'SULS | Main Site | Login Page', 'SULS | Main Site | Register Page', 'SULS | Judge Site | Login Page', 'SULS | Judge Site | Submittion Page', 'Lambda | CoreA | A23', 'SULS | Digital Site | Login Page', 'Lambda | CoreB | B24', 'Lambda | CoreA | A24', 'Lambda | CoreA | A25', 'Lambda | CoreC | C4', 'Indice | Session | Default Storage', 'Indice | Session | Default Security']`

### Output

```
Lambda 
|||CoreA 
||||||A23 
||||||A24 
||||||A25 
|||CoreB 
||||||B24 
|||CoreC 
||||||C4 
SULS 
|||Main Site 
||||||Home Page 
||||||Login Page 
||||||Register Page 
|||Judge Site 
||||||Login Page 
||||||Submittion Page 
|||Digital Site 
||||||Login Page 
Indice 
|||Session 
||||||Default Storage 
||||||Default Security
```

[hints]
[hint]
Creating a sorting function with two criteria might seem very challenging, but it can be simplified to the following: 

- If elements **a** and **b** are different based on the **first criteria**, then that result is the result of the sorting function
  * checking the second criteria is not required. 

- If elements **a** and **b** are **equal** based on the **first criteri**a, then the result of comparing **a** and **b** based on the **second criteria** is the result of the sorting
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
SULS \| Main Site \| Home Page
SULS \| Main Site \| Login Page
SULS \| Main Site \| Register Page
SULS \| Judge Site \| Login Page
SULS \| Judge Site \| Submittion Page
Lambda \| CoreA \| A23
SULS \| Digital Site \| Login Page
Lambda \| CoreB \| B24
Lambda \| CoreA \| A24
Lambda \| CoreA \| A25
Lambda \| CoreC \| C4
Indice \| Session \| Default Storage
Indice \| Session \| Default Security
[/input]
[output]
Lambda
\|\|\|CoreA
\|\|\|\|\|\|A23
\|\|\|\|\|\|A24
\|\|\|\|\|\|A25
\|\|\|CoreB
\|\|\|\|\|\|B24
\|\|\|CoreC
\|\|\|\|\|\|C4
SULS
\|\|\|Main Site
\|\|\|\|\|\|Home Page
\|\|\|\|\|\|Login Page
\|\|\|\|\|\|Register Page
\|\|\|Judge Site
\|\|\|\|\|\|Login Page
\|\|\|\|\|\|Submittion Page
\|\|\|Digital Site
\|\|\|\|\|\|Login Page
Indice
\|\|\|Session
\|\|\|\|\|\|Default Storage
\|\|\|\|\|\|Default Security
[/output]
[/test]
[test]
[input]
Shift \| Section-A \| A-2
Shift \| Section-A \| A-3
Shift \| Section-A \| A-23
Shift \| Section-B \| B-1
Shift \| Section-B \| B-64
Shift \| Section-B \| B-56
Shit \| Anex \| Indie
Shit \| Bider \| Indie
[/input]
[output]
Shift
\|\|\|Section-A
\|\|\|\|\|\|A-2
\|\|\|\|\|\|A-3
\|\|\|\|\|\|A-23
\|\|\|Section-B
\|\|\|\|\|\|B-1
\|\|\|\|\|\|B-64
\|\|\|\|\|\|B-56
Shit
\|\|\|Anex
\|\|\|\|\|\|Indie
\|\|\|Bider
\|\|\|\|\|\|Indie
[/output]
[/test]
[test]
[input]
Aniel \| Defa \| Aidi
Bari \| Defa \| Aidi
Bari \| Defa \| Isex
Bari \| Aha \| Xeno
Bari \| Defa \| Xeno
Aniel \| Defa \| Insiel
Ciel \| Defa \| Insiel
[/input]
[output]
Bari
\|\|\|Defa
\|\|\|\|\|\|Aidi
\|\|\|\|\|\|Isex
\|\|\|\|\|\|Xeno
\|\|\|Aha
\|\|\|\|\|\|Xeno
Aniel
\|\|\|Defa
\|\|\|\|\|\|Aidi
\|\|\|\|\|\|Insiel
Ciel
\|\|\|Defa
\|\|\|\|\|\|Insiel
[/output]
[/test]
[test]
[input]
Iris \| Main System \| Radiation Reducer
Iris \| Main System \| Blue Light Reducer
Iris \| Sub-System Alpha \| Resistor Level-5
Iris \| Core \| Memory Reducer
Iris \| Core \| Electricity Reducer
Iris \| Sub-System Gamma \| Resistor Level-2
Iris \| Sub-System Gamma \| Resistor Level-3
Iris \| Main System \| Interface
[/input]
[output]
Iris
\|\|\|Main System
\|\|\|\|\|\|Radiation Reducer
\|\|\|\|\|\|Blue Light Reducer
\|\|\|\|\|\|Interface
\|\|\|Core
\|\|\|\|\|\|Memory Reducer
\|\|\|\|\|\|Electricity Reducer
\|\|\|Sub-System Gamma
\|\|\|\|\|\|Resistor Level-2
\|\|\|\|\|\|Resistor Level-3
\|\|\|Sub-System Alpha
\|\|\|\|\|\|Resistor Level-5
[/output]
[/test]
[test]
[input]
Creativity \| Going \| Down
Creativity \| Reducing \| Fast
Creativity \| Is \| Dead
Creativity \| Going \| Down Really Fast
Creativity \| Is \| Really Dead
Tests \| Are \| Dying
Tests \| Are \| Dead
[/input]
[output]
Creativity
\|\|\|Going
\|\|\|\|\|\|Down
\|\|\|\|\|\|Down Really Fast
\|\|\|Is
\|\|\|\|\|\|Dead
\|\|\|\|\|\|Really Dead
\|\|\|Reducing
\|\|\|\|\|\|Fast
Tests
\|\|\|Are
\|\|\|\|\|\|Dying
\|\|\|\|\|\|Dead
[/output]
[/test]
[test]
[input]
Tests \| 001 \| In
Tests \| 001 \| Out
Tests \| 002 \| In
Tests \| 002 \| Out
Tests \| 003 \| In
Tests \| 003 \| Out
Tests \| 004 \| In
Tests \| 004 \| Out
Tests \| 005 \| In
Tests \| 005 \| Out
[/input]
[output]
Tests
\|\|\|001
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|002
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|003
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|004
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|005
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Data Class

Content will be added once the homework document has been revised.

[/slide]

[slide hideTitle]
# Problem: Tickets

Content will be added once the homework document has been revised.

[/slide]

[slide hideTitle]
# Problem: Sorted List

Content will be added once the homework document has been revised.

[/slide]

[slide hideTitle]
# Problem: Length Limit

Content will be added once the homework document has been revised.

[/slide]