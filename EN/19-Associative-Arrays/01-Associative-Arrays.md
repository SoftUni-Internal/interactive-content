[slide]
# Associative Arrays

Collection of Key and Value pairs

Associative arrays are arrays indexed by **keys**, not by numbers 0, 1, 2,... like arrays.

Hold a set of pair {key, value}

| **Key** | **Value** |
| ------- | --------- |
| John Smith | +1-555-8976 |
| Lisa Smith | +1-555-1234 |
| Sam Doe | +1-555-5030 |


[/slide]

[slide]
# HashMap < Key, Value >

Keys are unique
Uses a hash-table + list

[/slide]

[slide]
# LinkedHashMap < Key, Value >

Keys are unique
Keeps the keys in order of addition


[/slide]

[slide]
# TreeMap < Key, Value >

Keys are unique
Keeps its keys always stored
Uses a balanced search tree


[/slide]

[slide]
# Built-in methods

- `put(key, value);`

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
```

- `remove(key);`

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
```

- `containsKey(key);`

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(value);`

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

[/slide]

[slide]
# Iterating through Map

Iterating through objects of type Map.Entry<K, V>
Cannot modify the collection(read-only)

`entry.getKey()` - takes the key
`entry.getValue()` - takes the value

```java live
Map<String, Double> fruits = new LinkedHashMap<>();
fruits.put("banana", 2.20);
fruits.put("kiwi", 4.50);
for (Map.Entry<String, Double> entry : fruits.entrySet()) {
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