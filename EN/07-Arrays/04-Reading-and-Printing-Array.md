# Reading and Printing Array

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# Reading Arrays From the Console
There is no direct way to take array input in Java using Scanner or any other utility, but it's pretty easy to achieve the same by using standard **Scanne** methods and asking some questions to the user. 

For example, if you want to take an **array of string** as input then you can first you need the length of the array and then you can use a for loop to retrieve that many elements and store them in an array.

```Java
int n = Integer.parseInt(sc.nextLine()); //Receive the array length
int[] arr = new int[n];                  //create an array with the given length
                
for (int i = 0; i < n; i++) {
  arr[i] = Integer.parseInt(sc.nextLine()); //read array elements
}
```

# Reading Array Values from a Single Line

Arrays can be read from a **single line** of **separated values**, if we want to read array: `2 8 30 25 40 72 -2 44 56`:

```Java
String values = sc.nextLine();
String[] items = values.split(" ");
int[] arr = new int[items.length];

for (int i = 0; i < items.length; i++){
  arr[i] = Integer.parseInt(items[i]);
}
```
# Shorter: Reading Array from a Single Line

We can read an array of integers using functional programming: 

* First we need to import `java.util.Arrays;`

```Java
String inputLine = sc.nextLine();

String[] items = inputLine
.split(" ");                 

int[] arr = Arrays
.stream(scanner.nextLine()   //read the input from the console as string
.split(" "))                 //split the input by space
.mapToInt(Integer::parseInt) //convert the string input to int
.toArray();                  //convert to array
```
[/slide]


[slide]
# Printing Array using for-loop

We can print all array elements, a **for-loop** can be used and separate elements with white space or a new line: 

```Java live
String[] arr = {"one", "two"}; 

// Process all array elements
for (int i = 0; i < arr.length; i++) { 
   System.out.printf("arr[%d] = %s%n", i, arr[i]);
}
```

# Printing Arrays with String.join(…)

Use String.join\(separator, array\) works only with `String`: 

```Java live
String[] strings = {
    "one",
    "two"
};
System.out.println(
    String.join(" ", strings));
```

If we try printing int we receive error:

```Java
int[] arr = {
    1,
    2,
    3
};
System.out.println(
    String.join(" ", arr)); // Compile error
```
[/slide]

[slide]
# Problem: Print Numbers in Reverse Order
[code-task title="Problem: Print Numbers in Reverse Order" taskId="java-fundamentals-Arrays-02" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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
Read n numbers and print them in reverse order.

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

[slide]
# Solution: Print Numbers in Reverse Order
[code-task title="Problem: Print Numbers in Reverse Order" taskId="0780f2a1-2454-4a9b-8f94-4f6e5dc06231" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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
Read n numbers and print them in reverse order.

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

[slide]
# Problem: Reverse an Array of Strings
[code-task title="Problem: Reverse an Array of Strings" taskId="java-fundamentals-Arrays-03" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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
Write a program to read an **array of strings**, reverse it and **print** its elements.

The input consists of a sequence of space separated strings.

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

[slide]
# Solution: Reverse an Array of Strings
[code-task title="Problem: Reverse an Array of Strings" taskId="1f2e5cb2-4ee7-4257-9977-4d7a9873d189" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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
Write a program to read an **array of strings**, reverse it and **print** its elements.

The input consists of a sequence of space separated strings.

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

