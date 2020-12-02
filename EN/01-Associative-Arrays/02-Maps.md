[slide]

# Map

## What is Map?

- A Map collection stores its elements in **insertion order**.
- A for-of loop returns an array of [key, value] for each iteration.
- Pure JavaScript objects are like Maps in that both let you:
  - Assign values to keys.
  - Detect whether something is stored in a key.
  - Delete keys.

## Adding, Accessing Elements

- .**set**(key, value) – adds a new key-value pair.

```js
let map = new Map();
map.set(1, "one"); // key - 1, value - one
map.set(2, "two"); // key - 2, value - two
```

- .**get**(key) – returns the value of the given key.

```js
map.get(2); // two
map.get(1); // one
```

- .**size** – property, holding the number of stored entries.

```js
map.size(); // 2
```

- .**has(key)** - checks if the map has the given key.

```js
map.has(2); // true
map.has(4); // false
```

- .**delete(key)** - removes a key-value pair.

```js
map.delete(1); // Removes 1 from the map
```

- .**clear()** - removes all key-value pairs.

## Iterators

- .**entries()** - returns Iterator - array of [key, value].
- .**keys()** - returns Iterator with all the keys.
- .**values()** - returns Iterator with all the values.

```js
let entries = Array.from(map.entries()); // [ [2, 'two'], [3, 'three'] ]
let keys = Array.from(map.keys()); // [2, 3]
let values = Array.from(map.values()); // ['two', 'three']
```

## Iterating A Map

- To print a map simply use one of the iterators inside a **for-of** loop.

```js
let iterable = phonebookMap.keys();
for (let key of iterable) {
  console.log(`${key} => ${phonebookMap.get(key)}`);
}
```

```js
for (let [key, value] of phonebookMap) {
  console.log(`${key} => ${value}`);
}
```

Problem: Storage
Solution: Storage

## Map Sorting

- To **sort** a Map, first transform it into an **array**.
- Then use the **sort()** method.

```js
let map = new Map();
map.set("one", 1);
map.set("eight", 8);
map.set("two", 2);
let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
for (let kvp of sorted) {
  console.log(`${kvp[0]} -> ${kvp[1]}`);
}
```

Problem: School Grades
Solution: School Grades

[/slide]
