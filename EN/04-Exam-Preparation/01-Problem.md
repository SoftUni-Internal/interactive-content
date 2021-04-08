# Problem 2: Array Modifier
[slide hideTitle]

# Array Modifier

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/05.Java-Fundamentals-Exam-Preparation/EN/Java-Fund-Exam-Prep-1-Array-Modyfier-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Array Modifier" taskId="java-fund-18-Exam-Preparation-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

The first line of input will consist of an **integer array**. 

Create a program that receive **commands** that **modify the array**.

The possible **commands** are: "**swap**", "**multiply**" or "**decrease**".

- "**swap** \{**index1**\} \{**index2**\}" - take the two elements and swap their places

- "**multiply** \{**index1**\} \{**index2**\}" - take the number from the first specified index and multiply it by the number at the second one

Save the product of the two at the index, where the first number was.

- "**decrease**" - decreases all elements in the array by 1

## Input 

On the first input line you will be given the initial array values, separated by a single space.

On the next lines you will be receiving **commands**. The program should stop searching for commands after receiving: "**end**" as input. The program should then stop running and print out the modified array.

The commands could be:

* "**swap** \{**index1**\} \{**index2**\}"

* "**multiply** \{**index1**\} \{**index2**\}"

* "**decrease**"

## Output 

**The output** should be printed to the console and should consist of the **elements of the modified array separated by** ", " (a comma and a single space). 

## Constraints 


* The commands are limited to: "**swap**", "**multiply**", "**decrease**" and "**end**"

* All elements of the array will be integers.

* The number of elements in the array will be in range \[2...100\]

* Indices will always be inside the range of the array

## Example One
| **Input** | **Output** |
| --- | --- |
|23 -2 321 87 42 90 -123 | 86, 7382, 2369942, -124, 41, 89, -3|
|swap 1 3 ||
|swap 3 6 ||
|swap 1 0 ||
|multiply 1 2 ||
|multiply 2 1 ||
|decrease ||
|end ||

[hints]
[hint]
The initial state of the array is: `23 -2 321 87 42 90 -123`

* "**swap 1(-2)" and "3(87)**":

The state of the array after the first command: `23 87 321 -2 42 90 -123`
[/hint] 
[hint]
* "**swap 3(-2)" and "6(-123)**":

The state of the array after the second command: `23 87 321 -123 42 90 -2`
[/hint] 
[hint]
* "**swap 1(87)" and "0(23)**":

The state of the array after the third command: `87 23 321 -123 42 90 -2`
[/hint] 
[hint]
* "**multiply 1(23) 2(321) = 7383**":

The state of the array after the fourth command: `87 7383 321 -123 42 290 -2`
[/hint] 
[hint]
* "**multiply 2(321) 1(7383) = 2369943**":

The state of the after the fifth command: `87 7383 2369943 -123 42 90 -2`
[/hint] 
[hint]
* "**decrease - all - 1**":

The state of the after the sixth command: `86 7383 2369942 -124 41 89 -3`
[/hint] 
[/hints] 

## Example Two
| **Input** | **Output** |
| --- | --- |
|1 2 3 4 |1, 11, 3, 0 |
|swap 0 1 ||
|swap 1 2 ||
|swap 2 3 ||
|multiply 1 2 ||
|decrease ||
|end ||

[/task-description]
[code-io /]
[tests]
[test open]
[input]
23 -2 321 87 42 90 -123
swap 1 3
swap 3 6
swap 1 0
multiply 1 2
multiply 2 1
decrease
end
[/input]
[output]
86, 7382, 2369942, -124, 41, 89, -3
[/output]
[/test]
[test open]
[input]
1 2 3 4
swap 0 1
swap 1 2
swap 2 3
multiply 1 2
decrease
end
[/input]
[output]
1, 11, 3, 0
[/output]
[/test]
[test]
[input]
213 312 5434 12456 123154 12 0
swap 0 1
swap 0 2
swap 0 3
multiply 1 2
decrease
multiply 0 6
end
[/input]
[output]
-12455, 66455, 311, 5433, 123153, 11, -1
[/output]
[/test]
[test]
[input]
20000000 5 5 5 5 5 5
multiply 0 1
end
[/input]
[output]
100000000, 5, 5, 5, 5, 5, 5
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88
swap 1 23
swap 1 24
swap 21 24
swap 21 60
swap 71 60
swap 0 1
swap 12 43
multiply 60 61
multiply 60 61
multiply 60 61
end
[/input]
[output]
25, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 44, 14, 15, 16, 17, 18, 19, 20, 21, 61, 23, 2, 22, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 13, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 17159616, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 24, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88
[/output]
[/test]
[test]
[input]
0 0 0 0 0 0 0 0 0
decrease
decrease
decrease
decrease
decrease
decrease
decrease
multiply 1 5
multiply 5 6
swap 1 6
end
[/input]
[output]
-7, -7, -7, -7, -7, 49, 49, -7, -7
[/output]
[/test]
[test]
[input]
100 1 -120 23 432 29 43 14 83 328 392 328 121 676
multiply 0 13
multiply 1 12
multiply 2 11
multiply 3 10
multiply 4 9
multiply 5 8
multiply 6 7
multiply 7 6
multiply 8 5
multiply 9 4
multiply 10 3
multiply 11 2
multiply 12 1
multiply 13 0
end
[/input]
[output]
67600, 121, -39360, 9016, 141696, 2407, 602, 8428, 199781, 46476288, 3534272, -12910080, 14641, 45697600
[/output]
[/test]
[test]
[input]
100 1 -120 23 432 29 43 14 83 328 392 328 121 676
swap 0 13
swap 1 12
swap 2 11
swap 3 10
swap 4 9
swap 5 8
swap 6 7
swap 7 6
swap 8 5
swap 9 4
swap 10 3
swap 11 2
swap 12 1
swap 13 0
end
[/input]
[output]
100, 1, -120, 23, 432, 29, 43, 14, 83, 328, 392, 328, 121, 676
[/output]
[/test]
[test]
[input]
-1 123 123 123 123 123 123 -123
multiply 6 7
multiply 6 7
multiply 6 0
end
[/input]
[output]
-1, 123, 123, 123, 123, 123, -1860867, -123
[/output]
[/test]
[test]
[input]
42 42
multiply 0 1
decrease
swap 0 1
end
[/input]
[output]
41, 1763
[/output]
[/test]
[test]
[input]
-1 0 -1
swap 0 1
multiply 0 1
multiply 2 1
end
[/input]
[output]
0, -1, 1
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10
swap 0 1
swap 1 2
swap 1 2
swap 2 3
swap 3 4
swap 4 5
swap 5 6
swap 6 7
swap 7 8
swap 8 9
swap 7 8
swap 6 7
swap 5 6
swap 4 5
swap 3 4
swap 2 3
swap 1 2
swap 0 1
swap 0 1
swap 1 2
swap 1 2
swap 2 3
swap 3 4
swap 4 5
swap 5 6
swap 6 7
swap 0 1
swap 1 2
swap 1 2
swap 2 3
swap 3 4
swap 4 5
swap 5 6
swap 6 7
swap 4 5
swap 3 4
swap 2 3
swap 1 2
swap 0 1
swap 0 1
swap 1 2
swap 1 2
swap 4 5
swap 3 4
swap 2 3
swap 1 2
swap 0 1
swap 0 1
swap 1 2
swap 1 2
end
[/input]
[output]
10, 7, 8, 2, 5, 6, 1, 4, 9, 3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
