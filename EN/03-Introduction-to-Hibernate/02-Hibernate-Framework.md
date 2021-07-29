[slide hideTitle]

# Hibernate Framework

Hibernate is an open-source Java ORM framework that handles mapping an object-oriented model to a relational database.

It is implemented by the configuration of an **XML file** or by using **Java Annotations.**

This framework acts as an additional layer on top of JDBC and allows us to implement a database-independent **persistence layer**.

It generates all the required SQL statements to replicate all operations to the database.

Hibernate abstracts implementations from developers, providing a simplified experience.

It automatically performs usual operations, including:
  - **Connecting** to the database
  - Writing **queries** for CRUD operations

Using an ORM framework such as Hibernate improves our productivity by giving us a high-level-oriented API and removing the need to write plain SQL.

It improves application performance, maintainability, and portability, providing us with a way to write cleaner and more concise code in the process.

[/slide]

[slide hideTitle]

# Java ORM Approaches

We have **two** different approaches to **Java ORM:**

- **POJO** (Plain Old Java Objects) + **XML mappings**

  * a **capable** but deprecated procedure
  * implemented in "classic" **Hibernate**

- **Annotated Java classes** mapped to **database tables**

  * an approach based on **Java annotations and XML**
  * easier to **implement** and **maintain**

[/slide]

[slide hideTitle]

# Hibernate Configuration

## Adding Maven to Your Project

Let us take a look at the `Pom.xml` **file**:

```js
 <dependencies>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId> // Hibernate core
            <version>5.4.22.Final</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId> // MySQL connector
            <version>8.0.21</version>
        </dependency>    
</dependencies>
```

As shown above, you must include `hibernate-core` as a dependency in your Maven configuration.

## Database Configuration

Once you have added the required dependencies, you need to tell Hibernate to which database you want to connect, and which dialect it should use.

Dialects enable us to implement a database-independent persistence layer by transparently adapting our mappings and queries.

You must always verify that you are using the correct dialect for your database system and version.

This is the structure of the `hibernate.cfg.xml` file:

```js
<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE hibernate-configuration // Hibernate configuration tag
        PUBLIC "-//Hibernate/Hibernate Configuration DTD//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
    <session-factory>
        <property name="hibernate.dialect">
            org.hibernate.dialect.MySQL8Dialect
        </property>
        <property name="hibernate.connection.driver_class">
            com.mysql.jdbc.Driver  
        </property>
        // Connection Settings
        <property name="hibernate.connection.url">  
            // Connection String 
            jdbc:mysql://localhost:3306/school?createDatabaseIfNotExist=true 
        </property>
        <property name="hibernate.connection.username">
            root 
        </property>
        <property name="hibernate.connection.password">
            1234 
        </property>
        <property name="hbm2ddl.auto">
            update 
        </property>
        <!-- List of XML mapping files -->
        <mapping resource="student.hbm.xml"/> // Mapping files
    </session-factory> 
</hibernate-configuration>
```

This file contains the configuration for our database and session.

The database configuration contains six properties:

- JDBC connection URL - `hibernate.connection.url`
- username - `hibernate.connection.username`
- password - `hibernate.connection.password`
- driver class - `hibernate.connection.driver_class`
- auto strategy - `hbm2ddl.auto`
- Hibernate dialect - `hibernate.dialect`

[/slide]

[slide hideTitle]

# Hibernate Implementation: Example

To create an application, first we need to build the **POJO** classes.

Here we have a simple Java class with some **fields**, **constructor**, **getters** and **setters**.

```java
public class Student {
  private int id;
  private String name;
  private LocalDate registrationDate;

  // Constructor, getters, and setters
}
```

## Mapping

Now, we must create and configure our `student.cfg.xml` mapping file.

```js
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE hibernate-mapping PUBLIC // Mapping file
        "-//Hibernate/Hibernate Mapping DTD//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
    <class name="entities.Student" table="students"> // Class mapping
        <id name="id" column="id"> // Field mapping
            <generator class="identity" />
        </id>

        <property name="name" column="first_name" />
        <property name="registrationDate" column="registration_date"/> // Field mapping
    </class>
</hibernate-mapping>
```

## Sessions

Next, we need to configure our **Main** class too.

```java
public class Main {
    public static void main(String[] args) {
        Configuration cfg = new Configuration(); // Service Registry
        cfg.configure();
        SessionFactory sessionFactory = cfg.buildSessionFactory();
        Session session = sessionFactory.openSession(); // We need to open the session
        session.beginTransaction();

        // After we are done, we must commmit our transaction
        session.getTransaction().commit(); 
        session.close();
    }
}
```

## Data Storage

This is how we **save** our objects after the transaction:

```java
public static void main(String[] args) {

    // Logic goes here

    session.beginTransaction();
    
    Student example = new Student();
    session.save(example); // Saving the object

    session.getTransaction().commit();
    session.close();
    }
}
```

## Retrieving Data by Get

This example illustrates data **retrieval** using the `get()` method:

```java
public static void main(String[] args) {

    // ...

    session.beginTransaction();
    
    // We get the object using the method
    Student student = session.get(Student.class, 1); 

    session.getTransaction().commit();
    session.close();
}
```

## Retrieving Data by Query

We can **retrieve** data by queries too:

```java
public static void main(String[] args) {

    session.beginTransaction();

    // We are getting list of objects
    List<Student> studentList = 
    session.createQuery("FROM Student " , Student.class).list(); 

    for (Student student : studentList) {
        System.out.println(student.getId());
    }

    session.getTransaction().commit();
    session.close();
}
```

[/slide]

[slide hideTitle]

# Hibernate Query Language - HQL

Hibernate Query Language extends upon SQL, allowing us to utilize **object-oriented programming** in our **SQL** queries.

The difference between both is that Hibernate Query language is fully object-oriented, supporting the concepts of **inheritance** and **polymorphism**.

We can write independent queries in **HQL**, converted to **SQL** at **runtime**.

HQL can even return the child objects as a part of the query result.

Let us take a look at these simple examples:

### `SELECT`:

```sql
FROM Student
```

### `SELECT + WHERE`:

```sql 
FROM Student WHERE name = 'John'
```

### `SELECT + JOIN`:

```sql 
FROM Student AS s 
JOIN s.major AS major
```

[/slide]

[slide hideTitle]

# Retrieve Data by Criteria

This is how we can obtain information by `criteria`:

```java
public static void main(String[] args) {
    // Logic here...
    session.beginTransaction();

    CriteriaBuilder builder = session.getCriteriaBuilder();
    CriteriaQuery criteria = builder.createQuery();
    Root<Student> r = criteria.from(Student.class);

    criteria.select(r).where(builder.like(r.get("name"),"P%"));

    List<Student> studentList = session.createQuery(criteria).getResultList(); 

    for (Student student : studentList) {
        System.out.println(student.getName());
    }

    session.getTransaction().commit();
    session.close();
}
```

In this example we try to retrieve all students with names, beginning with "P".

[/slide]

