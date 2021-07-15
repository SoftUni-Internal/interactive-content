# Data Transfer Objects

[slide hideTitle]

# Concept

After learning how to write queries and get our data from the database, now it's time to learn how to project this data, to receive only the information that we need.

In our Spring-Data-Intro lesson, we learned what is **Spring-Service** and what's the purpose of **Services** in general.

It's time to re-visit this module and learn how **the services** communicate with the rest of the app.

Let's first remind ourselves what is a **service**.

Services are an architecture object, which is meant to keep our business logic, providing an interface to the rest of the app, through which it can access the logic.

Services' benefits are that we can re-use our logic wherever we need it in, as well as dividing it and providing an extra layer of abstraction.

They are widely used through different projects and every even slightly bigger project should be using services.

An example where services get handy is for instance if we have a web app in production and we want to release a mobile app as well, the mobile app can access and re-use the same functionality as our web app project.

The services that we had learned through our study program are data-services, which communicate with the database either directly or through repositories.

### How services communicate? 

**Data Transfer Object** also known as DTOs are container classes that carry data between processes.

Services use DTOs to communicate with the rest of the app.

In their core, they are simple POJO - "**Plain Old Java Objects**" with no logic at all but only expose properties, not methods.

An example of usage of DTO is when a service method that communicates with the database is called, it would return as an answer (**the return type**) in the form of DTO. 

In our case and for the rest of the lecture when we refer to a DTO we should understand, the return type of our **Services.**

Let's concatenate everything in a single sentence.

**DTOs are a way of transmitting aggregated data from entities**

[/slide]

[slide hideTitle]

# Entity Usage

If our app is a really simple one and we communicate with a database and we need the full information of an entity, it's fine if we communicate without a DTO but directly with the entity, otherwise, we accomplish nothing but replication of the object entity.

Here is a scheme of how the normal communication with the database in a Web Application happens.

[image assetsSrc="Spring-Data-AutoMapping-Objects.png" /]

One more benefit of DTOs is that they bring the information we need.

For instance, if we need information about our DB entity **Person** like his **name and age**, but also information which is in another table connected with foreign key about his **address city**.

Our DTO can combine the information and ask for it, which we will receive with a single query and return in a single object instead of two. 

[/slide]

[slide hideTitle]

# DTO Usage

Now let's see what a DTO would look like with code .

```java
// Employee.java
@Entity
@Table(name = "employees")                  // That is our entity from the database
public class Employee {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "salary")
    private BigDecimal salary;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
    }


// Address.java
@Entity
@Table(name = "addresses")                  // Entity for the addreses from the database
public class Address {

    @Basic
    private String city;
}

// EmployeeDto.java
public class EmployeeDto {                  // Our DTO object, which combines information for our entity
                                            // from two tables
    private String firstName;
    private BigDecimal salary;
    private String addressCity;
}

```
[/slide]
