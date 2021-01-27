[slide]

# Summary

# In this lesson you learnt:

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