# Map

[slide hideTitle]
# What is a Map?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-20-21-what-is-a-map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Map object holds key-value pairs and keeps the original **insertion order** of the keys. 

Both objects and primitive values may be used as either a key or a value.

A for-of loop returns an array of `[key, value]` for each iteration when used on a Map.

Pure JavaScript objects are like Maps in that they both let you:

1. Assign values to keys
2. Detect whether something is stored in a key
3. Delete keys
[/slide]

[slide hideTitle]
# Adding/Accessing Elements

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-22-adding-and-accessing-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To add a key-value pair to a map, use the `.set()` method.

In the example below, we create a map using the keyword `new Map()`.

Then, by using the `.set()` method we add a key and a value to the map.

The first parameter is the key and the second parameter is the value:

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map);
```

To get the value of a given key, use the `.get()` method:

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map.get(2));
```

The `.size` accessor property returns the number of elements in a Map object:

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map.size);
```
[/slide]

[slide hideTitle]
# Contains/Delete

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-23-contains-and-delete-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To find out if a map has a given key, use the `.has()` method. 

The output should be **true** or **false** because the `.has()` method returns a **boolean**.

In this case, it is **true**.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map.has(1));
```

To remove a key-value pair, use the `.delete()` method.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.delete(1);
console.log(map);
```

And finally, use the `.clear()` method to remove all the key-value pairs in the map.

The output from this example is 0 after clearing out all the elements in the Map object.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.clear();
console.log(map.size);
```
[/slide]

[slide hideTitle]
# Iterators

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-24-iterators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

By using iterators, we can return an array containing `[key-value]` pairs.

To return an array of `[key-value]` pair use the `.entries()` method on a map object.

The output will be an array of arrays `[ [ 1, 'one' ], [ 2, 'two' ] ]`

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
let entries = Array.from(map.entries());
console.log(entries);
```

To return an array of keys, use `.keys()`.

The output will be `[1, 2]`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
let entries = Array.from(map.keys());
console.log(entries);
```

To return an array of values, use `.values()`.

The output will be `[ 'one', 'two' ]`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
let entries = Array.from(map.values());
console.log(entries);
```

[/slide]

[slide hideTitle]
# Iterating a Map

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-25-iterating-a-map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To print a map, simply use a **for-of** loop.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
for (let [key, value] of map.entries()) {
    console.log(`${key} => ${value}`);
}
```

To print the keys, use `.keys()`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
for (let key of map.keys()) {
  console.log(key);
}
```

To print the values, use `.values()`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
for (let values of map.values()) {
  console.log(values);
}
```

[/slide]

[slide hideTitle]

# Problem with Solution: Storage

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-28-solution-storage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Storage" taskId="js-fundamentals-pt2-Associative-Arrays-Storage" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function storage(input) {
  // Type your code here
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

Write a function that takes a certain number of **items** and their **quantity**.

If the same item appears **more than once**, **add the new amount** to the **existing one**.

In the end, print all the items and their amount without sorting them.

The input comes as an **array of strings**.

Use a "**Map()**" method.

## Example

| **Input** | **Output** |
| --- | --- |
| storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']) | tomatoes \-\> 10 |
|                                                          | coffee \-\> 45   |
|                                                          | olives \-\> 100  |

[/task-description]
[tests]
[test open]
[input]
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])
[/input]
[output]
tomatoes \-\> 10
coffee \-\> 45
olives \-\> 100
[/output]
[/test]
[test]
[input]
storage(['tomatoes 50', 'tomatoes 61', 'ghj 115', 'ghj 40'])
[/input]
[output]
tomatoes \-\> 111
ghj \-\> 155
[/output]
[/test]
[test]
[input]
storage(['aa 45', 'aa 5', 'olives 140', 'aa 30'])
[/input]
[output]
aa \-\> 80
olives \-\> 140
[/output]
[/test]
[test]
[input]
storage(['jkl 150', 'jkl 6', 'ohjves 160', 'chhee 41'])
[/input]
[output]
jkl \-\> 156
ohjves \-\> 160
chhee \-\> 41
[/output]
[/test]
[test]
[input]
storage(['tomoes 120', 'coe 566', 'oli 6440', 'ee 10'])
[/input]
[output]
tomoes \-\> 120
coe \-\> 566
oli \-\> 6440
ee \-\> 10
[/output]
[/test]
[test]
[input]
storage(['tomjjes 1120', 'clfee 5', 'o;ves 4600', 'coknfee 350'])
[/input]
[output]
tomjjes \-\> 1120
clfee \-\> 5
o;ves \-\> 4600
coknfee \-\> 350
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Map Sorting

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-28-map-sorting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To **sort** a Map, first transform it into an **array**, then use the `sort()` method.

Here we have a compare function which defines the sort order. 

First element is `a[1]` and second element is `b[1]`. 

Then the elements are compared.

If we use `a[1] - b[1]` we will sort in ascending order.

If we use `b[1] - a[1]` we will sort in descending order.

The `kvp` variable is our `[key-value]` pair.

`[kvp[0]]` is the **key** and `[kvp[1]]` is the **value**.

```js live
let map = new Map();
map.set('one', 1);
map.set('eight', 8);
map.set('two', 2);
let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
for (let kvp of sorted) {
  console.log(`${kvp[0]} -> ${kvp[1]}`);
}
```

[/slide]

[slide hideTitle]

# Problem with Solution: School Grades

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-29-solution-school-grades-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="School Grades" taskId="js-fundamentals-pt2-Associative-Arrays-School-Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function grades(input) {
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

Write a function which stores students with all of their grades.

If a student appears more than once, add the new grades.

In the end print the students **sorted** by **average grade**.

The input comes as an **array of strings**.

## Example

| **Input** | **Output** |
| --- | --- |
| grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']) | Tammy\: 2\,4\,3    |
|                                                          | Lilly\: 4\,6\,6\,5 |
|                                                          | Tim\: 5\,6\,6\,6   |

[/task-description]
[tests]
[test open]
[input]
grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])
[/input]
[output]
Tammy\: 2\, 4\, 3
Lilly\: 4\, 6\, 6\, 5
Tim\: 5\, 6\, 6\, 6
[/output]
[/test]
[test]
[input]
grades(['ghjg 4 6 6 5', 'b 5 6 4', 'ghj 2 4 5 3', 'jjjjk 6 6 5 5'])
[/input]
[output]
ghj\: 2\, 4\, 5\, 3
b\: 5\, 6\, 4
ghjg\: 4\, 6\, 6\, 5
jjjjk\: 6\, 6\, 5\, 5
[/output]
[/test]
[test]
[input]
grades(['fgh 4 6 6 5', 'fhg 5 6 5 6', 'hj 2 4 3', 'gg 6 6 6 6'])
[/input]
[output]
hj\: 2\, 4\, 3
fgh\: 4\, 6\, 6\, 5
fhg\: 5\, 6\, 5\, 6
gg\: 6\, 6\, 6\, 6
[/output]
[/test]
[test]
[input]
grades(['Lilly 4 6 6 5', 'hhj 5 6 4 4 5', 'ghj 2 4 3', 'ghj 6 6', 'fg 5 6 5 6', 'dgfd 2 4 3'])
[/input]
[output]
dgfd\: 2\, 4\, 3
ghj\: 2\, 4\, 3\, 6\, 6
hhj\: 5\, 6\, 4\, 4\, 5
Lilly\: 4\, 6\, 6\, 5
fg\: 5\, 6\, 5\, 6
[/output]
[/test]
[test]
[input]
grades(['jjj 4 6 6 5', 'kjk 5 6', 'ghg 5 5 6 6', 'dfdf 2 2 3 4 3'])
[/input]
[output]
dfdf\: 2\, 2\, 3\, 4\, 3
jjj\: 4\, 6\, 6\, 5
kjk\: 5\, 6
ghg\: 5\, 5\, 6\, 6
[/output]
[/test]
[test]
[input]
grades(['ghj 4 5 6 6 5', 'Tghj 5 6 6 5', 'fgmy 2 4 2 2', 'hgm 6 6 6 3', 'Tim 5 6 2 5', 'Tammy 2 4 6', 'Tim 5 6 6 5', 'Tammy 2 4 3 4 4'])
[/input]
[output]
fgmy\: 2\, 4\, 2\, 2
Tammy\: 2\, 4\, 6\, 2\, 4\, 3\, 4\, 4
Tim\: 5\, 6\, 2\, 5\, 5\, 6\, 6\, 5
ghj\: 4\, 5\, 6\, 6\, 5
hgm\: 6\, 6\, 6\, 3
Tghj\: 5\, 6\, 6\, 5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

