# Arrow Functions

[slide hideTitle]
# What are Arrow Functions?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-27-28-arrow-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Arrow functions **=>** were introduced with [ECMAScript 6](https://en.wikipedia.org/wiki/ECMAScript) in 2015. 

With the new syntax we can often create more **concise** code. 

In some cases, translating multi-line callbacks to one-liners, thanks to features like the implicit return. 

Arrow functions cannot replace standard functions everywhere. 

There are some contexts in which we cannot use them, and we will see why.

## Examples

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
