# Associative Arrays

[slide hideTitle]
# Associative Arrays: Maps

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-16-17-Associative-Arrays-Maps-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You have learned that Arrays store items as an ordered collection and you have to access them with an index number - **int type**.

An Associative Array, however, stores items in **key**-**value** pairs, and you can access them by an index of another type (e.g. a "String").

One object is used as a key (index) to another object (value). 

The type of the keys and values can not primitive like `int`, `double`, `boolean`, etc. 

They must be specified with the equivalent wrapper class: `Integer`, `Double`, `Boolean`, etc.

The type of **key** and the **value** can be the same or different, depending on the case.

In Java, associative arrays are also called **Maps**. 

A Map **can not contain duplicate keys**. Each **Key** can map to at most one value.

But **the values can be duplicated**. 

For one **Key** only one **Value** can be stored in the same Map instance.

**For example:**

| **Products** | **Prices** |
| --- | --- |
| **Key** | **Value** |
| Tomatoes | 12.50 |
| Bananas | 6.50 |
| Apples| 6.50 |
| Cucumbers | 7.50 |

**The Java platform contains three general-purpose Map implementations:**

- `HashMap<K, V>`

- `TreeMap<K, V>`

- `LinkedHashMap<K, V>`

**The main features of "Maps" are:**
- Hold a set of \<key, value\> pairs 
- Contain unique keys
- Each key is mapped to a single value
- It can contain duplicate values

**Based on the features of the Maps, here are some examples:**
- A map of error codes and their descriptions
- A map of zip codes and cities
- A map of managers and their employees. Each manager (**key**), is associated with a list of employees (**value**)
- A map of classes and students. Each class (**key**), is associated with a list of students (**value**)

 
[/slide]

[slide hideTitle]
# HashMap

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-19-20-HashmapPut-HashMap-Remove-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `HashMap<Key, Value>` is implemented as a **Hash Table** and there is **no ordering on the key-value pairs**.

It implements all of the **Map** operations and **allows null values** and **one null key**. 

Consider using a **HashMap** when **order does not matter and nulls are acceptable**.

- Initialization:

```java
Map<String, Integer> hashMap = new HashMap<>();
```

- Adding elements:
```java live
Map<String, String> hashMap = new HashMap<>();

hashMap.put("BMW", "M5");
hashMap.put("Mercedes", "AMG");
hashMap.put("Dacia", "Duster");

hashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```


- Removing elements:

```java live
Map<String, String> hashMap = new HashMap<>();

hashMap.put("Mercedes", "AMG");
hashMap.put("Dacia", "Duster");

hashMap.remove("Mercedes");

hashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```
[/slide]




[slide hideTitle]
# TreeMap 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-24-TreeMap-Put-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `TreeMap <Key, Value>` is **sorted** according to the **natural ordering of its keys**.

**TreeMaps** in Java **do not allow null keys**.

It is better to use a **TreeMap** when you want a **Map, sorted by its keys** (e.g. **alphabetic** order or **numeric** order). 

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
[/slide]

[slide hideTitle]
# LinkedHashMap 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-27-HashMap-LinkedHashMap-TreeMap-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `LinkedHashMap <Key, Value>` inherits the HashMap class but **maintains insertion order**. 

**It keeps the Keys in order of addition.** 

It is better to use a **LinkedHashMap** when you want **a Map with its key-value pairs are sorted by their insertion order.**

- Initialization:
```java
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
```
- Adding elements:
```java live
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

linkedHashMap.put("BMW", 5);
linkedHashMap.put("Mercedes", 3);
linkedHashMap.put("Opel", 4);
linkedHashMap.put("Dacia", 10);

linkedHashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```


[/slide]

[slide hideTitle]
# Built-in Methods

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-18-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `put(K key, V value)`: **adds the given items** in the map

Only a **single "Key - Value" pair** for each Key can exist in the Map **at the same time**. 

If `put()` is called more than once using the same Key, **the latest Value** passed to `put()` for that Key will **override** what is already stored in the Map for that Key. 

**The latest Value replaces the existing Value** for the given Key.

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
```

- `putIfAbsent(K key, V value)` - inserts the given Value with the given Key if it is **not already inserted**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.putIfAbsent("Boeing 737", 100);
System.out.println(airplanes.get("Boeing 737"));
```

- `get(K key)` - **accesses a Value** using its Key and **returns the Value** object
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
int peopleCount = airplanes.get("Boeing 737");
System.out.println(peopleCount);
```

- `remove(K key)` - **deletes** an item (entry) **using its Key**
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
System.out.println(airplanes.get("Boeing 737"));
```

- `clear()` - **removes** all items (entries) in the map.
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
System.out.println(airplanes.get("Boeing 737"));
System.out.println(airplanes.get("Airbus A320"));
```

- `size()` - returns the **number of items (entries)** in the Map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - check **if there is such Key object** in the Map and if there is returns `true`, else returns `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - checks **if there is such Value object** in the Map and if there is returns `true`, else returns `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - returns `true` if the Map is **empty** and `false` if it contains **at least one Key**
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


[slide hideTitle]
# Iterating Over a Map

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-21-Looping-Through-Maps-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iterating through objects of type `Map.Entry <K, V>`. 

**Cannot modify** the collection(read-only).

There are several ways to iterate over a Map.

- Iterating through the items of a map using a **for-each** loop

- `keySet()` - returns the keys as an **array**


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

- `values()` - returns the values as an **array**

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
  - `entry.getKey()` - returns the key from the Entry
  - `entry.getValue()` - returns the value from the Entry

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
- Iterating through the Map using the built-in method `forEach()`

```java live
Map<String, Integer> cars = new TreeMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

cars.forEach((key, value) -> System.out.println(key + " - " + value));
```

[/slide]

[slide hideTitle]

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

[slide hideTitle]
# Problem with Solution: Count Real Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-22-23-Problem-and-solution-Count-Numbers-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Count Real Numbers" taskId="java-advanced-sets-and-maps-advanced-lab-Count-Real-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that **counts** the occurrences of **real numbers**.

The input is a **single line with real numbers, separated by spaces**.

Print the numbers **in the order of appearance**.

All numbers must be formatted to the **first digit after the decimal point**. 

## Examples
| **Input** | **Output** |
| --- | --- |
| \-2.5 4 3 \-2.5 \-5.5 4 3 3 \-2.5 3 | \-2.5 \-\> 3 |
|  | 4.0 \-\> 2 |
|  | 3.0 \-\> 4 |
|  | \-5.5 \-\> 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0 | 2.3 \-\> 3 |
|  | 4.5 \-\> 5 |
|  | 5.5 \-\> 4 |
|  | 3.0 \-\> 7 |
|  | 4.0 \-\> 1 |

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



[slide hideTitle]
# Problem with Solution: Academy Graduation

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-25-26-Problem-and-solution-Academy-Graduation-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Academy Graduation" taskId="java-advanced-sets-and-maps-advanced-lab-Academy-Graduation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that:
- Reads from console **number of students**
- Reads a **pair of rows**
      - the first line is the **name of the student**
      - the second-line represents the grades for the courses they attended
- Print to the console: `{name} graduated with {averageScore}`

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | George graduated with 4.375 |
| George | Maria graduated with 5.125 |
| 3.75 5 | Peter graduated with 5.25 |
| Maria |  |
| 4.25 6 |  |
| Peter |  |
| 6 4.5 |  |

| **Input** | **Output** |
| --- | --- |
| 5 | Alice graduated with 4.145 |
| George | George graduated with 4.351249999999999 |
| 4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89  | James graduated with 4.09375 |
| Alice | Jennifer graduated with 3.3375 |
| 3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68  | Mick graduated with 4.11875 |
| Mick |  |
| 3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95  |  |
| Jennifer |  |
| 2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85 |  |
| James |  |
| 4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13 |  |


[hints]
[hint]
Think about the **proper types** of the map:

```java
Map<String, Double[]> graduationList = new TreeMap<>();
```
The **values** can be an **array**.
[/hint] 
[hint]
**Another variable** might be needed for **the average score**:

```java
double average; // ...

DecimalFormat decimalFormat = new DecimalFormat("0.###");
```
[/hint] 
[/hints] 
 

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
George graduated with 4.375
Maria graduated with 5.125
Peter graduated with 5.25
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
Alice graduated with 4.145
George graduated with 4.351249999999999
James graduated with 4.09375
Jennifer graduated with 3.3375
Mick graduated with 4.11875
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
Ganio graduated with 4.56
Gruio graduated with 4.6975
Mite graduated with 3.7824999999999998
Roza graduated with 2.9125
Trendafilka graduated with 3.775
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
Ganio graduated with 4.75
Gruio graduated with 4.36
Mite graduated with 3.45
Roza graduated with 2.08
Trendafilka graduated with 3.1
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
Ganio graduated with 4.835
Gruio graduated with 4.93
Mite graduated with 3.34
Roza graduated with 2.7800000000000002
Trendafilka graduated with 4.225
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
Ganio graduated with 4.635
Gruio graduated with 4.5183333333333335
Mite graduated with 4.123333333333334
Roza graduated with 3.1916666666666664
Trendafilka graduated with 4.288333333333333
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
