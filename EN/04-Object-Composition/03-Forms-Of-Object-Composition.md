# Forms Of Object Composition

[slide hideTitle]

# Aggregation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-13-14-aggregation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We have Aggregation when an object is formed from an enumerable collection of subobjects. 

This is an object which contains other objects. 

Each subobject keeps its own reference identity, such that it could be destructured from the aggregation without information loss.

When to use it:

Whenever there are collections of objects which need to share common operations, such as tables, stacks, queues, trees, graphs, state machines, or the composite pattern (when you want a single item to share the same interface as many items).

In the example below, we have an array of objects. To apply aggregation we will use the `.reduce()` method.

The `.reduce()` method accepts 4 parameters. 

First is `acc`, which will be an empty array before the first iteration. 

On each iteration, we will push an object from `dataArray` to the `acc` or we will update the object if it already exists in the `acc`.

The second is `curr`, which is the current element of the `dataArray` at a given index.

The third parameter is `index`, which is the `dataArray` index.

And the last parameter is the array itself - the `dataArray`.

With the expression `let same = acc.find(e => e.id === curr.id);` we check if we have an object in the `acc` with `id` equal to the `curr.id` object.

If the statement is **false** we push the current element to the `acc`, otherwise we update the property `score` of the object and we return the `acc` on each iteration.


```js live
let dataArray = [ { id: "a", score: 1 }, { id: "b", score: 2 },
{ id: "c", score: 5 }, { id: "a", score: 3 }, { id: "c", score: 2 }, ];
let result = dataArray.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.id === curr.id);
    if (!same) {
        acc.push(curr);
        } else {
            same.score += curr.score;
        }
        return acc;
}, []);
console.log(result);
```

[/slide]

[slide hideTitle]

# Aggregation Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-15-aggregation-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
let dataArray = [{ id: "a", score: 1 }, { id: "b", score: 2 },
{ id: "c", score: 5 }, { id: "a", score: 3 }, { id: "c", score: 2 },];
let res1 = dataArray.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.id === curr.id);
    if (!same) {
        acc.push(curr);
    } else {
        same.score += curr.score;
    }
    return acc;
}, []);
console.log(res1);
```

[/slide]

[slide hideTitle]

# Concatenation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-16-concatenation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Concatenation is when an object is formed by adding new properties to an existing object.

When to use: 

It would be useful to progressively assemble data structures at runtime, like merging JSON objects, hydrating application state from multiple sources, creating updates to the immutable state by merging the previous state with new data.

We will use the `.reduce()` method again. You can see from the result of the example that wonder matters here.

We use the spread syntax to get the elements of the `obj` array. If we do not use the spread syntax in front of the `curr` variable we will only get the last element `{ hairColor: "brown" }`.

```js live
const obj = [
    { name: 'Peter', age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 190 },
    { age: 30 },
    { name: "Marcus" },
    { height: 180 },
    { hairColor: "brown" }
];
const concatenate = (acc, curr) => ({...acc, ...curr});
const result = obj.reduce(concatenate, {});
console.log(result);
```

[/slide]

[slide hideTitle]

# Concatenation Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-17-concatenation-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const objs = [
    { name: 'Peter', age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 }
];
const concatenate = (a, o) => ({ ...a, ...o });
const c = objs.reduce(concatenate, {});
console.log(c);
```

[/slide]

[slide hideTitle]

# Delegation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-18-delegation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Delegation is when an object forwards or delegates to another object.

Delegation is commonly used to imitate class inheritance in JavaScript.

JavaScript's built-in types use delegation to forward built-in method calls up the prototype chain. 

`[].map()` delegates to `Array.prototype.map()`, `obj.hasOwnProperty()` delegates to `Object.prototype.hasOwnProperty()` and so on.

In the example below, we use the `.reduceRight()` method.

First create a function `delegate`, which will have two parameters.

The `acc` will be our result after the execution of the `reduceRight()` method.

The `curr` will be the first element from the `obj` array.

So we create an empty object first using the expression `Object.create(acc)`.

After that we assign `curr`, which is the current element in our `obj` array to `acc` variable using `Object.assign()` method.

Then using `.reduceRight()` we start from the last element in the `obj` array.

```js live
const obj = [
    { name: 'Peter', age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 }
];
const delegate = (acc, curr) => Object.assign(Object.create(acc), curr);
const result = obj.reduceRight(delegate, {});
console.log(result);
console.log(result.height);
```

[/slide]

[slide hideTitle]

# Delegation Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-19-delegation-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const objs = [
    { name: 'Peter', age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 }
];
const concatenate = (a, o) => ({ ...a, ...o });
const c = objs.reduce(concatenate, {});
console.log(c);// { name: 'Steven', age: 22, height: 180 }
```
[/slide]