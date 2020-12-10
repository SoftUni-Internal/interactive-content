# Sets

[slide]

# What is a Set?

The Set object lets you store **unique** values of any type, whether primitive values or object references.

Set objects are collections of values. You can iterate through the elements of a set in their insertion order.

A value in a Set may only occur once. It is unique to the Set's collection.

To create a set use the constructor word `new Set()`.

In the example below we have an array of numbers. Notice number 2 has been repeated two times!

Now let us `console.log` the output to see the result. All the repeating entries have been removed, so we are left with unique values only.

The result is `Set { 1, 2, 3, 4, 5 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set);
```

Use `.add()` method to add values. Result would be `Set { 1, 2, 3, 4, 5, 10 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.add(10);
console.log(set);
```

Just like Maps Sets have the`.has()` method. This method returns **true** or **false**.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set.has(1));
```

We can delete a value. Use the `.delete()`. The result will be `Set { 2, 3, 4, 5 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.delete(1);
console.log(set);
```

We can also delete all the elements in the Set. Use the `.clear()` method.

The result will be `Set {}`.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.clear();
console.log(set);
```

Use the accessor `.size` to get the size of a set.

Result will be 5.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set.size);
```

[/slide]
