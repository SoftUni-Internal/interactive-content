
[slide hideTitle]

# Rezumat

## In această lecție ați învățat:

- Argumentele Variabile (**Varargs**) in Java
```java
void method(int... b){

}
```
- Ce sunt Clasele Imbricate 

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

- Ce reprezintă `Iterable<T>`?
   - funcția `Iterator<T>`

```java
public class Persons implements Iterable {
    private List<Person> persons = new ArrayList<Person>();    
    
    public Iterator<Person> iterator() {
        return this.persons.iterator();
    }
}
```

- Ce reprezintă `Comparable<T>` 
    - funcția `Comparator<T>`

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
## In următoarea lecție veți învăța:

- Programarea funcțională 
- Lambda
- Stream API

[/slide]