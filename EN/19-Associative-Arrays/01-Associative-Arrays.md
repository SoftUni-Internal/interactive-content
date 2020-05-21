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
[/slide]

[slide]
# Solution: Count Real Numbers
[/slide]

[slide]
# Problem: Words Synonyms
[/slide]

[slide]
# Solution: Words Synonyms
[/slide]

[slide]
# Problem: Odd Occurrences
[/slide]

[slide]
# Solution: Odd Occurrences
[/slide]
