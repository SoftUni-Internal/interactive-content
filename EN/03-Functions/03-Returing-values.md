# Returning Values

[slide hideTitle]
# The Return Statement

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-17-18-the-return-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


The **return** operator is used to return a value and end the execution of the function. 

Once the **return** operator is executed, **anything after it inside a function will not run.**

The **return** operator can be placed anywhere in the function. 

``` js live
function readFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = readFullName('John', 'Smith');
console.log(fullName)
```

You can only use the **return** operator **inside a function.**

If you try to use it outside of a function, **it will throw an error.**

[/slide]

[slide hideTitle]
# Using the Return Values

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-19-using-the-return-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


The returned value can be: 

- **Assigned** to a variable

```js
const max = getMax(5, 10);
```

- **Used in an expression**

``` js
const total = getPrice() * quantity * 1.20;
```

- **Passed to another function**

``` js
multiply(getMax(5,10), 20);
```

[/slide]

[slide hideTitle]
# Returning Values: Examples

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-20-returning-values-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


- Check if an **array index** is valid:

``` js live
function isValid(index, arr) {
  if (index < 0 || index >= arr.length) {
    return false;
  } else {
    return true;
  }
}

console.log(isValid(3, [1, 2, 3, 4, 5]));
```

When working with arrays such function is often used to check if an **index is valid.**

The result of this function is **boolean**, it will return true if the index is inside of the boundary of the array, and "**false**" if it is not.

- In this example, the student would pass the example if they get a grade higher than 3:

```js live
function pass(grade) {
  return grade >= 3;
}

console.log(pass(5.32))
```

[/slide]

[slide hideTitle]
# Return Statement Demo

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-the-return-statement-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[/slide]

[slide hideTitle]
# Nested Functions

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-21-22-nested-functions-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The nested function operates within the scope of the outer function. 

It can access the outer function's variables and arguments. 

However, **the outer function does not have access to the inner function's variables**, nor does the calling application have access to the inner function.

[image assetsSrc="js-fundamentals-1-adv-functions-1.png" /]

## Example

```js live
function swapElements(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  console.log(arr.join(' '));  

  function swap(elements, i, j) {
    let temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
}

swapElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

In this example, we create a function `swapElements()`, which receives one argument. 

In the function body, we loop through the array and invoke another function `swap()`, to which we pass three arguments. 

This function does the **actual swapping** of the array's elements. 

[/slide]
