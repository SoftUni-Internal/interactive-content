[slide hideTitle]

# Summary

## In this lesson you learned:

- **Spring Data** translates method names to **SQL Queries**

- We can use JPQL to write custom queries
    * with JPQL, a query is issued for an entity

```java
@Repository
public interface ShampooDao extends JpaRepository<Shampoo, Long> { 
    List<Shampoo> findByBrand(String brand);
}
```

- **Repositories** can be **inherited** to reduce **code duplication**

```java
interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findByFirstName(String firstName); 
    // .where firstName == firstName(param).

    Student findByFirstNameAndLastName(String firstName, String lastName);       
    // .where firstName == firstame(param) AND lastName == lastName(param).

    List<Student> findByAgeBetween(Integer ageMin, Integer ageMax);              
    // .where age between ageMin(param) AND ageMax(param).

}
```

- The **JavaConfig.java** file allows easy and type-safe access to configuration properties

- We should not expose full data about our entities
    * expose only what should be visible to the outside world

```java
// EmployeeDto.java
public class EmployeeDto {       
                                   
    private String firstName;
    private BigDecimal salary;

}
```

- Mapping is done with ModelMapper
    * allows us to map all or single fields
    * enables the conversion of field values

```java
// AutoMapping

// Here we have our normal Employee Entity connected to the "employees" table
@Entity
@Table(name = "employees")                  
public class Employee {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "salary")
    private BigDecimal salary;

    // Many to one relationship to the entity Address
    @ManyToOne 
    @JoinColumn(name = "address_id")        
    private Address address;
}

@Entity
@Table(name = "addresses")
public class Address {

    @Basic
    private String city;
}

public class EmployeeDto {

    private String firstName;
    private BigDecimal salary;
    private String addressCity;             
}
```


## In the next lesson you will learn:

- What the **JSON** format is
- How to **import and export** JSON in Java

[/slide]