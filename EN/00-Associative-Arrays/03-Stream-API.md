[slide hideTitle]
# Stream API

The Java **Stream API** provides a **functional approach to process collections of objects/elements**. 

It allows us to **reduce the code**, create **code that is easier to read**, and **improve productivity**. 

It also provides **easier coding of parallel operations**. 

A Java Stream is a component that is capable of **internal iteration of its elements**, which means that it can **iterate its elements itself**. 

A stream is a **sequence of objects** that supports **various methods**. 

The stream does **not change the original data structure**, it only provides a result. 

Stream pipeline is a **chain of stream source**, **intermediate operations**, and a **terminal operation**. 

The API has many **terminal operations** that aggregate a stream and return **one** value by combining the contents of the stream:

- `count()` 

- `max()` 

- `min()` 

- `sum()` 

These operations work according to the predefined implementation. 

It is called **terminal operation** because, to get the minimum value, we have to **traverse the values inside the stream** and get the result. 

After getting the min value, it is **not possible to convert that back into a stream**. 

Most methods use **lambda expressions**.

[/slide]


[slide hideTitle]
# Processing Arrays with the Stream API

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-19-20-21-processing-arrays-with-stream-api-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can process **arrays** using **one-line operations**, instead of writing loops with indexes or `for-each` loops for simple operations when processing data:

- `min()` - Finds and returns the **smallest** element in a collection

```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .getAsInt();
System.out.println(min);
```

It is possible to set an alternative **return value**, using the `orElse()` method.

```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

The value set in the `orElse()` operation is returned if the array is empty.

```java live
int [] numbers = new int[]{};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

- `max()` - Finds and returns the **largest** element in a collection

```java live
int [] numbers = new int[]{15, 25, 35};
int max = Arrays.stream(numbers)
            .max()
            .getAsInt();
System.out.println(max);
```

- `sum()` - Finds and returns **the sum** of all elements in a collection

```java live no-template
int [] numbers = new int[]{15, 25, 35};
int sum = Arrays.stream(numbers).sum();
System.out.println(sum);
```

- `average()` - Finds and returns **the average value** of all elements

```java live
int [] numbers = new int[]{15, 25, 35};
double average = Arrays.stream(numbers)
            .average()
            .getAsDouble();
System.out.println(average);
```

[/slide]

[slide hideTitle]
# Processing Collections with Stream API

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-26-converting-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use one-line operations on collections like **Lists** and **Maps**, instead of writing loops with indexes or `for-each` loops for simple operations when processing data:

- `min()` - Finds and returns the **smallest** element in a collection:

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

- `max()` - Finds and returns the **largest** element in a collection

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

- `sum()` - Finds and returns **the sum** of all elements in a collection

```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int sum = numbers.stream()
            .mapToInt(n -> n.intValue())
            .sum();
System.out.println(sum);
```

- `average()` - Finds and returns **the average value** of all elements

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

[/slide]

[slide hideTitle]

# Manipulating Collections

Collections can be **modified** by using the `map()` method.

Take a look at the following examples:

```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

The code above splits the scanner input by space, then goes through each element with `maptoInt()`, parsing it to Integer.

```java live
String[] words = {"abc", "def", "geh", "yyy"};
words = Arrays.stream(words)
            .map(w -> w + "yyy")
            .toArray(String[]::new);
for (String word : words) {
    System.out.println(word);
}
```

In the above example, we are using the `map()` method to gothrough the elements in the **words** array.

`w -> w + "yyy"` means that this lambda function takes in one parameter, which can be named "w", "x", "e", "element" or any way you like and performs an operation on each element (in this case, concatenating a string to each).

[/slide]

[slide hideTitle]

# Converting Collections

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-26-converting-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **two** ways to convert collections in Java:

- `toArray()` - Converts a collection into an **array**

```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

- `toList()` - Converts a collection into a **list**

```java
List<Integer> numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .map(e -> Integer.parseInt(e))
            .collect(Collectors.toList());
```

[/slide]

[slide hideTitle]

# Filtering Collections

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-27-filtering-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `filter()` method goes through a collection and gets only the elements that match certain criteria:

```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .filter(n -> n > 0)
            .toArray();
```

In the above example we are spliting the scanner input by space, parsing each element to Integer, then filtering and storings only elements that are greater than 0.

[/slide]

[slide hideTitle]
# Problem with Solution: Word Filter

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-28-problem-and-solution-word-filter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Word Filter" taskId="Java-Fundamentals-2-Associative-Arrays-lab-Word-Filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read an array of **strings**. Print out the words whose length is an **even** number, each on a new line.

## Input / Constraints

Read an array of **strings**.

## Output

Print each word on a new line.

Filter only those words whose length is an **even** number.


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

[slide hideTitle]
# Ordering / Sorting Collections

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-30-sorting-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **two** ways to sort collections:

- Sorting in **ascending** (**Natural**) order:

```java live

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

```

- Sorting in **descending** order:

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
                .sorted((n1, n2) -> n2.compareTo(n1))
                .collect(Collectors.toList());
        for (Integer number : numbers) {
            System.out.println(number);
        }
    }
}
```

[/slide]

[slide hideTitle]

# Sorting Collections by Multiple Criteria

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-31-sorting-collections-by-multiple-criteria-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

It is also possible to sort collections by multiple criteria.

Consider the following example:

```java live no-template
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

[/slide]

[slide hideTitle]

# Using Functional ForEach

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-32-33-using-functional-for-each-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `forEach()` method is used to iterate over every pair in a Map.

Take a look at the following example:

```java live no-template
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


[slide hideTitle]
# Problem with Solution: Largest 3 Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-34-problem-largest-three-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Largest 3 Numbers" taskId="Java-Fundamentals-2-Associative-Arrays-lab-large-3-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read a **list of integers** and **print the biggest 3 of them**.

If there are **less** than 3 numbers, print **all** of them.

Order the list using the **Stream API**.

## Input / Constraints

Read a list of integers.

## Output 

Print the 3 biggest numbers.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 30 15 20 50 5 | 50 30 20 |
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

