[slide]

# Associative Arrays

## A Key-Value Pair Structure

### What is an Associative Array?

The whole of the JavaScript language is built on one central data structure - the associative array.

Associative arrays are basically objects in JavaScript where indexes are replaced by user defined keys.

They do not have a length property like normal array and cannot be iterated using normal for loop.

- Arrays indexed by **string keys**.
- Hold a set of pairs [**key => value**].
  - The key is a **string**.
  - The **value** can be of **any** type.

Example:

| **Key**    | **Value**   |
| ---------- | ----------- |
| John Smith | +1-555-8976 |
| Lisa Smith | +1-555-1234 |
| Sam Doe    | +1-555-5030 |

### Declartation

- An associative array in JavaScript is just an object.
- We can declare it dynamically.

```js
let assocArr = { one: 1, two: 2, three: 3, [key]: 6 }; // Quotes are used if the key contains special characters
```

Valid ways to access values through keys.

```js
assocArr["four"] = 4;
```

```js
assocArr.five = 5;
```

```js
let key = "six";
assocArr[key] = 6;
```

### Using for-in

- We can use **for-in** loop to iterate through the keys.

```js
let assocArr = {};
assocArr["one"] = 1;
assocArr["two"] = 2;
assocArr["three"] = 3;
for (let key in assocArr) {
  console.log(key + " = " + assocArr[key]); // The output will be: one = 1 two = 2 three = 3
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

| **Input**            | **Output**          |
| -------------------- | ------------------- |
| `[Tim 0834212554]`   | Tim -> 0876566344   |
| `[Peter 0877547887]` | Peter -> 0877547887 |
| `[Bill 0896543112]`  | Bill -> 0896543112  |
| `[Tim 0876566344]`   |                     |

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
Tim -> 0876566344
Peter -> 0877547887
Bill -> 0896543112
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
hj -> 0453112
hr -> 087587
hjk -> 0845344
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
hkkk -> 08754557
hj -> 0453112
hjk -> 0845344
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
ha -> 087587
hj -> 0jkl12
hghgh -> 08455534544
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
hj -> 0552554
h -> 087587
hdfdf -> 0454563112
hjghjk -> 0845344
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
sdfshj -> 055562554
hjhgjr -> 0875587
sdfhj -> 0453456112
tyuhjk -> 0844565344
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

```js
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

| **Input**            | **Output**          |
| -------------------- | ------------------- |
| `[Tim 0834212554]`   | Tim -> 0876566344   |
| `[Peter 0877547887]` | Peter -> 0877547887 |
| `[Bill 0896543112]`  | Bill -> 0896543112  |
| `[Tim 0876566344]`   |                     |

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
Tim -> 0876566344
Peter -> 0877547887
Bill -> 0896543112
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
hj -> 0453112
hr -> 087587
hjk -> 0845344
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
hkkk -> 08754557
hj -> 0453112
hjk -> 0845344
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
ha -> 087587
hj -> 0jkl12
hghgh -> 08455534544
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
hj -> 0552554
h -> 087587
hdfdf -> 0454563112
hjghjk -> 0845344
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
sdfshj -> 055562554
hjhgjr -> 0875587
sdfhj -> 0453456112
tyuhjk -> 0844565344
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
[slide]

### Manipulating Associative Arrays

- Check if a key is **present**.

Checking if the **key** exists you can use the following - **.hasOwnProperty(key)**.

```js
let assocArr = {
  /* entries */
};
if (assocArr.hasOwnProperty("John Smith")) {
  /* Key found */
}
```

If you try and access a key that doesn't exist then you get the result **undefined**.

- Remove entries:

```js
delete assocArr["John Smith"];
```

- Iterate destructured entries.

```js
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

| **Input**                                                        | **Output**              |
| ---------------------------------------------------------------- | ----------------------- |
| `['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']` | Scheduled for Monday    |
|                                                                  | Scheduled for Wednesday |
|                                                                  | Conflict on Monday      |
|                                                                  | Scheduled for Friday    |

## Final Output

| **Output**        |
| ----------------- |
| Monday -> Peter   |
| Wednesday -> Bill |
| Friday -> Tim     |

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
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
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
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
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
Friday -> Bob
Saturday -> Ted
Monday -> Bill
Wednesday -> George
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
Thursday -> Bob
Tuesday -> Ted
Sunday -> George
Wednesday -> John
Saturday -> Bill
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
Sunday -> John
Tuesday -> Jeff
Monday -> Tim
Friday -> Bill
Saturday -> John
Wednesday -> Bob
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
Tuesday -> Ted
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

```js
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

| **Input**                                                        | **Output**              |
| ---------------------------------------------------------------- | ----------------------- |
| `['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']` | Scheduled for Monday    |
|                                                                  | Scheduled for Wednesday |
|                                                                  | Conflict on Monday      |
|                                                                  | Scheduled for Friday    |

## Final Output

| **Output**        |
| ----------------- |
| Monday -> Peter   |
| Wednesday -> Bill |
| Friday -> Tim     |

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
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
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
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
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
Friday -> Bob
Saturday -> Ted
Monday -> Bill
Wednesday -> George
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
Thursday -> Bob
Tuesday -> Ted
Sunday -> George
Wednesday -> John
Saturday -> Bill
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
Sunday -> John
Tuesday -> Jeff
Monday -> Tim
Friday -> Bill
Saturday -> John
Wednesday -> Bob
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
Tuesday -> Ted
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

### Sorting Associative Arrays

- Objects **cannot be sorted**. They must be converted first.
  - Convert to **array** for **sorting**, **filtering** and **mapping**.

```js
let phonebook = { Tim: "0876566344", Bill: "0896543112" };
let entries = Object.entries(phonebook);
console.log(entries); // Array of arrays with two elements each
// [ ['Tim', '0876566344'],
//   ['Bill', '0896543112'] ]
let firstEntry = entries[0];
console.log(firstEntry[0]); // Entry key -> 'Tim'
console.log(firstEntry[1]); // Entry value -> '0876566344'
```

### Sorting By Key

- The **entries** array can be **sorted**, using a **Compare function**.
- To **sort by key**, use the **first element** of each entry.

```js
entries.sort((a, b) => {
  keyA = a[0];
  keyB = b[0];
  // Perform comparison and return negative, 0 or positive
});
```

- You can also destructure the entries.

```js
entries.sort(([keyA, valueA], [keyB, valueB]) => {
  // Perform comparison and return negative, 0 or positive
});
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

Values will be separated by **":"**.

If same name occurs, save the **latest** address.

Print list, **sorted** alphabetically by **name**.

# Example

| **Input**                                                                          | **Output**           |
| ---------------------------------------------------------------------------------- | -------------------- |
| `['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']` | Bill -> Ornery Rd    |
|                                                                                    | Peter -> Carlyle Ave |
|                                                                                    | Tim -> Doe Crossing  |

[/task-description]
[tests]
[test]
[input]
Tim:Doe Crossing
Bill:Nelson Place
Peter:Carlyle Ave
Bill:Ornery Rd
[/input]
[output]
Bill -> Ornery Rd
Peter -> Carlyle Ave
Tim -> Doe Crossing
[/output]
[/test]
[test]
[input]
Bob:Coleman Ave
Tim:Katie Crossing
John:Coleman Ave
John:Grover Rd
Jeff:Acker Crossing
Bob:Katie Crossing
[/input]
[output]
Bob -> Katie Crossing
Jeff -> Acker Crossing
John -> Grover Rd
Tim -> Katie Crossing
[/output]
[/test]
[test]
[input]
Bob:Huxley Rd
John:Milwaukee Crossing
Peter:Fordem Ave
Bob:Redwing Ave
George:Mesta Crossing
Ted:Gateway Way
Bill:Gateway Way
John:Grover Rd
Peter:Huxley Rd
Jeff:Gateway Way
Jeff:Huxley Rd
[/input]
[output]
Bill -> Gateway Way
Bob -> Redwing Ave
George -> Mesta Crossing
Jeff -> Huxley Rd
John -> Grover Rd
Peter -> Huxley Rd
Ted -> Gateway Way
[/output]
[/test]
[test]
[input]
Bob:Coleman Ave
Tim:Katie Crossing
John:Coleman Ave
John:Grover Rd
Jeff:Acker Crossing
Bob:Katie Crossing
Bob:Huxley Rd
John:Milwaukee Crossing
Peter:Fordem Ave
Bob:Redwing Ave
George:Mesta Crossing
Ted:Gateway Way
Bill:Gateway Way
John:Grover Rd
Peter:Huxley Rd
Jeff:Gateway Way
Jeff:Huxley Rd
[/input]
[output]
Bill -> Gateway Way
Bob -> Redwing Ave
George -> Mesta Crossing
Jeff -> Huxley Rd
John -> Grover Rd
Peter -> Huxley Rd
Ted -> Gateway Way
Tim -> Katie Crossing
[/output]
[/test]
[test]
[input]
George:Westend Ave
Jeff:Westend Ave
Bill:Redwing Ave
George:Coleman Ave
George:Acker Crossing
Bill:Grover Rd
Jeff:8th Rd
John:Milwaukee Crossing
Bob:Fordem Ave
Ted:Toban Ave
Bill:8th Rd
Peter:Katie Crossing
Ted:Dayton Ave
Jeff:Milwaukee Crossing
Ted:Gateway Way
George:Westend Ave
George:Westend Ave
John:Huxley Rd
George:Katie Crossing
Peter:Milwaukee Crossing
Peter:Katie Crossing
Tim:Westend Ave
[/input]
[output]
Bill -> 8th Rd
Bob -> Fordem Ave
George -> Katie Crossing
Jeff -> Milwaukee Crossing
John -> Huxley Rd
Peter -> Katie Crossing
Ted -> Gateway Way
Tim -> Westend Ave
[/output]
[/test]
[test]
[input]
Ted:Toban Ave
Ted:Toban Ave
Ted:Toban Ave
Ted:Toban Ave
Ted:Toban Ave
Peter:Katie Crossing
Ted:Dayton Ave
[/input]
[output]
Peter -> Katie Crossing
Ted -> Dayton Ave
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

```js
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

Values will be separated by **":"**.

If same name occurs, save the **latest** address.

Print list, **sorted** alphabetically by **name**.

# Example

| **Input**                                                                          | **Output**           |
| ---------------------------------------------------------------------------------- | -------------------- |
| `['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']` | Bill -> Ornery Rd    |
|                                                                                    | Peter -> Carlyle Ave |
|                                                                                    | Tim -> Doe Crossing  |

[/task-description]
[tests]
[test]
[input]
Tim:Doe Crossing
Bill:Nelson Place
Peter:Carlyle Ave
Bill:Ornery Rd
[/input]
[output]
Bill -> Ornery Rd
Peter -> Carlyle Ave
Tim -> Doe Crossing
[/output]
[/test]
[test]
[input]
Bob:Coleman Ave
Tim:Katie Crossing
John:Coleman Ave
John:Grover Rd
Jeff:Acker Crossing
Bob:Katie Crossing
[/input]
[output]
Bob -> Katie Crossing
Jeff -> Acker Crossing
John -> Grover Rd
Tim -> Katie Crossing
[/output]
[/test]
[test]
[input]
Bob:Huxley Rd
John:Milwaukee Crossing
Peter:Fordem Ave
Bob:Redwing Ave
George:Mesta Crossing
Ted:Gateway Way
Bill:Gateway Way
John:Grover Rd
Peter:Huxley Rd
Jeff:Gateway Way
Jeff:Huxley Rd
[/input]
[output]
Bill -> Gateway Way
Bob -> Redwing Ave
George -> Mesta Crossing
Jeff -> Huxley Rd
John -> Grover Rd
Peter -> Huxley Rd
Ted -> Gateway Way
[/output]
[/test]
[test]
[input]
Bob:Coleman Ave
Tim:Katie Crossing
John:Coleman Ave
John:Grover Rd
Jeff:Acker Crossing
Bob:Katie Crossing
Bob:Huxley Rd
John:Milwaukee Crossing
Peter:Fordem Ave
Bob:Redwing Ave
George:Mesta Crossing
Ted:Gateway Way
Bill:Gateway Way
John:Grover Rd
Peter:Huxley Rd
Jeff:Gateway Way
Jeff:Huxley Rd
[/input]
[output]
Bill -> Gateway Way
Bob -> Redwing Ave
George -> Mesta Crossing
Jeff -> Huxley Rd
John -> Grover Rd
Peter -> Huxley Rd
Ted -> Gateway Way
Tim -> Katie Crossing
[/output]
[/test]
[test]
[input]
George:Westend Ave
Jeff:Westend Ave
Bill:Redwing Ave
George:Coleman Ave
George:Acker Crossing
Bill:Grover Rd
Jeff:8th Rd
John:Milwaukee Crossing
Bob:Fordem Ave
Ted:Toban Ave
Bill:8th Rd
Peter:Katie Crossing
Ted:Dayton Ave
Jeff:Milwaukee Crossing
Ted:Gateway Way
George:Westend Ave
George:Westend Ave
John:Huxley Rd
George:Katie Crossing
Peter:Milwaukee Crossing
Peter:Katie Crossing
Tim:Westend Ave
[/input]
[output]
Bill -> 8th Rd
Bob -> Fordem Ave
George -> Katie Crossing
Jeff -> Milwaukee Crossing
John -> Huxley Rd
Peter -> Katie Crossing
Ted -> Gateway Way
Tim -> Westend Ave
[/output]
[/test]
[test]
[input]
Ted:Toban Ave
Ted:Toban Ave
Ted:Toban Ave
Ted:Toban Ave
Ted:Toban Ave
Peter:Katie Crossing
Ted:Dayton Ave
[/input]
[output]
Peter -> Katie Crossing
Ted -> Dayton Ave
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Sorting By Value

- To **sort by value**, use the **second element** of each entry.

```js
entries.sort((a, b) => {
  valueA = a[1];
  valueB = b[1];
  // Perform comparison and return negative, 0 or positive
});
```

- You can also **destructure** the entries.

```js
entries.sort(([keyA, valueA], [keyB, valueB]) => {
  // Perform comparison and return negative, 0 or positive
});
```

## Nested Data Structures

- The values of associative arrays can be objects, or arrays.
- Once we have a **reference** to the value, we can **manipulate** it like any other object.

```js
let contacts = {
  Tim: { phone: "0876566344", address: "Doe Crossing" },
  Bill: { phone: "0896543112", address: "Nelson Place" },
};
let billsContact = contacts["Bill"]; // Get reference
console.log(billsContact.phone); // '0896543112'
```

## Sorting Nested Data Structures

- We can **sort** them by the **property values** of each entry.
  - Sort a contact book **alphabetically** by person's address.

```js
let entries = Object.entries(contacts);
entries.sort(([keyA, refA], [keyB, refB]) => {
  let addrA = refA.address;
  let addrB = refB.address;
  return addrA.localeCompare(addrB);
});
```

[/slide]
