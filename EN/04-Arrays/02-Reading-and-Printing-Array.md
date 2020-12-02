# Reading and Printing Array

[slide]
# Video

[vimeo-video startTimeInSeconds="2422" endTimeInSeconds="3075"]
[stream language="EN" videoId="421771481" default /]
[stream language="RO" videoId="427418768"  /]
[/vimeo-video]

[/slide]

[slide]
# Reading Arrays From the Console
There is no direct way to take array input in Java using Scanner or any other utility, but it's pretty easy to achieve the same by using standard **Scanner** methods and asking some questions to the user.

For example, if you want to take an **array of string** as input you need the **length** of the array and then you can use a for loop to retrieve that many elements and store them in an array.

```Java
int n = Integer.parseInt(sc.nextLine()); //Receive the array length
int[] arr = new int[n];                  //create an array with the given length
                
for (int i = 0; i < n; i++) {
  arr[i] = Integer.parseInt(sc.nextLine()); //read array elements
}
```

# Reading Array Values from a Single Line

Arrays can be read from a single line of separated values. For example, if we want to read this array: `2 8 30 25 40 72 -2 44 56`:

```Java
String values = sc.nextLine();
String[] items = values.split(" ");
int[] arr = new int[items.length];

for (int i = 0; i < items.length; i++){
  arr[i] = Integer.parseInt(items[i]);
}
```
# Shorter: Reading Array from a Single Line

We can read an array of integers using `java.util.Arrays;`, which is a `class` in Java that allows you to create and manipulate arrays.

We're going to learn about **classes** later in this course, but if you're curious feel free to google it.

```Java
String inputLine = sc.nextLine();

String[] items = inputLine      //create a string array
  .split(" ");

int[] arr = Arrays
  .stream(scanner.nextLine()    //read the input from the console as string
  .split(" "))                  //split the input by space
  .mapToInt(Integer::parseInt)  //convert the string input to int
  .toArray();                   //convert to array
```
[/slide]

[slide]
# Video

[vimeo-video startTimeInSeconds="3996" endTimeInSeconds="5491"]
[stream language="EN" videoId="421771481" default /]
[stream language="RO" videoId="427418768"  /]
[/vimeo-video]

[/slide]

[slide]
# Printing Array using for-loop

To print all elements of an array a `for` loop can be used.
While printing each element we can use a whitespace or a new line, to split them.
See the following example:

```Java live
String[] arr = {"one", "two"};

// Process all array elements
for (int i = 0; i < arr.length; i++) {
   System.out.printf("arr[%d] = %s%n", i, arr[i]);
}
```

# Printing Arrays with String.join()

Use `String.join(x, y)`, where x is the **separator** and **y is the array** we want to print. `String.join(…)` works only with `String`:

```Java live
String[] strings = { "one", "two" };
System.out.println(String.join(" ", strings));
```

If we try printing int we receive error:

```Java live
int[] arr = { 1, 2, 3 };
System.out.println(String.join(" ", arr));
```
[/slide]

[slide hideTitle]
# Problem: Print Numbers in Reverse Order
[code-task title="Problem: Print Numbers in Reverse Order" taskId="java-fund-07-Arrays-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Read n numbers and print them in reverse order, separated by single space.

## Examples
|**Input**|**Output**|
|-----|------|
| 3 | 30 20 10 |
| 10 | |
| 20 | |
| 30 | |

|**Input**|**Output**|
|-----|------|
| 3 | 10 20 30 |
| 30 | |
| 20 | |
| 10 | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
10
20
30

[/input]
[output]
30 20 10
[/output]
[/test]
[test open]
[input]
4
-1
20
99
5

[/input]
[output]
5 99 20 -1
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2
100
200
[/input]
[output]
200 100
[/output]
[/test]
[test]
[input]
3
-5
20
100
[/input]
[output]
100 20 -5
[/output]
[/test]
[test]
[input]
9
3467
2347
-33
0
24
23
-3
4
3
[/input]
[output]
3 4 -3 23 24 0 -33 2347 3467
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Print Numbers in Reverse Order
[code-task title="Problem: Print Numbers in Reverse Order" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());

        int[] numbers = new int[n];

        for (int i = 0; i < n; i++) {
            numbers[i] = Integer.parseInt(scan.nextLine());
        }

        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }

    }
}
```
[/code-editor]
[task-description]
## Description
Read n numbers and print them in reverse order, separated by single space.

## Examples
|**Input**|**Output**|
|-----|------|
| 3 | 30 20 10 |
| 10 | |
| 20 | |
| 30 | |

|**Input**|**Output**|
|-----|------|
| 3 | 10 20 30 |
| 30 | |
| 20 | |
| 10 | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
10
20
30

[/input]
[output]
30 20 10
[/output]
[/test]
[test open]
[input]
4
-1
20
99
5

[/input]
[output]
5 99 20 -1
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2
100
200
[/input]
[output]
200 100
[/output]
[/test]
[test]
[input]
3
-5
20
100
[/input]
[output]
100 20 -5
[/output]
[/test]
[test]
[input]
9
3467
2347
-33
0
24
23
-3
4
3
[/input]
[output]
3 4 -3 23 24 0 -33 2347 3467
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Reverse an Array of Strings
[code-task title="Problem: Reverse an Array of Strings" taskId="java-fund-07-Arrays-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program to read an **array of strings**, reverse it, and **print** its elements.

The input consists of a sequence of space-separated strings.

Print the output on a single line \(space separated\).

## Examples
|**Input**|**Output**|
|-----|------|
| a b c d e | e d c b a |
|-1 hi ho w | w ho hi -1 |


## Hints
* Read the array of strings.

* **Exchange** the **first** element \(at index 0\) with the **last** element \(at index n-1\).

* **Exchange** the **second** element \(at index 1\) with the element **before the last** \(at index n-2\).

* Continue the same way until the middle of the array is reached.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a b c d e
[/input]
[output]
e d c b a
[/output]
[/test]
[test open]
[input]
-1 hi ho w
[/input]
[output]
w ho hi -1
[/output]
[/test]
[test]
[input]
hello
[/input]
[output]
hello
[/output]
[/test]
[test]
[input]
a b
[/input]
[output]
b a
[/output]
[/test]
[test]
[input]
aa bb cc
[/input]
[output]
cc bb aa
[/output]
[/test]
[test]
[input]
a10 b20 c30 d40 e50 f60
[/input]
[output]
f60 e50 d40 c30 b20 a10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Reverse an Array of Strings
[code-task title="Problem: Reverse an Array of Strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String[] arr = scan.nextLine().split(" ");

        String[] reversed = new String[arr.length];
        int index = 0;
        for (int i = arr.length - 1; i >= 0; i--) {
            reversed[index++] = arr[i];
        }

        System.out.println(String.join(" ", reversed));
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program to read an **array of strings**, reverse it, and **print** its elements.

The input consists of a sequence of space-separated strings.

Print the output on a single line \(space separated\).

## Examples
|**Input**|**Output**|
|-----|------|
| a b c d e | e d c b a |
|-1 hi ho w | w ho hi -1 |


## Hints
* Read the array of strings.

* **Exchange** the **first** element \(at index 0\) with the **last** element \(at index n-1\).

* **Exchange** the **second** element \(at index 1\) with the element **before the last** \(at index n-2\).

* Continue the same way until the middle of the array is reached.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a b c d e
[/input]
[output]
e d c b a
[/output]
[/test]
[test open]
[input]
-1 hi ho w
[/input]
[output]
w ho hi -1
[/output]
[/test]
[test]
[input]
hello
[/input]
[output]
hello
[/output]
[/test]
[test]
[input]
a b
[/input]
[output]
b a
[/output]
[/test]
[test]
[input]
aa bb cc
[/input]
[output]
cc bb aa
[/output]
[/test]
[test]
[input]
a10 b20 c30 d40 e50 f60
[/input]
[output]
f60 e50 d40 c30 b20 a10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Equal Arrays
[code-task title="Problem: Equal Arrays" taskId="java-fund-07-Arrays-problem-8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Read two arrays and print on the console whether they are identical or not.

Arrays are **identical** if their **elements are equal**.

If the arrays are identical find the **sum of the first one** and print on the console following message: 
`"Arrays are identical. Sum: {sum}"`.

Otherwise, find the first index where the arrays differ and print on the console following message:  
`"Arrays are not identical. Found difference at {index} index."`.

## Examples
|**Input**|**Output**|
|-----|------|------|
| 10 20 30 | Arrays are identical. Sum: 60|
| 10 20 30 | |

|**Input**|**Output**|
|-----|------|------|
| 1 2 3 4 5 | Arrays are not identical. Found difference at 2 index.|
| 1 2 4 3 5 | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 20 30
10 20 30
[/input]
[output]
Arrays are identical. Sum: 60
[/output]
[/test]
[test open]
[input]
1 2 3 4 5
1 2 4 3 5
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
1
10
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[test]
[input]
1 2 3
1 2 3
[/input]
[output]
Arrays are identical. Sum: 6
[/output]
[/test]
[test]
[input]
1 2 3
1 2 4
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
100
100
[/input]
[output]
Arrays are identical. Sum: 100
[/output]
[/test]
[test]
[input]
100 200 300 400
400 300 200 100
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Equal Arrays
[code-task title="Problem: Equal Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class LabEqualArrays {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int[] first = Arrays
                .stream(scan.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();
        int[] second = Arrays
                .stream(scan.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int match = 0;
        int firstSum = 0;
        for (int i :
                first) {
            firstSum += i;
        }

        for (int i = 0; i < first.length; i++) {
            if (first[i] == second[i]) {
                match++;
            } else {
                System.out.printf("Arrays are not identical. Found difference at %d index.", match);
                break;
            }
        }

        if (match == first.length) {
            System.out.println("Arrays are identical. Sum: " + firstSum);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Read two arrays and print on the console whether they are identical or not.

Arrays are **identical** if their **elements are equal**.

If the arrays are identical find the **sum of the first one** and print on the console following message:
`"Arrays are identical. Sum: {sum}"`.

Otherwise, find the first index where the arrays differ and print on the console following message:  
`"Arrays are not identical. Found difference at {index} index."`.

## Examples
|**Input**|**Output**|
|-----|------|------|
| 10 20 30 | Arrays are identical. Sum: 60|
| 10 20 30 | |

|**Input**|**Output**|
|-----|------|------|
| 1 2 3 4 5 | Arrays are not identical. Found difference at 2 index.|
| 1 2 4 3 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 20 30
10 20 30
[/input]
[output]
Arrays are identical. Sum: 60
[/output]
[/test]
[test open]
[input]
1 2 3 4 5
1 2 4 3 5
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
1
10
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[test]
[input]
1 2 3
1 2 3
[/input]
[output]
Arrays are identical. Sum: 6
[/output]
[/test]
[test]
[input]
1 2 3
1 2 4
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
100
100
[/input]
[output]
Arrays are identical. Sum: 100
[/output]
[/test]
[test]
[input]
100 200 300 400
400 300 200 100
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
