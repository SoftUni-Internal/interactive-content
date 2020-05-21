[slide]
# Associative Arrays

Associative arrays are collections of type parameters **Key** and **Value** pairs and are indexed by **Keys**, not by numbers 0, 1, 2,... like arrays. The Key represents the index of the map. Keys and Values are **objects** and each pair is known as an entry. One object is used as a Key (index) to another object (Value). They can not be primitive types like int, double, boolean, etc. They must be specified with the equivalent wrapper class: Integer, Double, Boolean, etc. The type of Key and Value can be the same or different, depends from the case.

In Java associative arrays are called **Map**. A map can not contain duplicate Keys; each Key can map to at most one Value. But the values can be duplicated.

For example:

| *Name* | *Phone number* |
| ------- | --------- |
| **Key** | **Value** |
| John Smith | +1-555-8976 |
| Lisa Smith | +1-555-1234 |
| Amanda Doe| +1-555-5050 |
| Sam Doe | +1-555-5050 |


## Map Implementation

To use `Map` in Java import `java.util.Map` package. 

To implement a map specify the generic type of the key and the value in the angle brackets `<>`, followed by the map **name**, which should be descriptive enough to understand what the key and the value represent. After the equals sign `=` use the keyword `new` and the intended type of map.

```java
Map <Kay, Value> airplanes = new HashMap<>();
```

[/slide]

[slide]
# Map Types

There are three collection views, which allow a map's contents to be viewed as a set of keys, collection of values, or set of key-value mappings. The order of a map depends on the chosen collection view. Some map implementations, like the TreeMap class, make specific guarantees as to their order; others, like the HashMap class, do not. 

HashMap and LinkedHashMap allow `null` keys and values, but TreeMap does not allow any `null` key or value.

A Map can not be traversed, so you need to convert it into Set using `keySet()` or `entrySet()` method.


## HashMap < Key, Value >

HashMap is the implementation of Map, but it does not maintain any order.

## LinkedHashMap < Key, Value >

LinkedHashMap is the implementation of Map. It inherits HashMap class, but maintains insertion order.
Keeps the keys in order of addition.

## TreeMap < Key, Value >

TreeMap is the implementation of Map and StoredMap and maintains ascending order.
Keeps its keys always stored and uses a balanced search tree.

[/slide]


[slide]
# Built-in methods

- `put(K key, V value)` - add items (insert an entry) in the map 

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
```

- `putIfAbsent(K key, V value)` - insert the specified value with the specified key in the map only if it is not already existing

- `get(K key)` - access a value in the map using its key and return the value object
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
System.out.println(airplanes.get("Boeing 737"));
```

- `remove(K key)` - delete an item (entry) using its key
```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
```

- `clear()` - remove all items (entries) in the map, reset the map
```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
```

- `size()` - return the number of items (entries) in the map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - check if there is such Key object in the map and if there is return `true`, else return `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - check if there is such Value object in the map and if there is return `true`, else return `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - return `true` if the map is empty and `false` if it contains at least one key
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
# Iterating through Map

Iterating through objects of type Map.Entry<K, V>
Cannot modify the collection(read-only).

- Iterating through the items of a map using a **for-each** loop
  - `keySet()` - obtain only the keys
  ```java live
  Map<String, Double> fruitsPrice = new LinkedHashMap<>();
  fruitsPrice.put("banana", 2.20);
  fruitsPrice.put("kiwi", 4.50);
  for (String fruit : fruitsPrice.keySet()) {
      System.out.println(fruit);
  }
  ```

  - `values()` - obtain only the values
  ```java live
  Map<String, Double> fruitsPrice = new LinkedHashMap<>();
  fruitsPrice.put("banana", 2.20);
  fruitsPrice.put("kiwi", 4.50);
  for (Double price : fruitsPrice.values()) {
      System.out.println(price);
  }
  ```

- Iterating through the items of a map using the build-in method `entrySet()`
  - `entry.getKey()` - obtain the keys
  - `entry.getValue()` - obtain the values

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (Map.Entry<String, Double> entry : fruitsPrice.entrySet()) {
    System.out.printf("%s -> %.2f%n", entry.getKey(), entry.getValue());
}
```

[/slide]


[slide]
# Problem: Count Real Numbers
[code-task title="Count Real Numbers" taskId="2d224614-8c87-43c1-ab6a-873186350cad" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read a **list of real numbers** and print them in **ascending order** along with their **number of occurrences**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 82282 | 2 -> 3 |
|  | 8 -> 2 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 1513 | 1 -> 2 |
|  | 3 -> 1 |
|  | 5 -> 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| -2002 | -2 -> 1 |
|  | 0 -> 2 |
|  | 2 -> 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
8 2 2 8 2
[/input]
[output]
2 -\> 3
8 -\> 2
[/output]
[/test]
[test open]
[input]
1 5 1 3
[/input]
[output]
1 -\> 2
3 -\> 1
5 -\> 1
[/output]
[/test]
[test open]
[input]
-2 0 0 2
[/input]
[output]
-2 -\> 1
0 -\> 2
2 -\> 1
[/output]
[/test]
[test]
[input]
6 5 6 8 7 3 2 9 7 8
[/input]
[output]
2 -\> 1
3 -\> 1
5 -\> 1
6 -\> 2
7 -\> 2
8 -\> 2
9 -\> 1
[/output]
[/test]
[test]
[input]
8 5 1 7 8
[/input]
[output]
1 -\> 1
5 -\> 1
7 -\> 1
8 -\> 2
[/output]
[/test]
[test]
[input]
8 6 9 1 1 6 8
[/input]
[output]
1 -\> 2
6 -\> 2
8 -\> 2
9 -\> 1
[/output]
[/test]
[test]
[input]
3 3 8 3 6 5 8
[/input]
[output]
3 -\> 3
5 -\> 1
6 -\> 1
8 -\> 2
[/output]
[/test]
[test]
[input]
1 9 2 1 8 2 9
[/input]
[output]
1 -\> 2
2 -\> 2
8 -\> 1
9 -\> 2
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
import java.text.DecimalFormat;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class CountRealNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] numberStrings = scanner.nextLine().split(" ");
        double[] numbers = new double[numberStrings.length];
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = Double.parseDouble(numberStrings[i]);
        }

        TreeMap<Double, Integer> numberCounts = new TreeMap<>();

        for (double number : numbers) {
            if(numberCounts.containsKey(number)){
                Integer currentCount = numberCounts.get(number);
                numberCounts.put(number, 1 + currentCount);
            } else {
                numberCounts.put(number, 1);
            }
        }

        for(Map.Entry<Double, Integer> entry : numberCounts.entrySet()){
            DecimalFormat decimalFormat = new DecimalFormat("#.#######");
            System.out.printf("%s -> %d%n", decimalFormat.format(entry.getKey()), entry.getValue());
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Read a **list of real numbers** and print them in **ascending order** along with their **number of occurrences**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 82282 | 2 -> 3 |
|  | 8 -> 2 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 1513 | 1 -> 2 |
|  | 3 -> 1 |
|  | 5 -> 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| -2002 | -2 -> 1 |
|  | 0 -> 2 |
|  | 2 -> 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
8 2 2 8 2
[/input]
[output]
2 -\> 3
8 -\> 2
[/output]
[/test]
[test open]
[input]
1 5 1 3
[/input]
[output]
1 -\> 2
3 -\> 1
5 -\> 1
[/output]
[/test]
[test open]
[input]
-2 0 0 2
[/input]
[output]
-2 -\> 1
0 -\> 2
2 -\> 1
[/output]
[/test]
[test]
[input]
6 5 6 8 7 3 2 9 7 8
[/input]
[output]
2 -\> 1
3 -\> 1
5 -\> 1
6 -\> 2
7 -\> 2
8 -\> 2
9 -\> 1
[/output]
[/test]
[test]
[input]
8 5 1 7 8
[/input]
[output]
1 -\> 1
5 -\> 1
7 -\> 1
8 -\> 2
[/output]
[/test]
[test]
[input]
8 6 9 1 1 6 8
[/input]
[output]
1 -\> 2
6 -\> 2
8 -\> 2
9 -\> 1
[/output]
[/test]
[test]
[input]
3 3 8 3 6 5 8
[/input]
[output]
3 -\> 3
5 -\> 1
6 -\> 1
8 -\> 2
[/output]
[/test]
[test]
[input]
1 9 2 1 8 2 9
[/input]
[output]
1 -\> 2
2 -\> 2
8 -\> 1
9 -\> 2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Word Synonyms
[code-task title="Word Synonyms" taskId="37dfcf73-dcfa-46ba-91cb-1ee1387c01fc" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program which keeps a map with synonyms.

The **key** of the map will be the **word**.

The **value** will be a **list of all the synonyms of that word**.

### Input / Constraints

You will be given a number **n**.

On the next **2 * n** lines you will be given a **word** and a **synonym** each on a separate line like this:

- **/{word/}**

- **/{synonym/}**

If you get the same word for second time, just add the new synonym to the list.

### Output 

Print the words in the following format:
**/{word/} - /{synonym1, synonym2… synonymN/}**

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | cute - adorable, charming |
| cute | smart - clever |
| adorable |  |
| cute |  |
| charming |  |
| smart |  |
| clever |  |

| **Input** | **Output** |
| --- | --- |
| 2 | task – problem, assignment |
| task |  |
| problem |  |
| task |  |
| assignment |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
cute
adorable
cute
charming
smart
clever
[/input]
[output]
cute - adorable, charming
smart - clever
[/output]
[/test]
[test open]
[input]
2
task
problem
task
assignment
[/input]
[output]
task - problem, assignment
[/output]
[/test]
[test]
[input]
4
fashion
trend
fashion
model
fashion
look
cute
adorable
[/input]
[output]
fashion - trend, model, look
cute - adorable
[/output]
[/test]
[test]
[input]
7
fashion
trend
fashion
model
fashion
look
elegant
grand
elegant
fancy
elegant
classic
cute
adorable
[/input]
[output]
fashion - trend, model, look
elegant - grand, fancy, classic
cute - adorable
[/output]
[/test]
[test]
[input]
9
addicted
obsessed
addicted
hooked
addicted
attached
fashion
model
fashion
look
elegant
grand
elegant
fancy
elegant
classic
cute
adorable
[/input]
[output]
addicted - obsessed, hooked, attached
fashion - model, look
elegant - grand, fancy, classic
cute - adorable
[/output]
[/test]
[test]
[input]
8
fat
big
feedback
assessment
fat
plump
develop
advance
develop
establish
feedback
comment
feedback
criticism
fat
bulky
[/input]
[output]
fat - big, plump, bulky
feedback - assessment, comment, criticism
develop - advance, establish
[/output]
[/test]
[test]
[input]
8
condition
action
condition
case
condition
position
greet
accost
hello
greetings
hell
inferno
customer
client
customer
purchaser
[/input]
[output]
condition - action, case, position
greet - accost
hello - greetings
hell - inferno
customer - client, purchaser
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Word Synonyms
[code-task title="Word Synonyms" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class WordSynonyms {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numPairs = Integer.parseInt(scanner.nextLine());

        Map<String, List<String>> wordSynonyms = new LinkedHashMap<>();

        for (int i = 0; i < numPairs; i++) {
            String word = scanner.next();
            String synonym = scanner.next();

            List<String> currentSynonyms = wordSynonyms.get(word);
            if (currentSynonyms == null) {
                currentSynonyms = new ArrayList<>();
                wordSynonyms.put(word, currentSynonyms);
            }
            currentSynonyms.add(synonym);
        }

        for(Map.Entry<String, List<String>> entry : wordSynonyms.entrySet()){
            System.out.print(entry.getKey() + " - ");
            List<String> synonyms = entry.getValue();
            System.out.print(String.join(", ", synonyms));
            System.out.println();
        }
    }
}
```
[/code-editor]
[task-description]

## Description
Write a program which keeps a map with synonyms.

The **key** of the map will be the **word**.

The **value** will be a **list of all the synonyms of that word**.

### Input / Constraints

You will be given a number **n**.

On the next **2 * n** lines you will be given a **word** and a **synonym** each on a separate line like this:

- **/{word/}**

- **/{synonym/}**

If you get the same word for second time, just add the new synonym to the list.

### Output 

Print the words in the following format:
**/{word/} - /{synonym1, synonym2… synonymN/}**

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | cute - adorable, charming |
| cute | smart - clever |
| adorable |  |
| cute |  |
| charming |  |
| smart |  |
| clever |  |

| **Input** | **Output** |
| --- | --- |
| 2 | task – problem, assignment |
| task |  |
| problem |  |
| task |  |
| assignment |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
cute
adorable
cute
charming
smart
clever
[/input]
[output]
cute - adorable, charming
smart - clever
[/output]
[/test]
[test open]
[input]
2
task
problem
task
assignment
[/input]
[output]
task - problem, assignment
[/output]
[/test]
[test]
[input]
4
fashion
trend
fashion
model
fashion
look
cute
adorable
[/input]
[output]
fashion - trend, model, look
cute - adorable
[/output]
[/test]
[test]
[input]
7
fashion
trend
fashion
model
fashion
look
elegant
grand
elegant
fancy
elegant
classic
cute
adorable
[/input]
[output]
fashion - trend, model, look
elegant - grand, fancy, classic
cute - adorable
[/output]
[/test]
[test]
[input]
9
addicted
obsessed
addicted
hooked
addicted
attached
fashion
model
fashion
look
elegant
grand
elegant
fancy
elegant
classic
cute
adorable
[/input]
[output]
addicted - obsessed, hooked, attached
fashion - model, look
elegant - grand, fancy, classic
cute - adorable
[/output]
[/test]
[test]
[input]
8
fat
big
feedback
assessment
fat
plump
develop
advance
develop
establish
feedback
comment
feedback
criticism
fat
bulky
[/input]
[output]
fat - big, plump, bulky
feedback - assessment, comment, criticism
develop - advance, establish
[/output]
[/test]
[test]
[input]
8
condition
action
condition
case
condition
position
greet
accost
hello
greetings
hell
inferno
customer
client
customer
purchaser
[/input]
[output]
condition - action, case, position
greet - accost
hello - greetings
hell - inferno
customer - client, purchaser
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Odd Occurrences
[code-task title="Odd Occurrences" taskId="36f87397-888e-4d94-901e-cf29de88de73" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that extracts from a given sequence of words all elements that are present in it an **odd number of times (case-insensitive)**.

### Input / Constraints

Words are given in a **single line**, **space separated**.

### Output

Print the result elements in **lowercase in their order of appearance**.

## Examples
| **Input** | **Output** |
| --- | --- |
| Java C# PHP PHP JAVA C java | java, c#, c |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 3 5 5 hi pi HO Hi 5 ho 3 hi pi | 5, hi |
|  |  |

| **Input** | **Output** |
| --- | --- |
| a a A SQL xx a xx a A a XX c | a, sql, xx, c |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Java C\# PHP PHP JAVA C java
[/input]
[output]
java, c\#, c
[/output]
[/test]
[test open]
[input]
3 5 5 hi pi HO Hi 5 ho 3 hi pi
[/input]
[output]
5, hi
[/output]
[/test]
[test open]
[input]
a a A SQL xx a xx a A a XX c
[/input]
[output]
a, sql, xx, c
[/output]
[/test]
[test]
[input]
snail delivery tread transition extension transition extension delivery tread snail snail
[/input]
[output]
snail
[/output]
[/test]
[test]
[input]
censorship lawyer future embox lawyer embox censorship censorship
[/input]
[output]
censorship, future
[/output]
[/test]
[test]
[input]
confidence secular wage secular confidence confidence
[/input]
[output]
confidence, wage
[/output]
[/test]
[test]
[input]
scramble subway provoke crown multimedia reputation agreement crown multimedia scramble subway multimedia reputation crown
[/input]
[output]
provoke, crown, multimedia, agreement
[/output]
[/test]
[test]
[input]
mill boat bush absolute attachment confrontation campaign boat bush absolute attachment campaign campaign attachment mill mill
[/input]
[output]
mill, attachment, confrontation, campaign
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Odd Occurrences
[code-task title="Odd Occurrences" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class OddOccurrences {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] words = scanner.nextLine().split(" ");
        LinkedHashMap<String, Integer> counts = new LinkedHashMap<>();

        for (String word : words) {
            String wordInLowerCase = word.toLowerCase();
            if(counts.containsKey(wordInLowerCase)){
                counts.put(wordInLowerCase, counts.get(wordInLowerCase) + 1);
            } else {
                counts.put(wordInLowerCase, 1);
            }
        }

        ArrayList<String> odds = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            if(entry.getValue() % 2 == 1){
                odds.add(entry.getKey());
            }
        }

        for (int i = 0; i < odds.size(); i++) {
            System.out.print(odds.get(i));
            if ( i < odds.size() - 1){
                System.out.print(", ");
            }
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that extracts from a given sequence of words all elements that are present in it an **odd number of times (case-insensitive)**.

### Input / Constraints

Words are given in a **single line**, **space separated**.

### Output

Print the result elements in **lowercase in their order of appearance**.

## Examples
| **Input** | **Output** |
| --- | --- |
| Java C# PHP PHP JAVA C java | java, c#, c |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 3 5 5 hi pi HO Hi 5 ho 3 hi pi | 5, hi |
|  |  |

| **Input** | **Output** |
| --- | --- |
| a a A SQL xx a xx a A a XX c | a, sql, xx, c |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Java C\# PHP PHP JAVA C java
[/input]
[output]
java, c\#, c
[/output]
[/test]
[test open]
[input]
3 5 5 hi pi HO Hi 5 ho 3 hi pi
[/input]
[output]
5, hi
[/output]
[/test]
[test open]
[input]
a a A SQL xx a xx a A a XX c
[/input]
[output]
a, sql, xx, c
[/output]
[/test]
[test]
[input]
snail delivery tread transition extension transition extension delivery tread snail snail
[/input]
[output]
snail
[/output]
[/test]
[test]
[input]
censorship lawyer future embox lawyer embox censorship censorship
[/input]
[output]
censorship, future
[/output]
[/test]
[test]
[input]
confidence secular wage secular confidence confidence
[/input]
[output]
confidence, wage
[/output]
[/test]
[test]
[input]
scramble subway provoke crown multimedia reputation agreement crown multimedia scramble subway multimedia reputation crown
[/input]
[output]
provoke, crown, multimedia, agreement
[/output]
[/test]
[test]
[input]
mill boat bush absolute attachment confrontation campaign boat bush absolute attachment campaign campaign attachment mill mill
[/input]
[output]
mill, attachment, confrontation, campaign
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
