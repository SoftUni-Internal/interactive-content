# Homework

[slide hideTitle]
# Problem: Heroic Inventory

[code-task title="Heroic Inventory" taskId="java-path-js-advanced-objects-and-classes- heroic-inventory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function heroicInventory(heroArr) {
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

`heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])`

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

`heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])`

### Output

```json
[{"name":"Jake","level":1000,"items":
  ["Gauss","HolidayGrenade"]}] 
```

[hints]
[hint]
We need an **array** that will hold our **hero** data.

That is the **first** thing we create. 

[image assetsSrc="syntax-hint-01.png" /]

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
heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])
[/input]
[output]
\[\{"name":"Isacc","level":25,"items":\["Apple","GravityGun"\]\},\{"name":"Derek","level":12,"items":\["BarrelVest","DestructionSword"\]\},\{"name":"Hes","level":1,"items":\["Desolator","Sentinel","Antara"\]\}\]
[/output]
[/test]
[test open]
[input]
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])
[/input]
[output]
\[\{"name":"Jake","level":1000,"items":\["Gauss","HolidayGrenade"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['Kayden / 24 / Apple, Orange, Grapefruit', 'Joseph / 50 / AK47, M4A1, ES21, Deagle', 'Chris / 10 / Knife', 'Eve / 23 / Gummy, Depathy'])
[/input]
[output]
\[\{"name":"Kayden","level":24,"items":\["Apple","Orange","Grapefruit"\]\},\{"name":"Joseph","level":50,"items":\["AK47","M4A1","ES21","Deagle"\]\},\{"name":"Chris","level":10,"items":\["Knife"\]\},\{"name":"Eve","level":23,"items":\["Gummy","Depathy"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['EmptyOne / 200', 'Anderson / 250 / StrikeForge, HeavensGuard', 'Hendricksen / 300 / DemonHeart, DemonSoul, DemonEdge'])
[/input]
[output]
\[\{"name":"EmptyOne","level":200,"items":\[\]\},\{"name":"Anderson","level":250,"items":\["StrikeForge","HeavensGuard"\]\},\{"name":"Hendricksen","level":300,"items":\["DemonHeart","DemonSoul","DemonEdge"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory('Test / 3 / In, Txt')
[/input]
[output]
\[\{"name":"Test","level":3,"items":\["In","Txt"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['Destroyer / 25 / DivineRapier, AghanimScepter, Dagon', 'Geomancer / 25 / AghanimScepter, VladmirsOffering, Mekanism', 'Juggernaut / 25 / AghanimScepter, Desolator, BattleFury', 'Earthshaker / 20 / AghanimScepter, RefresherOrb, BlinkDagger', 'Chieftain / 20 / AghanimScepter, BlinkDagger, Battlefury, TravelBoots, DrumOfEndurance', 'Invoker / 25 / AghanimScepter, Satanic, EyeOfSkadi, Butterfly', 'NogoTheNextLevel / 150 / DomoSweather'])
[/input]
[output]
\[\{"name":"Destroyer","level":25,"items":\["DivineRapier","AghanimScepter","Dagon"\]\},\{"name":"Geomancer","level":25,"items":\["AghanimScepter","VladmirsOffering","Mekanism"\]\},\{"name":"Juggernaut","level":25,"items":\["AghanimScepter","Desolator","BattleFury"\]\},\{"name":"Earthshaker","level":20,"items":\["AghanimScepter","RefresherOrb","BlinkDagger"\]\},\{"name":"Chieftain","level":20,"items":\["AghanimScepter","BlinkDagger","Battlefury","TravelBoots","DrumOfEndurance"\]\},\{"name":"Invoker","level":25,"items":\["AghanimScepter","Satanic","EyeOfSkadi","Butterfly"\]\},\{"name":"NogoTheNextLevel","level":150,"items":\["DomoSweather"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['What / 1 / The, Fuck'])
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
function jsonTable(employeeData) {
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

`jsonTable(['{"name":"Peter","position":"Director","salary":100000}', '{"name":"Ted","position":"Lecturer","salary":1000}', '{"name":"George","position":"Lecturer","salary":1000}'])`

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
jsonTable(['\{"name":"Peter","position":"Director","salary":100000\}', '\{"name":"Ted","position":"Lecturer","salary":1000\}', '\{"name":"George","position":"Lecturer","salary":1000\}'])
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
jsonTable(['\{"name":"George","position":"CEO","salary":10000\}', '\{"name":"Peter","position":"Employee","salary":1000\}', '\{"name":"John","position":"Employee","salary":1000\}', '\{"name":"Henrick","position":"Employee","salary":1000\}', '\{"name":"Phillip","position":"Employee","salary":1000\}', '\{"name":"Alex","position":"Cleaner","salary":500\}', '\{"name":"Ivan","position":"Cleaner","salary":500\}'])
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
jsonTable(['\{"name":"This","position":"Will","salary":123\}', '\{"name":"Be","position":"ALot","salary":456\}', '\{"name":"Of","position":"Fun","salary":789\}'])
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
jsonTable(['\{"name":"test","position":"out.txt","salary":3\}'])
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
function juice(juiceData) {
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

`juice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549'])`

### Output

```js
Orange => 2 
Peach => 2 
```

## Example Two

### Input

`juice(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789'])`

### Output

```js
Pear => 8 
Watermelon => 10 
Kiwi => 4 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
juice(['Orange =\> 2000', 'Peach =\> 1432', 'Banana =\> 450', 'Peach =\> 600', 'Strawberry =\> 549'])
[/input]
[output]
Orange =\> 2
Peach =\> 2
[/output]
[/test]
[test open]
[input]
juice(['Kiwi =\> 234', 'Pear =\> 2345', 'Watermelon =\> 3456', 'Kiwi =\> 4567', 'Pear =\> 5678', 'Watermelon =\> 6789'])
[/input]
[output]
Pear =\> 8
Watermelon =\> 10
Kiwi =\> 4
[/output]
[/test]
[test]
[input]
juice(['Hell =\> 100000', 'Coca Cola =\> 1000000000', 'Water =\> 10000', 'Nestea =\> 11111'])
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
juice(['Musaka =\> 1000', 'Lambda =\> 1000', 'Filter =\> 1000', 'Function =\> 1000
Judge =\> 1000', 'Mojem =\> 1000', 'Zadacha =\> 1000', 'Reshenie =\> 1000', 'Prav =\> 1000', 'Nakov =\> 1000', 'Izvrashtenie =\> 1000'])
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
juice(['Code =\> 999', 'Software =\> 1000', 'SoftwareShouldBeBeforeCode =\> 1345', 'Code =\> 1'])
[/input]
[output]
Software =\> 1
SoftwareShouldBeBeforeCode =\> 1
Code =\> 1
[/output]
[/test]
[test]
[input]
juice(['What =\> 919', 'The =\> 191', 'Fuck =\> 1110', 'What =\> 191', 'The =\> 919', 'The =\> 889', 'The =\> 1'])
[/input]
[output]
Fuck =\> 1
What =\> 1
The =\> 2
[/output]
[/test]
[test]
[input]
juice(['Test =\> 500', 'Out =\> 500', 'Txt =\> 1000', 'Out =\> 512', 'Test =\> 499', 'Test =\> 1'])
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
# Description

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

`store(['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])`

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

`store(['Banana : 2', 'Rubic's Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rally Car : 2000000', 'Paper : 0.000001', 'Barrel : 10'])`

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
store(['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
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
store(['Banana : 2', 'Rubic's Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rally Car : 2000000', 'Paper : 0.000001', 'Barrel : 10'])
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
store(['Apple : 1', 'Broccoli : 2', 'Corn : 3', 'Deagle : 4', 'Eclipse : 5', 'Flirt : 6', 'Gargoyle : 7', 'Heart : 8', 'Iris : 9', 'Juice : 10', 'King : 11', 'Lemon : 12', 'Melolemonmelon : 13', 'Nestea : 14', 'Opium : 15', 'Pineapple Pen : 16', 'Quartz : 17', 'Rocket : 18', 'Sphere : 19', 'Tantrum : 20', 'Uranium : 21', 'Vi\*\*\*tor : 22', 'Wolfy : 23', 'Xeno : 24', 'Yoyo : 25', 'Zord : 26'])
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
store(['HueHueHue : 1000', 'Harley Davidson : 10', 'Halberd : 101', 'Broccoli : 10', 'Beans : 2302', 'KFC : 1000', 'McDonalds : 10', 'Kitchen : 10'])
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
store(['Test : 300', 'Out : 200', 'Txt : 100', 'Milionaaa : 300'])
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
# Description
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

`system(['SULS | Main Site | Home Page', 'SULS | Main Site | Login Page', 'SULS | Main Site | Register Page', 'SULS | Judge Site | Login Page', 'SULS | Judge Site | Submittion Page', 'Lambda | CoreA | A23', 'SULS | Digital Site | Login Page', 'Lambda | CoreB | B24', 'Lambda | CoreA | A24', 'Lambda | CoreA | A25', 'Lambda | CoreC | C4', 'Indice | Session | Default Storage', 'Indice | Session | Default Security'])`

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
  * checking the second criteria is not required 

- If elements **a** and **b** are **equal** based on the **first criteria**, then the result of comparing **a** and **b** based on the **second criteria** is the result of the sorting
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
system(['SULS \| Main Site \| Home Page', 'SULS \| Main Site \| Login Page', 'SULS \| Main Site \| Register Page', 'SULS \| Judge Site \| Login Page', 'SULS \| Judge Site \| Submittion Page', 'Lambda \| CoreA \| A23', 'SULS \| Digital Site \| Login Page', 'Lambda \| CoreB \| B24', 'Lambda \| CoreA \| A24', 'Lambda \| CoreA \| A25', 'Lambda \| CoreC \| C4', 'Indice \| Session \| Default Storage', 'Indice \| Session \| Default Security'])
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
system(['Shift \| Section-A \| A-2', 'Shift \| Section-A \| A-3', 'Shift \| Section-A \| A-23', 'Shift \| Section-B \| B-1', 'Shift \| Section-B \| B-64', 'Shift \| Section-B \| B-56', 'Shit \| Anex \| Indie', 'Shit \| Bider \| Indie'])
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
system(['Aniel \| Defa \| Aidi', 'Bari \| Defa \| Aidi', 'Bari \| Defa \| Isex', 'Bari \| Aha \| Xeno', 'Bari \| Defa \| Xeno', 'Aniel \| Defa \| Insiel', 'Ciel \| Defa \| Insiel'])
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
system(['Iris \| Main System \| Radiation Reducer', 'Iris \| Main System \| Blue Light Reducer', 'Iris \| Sub-System Alpha \| Resistor Level-5', 'Iris \| Core \| Memory Reducer', 'Iris \| Core \| Electricity Reducer', 'Iris \| Sub-System Gamma \| Resistor Level-2', 'Iris \| Sub-System Gamma \| Resistor Level-3', 'Iris \| Main System \| Interface'])
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
system(['Creativity \| Going \| Down', 'Creativity \| Reducing \| Fast', 'Creativity \| Is \| Dead', 'Creativity \| Going \| Down Really Fast', 'Creativity \| Is \| Really Dead', 'Tests \| Are \| Dying', 'Tests \| Are \| Dead'])
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
system(['Tests \| 001 \| In', 'Tests \| 001 \| Out', 'Tests \| 002 \| In', 'Tests \| 002 \| Out', 'Tests \| 003 \| In', 'Tests \| 003 \| Out', 'Tests \| 004 \| In', 'Tests \| 004 \| Out', 'Tests \| 005 \| In', 'Tests \| 005 \| Out'])
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

[code-task title="Data Class" taskId="java-path-js-advanced-objects-and-classes-data-class" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class Request {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a **class** that holds data about an HTTP **Request**.

It has the following properties: 

- `method` (String) 
- `uri` (String) 
- `version` (String) 
- `message` (String) 
- `response` (String) 
- `fulfilled` (Boolean) 

The first four properties (`method`, `uri`, `version`, `message`) are set trough the `constructor` in the listed order.

The `response` property is initialized as `undefined`, and the `fulfilled` property is initially set to `false`.

# Constraints 
- The constructor of your class will receive valid parameters 
- Submit the class definition as is without wrapping it in any function

## Examples 

### Sample Input 

```js
let myData = new Request(
  'GET', 'http://google.com', 'HTTP/1.1', ''); 

console.log(myData); 
```

### Resulting Object 

```js
Request { 
  method: 'GET', 
  uri: 'http://google.com', 
  version: 'HTTP/1.1', 
  message: '', 
  response: undefined, 
  fulfilled: false 
} 
```

[hints]
[hint]
Using ES6 syntax with the `class` keyword, a class can be defined similar to a function: 

```js
class Request {
  // ...
}
```
[/hint] 
[hint]
At this point, the **class** can already **be instantiated**, but it will not hold anything useful, since it does not have a constructor.

A **constructor** is a function that **initializes** the object’s context and attaches **values** to it.

It is defined with the keyword `constructor` inside the body of the class definition and it follows the syntax of regular JS functions - it can receive **arguments** and execute **logic**.

Any variables we want to be attached to the **instance** must be prefixed with the `this` identifier: 

```js
class Request {
  constructor() {
    this.method = '';
    this.uri = '';
    this.version = '';
    this.message = '';
    this.response = undefined;
    this.fulfilled = false;
  }
}
```
[/hint] 
[hint]
The description mentions some of the properties need to be set through the constructor.

This means that the constructor must receive them as arguments.

We modify it to receive four named arguments that we then assign to the local variables: 

```js
class Request {
  constructor(method, uri, version, message) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = undefined;
    this.fulfilled = false;
  }
}
```

Note that the input parameters have the same names as the instance variables.

This is not necessary, but it is easier to read.

There will be no name collision, because the `this` identifier instructs the interpreter to look for a variable in a different context, so `this.method` is not the same as `method`. 
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
expect(typeof result).to.equal('function', "Couldn't find constructor.");
let myData = new result('GET', 'http://google.com', 'HTTP/1.1', '');
expect(myData.hasOwnProperty('method')).to.equal(true, "Instance doesn't have a method property.");
expect(myData.hasOwnProperty('uri')).to.equal(true, "Instance doesn't have a uri property.");
expect(myData.hasOwnProperty('version')).to.equal(true, "Instance doesn't have a version property.");
expect(myData.hasOwnProperty('message')).to.equal(true, "Instance doesn't have a message property.");
expect(myData.hasOwnProperty('response')).to.equal(true, "Instance doesn't have a response property.");
expect(myData.hasOwnProperty('fulfilled')).to.equal(true, "Instance doesn't have a fulfilled property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(typeof result).to.equal('function', "Couldn't find constructor.");
let myData = new result('POST', 'http://bing.com', 'HTTP/1.1', 'hi');
expect(myData.hasOwnProperty('method')).to.equal(true, "Instance doesn't have a method property.");
expect(myData.hasOwnProperty('uri')).to.equal(true, "Instance doesn't have a uri property.");
expect(myData.hasOwnProperty('version')).to.equal(true, "Instance doesn't have a version property.");
expect(myData.hasOwnProperty('message')).to.equal(true, "Instance doesn't have a message property.");
expect(myData.hasOwnProperty('response')).to.equal(true, "Instance doesn't have a response property.");
expect(myData.hasOwnProperty('fulfilled')).to.equal(true, "Instance doesn't have a fulfilled property.");

expect(myData.method).to.equal('POST', "Property method wasn't set correctly");
expect(myData.uri).to.equal('http://bing.com', "Property uri wasn't set correctly");
expect(myData.version).to.equal('HTTP/1.1', "Property version wasn't set correctly");
expect(myData.message).to.equal('hi', "Property message wasn't set correctly");
expect(myData.response).to.equal(undefined, "Property response wasn't set correctly");
expect(myData.fulfilled).to.equal(false, "Property fulfilled wasn't set correctly");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Tickets

[code-task title="Tickets" taskId="java-path-js-advanced-objects-and-classes-tickets" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
tickets(ticketArr, sortCrit) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a program that manages a database of tickets.

A ticket has a `destination`, a `price`, and a `status`.

Your function will receive **two arguments** - an **array of strings** representing ticket descriptions and a **string** representing a **sorting criterion**.

The ticket descriptions have the following format: 

`<destinationName>|<price>|<status>`

Store each ticket.

After the execution, **return** a sorted summary of all tickets, sorted by either `destination`, `price`, or `status`, based on the **second parameter** that your program received.

Always sort in ascending order (default behavior for **alphabetical** sort).

If two tickets are the same, use order of appearance.

See the examples for more information.

## Input 

Your program will receive two parameters - an **array of strings** and a **single string**. 

## Output 

**Return** a **sorted array** of all the tickets that were registered. 

## Examples 

## Example One

### Sample Input 

`tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination')`

### Output Array

```js
[ Ticket { destination: 'Boston', 
    price: 126.20, 
    status: 'departed' },  

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'available' },  

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'sold' },  

  Ticket { destination: 'Philadelphia', 
    price: 94.20, 
    status: 'available' } ] 
```

## Example Two

### Sample Input 

`tickets(sort['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', Boston|126.20|departed'], 'status')`

### Output Array

```js
[ Ticket { destination: 'Philadelphia', 
    price: 94.20, 
    status: 'available' }, 

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'available' }, 

  Ticket { destination: 'Boston', 
    price: 126.20, 
    status: 'departed' }, 

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'sold' } ] 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available'\], 'status');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

expect(resultArray\[0\].hasOwnProperty('destination')).to.equal(true, "Resulting object didn't have destination property.");
expect(resultArray\[0\].hasOwnProperty('price')).to.equal(true, "Resulting object didn't have price property.");
expect(resultArray\[0\].hasOwnProperty('status')).to.equal(true, "Resulting object didn't have status property.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|departed'\],
    'destination');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Boston', price: 126.2, status: 'departed'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Philadelphia', price: 94.2, status: 'available'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|departed'\],
    'status');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'Boston', price: 126.2, status: 'departed'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|departed'\],
    'price');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Boston', price: 126.2, status: 'departed'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|available',
        'Philadelphia\|132.20\|departed',
        'Chicago\|140.20\|available',
        'Dallas\|144.60\|sold',
        'New York City\|206.20\|sold',
        'New York City\|240.20\|departed',
        'New York City\|305.20\|departed'\],
    'destination');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[ \{ destination: 'Boston', price: 126.2, status: 'available' \},
    \{ destination: 'Chicago', price: 140.2, status: 'available' \},
    \{ destination: 'Dallas', price: 144.6, status: 'sold' \},
    \{destination: 'New York City', price: 95.99, status: 'available' \},
    \{ destination: 'New York City', price: 95.99, status: 'sold' \},
    \{ destination: 'New York City', price: 206.2, status: 'sold' \},
    \{destination: 'New York City', price: 240.2, status: 'departed' \},
    \{destination: 'New York City', price: 305.2, status: 'departed' \},
    \{ destination: 'Philadelphia', price: 94.2, status: 'available' \},
    \{ destination: 'Philadelphia', price: 132.2, status: 'departed' \} \];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|available',
        'Philadelphia\|132.20\|departed',
        'Chicago\|140.20\|available',
        'Dallas\|144.60\|sold',
        'New York City\|206.20\|sold',
        'New York City\|240.20\|departed',
        'New York City\|305.20\|departed'\],
    'price');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Boston', price: 126.2, status: 'available'\},
    \{destination: 'Philadelphia', price: 132.2, status: 'departed'\},
    \{destination: 'Chicago', price: 140.2, status: 'available'\},
    \{destination: 'Dallas', price: 144.6, status: 'sold'\},
    \{destination: 'New York City', price: 206.2, status: 'sold'\},
    \{destination: 'New York City', price: 240.2, status: 'departed'\},
    \{destination: 'New York City', price: 305.2, status: 'departed'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|available',
        'Philadelphia\|132.20\|departed',
        'Chicago\|140.20\|available',
        'Dallas\|144.60\|sold',
        'New York City\|206.20\|sold',
        'New York City\|240.20\|departed',
        'New York City\|305.20\|departed'\],
    'status');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'Boston', price: 126.2, status: 'available'\},
    \{destination: 'Chicago', price: 140.2, status: 'available'\},
    \{destination: 'Philadelphia', price: 132.2, status: 'departed'\},
    \{destination: 'New York City', price: 240.2, status: 'departed'\},
    \{destination: 'New York City', price: 305.2, status: 'departed'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Dallas', price: 144.6, status: 'sold'\},
    \{destination: 'New York City', price: 206.2, status: 'sold'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
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

[code-task title="Sorted List" taskId="java-path-js-advanced-objects-and-classes-sorted-list" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class List {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Implement a **class** that **keeps** a list of numbers sorted in **ascending order**. 

It must support the following functionality: 

- `add(elemenent)` - adds a new element to the collection 
- `remove(index)` - removes the element at the specified **index** 
- `get(index)` - returns the value of the element at the specified **index** 
- `size` – returns the number of elements stored in the collection 

The **correct order** of the elements must be kept **at all times**, regardless of which operation is called.

**Removing** and **retrieving** elements **should not work** if the provided index points **outside the length** of the collection (either throw an error or do nothing).

Note that the **size** of the collection is **not** a function.

# Input / Output 

All functions that expect **input** will receive data as **arguments**.

Functions that perform **validations** will be tested with both **valid and invalid** data.

Any result expected from a function should be **returned** as its result.

Your `add` and `remove` **functions** should **return** a **class instance** with the required functionality as their result.

## Submission

Submit the class definition as is **without** wrapping it in any function.


## Example

### Sample Input 

```js
let list = new List(); 
list.add(5); 
list.add(6); 
list.add(7); 
console.log(list.get(1));  
list.remove(1); 
console.log(list.get(1)); 
```

### Output 

```
6 
7 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = new result();
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
expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = new result();
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
expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = new result();
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
var myList = new result();
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
var myList = new result();
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
expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with negative index.");

var expectedArray = \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\];
try \{
    myList.remove(-1);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with negative index.");
\}

try \{
    myList.remove(11);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with negative index.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Length Limit

[code-task title="Length Limit" taskId="java-path-js-advanced-objects-and-classes-length-limit" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class Stringer {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a `Stringer` class that holds a **single string** and a **length** property.

The class should be initialized with a **string** and an **initial length**.

It should always keep the **initial state** of the **given string**.

Create the two properties `innerString` and `innerLength`.

There should also be functionality for increasing and decreasing the initial **length** property.

Implement the `increase(length)` and `decrease(length)` functions that manipulate the length property with the **given value**.

The length property is **a numeric value** and should not fall below **0**.

You do not need to throw any errors, but if an attempt to decrease it below 0 is made, set it to **0**.

You should also implement functionality for the `toString()` function that returns the string the object was initialized with.

If the length of the string is greater than the **length property**, cut it from right to left so that it has the same length as the l**ength property** and add **3 dots** after it.

If the length property is **0**, return **3 dots**. 

## Examples 

### `lengthLimit.js`

```js
let test = new Stringer("Test", 5); 
console.log(test.toString()); // Test 
 
test.decrease(3); 
console.log(test.toString()); // Te... 
 
test.decrease(5); 
console.log(test.toString()); // ... 
 
test.increase(4);  
console.log(test.toString()); // Test 
```

[hints]
[hint]
Store the initial string in a property and do not change it. 

Upon calling the `toString()` function, truncate it to the desired value and return it. 

[/hint] 
[hint]
Submit your solution as a class representation only! 

No need for IIFEs or wrapping of classes. 
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Stringer = result;

expect(typeof Stringer).to.be.equal('function',
            "Class 'Stringer' not found");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
        expect(s.toString()).to.be.equal("Viktor",
            "'Stringer.toString()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
expect(typeof Stringer.constructor).to.be.equal('function',
            "'Stringer.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
expect(Stringer.length).to.be.equal(2,
            "'Stringer constructor' should take 1 parameter");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
expect(typeof Stringer.constructor.name).to.be.equal('string',
            "'Stringer.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
expect(s.innerString).to.be.equal("Viktor",
            "'Stringer.innerString' property does not exist, or does not initialize properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
expect(s.innerLength).to.be.equal(6,
            "'Stringer.innerLength' property does not exist, or does not initialize properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(3);
expect(s.innerLength).to.be.equal(3,
            "'Stringer.decrease()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(9);
expect(s.innerLength).to.be.equal(0,
            "'Stringer.decrease()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.increase(3);
expect(s.innerLength).to.be.equal(9,
            "'Stringer.increase()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(3);
expect(s.toString()).to.be.equal("Vik...",
            "'Stringer.toString()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(9);
expect(s.toString()).to.be.equal("...",
            "'Stringer.toString()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]