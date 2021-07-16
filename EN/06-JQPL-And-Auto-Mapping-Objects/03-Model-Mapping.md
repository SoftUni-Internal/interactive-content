# Model Mapping

[slide hideTitle]

# Model Mapper

In the practice, we often need to transfer data between similar objects. 

Take an instance with the entities, we want to transfer similar properties from the entity model to a DTO. 

This is a pretty straight forward job, where 80% of it would be just listing a property to another property. 

Just like that. 

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
@Entity                                     // We have our entity
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

public class EmployeeDto {                  //and then our DTO 

    private String firstName;
    private String last_name;
    private BigDecimal salary;
    private String addressCity;
}

@Service                                    // If we use a service, the mapping looks like this.
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

Do you see how monotonous this job is? 

Luckily, we have a tool which can do the job for us.

Model mapping is an easy way to convert one model to another.

It is based purely on conventions and as long as we keep this convention it will save us from writing a lot of monotonous code.

In our case, as we are mapping entities from the database to DTOs, what will happen is that the Model Mapper will stand between them creating the query and make a projection and map it for us. 



The use of conventions is to determine how property and values are mapped to each other.

[image assetsSrc="Spring-Data-AutoMapping-Objects(1).png" /]

[/slide]

[slide hideTitle]

# Adding Model Mapper

To start exploring **Model Mapper**, begin by adding it to your project.

1. Add as maven dependency.
```java
//pom.xml
<dependency>
    <groupId>org.modelmapper</groupId>
    <artifactId>modelmapper</artifactId>
    <version>2.3.2</version>
</dependency>
```

2. Than we just initialize the mapper where we need it and use it as shown.
```java
ModelMapper modelMapper = new ModelMapper();
                                            //1         2
EmployeeDto employeeDto = modelMapper.map(employee, EmployeeDto.class); 

//1. Source of information.
//2. Desitnation object(DTO).
```

## Simple Mapping Entity to DTO

Model Mapper's power won't stop at mapping just the simple properties, like string, int BigDecimal, etc., with it you can map even nested properties. 

Let's take for instance.

```java
@Entity
@Table(name = "employees")                  // Here we have our normal Employee Entity connected to table `employees`
public class Employee {

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "salary")
    private BigDecimal salary;
    @ManyToOne                               // Many to one relationship to the entity Address
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
    private String addressCity;             // When naming first the table and then the property you want, 
}                                           // Model Mapper will get in the property object recursively and take its property value.
```
## Explicit Mapping

As you have seen Model Mapper is a really powerful tool and using just conventions we can achieve mapping even of nested objects properties.

It has its limitations, as sometimes fields differ too much or they are from different types then the mapping can't be done.

In this case, some manual mapping is needed.

When we get to the point where we have a second layer of nested mapping, Model Mapper will need little help to manage to map them properly.


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
    private Adress address;
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

// ConsoleRunner.java
ModelMapper modelMapper = new ModelMapper();
PropertyMap<EmployeeDto, Employee> employeeMap = new PropertyMap<EmployeeDto, Employee>() {
          @Override
          protected void configure() {
                map().setFirstName(source.getName());
        // Add mappings for other fields
                map().setAddressCity(source.getAddress().getCity().getName());           // Here we use the getters to help Model Mapper find the right string we want.
          }
};

modelMapper.addMappings(employeeMap).map(employeeDto,employee);
```

There is a difference in the syntax **explicit mapping** in Java 7 and Java 8. 

## Explicit Mapping DTO to Entity - Java 8

```java
// Java 8
// ConsoleRunner.java

ModelMapper modelMapper = new ModelMapper();
TypeMap<EmployeeDto, Employee> typeMap = mapper.createTypeMap(EmployeeDto.class, Employee.class);
typeMap.addMappings(m -> m.map(src -> src.getName(), Employee::setFirtsName)); 
typeMap.map(employeeDto);
```

## Validation 

Sometimes we can not be sure if Model Mapper can map all entities.

For these cases, we are given a tool with which we can assure that all the entities are mapped.

It's a method that validates if all properties can be mapped successfully.

If Model Mapper can't map it correctly it will throw a proper exception from which we find the problem.

Let's see it with code.

```java
ModelMapper modelMapper = new ModelMapper();
                                //1.               2.
 modelMapper.createTypeMap(EmployeeDto.class, Employee.class);
 modelMapper.validate();                                            // validate method, which throws if mapping can't be done.

//1. Source
//2. Destination


//Exception
1) Unmapped destination properties found in TypeMap[EmployeeDto -> Employee]:

    com.persons.domain.entities.Employee.setAddress()
    com.persons.domain.entities.Employee.setId()
    com.persons.domain.entities.Employee.setBirthday()
```

To fix the exception we have to check if every property is named by convention or create a custom configuration.

## Skipping Properties

Sometimes when we are lazy and we decide to re-use already existing DTO, we may face the problem of not needing some of the properties.

To not include the properties in our query we can create a custom configuration where we name the properties that we don't want to be mapped.

With code.
```java
//Java 7
ModelMapper modelMapper = new ModelMapper();
PropertyMap<EmployeeDto, Employee> employeeMap = new PropertyMap<EmployeeDto, Employee>() {
            @Override
            protected void configure() {
                skip().setSalary(null);                 // With the method skip we show to Model Mapper that we don't need the given property.
            }
        };

modelMapper.addMappings(employeeMap).map(employeeDto,employee);
```

In Java 8 we have shorter syntax.
```java
typeMap.addMappings(mapper -> mapper.skip(Employee::setSalary));        // That's enough to name the property which should be skipped.
typeMap.map(employeeDto);

```

## Type converting

Sometimes the information we receive from the database can be in different type than we need it.

For these cases, we can tell Model Mapper to try to convert the properties to the type that we need.

This can be done with additional custom configuration.

```java
// Java 7

ModelMapper modelMapper = new ModelMapper();
Converter<String, String> stringConverter = new AbstractConverter<String, String>() {
            @Override
            protected String convert(String s) {
                return s == null ? null : s.toUpperCase();              //Convert Strings to Upper Case
            }
        };

PropertyMap<EmployeeDto, Employee> employeeMap = new PropertyMap<EmployeeDto, Employee>() {
            @Override
            protected void configure() {
                        //1.                                                
                using(stringConverter).map().setFirstName(source.getName());
            }
        };

modelMapper.addMappings(employeeMap).map(employeeDto,employee);

// 1. Using the convention we created.
```

Again there is a difference in the syntax between Java 7 and Java 8

## Converting Properties - Java 8

```java
// Java 8 
ModelMapper modelMapper = new ModelMapper();
Converter<String, String> toUppercase = ctx -> ctx.getSource() == null ? null : ctx.getSource().toUppercase();
TypeMap<EmployeeDto, Employee> typeMap = 
mapper.createTypeMap(EmployeeDto.class, Employee.class).addMappings(mapper -> mapper.using(toUppercase).map(EmployeeDto::getName, Employee::setFirstName));
typeMap.map(employeeDto);
```

[/slide]
