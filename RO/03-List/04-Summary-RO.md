[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:
- Listele sunt structuri de date care conțin o secvență de elemente
- Acestea pot fi redimensionate
- Inițializarea unei liste prin folosirea `new ArrayList<E>()`
``` java
List<String> names = new ArrayList<>();
```
- Metodele pentru liiste
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

    // citește elementul de pe consolă      
    int number = Integer.parseInt(scanner.nextLine()); 

    // adaugă elementul la listă        
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

- Sortarea Listelor în ordine crescătoare prin - `Collections.sort()`, `Arrays.sort()` sau prin  `Collections.reverse()` pentru sortarea în ordine descrescăto

```java
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);
Collections.reverse(names);
```

[/slide]


