# Associative Arrays

[slide]

# What is an Associative Array?

The whole of the JavaScript language is built on one central data structure - the associative array.

Associative arrays are basically objects in JavaScript where indexes are replaced by user defined keys.

They do not have a length property like normal array and cannot be iterated using normal for loop.

Arrays are indexed by **string keys** and they hold a set of pairs **key** and **value**.

The **key** is a **string**. The **value** can be of **any** type.

Example:

| **Key** | **Value** |
| --- | --- |
| John Smith | \+1\-555\-8976 |
| Lisa Smith | \+1\-555\-1234 |
| Sam Doe    | \+1\-555\-5030 |

## Declartation

An associative array in JavaScript is just an object, so we can declare it dynamically.

Let us declare and initialize one:

In this example `one` is the **key** and number `1` is the corresponding **value**.

```js
let assocArr = { one: 1 };
```

Valid ways to access values through keys.

`"four"` is the **key** and number `4` is the corresponding **value**.

```js
assocArr["four"] = 4;
```

`five` is the **key** and number `5` is the corresponding **value**.

```js
assocArr.five = 5;
```

In this example we declare and initialize the **key** first, and after that we use it to assign a **value** to it.

```js
let key = "six";
assocArr[key] = 6;
```

## Using for-in loop

We can use **for-in** loop to iterate through the keys.

First we declare an empty object. Then we assign values to the keys and finally we iterate through the keys using for in loop.

You can see the result below:

```js live
let assocArr = {};
assocArr["one"] = 1;
assocArr["two"] = 2;
assocArr["three"] = 3;
for (let key in assocArr) {
  console.log(key + " = " + assocArr[key]);
}
```

[/slide]

[slide]

# Problem: Phone Book

[code-task title="Phone Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that stores information about a **person’s name** and his **phone number**.

The input comes as an **array of strings**.

Each string contains the name and the number.

If you receive the same name twice just replace the number.

At the end print the result **without sorting it**.

Try using an **associative array**.

# Example

| **Input** | **Output** |
| --- | --- |
| `['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']`| Tim \-\> 0876566344   |
|                                                                              | Peter \-\> 0877547887 |
|                                                                              | Bill \-\> 0896543112  |

[/task-description]
[tests]
[test]
[input]
Tim 0834212554
Peter 0877547887
Bill 0896543112
Tim 0876566344
[/input]
[output]
Tim \-\> 0876566344
Peter \-\> 0877547887
Bill \-\> 0896543112
[/output]
[/test]
[test]
[input]
hj 0552554
hr 087587
hj 0453112
hjk 0845344
[/input]
[output]
hj \-\> 0453112
hr \-\> 087587
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
hkkk 0552554
hkkk 08754557
hj 0453112
hjk 0845344
[/input]
[output]
hkkk \-\> 08754557
hj \-\> 0453112
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
ha 0552554
ha 087587
hj 0jkl12
hghgh 08455534544
[/input]
[output]
ha \-\> 087587
hj \-\> 0jkl12
hghgh \-\> 08455534544
[/output]
[/test]
[test]
[input]
hj 0552554
h 087587
hdfdf 0454563112
hjghjk 0845344
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
sdfshj 055562554
hjhgjr 0875587
sdfhj 0453456112
tyuhjk 0844565344
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

[slide]

# Solution: Phone Book

[code-task title="Phone Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input) {
  let contacts = {};
  for (const line of input) {
    let [name, phone] = line.split(" ");
    contacts[name] = phone;
  }
  Object.keys(contacts).forEach((key) => {
    console.log(`${key} -> ${contacts[key]}`);
  });
}
```

[/code-editor]
[task-description]

# Description

Write a function that stores information about a **person’s name** and his **phone number**.

The input comes as an **array of strings**.

Each string contains the name and the number.

If you receive the same name twice just replace the number.

At the end print the result **without sorting it**.

Try using an **associative array**.

# Example

| **Input** | **Output** |
| --- | --- |
| `['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']`| Tim \-\> 0876566344   |
|                                                                              | Peter \-\> 0877547887 |
|                                                                              | Bill \-\> 0896543112  |

[/task-description]
[tests]
[test]
[input]
Tim 0834212554
Peter 0877547887
Bill 0896543112
Tim 0876566344
[/input]
[output]
Tim \-\> 0876566344
Peter \-\> 0877547887
Bill \-\> 0896543112
[/output]
[/test]
[test]
[input]
hj 0552554
hr 087587
hj 0453112
hjk 0845344
[/input]
[output]
hj \-\> 0453112
hr \-\> 087587
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
hkkk 0552554
hkkk 08754557
hj 0453112
hjk 0845344
[/input]
[output]
hkkk \-\> 08754557
hj \-\> 0453112
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
ha 0552554
ha 087587
hj 0jkl12
hghgh 08455534544
[/input]
[output]
ha \-\> 087587
hj \-\> 0jkl12
hghgh \-\> 08455534544
[/output]
[/test]
[test]
[input]
hj 0552554
h 087587
hdfdf 0454563112
hjghjk 0845344
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
sdfshj 055562554
hjhgjr 0875587
sdfhj 0453456112
tyuhjk 0844565344
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

[slide]

# Manipulating Associative Arrays

We can use the following expression to check if a **key** is **present**. 

Use the method `.hasOwnProperty("key")`

Let us declare an empty object and assign a key to it. Use if statement and the expression from above to see if the key exists.

The result should be "true".

```js live
let assocArr = {};
assocArr.name = "John Smith";
if (assocArr.hasOwnProperty("name")) {
  console.log(true);
} else{
  console.log(false);
}
```

Removing entires is done by the keyword `delete`. First declare an empty object and assign a key to.

Next delete the key. The output will be an empty object as you can see from the example.

```js live
let assocArr = {};
assocArr.name = "John Smith";
delete assocArr.name;
console.log(assocArr);
```

If you try to access a key that doesn't exist then you will get the result **undefined**.

Try to `console.log()` `assocArr.name` after deleting the property `name`.

See the example below.

```js live
let assocArr = {};
assocArr.name = "John Smith";
delete assocArr.name;
console.log(assocArr.name);
```

You can also use somethig called destructuring. 

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

The `Object.entries()` method returns an array of arrays of a given object's own `[ key , value ]` pairs.

In the for of loop we declare our **key** and **value** variables.

After destructuring in the first iteration `key` will be equal to `name` and `value` will be equal to "John Smith".

In the second iteration of the loop `key` will be equal to `age` and `value` will be equal to `28`.

```js live
let assocArr = {};
assocArr.name = "John Smith";
assocArr.age = 28;
for (let [key, value] of Object.entries(assocArr)) {
  console.log(`${key} -> ${value}`);
}
```

[/slide]

[slide]

# Problem: Meetings

[code-task title="Meetings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that reads **weekdays** and **names**.

Print a **success** message for every successful appointment.

If the same weekday occurs a second time, print **conflict**.

At end, print a list of all meetings.

# Example

| **Input** | **Output** |
| --- | --- |
| `['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']` | Scheduled for Monday    |
|                                                                  | Scheduled for Wednesday |
|                                                                  | Conflict on Monday      |
|                                                                  | Scheduled for Friday    |

## Final Output

| **Output** |
| --- |
| Monday \-\> Peter   |
| Wednesday \-\> Bill |
| Friday \-\> Tim     |

[/task-description]
[tests]
[test]
[input]
Monday Peter
Wednesday Bill
Monday Tim
Friday Tim
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
Monday Peter
Wednesday Bill
Friday Tim
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
Friday Bob
Saturday Ted
Monday Bill
Monday John
Wednesday George
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
Thursday Bob
Tuesday Ted
Tuesday Jeff
Sunday George
Wednesday John
Sunday Jeff
Sunday Jeff
Saturday Bill
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
Sunday John
Tuesday Jeff
Sunday Bob
Monday Tim
Friday Bill
Sunday Peter
Saturday John
Monday George
Tuesday Jeff
Tuesday Ted
Wednesday Bob
Wednesday John
Tuesday John
Tuesday Ted
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
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Jeff
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
Tuesday \-\> Ted
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Solution: Meetings

[code-task title="Meetings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input) {
  const meetings = {};
  for (const line of input) {
    const [day, name] = line.split(" ");
    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
```

[/code-editor]
[task-description]

# Description

Write a function that reads **weekdays** and **names**.

Print a **success** message for every successful appointment.

If the same weekday occurs a second time, print **conflict**.

At end, print a list of all meetings.

# Example

| **Input** | **Output** |
| --- | --- |
| `['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']` | Scheduled for Monday    |
|                                                                  | Scheduled for Wednesday |
|                                                                  | Conflict on Monday      |
|                                                                  | Scheduled for Friday    |

## Final Output

| **Output** |
| --- |
| Monday \-\> Peter   |
| Wednesday \-\> Bill |
| Friday \-\> Tim     |

[/task-description]
[tests]
[test]
[input]
Monday Peter
Wednesday Bill
Monday Tim
Friday Tim
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
Monday Peter
Wednesday Bill
Friday Tim
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
Friday Bob
Saturday Ted
Monday Bill
Monday John
Wednesday George
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
Thursday Bob
Tuesday Ted
Tuesday Jeff
Sunday George
Wednesday John
Sunday Jeff
Sunday Jeff
Saturday Bill
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
Sunday John
Tuesday Jeff
Sunday Bob
Monday Tim
Friday Bill
Sunday Peter
Saturday John
Monday George
Tuesday Jeff
Tuesday Ted
Wednesday Bob
Wednesday John
Tuesday John
Tuesday Ted
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
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Ted
Tuesday Jeff
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
Tuesday \-\> Ted
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Sorting Associative Arrays

Objects **cannot be sorted**. They must be converted first.

You will have to convert to **array** for **sorting**, **filtering** and **mapping**.

By using the method `Object.entries()` we will get an array of arrays as a result. 

See the example below.

```js live
let phonebook = { Tim: "0876566344", Bill: "0896543112" };
let entries = Object.entries(phonebook);
console.log(entries);
```

So, by using indexing we can get the **key** and the **value** of each **entry**.

```js live
let phonebook = { Tim: "0876566344", Bill: "0896543112" };
let entries = Object.entries(phonebook);
let firstEntry = entries[0];
console.log(firstEntry[0]);
console.log(firstEntry[1]);
```

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.

The **entries** array from the above example can be **sorted**, using a **Compare function**.

Use `.localeCompare()` method to sort **strings** in JavaScript.

To **sort by key**, use the **first element** of each entry.

Here `a[0]` is the first element and `b[0]` is the second element of the sorting function.

The expression `a[0].localeCompare(b[0])` will sort in ascending order.

If we have `b[0].localeCompare(a[0])` the function will sort in descending order.

```js live
let phonebook = { Tim: "0876566344", Bill: "0896543112" };
let entries = Object.entries(phonebook);
let result = entries.sort((a, b) => a[0].localeCompare(b[0]));
console.log(result);
```

To **sort by value**, use the **second element** of each entry.

In this example it is the same as above, the only difference is that we use the second element of the entry.

```js live
let phonebook = { Tim: "0876566344", Bill: "0896543112" };
let entries = Object.entries(phonebook);
let result = entries.sort((a, b) => a[1].localeCompare(b[1]));
console.log(result);
```

[/slide]

[slide]

# Problem: AddressBook

[code-task title="AddressBook" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that reads **names** and **addresses**.

Values will be separated by `":"`.

If same name occurs, save the **latest** address.

Print list, **sorted** alphabetically by **name**.

# Example

| **Input** | **Output** |
| --- | --- |
| `['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']` | Bill \-\> Ornery Rd    |
|                                                                                    | Peter \-\> Carlyle Ave |
|                                                                                    | Tim \-\> Doe Crossing  |

[/task-description]
[tests]
[test]
[input]
Tim\:Doe Crossing
Bill\:Nelson Place
Peter\:Carlyle Ave
Bill\:Ornery Rd
[/input]
[output]
Bill \-\> Ornery Rd
Peter \-\> Carlyle Ave
Tim \-\> Doe Crossing
[/output]
[/test]
[test]
[input]
Bob\:Coleman Ave
Tim\:Katie Crossing
John\:Coleman Ave
John\:Grover Rd
Jeff\:Acker Crossing
Bob\:Katie Crossing
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
Bob\:Huxley Rd
John\:Milwaukee Crossing
Peter\:Fordem Ave
Bob\:Redwing Ave
George\:Mesta Crossing
Ted\:Gateway Way
Bill\:Gateway Way
John\:Grover Rd
Peter\:Huxley Rd
Jeff\:Gateway Way
Jeff\:Huxley Rd
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
Bob\:Coleman Ave
Tim\:Katie Crossing
John\:Coleman Ave
John\:Grover Rd
Jeff\:Acker Crossing
Bob\:Katie Crossing
Bob\:Huxley Rd
John\:Milwaukee Crossing
Peter\:Fordem Ave
Bob\:Redwing Ave
George\:Mesta Crossing
Ted\:Gateway Way
Bill\:Gateway Way
John\:Grover Rd
Peter\:Huxley Rd
Jeff\:Gateway Way
Jeff\:Huxley Rd
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
George\:Westend Ave
Jeff\:Westend Ave
Bill\:Redwing Ave
George\:Coleman Ave
George\:Acker Crossing
Bill\:Grover Rd
Jeff\:8th Rd
John\:Milwaukee Crossing
Bob\:Fordem Ave
Ted\:Toban Ave
Bill\:8th Rd
Peter\:Katie Crossing
Ted\:Dayton Ave
Jeff\:Milwaukee Crossing
Ted\:Gateway Way
George\:Westend Ave
George\:Westend Ave
John\:Huxley Rd
George\:Katie Crossing
Peter\:Milwaukee Crossing
Peter\:Katie Crossing
Tim\:Westend Ave
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
Ted\:Toban Ave
Ted\:Toban Ave
Ted\:Toban Ave
Ted\:Toban Ave
Ted\:Toban Ave
Peter\:Katie Crossing
Ted\:Dayton Ave
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

[slide]

# Solution: AddressBook

[code-task title="AddressBook" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input) {
  const book = {};
  for (const line of input) {
    const [name, address] = line.split(":");
    book[name] = address;
  }
  Object.keys(book)
    .sort((a, b) => a.localeCompare(b))
    .forEach((k) => console.log(`${k} -> ${book[k]}`));
}
```

[/code-editor]
[task-description]

# Description

Write a function that reads **names** and **addresses**.

Values will be separated by `":"`.

If same name occurs, save the **latest** address.

Print list, **sorted** alphabetically by **name**.

# Example

| **Input** | **Output** |
| --- | --- |
| `['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']` | Bill \-\> Ornery Rd    |
|                                                                                    | Peter \-\> Carlyle Ave |
|                                                                                    | Tim \-\> Doe Crossing  |

[/task-description]
[tests]
[test]
[input]
Tim\:Doe Crossing
Bill\:Nelson Place
Peter\:Carlyle Ave
Bill\:Ornery Rd
[/input]
[output]
Bill \-\> Ornery Rd
Peter \-\> Carlyle Ave
Tim \-\> Doe Crossing
[/output]
[/test]
[test]
[input]
Bob\:Coleman Ave
Tim\:Katie Crossing
John\:Coleman Ave
John\:Grover Rd
Jeff\:Acker Crossing
Bob\:Katie Crossing
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
Bob\:Huxley Rd
John\:Milwaukee Crossing
Peter\:Fordem Ave
Bob\:Redwing Ave
George\:Mesta Crossing
Ted\:Gateway Way
Bill\:Gateway Way
John\:Grover Rd
Peter\:Huxley Rd
Jeff\:Gateway Way
Jeff\:Huxley Rd
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
Bob\:Coleman Ave
Tim\:Katie Crossing
John\:Coleman Ave
John\:Grover Rd
Jeff\:Acker Crossing
Bob\:Katie Crossing
Bob\:Huxley Rd
John\:Milwaukee Crossing
Peter\:Fordem Ave
Bob\:Redwing Ave
George\:Mesta Crossing
Ted\:Gateway Way
Bill\:Gateway Way
John\:Grover Rd
Peter\:Huxley Rd
Jeff\:Gateway Way
Jeff\:Huxley Rd
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
George\:Westend Ave
Jeff\:Westend Ave
Bill\:Redwing Ave
George\:Coleman Ave
George\:Acker Crossing
Bill\:Grover Rd
Jeff\:8th Rd
John\:Milwaukee Crossing
Bob\:Fordem Ave
Ted\:Toban Ave
Bill\:8th Rd
Peter\:Katie Crossing
Ted\:Dayton Ave
Jeff\:Milwaukee Crossing
Ted\:Gateway Way
George\:Westend Ave
George\:Westend Ave
John\:Huxley Rd
George\:Katie Crossing
Peter\:Milwaukee Crossing
Peter\:Katie Crossing
Tim\:Westend Ave
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
Ted\:Toban Ave
Ted\:Toban Ave
Ted\:Toban Ave
Ted\:Toban Ave
Ted\:Toban Ave
Peter\:Katie Crossing
Ted\:Dayton Ave
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

[slide]

# Nested Data Structures

The values of associative arrays can be objects, or arrays.

Once we have a **reference** to the value, we can **manipulate** it like any other object.

In the following example we declare an object which has two properties: "Tim" and "Bill".

But "Tim" is another object, so is "Bill". To access Bill's contacts we need to have a reference to the object by creating the variable `billsContact`.

Now it is easy access the properties inside the object "Bill". Just use the newlly created variable `billsContact`.

```js live
let contacts = {
  Tim: { phone: "0876566344", address: "Doe Crossing" },
  Bill: { phone: "0896543112", address: "Nelson Place" },
};
let billsContact = contacts["Bill"];
console.log(billsContact.phone);
```

## Sorting Nested Data Structures

We can **sort** them by the **property values** of each entry. In this case we will use destructuring.

Sort a contact book **alphabetically** by person's address.

```js live
let contacts = {
  Tim: { phone: "0876566344", address: "Doe Crossing" },
  Bill: { phone: "0896543112", address: "Nelson Place" },
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
