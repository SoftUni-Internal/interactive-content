# Data Transfer Objects

[slide hideTitle]

# Concept

We previously discovered how to write queries and get our data from the database.

Now we will see how we can project that data to receive only the information we need.

In our Spring Data introductory lesson, we learned what a **Spring service** is and the purpose of **Services** in general.

It is time to revisit this module and learn how **services** communicate with the rest of the application.

As you may know, services are architecture objects that store our business logic.

They provide an interface to the rest of the application for accessing the logic.

This approach allows us to reapply our logic in separate parts of our project, providing an extra layer of abstraction.

For instance, if we have a web application in production and we want to release a mobile app, the new project can access and reuse the same functionality as our web platform.

We mainly studied data services, which communicate with the database either directly or through repositories.

## How Services Communicate

**Data Transfer Objects**, also known as DTOs, are container classes that transmit data between processes.

Services use DTOs to communicate with the rest of the app.

At their core, they are POJOs ( "**Plain Old Java Objects**") without logic, as they only expose properties and not methods.

**DTOs are a way of transmitting aggregated data from entities.**

For example, when we invoke a service method that communicates with the database, its return type will be a DTO. 

[/slide]

[slide hideTitle]

# Entity Usage

If we have a simple application and interact with a database to obtain an entity's information, we can communicate without a DTO but directly with the entity.

Otherwise, we replicate the object entity.

Here is a scheme of a typical database interaction in a web application.

[image assetsSrc="Spring-Data-AutoMapping-Objects.png" /]

Another benefit of DTOs is that they convey the exact information we need.

For instance, we may need information about a **Person** entity, like their **name and age**, but we also want to obtain their **address** in another table connected with a foreign key.

Our DTO can combine the information and demand it using a single query and returning all data a single object. 

[/slide]

[slide hideTitle]

# DTO Usage

This example illustrates how to use a DTO to **combine data** from multiple tables:

```java
// Employee.java
@Entity
@Table(name = "employees")          // This is our entity from the database
public class Employee {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "salary")
    private BigDecimal salary; 
    private BigDecimal salary;
    private BigDecimal salary; 

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
 }


// Address.java
@Entity
@Table(name = "addresses")          // The entity for the addresses from the database
public class Address {

    @Basic
    private String city;
}

// EmployeeDto.java
public class EmployeeDto {          // Our data transfer object that combines 
                                    // information for our entity from two tables
    private String firstName;
    private BigDecimal salary;
    private String addressCity;
}
```

The code above displays **three** classes:

- `Employee` - represents an **"employee"** entity
- `Address` - holds the **"city"** property of an employee
- `EmployeeDto` - responsible for **combining data** from the "employees" and "addresses" tables
  
[/slide]

