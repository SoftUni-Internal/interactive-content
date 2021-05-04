[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:
- Listele sunt structuri de date care conțin secvențe de elemente
- Acestea pot fi redimensionate
- Inițializarea unei liste prin folosirea `new ArrayList<E>()`
``` java
List<String> names = new ArrayList<>();
```
- Metodele listelor
    - `add()`, `remove()`, `set()`
    - `get()`, `contains()`, `size()`
    ``` java
    names.add("Peter");
   names.add("Maria");
   names.add("George");
    ```
- Citirea listelor cu ajutorul buclei `for`

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
- Citirea listelor cu ajutorul metodei `String.split()`

``` java
String values = scanner.nextLine();    // input: 10 20 30 40 50

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to List
```

- Sortarea listelor în ordine crescătoare prin intermediul metodei `Collections.sort()` sau `Collections.reverse()`, pentru sortarea în ordine descrescătoare

```java
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);
Collections.reverse(names);
```

[/slide]


