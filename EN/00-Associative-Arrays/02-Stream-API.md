# Stream API

[slide]
# Video

[vimeo-video startTimeInSeconds="5622" endTimeInSeconds="10868"]
[stream language="EN" videoId="421796076" default /]
[stream language="RO" videoId="435043258"  /]
[/video-vimeo]

[/slide]

[slide]
# Stream API

Java Stream API provides a **functional approach to process collections of objects/elements**. It allows to **reduce the code**, to create **more readable programs**, and to **improve productivity**. It also provides **easier coding of parallel operations**. 

A Java Stream is a component that is capable of **internal iteration of its elements**, this means it can **iterate its elements itself**. A stream is a **sequence of objects** that supports **various methods**. The stream does **not change the original data structure**, it provides result. 

Stream pipeline is a **chain of stream source**, **intermediate operations**, and a **terminal operation**. 

The API has many **terminal operations** that aggregate a stream to a **type** or a **primitive**, for example `count()` `max()` `min()` `sum()`, but these operations work according to the predefined implementation. 

It is called **terminal operation** because in order to get the minimum value, for example, have to **traverse the values inside the stream** and get the result. After getting the min value it is **not possible to convert that back into the stream** because the minimum value is just a value. 

Most of the methods use lambda expressions on the stream.


[/slide]


[slide]
# Processing Arrays with Stream API

Using **one line operations** on arrays instead of writing loops with indexes or `for-each` loops for simple operations when processing data:

- `min()` - finds and returns the **smallest** element in a collection:
```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .getAsInt();
System.out.println(min);
```

It is possible to set an alternative value to be returned instead of the minimum value, using `orElse()`.

```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

The value set in the `orElse()` operation is returned, if the array is empty.

```java live
int [] numbers = new int[]{};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

- `max()` - finds and returns the **largest** element in a collection
```java live
int [] numbers = new int[]{15, 25, 35};
int max = Arrays.stream(numbers)
            .max()
            .getAsInt();
System.out.println(max);
```

- `sum()` - finds and returns **the sum** of all elements in a collection
```java live
int [] numbers = new int[]{15, 25, 35};
int sum = Arrays.stream(numbers).sum();
System.out.println(sum);
```

- `average()` - finds and returns **the average** of all elements
```java live
int [] numbers = new int[]{15, 25, 35};
double average = Arrays.stream(numbers)
            .average()
            .getAsDouble();
System.out.println(average);
```

- `toArray()` - converting collection to an array
```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

- `map()` - manipulating elements in a collection
```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

```java live
String[] words = {"abc", "def", "geh", "yyy"};
words = Arrays.stream(words)
            .map(w -> w + "yyy")
            .toArray(String[]::new);
for (String word : words) {
    System.out.println(word);
}
```

`filter()` - select elements with given condition
```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .filter(n -> n > 0)
            .toArray();
```

[/slide]

[slide]
# Processing Collections with Stream API

Using one line operations on collections like lists, maps, instead of writing loops with indexes or `for-each` loops for simple operations when processing data:


- `min()` - finds and returns the **smallest** element in a collection:
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int min = numbers.stream()
            .mapToInt(n -> n.intValue())
            .min()
            .getAsInt();
System.out.println(min);
```

```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int min = numbers.stream()
            .min((n1, n2) -> n1.compareTo(n2))
            .get();
System.out.println(min);
```

- `max()` - finds and returns the **largest** element in a collection
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int max = numbers.stream()
            .mapToInt(n -> n.intValue())
            .max()
            .getAsInt();
System.out.println(max);
```

```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int max = numbers.stream()
            .max((n1, n2) -> n1.compareTo(n2))
            .get();
System.out.println(max);
```

- `sum()` - finds and returns **the sum** of all elements in a collection
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int sum = numbers.stream()
            .mapToInt(n -> n.intValue())
            .sum();
System.out.println(sum);
```

- `average()` - finds and returns **the average** of all elements
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
double average = numbers.stream()
            .mapToInt(n -> n.intValue())
            .average()
            .getAsDouble();
System.out.println(average);
```

- `toList()` - converting collection to a list
```java
List<Integer> numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .map(e -> Integer.parseInt(e))
            .collect(Collectors.toList());
```

[/slide]


[slide]
# Problem: Word Filter
[code-task title="Word Filter" taskId="862fa494-90f9-440d-a1cc-4f83cb8dd2c5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read an array of **strings**, take only words which length is **even**.

### Input / Constraints

Read an array of strings.

### Output

Print each word on a new line.

Filter those whose length is even.


## Examples
| **Input** | **Output** |
| --- | --- |
| kiwi orange banana apple | kiwi |
|  | orange |
|  | banana |

| **Input** | **Output** |
| --- | --- |
| pizza cake pasta chips | cake |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
kiwi orange banana apple
[/input]
[output]
kiwi
orange
banana
[/output]
[/test]
[test open]
[input]
pizza cake pasta chips
[/input]
[output]
cake
[/output]
[/test]
[test]
[input]
deal guide counter seat hobby
[/input]
[output]
deal
seat
[/output]
[/test]
[test]
[input]
deal guide counter seat hobby acute switch car widen criticism painter unfortunate pause boat
[/input]
[output]
deal
seat
switch
boat
[/output]
[/test]
[test]
[input]
photograph architect literature wardrobe hobby locate upset explosion extension favour gravel crutch misery resort leaf
[/input]
[output]
photograph
literature
wardrobe
locate
favour
gravel
crutch
misery
resort
leaf
[/output]
[/test]
[test]
[input]
adult visible strike dialect graduate issue bracket critical rest ignorant witness contract paint
[/input]
[output]
strike
graduate
critical
rest
ignorant
contract
[/output]
[/test]
[test]
[input]
adult visible strike dialect graduate issue bracket critical rest ignorant witness contract paint guerrilla jam diagram anticipation muggy rhetoric invite parade manage aid bank smooth native snub image injury real east storm sell
[/input]
[output]
strike
graduate
critical
rest
ignorant
contract
anticipation
rhetoric
invite
parade
manage
bank
smooth
native
snub
injury
real
east
sell
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Word Filter
[code-task title="Word Filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class WordFilter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] words = Arrays.stream(scanner.nextLine().split(" "))
                .filter(w->w.length() % 2 == 0).toArray(String[]::new);
        for (String word : words) {
            System.out.println(word);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Read an array of **strings**, take only words which length is **even**.

### Input / Constraints

Read an array of strings.

### Output

Print each word on a new line.

Filter those whose length is even.


## Examples
| **Input** | **Output** |
| --- | --- |
| kiwi orange banana apple | kiwi |
|  | orange |
|  | banana |

| **Input** | **Output** |
| --- | --- |
| pizza cake pasta chips | cake |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
kiwi orange banana apple
[/input]
[output]
kiwi
orange
banana
[/output]
[/test]
[test open]
[input]
pizza cake pasta chips
[/input]
[output]
cake
[/output]
[/test]
[test]
[input]
deal guide counter seat hobby
[/input]
[output]
deal
seat
[/output]
[/test]
[test]
[input]
deal guide counter seat hobby acute switch car widen criticism painter unfortunate pause boat
[/input]
[output]
deal
seat
switch
boat
[/output]
[/test]
[test]
[input]
photograph architect literature wardrobe hobby locate upset explosion extension favour gravel crutch misery resort leaf
[/input]
[output]
photograph
literature
wardrobe
locate
favour
gravel
crutch
misery
resort
leaf
[/output]
[/test]
[test]
[input]
adult visible strike dialect graduate issue bracket critical rest ignorant witness contract paint
[/input]
[output]
strike
graduate
critical
rest
ignorant
contract
[/output]
[/test]
[test]
[input]
adult visible strike dialect graduate issue bracket critical rest ignorant witness contract paint guerrilla jam diagram anticipation muggy rhetoric invite parade manage aid bank smooth native snub image injury real east storm sell
[/input]
[output]
strike
graduate
critical
rest
ignorant
contract
anticipation
rhetoric
invite
parade
manage
bank
smooth
native
snub
injury
real
east
sell
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Ordering / Sorting Collections

- Sorting in ascending (Natural) order
```java live no-template
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>() {{
            add(4);
            add(1);
            add(3);
            add(2);
        }};
        numbers = numbers.stream()
                .sorted((n1, n2) -> n1.compareTo(n2))
                .collect(Collectors.toList());
        for (Integer number : numbers) {
            System.out.println(number);
        }
    }
}
```

- Sorting in descending order
```java live  no-template
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>() {{
            add(4);
            add(1);
            add(3);
            add(2);
        }};
        numbers = numbers.stream()
                .sorted((n1, n2) -> n2.compareTo(n1))
                .collect(Collectors.toList());
        for (Integer number : numbers) {
            System.out.println(number);
        }
    }
}
```

- Sorting by multiple criteria

```java live
Map<String, Integer> products = new HashMap<>();
products.put("bananas", 6);
products.put("peaches", 4);
products.put("apples", 4);
products.put("strawberries", 15);
products.put("watermelon", 1);
products.put("pineapple", 1);
products.entrySet()
        .stream()
        .sorted((e1, e2) -> {
            int result = e2.getValue().compareTo(e1.getValue());
            if (result == 0) {
                result = e1.getKey().compareTo(e2.getKey());
            }
            return result;
        })
        .forEach(e -> System.out.println(e.getKey() + " " + e.getValue()));
```

- Using functional `forEach()`

```java live
Map<String, List<Integer>> courseGrades = new HashMap<>();
courseGrades.put("Mathematics", new ArrayList<>() {{
    add(5);
    add(6);
    add(6);
}});

courseGrades.put("English", new ArrayList<>() {{
    add(4);
    add(6);
}});

courseGrades.put("History", new ArrayList<>() {{
    add(4);
    add(4);
    add(5);
    add(6);
    add(5);
}});

courseGrades.put("Biology", new ArrayList<>() {{
    add(6);
    add(5);
    add(4);
    add(6);
}});

courseGrades.entrySet()
        .stream()
        .sorted((a, b) -> {
            if (a.getKey().compareTo(b.getKey()) == 0) {
                int sumFirst = a.getValue().stream().mapToInt(x -> x).sum();
                int sumSecond = b.getValue().stream().mapToInt(x -> x).sum();
                return sumFirst - sumSecond;
            }
            return b.getKey().compareTo(a.getKey());
        })
        .forEach(pair -> {
            System.out.println("Course: " + pair.getKey());
            System.out.print("Grades: ");
            pair.getValue().sort((a, b) -> a.compareTo(b));
            for (int num : pair.getValue()) {
                System.out.printf("%d ", num);
            }
            System.out.println();
        });
```

[/slide]


[slide]
# Problem: Largest 3 Numbers
[code-task title="Largest 3 Numbers" taskId="d49b1d1b-d371-411a-bbd5-98b77b6b62e9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read a **list of integers** and **print largest 3 of them**.

If there are **less** than 3, print **all** of them.

Order the list using **Stream API**.

### Input / Constraints
Read a list of integers.

### Output 

Print top 3 numbers with **for** loop.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 30 15 20 50 5 | 50 30 20 |

| **Input** | **Output** |
| --- | --- |
| 20 30 | 30 20 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 30 15 20 50 5
[/input]
[output]
50 30 20
[/output]
[/test]
[test open]
[input]
20 30
[/input]
[output]
30 20
[/output]
[/test]
[test]
[input]
3 3 9 5 2 3 3
[/input]
[output]
9 5 3
[/output]
[/test]
[test]
[input]
33 88 35 98 43 10 81
[/input]
[output]
98 88 81
[/output]
[/test]
[test]
[input]
91 4 7 49 83 51 73 34 45 24
[/input]
[output]
91 83 73
[/output]
[/test]
[test]
[input]
59 12
[/input]
[output]
59 12
[/output]
[/test]
[test]
[input]
53 3
[/input]
[output]
53 3
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Largest 3 Numbers
[code-task title="Largest 3 Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Largest3Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> nums = Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt).sorted((n1,n2) -> n2.compareTo(n1)).limit(3)
                .collect(Collectors.toList());

        for (Integer num : nums) {
            System.out.print(num + " ");

        }
    }
}
```
[/code-editor]
[task-description]
## Description
Read a **list of integers** and **print largest 3 of them**.

If there are **less** than 3, print **all** of them.

Order the list using **Stream API**.

### Input / Constraints
Read a list of integers.

### Output 

Print top 3 numbers with **for** loop.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 30 15 20 50 5 | 50 30 20 |

| **Input** | **Output** |
| --- | --- |
| 20 30 | 30 20 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 30 15 20 50 5
[/input]
[output]
50 30 20
[/output]
[/test]
[test open]
[input]
20 30
[/input]
[output]
30 20
[/output]
[/test]
[test]
[input]
3 3 9 5 2 3 3
[/input]
[output]
9 5 3
[/output]
[/test]
[test]
[input]
33 88 35 98 43 10 81
[/input]
[output]
98 88 81
[/output]
[/test]
[test]
[input]
91 4 7 49 83 51 73 34 45 24
[/input]
[output]
91 83 73
[/output]
[/test]
[test]
[input]
59 12
[/input]
[output]
59 12
[/output]
[/test]
[test]
[input]
53 3
[/input]
[output]
53 3
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

