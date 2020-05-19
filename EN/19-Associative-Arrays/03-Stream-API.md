[slide]
# Stream API

Traversing and Querying Collections

[/slide]


[slide]
# Processing Arrays with Stream API

- `min()` - finds the **smallest** element in a collection:
```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers).min().getAsInt();
System.out.println(min);
```

```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers).min().orElse(2);
System.out.println(min);
```

```java live
int [] numbers = new int[]{};
int min = Arrays.stream(numbers).min().orElse(2);
System.out.println(min);
```

- `max()` - finds the **largest** element in a collection
```java live
int [] numbers = new int[]{15, 25, 35};
int max = Arrays.stream(numbers).max().getAsInt();
System.out.println(max);
```

- `sum()` - finds **the sum** of all elements in a collection
```java live
int [] numbers = new int[]{15, 25, 35};
int sum = Arrays.stream(numbers).sum();
System.out.println(sum);
```

- `average()` - finds **the average** of all elements
```java live
int [] numbers = new int[]{15, 25, 35};
double average = Arrays.stream(numbers).average().getAsDouble();
System.out.println(average);
```
[/slide]

[slide]
# Processing Collections with Stream API

- `min()` - finds the **smallest** element in a collection:
```java live
ArrayList<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int min = numbers.stream().mapToInt(Integer::intValue).min().getAsInt();
System.out.println(min);
```

```java live
ArrayList<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int min = numbers.stream().min(Integer::compareTo).get();
System.out.println(min);
```

- `max()` - finds the **largest** element in a collection
```java live
ArrayList<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int max = numbers.stream().mapToInt(Integer::intValue).max().getAsInt();
System.out.println(max);
```

```java live
ArrayList<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int max = numbers.stream().max(Integer::compareTo).get();
System.out.println(max);
```

- `sum()` - finds **the sum** of all elements in a collection
```java live
ArrayList<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int sum = numbers.stream().mapToInt(Integer::intValue).sum();
System.out.println(sum);
```

- `average()` - finds **the average** of all elements
```java live
ArrayList<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
double average = numbers.stream().mapToInt(Integer::intValue).average().getAsDouble();
System.out.println(average);
```

- `map()` - manipulating elements in a collection
```java
int[] numbers = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(e -> Integer.parseInt(e)).toArray();
```

```java live
String[] words = {"abc", "def", "geh", "yyy"};
words = Arrays.stream(words).map(w -> w + "yyy").toArray(String[]::new);
for (String word : words) {
    System.out.println(word);
}
```

[/slide]

[slide]
# Converting Collections

To convert collections use:

- `toArray()`
```java
int[] numbers = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(e -> Integer.parseInt(e)).toArray();
```

- `toList()`
```java
List<Integer> nums = Arrays.stream(scanner.nextLine().split(" "))
        .map(e -> Integer.parseInt(e)).collect(Collectors.toList());
```

[/slide]

[slide]
# Filtering Collections

`filter()`
```java
int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
        .mapToInt(e -> Integer.parseInt(e))
        .filter(n -> n > 0).toArray();
```

[/slide]

[slide]
# Problem: Word Filter
[/slide]

[slide]
# Solution: Word Filter
[/slide]

[slide]
# Mapping


[/slide]

[slide]
# Ordering / Sorting Collections

- Sorting in ascending (Natural) order
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(4);
    add(1);
    add(3);
    add(2);
}};
numbers = numbers.stream().sorted((n1, n2) -> n1.compareTo(n2))
        .collect(Collectors.toList());
for (Integer number : numbers) {
    System.out.println(number);
}
```

- Sorting in descending order
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(4);
    add(1);
    add(3);
    add(2);
}};
numbers = numbers.stream().sorted((n1, n2) -> n2.compareTo(n1))
        .collect(Collectors.toList());
for (Integer number : numbers) {
    System.out.println(number);
}
```

- Sorting by multiple criteria
```java live
Map<String, Integer> products = new HashMap<>();
products.put("bananas", 6);
products.put("peaches", 4);
products.put("apples", 4);
products.put("strawberries", 15);
products.put("watermelon", 1);
products.put("pineapple", 1);
products.entrySet()
        .stream()
        .sorted((e1, e2) -> {
            int result = e2.getValue().compareTo(e1.getValue());
            if (result == 0) {
                result = e1.getKey().compareTo(e2.getKey());
            }
            return result;
        })
        .forEach(e -> System.out.println(e.getKey() + " " + e.getValue()));
```

- Using functional `forEach()

**!!! FILL THE MAP !!!**

```java
Map<String, ArrayList<Integer>> products = new HashMap<>();
products.entrySet()
        .stream()
        .sorted((a, b) -> {
            if (a.getKey().compareTo(b.getKey()) == 0) {
                int sumFirst = a.getValue().stream().mapToInt(x -> x).sum();
                int sumSecond = b.getValue().stream().mapToInt(x -> x).sum();
                return sumFirst - sumSecond;
            }
            return b.getKey().compareTo(a.getKey());
        })
        .forEach(pair -> {
            System.out.println("Key: " + pair.getKey());
            System.out.print("Value: ");
            pair.getValue().sort((a, b) -> a.compareTo(b));
            for (int num : pair.getValue()) {
                System.out.printf("%d ", num);
            }
            System.out.println();
        });
```

[/slide]


[slide]
# Problem: Largest 3 Numbers

[/slide]

[slide]
# Solution: Largest 3 Numbers

[/slide]

