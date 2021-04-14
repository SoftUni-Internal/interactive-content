# Associative Arrays

[slide hideTitle]
# What is an Associative Array?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-3-4-what-are-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The JavaScript language is built on one central data structure - the associative array.

Associative arrays in JavaScript are objects in which, the indexes are replaced by user defined keys.


They do not have a **length** property like a regular array and cannot be iterated using normal for-loop.


Arrays are indexed by **string keys**.

They consist of a **key** and a **value**.

The **key** is a **string**.

The **value** can be of **any** type.

**Example:**

| **Key** | **Value** |
| --- | --- |
| John Smith | \+1\-555\-8976 |
| Lisa Smith | \+1\-555\-1234 |
| Sam Doe    | \+1\-555\-5030 |
[/slide]

[slide hideTitle]
# Declaration

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-5-declaration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An associative array in JavaScript is just an object, so we can declare it dynamically.

Let us declare and initialize one:

In this example, "one" is the **key**, and the number 1 is the corresponding **value**:

```js
let assocArr = { one: 1 };
```

You can access the values through their keys.

In this example, "four" is the **key** and the number 4 is the corresponding **value**:

```js
assocArr['four'] = 4;
```

Here, "five" is the **key** and 5 is the corresponding **value**:

```js
assocArr.five = 5;
```

Here is how we declare and initialize the **key** first, and after that, use it to assign a **value** to it:

```js
let key = 'six';
assocArr[key] = 6;
```
[/slide]

[slide hideTitle]
# Using a for-in Loop

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-6-using-for-in-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use a **for-in** loop to iterate through the keys.

Declare an empty object. Then assign values to the keys and finally, iterate through the keys using a for-in loop.

**As shown below:**

```js live
let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;

for (let key in assocArr) {
    console.log(key + ' = ' + assocArr[key]);
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Phone Book

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-7-solution-phone-book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Phone Book" taskId="js-fundamentals-pt2-Associative-Arrays-lab-Phone-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function phoneBook(input){
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

Write a function that stores information about a **person's name** and their **phone number**.

The input comes in the form of an **array of strings**.

Each string contains a **name** and a **number**.

If you receive the same name twice just replace the number.

At the end print the result **without sorting it**.

Use an **associative array**.

# Example

| **Input** | **Output** |
| --- | --- |
| phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']) | Tim \-\> 0876566344   |
|                                                                              | Peter \-\> 0877547887 |
|                                                                              | Bill \-\> 0896543112  |

[/task-description]
[tests]
[test open]
[input]
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])
[/input]
[output]
Tim \-\> 0876566344
Peter \-\> 0877547887
Bill \-\> 0896543112
[/output]
[/test]
[test]
[input]
phoneBook(['hj 0552554', 'hr 087587', 'hj 0453112', 'hjk 0845344'])
[/input]
[output]
hj \-\> 0453112
hr \-\> 087587
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
phoneBook(['hkkk 0552554', 'hkkk 08754557', 'hj 0453112', 'hjk 0845344'])
[/input]
[output]
hkkk \-\> 08754557
hj \-\> 0453112
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
phoneBook(['ha 0552554', 'ha 087587', 'hj 0jkl12', 'hghgh 08455534544'])
[/input]
[output]
ha \-\> 087587
hj \-\> 0jkl12
hghgh \-\> 08455534544
[/output]
[/test]
[test]
[input]
phoneBook(['hj 0552554', 'h 087587', 'hdfdf 0454563112', 'hjghjk 0845344'])
[/input]
[output]
hj \-\> 0552554
h \-\> 087587
hdfdf \-\> 0454563112
hjghjk \-\> 0845344
[/output]
[/test]
[test]
[input]
phoneBook(['sdfshj 055562554', 'hjhgjr 0875587', 'sdfhj 0453456112', 'tyuhjk 0844565344'])
[/input]
[output]
sdfshj \-\> 055562554
hjhgjr \-\> 0875587
sdfhj \-\> 0453456112
tyuhjk \-\> 0844565344
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Manipulating Associative Arrays

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-9-manipulating-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use the following expression to check if a **key** is **present**. 

Use the method `.hasOwnProperty('key')`.

Let us declare an empty object and assign a key to it. Use an `if` statement and the expression from above to see if the key exists.

The result should be "true":

```js live
let assocArr = {};
assocArr.name = 'John Smith';
if (assocArr.hasOwnProperty('name')) {
    console.log(true);
} else {
    console.log(false);
}
```

Removing entries is done using the keyword `delete`. 

To test that, we will declare an empty object and assign a key to it.

Next, we will delete the key. 

The output is an empty object as you can see from the example:

```js live
let assocArr = {};
assocArr.name = 'John Smith';
delete assocArr.name;
console.log(assocArr);
```

If you try to access a key that does not exist then you will get the result **undefined**.

Try to `console.log()` `assocArr.name` after deleting the `name` property.

**See the example below:**

```js live
let assocArr = {};
assocArr.name = 'John Smith';
delete assocArr.name;
console.log(assocArr.name);
```

You can also use something called destructuring. 

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into separate values.

The `Object.entries()` method returns an array of arrays of a given object's own `[ key, value ]` pairs.

In the for-of loop in the example below, we declare our **key** and **value** variables.

After the first iteration, the `key` variable will be equal to **name** and the `value` variable will be equal to "John Smith".

On the second iteration of the loop, `key` will be equal to age and `value` will be equal to 28.

```js live
let assocArr = {};
assocArr.name = 'John Smith';
assocArr.age = 28;
for (let [key, value] of Object.entries(assocArr)) {
    console.log(`${key} -> ${value}`);
}
```


[/slide]

[slide hideTitle]
# Problem with Solution: Meetings

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-11-solution-meetings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Meetings" taskId="js-fundamentals-pt2-Associative-Arrays-lab-Meetings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function meetings(input){
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

Write a function that receives **weekdays** and **names** as input.

Print a message for every successful appointment in the following format:

"**Scheduled for** \$\{**day**\}"

If the same weekday occurs a second time, print a **conflict** message:

"**Conflict on** \$\{**day**\}**!**"

In the end, print a list containing all successful and conflicting appointments.

## Example

| **Input** | **Output** |
| --- | --- |
| meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']) | Scheduled for Monday    |
|                                                                  | Scheduled for Wednesday |
|                                                                  | Conflict on Monday      |
|                                                                  | Scheduled for Friday    |
|                                                                  | Monday \-\> Peter  |
|                                                                  | Wednesday \-\> Bill   |
|                                                                  | Friday \-\> Tim    |


[/task-description]
[tests]
[test open]
[input]
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
[/input]
[output]
Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday \-\> Peter
Wednesday \-\> Bill
Friday \-\> Tim
[/output]
[/test]
[test]
[input]
meetings(['Monday Peter', 'Wednesday Bill', 'Friday Tim'])
[/input]
[output]
Scheduled for Monday
Scheduled for Wednesday
Scheduled for Friday
Monday \-\> Peter
Wednesday \-\> Bill
Friday \-\> Tim
[/output]
[/test]
[test]
[input]
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George'])
[/input]
[output]
Scheduled for Friday
Scheduled for Saturday
Scheduled for Monday
Conflict on Monday!
Scheduled for Wednesday
Friday \-\> Bob
Saturday \-\> Ted
Monday \-\> Bill
Wednesday \-\> George
[/output]
[/test]
[test]
[input]
meetings(['Thursday Bob', 'Tuesday Ted', 'Tuesday Jeff', 'Sunday George', 'Wednesday John', 'Sunday Jeff', 'Sunday Jeff', 'Saturday Bill'])
[/input]
[output]
Scheduled for Thursday
Scheduled for Tuesday
Conflict on Tuesday!
Scheduled for Sunday
Scheduled for Wednesday
Conflict on Sunday!
Conflict on Sunday!
Scheduled for Saturday
Thursday \-\> Bob
Tuesday \-\> Ted
Sunday \-\> George
Wednesday \-\> John
Saturday \-\> Bill
[/output]
[/test]
[test]
[input]
meetings(['Sunday John', 'Tuesday Jeff', 'Sunday Bob', 'Monday Tim', 'Friday Bill', 'Sunday Peter', 'Saturday John', 'Monday George', 'Tuesday Jeff', 'Tuesday Ted', 'Wednesday Bob', 'Wednesday John', 'Tuesday John', 'Tuesday Ted'])
[/input]
[output]
Scheduled for Sunday
Scheduled for Tuesday
Conflict on Sunday!
Scheduled for Monday
Scheduled for Friday
Conflict on Sunday!
Scheduled for Saturday
Conflict on Monday!
Conflict on Tuesday!
Conflict on Tuesday!
Scheduled for Wednesday
Conflict on Wednesday!
Conflict on Tuesday!
Conflict on Tuesday!
Sunday \-\> John
Tuesday \-\> Jeff
Monday \-\> Tim
Friday \-\> Bill
Saturday \-\> John
Wednesday \-\> Bob
[/output]
[/test]
[test]
[input]
meetings(['Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Jeff', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Jeff'])
[/input]
[output]
Scheduled for Tuesday
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Tuesday \-\> Ted
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Sorting Associative Arrays

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-13-sorting-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Objects **cannot be sorted**. To do so, we must convert them into arrays.

Then we can **sort**, **filter** and **map** them.

By using the `Object.entries()` method we get an array of arrays. 

See the **example** below:

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
console.log(entries);
```

So, by using indexing we can get the **key** and the **value** of each **entry**.

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
let firstEntry = entries[0];
console.log(firstEntry[0]);
console.log(firstEntry[1]);
```

As the name of the `sort()` method suggests, it sorts the elements of an array and returns a sorted array.

The default sort order is **ascending**.

The **entries** array from the above example can be **sorted**, using a **compare function**.

We use the `.localeCompare()` method to sort **strings** in JavaScript.

[/slide]

[slide hideTitle]
# Sorting by Key

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-14-sorting-by-key-and-value-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To **sort by key**, use the **first element** of each entry.

Here `a[0]` is the first element and `b[0]` - the second element of the sorting function.

The expression `a[0].localeCompare(b[0])` will sort the array in ascending order.

If we use `b[0].localeCompare(a[0])` the function will sort the array in descending order.

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
let result = entries.sort((a, b) => a[0].localeCompare(b[0]));
console.log(result);
```

To **sort by value**, use the **second element** of each entry.

In this example it is the same as above, the only difference is that we use the second element as a sorting criteria.

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
let result = entries.sort((a, b) => a[1].localeCompare(b[1]));
console.log(result);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Address Book

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-15-solution-adress-book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Address Book" taskId="js-fundamentals-pt2-Associative-Arrays-lab-Address-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function addressBook(input){
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

Write a function that takes **names** and **addresses** as input.

The values will be separated by "**:**".

If same **name** occurs more than once, save the **latest** address.

Print out a list of all entries, **sorted** alphabetically by **name**.

## Example

| **Input** | **Output** |
| --- | --- |
| addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']) | Bill \-\> Ornery Rd    |
|                                                                                    | Peter \-\> Carlyle Ave |
|                                                                                    | Tim \-\> Doe Crossing  |

[/task-description]
[tests]
[test open]
[input]
addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])
[/input]
[output]
Bill \-\> Ornery Rd
Peter \-\> Carlyle Ave
Tim \-\> Doe Crossing
[/output]
[/test]
[test]
[input]
addressBook(['Bob:Coleman Ave', 'Tim:Katie Crossing', 'John:Coleman Ave', 'John:Grover Rd', 'Jeff:Acker Crossing', 'Bob:Katie Crossing'])
[/input]
[output]
Bob \-\> Katie Crossing
Jeff \-\> Acker Crossing
John \-\> Grover Rd
Tim \-\> Katie Crossing
[/output]
[/test]
[test]
[input]
addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way',  'Jeff:Huxley Rd'])
[/input]
[output]
Bill \-\> Gateway Way
Bob \-\> Redwing Ave
George \-\> Mesta Crossing
Jeff \-\> Huxley Rd
John \-\> Grover Rd
Peter \-\> Huxley Rd
Ted \-\> Gateway Way
[/output]
[/test]
[test]
[input]
addressBook(['Bob:Coleman Ave', 'Tim:Katie Crossing', 'John:Coleman Ave', 'John:Grover Rd', 'Jeff:Acker Crossing', 'Bob:Katie Crossing', 'Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave',  'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd'])
[/input]
[output]
Bill \-\> Gateway Way
Bob \-\> Redwing Ave
George \-\> Mesta Crossing
Jeff \-\> Huxley Rd
John \-\> Grover Rd
Peter \-\> Huxley Rd
Ted \-\> Gateway Way
Tim \-\> Katie Crossing
[/output]
[/test]
[test]
[input]
addressBook(['George:Westend Ave', 'Jeff:Westend Ave', 'Bill:Redwing Ave', 'George:Coleman Ave', 'George:Acker Crossing', 'Bill:Grover Rd', 'Jeff:8th Rd', 'John:Milwaukee Crossing', 'Bob:Fordem Ave', 'Ted:Toban Ave',  'Bill:8th Rd', 'Peter:Katie Crossing', 'Ted:Dayton Ave', 'Jeff:Milwaukee Crossing', 'Ted:Gateway Way', 'George:Westend Ave', 'George:Westend Ave', 'John:Huxley Rd', 'George:Katie Crossing', 'Peter:Milwaukee Crossing', 'Peter:Katie Crossing', 'Tim:Westend Ave'])
[/input]
[output]
Bill \-\> 8th Rd
Bob \-\> Fordem Ave
George \-\> Katie Crossing
Jeff \-\> Milwaukee Crossing
John \-\> Huxley Rd
Peter \-\> Katie Crossing
Ted \-\> Gateway Way
Tim \-\> Westend Ave
[/output]
[/test]
[test]
[input]
addressBook(['Ted:Toban Ave', 'Ted:Toban Ave', 'Ted:Toban Ave', 'Ted:Toban Ave', 'Ted:Toban Ave', 'Peter:Katie Crossing', 'Ted:Dayton Ave'])
[/input]
[output]
Peter \-\> Katie Crossing
Ted \-\> Dayton Ave
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Nested Data Structures

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-18-19-nested-data-structures-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The values stored in associative arrays can be objects or arrays.

Once we have a **reference** to the value, we can **manipulate** it like any other object.

In the following example, we declare an object which has two properties: "Tim" and "Bill".

"Tim" is an object, so is "Bill". 

To access Bill's contacts, we need to have a reference to the object by creating the variable `billsContact`.

We can access this property from the "Bill" object, using the `billsContact` variable.

```js live
let contacts = {
    Tim: {
        phone: '0876566344',
        address: 'Doe Crossing'
    },
    Bill: {
        phone: '0896543112',
        address: 'Nelson Place'
    },
};
let billsContact = contacts['Bill'];
console.log(billsContact.phone);
```

## Sorting Nested Data Structures

We can **sort** data structures by the **property values** of each entry.

In this case, we will use destructuring to sort the contacts book **alphabetically** by each person's address.

```js live
let contacts = {
    Tim: {
        phone: '0876566344',
        address: 'Doe Crossing'
    },
    Bill: {
        phone: '0896543112',
        address: 'Nelson Place'
    },
};
let entries = Object.entries(contacts);
let result = entries.sort(([keyA, refA], [keyB, refB]) => {
    let addrA = refA.address;
    let addrB = refB.address;
    return addrA.localeCompare(addrB);
});
console.log(result);
```

[/slide]
