
[slide]

# Reading and Printing a Matrix

- Reading a Matrix
```java
// Enter rows and cols 
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

- Printing a Matrix
```java live
int[][] matrix = {{1, 2, 3, 4},
                  {5, 6, 7, 8}};

// Printing the matrix
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        int element = matrix[row][col];
        System.out.print(element + " ");
    }
    System.out.println();
}
```

[/slide]

