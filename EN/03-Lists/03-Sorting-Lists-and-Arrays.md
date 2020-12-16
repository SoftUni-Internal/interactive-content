# Sorting Lists and Arrays
[slide]
# Video

[vimeo-video startTimeInSeconds="8035" endTimeInSeconds="10485"]
[stream language="EN" videoId="421781852" default /]
[stream language="RO" videoId="431758884"  /]
[/video-vimeo]

[/slide]
[slide]
# Sorting Lists
- Sorting Lists of Strings in ascending order using `Collections.sort()`
```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names));
```
- Sorting Lists of Strings in descending order using `Collections.sort()` and `Collections.reverse()`

```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);     // sort in ascending order

Collections.reverse(names);  // reverse the List 

System.out.println(String.join(", ", names));
```
[/slide]

[slide]
# Sorting Arrays
- Sorting `int []` in ascending order using `Arrays.sort()`

```java live
int[] numbers = new int[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers); // sort in ascending order

for (int number : numbers) {
    System.out.print(number + " ");
}
```
- Sorting `Integer []` in descending order using `Arrays.sort()` and `Collections.reverse()`
```java live
Integer[] numbers = new Integer[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers);

Collections.reverse(Arrays.asList(numbers)); 

for (int number : numbers) {
    System.out.print(number + " ");
}
```
Let's explain what does the code above:

- Initializing `Integer []` with 6 items, pay attention that the items **are Integers**, not ints (primitive types)

- We use `Arrays.sort()` to sort the array in **ascending** order

- There is no direct method to reverse the Array, so we convert the Array in List using `Arrays.asList()` - method, pay attention that this method **doesn't work** with **primitive data types like int, double, char, boolean, etc.**


[/slide]


[slide hideTitle]
# Problem: List of products
[code-task title="List of products" taskId="java-fund-13-Lists-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Solution: List of products
[code-task title="List of products"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = Integer.parseInt(sc.nextLine());

        List<String> products = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            String currentProduct = sc.nextLine();
            products.add(currentProduct);
        }

        Collections.sort(products);

        for (int i = 0; i < products.size(); i++){

            System.out.printf("%d.%s%n", i + 1, products.get(i));
        }
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
# Problem: Remove Negatives and Reverse
[code-task title="Remove Negatives and Reverse" taskId="java-fund-13-Lists-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

In case of no elements left in the list, print "**empty**".

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


[slide hideTitle]
# Solution: Remove Negatives and Reverse
[code-task title="Remove Negatives and Reverse"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

        List<Integer> nums = Arrays
                .stream(sc.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        for (int i = 0; i < nums.size(); i++) {

            if (nums.get(i) < 0) {
                nums.remove(i--);
            }
        }

        Collections.reverse(nums);

        if (nums.size() == 0) {

            System.out.println("empty"); 

        } else {

            System.out.println(nums.toString().replaceAll("[\\[\\],]", ""));

        }
    }
}
```
[/code-editor]
[task-description]
## Description
Read a **list of integers**, **remove all negative numbers** from it, and print the remaining elements in **reversed order**.

In case of no elements left in the list, print "**empty**".

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
