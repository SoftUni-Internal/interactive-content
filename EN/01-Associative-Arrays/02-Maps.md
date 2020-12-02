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

[/slide]

[slide]

# Problem: Storage

[code-task title="Storage" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that takes a certain number of **items** and their **quantity**.

If the same item appears **more than once**, **add the new amount** to the **existing one**.

At the end print all the items and their amount without sorting them.

The input comes as **array of strings**.

Try using a **Map()**.

# Example

| **Input**                                                | **Output**     |
| -------------------------------------------------------- | -------------- |
| `['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']` | tomatoes -> 10 |
|                                                          | coffee -> 45   |
|                                                          | olives -> 100  |
|                                                          |                |

[/task-description]
[tests]
[test]
[input]
tomatoes 10
coffee 5
olives 100
coffee 40
[/input]
[output]
tomatoes -> 10
coffee -> 45
olives -> 100
[/output]
[/test]
[test]
[input]
tomatoes 50
tomatoes 61
ghj 115
ghj 40
[/input]
[output]
tomatoes -> 111
ghj -> 155
[/output]
[/test]
[test]
[input]
aa 45
aa 5
olives 140
aa 30
[/input]
[output]
aa -> 80
olives -> 140
[/output]
[/test]
[test]
[input]
jkl 150
jkl 6
ohjves 160
chhee 41
[/input]
[output]
jkl -> 156
ohjves -> 160
chhee -> 41
[/output]
[/test]
[test]
[input]
tomoes 120
coe 566
oli 6440
ee 10
[/input]
[output]
tomoes -> 120
coe -> 566
oli -> 6440
ee -> 10
[/output]
[/test]
[test]
[input]
tomjjes 1120
clfee 5
o;ves 4600
coknfee 350
[/input]
[output]
tomjjes -> 1120
clfee -> 5
o;ves -> 4600
coknfee -> 350
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Solution: Storage

[code-task title="Storage" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  let products = new Map();
  input.forEach((line) => {
    const [product, quantity] = line.split(` `);
    if (!products.has(product)) {
      products.set(product, 0);
    }
    products.set(product, products.get(product) + Number(quantity));
  });
  let entries = products.entries();
  for (const kvp of entries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
```

[/code-editor]
[task-description]

# Description

Write a function that takes a certain number of **items** and their **quantity**.

If the same item appears **more than once**, **add the new amount** to the **existing one**.

At the end print all the items and their amount without sorting them.

The input comes as **array of strings**.

Try using a **Map()**.

# Example

| **Input**                                                | **Output**     |
| -------------------------------------------------------- | -------------- |
| `['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']` | tomatoes -> 10 |
|                                                          | coffee -> 45   |
|                                                          | olives -> 100  |
|                                                          |                |

[/task-description]
[tests]
[test]
[input]
tomatoes 10
coffee 5
olives 100
coffee 40
[/input]
[output]
tomatoes -> 10
coffee -> 45
olives -> 100
[/output]
[/test]
[test]
[input]
tomatoes 50
tomatoes 61
ghj 115
ghj 40
[/input]
[output]
tomatoes -> 111
ghj -> 155
[/output]
[/test]
[test]
[input]
aa 45
aa 5
olives 140
aa 30
[/input]
[output]
aa -> 80
olives -> 140
[/output]
[/test]
[test]
[input]
jkl 150
jkl 6
ohjves 160
chhee 41
[/input]
[output]
jkl -> 156
ohjves -> 160
chhee -> 41
[/output]
[/test]
[test]
[input]
tomoes 120
coe 566
oli 6440
ee 10
[/input]
[output]
tomoes -> 120
coe -> 566
oli -> 6440
ee -> 10
[/output]
[/test]
[test]
[input]
tomjjes 1120
clfee 5
o;ves 4600
coknfee 350
[/input]
[output]
tomjjes -> 1120
clfee -> 5
o;ves -> 4600
coknfee -> 350
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

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

[/slide]

[slide]

# Problem: School Grades

[code-task title="Scholl Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function to store students with all of their grades.

If a student appears more than once, add the new grades.

At the end print the students sorted by average grade.

The input comes as **array of strings**.

# Example

| **Input**                                                | **Output**     |
| -------------------------------------------------------- | -------------- |
| `['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']` | Tammy: 2,4,3   |
|                                                          | Lilly: 4,6,6,5 |
|                                                          | Tim: 5,6,6,6   |

[/task-description]
[tests]
[test]
[input]
Lilly 4 6 6 5
Tim 5 6
Tammy 2 4 3
Tim 6 6
[/input]
[output]
Tammy: 2, 4, 3
Lilly: 4, 6, 6, 5
Tim: 5, 6, 6, 6
[/output]
[/test]
[test]
[input]
ghjg 4 6 6 5
b 5 6 4
ghj 2 4 5 3
jjjjk 6 6 5 5
[/input]
[output]
ghj: 2, 4, 5, 3
b: 5, 6, 4
ghjg: 4, 6, 6, 5
jjjjk: 6, 6, 5, 5
[/output]
[/test]
[test]
[input]
fgh 4 6 6 5
fhg 5 6 5 6
hj 2 4 3
gg 6 6 6 6
[/input]
[output]
hj: 2, 4, 3
fgh: 4, 6, 6, 5
fhg: 5, 6, 5, 6
gg: 6, 6, 6, 6
[/output]
[/test]
[test]
[input]
Lilly 4 6 6 5
hhj 5 6 4 4 5
ghj 2 4 3
ghj 6 6
fg 5 6 5 6
dgfd 2 4 3
[/input]
[output]
dgfd: 2, 4, 3
ghj: 2, 4, 3, 6, 6
hhj: 5, 6, 4, 4, 5
Lilly: 4, 6, 6, 5
fg: 5, 6, 5, 6
[/output]
[/test]
[test]
[input]
jjj 4 6 6 5
kjk 5 6
ghg 5 5 6 6
dfdf 2 2 3 4 3
[/input]
[output]
dfdf: 2, 2, 3, 4, 3
jjj: 4, 6, 6, 5
kjk: 5, 6
ghg: 5, 5, 6, 6
[/output]
[/test]
[test]
[input]
ghj 4 5 6 6 5
Tghj 5 6 6 5
fgmy 2 4 2 2
hgm 6 6 6 3
Tim 5 6 2 5
Tammy 2 4 6
Tim 5 6 6 5
Tammy 2 4 3 4 4
[/input]
[output]
fgmy: 2, 4, 2, 2
Tammy: 2, 4, 6, 2, 4, 3, 4, 4
Tim: 5, 6, 2, 5, 5, 6, 6, 5
ghj: 4, 5, 6, 6, 5
hgm: 6, 6, 6, 3
Tghj: 5, 6, 6, 5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Solution: School Grades

[code-task title="Scholl Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  let students = {};
  input.forEach((line) => {
    const [name, ...grades] = line.split(` `);
    if (!students[name]) {
      students[name] = grades.map(Number);
    } else {
      students[name] = students[name].concat(grades.map(Number));
    }
  });
  let sorted = Object.entries(students).sort((a, b) => {
    let averageA = a[1].reduce((acc, x) => acc + x) / a[1].length;
    let averageB = b[1].reduce((acc, x) => acc + x) / b[1].length;

    return averageA - averageB;
  });
  for (const kvp of sorted) {
    console.log(`${kvp[0]}: ${kvp[1].join(`, `)}`);
  }
}
```

[/code-editor]
[task-description]

# Description

Write a function to store students with all of their grades.

If a student appears more than once, add the new grades.

At the end print the students sorted by average grade.

The input comes as **array of strings**.

# Example

| **Input**                                                | **Output**     |
| -------------------------------------------------------- | -------------- |
| `['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']` | Tammy: 2,4,3   |
|                                                          | Lilly: 4,6,6,5 |
|                                                          | Tim: 5,6,6,6   |

[/task-description]
[tests]
[test]
[input]
Lilly 4 6 6 5
Tim 5 6
Tammy 2 4 3
Tim 6 6
[/input]
[output]
Tammy: 2, 4, 3
Lilly: 4, 6, 6, 5
Tim: 5, 6, 6, 6
[/output]
[/test]
[test]
[input]
ghjg 4 6 6 5
b 5 6 4
ghj 2 4 5 3
jjjjk 6 6 5 5
[/input]
[output]
ghj: 2, 4, 5, 3
b: 5, 6, 4
ghjg: 4, 6, 6, 5
jjjjk: 6, 6, 5, 5
[/output]
[/test]
[test]
[input]
fgh 4 6 6 5
fhg 5 6 5 6
hj 2 4 3
gg 6 6 6 6
[/input]
[output]
hj: 2, 4, 3
fgh: 4, 6, 6, 5
fhg: 5, 6, 5, 6
gg: 6, 6, 6, 6
[/output]
[/test]
[test]
[input]
Lilly 4 6 6 5
hhj 5 6 4 4 5
ghj 2 4 3
ghj 6 6
fg 5 6 5 6
dgfd 2 4 3
[/input]
[output]
dgfd: 2, 4, 3
ghj: 2, 4, 3, 6, 6
hhj: 5, 6, 4, 4, 5
Lilly: 4, 6, 6, 5
fg: 5, 6, 5, 6
[/output]
[/test]
[test]
[input]
jjj 4 6 6 5
kjk 5 6
ghg 5 5 6 6
dfdf 2 2 3 4 3
[/input]
[output]
dfdf: 2, 2, 3, 4, 3
jjj: 4, 6, 6, 5
kjk: 5, 6
ghg: 5, 5, 6, 6
[/output]
[/test]
[test]
[input]
ghj 4 5 6 6 5
Tghj 5 6 6 5
fgmy 2 4 2 2
hgm 6 6 6 3
Tim 5 6 2 5
Tammy 2 4 6
Tim 5 6 6 5
Tammy 2 4 3 4 4
[/input]
[output]
fgmy: 2, 4, 2, 2
Tammy: 2, 4, 6, 2, 4, 3, 4, 4
Tim: 5, 6, 2, 5, 5, 6, 6, 5
ghj: 4, 5, 6, 6, 5
hgm: 6, 6, 6, 3
Tghj: 5, 6, 6, 5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
