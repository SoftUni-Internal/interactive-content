
# Read From an Array

[slide]
# What is an Array? 

[vimeo-video]
[stream language="EN" videoId="487119167/37fe7bf771" default /]
[stream language="RO" videoId="487119167/37fe7bf771"  /]
[/video-vimeo]

We already know how to store single piece of data in one variable. Arrays allow us to store multiple pieces data, again, in only one variable. 

An array is a **collection** which is **ordered** and **changeable**.

An array is useful for **preserving** a sequence of **data**.

They are enclosed in **square brackets** and the values inside it are **separated by a comma**.

```js
let fruit = ["apple", "pear", "cherry"];
```

The values in an array are called elements. 

Imagine a train, which has wagons, and each wagon has passengers. 

Now imagine it as an array of integers where each element represents a wagon, and its value are the passengers. 

Take a look at this picture:

[image assetsSrc="list-example.png" /]

There are **7 wagons** (**elements**). Each has **passengers** (**a value**). `[3, 4, 10, 7, 5, 0, 6]`

The first element of the array is located at index `0`, and the last element of the array is located at index `length-1`. 

In this course we **will not** initialize an array, we will only accept arrays as a parameter to our function.

# Reading from Arrays

Each element in an array has its own **index** (**position**) by which it can be **accessed**.

**Indeces** in an array **always start from 0** and the **last index** is **equal** to the **number of elements minus 1**.

To access an array's element, we use **square brackets and its index.**

In this example each symbol is located at different index: 

```js live
let train = [3, 4, 10, 7, 5, 0, 6];

console.log(`First element is ${train[0]}`);
console.log(`Second element is ${train[1]}`);
console.log(`Third element is ${train[2]}`);
console.log(`Last element is ${train[train.length-1]}`);
```

In this example each symbol is located in different index:

- The **first** element of the array is located at **index zero** `train[0]`

- The **second** element of the array is located at **index one** `train[1]`

- The **third** element of the array is located at **index two** `train[2]`

- The **last** element of the array is located at `train[train.length-1]`

[/slide]
