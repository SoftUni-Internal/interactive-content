# Problems

[slide]
# Problem: Compare Matrices
[code-task title="Compare Matrices" taskId="e13fd83f-0adb-47b0-b590-e27920a40259" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads two integer matrices - `2D arrays` from the console and compares them element by element. 

For better code reusability, you could do the comparison in a method, which returns **true** if they are equal and **false** if not.

Each matrix definition on the console will contain a line with a positive integer number `R` – the number of rows in the matrix and `C` – the number of columns – followed by `R` lines containing the `C` numbers, separated by spaces - **each line will have an equal amount of numbers**.

The matrices will have at most **10** rows and at most **10** columns.

Print **equal** if the matrices match, and **not equal** if they don’t match.


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

[slide]
# Solution: Compare Matrices
[code-task title="Compare Matrices" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);

      int[] firstMatrixDimensions = Arrays.stream(scanner.nextLine().split("\\s+"))
              .mapToInt(Integer::parseInt).toArray();

      int[][] firstMatrix = initializeMatrix(scanner, firstMatrixDimensions);

      int[] secondMatrixDimensions = Arrays.stream(scanner.nextLine().split("\\s+"))
              .mapToInt(Integer::parseInt).toArray();

      int[][] secondMatrix = initializeMatrix(scanner, secondMatrixDimensions);

      String output;
      if (matricesAreEqual(firstMatrix, secondMatrix)) {
          output = "equal";
      } else {
          output = "not equal";
      }

      System.out.println(output);
    }

    private static int[][] initializeMatrix(Scanner scanner, int[] matrixDimensions) {

        int rows = matrixDimensions[0];
        int cols = matrixDimensions[1];

        int[][] matrix = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            int[] arr = Arrays.stream(scanner.nextLine()
                    .split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            matrix[i] = arr;
        }
        return matrix;
    }

    static boolean matricesAreEqual(int[][] firstMatrix, int[][] secondMatrix) {
        if (firstMatrix.length != secondMatrix.length) {
            return false;
        }
        for (int row = 0; row < firstMatrix.length; row++) {
            if (firstMatrix[row].length != secondMatrix[row].length) {
                return false;
            }

            for (int col = 0; col < firstMatrix[row].length; col++) {
                if (firstMatrix[row][col] != secondMatrix[row][col]) {
                    return false;
                }
            }
        }
        return true;
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that reads two integer matrices - `2D arrays` from the console and compares them element by element. 

For better code reusability, you could do the comparison in a method, which returns **true** if they are equal and **false** if not.

Each matrix definition on the console will contain a line with a positive integer number `R` – the number of rows in the matrix and `C` – the number of columns – followed by `R` lines containing the `C` numbers, separated by spaces - **each line will have an equal amount of numbers**

The matrices will have at most **10** rows and at most **10** columns.

Print **equal** if the matrices match, and **not equal** if they don’t match.


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

[slide]
# Problem: Positions Of
[code-task title="Positions of" taskId="3b2a4b78-bea2-4aac-b344-c5c029b566aa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a **matrix of integers from the console**, then a number and prints all the positions at which that number appears in the matrix.

The matrix definition on the console will contain a line with two **positive integer numbers** `R` and `C` – the number of rows and columns in the matrix – followed by `R` lines, each containing `C` numbers (**separated by spaces**), representing each row of the matrix.

The number you will need to find the positions of will be entered on a single line, after the matrix.

You should print each position on a single line – first print the row, then the column at which the number appears.
If the number does not appear in the matrix, print '**not found**'.


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

[slide]
# Solution: Positions Of
[code-task title="Positions of" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays.stream(scanner.nextLine().split("\\s+"))
              .mapToInt(Integer::parseInt).toArray();

        int[][] matrix = initializeMatrix(scanner, dimensions);

        int searchNumber = Integer.parseInt(scanner.nextLine());

        boolean isFound = false;

        for (int row = 0; row < matrix.length; row++) {

            for (int col = 0; col < matrix[row].length; col++) {

                if (matrix[row][col] == searchNumber) {
                    System.out.println(row + " " + col);
                    isFound = true;
                }
            }
        }
        if (!isFound) {
            System.out.println("not found");
        }
    }
    private static int[][] initializeMatrix(Scanner scanner, int[] matrixDimensions) {

        int rows = matrixDimensions[0];
        int cols = matrixDimensions[1];

        int[][] matrix = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            int[] arr = Arrays.stream(scanner.nextLine()
                    .split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            matrix[i] = arr;
        }
        return matrix;
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that reads a **matrix of integers from the console**, then a number and prints all the positions at which that number appears in the matrix.

The matrix definition on the console will contain a line with two **positive integer numbers** `R` and `C` – the number of rows and columns in the matrix – followed by `R` lines, each containing `C` numbers (**separated by spaces**), representing each row of the matrix.

The number you will need to find the positions of will be entered on a single line, after the matrix.

You should print each position on a single line – first print the row, then the column at which the number appears.
If the number does not appear in the matrix, print '**not found**'.


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

[slide]
# Problem: Sum of All Elements of Matrix
[code-task title="Sum of All Elements of Matrix" taskId="e74d7380-4bc4-4f7b-8f47-9f0c80e3c0ae" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **reads a matrix from the console and prints**:
   - The count of rows
   - The count of columns
   - The sum of all matrix’s elements

On the **first line**, you will get the **dimensions** of the matrix `rows` and `columns` **separated with a comma and space**. 

On the **next lines**, you will get the elements for each row **separated with a comma and space**.

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


[slide]
# Solution: Sum of All Elements of Matrix
[code-task title="Sum of All Elements of Matrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays.stream(scanner.nextLine().split(", ")).mapToInt(Integer::parseInt).toArray();

        int[][] matrix = initializeMatrix(scanner, dimensions);

        System.out.println(matrix.length);
        System.out.println(matrix[0].length);

        int sum = 0;

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                 sum += matrix[row][col];
            }
        }
        System.out.println(sum);
    }

    private static int[][] initializeMatrix(Scanner scanner, int[] matrixDimensions) {

        int rows = matrixDimensions[0];
        int cols = matrixDimensions[1];

        int[][] matrix = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
             int[] arr = Arrays.stream(scanner.nextLine()
                    .split(", "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            matrix[i] = arr;
        }
        return matrix;
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that **reads a matrix from the console and prints**:
   - The count of rows
   - The count of columns
   - The sum of all matrix’s elements

On the **first line**, you will get the **dimensions** of the matrix `rows` and `columns` **separated with a comma and space**. 

On the **next lines**, you will get the elements for each row **separated with a comma and space**.


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

[slide]
# Problem: Maximum Sum of 2X2 Submatrix
[code-task title="Maximum Sum of 2X2 Submatrix" taskId="3db5aaed-42d5-499b-8360-71b881d33e3c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **reads a matrix from the console**.

Then find the biggest sum of a **2x2 submatrix**.

**Print the submatrix and its sum.**

On the **first line**, you will get the **dimensions** of the matrix `rows` and `columns` **separated with a comma and space**. 

On the **next lines**, you will get the elements for each row **separated with a comma and space**.


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

[slide]
# Solution: Maximum Sum of 2X2 Submatrix
[code-task title="Maximum Sum of 2X2 Submatrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays.stream(scanner.nextLine().split(", ")).mapToInt(Integer::parseInt).toArray();

        int[][] matrix = initializeMatrix(scanner, dimensions);
        int[][] result = new int[2][2];

        int bestSum = Integer.MIN_VALUE;
        int resultRow = 0;
        int resultCol = 0;
        for (int row = 0; row < matrix.length - 1; row++) {
            for (int col = 0; col < matrix[row].length - 1; col++) {
                int sum = matrix[row][col] + matrix[row][col + 1] + matrix[row + 1][col] + matrix[row + 1][col + 1];
                if (sum > bestSum) {
                    bestSum = sum;
                    result[0][0] = matrix[row][col];
                    result[0][1] = matrix[row][col + 1];
                    result[1][0] = matrix[row + 1][col];
                    result[1][1] = matrix[row + 1][col + 1];
                }
            }
        }
        for (int[] row : result) {
            for (int col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
        System.out.println(bestSum);
    }

    private static int[][] initializeMatrix(Scanner scanner, int[] matrixDimensions) {

        int rows = matrixDimensions[0];
        int cols = matrixDimensions[1];

        int[][] matrix = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            int[] arr = Arrays.stream(scanner.nextLine()
                    .split(", "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            matrix[i] = arr;
        }
        return matrix;
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that **reads a matrix from the console**.

Then find the biggest sum of a **2x2 submatrix**.

**Print the submatrix and its sum.**

On the **first line**, you will get the **dimensions** of the matrix `rows` and `columns` **separated with a comma and space**. 

On the **next lines**, you will get the elements for each row **separated with a comma and space**.

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