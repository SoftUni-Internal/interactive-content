[slide]

# Associative Arrays

## A Key-Value Pair Structure

### What is an Associative Array?

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

Valid ways to access values through keys:

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

- We can use **for-in** loop to iterate through the keys:

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
hj -> 0552554
h -> 087587
hdfdf -> 0454563112
hjghjk -> 0845344
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
hj -> 0552554
h -> 087587
hdfdf -> 0454563112
hjghjk -> 0845344
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

- Check if a key is **present**:

```js
let assocArr = {
  /* entries */
};
if (assocArr.hasOwnProperty("John Smith")) {
  /* Key found */
}
```

- Remove entries:

```js
delete assocArr["John Smith"];
```

- Iterate destructured entries:

```js
for (let [key, value] of Object.entries(assocArr)) {
  console.log(`${key} -> ${value}`);
}
```

Problem: Meetings!!!
Solution: Meetings!!!

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

Problem: Sort AddressBook
Solution: Sort AddressBook

### Sorting By Value

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

### Nested Data Structures

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

### Sorting Nested Data Structures

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
