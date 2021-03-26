# Multidimensional Arrays

[slide hideTitle]

# Definition 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-7-What-Is-Multidimensional-Array-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The arrays we have been using so far have only held one column of data.

But we can set up an array to hold more than one column.

These are called **multi-dimensional arrays**.

As an example, think of a spreadsheet with rows and columns.

If you have 6 rows and 5 columns then your spreadsheet can hold 30 numbers.

It might look like this:

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-1.png" /]


[/slide]

[slide hideTitle]

# Declaring and Creating Multidimensional Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-8-Declaring-And-Creating-Array-And-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Two of the **most used** multi-dimensional arrays are **two and three-dimensional array**, known as a `2D` and `3D` array. Anything above is rare.

- Creating Multidimensional Arrays using the `new` - keyword and specifying the size of at least one dimension:

```java 
int[][] intMatrix = new int[3][];
```
In this example, we declare an empty two-dimensional array of integers. We use `int[][]` to tell the compiler that we want a two-dimensional array.

Similarly to the one-dimensional array, we use the `new` keyword to allocate memory into the heap for our array. 

Notice that we need to provide a size for our multidimensional array and, in this case, our row will contain three elements.

By default, this array will contain only zeros.

```java
String[][][] stringCube = new String[5][5][5];
```

We can create a multidimensional array with any of the known data types.

Here we create a three-dimensional array of strings. 

[/slide]

[slide hideTitle]

# Creating and Initializing Multidimensional Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-9-Initializing-Multi-Array-And-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

-	We can create and initialize a two-dimensional array using curly brackets

- Creating and **Initializing** two-dimensional array with shortcut syntax, using curly brackets:

```java
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};
```

- **Initializing** two-dimensional array with a **for-loop**

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

[slide hideTitle]

# Accessing Elements

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-10-Accessing-Elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Elements in **two-dimensional arrays** are commonly referred by `x[i][j]` where `i` is **the row number** and the value of `j` is **the column number**.

The syntax is:
```java
int [][] array = new int [5][5];
array[0][0]  // the first element of the matrix
```

- Accessing an element:

```java live
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};

// the third element of the first row is 7
int element = matrix[1][2]; 
System.out.println(element);

```

- Updating a value on a specific location:

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
