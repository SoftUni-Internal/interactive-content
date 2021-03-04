[slide]
# Rezumat

## În această lecție ați învățat:
- Listă - structură de date care conține o succesiune de elemente
- Inițializarea unei liste - `new ArrayList<E>()`
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
- Citirea listelor folosind bucla `for`

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
- Citirea listelor folosind `String.split()`

``` java
String values = scanner.nextLine();    // input: 10 20 30 40 50

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to List
```

- Sortarea Listelor și a Matricelor - `Collections.sort()`, `Arrays.sort()`

``` java
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names)
```

[/slide]


