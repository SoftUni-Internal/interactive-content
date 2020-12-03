[slide]

# Data Transfer Objects

After learning how to write queries and get our data from the database, now it's time to learn how to project this data, in order to recieve only the information that we need.

In our Spring-Data-Intro lesson we learned what is **Spring-Service** and what's the purpose of **Services** in general.

Now it's time to re-visit this module and learn how **the services** communicate with the rest of the app.

Let's first remind ourselves what is a **service**.

Services are an architecture object, which is meant to keep our business logic inside, providing an interface to the rest of the app, through which it can access the logic.

Services' benefits are that we can re-use our logic wherever we need it in, as well as deviding the logic and providing an extra layer of abstraction.

They are widely used through different projects and every even slighly bigger project should be using services.

An example where services get handy is for instance if we have a web app in production and we want to release a mobile app as well, the mobile app can access and re-use the same functionallity as the our web app project.

The services that we had learned through our study program are data-services, which communicate with the database either direclty or through repositories.

### How services communicate? 

**Data Transfer Object** also known as DTOs are container classes which carry data between proccesses.

Services use DTOs to communicate with the rest of the app.

In their core they are simple POJO - "**Plain old java classes**" with no logic at all but only expose properties not methods.

An example of usage of DTO is when a service method which communicaticates with the database is called, it would return as an answer (**the return type**) in the form of DTO. 

In our case and for the rest of the lecture when we refer to an DTO we should understand, the return type of our **Services.**

**Take a note**
If our app is really simple and when we communicate with the database we need the full information of an entity, 

it's fine if we communicate without an DTO but directly with the entity, 

otherwise we accomplish nothing but replication of the object entity.

Here is a scheme of how the normal communication with the databse in a Web Application happens.

[image assetsSrc="Spring-Data-AutoMapping-Objects.png" /]

One more benefit of DTOs is that they bring the information we need.

For instance if we need information about our DB entity **Person** like his **name and age**,

but also information which is in another table connected with foreign key about his **address city**.

Our DTO can combine the information and ask for it, which we will recieve with a single query and return it in a single object instead of two. 

Now let's see the same but with code what a DTO would look like.

```java
// Employee.java
@Entity
@Table(name = "employees")                  //That's our entity from the database.
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
@Table(name = "addresses")                  // Entity for the addreses from the database.
public class Address {

    @Basic
    private String city;
}

// EmployeeDto.java
public class EmployeeDto {                  // Our DTO object, which combines information for our entity
                                            // from two tables.
    private String firstName;
    private BigDecimal salary;
    private String addressCity;
}

```
[/slide]