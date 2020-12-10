# Arrow Functions

[slide]
# Arrow Functions

[vimeo-video]
[stream language="EN" videoId="489373607/d385422a18" default /]
[stream language="RO" videoId="489373607/d385422a18"  /]
[/video-vimeo]

Arrow functions `=>` were introduced with [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). 

With the new syntax we can often obtain more concise code.

In some cases translating multi-line callbacks to one-liners, thanks to features like the implicit return.

Arrow functions cannot replace standard functions everywhere.

There are some contexts where we cannot use them, and we will see why.

Example:

- Function syntax:

```js live
let increment = function(x) {
  return x + 1;
}

console.log(increment(5));  
```

- Arrow function syntax:

``` js live
let increment = x => x + 1;

console.log(increment(5));  
```

- Arrow function with multiple parameters:

```js live
let sum = (a, b) => a + b;

console.log(sum(5, 6));  
```

[/slide]
