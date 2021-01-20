[slide]

# Associative Arrays - Maps

You learned that Arrays store items as an ordered collection, and you have to access them with an index number - **int type**.

An Associative Array, however, stores items in `key` - `value` pairs, and you can access them by an index of another type (e.g. a String).

One object is used as a key (index) to another object (value). 

They can not be primitive types like int, double, boolean, etc.

They must be specified with the equivalent wrapper class: Integer, Double, Boolean, etc.

The type of `Key` and `Value` can be the same or different, depends on the case.

In Java, associative arrays are called Map. A Map **can not contain duplicate Keys**, each **Key** can map to at most one Value.

But **the values can be duplicated**. For one Key only one Value can be stored in the same Map instance.

**For Example:**

| *Products* | *Prices* |
| ------- | --------- |
| **Key** | **Value** |
| Tomatoes | 12.50 |
| Bananas | 6.50 |
| Apples| 6.50 |
| Cucumbers | 7.50 |

**The Java platform contains three general-purpose Map implementations:**

- `HashMap<K, V>`

- `TreeMap<K, V>`

- `LinkedHashMap<K, V>`

**The main features of Maps are:**
- Hold a set of pairs `<key, value>`
- Contain unique keys
- Each key can map to at most one value
- The values can be duplicated

**Based on the features of the Maps, here are some examples:**
- A map of error codes and their descriptions.
- A map of zip codes and cities.
- A map of managers and employees. Each manager - `key` is associated with a list of employees - `value` he manages.
- A map of classes and students. Each class - `key` is associated with a list of students - `value`.

 

[/slide]