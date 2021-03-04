

[slide]
# Stream API

Java Stream API permite o **functional approach to process collections of objects/elements**. Ea ne permite să **reduce the code**, pentru a crea **more readable programs**, și pentru a **improve productivity**. De asemenea, ne permite **easier coding of parallel operations**. 

Un Java Stream este o componentă care este capabilă de **internal iteration of its elements**, ceea ce înseamnă că poate să **iterate its elements itself**. Un stream este o **sequence of objects** care suportă **various methods**. Un stream **not change the original data structure**, dar oferă rezultate.

Stream pipeline este un **chain of stream source**, **intermediate operations**, și o **terminal operation**. 

Un API are multe **terminal operations** care agregă un stream va un **type** sau **primitive**, de examplu `count()` `max()` `min()` `sum()`, dar aceste operații lucrează conform cu implementările predefinite. 

Se numește **terminal operation** fiindcă pentru a obșine valoarea minimă, de exemplu, trebuie să **traverse the values inside the stream** și să obținem rezultate. După ce obținem valoarea minimă, este **not possible to convert that back into the stream** pentru că valoarea minumă este doar o valoare.

Cele mai multe dintre metode folosesc expresii lambda în stream.


[/slide]


[slide]
# Procesarea Array-urilor cu Stream API

Folosim **one line operations** pentru array-uri, bucle cu indexuri sau bucle`for-each` pentru operații simple, atunci când procesăm date:

- `min()` - găsește și returnează elementul **smallest** dintr-o colecție:
```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .getAsInt();
System.out.println(min);
```

Nu este posibil să fixăm o valoare alternativă care să fie returnată în loc de valoarea minimă, folosind `orElse()`.

```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

Valoarea fixată în operația `orElse()` este returnată, dacă array-ul este gol.

```java live
int [] numbers = new int[]{};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

- `max()` - găsește și returnează cel mai **largest** element dintr-o colecție.
```java live
int [] numbers = new int[]{15, 25, 35};
int max = Arrays.stream(numbers)
            .max()
            .getAsInt();
System.out.println(max);
```

- `sum()` - găsește și returnează **the sum** tuturor elementelor dintr-o colecție
```java live
int [] numbers = new int[]{15, 25, 35};
int sum = Arrays.stream(numbers).sum();
System.out.println(sum);
```

- `average()` - găsește și returnează **the average** tuturor elementelor
```java live
int [] numbers = new int[]{15, 25, 35};
double average = Arrays.stream(numbers)
            .average()
            .getAsDouble();
System.out.println(average);
```

- `toArray()` - converteșye colecția într-un array
```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

- `map()` - manipulează elementele dintr-o colecție
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

`filter()` - selectează elementele după o anumită condiție dată
```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .filter(n -> n > 0)
            .toArray();
```

[/slide]

[slide]
# Procesarea Colecțiilor cu Stream API

Folosește operațiile de pe o singură linie, cum ar fi lists, maps, in loc să scrie bucle cu indexuri `for-each` pentru operațiile simple, atunci când procesează date:


- `min()` - găsește și returnează **smallest** element dintr-o colectie:
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

- `max()` - găsește și returnează  **largest** element dintr-o colecție
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

- `sum()` - găsește și returnează **the sum** a tuturor elementelor dintr-o colecție
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int sum = numbers.stream()
            .mapToInt(n -> n.intValue())
            .sum();
System.out.println(sum);
```

- `average()` - găsește și returnează **the average** tuturor elementelor
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

- `toList()` - convertește colecția într-o listă
```java
List<Integer> numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .map(e -> Integer.parseInt(e))
            .collect(Collectors.toList());
```

[/slide]


[slide]
# Problem: Word Filter
[code-task title="Word Filter" taskId="Java-Fundamentals_part-Two-ASsociative-Arrays-Word-Filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Citiți un array de **strings**, luați în considerare doar cuvintele a căror lungime este **even**.

### Input / Constraints

Citiți un array de string-uri.

### Output

Imprimați fiecare cuvânt pe o nouă linie.

Filtrați cuvintele a căror lungime este pară.


## Exemple
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
    // Write your solution here
}
```
[/code-editor]
[task-description]
## Enunț
Citiți un array de **strings**, alegeți doar cuvintele a căror lungime este **even**.

### Input / Constraints

Citiți un array de string-uri.

### Output

Imprimați fiecare cuvânt pe o nouă linie.

Filtrați cuvintele a căror lungime este pară.


## Exemple
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
# Ordonarea / Sortarea Colecțiilor

- Sortați în ordine ascendenă (Naturală)
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

- Sortați în ordine descendentă
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

- Sortați după criterii diverse

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

- Folosim `forEach()`

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
[code-task title="Largest 3 Numbers" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-large-3-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

## Exemple
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
// Write your solution here
}
```
[/code-editor]
[task-description]
## Enunț
Citiți o **list of integers** și **print largest 3 of them**.

Dacă acestea sunt **less** decât 3, imprimați-le pe **all** 

Ordonați lista folosind  **Stream API**.

### Input / Constraints
Citiți o listă de integers.

### Output 

Imprimați primele 3 numere top 3 cu bucla **for**

## Exemple
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

