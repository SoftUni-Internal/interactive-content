[slide]
# Summary

## In this lesson you learned:
- List - data structure that holds a sequence of elements
- Initializing of a List - `new ArrayList<E>()`
``` java
List<String> names = new ArrayList<>();
```
- Lists methods
    - `add()`, `remove()`, `set()`
    - `get()`, `contains()`, `size()`
    ``` java
    names.add("Peter");
   names.add("Maria");
   names.add("George");
    ```
- Reading Lists using `for` loop

``` java
int n = Integer.parseInt(scanner.nextLine()); // First we read a list size
```

``` java
List<Integer> list = new ArrayList<>(); // Then we initialize our list
```

``` java
for (int i = 0; i < n; i++) { 

    // read the element from the console        
    int number = Integer.parseInt(scanner.nextLine()); 

    // add the element to the List        
    list.add(number); 
}
```
- Reading lists using `String.split()`

``` java
String values = scanner.nextLine();    // input: 10 20 30 40 50

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to List
```

- Sorting Lists and Arrays - `Collections.sort()`, `Arrays.sort()`

``` java
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names)
```

[/slide]


