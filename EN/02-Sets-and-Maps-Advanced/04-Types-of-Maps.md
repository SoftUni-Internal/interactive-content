[slide]

# Types of Maps

## HashMap <Key, Value>

HashMap is implemented as a **Hash Table**, and there is **no ordering on keys or values**.

It implements all of the **Map** operations and **allows null values** and **one null key**. 

Consider to use a **HashMap** when **order does not matter and nulls are acceptable**.

- Initialization:
```java
Map<String, Integer> hashMap = new HashMap<>();
```
- Adding Elements 
```java live
Map<String, Integer> hashMap = new HashMap<>();

hashMap.put("BMW", 5);
hashMap.put("Mercedes", 3);
hashMap.put("Opel", 4);
hashMap.put("Dacia", 10);

hashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```
## TreeMap <Key, Value> 

**TreeMap** is **sorted** according to the **natural ordering of its keys**.

**TreeMap** in Java **does not allow null keys**.

It's better to use a **TreeMap** when you want **a Map sorts its key-value pairs by the natural order of the keys** (e.g. **alphabetic** order or **numeric** order).

- Initialization:
```java
Map<String, Integer> treeMap = new TreeMap<>();
```
- Adding Elements 
```java live
Map<String, Integer> treeMap = new TreeMap<>();

treeMap.put("BMW", 5);
treeMap.put("Mercedes", 3);
treeMap.put("Opel", 4);
treeMap.put("Dacia", 10);

treeMap.forEach((k, v) -> System.out.println(k + " - " + v));
```

## LinkedHashMap <Key, Value>

**LinkedHashMap** also maps a `Key` and a `Value`.

It inherits HashMap class, but **maintains insertion order**.

**Keeps the Keys in order of addition.**

It's better to use a **LinkedHashMap** when you want **a Map with its key-value pairs are sorted by their insertion order.**

- Initialization:
```java
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
```
- Adding Elements 
```java live
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

linkedHashMap.put("BMW", 5);
linkedHashMap.put("Mercedes", 3);
linkedHashMap.put("Opel", 4);
linkedHashMap.put("Dacia", 10);

linkedHashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```


[/slide]

[slide]
# Built-in methods

- `put(K key, V value)` - **add items** (insert an entry) in the map. 

Only a **single Key + Value pair** for each Key can exist in the Map **at the same time**. 

If `put()` is called more than once with the same Key, **the latest Value** passed to `put()` for that Key will **overwrite** what is already stored in the Map for that Key. 

**The latest Value replaces the existing Value** for the given Key.

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
```

- `putIfAbsent(K key, V value)` - insert the specified Value with the specified Key in the Map only if it is **not already existing**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.putIfAbsent("Boeing 737", 100);
System.out.println(airplanes.get("Boeing 737"));
```

- `get(K key)` - **access a Value** in the Map using its Key and **return the Value** object
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
int peopleCount = airplanes.get("Boeing 737");
System.out.println(peopleCount);
```

- `remove(K key)` - **delete** an item (entry) **using its Key**
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
System.out.println(airplanes.get("Boeing 737"));
```

- `clear()` - remove all items (entries) in the map, reset the Map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
System.out.println(airplanes.get("Boeing 737"));
System.out.println(airplanes.get("Airbus A320"));
```

- `size()` - return the **number of items (entries)** in the Map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - check **if there is such Key object** in the Map and if there is return `true`, else return `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - check **if there is such Value object** in the Map and if there is return `true`, else return `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - return `true` if the Map is **empty** and `false` if it contains **at least one Key**
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
System.out.println(airplanes.isEmpty());
```

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
System.out.println(airplanes.isEmpty());
```

[/slide]


[slide]
# Iterating over a Map

Iterating through objects of type **Map.Entry <K, V>**. **Cannot modify** the collection(read-only).

There are several ways to iterate the Keys stored in a Map.

- Iterating through the items of a map using a **for-each** loop

- `keySet()` - obtain only the keys

```java live
Map<String, Integer> cars = new LinkedHashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

for (String car : cars.keySet()) {
    System.out.println(car);
}
```

- `values()` - obtain only the values

```java live
Map<String, Integer> cars = new LinkedHashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

for (Integer number : cars.values()) {
    System.out.println(number);
}
```

- Iterating through the items of a map using the built-in method `entrySet()`
  - `entry.getKey()` - obtain the Keys
  - `entry.getValue()` - obtain the Values

```java live
Map<String, Integer> cars = new LinkedHashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

for (Map.Entry<String, Integer> entry : cars.entrySet()) {
    System.out.printf("%s -> %d%n", entry.getKey(), entry.getValue());
}
```
- Iterating through the Map using built-in method `forEach()`

```java live
Map<String, Integer> cars = new TreeMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

cars.forEach((key, value) -> System.out.println(key + " - " + value));
```

[/slide]

[slide]

# Sorting a Map

- Sorting according to Keys in ascending order

```java live no-template
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        Map<String, Integer> cars = new HashMap<>();

        cars.put("BMW", 5);
        cars.put("Mercedes", 3);
        cars.put("Opel", 2);
        cars.put("Dacia", 1);

        Map<String, Integer> sortedMap = cars
                .entrySet()
                .stream()

                // comparing the elements by its keys in ascending order
                // in case you want in descending order just swap 'a' and 'b'
                .sorted((a,b)->a.getKey().compareTo(b.getKey()))

                // saving the sorted items into new LinkedHashMap,
                // or you can print the elements directly using 'forEach()'
                .collect(Collectors
                        .toMap(Map.Entry::getKey, Map.Entry::getValue,
                                (oldValue, newValue) -> oldValue, LinkedHashMap::new));

        sortedMap.forEach((k, v) -> System.out.println(k + " - " + v));
    }
}
```


- Sorting according to Values in ascending order

```java live
Map<String, Integer> cars = new HashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 1);
        
cars.entrySet()
    .stream()
    // comparing the elements by its values in ascending order
    // in case you want in descending order just swap 'a' and 'b'
    .sorted((a,b)->a.getValue().compareTo(b.getValue()))

    // printing the elements directly using 'forEach()'
    .forEach(entry -> System.out.println(entry.getKey() + " - " + entry.getValue()));

```

- Sorting Map according to Values in ascending order if there are equal Values then sorting by the Keys

```java live
Map<String, Integer> cars = new HashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 1);
cars.put("Opel", 1);
cars.put("Dacia", 1);

cars.entrySet()
    .stream()
    .sorted((a,b)->{
        // compareTo() - returns 0 if the elements are equals
        int sort = a.getValue().compareTo(b.getValue());

        // if the values are equals compare by the keys
        if (sort == 0){
            // sorting by the keys
            return a.getKey().compareTo(b.getKey());
        }
        // in case there is no equal values
        return sort;
    })
    // printing the elements directly using 'forEach()'
    .forEach(entry -> System.out.println(entry.getKey() + " - " + entry.getValue()));

```



[/slide]

[slide]
# Problem: Count Real Numbers
[code-task title="Count Real Numbers" taskId="652e7421-f805-48bb-ac97-88e91f56fcc4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **counts** the occurrence of **real numbers**.

The input is a **single line with real numbers separated by spaces**.

Print the numbers **in the order of appearance**.

All numbers must be formatted to **one digit after the decimal point**.

## Examples
| **Input** | **Output** |
| --- | --- |
| -2.5 4 3 -2.5 -5.5 4 3 3 -2.5 3 | -2.5 -> 3 |
|  | 4.0 -> 2 |
|  | 3.0 -> 4 |
|  | -5.5 -> 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0 | 2.3 -> 3 |
|  | 4.5 -> 5 |
|  | 5.5 -> 4 |
|  | 3.0 -> 7 |
|  | 1.0	-> 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
-2.5 4 3 -2.5 -5.5 4 3 3 -2.5 3
[/input]
[output]
-2.5 -\> 3
4.0 -\> 2
3.0 -\> 4
-5.5 -\> 1
[/output]
[/test]
[test open]
[input]
2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0
[/input]
[output]
2.3 -\> 3
4.5 -\> 5
5.5 -\> 4
3.0 -\> 7
4.0 -\> 1
[/output]
[/test]
[test]
[input]
13 23 42 69 13 23 42 69 13 23 42 69 13 23 42 69 13 23 42 69
[/input]
[output]
13.0 -\> 5
23.0 -\> 5
42.0 -\> 5
69.0 -\> 5
[/output]
[/test]
[test]
[input]
1.111
[/input]
[output]
1.1 -\> 1
[/output]
[/test]
[test]
[input]
23 23 23 23 2 3 23 23 23 23 23 232 232 2323 23 23232
[/input]
[output]
23.0 -\> 10
2.0 -\> 1
3.0 -\> 1
232.0 -\> 2
2323.0 -\> 1
23232.0 -\> 1
[/output]
[/test]
[test]
[input]
-3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3
[/input]
[output]
-3.0 -\> 14
[/output]
[/test]
[test]
[input]
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
[/input]
[output]
0.0 -\> 10
1.0 -\> 10
2.0 -\> 10
3.0 -\> 10
4.0 -\> 10
5.0 -\> 10
6.0 -\> 10
7.0 -\> 10
8.0 -\> 10
9.0 -\> 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Count Real Numbers
[code-task title="Count Real Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[] input = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .mapToDouble(Double::parseDouble)
                .toArray();

        LinkedHashMap<Double, Integer> result = new LinkedHashMap<>();

        for (Double number : input) {
            if (!result.containsKey(number)) {
                result.put(number, 1);
            } else {
                result.put(number, result.get(number) + 1);
            }
        }
        for (Double key : result.keySet()) {
            System.out.println(String.format("%.1f -> %d", key, result.get(key)));
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that **counts** the occurrence of **real numbers**.

The input is a **single line with real numbers separated by spaces**.

Print the numbers **in the order of appearance**.

All numbers must be formatted to **one digit after the decimal point**.

## Examples
| **Input** | **Output** |
| --- | --- |
| -2.5 4 3 -2.5 -5.5 4 3 3 -2.5 3 | -2.5 -> 3 |
|  | 4.0 -> 2 |
|  | 3.0 -> 4 |
|  | -5.5 -> 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0 | 2.3 -> 3 |
|  | 4.5 -> 5 |
|  | 5.5 -> 4 |
|  | 3.0 -> 7 |
|  | 1.0	-> 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
-2.5 4 3 -2.5 -5.5 4 3 3 -2.5 3
[/input]
[output]
-2.5 -\> 3
4.0 -\> 2
3.0 -\> 4
-5.5 -\> 1
[/output]
[/test]
[test open]
[input]
2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0
[/input]
[output]
2.3 -\> 3
4.5 -\> 5
5.5 -\> 4
3.0 -\> 7
4.0 -\> 1
[/output]
[/test]
[test]
[input]
13 23 42 69 13 23 42 69 13 23 42 69 13 23 42 69 13 23 42 69
[/input]
[output]
13.0 -\> 5
23.0 -\> 5
42.0 -\> 5
69.0 -\> 5
[/output]
[/test]
[test]
[input]
1.111
[/input]
[output]
1.1 -\> 1
[/output]
[/test]
[test]
[input]
23 23 23 23 2 3 23 23 23 23 23 232 232 2323 23 23232
[/input]
[output]
23.0 -\> 10
2.0 -\> 1
3.0 -\> 1
232.0 -\> 2
2323.0 -\> 1
23232.0 -\> 1
[/output]
[/test]
[test]
[input]
-3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3
[/input]
[output]
-3.0 -\> 14
[/output]
[/test]
[test]
[input]
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
[/input]
[output]
0.0 -\> 10
1.0 -\> 10
2.0 -\> 10
3.0 -\> 10
4.0 -\> 10
5.0 -\> 10
6.0 -\> 10
7.0 -\> 10
8.0 -\> 10
9.0 -\> 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Problem: Academy Graduation
[code-task title="Academy Graduation" taskId="93d00f25-e775-4e57-b4f3-1e3c287550dd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that:
- Reads from console **number of students** for a track
- Reads on **pair of rows**:
      - First line is the **name of student**
      - Second line is his **score** for different number of courses
- Print on console "{**name**} is graduated with {**average scores**)"

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | George is graduated with 4.375 |
| George | Maria is graduated with 5.125 |
| 3.75 5 | Peter is graduated with 5.25 |
| Maria |  |
| 4.25 6 |  |
| Peter |  |
| 6 4.5 |  |

| **Input** | **Output** |
| --- | --- |
| 5 | Alice is graduated with 4.145 |
| George | George is graduated with 4.351249999999999 |
| 4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89  | James is graduated with 4.09375 |
| Alice | Jennifer is graduated with 3.3375 |
| 3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68  | Mick is graduated with 4.11875 |
| Mick |  |
| 3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95  |  |
| Jennifer |  |
| 2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85 |  |
| James |  |
| 4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13 |  |


## Hints
- Think about **proper type** of map
- **Value** can be **array**
- **Nested loop** and one more **variable** will be need for average score

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
George
3.75 5
Maria
4.25 6
Peter
6 4.5
[/input]
[output]
George is graduated with 4.375
Maria is graduated with 5.125
Peter is graduated with 5.25
[/output]
[/test]
[test open]
[input]
5
George
4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89 
Alice
3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68 
Mick
3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95 
Jennifer
2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85
James
4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13
[/input]
[output]
Alice is graduated with 4.145
George is graduated with 4.351249999999999
James is graduated with 4.09375
Jennifer is graduated with 3.3375
Mick is graduated with 4.11875
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 3.30 5.63
Trendafilka
3.10 5.35 3.30 3.35 
Mite
3.45 3.23 3.03 5.42 
Roza
2.08 3.48 3.36 2.73
Ganio
4.75 4.92 3.78 4.79
[/input]
[output]
Ganio is graduated with 4.56
Gruio is graduated with 4.6975
Mite is graduated with 3.7824999999999998
Roza is graduated with 2.9125
Trendafilka is graduated with 3.775
[/output]
[/test]
[test]
[input]
5
Gruio
4.36
Trendafilka
3.10
Mite
3.45
Roza
2.08
Ganio
4.75
[/input]
[output]
Ganio is graduated with 4.75
Gruio is graduated with 4.36
Mite is graduated with 3.45
Roza is graduated with 2.08
Trendafilka is graduated with 3.1
[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 
Trendafilka
3.10 5.35
Mite
3.45 3.23 
Roza
2.08 3.48
Ganio
4.75 4.92
[/input]
[output]
Ganio is graduated with 4.835
Gruio is graduated with 4.93
Mite is graduated with 3.34
Roza is graduated with 2.7800000000000002
Trendafilka is graduated with 4.225
[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 3.30 5.63 2.57 5.75 
Trendafilka
3.10 5.35 3.30 3.35 5.64 4.99 
Mite
3.45 3.23 3.03 5.42 5.46 4.15 
Roza
2.08 3.48 3.36 2.73 2.96 4.54 
Ganio
4.75 4.92 3.78 4.79 4.82 4.75
[/input]
[output]
Ganio is graduated with 4.635
Gruio is graduated with 4.5183333333333335
Mite is graduated with 4.123333333333334
Roza is graduated with 3.1916666666666664
Trendafilka is graduated with 4.288333333333333
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Academy Graduation
[code-task title="Academy Graduation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Double[]> graduationList = new TreeMap<>();

        int numberOfStudents = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < numberOfStudents; i++) {
            String name = scanner.nextLine();
            String[] scoresStrings = scanner.nextLine().split(" ");
            Double[] scores = new Double[scoresStrings.length];

            for (int j = 0; j < scoresStrings.length; j++) {
                scores[j] = Double.parseDouble(scoresStrings[j]);
            }
            graduationList.put(name, scores);
        }
        for (String student : graduationList.keySet()) {
            Double sumOfAllScores = 0d;
            for (Double score : graduationList.get(student)) {
                sumOfAllScores += score;
            }
            Double averageScore = sumOfAllScores / graduationList.get(student).length;
            System.out.println(student + " is graduated with " + averageScore);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that:
- Reads from console **number of students** for a track
- Reads on **pair of rows**:
      - First line is the **name of student**
      - Second line is his **score** for different number of courses
- Print on console "{**name**} is graduated with {**average scores**)"

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | George is graduated with 4.375 |
| George | Maria is graduated with 5.125 |
| 3.75 5 | Peter is graduated with 5.25 |
| Maria |  |
| 4.25 6 |  |
| Peter |  |
| 6 4.5 |  |

| **Input** | **Output** |
| --- | --- |
| 5 | Alice is graduated with 4.145 |
| George | George is graduated with 4.351249999999999 |
| 4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89  | James is graduated with 4.09375 |
| Alice | Jennifer is graduated with 3.3375 |
| 3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68  | Mick is graduated with 4.11875 |
| Mick |  |
| 3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95  |  |
| Jennifer |  |
| 2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85 |  |
| James |  |
| 4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13 |  |


## Hints
- Think about **proper type** of map
- **Value** can be **array**
- **Nested loop** and one more **variable** will be need for average score

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
George
3.75 5
Maria
4.25 6
Peter
6 4.5
[/input]
[output]
George is graduated with 4.375
Maria is graduated with 5.125
Peter is graduated with 5.25
[/output]
[/test]
[test open]
[input]
5
George
4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89 
Alice
3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68 
Mick
3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95 
Jennifer
2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85
James
4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13
[/input]
[output]
Alice is graduated with 4.145
George is graduated with 4.351249999999999
James is graduated with 4.09375
Jennifer is graduated with 3.3375
Mick is graduated with 4.11875
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 3.30 5.63
Trendafilka
3.10 5.35 3.30 3.35 
Mite
3.45 3.23 3.03 5.42 
Roza
2.08 3.48 3.36 2.73
Ganio
4.75 4.92 3.78 4.79
[/input]
[output]
Ganio is graduated with 4.56
Gruio is graduated with 4.6975
Mite is graduated with 3.7824999999999998
Roza is graduated with 2.9125
Trendafilka is graduated with 3.775
[/output]
[/test]
[test]
[input]
5
Gruio
4.36
Trendafilka
3.10
Mite
3.45
Roza
2.08
Ganio
4.75
[/input]
[output]
Ganio is graduated with 4.75
Gruio is graduated with 4.36
Mite is graduated with 3.45
Roza is graduated with 2.08
Trendafilka is graduated with 3.1
[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 
Trendafilka
3.10 5.35
Mite
3.45 3.23 
Roza
2.08 3.48
Ganio
4.75 4.92
[/input]
[output]
Ganio is graduated with 4.835
Gruio is graduated with 4.93
Mite is graduated with 3.34
Roza is graduated with 2.7800000000000002
Trendafilka is graduated with 4.225
[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 3.30 5.63 2.57 5.75 
Trendafilka
3.10 5.35 3.30 3.35 5.64 4.99 
Mite
3.45 3.23 3.03 5.42 5.46 4.15 
Roza
2.08 3.48 3.36 2.73 2.96 4.54 
Ganio
4.75 4.92 3.78 4.79 4.82 4.75
[/input]
[output]
Ganio is graduated with 4.635
Gruio is graduated with 4.5183333333333335
Mite is graduated with 4.123333333333334
Roza is graduated with 3.1916666666666664
Trendafilka is graduated with 4.288333333333333
[/output]
[/test]
[/tests]
[/code-task]
[/slide]