
[slide]
# Reading and Printing Lists
# Reading Lists 
- Reading a List using **for loop** and `scanner.nextLine()` - method
```java 
Scanner scanner = new Scanner(System.in);

int n = Integer.parseInt(scanner.nextLine()); // reading the List size 
        
List<Integer> list = new ArrayList<>(); // initializing empty List of Integers
        
for (int i = 0; i < n; i++) { // creating a for loop with the size of the List
            
    int number = Integer.parseInt(scanner.nextLine()); // read the element from the console
            
    list.add(number); // add the element to the List
}
```
- Reading List values from a **single line** using `String.split()` - method
```java
String values = scanner.nextLine();    // input: 10 20 30 40 50
List<Integer> items = Arrays
        .stream(values.split(" "))     // breaks the string by space
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to List
```
[/slide]

[slide]
# Printing Lists 
- Printing a list using a `for-loop`
```java live
List<String> numbers = new ArrayList<>(Arrays.asList("one", "two", "three", "four", "five", "six"));
for (int index = 0; index < numbers.size(); index++) {
   System.out.print(numbers.get(index) + " ");
}
```
- Printing a list using `for-each` loop
```java live
List<String> numbers = new ArrayList<>(Arrays.asList("one", "two", "three", "four", "five", "six"));
for (String number : numbers) {
   System.out.print(number + " ");
}
```
- Printing a list using a `String.join(…)`
```java live
List<String> list = new ArrayList<>(Arrays.asList("one", "two", "three", "four", "five", "six"));
System.out.println(String.join(" ", list));
```
[/slide]