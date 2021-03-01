# Associative Arrays

[slide hideTitle]
# Associative Arrays: Maps

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-16-17-Associative-Arrays-Maps-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You have learned that Arrays store items as an ordered collection and you have to access them with an index number - **int type**.

An Associative Array, however, stores items in **key** - **value** pairs, and you can access them by an index of another type (e.g. a "String").

One object is used as a key (index) to another object (value). 

The type of the keys and values can not primitive like `int`, `double`, `boolean`, etc. 

They must be specified with the equivalent wrapper class: `Integer`, `Double`, `Boolean`, etc.

The type of **key** and the **value** can be the same or different, depending on the case.

In Java, associative arrays are also called **Maps**. 

A Map **can not contain duplicate keys**. Each **Key** can map to at most one value.

But **the values can be duplicated**. 

For one **Key** only one **Value** can be stored in the same Map instance.

**For Example:**

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
- Holds a set of \<key, value\> pairs 
- Contains unique keys
- Each key can map to at most one value
- The values can be duplicated

**Based on the features of the Maps, here are some examples:**
- A map of error codes and their descriptions
- A map of zip codes and cities
- A map of managers and his employees. Each manager, **key**, is associated with a list of employees, **value**
- A map of classes and students. Each class, **key**, is associated with a list of students, **value**

 

[/slide]