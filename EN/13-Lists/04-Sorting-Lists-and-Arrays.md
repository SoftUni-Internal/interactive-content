
# Sorting Lists and Arrays

[slide]
# Sorting Lists
- sorting Lists of Strings in ascending order using `Collections.sort()` - method
```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names));
```
- sorting Lists of Strings in descending order using `Collections.sort()` and `Collections.reverse()` - methods
```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);     // sort in ascending order

Collections.reverse(names);  // reverse the List 

System.out.println(String.join(", ", names));
```
[/slide]

[slide]
# Sorting Arrays
- sorting `int []` in ascending order using `Arrays.sort()` - method

```java live
int[] numbers = new int[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers); // sort in ascending order

for (int number : numbers) {
    System.out.print(number + " ");
}
```
- sorting `Integer []` in descending order using `Arrays.sort()` and `Collections.sort()`
```java live
Integer[] numbers = new Integer[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers);

Collections.reverse(Arrays.asList(numbers)); 

for (int number : numbers) {
    System.out.print(number + " ");
}
```
Let's explain what does the code above:
- Initializing `Integer []` with 6 items, pay attention that the items **are Integers** not ints (primitive types)
- We use `Arrays.sort()` to sort the array in **ascending** order
- There is no direct method to reverse the Array, so we convert the Array in List using Arrays.asList() - method, pay attention that this method **doesn't work** with **primitive data types like int, double, char, boolean, etc.**




[/slide]