[slide]

# Java Persistence API

With JPA (Java persistence API) we can use our **CRUD** functions information from relational databases to our Java objects.

This concept is called ORM (**Object-relational mapping**).

JPA operates with POJO entities with annotations or XML mappings.

Java persistence api maps relationships between tables as associations between classes.

# JPA Entities

Entities in JPA are just POJO classes that represents our data.

Every instance of our entity represents a row in our table.

JPA entities does not require interfaces.

Our **getters** & **setters** can contain logic inside (like validation)

Let's take a look at simple example of an entity class:

``` java
@Entity @Table(name = "students") // Set table name
public class Student {
    @Id // Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Identity strategy
    @Column(name = "id") // Column name
    private int id;
    @Column(name = "name", length = 50) // Column name length
    private String name;
    @Column(name = "birth_date") // Column name
    private Date birthDate;

    // Getters and setters 
}
```

[/slide]

[slide]

# Annotations

We will take a look at most important annotations in JPA:

## @Entity

`@Entity` annotation declares the class as an entity or a table.

We can apply this annotation on **classes**, **enumerations** or **interfaces**.

## @Table

`@Table` annotation is used to specify the table name.

Also, it specifies which table is mapped by which entity.

## @Basic

`@Basic` annotation specify the non-constraint fields explicitly.

This is an **optional** annotation.

When we **don't specify** the basic annotation, the default values of this annotation are applied.

## @Transient

`@Transient` annotation specifies the property that is **not persistent**, i.e., the value is never stored in the database.

## @ID

`@ID` annotation specifies the property. It is used for identity (primary keys of a table) of the class.

- `@GeneratedValue` - Specifies how the identity attributes can be initialized.

## @Column

`@Column` annotation specifies the column attribute for the persistence property.

If no **column** annotation is applied, the default values apply.



[/slide]

[slide]

# JPA Configuration

## Pom.xml



[/slide]