# Java Persistence API

[slide hideTitle]

# About JPA

The Java Persistence API (JPA) is a Java specification for accessing, persisting, and managing data between Java objects or classes and a relational database.

This concept is known as ORM (**Object-relational mapping**).

JPA operates with POJO entities with annotations or XML mappings.

It maps relationships between tables as associations between classes.

[/slide]

[slide hideTitle]

# JPA Entities

Entities in JPA are POJO classes representing our data.

Every instance of our entity represents a row in our table.

JPA entities do not require interfaces.

Our **getters** and **setters** can contain logic inside (such as validation).

## Entity Class: `Student`

Let us take a look at simple example of an entity class, named `Student`:

```java
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

These are the **six** most commonly used **annotations** in JPA:

## @Entity

The `@Entity` annotation declares the class as an **entity or a table**.

We can apply this annotation on **classes**, **enumerations** or **interfaces**.

## @Table

The `@Table` annotation defines the **table's name**.

Also, it specifies which **table** is mapped by which **entity**.

## @Basic

`@Basic` specifies the **non-constraint fields** explicitly.

It is an **optional** annotation.

When we **do not specify** the basic annotation, the default values of this annotation are applied.

## @Transient

The `@Transient` annotation specifies the property that is **not persistent**.

This means that the value is not stored in the database.

## @ID

`@ID` specifies the property. It is used for the **identity** (primary keys) of the class.

## @GeneratedValue 

`@GeneratedValue` specifies how we can **initialize** identity attributes.

## @Column

The `@Column` annotation specifies the **column attribute** for the **persistence** property.

If no **column** annotation is applied, the default values apply.

[/slide]

[slide hideTitle]

# JPA Configuration

## `persistence.xml`

The easiest configuration approach is adding a `persistence.xml` file to the `META-INF` directory, located inside `src/main/resources/`:

```java
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

Here you can see an example configuration which tells Hibernate to connect to a **MySQL** database on `localhost:3306`.

The `<persistence-unit>` element defines a set of entities which represent the data contained in a data store, and will be managed by an `EntityManager`.

Inside `<properties>`, we have all the necessary DB information, such as the **url, username, passsword, and dialect**.

We can also use an optional `<description>` element to provide information about the persistence unit.

## `pom.xml`:

```java
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

[/slide]

[slide hideTitle]

## JPA Save Objects

Let us take a look at the syntax for **saving** objects:

```java
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

In this example, we attempt to persist a `student` entity with a name of "Teo" into the database.

[/slide]

[slide hideTitle]

# JPA Relations

Consider the following diagram.

It will assist you in creating your own entity.

[image assetsSrc="Hibernate(5).png" /]

[/slide]

[slide hideTitle]

# Persistence Context (PC) and Entities

The persistence context (PC) is responsible for dealing with persistent data.

[image assetsSrc="Hibernate(6).png" /]

Persistent data can have four different states, depending on the persistence context and the database:

- `transient` - a newly created entity that is unassociated with a persistence context

- `persistent` (`managed`) - an entity that has an identifier and is associated with a persistence context
    * it may not exist in the database yet

- `detached` - an entity that has an identifier, but is unassociated with a PC

- `removed` - an entity that is associated with a PC and has an identifier, but is marked for erasure from the DB

[/slide]

[slide hideTitle]

# Entity Object Life Cycle

The life cycle of an entity object has four stages.

[image assetsSrc="Hibernate(7).png" /]

- **New** - not yet stored in the database and unassociated with an `EntityManager`

- **Managed** - persisted in the database by using the `persist` method

- **Removed** - retrieved and scheduled for erasure by the `remove` method

- **Detached** - applies to objects, disconnected from the `EntityManager`

[/slide]

[slide hideTitle]

# JPA Write Data Methods

## `persist()`

The `persist()` method adds a given entity object into the database:

```java
Car car = new Car();
person.setBrand("Mercedes");
session.persist(car);
```

## `remove()`

This method removes given entity from the DB.

Remove something from a database begins with retrieving it.

While the transaction is active, `remove()` can be used:

```java
Person employee =  em.find(Person.class, 1L);
    if (employee != null) {
      em.remove(employee);
    }
```

## `refresh()`

`refresh()` renews the state of the instance from the database, **overwriting** changes made to the entity, if any.

## `detach()`

The `detach()` method **removes** the object from the persistence context.

Unflushed changes made to the entity will **not be synchronized** to the database.

## `merge()`

`merge()` synchronizes the state of a detached entity with the PC. 

It is required only for detached entities.

Merging **does not** directly update the object in our database. 

It **merges** the changes made into the persistence context.

## `contain()`

The `contain()` method returns a **boolean** parameter that shows if the given entity is managed by the **persistence context** (PC).

## `flush()`

`flush()` saves the PC changes in the database.

Flushing has no effect when the transaction is **not active**.

## `find()`

This method executes a `SELECT` query by primary key:

```java
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
