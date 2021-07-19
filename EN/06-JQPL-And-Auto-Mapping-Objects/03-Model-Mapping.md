# Model Mapping

[slide hideTitle]

# Model Mapper

We often need to transfer data between similar objects. 

With entities, we want to transfer similar properties from the entity model to a DTO. 

A large portion of this process is just listing a property to another property:

```java
public class EmployeePojo {

    public String firstName;
    public String lastName;
    private LocalDate startDate;

    public EmployeePojo(String firstName, String lastName, LocalDate startDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.startDate = startDate;
    }

    public String name() {
        return this.firstName + " " + this.lastName;
    }

    public LocalDate getStart() {
        return this.startDate;
    }
}

@Entity                             // We have our entity
@Table(name = "employees")
public class Employee {
    // ...
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "age_name")
    private String lastName;
    @Column(name = "salary")
    private BigDecimal salary;
}

public class EmployeeDto {          // and then - our DTO.

    private String firstName;
    private String last_name;
    private BigDecimal salary;
    private String addressCity;
}

// If we use a service, the mapping will be as follows.
@Service 
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void register(string id) {
        studentRepository.save(student);
    }

    @Override
    public void expel(Student student) {
        studentRepository.delete(student);
    }
}
```

We have a tool that automatically performs this task.

Model mapping is an easy way to convert one model to another.

It is convention-based, meaning that when following the guidelines, we significantly reduce code repetition.

When mapping entities from the database to DTOs, the Model Mapper acts as a middleware in the query-creation process.

It will then project and map the entities for us. 

The use of conventions helps in determining property-value mappings.

[image assetsSrc="Spring-Data-AutoMapping-Objects(1).png" /]

[/slide]

[slide hideTitle]

# Adding Model Mapper

To start exploring **Model Mapper**, begin by adding it to your project.

- Include it as a Maven dependency:
   
```java
// pom.xml
<dependency>
    <groupId>org.modelmapper</groupId>
    <artifactId>modelmapper</artifactId>
    <version>2.3.2</version>
</dependency>
```

- Then, initialize the mapper and use it as shown below:
   
```java
ModelMapper modelMapper = new ModelMapper();
//                                        1         2
EmployeeDto employeeDto = modelMapper.map(employee, EmployeeDto.class); 

// 1. Source of information
// 2. Destination object (DTO)
```

## Simple Mapping of an Entity to a DTO

While Model Mapper excels in mapping simple properties (like string, int BigDecimal, etc.), it can also map nested properties:

```java
// Here we have our normal Employee entity connected to the `employees` table.
@Entity
@Table(name = "employees") 
public class Employee {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "salary")
    private BigDecimal salary;

    // Many-to-one relationship with the Address entity
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

// When naming the table first and then the property we want, 
// Model Mapper will get in the property object recursively 
// and retrieve its property value.

public class EmployeeDto {

    private String firstName;
    private BigDecimal salary;
    private String addressCity; 
}                               
```

## Explicit Mapping

As previously demonstrated, Model Mapper is a powerful tool - using conventions, we can achieve mapping even of nested objects' properties.

However, sometimes fields are from different types (or too different altogether), and the mapping cannot occur.

When we have a second layer of nested mapping, Model Mapper will need help to map the fields.


```java
@Entity
@Table(name = "employees")
public class Employee {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "salary")
    private BigDecimal salary;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
}

@Entity
@Table(name = "addresses")
public class Address {

    @Basic
    private City city;
}

@Entity
@Table(name = "cities")
public class Address {

    @Basic
    private String name;
}

public class EmployeeDto {

    private String firstName;

    private BigDecimal salary;

    private String addressCity;
}
```

```java
// ConsoleRunner.java
ModelMapper modelMapper = new ModelMapper();

PropertyMap<EmployeeDto, Employee> employeeMap 
        = new PropertyMap<EmployeeDto, Employee>() {

    @Override
    protected void configure() {
        map().setFirstName(source.getName());
        // Adding mappings for other fields...
        // We use getters to help Model Mapper find the string we want.
        map().setAddressCity(source.getAddress().getCity().getName()); 
    }

};

modelMapper.addMappings(employeeMap).map(employeeDto, employee);
```

There is a difference between the syntax for **explicit mapping** in Java 7 and Java 8. 

## Explicit Mapping DTO to Entity - Java 8

```java
// ConsoleRunner.java (Java 8)

ModelMapper modelMapper = new ModelMapper();
TypeMap<EmployeeDto, Employee> typeMap = 
    mapper.createTypeMap(EmployeeDto.class, Employee.class);
typeMap.addMappings(m -> m.map(src -> src.getName(), Employee::setFirtsName)); 
typeMap.map(employeeDto);
```

## Validation 

We use validation to ensure that Model Mapper can map all entities.

The `validate()` method verifies that all destination properties are matched.

If validation fails, the method throws a `ValidationException` with a message describing any unmatched destination properties.

Let us see validation in practice:

```java
ModelMapper modelMapper = new ModelMapper();
//                        1.                 2.
modelMapper.createTypeMap(EmployeeDto.class, Employee.class);

// The `validate()` method that throws a `ValidationException`:
modelMapper.validate(); 

// 1. Source
// 2. Destination


// Exception
// Unmapped destination properties found in TypeMap[EmployeeDto -> Employee]

com.persons.domain.entities.Employee.setAddress();
com.persons.domain.entities.Employee.setId();
com.persons.domain.entities.Employee.setBirthday();
```

To avoid the exception, we must verify that every property is named by convention or create a custom configuration.

## Skipping Properties

When reusing an already existing DTO, we may not need some of the properties.

To exclude them, we can create a custom configuration where we name the properties we prefer not to be mapped:

```java
// Java 7
ModelMapper modelMapper = new ModelMapper();
PropertyMap<EmployeeDto, Employee> employeeMap = new PropertyMap<EmployeeDto, Employee>() {

    // Using the skip method, we inform Model Mapper that the given property is redundant.
    @Override
    protected void configure() {
        skip().setSalary(null); 

    }
};

modelMapper.addMappings(employeeMap).map(employeeDto, employee);
```

In Java 8, we have a shorter syntax:

```java
// Naming the property that should be skipped
typeMap.addMappings(mapper -> mapper.skip(Employee::setSalary)); 
typeMap.map(employeeDto);

```

## Type Converting

Sometimes the information we receive from the database can be of the incorrect type.

In that case, we can tell Model Mapper to try to convert the properties to the type that we need.

We can achieve this with additional custom configuration.

```java
// Java 7

ModelMapper modelMapper = new ModelMapper();

Converter<String, String> stringConverter = new AbstractConverter <String, String>() {
    @Override
    protected String convert(String s) {
        return s == null ? null : s.toUpperCase(); // Convert strings to uppercase
    }
};

PropertyMap<EmployeeDto, Employee> employeeMap = new PropertyMap<EmployeeDto, Employee>() {
    @Override
    protected void configure() {
        //    1. 
        using(stringConverter).map().setFirstName(source.getName());
    }
};

modelMapper.addMappings(employeeMap).map(employeeDto, employee);

// 1. Using the convention we created
```

Again, there is a difference in the syntax between Java 7 and Java 8

## Converting Properties in Java 8

```java
ModelMapper modelMapper = new ModelMapper();
Converter<String, String> toUppercase 
    = ctx -> ctx.getSource() == null ? null : ctx.getSource().toUppercase();

TypeMap<EmployeeDto, Employee> typeMap = 
    mapper.createTypeMap(EmployeeDto.class, Employee.class)
    .addMappings(mapper -> mapper.using(toUppercase)
        .map(EmployeeDto::getName, Employee::setFirstName));

typeMap.map(employeeDto);
```

[/slide]

