[slide]

# Lists Overview

Just like an array а **List** is a **sequence of elements**.

[image assetsSrc="list-example(1).png" /]

The main difference between them is that the size of an array cannot be resized.

For example if you want to add or remove elements to/from an array, you have to create a new one, while elements can be **added** and **removed** from the **List** whenever you want.

```java live
List<String> names = new ArrayList<>(); //Create a List of strings

        names.add("Peter"); // Add Peter to the List
        names.add("Maria"); // Add Maria to the List
        names.add("George");// Add George to the List
        
        names.remove("Maria"); // Remove Maria from the List

        for (String name : names) {
            System.out.println(name);  // Print the List using forEach Loop
        }

```

The main **features** of the **Lists** are:

- Lists can store **objects** of any types(Integer, Double, String, etc.)
- Elements are numbered from **0** to **size-1**
- The **size** of the **List** is **expandable**
- A list supports a lot of useful **methods**


[/slide]