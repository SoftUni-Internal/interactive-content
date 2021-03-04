# Manipulare Listă

[slide]
# Adăugare Element

[vimeo-video startTimeInSeconds="2584" endTimeInSeconds="2865"]
[stream language="EN" videoId="421781852" default /]
[stream language="RO" videoId="431758884"  /]
[/video-vimeo]

- `add(element)` - **adaugă** elementul la **sfârșitul listei**:

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George");

for (String name : names){
  System.out.println(name);
}
```

- `add(index, element)` - **inserează** un element în **poziția specificată**:

```java live
List<Integer> nums = new ArrayList<>();
nums.add(10);
nums.add(20);
nums.add(30);
nums.add(40);
nums.add(50);

nums.add(0, -100); // insert the number -100 at index 0

for (Integer num : nums) {
    System.out.print(num + " ");
}
```

[/slide]

[slide]
# Eliminarea Elementului
- `remove(element)` - **elimină** prima apariție a **elementului specificat** (se returnează in **true**/**false**)

```java live
 List<String> names = new ArrayList<>();

 names.add("Peter");
 names.add("Maria");
 names.add("George");

 // return true because "Maria" is in the List
 System.out.println(names.remove("Maria")); 

 // return false because "John" is not in the List
 System.out.println(names.remove("John")); 

 for (String name : names){
     System.out.println(name);
 }
```

- `remove(index)` - **elimină** elementul la **indexul specificat**

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George");

names.remove(1); // remove element at index 1

for (String name : names){
  System.out.println(name);
}
```
[/slide]
[slide]
# Schimbarea Elementului
- `set(index, item)` - **înlocuiți** elementul la un **indice specificat**

```java live
 Integer [] numbers = new Integer[] {10, 20, 30, 40, 50};

// convert the numbers array into List
List<Integer> nums = Arrays.asList(numbers); 

 // replace the element at index 4 (50) with -100
nums.set(4, -100);

for (Integer num : nums) {
    System.out.print(num + " ");
}
```
[/slide]
[slide]
# Element de Acces
- `get()` - **acces la** un element la **indexul specificat**

```java live
List<Integer> nums = Arrays.asList(10, 20, 30, 40, 50);
        
int numberAtIndex4 = nums.get(4);
        
System.out.println(numberAtIndex4);
```
[/slide]
[slide]
# Conține un Element
- `contains(element)` - verifică dacă un **element este în Listă**

```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

if (names.contains("Maria")){ 
     System.out.println("Yes, the name is in the List.");
}
```
[/slide]
[slide]
# Numărare Elemente
- `size()` - returnează **dimensiunea** (**numărarea elementelor**) din listă


```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

int numberOfNames = names.size();

System.out.println(numberOfNames);
```
[/slide]