# Forms Of Object Composition

[slide]

# Aggregation

We have Aggregation when an object is formed from an enumerable collection of subobjects. 

This is an object which contains other objects. 

Each subobject keeps its own reference identity, such that it could be destructured from the aggregation without information loss.

When to use it:

Whenever there are collections of objects which need to share common operations, such as iterables, stacks, queues, trees, graphs, state machines, or the composite pattern (when you want a single item to share the same interface as many items).

In the example below we have an array of objects. To applay aggregation we will use `.reduce()` method.

The `.reduce()` method accepts 4 parameters. 

First is `acc`, which will be an empty array before the first iteration. 

On each iteration we will push an object from `dataArray` to the `acc` or we will update the object if it already exists in the `acc`.

Second is `curr`, which is the current element of the `dataArray` at a given index.

Third parameter is `index`, which is the `dataArray` index.

And last parameter is the array itself - the `dataArray`.

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

[slide]

# Concatenation

Concatenation is when an object is formed by adding new properties to an existing object.

When to use: 

It would be useful to progressively assemble data structures at runtime, like merging JSON objects, hydrating application state from multiple sources, creating updates to immutable state by merging previous state with new data.

We will use the `.reduce()` method again. You can see from the result of the example that worder really matters here.

We use the spread syntax to get the elements of the `obj` array. If we dont use the spread syntax in front of `curr` variable we will only get the last element `{ hairColor: "brown" }`.

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

[slide]

# Delegation

Delegation is when an object forwards or delegates to another object.

Delegation is commonly used to imitate class inheritance in JavaScript.

JavaScript's built-in types use delegation to forward built-in method calls up the prototype chain. 

`[].map()` delegates to `Array.prototype.map()`, `obj.hasOwnProperty()` delegates to `Object.prototype.hasOwnProperty()` and so on.

In the example below we use the `.reduceRight()` method.

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