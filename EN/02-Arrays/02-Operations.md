# Operations

[slide hideTitle]
# Array Methods

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-13-14-Array-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[/slide]

[slide hideTitle]
# Usage

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-15-Usage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `includes()` - Returns **true** if the array contains the value placed in the brackets and "**false**" otherwise:

``` js live
let arr = [10, 20, 30];

console.log(arr.includes(20));
console.log(arr.includes(0));
```

- `join()` - Creates a string by **concatenating string representations of all elements**, using the specified in the brackets string as a separator:

``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```

- `push()` - appending an element at the end of the array:

``` js live
let arr = [10, 20, 30];
arr.push(40, 50);

console.log(arr);
```

- `toString()` - Converts all elements to strings via `String()`, concatenates them and returns the result:

``` js live
let arr = [10, 20, 30];

console.log(arr.toString());
```

More methods will be examined in the Arrays Advanced lesson. 

[/slide]
