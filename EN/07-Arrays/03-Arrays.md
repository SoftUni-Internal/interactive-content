# Arrays

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# What are Arrays?
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

[image assetsSrc="array-example(1).png" /]

* Arrays have **fixed size \(array.length\)** cannot be resized.

* Elements are of the **same type** (e.g. integers).

* Elements are numbered from **0** to **length-1**.

[/slide]

[slide]
# Working with Arrays

**Allocating** an array of 10 integers. We initialize the array, but all values are **0**, because default of `int` is zero.

```Java
int[] numbers = new int[10];
```

**Assigning values** to the array elements. The **length** holds the number of array elements.

```Java
for (int i = 0; i < numbers.length; i++){
  numbers[i] = 1;
}
```

**Accessing** array elements by index. The sart index of an array is always **0** and the last index is **array.length - 1**. The `[]` operator accesses elements by index

```Java
numbers[5] = numbers[2] + numbers[7];
```
If we try to access element on invalid index, we get exception:

```Java
numbers[10] = 1; // ArrayIndexOutOfBoundsException
```

[/slide]

[slide]
# Problem: Day of Weekr
[code-task title="Problem: Day of Weekr" taskId="java-fundamentals-Arrays-01" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

*	Print the element at index \(day-1\) when it is in the range \[1…7\] or `Invalid Day!` otherwise.


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
# Solution: Day of Weekr
[code-task title="Problem: Day of Weekr" taskId="java-fundamentals-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

*	Print the element at index \(day-1\) when it is in the range \[1…7\] or `Invalid Day!` otherwise.


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