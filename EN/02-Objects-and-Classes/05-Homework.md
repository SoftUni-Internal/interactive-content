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
[hint]

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
function jsonTable {
    // Write your code here
}
```
[/code-editor]
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

Content will be added once the homework document has been revised.

[/slide]

[slide hideTitle]
# Problem: Store Catalogue

Content will be added once the homework document has been revised.

[/slide]

[slide hideTitle]
# Problem: System Components

Content will be added once the homework document has been revised.

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