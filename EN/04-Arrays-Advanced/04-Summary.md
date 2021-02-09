[slide hideTitle]
# Summary

[vimeo-video]
[stream language="EN" videoId="489374453/e99926cfd6" default /]
[stream language="RO" videoId="489374453/e99926cfd6"  /]
[/video-vimeo]

# In this lesson you learned:

- Arrays in JavaScript have a lot of built\-in methods

```js live
let numbers = [3, 8, 15, 22];

numbers.push(30); // Appends 30 to the array

console.log(numbers);
```

- We can add, remove, or insert elements at runtime
  
```js live
let people = ['Paul', 'Mary', 'John'];

let firstEl = people.shift(); // Removing the element at index zero

console.log(people);
console.log(firstEl);
```

- Some methods mutate the array

```js live
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(days.join(', '));

let weekend = days.splice(5); // Creates a new array and modifies the original

console.log(days.join(', '));
console.log(weekend.join(', '));
```

- We can sort an array with a compare function

```js live
let ages = [25, 15, 82, 39];
ages.sort((a, b) => a - b);

console.log(ages.join(', '));
```

## In the next lesson, you will learn:

- How to solve a practical exam

[/slide]
