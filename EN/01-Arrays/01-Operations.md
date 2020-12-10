# Operations

[slide]
# Array Methods

Some operations that work with Arrays could also function with Array-like values. 

An Array-like value is an object that holds the following properties: 

- `.length`: holds the length of the Array-like object.

- `[0]`: holds the element at `index 0` (etc.).

Note that if you use numbers to address properties, they are always coerced to strings.

Therefore, `[0]` retrieves the value of the property whose key is `0`. 

Arrays have built-in properties (methods), one of which is `.length`. 

Methods are called by placing a dot after the variable name: 

``` js live
let nums = [10, 20, 30];
console.log(nums.length);
```

Other examples of methods:

- `push()`: appending an element at the end of the array 

``` js live
let arr = [10, 20, 30];
arr.push(40, 50);

console.log(arr);
```

- `includes()`: Returns `true` if the array contains the value placed in the brackets  searchElement and `false`, otherwise

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

- `join()`: Creates a string by **concatenating string representations of all elements**, using the specified in the brackets string as a separator

``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```

More methods will be examined in the Arrays Advanced course. 

[/slide]
