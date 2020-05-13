[slide]
# List Manipulating
**List manipulation** is easier than an array because of its **methods**.

[/slide]
# Lists methods
There are a lot of useful **methods** in a List:

`add(element)` method - **adds** an element to the List:

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George");

for (String name : names){
  System.out.println(name);
}
```

`add(index, element)` - inserts an element to given position:

```java live
List<Integer> nums = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));

nums.add(0, -100);

for (Integer num : nums) {
  System.out.print(num + " ");
}

```

`remove(element)` - **removes** an element (returns **true** / **false**)

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George");

System.out.println(names.remove("Maria"));

for (String name : names){
  System.out.println(name);
}

```

`remove(index)` - removes the element at the given index

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George")
names.remove(1);

for (String name : names){
  System.out.println(name);
}
```

`set(index, item)` - replaces element at a given index

```java live
 List<Integer> nums = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));

nums.set(4, -100);

for (Integer num : nums) {
  System.out.print(num + " ");
}
```

`get()` - access an element to the given index

```java live
List<Integer> nums = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));
        
int numberAtIndex4 = nums.get(4);
        
System.out.println(numberAtIndex4);
```

`contains(element)` - checks if an element is in the List

```java live
List<String> names = new ArrayList<>(Arrays.asList("Maria", "Peter", "George"));

if (names.contains("Maria")){ 
     System.out.println("Yes, the name is in the List.");
}
```

`size()` - number of elements in the List

```java live
List<String> names = new ArrayList<>(Arrays.asList("Maria", "Peter", "George"));

int numberOfNames = names.size();

System.out.println(numberOfNames);
```