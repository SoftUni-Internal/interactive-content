[slide hideTitle]

# Summary

# In this lesson you learned:

- Variable Arguments (**Varargs**) in Java

- What are Nested Classes

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


## In the next lesson, you will learn:

- Functional programming
- Lambda
- Stream API

[/slide]
