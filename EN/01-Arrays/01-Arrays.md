# Arrays

[slide hideTitle]

# Definition

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-3-4-What-are-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You already know how to store single data in one variable. Arrays allow us to store multiple data, again, in only one variable.

Arrays are useful for preserving a sequence of data and iterating over it.

You can initialize an array and set the values inside it by enclosing them in curly brackets and separating the values by commas:

``` java
String[] days = { "apple", "pear", "cherry" };
```

An array can contain duplicate values.

```Java
int[] numbers = { 1, 1, 2, 4, 5 };
```

The values in an array are called elements.

## Real-Life Example
Imagine a train with multiple wagons and passengers riding in each wagon.

Now imagine this as an array of integers, each element represent a wagon and its value is the passengers.

Take a look at this picture:

[image assetsSrc="array-real-live-example.jpg" /]

There are **7 wagons (elements)**. Each has **passengers (a value)**. \{3, 4, 10, 7, 5, 0, 6\}

Arrays are the **basis** for other abstract data types like **list**, **stack**, **queue**.

You are going to learn about these structures in the following courses.

[/slide]

[slide hideTitle]
# Working with Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-5-working-with-arrays-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Arrays are used for storing multiple values in a single variable, instead of declaring separate variables for each value.

Arrays have a fixed size. This means they cannot be resized.

Elements are always of the **same type**.

Indexes of an array are numbered from **0** to **length-1**.

**Example:**
```Java live
 //Allocating
 int[] numbers = new int[5];
 System.out.println(Arrays.toString(numbers));

 for (int i = 0; i < numbers.length; i++) {
  //Assigning a value
  numbers[i] = i + 1;
 }

 System.out.println(Arrays.toString(numbers));

 //Accessing
 numbers[4] = numbers[2] + numbers[3];
 System.out.println(numbers[4]);

 // System.out.println(numbers[5]);  Error: Index 5 out of bounds for length 5 at Array.
```

Here are some explanations about the last example.

We **allocate** an array of 5 integers.

Then we **initialize** the array, but all values are 0 because the default of **int** is zero.

We **assign** a value to the array elements.

The length holds the number of array elements.

In the for-loop we use `i < numbers.length` because the array's indexes are zero-based, which means that the first index of an array is 0 and the last element is `numbers[4]`.

**Accessing** array elements by index.

As we mentioned above the first index of an array is always 0 and the last index is `array.length - 1`.

In total, we have 5 elements in our array, but the last element is at index 4, so we subtract `array.length - 1 = 4` which is our last index.

The `[]` operator accesses elements by index.

If we try to access the element on an invalid index, we get an exception.


[/slide]

[slide hideTitle]
# Problem with Solution: Day of Week

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-6-7-problem-and-solution-day-of-week-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Problem: Day of Week" taskId="java-fund-arrays-lab-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Enter a **day number** \[1…7\] and print the **day name** \(in English\) or **`Invalid day!`**.

Use an **array of strings**.

## Examples
|**Input**|**Output**|
|-----|------|
| 1 | Monday |
| 2 | Tuesday |
| 7 | Sunday |
| 0 | Invalid day! |

### Hints
* Use an array of strings holding the day names: \{`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`\}.

* Print the element at index \(day-1\) when it is in the range \[1…7\] or `Invalid Day!` otherwise.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test open]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test open]
[input]
0
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
Wednesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
-150
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Sum Even Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-problem-and-solution-sum-even-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Even Numbers" taskId="java-fund-arrays-lab-sum-even-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read an array from the console and sum only the even numbers.

## Examples
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 12|
| 3 5 7 9 | 0 |
| 2 4 6 8 10 | 30|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
0
[/output]
[/test]
[test open]
[input]
2 4 6 8 10
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
1 1 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
2 4 3 1
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
12 22 32 44
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10
[/input]
[output]
30
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
