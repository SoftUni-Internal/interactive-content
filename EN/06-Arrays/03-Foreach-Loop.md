# For-each Loop

[slide]
# Video

[vimeo-video startTimeInSeconds="6409" endTimeInSeconds="8192"]
[stream language="EN" videoId="421771481" default /]
[stream language="RO" videoId="427418768"  /]
[/vimeo-video]

[/slide]

[slide]
# For-each Loop

`For-each` is another array traversing technique like `for` loop, `while` loop, `do-while` loop introduced in Java.

- It starts with the keyword `for` like a normal `for` loop.

- Instead of declaring and initializing a loop counter variable, you declare a variable that is the same type as the base type of the array, followed by a colon, which is then followed by the array name.

- In the loop body, you cannot access the current index, but you can use the loop variable you created rather than using an indexed array element.

- It’s commonly used to iterate over an array.

```Java
for (var item : collection) {
    // Process the value here
}
```
We can **print** an array with `for-each`:

```Java live
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

[/slide]

[slide hideTitle]
# Problem: Even and Odd Subtraction
[code-task title="Problem: Even and Odd Subtraction" taskId="java-fund-07-Arrays-problem-9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

## Examples
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Input**|**Output**|
|-----|------|------|
| 3 5 7 9 | -24|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
-24
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
1 2 23 4
[/input]
[output]
-18
[/output]
[/test]
[test]
[input]
1 2 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2 4 5 1 3 6 10
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
2 4 6 8 10 101
[/input]
[output]
-71
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
-1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Even and Odd Subtraction
[code-task title="Problem: Even and Odd Subtraction" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class EvenAndOddSubtraction {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] nums = Arrays
            .stream(scanner.nextLine()
            .split(" "))
            .mapToInt(Integer::parseInt)
            .toArray();

        int oddSum = 0;
        int evenSum = 0;

        for (int i = 0; i < nums.length; i++) {

            if (nums[i] % 2 == 0) {
                evenSum += nums[i];
            } else {
                oddSum += nums[i];
            }
        }

        int diff = evenSum - oddSum;

        System.out.println(diff);

    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

## Examples
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Input**|**Output**|
|-----|------|------|
| 3 5 7 9 | -24|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
-24
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
1 2 23 4
[/input]
[output]
-18
[/output]
[/test]
[test]
[input]
1 2 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2 4 5 1 3 6 10
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
2 4 6 8 10 101
[/input]
[output]
-71
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
-1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Condense Array to Number
[code-task title="Problem: Condense Array to Number" taskId="java-fund-07-Arrays-problem-11" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to read a**n array of integers** and condense them by **summing** adjacent couples of elements until a **single integer** is obtained.

For example, if we have 3 elements \{2, 10, 3\}, we sum the first two and the second two elements and obtain \{2+10, 10+3\} = \{12, 13\}, then we sum again all adjacent elements and obtain \{12+13\} = \{25\}.

## Examples
|**Input**|**Output**| **Comments** |
|-----|------|------|
| 2 10 3| 25|2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25 |
| 5 0 4 1 2 | 35|5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35|
| 1 | 1 | 1 is already condensed to number |


### Hints
While we have more than one element in the array `nums[]`, repeat the following:

*	Allocate a new array `condensed[]` of size `nums.length`.
*	Sum the numbers from `nums[]` to `condensed[]`:

	`condensed[i]` = `nums[i]` + `nums[i+1]`
*	`nums[] = condensed[]`

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 10 3
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
5 0 4 1 2
[/input]
[output]
35
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
3 4 0 3 4 0 0 0 0 1 2
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
0 0 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-5 -10 -15 -5
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
-1 2 -3 4 -5 6 -7 8 -9
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-1 -1 -1 -1 -1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -1
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Condense Array to Number
[code-task title="Problem: Condense Array to Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class P7_Condense_Array_to_Number {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] nums = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        while (nums.length > 1)
        {
            int[] condensed = new int[nums.length - 1];
            for (int j = 0; j < condensed.length ; j++)
            {
                condensed[j] = nums[j] + nums[j + 1];
            }

            nums = condensed;
        }
        System.out.println(nums[0]);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program to read a**n array of integers** and condense them by **summing** adjacent couples of elements until a **single integer** is obtained.

For example, if we have 3 elements \{2, 10, 3\}, we sum the first two and the second two elements and obtain \{2+10, 10+3\} = \{12, 13\}, then we sum again all adjacent elements and obtain \{12+13\} = \{25\}.

## Examples
|**Input**|**Output**| **Comments** |
|-----|------|------|
| 2 10 3| 25|2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25 |
| 5 0 4 1 2 | 35|5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35|
| 1 | 1 | 1 is already condensed to number |


### Hints
While we have more than one element in the array `nums[]`, repeat the following:

*	Allocate a new array `condensed[]` of size `nums.length`.
*	Sum the numbers from `nums[]` to `condensed[]`:

	`condensed[i]` = `nums[i]` + `nums[i+1]`
*	`nums[] = condensed[]`

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 10 3
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
5 0 4 1 2
[/input]
[output]
35
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
3 4 0 3 4 0 0 0 0 1 2
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
0 0 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-5 -10 -15 -5
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
-1 2 -3 4 -5 6 -7 8 -9
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-1 -1 -1 -1 -1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -1
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
