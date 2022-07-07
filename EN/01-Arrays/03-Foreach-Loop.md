# For-each Loop
[slide hideTitle]
# Definition

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-18-19-For-each-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`For-each` is another array traversing technique like the **for-loop**, the **while-loop** and the **do-while-loop** introduced in **Programming Basics with Java**.

It starts with the keyword `for` simmilar to a **for-loop**.

However, instead of declaring and initializing a loop counter variable we declare a variable that should hold the same data type as the base type of the array. It is followed by a colon (**:**), which is then followed by the name of the array.

The loop variable of a `for-each` loop holds the value of each loop element, not its index number.

It is commonly used to iterate over an array when we do not need to use particular index numbers.

```java
for (int variableName : arrayName) {
  //execute some code here
}
```
[/slide]

[slide hideTitle]
# Printing an Array With Foreach

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-20-For-each-loop-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can **print** the elements of an array with a **for-each** loop:

```Java live
int[] numbers = { 1, 2, 3, 4, 5 };

for (int number: numbers) {
    System.out.println(number + " ");
}
```

We are not able to manipulate the elements of an array while iterating with a **for-each** loop. 

[/slide]

[slide hideTitle]
# Problem with Solution: Even and Odd Subtraction

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-21-22-problem-and-solution-even-and-odd-subtraction-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Even and Odd Subtraction" taskId="java-fund-1-arrays-lab-even-and-odd-subtraction" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that calculates the difference between the **sum of the even** and the **sum of the odd** numbers in an array.

## Examples
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Input**|**Output**|
|-----|------|
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
# Problem with Solution: Condense Array to Number

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-problem-and-solution-condense-array-to-number-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Condense Array to Number" taskId="java-fund-1-arrays-lab-condense-array-to-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads **an array of integers** and condenses them by **summing** all adjacent couples of elements until a **single integer** remains.

For **example**, let us say we have **3** elements - \{2, 10, 3\}. 

We sum the first two and the second two elements and get \{2+10, 10+3\} = \{12, 13\}, then we sum all adjacent elements again

This results in \{12+13\} = \{25\}.

## Examples
|**Input**|**Output**| **Comments** |
|-----|------|------|
| 2 10 3| 25|2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25 |
| 5 0 4 1 2 | 35|5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35|
| 1 | 1 | 1 is already condensed to number |


[hints] 
[hint] 
While we have more than one element in the array `nums[]`, repeat the following:
- Allocate a new array `condensed[]` of size `nums.length`
- Sum the numbers from `nums[]` to `condensed[]`

    - `condensed[i]` = `nums[i]` + `nums[i+1]`
    - `nums[] = condensed[]`
[/hint] 
[/hints]

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
