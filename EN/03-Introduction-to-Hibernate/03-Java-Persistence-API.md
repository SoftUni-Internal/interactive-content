[slide hideTitle]

# Java Persistence API

The Java Persistence API (JPA) is a Java specification for accessing, persisting, and managing data between Java objects or classes and a relational database.

This concept is known as ORM (**Object-relational mapping**).

JPA operates with POJO entities with annotations or XML mappings.

It maps relationships between tables as associations between classes.

# JPA Entities

Entities in JPA are just POJO classes representing our data.

Every instance of our entity represents a row in our table.

JPA entities do not require interfaces.

Our **getters** and **setters** can contain logic inside (such as validation).

Let us take a look at simple example of an entity class:

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

[slide hideTitle]

# Annotations

These are the six most commonly used annotations in JPA:

## @Entity

The`@Entity` annotation declares the class as an entity or a table.

We can apply this annotation on **classes**, **enumerations** or **interfaces**.

## @Table

The `@Table` annotation defines the table name.

Also, it specifies which table is mapped by which entity.

## @Basic

`@Basic` specifies the non-constraint fields explicitly.

It is an **optional** annotation.

When we **do not specify** the basic annotation, the default values of this annotation are applied.

## @Transient

The `@Transient` annotation specifies the property that is **not persistent**.

This means that the value is not stored in the database.

## @ID

`@ID` annotation specifies the property. It is used for the identity (primary keys) of the class.

- `@GeneratedValue` - specifies how we can initialize identity attributes

## @Column

The `@Column` annotation specifies the column attribute for the persistence property.

If no **column** annotation is applied, the default values apply.


[/slide]

[slide hideTitle]

# JPA Configuration

## Pom.xml

``` java
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0  http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
            <groupId>com.javawebtutor</groupId>
            <artifactId>JPAMavenExample</artifactId>
            <packaging>jar</packaging>
            <version>1.0-SNAPSHOT</version>
            <name>JPAMavenExample</name>
            <url>http://maven.apache.org</url>
    <dependencies>
        <dependency>
            <groupId>org.eclipse.persistence</groupId>
            <artifactId>javax.persistence</artifactId>
            <version>2.2.0</version>
        </dependency>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>5.4.22.Final</version>
        </dependency>
        <dependency>
         <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.21</version>
        </dependency>
    </dependencies>
</project>
```

## Persistence.xml

``` java
<?xml version="1.0" encoding="UTF-8"?>
<persistence xmlns="http://java.sun.com/xml/ns/persistence" version="2.0">
   <persistence-unit name="school">
        <properties>
         <property name = "hibernate.connection.url" value="jdbc:mysql://localhost:3306/school?createDatabaseIfNotExist=true"/>
         <property name = "hibernate.connection.driver_class" value="com.mysql.jdbc.Driver"/>
         <property name = "hibernate.connection.username" value="root"/>
         <property name = "hibernate.connection.password" value="1234"/>
         <property name = "hibernate.dialect" value="org.hibernate.dialect.MySQL8Dialect"/>
         <property name = "hibernate.hbm2ddl.auto" value="update"/>
         <property name = "hibernate.show_sql" value = "true" />
      </properties>
   </persistence-unit>
</persistence>
```

## JPA Save Objects

Let's take a look at the syntax of how we save objects:

``` java
public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("school");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Student student = new Student("Teo", new Date());
        em.persist(student);
        em.getTransaction().commit();
    }
}
```
[/slide]

[slide hideTitle]

# JPA Relations

[image assetsSrc="Hibernate(5).png" /]

[/slide]

[slide hideTitle]

# Persistence Context and Entities

[image assetsSrc="Hibernate(6).png" /]


[/slide]

[slide hideTitle]

# Entity Object Life Cycle

[image assetsSrc="Hibernate(7).png" /]


[/slide]

[slide hideTitle]

# JPA Write Data Methods

- `persist()` - adds a given entity object into the DB

``` java
Car car = new Car();
person.setBrand("Mercedes");
session.persist(car);
```

- `remove()` - removes given entity from DB

Remove something from a database begins with retrieving it.

While the transaction is active, `remove()` can be used.

``` java
Person employee =  em.find(Person.class, 1L);
    if (employee != null) {
      em.remove(employee);
    }
```

- `refresh()` - renews the state of the instance from the database, **overwriting** changes made to the entity, if any

- `detach()` - **removes** the object from the persistence context

Unflushed changes made to the entity will **not be synchronized** to the database.

- `merge()` - synchronizes the state of a detached entity with the PC. It is required only for detached entities

Merging **does not** directly update the object in our database. 

It **merges** the changes made into the persistence context.

- `contain()` - returns **boolean** param to check if the given entity is managed by the persistence context (PC)

- `flush()` - saves the local changes in the database

Flushing has no effect when the transaction is **not active**.

- `find()` - executes a **SELECT** query by primary key

``` java
public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("school");

        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.find(Student.class,1) // Get object
        em.getTransaction().commit();
    }
```

In the example above, we pass the **class** of the needed entity and the **id** or **primary key** on the particular entity.

[/slide]
