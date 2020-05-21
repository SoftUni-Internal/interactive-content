# Arrays

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# Working with Arrays

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

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

Here are some explanations about the example you can see above.

We **allocate** an array of 5 integers.

Then we **initialize** the array, but all values are 0, because the default of int is zero.

We **assign** a value to the array elements.

The length holds the number of array elements.

In the for-loop we use `i < numbers.length` because array's indexes are zero-based, which means that the first index of an array is 0 and the last element is `numbers[4]`.

**Accessing** array elements by index.

As we mentioned above the first index of an array is always 0 and the last index is `array.length - 1`.

In total we have 5 elements in our array, but the last element is at index 4, so we subtract `array.length - 1 = 4` which is our last index.

The `[]` operator accesses elements by index.

If we try to access the element on an invalid index, we get an exception.


[/slide]

[slide]
# Problem: Day of Week
[code-task title="Problem: Day of Week" taskId="71f48600-35f4-440c-a233-7710f5fe7a99" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
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

[slide]
# Solution: Day of Week
[code-task title="Problem: Day of Week" taskId="9cfa4cb8-1354-4f90-8574-a82485f22fcb" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class TestTech {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] days = {
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        };
        int day = Integer.parseInt(scanner.nextLine());
        if (day >= 1 && day <= 7)
            System.out.println(days[day - 1]);
        else
            System.out.println("Invalid day!");

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

[slide]
# Problem: Sum Even Numbers
[code-task title="Problem: Sum Even Numbers" taskId="7b6be9b9-ac4f-423a-a0e5-12c4e7288835" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[slide]
# Solution: Sum Even Numbers
[code-task title="Problem: Sum Even Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class SumEvenNumbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int [] numbers = Arrays.stream(scan.nextLine()
                .split(" "))
                .mapToInt(Integer:: parseInt)
                .toArray();

        int sum = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
                sum += number;
            }

        }
        System.out.println(sum);

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