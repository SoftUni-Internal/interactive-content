[slide]
# Summary

[vimeo-video]
[stream language="EN" videoId="489372690/1982a43d5b" default /]
[stream language="RO" videoId="489372690/1982a43d5b"  /]
[/video-vimeo]


What we learned in this lesson: 

- Arrays are sequences of elements 

    - Their elements are numbered from `0` to `length-1 `

``` js live
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[numbers.length-1])
```

- We can create an array using this syntax: 
``` js 
let numbers = [1, 2, 3, 4, 5];
```
- We can access its elements by their index:

``` js 
let numbers = [1, 2, 3, 4, 5];
```
- Elements can be iterated over with a standard loop or a `for-of` loop 
``` js live
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```
[/slide]