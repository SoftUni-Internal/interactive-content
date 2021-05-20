
# Nested Arrays

[slide hideTitle]

# Nested Arrays in JavaScript

The arrays we have been using so far have only held one column of data.

But we can set up an array to hold more than one column, called **multi-dimensional arrays** or matrices.

As an example, think of a spreadsheet with rows and columns.

If you have 6 rows and 5 columns then your spreadsheet can hold 30 numbers, which is a classical example of a matrix.

It might look like this:
[image assetsSrc="Java-Advanced-Multidimensional-Arrays.png" /]

There is also another type of **multi-dimensional arrays**, called a jagged array, where every row has a different number of elements:

[image assetsSrc="java-js-adv-arrays-03.png" /]


In this example, there are an array of four arrays and each row has a different number of elements.

JavaScript representation of this example is:

```js live
let arr = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];


console.log(arr[2][0])
```

[/slide]

[slide hideTitle]

# Looping Through a Nested Array

**Example:**

```js live
let arr = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

arr.forEach(printRow);

function printRow(row){
    console.log(row);
    row.forEach(el => console.log(el));
}
```
A matrix can be print using forEach loop and pass as an argument a function that receives the current row. 

Another forEach is used to iterate through every element from the row, and print it to the console.

[/slide]

[slide hideTitle]

# Problem: Diagonal Sums

[/slide]