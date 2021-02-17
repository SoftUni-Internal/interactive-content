# Sets

[slide hideTitle]
# What is a Set?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/EN/02.JS-Fundamentals-Associative-Arrays-32-33-what-is-a-set-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `Set` object lets you store **unique** values of any type, whether primitive values or object references.

`Set` objects are collections of values.

You can iterate through the elements of a set in their insertion order.

A value in a `Set` may only occur once.

It is unique to the set's collection.

To create a `Set`, use the constructor word `new Set()`.

In the example below, we have an array of numbers. 

Notice number 2 has been repeated two times.

Now, let us `console.log` the output to see the result.

All the repeating entries have been removed, so we are left with unique values only.

The result is `Set { 1, 2, 3, 4, 5 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set);
```

Use `.add()` method to add values. 

The result will be `Set { 1, 2, 3, 4, 5, 10 }`.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.add(10);
console.log(set);
```

Just like Maps, Sets have the`.has()` method. 

This method returns **true** or **false**.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set.has(1));
```

We can delete a value using the `.delete()` method. 

The output will be `Set { 2, 3, 4, 5 }`.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.delete(1);
console.log(set);
```

We can also delete all the elements in the Set using the `.clear()` method.

The resulting output will be `Set {}`.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.clear();
console.log(set);
```

Use the accessor property `.size` to get the size of a set.

The result will be equal to 5.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set.size);
```

[/slide]
