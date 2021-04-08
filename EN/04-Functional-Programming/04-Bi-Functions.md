# BiFunctions

[slide hideTitle]

# BiFunctions

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/05-Functional-Programming/EN/interactive-java-advanced-functional-programming-24-25-BiFunctions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `BiFunction <T,U,R>` interface is a part of the **java.util.function** package.

## Type parameters:

**T** - The type of the first argument of the function

**U** - The type of the second argument of the function

**R** - The type of the result of the function

It represents a **function** that accepts two arguments and returns a **result**.

``` java
BiFunction <Integer, Integer, String> sum = (x, y) -> "Sum is" + (x + y);
// We have two input parameters
```

Analogically, we can use:

- `BiConsumer <T, U>`

- `BiPredicate <T, U>`

[/slide]

[slide hideTitle]
# Problem with Solution: Sum Numbers

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/05-Functional-Programming/EN/interactive-java-advanced-functional-programming-26-27-Sum-Numbers-BiFunction-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Numbers" taskId="oop-basics-java-functional-programming-lab-Sum-Numbers-BiFunction" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that reads **a line of Integers** separated by a comma and a single space ", ". 

Print the **count of the numbers** and **their sum**. 

This time use a **BiFunction**.

## Hints
Use `BiFunction<Integer, String, Integer>` to parse the integers after you split them into a String array.

# Examples


| **Input** | **Output** |
| --- | --- |
| 4, 2, 1, 3, 5, 7, 1, 4, 2, 12 | Count = 10 |
|  | Sum = 41 |



| **Input** | **Output** |
| --- | --- |
| 2, 4, 6  | Count = 3 |
|  | Sum = 12 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4, 2, 1, 3, 5, 7, 1, 4, 2, 12
[/input]
[output]
Count = 10
Sum = 41
[/output]
[/test]
[test open]
[input]
2, 4, 6
[/input]
[output]
Count = 3
Sum = 12
[/output]
[/test]
[test]
[input]
84, 31, 31, 54, 38, 50, 6, 34, 63, 50, 3, 61, 51, 61, 5, 79, 60, 79, 51, 34
[/input]
[output]
Count = 20
Sum = 925
[/output]
[/test]
[test]
[input]
87
[/input]
[output]
Count = 1
Sum = 87
[/output]
[/test]
[test]
[input]
85, 47, 91, 32, 83, 75, 81, 25, 31, 72
[/input]
[output]
Count = 10
Sum = 622
[/output]
[/test]
[test]
[input]
93, 26, 52, 9, 69, 31, 72, 13, 58, 10
[/input]
[output]
Count = 10
Sum = 433
[/output]
[/test]
[test]
[input]
77, 32, 36, 3, 33, 19, 90, 14, 5, 4, 44, 71, 5, 69, 67, 15, 2, 52, 59, 3, 12, 88, 66, 50, 91, 31, 84, 11, 43, 73, 95, 98, 17, 23, 93, 47, 68, 10, 84, 94, 63, 97, 74, 52, 69, 81, 61, 68, 15, 6, 68, 22, 52, 45, 29, 96, 70, 16, 27, 20, 85, 25, 27, 37, 32, 70, 16, 25, 73, 17, 11, 87, 81, 18, 42, 76, 28, 69, 13, 46, 42, 87, 23, 5, 25, 43, 6, 99, 3, 22, 89, 85, 49, 12, 14, 80, 63, 58, 85, 40, 74, 41, 57, 20, 31, 19, 44, 19, 71, 7, 91, 73, 53, 25, 33, 7, 97, 63, 29, 11, 51, 54, 61, 56, 44, 67, 14, 8, 9, 83, 25, 30, 2, 36, 50, 24, 74, 10, 47, 29, 76, 48, 6, 91, 98, 53, 16, 56, 44, 54, 97, 66, 63, 3, 70, 40, 27, 7, 11, 82, 8, 72, 87, 36, 65, 19, 76, 32, 85, 17, 78, 48, 6, 85, 31, 46, 78, 74, 7, 62, 5, 85, 22, 3, 50, 59, 52, 17, 39, 64, 84, 98, 32, 54, 59, 94, 64, 86, 68, 81, 82, 43, 48, 47, 38, 79, 65, 39, 37, 52, 54, 41, 48, 7, 47, 65, 88, 28, 50, 69, 73, 11, 45, 67, 98, 79, 95, 36, 95, 99, 17, 51, 4, 54, 34, 52, 43, 68, 68, 48, 60, 6, 59, 71, 55, 28, 53, 44, 73, 3, 45, 57, 95, 63, 12, 60, 42, 63, 31, 91, 51, 14, 99, 37, 80, 21, 50, 7, 54, 10, 35, 87, 9, 75, 78, 54, 41, 36, 76, 40, 96, 88, 22, 80, 30, 55, 36, 15, 30, 85, 5, 28, 51, 52, 7, 94, 40, 99, 62, 80, 31, 49, 7, 87, 38, 23, 18, 62, 95, 10, 30, 77, 99, 66, 20, 78, 8, 46, 72, 79, 6, 33, 93, 95, 67, 34, 9, 96, 97, 91, 58, 37, 27, 73, 56, 37, 56, 57, 79, 9, 6, 63, 52, 96, 59, 25, 10, 11, 18, 54, 88, 39, 71, 36, 22, 49, 66, 32, 50, 21, 20, 33, 32, 26, 76, 47, 44, 98, 25, 52, 86, 44, 72, 35, 74, 15, 49, 21, 45, 99, 42, 19, 15, 15, 82, 82, 90, 17, 41, 85, 62, 81, 9, 62, 61, 53, 21, 64, 88, 8, 60, 54, 72, 85, 40, 10, 73, 40, 73, 71, 97, 58, 7, 48, 33, 18, 39, 24, 77, 32, 26, 32, 10, 5, 85, 55, 41, 19, 36, 38, 47, 29, 70, 27, 90, 17, 82, 78, 17, 27, 86, 80, 85, 11, 48, 93, 97, 68, 27, 44, 76, 3, 80, 89, 91, 4, 9, 39, 83, 76, 91, 62, 42, 72, 88, 53, 2, 20, 2, 83, 76, 43, 82, 22, 22, 94, 35, 2, 99, 38, 55, 6, 91, 36, 95, 91, 83, 89, 97, 4, 76, 13, 23, 97, 69, 38, 95, 50, 95, 11, 88, 24, 20, 26, 51, 64, 33, 7, 39, 26, 25, 54, 30, 85, 12, 26, 12, 32, 74, 14, 17, 76, 35, 93, 42, 88, 5, 75, 51, 42, 4, 46, 52, 98, 58, 29, 30, 63, 45, 97, 63, 14, 74, 21, 44, 19, 6, 62, 8, 48, 72, 19, 61, 89, 39, 56, 71, 65, 87, 41, 44, 13, 68, 20, 5, 19, 40, 32, 90, 68, 72, 63, 23, 3, 95, 33, 20, 32, 28, 32, 97, 25, 11, 93, 90, 49, 26, 28, 36, 19, 29, 68, 53, 99, 19, 20, 15, 28, 31, 15, 20, 59, 41, 66, 90, 89, 23, 72, 42, 39, 56, 85, 27, 22, 80, 25, 24, 73, 37, 71, 22, 68, 84, 70, 72, 53, 29, 87, 4, 26, 73, 20, 48, 48, 25, 64, 9, 93, 6, 99, 22, 80, 48, 68, 27, 8, 53, 63, 61, 50, 89, 55, 22, 60, 92, 85, 52, 96, 17, 75, 58, 78, 18, 40, 95, 89, 43, 75, 67, 17, 29, 23, 49, 30, 44, 31, 95, 49, 21, 67, 32, 50, 12, 64, 52, 25, 33, 48, 16, 61, 98, 46, 47, 6, 62, 36, 84, 62, 51, 14, 79, 51, 45, 97, 61, 80, 37, 70, 98, 88, 21, 15, 29, 79, 14, 63, 16, 44, 13, 96, 42, 22, 83, 16, 73, 43, 29, 75, 33, 3, 13, 77, 74, 20, 7, 49, 95, 2, 56, 94, 44, 20, 31, 50, 54, 10, 36, 52, 9, 92, 14, 93, 49, 26, 26, 32, 77, 84, 2, 27, 50, 62, 83, 33, 8, 44, 33, 26, 35, 10, 86, 57, 49, 10, 82, 65, 71, 98, 35, 63, 92, 32, 16, 83, 5, 47, 5, 5, 23, 6, 6, 27, 83, 28, 59, 39, 7, 74, 29, 76, 28, 4, 94, 99, 32, 3, 33, 89, 72, 65, 32, 9, 20, 32, 62, 43, 82, 36, 99, 24, 24, 42, 34, 81, 63, 57, 15, 86, 25, 30, 34, 32, 64, 78, 71, 19, 55, 50, 30, 65, 55, 16, 29, 16, 29, 46, 17, 28, 14, 37, 63, 99, 63, 81, 49, 50, 98, 79, 76, 61, 88, 49, 49, 33, 81, 90, 74, 41, 4, 76, 69, 62, 39, 82, 18, 15, 2, 2, 7, 72, 92, 55, 66, 96, 8, 9, 57, 79, 84, 24, 69, 88, 91, 27, 48, 5, 68, 95, 39, 72, 57, 52, 31, 79, 90, 97, 52, 32, 4, 31, 27, 30, 52, 5, 63, 14, 53, 38, 98, 8, 3, 29, 43, 38, 4, 46, 85, 92, 16, 23, 46, 38, 84, 16, 38, 36, 7, 96, 39, 31, 7, 30, 94, 92, 67, 78, 20, 53, 84, 17, 81, 6, 57, 51, 7, 57, 83, 87, 56, 24, 50, 43, 52, 12, 94, 5, 8, 64, 69, 49, 77, 54, 11, 27, 71, 28, 73, 29, 43, 74, 64, 32, 60, 18, 69, 21, 19, 23, 35, 58, 81, 64, 39, 86, 44, 29, 75, 6, 57, 66
[/input]
[output]
Count = 1000
Sum = 48660
[/output]
[/test]
[test]
[input]
3, 5, 2
[/input]
[output]
Count = 3
Sum = 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Passing Functions to Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/05-Functional-Programming/EN/interactive-java-advanced-functional-programming-28-Passing-Functions-to-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can **pass** `Function<T,R>` to methods:

``` java
static int operation(int number, Function<Integer, Integer> function) {
  return function.apply(number);
}

```

We can **use the method** as follows:

``` java
int a = 5;
int b = operation(a, number -> number + 5); // b = 10;
int c = operation(a, number -> number * 3); // b = 15;
int d = operation(b, number -> number % 2); // b = 0;
```

[/slide]


[slide hideTitle]
# Problem with Solution: Filter by Age

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/05-Functional-Programming/EN/interactive-java-advanced-functional-programming-29-Filter-by-Age-Solution-NEW2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Filter by Age" taskId="oop-basics-java-functional-programming-lab-Filter-by-Age" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a program that reads an integer **N** from the console.

On the next **N** lines, you will receive pairs of **name** and **age** combinations. 

After that, you will receive **three more lines** that will contain:

- Condition - **"younger"** or **"older"**

- Age - **Integer**

- Format - **"name"**, **"age"**, or **"name age"**

Depending on the **condition**, print the **pairs** in the specified **format**.


**Do not use any built-in functionalities.**

**Write your own methods.**


## Examples

| **Input** | **Output** |
| --- | --- |
| 5 | Peter - 20 |
| Peter - 20 | Maria - 29 |  
| George, 18 | Alex - 31 |
| Maria, 29 | |
| Alex, 31 | |
| Ivan, 16 | |
| older | |
| 20 | |
| name age | |


| **Input** | **Output** |
| --- | --- |
| 5 | Peter |
| Peter - 20 | George |  
| George, 18 | Ivan |
| Maria, 29 | |
| Alex, 31 | |
| Ivan, 16 | |
| younger | |
| 20 | |
| name | |

## Example 3
| **Input** | **Output** |
| --- | --- |
| 5 | 20
| Peter - 20 | 18 |  
| George, 18 | 29 |
| Maria, 29 | 31 |
| Alex, 31 | 16 |
| Ivan, 16 | |
| younger | |
| 50 | |
| age | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
older
20
name age
[/input]
[output]
Peter - 20
Maria - 29
Alex - 31
[/output]
[/test]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
younger
20
name
[/input]
[output]
Peter
George
Ivan
[/output]
[/test]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
younger
50
age
[/input]
[output]
20
18
29
31
16
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
younger
30
name
[/input]
[output]
Pesho
Gosho
Mimi
Simo
[/output]
[/test]
[test]
[input]
3
Pesho, 20
Gosho, 18
Mimi, 29
younger
30
name
[/input]
[output]
Pesho
Gosho
Mimi
[/output]
[/test]
[test]
[input]
3
Pesho, 20
Gosho, 18
Mimi, 29
younger
30
name age
[/input]
[output]
Pesho - 20
Gosho - 18
Mimi - 29
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
older
15
name age
[/input]
[output]
Pesho - 20
Gosho - 18
Mimi - 29
Ico - 31
Simo - 16
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
younger
15
name age
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]
