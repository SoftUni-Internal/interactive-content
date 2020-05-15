
# Sorting Lists and Arrays

[slide]
# Sorting Lists
- sorting Lists of Strings in ascending order using `Collections.sort()` - method
```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names));
```
- sorting Lists of Strings in descending order using `Collections.sort()` and `Collections.reverse()` - methods
```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);     // sort in ascending order

Collections.reverse(names);  // reverse the List 

System.out.println(String.join(", ", names));
```
[/slide]

[slide]
# Sorting Arrays
- sorting `int []` in ascending order using `Arrays.sort()` - method

```java live
int[] numbers = new int[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers); // sort in ascending order

for (int number : numbers) {
    System.out.print(number + " ");
}
```
- sorting `Integer []` in descending order using `Arrays.sort()` and `Collections.sort()`
```java live
Integer[] numbers = new Integer[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers);

Collections.reverse(Arrays.asList(numbers)); 

for (int number : numbers) {
    System.out.print(number + " ");
}
```
Let's explain what does the code above:

- Initializing `Integer []` with 6 items, pay attention that the items **are Integers** not ints (primitive types)

- We use `Arrays.sort()` to sort the array in **ascending** order

- There is no direct method to reverse the Array, so we convert the Array in List using Arrays.asList() - method, pay attention that this 

method **doesn't work** with **primitive data types like int, double, char, boolean, etc.**


[/slide]


[slide]
# Problem: List of products
[code-task title="List of products" taskId="3a288194-0a43-4869-89ff-b2167179ce8e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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


[slide]
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
        for (int i = 0; i < products.size(); i++)
            System.out.printf("%d.%s%n", i + 1, products.get(i));
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