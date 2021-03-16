# Reading and Printing a Multidimensional Array

[slide hideTitle]

# Reading and Printing a Multidimensional Array

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-11-Reading-A-Matrix-Example-And-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
- Next, we initialize an integer array with the given row and column values as the length
- Next, we create a **for-loop** to traverse through the row of a one-dimensional array
- Next, we read the elements which will go inside of our two-dimensional
- Next, we need an inner loop that will traverse through the column of a particular one-dimensional array
- At the end we set the actual value of our matrix

This is one of the standard ways to print a two-dimensional array.

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

We access each element of the array one by one and print them separated by a space.
[/slide]

[slide hideTitle]
# Problem with Solution: Compare Matrices

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-12-Problem-And-Solution-Compare-Matrices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Compare Matrices" taskId="java-advanced-lab-multidimensional-arrays-Compare-Matrices" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that reads two integer matrices, "2D arrays", from the console and compares them element by element. 

For better code reusability, you could do the comparison in a method, which returns **true** if they are equal and **false** if they are not.

Each matrix definition on the console will contain a line with a positive integer number `R` - the number of rows in the matrix and `C` - the number of columns - followed by `R` lines containing the `C` numbers, separated by spaces - **each line will have an equal amount of numbers**.

The matrices will have at most **10** rows and most **10** columns.

Print **equal** if the matrices match, and **not equal** if they do not match.


## Examples
| **Input** | **Output** |
| --- | --- |
| 2 3 | equal |
| 1 2 3 |  |
| 2 1 3 |  |
| 2 3 |  |
| 1 2 3 |  |
| 2 1 3 |  |

| **Input** | **Output** |
| --- | --- |
| 2 3 | not equal |
| 1 2 3 |  |
| 4 5 6 |  |
| 2 2 |  |
| 1 3 |  |
| 4 5 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 3
1 2 3
2 1 3
2 3
1 2 3
2 1 3
[/input]
[output]
equal
[/output]
[/test]
[test open]
[input]
2 3
1 2 3
4 5 6
2 2
1 3
4 5
[/input]
[output]
not equal
[/output]
[/test]
[test]
[input]
1 3
1 2 3
1 3
1 2 3
[/input]
[output]
equal
[/output]
[/test]
[test]
[input]
4 1
1
11
21
31
4 1
1
11
21
31
[/input]
[output]
equal
[/output]
[/test]
[test]
[input]
2 3
1 2 3
4 5 6
2 2
1 2
3 4
[/input]
[output]
not equal
[/output]
[/test]
[test]
[input]
3 1
1
2
3
4 1
1
2
3
5
[/input]
[output]
not equal
[/output]
[/test]
[test]
[input]
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
[/input]
[output]
equal
[/output]
[/test]
[test]
[input]
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 4
[/input]
[output]
not equal
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Positions Of

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-16-Problem-And-Solution-Position-Of-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Positions of" taskId="java-advanced-lab-multidimensional-arrays-Positions-Of" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that reads a **matrix of integers from the console**, then a number and prints all the positions at which that number appears in the matrix.

The matrix definition on the console will contain a line with two **positive integer numbers** `R` and `C` - the number of rows and columns in the matrix, followed by `R` lines, each containing `C`, numbers (**separated by spaces**), representing each row of the matrix.

The number which you will need to find the positions of, will be entered on a single line after the matrix.

You should print each position on a single line. First, print the row, then the column at which the number appears.

If the number does not appear in the matrix, print `not found`.


## Examples
| **Input** | **Output** |
| --- | --- |
| 2 3 | 0 1 |
| 1 2 3 | 1 1 |
| 4 2 2 | 1 2 |
| 2 |  |

| **Input** | **Output** |
| --- | --- |
| 2 3 | not found |
| 1 -2 -3 |  |
| 4 -5 6 |  |
| 5 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 3
1 2 3
4 2 2
2
[/input]
[output]
0 1
1 1
1 2
[/output]
[/test]
[test open]
[input]
2 3
1 -2 -3
4 -5 6
5
[/input]
[output]
not found
[/output]
[/test]
[test]
[input]
2 3
1 2 3
4 5 6
3
[/input]
[output]
0 2
[/output]
[/test]
[test]
[input]
2 2
1 2
3 4
13
[/input]
[output]
not found
[/output]
[/test]
[test]
[input]
5 3
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
1
[/input]
[output]
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
3 0
3 1
3 2
4 0
4 1
4 2
[/output]
[/test]
[test]
[input]
4 4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
4
[/input]
[output]
0 3
1 3
2 3
3 3
[/output]
[/test]
[test]
[input]
4 4
1 1 1 1
1 2 2 1
1 2 2 1
1 1 1 1
2
[/input]
[output]
1 1
1 2
2 1
2 2
[/output]
[/test]
[test]
[input]
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
13
[/input]
[output]
not found
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Sum of All Elements of a Matrix

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-18-Problem-And-Solution-Sum-Of-All-Elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of All Elements of Matrix" taskId="java-advanced-lab-multidimensional-arrays-Sum-of-All-Elements-of-Matrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that **reads a matrix from the console and prints**:
   - The count of rows
   - The count of columns
   - The sum of all of the elements in the matrix's elements

On the **first line**, you will get the **dimensions** of the matrix, rows and columns **separated with a comma and space: ", "**. 

On the **next lines**, you will be receiving the elements for each row **separated with a comma and space**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 3, 6 | 3 |
| 7, 1, 3, 3, 2, 1 | 6 |
| 1, 3, 9, 8, 5, 6 | 76 |
| 4, 6, 7, 9, 1, 0 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3, 6
7, 1, 3, 3, 2, 1
1, 3, 9, 8, 5, 6
4, 6, 7, 9, 1, 0
[/input]
[output]
3
6
76
[/output]
[/test]
[test open]
[input]
2, 4
10, 11, 12, 13
14, 15, 16, 17
[/input]
[output]
2
4
108
[/output]
[/test]
[test]
[input]
5, 4
0, 1, 2, 3
4, 5, 6, 7
8, 9, 10, 11
12, 13, 14, 15
16, 17, 18, 19
[/input]
[output]
5
4
190
[/output]
[/test]
[test]
[input]
5, 4
0, -1, 2, 3
4, 5, -6, 7
8, 9, 10, 11
12, -13, 14, 15
16, 17, 18, -19
[/input]
[output]
5
4
112
[/output]
[/test]
[test]
[input]
1, 4
0, -1, 2, 3
[/input]
[output]
1
4
4
[/output]
[/test]
[test]
[input]
5, 1
0
4
8
12
16
[/input]
[output]
5
1
40
[/output]
[/test]
[test]
[input]
5, 4
0, -100, 2, 3
4, 5, -6000, 7
8, 9, 10, 11
12, -13, 14, 15
16, 1700, 18, -19
[/input]
[output]
5
4
-4298
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem with Solution: Maximum Sum of 2X2 Submatrix

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-20-Problem-And-Solution-Maximum-Sum-Of-2x2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Maximum Sum of 2X2 Submatrix" taskId="java-advanced-lab-multidimensional-arrays-Maximum-Sum-of-2X2-Submatrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that **reads a matrix from the console**.

Find the biggest sum of a **2x2 submatrix**.

**Print the submatrix and its sum.**

On the **first line**, you will receive the **dimensions** of the matrix `rows` and `columns` **separated with a comma and space**.

On the **next lines**, you will be receiving the elements for each row, **separated with a comma and space: ", "**.


## Examples
| **Input** | **Output** |
| --- | --- |
| 3, 6 | 9 8 |
| 7, 1, 3, 3, 2, 1 | 7 9 |
| 1, 3, 9, 8, 5, 6 | 33 |
| 4, 6, 7, 9, 1, 0 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3, 6
7, 1, 3, 3, 2, 1
1, 3, 9, 8, 5, 6
4, 6, 7, 9, 1, 0
[/input]
[output]
9 8
7 9
33
[/output]
[/test]
[test open]
[input]
2, 4
10, 11, 12, 13
14, 15, 16, 17
[/input]
[output]
12 13
16 17
58
[/output]
[/test]
[test]
[input]
5, 4
0, 1, 2, 3
4, -5, 6, 7
8, 9, 10, -11
12, -13, 14, 15
16, 17, 18, -19
[/input]
[output]
-13 14
17 18
36
[/output]
[/test]
[test]
[input]
2, 2
0, -1
4, 5
[/input]
[output]
0 -1
4 5
8
[/output]
[/test]
[test]
[input]
4, 5
20, 18, 22, 20, 16
18, 20, 18, 21, 20
16, 18, 16, 20, 24
25, 24, 22, 24, 25
[/input]
[output]
20 24
24 25
93
[/output]
[/test]
[test]
[input]
3, 3
0, 0, 0
0, 1, 0
0, 0, 0
[/input]
[output]
0 0
0 1
1
[/output]
[/test]
[test]
[input]
5, 4
0, -100, 2, 3
4, 5, -6000, 7
8, 9, 10, 11
12, -13, 14, 15
16, 1700, 18, -19
[/input]
[output]
-13 14
1700 18
1719
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



