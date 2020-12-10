# Returning Values

[slide]
# The Return Statement

[vimeo-video]
[stream language="EN" videoId="489373485/8c7c7e9e3c" default /]
[stream language="RO" videoId="489373485/8c7c7e9e3c"  /]
[/video-vimeo]


The `return` operator is used to return a value from inside a function.

Once a `return` operator is executed, **anything after it inside a function doesn't run.**

The directive `return` can be in any place of the function.

``` js live
function readFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

const fullName = readFullName("John","Smith");
console.log(fullName)
```

You can only use the `return` operator **inside a function.**

If you try to use it outside of a function, **it will throw an error.**

[/slide]

[slide]
# Using the Return Values

[vimeo-video]
[stream language="EN" videoId="489373490/e62d49a36f" default /]
[stream language="RO" videoId="489373490/e62d49a36f"  /]
[/video-vimeo]


Return value can be:

- Assigned to a variable

```js
const max = getMax(5, 10);
```

- Used in an expression

``` js
const total = getPrice() * quantity * 1.20;
```

- Passed to another function

``` js
multiply(getMax(5,10), 20);
```

[/slide]

[slide]
# Returning Values: Examples

[vimeo-video]
[stream language="EN" videoId="489373540/c9dcb0e5e4" default /]
[stream language="RO" videoId="489373540/c9dcb0e5e4"  /]
[/video-vimeo]


- Check if **array index** is valid:

``` js
function isValid(index, arr) {
  if (index < 0 || index >= arr.length) {
    return false;
  } else {
    return true;
  }
}
```

When we're working with arrays it's often used for checking if the **index is valid.**

The result of this function is **boolean**, it will return `true` if the index is inside of the boundary of the array, and return `false` if it's not.

- Does the student pass the exam:

```js
function pass(grade) {
  return grade >= 3;
}
```

[/slide]
[slide]
# Return statement Demo

[vimeo-video]
[stream language="EN" videoId="489373875/3db9f493f6" default /]
[stream language="RO" videoId="489373875/3db9f493f6"  /]
[/video-vimeo]
[/slide]

[slide]
# Nested Functions

[vimeo-video]
[stream language="EN" videoId="489373544/4848ba2e9e" default /]
[stream language="RO" videoId="489373544/4848ba2e9e"  /]
[/video-vimeo]


With a nested function, **the inner function** operates within the scope of the outer function.

The inner fuction **can access** the outer function's variables and arguments.

**BUT outer function does not have access to the inner function's variables**, nor does the calling application have access to the inner function.

[image assetsSrc="Nested-Functions.png" /]

## Example

```js live
function swapElements(arr) {
  for (let i = 0; i < arr.length/2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  console.log(arr.join(' '));

  function swap(elements, i, j) {
    let temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
}

swapElements([1,2,3,4,5,6,7,8,9,10]);
```

In this example, we create a function `swapElements()`, which receives one argument. 

In the function body, we loop through the array and invoke another function `swap()`, to which we pass three arguments. 

This function does the actual swapping of the array's elements. 

[/slide]
