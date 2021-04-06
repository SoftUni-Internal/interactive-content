[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-30-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Variable Arguments (**Varargs**) in Java
```java
void method(int... b){

}
```

- Classes can be nested in order to group them logically

```java
class OuterClass
{
    // ...
    
    class NestedClass
    {
        // ...
    }
}

```

- What `Iterable<T>` represents
  - `Iterator<T>` function

```java
public class Persons implements Iterable {
    private List<Person> persons = new ArrayList<Person>();    
    
    public Iterator<Person> iterator() {
        return this.persons.iterator();
    }
}
```

- What `Comparable<T>` represents
  - `Comparator<T>` function

```java
import java.time.LocalDate;
 
public class Employee implements Comparable<Employee> {
 
    private Long id;
    private String name;
    private LocalDate dob;
     
    @Override
    public int compareTo(Employee o) 
    {
        return this.getId().compareTo( o.getId() );
    }
}
```


## In the next lesson you will learn:

- Functional programming
- Lambda expressions
- Stream API

[/slide]
