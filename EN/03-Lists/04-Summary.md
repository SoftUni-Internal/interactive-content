[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:
- Lists are data structures that hold sequences of elements
- They are resizable
- A list is initialized using `new ArrayList<E>()`

``` java
List<String> names = new ArrayList<>();
```
- Lists methods:
    - `add()`, `remove()`, `set()`
    - `get()`, `contains()`, `size()`


```java
    names.add("Peter");
    names.add("Maria");
    names.add("George");
```

- Reading Lists using `for` loop

```java
//Read the number of elements
int n = Integer.parseInt(scanner.nextLine()); 
//Create a new list
List<Integer> list = new ArrayList<>(); 

//Read n elements from the console and add them to the list
for (int i = 0; i < n; i++) { 
    int number = Integer.parseInt(scanner.nextLine());   
    list.add(number); 
}
```
- Reading lists using `String.split()`

```java
// input: 10 20 30 40 50
String values = scanner.nextLine();   

List<Integer> items = Arrays
        .stream(values.split(" ")) 
        .map(Integer::parseInt)       
        .collect(Collectors.toList()); 
```

- Sorting lists in ascending order with `Collections.sort()` or `Collections.reverse()` for sorting in descending order

```java
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);
Collections.reverse(names);
```

[/slide]


