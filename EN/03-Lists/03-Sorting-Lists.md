# Sorting Lists

[slide hideTitle]
# Sorting Lists

[vimeo-video startTimeInSeconds="8035" endTimeInSeconds="10485"]
[stream language="EN" videoId="421781852" default /]
[stream language="RO" videoId="431758884"  /]
[/video-vimeo]

**`Collections.sort()`** - sorts a List in ascending order. In the case of String values they will be sorted in alphabetical order.

```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names));
```
**`Collections.reverse()`** - sorts the collection in descending order.

```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.reverse(names); 

System.out.println(String.join(", ", names));
```
[/slide]

[slide hideTitle]
# Problem with Solution: List of Products
[code-task title="List of Products" taskId="java-fund-Lists-List-of-products" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read a number **n** and **n lines of products**.

Print a **numbered list** of all the products **ordered by name**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 4 | 1.Apples |
| Potatoes | 2.Onions |
| Tomatoes | 3.Potatoes |
| Onions | 4.Tomatoes |
| Apples |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Potatoes
Tomatoes
Onions
Apples
[/input]
[output]
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
[/output]
[/test]
[test]
[input]
3
a
b
c
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
3
c
b
a
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1.a
[/output]
[/test]
[test]
[input]
2
A
a
[/input]
[output]
1.A
2.a
[/output]
[/test]
[test]
[input]
5
a
c
b
e
d
[/input]
[output]
1.a
2.b
3.c
4.d
5.e
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Remove Negatives and Reverse
[code-task title="Remove Negatives and Reverse" taskId="java-fund-Lists-Remove-Negatives-and-Reverse" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Read a **list of integers**, **remove all negative numbers** from it, and print the remaining elements in **reversed order**.

If there are no more elements remaining in the list, print "**empty**".

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 -5 7 9 -33 50 | 50 9 7 10 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 7 -2 -10 1 | 1 7 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| -1 -2 -3 | empty |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 -5 7 9 -33 50
[/input]
[output]
50 9 7 10
[/output]
[/test]
[test open]
[input]
7 -2 -10 1
[/input]
[output]
1 7
[/output]
[/test]
[test open]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test open]
[input]
-1 -2 -3 -4
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
10 -5 7 9 -33 54
[/input]
[output]
54 9 7 10
[/output]
[/test]
[test]
[input]
8 -2 -10 1
[/input]
[output]
1 8
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
-1 -2 -3
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
-1 37 5 5 3 3 49 -2 4 4 83 -7 3 4 8 -33
[/input]
[output]
8 4 3 83 4 4 49 3 3 5 5 37
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

