# Reading and Printing Arrays

[slide hideTitle]
# Reading Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-8-9-10-11-Reading-An-Array-and-demos-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There is no direct way of accepting array input in Java using Scanner or any other utility but the same can be achieved using standard **Scanner** methods and asking some questions to the user.

For example, if you want to accept an **array of strings**, you will first need to get its **length** as input, and you can then use a for-loop to retrieve that many elements and store them in an array.

```java
//accept n - length of the array
int n = Integer.parseInt(sc.nextLine()); 

//create the array with length of n
int[] arr = new int[n];                  
                
for (int i = 0; i < n; i++) {
  //read array elements from the console
  arr[i] = Integer.parseInt(sc.nextLine()); 
}
```

## Reading From Single Line

Arrays can be read from a single line of separated values. For example, if we want to read this array: `2 8 30 25 40 72 -2 44 56`:

```Java
String values = sc.nextLine();
String[] items = values.split(" ");
int[] arr = new int[items.length];

for (int i = 0; i < items.length; i++){
  arr[i] = Integer.parseInt(items[i]);
}
```

First, we read the numbers from the console and split them by the empty spaces between them.

Then we initialize a new array with a length equal to the number of elements we read. 

Finally, using a for loop we insert all the values into the array.

We can read an array of integers using `java.util.Arrays;` which is a `class` in Java that allows you to create and manipulate arrays.

We're going to learn about **classes** later in this course, but if you're curious feel free to google it.


## A Shorter Way to Read Arrays

Here is a much shorter way to read an input and create an array from it.

```Java
String inputLine = sc.nextLine();

String[] items = inputLine      
  .split(" ");

int[] arr = Arrays
  .stream(scanner.nextLine()   
  .split(" "))                
  .mapToInt(Integer::parseInt)  
  .toArray();                  
```

We are first reading the input from the console as a string using `scanner.nextLine()`. 

Then we split the input by space using `split(" ")`.

We continue by parsing each string to integer values with `mapToInt(Integer::parseInt)`.

Finally, we convert the result to an array.

[/slide]


[slide hideTitle]
# Printing Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-12-Printing-Arrays-to-the-console-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A `for` loop can be used for printing all the elements of an array.

While printing each element we can split them by whitespace or newline.

See the following example:

```Java live
String[] arr = {"one", "two"};

// Process all array elements
for (int i = 0; i < arr.length; i++) {
   System.out.printf("arr[%d] = %s%n", i, arr[i]);
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Reverse an Array of Integers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-13-14-problem-and-solution-print-numbers-in-reverse-order-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reverse an Array of Integers" taskId="java-fund-arrays-lab-reverse-array-of-integers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read **n** numbers and print them in reverse order, separated by a single space.

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
# Printing Arrays with String.join()

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-15-printing-arrays-with-for-string.join-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use `String.join(x, y)`, where x is the **separator** and **y is the array** we want to print. `String.join(…)` works only with `String`:

```Java live
String[] strings = { "one", "two" };
System.out.println(String.join(" ", strings));
```

If we try printing an array of type **int** we get an error:

```Java live
int[] arr = { 1, 2, 3 };
System.out.println(String.join(" ", arr));
```
[/slide]



[slide hideTitle]
# Problem with Solution: Reverse an Array of Strings

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-16-17-problem-and-solution-reverse-an-array-of-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reverse an Array of Strings" taskId="java-fund-arrays-lab-reverse-an-array-of-strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Problem with Solution: Equal Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-problem-and-solution-equal-arrays-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Equal Arrays" taskId="java-fund-Arrays-Equal-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read two arrays and print to the console whether they are identical or not.

Arrays are **identical** if their **elements are equal**.

If the arrays are identical find the **sum of the first one** and print the following message to the console: 
`"Arrays are identical. Sum: {sum}"`.

Otherwise, find the first index where the arrays differ and print the following message to the console:  
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
