[slide hideTitle]
# Associative Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-3-4-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Associative arrays are collections that hold parameters in **Key** and **Value** pairs and are indexed by **Keys**. 

**The Key** represents **the index** of the map. The **Keys** and **Values** are **objects** and each pair is known as **an entry**.

One object is used as a **Key** (index) to another object (**Value**). 

They **can not** be **primitive types** like **int**, **double**, **boolean**, etc. 

They **must be specified** with the equivalent **wrapper class**: **Integer**, **Double**, **Boolean**, etc. 

**The types of Keys and the Values** can be the **same or different**, depends on the case.

In Java, the associative arrays are called **Maps**. 

A Map **cannot contain duplicate Keys**. Each **Key** can be associated to only one **Value**. 

**The Values of different Keys can be duplicated**. 

**One Key** can only store **one Value** in the **same Map instance**. 

Example:

| *Name* | *Phone number* |
| ------- | --------- |
| **Key** | **Value** |
| John Smith | +1-555-8976 |
| Lisa Smith | +1-555-1234 |
| Amanda Doe| +1-555-5050 |
| Sam Doe | +1-555-5050 |

[/slide]

[slide hideTitle]
# Collections of Key and Value Pairs

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-5-collections-of-key-and-value-pairs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Java Collections API contains several Map **implementations**, which allow a Map's content to be viewed as:

- A set of keys

- A collection of values

- A set of key-value pairs 

The most used **Map implementations** are **HashMap**, **LinkedHashMap** and **TreeMap**. 

The **order** of a Map depends on the **chosen collection implementation**. 

Some **Map** implementations, like the **TreeMap** class, **guarantee a specific order**.

Others, like the **HashMap** class, **do not**. 

The **HashMap** and the **LinkedHashMap** classes allow one `null` value for the **Key** and multiple `null` values for the **Values**.

The **TreeMap** class does not allow any `null` values.

## HashMap < Key, Value >

The elements that are stored internally in the `HashMap` class **do not maintain any order**. 

The **HashMap** is typically used when we will not be performing index-based operations on the stored data.

## LinkedHashMap < Key, Value >

The **LinkedHashMap** class extends the **HashMap** class, but **maintains a specific order**. 

The **Keys** are kept **in the order of their addition**.

## TreeMap < Key, Value >

The **TreeMap** class sorts all its entries according to their natural ordering.

For integers, this would mean ascending order, and for strings, alphabetical order.

[/slide]

[slide hideTitle]
# Map Declaration and Initialization

To use a `Map` in Java, **import** the `java.util.Map` package. 

Create an **instance** of one of the classes that implement the **Map interface**.

```java
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Key, Value> map = new HashMap<>();
    }
}
```

To initialize a **Map**:

- Specify the **generic type** of the Key and the Value in the angle brackets `<>`, separated by a comma and a single space (", ")

- Set the **name** of the Map, which should be **descriptive** enough to understand what **the Key and the Value represent**

- After the equals sign (`=`), use the keyword `new` and the **intended type** of the Map

```java
Map <Key, Value> airplanes = new HashMap<>();
```

```java
Map <Key, Value> shoppingList = new LinkedHashMap<>();
```

```java
Map <Key, Value> phoneBook = new TreeMap<>();
```

It is important to know that once the types for the **Key** and the **Value** are set, they can not be changed.

[/slide]


[slide hideTitle]
# Built-in methods

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-6-7-8-9-built-in-methods-demo-hashmap-put-and-remove-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **HashMap** class contains several built-in methods: 

- `put(K key, V value)` - Used for **adding items** (inserting an entry) in the Map 

If the `put()` method is called more than once with the same Key, **the latest Value replaces the existing Value** for the given Key.

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);

airplanes.put("Boeing 737", 180);
System.out.println(airplanes.get("Boeing 737"));
```

- `putIfAbsent(K key, V value)` - Used for **adding items** (inserting an entry) in the map if the specified **Key** is **not in the collection**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.putIfAbsent("Boeing 737", 100);
System.out.println(airplanes.get("Boeing 737"));
```

- `get(K key)` - Used to **access a Value** in the Map, using its Key. **Returns** the **Value** of the specified object

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
int peopleCount = airplanes.get("Boeing 737");
System.out.println(peopleCount);
```

- `remove(K key)` - Used to **delete** an item (entry), **using its Key**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
System.out.println(airplanes.get("Boeing 737"));
```

- `clear()` - Used to remove **all items (entries)** in the Map

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
System.out.println(airplanes.get("Boeing 737"));
System.out.println(airplanes.get("Airbus A320"));
```

- `size()` - Used to return the **number of items (entries)** in the Map

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - Checks if the Map **contains the speficied Key object**. Returns a boolean value

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - Checks if the Map **contains the specified Value object**. Returns a **boolean** value

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - Return `true` if the Map is **empty**, and `false` if it contains **at least one pair**

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

# TreeMap<K, V> - Example

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-10-treemap-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Iterating through a Map

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-11-iterating-through-map-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When iterating through objects of type `Map.Entry <K, V>`, it is **impossible** to modify the collection(it is read-only).

There are several ways to iterate through the data that is stored in a **Map**.

- Iterating through the items of a map, using a **for-each** loop

  - `keySet()` - obtains only the keys

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (String fruit : fruitsPrice.keySet()) {
    System.out.println(fruit);
}
```

  - `values()` - obtains only the values

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (Double price : fruitsPrice.values()) {
    System.out.println(price);
}
```

- Iterating through the items of a map, using the build-in method `entrySet()`

  - `entry.getKey()` - obtains the Keys
  - `entry.getValue()` - obtains the Values

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (Map.Entry<String, Double> entry : fruitsPrice.entrySet()) {
    System.out.printf("%s -> %.2f%n", entry.getKey(), entry.getValue());
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Count Real Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-12-problem-and-solut-count-real-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Count Real Numbers" taskId="Java-Fundamentals-2-Associative-arrays-lab-Count-real-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Read a **list of real numbers** and print them out in **ascending order**, along with their **number of occurrences**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 8 2 2 8 2 | 2 -> 3 |
|  | 8 -> 2 |

| **Input** | **Output** |
| --- | --- |
| 1 5 1 3 | 1 -> 2 |
|  | 3 -> 1 |
|  | 5 -> 1 |

| **Input** | **Output** |
| --- | --- |
| -2 0 0 2 | -2 -> 1 |
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

[slide hideTitle]
# Problem with Solution: Word Synonyms

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-14-problem-and-solution-word-synonyms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Word Synonyms" taskId="Java-Fundamentals-2-Associative-Arrays-lab-Words-Synonyms" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that keeps few words and their synonyms.

For that purpose, create a Map.

The **key** of the map will be a single word.

The **value** will be a **list of all the synonyms of that word**.

### Input / Constraints

You will be given an integer number - `n`.

On the next **2 * n** lines, you will be given a **word** and a **synonym** `n` times, each on a separate line:

- \{**word**\}

- \{**synonym**\}

If you receive a word that is **already in the Map**, add the new synonym to its list.

### Output 

Print the words in the following format:
"\{**word**\} - \{**synonym1, synonym2… synonymN**\}"

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

[slide hideTitle]
# Problem with Solution: Odd Occurrences
[code-task title="Odd Occurrences" taskId="Java-Fundamentals-2-Associative-Arrays-lab-Odd-Occurrences" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You will be given a **string** that will contain few words, separated by a **single space**.

Create a program that finds all words that are **repeated an odd number of times** in the string. (case insensitive)

### Input / Constraints

All words will be received on a **single line**, separated by a single space.

### Output

Print out the elements that fulfill the specified condition **in lowercase in the order of their appearance**, separated by a comma.

## Examples
| **Input** | **Output** |
| --- | --- |
| Java C# PHP PHP JAVA C java | java, c#, c |
| 3 5 5 hi pi HO Hi 5 ho 3 hi pi | 5, hi |
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
