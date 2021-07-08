[slide hideTitle]

# Java Persistence API

With JPA (Java persistence API) we can use our **CRUD** functions information from relational databases to our Java objects.

This concept is called ORM (**Object-relational mapping**).

JPA operates with POJO entities with annotations or XML mappings.

Java persistence API maps relationships between tables as associations between classes.

# JPA Entities

Entities in JPA are just POJO classes that represent our data.

Every instance of our entity represents a row in our table.

JPA entities do not require interfaces.

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

[slide hideTitle]

# Annotations

We will take a look at the most important annotations in JPA:

## @Entity

`@Entity` annotation declares the class as an entity or a table.

We can apply this annotation on **classes**, **enumerations** or **interfaces**.

## @Table

`@Table` annotation is used to specify the table name.

Also, it specifies which table is mapped by which entity.

## @Basic

`@Basic` annotation specifies the non-constraint fields explicitly.

This is an **optional** annotation.

When we **don't specify** the basic annotation, the default values of this annotation are applied.

## @Transient

`@Transient` annotation specifies the property that is **not persistent**, i.e., the value is never stored in the database.

## @ID

`@ID` annotation specifies the property. It is used for the identity (primary keys of a table) of the class.

- `@GeneratedValue` - Specifies how the identity attributes can be initialized.

## @Column

`@Column` annotation specifies the column attribute for the persistence property.

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

Let's take a look at syntax of how we save objects:

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

- `persist()` method adds a given entity object into the DB. 

``` java
Car car = new Car();
person.setBrand("Mercedes");
session.persist(car);
```

- `remove()` method removes given entity from DB.

In order to remove something from our DB, we must first retrieve it.

While the transaction is active, `remove()` can be used.

``` java
Person employee =  em.find(Person.class, 1L);
    if (employee != null) {
      em.remove(employee);
    }
```

- `refresh()` method refresh the state of the instance from the database, **overwriting** changes made to the entity if any.

- `detach()` method **removes** the object from the persistence context. 

Unflushed changes that are made to the entity will **not be synchronized** to the database.

- `merge()` method synchronizes the state of a detached entity with the PC. It is required only for detached entities.

Merging **does not** directly update the object in our database. It **merges** the changes that were made into the persistence context.

- `contain()` method returns **boolean** param to check if the given entity is managed by the persistence context (PC).

- `flush()` method saves the changes that are made from PC in the Database.

Flushing it has no effect when the transaction is **not active**.

- `find()` method executes a **SELECT** query by primary key.

``` java
public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("school");

        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.find(Student.class,1) // Get object
        em.getTransaction().commit();
    }
```

In the example above, we are passing the **class** of the entity that is being needed and the **id** or **primary key** on the particular entity.



[/slide]
