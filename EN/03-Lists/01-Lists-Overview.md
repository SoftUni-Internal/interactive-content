# Lists Overview and Manipulations

[slide hideTitle]

# Definition and Initialization

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-3-5-lists-overview-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Just like an Аrray, а **list** is a **sequence of elements**.

[image assetsSrc="java-fund-p1-lists-01.png" /]

The main difference between an array and a list is that an **array cannot be resized**.

For example, if we have an array and we want to add or remove elements from it, we have to create a new one, while elements can be **added** and **removed** from a **list** at any time.

```java live
//Create an empty list of strings
List<String> names = new ArrayList<>(); 

names.add("Hello"); 
names.add("Meteor"); 
names.add("Lion");
        
names.remove("Hello");

for (String name : names) {
    System.out.println(name);
}

```
The main **features** of **lists** are:

- Lists can store **objects** of any type (Integer, Double, String, etc.)

- Their elements are numbered from **0** to **size-1**

- The **size** of the **List** is **expandable**

- **Lists** support a lot of built-in **methods**

## Initializing a List

- We initialize an empty **list** using the `new` keyword followed by  `ArrayList<>()`

```java
//Create an empty List of strings
List<String> names = new ArrayList<>(); 
```
- We can also use the `asList()` method 

```java
// Create a List of strings with 3 elements
List<String> names = new ArrayList<>(Arrays.asList("Maria", "Peter", "George")); 
```
- We can **convert** an **array** to a **list**

```java
Integer[] numbers = new Integer[] {10, 20, 30, 40, 50};

// Convert the Integer array into List
List<Integer> nums = Arrays.asList(numbers); 
```

If you try to convert an array that holds a primitive data type like `int[]` to a list, this will result in a **compile error** because **lists** accept only **reference data types** (**objects**). 

```java live
int[] numbers = new int[] {10, 20, 30, 40, 50};

List<Integer> nums = Arrays.asList(numbers);
```
[/slide]

[slide hideTitle]
# List Methods
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-6-list-data-structure-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Lists provide functionality that lets you **add**, **remove** and **find** elements.

- `add(element)` - adds an element to the end of the list
- `add(index, element)` - adds an element at the specified index
- `remove(element)` - removes the element if found and returns a boolean value
- `remove(index)` - removes the element at the specified index
- `size()` - returns the number of elements
- `contains(element)` - checks if the list contains a certain element and returns a boolean value
- `set(index, item)` - replaces the element at the given index

[/slide]

[slide hideTitle]
# Adding & Removing Elements

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-7-9-add-remove-add-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## Adding Elements

The `add()` method is used to insert new elements into a list. 

The type of elements that can be added is determined when creating the list. 

If you specified `List<String>` you will not be able to add anything other than Strings into your list.


- **add(element):**

```java live
List<String> safetyEquipment = new ArrayList<>(); 

safetyEquipment.add("Hazmat suit");
safetyEquipment.add("Protective Gloves");

for (String equipment : safetyEquipment) {
    System.out.println(equipment);
}
```

The **add** method places each next item at the end of the list.

If you would like to insert an item in a different position you can do that using `add(index, element)`.


- **add(index, element):**

```java live
List<String> safetyEquipment = new ArrayList<>(); 

safetyEquipment.add("Hazmat suit");
safetyEquipment.add("Protective Gloves");

safetyEquipment.add(0, "Helmet");

for (String equipment : safetyEquipment) {
    System.out.println(equipment);
}
```

"Helmet" is printed first because it was inserted at index 0.

Attempting to add an element to an index that is outside list bounds will result in an **IndexOutOfBoundsException**.

When an element is added the number of elements increases by one.


## Removing Elements

The `remove()` method deletes an element from the list.

- **remove(element)** - **removes** the **first occurrence** of the **specified element** (returns **true** / **false**):

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George");

System.out.println(names.remove("Maria")); 

System.out.println(names.remove("John")); 

for (String name : names){
    System.out.println(name);
}
```

`System.out.println(names.remove("Maria"))` will return **true** because the element can be found and removed.
`System.out.println(names.remove("John"))` returns **false** because the element is not contained in the list.

- **remove(index)** - **removes** the **element** at the **specified index**:

```java live
List<String> digimons = new ArrayList<>();

digimons.add("Agumon");
digimons.add("Ziramon");
digimons.add("Burbomon");

digimons.remove(1); // removes element at index 1

for (String digimon : digimons){
  System.out.println(digimon);
}
```
Attempting to remove an element from an index that is outside the bounds of the list will result in an **IndexOutOfBoundsException**.

When an element is deleted the number of elements decreases by one.


[/slide]


[slide hideTitle]
# More List Methods

## Changing Elements

- `set(index, item)` - **replaces** element at a **specified index**

```java live
 Integer [] numbers = new Integer[] {10, 20, 30, 40, 50};

// convert the numbers array to a list
List<Integer> nums = Arrays.asList(numbers); 

 // replace the element at index 4 (50) with -100
nums.set(4, -100);

for (Integer num : nums) {
    System.out.print(num + " ");
}
```

## Accessing Elements

- `get()` - **access** an element to the **specified index**

```java live
List<Integer> nums = Arrays.asList(10, 20, 30, 40, 50);
        
int numberAtIndex4 = nums.get(4);
        
System.out.println(numberAtIndex4);
```

## Finding Elements

- `contains(element)` - checks if an **element is in the list**

```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

if (names.contains("Maria")){ 
     System.out.println("Yes, the name is in the List.");
}
```

## Counting Elements

- `size()` - returns the **size** (**count of elements**) of the list

```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

int numberOfNames = names.size();

System.out.println(numberOfNames);
```
[/slide]
