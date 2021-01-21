# Reading and Printing a Matrix

[slide hideTitle]

# Reading a Matrix

- Reading a Matrix

```java
// Enter the length 
int rows = Integer.parseInt(scanner.nextLine());
int cols = Integer.parseInt(scanner.nextLine());

// Initializing a new matrix
int[][] matrix = new int[rows][cols];

// For-loop through the rows of the matrix
for (int row = 0; row < rows; row++) {

    // Read a new line with elements separated by space    
     String[] inputTokens = scanner.nextLine().split(" ");

    // For-loop through the columns
    for (int column = 0; column < cols; column++) {

    // Getting an element of the current row and column and assigning a value  
    matrix[row][column] = Integer.parseInt(inputTokens[column]);
    }
}
```

- First, we read the length of the rows and columns of the array
- Next, we initialize an integer array with the given row and column length
- Next, we create a for loop to traverse through the row of a one-dimensional array
- Next, we read the elements which will go inside of our two-dimensional.
- Next, we need an inner loop that will traverse through the column of a particular one-dimensional array
- At the end we set the actual value of our matrix


[/slide]

[slide hideTitle]
# Printing a Matrix

- Printing a Matrix

```java live
int[][] matrix = {{1, 2, 3, 4},
                  {5, 6, 7, 8}};

// Printing the matrix
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {

        //access the element
        int element = matrix[row][col];

        System.out.print(element + " ");
    }

    System.out.println();
}
```
This is a standard way to print a two-dimensional array.

We access each element of the array one by one and make them print separated by a space.
[/slide]

