# What is Multidimensional Array?

[slide]

# What is Multidimensional Array?

The arrays you have been using so far have only held one column of data.

But you can set up an array to hold more than one column.

These are called **multi-dimensional arrays**.

As an example, think of a spreadsheet with rows and columns.

If you have 6 rows and 5 columns then your spreadsheet can hold 30 numbers.

It might look like this:

[image assetsSrc="matrices-example(2).png" /]



[/slide]

[slide hideTitle]

# Creating and Initializing Multidimensional Arrays



### Creating Multidimensional Arrays

Two of the **most used** multi-dimensional arrays are **two and three-dimensional array**, known as `2D` and `3D` array, anything above is rare.

- Creating Multidimensional Arrays using `new` - keyword and specifying the size of at least one dimension

```java 
int[][] intMatrix = new int[3][];

String[][][] stringCube = new String[5][5][5];
```


### Initializing Multidimensional Arrays

- Creating and **Initializing** two-dimensional array with shortcut syntax
```java
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};
```
- **Initializing** two-dimensional array with `for-loop`
```java
int[][] matrix = new int[2][4];

int elementValue = 1;

for (int i = 0; i < 2; i++) {
    
    for (int j = 0; j < 4; j++) {
      matrix[i][j] = elementValue;
      elementValue++;
    }
}
```
[/slide]

[slide]

# Manipulating a Matrix

- Accessing Elements of `2D Array`

Elements in **two-dimensional arrays** are commonly referred by `x[i][j]` where `i` is **the row number** and `j` is **the column number**.

Syntax is:
```java
int [][] array = new int [5][5];
array[0][0]  // the first element of the matrix
```

- Getting Element Value:

```java live
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};

// the second element of the first row is 7
int element = matrix[1][2]; 
System.out.println(element);

```


- Setting Element Value:

```java 
int[][] matrix = {
        {1, 2, 3, 4}, // row 0 values
        {5, 6, 7, 8}  // row 1 values
};
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {

        // setting all elements values to 1
        matrix[row][col] = 1;
    }
}
```

[/slide]