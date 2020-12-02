[slide]

# Associative Arrays

## A Key-Value Pair Structure

### What is an Associative Array?

The whole of the JavaScript language is built on one central data structure - the associative array.

Associative arrays are basically objects in JavaScript where indexes are replaced by user defined keys.

They do not have a length property like normal array and cannot be iterated using normal for loop.

- Arrays indexed by **string keys**.
- Hold a set of pairs \[**key \=\> value**\].
  - The key is a **string**.
  - The **value** can be of **any** type.

Example:

| **Key**    | **Value**      |
| ---------- | -------------- |
| John Smith | \+1\-555\-8976 |
| Lisa Smith | \+1\-555\-1234 |
| Sam Doe    | \+1\-555\-5030 |

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
