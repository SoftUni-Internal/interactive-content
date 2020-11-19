# Operations

[slide]
# Array Methods

Some operations that work with Arrays require only the bare minimum: values must only be Array-like.

An Array-like value is an object with the following properties:

- `.length`: holds the length of the Array-like object.

- `[0]`: holds the element at `index 0` (etc.).

Note that if you use numbers as property names, they are always coerced to strings. 

Therefore, `[0]` retrieves the value of the property whose key is `0`.

They have built-in properties and methods, like length.

Methods are written with a dot after the variable name:

``` js live
let nums = [10, 20, 30];
console.log(nums.length);
```

Other examples if methods:

- `push()`: appending an element is via the Array method

``` js live
let arr = [10, 20, 30];
arr.push(40, 50);

console.log(arr);
```

- `includes()`: Returns `true` if the receiver has an element whose value is `searchElement` and `false`, otherwise

``` js live
let arr = [10, 20, 30];
console.log(arr.includes(20));
console.log(arr.includes(0));
```

- `toString()`: Converts all elements to strings via `String()`, concatenates them and returns the result

``` js live
let arr = [10, 20, 30];

console.log(arr.toString());
```

- `join()`: Creates a string by concatenating string representations of all elements, separating them with separator.

``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```

More methods will be examined in the Arrays Advanced course. 

[/slide]
