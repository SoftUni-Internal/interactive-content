# Foreach Loop

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# Foreach Loop

For-each is another array traversing technique like for loop, while loop, do-while loop introduced in Java.

* It starts with the keyword **for** like a normal for-loop.

* Instead of declaring and initializing a loop counter variable, you declare a variable that is the same type as the base type of the array, followed by a colon, which is then followed by the array name.

* In the loop body, you cannot access the current index, but you can use the loop variable you created rather than using an indexed array element.

* It’s commonly used to iterate over an array.

```Java
for (var item : collection) {
    // Process the value here
}
```
We can print an array with Foreach:

```Java live
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

[/slide]

[slide]
# Problem: Even and Odd Subtraction
[code-task title="Problem: Even and Odd Subtraction" taskId="java-fundamentals-Arrays-04" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

## Examples
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Input**|**Output**|**Comments**|
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

[slide]
# Solution: Even and Odd Subtraction
[code-task title="Problem: Even and Odd Subtraction" taskId="java-fundamentals-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

|**Input**|**Output**|**Comments**|
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