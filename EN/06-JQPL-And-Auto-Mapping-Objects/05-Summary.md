[slide]
# Summary

# In this lesson we learned:

- That **Spring Data** translates method names to **SQL Queries**.

- We can use JPQL to write custom queries.
    - JPQL syntax on entity classes.

```java
@Repository
public intetrface ShampooDao extends JpaRepository.
<Shampoo, Long>{                            
        List<Shampoo> findByBrand(String brand);
}
```

- Repositories can be inherited to reduce code duplication.

```java
interface StudentRepository extends JpaRepository<Student, Integer> {}{
Student findByFirstName(String firstName);                                   //.where firstName == firstName(param).
Student findByFirstNameAndLastName(String firstName, String lastName);       //.where firstName == firstame(param) AND lastName == lastName(param)
List<Student> findByAgeBetween(Integer ageMin, Integer ageMax);              //.where age between ageMin(param) AND ageMax(param).
}
```

- What's the purpose of the **JavaConfig.java** file.

- We should not expose full data about our entities
    - Present only those which should be visible to the outside world

```java
// EmployeeDto.java
public class EmployeeDto {       
                                   
    private String firstName;
    private BigDecimal salary;
}
```

- Mapping is done with ModelMapper
    - Allows us to map all or single fields
    - Allows us to convert field values

# In the next lesson we will learn:

- What is JSON format.
- How to easily import and export JSON in Java.

```java
//AutoMapping

@Entity
@Table(name = "employees")                  //Here we have our normal Employee Entity connected to table `employees`
public class Employee {

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "salary")
    private BigDecimal salary;
    @ManyToOne                               //Many to one relationship to the entity Address
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
    private String addressCity;             //When naming first the table and then the property you want, 
}                                           //Model Mapper will get in the property object recursively and take its property value.
```

[/slide]